import './index.css';

import { define } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component<OpalTextInput>({
	elementIs: 'opal-text-input',

	props: {
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

	bemlTemplate: template,

	events: {
		'text-field': {
			focusin() {
				this.props['focused'] = true;
				this.emit('focusin');
			},

			focusout() {
				this.props['focused'] = false;
				this.emit('focusout');
			},

			input(evt: Event) {
				this.value = (evt.target as HTMLInputElement).value;
				this.emit({ type: 'input', initialEvent: evt });
			},

			change(evt: Event) {
				let storeKey = this.props['storeKey'];

				if (storeKey) {
					localStorage.setItem(storeKey, (evt.target as HTMLInputElement).value);
				}

				this.emit({ type: 'change', initialEvent: evt });
			},

			keydown(evt: Event) {
				if (this.props['multiline'] && this.props['autoHeight']) {
					setTimeout(() => {
						this._fixHeight();
					}, 1);
				}

				this.emit({ type: 'keydown', initialEvent: evt });
			},

			keypress(evt: KeyboardEvent) {
				if (evt.which == 13/* Enter */) {
					this.emit('input-confirm');
				}

				this.emit({ type: 'keypress', initialEvent: evt });
			},

			keyup(evt: Event) {
				if (this.props['multiline'] && this.props['autoHeight']) {
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
				return !!this.props['value'] && !this.props['loading'];
			}
		});
	}

	ready() {
		let props = this.props;
		let value = props['value'];
		let textField = this.$('text-field') as HTMLInputElement;

		this._initialHeight = textField.offsetHeight + textField.scrollHeight - textField.clientHeight;

		if (value) {
			textField.value = value;
		} else {
			let storeKey = props['storeKey'];

			if (storeKey) {
				props['value'] = localStorage.getItem(storeKey) || '';
			}
		}

		if (this.props['multiline'] && this.props['autoHeight']) {
			this._fixHeight();
		}

		if (props['focused']) {
			this.focus();
		}
	}

	propertyChanged(name: string, value: any) {
		if (name == 'value') {
			let textField = this.$('text-field') as HTMLInputElement;

			if (textField.value != value) {
				textField.value = value;
			}
		} else if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	}

	_onBtnClearClick(evt: Event) {
		evt.preventDefault();

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
		return this.props['value'];
	}
	set value(value: string) {
		this.props['value'] = value;
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
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalTextInput {
		this.props['disabled'] = true;
		return this;
	}
}
