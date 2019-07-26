(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-text-input"), require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-text-input", "reflect-metadata", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-input-mask"] = factory(require("@riim/opal-text-input"), require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-input-mask"] = factory(root["@riim/opal-text-input"], root["reflect-metadata"], root["cellx-decorators"], root["rionite"]);
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
var OpalInputMask_1;
Object.defineProperty(exports, "__esModule", { value: true });
const opal_text_input_1 = __webpack_require__(1);
const cellx_decorators_1 = __webpack_require__(4);
const rionite_1 = __webpack_require__(5);
const OpalInputMaskDefinition_1 = __webpack_require__(6);
exports.OpalInputMaskDefinition = OpalInputMaskDefinition_1.OpalInputMaskDefinition;
const template_rnt_1 = __webpack_require__(8);
const forEach = Array.prototype.forEach;
const iPhone = /iphone/i.test(navigator.userAgent);
const ie11 = !window.ActiveXObject && 'ActiveXObject' in window;
let OpalInputMask = OpalInputMask_1 = class OpalInputMask extends rionite_1.BaseComponent {
    get _mask() {
        return this.mask.split('').filter(chr => chr != '?');
    }
    get _partialIndex() {
        let index = this.mask.indexOf('?');
        return index == -1 ? this.mask.length : index;
    }
    get _tests() {
        return this._mask.map(chr => this._definitions[chr] || null);
    }
    get _firstTestIndex() {
        return this._tests.findIndex(test => !!test);
    }
    initialize() {
        this._definitions = Object.create(this.constructor.defaultDefinitions);
    }
    ready() {
        this.textInput = this.$('textInput');
        this.textField = this.textInput.textField;
        let definitions = this._definitions;
        forEach.call(this.element.getElementsByClassName('OpalInputMaskDefinition'), (inputMaskDefinition) => {
            definitions[inputMaskDefinition.$component.maskChar] = inputMaskDefinition.$component.regex;
        });
        this._initBuffer();
    }
    elementAttached() {
        this.listenTo(this, 'change:_mask', this._onMaskChange);
        this.listenTo(this.textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            input: this._onTextFieldInput
        });
        if (!ie11) {
            this._checkValue(false, false);
        }
    }
    _onMaskChange() {
        this._initBuffer();
        this._checkValue(false, true);
    }
    _onTextFieldFocus() {
        this._setTextFieldSelection(0, this._checkValue(false, false));
        this._textOnFocus = this.textField.value;
        this._writeBuffer();
    }
    _onTextFieldBlur() {
        this._checkValue(false, false);
        if (this.textField.value != this._textOnFocus) {
            this.textInput.emit(opal_text_input_1.OpalTextInput.EVENT_CHANGE);
        }
    }
    _onTextFieldKeyDown(evt) {
        let textField = this.textField;
        let key = evt.which;
        // Backspace, delete, and escape get special treatment
        if (key == 8 || key == 46 || (iPhone && key == 127)) {
            evt.preventDefault();
            let start = textField.selectionStart;
            let end = textField.selectionEnd;
            if (start == end) {
                if (key == 46) {
                    start = this._nextTestIndex(start - 1);
                    end = this._nextTestIndex(start);
                }
                else {
                    start = this._prevTestIndex(start);
                }
            }
            let value = textField.value;
            this._clearBuffer(start, end);
            this._shiftLeft(start, end - 1);
            if (value != textField.value) {
                this.textInput._onTextFieldInput(evt);
            }
        }
        else if (key == 27 /* Escape */) {
            evt.preventDefault();
            if (textField.value != this._textOnFocus) {
                textField.value = this._textOnFocus;
                this._setTextFieldSelection(0, this._checkValue(false, false));
                this.textInput._onTextFieldInput(evt);
            }
        }
    }
    _onTextFieldKeyPress(evt) {
        let tests = this._tests;
        let bufferLen = this._buffer.length;
        let textField = this.textField;
        let start = textField.selectionStart;
        let end = textField.selectionEnd;
        let key = evt.which;
        if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32 /* Space */) {
            return;
        }
        if (key) {
            evt.preventDefault();
            if (start != end) {
                this._clearBuffer(start, end);
                this._shiftLeft(start, end - 1);
            }
            let index = this._nextTestIndex(start - 1);
            if (index < bufferLen) {
                let chr = String.fromCharCode(key);
                if (tests[index].test(chr)) {
                    this._shiftRight(index);
                    this._buffer[index] = chr;
                    this._writeBuffer();
                    index = this._nextTestIndex(index);
                    this._setTextFieldSelection(index, index);
                    if (index == textField.value.length) {
                        textField.scrollLeft = textField.scrollWidth;
                    }
                    this.textInput._onTextFieldInput(evt);
                    if (index >= bufferLen) {
                        this.emit(OpalInputMask_1.EVENT_COMPLETE);
                    }
                }
                else if (start != end) {
                    this.textInput._onTextFieldInput(evt);
                }
            }
        }
    }
    _onTextFieldInput() {
        if (ie11) {
            return;
        }
        this._setTextFieldSelection(this._checkValue(true, false));
    }
    _initBuffer() {
        let definitions = this._definitions;
        this._buffer = this._mask.map((chr) => (definitions[chr] ? null : chr));
    }
    _checkValue(allowNotCompleted, maskChanged) {
        let partialIndex = this._partialIndex;
        let tests = this._tests;
        let buffer = this._buffer;
        let bufferLen = buffer.length;
        let value = this.textField.value;
        let valueLen = value.length;
        let index = 0;
        let lastMatchIndex = -1;
        let hasUserInput = false;
        for (let j = 0; index < bufferLen; index++) {
            if (tests[index]) {
                buffer[index] = null;
                while (j++ < valueLen) {
                    let chr = value.charAt(j - 1);
                    if (tests[index].test(chr)) {
                        buffer[index] = chr;
                        lastMatchIndex = index;
                        hasUserInput = true;
                        break;
                    }
                }
                if (j > valueLen) {
                    this._clearBuffer(index + 1, bufferLen);
                    break;
                }
            }
            else {
                if (buffer[index] == value.charAt(j)) {
                    j++;
                }
                if (index < partialIndex) {
                    lastMatchIndex = index;
                }
            }
        }
        if (allowNotCompleted) {
            this._writeBuffer();
        }
        else if (lastMatchIndex + 1 < partialIndex &&
            (!maskChanged || (!hasUserInput && !this.textInput.focused))) {
            this._clearBuffer(0, bufferLen);
            this.textInput.value = '';
        }
        else {
            this.textInput.value = buffer.slice(0, lastMatchIndex + 1).join('');
        }
        return index;
    }
    _shiftLeft(start, end) {
        if (start < 0) {
            return;
        }
        let tests = this._tests;
        let buffer = this._buffer;
        for (let i = start, j = this._nextTestIndex(end), l = buffer.length; i < l; i++) {
            let test = tests[i];
            if (test) {
                let chr;
                if (j < l && (chr = buffer[j]) && test.test(chr)) {
                    buffer[i] = chr;
                    buffer[j] = null;
                    j = this._nextTestIndex(j);
                }
                else {
                    break;
                }
            }
        }
        this._writeBuffer();
        this._setTextFieldSelection(Math.max(this._firstTestIndex, start));
    }
    _shiftRight(index) {
        let tests = this._tests;
        let buffer = this._buffer;
        let chr = null;
        for (let l = buffer.length; index < l; index++) {
            if (tests[index]) {
                let nextChr = buffer[index];
                buffer[index] = chr;
                let j = this._nextTestIndex(index);
                if (j < l && nextChr && tests[j].test(nextChr)) {
                    chr = nextChr;
                }
                else {
                    break;
                }
            }
        }
    }
    _nextTestIndex(index) {
        let tests = this._tests;
        for (let l = tests.length; ++index < l && !tests[index];) { }
        return index;
    }
    _prevTestIndex(index) {
        let tests = this._tests;
        while (--index >= 0 && !tests[index]) { }
        return index;
    }
    _writeBuffer() {
        let buffer = this._buffer;
        let toIndex = buffer.indexOf(null);
        this.textInput.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
    }
    _clearBuffer(start, end) {
        let tests = this._tests;
        let buffer = this._buffer;
        if (end > buffer.length) {
            end = buffer.length;
        }
        for (let i = start; i < end; i++) {
            if (tests[i]) {
                buffer[i] = null;
            }
        }
    }
    _setTextFieldSelection(start, end = start) {
        this.textField.setSelectionRange(start, end);
    }
};
OpalInputMask.EVENT_COMPLETE = Symbol('complete');
OpalInputMask.defaultDefinitions = {
    __proto__: null,
    9: /\d/,
    z: /[a-zA-Z]/,
    '*': /[0-9a-zA-Z]/
};
__decorate([
    rionite_1.Param({ required: true }),
    __metadata("design:type", String)
], OpalInputMask.prototype, "mask", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], OpalInputMask.prototype, "_mask", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalInputMask.prototype, "_partialIndex", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], OpalInputMask.prototype, "_tests", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalInputMask.prototype, "_firstTestIndex", null);
OpalInputMask = OpalInputMask_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalInputMask',
        template: template_rnt_1.default
    })
], OpalInputMask);
exports.OpalInputMask = OpalInputMask;


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
const rionite_1 = __webpack_require__(5);
__webpack_require__(7);
let OpalInputMaskDefinition = class OpalInputMaskDefinition extends rionite_1.BaseComponent {
};
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalInputMaskDefinition.prototype, "maskChar", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        required: true,
        readonly: true
    }),
    __metadata("design:type", RegExp)
], OpalInputMaskDefinition.prototype, "regex", void 0);
OpalInputMaskDefinition = __decorate([
    rionite_1.Component({
        elementIs: 'OpalInputMaskDefinition'
    })
], OpalInputMaskDefinition);
exports.OpalInputMaskDefinition = OpalInputMaskDefinition;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalInputMaskDefinition{display:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot:contentSlot");

/***/ })
/******/ ]);
});