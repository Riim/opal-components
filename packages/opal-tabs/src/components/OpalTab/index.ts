import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalTab',
	template
})
export class OpalTab extends BaseComponent {
	static EVENT_SELECT = Symbol('select');
	static EVENT_DESELECT = Symbol('deselect');

	@Param
	label: string;
	@Param
	selected = false;
	@Param
	tabIndex = 0;
	@Param
	focused = false;
	@Param
	hidden = false;
	@Param
	disabled = false;

	@Computed
	get _tabIndex(): number {
		return this.disabled ? -1 : this.tabIndex;
	}

	elementAttached() {
		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			click: this._onControlClick
		});
	}

	ready() {
		if (this.focused) {
			this.focus();
		}
	}

	_onControlFocus() {
		this.focused = true;
	}

	_onControlBlur() {
		this.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.disabled) {
			this.click();
		}
	}

	click(): this {
		this.emit(this.toggle() ? OpalTab.EVENT_SELECT : OpalTab.EVENT_DESELECT);
		return this;
	}

	select(): boolean {
		if (!this.selected) {
			this.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.selected) {
			this.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.selected = value === undefined ? !this.selected : value);
	}

	focus(): this {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): this {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): this {
		this.disabled = false;
		return this;
	}

	disable(): this {
		this.disabled = true;
		return this;
	}
}
