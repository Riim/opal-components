(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-radio-group"] = factory(require("reflect-metadata"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-radio-group"] = factory(root["reflect-metadata"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__5__) {
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
Object.defineProperty(exports, "__esModule", { value: true });
const rionite_1 = __webpack_require__(3);
const OpalRadioButton_1 = __webpack_require__(4);
exports.OpalRadioButton = OpalRadioButton_1.OpalRadioButton;
const forEach = Array.prototype.forEach;
let OpalRadioGroup = class OpalRadioGroup extends rionite_1.BaseComponent {
    ready() {
        this.buttonElements = this.element.getElementsByClassName('OpalRadioButton');
    }
    elementAttached() {
        this.listenTo(this, {
            '<OpalRadioButton>check': this._onCheck,
            '<OpalRadioButton>uncheck': this._onUncheck
        });
    }
    _onCheck(evt) {
        let checkedButton = evt.target;
        forEach.call(this.buttonElements, (btnEl) => {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
    }
    _onUncheck(evt) {
        evt.target.check();
    }
};
OpalRadioGroup = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRadioGroup'
    })
], OpalRadioGroup);
exports.OpalRadioGroup = OpalRadioGroup;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
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
const cellx_decorators_1 = __webpack_require__(5);
const rionite_1 = __webpack_require__(3);
__webpack_require__(6);
const template_rnt_1 = __webpack_require__(7);
let OpalRadioButton = class OpalRadioButton extends rionite_1.BaseComponent {
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
    elementAttached() {
        this.listenTo(this, {
            'change:checked': this._onCheckedChange,
            'change:focused': this._onFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
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
                this.emit((this.checked = !this.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    }
    _onInputChange(evt) {
        this.emit((this.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    }
    _onControlFocus() {
        this.focused = true;
        this.emit('focus');
    }
    _onControlBlur() {
        this.focused = false;
        this.emit('blur');
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
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalRadioButton.prototype, "checked", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalRadioButton.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalRadioButton.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalRadioButton.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalRadioButton.prototype, "_tabIndex", null);
OpalRadioButton = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRadioButton',
        template: template_rnt_1.default
    })
], OpalRadioButton);
exports.OpalRadioButton = OpalRadioButton;


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
            style.textContent = ".OpalRadioButton{position:relative;display:inline-block}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control{border-color:#8a8a8a}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control:focus{border-color:#33a0ff}.OpalRadioButton .OpalRadioButton__input{display:none}.OpalRadioButton .OpalRadioButton__control{position:relative;top:-2px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalRadioButton .OpalRadioButton__control:focus{outline:0;border-color:#33a0ff}.OpalRadioButton[checked] .OpalRadioButton__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.OpalRadioButton[disabled]{opacity:.5;pointer-events:none}.OpalRadioButton[disabled] .OpalRadioButton__control{background:#e6e6e6}";
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
/* harmony default export */ __webpack_exports__["default"] = ("label:label {\ninput:input (type=checkbox)\nspan:control (tabindex={_tabIndex})\n' '\nRnSlot:contentSlot\n}");

/***/ })
/******/ ]);
});