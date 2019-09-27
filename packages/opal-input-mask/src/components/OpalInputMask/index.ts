import { OpalTextInput } from '@riim/opal-text-input';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IComponentElement,
	Listen,
	Param
	} from 'rionite';
import { OpalInputMaskDefinition } from '../OpalInputMaskDefinition';
import template from './template.rnt';

export { OpalInputMaskDefinition };

const forEach = Array.prototype.forEach;

const iPhone = /iphone/i.test(navigator.userAgent);
const ie11 = !(window as any).ActiveXObject && 'ActiveXObject' in window;

@Component({
	elementIs: 'OpalInputMask',
	template
})
export class OpalInputMask extends BaseComponent {
	static EVENT_COMPLETE = Symbol('complete');

	static defaultDefinitions: Record<string, RegExp> = {
		__proto__: null as any,

		9: /\d/,
		z: /[a-zA-Z]/,
		'*': /[0-9a-zA-Z]/
	};

	@Param({ required: true })
	mask: string;

	_definitions: Record<string, RegExp>;

	@Computed
	get _mask(): Array<string> {
		return this.mask.split('').filter(chr => chr != '?');
	}

	@Computed
	get _partialIndex(): number {
		let index = this.mask.indexOf('?');
		return index == -1 ? this.mask.length : index;
	}

	@Computed
	get _tests(): Array<RegExp | null> {
		return this._mask.map(chr => this._definitions[chr] || null);
	}

	@Computed
	get _firstTestIndex(): number {
		return this._tests.findIndex(test => !!test);
	}

	_buffer: Array<string | null>;

	textInput: OpalTextInput;
	textField: HTMLInputElement;

	_textOnFocus: string;

	initialize() {
		this._definitions = Object.create(
			(this.constructor as typeof OpalInputMask).defaultDefinitions
		);
	}

	ready() {
		this.textInput = this.$<OpalTextInput>('textInput')!;
		this.textField = this.textInput.textField;

		let definitions = this._definitions;

		forEach.call(
			this.element.getElementsByClassName('OpalInputMaskDefinition'),
			(inputMaskDefinition: IComponentElement) => {
				definitions[
					(inputMaskDefinition.$component as OpalInputMaskDefinition).maskChar
				] = (inputMaskDefinition.$component as OpalInputMaskDefinition).regex;
			}
		);

		this._initBuffer();
	}

	elementAttached() {
		if (!ie11) {
			this._checkValue(false, false);
		}
	}

	@Listen('change:_mask')
	_onMaskChange() {
		this._initBuffer();
		this._checkValue(false, true);
	}

	@Listen('focus', '@textField')
	_onTextFieldFocus() {
		this._setTextFieldSelection(0, this._checkValue(false, false));
		this._textOnFocus = this.textField.value;
		this._writeBuffer();
	}

	@Listen('blur', '@textField')
	_onTextFieldBlur() {
		this._checkValue(false, false);

		if (this.textField.value != this._textOnFocus) {
			this.textInput.emit(OpalTextInput.EVENT_CHANGE);
		}
	}

	@Listen('keydown', '@textField')
	_onTextFieldKeyDown(evt: KeyboardEvent) {
		let textField = this.textField;
		let key = evt.which;

		// Backspace, delete, and escape get special treatment
		if (key == 8 || key == 46 || (iPhone && key == 127)) {
			evt.preventDefault();

			let start = textField.selectionStart!;
			let end = textField.selectionEnd!;

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
				this.textInput._onTextFieldInput(evt);
			}
		} else if (key == 27 /* Escape */) {
			evt.preventDefault();

			if (textField.value != this._textOnFocus) {
				textField.value = this._textOnFocus;
				this._setTextFieldSelection(0, this._checkValue(false, false));
				this.textInput._onTextFieldInput(evt);
			}
		}
	}

	@Listen('keypress', '@textField')
	_onTextFieldKeyPress(evt: KeyboardEvent) {
		let tests = this._tests;
		let bufferLen = this._buffer.length;
		let textField = this.textField;
		let start = textField.selectionStart!;
		let end = textField.selectionEnd!;
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

				if (tests[index]!.test(chr)) {
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
						this.emit(OpalInputMask.EVENT_COMPLETE);
					}
				} else if (start != end) {
					this.textInput._onTextFieldInput(evt);
				}
			}
		}
	}

	@Listen('input', '@textField')
	_onTextFieldInput() {
		if (ie11) {
			return;
		}

		this._setTextFieldSelection(this._checkValue(true, false));
	}

	_initBuffer() {
		let definitions = this._definitions;
		this._buffer = this._mask.map((chr: string) => (definitions[chr] ? null : chr));
	}

	_checkValue(allowNotCompleted: boolean, maskChanged: boolean): number {
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

					if (tests[index]!.test(chr)) {
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
		} else if (
			lastMatchIndex + 1 < partialIndex &&
			(!maskChanged || (!hasUserInput && !this.textInput.focused))
		) {
			this._clearBuffer(0, bufferLen);
			this.textInput.value = '';
		} else {
			this.textInput.value = buffer.slice(0, lastMatchIndex + 1).join('');
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
		this.textInput.value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
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
		this.textField.setSelectionRange(start, end);
	}
}
