(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("rionite"), require("@riim/opal-select"), require("@riim/opal-input-validator"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "rionite", "@riim/opal-select", "@riim/opal-input-validator"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-select-validator"] = factory(require("reflect-metadata"), require("rionite"), require("@riim/opal-select"), require("@riim/opal-input-validator"));
	else
		root["@riim/opal-select-validator"] = factory(root["reflect-metadata"], root["rionite"], root["@riim/opal-select"], root["@riim/opal-input-validator"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__190__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 189);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(190);
__webpack_require__(17);
__webpack_require__(4);
__export(__webpack_require__(191));


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__190__;

/***/ }),

/***/ 191:
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
var opal_input_validator_1 = __webpack_require__(190);
var rionite_1 = __webpack_require__(10);
var OpalSelectValidatorRule_1 = __webpack_require__(192);
exports.OpalSelectValidatorRule = OpalSelectValidatorRule_1.OpalSelectValidatorRule;
__webpack_require__(193);
var OpalSelectValidator = /** @class */ (function (_super) {
    __extends(OpalSelectValidator, _super);
    function OpalSelectValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSelectValidator.prototype.ready = function () {
        _super.prototype.ready.call(this);
        this.target = this.select = this.$('select');
    };
    OpalSelectValidator.prototype._checkValue = function (rule) {
        var vm = this.select.viewModel;
        return !(vm.length
            ? (rule.paramMinCount && vm.length < rule.paramMinCount) ||
                (rule.paramTest && !rule.paramTest.call(this.ownerComponent, vm))
            : rule.paramRequired);
    };
    OpalSelectValidator = __decorate([
        rionite_1.Component({
            elementIs: 'OpalSelectValidator'
        })
    ], OpalSelectValidator);
    return OpalSelectValidator;
}(opal_input_validator_1.OpalInputValidator));
exports.OpalSelectValidator = OpalSelectValidator;


/***/ }),

/***/ 192:
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
var opal_input_validator_1 = __webpack_require__(190);
var rionite_1 = __webpack_require__(10);
var OpalSelectValidatorRule = /** @class */ (function (_super) {
    __extends(OpalSelectValidatorRule, _super);
    function OpalSelectValidatorRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Number)
    ], OpalSelectValidatorRule.prototype, "paramMinCount", void 0);
    OpalSelectValidatorRule = __decorate([
        rionite_1.Component({
            elementIs: 'OpalSelectValidatorRule'
        })
    ], OpalSelectValidatorRule);
    return OpalSelectValidatorRule;
}(opal_input_validator_1.OpalInputValidatorRule));
exports.OpalSelectValidatorRule = OpalSelectValidatorRule;


/***/ }),

/***/ 193:
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

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ });
});