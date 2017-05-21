import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

@d.Component<OpalSignButton>({
	elementIs: 'opal-sign-button',

	input: {
		sign: { type: String, required: true },
		checkable: false,
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	events: {
		':component': {
			'input-focused-change'(evt: IEvent) {
				this[evt.value ? 'focus' : 'blur']();
			}
		},

		control: {
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

			click(evt: Event) {
				evt.preventDefault();

				if (!this.input.disabled) {
					this.click();
				}
			}
		}
	}
})
export default class OpalSignButton extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSignButton): number {
				return this.input.disabled ? -1 : this.input.tabIndex;
			}
		});
	}

	ready() {
		if (this.input.focused) {
			this.focus();
		}
	}

	click(): OpalSignButton {
		if (this.input.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

		return this;
	}

	get checked(): boolean {
		return this.input.checked;
	}
	set checked(checked: boolean) {
		this.input.checked = checked;
	}

	check(): boolean {
		if (!this.input.checked) {
			this.input.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.input.checked) {
			this.input.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.input.checked = value === undefined ? !this.input.checked : value);
	}

	focus(): OpalSignButton {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalSignButton {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalSignButton {
		this.input.disabled = false;
		return this;
	}

	disable(): OpalSignButton {
		this.input.disabled = true;
		return this;
	}
}
