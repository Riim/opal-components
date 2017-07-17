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

	template
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

	elementAttached() {
		this.listenTo(this, {
			'input-checked-change': this._onInputCheckedChange,
			'input-focused-change': this._onInputFocusedChange
		});

		this.listenTo('input', 'change', this._onInputChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur
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
		if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
			evt.preventDefault();

			let input = this.input;

			if (!input.disabled) {
				this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	_onInputChange(evt: Event) {
		this.emit((this.input.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck');
		this.emit('change');
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.input.focused = true;
				this.emit('focus');
			}
		});
	}

	_onControlBlur() {
		this.input.focused = false;
		this.emit('blur');
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
