(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"), require("@riim/opal-popover"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx-decorators", "rionite", "@riim/opal-popover"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-input-validator"] = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"), require("@riim/opal-popover"));
	else
		root["@riim/opal-input-validator"] = factory(root["reflect-metadata"], root["cellx-decorators"], root["rionite"], root["@riim/opal-popover"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__130__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(130);
__webpack_require__(4);
__export(__webpack_require__(131));


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__130__;

/***/ }),

/***/ 131:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
var OpalInputValidatorRule_1 = __webpack_require__(132);
exports.OpalInputValidatorRule = OpalInputValidatorRule_1.OpalInputValidatorRule;
__webpack_require__(135);
var template_nelm_1 = __webpack_require__(136);
var OpalInputValidator = /** @class */ (function (_super) {
    __extends(OpalInputValidator, _super);
    function OpalInputValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.failedRule = null;
        return _this;
    }
    Object.defineProperty(OpalInputValidator.prototype, "valid", {
        get: function () {
            return !this.failedRule;
        },
        enumerable: true,
        configurable: true
    });
    OpalInputValidator.prototype.ready = function () {
        this.rules = Array.prototype.map.call(this.element.getElementsByClassName('OpalInputValidatorRule'), function (ruleEl) { return ruleEl.$component; });
    };
    OpalInputValidator.prototype.elementAttached = function () {
        this.listenTo(this.target, 'change', this._onTargetChange);
    };
    OpalInputValidator.prototype._onTargetChange = function () {
        this.validate();
    };
    OpalInputValidator.prototype.validate = function () {
        return this._validate(this.rules);
    };
    OpalInputValidator.prototype._validate = function (rules) {
        var _this = this;
        var failedRule;
        rules.forEach(function (rule) {
            if (failedRule || _this._checkValue(rule)) {
                rule.hideMessage();
            }
            else {
                failedRule = rule;
                rule.showMessage();
            }
        });
        var prevFailedRule = this.failedRule;
        this.failedRule = failedRule || null;
        if (+!!failedRule ^ +!!prevFailedRule) {
            if (failedRule) {
                this.element.setAttribute('valid', 'no');
                this.emit('input-validation-error');
            }
            else {
                this.element.removeAttribute('valid');
                this.emit('input-validation-valid');
            }
        }
        return !failedRule;
    };
    OpalInputValidator.prototype._checkValue = function (rule) {
        return false;
    };
    OpalInputValidator.prototype.focusTarget = function () {
        this.target.focus();
        return this;
    };
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalInputValidator.prototype, "failedRule", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalInputValidator.prototype, "valid", null);
    OpalInputValidator = __decorate([
        rionite_1.Component({
            elementIs: 'OpalInputValidator',
            template: template_nelm_1.default
        })
    ], OpalInputValidator);
    return OpalInputValidator;
}(rionite_1.BaseComponent));
exports.OpalInputValidator = OpalInputValidator;


/***/ }),

/***/ 132:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(10);
__webpack_require__(133);
var template_nelm_1 = __webpack_require__(134);
var OpalInputValidatorRule = /** @class */ (function (_super) {
    __extends(OpalInputValidatorRule, _super);
    function OpalInputValidatorRule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramRequired = false;
        _this.paramPopoverPosition = 'right';
        return _this;
    }
    OpalInputValidatorRule.prototype.showMessage = function () {
        this.$('popover').open();
    };
    OpalInputValidatorRule.prototype.hideMessage = function () {
        this.$('popover').close();
    };
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalInputValidatorRule.prototype, "paramRequired", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Function)
    ], OpalInputValidatorRule.prototype, "paramTest", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalInputValidatorRule.prototype, "paramPopoverPosition", void 0);
    OpalInputValidatorRule = __decorate([
        rionite_1.Component({
            elementIs: 'OpalInputValidatorRule',
            template: template_nelm_1.default
        })
    ], OpalInputValidatorRule);
    return OpalInputValidatorRule;
}(rionite_1.BaseComponent));
exports.OpalInputValidatorRule = OpalInputValidatorRule;


/***/ }),

/***/ 133:
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

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("OpalPopover/popover (viewType=danger, position={paramPopoverPosition}) {\n@Slot/contentSlot\n}");

/***/ }),

/***/ 135:
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@Slot/contentSlot");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});