(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-checkbox"] = factory(require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-checkbox"] = factory(root["rionite"], root["cellx-decorators"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "445b");
/******/ })
/************************************************************************/
/******/ ({

/***/ "445b":
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
__exportStar(__webpack_require__("TzsL"), exports);


/***/ }),

/***/ "4Rfg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["label"],,,"label",,[[1,["input"],,,"input",[,[[,"type","checkbox"]]],],[1,["control"],,,"span",[,[[,"tabindex","{_tabIndex}"]]],],[3," "],[1,["contentSlot"],,,"RnSlot",,]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "TzsL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalCheckbox_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalCheckbox = void 0;
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("eXb0");
const template_rnt_1 = __webpack_require__("4Rfg");
let OpalCheckbox = OpalCheckbox_1 = class OpalCheckbox extends rionite_1.BaseComponent {
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    ready() {
        if (this.checked) {
            this.indeterminate = false;
            this.$('input').checked = true;
        }
        if (this.focused) {
            this.focus();
        }
    }
    _onCheckedChange(evt) {
        if (evt.data.value) {
            this.indeterminate = false;
        }
        this.$('input').checked = evt.data.value;
    }
    _onIndeterminateChange(evt) {
        if (evt.data.value) {
            this.checked = false;
        }
    }
    _onFocusedChange(evt) {
        if (evt.data.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
        }
        else {
            this._documentKeyDownListening.stop();
        }
    }
    _onDocumentKeyDown(evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            if (!this.disabled) {
                this.emit((this.checked = !this.checked)
                    ? OpalCheckbox_1.EVENT_CHECK
                    : OpalCheckbox_1.EVENT_UNCHECK);
                this.emit(OpalCheckbox_1.EVENT_CHANGE);
            }
        }
    }
    _onInputChange(evt) {
        this.emit((this.checked = evt.target.checked)
            ? OpalCheckbox_1.EVENT_CHECK
            : OpalCheckbox_1.EVENT_UNCHECK);
        this.emit(OpalCheckbox_1.EVENT_CHANGE);
    }
    _onControlFocus() {
        this.focused = true;
        this.emit(OpalCheckbox_1.EVENT_FOCUS);
    }
    _onControlBlur() {
        this.focused = false;
        this.emit(OpalCheckbox_1.EVENT_BLUR);
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
OpalCheckbox.EVENT_BLUR = Symbol('blur');
OpalCheckbox.EVENT_CHANGE = Symbol('change');
OpalCheckbox.EVENT_CHECK = Symbol('check');
OpalCheckbox.EVENT_FOCUS = Symbol('focus');
OpalCheckbox.EVENT_UNCHECK = Symbol('uncheck');
__decorate([
    rionite_1.Param(Boolean)
], OpalCheckbox.prototype, "checked", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalCheckbox.prototype, "indeterminate", void 0);
__decorate([
    rionite_1.Param({ default: 0 })
], OpalCheckbox.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalCheckbox.prototype, "focused", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalCheckbox.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalCheckbox.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('change:checked')
], OpalCheckbox.prototype, "_onCheckedChange", null);
__decorate([
    rionite_1.Listen('change:indeterminate')
], OpalCheckbox.prototype, "_onIndeterminateChange", null);
__decorate([
    rionite_1.Listen('change:focused')
], OpalCheckbox.prototype, "_onFocusedChange", null);
__decorate([
    rionite_1.Listen('change', 'input')
], OpalCheckbox.prototype, "_onInputChange", null);
__decorate([
    rionite_1.Listen('focus', 'control')
], OpalCheckbox.prototype, "_onControlFocus", null);
__decorate([
    rionite_1.Listen('blur', 'control')
], OpalCheckbox.prototype, "_onControlBlur", null);
OpalCheckbox = OpalCheckbox_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalCheckbox',
        template: template_rnt_1.default
    })
], OpalCheckbox);
exports.OpalCheckbox = OpalCheckbox;


/***/ }),

/***/ "eXb0":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalCheckbox{position:relative;display:inline-block}.OpalCheckbox .OpalCheckbox__label:hover .OpalCheckbox__control{border-color:var(--grayColor550, hsl(0,0%,55%))}.OpalCheckbox .OpalCheckbox__label:hover .OpalCheckbox__control:focus{border-color:var(--primaryColor650, hsl(208,93%,65%))}.OpalCheckbox .OpalCheckbox__input{display:none}.OpalCheckbox .OpalCheckbox__control{position:relative;top:-2px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid var(--grayColor650, hsl(0,0%,65%));border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalCheckbox .OpalCheckbox__control:focus{outline:0;border-color:var(--primaryColor650, hsl(208,93%,65%))}.OpalCheckbox[checked] .OpalCheckbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.OpalCheckbox[indeterminate] .OpalCheckbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.OpalCheckbox[disabled]{opacity:.5;pointer-events:none}.OpalCheckbox[disabled] .OpalCheckbox__control{background:var(--grayColor900, hsl(0,0%,90%))}";
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