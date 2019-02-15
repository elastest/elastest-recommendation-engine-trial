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

from __future__ import print_function
import os
import json
import re
import collections

import tensorflow as tf
import numpy as np

from .recommending_model import RecommendingModel
from . import embedding_util
from .embedding_util import Option

'''
load trained model,
submit a single input sequence
return output sequence
'''
def run(params):
    model_dir = params["model_dir"]
    with open(os.path.join(model_dir, "hp.json" )) as f:
        config = json.load(f)
        hp = tf.contrib.training.HParams(**config)
    
    hp.add_hparam("model_dir", model_dir)
    hp.add_hparam("src_vocab", os.path.join(model_dir, "vocab.nl"))
    hp.add_hparam("tgt_vocab", os.path.join(model_dir, "vocab.pl"))
    
    igraph = tf.Graph()
    with igraph.as_default(), tf.container("infer"):
        imodel = RecommendingModel(hp=hp)

    with tf.Session(config=tf.ConfigProto(log_device_placement=False, 
                                          allow_soft_placement=True), graph=igraph) as sess:
        imodel = import_model_state(imodel, sess, model_dir)        
        sess.run(imodel.iterator.initializer, feed_dict={imodel.src_placeholder: [params["query"]],
                                                         imodel.batch_size_placeholder: 1})
        _, _, _, inferences = imodel.infer(sess)
        inferences=inferences.transpose()
        inferences_list = inferences[0, : ].tolist()
        eos="</s>".encode("utf-8")
        if eos in inferences_list:
            inferences_list = inferences_list[:inferences_list.index(eos)]
        recommendation = format_text(inferences_list).decode("utf-8")
                       
        return (recommendation, format_output(recommendation) if hp.split else recommendation)
    
def format_output(recommendation):
    annotated=re.findall('».*?«', recommendation)
    cleaned = re.findall('»(.*?)«', recommendation)
    cleaned = [i.replace(' ', '') for i in cleaned]
    for i, j in zip (annotated, cleaned):
        recommendation = re.sub(i,j,recommendation)
        
    return recommendation

def import_model_state(model, session, modeldir):
    latest_ckpt = tf.train.latest_checkpoint( modeldir)
    model.saver.restore(session, latest_ckpt)
    session.run(tf.tables_initializer())
    return model

def get_nearest_neighbours(sentence,  params):
    """Constructs vector representation of `sentence` and returns its nearest neigbours from the `dataset`.
        
        Args:
            sentence (string):                   sentence whose neighbours are needed.
            params[upload_dir] (string):  default dir storing user data.
            params[model] (string):        name of the model to query,
            params[k] (int):                    number of nearest neighbours to return. Defaults to 10,
            params[suffix] (string):        language of the sentence. Defaults to `pl`.
            params[option] (int):             how to construct sentence representation. Defaults to 0.
            dataset(string):                    dataset name
             
        Returns:
            dict:    containing the list of nn indices (`nn`) and the list of corresponding similarity scores(`nn_sims`)
            
        """
    model_dir=params["model_dir"]
    suffix=params.get("suffix", "pl")
    dataset=params.get("dataset", "corpus")
    k=params.get("k", 10)
    option=params.get("option", 0)
    lookup = embedding_util.get_vocab_lookup(os.path.join(model_dir, "vocab.%s" %suffix) )
    vecs=np.load(os.path.join(model_dir, "%s_embeddings.npy" %suffix)) 
    sequence = embedding_util.build_seq_embedding(sentence if suffix=="pl" else params["query"], lookup, vecs, option)
    seqvecs=np.load(os.path.join(model_dir, "%s_%s_by_%s_embeddings.npy" %(suffix, dataset, Option(option).name) ) )
    nn, nn_sims = embedding_util.get_nn_indices(sequence, seqvecs, k)

    return nn, nn_sims
  
def format_text(words):
    if (not hasattr(words, "__len__") and not isinstance(words, collections.Iterable)):
        words = [words]
    return b" ".join(words)

