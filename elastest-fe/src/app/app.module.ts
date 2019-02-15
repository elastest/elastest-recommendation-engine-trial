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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, JsonpModule, Jsonp } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { CodeFormatPipe } from './search/code-format.pipe';
import { RecommenderComponent } from './recommender/recommender.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        CodeFormatPipe,
        RecommenderComponent,
        SearchComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MaterializeModule
    ],
    providers: [ CookieService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
