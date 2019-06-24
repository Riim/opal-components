import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalSignButton',
	template
})
export class OpalSignButton extends BaseComponent {
	@Param({ required: true })
	sign: string;
	@Param
	viewType: string;
	@Param
	checkable = false;
	@Param
	checked = false;
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

	_documentKeyDownListening: IDisposableListening;

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
		this.emit('focus');
	}

	_onControlBlur() {
		this.focused = false;
		this.emit('blur');
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.disabled) {
			this.click();
		}
	}

	click(): this {
		if (!this.emit('click').defaultPrevented && this.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
			this.emit('change');
		}

		return this;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.checked) {
			this.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.checked) {
			this.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.checked = value === undefined ? !this.checked : value);
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
