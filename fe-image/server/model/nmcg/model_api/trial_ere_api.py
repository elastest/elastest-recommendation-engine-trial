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

import os
import json
import traceback
from model.nmcg.recommendation import recommend

NAME="model_name"
ERROR="error_message"
RESULT="result"
AREA="#class"
TASK="#method"

class Recommender(object):
    '''
    classdocs
    '''
    def __init__(self):
        '''
        Constructor
        '''
        self.response_template={NAME: None, ERROR: None, RESULT: None}
                    
    def recommend(self, params):
        resp = self.response_template
        if "query" not in params or "area" not in params["query"]  or "task" not in params["query"]:
            resp["error_message"] ="Invalid arguments. Expected json keys: query[area, task]"
        else:
            params["query"] = format_query(params["query"])
            params["model_dir"] = os.path.join(os.path.dirname(os.path.realpath(__file__) ), "../../trained_model")
            result={}
            try:
                ( raw_recommendation, result["generated"] ) = recommend.run(params)
                ( nn, nn_sims )=recommend.get_nearest_neighbours(raw_recommendation, params)
                result["generated"]=result["generated"].replace(" . ", ".")    
                result["reusable"] = {"nn": nn.tolist(), "nn_sims": nn_sims.tolist()}
                resp[RESULT] = result
            except Exception as e:
                resp[ERROR]=str(e)
                traceback.print_exc()
        return json.dumps(resp)
    
def format_query(query):
    return "%s %s %s %s"  %(AREA, query["area"], TASK, query["task"])