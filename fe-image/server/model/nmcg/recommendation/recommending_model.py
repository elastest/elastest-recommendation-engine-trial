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

import logging
import tensorflow as tf
from tensorflow.python.ops import lookup_ops
from model.nmcg.core.seq2seq_model import Seq2SeqModel, ParallelDatasetIterator


class RecommendingModel(Seq2SeqModel):
    '''
    classdocs
    '''

    def __init__(self, hp):
        '''
        Constructor
        '''
        if not hasattr(self, 'logger'): self.logger = logging.getLogger("recommending")
        super().__init__(hp)
        
    
    def initialize_parallel_corpus(self):

        self.reverse_tgt_vocab_table = lookup_ops.index_to_string_table_from_file(self.hp.tgt_vocab,
                                                                                 default_value=self.hp.unk)
            
        self.src_placeholder=tf.placeholder(shape=[None], dtype=tf.string)
        src_dataset =tf.data.Dataset.from_tensor_slices(self.src_placeholder)
        self.batch_size_placeholder = tf.placeholder(shape=[], dtype=tf.int64)      
        src_eos_id=tf.cast(self.src_lookup.lookup(tf.constant(self.hp.eos)), tf.int32) 
            
        src_dataset = src_dataset.map(lambda src: tf.string_split([src]).values)
        src_dataset = src_dataset.map(lambda src: tf.cast(self.src_lookup.lookup(src), tf.int32))

        src_dataset=src_dataset.map(lambda src: (src, tf.size(src)))
        
    
        batched_dataset=src_dataset.padded_batch(self.batch_size_placeholder,
                                                padded_shapes=(tf.TensorShape([None]),
                                                               tf.TensorShape([]) ),
                                                               padding_values=(src_eos_id, 
                                                               0) )
        batched_iterator = batched_dataset.make_initializable_iterator()
        (src_ids, src_seq_len) = batched_iterator.get_next()
            
        self.iterator = ParallelDatasetIterator(initializer=batched_iterator.initializer,
                                                 source=src_ids,
                                                 target_input=None,
                                                 target_output=None,
                                                 source_sequence_length=src_seq_len,
                                                 target_sequence_length=None)
            
            
    def get_dropout(self):
        return 0.0

     
    def prepare_decoder_input(self, encoder_outputs, encoder_state):
            return super().prepare_decoder_input(encoder_outputs, encoder_state)

        
    def is_alignment_history(self):
        return self.hp.infer_mode == 'greedy'

             
    def run_decoder(self, decoder_cell, decoder_initial_state, scope):
        
        start_token = tf.cast(self.tgt_lookup.lookup(tf.constant(self.hp.sos)), tf.int32)
        end_token = tf.cast(self.tgt_lookup.lookup(tf.constant(self.hp.eos)), tf.int32)       
        start_tokens = tf.fill([self.batch_size], start_token)
        
        embedding_helper= tf.contrib.seq2seq.GreedyEmbeddingHelper (self.embedding_decoder,
                                                                        start_tokens,
                                                                        end_token)            
            
        decoder = tf.contrib.seq2seq.BasicDecoder (decoder_cell,
                                                    embedding_helper,
                                                    decoder_initial_state,
                                                    output_layer=self.output_layer)
            
            
        final_outputs, final_state, final_sequence_lengths = tf.contrib.seq2seq.dynamic_decode(decoder,
                                                                                 maximum_iterations=self.hp.tgt_max_len_infer,
                                                                                 output_time_major=self.hp.time_major,
                                                                                 swap_memory=True,
                                                                                 scope=scope)
        
        self.logits = final_outputs.rnn_output
        self.final_state = final_state
        self.sample_id = final_outputs.sample_id
            
            
    def setup_computations(self):
        self.sample_words = self.reverse_tgt_vocab_table.lookup(tf.to_int64(self.sample_id))
        
        #attention summary
        attention_images = (self.final_state.alignment_history.stack())
        attention_images = tf.expand_dims(tf.transpose(attention_images, [1,2,0]), -1)
        attention_images *=255
        self.attention_summary = tf.summary.image("attention_images", attention_images)
        
        
    def decode(self, session):
        _, infer_summary, _, sample_words = self.infer(session)
        return sample_words.transpose() if self.hp.time_major else sample_words, infer_summary

    
    def infer(self, session):
        return session.run([self.logits, self.attention_summary, self.sample_id, self.sample_words])