import { Cell, IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component<OpalTextInput>({
	elementIs: 'OpalTextInput',
	template,

	domEvents: {
		btnClear: {
			click(evt) {
				evt.preventDefault();

				this.value = null;
				this.textField.focus();

				this.emit(OpalTextInput.EVENT_CLEAR);
				this.emit(OpalTextInput.EVENT_CHANGE);
			}
		},

		btnShowPassword: {
			mousedown() {
				let listening = this.listenTo(document, 'mouseup', () => {
					listening.stop();
					this._inputTypeCell.pull();
				});

				this._inputTypeCell.set('text');
			},

			click(evt) {
				evt.preventDefault();
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
	inputType: 'text' | 'password' | (string & { _?: never }) = 'text';
	@Param
	size: 'm' | (string & { _?: never }) = 'm';
	@Param
	multiline = false;
	@Param
	rows = 5;
	@Param
	autoHeight = true;
	@Param
	inputName: string;
	@Param('value')
	paramValue: string;
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

	_inputTypeCell: Cell<string>;
	@Computed
	get _inputType(): string {
		return this.inputType;
	}

	textField: HTMLInputElement;

	get value(): string | null {
		return (this.paramValue && this.paramValue.trim()) || null;
	}
	set value(value: string | null) {
		this.paramValue = value || (null as any);
		this.textField.value = value || '';
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

	validator: { validate(): boolean } | null = null;

	elementAttached() {
		this.textField = this.$<HTMLInputElement>('textField')!;

		if (this.paramValue) {
			this.textField.value = this.paramValue || '';
		} else if (this.storeKey) {
			let value = localStorage.getItem(this.storeKey);
			this.paramValue = value || (null as any);
			this.textField.value = value || '';
		}

		this._prevValue = this.value;

		if (this.multiline && this.autoHeight) {
			this._fixMinHeight();
			this._fixHeight();
		}

		if (this.focused) {
			this.focus();
		}
	}

	@Listen('change:rows')
	_onRowsChange() {
		if (this.multiline && this.autoHeight) {
			this._fixMinHeight();
		}
	}

	@Listen('change:paramValue')
	_onParamValueChange(evt: IEvent) {
		if (this.textField.value != evt.data.value) {
			this.textField.value = evt.data.value;

			if (this.multiline && this.autoHeight) {
				this._fixHeight();
			}
		}
	}

	@Listen('focus', '@textField')
	_onTextFieldFocus() {
		this.focused = true;
		this.emit(OpalTextInput.EVENT_FOCUS);
	}

	@Listen('blur', '@textField')
	_onTextFieldBlur() {
		this.focused = false;
		this.emit(OpalTextInput.EVENT_BLUR);
	}

	@Listen('input', '@textField')
	_onTextFieldInput(evt: Event) {
		this.paramValue = this.textField.value || (null as any);

		if (this.multiline && this.autoHeight) {
			this._fixHeight();
		}

		this.emit(OpalTextInput.EVENT_INPUT, { initialEvent: evt });
	}

	@Listen('change', '@textField')
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

	@Listen('keydown', '@textField')
	_onTextFieldKeyDown(evt: Event) {
		this.emit(OpalTextInput.EVENT_KEYDOWN, { initialEvent: evt });
	}

	@Listen('keypress', '@textField')
	_onTextFieldKeyPress(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */ && this.value) {
			this.emit(OpalTextInput.EVENT_CONFIRM);
		}

		this.emit(OpalTextInput.EVENT_KEYPRESS, { initialEvent: evt });
	}

	@Listen('keyup', '@textField')
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

	validate(): boolean {
		return !this.validator || this.validator.validate();
	}
}
