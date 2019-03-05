# (C) Copyright IBM Corp. 2019
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import collections
import abc
import tensorflow as tf
from tensorflow.python.ops import lookup_ops
from tensorflow.python.layers import core as layers_core

class Seq2SeqModel(object):
    
    def __init__(self, hp):
        self.hp=hp
        self.dtype=tf.float32
        
        self.src_lookup = lookup_ops.index_table_from_file(self.hp.src_vocab, default_value=0)
        self.tgt_lookup = lookup_ops.index_table_from_file(self.hp.tgt_vocab, default_value=0)
        
        self.initialize_parallel_corpus()
                
        self.batch_size = tf.size(self.iterator.source_sequence_length)
        self.global_step = tf.Variable(0, trainable=False)
        self.epoch = tf.Variable(0, trainable=False)
        #TODO other initialization options?
        initializer = tf.random_uniform_initializer(minval=-hp.init_weight, 
                                                    maxval=hp.init_weight, 
                                                    seed=hp.random_seed)
        tf.get_variable_scope().set_initializer(initializer)

        
        self.embedding_encoder = self.create_embeddings("encoder", self.hp.src_vocab_size)
        self.embedding_decoder = self.create_embeddings("decoder", self.hp.tgt_vocab_size)
        

        with tf.variable_scope("seq2seq_network"):
            with tf.variable_scope("decoder/output_layer"):
                self.output_layer = layers_core.Dense(hp.tgt_vocab_size, use_bias=False, name= "output_layer")
                
        with tf.variable_scope("seq2seq", dtype=self.dtype):
            # get inter-lingual vector representation of the sequence
            self.encoder_outputs, encoder_state = self.create_encoder()
            # decode to target language
            #(logits, loss, final_state, sample_id) = 
            self.create_decoder(self.encoder_outputs, encoder_state)
        
        self.setup_computations()
               
        self.saver = tf.train.Saver(tf.global_variables(), max_to_keep=2)

    @abc.abstractmethod     
    def initialize_parallel_corpus(self):
        '''
        Implemented in inheriting classes.
        '''
        pass

                
    def create_embeddings(self, label, vocab_size):
        with tf.variable_scope("embeddings", dtype=self.dtype):                       
            with tf.variable_scope(label):
                embeddings = tf.get_variable("%s_embeddings" %label,
                                                 [vocab_size, self.hp.num_units],
                                                 dtype=self.dtype)
        return embeddings
    
    
    def create_encoder(self):
        source = tf.transpose(self.iterator.source) if self.hp.time_major else self.iterator.source
        
        with tf.variable_scope("encoder") as scope:     
            encoder_embedding_input= tf.nn.embedding_lookup(self.embedding_encoder, source)
            cell_list = []
            for i in range(self.hp.encoder_layers):
                cell_list.append (self.create_cell (layers=self.hp.encoder_layers, 
                                                               residual_layers=self.hp.encoder_residual_layers, 
                                                               current_step=i) )
                    
            encoder_cell = tf.contrib.rnn.MultiRNNCell (cell_list) if self.hp.encoder_layers > 1 else cell_list[0]
                
            outputs, final_state = tf.nn.dynamic_rnn (encoder_cell,
                                                                    encoder_embedding_input,
                                                                    dtype=scope.dtype,
                                                                    sequence_length=self.iterator.source_sequence_length,
                                                                    time_major=self.hp.time_major,
                                                                    swap_memory=True)
                
        self.encoder_state_list = [outputs]
        return outputs, final_state
    
    @abc.abstractmethod
    def get_dropout(self):
        '''
        Implemented in inheriting classes.
        '''
        pass


    def create_cell(self,
                    layers, 
                    residual_layers, 
                    current_step):
        dropout = self.get_dropout()
        cell =  tf.nn.rnn_cell.LSTMCell(self.hp.num_units, 
                                        forget_bias=self.hp.forget_bias,
                                        name='basic_lstm_cell')
        if dropout > 0.0:
            cell = tf.contrib.rnn.DropoutWrapper(cell=cell,
                                                 input_keep_prob=(1.0 - dropout))
        if current_step >= layers - residual_layers:
            cell= tf.contrib.rnn.ResidualWrapper(cell)
            
        cell = tf.contrib.rnn.DeviceWrapper(cell, 
                                            self.get_device(current_step, self.hp.num_gpus))        
        return cell
              
    
    def create_decoder(self, encoder_outputs, encoder_state):
        with tf.variable_scope("decoder") as scope:            
            
            (memory, source_sequence_length, encoder_state, batch_size) = self.prepare_decoder_input(encoder_outputs, encoder_state)    
                
            attention_mechanism=tf.contrib.seq2seq.BahdanauAttention (self.hp.num_units,
                                                         memory,
                                                         memory_sequence_length=source_sequence_length,
                                                         normalize=True)
            cell_list=[]
            for i in range(self.hp.decoder_layers):
                cell_list.append (self.create_cell (layers=self.hp.decoder_layers, 
                                                           residual_layers=self.hp.decoder_residual_layers, 
                                                           current_step=i) )
                
            decoder_cell = tf.contrib.rnn.MultiRNNCell (cell_list) if self.hp.decoder_layers > 1 else cell_list[0]
            decoder_cell = tf.contrib.seq2seq.AttentionWrapper (decoder_cell,
                                                                attention_mechanism,
                                                                attention_layer_size=self.hp.num_units,
                                                                alignment_history = self.is_alignment_history(),
                                                                name="attention" )
            decoder_cell = tf.contrib.rnn.DeviceWrapper (decoder_cell,
                                                         self.get_device (self.hp.decoder_layers -1, self.hp.num_gpus))
            
            decoder_initial_state = decoder_cell.zero_state(batch_size, scope.dtype).clone(cell_state=encoder_state) 
            
            self.run_decoder(decoder_cell, decoder_initial_state, scope)  

    

    def prepare_decoder_input(self, encoder_outputs, encoder_state):        
        memory = tf.transpose(encoder_outputs, [1, 0, 2]) if self.hp.time_major else encoder_outputs       
        source_sequence_length = self.iterator.source_sequence_length
        batch_size = self.batch_size        
        return (memory, source_sequence_length, encoder_state, batch_size)
 
    
    def is_alignment_history(self):
        return False

    
    @abc.abstractmethod
    def run_decoder(self, decoder_cell, decoder_initial_state, scope):
        pass


    def get_device(self, device_id, num_gpus):
        return "/cpu:0" if num_gpus==0 else "/gpu:%d" % (device_id % num_gpus)
      
    
    def get_logger(self):
        return self.logger

        
class ParallelDatasetIterator(collections.namedtuple("ParallelDatasetIterator", ("initializer", 
                                                                               "source", 
                                                                               "target_input", 
                                                                               "target_output", 
                                                                               "source_sequence_length", 
                                                                               "target_sequence_length") ) ):
    pass