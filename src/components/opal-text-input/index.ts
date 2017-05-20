import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.beml');

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

	events: {
		':component': {
			'input-value-change'(evt: IEvent) {
				let textField = this.$('text-field') as HTMLInputElement;

				if (textField.value != evt.value) {
					textField.value = evt.value;
				}
			},

			'input-focused-change'(evt: IEvent) {
				this[evt.value ? 'focus' : 'blur']();
			}
		},

		'text-field': {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.input.focused = true;
						this.emit('focus');
					}
				});
			},

			blur() {
				this.input.focused = false;
				this.emit('blur');
			},

			input(evt: Event) {
				this.value = (evt.target as HTMLInputElement).value;
				this.emit({ type: 'input', initialEvent: evt });
			},

			change(evt: Event) {
				let storeKey = this.input.storeKey;

				if (storeKey) {
					localStorage.setItem(storeKey, (evt.target as HTMLInputElement).value);
				}

				this.emit({ type: 'change', initialEvent: evt });
			},

			keydown(evt: Event) {
				if (this.input.multiline && this.input.autoHeight) {
					setTimeout(() => {
						this._fixHeight();
					}, 1);
				}

				this.emit({ type: 'keydown', initialEvent: evt });
			},

			keypress(evt: KeyboardEvent) {
				if (evt.which == 13/* Enter */) {
					this.emit('confirm');
				}

				this.emit({ type: 'keypress', initialEvent: evt });
			},

			keyup(evt: Event) {
				if (this.input.multiline && this.input.autoHeight) {
					this._fixHeight();
				}

				this.emit({ type: 'keyup', initialEvent: evt });
			}
		}
	}
})
export default class OpalTextInput extends Component {
	btnClearShown: boolean;

	_initialHeight: number;

	initialize() {
		define(this, {
			btnClearShown(this: OpalTextInput): boolean {
				return !!this.input.value && !this.input.loading;
			}
		});
	}

	ready() {
		let input = this.input;
		let value = input.value;
		let textField = this.$('text-field') as HTMLInputElement;

		if (value) {
			textField.value = value;
		} else {
			let storeKey = input.storeKey;

			if (storeKey) {
				input.value = localStorage.getItem(storeKey) || '';
			}
		}

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

	_onBtnClearClick(evt: Event) {
		this.value = '';
		(this.$('text-field') as HTMLInputElement).focus();

		this.emit({ type: 'change', initialEvent: evt });
	}

	_fixHeight() {
		let textField = this.$('text-field') as HTMLTextAreaElement;
		let lineHeight = parseInt(getComputedStyle(textField).lineHeight as string, 10);

		textField.style.height = this._initialHeight - lineHeight + 'px';
		textField.style.height = textField.offsetHeight + textField.scrollHeight - textField.clientHeight +
			lineHeight + 'px';
	}

	get value(): string {
		return this.input.value;
	}
	set value(value: string) {
		this.input.value = value;
	}

	clear(): OpalTextInput {
		this.value = '';
		return this;
	}

	focus(): OpalTextInput {
		(this.$('text-field') as HTMLInputElement).focus();
		return this;
	}

	blur(): OpalTextInput {
		(this.$('text-field') as HTMLInputElement).blur();
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
