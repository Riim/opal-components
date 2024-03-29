(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-components-common"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-components-common", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-button"] = factory(require("@riim/opal-components-common"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-button"] = factory(root["@riim/opal-components-common"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_MYNt__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "/5PX");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/5PX":
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
__exportStar(__webpack_require__("KT7f"), exports);
__exportStar(__webpack_require__("FLFa"), exports);


/***/ }),

/***/ "FLFa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalFormButton = void 0;
const rionite_1 = __webpack_require__("u4yd");
const OpalButton_1 = __webpack_require__("KT7f");
let OpalFormButton = class OpalFormButton extends OpalButton_1.OpalButton {
};
OpalFormButton = __decorate([
    rionite_1.Component({
        elementIs: 'opal-form-button',
        elementExtends: 'button'
    })
], OpalFormButton);
exports.OpalFormButton = OpalFormButton;


/***/ }),

/***/ "KT7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalButton_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalButton = void 0;
const opal_components_common_1 = __webpack_require__("MYNt");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("dccg");
let OpalButton = OpalButton_1 = class OpalButton extends rionite_1.BaseComponent {
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    ready() {
        if (this.focused) {
            this.element.tabIndex = this._tabIndex;
            this.focus();
        }
    }
    connected() {
        this.element.tabIndex = this._tabIndex;
    }
    _onTabIndexChange() {
        this.element.tabIndex = this._tabIndex;
    }
    _onElementFocus() {
        if (!this._documentKeyDownListening && this.element.tagName.includes('-')) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
        }
        this.focused = true;
        this.emit(OpalButton_1.EVENT_FOCUS);
    }
    _onElementBlur() {
        if (this._documentKeyDownListening) {
            this._documentKeyDownListening.stop();
            this._documentKeyDownListening = null;
        }
        this.focused = false;
        this.emit(OpalButton_1.EVENT_BLUR);
    }
    _onElementClick() {
        if (!this.disabled) {
            this.click();
        }
    }
    _onDocumentKeyDown(evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            if (!this.disabled) {
                this.click();
            }
        }
    }
    click() {
        if (!this.emit(OpalButton_1.EVENT_CLICK).defaultPrevented && this.checkable) {
            this.emit(this.toggle() ? OpalButton_1.EVENT_CHECK : OpalButton_1.EVENT_UNCHECK);
            this.emit(OpalButton_1.EVENT_CHANGE);
        }
        if (this.href) {
            opal_components_common_1.clickLink(this.href, this.target);
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
        this.element.focus();
        return this;
    }
    blur() {
        this.element.blur();
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
OpalButton.EVENT_BLUR = Symbol('blur');
OpalButton.EVENT_CHANGE = Symbol('change');
OpalButton.EVENT_CHECK = Symbol('check');
OpalButton.EVENT_CLICK = Symbol('click');
OpalButton.EVENT_FOCUS = Symbol('focus');
OpalButton.EVENT_UNCHECK = Symbol('uncheck');
__decorate([
    rionite_1.Param({ default: 'default' })
], OpalButton.prototype, "viewType", void 0);
__decorate([
    rionite_1.Param({ default: 'm' })
], OpalButton.prototype, "size", void 0);
__decorate([
    rionite_1.Param(String)
], OpalButton.prototype, "href", void 0);
__decorate([
    rionite_1.Param(String)
], OpalButton.prototype, "target", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalButton.prototype, "checkable", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalButton.prototype, "checked", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalButton.prototype, "loading", void 0);
__decorate([
    rionite_1.Param({ default: 0 })
], OpalButton.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalButton.prototype, "focused", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalButton.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalButton.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('change:_tabIndex')
], OpalButton.prototype, "_onTabIndexChange", null);
__decorate([
    rionite_1.Listen('focus', '@element')
], OpalButton.prototype, "_onElementFocus", null);
__decorate([
    rionite_1.Listen('blur', '@element')
], OpalButton.prototype, "_onElementBlur", null);
__decorate([
    rionite_1.Listen('click', '@element')
], OpalButton.prototype, "_onElementClick", null);
OpalButton = OpalButton_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalButton'
    })
], OpalButton);
exports.OpalButton = OpalButton;


/***/ }),

/***/ "MYNt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_MYNt__;

/***/ }),

/***/ "dccg":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalButton{padding:0;border:0;background:0 0;color:inherit;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalButton:not([view_type=clean]){position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 23px;border-radius:3px;background:var(--defaultColor500, hsl(208,18%,36%));color:#fff;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalButton:not([view_type=clean])::-moz-focus-inner{padding:0;border:0}.OpalButton:not([view_type=clean])[size=s]{padding:4px 14px;font-size:14px;line-height:21px}.OpalButton:not([view_type=clean]):hover{background:var(--defaultColor600, hsl(208,18%,43.2%))}.OpalButton:not([view_type=clean]):focus{outline:0}body:not(._noFocusHighlight) .OpalButton:not([view_type=clean]):focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalButton:not([view_type=clean]):active,.OpalButton:not([view_type=clean])[checked]{background:var(--defaultColor350, hsl(208,18%,25.2%))}.OpalButton:not([view_type=clean])[loading]{background-image:-o-linear-gradient(315deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-image:linear-gradient(135deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-size:30px 30px;-webkit-animation:OpalButton__loadingAnimation 3s linear infinite;animation:OpalButton__loadingAnimation 3s linear infinite}.OpalButton:not([view_type=clean])[disabled]{opacity:.5}.OpalGroup>.OpalButton:not([view_type=clean]):not(:first-child),.OpalGroup>:not(:first-child) .OpalButton:not([view_type=clean]){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.OpalGroup>.OpalButton:not([view_type=clean]):not(:last-child),.OpalGroup>:not(:last-child) .OpalButton:not([view_type=clean]){border-top-right-radius:0;border-bottom-right-radius:0}.OpalSwitchMenu .OpalButton:not([view_type=clean]):not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.OpalSwitchMenu .OpalButton:not([view_type=clean]):not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.OpalButton[disabled]{pointer-events:none}.OpalButton[view_type=primary]{background:var(--primaryColor500, hsl(208,93%,50%))}.OpalButton[view_type=primary]:hover{background-color:var(--primaryColor600, hsl(208,93%,60%))}.OpalButton[view_type=primary]:active,.OpalButton[view_type=primary][checked]{background-color:var(--primaryColor350, hsl(208,93%,35%))}.OpalButton[view_type=success]{background:var(--successColor500, hsl(123,40%,48%))}.OpalButton[view_type=success]:hover{background-color:var(--successColor600, hsl(123,40%,57.6%))}.OpalButton[view_type=success]:active,.OpalButton[view_type=success][checked]{background-color:var(--successColor350, hsl(123,40%,33.6%))}.OpalButton[view_type=warning]{background:var(--warningColor500, hsl(40,100%,50%))}.OpalButton[view_type=warning]:hover{background-color:var(--warningColor600, hsl(40,100%,60%))}.OpalButton[view_type=warning]:active,.OpalButton[view_type=warning][checked]{background-color:var(--warningColor350, hsl(40,100%,35%))}.OpalButton[view_type=danger]{background:var(--dangerColor500, hsl(5,90%,57%))}.OpalButton[view_type=danger]:hover{background-color:var(--dangerColor600, hsl(5,90%,65.6%))}.OpalButton[view_type=danger]:active,.OpalButton[view_type=danger][checked]{background-color:var(--dangerColor350, hsl(5,90%,44.1%))}@-webkit-keyframes OpalButton__loadingAnimation{0%{background-position:0 0}to{background-position:60px 0}}@keyframes OpalButton__loadingAnimation{0%{background-position:0 0}to{background-position:60px 0}}";
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

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});