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

import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class SearchService {

    constructor(private cookieService: CookieService, private jsonp: Jsonp, private http: Http) { }

    getModelCookie(): string {
        return this.cookieService.get('ere-app-default-model');
    }

    getUUIDCookie(): string {
        return this.cookieService.get('ere-app-default-uuid');
    }

    retrieve(reusable: Object): Observable<Array<any>> {
        const retUrl = 'ere-app/api/v1.0/recommend';
        const reusableString = JSON.stringify(reusable);

        return this.http.get(retUrl + '?json=' + encodeURIComponent(reusableString))
            .map(res => res.json().result);
    }

    search(body: Object): Observable<Array<any>> {
        const searchUrl = 'ere-app/api/v1.0/recommend';

        return this.http.post(searchUrl, body)
            .map(res => res.json());
    }
}
