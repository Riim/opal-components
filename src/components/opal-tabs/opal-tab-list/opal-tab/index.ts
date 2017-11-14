import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalTab>({
	elementIs: 'opal-tab',

	params: {
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
		return this.params.disabled ? -1 : this.params.tabIndex;
	}

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
			}
		});
	}

	_onControlBlur() {
		this.params.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.params.disabled) {
			this.click();
		}
	}

	click(): OpalTab {
		this.emit(this.toggle() ? 'select' : 'deselect');
		return this;
	}

	get selected(): boolean {
		return this.params.selected;
	}
	set selected(selected: boolean) {
		this.params.selected = selected;
	}

	select(): boolean {
		if (!this.params.selected) {
			this.params.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.params.selected) {
			this.params.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.params.selected = value === undefined ? !this.params.selected : value);
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
		this.params.disabled = false;
		return this;
	}

	disable(): OpalTab {
		this.params.disabled = true;
		return this;
	}
}
