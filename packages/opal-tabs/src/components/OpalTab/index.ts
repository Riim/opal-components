import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalTab',
	template
})
export class OpalTab extends BaseComponent {
	static EVENT_SELECT = Symbol('select');
	static EVENT_DESELECT = Symbol('deselect');

	@Param(String)
	declare label: string | null;
	@Param(Boolean)
	declare selected: boolean;
	@Param({ default: 0 })
	declare tabIndex: number;
	@Param(Boolean)
	declare focused: boolean;
	@Param(Boolean)
	declare hidden: boolean;
	@Param(Boolean)
	declare disabled: boolean;

	@Computed
	get _tabIndex(): number {
		return this.disabled ? -1 : this.tabIndex;
	}

	ready() {
		if (this.focused) {
			this.focus();
		}
	}

	@Listen('focus', 'control')
	_onControlFocus() {
		this.focused = true;
	}

	@Listen('blur', 'control')
	_onControlBlur() {
		this.focused = false;
	}

	@Listen('click', 'control')
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
