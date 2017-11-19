import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalSignButton>({
	elementIs: 'OpalSignButton',

	params: {
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
		return this.params.disabled ? -1 : this.params.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
		this.listenTo(this, 'param-focused-change', this._onParamFocusedChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			click: this._onControlClick
		});
	}

	ready() {
		if (this.params.focused) {
			this.focus();
		}
	}

	_onParamFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this.focus();
		} else {
			this.blur();
		}
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.params.focused = true;
				this.emit('focus');
			}
		});
	}

	_onControlBlur() {
		this.params.focused = false;
		this.emit('blur');
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.params.disabled) {
			this.click();
		}
	}

	click(): OpalSignButton {
		if (this.params.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

		return this;
	}

	get checked(): boolean {
		return this.params.checked;
	}
	set checked(checked: boolean) {
		this.params.checked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.params.checked) {
			this.params.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.params.checked) {
			this.params.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.params.checked = value === undefined ? !this.params.checked : value);
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
		this.params.disabled = false;
		return this;
	}

	disable(): OpalSignButton {
		this.params.disabled = true;
		return this;
	}
}
