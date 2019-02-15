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
from flask import jsonify, request
from flask_restplus import fields, Namespace, Resource
import json
import os
import shlex
import shutil 
import subprocess
import sys
import time
import traceback
import zipfile

sys.path.append('..')

from .utils import baseDir

from model.nmcg.model_api.trial_ere_api import Recommender

api = Namespace('recommend', description='Use Natural Language queries against a Test repository to receive recommended Test cases.')

RecommendTemplate = api.model('Recommend', {
    'model': fields.String(required=True, description='The name of the Model to query against', example='GenericModel'),
    'uuid': fields.String(required=True, description='The UUID of the Model to query against', example=''),
    'area': fields.String(required=True, description='A description of the tested area', example='generic conversion service'),
    'task': fields.String(required=True, description='A description of the tested task', example='convert map to object')
})

@api.route('/recommend', methods=['POST'])
class Recommend(Resource):
    def create_reusable_list(self, model, nnList, nnSimsList):
        start = time.time()
        print("%s: start mapping test cases - new" %time.ctime(start), flush=True)

        modelFile = model + '.zip'
        corpusIdFile = 'corpus.ids'
        modelsDir = os.path.join(os.path.abspath('.'),'model/trained_model')

        with open (os.path.join(modelsDir, corpusIdFile)) as f:
            corpus_ids = f.readlines()
        tracking_info_list = [corpus_ids[i].rstrip().split(",") for i in nnList ]

        results = []
        with zipfile.ZipFile(os.path.join(modelsDir, modelFile), "r") as z:
            for tracking_info in tracking_info_list:
                with z.open(os.path.join('parsed_data', tracking_info[0], 'parsed_data', tracking_info[1])) as ti:
                    tracking_json = json.load(ti)            
                test_case = next((tc for tc in tracking_json['parsedTestCases'] if tc['id'] == tracking_info[2]), None)
    
                resultObject = ({
                                            'packageName': test_case['packageName'],
                                            'className': test_case['className'],
                                            'classMembers': test_case['classMembers'],
                                            'methodName': test_case['methodName'],
                                            'body':  test_case['body'],
                                            'similarity': nnSimsList[tracking_info_list.index(tracking_info)],
                                            'repository': tracking_info[0],
                                            'originURL': test_case['origin_url'],
                                            'compiled': True
                                        })
                
                results.append(resultObject)
    
        end = time.time()
        print("%s: Completed in %f s" %( time.ctime(end), end-start), flush=True)

        return results
            
    @api.expect(RecommendTemplate)
    @api.doc(description="Query a Model with a description of the tested area and the tested task to receive a generated Test case and examples of Test cases that can be reused.")
    def post(self):
        model = request.json['model']
        uuid = request.json['uuid']
        area = request.json['area']
        task = request.json['task']

        # create the local Recommender
        recommender = Recommender()
        # create the query json
        recommendQuery = {'model': ''+ model, 'query': {'area': ''+area, 'task': ''+task}}
        start = time.time()
        print("%s: requesting recommendation  from model %s" %(time.ctime(start), model), flush=True)
        try:
            resp = recommender.recommend(recommendQuery)
            recommendResponse = json.loads(resp)
        except:
            end = time.time()
            print("%s: Completed in %f s" %( time.ctime(end), end-start), flush=True)
            traceback.print_exc()
            return jsonify({'model_name': '', 'error_message': 'There was an issue connecting to the Recommmender service.', 'result': 'Failure'})
        end = time.time()
        print("%s: Completed in %f s" %( time.ctime(end), end-start), flush=True)

        # check for error
        errorMessage = recommendResponse['error_message']
        if errorMessage and errorMessage != 'None' and errorMessage != 'null' and errorMessage != '':
            return jsonify({'model_name': '', 'error_message': errorMessage, 'result': 'Failure'})
        
        # extract the result from the response
        resultJson = recommendResponse['result']
        
        # extract generated test case and replace special symbols if any
        generatedTestcase = resultJson['generated'].replace('<unk>', 'UNK')
        genTestcaseCompiled = False
        mockClassName="%sTest" % "".join(area.title().split())
        mockMethodName="test%s" % "".join(task.title().split())
        # prep the raw string
        
        start=time.time()
        print("%s: start compiling generated code" %(time.ctime(start)), flush=True)
        with open(os.path.join(baseDir, 'current.java'), 'w') as f:
            f.write('class %s { public %s() %s }' %(mockClassName, mockMethodName, generatedTestcase) )
        cmd='java -jar /app/ere_deps/google-java-format-1.6-all-deps.jar  %s' %os.path.join(baseDir, 'current.java')
        process = subprocess.Popen(shlex.split(cmd), stdout=subprocess.PIPE)
        output = process.communicate()
 
        genTestcaseCompiled = len(output[0]) > 0 and not output[1]
        generatedTestcase=output[0].decode('utf-8')  if genTestcaseCompiled else resultJson['generated']
        
        end = time.time()
        print("%s: Completed in %f s" %( time.ctime(end), end-start), flush=True)

        # extract the test case IDs
        reusableLists = resultJson['reusable']
        nnList = reusableLists['nn']
        
        # extract the similarity values
        nnSimsList = reusableLists['nn_sims']

        results = self.create_reusable_list(model, nnList, nnSimsList)
        return jsonify({'model_name': model, 'error_message': '', 'result': {'generated': generatedTestcase, 'genCompiled': genTestcaseCompiled, 'reusable': results}})