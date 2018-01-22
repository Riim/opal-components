import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component<OpalTextInput>({
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
	@Param paramInputType = 'text';
	@Param paramSize = 'm';
	@Param paramMultiline = false;
	@Param paramRows = 5;
	@Param paramAutoHeight = true;
	@Param paramInputName: string;
	@Param paramValue = '';
	@Param paramStoreKey: string;
	@Param paramPlaceholder: string;
	@Param paramStartIcon: string;
	@Param paramEndIcon: string;
	@Param paramClearable = false;
	@Param paramLoading = false;
	@Param paramTabIndex_ = 0;
	@Param paramFocused = false;
	@Param paramDisabled = false;

	textField: HTMLInputElement;

	@Observable _textFieldValue: string;

	get value(): string | null {
		return this._textFieldValue.trim() || null;
	}
	set value(value: string | null) {
		this._textFieldValue = this.textField.value = value || '';
	}

	_prevValue: string | null;

	@Computed
	get isBtnClearShown(): boolean {
		return this.paramClearable && !this.paramLoading && !!this._textFieldValue;
	}

	@Computed
	get isEndIconShown(): boolean {
		return !this.paramLoading && !this.isBtnClearShown;
	}

	_initialHeight: number;

	ready() {
		let textField = (this.textField = this.$<HTMLInputElement>('textField')!);

		if (this.paramValue) {
			this._textFieldValue = textField.value = this.paramValue;
		} else if (this.paramStoreKey) {
			this._textFieldValue = textField.value = localStorage.getItem(this.paramStoreKey) || '';
		} else {
			this._textFieldValue = '';
		}

		this._prevValue = this.value;

		if (this.paramMultiline && this.paramAutoHeight) {
			let offsetHeight = textField.offsetHeight;

			if (offsetHeight) {
				this._initialHeight =
					offsetHeight + textField.scrollHeight - textField.clientHeight;
				this._fixHeight();
			} else {
				let style = getComputedStyle(textField);

				this._initialHeight =
					parseInt(style.paddingTop!, 10) +
					parseInt(style.paddingBottom!, 10) +
					parseInt(style.borderTop!, 10) +
					parseInt(style.borderBottom!, 10) +
					parseInt(style.lineHeight!, 10) * this.paramRows;

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
			this._fixHeight();
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

		if (textField.offsetHeight) {
			let lineHeight = parseInt(getComputedStyle(textField).lineHeight!, 10);

			textField.style.height = this._initialHeight - lineHeight + 'px';
			textField.style.height =
				textField.offsetHeight +
				textField.scrollHeight -
				textField.clientHeight +
				lineHeight +
				'px';
		}
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
		this.paramDisabled = false;
		return this;
	}

	disable(): this {
		this.paramDisabled = true;
		return this;
	}
}
