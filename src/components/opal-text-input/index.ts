import { nextTick } from '@riim/next-tick';
import { Cell, IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalTextInput>({
	elementIs: 'OpalTextInput',
	template,

	domEvents: {
		'btn-clear': {
			click() {
				this.value = null;
				this.textField.focus();

				this.emit('clear');
				this.emit('change');
			}
		}
	}
})
export class OpalTextInput extends Component {
	@Param({ default: 'text' })
	paramInputType: string;

	@Param({ default: 'm' })
	paramSize: string;

	@Param({ default: false })
	paramMultiline: boolean;

	@Param({ default: 5 })
	paramRows: number;

	@Param({ default: true })
	paramAutoHeight: boolean;

	@Param() paramInputName: string;

	@Param({ default: '' })
	paramValue: string;

	@Param() paramStoreKey: string;

	@Param() paramPlaceholder: string;

	@Param({ default: false })
	paramClearable: boolean;

	@Param({ default: false })
	paramLoading: boolean;

	@Param({ default: 0 })
	paramTabIndex: number;

	@Param({ default: false })
	paramFocused: boolean;

	@Param({ default: false })
	paramDisabled: boolean;

	textField: HTMLInputElement;

	_textFieldValueCell: Cell<string>;
	@computed
	get _textFieldValue(): string {
		return this.paramValue;
	}
	set _textFieldValue(value: string) {
		this._textFieldValueCell.set(value);
	}

	get value(): string | null {
		return this._textFieldValue.trim() || null;
	}
	set value(value: string | null) {
		this._textFieldValue = this.textField.value = value || '';
	}

	_prevValue: string | null;

	@computed
	get isControlIconShown(): boolean {
		return !this.isBtnClearShown && !this.paramLoading;
	}

	@computed
	get isBtnClearShown(): boolean {
		return !!this._textFieldValue && !this.paramLoading;
	}

	_initialHeight: number;

	ready() {
		let textField = (this.textField = this.$<HTMLInputElement>('text-field')!);

		if (this._textFieldValue) {
			textField.value = this._textFieldValue;
		} else if (this.paramStoreKey) {
			this._textFieldValue = textField.value = localStorage.getItem(this.paramStoreKey) || '';
		}

		this._prevValue = this.value;

		if (this.paramMultiline && this.paramAutoHeight) {
			let offsetHeight = textField.offsetHeight;

			if (offsetHeight) {
				this._initialHeight =
					offsetHeight + textField.scrollHeight - textField.clientHeight;
				this._fixHeight();
			} else {
				this._initialHeight =
					parseInt(getComputedStyle(textField).lineHeight!, 10) * this.paramRows +
					parseInt(getComputedStyle(textField).borderTop!, 10) +
					parseInt(getComputedStyle(textField).borderBottom!, 10) +
					parseInt(getComputedStyle(textField).paddingTop!, 10) +
					parseInt(getComputedStyle(textField).paddingBottom!, 10);

				textField.style.height = this._initialHeight + 'px';
			}
		}

		if (this.paramFocused) {
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'change:paramValue': this._onParamValueChange,
			'change:paramFocused': this._onParamFocusedChange
		});
		this.listenTo(this.textField, {
			focus: this._onTextFieldFocus,
			blur: this._onTextFieldBlur,
			input: this._onTextFieldInput,
			change: this._onTextFieldChange,
			keydown: this._onTextFieldKeyDown,
			keypress: this._onTextFieldKeyPress,
			keyup: this._onTextFieldKeyUp
		});
	}

	_onParamValueChange(evt: IEvent) {
		if (this.textField.value != evt.data.value) {
			this.textField.value = evt.data.value;
		}
	}

	_onParamFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this.focus();
		} else {
			this.blur();
		}
	}

	_onTextFieldFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == this.textField) {
				this.paramFocused = true;
				this.emit('focus');
			}
		});
	}

	_onTextFieldBlur() {
		this.paramFocused = false;
		this.emit('blur');
	}

	_onTextFieldInput(evt: Event) {
		this._textFieldValue = this.textField.value;

		this.emit('input', {
			initialEvent: evt
		});
	}

	_onTextFieldChange(evt: Event) {
		if (this.value === this._prevValue) {
			return;
		}

		this._prevValue = this.value;

		if (this.paramStoreKey) {
			localStorage.setItem(this.paramStoreKey, this.textField.value);
		}

		this.emit({
			type: 'change',
			data: {
				initialEvent: evt
			}
		});
	}

	_onTextFieldKeyDown(evt: Event) {
		if (this.paramMultiline && this.paramAutoHeight) {
			setTimeout(() => {
				this._fixHeight();
			}, 1);
		}

		this.emit({
			type: 'keydown',
			data: {
				initialEvent: evt
			}
		});
	}

	_onTextFieldKeyPress(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */ && this.value) {
			this.emit('confirm');
		}

		this.emit({
			type: 'keypress',
			data: {
				initialEvent: evt
			}
		});
	}

	_onTextFieldKeyUp(evt: Event) {
		if (this.paramMultiline && this.paramAutoHeight) {
			this._fixHeight();
		}

		this.emit({
			type: 'keyup',
			data: {
				initialEvent: evt
			}
		});
	}

	_fixHeight() {
		let textField = this.textField;
		let lineHeight = parseInt(getComputedStyle(textField).lineHeight!, 10);

		textField.style.height = this._initialHeight - lineHeight + 'px';
		textField.style.height =
			textField.offsetHeight +
			textField.scrollHeight -
			textField.clientHeight +
			lineHeight +
			'px';
	}

	clear(): OpalTextInput {
		this.value = null;
		return this;
	}

	focus(): OpalTextInput {
		this.textField.focus();
		return this;
	}

	blur(): OpalTextInput {
		this.textField.blur();
		return this;
	}

	enable(): OpalTextInput {
		this.paramDisabled = false;
		return this;
	}

	disable(): OpalTextInput {
		this.paramDisabled = true;
		return this;
	}
}
