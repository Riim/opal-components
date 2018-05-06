(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-slider"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-slider"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(215));


/***/ }),

/***/ 215:
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
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(216);
var template_nelm_1 = __webpack_require__(217);
var OpalSlider = /** @class */ (function (_super) {
    __extends(OpalSlider, _super);
    function OpalSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMin = 0;
        _this.paramMax = 100;
        _this.paramStep = 1;
        _this.paramValue = 0;
        return _this;
    }
    Object.defineProperty(OpalSlider.prototype, "_firstInputWidth", {
        get: function () {
            var min = this.paramMin;
            var all = this.paramMax - min;
            return (Math.round(((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) /
                2 *
                1e5) / 1e3);
        },
        enumerable: true,
        configurable: true
    });
    OpalSlider.prototype.initialize = function () {
        var range = this.paramRange;
        if (range) {
            this._firstInputValue = range[0];
            this._secondInputValue = range[1];
        }
    };
    OpalSlider.prototype.elementAttached = function () {
        if (this.paramRange) {
            this.listenTo('firstInput', 'input', this._onFirstInputInput);
            this.listenTo('secondInput', 'input', this._onSecondInputInput);
        }
    };
    OpalSlider.prototype._onFirstInputInput = function (evt) {
        var secondInput = this.$('secondInput');
        var value = (this._firstInputValue = +evt.target.value);
        if (+secondInput.value < value) {
            secondInput.value = this._secondInputValue = value;
        }
    };
    OpalSlider.prototype._onSecondInputInput = function (evt) {
        var firstInput = this.$('firstInput');
        var value = (this._secondInputValue = +evt.target.value);
        if (+firstInput.value > value) {
            firstInput.value = this._firstInputValue = value;
        }
    };
    Object.defineProperty(OpalSlider.prototype, "value", {
        get: function () {
            return this.paramRange
                ? [this._firstInputValue, this._secondInputValue]
                : +this.$('input').value;
        },
        set: function (value) {
            if (this.paramRange) {
                this.$('firstInput').value = this._firstInputValue = value[0];
                this.$('secondInput').value = this._secondInputValue = value[1];
            }
            else {
                this.$('input').value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramMin", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramMax", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramStep", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param({ type: eval }),
        __metadata("design:type", Array)
    ], OpalSlider.prototype, "paramRange", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Number)
    ], OpalSlider.prototype, "_firstInputValue", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Number)
    ], OpalSlider.prototype, "_secondInputValue", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalSlider.prototype, "_firstInputWidth", null);
    OpalSlider = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalSlider);
    return OpalSlider;
}(rionite_1.BaseComponent));
exports.OpalSlider = OpalSlider;


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSlider{position:relative;top:-1px;display:inline-block;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSlider::before{position:absolute;top:3px;right:3px;left:3px;z-index:0;height:14px;border-radius:7px;background:#d6d6d6;content:''}.OpalSlider .OpalSlider__firstInputWrapper3{position:absolute;top:0;right:10px;left:10px;z-index:2}.OpalSlider .OpalSlider__firstInputWrapper2{position:relative}.OpalSlider .OpalSlider__firstInputWrapper{position:absolute;top:0;right:0;left:-10px;overflow:hidden}.OpalSlider .OpalSlider__firstInput,.OpalSlider .OpalSlider__secondInput{display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.OpalSlider .OpalSlider__firstInput::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__firstInput::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__firstInput::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__firstInput::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__firstInput::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__firstInput::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__firstInput::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__secondInput{position:relative;z-index:1}.OpalSlider .OpalSlider__secondInput::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__secondInput::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__secondInput::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__secondInput::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__secondInput::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__secondInput::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__secondInput::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__input{position:relative;z-index:1;display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.OpalSlider .OpalSlider__input::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__input::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__input::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__firstInput:hover::-webkit-slider-thumb{background:#597791}.OpalSlider .OpalSlider__firstInput:hover::-moz-range-thumb{background:#597791}.OpalSlider .OpalSlider__firstInput:hover::-ms-thumb{background:#597791}.OpalSlider .OpalSlider__secondInput:hover::-webkit-slider-thumb{background:#33a0ff}.OpalSlider .OpalSlider__secondInput:hover::-moz-range-thumb{background:#33a0ff}.OpalSlider .OpalSlider__secondInput:hover::-ms-thumb{background:#33a0ff}.OpalSlider .OpalSlider__input:hover::-webkit-slider-thumb{background:#597791}.OpalSlider .OpalSlider__input:hover::-moz-range-thumb{background:#597791}.OpalSlider .OpalSlider__input:hover::-ms-thumb{background:#597791}.OpalSlider .OpalSlider__firstInput:focus,.OpalSlider .OpalSlider__secondInput:focus,.OpalSlider .OpalSlider__input:focus{outline:0}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (paramRange) {\ndiv/firstInputWrapper3 {\ndiv/firstInputWrapper2 (style=width: {_firstInputWidth}%) {\ndiv/firstInputWrapper {\ninput/firstInput (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramRange.0}\n)\n}\n}\n}\ndiv/secondInputWrapper {\ninput/secondInput (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramRange.1}\n)\n}\n}\n@IfElse (paramRange) {\ninput/input (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramValue}\n)\n}\n}");

/***/ })

/******/ });
});