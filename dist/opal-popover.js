(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-popover"] = factory(require("rionite"));
	else
		root["opal-popover"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
	__webpack_require__(62);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(33);
	var OpalPopover = (function (_super) {
	    __extends(OpalPopover, _super);
	    function OpalPopover() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalPopover.prototype.ready = function () {
	        if (this.props['opened']) {
	            this._open();
	        }
	    };
	    OpalPopover.prototype.propertyChanged = function (name, value) {
	        if (name == 'opened') {
	            this[value ? '_open' : '_close']();
	        }
	    };
	    OpalPopover.prototype.open = function () {
	        if (this.props['opened']) {
	            return false;
	        }
	        this.props['opened'] = true;
	        return true;
	    };
	    OpalPopover.prototype.close = function () {
	        if (!this.props['opened']) {
	            return false;
	        }
	        this.props['opened'] = false;
	        return true;
	    };
	    OpalPopover.prototype.toggle = function (value) {
	        return (this.props['opened'] = value === undefined ? !this.props['opened'] : value);
	    };
	    OpalPopover.prototype._open = function () {
	        var _this = this;
	        if (this.props['autoDirection']) {
	            var to = this.props['to'];
	            this._toValueAtOpen = to;
	            var docEl = document.documentElement;
	            var containerClientRect = this.element.offsetParent.getBoundingClientRect();
	            var elClientRect = this.element.getBoundingClientRect();
	            switch (to) {
	                case 'left': {
	                    if (elClientRect.left + window.pageXOffset < 0 || (elClientRect.left < 0 &&
	                        containerClientRect.left < docEl.clientWidth - containerClientRect.right)) {
	                        this.props['to'] = 'right';
	                    }
	                    break;
	                }
	                case 'top': {
	                    if (elClientRect.top + window.pageYOffset < 0 || (elClientRect.top < 0 &&
	                        containerClientRect.top < docEl.clientHeight - containerClientRect.bottom)) {
	                        this.props['to'] = 'bottom';
	                    }
	                    break;
	                }
	                case 'right': {
	                    if (elClientRect.right > docEl.clientWidth &&
	                        containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
	                        containerClientRect.left + window.pageXOffset >=
	                            elClientRect.right - containerClientRect.right) {
	                        this.props['to'] = 'left';
	                    }
	                    break;
	                }
	                case 'bottom': {
	                    if (elClientRect.bottom > docEl.clientHeight &&
	                        containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
	                        containerClientRect.top + window.pageYOffset >= elClientRect.bottom - containerClientRect.bottom) {
	                        this.props['to'] = 'top';
	                    }
	                    break;
	                }
	            }
	        }
	        if (this.props['autoClosing']) {
	            setTimeout(function () {
	                if (_this.props['opened']) {
	                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
	                }
	            }, 1);
	        }
	    };
	    OpalPopover.prototype._close = function () {
	        if (this.props['autoDirection']) {
	            this.props['to'] = this._toValueAtOpen;
	        }
	        if (this._documentClickListening) {
	            this._documentClickListening.stop();
	        }
	    };
	    OpalPopover.prototype._onDocumentClick = function (evt) {
	        var docEl = document.documentElement;
	        var el = this.element;
	        for (var node = evt.target; node != el;) {
	            if (node == docEl || node.tagName == 'A') {
	                this.close();
	                this.emit('close');
	                break;
	            }
	            node = node.parentNode;
	            if (!node) {
	                break;
	            }
	        }
	    };
	    return OpalPopover;
	}(rionite_1.Component));
	OpalPopover = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-popover',
	        props: {
	            to: 'right',
	            autoDirection: true,
	            autoClosing: false,
	            opened: false
	        },
	        bemlTemplate: template
	    })
	], OpalPopover);
	exports.default = OpalPopover;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nspan/arrow\nrt-content/content (cloning=no)\n}"

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-popover{position:absolute;z-index:100;display:none;box-sizing:border-box;padding:15px;border:1px solid #ccc;border-radius:6px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.opal-popover .opal-popover__arrow{position:absolute;z-index:1;width:0;height:0}.opal-popover .opal-popover__arrow::before,.opal-popover .opal-popover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.opal-popover .opal-popover__arrow::after{border:8px solid transparent}.opal-popover .opal-popover__content{position:relative;display:block}.opal-popover[to=top]{bottom:100%;left:50%;margin-bottom:15px;-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=top] .opal-popover__arrow{top:100%;left:50%}.opal-popover[to=top] .opal-popover__arrow::before,.opal-popover[to=top] .opal-popover__arrow::after{border-top-color:#ccc;border-bottom-width:0;-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=top] .opal-popover__arrow::after{border-top-color:#fff}.opal-popover[to=right]{top:50%;left:100%;margin-left:15px;-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=right] .opal-popover__arrow{top:50%;right:100%}.opal-popover[to=right] .opal-popover__arrow::before,.opal-popover[to=right] .opal-popover__arrow::after{right:0;border-right-color:#ccc;border-left-width:0;-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=right] .opal-popover__arrow::after{border-right-color:#fff}.opal-popover[to=bottom]{top:100%;left:50%;margin-top:15px;-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=bottom] .opal-popover__arrow{bottom:100%;left:50%}.opal-popover[to=bottom] .opal-popover__arrow::before,.opal-popover[to=bottom] .opal-popover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:#ccc;-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=bottom] .opal-popover__arrow::after{border-bottom-color:#fff}.opal-popover[to=left]{top:50%;right:100%;margin-right:15px;-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=left] .opal-popover__arrow{top:50%;left:100%}.opal-popover[to=left] .opal-popover__arrow::before,.opal-popover[to=left] .opal-popover__arrow::after{left:0;border-right-width:0;border-left-color:#ccc;-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=left] .opal-popover__arrow::after{border-left-color:#fff}.opal-popover[opened]{display:block;animation:opal-popover-fade-in-animation .1s linear}@keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;