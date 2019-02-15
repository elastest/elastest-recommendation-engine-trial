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

from flask import Flask
from flask_cors import CORS
from flask_restplus import Api
from concurrent.futures import ThreadPoolExecutor as Pool

from apis import api

app = Flask(__name__, static_url_path='')
app.config['SWAGGER_UI_DOC_EXPANSION'] = 'list'
pool = Pool(max_workers=2000)

api.init_app(app)

CORS(app) # enable CORS support