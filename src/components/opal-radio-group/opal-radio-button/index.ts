import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

@d.Component<OpalRadioButton>({
	elementIs: 'opal-radio-button',

	input: {
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	events: {
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
export default class OpalRadioButton extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalRadioButton): number {
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

	elementAttached() {
		this.listenTo(this, {
			'input-checked-change': this._onInputCheckedChange,
			'input-focused-change': this._onInputFocusedChange
		});
	}

	_onInputCheckedChange(evt: IEvent) {
		(this.$('input') as HTMLInputElement).checked = evt.value;
	}

	_onInputFocusedChange(evt: IEvent) {
		if (evt.value) {
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			this.focus();
		} else {
			this._documentKeyDownListening.stop();
			this.blur();
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

	focus(): OpalRadioButton {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalRadioButton {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalRadioButton {
		this.input.disabled = false;
		return this;
	}

	disable(): OpalRadioButton {
		this.input.disabled = true;
		return this;
	}
}
