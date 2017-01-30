/**
 * Based on [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput).
 */

import { define } from 'cellx';
import { IComponentElement, IComponentEvents, Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalInputMaskDefinition from './opal-input-mask-definition';
import defaultDefinitions from './defaultDefinitions';

export { default as OpalInputMaskDefinition } from './opal-input-mask-definition';
export { default as defaultDefinitions } from './defaultDefinitions';

let forEach = Array.prototype.forEach;

let iPhone = /iphone/i.test(navigator.userAgent);

@d.Component({
	elementIs: 'opal-input-mask',

	props: {
		mask: { type: String, required: true }
	},

	bemlTemplate: 'rt-content/content (cloning=no)'
})
export default class OpalInputMask extends Component {
	static OpalInputMaskDefinition = OpalInputMaskDefinition;

	static defaultDefinitions = defaultDefinitions;

	_definitions: { [chr: string]: RegExp };

	_mask: Array<string>;
	_partialIndex: number;
	_tests: Array<RegExp | null>;
	_firstTestIndex: number;

	_buffer: Array<string | null>;

	_textField: HTMLInputElement;

	_focusText: string;

	initialize() {
		this._definitions = Object.create((this.constructor as typeof OpalInputMask).defaultDefinitions);
	}

	ready() {
		this._textField = (this.$('input') as OpalTextInput).$('text-field') as HTMLInputElement;

		let definitions = this._definitions;

		forEach.call(
			this.element.querySelectorAll('opal-input-mask-definition'),
			(inputMaskDefinition: IComponentElement) => {
				let props = inputMaskDefinition.$c.props;
				definitions[props['maskChar']] = props['regex'];
			}
		);

		define(this, {
			_mask(this: OpalInputMask): Array<string> {
				return this.props['mask'].split('').filter((chr: string) => chr != '?');
			},

			_partialIndex(this: OpalInputMask): number {
				let mask = this.props['mask'];
				let index = mask.indexOf('?');
				return index == -1 ? mask.length : index;
			},

			_tests(this: OpalInputMask): Array<RegExp> {
				return this._mask.map((chr: string) => definitions[chr] || null);
			},

			_firstTestIndex(this: OpalInputMask): number {
				return (this._tests as any).findIndex((test: string) => test);
			}
		});

		this._initBuffer();
	}

	elementAttached() {
		this.listenTo(this, 'change:_mask', this._onMaskChange);

		this.listenTo(this._textField, {
			focusin: this._onTextFieldFocusIn,
			focusout: this._onTextFieldFocusOut,
			keydown: this._onTextFieldKeyDown,
			keypress: this._onTextFieldKeyPress,
			input: this._onTextFieldInput
		});

		this._checkValue(false);
	}

	_onMaskChange() {
		this._initBuffer();

		setTimeout(() => {
			this._checkValue(false);
		}, 1);
	}

	_onTextFieldFocusIn() {
		this._focusText = this._textField.value;

		let index = this._checkValue(false);
		this._writeBuffer();

		setTimeout(() => {
			if (index == this._buffer.length) {
				this._setTextFieldSelection(0, index);
			} else {
				this._setTextFieldSelection(index);
			}
		}, 1);
	}

	_onTextFieldFocusOut() {
		this._checkValue(false);

		if (this._textField.value != this._focusText) {
			(this.$('input') as OpalTextInput).emit('change');
		}
	}

	_onTextFieldKeyDown(evt: KeyboardEvent) {
		let textField = this._textField;
		let key = evt.which;

		// Backspace, delete, and escape get special treatment
		if (key == 8 || key == 46 || iPhone && key == 127) {
			evt.preventDefault();

			let start = textField.selectionStart;
			let end = textField.selectionEnd;

			if (start == end) {
				if (key == 46) {
					start = this._nextTestIndex(start - 1);
					end = this._nextTestIndex(start);
				} else {
					start = this._prevTestIndex(start);
				}
			}

			let value = textField.value;

			this._clearBuffer(start, end);
			this._shiftLeft(start, end - 1);

			if (value != textField.value) {
				let input = this.$('input') as OpalTextInput;
				((input.constructor as typeof OpalTextInput).events as IComponentEvents<OpalTextInput>)
					['text-field']['input'].call(input, evt);
			}
		} else if (key == 27) { // Escape
			evt.preventDefault();

			if (textField.value != this._focusText) {
				textField.value = this._focusText;
				this._setTextFieldSelection(0, this._checkValue(false));

				let input = this.$('input') as OpalTextInput;
				((input.constructor as typeof OpalTextInput).events as IComponentEvents<OpalTextInput>)
					['text-field']['input'].call(input, evt);
			}
		}
	}

	_onTextFieldKeyPress(evt: KeyboardEvent) {
		let tests = this._tests;
		let bufferLen = this._buffer.length;
		let textField = this._textField;
		let start = textField.selectionStart;
		let end = textField.selectionEnd;
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

			let index = this._nextTestIndex(start - 1);

			if (index < bufferLen) {
				let chr = String.fromCharCode(key);

				if ((tests[index] as RegExp).test(chr)) {
					this._shiftRight(index);
					this._buffer[index] = chr;
					this._writeBuffer();

					index = this._nextTestIndex(index);

					this._setTextFieldSelection(index, index);

					let input = this.$('input') as OpalTextInput;
					((input.constructor as typeof OpalTextInput).events as IComponentEvents<OpalTextInput>)
						['text-field']['input'].call(input, evt);

					if (index >= bufferLen) {
						this.emit('complete');
					}
				} else if (start != end) {
					let input = this.$('input') as OpalTextInput;
					((input.constructor as typeof OpalTextInput).events as IComponentEvents<OpalTextInput>)
						['text-field']['input'].call(input, evt);
				}
			}
		}
	}

	_onTextFieldInput() {
		setTimeout(() => {
			this._setTextFieldSelection(this._checkValue(true));
		}, 1);
	}

	_initBuffer() {
		let definitions = this._definitions;
		this._buffer = this._mask.map((chr: string) => definitions[chr] ? null : chr);
	}

	_checkValue(allowNotCompleted: boolean): number {
		let partialIndex = this._partialIndex;
		let tests = this._tests;
		let buffer = this._buffer;
		let bufferLen = buffer.length;
		let textField = this._textField;
		let value = textField.value;
		let valueLen = value.length;
		let index = 0;
		let lastMatchIndex = -1;

		for (let j = 0; index < bufferLen; index++) {
			if (tests[index]) {
				buffer[index] = null;

				while (j++ < valueLen) {
					let chr = value.charAt(j - 1);

					if ((tests[index] as RegExp).test(chr)) {
						buffer[index] = chr;
						lastMatchIndex = index;
						break;
					}
				}

				if (j > valueLen) {
					this._clearBuffer(index + 1, bufferLen);
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
			textField.value = '';
			this._clearBuffer(0, bufferLen);
		} else {
			textField.value = buffer.slice(0, lastMatchIndex + 1).join('');
		}

		return partialIndex ? index : this._firstTestIndex;
	}

	_shiftLeft(start: number, end: number) {
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
				} else {
					break;
				}
			}
		}

		this._writeBuffer();

		this._setTextFieldSelection(Math.max(this._firstTestIndex, start));
	}

	_shiftRight(index: number) {
		let tests = this._tests;
		let buffer = this._buffer;
		let chr = null;

		for (let l = buffer.length; index < l; index++) {
			if (tests[index]) {
				let nextChr = buffer[index];
				buffer[index] = chr;

				let j = this._nextTestIndex(index);

				if (j < l && nextChr && (tests[j] as RegExp).test(nextChr)) {
					chr = nextChr;
				} else {
					break;
				}
			}
		}
	}

	_nextTestIndex(index: number): number {
		let tests = this._tests;
		for (let l = tests.length; ++index < l && !tests[index];) {}
		return index;
	}

	_prevTestIndex(index: number): number {
		let tests = this._tests;
		while (--index >= 0 && !tests[index]) {}
		return index;
	}

	_writeBuffer() {
		let buffer = this._buffer;
		let toIndex = buffer.indexOf(null);
		this._textField.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
	}

	_clearBuffer(start: number, end: number) {
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

	_setTextFieldSelection(start: number, end: number = start) {
		this._textField.setSelectionRange(start, end);
	}
}
