import { define, IEvent, Utils } from 'cellx';
import { Component, d } from 'rionite';
import './index.css';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

@d.Component<OpalTab>({
	elementIs: 'opal-tab',

	input: {
		selected: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalTab extends Component {
	_tabIndex: number;

	initialize() {
		define(this, {
			_tabIndex(this: OpalTab): number {
				return this.input.disabled ? -1 : this.input.tabIndex;
			}
		});
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
		if (this.input.focused) {
			this.focus();
		}
	}

	_onInputFocusedChange(evt: IEvent) {
		this[evt.value ? 'focus' : 'blur']();
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.input.focused = true;
			}
		});
	}

	_onControlBlur() {
		this.input.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.input.disabled) {
			this.click();
		}
	}

	click(): OpalTab {
		this.emit(this.toggle() ? 'select' : 'deselect');
		return this;
	}

	get selected(): boolean {
		return this.input.selected;
	}
	set selected(selected: boolean) {
		this.input.selected = selected;
	}

	select(): boolean {
		if (!this.input.selected) {
			this.input.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.input.selected) {
			this.input.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.input.selected = value === undefined ? !this.input.selected : value);
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
		this.input.disabled = false;
		return this;
	}

	disable(): OpalTab {
		this.input.disabled = true;
		return this;
	}
}
