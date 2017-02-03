(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-input-mask"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-input-mask"] = factory(root["rionite"], root["cellx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based on [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput).
	 */
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
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var opal_input_mask_definition_1 = __webpack_require__(5);
	var defaultDefinitions_1 = __webpack_require__(4);
	var opal_input_mask_definition_2 = __webpack_require__(5);
	exports.OpalInputMaskDefinition = opal_input_mask_definition_2.default;
	var defaultDefinitions_2 = __webpack_require__(4);
	exports.defaultDefinitions = defaultDefinitions_2.default;
	var forEach = Array.prototype.forEach;
	var iPhone = /iphone/i.test(navigator.userAgent);
	var OpalInputMask = OpalInputMask_1 = (function (_super) {
	    __extends(OpalInputMask, _super);
	    function OpalInputMask() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalInputMask.prototype.initialize = function () {
	        this._definitions = Object.create(this.constructor.defaultDefinitions);
	    };
	    OpalInputMask.prototype.ready = function () {
	        this._textField = this.$('input').$('text-field');
	        var definitions = this._definitions;
	        forEach.call(this.element.querySelectorAll('opal-input-mask-definition'), function (inputMaskDefinition) {
	            var props = inputMaskDefinition.$c.props;
	            definitions[props['maskChar']] = props['regex'];
	        });
	        cellx_1.define(this, {
	            _mask: function () {
	                return this.props['mask'].split('').filter(function (chr) { return chr != '?'; });
	            },
	            _partialIndex: function () {
	                var mask = this.props['mask'];
	                var index = mask.indexOf('?');
	                return index == -1 ? mask.length : index;
	            },
	            _tests: function () {
	                return this._mask.map(function (chr) { return definitions[chr] || null; });
	            },
	            _firstTestIndex: function () {
	                return this._tests.findIndex(function (test) { return test; });
	            }
	        });
	        this._initBuffer();
	    };
	    OpalInputMask.prototype.elementAttached = function () {
	        this.listenTo(this, 'change:_mask', this._onMaskChange);
	        this.listenTo(this._textField, {
	            focusin: this._onTextFieldFocusIn,
	            focusout: this._onTextFieldFocusOut,
	            keydown: this._onTextFieldKeyDown,
	            keypress: this._onTextFieldKeyPress,
	            input: this._onTextFieldInput
	        });
	        this._checkValue(false);
	    };
	    OpalInputMask.prototype._onMaskChange = function () {
	        var _this = this;
	        this._initBuffer();
	        setTimeout(function () {
	            _this._checkValue(false);
	        }, 1);
	    };
	    OpalInputMask.prototype._onTextFieldFocusIn = function () {
	        var _this = this;
	        this._focusText = this._textField.value;
	        var index = this._checkValue(false);
	        this._writeBuffer();
	        setTimeout(function () {
	            if (index == _this._buffer.length) {
	                _this._setTextFieldSelection(0, index);
	            }
	            else {
	                _this._setTextFieldSelection(index);
	            }
	        }, 1);
	    };
	    OpalInputMask.prototype._onTextFieldFocusOut = function () {
	        this._checkValue(false);
	        if (this._textField.value != this._focusText) {
	            this.$('input').emit('change');
	        }
	    };
	    OpalInputMask.prototype._onTextFieldKeyDown = function (evt) {
	        var textField = this._textField;
	        var key = evt.which;
	        // Backspace, delete, and escape get special treatment
	        if (key == 8 || key == 46 || iPhone && key == 127) {
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
	                var input = this.$('input');
	                input.constructor.events['text-field']['input'].call(input, evt);
	            }
	        }
	        else if (key == 27) {
	            evt.preventDefault();
	            if (textField.value != this._focusText) {
	                textField.value = this._focusText;
	                this._setTextFieldSelection(0, this._checkValue(false));
	                var input = this.$('input');
	                input.constructor.events['text-field']['input'].call(input, evt);
	            }
	        }
	    };
	    OpalInputMask.prototype._onTextFieldKeyPress = function (evt) {
	        var tests = this._tests;
	        var bufferLen = this._buffer.length;
	        var textField = this._textField;
	        var start = textField.selectionStart;
	        var end = textField.selectionEnd;
	        var key = evt.which;
	        if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32) {
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
	                    var input = this.$('input');
	                    input.constructor.events['text-field']['input'].call(input, evt);
	                    if (index >= bufferLen) {
	                        this.emit('complete');
	                    }
	                }
	                else if (start != end) {
	                    var input = this.$('input');
	                    input.constructor.events['text-field']['input'].call(input, evt);
	                }
	            }
	        }
	    };
	    OpalInputMask.prototype._onTextFieldInput = function () {
	        var _this = this;
	        setTimeout(function () {
	            _this._setTextFieldSelection(_this._checkValue(true));
	        }, 1);
	    };
	    OpalInputMask.prototype._initBuffer = function () {
	        var definitions = this._definitions;
	        this._buffer = this._mask.map(function (chr) { return definitions[chr] ? null : chr; });
	    };
	    OpalInputMask.prototype._checkValue = function (allowNotCompleted) {
	        var partialIndex = this._partialIndex;
	        var tests = this._tests;
	        var buffer = this._buffer;
	        var bufferLen = buffer.length;
	        var textField = this._textField;
	        var value = textField.value;
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
	        else if (lastMatchIndex + 1 < partialIndex) {
	            textField.value = '';
	            this._clearBuffer(0, bufferLen);
	        }
	        else {
	            textField.value = buffer.slice(0, lastMatchIndex + 1).join('');
	        }
	        return partialIndex ? index : this._firstTestIndex;
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
	        this._textField.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
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
	        this._textField.setSelectionRange(start, end);
	    };
	    return OpalInputMask;
	}(rionite_1.Component));
	OpalInputMask.OpalInputMaskDefinition = opal_input_mask_definition_1.default;
	OpalInputMask.defaultDefinitions = defaultDefinitions_1.default;
	OpalInputMask = OpalInputMask_1 = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-input-mask',
	        props: {
	            mask: { type: String, required: true }
	        },
	        bemlTemplate: 'rt-content/content (cloning=no)'
	    })
	], OpalInputMask);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalInputMask;
	var OpalInputMask_1;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 4:
/***/ function(module, exports) {

	"use strict";
	var defaultDefinitions = Object.create(null);
	defaultDefinitions['9'] = /\d/;
	defaultDefinitions['z'] = /[a-zA-Z]/;
	defaultDefinitions['*'] = /[0-9a-zA-Z]/;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = defaultDefinitions;


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

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
	__webpack_require__(54);
	var rionite_1 = __webpack_require__(1);
	var OpalInputMaskDefinition = (function (_super) {
	    __extends(OpalInputMaskDefinition, _super);
	    function OpalInputMaskDefinition() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return OpalInputMaskDefinition;
	}(rionite_1.Component));
	OpalInputMaskDefinition = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-input-mask-definition',
	        props: {
	            maskChar: { type: String, required: true, readonly: true },
	            regex: { type: Object, required: true, readonly: true }
	        }
	    })
	], OpalInputMaskDefinition);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalInputMaskDefinition;


/***/ },

/***/ 54:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-input-mask-definition{display:none}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;