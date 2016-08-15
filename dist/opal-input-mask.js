(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-input-mask"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-input-mask"] = factory(root["cellx"], root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Code based on [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput).
	 */

	__webpack_require__(20);
	__webpack_require__(22);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(3);

	var Component = _require.Component;

	var defaultDefinitions = __webpack_require__(23);

	var forEach = Array.prototype.forEach;

	var defaultPlaceholder = '_';

	var iPhone = /iphone/i.test(navigator.userAgent);

	module.exports = Component.extend('opal-input-mask', {
		Static: {
			defaultDefinitions: defaultDefinitions,

			props: {
				mask: String,
				placeholder: defaultPlaceholder
			},

			template: __webpack_require__(24)
		},

		_focusText: void 0,

		initialize: function initialize() {
			if (!this.props.mask) {
				throw new TypeError('Property "mask" is required');
			}

			this._definitions = Object.create(this.constructor.defaultDefinitions);
			this._placeholder = this.props.placeholder.charAt(0) || defaultPlaceholder;
		},
		ready: function ready() {
			this.assets.input = this.$('&__input').assets.control;

			var definitions = this._definitions;

			forEach.call(this.element.querySelectorAll('opal-input-mask-definition'), function (inputMaskDefinition) {
				var props = inputMaskDefinition.$c.props;
				definitions[props.maskChar] = props.regex;
			});

			cellx.define(this, {
				_mask: function _mask() {
					return this.props.mask.split('').filter(function (chr) {
						return chr != '?';
					});
				},
				_partialIndex: function _partialIndex() {
					var mask = this.props.mask;
					var index = mask.indexOf('?');
					return index == -1 ? mask.length : index;
				},
				_tests: function _tests() {
					return this._mask.map(function (chr) {
						return definitions[chr] || null;
					});
				},
				_firstTestIndex: function _firstTestIndex() {
					return this._tests.findIndex(function (test) {
						return test;
					});
				}
			});

			var placeholder = this._placeholder;

			this._buffer = this._mask.map(function (chr) {
				return definitions[chr] ? placeholder : chr;
			});
		},
		elementAttached: function elementAttached() {
			this.listenTo(this.assets.input, {
				focusin: this._onInputFocusIn,
				focusout: this._onInputFocusOut,
				keydown: this._onInputKeyDown,
				keypress: this._onInputKeyPress,
				input: this._onInputInput
			});

			this._checkValue();
		},
		_onInputFocusIn: function _onInputFocusIn() {
			var _this = this;

			this._focusText = this.assets.input.value;

			var index = this._checkValue();
			this._writeBuffer();

			setTimeout(function () {
				if (index == _this._buffer.length) {
					_this._setInputSelection(0, index);
				} else {
					_this._setInputSelection(index);
				}
			}, 1);
		},
		_onInputFocusOut: function _onInputFocusOut() {
			this._checkValue();

			var input = this.assets.input;

			if (input.value != this._focusText) {
				this.emit('change');
			}
		},
		_onInputKeyDown: function _onInputKeyDown(evt) {
			var input = this.assets.input;
			var key = evt.which;

			// Backspace, delete, and escape get special treatment
			if (key == 8 || key == 46 || iPhone && key == 127) {
				evt.preventDefault();

				var start = input.selectionStart;
				var end = input.selectionEnd;

				if (start == end) {
					start = key != 46 ? this._prevTestIndex(start) : end = this._nextTestIndex(start - 1);
					end = key == 46 ? this._nextTestIndex(end) : end;
				}

				this._clearBuffer(start, end);
				this._shiftLeft(start, end - 1);
			} else if (key == 27) {
				// Escape
				evt.preventDefault();

				input.value = this._focusText;
				this._setInputSelection(0, this._checkValue());
			}
		},
		_onInputKeyPress: function _onInputKeyPress(evt) {
			var tests = this._tests;
			var bufferLength = this._buffer.length;
			var input = this.assets.input;
			var start = input.selectionStart;
			var end = input.selectionEnd;
			var key = evt.which;

			if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32) {
				// Ignore
				return;
			}

			if (key) {
				evt.preventDefault();

				if (start != end) {
					this._clearBuffer(start, end);
					this._shiftLeft(start, end - 1);
				}

				var next = this._nextTestIndex(start - 1);

				if (next < bufferLength) {
					var chr = String.fromCharCode(key);

					if (tests[next].test(chr)) {
						this._shiftRight(next);
						this._buffer[next] = chr;
						this._writeBuffer();

						next = this._nextTestIndex(next);

						this._setInputSelection(next, next);

						if (next >= bufferLength) {
							this.emit('complete');
						}
					}
				}
			}
		},
		_onInputInput: function _onInputInput() {
			var _this2 = this;

			setTimeout(function () {
				_this2._setInputSelection(_this2._checkValue(true));
			}, 1);
		},
		_checkValue: function _checkValue(allowNotCompleted) {
			var partialIndex = this._partialIndex;
			var placeholder = this._placeholder;
			var tests = this._tests;
			var buffer = this._buffer;
			var bufferLength = buffer.length;
			var input = this.assets.input;
			var value = input.value;
			var valueLength = value.length;
			var index = 0;
			var lastMatchIndex = -1;

			for (var j = 0; index < bufferLength; index++) {
				if (tests[index]) {
					buffer[index] = placeholder;

					while (j++ < valueLength) {
						var chr = value.charAt(j - 1);

						if (tests[index].test(chr)) {
							buffer[index] = chr;
							lastMatchIndex = index;
							break;
						}
					}

					if (j > valueLength) {
						this._clearBuffer(index + 1, bufferLength);
						break;
					}
				} else {
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
			} else if (lastMatchIndex + 1 < partialIndex) {
				input.value = '';
				this._clearBuffer(0, bufferLength);
			} else {
				input.value = buffer.slice(0, lastMatchIndex + 1).join('');
			}

			return partialIndex ? index : this._firstTestIndex;
		},
		_shiftLeft: function _shiftLeft(start, end) {
			if (start < 0) {
				return;
			}

			var placeholder = this._placeholder;
			var tests = this._tests;
			var buffer = this._buffer;

			for (var i = start, j = this._nextTestIndex(end), l = buffer.length; i < l; i++) {
				var test = tests[i];

				if (test) {
					if (j < l && test.test(buffer[j])) {
						buffer[i] = buffer[j];
						buffer[j] = placeholder;

						j = this._nextTestIndex(j);
					} else {
						break;
					}
				}
			}

			this._writeBuffer();

			this._setInputSelection(Math.max(this._firstTestIndex, start));
		},
		_shiftRight: function _shiftRight(index) {
			var tests = this._tests;
			var buffer = this._buffer;
			var chr = this._placeholder;

			for (var i = index, l = buffer.length; i < l; i++) {
				if (tests[i]) {
					var j = this._nextTestIndex(i);
					var nextChr = buffer[i];

					buffer[i] = chr;

					if (j < l && tests[j].test(nextChr)) {
						chr = nextChr;
					} else {
						break;
					}
				}
			}
		},
		_nextTestIndex: function _nextTestIndex(index) {
			var tests = this._tests;
			var testLength = tests.length;
			while (++index < testLength && !tests[index]) {}
			return index;
		},
		_prevTestIndex: function _prevTestIndex(index) {
			var tests = this._tests;
			while (--index >= 0 && !tests[index]) {}
			return index;
		},
		_writeBuffer: function _writeBuffer() {
			this.assets.input.value = this._buffer.join('');
		},
		_clearBuffer: function _clearBuffer(start, end) {
			var placeholder = this._placeholder;
			var tests = this._tests;
			var buffer = this._buffer;

			if (end > buffer.length) {
				end = buffer.length;
			}

			for (var i = start; i < end; i++) {
				if (tests[i]) {
					buffer[i] = placeholder;
				}
			}
		},
		_setInputSelection: function _setInputSelection(start) {
			var end = arguments.length <= 1 || arguments[1] === undefined ? start : arguments[1];

			this.assets.input.setSelectionRange(start, end);
		}
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(21);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-input-mask-definition', {
		Static: {
			props: {
				maskChar: String,
				regex: Object
			}
		}
	});

/***/ },
/* 21 */
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


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-input-mask .opal-input-mask__input .opal-text-input__control{font-family:'Lucida Console',Monaco,monospace}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	var defaultDefinitions = module.exports = Object.create(null);

	defaultDefinitions['9'] = /\d/;
	defaultDefinitions['z'] = /[a-zA-Z]/; // eslint-disable-line dot-notation
	defaultDefinitions['*'] = /[0-9a-zA-Z]/;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<rt-content class=\"opal-input-mask__content\"></rt-content>"

/***/ }
/******/ ])
});
;