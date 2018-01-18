(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("@riim/opal-sign-button"), require("@riim/opal-tag-select"), require("@riim/opal-tree-select"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "@riim/opal-sign-button", "@riim/opal-tag-select", "@riim/opal-tree-select"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tree-tag-select"] = factory(require("rionite"), require("reflect-metadata"), require("@riim/opal-sign-button"), require("@riim/opal-tag-select"), require("@riim/opal-tree-select"));
	else
		root["@riim/opal-tree-tag-select"] = factory(root["rionite"], root["reflect-metadata"], root["@riim/opal-sign-button"], root["@riim/opal-tag-select"], root["@riim/opal-tree-select"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_263__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 262);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(15);
__webpack_require__(26);
__webpack_require__(263);
__webpack_require__(1);
__export(__webpack_require__(264));


/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_263__;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var opal_tag_select_1 = __webpack_require__(26);
var rionite_1 = __webpack_require__(0);
var template_nelm_1 = __webpack_require__(265);
var OpalTreeTagSelect = /** @class */ (function (_super) {
    __extends(OpalTreeTagSelect, _super);
    function OpalTreeTagSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTreeTagSelect.prototype._onSelectSelect = function () {
        return false;
    };
    OpalTreeTagSelect.prototype._onSelectDeselect = function () {
        return false;
    };
    OpalTreeTagSelect = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTreeTagSelect);
    return OpalTreeTagSelect;
}(opal_tag_select_1.OpalTagSelect));
exports.OpalTreeTagSelect = OpalTreeTagSelect;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("OpalTreeSelect/select (\nviewType=clean,\ndataTreeListKeypath={_dataListKeypathParam},\ndataTreeListItemSchema={paramDataListItemSchema |dump },\nvalue={paramValue},\nviewModel={viewModel},\nviewModelItemSchema={paramViewModelItemSchema |dump },\naddNewItem={paramAddNewItem},\nfocused={paramFocused}\n) {\nOpalSignButton/button (\nclass=OpalSelect__button,\nsign=plus,\ncheckable,\ntabIndex={paramTabIndex},\ndisabled={paramDisabled}\n)\n}");

/***/ })

/******/ });
});