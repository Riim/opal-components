import { Cell, Utils } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, d, IComponentElement } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import { OpalInputMaskDefinition } from './opal-input-mask-definition';

let nextTick = Utils.nextTick;

let forEach = Array.prototype.forEach;

let iPhone = /iphone/i.test(navigator.userAgent);
let ie11 = !((window as any).ActiveXObject) && 'ActiveXObject' in window;

@d.Component({
	elementIs: 'opal-input-mask',

	input: {
		mask: { type: String, required: true }
	},

	template: '@section/inner { rt-content/content }'
})
export class OpalInputMask extends Component {
	static OpalInputMaskDefinition = OpalInputMaskDefinition;

	static defaultDefinitions: { [chr: string]: RegExp } = {
		__proto__: null,

		9: /\d/,
		z: /[a-zA-Z]/,
		'*': /[0-9a-zA-Z]/
	} as any;

	_definitions: { [chr: string]: RegExp };

	@computed get _mask(): Array<string> {
		return (this.input.mask as string).split('').filter((chr: string) => chr != '?');
	}

	@computed get _partialIndex(): number {
		let mask = this.input.mask as string;
		let index = mask.indexOf('?');
		return index == -1 ? mask.length : index;
	}

	@computed get _tests(): Array<RegExp | null> {
		return this._mask.map((chr: string) => this._definitions[chr] || null);
	}

	@computed get _firstTestIndex(): number {
		return this._tests.findIndex((test) => !!test);
	}

	_buffer: Array<string | null>;

	_textField: HTMLInputElement;

	_textOnFocus: string;

	initialize() {
		this._definitions = Object.create((this.constructor as typeof OpalInputMask).defaultDefinitions);
	}

	ready() {
		this._textField = this.$<OpalTextInput>('text-input')!.textField;

		let definitions = this._definitions;

		forEach.call(
			this.element.querySelectorAll('opal-input-mask-definition'),
			(inputMaskDefinition: IComponentElement) => {
				let input = inputMaskDefinition.$component.input;
				definitions[input.maskChar] = input.regex;
			}
		);

		this._initBuffer();
	}

	elementAttached() {
		this.listenTo(this, 'change:_mask', this._onMaskChange);

		this.listenTo(this._textField, {
			focus: this._onTextFieldFocus,
			blur: this._onTextFieldBlur,
			keydown: this._onTextFieldKeyDown,
			keypress: this._onTextFieldKeyPress,
			input: this._onTextFieldInput
		});

		if (!ie11) {
			this._checkValue(false);
		}
	}

	_onMaskChange() {
		this._initBuffer();

		Cell.afterRelease(() => {
			this._checkValue(false);
		});
	}

	_onTextFieldFocus() {
		nextTick(() => {
			if (document.activeElement == this._textField) {
				this._setTextFieldSelection(0, this._checkValue(false));
				this._textOnFocus = this._textField.value;
				this._writeBuffer();
			}
		});
	}

	_onTextFieldBlur() {
		this._checkValue(false);

		if (this._textField.value != this._textOnFocus) {
			this.$<OpalTextInput>('text-input')!.emit('change');
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
				this.$<OpalTextInput>('text-input')!._onTextFieldInput(evt);
			}
		} else if (key == 27) { // Escape
			evt.preventDefault();

			if (textField.value != this._textOnFocus) {
				textField.value = this._textOnFocus;
				this._setTextFieldSelection(0, this._checkValue(false));
				this.$<OpalTextInput>('text-input')!._onTextFieldInput(evt);
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

				if (tests[index]!.test(chr)) {
					this._shiftRight(index);
					this._buffer[index] = chr;
					this._writeBuffer();

					index = this._nextTestIndex(index);

					this._setTextFieldSelection(index, index);

					this.$<OpalTextInput>('text-input')!._onTextFieldInput(evt);

					if (index >= bufferLen) {
						this.emit('complete');
					}
				} else if (start != end) {
					this.$<OpalTextInput>('text-input')!._onTextFieldInput(evt);
				}
			}
		}
	}

	_onTextFieldInput() {
		if (ie11) {
			return;
		}

		this._setTextFieldSelection(this._checkValue(true));
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
		let value = this._textField.value;
		let valueLen = value.length;
		let index = 0;
		let lastMatchIndex = -1;

		for (let j = 0; index < bufferLen; index++) {
			if (tests[index]) {
				buffer[index] = null;

				while (j++ < valueLen) {
					let chr = value.charAt(j - 1);

					if (tests[index]!.test(chr)) {
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
		} else {
			if (lastMatchIndex + 1 < partialIndex) {
				this._clearBuffer(0, bufferLen);
				this.$<OpalTextInput>('text-input')!.value = '';
			} else {
				this.$<OpalTextInput>('text-input')!.value = buffer.slice(0, lastMatchIndex + 1).join('');
			}

			Cell.forceRelease();
		}

		return index;
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

				if (j < l && nextChr && tests[j]!.test(nextChr)) {
					chr = nextChr;
				} else {
					break;
				}
			}
		}
	}

	_nextTestIndex(index: number): number {
		let tests = this._tests;
		for (let l = tests.length; ++index < l && !tests[index]; ) {}
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
		this.$<OpalTextInput>('text-input')!.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
		Cell.forceRelease();
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

export { OpalInputMaskDefinition };
