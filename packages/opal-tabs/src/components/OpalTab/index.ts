import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component({
	template
})
export class OpalTab extends BaseComponent {
	@Param paramLabel: string;
	@Param paramSelected = false;
	@Param paramTabIndex = 0;
	@Param paramFocused = false;
	@Param paramDisabled = false;

	@Computed
	get _tabIndex(): number {
		return this.paramDisabled ? -1 : this.paramTabIndex;
	}

	elementAttached() {
		this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			click: this._onControlClick
		});
	}

	ready() {
		if (this.paramFocused) {
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
				this.paramFocused = true;
			}
		});
	}

	_onControlBlur() {
		this.paramFocused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.paramDisabled) {
			this.click();
		}
	}

	click(): this {
		this.emit(this.toggle() ? 'select' : 'deselect');
		return this;
	}

	get selected(): boolean {
		return this.paramSelected;
	}
	set selected(selected: boolean) {
		this.paramSelected = selected;
	}

	select(): boolean {
		if (!this.paramSelected) {
			this.paramSelected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.paramSelected) {
			this.paramSelected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.paramSelected = value === undefined ? !this.paramSelected : value);
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
		this.paramDisabled = false;
		return this;
	}

	disable(): this {
		this.paramDisabled = true;
		return this;
	}
}
