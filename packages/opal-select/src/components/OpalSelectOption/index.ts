import { IEvent } from 'cellx';
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
	elementIs: 'OpalSelectOption',
	template
})
export class OpalSelectOption extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');
	static EVENT_DESELECT = Symbol('deselect');
	static EVENT_SELECT = Symbol('select');

	@Param('value', String)
	paramValue: string | null;
	@Param('text', { type: String, required: true })
	paramText: string;
	@Param('subtext', String)
	paramSubtext: string | null;
	@Param(Boolean)
	selected: boolean;
	@Param(Boolean)
	indeterminate: boolean;
	@Param({ default: 0 })
	tabIndex: number;
	@Param(Boolean)
	focused: boolean;
	@Param(Boolean)
	disabled: boolean;

	@Computed
	get _tabIndex(): number {
		return this.disabled ? -1 : this.tabIndex;
	}

	_mouseUpEvent = false;

	ready() {
		if (this.selected) {
			this.indeterminate = false;
		}
	}

	@Listen('change:selected')
	_onSelectedChange(evt: IEvent) {
		if (evt.data.value) {
			this.indeterminate = false;
		}
	}

	@Listen('change:indeterminate')
	_onIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.selected = false;
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

	@Listen('mouseup', 'control')
	_onControlMouseUp() {
		this._mouseUpEvent = true;

		if (!this.disabled) {
			this.click();
		}
	}

	@Listen('click', 'control')
	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (this._mouseUpEvent) {
			this._mouseUpEvent = false;
		} else if (!this.disabled) {
			this.click();
		}
	}

	click(): this {
		this.emit(this.toggle() ? OpalSelectOption.EVENT_SELECT : OpalSelectOption.EVENT_DESELECT);
		this.emit(OpalSelectOption.EVENT_CHANGE);
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
