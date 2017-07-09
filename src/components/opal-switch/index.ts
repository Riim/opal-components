import { define, IEvent, Utils } from 'cellx';
import { Component, d, IDisposableListening } from 'rionite';
import './index.css';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

@d.Component<OpalSwitch>({
	elementIs: 'opal-switch',

	input: {
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	oevents: {
		':component': {
			'input-checked-change'(evt: IEvent) {
				(this.$('input') as HTMLInputElement).checked = evt.value;
			},

			'input-focused-change'(evt: IEvent) {
				if (evt.value) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					this.focus();
				} else {
					this._documentKeyDownListening.stop();
					this.blur();
				}
			}
		},

		input: {
			change(evt: Event) {
				this.emit((this.input.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck');
				this.emit('change');
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
			}
		}
	}
})
export class OpalSwitch extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSwitch): number {
				return this.input.disabled ? -1 : this.input.tabIndex;
			}
		});
	}

	ready() {
		if (this.input.checked) {
			(this.$('input') as HTMLInputElement).checked = true;
		}

		if (this.input.focused) {
			this.focus();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			let input = this.input;

			if (!input.disabled) {
				this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
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

	focus(): OpalSwitch {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalSwitch {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalSwitch {
		this.input.disabled = false;
		return this;
	}

	disable(): OpalSwitch {
		this.input.disabled = true;
		return this;
	}
}
