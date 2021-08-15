(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-slider"] = factory(require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-slider"] = factory(root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "qkqE");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0Nex":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalSlider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalSlider = void 0;
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("1g8T");
const template_rnt_1 = __webpack_require__("vUBf");
let OpalSlider = OpalSlider_1 = class OpalSlider extends rionite_1.BaseComponent {
    get _firstInputWidth() {
        let min = this.min;
        let all = this.max - min;
        return (Math.round((((this.range[0] - min) / all + (this.range[1] - min) / all) / 2) * 1e5) /
            1e3);
    }
    connected() {
        if (this.range) {
            this.listenTo('firstInput', 'input', this._onFirstInputInput);
            this.listenTo('secondInput', 'input', this._onSecondInputInput);
        }
        else {
            this.listenTo('input', 'input', this._onInputInput);
        }
    }
    _onFirstInputInput(evt) {
        let secondInput = this.$('secondInput');
        let firstInputValue = +evt.target.value;
        if (+secondInput.value < firstInputValue) {
            secondInput.value = firstInputValue;
            this.range = [firstInputValue, firstInputValue];
        }
        else {
            this.range = [firstInputValue, this.range[1]];
        }
        this.emit(OpalSlider_1.EVENT_CHANGE);
    }
    _onSecondInputInput(evt) {
        let firstInput = this.$('firstInput');
        let secondInputValue = +evt.target.value;
        if (+firstInput.value > secondInputValue) {
            firstInput.value = secondInputValue;
            this.range = [secondInputValue, secondInputValue];
        }
        else {
            this.range = [this.range[0], secondInputValue];
        }
        this.emit(OpalSlider_1.EVENT_CHANGE);
    }
    _onInputInput(evt) {
        let inputValue = +evt.target.value;
        this.value = inputValue;
        this.emit(OpalSlider_1.EVENT_CHANGE);
    }
};
OpalSlider.EVENT_CHANGE = Symbol('change');
__decorate([
    rionite_1.Param({ default: 0 })
], OpalSlider.prototype, "min", void 0);
__decorate([
    rionite_1.Param({ default: 100 })
], OpalSlider.prototype, "max", void 0);
__decorate([
    rionite_1.Param({ default: 1 })
], OpalSlider.prototype, "step", void 0);
__decorate([
    rionite_1.Param({ default: 0 })
], OpalSlider.prototype, "value", void 0);
__decorate([
    rionite_1.Param(eval)
], OpalSlider.prototype, "range", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalSlider.prototype, "_firstInputWidth", null);
OpalSlider = OpalSlider_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSlider',
        template: template_rnt_1.default
    })
], OpalSlider);
exports.OpalSlider = OpalSlider;


/***/ }),

/***/ "1g8T":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSlider{position:relative;top:-1px;display:inline-block;width:200px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSlider::before{position:absolute;top:3px;right:3px;left:3px;z-index:0;height:14px;border-radius:7px;background:var(--grayColor850, hsl(0,0%,85%));content:''}.OpalSlider .OpalSlider__firstInputWrapper3{position:absolute;top:0;right:10px;left:10px;z-index:2}.OpalSlider .OpalSlider__firstInputWrapper2{position:relative}.OpalSlider .OpalSlider__firstInputWrapper{position:absolute;top:0;right:0;left:-10px;overflow:hidden}.OpalSlider .OpalSlider__firstInput,.OpalSlider .OpalSlider__secondInput{display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.OpalSlider .OpalSlider__firstInput::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__firstInput::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__firstInput::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__firstInput::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__firstInput::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));cursor:pointer;-webkit-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__firstInput::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));cursor:pointer;-moz-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__firstInput::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));cursor:pointer;-ms-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__secondInput{position:relative;z-index:1}.OpalSlider .OpalSlider__secondInput::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__secondInput::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__secondInput::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__secondInput::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__secondInput::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--primaryColor500, hsl(208,93%,50%));cursor:pointer;-webkit-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__secondInput::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--primaryColor500, hsl(208,93%,50%));cursor:pointer;-moz-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__secondInput::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--primaryColor500, hsl(208,93%,50%));cursor:pointer;-ms-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__input{position:relative;z-index:1;display:block;margin:0;padding:0;width:100%;height:20px;background:0 0;-webkit-appearance:none}.OpalSlider .OpalSlider__input::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__input::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__input::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));cursor:pointer;-webkit-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));cursor:pointer;-moz-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));cursor:pointer;-ms-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__firstInput:hover::-webkit-slider-thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSlider .OpalSlider__firstInput:hover::-moz-range-thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSlider .OpalSlider__firstInput:hover::-ms-thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSlider .OpalSlider__secondInput:hover::-webkit-slider-thumb{background:var(--primaryColor650, hsl(208,93%,65%))}.OpalSlider .OpalSlider__secondInput:hover::-moz-range-thumb{background:var(--primaryColor650, hsl(208,93%,65%))}.OpalSlider .OpalSlider__secondInput:hover::-ms-thumb{background:var(--primaryColor650, hsl(208,93%,65%))}.OpalSlider .OpalSlider__input:hover::-webkit-slider-thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSlider .OpalSlider__input:hover::-moz-range-thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSlider .OpalSlider__input:hover::-ms-thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSlider .OpalSlider__firstInput:focus,.OpalSlider .OpalSlider__secondInput:focus,.OpalSlider .OpalSlider__input:focus{outline:0}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px var(--primaryColor500, hsl(208,93%,50%)),inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px var(--primaryColor500, hsl(208,93%,50%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px var(--primaryColor500, hsl(208,93%,50%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:focus::-ms-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:focus::-ms-thumb{box-shadow:inset 0 0 0 2px var(--primaryColor500, hsl(208,93%,50%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,36%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px var(--defaultColor650, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px var(--defaultColor650, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px var(--primaryColor650, hsl(208,93%,65%)),inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px var(--primaryColor650, hsl(208,93%,65%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px var(--defaultColor650, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px var(--defaultColor650, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor650, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px var(--primaryColor650, hsl(208,93%,65%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor650, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__firstInput:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__secondInput:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px var(--primaryColor650, hsl(208,93%,65%)),inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._noFocusHighlight) .OpalSlider .OpalSlider__input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px var(--defaultColor500, hsl(208,18%,46.8%)),inset 0 0 0 3px rgba(255,255,255,.8)}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "qkqE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("0Nex"), exports);


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vUBf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,,1,"cond",[,[[,"if","range"]]],[[1,["firstInputWrapper3"],,,"div",,[[1,["firstInputWrapper2"],,,"div",[,[[,"style","width: {_firstInputWidth}%"]]],[[1,["firstInputWrapper"],,,"div",,[[1,["firstInput"],,,"input",[,[[,"type","range"],[,"min","{min}"],[,"max","{max}"],[,"step","{step}"],[,"value","{range.0}"]]],]]]]]]],[1,["secondInputWrapper"],,,"div",,[[1,["secondInput"],,,"input",[,[[,"type","range"],[,"min","{min}"],[,"max","{max}"],[,"step","{step}"],[,"value","{range.1}"]]],]]]]],[1,["input"],,,"input",[,[[1,"unless","range"],[,"type","range"],[,"min","{min}"],[,"max","{max}"],[,"step","{step}"],[,"value","{value}"]]],]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});