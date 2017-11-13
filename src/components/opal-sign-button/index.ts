import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalSignButton>({
	elementIs: 'opal-sign-button',

	inputs: {
		sign: { type: String, required: true },
		checkable: false,
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalSignButton extends Component {
	@computed
	get _tabIndex(): number {
		return this.inputs.disabled ? -1 : this.inputs.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
		this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			click: this._onControlClick
		});
	}

	ready() {
		if (this.inputs.focused) {
			this.focus();
		}
	}

	_onInputFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this.focus();
		} else {
			this.blur();
		}
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

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.inputs.disabled) {
			this.click();
		}
	}

	click(): OpalSignButton {
		if (this.inputs.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

		return this;
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

	focus(): OpalSignButton {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalSignButton {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalSignButton {
		this.inputs.disabled = false;
		return this;
	}

	disable(): OpalSignButton {
		this.inputs.disabled = true;
		return this;
	}
}
