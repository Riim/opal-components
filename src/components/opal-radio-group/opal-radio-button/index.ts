import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, ComponentConfig, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@ComponentConfig<OpalRadioButton>({
	elementIs: 'opal-radio-button',

	input: {
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalRadioButton extends Component {
	@computed
	get _tabIndex(): number {
		return this.input.disabled ? -1 : this.input.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	ready() {
		if (this.input.checked) {
			this.$<HTMLInputElement>('input')!.checked = true;
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
		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	_onInputFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
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
		this.emit(
			(this.input.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck'
		);
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

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
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
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalRadioButton {
		this.$<HTMLElement>('control')!.blur();
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
