(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-switch"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-switch"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "Wb26");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8DG6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label:label {\ninput:input (type=checkbox)\nspan:control (tabindex={_tabIndex}) {\nspan:thumb\n}\n' '\nRnSlot:contentSlot\n}");

/***/ }),

/***/ "Wb26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("vA/G");
__export(__webpack_require__("jJDM"));


/***/ }),

/***/ "jEzz":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSwitch{position:relative;display:inline-block}.OpalSwitch .OpalSwitch__label:hover .OpalSwitch__thumb{background:var(--defaultColor650, hsl(208,18%,46.8%))}.OpalSwitch .OpalSwitch__input{display:none}.OpalSwitch .OpalSwitch__control{position:relative;top:-1px;display:inline-block;margin:3px;width:30px;height:14px;border-radius:7px;background:var(--grayColor850, hsl(0,0%,85%));vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSwitch .OpalSwitch__control:focus{outline:0}body:not(._noFocusHighlight) .OpalSwitch .OpalSwitch__control:focus .OpalSwitch__thumb::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:50%;content:''}.OpalSwitch .OpalSwitch__thumb{position:absolute;top:-3px;left:-3px;width:20px;height:20px;border-radius:50%;background:var(--defaultColor500, hsl(208,18%,36%));-webkit-transition:background .1s linear,-webkit-transform .1s linear;transition:background .1s linear,-webkit-transform .1s linear;-o-transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear,-webkit-transform .1s linear}.OpalSwitch[checked] .OpalSwitch__label:hover .OpalSwitch__thumb{background:var(--primaryColor650, hsl(208,94%,65%))}.OpalSwitch[checked] .OpalSwitch__thumb{background:var(--primaryColor500, hsl(208,94%,50%));-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}.OpalSwitch[disabled]{opacity:.5;pointer-events:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "jJDM":
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
var OpalSwitch_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("jEzz");
const template_rnt_1 = __webpack_require__("8DG6");
let OpalSwitch = OpalSwitch_1 = class OpalSwitch extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.tabIndex = 0;
        this.focused = false;
        this.disabled = false;
    }
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    ready() {
        if (this.checked) {
            this.$('input').checked = true;
        }
        if (this.focused) {
            this.focus();
        }
    }
    _onCheckedChange(evt) {
        this.$('input').checked = evt.data.value;
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
                    ? OpalSwitch_1.EVENT_CHECK
                    : OpalSwitch_1.EVENT_UNCHECK);
                this.emit(OpalSwitch_1.EVENT_CHANGE);
            }
        }
    }
    _onInputChange(evt) {
        this.emit((this.checked = evt.target.checked)
            ? OpalSwitch_1.EVENT_CHECK
            : OpalSwitch_1.EVENT_UNCHECK);
        this.emit(OpalSwitch_1.EVENT_CHANGE);
    }
    _onControlFocus() {
        this.focused = true;
        this.emit(OpalSwitch_1.EVENT_FOCUS);
    }
    _onControlBlur() {
        this.focused = false;
        this.emit(OpalSwitch_1.EVENT_BLUR);
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
OpalSwitch.EVENT_BLUR = Symbol('blur');
OpalSwitch.EVENT_CHANGE = Symbol('change');
OpalSwitch.EVENT_CHECK = Symbol('check');
OpalSwitch.EVENT_FOCUS = Symbol('focus');
OpalSwitch.EVENT_UNCHECK = Symbol('uncheck');
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSwitch.prototype, "checked", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSwitch.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSwitch.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSwitch.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalSwitch.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('change:checked'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalSwitch.prototype, "_onCheckedChange", null);
__decorate([
    rionite_1.Listen('change:focused'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalSwitch.prototype, "_onFocusedChange", null);
__decorate([
    rionite_1.Listen('change', 'input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalSwitch.prototype, "_onInputChange", null);
__decorate([
    rionite_1.Listen('focus', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalSwitch.prototype, "_onControlFocus", null);
__decorate([
    rionite_1.Listen('blur', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalSwitch.prototype, "_onControlBlur", null);
OpalSwitch = OpalSwitch_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSwitch',
        template: template_rnt_1.default
    })
], OpalSwitch);
exports.OpalSwitch = OpalSwitch;


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});