(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-slider"] = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-slider"] = factory(root["reflect-metadata"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
const cellx_decorators_1 = __webpack_require__(3);
const rionite_1 = __webpack_require__(4);
__webpack_require__(5);
const template_rnt_1 = __webpack_require__(6);
let OpalSlider = class OpalSlider extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.paramMin = 0;
        this.paramMax = 100;
        this.paramStep = 1;
        this.paramValue = 0;
    }
    get _firstInputWidth() {
        let min = this.paramMin;
        let all = this.paramMax - min;
        return (Math.round((((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) *
            1e5) / 1e3);
    }
    initialize() {
        let range = this.paramRange;
        if (range) {
            this._firstInputValue = range[0];
            this._secondInputValue = range[1];
        }
    }
    elementAttached() {
        if (this.paramRange) {
            this.listenTo('firstInput', 'input', this._onFirstInputInput);
            this.listenTo('secondInput', 'input', this._onSecondInputInput);
        }
    }
    _onFirstInputInput(evt) {
        let secondInput = this.$('secondInput');
        let value = (this._firstInputValue = +evt.target.value);
        if (+secondInput.value < value) {
            secondInput.value = this._secondInputValue = value;
        }
    }
    _onSecondInputInput(evt) {
        let firstInput = this.$('firstInput');
        let value = (this._secondInputValue = +evt.target.value);
        if (+firstInput.value > value) {
            firstInput.value = this._firstInputValue = value;
        }
    }
    get value() {
        return this.paramRange
            ? [this._firstInputValue, this._secondInputValue]
            : +this.$('input').value;
    }
    set value(value) {
        if (this.paramRange) {
            this.$('firstInput').value = this._firstInputValue = value[0];
            this.$('secondInput').value = this._secondInputValue = value[1];
        }
        else {
            this.$('input').value = value;
        }
    }
};
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
        elementIs: 'OpalSlider',
        template: template_rnt_1.default
    })
], OpalSlider);
exports.OpalSlider = OpalSlider;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@IfThen (paramRange) {\ndiv/firstInputWrapper3 {\ndiv/firstInputWrapper2 (style=width: {_firstInputWidth}%) {\ndiv/firstInputWrapper {\ninput/firstInput (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramRange.0}\n)\n}\n}\n}\ndiv/secondInputWrapper {\ninput/secondInput (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramRange.1}\n)\n}\n}\n@IfElse (paramRange) {\ninput/input (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramValue}\n)\n}");

/***/ })
/******/ ]);
});