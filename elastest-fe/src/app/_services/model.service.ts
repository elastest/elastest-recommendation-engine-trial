/*
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
# limitations under the License. */
import { HttpModule, Http, JsonpModule, Jsonp, Headers, Request, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ModelService {

    constructor(private jsonp: Jsonp, private http: Http) { }

    getModels(): Observable<Array<any>> {
        const modelUrl = 'http://46.7.70.185:53568/models';

        return this.http.request(new Request({
			// headers: requestHeaders,
            method: RequestMethod.Get,
            url: modelUrl
        }))
            .map(res => res.json().result);
    }
}
