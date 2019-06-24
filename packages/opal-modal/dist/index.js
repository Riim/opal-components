(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-modal"] = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-modal"] = factory(root["reflect-metadata"], root["cellx"], root["cellx-decorators"], root["rionite"]);
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
const openedModals = [];
let documentFocusListening;
let documentKeyUpListening;
function onDocumentFocus(evt) {
    if (!openedModals[0].element.contains(evt.target.parentElement)) {
        openedModals[0].$('btnClose').focus();
    }
}
function onDocumentKeyUp(evt) {
    if (evt.keyCode == 27 /* Esc */) {
        evt.preventDefault();
        openedModals[0].close();
    }
}
let OpalModal = class OpalModal extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.opened = false;
        this.contentRendered = false;
    }
    ready() {
        if (this.opened) {
            this._open();
        }
    }
    elementAttached() {
        this.listenTo(this, 'change:opened', this._onOpenedChange);
        this.listenTo(this.element, 'click', this._onElementClick);
    }
    elementDetached() {
        this.close();
    }
    _onOpenedChange(evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    }
    _onElementClick(evt) {
        let componentEl = this.element;
        let windowEl = this.$('window');
        for (let el = evt.target; el != windowEl;) {
            if (el == componentEl) {
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
    renderContent() {
        if (!this.contentRendered) {
            this.contentRendered = true;
            cellx_1.Cell.release();
        }
    }
    open() {
        if (this.opened) {
            return false;
        }
        this.opened = true;
        cellx_1.Cell.release();
        return true;
    }
    close() {
        if (!this.opened) {
            return false;
        }
        this.opened = false;
        cellx_1.Cell.release();
        return true;
    }
    toggle(value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    }
    _open() {
        if (openedModals.length) {
            openedModals[0].element.classList.add('_overlapped');
        }
        else {
            documentFocusListening = this.listenTo(document, 'focus', onDocumentFocus, document, true);
            documentKeyUpListening = this.listenTo(document, 'keyup', onDocumentKeyUp, document);
            let body = document.body;
            let bodyWidth = body.offsetWidth;
            body.style.overflow = 'hidden';
            body.style.marginRight =
                (bodyWidth < body.offsetWidth
                    ? body.offsetWidth - bodyWidth
                    : this.element.offsetWidth - this.element.clientWidth) + 'px';
        }
        openedModals.unshift(this);
        this.renderContent();
        this.focus();
    }
    _close() {
        let index = openedModals.indexOf(this);
        if (index) {
            openedModals[index - 1].close();
        }
        openedModals.shift();
        if (openedModals.length) {
            openedModals[0].element.classList.remove('_overlapped');
            openedModals[0].focus();
        }
        else {
            documentFocusListening.stop();
            documentKeyUpListening.stop();
            let body = document.body;
            body.style.overflow = '';
            body.style.marginRight = '';
            body.classList.add('_noFocusHighlight');
        }
    }
    focus() {
        if (this == openedModals[0]) {
            let target = this.$('focus');
            (target || this.$('btnClose')).focus();
            if (target) {
                document.body.classList.remove('_noFocusHighlight');
            }
        }
        return this;
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalModal.prototype, "opened", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalModal.prototype, "contentRendered", void 0);
OpalModal = __decorate([
    rionite_1.Component({
        elementIs: 'OpalModal',
        template: template_rnt_1.default,
        domEvents: {
            btnClose: {
                click() {
                    this.close();
                    this.emit('close');
                }
            }
        }
    })
], OpalModal);
exports.OpalModal = OpalModal;


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
            style.textContent = "opal-modal{display:none}.OpalModal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;display:none;overflow-x:auto;overflow-y:scroll;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;background:rgba(0,0,0,.6);text-align:center;white-space:nowrap;cursor:pointer}.OpalModal::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalModal .OpalModal__window{position:relative;display:inline-block;padding:30px;border-radius:3px;background:#fff;-webkit-box-shadow:0 0 20px rgba(0,0,0,.3);box-shadow:0 0 20px rgba(0,0,0,.3);vertical-align:middle;text-align:left;white-space:normal;cursor:default}.OpalModal .OpalModal__window:hover .OpalModal__btnClose::before,.OpalModal .OpalModal__window:hover .OpalModal__btnClose::after{background:#ccc}.OpalModal .OpalModal__window:hover .OpalModal__btnClose:hover::before,.OpalModal .OpalModal__window:hover .OpalModal__btnClose:hover::after{background:#fff}.OpalModal .OpalModal__window:hover .OpalModal__btnClose:active::before,.OpalModal .OpalModal__window:hover .OpalModal__btnClose:active::after{background:#999}.OpalModal .OpalModal__btnCloseWrapper{position:absolute;top:-10px;left:100%;padding:0 10px;height:100%;pointer-events:none}.OpalModal .OpalModal__btnClose{position:relative;position:-webkit-sticky;position:sticky;top:10px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:10px;width:25px;height:25px;border:0;background:0 0;cursor:pointer;pointer-events:auto}.OpalModal .OpalModal__btnClose::before,.OpalModal .OpalModal__btnClose::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:25px;height:3px;border-radius:2px;background:#fff;content:'';-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.OpalModal .OpalModal__btnClose::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.OpalModal .OpalModal__btnClose:hover::before,.OpalModal .OpalModal__btnClose:hover::after{background:#fff}.OpalModal .OpalModal__btnClose:active::before,.OpalModal .OpalModal__btnClose:active::after{background:#999}.OpalModal .OpalModal__contentSlot{position:relative;display:block}.OpalModal[opened]{display:block}.OpalModal._overlapped{left:100%;overflow:visible}";
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
/* harmony default export */ __webpack_exports__["default"] = ("div:window {\ndiv:btnCloseWrapper {\nbutton:btnClose\n}\nRnSlot:contentSlot (@if=contentRendered)\n}");

/***/ })
/******/ ]);
});