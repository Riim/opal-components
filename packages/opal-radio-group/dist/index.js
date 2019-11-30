(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-radio-group"] = factory(require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-radio-group"] = factory(root["rionite"], root["cellx-decorators"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "H8nQ");
/******/ })
/************************************************************************/
/******/ ({

/***/ "Gyxf":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalRadioButton{position:relative;display:inline-block}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control{border-color:var(--grayColor550, hsl(0,0%,55%))}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control:focus{border-color:var(--primaryColor650, hsl(208,93%,65%))}.OpalRadioButton .OpalRadioButton__input{display:none}.OpalRadioButton .OpalRadioButton__control{position:relative;top:-2px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid var(--grayColor650, hsl(0,0%,65%));border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalRadioButton .OpalRadioButton__control:focus{outline:0;border-color:var(--primaryColor650, hsl(208,93%,65%))}.OpalRadioButton[checked] .OpalRadioButton__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.OpalRadioButton[disabled]{opacity:.5;pointer-events:none}.OpalRadioButton[disabled] .OpalRadioButton__control{background:var(--grayColor900, hsl(0,0%,90%))}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "H8nQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("RUUp"));


/***/ }),

/***/ "RUUp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rionite_1 = __webpack_require__("u4yd");
const OpalRadioButton_1 = __webpack_require__("thMs");
exports.OpalRadioButton = OpalRadioButton_1.OpalRadioButton;
const forEach = Array.prototype.forEach;
let OpalRadioGroup = class OpalRadioGroup extends rionite_1.BaseComponent {
    ready() {
        this.buttonElements = this.element.getElementsByClassName('OpalRadioButton');
    }
    _onButtonCheck(evt) {
        let checkedButton = evt.target;
        forEach.call(this.buttonElements, (btnEl) => {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
    }
    _onButtonUncheck(evt) {
        evt.target.check();
    }
};
__decorate([
    rionite_1.Listen(OpalRadioButton_1.OpalRadioButton.EVENT_CHECK)
], OpalRadioGroup.prototype, "_onButtonCheck", null);
__decorate([
    rionite_1.Listen(OpalRadioButton_1.OpalRadioButton.EVENT_UNCHECK)
], OpalRadioGroup.prototype, "_onButtonUncheck", null);
OpalRadioGroup = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRadioGroup'
    })
], OpalRadioGroup);
exports.OpalRadioGroup = OpalRadioGroup;


/***/ }),

/***/ "aUPk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"label",["label"],,[[1,,"input",["input"],[,[[,"type","checkbox"]]],],[1,,"span",["control"],[,[[,"tabindex","{_tabIndex}"]]],],[3," "],[1,,"RnSlot",["contentSlot"],,]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "thMs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalRadioButton_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("Gyxf");
const template_rnt_1 = __webpack_require__("aUPk");
let OpalRadioButton = OpalRadioButton_1 = class OpalRadioButton extends rionite_1.BaseComponent {
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
                    ? OpalRadioButton_1.EVENT_CHECK
                    : OpalRadioButton_1.EVENT_UNCHECK);
                this.emit(OpalRadioButton_1.EVENT_CHANGE);
            }
        }
    }
    _onInputChange(evt) {
        this.emit((this.checked = evt.target.checked)
            ? OpalRadioButton_1.EVENT_CHECK
            : OpalRadioButton_1.EVENT_UNCHECK);
        this.emit(OpalRadioButton_1.EVENT_CHANGE);
    }
    _onControlFocus() {
        this.focused = true;
        this.emit(OpalRadioButton_1.EVENT_FOCUS);
    }
    _onControlBlur() {
        this.focused = false;
        this.emit(OpalRadioButton_1.EVENT_BLUR);
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
OpalRadioButton.EVENT_BLUR = Symbol('blur');
OpalRadioButton.EVENT_CHANGE = Symbol('change');
OpalRadioButton.EVENT_CHECK = Symbol('check');
OpalRadioButton.EVENT_FOCUS = Symbol('focus');
OpalRadioButton.EVENT_UNCHECK = Symbol('uncheck');
__decorate([
    rionite_1.Param(Boolean)
], OpalRadioButton.prototype, "checked", void 0);
__decorate([
    rionite_1.Param({ default: 0 })
], OpalRadioButton.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalRadioButton.prototype, "focused", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalRadioButton.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalRadioButton.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('change:checked')
], OpalRadioButton.prototype, "_onCheckedChange", null);
__decorate([
    rionite_1.Listen('change:focused')
], OpalRadioButton.prototype, "_onFocusedChange", null);
__decorate([
    rionite_1.Listen('change', 'input')
], OpalRadioButton.prototype, "_onInputChange", null);
__decorate([
    rionite_1.Listen('focus', 'control')
], OpalRadioButton.prototype, "_onControlFocus", null);
__decorate([
    rionite_1.Listen('blur', 'control')
], OpalRadioButton.prototype, "_onControlBlur", null);
OpalRadioButton = OpalRadioButton_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRadioButton',
        template: template_rnt_1.default
    })
], OpalRadioButton);
exports.OpalRadioButton = OpalRadioButton;


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