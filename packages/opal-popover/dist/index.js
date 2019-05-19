(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-popover"] = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-popover"] = factory(root["reflect-metadata"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__) {
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
const cellx_1 = __webpack_require__(3);
const cellx_decorators_1 = __webpack_require__(4);
const rionite_1 = __webpack_require__(5);
__webpack_require__(6);
const template_rnt_1 = __webpack_require__(7);
let OpalPopover = class OpalPopover extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.paramPosition = 'right';
        this.paramPositionOffset = 0;
        this.paramAutoDirection = true;
        this.paramOpened = false;
        this.contentRendered = false;
    }
    ready() {
        if (this.paramOpened) {
            this._open();
        }
    }
    elementAttached() {
        this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
    }
    _onParamOpenedChange(evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    }
    renderContent() {
        this.contentRendered = true;
        cellx_1.Cell.forceRelease();
    }
    open() {
        if (this.paramOpened) {
            return false;
        }
        this.paramOpened = true;
        cellx_1.Cell.forceRelease();
        return true;
    }
    close() {
        if (!this.paramOpened) {
            return false;
        }
        this.paramOpened = false;
        cellx_1.Cell.forceRelease();
        return true;
    }
    toggle(value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    }
    _open() {
        if (this.contentRendered) {
            this._open$();
        }
        else {
            this.contentRendered = true;
            cellx_1.Cell.forceRelease();
            this._open$();
        }
    }
    _open$() {
        let el = this.element;
        if (this.paramAutoDirection) {
            let docEl = document.documentElement;
            let containerClientRect = el.offsetParent.getBoundingClientRect();
            let elClientRect = el.getBoundingClientRect();
            let position = (this._positionOnOpen = this.paramPosition).split('-');
            switch (position[0]) {
                case 'left': {
                    if (elClientRect.left + window.pageXOffset < 0 ||
                        (elClientRect.left < 0 &&
                            containerClientRect.left <
                                docEl.clientWidth - containerClientRect.right)) {
                        this.paramPosition =
                            'right' + (position.length == 2 ? '-' + position[1] : '');
                    }
                    break;
                }
                case 'top': {
                    if (elClientRect.top + window.pageYOffset < 0 ||
                        (elClientRect.top < 0 &&
                            containerClientRect.top <
                                docEl.clientHeight - containerClientRect.bottom)) {
                        this.paramPosition =
                            'bottom' + (position.length == 2 ? '-' + position[1] : '');
                    }
                    break;
                }
                case 'right': {
                    if (elClientRect.right > docEl.clientWidth &&
                        containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
                        containerClientRect.left + window.pageXOffset >=
                            elClientRect.right - containerClientRect.right) {
                        this.paramPosition =
                            'left' + (position.length == 2 ? '-' + position[1] : '');
                    }
                    break;
                }
                case 'bottom': {
                    if (elClientRect.bottom > docEl.clientHeight &&
                        containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
                        containerClientRect.top + window.pageYOffset >=
                            elClientRect.bottom - containerClientRect.bottom) {
                        this.paramPosition =
                            'top' + (position.length == 2 ? '-' + position[1] : '');
                    }
                    break;
                }
            }
        }
        let position = this.paramPosition.split('-');
        let arrowStyle = this.$('arrow').style;
        arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';
        if (position.length == 2) {
            el.style[position[1]] = this.paramPositionOffset + 'px';
            arrowStyle[position[1]] =
                el.offsetParent[position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'] /
                    2 -
                    this.paramPositionOffset +
                    'px';
        }
        if (this.paramCloseOn) {
            setTimeout(() => {
                if (this.paramOpened) {
                    this._closingEventListening = this.listenTo(document, this.paramCloseOn, this._onClosingEvent);
                }
            }, 1);
        }
    }
    _close() {
        if (this.paramAutoDirection) {
            this.paramPosition = this._positionOnOpen;
        }
        if (this._closingEventListening) {
            this._closingEventListening.stop();
            this._closingEventListening = null;
        }
    }
    _onClosingEvent(evt) {
        let docEl = document.documentElement;
        let componentEl = this.element;
        for (let el = evt.target; el != componentEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentElement;
            if (!el) {
                break;
            }
        }
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "paramPosition", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "paramPositionOffset", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "paramAutoDirection", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalPopover.prototype, "paramCloseOn", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "paramOpened", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalPopover.prototype, "contentRendered", void 0);
OpalPopover = __decorate([
    rionite_1.Component({
        elementIs: 'OpalPopover',
        template: template_rnt_1.default
    })
], OpalPopover);
exports.OpalPopover = OpalPopover;


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

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = "opal-popover{display:none}.OpalPopover{position:absolute;z-index:600;display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;border:1px solid #ccc;border-radius:6px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.OpalPopover .OpalPopover__arrow{position:absolute;width:0;height:0}.OpalPopover .OpalPopover__arrow::before,.OpalPopover .OpalPopover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.OpalPopover .OpalPopover__arrow::after{border:8px solid transparent}.OpalPopover .OpalPopover__contentSlot{position:relative;display:block}.OpalPopover[view_type=primary] .OpalPopover__contentSlot,.OpalPopover[view_type=success] .OpalPopover__contentSlot,.OpalPopover[view_type=danger] .OpalPopover__contentSlot{margin:-16px;padding:15px;border-radius:4px}.OpalPopover[view_type=primary] .OpalPopover__contentSlot{border:1px solid #1b91f8}.OpalPopover[view_type=success] .OpalPopover__contentSlot{border:1px solid #18b461}.OpalPopover[view_type=danger] .OpalPopover__contentSlot{border:1px solid #f63159}.OpalPopover[position=top],.OpalPopover[position=top-left],.OpalPopover[position=top-right]{bottom:100%;margin-bottom:15px}.OpalPopover[position=top] .OpalPopover__arrow,.OpalPopover[position=top-left] .OpalPopover__arrow,.OpalPopover[position=top-right] .OpalPopover__arrow{top:100%}.OpalPopover[position=top] .OpalPopover__arrow::before,.OpalPopover[position=top] .OpalPopover__arrow::after,.OpalPopover[position=top-left] .OpalPopover__arrow::before,.OpalPopover[position=top-left] .OpalPopover__arrow::after,.OpalPopover[position=top-right] .OpalPopover__arrow::before,.OpalPopover[position=top-right] .OpalPopover__arrow::after{border-top-color:#ccc;border-bottom-width:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=top] .OpalPopover__arrow::after,.OpalPopover[position=top-left] .OpalPopover__arrow::after,.OpalPopover[position=top-right] .OpalPopover__arrow::after{border-top-color:#fff}.OpalPopover[position=top]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=top] .OpalPopover__arrow{left:50%}.OpalPopover[position=top-left]{left:0}.OpalPopover[position=top-left] .OpalPopover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.OpalPopover[position=top-right]{right:0}.OpalPopover[position=top-right] .OpalPopover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.OpalPopover[position=right],.OpalPopover[position=right-top],.OpalPopover[position=right-bottom]{left:100%;margin-left:15px}.OpalPopover[position=right] .OpalPopover__arrow,.OpalPopover[position=right-top] .OpalPopover__arrow,.OpalPopover[position=right-bottom] .OpalPopover__arrow{right:100%}.OpalPopover[position=right] .OpalPopover__arrow::before,.OpalPopover[position=right] .OpalPopover__arrow::after,.OpalPopover[position=right-top] .OpalPopover__arrow::before,.OpalPopover[position=right-top] .OpalPopover__arrow::after,.OpalPopover[position=right-bottom] .OpalPopover__arrow::before,.OpalPopover[position=right-bottom] .OpalPopover__arrow::after{right:0;border-right-color:#ccc;border-left-width:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=right] .OpalPopover__arrow::after,.OpalPopover[position=right-top] .OpalPopover__arrow::after,.OpalPopover[position=right-bottom] .OpalPopover__arrow::after{border-right-color:#fff}.OpalPopover[position=right]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=right] .OpalPopover__arrow{top:50%}.OpalPopover[position=right-top]{top:0}.OpalPopover[position=right-top] .OpalPopover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalPopover[position=right-bottom]{bottom:0}.OpalPopover[position=right-bottom] .OpalPopover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalPopover[position=bottom],.OpalPopover[position=bottom-left],.OpalPopover[position=bottom-right]{top:100%;margin-top:15px}.OpalPopover[position=bottom] .OpalPopover__arrow,.OpalPopover[position=bottom-left] .OpalPopover__arrow,.OpalPopover[position=bottom-right] .OpalPopover__arrow{bottom:100%}.OpalPopover[position=bottom] .OpalPopover__arrow::before,.OpalPopover[position=bottom] .OpalPopover__arrow::after,.OpalPopover[position=bottom-left] .OpalPopover__arrow::before,.OpalPopover[position=bottom-left] .OpalPopover__arrow::after,.OpalPopover[position=bottom-right] .OpalPopover__arrow::before,.OpalPopover[position=bottom-right] .OpalPopover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:#ccc;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=bottom] .OpalPopover__arrow::after,.OpalPopover[position=bottom-left] .OpalPopover__arrow::after,.OpalPopover[position=bottom-right] .OpalPopover__arrow::after{border-bottom-color:#fff}.OpalPopover[position=bottom]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=bottom] .OpalPopover__arrow{left:50%}.OpalPopover[position=bottom-left]{left:0}.OpalPopover[position=bottom-left] .OpalPopover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.OpalPopover[position=bottom-right]{right:0}.OpalPopover[position=bottom-right] .OpalPopover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.OpalPopover[position=left],.OpalPopover[position=left-top],.OpalPopover[position=left-bottom]{right:100%;margin-right:15px}.OpalPopover[position=left] .OpalPopover__arrow,.OpalPopover[position=left-top] .OpalPopover__arrow,.OpalPopover[position=left-bottom] .OpalPopover__arrow{left:100%}.OpalPopover[position=left] .OpalPopover__arrow::before,.OpalPopover[position=left] .OpalPopover__arrow::after,.OpalPopover[position=left-top] .OpalPopover__arrow::before,.OpalPopover[position=left-top] .OpalPopover__arrow::after,.OpalPopover[position=left-bottom] .OpalPopover__arrow::before,.OpalPopover[position=left-bottom] .OpalPopover__arrow::after{left:0;border-right-width:0;border-left-color:#ccc;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=left] .OpalPopover__arrow::after,.OpalPopover[position=left-top] .OpalPopover__arrow::after,.OpalPopover[position=left-bottom] .OpalPopover__arrow::after{border-left-color:#fff}.OpalPopover[position=left]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=left] .OpalPopover__arrow{top:50%}.OpalPopover[position=left-top]{top:0}.OpalPopover[position=left-top] .OpalPopover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalPopover[position=left-bottom]{bottom:0}.OpalPopover[position=left-bottom] .OpalPopover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalPopover[opened]{display:block;-webkit-animation:OpalPopover__fadeInAnimation .1s linear;animation:OpalPopover__fadeInAnimation .1s linear}@-webkit-keyframes OpalPopover__fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes OpalPopover__fadeInAnimation{0%{opacity:0}to{opacity:1}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span:arrow\n@IfThen (contentRendered) {\n@Slot:contentSlot\n}");

/***/ })
/******/ ]);
});