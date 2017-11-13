import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalTab>({
	elementIs: 'opal-tab',

	inputs: {
		selected: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalTab extends Component {
	@computed
	get _tabIndex(): number {
		return this.inputs.disabled ? -1 : this.inputs.tabIndex;
	}

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
			}
		});
	}

	_onControlBlur() {
		this.inputs.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.inputs.disabled) {
			this.click();
		}
	}

	click(): OpalTab {
		this.emit(this.toggle() ? 'select' : 'deselect');
		return this;
	}

	get selected(): boolean {
		return this.inputs.selected;
	}
	set selected(selected: boolean) {
		this.inputs.selected = selected;
	}

	select(): boolean {
		if (!this.inputs.selected) {
			this.inputs.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.inputs.selected) {
			this.inputs.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.inputs.selected = value === undefined ? !this.inputs.selected : value);
	}

	focus(): OpalTab {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalTab {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalTab {
		this.inputs.disabled = false;
		return this;
	}

	disable(): OpalTab {
		this.inputs.disabled = true;
		return this;
	}
}
