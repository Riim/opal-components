(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-text-input"), require("reflect-metadata"), require("rionite"), require("@riim/opal-input-validator"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-text-input", "reflect-metadata", "rionite", "@riim/opal-input-validator"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-text-input-validator"] = factory(require("@riim/opal-text-input"), require("reflect-metadata"), require("rionite"), require("@riim/opal-input-validator"));
	else
		root["@riim/opal-text-input-validator"] = factory(root["@riim/opal-text-input"], root["reflect-metadata"], root["rionite"], root["@riim/opal-input-validator"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__192__) {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 238);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__192__;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(192);
__webpack_require__(3);
__webpack_require__(4);
__export(__webpack_require__(239));


/***/ }),

/***/ 239:
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
var opal_input_validator_1 = __webpack_require__(192);
var rionite_1 = __webpack_require__(11);
var OpalTextInputValidatorRule_1 = __webpack_require__(240);
exports.OpalTextInputValidatorRule = OpalTextInputValidatorRule_1.OpalTextInputValidatorRule;
__webpack_require__(241);
var OpalTextInputValidator = /** @class */ (function (_super) {
    __extends(OpalTextInputValidator, _super);
    function OpalTextInputValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTextInputValidator.prototype.ready = function () {
        _super.prototype.ready.call(this);
        this.target = this.textInput = this.$('textInput');
    };
    OpalTextInputValidator.prototype.elementAttached = function () {
        _super.prototype.elementAttached.call(this);
        this.listenTo(this.textInput, 'input', this._onTextInputInput);
    };
    OpalTextInputValidator.prototype._onTextInputInput = function () {
        if (this.failedRule) {
            this._validate([this.failedRule]);
        }
    };
    OpalTextInputValidator.prototype._checkValue = function (rule) {
        var value = this.textInput.value;
        return !(value
            ? (rule.paramMinLength && value.length < rule.paramMinLength) ||
                (rule.paramRegex && !rule.paramRegex.test(value)) ||
                (rule.paramTest && !rule.paramTest.call(this.ownerComponent, value))
            : rule.paramRequired);
    };
    OpalTextInputValidator = __decorate([
        rionite_1.Component({
            elementIs: 'OpalTextInputValidator'
        })
    ], OpalTextInputValidator);
    return OpalTextInputValidator;
}(opal_input_validator_1.OpalInputValidator));
exports.OpalTextInputValidator = OpalTextInputValidator;


/***/ }),

/***/ 240:
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
var opal_input_validator_1 = __webpack_require__(192);
var rionite_1 = __webpack_require__(11);
var OpalTextInputValidatorRule = /** @class */ (function (_super) {
    __extends(OpalTextInputValidatorRule, _super);
    function OpalTextInputValidatorRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Number)
    ], OpalTextInputValidatorRule.prototype, "paramMinLength", void 0);
    __decorate([
        rionite_1.Param({ type: eval, readonly: true }),
        __metadata("design:type", RegExp)
    ], OpalTextInputValidatorRule.prototype, "paramRegex", void 0);
    OpalTextInputValidatorRule = __decorate([
        rionite_1.Component({
            elementIs: 'OpalTextInputValidatorRule'
        })
    ], OpalTextInputValidatorRule);
    return OpalTextInputValidatorRule;
}(opal_input_validator_1.OpalInputValidatorRule));
exports.OpalTextInputValidatorRule = OpalTextInputValidatorRule;


/***/ }),

/***/ 241:
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


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ });
});