/**
 * Code based on [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput).
 */

require('./opal-input-mask-definition');

let cellx = require('cellx');
let { Component } = require('rionite');
let defaultDefinitions = require('./defaultDefinitions');

let forEach = Array.prototype.forEach;

let iPhone = /iphone/i.test(navigator.userAgent);

module.exports = Component.extend('opal-input-mask', {
	Static: {
		defaultDefinitions,

		props: {
			mask: String
		},

		template: require('./index.html'),

		assets: {
			input: {}
		}
	},

	_focusText: void 0,

	initialize() {
		if (!this.props.mask) {
			throw new TypeError('Property "mask" is required');
		}

		this._definitions = Object.create(this.constructor.defaultDefinitions);
	},

	ready() {
		this._input = this.assets.input.assets.input;

		let definitions = this._definitions;

		forEach.call(this.element.querySelectorAll('opal-input-mask-definition'), inputMaskDefinition => {
			let props = inputMaskDefinition.$c.props;			
			definitions[props.maskChar] = props.regex;
		});

		cellx.define(this, {
			_mask() {
				return this.props.mask.split('').filter(chr => chr != '?');
			},

			_partialIndex() {
				let mask = this.props.mask;
				let index = mask.indexOf('?');
				return index == -1 ? mask.length : index;
			},

			_tests() {
				return this._mask.map(chr => definitions[chr] || null);
			},

			_firstTestIndex() {
				return this._tests.findIndex(test => test);
			}
		});

		this._initBuffer();
	},

	elementAttached() {
		this.listenTo(this, 'change:_mask', this._onMaskChange);

		this.listenTo(this._input, {
			focusin: this._onInputFocusIn,
			focusout: this._onInputFocusOut,
			keydown: this._onInputKeyDown,
			keypress: this._onInputKeyPress,
			input: this._onInputInput
		});

		this._checkValue();
	},

	_onMaskChange() {
		this._initBuffer();

		setTimeout(() => {
			this._checkValue();
		}, 1);
	},

	_onInputFocusIn() {
		this._focusText = this._input.value;

		let index = this._checkValue();
		this._writeBuffer();

		setTimeout(() => {
			if (index == this._buffer.length) {
				this._setInputSelection(0, index);
			} else {
				this._setInputSelection(index);
			}
		}, 1);
	},

	_onInputFocusOut() {
		this._checkValue();

		let input = this._input;

		if (input.value != this._focusText) {
			this.assets.input.emit('change');
		}
	},

	_onInputKeyDown(evt) {
		let input = this._input;
		let key = evt.which;

		// Backspace, delete, and escape get special treatment
		if (key == 8 || key == 46 || iPhone && key == 127) {
			evt.preventDefault();

			let start = input.selectionStart;
			let end = input.selectionEnd;

			if (start == end) {
				if (key == 46) {
					start = this._nextTestIndex(start - 1);
					end = this._nextTestIndex(start);
				} else {
					start = this._prevTestIndex(start);
				}
			}

			this._clearBuffer(start, end);
			this._shiftLeft(start, end - 1);
		} else if (key == 27) { // Escape
			evt.preventDefault();

			input.value = this._focusText;
			this._setInputSelection(0, this._checkValue());
		}
	},

	_onInputKeyPress(evt) {
		let tests = this._tests;
		let bufferLength = this._buffer.length;
		let input = this._input;
		let start = input.selectionStart;
		let end = input.selectionEnd;
		let key = evt.which;

		if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32) { // Ignore
			return;
		}

		if (key) {
			evt.preventDefault();

			if (start != end) {
				this._clearBuffer(start, end);
				this._shiftLeft(start, end - 1);
			}

			let next = this._nextTestIndex(start - 1);

			if (next < bufferLength) {
				let chr = String.fromCharCode(key);

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

	_onInputInput() {
		setTimeout(() => {
			this._setInputSelection(this._checkValue(true));
		}, 1);
	},

	_initBuffer() {
		let definitions = this._definitions;
		this._buffer = this._mask.map(chr => definitions[chr] ? null : chr);
	},

	_checkValue(allowNotCompleted) {
		let partialIndex = this._partialIndex;
		let tests = this._tests;
		let buffer = this._buffer;
		let bufferLength = buffer.length;
		let input = this._input;
		let value = input.value;
		let valueLength = value.length;
		let index = 0;
		let lastMatchIndex = -1;

		for (let j = 0; index < bufferLength; index++) {
			if (tests[index]) {
				buffer[index] = null;

				while (j++ < valueLength) {
					let chr = value.charAt(j - 1);

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

	_shiftLeft(start, end) {
		if (start < 0) {
			return;
		}

		let tests = this._tests;
		let buffer = this._buffer;

		for (let i = start, j = this._nextTestIndex(end), l = buffer.length; i < l; i++) {
			let test = tests[i]; 

			if (test) {
				if (j < l && test.test(buffer[j])) {
					buffer[i] = buffer[j];
					buffer[j] = null;
					j = this._nextTestIndex(j);
				} else {
					break;
				}
			}
		}

		this._writeBuffer();

		this._setInputSelection(Math.max(this._firstTestIndex, start));
	},

	_shiftRight(index) {
		let tests = this._tests;
		let buffer = this._buffer;
		let chr = null;

		for (let l = buffer.length; index < l; index++) {
			if (tests[index]) {
				let nextChr = buffer[index];
				buffer[index] = chr;

				let j = this._nextTestIndex(index);

				if (j < l && tests[j].test(nextChr)) {
					chr = nextChr;
				} else {
					break;
				}
			}
		}
	},

	_nextTestIndex(index) {
		let tests = this._tests;
		for (let l = tests.length; ++index < l && !tests[index];) {}
		return index;
	},

	_prevTestIndex(index) {
		let tests = this._tests;
		while (--index >= 0 && !tests[index]) {}
		return index;
	},

	_writeBuffer() {
		let buffer = this._buffer;
		let toIndex = buffer.indexOf(null);
		this._input.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
	},

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
	},

	_setInputSelection(start, end = start) {
		this._input.setSelectionRange(start, end);
	}
});
