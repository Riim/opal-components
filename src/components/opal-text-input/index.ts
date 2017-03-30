import './index.css';

import { define, Utils } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.beml');

let nextTick = Utils.nextTick;

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
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.props['focused'] = true;
						this.emit('focus');
					}
				});
			},

			blur() {
				this.props['focused'] = false;
				this.emit('blur');
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

		if (value) {
			textField.value = value;
		} else {
			let storeKey = props['storeKey'];

			if (storeKey) {
				props['value'] = localStorage.getItem(storeKey) || '';
			}
		}

		if (this.props['multiline'] && this.props['autoHeight']) {
			let offsetHeight = textField.offsetHeight;

			if (offsetHeight) {
				this._initialHeight = offsetHeight + textField.scrollHeight - textField.clientHeight;
				this._fixHeight();
			} else {
				this._initialHeight = parseInt(getComputedStyle(textField).lineHeight as string, 10) * this.props.rows +
					parseInt(getComputedStyle(textField).borderTop as string, 10) +
					parseInt(getComputedStyle(textField).borderBottom as string, 10) +
					parseInt(getComputedStyle(textField).paddingTop as string, 10) +
					parseInt(getComputedStyle(textField).paddingBottom as string, 10);

				textField.style.height = this._initialHeight + 'px';
			}
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
