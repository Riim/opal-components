import './index.css';

import { define } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.html');

@d.Component<OpalSignButton>({
	elementIs: 'opal-sign-button',

	props: {
		sign: { type: String, required: true },
		checkable: false,
		checked: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	template,

	events: {
		control: {
			focusin(evt: Event) {
				this.props['focused'] = true;
				this.emit({ type: 'focusin', originalEvent: evt });
			},

			focusout(evt: Event) {
				this.props['focused'] = false;
				this.emit({ type: 'focusout', originalEvent: evt });
			},

			click(evt: Event) {
				if (!this.props['disabled']) {
					if (this.props['checkable']) {
						this.emit(this.toggle() ? 'check' : 'uncheck');
					}

					this.emit({ type: 'click', originalEvent: evt });
				}
			}
		}
	}
})
export default class OpalSignButton extends Component {
	_tabIndex: number;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSignButton): number {
				return this.props['disabled'] ? -1 : this.props['tabIndex'];
			}
		});
	}

	ready() {
		if (this.props['focused']) {
			this.focus();
		}
	}

	elementAttributeChanged(name: string, oldValue: any, value: any) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	}

	get checked(): boolean {
		return this.props['checked'];
	}
	set checked(checked: boolean) {
		this.props['checked'] = checked;
	}

	check(): boolean {
		if (!this.props['checked']) {
			this.props['checked'] = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.props['checked']) {
			this.props['checked'] = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.props['checked'] = value === undefined ? !this.props['checked'] : value);
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
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalSignButton {
		this.props['disabled'] = true;
		return this;
	}
}
