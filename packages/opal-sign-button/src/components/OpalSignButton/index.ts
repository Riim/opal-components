import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';
import template = require('./template.rnt');

@Component({
	elementIs: 'OpalSignButton',
	template
})
export class OpalSignButton extends BaseComponent {
	@Param({ required: true })
	paramSign: string;
	@Param
	paramViewType: string;
	@Param
	paramCheckable = false;
	@Param
	paramChecked = false;
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

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
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

	_onControlFocus() {
		this.paramFocused = true;
		this.emit('focus');
	}

	_onControlBlur() {
		this.paramFocused = false;
		this.emit('blur');
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.paramDisabled) {
			this.click();
		}
	}

	click(): this {
		if (!this.emit('click').defaultPrevented && this.paramCheckable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
			this.emit('change');
		}

		return this;
	}

	get checked(): boolean {
		return this.paramChecked;
	}
	set checked(checked: boolean) {
		this.paramChecked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.paramChecked) {
			this.paramChecked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.paramChecked) {
			this.paramChecked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
