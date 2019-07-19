import { IEvent } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component<OpalTextInput>({
	elementIs: 'OpalTextInput',
	template,

	domEvents: {
		btnClear: {
			click() {
				this.value = null;
				this.textField.focus();

				this.emit('clear');
				this.emit('change');
			}
		}
	}
})
export class OpalTextInput extends BaseComponent {
	@Param
	inputType = 'text';
	@Param
	size = 'm';
	@Param
	multiline = false;
	@Param
	rows = 5;
	@Param
	autoHeight = true;
	@Param
	inputName: string;
	@Param('value')
	paramValue = '';
	@Param
	storeKey: string;
	@Param
	placeholder: string;
	@Param
	startIcon: string;
	@Param
	endIcon: string;
	@Param
	clearable = false;
	@Param
	loading = false;
	@Param
	tabIndex = 0;
	@Param
	focused = false;
	@Param
	disabled = false;

	textField: HTMLInputElement;

	@Observable
	_textFieldValue: string;

	get value(): string | null {
		return this._textFieldValue.trim() || null;
	}
	set value(value: string | null) {
		this._textFieldValue = this.textField.value = value || '';
	}

	_prevValue: string | null;

	@Computed
	get btnClearShown(): boolean {
		return this.clearable && !this.loading && !!this._textFieldValue;
	}

	@Computed
	get endIconShown(): boolean {
		return !this.loading && !this.btnClearShown;
	}

	elementAttached() {
		this.textField = this.$<HTMLInputElement>('textField')!;

		if (this._textFieldValue) {
			this.textField.value = this._textFieldValue;
		} else if (this.paramValue) {
			this._textFieldValue = this.textField.value = this.paramValue;
		} else if (this.storeKey) {
			this._textFieldValue = this.textField.value = localStorage.getItem(this.storeKey) || '';
		} else {
			this._textFieldValue = '';
		}

		this._prevValue = this.value;

		if (this.multiline && this.autoHeight) {
			this._fixMinHeight();
			this._fixHeight();
		}

		if (this.focused) {
			this.focus();
		}

		this.listenTo(this, {
			'change:rows': this._onRowsChange,
			'change:paramValue': this._onParamValueChange
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

	_onRowsChange() {
		if (this.multiline && this.autoHeight) {
			this._fixMinHeight();
		}
	}

	_onParamValueChange(evt: IEvent) {
		if (this.textField.value != evt.data.value) {
			this._textFieldValue = this.textField.value = evt.data.value;

			if (this.multiline && this.autoHeight) {
				this._fixHeight();
			}
		}
	}

	_onTextFieldFocus() {
		this.focused = true;
		this.emit('focus');
	}

	_onTextFieldBlur() {
		this.focused = false;
		this.emit('blur');
	}

	_onTextFieldInput(evt: Event) {
		this._textFieldValue = this.textField.value;

		if (this.multiline && this.autoHeight) {
			this._fixHeight();
		}

		this.emit('input', {
			initialEvent: evt
		});
	}

	_onTextFieldChange(evt: Event) {
		if (this.value === this._prevValue) {
			return;
		}

		this._prevValue = this.value;

		if (this.storeKey) {
			localStorage.setItem(this.storeKey, this.textField.value);
		}

		this.emit({
			type: 'change',
			data: {
				initialEvent: evt
			}
		});
	}

	_onTextFieldKeyDown(evt: Event) {
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
		this.emit({
			type: 'keyup',
			data: {
				initialEvent: evt
			}
		});
	}

	_fixMinHeight() {
		let style = getComputedStyle(this.textField);

		this.$<HTMLElement>('textareaHeight')!.style.minHeight =
			parseInt(style.paddingTop!, 10) +
			parseInt(style.paddingBottom!, 10) +
			parseInt(style.borderTop!, 10) +
			parseInt(style.borderBottom!, 10) +
			parseInt(style.lineHeight!, 10) * this.rows +
			'px';
	}

	_fixHeight() {
		this.$<Element>('textareaHeight')!.innerHTML = this.textField.value + '\n';
	}

	clear(): this {
		this.value = null;
		return this;
	}

	focus(): this {
		this.textField.focus();
		return this;
	}

	blur(): this {
		this.textField.blur();
		return this;
	}

	enable(): this {
		this.disabled = false;
		return this;
	}

	disable(): this {
		this.disabled = true;
		return this;
	}
}
