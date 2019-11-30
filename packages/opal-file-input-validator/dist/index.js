(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-file-input"), require("@riim/opal-input-validator"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-file-input", "@riim/opal-input-validator", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-file-input-validator"] = factory(require("@riim/opal-file-input"), require("@riim/opal-input-validator"), require("rionite"));
	else
		root["@riim/opal-file-input-validator"] = factory(root["@riim/opal-file-input"], root["@riim/opal-input-validator"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__7gVv__, __WEBPACK_EXTERNAL_MODULE__9L4b__, __WEBPACK_EXTERNAL_MODULE_u4yd__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "+B1z");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+B1z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("7gVv");
__webpack_require__("9L4b");
__export(__webpack_require__("bt6Z"));


/***/ }),

/***/ "7gVv":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7gVv__;

/***/ }),

/***/ "9L4b":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9L4b__;

/***/ }),

/***/ "bt6Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const opal_file_input_1 = __webpack_require__("7gVv");
const opal_input_validator_1 = __webpack_require__("9L4b");
const rionite_1 = __webpack_require__("u4yd");
const OpalFileInputValidatorRule_1 = __webpack_require__("og5v");
exports.OpalFileInputValidatorRule = OpalFileInputValidatorRule_1.OpalFileInputValidatorRule;
__webpack_require__("pZs+");
let OpalFileInputValidator = class OpalFileInputValidator extends opal_input_validator_1.OpalInputValidator {
    ready() {
        super.ready();
        this.target = this.fileInput = this.$('fileInput');
        this.fileInput.validator = this;
    }
    _checkValue(rule) {
        let dataList = this.fileInput.dataList;
        return !(dataList.length
            ? (rule.minCount && dataList.length < rule.minCount) ||
                (rule.test && !rule.test.call(this.ownerComponent, dataList))
            : rule.required);
    }
};
OpalFileInputValidator.targetChangeEvents = [opal_file_input_1.OpalFileInput.EVENT_CHANGE];
OpalFileInputValidator = __decorate([
    rionite_1.Component({
        elementIs: 'OpalFileInputValidator'
    })
], OpalFileInputValidator);
exports.OpalFileInputValidator = OpalFileInputValidator;


/***/ }),

/***/ "og5v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const opal_input_validator_1 = __webpack_require__("9L4b");
const rionite_1 = __webpack_require__("u4yd");
let OpalFileInputValidatorRule = class OpalFileInputValidatorRule extends opal_input_validator_1.OpalInputValidatorRule {
};
__decorate([
    rionite_1.Param(Number)
], OpalFileInputValidatorRule.prototype, "minCount", void 0);
OpalFileInputValidatorRule = __decorate([
    rionite_1.Component({
        elementIs: 'OpalFileInputValidatorRule'
    })
], OpalFileInputValidatorRule);
exports.OpalFileInputValidatorRule = OpalFileInputValidatorRule;


/***/ }),

/***/ "pZs+":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalFileInputValidator.OpalInputValidator .OpalInputValidator__fileInput{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ })

/******/ });
});