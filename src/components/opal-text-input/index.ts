import { define, IEvent, Utils } from 'cellx';
import { Component, d } from 'rionite';
import '../../assets/icons/opal-components__icon-cross.svg';
import './index.css';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

@d.Component<OpalTextInput>({
	elementIs: 'opal-text-input',

	input: {
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
			click(evt: Event) {
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

	_textFieldValue: string;

	_prevValue: string | null;

	isControlIconShown: boolean;
	isBtnClearShown: boolean;

	_initialHeight: number;

	initialize() {
		define(this, {
			_textFieldValue(this: OpalTextInput): string {
				return this.input.value;
			},

			isControlIconShown(this: OpalTextInput): boolean {
				return !this.isBtnClearShown && !this.input.loading;
			},

			isBtnClearShown(this: OpalTextInput): boolean {
				return !!this._textFieldValue && !this.input.loading;
			}
		});
	}

	ready() {
		let input = this.input;
		let textField = this.textField = this.$('text-field') as HTMLInputElement;

		if (this._textFieldValue) {
			textField.value = this._textFieldValue;
		} else {
			let storeKey = input.storeKey;

			if (storeKey) {
				this._textFieldValue = textField.value = localStorage.getItem(storeKey) || '';
			}
		}

		this._prevValue = this.value;

		if (input.multiline && input.autoHeight) {
			let offsetHeight = textField.offsetHeight;

			if (offsetHeight) {
				this._initialHeight = offsetHeight + textField.scrollHeight - textField.clientHeight;
				this._fixHeight();
			} else {
				this._initialHeight = parseInt(getComputedStyle(textField).lineHeight as string, 10) * this.input.rows +
					parseInt(getComputedStyle(textField).borderTop as string, 10) +
					parseInt(getComputedStyle(textField).borderBottom as string, 10) +
					parseInt(getComputedStyle(textField).paddingTop as string, 10) +
					parseInt(getComputedStyle(textField).paddingBottom as string, 10);

				textField.style.height = this._initialHeight + 'px';
			}
		}

		if (input.focused) {
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'input-value-change': this._onInputValueChange,
			'input-focused-change': this._onInputFocusedChange
		});

		this.listenTo('text-field', {
			focus: this._onTextFieldFocus,
			blur: this._onTextFieldBlur,
			input: this._onTextFieldInput,
			change: this._onTextFieldChange,
			keydown: this._onTextFieldKeyDown,
			keypress: this._onTextFieldKeyPress,
			keyup: this._onTextFieldKeyUp
		});
	}

	_onInputValueChange(evt: IEvent) {
		if (this.textField.value != evt.value) {
			this.textField.value = evt.value;
		}
	}

	_onInputFocusedChange(evt: IEvent) {
		this[evt.value ? 'focus' : 'blur']();
	}

	_onTextFieldFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.input.focused = true;
				this.emit('focus');
			}
		});
	}

	_onTextFieldBlur() {
		this.input.focused = false;
		this.emit('blur');
	}

	_onTextFieldInput(evt: Event) {
		this._textFieldValue = this.textField.value;
		this.emit({ type: 'input', initialEvent: evt });
	}

	_onTextFieldChange(evt: Event) {
		if (this.value === this._prevValue) {
			return;
		}

		this._prevValue = this.value;

		let storeKey = this.input.storeKey;

		if (storeKey) {
			localStorage.setItem(storeKey, this.textField.value);
		}

		this.emit({ type: 'change', initialEvent: evt });
	}

	_onTextFieldKeyDown(evt: Event) {
		if (this.input.multiline && this.input.autoHeight) {
			setTimeout(() => {
				this._fixHeight();
			}, 1);
		}

		this.emit({ type: 'keydown', initialEvent: evt });
	}

	_onTextFieldKeyPress(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */) {
			this.emit('confirm');
		}

		this.emit({ type: 'keypress', initialEvent: evt });
	}

	_onTextFieldKeyUp(evt: Event) {
		if (this.input.multiline && this.input.autoHeight) {
			this._fixHeight();
		}

		this.emit({ type: 'keyup', initialEvent: evt });
	}

	_fixHeight() {
		let textField = this.textField;
		let lineHeight = parseInt(getComputedStyle(textField).lineHeight as string, 10);

		textField.style.height = this._initialHeight - lineHeight + 'px';
		textField.style.height = textField.offsetHeight + textField.scrollHeight - textField.clientHeight +
			lineHeight + 'px';
	}

	get value(): string | null {
		return this.textField.value.trim() || null;
	}
	set value(value: string | null) {
		this._textFieldValue = this.textField.value = value || '';
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
		this.input.disabled = false;
		return this;
	}

	disable(): OpalTextInput {
		this.input.disabled = true;
		return this;
	}
}
