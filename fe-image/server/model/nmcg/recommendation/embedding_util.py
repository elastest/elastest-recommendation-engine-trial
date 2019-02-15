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

import time
import numpy as np

from sklearn.metrics.pairwise import cosine_similarity
from enum import Enum

class Option(Enum):
    mean=0
    sum=1

'''
create lookup dict for the vocabulary
load vectors saved as numpy aray
read the dataset
construct a sequence embedding for each sentence in the dataset
return sequence embeddings
'''        
def build_sequence_embeddings  (lookup, vecs, dataset_file, option=0):
    start = time.time()
    print("%s: Started constructing embeddings for %s" %(time.ctime(start), dataset_file.split('/')[-1]), flush=True)
  
    with open(dataset_file) as f:
        corpus_embeddings=np.array( [build_seq_embedding(line, lookup, vecs, option) for line in f], dtype='float64')

    end = time.time()
    print("%s: Completed in %f s" %( time.ctime(end), end-start), flush=True)
    return corpus_embeddings

'''
construct embeddings for a single sequence
'''
def build_seq_embedding(line, lookup, vecs, option=0):
        words=line.split()
        ids = [lookup.get(w, 0) for w in words ]
        word_embeddings = vecs[ids]
        func=np.mean if option==Option.mean.value else np.sum
        seq_embedding = func(word_embeddings, axis=0)
        return seq_embedding

def get_vocab_lookup(vocab_file):
    with open(vocab_file) as f:
        wordlist=f.readlines()
    lookup = {wordlist[i].strip() : i for i in range(0, len(wordlist))}
        
    return lookup
            
'''
sequence:  generated sequence embedding
corpus: all corpus embeddings
return k nearest neigbours of sequence wrt corpus
''' 
def get_nn_indices (sequence, vecs, k):      
    s=sequence.reshape(1,-1)
    sims=cosine_similarity(s, vecs)
    nn=sims[0].argsort()[::-1][:k]
    nn_sims=sims[0,nn]
    
    return nn, nn_sims
