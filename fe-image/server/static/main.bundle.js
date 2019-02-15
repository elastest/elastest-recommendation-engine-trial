webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/copy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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

var CopyService = (function () {
    function CopyService() {
    }
    CopyService.prototype.copyToClipboard = function (textToCopy) {
        // var textToCopy = document.getElementById(src).innerText
        var ta = document.createElement('textarea');
        ta.style.position = 'fixed';
        ta.style.top = '0';
        ta.style.left = '0';
        ta.style.opacity = '0';
        ta.value = textToCopy;
        document.body.appendChild(ta);
        ta.select();
        try {
            var copied = document.execCommand('copy');
            if (copied) {
                document.body.removeChild(ta);
                return true;
            }
        }
        catch (e) {
            console.log('Copy to Clipboard failed');
        }
        document.body.removeChild(ta);
        return false;
    };
    return CopyService;
}());
CopyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CopyService);

//# sourceMappingURL=copy.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/export.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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

var ExportService = (function () {
    function ExportService() {
    }
    ExportService.prototype.exportToCSV = function (selectedIDs, searchResults) {
        var csvStream = 'data:text/csv;charset=utf-8,\"Testcase ID\",\"Package Name\",\"Class Name\",\"Method Name\",\"Method Body\"\n';
        selectedIDs.forEach(function (selectedID) {
            var csvRecord = '';
            for (var i = 0; i < searchResults.length; i++) {
                if (selectedID === '' + i /*searchResults[i].id*/) {
                    var updatedBody = searchResults[i].body.toString();
                    updatedBody.replace(/\n/g, '');
                    updatedBody.replace(/\'/g, '\\\'');
                    updatedBody.replace(/\"/g, '\\\"');
                    // updatedBody.replace(/\r?\n|\r/g, '');
                    var id = i; // searchResults[i].id;
                    var packageName = searchResults[i].packageName;
                    var className = searchResults[i].className;
                    var methodName = searchResults[i].methodName;
                    csvRecord = id + ",\"" + packageName + "\",\"" + className + "\",\"" + methodName + "\",\"" + updatedBody + "\"\n";
                    break;
                }
            }
            csvStream += csvRecord;
        });
        var encodeUri = encodeURI(csvStream);
        window.open(encodeUri);
    };
    return ExportService;
}());
ExportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ExportService);

//# sourceMappingURL=export.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/model.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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



var ModelService = (function () {
    function ModelService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    ModelService.prototype.getModels = function () {
        var modelUrl = 'http://46.7.70.185:53568/models';
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Request */]({
            // headers: requestHeaders,
            method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestMethod */].Get,
            url: modelUrl
        }))
            .map(function (res) { return res.json().result; });
    };
    return ModelService;
}());
ModelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _b || Object])
], ModelService);

var _a, _b;
//# sourceMappingURL=model.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/styling.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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


var StylingService = (function () {
    function StylingService() {
    }
    StylingService.prototype.showFieldDescription = function (id) {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__("#" + id).hasClass('scale-out')) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + id).removeClass('scale-out');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + id).addClass('scale-out');
        }
    };
    StylingService.prototype.focusStyling = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + value).css('border-bottom', '1px solid #ffac2f');
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + value).css('box-shadow', '0 1px 0 0 #ffac2f');
    };
    StylingService.prototype.unFocusStyling = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + value).css('border-bottom', '1px solid rgba(0,0,0,.12)');
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#" + value).css('box-shadow', 'none');
    };
    return StylingService;
}());
StylingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StylingService);

//# sourceMappingURL=styling.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommender_recommender_component__ = __webpack_require__("../../../../../src/app/recommender/recommender.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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



var routes = [
    { path: '', redirectTo: 'recommender', pathMatch: 'full' },
    { path: 'recommender', component: __WEBPACK_IMPORTED_MODULE_2__recommender_recommender_component__["a" /* RecommenderComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. */\nbody {\n    margin: 0;\n    padding: 0px;\n    color: #191919;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n#content {\n    padding: 20px;\n}\n\n.mdc-layout-grid {\n    padding: 0px;\n}\n\n.material-icons.md-18 {\n    font-size: 18px;\n}\n\n.material-icons.md-24 {\n    font-size: 24px;\n}\n\n.material-icons.md-36 {\n    font-size: 36px;\n}\n\n.material-icons.md-48 {\n    font-size: 48px;\n}\n\n.material-icons.md-et-dark {\n    color: rgba(19, 19, 19, 1);\n}\n\n.material-icons.md-et-dark:hover {\n    color: rgba(255, 172, 47, 1);\n}\n\n.material-icons.md-et-dark.md-inactive {\n    color: rgba(19, 19, 19, 0.3);\n}\n\n.material-icons.md-light {\n    color: rgba(255, 255, 255, 1);\n}\n\n.material-icons.md-light.md-inactive {\n    color: rgba(255, 255, 255, 0.3);\n}\n\n.material-icons.md-et-yellow {\n    color: rgba(255, 172, 47, 1);\n}\n\n.material-icons.md-et-yellow.md-inactive {\n    color: rgba(255, 172, 47, 0.3);\n}\n\n.material-icons.md-et-red {\n    color: rgba(200, 42, 14, 1)\n}\n\n.material-icons.md-et-gray {\n    color: rgba(66, 66, 66, 1);\n}\n\n.material-icons.md-et-gray.md-inactive {\n    color: rgba(66, 66, 66, 0.3);\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n}\n\nh1 {\n    color: #191919;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 250%;\n}\n\n.sidebar {\n    height: 100%;\n    background-color: #191919;\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.sidebar ul {\n    list-style: none;\n}\n\n.sidebar li {\n    padding: 5px 0px;\n    margin-left: -15px;\n}\n\n.clickable {\n    cursor: pointer;\n}\n\n.hidden {\n    display: none;\n}\n\n/* label focus color */\ninput[type=text]:focus + label {\n    color: #ffac2f;\n}\n\n/* label underline focus color */\ninput[type=text]:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n\n/* label focus color */\ninput[type=password]:focus + label {\n    color: #ffac2f;\n}\n\n/* label underline focus color */\ninput[type=password]:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n\n.elastest-button {\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f;    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. -->\n<div class=\"container\">    \n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ElasTest Dashboard';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_materialize_css__ = __webpack_require__("../../../../materialize-css/dist/js/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_code_format_pipe__ = __webpack_require__("../../../../../src/app/search/code-format.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recommender_recommender_component__ = __webpack_require__("../../../../../src/app/recommender/recommender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_code_format_pipe__["a" /* CodeFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_11__recommender_recommender_component__["a" /* RecommenderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__["CookieService"], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/recommender/recommender.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. */\n.rec-divider {\n    display: inherit;\n    width: 95%;\n    height: 2px;\n    background-color: rgba(66,66,66,0.8);\n    padding: 10px 0px;\n    background: url(" + __webpack_require__("../../../../../src/assets/divider.png") + ");\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recommender/recommender.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. -->\n<app-search></app-search>\n"

/***/ }),

/***/ "../../../../../src/app/recommender/recommender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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

var RecommenderComponent = (function () {
    function RecommenderComponent() {
    }
    RecommenderComponent.prototype.ngOnInit = function () { };
    return RecommenderComponent;
}());
RecommenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'recommender',
        template: __webpack_require__("../../../../../src/app/recommender/recommender.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/app/recommender/recommender.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecommenderComponent);

//# sourceMappingURL=recommender.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/code-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var CodeFormatPipe = (function () {
    function CodeFormatPipe() {
    }
    CodeFormatPipe.prototype.transform = function (resultBody) {
        if (resultBody != null && resultBody !== '') {
            // let temp: string = resultBody.toString().replace(/;/g, ";<br/>");
            var temp = resultBody.toString().replace(/\n/g, '');
            // temp = temp.replace(/\./g, "<br/>&nbsp;&nbsp;&nbsp;&nbsp;.");
            temp = temp.replace(/; /g, ';');
            temp = temp.replace(/;/g, ';\n');
            temp = temp.replace(/\. /g, '.');
            temp = temp.replace(/\./g, '\n   .');
            temp = temp.replace(/^"|"$/g, '');
            console.log(temp);
            return temp;
        }
        else {
            return '';
        }
    };
    return CodeFormatPipe;
}());
CodeFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'codeFormat' })
], CodeFormatPipe);

//# sourceMappingURL=code-format.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. */\n.label:before {\n    content: '';\n    right: 6px;\n    top: 0px;\n    width: 20px;\n    height: 20px;\n    background: #666666;\n    position: absolute;\n    pointer-events: none;\n    display: block;\n}\n\n.recommend select {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    color: #191919;\n    background-color: #fff;\n    cursor: pointer;\n}\n\n.recommend select::-ms-expand {\n    display: none;\n}\n\n/* Targetting Webkit browsers only. FF will show the dropdown arrow with so much padding. */\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n    select {\n        padding-right: 18px\n    }\n}\n\n/* label focus color */\n.recommend select:focus + label {\n    color: #ffac2f;\n}\n\n/* label underline focus color */\n.recommend select:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n\n.recommend input[type=text] {\n    width: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n/* label focus color */\n.recommend input[type=text]:focus + label {\n    color: #ffac2f;\n}\n\n/* label underline focus color */\n.recommend input[type=text]:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n\n.recommend #recDialogCancel {\n    color: rgba(0, 0, 0, 0.54);\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: whitesmoke;\n}\n\n.recommend #recDialogOk {\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f; \n}\n\n#compDialogOk {\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f;    \n}\n\n#recButton {\n    /*color: #ffac2f;*/\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f;\n}\n\n#search-results-card input[type=\"checkbox\"].filled-in:checked + label:after{\n    border: 2px solid #ffac2f;\n    background-color: #ffac2f;\n}\n\n.td-data-table-column {\n    color: rgba(0, 0, 0, 0.54);\n}\n\n.td-data-table-column span {\n    cursor: pointer;\n}\n\n.td-data-table-row:focus {\n    outline: none;\n}\n\n#search-results-card a {\n    color: rgba(0, 0, 0, 0.54);\n    cursor: pointer;\n}\n\n#search-results-card#resultsDD > li > a {\n    color: rgba(19, 19, 19, 1);\n    cursor: pointer;\n}\n\n#search-results-card a:hover {\n    color: #ffac2f;\n}\n\n#search-results-card > li.disabled > a:hover {\n    color: rgba(19, 19, 19, 0.3);\n}\n\n.nav-link a {\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.54);\n}\n\n.nav-link a:hover {\n    color: #ffac2f;\n}\n\na:hover i {\n    color: #ffac2f;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. -->\n<div class=\"row\" style=\"margin-top: 10px;\">\n    <div *ngIf=\"!adminAccess\" class=\"col s12 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align\">\n        <a id=\"recButton\" class=\"waves-light btn\" (click)=\"openModal($event)\">New Recommendation</a>\n    </div>\n</div>    \n\n<div id=\"rec-mzc-dialog\" class=\"modal recommend\" materialize=\"modal\" [materializeActions]=\"modalActions\">\n    <div class=\"modal-content\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h5>New Test Case Recommendation</h5>\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                Provide a brief description of the the test case, indicating the area and task you want to test.\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"left-align\" style=\"display: inline-block; width: 100%\">\n                    <div id=\"areaFieldDiv\" class=\"input-field inline\" style=\"width: 65%; margin-right: 5px;\">\n                        <input #areaField id=\"areaField\" type=\"text\" [(ngModel)]=\"areaString\" (focus)=\"focusStyling($event)\" (blur)=\"unFocusStyling($event)\"/>\n                        <label for=\"areaField\" data-error=\"wrong\" data-success=\"right\">Area Description</label>\n                    </div>\n                    <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('areaDesc')\">info</i>\n                </div>\n                <div id=\"areaDesc\" class=\"scale-transition scale-out\">\n                    The description of tested area, e.g \"generic conversion service\".\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"left-align\" style=\"display: inline-block; width: 100%\">\n                    <div id=\"taskFieldDiv\" class=\"input-field inline\" style=\"width: 65%; margin-right: 5px;\">\n                        <input #taskField id=\"taskField\" type=\"text\" [(ngModel)]=\"taskString\" (focus)=\"focusStyling($event)\" (blur)=\"unFocusStyling($event)\"/>\n                        <label for=\"taskField\" data-error=\"wrong\" data-success=\"right\">Task Description</label>\n                    </div>\n                    <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('taskDesc')\">info</i>\n                </div>\n                <div id=\"taskDesc\" class=\"scale-transition scale-out\">\n                    The description of tested task, e.g. \"convert map to object\".\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div id=\"settingsIcon\" class=\"valign-wrapper\" style=\"vertical-align: middle; display: inline-block; padding-right: 5px;\">\n        </div>\n        <div class=\"valign-wrapper\" style=\"vertical-align: middle; display: inline-block; padding-right: 10px;\">\n            <span id=\"settingsMsg\" style=\"color: red;\"></span>\n        </div>\n        <div style=\"display: inline-block; padding-right: 10px;\">\n            <a id=\"recDialogCancel\" class=\"waves-effect waves-light btn modal-close\">Cancel</a>\n        </div>\n        <div style=\"display: inline-block;\">    \n            <a id=\"recDialogOk\" class=\"waves-light btn\" (click)=\"search($event)\">Ok</a>\n        </div> \n    </div>\n</div>\n\n<div id=\"comp-mzc-dialog\" class=\"modal\" materialize=\"modal\" [materializeActions]=\"compModalActions\">\n    <div class=\"modal-content\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h5>Compare Testcases</h5>\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"packageName1\" class=\"col s6\"></div>\n                <div id=\"packageName2\" class=\"col s6\"></div>   \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"className1\" class=\"col s6\"></div>\n                <div id=\"className2\" class=\"col s6\"></div>   \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"methodName1\" class=\"col s6\"></div>\n                <div id=\"methodName2\" class=\"col s6\"></div>   \n            </div>\n        </div>\n        <div class=\"row\" style=\"background-color: whitesmoke;\">\n            <div id=\"selectedResult1Body\" class=\"col s6\">\n            </div>\n            <div id=\"selectedResult2Body\" class=\"col s6\" style=\"border-left: 1px solid #666666;\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div style=\"display: inline-block;\">    \n            <a id=\"compDialogOk\" class=\"waves-light btn\" (click)=\"compareClose($event)\">Ok</a>\n        </div> \n    </div>\n</div>\n\n<div id=\"members-mzc-dialog\" class=\"modal\" materialize=\"modal\" [materializeActions]=\"membersModalActions\">\n    <div class=\"modal-content\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h5>Class Members</h5>\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"membersPackageName\" class=\"col s12\"></div>   \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"membersClassName\" class=\"col s12\"></div>   \n            </div>\n        </div>\n        <div class=\"row\" style=\"background-color: whitesmoke;\">\n            <div id=\"membersResultBody\" class=\"col s12\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div style=\"display: inline-block;\">    \n            <a id=\"membersDialogOk\" class=\"waves-light btn elastest-button\" (click)=\"membersClose($event)\">Ok</a>\n        </div> \n    </div>\n</div>\n\n<div id=\"recommendProgress\" class=\"row\" style=\"display: none; margin-top: 6rem;\">\n    <div *ngIf=\"!adminAccess\" class=\"col s12 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align\">\n        <div class=\"center-align valign-wrapper\" style=\"white-space: nowrap; color: rgba(0, 0, 0, 0.54);\">\n            <div style=\"margin: 0 auto;\">Generating test case recommendations...</div>\n        </div>\n        <div class=\"preloader-wrapper small active\" style=\"margin-top: 2rem;\">\n            <div class=\"spinner-layer spinner-yellow-only\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s11 m5 l5 xl3 offset-m3 offset-l3 offset-xl4 center-align\">\n        <div class=\"center-align valign-wrapper\" style=\"white-space: nowrap; color: rgba(0, 0, 0, 0.54);\">\n            Generating test case recommendations...\n        </div>\n        <div class=\"preloader-wrapper small active\" style=\"margin-top: 2rem;\">\n            <div class=\"spinner-layer spinner-yellow-only\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s1 offset-m3 offset-l3 offset-xl4\"></div>\n</div>\n\n<div id=\"recommendFailure\" class=\"row\" style=\"display: none; margin-top: 6rem; margin-top: 6rem;\">\n    <div *ngIf=\"!adminAccess\" class=\"col s12 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align valign-wrapper\">\n        <div style=\"margin: 0 auto;\">\n            <div class=\"center-align valign-wrapper\" style=\"display: inline-block;\">\n                <i class=\"material-icons md-et-red\" style=\"display: inline-block; vertical-align: middle;\">error_outline</i>\n            </div>\n            <div class=\"center-align valign-wrapper\" style=\"display: inline-block; margin-left: 1rem; white-space: nowrap; color: rgba(200, 42, 14, 1);\">\n                There was an issue recommending test cases.\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s11 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align valign-wrapper\">\n        <div class=\"center-align valign-wrapper\" style=\"display: inline-block;\">\n            <i class=\"material-icons md-et-red\" style=\"display: inline-block; vertical-align: middle;\">error_outline</i>\n        </div>\n        <div class=\"center-align valign-wrapper\" style=\"display: inline-block; margin-left: 1rem; white-space: nowrap; color: rgba(200, 42, 14, 1);\">\n            There was an issue recommending test cases.\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s1 offset-m3 offset-l3 offset-xl4\"></div>\n</div>\n\n<div *ngIf=\"(searchResults != null && searchResults.length > 0) || generatedTestcase != ''\" flex-gt-lg=\"100\" layout-gt-sm=\"column\">\n    <div class=\"inset\">\n        <div layout=\"column\" layout-gt-sm=\"row\">\n            <div flex-gt-sm=\"100\">\n                <div class=\"card\" id=\"search-results-card\">\n                    <div class=\"card-image calign-wrapper valign-wrapper\" style=\"padding: 0px 2%; background-color: whitesmoke;\">\n                        <div style=\"width: 90%; display: inline-block;\">\n                            <div style=\"width: 100%; display: inline-block;\">\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block; color: rgba(0, 0, 0, 0.54);\">\n                                    Your description of the test case:&nbsp;\n                                </div>\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block;\">\n                                    <span style=\"color: rgba(0, 0, 0, 0.54);\"><b>Area:</b> \"{{areaString}}\"</span>\n                                </div>\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block;\">\n                                    <span style=\"color: rgba(0, 0, 0, 0.54);\"><b>Task:</b> \"{{taskString}}\"</span>\n                                </div>\n                            </div>\n                            <div style=\"width: 100%; display: block;\">\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block; color: rgba(0, 0, 0, 0.54);\">\n                                    Queried model: <b>{{defaultModel}}</b>&nbsp;\n                                </div>\n                            </div>\n                        </div>    \n                        <div class=\"right-align valign-wrapper\" style=\"vertical-align: middle; width: 10%; display: inline-block; margin: auto 0px;\">\n                            <div *ngIf=\"selectedResults != null && selectedResults.length > 0\" class=\"right-align valign-wrapper\" style=\"display: inline-block;\">\n                                <a materialize=\"dropdown\" class=\"dropdown-button\" data-alignment=\"right\" data-activates=\"resultsDD\">\n                                    <i id=\"resultsDDIcon\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%; cursor:default;\">more_horiz</i>\n                                </a>\n                            \n                                <ul id=\"resultsDD\" class=\"dropdown-content\">\n                                    <li id=\"exportOptionLi\" class=\"left-align valign-wrapper\" style=\"vertical-align: middle;\" (click)=\"exportAsCsv()\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"exportAsCsv()\"><i id=\"exportOptionI\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%;\">save</i></div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\"><a id=\"exportOption\" (click)=\"exportAsCsv()\">Export as CSV</a></div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length === 1\" id=\"copyOptionLi\" class=\"left-align valign-wrapper\"\n                                                                        style=\"vertical-align: middle;\" (click)=\"copyToClipboard()\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"copyToClipboard()\">\n                                            <i id=\"copyOptionI\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%;\">content_copy</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"copyOption\" (click)=\"copyToClipboard()\">Copy to Clipboard</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length !== 1\" id=\"copyOptionLi\" class=\"left-align valign-wrapper\" \n                                                                        style=\"vertical-align: middle;\" (click)=\"menuInactive($event)\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"menuInactive($event)\">\n                                            <i id=\"copyOptionI\" class=\"material-icons md-et-dark md-inactive\" style=\"padding-top: 5%;\">content_copy</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"copyOption\" (click)=\"menuInactive($event)\">Copy to Clipboard</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length === 2\" id=\"compareOptionLi\" class=\"left-align valign-wrapper\" \n                                                                        style=\"vertical-align: middle;\" (click)=\"compare()\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"compare()\">\n                                            <i id=\"compareOptionI\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%;\">border_vertical</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"compareOption\" (click)=\"compare()\">Compare</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length !== 2\" id=\"compareOptionLi\" class=\"left-align valign-wrapper\" \n                                                                        style=\"vertical-align: middle;\" (click)=\"menuInactive($event)\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"menuInactive($event)\">\n                                            <i id=\"compareOptionI\" class=\"material-icons md-et-dark md-inactive\" style=\"padding-top: 5%;\">border_vertical</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"compareOption\" (click)=\"menuInactive($event)\">Compare</a>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div *ngIf=\"selectedResults == null || selectedResults.length === 0\" class=\"right-align valign-wrapper\" style=\"display: inline-block;\">\n                                <i id=\"resultsDDIcon\" class=\"material-icons md-et-dark md-inactive\" style=\"padding-top: 5%; cursor:default;\">more_horiz</i>\n                            </div>\n                            <div class=\"right-align valign-wrapper\" style=\"display: inline-block;\">\n                                <i class=\"material-icons md-et-dark\" style=\"padding-top: 5%; cursor: pointer;\" (click)=\"clearSearchResults($event)\">cancel</i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"mat-table-container\" style=\"overflow-x: auto;\">\n                            <table *ngIf=\"genTestcaseCompiled\" class=\"td-data-table bordered responsive-table\">\n                                <thead>\n                                    <tr class=\"td-data-table-row\">\n                                        <th class=\"td-data-table-column\">\n                                            <span class=\"md-caption\">Recommended test case:</span>\n                                            <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('recTCDesc')\">info</i>\n                                            <div id=\"recTCDesc\" class=\"scale-transition scale-out\">\n                                                New code generated from the provided description. \n                                            </div>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr class=\"td-data-table-row\" tabindex=\"-1\">\n                                        <td class=\"td-data-table-cell\" colspan=\"5\" style=\"background-color: whitesmoke; font-family: monospace; padding: 0 0.5rem;\">\n                                            <pre *ngIf=\"genTestcaseCompiled\" class=\"prettyprint lang-java\">{{generatedTestcase}}</pre>\n                                            <pre *ngIf=\"!genTestcaseCompiled\" class=\"prettyprint lang-java\">{{generatedTestcase | codeFormat}}</pre>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <table *ngIf=\"searchResults != null && searchResults.length > 0\" class=\"td-data-table bordered responsive-table\">\n                                <thead>\n                                    <tr class=\"td-data-table-row\">\n                                        <th class=\"td-data-table-column\" colspan=\"5\">\n                                            <span class=\"md-caption\" style=\"width: 100%;\">Test cases recommended for re-use:</span>\n                                            <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('reuseTCDesc')\">info</i>\n                                            <div id=\"reuseTCDesc\" class=\"scale-transition scale-out\">\n                                                Most similar test cases existing in the repository.\n                                            </div>\n                                        </th>\n                                    </tr>\n                                    <tr class=\"td-data-table-row\">\n                                        <th class=\"td-data-table-column\">\n                                            <span class=\"md-caption center-align valign-wrapper\">\n                                                <input #all class=\"filled-in\" type=\"checkbox\" id=\"all\" value=\"all\" (click)=\"selectAll($event)\">\n                                                <label for=\"all\"></label>\n                                            </span>\n                                        </th>\n                                        <!--<th class=\"td-data-table-column\"><span class=\"md-caption\">Story Id</span></th>-->\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Body</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Class Name</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Recommended Testcase</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Similarity Score</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Repository</span></th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngFor=\"let result of searchResults; let i = index;\">\n                                    <tr class=\"td-data-table-row\" tabindex=\"-1\">\n                                        <td class=\"td-data-table-cell center-align valign-wrapper\">\n                                            <input class=\"filled-in resultcb\" type=\"checkbox\" id=\"cb_{{i}}\" value=\"{{i}}\" (click)=\"lineSelect(''+i)\">\n                                            <label for=\"cb_{{i}}\"></label>\n                                        </td>\n                                        <!--<td class=\"td-data-table-cell\"></td>-->\n                                        <td class=\"td-data-table-cell\"><a (click)=\"showStoryBody(''+i)\">Show Details</a></td>\n                                        <td class=\"td-data-table-cell\">\n                                            <div materialize=\"tooltip\" class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" [attr.data-tooltip]=\"''+result?.packageName\">\n                                                {{result?.className}}\n                                            </div>\n                                        </td>\n                                        <td class=\"td-data-table-cell\">\n                                            <div materialize=\"tooltip\" class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" [attr.data-tooltip]=\"''+result?.packageName\">\n                                                {{result?.methodName}}\n                                            </div>\n                                        </td>\n                                        <td class=\"td-data-table-cell\">{{result?.similarity | number : '1.2-2'}}</td>\n                                        <td class=\"td-data-table-cell\"><a target=\"_blank\" href=\"{{result?.originURL}}\">{{(result?.repository).split('_')[1]}}</a></td>\n                                    </tr>\n                                    <tr class=\"td-data-table-row\" id=\"bodyId{{i}}\" style=\"display: none;\">\n                                        <td id=\"bodyIdText{{i}}\" class=\"td-data-table-cell\" colspan=\"5\" style=\"background-color: whitesmoke; font-family: monospace; padding: 0 0.5rem;\">\n                                            <pre *ngIf=\"result?.compiled\" class=\"prettyprint lang-java\" style=\"margin: 1;\">{{result?.body}}</pre>\n                                            <pre *ngIf=\"!(result?.compiled)\" class=\"prettyprint lang-java\" style=\"margin: 0;\">{{result?.body | codeFormat}}</pre>\n                                        </td>\n                                        <td class=\"td-data-table-cell\" colspan=\"1\" style=\"vertical-align: top; text-align: end; background-color: whitesmoke; font-family: monospace; padding: 0 0.5rem;\">\n                                            <a *ngIf=\"result?.classMembers && containsText(result?.classMembers)\" id=\"membersId{{i}}\" (click)=\"showMembers(''+i)\">Class Members</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__code_format_pipe__ = __webpack_require__("../../../../../src/app/search/code-format.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_copy_service__ = __webpack_require__("../../../../../src/app/_services/copy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_export_service__ = __webpack_require__("../../../../../src/app/_services/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_model_service__ = __webpack_require__("../../../../../src/app/_services/model.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_service__ = __webpack_require__("../../../../../src/app/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_styling_service__ = __webpack_require__("../../../../../src/app/_services/styling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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










var SearchComponent = (function () {
    function SearchComponent(cookieService, copyService, exportService, renderer, router, searchService, stylingService) {
        this.cookieService = cookieService;
        this.copyService = copyService;
        this.exportService = exportService;
        this.renderer = renderer;
        this.router = router;
        this.searchService = searchService;
        this.stylingService = stylingService;
        this.recommendString = '';
        this.areaString = '';
        this.taskString = '';
        this.defaultModel = 'GenericModel';
        this.defaultUUID = '';
        this.collectionName = '(Optional)';
        this.confidenceThresh = '0';
        this.recConfidenceThresh = '0';
        this.recCollectionName = '';
        this.generatedTestcase = '';
        this.genTestcaseCompiled = false;
        this.searchResults = [];
        this.searchResultsJson = null;
        this.storyDetails = '';
        this.searchResultsCount = 0;
        this.threshScaleOut = true;
        this.adminAccess = false;
        this.selectedResults = [];
        this.selectedResult1Body = '';
        this.selectedResult2Body = '';
        this.membersResultBody = '';
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.compModalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.membersModalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var userCookie = this.cookieService.get('ere-app-credentials');
        if (userCookie == null || userCookie === '') {
            // this.navigate('login');
        }
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.validateAdminAccess();
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        if (this.recConfidenceThresh !== '') {
            if (!(__WEBPACK_IMPORTED_MODULE_9_jquery__('#threshFieldDiv').hasClass('active'))) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#threshFieldDiv').addClass('active');
            }
            if (__WEBPACK_IMPORTED_MODULE_9_jquery__('#confidenceThresh').hasClass('ng-untouched')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#confidenceThresh').removeClass('ng-untouched');
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#confidenceThresh').addClass('ng-touched');
            }
            if (!(__WEBPACK_IMPORTED_MODULE_9_jquery__('#confidenceThreshLabel').hasClass('active'))) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#confidenceThreshLabel').addClass('active');
            }
        }
    };
    SearchComponent.prototype.ngAfterViewChecked = function () {
        var PR = window['PR'];
        PR.prettyPrint();
    };
    SearchComponent.prototype.containsText = function (target) {
        var whiteSpaces = /\S/g;
        return whiteSpaces.test(target);
    };
    SearchComponent.prototype.validateAdminAccess = function () {
        this.adminAccess = false;
    };
    SearchComponent.prototype.selectAll = function (event) {
        var element = this.allCB.nativeElement;
        var allSelected = element.checked;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('.resultcb').prop('checked', allSelected);
        if (allSelected) {
            this.selectedResults = [];
            for (var i = 0; i < this.searchResults.length; i++) {
                this.selectedResults.push('' + i);
            }
            this.setResultsMenuOptions(this.selectedResults.length);
        }
        else {
            this.selectedResults = [];
        }
    };
    SearchComponent.prototype.setResultsMenuOptions = function (selectedCount) {
        if (selectedCount === 1) {
            this.enableOption('exportOption', true);
            this.enableOption('copyOption', true);
            this.enableOption('compareOption', false);
        }
        else if (selectedCount === 2) {
            this.enableOption('exportOption', true);
            this.enableOption('copyOption', false);
            this.enableOption('compareOption', true);
        }
        else {
            this.enableOption('exportOption', true);
            this.enableOption('copyOption', false);
            this.enableOption('compareOption', false);
        }
    };
    SearchComponent.prototype.enableOption = function (targetId, targetEnabled) {
        if (targetEnabled) {
            if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").hasClass('disabled')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").removeClass('disabled');
            }
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").css('cursor', 'pointer');
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").mouseenter(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', '#ffac2f');
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-et-dark');
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-et-yellow');
                if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-inactive')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-inactive');
                }
            });
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").mouseleave(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', 'rgba(19, 19, 19, 1)');
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-et-yellow');
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-et-dark');
                if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-inactive')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-inactive');
                }
            });
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', 'rgba(19, 19, 19, 1)');
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).hover(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', '#ffac2f');
            });
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('cursor', 'pointer');
            if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-inactive')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-inactive');
            }
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").css('cursor', 'pointer');
        }
        else {
            if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").hasClass('disabled')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").addClass('disabled');
            }
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").css('cursor', 'default');
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).hover(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
            });
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('cursor', 'default');
            if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-et-yellow')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-et-yellow');
            }
            if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-et-dark')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-et-dark');
            }
            if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-inactive')) {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-inactive');
            }
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").css('cursor', 'default');
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").mouseenter(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
                if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-et-yellow')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-et-yellow');
                }
                if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-et-dark')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-et-dark');
                }
                if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-inactive')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-inactive');
                }
            });
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "Li").mouseleave(function () {
                __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
                if (__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-et-yellow')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").removeClass('md-et-yellow');
                }
                if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-et-dark')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-et-dark');
                }
                if (!__WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").hasClass('md-inactive')) {
                    __WEBPACK_IMPORTED_MODULE_9_jquery__("#" + targetId + "I").addClass('md-inactive');
                }
            });
        }
    };
    SearchComponent.prototype.lineSelect = function (targetId) {
        var targetSelected = __WEBPACK_IMPORTED_MODULE_9_jquery__("#cb_" + targetId).prop('checked');
        if (targetSelected) {
            this.selectedResults.push(targetId);
            this.setResultsMenuOptions(this.selectedResults.length);
        }
        else {
            var temp = [];
            for (var i = 0; i < this.selectedResults.length; i++) {
                if (this.selectedResults[i] !== targetId) {
                    temp.push(this.selectedResults[i]);
                }
            }
            this.selectedResults = temp;
            if (this.selectedResults.length) {
                this.setResultsMenuOptions(this.selectedResults.length);
            }
        }
    };
    SearchComponent.prototype.exportAsCsv = function () {
        this.exportService.exportToCSV(this.selectedResults, this.searchResults);
    };
    SearchComponent.prototype.copyToClipboard = function () {
        var textToCopy = __WEBPACK_IMPORTED_MODULE_9_jquery__("#bodyIdText" + this.selectedResults[0]).text();
        this.copyService.copyToClipboard(textToCopy);
    };
    SearchComponent.prototype.compare = function () {
        for (var i = 0; i < this.searchResults.length; i++) {
            if (this.selectedResults[0] === '' + i) {
                this.selectedResult1Body = this.searchResults[i].body.toString();
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#selectedResult1Body').html('<pre class="prettyprint lang-java">' + this.selectedResult1Body + '</pre>');
                var packageName = this.searchResults[i].packageName;
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#packageName1').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#className1').html('<b>Class:&nbsp;</b>' + this.searchResults[i].className);
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#methodName1').html('<b>Method:&nbsp;</b>' + this.searchResults[i].methodName);
            }
            if (this.selectedResults[1] === '' + i) {
                this.selectedResult2Body = this.searchResults[i].body.toString();
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#selectedResult2Body').html('<pre class="prettyprint lang-java">' + this.selectedResult2Body + '</pre>');
                var packageName = this.searchResults[i].packageName;
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#packageName2').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#className2').html('<b>Class:&nbsp;</b>' + this.searchResults[i].className);
                __WEBPACK_IMPORTED_MODULE_9_jquery__('#methodName2').html('<b>Method:&nbsp;</b>' + this.searchResults[i].methodName);
            }
        }
        this.compModalActions.emit({
            action: 'modal',
            params: ['open']
        });
    };
    SearchComponent.prototype.showMembers = function (id) {
        var formatter = new __WEBPACK_IMPORTED_MODULE_3__code_format_pipe__["a" /* CodeFormatPipe */]();
        var elementId = parseInt(id, 10);
        this.membersResultBody = this.searchResults[elementId].classMembers.toString();
        var packageName = this.searchResults[elementId].packageName;
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#membersPackageName').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#membersClassName').html('<b>Class:&nbsp;</b>' + this.searchResults[elementId].className);
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#membersResultBody').html('<pre class="prettyprint lang-java">' + formatter.transform(this.membersResultBody) + '</pre>');
        this.membersModalActions.emit({
            action: 'modal',
            params: ['open']
        });
    };
    SearchComponent.prototype.membersClose = function (event) {
        this.membersModalActions.emit({
            action: 'modal',
            params: ['close']
        });
        this.membersResultBody = '';
    };
    SearchComponent.prototype.menuInactive = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
    };
    SearchComponent.prototype.showFieldDescription = function (id) {
        this.stylingService.showFieldDescription(id);
    };
    SearchComponent.prototype.showStoryBody = function (id) {
        // console.log("Show me:" + id);
        var targetRow = document.getElementById("bodyId" + id);
        var currentDisplay = targetRow.style.display;
        if (currentDisplay === 'none') {
            targetRow.style.display = 'table-row';
        }
        else {
            targetRow.style.display = 'none';
        }
        // this.storyDetails = this.searchResults.filter(result => result.id === id)[0].body;
        this.storyDetails = this.searchResults.toString();
        var dispString = this.storyDetails.toString().replace(/;/g, ';\n');
        dispString = dispString.replace(/\./g, '\n    .');
    };
    SearchComponent.prototype.focusStyling = function (event) {
        this.stylingService.focusStyling(event);
    };
    SearchComponent.prototype.unFocusStyling = function (event) {
        this.stylingService.unFocusStyling(event);
    };
    SearchComponent.prototype.clearErrors = function () {
        var element = this.areaField.nativeElement;
        this.renderer.setElementStyle(element, 'border-bottom', '1px solid rgba(0,0,0,.12)');
        this.renderer.setElementStyle(element, 'box-shadow', 'none');
        element = this.taskField.nativeElement;
        this.renderer.setElementStyle(element, 'border-bottom', '1px solid rgba(0,0,0,.12)');
        this.renderer.setElementStyle(element, 'box-shadow', 'none');
        document.getElementById('settingsIcon').innerHTML = "";
        document.getElementById('settingsMsg').innerHTML = "";
    };
    SearchComponent.prototype.setInProgress = function (inProgress) {
        if (inProgress) {
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#recButton').addClass('disabled');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#recommendProgress').css('display', 'block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#recButton').removeClass('disabled');
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#recommendProgress').css('display', 'none');
        }
    };
    SearchComponent.prototype.setRecommendFailure = function (failure) {
        if (failure) {
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#recommendFailure').css('display', 'block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_9_jquery__('#recommendFailure').css('display', 'none');
        }
    };
    SearchComponent.prototype.clearSearchResults = function (event) {
        this.generatedTestcase = '';
        this.recommendString = '';
        this.areaString = '';
        this.taskString = '';
        this.collectionName = '(Optional)';
        this.recCollectionName = '';
        this.confidenceThresh = '(Optional)';
        this.recConfidenceThresh = '';
        this.storyDetails = '';
        this.searchResults = [];
        this.searchResultsJson = null;
    };
    SearchComponent.prototype.checkInput = function () {
        var continueSearch = true;
        this.clearErrors();
        if (this.defaultModel != null && this.defaultModel !== '') {
            if (this.areaString === '') {
                var element = this.areaField.nativeElement;
                this.renderer.setElementStyle(element, 'border-bottom', '1px solid red');
                this.renderer.setElementStyle(element, 'box-shadow', '0 1px 0 0 red');
                continueSearch = false;
            }
            if (this.taskString === '') {
                var element = this.taskField.nativeElement;
                this.renderer.setElementStyle(element, 'border-bottom', '1px solid red');
                this.renderer.setElementStyle(element, 'box-shadow', '0 1px 0 0 red');
                continueSearch = false;
            }
        }
        else {
            this.setErrorMessage('Model');
            continueSearch = false;
        }
        return continueSearch;
    };
    SearchComponent.prototype.search = function (event) {
        // this.defaultModel = this.searchService.getModelCookie();
        // this.defaultUUID = this.searchService.getUUIDCookie();
        var _this = this;
        if (this.checkInput()) {
            this.setRecommendFailure(false);
            this.modalActions.emit({ action: 'modal', params: ['close'] });
            this.searchResults = [];
            this.selectedResults = [];
            this.generatedTestcase = '';
            var body = {
                model: this.defaultModel,
                uuid: this.defaultUUID,
                area: this.areaString,
                task: this.taskString
            };
            this.setInProgress(true);
            this.searchService.search(body)
                .subscribe(function (data) {
                _this.searchResultsJson = data;
            }, function (err) {
                console.log('Error running search. Error: %s, URL: %s', err.status, err.url);
                _this.setInProgress(false);
                _this.setRecommendFailure(true);
            }, function () {
                var error_message = _this.searchResultsJson['error_message'];
                _this.setInProgress(false);
                if (error_message == null || error_message === '') {
                    _this.generatedTestcase = _this.searchResultsJson['result']['generated'];
                    _this.genTestcaseCompiled = _this.searchResultsJson['result']['genCompiled'];
                    _this.searchResults = _this.searchResultsJson['result']['reusable'];
                    if (_this.searchResults == null || _this.searchResults.length === 0) {
                        _this.setRecommendFailure(true);
                    }
                }
                else {
                    _this.setRecommendFailure(true);
                }
            });
        }
    };
    SearchComponent.prototype.openModal = function (event) {
        this.setInProgress(false);
        this.setRecommendFailure(false);
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    SearchComponent.prototype.compareClose = function (event) {
        this.compModalActions.emit({ action: 'modal', params: ['close'] });
        this.selectedResult1Body = '';
        this.selectedResult2Body = '';
    };
    SearchComponent.prototype.navigate = function (target) {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
        this.router.navigate(["/" + target]);
    };
    SearchComponent.prototype.setErrorMessage = function (missingSetting) {
        var _this = this;
        document.getElementById('settingsIcon').innerHTML = "<i class=\"material-icons\" style=\"margin-top: 5%;\">error</i>";
        document.getElementById('settingsMsg').innerHTML = "\n\t\tA default " + missingSetting + " setting is missing. Please set it in <a id=\"settingsLink\" class=\"nav-link\">Default Settings</a>.";
        __WEBPACK_IMPORTED_MODULE_9_jquery__('#settingsIcon').find('.material-icons').css('color', 'rgba(255, 172, 47, 1)');
        this.renderer.listen(document.getElementById('settingsLink'), 'click', function (event) {
            _this.navigate('settings');
        });
    };
    return SearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rankerSelect'),
    __metadata("design:type", Object)
], SearchComponent.prototype, "rankerSelect", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchField'),
    __metadata("design:type", Object)
], SearchComponent.prototype, "searchField", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('recommendField'),
    __metadata("design:type", Object)
], SearchComponent.prototype, "recommendField", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('areaField'),
    __metadata("design:type", Object)
], SearchComponent.prototype, "areaField", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('taskField'),
    __metadata("design:type", Object)
], SearchComponent.prototype, "taskField", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('all'),
    __metadata("design:type", Object)
], SearchComponent.prototype, "allCB", void 0);
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_copy_service__["a" /* CopyService */], __WEBPACK_IMPORTED_MODULE_5__services_export_service__["a" /* ExportService */], __WEBPACK_IMPORTED_MODULE_6__services_model_service__["a" /* ModelService */], __WEBPACK_IMPORTED_MODULE_7__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_8__services_styling_service__["a" /* StylingService */]],
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_copy_service__["a" /* CopyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_copy_service__["a" /* CopyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_export_service__["a" /* ExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_export_service__["a" /* ExportService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__search_service__["a" /* SearchService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_styling_service__["a" /* StylingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_styling_service__["a" /* StylingService */]) === "function" && _g || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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




var SearchService = (function () {
    function SearchService(cookieService, jsonp, http) {
        this.cookieService = cookieService;
        this.jsonp = jsonp;
        this.http = http;
    }
    SearchService.prototype.getModelCookie = function () {
        return this.cookieService.get('ere-app-default-model');
    };
    SearchService.prototype.getUUIDCookie = function () {
        return this.cookieService.get('ere-app-default-uuid');
    };
    SearchService.prototype.search = function (body) {
        var searchUrl = 'ere-app/api/v1.0/recommend';
        return this.http.post(searchUrl, body)
            .map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Jsonp */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _c || Object])
], SearchService);

var _a, _b, _c;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/assets/divider.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAMSURBVBhXYzh8+DAABJYCSsTDBsYAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
# limitations under the License. */ var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map