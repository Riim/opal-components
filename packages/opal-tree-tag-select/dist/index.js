(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-tree-select"), require("@riim/opal-tag-select"), require("@riim/opal-sign-button"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-tree-select", "@riim/opal-tag-select", "@riim/opal-sign-button", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tree-tag-select"] = factory(require("@riim/opal-tree-select"), require("@riim/opal-tag-select"), require("@riim/opal-sign-button"), require("rionite"));
	else
		root["@riim/opal-tree-tag-select"] = factory(root["@riim/opal-tree-select"], root["@riim/opal-tag-select"], root["@riim/opal-sign-button"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__6dQR__, __WEBPACK_EXTERNAL_MODULE_cu1Y__, __WEBPACK_EXTERNAL_MODULE_ej3F__, __WEBPACK_EXTERNAL_MODULE_u4yd__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "l3Dk");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6dQR":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6dQR__;

/***/ }),

/***/ "cu1Y":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cu1Y__;

/***/ }),

/***/ "ej3F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ej3F__;

/***/ }),

/***/ "fGh4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"OpalTreeSelect",["select"],[,[[,"viewType","clean"],[,"dataTreeListKeypath","{_selectDataListKeypath}"],[,"dataTreeListItemSchema","{dataListItemSchema |dump }"],[,"value","{paramValue}"],[,"viewModel","{viewModel}"],[,"viewModelItemSchema","{viewModelItemSchema |dump }"],[,"addNewItem","{addNewItem}"],[,"focused","{focused}"]]],[[1,,"RnSlot",,[,[[,"class","OpalSelect__menuHeaderSlot"],[,"for","OpalSelect__menuHeader"]]],],[1,,"OpalSignButton",["button"],[,[[,"class","OpalSelect__button"],[,"sign","plus"],[,"checkable",""],[,"tabIndex","{tabIndex}"],[,"disabled","{disabled}"]]],]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "l3Dk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("ej3F");
__webpack_require__("cu1Y");
__webpack_require__("6dQR");
__export(__webpack_require__("yjNT"));


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "yjNT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const opal_tag_select_1 = __webpack_require__("cu1Y");
const rionite_1 = __webpack_require__("u4yd");
const template_rnt_1 = __webpack_require__("fGh4");
let OpalTreeTagSelect = class OpalTreeTagSelect extends opal_tag_select_1.OpalTagSelect {
    _onSelectSelect() {
        return false;
    }
    _onSelectDeselect() {
        return false;
    }
};
OpalTreeTagSelect = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTreeTagSelect',
        template: template_rnt_1.default
    })
], OpalTreeTagSelect);
exports.OpalTreeTagSelect = OpalTreeTagSelect;


/***/ })

/******/ });
});