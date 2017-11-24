import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalSelectOption',
	template
})
export class OpalSelectOption extends Component {
	@Param() paramValue: string;

	@Param({ required: true })
	paramText: string;

	@Param() paramSubtext: string;

	@Param({ default: false })
	paramSelected: boolean;

	@Param({ default: 0 })
	paramTabIndex: number;

	@Param({ default: false })
	paramFocused: boolean;

	@Param({ default: false })
	paramDisabled: boolean;

	@computed
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

	click(): OpalSelectOption {
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
		return this.paramText.trim() || ' ';
	}
	set text(text: string) {
		this.paramText = text;
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

	focus(): OpalSelectOption {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalSelectOption {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalSelectOption {
		this.paramDisabled = false;
		return this;
	}

	disable(): OpalSelectOption {
		this.paramDisabled = true;
		return this;
	}
}
