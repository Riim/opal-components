(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("@riim/next-tick"), require("@riim/opal-text-input"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators", "@riim/next-tick", "@riim/opal-text-input"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-input-mask"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("@riim/next-tick"), require("@riim/opal-text-input"));
	else
		root["@riim/opal-input-mask"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"], root["@riim/next-tick"], root["@riim/opal-text-input"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(7);
__webpack_require__(1);
__export(__webpack_require__(140));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var next_tick_1 = __webpack_require__(4);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
var OpalInputMaskDefinition_1 = __webpack_require__(141);
exports.OpalInputMaskDefinition = OpalInputMaskDefinition_1.OpalInputMaskDefinition;
var template_nelm_1 = __webpack_require__(143);
var forEach = Array.prototype.forEach;
var iPhone = /iphone/i.test(navigator.userAgent);
var ie11 = !window.ActiveXObject && 'ActiveXObject' in window;
var OpalInputMask = /** @class */ (function (_super) {
    __extends(OpalInputMask, _super);
    function OpalInputMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputMask_1 = OpalInputMask;
    Object.defineProperty(OpalInputMask.prototype, "_mask", {
        get: function () {
            return this.paramMask.split('').filter(function (chr) { return chr != '?'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_partialIndex", {
        get: function () {
            var index = this.paramMask.indexOf('?');
            return index == -1 ? this.paramMask.length : index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_tests", {
        get: function () {
            var _this = this;
            return this._mask.map(function (chr) { return _this._definitions[chr] || null; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_firstTestIndex", {
        get: function () {
            return this._tests.findIndex(function (test) { return !!test; });
        },
        enumerable: true,
        configurable: true
    });
    OpalInputMask.prototype.initialize = function () {
        this._definitions = Object.create(this.constructor.defaultDefinitions);
    };
    OpalInputMask.prototype.ready = function () {
        this.textInput = this.$('textInput');
        this.textField = this.textInput.textField;
        var definitions = this._definitions;
        forEach.call(this.element.getElementsByClassName('OpalInputMaskDefinition'), function (inputMaskDefinition) {
            definitions[inputMaskDefinition.$component.paramMaskChar] = inputMaskDefinition.$component.paramRegex;
        });
        this._initBuffer();
    };
    OpalInputMask.prototype.elementAttached = function () {
        this.listenTo(this, 'change:_mask', this._onMaskChange);
        this.listenTo(this.textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            input: this._onTextFieldInput
        });
        if (!ie11) {
            this._checkValue(false);
        }
    };
    OpalInputMask.prototype._onMaskChange = function () {
        this._initBuffer();
        this._checkValue(false);
    };
    OpalInputMask.prototype._onTextFieldFocus = function () {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == _this.textField) {
                _this._setTextFieldSelection(0, _this._checkValue(false));
                _this._textOnFocus = _this.textField.value;
                _this._writeBuffer();
            }
        });
    };
    OpalInputMask.prototype._onTextFieldBlur = function () {
        this._checkValue(false);
        if (this.textField.value != this._textOnFocus) {
            this.textInput.emit('change');
        }
    };
    OpalInputMask.prototype._onTextFieldKeyDown = function (evt) {
        var textField = this.textField;
        var key = evt.which;
        // Backspace, delete, and escape get special treatment
        if (key == 8 || key == 46 || (iPhone && key == 127)) {
            evt.preventDefault();
            var start = textField.selectionStart;
            var end = textField.selectionEnd;
            if (start == end) {
                if (key == 46) {
                    start = this._nextTestIndex(start - 1);
                    end = this._nextTestIndex(start);
                }
                else {
                    start = this._prevTestIndex(start);
                }
            }
            var value = textField.value;
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
                this._setTextFieldSelection(0, this._checkValue(false));
                this.textInput._onTextFieldInput(evt);
            }
        }
    };
    OpalInputMask.prototype._onTextFieldKeyPress = function (evt) {
        var tests = this._tests;
        var bufferLen = this._buffer.length;
        var textField = this.textField;
        var start = textField.selectionStart;
        var end = textField.selectionEnd;
        var key = evt.which;
        if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32 /* Ignore */) {
            return;
        }
        if (key) {
            evt.preventDefault();
            if (start != end) {
                this._clearBuffer(start, end);
                this._shiftLeft(start, end - 1);
            }
            var index = this._nextTestIndex(start - 1);
            if (index < bufferLen) {
                var chr = String.fromCharCode(key);
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
                        this.emit('complete');
                    }
                }
                else if (start != end) {
                    this.textInput._onTextFieldInput(evt);
                }
            }
        }
    };
    OpalInputMask.prototype._onTextFieldInput = function () {
        if (ie11) {
            return;
        }
        this._setTextFieldSelection(this._checkValue(true));
    };
    OpalInputMask.prototype._initBuffer = function () {
        var definitions = this._definitions;
        this._buffer = this._mask.map(function (chr) { return (definitions[chr] ? null : chr); });
    };
    OpalInputMask.prototype._checkValue = function (allowNotCompleted) {
        var partialIndex = this._partialIndex;
        var tests = this._tests;
        var buffer = this._buffer;
        var bufferLen = buffer.length;
        var value = this.textField.value;
        var valueLen = value.length;
        var index = 0;
        var lastMatchIndex = -1;
        for (var j = 0; index < bufferLen; index++) {
            if (tests[index]) {
                buffer[index] = null;
                while (j++ < valueLen) {
                    var chr = value.charAt(j - 1);
                    if (tests[index].test(chr)) {
                        buffer[index] = chr;
                        lastMatchIndex = index;
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
        else {
            if (lastMatchIndex + 1 < partialIndex) {
                this._clearBuffer(0, bufferLen);
                this.textInput.value = '';
            }
            else {
                this.textInput.value = buffer.slice(0, lastMatchIndex + 1).join('');
            }
        }
        return index;
    };
    OpalInputMask.prototype._shiftLeft = function (start, end) {
        if (start < 0) {
            return;
        }
        var tests = this._tests;
        var buffer = this._buffer;
        for (var i = start, j = this._nextTestIndex(end), l = buffer.length; i < l; i++) {
            var test = tests[i];
            if (test) {
                var chr = void 0;
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
    };
    OpalInputMask.prototype._shiftRight = function (index) {
        var tests = this._tests;
        var buffer = this._buffer;
        var chr = null;
        for (var l = buffer.length; index < l; index++) {
            if (tests[index]) {
                var nextChr = buffer[index];
                buffer[index] = chr;
                var j = this._nextTestIndex(index);
                if (j < l && nextChr && tests[j].test(nextChr)) {
                    chr = nextChr;
                }
                else {
                    break;
                }
            }
        }
    };
    OpalInputMask.prototype._nextTestIndex = function (index) {
        var tests = this._tests;
        for (var l = tests.length; ++index < l && !tests[index];) { }
        return index;
    };
    OpalInputMask.prototype._prevTestIndex = function (index) {
        var tests = this._tests;
        while (--index >= 0 && !tests[index]) { }
        return index;
    };
    OpalInputMask.prototype._writeBuffer = function () {
        var buffer = this._buffer;
        var toIndex = buffer.indexOf(null);
        this.textInput.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
    };
    OpalInputMask.prototype._clearBuffer = function (start, end) {
        var tests = this._tests;
        var buffer = this._buffer;
        if (end > buffer.length) {
            end = buffer.length;
        }
        for (var i = start; i < end; i++) {
            if (tests[i]) {
                buffer[i] = null;
            }
        }
    };
    OpalInputMask.prototype._setTextFieldSelection = function (start, end) {
        if (end === void 0) { end = start; }
        this.textField.setSelectionRange(start, end);
    };
    OpalInputMask.defaultDefinitions = {
        __proto__: null,
        9: /\d/,
        z: /[a-zA-Z]/,
        '*': /[0-9a-zA-Z]/
    };
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", String)
    ], OpalInputMask.prototype, "paramMask", void 0);
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
            template: template_nelm_1.default
        })
    ], OpalInputMask);
    return OpalInputMask;
    var OpalInputMask_1;
}(rionite_1.BaseComponent));
exports.OpalInputMask = OpalInputMask;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(142);
var OpalInputMaskDefinition = /** @class */ (function (_super) {
    __extends(OpalInputMaskDefinition, _super);
    function OpalInputMaskDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalInputMaskDefinition.prototype, "paramMaskChar", void 0);
    __decorate([
        rionite_1.Param({ type: eval, required: true, readonly: true }),
        __metadata("design:type", RegExp)
    ], OpalInputMaskDefinition.prototype, "paramRegex", void 0);
    OpalInputMaskDefinition = __decorate([
        rionite_1.Component()
    ], OpalInputMaskDefinition);
    return OpalInputMaskDefinition;
}(rionite_1.BaseComponent));
exports.OpalInputMaskDefinition = OpalInputMaskDefinition;


/***/ }),

/***/ 142:
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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRnSlot/contentSlot\n}");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});