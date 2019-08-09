(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-input-validator"), require("@riim/opal-text-input"), require("reflect-metadata"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-input-validator", "@riim/opal-text-input", "reflect-metadata", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-text-input-validator"] = factory(require("@riim/opal-input-validator"), require("@riim/opal-text-input"), require("reflect-metadata"), require("rionite"));
	else
		root["@riim/opal-text-input-validator"] = factory(root["@riim/opal-input-validator"], root["@riim/opal-text-input"], root["reflect-metadata"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__export(__webpack_require__(4));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalTextInputValidator_1;
Object.defineProperty(exports, "__esModule", { value: true });
const opal_input_validator_1 = __webpack_require__(1);
const opal_text_input_1 = __webpack_require__(2);
const rionite_1 = __webpack_require__(5);
const OpalTextInputValidatorRule_1 = __webpack_require__(6);
exports.OpalTextInputValidatorRule = OpalTextInputValidatorRule_1.OpalTextInputValidatorRule;
__webpack_require__(7);
let OpalTextInputValidator = OpalTextInputValidator_1 = class OpalTextInputValidator extends opal_input_validator_1.OpalInputValidator {
    ready() {
        super.ready();
        this.target = this.textInput = this.$('textInput');
    }
    elementAttached() {
        super.elementAttached();
        this.listenTo(this.textInput, this.constructor.targetInputEvents, this._onTextInputInput);
    }
    _onTextInputInput() {
        if (this.failedRule) {
            this._validate([this.failedRule]);
        }
    }
    _checkValue(rule) {
        let value = this.textInput.value;
        return !(value
            ? (rule.minLength && value.length < rule.minLength) ||
                (rule.regex && !rule.regex.test(value)) ||
                (rule.test && !rule.test.call(this.ownerComponent, value))
            : rule.required);
    }
};
OpalTextInputValidator.targetChangeEvents = [opal_text_input_1.OpalTextInput.EVENT_CHANGE];
OpalTextInputValidator.targetInputEvents = [opal_text_input_1.OpalTextInput.EVENT_INPUT];
OpalTextInputValidator = OpalTextInputValidator_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTextInputValidator'
    })
], OpalTextInputValidator);
exports.OpalTextInputValidator = OpalTextInputValidator;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const opal_input_validator_1 = __webpack_require__(1);
const rionite_1 = __webpack_require__(5);
let OpalTextInputValidatorRule = class OpalTextInputValidatorRule extends opal_input_validator_1.OpalInputValidatorRule {
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Number)
], OpalTextInputValidatorRule.prototype, "minLength", void 0);
__decorate([
    rionite_1.Param({ type: eval }),
    __metadata("design:type", RegExp)
], OpalTextInputValidatorRule.prototype, "regex", void 0);
OpalTextInputValidatorRule = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTextInputValidatorRule'
    })
], OpalTextInputValidatorRule);
exports.OpalTextInputValidatorRule = OpalTextInputValidatorRule;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTextInputValidator.OpalInputValidator .OpalInputValidator__textInput{display:block}.OpalTextInputValidator.OpalInputValidator[valid=no] .OpalInputValidator__textInput .OpalTextInput__textField{border-color:#f63159}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ })
/******/ ]);
});