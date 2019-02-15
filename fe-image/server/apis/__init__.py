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

from flask_restplus import Api

from .recommend import api as recommend

api = Api(version='1.0', title='ElasTest Recommendation Engine API', description='Recommender service \
that provides loading and training of test repositories and querying the resultant dataset using NLP.')

api.namespaces.clear()
api.add_namespace(recommend, path='/ere-app/api/v1.0')
