(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-checkbox"] = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-checkbox"] = factory(root["reflect-metadata"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
const cellx_decorators_1 = __webpack_require__(3);
const rionite_1 = __webpack_require__(4);
__webpack_require__(5);
const template = __webpack_require__(6);
let OpalCheckbox = class OpalCheckbox extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.paramChecked = false;
        this.paramIndeterminate = false;
        this.paramTabIndex = 0;
        this.paramFocused = false;
        this.paramDisabled = false;
    }
    get _tabIndex() {
        return this.paramDisabled ? -1 : this.paramTabIndex;
    }
    elementAttached() {
        this.listenTo(this, {
            'change:paramChecked': this._onParamCheckedChange,
            'change:paramIndeterminate': this._onParamIndeterminateChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    }
    ready() {
        if (this.paramChecked) {
            this.paramIndeterminate = false;
            this.$('input').checked = true;
        }
        if (this.paramFocused) {
            this.focus();
        }
    }
    _onParamCheckedChange(evt) {
        if (evt.data.value) {
            this.paramIndeterminate = false;
        }
        this.$('input').checked = evt.data.value;
    }
    _onParamIndeterminateChange(evt) {
        if (evt.data.value) {
            this.paramChecked = false;
        }
    }
    _onParamFocusedChange(evt) {
        if (evt.data.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    }
    _onDocumentKeyDown(evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            if (!this.paramDisabled) {
                this.emit((this.paramChecked = !this.paramChecked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    }
    _onInputChange(evt) {
        this.emit((this.paramChecked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    }
    _onControlFocus() {
        this.paramFocused = true;
        this.emit('focus');
    }
    _onControlBlur() {
        this.paramFocused = false;
        this.emit('blur');
    }
    get checked() {
        return this.paramChecked;
    }
    set checked(checked) {
        this.paramChecked = checked;
    }
    get selected() {
        return this.checked;
    }
    set selected(selected) {
        this.checked = selected;
    }
    check() {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    }
    uncheck() {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    }
    toggle(value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
        this.paramDisabled = false;
        return this;
    }
    disable() {
        this.paramDisabled = true;
        return this;
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalCheckbox.prototype, "paramChecked", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalCheckbox.prototype, "paramIndeterminate", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalCheckbox.prototype, "paramTabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalCheckbox.prototype, "paramFocused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalCheckbox.prototype, "paramDisabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalCheckbox.prototype, "_tabIndex", null);
OpalCheckbox = __decorate([
    rionite_1.Component({
        elementIs: 'OpalCheckbox',
        template
    })
], OpalCheckbox);
exports.OpalCheckbox = OpalCheckbox;


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

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalCheckbox{position:relative;display:inline-block}.OpalCheckbox .OpalCheckbox__label:hover .OpalCheckbox__control{border-color:#8a8a8a}.OpalCheckbox .OpalCheckbox__label:hover .OpalCheckbox__control:focus{border-color:#33a0ff}.OpalCheckbox .OpalCheckbox__input{display:none}.OpalCheckbox .OpalCheckbox__control{position:relative;top:-2px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalCheckbox .OpalCheckbox__control:focus{outline:0;border-color:#33a0ff}.OpalCheckbox[checked] .OpalCheckbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.OpalCheckbox[indeterminate] .OpalCheckbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.OpalCheckbox[disabled]{opacity:.5;pointer-events:none}.OpalCheckbox[disabled] .OpalCheckbox__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "label/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\n@Slot/contentSlot\n}"

/***/ })
/******/ ]);
});