import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalCheckbox>({
	elementIs: 'opal-checkbox',

	inputs: {
		checked: false,
		indeterminate: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalCheckbox extends Component {
	@computed
	get _tabIndex(): number {
		return this.inputs.disabled ? -1 : this.inputs.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
		this.listenTo(this, {
			'input-checked-change': this._onInputCheckedChange,
			'input-indeterminate-change': this._onInputIndeterminateChange,
			'input-focused-change': this._onInputFocusedChange
		});

		this.listenTo('input', 'change', this._onInputChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur
		});
	}

	ready() {
		let inputs = this.inputs;

		if (inputs.checked) {
			inputs.indeterminate = false;
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (inputs.focused) {
			this.focus();
		}
	}

	_onInputCheckedChange(evt: IEvent) {
		if (evt.data.value) {
			this.inputs.indeterminate = false;
		}

		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	_onInputIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.inputs.checked = false;
		}
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

	focus(): OpalCheckbox {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalCheckbox {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalCheckbox {
		this.inputs.disabled = false;
		return this;
	}

	disable(): OpalCheckbox {
		this.inputs.disabled = true;
		return this;
	}
}
