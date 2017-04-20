(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-slider"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-slider"] = factory(root["rionite"], root["cellx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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
	__webpack_require__(68);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(38);
	var OpalSlider = (function (_super) {
	    __extends(OpalSlider, _super);
	    function OpalSlider() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalSlider.prototype.initialize = function () {
	        var props = this.props;
	        var range = props['range'];
	        if (range) {
	            cellx_1.define(this, {
	                _firstInputValue: range[0],
	                _secondInputValue: range[1],
	                _firstInputWidth: function () {
	                    var min = props['min'];
	                    var all = props['max'] - min;
	                    return Math.round((((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5) / 1e3;
	                }
	            });
	        }
	    };
	    Object.defineProperty(OpalSlider.prototype, "value", {
	        get: function () {
	            return this.props['range'] ?
	                [this._firstInputValue, this._secondInputValue] :
	                +this.$('input').value;
	        },
	        set: function (value) {
	            if (this.props['range']) {
	                this.$('first-input').value = this._firstInputValue = value[0];
	                this.$('second-input').value = this._secondInputValue = value[1];
	            }
	            else {
	                this.$('input').value = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return OpalSlider;
	}(rionite_1.Component));
	OpalSlider = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-slider',
	        props: {
	            min: 0,
	            max: 100,
	            step: 1,
	            value: 0,
	            range: eval
	        },
	        bemlTemplate: template,
	        events: {
	            'first-input': {
	                input: function (evt) {
	                    var secondInput = this.$('second-input');
	                    var value = this._firstInputValue = +evt.target.value;
	                    if (+secondInput.value < value) {
	                        secondInput.value = this._secondInputValue = value;
	                    }
	                }
	            },
	            'second-input': {
	                input: function (evt) {
	                    var firstInput = this.$('first-input');
	                    var value = this._secondInputValue = +evt.target.value;
	                    if (+firstInput.value > value) {
	                        firstInput.value = this._firstInputValue = value;
	                    }
	                }
	            }
	        }
	    })
	], OpalSlider);
	exports.default = OpalSlider;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\n@if-then (if=props.range) {\ndiv/first-input-wrapper3 {\ndiv/first-input-wrapper2 (style=width: {_firstInputWidth}%;) {\ndiv/first-input-wrapper {\ninput/first-input (\ntype=range,\nmin={props.min},\nmax={props.max},\nstep={props.step},\nvalue={props.range.0}\n)\n}\n}\n}\ndiv/second-input-wrapper {\ninput/second-input (type=range, min={props.min}, max={props.max}, step={props.step}, value={props.range.1})\n}\n}\n@if-else (if=props.range) {\ninput/input (type=range, min={props.min}, max={props.max}, step={props.step}, value={props.value})\n}\n}"

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-slider{position:relative;top:-1px;display:inline-block;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-slider::before{position:absolute;top:3px;right:3px;left:3px;z-index:0;height:14px;border-radius:7px;background:#d6d6d6;content:''}.opal-slider .opal-slider__first-input-wrapper3{position:absolute;top:0;right:10px;left:10px;z-index:2}.opal-slider .opal-slider__first-input-wrapper2{position:relative}.opal-slider .opal-slider__first-input-wrapper{position:absolute;top:0;right:0;left:-10px;overflow:hidden}.opal-slider .opal-slider__first-input,.opal-slider .opal-slider__second-input{display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.opal-slider .opal-slider__second-input{position:relative;z-index:1}.opal-slider .opal-slider__first-input::-moz-focus-outer{border:none}.opal-slider .opal-slider__first-input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__first-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__first-input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__first-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__first-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;transition:background .1s linear}.opal-slider .opal-slider__first-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;transition:background .1s linear}.opal-slider .opal-slider__second-input::-moz-focus-outer{border:none}.opal-slider .opal-slider__second-input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__second-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__second-input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__second-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__second-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;transition:background .1s linear}.opal-slider .opal-slider__second-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;transition:background .1s linear}.opal-slider .opal-slider__input{position:relative;z-index:1;display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.opal-slider .opal-slider__input::-moz-focus-outer{border:none}.opal-slider .opal-slider__input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;transition:background .1s linear}.opal-slider .opal-slider__input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;transition:background .1s linear}.opal-slider .opal-slider__first-input:hover::-webkit-slider-thumb{background:#597791}.opal-slider .opal-slider__first-input:hover::-moz-range-thumb{background:#597791}.opal-slider .opal-slider__first-input:hover::-ms-thumb{background:#597791}.opal-slider .opal-slider__second-input:hover::-webkit-slider-thumb{background:#33a0ff}.opal-slider .opal-slider__second-input:hover::-moz-range-thumb{background:#33a0ff}.opal-slider .opal-slider__second-input:hover::-ms-thumb{background:#33a0ff}.opal-slider .opal-slider__input:hover::-webkit-slider-thumb{background:#597791}.opal-slider .opal-slider__input:hover::-moz-range-thumb{background:#597791}.opal-slider .opal-slider__input:hover::-ms-thumb{background:#597791}.opal-slider .opal-slider__first-input:focus,.opal-slider .opal-slider__second-input:focus,.opal-slider .opal-slider__input:focus{outline:none}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-webkit-slider-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-webkit-slider-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-webkit-slider-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-webkit-slider-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-webkit-slider-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-webkit-slider-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;