(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/copy.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/copy.service.ts ***!
  \*******************************************/
/*! exports provided: CopyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyService", function() { return CopyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

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

var CopyService = /** @class */ (function () {
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
    CopyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CopyService);
    return CopyService;
}());



/***/ }),

/***/ "./src/app/_services/export.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/export.service.ts ***!
  \*********************************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

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

var ExportService = /** @class */ (function () {
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
        window.open(encodeUri, '_blank', '');
    };
    ExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExportService);
    return ExportService;
}());



/***/ }),

/***/ "./src/app/_services/model.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/model.service.ts ***!
  \********************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");

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



var ModelService = /** @class */ (function () {
    function ModelService(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
    }
    ModelService.prototype.getModels = function () {
        var modelUrl = 'http://46.7.70.185:53568/models';
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"]({
            // headers: requestHeaders,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Get,
            url: modelUrl
        }))
            .map(function (res) { return res.json().result; });
    };
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/_services/styling.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/styling.service.ts ***!
  \**********************************************/
/*! exports provided: StylingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingService", function() { return StylingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

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


var StylingService = /** @class */ (function () {
    function StylingService() {
    }
    StylingService.prototype.showFieldDescription = function (id) {
        if (jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id).hasClass('scale-out')) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id).removeClass('scale-out');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id).addClass('scale-out');
        }
    };
    StylingService.prototype.focusStyling = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + value).css('border-bottom', '1px solid #ffac2f');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + value).css('box-shadow', '0 1px 0 0 #ffac2f');
    };
    StylingService.prototype.unFocusStyling = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + value).css('border-bottom', '1px solid rgba(0,0,0,.12)');
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + value).css('box-shadow', 'none');
    };
    StylingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StylingService);
    return StylingService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommender/recommender.component */ "./src/app/recommender/recommender.component.ts");

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
    { path: 'recommender', component: _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_3__["RecommenderComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. */\nbody {\n    margin: 0;\n    padding: 0px;\n    color: #191919;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n#content {\n    padding: 20px;\n}\n.mdc-layout-grid {\n    padding: 0px;\n}\n.material-icons.md-18 {\n    font-size: 18px;\n}\n.material-icons.md-24 {\n    font-size: 24px;\n}\n.material-icons.md-36 {\n    font-size: 36px;\n}\n.material-icons.md-48 {\n    font-size: 48px;\n}\n.material-icons.md-et-dark {\n    color: rgba(19, 19, 19, 1);\n}\n.material-icons.md-et-dark:hover {\n    color: rgba(255, 172, 47, 1);\n}\n.material-icons.md-et-dark.md-inactive {\n    color: rgba(19, 19, 19, 0.3);\n}\n.material-icons.md-light {\n    color: rgba(255, 255, 255, 1);\n}\n.material-icons.md-light.md-inactive {\n    color: rgba(255, 255, 255, 0.3);\n}\n.material-icons.md-et-yellow {\n    color: rgba(255, 172, 47, 1);\n}\n.material-icons.md-et-yellow.md-inactive {\n    color: rgba(255, 172, 47, 0.3);\n}\n.material-icons.md-et-red {\n    color: rgba(200, 42, 14, 1)\n}\n.material-icons.md-et-gray {\n    color: rgba(66, 66, 66, 1);\n}\n.material-icons.md-et-gray.md-inactive {\n    color: rgba(66, 66, 66, 0.3);\n}\n.spacer {\n    flex: 1 1 auto;\n}\nh1 {\n    color: #191919;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 250%;\n}\n.sidebar {\n    height: 100%;\n    background-color: #191919;\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.sidebar ul {\n    list-style: none;\n}\n.sidebar li {\n    padding: 5px 0px;\n    margin-left: -15px;\n}\n.clickable {\n    cursor: pointer;\n}\n.hidden {\n    display: none;\n}\n/* label focus color */\ninput[type=text]:focus + label {\n    color: #ffac2f;\n}\n/* label underline focus color */\ninput[type=text]:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n/* label focus color */\ninput[type=password]:focus + label {\n    color: #ffac2f;\n}\n/* label underline focus color */\ninput[type=password]:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n.elastest-button {\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7a0NBYWtDO0FBQ2xDO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFHSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaURBQWlEO0lBQ2pELGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlEQUFpRDtBQUNyRDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksY0FBYztBQUNsQjtBQUVBLGdDQUFnQztBQUNoQztJQUNJLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxjQUFjO0FBQ2xCO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksV0FBVztJQUNYLGlEQUFpRDtJQUNqRCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jIChDKSBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTlcbiNcbiMgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiMgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiNcbiMgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuI1xuIyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4jIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiMgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4jIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiMgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuICovXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiAjMTkxOTE5O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tZGMtbGF5b3V0LWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLTE4IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC0yNCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMubWQtMzYge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLTQ4IHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC1ldC1kYXJrIHtcbiAgICBjb2xvcjogcmdiYSgxOSwgMTksIDE5LCAxKTtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLWV0LWRhcms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTcyLCA0NywgMSk7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC1ldC1kYXJrLm1kLWluYWN0aXZlIHtcbiAgICBjb2xvcjogcmdiYSgxOSwgMTksIDE5LCAwLjMpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQubWQtaW5hY3RpdmUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC1ldC15ZWxsb3cge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTcyLCA0NywgMSk7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC1ldC15ZWxsb3cubWQtaW5hY3RpdmUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTcyLCA0NywgMC4zKTtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLWV0LXJlZCB7XG4gICAgY29sb3I6IHJnYmEoMjAwLCA0MiwgMTQsIDEpXG59XG5cbi5tYXRlcmlhbC1pY29ucy5tZC1ldC1ncmF5IHtcbiAgICBjb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAxKTtcbn1cblxuLm1hdGVyaWFsLWljb25zLm1kLWV0LWdyYXkubWQtaW5hY3RpdmUge1xuICAgIGNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIDAuMyk7XG59XG5cbi5zcGFjZXIge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5oMSB7XG4gICAgY29sb3I6ICMxOTE5MTk7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbn1cblxuLnNpZGViYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNpZGViYXIgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyIGxpIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBsYWJlbCBmb2N1cyBjb2xvciAqL1xuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyArIGxhYmVsIHtcbiAgICBjb2xvcjogI2ZmYWMyZjtcbn1cblxuLyogbGFiZWwgdW5kZXJsaW5lIGZvY3VzIGNvbG9yICovXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWMyZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmYWMyZjtcbn1cblxuLyogbGFiZWwgZm9jdXMgY29sb3IgKi9cbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzICsgbGFiZWwge1xuICAgIGNvbG9yOiAjZmZhYzJmO1xufVxuXG4vKiBsYWJlbCB1bmRlcmxpbmUgZm9jdXMgY29sb3IgKi9cbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWMyZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmYWMyZjtcbn1cblxuLmVsYXN0ZXN0LWJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFjMmY7ICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. -->\n<div class=\"container\">    \n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ElasTest Dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_code_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/code-format.pipe */ "./src/app/search/code-format.pipe.ts");
/* harmony import */ var _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recommender/recommender.component */ "./src/app/recommender/recommender.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");

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













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _search_code_format_pipe__WEBPACK_IMPORTED_MODULE_10__["CodeFormatPipe"],
                _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_11__["RecommenderComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["JsonpModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_7__["MaterializeModule"]
            ],
            providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/recommender/recommender.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recommender/recommender.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. */\n.rec-divider {\n    display: inherit;\n    width: 95%;\n    height: 2px;\n    background-color: rgba(66,66,66,0.8);\n    padding: 10px 0px;\n    background: url('divider.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kZXIvcmVjb21tZW5kZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztrQ0Fha0M7QUFDbEM7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLDhCQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVuZGVyL3JlY29tbWVuZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIyAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE5XG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4jIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4jIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4jIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLiAqL1xuLnJlYy1kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjgpO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2RpdmlkZXIucG5nJyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/recommender/recommender.component.html":
/*!********************************************************!*\
  !*** ./src/app/recommender/recommender.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. -->\n<app-search></app-search>\n"

/***/ }),

/***/ "./src/app/recommender/recommender.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recommender/recommender.component.ts ***!
  \******************************************************/
/*! exports provided: RecommenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommenderComponent", function() { return RecommenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

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

var RecommenderComponent = /** @class */ (function () {
    function RecommenderComponent() {
    }
    RecommenderComponent.prototype.ngOnInit = function () { };
    RecommenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'recommender',
            template: __webpack_require__(/*! ./recommender.component.html */ "./src/app/recommender/recommender.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./recommender.component.css */ "./src/app/recommender/recommender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecommenderComponent);
    return RecommenderComponent;
}());



/***/ }),

/***/ "./src/app/search/code-format.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/search/code-format.pipe.ts ***!
  \********************************************/
/*! exports provided: CodeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeFormatPipe", function() { return CodeFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

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

var CodeFormatPipe = /** @class */ (function () {
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
    CodeFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'codeFormat' })
    ], CodeFormatPipe);
    return CodeFormatPipe;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. */\n.label:before {\n    content: '';\n    right: 6px;\n    top: 0px;\n    width: 20px;\n    height: 20px;\n    background: #666666;\n    position: absolute;\n    pointer-events: none;\n    display: block;\n}\n.recommend select {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    color: #191919;\n    background-color: #fff;\n    cursor: pointer;\n}\n.recommend select::-ms-expand {\n    display: none;\n}\n/* Targetting Webkit browsers only. FF will show the dropdown arrow with so much padding. */\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n    select {\n        padding-right: 18px\n    }\n}\n/* label focus color */\n.recommend select:focus + label {\n    color: #ffac2f;\n}\n/* label underline focus color */\n.recommend select:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n.recommend input[type=text] {\n    width: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n/* label focus color */\n.recommend input[type=text]:focus + label {\n    color: #ffac2f;\n}\n/* label underline focus color */\n.recommend input[type=text]:focus {\n    border-bottom: 1px solid #ffac2f;\n    box-shadow: 0 1px 0 0 #ffac2f;\n}\n.recommend #recDialogCancel {\n    color: rgba(0, 0, 0, 0.54);\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: whitesmoke;\n}\n.recommend #recDialogOk {\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f; \n}\n#compDialogOk {\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f;    \n}\n#recButton {\n    /*color: #ffac2f;*/\n    color: #fff;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #ffac2f;\n}\n#search-results-card input[type=\"checkbox\"].filled-in:checked + label:after{\n    border: 2px solid #ffac2f;\n    background-color: #ffac2f;\n}\n.td-data-table-column {\n    color: rgba(0, 0, 0, 0.54);\n}\n.td-data-table-column span {\n    cursor: pointer;\n}\n.td-data-table-row:focus {\n    outline: none;\n}\n#search-results-card a {\n    color: rgba(0, 0, 0, 0.54);\n    cursor: pointer;\n}\n#search-results-card#resultsDD > li > a {\n    color: rgba(19, 19, 19, 1);\n    cursor: pointer;\n}\n#search-results-card a:hover {\n    color: #ffac2f;\n}\n#search-results-card > li.disabled > a:hover {\n    color: rgba(19, 19, 19, 0.3);\n}\n.nav-link a {\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.54);\n}\n.nav-link a:hover {\n    color: #ffac2f;\n}\na:hover i {\n    color: #ffac2f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O2tDQWFrQztBQUNsQztJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBLDJGQUEyRjtBQUMzRjtJQUNJO1FBQ0k7SUFDSjtBQUNKO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksY0FBYztBQUNsQjtBQUVBLGdDQUFnQztBQUNoQztJQUNJLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGNBQWM7QUFDbEI7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaURBQWlEO0lBQ2pELDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksV0FBVztJQUNYLGlEQUFpRDtJQUNqRCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxpREFBaUQ7SUFDakQseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlEQUFpRDtJQUNqRCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIyAoQykgQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE5XG4jXG4jIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4jIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiMgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4jXG4jICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiNcbiMgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4jIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4jIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLiAqL1xuLmxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcmlnaHQ6IDZweDtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZWNvbW1lbmQgc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMxOTE5MTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWNvbW1lbmQgc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBUYXJnZXR0aW5nIFdlYmtpdCBicm93c2VycyBvbmx5LiBGRiB3aWxsIHNob3cgdGhlIGRyb3Bkb3duIGFycm93IHdpdGggc28gbXVjaCBwYWRkaW5nLiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKSB7XG4gICAgc2VsZWN0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMThweFxuICAgIH1cbn1cblxuLyogbGFiZWwgZm9jdXMgY29sb3IgKi9cbi5yZWNvbW1lbmQgc2VsZWN0OmZvY3VzICsgbGFiZWwge1xuICAgIGNvbG9yOiAjZmZhYzJmO1xufVxuXG4vKiBsYWJlbCB1bmRlcmxpbmUgZm9jdXMgY29sb3IgKi9cbi5yZWNvbW1lbmQgc2VsZWN0OmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWMyZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmYWMyZjtcbn1cblxuLnJlY29tbWVuZCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIGxhYmVsIGZvY3VzIGNvbG9yICovXG4ucmVjb21tZW5kIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmFjMmY7XG59XG5cbi8qIGxhYmVsIHVuZGVybGluZSBmb2N1cyBjb2xvciAqL1xuLnJlY29tbWVuZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWMyZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZmYWMyZjtcbn1cblxuLnJlY29tbWVuZCAjcmVjRGlhbG9nQ2FuY2VsIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnJlY29tbWVuZCAjcmVjRGlhbG9nT2sge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYzJmOyBcbn1cblxuI2NvbXBEaWFsb2dPayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFjMmY7ICAgIFxufVxuXG4jcmVjQnV0dG9uIHtcbiAgICAvKmNvbG9yOiAjZmZhYzJmOyovXG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFjMmY7XG59XG5cbiNzZWFyY2gtcmVzdWx0cy1jYXJkIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCArIGxhYmVsOmFmdGVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmFjMmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWMyZjtcbn1cblxuLnRkLWRhdGEtdGFibGUtY29sdW1uIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLnRkLWRhdGEtdGFibGUtY29sdW1uIHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRkLWRhdGEtdGFibGUtcm93OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jc2VhcmNoLXJlc3VsdHMtY2FyZCBhIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzZWFyY2gtcmVzdWx0cy1jYXJkI3Jlc3VsdHNERCA+IGxpID4gYSB7XG4gICAgY29sb3I6IHJnYmEoMTksIDE5LCAxOSwgMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2VhcmNoLXJlc3VsdHMtY2FyZCBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmYWMyZjtcbn1cblxuI3NlYXJjaC1yZXN1bHRzLWNhcmQgPiBsaS5kaXNhYmxlZCA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDE5LCAxOSwgMTksIDAuMyk7XG59XG5cbi5uYXYtbGluayBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5uYXYtbGluayBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmYWMyZjtcbn1cblxuYTpob3ZlciBpIHtcbiAgICBjb2xvcjogI2ZmYWMyZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n# (C) Copyright IBM Corp. 2019\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#     http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License. -->\n<div class=\"row\" style=\"margin-top: 10px;\">\n    <div *ngIf=\"!adminAccess\" class=\"col s12 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align\">\n        <a id=\"recButton\" class=\"waves-light btn\" (click)=\"openModal($event)\">New Recommendation</a>\n    </div>\n</div>    \n\n<div id=\"rec-mzc-dialog\" class=\"modal recommend\" materialize=\"modal\" [materializeActions]=\"modalActions\">\n    <div class=\"modal-content\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h5>New Test Case Recommendation</h5>\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                Provide a brief description of the the test case, indicating the area and task you want to test.\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"left-align\" style=\"display: inline-block; width: 100%\">\n                    <div id=\"areaFieldDiv\" class=\"input-field inline\" style=\"width: 65%; margin-right: 5px;\">\n                        <input #areaField id=\"areaField\" type=\"text\" [(ngModel)]=\"areaString\" (focus)=\"focusStyling($event)\" (blur)=\"unFocusStyling($event)\"/>\n                        <label for=\"areaField\">Area Description</label>\n                    </div>\n                    <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('areaDesc')\">info</i>\n                </div>\n                <div id=\"areaDesc\" class=\"scale-transition scale-out\">\n                    The description of tested area, e.g \"ordered integer serialiser\".\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"left-align\" style=\"display: inline-block; width: 100%\">\n                    <div id=\"taskFieldDiv\" class=\"input-field inline\" style=\"width: 65%; margin-right: 5px;\">\n                        <input #taskField id=\"taskField\" type=\"text\" [(ngModel)]=\"taskString\" (focus)=\"focusStyling($event)\" (blur)=\"unFocusStyling($event)\"/>\n                        <label for=\"taskField\">Task Description</label>\n                    </div>\n                    <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('taskDesc')\">info</i>\n                </div>\n                <div id=\"taskDesc\" class=\"scale-transition scale-out\">\n                    The description of tested task, e.g. \"test if can serialise a sample range\".\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div id=\"settingsIcon\" class=\"valign-wrapper\" style=\"vertical-align: middle; display: inline-block; padding-right: 5px;\">\n        </div>\n        <div class=\"valign-wrapper\" style=\"vertical-align: middle; display: inline-block; padding-right: 10px;\">\n            <span id=\"settingsMsg\" style=\"color: red;\"></span>\n        </div>\n        <div style=\"display: inline-block; padding-right: 10px;\">\n            <a id=\"recDialogCancel\" class=\"waves-effect waves-light btn modal-close\">Cancel</a>\n        </div>\n        <div style=\"display: inline-block;\">    \n            <a id=\"recDialogOk\" class=\"waves-light btn\" (click)=\"search($event)\">Ok</a>\n        </div> \n    </div>\n</div>\n\n<div id=\"comp-mzc-dialog\" class=\"modal\" materialize=\"modal\" [materializeActions]=\"compModalActions\">\n    <div class=\"modal-content\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h5>Compare Testcases</h5>\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"packageName1\" class=\"col s6\"></div>\n                <div id=\"packageName2\" class=\"col s6\"></div>   \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"className1\" class=\"col s6\"></div>\n                <div id=\"className2\" class=\"col s6\"></div>   \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"methodName1\" class=\"col s6\"></div>\n                <div id=\"methodName2\" class=\"col s6\"></div>   \n            </div>\n        </div>\n        <div class=\"row\" style=\"background-color: whitesmoke;\">\n            <div id=\"selectedResult1Body\" class=\"col s6\">\n            </div>\n            <div id=\"selectedResult2Body\" class=\"col s6\" style=\"border-left: 1px solid #666666;\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div style=\"display: inline-block;\">    \n            <a id=\"compDialogOk\" class=\"waves-light btn\" (click)=\"compareClose($event)\">Ok</a>\n        </div> \n    </div>\n</div>\n\n<div id=\"members-mzc-dialog\" class=\"modal\" materialize=\"modal\" [materializeActions]=\"membersModalActions\">\n    <div class=\"modal-content\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h5>Class Members</h5>\n            </div>    \n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"membersPackageName\" class=\"col s12\"></div>   \n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s12\" style=\"display: inline-block;\">\n                <div id=\"membersClassName\" class=\"col s12\"></div>   \n            </div>\n        </div>\n        <div class=\"row\" style=\"background-color: whitesmoke;\">\n            <div id=\"membersResultBody\" class=\"col s12\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div style=\"display: inline-block;\">    \n            <a id=\"membersDialogOk\" class=\"waves-light btn elastest-button\" (click)=\"membersClose($event)\">Ok</a>\n        </div> \n    </div>\n</div>\n\n<div id=\"recommendProgress\" class=\"row\" style=\"display: none; margin-top: 6rem;\">\n    <div *ngIf=\"!adminAccess\" class=\"col s12 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align\">\n        <div class=\"center-align valign-wrapper\" style=\"white-space: nowrap; color: rgba(0, 0, 0, 0.54);\">\n            <div style=\"margin: 0 auto;\">Generating test case recommendations...</div>\n        </div>\n        <div class=\"preloader-wrapper small active\" style=\"margin-top: 2rem;\">\n            <div class=\"spinner-layer spinner-yellow-only\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s11 m5 l5 xl3 offset-m3 offset-l3 offset-xl4 center-align\">\n        <div class=\"center-align valign-wrapper\" style=\"white-space: nowrap; color: rgba(0, 0, 0, 0.54);\">\n            Generating test case recommendations...\n        </div>\n        <div class=\"preloader-wrapper small active\" style=\"margin-top: 2rem;\">\n            <div class=\"spinner-layer spinner-yellow-only\">\n                <div class=\"circle-clipper left\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"gap-patch\">\n                    <div class=\"circle\"></div>\n                </div><div class=\"circle-clipper right\">\n                    <div class=\"circle\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s1 offset-m3 offset-l3 offset-xl4\"></div>\n</div>\n\n<div id=\"recommendFailure\" class=\"row\" style=\"display: none; margin-top: 6rem; margin-top: 6rem;\">\n    <div *ngIf=\"!adminAccess\" class=\"col s12 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align valign-wrapper\">\n        <div style=\"margin: 0 auto;\">\n            <div class=\"center-align valign-wrapper\" style=\"display: inline-block;\">\n                <i class=\"material-icons md-et-red\" style=\"display: inline-block; vertical-align: middle;\">error_outline</i>\n            </div>\n            <div class=\"center-align valign-wrapper\" style=\"display: inline-block; margin-left: 1rem; white-space: nowrap; color: rgba(200, 42, 14, 1);\">\n                There was an issue recommending test cases.\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s11 m6 l6 xl4 offset-m3 offset-l3 offset-xl4 center-align valign-wrapper\">\n        <div class=\"center-align valign-wrapper\" style=\"display: inline-block;\">\n            <i class=\"material-icons md-et-red\" style=\"display: inline-block; vertical-align: middle;\">error_outline</i>\n        </div>\n        <div class=\"center-align valign-wrapper\" style=\"display: inline-block; margin-left: 1rem; white-space: nowrap; color: rgba(200, 42, 14, 1);\">\n            There was an issue recommending test cases.\n        </div>\n    </div>\n    <div *ngIf=\"adminAccess\" class=\"col s1 offset-m3 offset-l3 offset-xl4\"></div>\n</div>\n\n<div *ngIf=\"(searchResults != null && searchResults.length > 0) || generatedTestcase != ''\" flex-gt-lg=\"100\" layout-gt-sm=\"column\">\n    <div class=\"inset\">\n        <div layout=\"column\" layout-gt-sm=\"row\">\n            <div flex-gt-sm=\"100\">\n                <div class=\"card\" id=\"search-results-card\">\n                    <div class=\"card-image calign-wrapper valign-wrapper\" style=\"padding: 0px 2%; background-color: whitesmoke;\">\n                        <div style=\"width: 90%; display: inline-block;\">\n                            <div style=\"width: 100%; display: inline-block;\">\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block; color: rgba(0, 0, 0, 0.54);\">\n                                    Your description of the test case:&nbsp;\n                                </div>\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block;\">\n                                    <span style=\"color: rgba(0, 0, 0, 0.54);\"><b>Area:</b> \"{{areaString}}\"</span>\n                                </div>\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block;\">\n                                    <span style=\"color: rgba(0, 0, 0, 0.54);\"><b>Task:</b> \"{{taskString}}\"</span>\n                                </div>\n                            </div>\n                            <div style=\"width: 100%; display: block;\">\n                                <div class=\"left-align valign-wrapper\" style=\"display: inline-block; color: rgba(0, 0, 0, 0.54);\">\n                                    Queried model: <b>{{defaultModel}}</b>&nbsp;\n                                </div>\n                            </div>\n                        </div>    \n                        <div class=\"right-align valign-wrapper\" style=\"vertical-align: middle; width: 10%; display: inline-block; margin: auto 0px;\">\n                            <div *ngIf=\"selectedResults != null && selectedResults.length > 0\" class=\"right-align valign-wrapper\" style=\"display: inline-block;\">\n                                <a materialize=\"dropdown\" class=\"dropdown-button\" data-alignment=\"right\" data-activates=\"resultsDD\">\n                                    <i id=\"resultsDDIcon\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%; cursor:default;\">more_horiz</i>\n                                </a>\n                            \n                                <ul id=\"resultsDD\" class=\"dropdown-content\">\n                                    <li id=\"exportOptionLi\" class=\"left-align valign-wrapper\" style=\"vertical-align: middle;\" (click)=\"exportAsCsv()\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"exportAsCsv()\"><i id=\"exportOptionI\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%;\">save</i></div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\"><a id=\"exportOption\" (click)=\"exportAsCsv()\">Export as CSV</a></div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length === 1\" id=\"copyOptionLi\" class=\"left-align valign-wrapper\"\n                                                                        style=\"vertical-align: middle;\" (click)=\"copyToClipboard()\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"copyToClipboard()\">\n                                            <i id=\"copyOptionI\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%;\">content_copy</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"copyOption\" (click)=\"copyToClipboard()\">Copy to Clipboard</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length !== 1\" id=\"copyOptionLi\" class=\"left-align valign-wrapper\" \n                                                                        style=\"vertical-align: middle;\" (click)=\"menuInactive($event)\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"menuInactive($event)\">\n                                            <i id=\"copyOptionI\" class=\"material-icons md-et-dark md-inactive\" style=\"padding-top: 5%;\">content_copy</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"copyOption\" (click)=\"menuInactive($event)\">Copy to Clipboard</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length === 2\" id=\"compareOptionLi\" class=\"left-align valign-wrapper\" \n                                                                        style=\"vertical-align: middle;\" (click)=\"compare()\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"compare()\">\n                                            <i id=\"compareOptionI\" class=\"material-icons md-et-dark\" style=\"padding-top: 5%;\">border_vertical</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"compareOption\" (click)=\"compare()\">Compare</a>\n                                        </div>\n                                    </li>\n                                    <li *ngIf=\"selectedResults.length !== 2\" id=\"compareOptionLi\" class=\"left-align valign-wrapper\" \n                                                                        style=\"vertical-align: middle;\" (click)=\"menuInactive($event)\">\n                                        <div style=\"margin-left: 2%;\" (click)=\"menuInactive($event)\">\n                                            <i id=\"compareOptionI\" class=\"material-icons md-et-dark md-inactive\" style=\"padding-top: 5%;\">border_vertical</i>\n                                        </div>\n                                        <div style=\"margin-left: 2%; padding-right: 2%;\">\n                                            <a id=\"compareOption\" (click)=\"menuInactive($event)\">Compare</a>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div *ngIf=\"selectedResults == null || selectedResults.length === 0\" class=\"right-align valign-wrapper\" style=\"display: inline-block;\">\n                                <i id=\"resultsDDIcon\" class=\"material-icons md-et-dark md-inactive\" style=\"padding-top: 5%; cursor:default;\">more_horiz</i>\n                            </div>\n                            <div class=\"right-align valign-wrapper\" style=\"display: inline-block;\">\n                                <i class=\"material-icons md-et-dark\" style=\"padding-top: 5%; cursor: pointer;\" (click)=\"clearSearchResults($event)\">cancel</i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"mat-table-container\" style=\"overflow-x: auto;\">\n                            <table *ngIf=\"genTestcaseCompiled\" class=\"td-data-table bordered responsive-table\">\n                                <thead>\n                                    <tr class=\"td-data-table-row\">\n                                        <th class=\"td-data-table-column\">\n                                            <span class=\"md-caption\">Recommended test case:</span>\n                                            <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('recTCDesc')\">info</i>\n                                            <div id=\"recTCDesc\" class=\"scale-transition scale-out\">\n                                                New code generated from the provided description. \n                                            </div>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr class=\"td-data-table-row\" tabindex=\"-1\">\n                                        <td class=\"td-data-table-cell\" colspan=\"5\" style=\"background-color: whitesmoke; font-family: monospace; padding: 0 0.5rem;\">\n                                            <pre *ngIf=\"genTestcaseCompiled\" class=\"prettyprint lang-java\">{{generatedTestcase}}</pre>\n                                            <pre *ngIf=\"!genTestcaseCompiled\" class=\"prettyprint lang-java\">{{generatedTestcase | codeFormat}}</pre>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div *ngIf=\"genTestcaseCompiled\" id=\"progressDiv\" style=\"display: block; text-align: center; margin-top: 6rem;\">\n                                <div style=\"white-space: nowrap; color: rgba(0, 0, 0, 0.54);\">\n                                    Retrieving reusable test cases...\n                                </div>\n                                <div class=\"preloader-wrapper small active\" style=\"margin-top: 2rem;\">\n                                    <div class=\"spinner-layer spinner-yellow-only\">\n                                        <div class=\"circle-clipper left\">\n                                            <div class=\"circle\"></div>\n                                        </div>\n                                        <div class=\"gap-patch\">\n                                            <div class=\"circle\"></div>\n                                        </div>\n                                        <div class=\"circle-clipper right\">\n                                            <div class=\"circle\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id=\"reusableFailure\" style=\"display: none; text-align: center; margin-top: 6rem;\">\n                                <div style=\"margin: 0 auto;\">\n                                    <div class=\"center-align valign-wrapper\" style=\"display: inline-block;\">\n                                        <i class=\"material-icons md-et-red\" style=\"display: inline-block; vertical-align: middle;\">error_outline</i>\n                                    </div>\n                                    <div class=\"center-align valign-wrapper\" style=\"display: inline-block; margin-left: 1rem; white-space: nowrap; color: rgba(200, 42, 14, 1);\">\n                                        There was an issue retrieving reusable test cases.\n                                    </div>\n                                </div>\n                            </div>\n                            <table *ngIf=\"searchResults != null && searchResults.length > 0\" class=\"td-data-table bordered responsive-table\">\n                                <thead>\n                                    <tr class=\"td-data-table-row\">\n                                        <th class=\"td-data-table-column\" colspan=\"6\">\n                                            <span class=\"md-caption\" style=\"width: 100%;\">Test cases recommended for re-use:</span>\n                                            <i class=\"material-icons md-et-yellow\" style=\"cursor: pointer; display: inline-block; vertical-align: middle;\" (click)=\"showFieldDescription('reuseTCDesc')\">info</i>\n                                            <div id=\"reuseTCDesc\" class=\"scale-transition scale-out\">\n                                                Most similar test cases existing in the repository.\n                                            </div>\n                                        </th>\n                                    </tr>\n                                    <tr class=\"td-data-table-row\">\n                                        <th class=\"td-data-table-column\">\n                                            <span class=\"md-caption center-align valign-wrapper\">\n                                                <input #all class=\"filled-in\" type=\"checkbox\" id=\"all\" value=\"all\" (click)=\"selectAll($event)\">\n                                                <label for=\"all\"></label>\n                                            </span>\n                                        </th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Body</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Class Name</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Recommended Testcase</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Similarity Score</span></th>\n                                        <th class=\"td-data-table-column\"><span class=\"md-caption\">Repository</span></th>\n                                    </tr>\n                                </thead>\n                                <tbody *ngFor=\"let result of searchResults; let i = index;\">\n                                    <tr class=\"td-data-table-row\" tabindex=\"-1\">\n                                        <td class=\"td-data-table-cell center-align valign-wrapper\">\n                                            <input class=\"filled-in resultcb\" type=\"checkbox\" id=\"cb_{{i}}\" value=\"{{i}}\" (click)=\"lineSelect(''+i)\">\n                                            <label for=\"cb_{{i}}\"></label>\n                                        </td>\n                                        <td class=\"td-data-table-cell\"><a (click)=\"showStoryBody(''+i)\">Show Details</a></td>\n                                        <td class=\"td-data-table-cell\">\n                                            <div materialize=\"tooltip\" class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" [attr.data-tooltip]=\"''+result?.packageName\">\n                                                {{result?.className}}\n                                            </div>\n                                        </td>\n                                        <td class=\"td-data-table-cell\">\n                                            <div materialize=\"tooltip\" class=\"tooltipped\" data-position=\"right\" data-delay=\"50\" [attr.data-tooltip]=\"''+result?.packageName\">\n                                                {{result?.methodName}}\n                                            </div>\n                                        </td>\n                                        <td class=\"td-data-table-cell\">{{result?.similarity | number : '1.2-2'}}</td>\n                                        <td class=\"td-data-table-cell\"><a target=\"_blank\" href=\"{{result?.originURL}}\">{{(result?.repository).split('_')[1]}}</a></td>\n                                    </tr>\n                                    <tr class=\"td-data-table-row\" id=\"bodyId{{i}}\" style=\"display: none;\">\n                                        <td id=\"bodyIdText{{i}}\" class=\"td-data-table-cell\" colspan=\"5\" style=\"background-color: whitesmoke; font-family: monospace; padding: 0 0.5rem;\">\n                                            <pre *ngIf=\"result?.compiled\" class=\"prettyprint lang-java\" style=\"margin: 1;\">{{result?.body}}</pre>\n                                            <pre *ngIf=\"!(result?.compiled)\" class=\"prettyprint lang-java\" style=\"margin: 0;\">{{result?.body | codeFormat}}</pre>\n                                        </td>\n                                        <td class=\"td-data-table-cell\" colspan=\"1\" style=\"vertical-align: top; text-align: end; background-color: whitesmoke; font-family: monospace; padding: 0 0.5rem;\">\n                                            <a *ngIf=\"result?.classMembers && containsText(result?.classMembers)\" id=\"membersId{{i}}\" (click)=\"showMembers(''+i)\">Class Members</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-format.pipe */ "./src/app/search/code-format.pipe.ts");
/* harmony import */ var _services_copy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/copy.service */ "./src/app/_services/copy.service.ts");
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/export.service */ "./src/app/_services/export.service.ts");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/model.service */ "./src/app/_services/model.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _services_styling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/styling.service */ "./src/app/_services/styling.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);

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










var SearchComponent = /** @class */ (function () {
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
        this.modalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.compModalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.membersModalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            if (!(jquery__WEBPACK_IMPORTED_MODULE_10__('#threshFieldDiv').hasClass('active'))) {
                jquery__WEBPACK_IMPORTED_MODULE_10__('#threshFieldDiv').addClass('active');
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_10__('#confidenceThresh').hasClass('ng-untouched')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__('#confidenceThresh').removeClass('ng-untouched');
                jquery__WEBPACK_IMPORTED_MODULE_10__('#confidenceThresh').addClass('ng-touched');
            }
            if (!(jquery__WEBPACK_IMPORTED_MODULE_10__('#confidenceThreshLabel').hasClass('active'))) {
                jquery__WEBPACK_IMPORTED_MODULE_10__('#confidenceThreshLabel').addClass('active');
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
        jquery__WEBPACK_IMPORTED_MODULE_10__('.resultcb').prop('checked', allSelected);
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
            if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").hasClass('disabled')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").removeClass('disabled');
            }
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").css('cursor', 'pointer');
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").mouseenter(function () {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', '#ffac2f');
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-et-dark');
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-et-yellow');
                if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-inactive')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-inactive');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").mouseleave(function () {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', 'rgba(19, 19, 19, 1)');
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-et-yellow');
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-et-dark');
                if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-inactive')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-inactive');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', 'rgba(19, 19, 19, 1)');
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).hover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', '#ffac2f');
            });
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('cursor', 'pointer');
            if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-inactive')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-inactive');
            }
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").css('cursor', 'pointer');
        }
        else {
            if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").hasClass('disabled')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").addClass('disabled');
            }
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").css('cursor', 'default');
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).hover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
            });
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('cursor', 'default');
            if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-et-yellow')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-et-yellow');
            }
            if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-et-dark')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-et-dark');
            }
            if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-inactive')) {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-inactive');
            }
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").css('cursor', 'default');
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").mouseenter(function () {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
                if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-et-yellow')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-et-yellow');
                }
                if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-et-dark')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-et-dark');
                }
                if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-inactive')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-inactive');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "Li").mouseleave(function () {
                jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId).css('color', 'rgba(19, 19, 19, 0.3)');
                if (jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-et-yellow')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").removeClass('md-et-yellow');
                }
                if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-et-dark')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-et-dark');
                }
                if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").hasClass('md-inactive')) {
                    jquery__WEBPACK_IMPORTED_MODULE_10__("#" + targetId + "I").addClass('md-inactive');
                }
            });
        }
    };
    SearchComponent.prototype.lineSelect = function (targetId) {
        var targetSelected = jquery__WEBPACK_IMPORTED_MODULE_10__("#cb_" + targetId).prop('checked');
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
        var textToCopy = jquery__WEBPACK_IMPORTED_MODULE_10__("#bodyIdText" + this.selectedResults[0]).text();
        this.copyService.copyToClipboard(textToCopy);
    };
    SearchComponent.prototype.compare = function () {
        for (var i = 0; i < this.searchResults.length; i++) {
            if (this.selectedResults[0] === '' + i) {
                this.selectedResult1Body = this.searchResults[i].body.toString();
                jquery__WEBPACK_IMPORTED_MODULE_10__('#selectedResult1Body').html('<pre class="prettyprint lang-java">' + this.selectedResult1Body + '</pre>');
                var packageName = this.searchResults[i].packageName;
                jquery__WEBPACK_IMPORTED_MODULE_10__('#packageName1').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
                jquery__WEBPACK_IMPORTED_MODULE_10__('#className1').html('<b>Class:&nbsp;</b>' + this.searchResults[i].className);
                jquery__WEBPACK_IMPORTED_MODULE_10__('#methodName1').html('<b>Method:&nbsp;</b>' + this.searchResults[i].methodName);
            }
            if (this.selectedResults[1] === '' + i) {
                this.selectedResult2Body = this.searchResults[i].body.toString();
                jquery__WEBPACK_IMPORTED_MODULE_10__('#selectedResult2Body').html('<pre class="prettyprint lang-java">' + this.selectedResult2Body + '</pre>');
                var packageName = this.searchResults[i].packageName;
                jquery__WEBPACK_IMPORTED_MODULE_10__('#packageName2').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
                jquery__WEBPACK_IMPORTED_MODULE_10__('#className2').html('<b>Class:&nbsp;</b>' + this.searchResults[i].className);
                jquery__WEBPACK_IMPORTED_MODULE_10__('#methodName2').html('<b>Method:&nbsp;</b>' + this.searchResults[i].methodName);
            }
        }
        this.compModalActions.emit({
            action: 'modal',
            params: ['open']
        });
    };
    SearchComponent.prototype.showMembers = function (id) {
        var formatter = new _code_format_pipe__WEBPACK_IMPORTED_MODULE_4__["CodeFormatPipe"]();
        var elementId = parseInt(id, 10);
        this.membersResultBody = this.searchResults[elementId].classMembers.toString();
        var packageName = this.searchResults[elementId].packageName;
        jquery__WEBPACK_IMPORTED_MODULE_10__('#membersPackageName').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
        jquery__WEBPACK_IMPORTED_MODULE_10__('#membersClassName').html('<b>Class:&nbsp;</b>' + this.searchResults[elementId].className);
        jquery__WEBPACK_IMPORTED_MODULE_10__('#membersResultBody').html('<pre class="prettyprint lang-java">' + formatter.transform(this.membersResultBody) + '</pre>');
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
        var targetRow = document.getElementById("bodyId" + id);
        var currentDisplay = targetRow.style.display;
        if (currentDisplay === 'none') {
            targetRow.style.display = 'table-row';
        }
        else {
            targetRow.style.display = 'none';
        }
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
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recButton').addClass('disabled');
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recommendProgress').css('display', 'block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recButton').removeClass('disabled');
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recommendProgress').css('display', 'none');
        }
    };
    SearchComponent.prototype.setReusableInProgress = function (inProgress) {
        if (inProgress) {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recButton').addClass('disabled');
            jquery__WEBPACK_IMPORTED_MODULE_10__('#progressDiv').css('display', 'block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recButton').removeClass('disabled');
            jquery__WEBPACK_IMPORTED_MODULE_10__('#progressDiv').css('display', 'none');
        }
    };
    SearchComponent.prototype.setRecommendFailure = function (failure) {
        if (failure) {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recommendFailure').css('display', 'block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#recommendFailure').css('display', 'none');
        }
    };
    SearchComponent.prototype.setReusableFailure = function (failure) {
        if (failure) {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#reusableFailure').css('display', 'block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_10__('#reusableFailure').css('display', 'none');
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
                    // now retrieve the reusable test cases
                    var retrieveBody = {
                        model: _this.defaultModel,
                        nn: _this.searchResultsJson['result']['reusable']['nn'],
                        nn_sims: _this.searchResultsJson['result']['reusable']['nn_sims']
                    };
                    _this.searchService.retrieve(retrieveBody)
                        .subscribe(function (retrieveData) {
                        _this.searchResultsJson = retrieveData;
                    }, function (retrieveErr) {
                        console.log('Error running retrieve. Error: %s, URL: %s', retrieveErr.status, retrieveErr.url);
                        _this.setReusableInProgress(false);
                        _this.setReusableFailure(true);
                    }, function () {
                        var retrieveError = _this.searchResultsJson['error_message'];
                        if (retrieveError == null || retrieveError === '') {
                            _this.searchResults = _this.searchResultsJson;
                            if (_this.searchResults == null || _this.searchResults.length === 0) {
                                _this.setReusableFailure(true);
                            }
                            _this.setReusableInProgress(false);
                        }
                        else {
                            _this.setReusableInProgress(false);
                            _this.setReusableFailure(true);
                        }
                    });
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
        jquery__WEBPACK_IMPORTED_MODULE_10__('#settingsIcon').find('.material-icons').css('color', 'rgba(255, 172, 47, 1)');
        this.renderer.listen(document.getElementById('settingsLink'), 'click', function (event) {
            _this.navigate('settings');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rankerSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "rankerSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "searchField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recommendField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "recommendField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('areaField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "areaField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taskField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "taskField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('all'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "allCB", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            providers: [_services_copy_service__WEBPACK_IMPORTED_MODULE_5__["CopyService"], _services_export_service__WEBPACK_IMPORTED_MODULE_6__["ExportService"], _services_model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"], _services_styling_service__WEBPACK_IMPORTED_MODULE_9__["StylingService"]],
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _services_copy_service__WEBPACK_IMPORTED_MODULE_5__["CopyService"], _services_export_service__WEBPACK_IMPORTED_MODULE_6__["ExportService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"], _services_styling_service__WEBPACK_IMPORTED_MODULE_9__["StylingService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__);

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




var SearchService = /** @class */ (function () {
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
    SearchService.prototype.retrieve = function (reusable) {
        var retUrl = 'ere-app/api/v1.0/recommend';
        var reusableString = JSON.stringify(reusable);
        return this.http.get(retUrl + '?json=' + encodeURIComponent(reusableString))
            .map(function (res) { return res.json().result; });
    };
    SearchService.prototype.search = function (body) {
        var searchUrl = 'ere-app/api/v1.0/recommend';
        return this.http.post(searchUrl, body)
            .map(function (res) { return res.json(); });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gordon/code/src_IIX-elastest-trial-and-full/elastest-trial-and-full/elastest-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map