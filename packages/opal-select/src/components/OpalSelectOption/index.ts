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
	@Param('value')
	paramValue: string;
	@Param('text', { required: true })
	paramText: string;
	@Param('subtext')
	paramSubtext: string;
	@Param
	selected = false;
	@Param
	indeterminate = false;
	@Param
	tabIndex = 0;
	@Param
	focused = false;
	@Param
	disabled = false;

	@Computed
	get _tabIndex(): number {
		return this.disabled ? -1 : this.tabIndex;
	}

	_mouseUpEvent = false;

	elementAttached() {
		this.listenTo(this, {
			'change:selected': this._onSelectedChange,
			'change:indeterminate': this._onIndeterminateChange
		});
		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			mouseup: this._onControlMouseUp,
			click: this._onControlClick
		});
	}

	ready() {
		if (this.selected) {
			this.indeterminate = false;
		}
	}

	_onSelectedChange(evt: IEvent) {
		if (evt.data.value) {
			this.indeterminate = false;
		}
	}

	_onIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.selected = false;
		}
	}

	_onControlFocus() {
		this.focused = true;
	}

	_onControlBlur() {
		this.focused = false;
	}

	_onControlMouseUp() {
		this._mouseUpEvent = true;

		if (!this.disabled) {
			this.click();
		}
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (this._mouseUpEvent) {
			this._mouseUpEvent = false;
		} else if (!this.disabled) {
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
