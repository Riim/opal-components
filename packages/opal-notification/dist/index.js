(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("reflect-metadata"), require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "reflect-metadata", "cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-notification"] = factory(require("@riim/opal-icon"), require("reflect-metadata"), require("cellx"), require("rionite"));
	else
		root["@riim/opal-notification"] = factory(root["@riim/opal-icon"], root["reflect-metadata"], root["cellx"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__) {
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
__webpack_require__(2);
__export(__webpack_require__(3));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
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
var OpalNotification_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_1 = __webpack_require__(4);
const rionite_1 = __webpack_require__(5);
__webpack_require__(6);
const template_rnt_1 = __webpack_require__(7);
let container;
const shownNotifications = new Set();
function initContainer(notification) {
    if (!container) {
        container = document.createElement('div');
        container.className =
            notification.constructor._elementBlockNames.join('__container ') + '__container';
        document.body.appendChild(container);
    }
    return container;
}
let OpalNotification = OpalNotification_1 = class OpalNotification extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.viewType = 'default';
        this.iconSize = 'xs';
        this.buttonHide = true;
        this.timeout = 0;
        this.shown = false;
    }
    $(name, container = this.bar) {
        return super.$(name, container);
    }
    ready() {
        initContainer(this);
        this.bar = this.$('bar', this);
        this.element.removeChild(this.bar);
        if (this.shown) {
            this._show();
        }
    }
    elementDetached() {
        this.hide();
    }
    _onShownChange(evt) {
        if (evt.data.value) {
            this._show();
        }
        else {
            this._hide();
        }
    }
    _onElementMouseEnter() {
        if (this._closingTimeoutId) {
            clearTimeout(this._closingTimeoutId);
            this._closingTimeoutId = null;
        }
    }
    _onElementMouseLeave() {
        if (this.timeout) {
            this._closingTimeoutId = setTimeout(this._onClosingTimeout.bind(this), this.timeout);
        }
    }
    _onClosingTimeout() {
        this.hide();
        this.emit(OpalNotification_1.EVENT_HIDE);
        this.emit(OpalNotification_1.EVENT_CLOSE);
    }
    _onBtnHideClick() {
        this.hide();
        this.emit(OpalNotification_1.EVENT_HIDE);
        this.emit(OpalNotification_1.EVENT_CLOSE);
    }
    show() {
        if (this.shown) {
            return false;
        }
        this.shown = true;
        cellx_1.Cell.release();
        return true;
    }
    hide() {
        if (!this.shown) {
            return false;
        }
        this.shown = false;
        cellx_1.Cell.release();
        return true;
    }
    open() {
        return this.show();
    }
    close() {
        return this.hide();
    }
    toggle(value) {
        if (value !== undefined) {
            return value ? this.show() : !this.hide();
        }
        return this.show() || !this.hide();
    }
    _show() {
        shownNotifications.add(this);
        container.appendChild(this.bar);
        // для анимации
        setTimeout(() => {
            this.bar.setAttribute('shown', '');
        }, 1);
        if (this.timeout) {
            this._closingTimeoutId = setTimeout(this._onClosingTimeout.bind(this), this.timeout);
        }
    }
    _hide() {
        if (this._closingTimeoutId) {
            clearTimeout(this._closingTimeoutId);
            this._closingTimeoutId = null;
        }
        shownNotifications.delete(this);
        container.removeChild(this.bar);
        this.bar.removeAttribute('shown');
    }
    focus() {
        let focusEl = this.$('focus');
        if (focusEl) {
            document.body.classList.remove('_noFocusHighlight');
            focusEl.focus();
        }
        return this;
    }
};
OpalNotification.EVENT_CLOSE = Symbol('close');
OpalNotification.EVENT_HIDE = Symbol('hide');
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalNotification.prototype, "viewType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalNotification.prototype, "icon", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalNotification.prototype, "iconSize", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalNotification.prototype, "buttonHide", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalNotification.prototype, "timeout", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalNotification.prototype, "shown", void 0);
__decorate([
    rionite_1.Listen('change:shown'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalNotification.prototype, "_onShownChange", null);
__decorate([
    rionite_1.Listen('mouseenter', '@bar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalNotification.prototype, "_onElementMouseEnter", null);
__decorate([
    rionite_1.Listen('mouseleave', '@bar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalNotification.prototype, "_onElementMouseLeave", null);
__decorate([
    rionite_1.Listen('click', 'btnHide'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalNotification.prototype, "_onBtnHideClick", null);
OpalNotification = OpalNotification_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalNotification',
        template: template_rnt_1.default
    })
], OpalNotification);
exports.OpalNotification = OpalNotification;


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
            style.textContent = ".OpalNotification__container{position:fixed;top:10px;right:20px;z-index:300;width:400px}.OpalNotification__container .OpalNotification__bar{position:relative;right:-200px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px 0;padding:10px 40px 10px 20px;width:400px;border-radius:3px;background:#546778;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3);color:#fff;opacity:0;-webkit-transition:right .2s linear,opacity .2s linear;-o-transition:right .2s linear,opacity .2s linear;transition:right .2s linear,opacity .2s linear}.OpalNotification__container .OpalNotification__bar[view_type=primary]{background:#1b91f8}.OpalNotification__container .OpalNotification__bar[view_type=success]{background:#18b461}.OpalNotification__container .OpalNotification__bar[view_type=danger]{background:#f63159}.OpalNotification__container .OpalNotification__bar[has_icon][icon_size=xs]{padding-left:48px}.OpalNotification__container .OpalNotification__bar[has_icon][icon_size=s]{padding-left:52px}.OpalNotification__container .OpalNotification__bar[has_icon][icon_size=m]{padding-left:56px}.OpalNotification__container .OpalNotification__bar[shown]{right:0;opacity:1}.OpalNotification__container .OpalNotification__icon{position:absolute;top:0;bottom:0;left:16px;margin:auto}.OpalNotification__container .OpalNotification__btnHide{position:absolute;top:0;right:10px;bottom:0;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:#fff;opacity:.7;cursor:pointer;-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;transition:opacity .1s linear}.OpalNotification__container .OpalNotification__btnHide:hover{opacity:1}.OpalNotification__container .OpalNotification__btnHide:focus{outline:0}body:not(._noFocusHighlight) .OpalNotification__container .OpalNotification__btnHide:focus{outline:1px solid #1b91f8}.OpalNotification__container .OpalNotification__btnHide:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalNotification__container .OpalNotification__btnHide[hide]{display:none}.OpalNotification__container .OpalNotification__btnHideIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}";
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
/* harmony default export */ __webpack_exports__["default"] = ("div:bar (viewType={viewType}, hasIcon={icon |bool }, iconSize={iconSize}, buttonHide={buttonHide}) {\nOpalIcon:icon (@if=icon, name={icon}, size={iconSize})\nRnSlot:contentSlot\nbutton:btnHide (type=button, hide={buttonHide |not }) {\nOpalIcon:btnHideIcon (name=cross)\n}\n}");

/***/ })
/******/ ]);
});