import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalSelectOption',
	template
})
export class OpalSelectOption extends BaseComponent {
	@Param
	paramValue: string;
	@Param({ required: true })
	paramText: string;
	@Param
	paramSubtext: string;
	@Param
	paramSelected = false;
	@Param
	paramIndeterminate = false;
	@Param
	paramTabIndex = 0;
	@Param
	paramFocused = false;
	@Param
	paramDisabled = false;

	@Computed
	get _tabIndex(): number {
		return this.paramDisabled ? -1 : this.paramTabIndex;
	}

	_mouseUpEvent = false;

	elementAttached() {
		this.listenTo(this, {
			'change:paramSelected': this._onParamSelectedChange,
			'change:paramIndeterminate': this._onParamIndeterminateChange
		});
		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			mouseup: this._onControlMouseUp,
			click: this._onControlClick
		});
	}

	ready() {
		if (this.paramSelected) {
			this.paramIndeterminate = false;
		}
	}

	_onParamSelectedChange(evt: IEvent) {
		if (evt.data.value) {
			this.paramIndeterminate = false;
		}
	}

	_onParamIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.paramSelected = false;
		}
	}

	_onControlFocus() {
		this.paramFocused = true;
	}

	_onControlBlur() {
		this.paramFocused = false;
	}

	_onControlMouseUp() {
		this._mouseUpEvent = true;

		if (!this.paramDisabled) {
			this.click();
		}
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (this._mouseUpEvent) {
			this._mouseUpEvent = false;
		} else if (!this.paramDisabled) {
			this.click();
		}
	}

	click(): this {
		this.emit(this.toggle() ? 'select' : 'deselect');
		this.emit('change');
		return this;
	}

	get value(): string {
		return this.paramValue === null ? this.paramText : this.paramValue;
	}
	set value(value: string) {
		this.paramValue = value;
	}

	get text(): string {
		return this.paramText.trim() || '—';
	}
	set text(text: string) {
		this.paramText = text;
	}

	get subtext(): string | null {
		return this.paramSubtext && this.paramSubtext.trim();
	}
	set subtext(subtext: string | null) {
		this.paramSubtext = subtext as any;
	}

	get selected(): boolean {
		return this.paramSelected;
	}
	set selected(selected: boolean) {
		this.paramSelected = selected;
	}

	get disabled(): boolean {
		return this.paramDisabled;
	}
	set disabled(disabled: boolean) {
		this.paramDisabled = disabled;
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
