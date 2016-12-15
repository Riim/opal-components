import './index.css';

import { define } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.html');

@d.Component<OpalTextInput>({
	elementIs: 'opal-text-input',

	props: {
		inputType: 'text',
		multiline: false,
		size: 'm',
		rows: 5,
		autoHeight: true,
		inputName: String,
		value: '',
		storeKey: String,
		placeholder: '',
		clearable: false,
		loading: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	template,

	events: {
		input: {
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
				let storeKey = this.props['store-key'];

				if (storeKey) {
					localStorage.setItem(storeKey, (evt.target as HTMLInputElement).value);
				}

				this.emit({ type: 'change', initialEvent: evt });
			},

			keydown(evt: Event) {
				if (this.props['multiline'] && this.props['auto-height']) {
					setTimeout(() => {
						this._fixHeight();
					}, 1);
				}

				this.emit({ type: 'keydown', initialEvent: evt });
			},

			keypress(evt: KeyboardEvent) {
				if (evt.which == 13/* Enter */) {
					this.emit('confirminput');
				}

				this.emit({ type: 'keypress', initialEvent: evt });
			},

			keyup(evt: Event) {
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
		let input = this.$('input') as HTMLInputElement;

		this._initialHeight = input.offsetHeight + input.scrollHeight - input.clientHeight;

		if (value) {
			input.value = value;
		} else {
			let storeKey = props['store-key'];

			if (storeKey) {
				props['value'] = localStorage.getItem(storeKey) || '';
			}
		}

		if (this.props['multiline'] && this.props['auto-height']) {
			this._fixHeight();
		}

		if (props['focused']) {
			this.focus();
		}
	}

	elementAttributeChanged(name: string, oldValue: any, value: any) {
		if (name == 'value') {
			let input = this.$('input') as HTMLInputElement;

			if (input.value != value) {
				input.value = value;
			}
		} else if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	}

	_onBtnClearClick(evt: Event) {
		evt.preventDefault();

		this.value = '';
		(this.$('input') as HTMLInputElement).focus();

		this.emit({ type: 'change', initialEvent: evt });
	}

	_fixHeight() {
		let input = this.$('input') as HTMLTextAreaElement;
		let lineHeight = parseInt(getComputedStyle(input).lineHeight as string, 10);

		input.style.height = this._initialHeight - lineHeight + 'px';
		input.style.height = input.offsetHeight + input.scrollHeight - input.clientHeight + lineHeight + 'px';
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
		(this.$('input') as HTMLInputElement).focus();
		return this;
	}

	blur(): OpalTextInput {
		(this.$('input') as HTMLInputElement).blur();
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
