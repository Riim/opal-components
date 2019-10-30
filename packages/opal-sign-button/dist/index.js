(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-sign-button"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-sign-button"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "wpLm");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6Ig9":
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
var OpalSignButton_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("st0Y");
const template_rnt_1 = __webpack_require__("IjPK");
let OpalSignButton = OpalSignButton_1 = class OpalSignButton extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.checkable = false;
        this.checked = false;
        this.tabIndex = 0;
        this.focused = false;
        this.disabled = false;
    }
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    ready() {
        if (this.focused) {
            this.focus();
        }
    }
    _onControlFocus() {
        this.focused = true;
        this.emit(OpalSignButton_1.EVENT_FOCUS);
    }
    _onControlBlur() {
        this.focused = false;
        this.emit(OpalSignButton_1.EVENT_BLUR);
    }
    _onControlClick(evt) {
        evt.preventDefault();
        if (!this.disabled) {
            this.click();
        }
    }
    click() {
        if (!this.emit(OpalSignButton_1.EVENT_CLICK).defaultPrevented && this.checkable) {
            this.emit(this.toggle() ? OpalSignButton_1.EVENT_CHECK : OpalSignButton_1.EVENT_UNCHECK);
            this.emit(OpalSignButton_1.EVENT_CHANGE);
        }
        return this;
    }
    get selected() {
        return this.checked;
    }
    set selected(selected) {
        this.checked = selected;
    }
    check() {
        if (!this.checked) {
            this.checked = true;
            return true;
        }
        return false;
    }
    uncheck() {
        if (this.checked) {
            this.checked = false;
            return true;
        }
        return false;
    }
    toggle(value) {
        return (this.checked = value === undefined ? !this.checked : value);
    }
    focus() {
        this.$('control').focus();
        return this;
    }
    blur() {
        this.$('control').blur();
        return this;
    }
    enable() {
        this.disabled = false;
        return this;
    }
    disable() {
        this.disabled = true;
        return this;
    }
};
OpalSignButton.EVENT_BLUR = Symbol('blur');
OpalSignButton.EVENT_CHANGE = Symbol('change');
OpalSignButton.EVENT_CHECK = Symbol('check');
OpalSignButton.EVENT_CLICK = Symbol('click');
OpalSignButton.EVENT_FOCUS = Symbol('focus');
OpalSignButton.EVENT_UNCHECK = Symbol('uncheck');
__decorate([
    rionite_1.Param({ required: true }),
    __metadata("design:type", String)
], OpalSignButton.prototype, "sign", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalSignButton.prototype, "viewType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSignButton.prototype, "checkable", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSignButton.prototype, "checked", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSignButton.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSignButton.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSignButton.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalSignButton.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('focus', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalSignButton.prototype, "_onControlFocus", null);
__decorate([
    rionite_1.Listen('blur', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalSignButton.prototype, "_onControlBlur", null);
__decorate([
    rionite_1.Listen('click', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalSignButton.prototype, "_onControlClick", null);
OpalSignButton = OpalSignButton_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSignButton',
        template: template_rnt_1.default
    })
], OpalSignButton);
exports.OpalSignButton = OpalSignButton;


/***/ }),

/***/ "IjPK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button:control (type=button, tabindex={_tabIndex}) {\nspan:sign\n' '\nRnSlot:contentSlot\n}");

/***/ }),

/***/ "st0Y":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSignButton{display:inline-block;line-height:0}.OpalSignButton .OpalSignButton__control{position:relative;padding:0;border:0;background:0 0;color:inherit;white-space:nowrap;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSignButton .OpalSignButton__control:focus{outline:0}body:not(._noFocusHighlight) .OpalSignButton .OpalSignButton__control:focus::after{position:absolute;top:-1px;right:0;bottom:1px;left:-3px;border:1px solid #0887f7;border-radius:3px;content:'';pointer-events:none}.OpalSignButton .OpalSignButton__control:active{top:1px}.OpalSignButton .OpalSignButton__sign{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:3px 3px 3px 0;width:28px;height:28px;border:2px solid;border-radius:50%;vertical-align:middle;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear}.OpalSignButton .OpalSignButton__sign::before,.OpalSignButton .OpalSignButton__sign::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSignButton .OpalSignButton__sign::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.OpalSignButton[sign=plus] .OpalSignButton__control:hover .OpalSignButton__sign,.OpalSignButton[sign=plus] .OpalSignButton__control:active .OpalSignButton__sign{border-color:#52abfa}.OpalSignButton[sign=plus] .OpalSignButton__control:hover .OpalSignButton__sign::before,.OpalSignButton[sign=plus] .OpalSignButton__control:hover .OpalSignButton__sign::after,.OpalSignButton[sign=plus] .OpalSignButton__control:active .OpalSignButton__sign::before,.OpalSignButton[sign=plus] .OpalSignButton__control:active .OpalSignButton__sign::after{background:#52abfa}.OpalSignButton[sign=plus] .OpalSignButton__sign{border-color:#077adf}.OpalSignButton[sign=plus] .OpalSignButton__sign::before,.OpalSignButton[sign=plus] .OpalSignButton__sign::after{background:#077adf;content:''}.OpalSignButton[sign=minus] .OpalSignButton__control:hover .OpalSignButton__sign,.OpalSignButton[sign=minus] .OpalSignButton__control:active .OpalSignButton__sign{border-color:#f87b72}.OpalSignButton[sign=minus] .OpalSignButton__control:hover .OpalSignButton__sign::before,.OpalSignButton[sign=minus] .OpalSignButton__control:active .OpalSignButton__sign::before{background:#f87b72}.OpalSignButton[sign=minus] .OpalSignButton__sign{border-color:#b8150a}.OpalSignButton[sign=minus] .OpalSignButton__sign::before{background:#b8150a;content:''}.OpalSignButton[view_type=primary] .OpalSignButton__control:hover .OpalSignButton__sign,.OpalSignButton[view_type=primary] .OpalSignButton__control:active .OpalSignButton__sign{border-color:#52abfa}.OpalSignButton[view_type=primary] .OpalSignButton__control:hover .OpalSignButton__sign::before,.OpalSignButton[view_type=primary] .OpalSignButton__control:active .OpalSignButton__sign::before{background:#52abfa}.OpalSignButton[view_type=primary] .OpalSignButton__sign{border-color:#077adf}.OpalSignButton[view_type=primary] .OpalSignButton__sign::before{background:#077adf}.OpalSignButton[view_type=danger] .OpalSignButton__control:hover .OpalSignButton__sign,.OpalSignButton[view_type=danger] .OpalSignButton__control:active .OpalSignButton__sign{border-color:#f87b72}.OpalSignButton[view_type=danger] .OpalSignButton__control:hover .OpalSignButton__sign::before,.OpalSignButton[view_type=danger] .OpalSignButton__control:hover .OpalSignButton__sign::after,.OpalSignButton[view_type=danger] .OpalSignButton__control:active .OpalSignButton__sign::before,.OpalSignButton[view_type=danger] .OpalSignButton__control:active .OpalSignButton__sign::after{background:#f87b72}.OpalSignButton[view_type=danger] .OpalSignButton__sign{border-color:#b8150a}.OpalSignButton[view_type=danger] .OpalSignButton__sign::before,.OpalSignButton[view_type=danger] .OpalSignButton__sign::after{background:#b8150a}.OpalSignButton[checked] .OpalSignButton__control{top:1px}.OpalSignButton[disabled]{opacity:.5;pointer-events:none}.OpalSignButton[disabled] .OpalSignButton__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "wpLm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("vA/G");
__export(__webpack_require__("6Ig9"));


/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});