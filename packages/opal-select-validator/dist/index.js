(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-input-validator"), require("@riim/opal-tag-select"), require("@riim/opal-select"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-input-validator", "@riim/opal-tag-select", "@riim/opal-select", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-select-validator"] = factory(require("@riim/opal-input-validator"), require("@riim/opal-tag-select"), require("@riim/opal-select"), require("rionite"));
	else
		root["@riim/opal-select-validator"] = factory(root["@riim/opal-input-validator"], root["@riim/opal-tag-select"], root["@riim/opal-select"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__9L4b__, __WEBPACK_EXTERNAL_MODULE_cu1Y__, __WEBPACK_EXTERNAL_MODULE_jL6t__, __WEBPACK_EXTERNAL_MODULE_u4yd__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "Zk1K");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1EIP":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelectValidator.OpalInputValidator .OpalInputValidator__select{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "3iSk":
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
const opal_select_1 = __webpack_require__("jL6t");
const opal_tag_select_1 = __webpack_require__("cu1Y");
const rionite_1 = __webpack_require__("u4yd");
const OpalSelectValidatorRule_1 = __webpack_require__("AiAd");
exports.OpalSelectValidatorRule = OpalSelectValidatorRule_1.OpalSelectValidatorRule;
__webpack_require__("1EIP");
let OpalSelectValidator = class OpalSelectValidator extends opal_input_validator_1.OpalInputValidator {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "select", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    ready() {
        super.ready();
        this.target = this.select = this.$('select');
        this.select.validator = this;
    }
    _checkValue(rule) {
        let vm = this.select.viewModel;
        return !(vm.length
            ? (rule.minCount && vm.length < rule.minCount) ||
                (rule.test && !rule.test.call(this.ownerComponent, vm))
            : rule.required);
    }
};
Object.defineProperty(OpalSelectValidator, "targetChangeEvents", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [opal_select_1.OpalSelect.EVENT_CHANGE, opal_tag_select_1.OpalTagSelect.EVENT_CHANGE]
});
OpalSelectValidator = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSelectValidator'
    })
], OpalSelectValidator);
exports.OpalSelectValidator = OpalSelectValidator;


/***/ }),

/***/ "9L4b":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9L4b__;

/***/ }),

/***/ "AiAd":
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
let OpalSelectValidatorRule = class OpalSelectValidatorRule extends opal_input_validator_1.OpalInputValidatorRule {
};
__decorate([
    rionite_1.Param(Number)
], OpalSelectValidatorRule.prototype, "minCount", void 0);
OpalSelectValidatorRule = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSelectValidatorRule'
    })
], OpalSelectValidatorRule);
exports.OpalSelectValidatorRule = OpalSelectValidatorRule;


/***/ }),

/***/ "Zk1K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("9L4b");
__webpack_require__("jL6t");
__export(__webpack_require__("3iSk"));


/***/ }),

/***/ "cu1Y":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cu1Y__;

/***/ }),

/***/ "jL6t":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jL6t__;

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ })

/******/ });
});