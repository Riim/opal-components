(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-popover"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-popover", "rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-input-validator"] = factory(require("@riim/opal-popover"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-input-validator"] = factory(root["@riim/opal-popover"], root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2L3N__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "3XXT");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0CRM":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalInputValidatorRule{display:block}.OpalInputValidatorRule .OpalInputValidatorRule__contentSlot{display:block;width:240px;text-align:center}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "2L3N":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2L3N__;

/***/ }),

/***/ "3XXT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("2L3N");
__webpack_require__("vA/G");
__export(__webpack_require__("za5m"));


/***/ }),

/***/ "4p0C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"OpalPopover",["popover"],[,[[,"viewType","danger"],[,"position","{popoverPosition}"]]],[[1,,"RnSlot",["contentSlot"],,]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "55WQ":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalInputValidator{position:relative;display:inline-block;vertical-align:middle}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "Vtj1":
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
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("0CRM");
const template_rnt_1 = __webpack_require__("4p0C");
let OpalInputValidatorRule = class OpalInputValidatorRule extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.required = false;
        this.popoverPosition = 'right';
    }
    showMessage() {
        this.$('popover').open();
    }
    hideMessage() {
        this.$('popover').close();
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalInputValidatorRule.prototype, "required", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Function)
], OpalInputValidatorRule.prototype, "test", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalInputValidatorRule.prototype, "popoverPosition", void 0);
OpalInputValidatorRule = __decorate([
    rionite_1.Component({
        elementIs: 'OpalInputValidatorRule',
        template: template_rnt_1.default
    })
], OpalInputValidatorRule);
exports.OpalInputValidatorRule = OpalInputValidatorRule;


/***/ }),

/***/ "nQ2J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"RnSlot",["contentSlot"],,]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ }),

/***/ "za5m":
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
var OpalInputValidator_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
const OpalInputValidatorRule_1 = __webpack_require__("Vtj1");
exports.OpalInputValidatorRule = OpalInputValidatorRule_1.OpalInputValidatorRule;
__webpack_require__("55WQ");
const template_rnt_1 = __webpack_require__("nQ2J");
let OpalInputValidator = OpalInputValidator_1 = class OpalInputValidator extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.failedRule = null;
    }
    get valid() {
        return !this.failedRule;
    }
    ready() {
        this.rules = Array.prototype.map.call(this.element.getElementsByClassName('OpalInputValidatorRule'), (ruleEl) => ruleEl.$component);
    }
    _onTargetChange() {
        this.validate();
    }
    validate() {
        return this._validate(this.rules);
    }
    _validate(rules) {
        let failedRule;
        rules.forEach(rule => {
            if (failedRule || this._checkValue(rule)) {
                rule.hideMessage();
            }
            else {
                failedRule = rule;
                rule.showMessage();
            }
        });
        let prevFailedRule = this.failedRule;
        this.failedRule = failedRule || null;
        if (+!!failedRule ^ +!!prevFailedRule) {
            if (failedRule) {
                this.target.element.setAttribute('valid', 'no');
                this.emit(OpalInputValidator_1.EVENT_INPUT_VALIDATION_ERROR);
            }
            else {
                this.target.element.removeAttribute('valid');
                this.emit(OpalInputValidator_1.EVENT_INPUT_VALIDATION_VALID);
            }
        }
        return !failedRule;
    }
    _checkValue(_rule) {
        return false;
    }
    focusTarget() {
        this.target.focus();
        return this;
    }
};
OpalInputValidator.EVENT_INPUT_VALIDATION_ERROR = Symbol('input-validation-error');
OpalInputValidator.EVENT_INPUT_VALIDATION_VALID = Symbol('input-validation-valid');
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalInputValidator.prototype, "failedRule", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalInputValidator.prototype, "valid", null);
__decorate([
    rionite_1.Listen((ctor) => ctor.targetChangeEvents, '@target'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalInputValidator.prototype, "_onTargetChange", null);
OpalInputValidator = OpalInputValidator_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalInputValidator',
        template: template_rnt_1.default
    })
], OpalInputValidator);
exports.OpalInputValidator = OpalInputValidator;


/***/ })

/******/ });
});