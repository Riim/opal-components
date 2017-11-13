import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalRadioButton>({
	elementIs: 'opal-radio-button',

	inputs: {
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
		return this.inputs.disabled ? -1 : this.inputs.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	ready() {
		if (this.inputs.checked) {
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (this.inputs.focused) {
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

			let inputs = this.inputs;

			if (!inputs.disabled) {
				this.emit((inputs.checked = !inputs.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	_onInputChange(evt: Event) {
		this.emit(
			(this.inputs.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck'
		);
		this.emit('change');
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.inputs.focused = true;
				this.emit('focus');
			}
		});
	}

	_onControlBlur() {
		this.inputs.focused = false;
		this.emit('blur');
	}

	get checked(): boolean {
		return this.inputs.checked;
	}
	set checked(checked: boolean) {
		this.inputs.checked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.inputs.checked) {
			this.inputs.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.inputs.checked) {
			this.inputs.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.inputs.checked = value === undefined ? !this.inputs.checked : value);
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
		this.inputs.disabled = false;
		return this;
	}

	disable(): OpalRadioButton {
		this.inputs.disabled = true;
		return this;
	}
}
