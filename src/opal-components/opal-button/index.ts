import './index.css';

import { define } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.html');

@d.Component({
	elementIs: 'opal-button',

	props: {
		type: String,
		controlType: String,
		size: 'm',
		inputName: String,
		href: String,
		checkable: false,
		checked: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	template,

	events: {
		control: {
			focusin(this: OpalButton, evt: Event): void {
				this.props['focused'] = true;
				this.emit({ type: 'focusin', originalEvent: evt });
			},

			focusout(this: OpalButton, evt: Event): void {
				this.props['focused'] = false;
				this.emit({ type: 'focusout', originalEvent: evt });
			},

			click(this: OpalButton, evt: Event): void {
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
export default class OpalButton extends Component {
	initialize(): void {
		define(this, {
			_tabIndex() {
				return this.props['disabled'] ? -1 : this.props['tab-index'];
			}
		});
	}

	ready(): void {
		if (this.props['focused']) {
			this.focus();
		}
	}

	elementAttributeChanged(name: string, oldValue: any, value: any): void {
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

	focus(): OpalButton {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalButton {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalButton {
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalButton {
		this.props['disabled'] = true;
		return this;
	}
}
