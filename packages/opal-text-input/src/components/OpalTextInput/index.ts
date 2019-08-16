import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
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

				this.emit(OpalTextInput.EVENT_CLEAR);
				this.emit(OpalTextInput.EVENT_CHANGE);
			}
		}
	}
})
export class OpalTextInput extends BaseComponent {
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CLEAR = Symbol('clear');
	static EVENT_CONFIRM = Symbol('confirm');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_INPUT = Symbol('input');
	static EVENT_KEYDOWN = Symbol('keydown');
	static EVENT_KEYPRESS = Symbol('keypress');
	static EVENT_KEYUP = Symbol('keyup');

	@Param
	inputType = 'text';
	@Param
	size: 'm' | string = 'm';
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

	get value(): string | null {
		return this.paramValue.trim() || null;
	}
	set value(value: string | null) {
		this.paramValue = this.textField.value = value || '';
	}

	_prevValue: string | null;

	@Computed
	get btnClearShown(): boolean {
		return this.clearable && !this.loading && !!this.paramValue;
	}

	@Computed
	get endIconShown(): boolean {
		return !this.loading && !this.btnClearShown;
	}

	elementAttached() {
		this.textField = this.$<HTMLInputElement>('textField')!;

		if (this.paramValue) {
			this.textField.value = this.paramValue;
		} else if (this.storeKey) {
			this.paramValue = this.textField.value = localStorage.getItem(this.storeKey) || '';
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
			this.textField.value = evt.data.value;

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
		this.emit(OpalTextInput.EVENT_BLUR);
	}

	_onTextFieldInput(evt: Event) {
		this.paramValue = this.textField.value;

		if (this.multiline && this.autoHeight) {
			this._fixHeight();
		}

		this.emit(OpalTextInput.EVENT_INPUT, { initialEvent: evt });
	}

	_onTextFieldChange(evt: Event) {
		if (this.value === this._prevValue) {
			return;
		}

		this._prevValue = this.value;

		if (this.storeKey) {
			localStorage.setItem(this.storeKey, this.textField.value);
		}

		this.emit(OpalTextInput.EVENT_CHANGE, { initialEvent: evt });
	}

	_onTextFieldKeyDown(evt: Event) {
		this.emit(OpalTextInput.EVENT_KEYDOWN, { initialEvent: evt });
	}

	_onTextFieldKeyPress(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */ && this.value) {
			this.emit(OpalTextInput.EVENT_CONFIRM);
		}

		this.emit(OpalTextInput.EVENT_KEYPRESS, { initialEvent: evt });
	}

	_onTextFieldKeyUp(evt: Event) {
		this.emit(OpalTextInput.EVENT_KEYUP, { initialEvent: evt });
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
