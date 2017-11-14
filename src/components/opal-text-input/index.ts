import { nextTick } from '@riim/next-tick';
import { Cell, IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalTextInput>({
	elementIs: 'opal-text-input',

	params: {
		inputType: 'text',
		size: 'm',
		multiline: false,
		rows: 5,
		autoHeight: true,
		inputName: String,
		value: '',
		storeKey: String,
		placeholder: String,
		clearable: false,
		loading: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

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
	textField: HTMLInputElement;

	_textFieldValueCell: Cell<string>;
	@computed
	get _textFieldValue(): string {
		return this.params.value;
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
		return !this.isBtnClearShown && !this.params.loading;
	}

	@computed
	get isBtnClearShown(): boolean {
		return !!this._textFieldValue && !this.params.loading;
	}

	_initialHeight: number;

	ready() {
		let params = this.params;
		let textField = (this.textField = this.$<HTMLInputElement>('text-field')!);

		if (this._textFieldValue) {
			textField.value = this._textFieldValue;
		} else if (params.storeKey) {
			this._textFieldValue = textField.value = localStorage.getItem(params.storeKey) || '';
		}

		this._prevValue = this.value;

		if (params.multiline && params.autoHeight) {
			let offsetHeight = textField.offsetHeight;

			if (offsetHeight) {
				this._initialHeight =
					offsetHeight + textField.scrollHeight - textField.clientHeight;
				this._fixHeight();
			} else {
				this._initialHeight =
					parseInt(getComputedStyle(textField).lineHeight!, 10) * params.rows +
					parseInt(getComputedStyle(textField).borderTop!, 10) +
					parseInt(getComputedStyle(textField).borderBottom!, 10) +
					parseInt(getComputedStyle(textField).paddingTop!, 10) +
					parseInt(getComputedStyle(textField).paddingBottom!, 10);

				textField.style.height = this._initialHeight + 'px';
			}
		}

		if (params.focused) {
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'param-value-change': this._onParamValueChange,
			'param-focused-change': this._onParamFocusedChange
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
				this.params.focused = true;
				this.emit('focus');
			}
		});
	}

	_onTextFieldBlur() {
		this.params.focused = false;
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

		let storeKey = this.params.storeKey;

		if (storeKey) {
			localStorage.setItem(storeKey, this.textField.value);
		}

		this.emit({
			type: 'change',
			data: {
				initialEvent: evt
			}
		});
	}

	_onTextFieldKeyDown(evt: Event) {
		if (this.params.multiline && this.params.autoHeight) {
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
		if (this.params.multiline && this.params.autoHeight) {
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
		this.params.disabled = false;
		return this;
	}

	disable(): OpalTextInput {
		this.params.disabled = true;
		return this;
	}
}
