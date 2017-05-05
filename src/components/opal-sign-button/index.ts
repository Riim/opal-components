import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

let nextTick = Utils.nextTick;

@d.Component<OpalSignButton>({
	elementIs: 'opal-sign-button',

	props: {
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
			'property-focused-change'(evt: IEvent) {
				this[evt.value ? 'focus' : 'blur']();
			}
		},

		control: {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.props.focused = true;
						this.emit('focus');
					}
				});
			},

			blur() {
				this.props.focused = false;
				this.emit('blur');
			},

			click(evt: Event) {
				evt.preventDefault();

				if (!this.props.disabled) {
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
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	}

	ready() {
		if (this.props.focused) {
			this.focus();
		}
	}

	click(): OpalSignButton {
		if (this.props.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

		return this;
	}

	get checked(): boolean {
		return this.props.checked;
	}
	set checked(checked: boolean) {
		this.props.checked = checked;
	}

	check(): boolean {
		if (!this.props.checked) {
			this.props.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.props.checked) {
			this.props.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.props.checked = value === undefined ? !this.props.checked : value);
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
		this.props.disabled = false;
		return this;
	}

	disable(): OpalSignButton {
		this.props.disabled = true;
		return this;
	}
}
