import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalSignButton',
	template
})
export class OpalSignButton extends BaseComponent {
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CHECK = Symbol('check');
	static EVENT_CLICK = Symbol('click');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_UNCHECK = Symbol('uncheck');

	@Param({ type: String, required: true })
	sign: string;
	@Param(String)
	viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & { _?: never });
	@Param(Boolean)
	checkable: boolean;
	@Param(Boolean)
	checked: boolean;
	@Param({ default: 0 })
	tabIndex: number;
	@Param(Boolean)
	focused: boolean;
	@Param(Boolean)
	disabled: boolean;

	@Computed
	get _tabIndex() {
		return this.disabled ? -1 : this.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	ready() {
		if (this.focused) {
			this.focus();
		}
	}

	@Listen('focus', 'control')
	_onControlFocus() {
		this.focused = true;
		this.emit(OpalSignButton.EVENT_FOCUS);
	}

	@Listen('blur', 'control')
	_onControlBlur() {
		this.focused = false;
		this.emit(OpalSignButton.EVENT_BLUR);
	}

	@Listen('click', 'control')
	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.disabled) {
			this.click();
		}
	}

	click() {
		if (!this.emit(OpalSignButton.EVENT_CLICK).defaultPrevented && this.checkable) {
			this.emit(this.toggle() ? OpalSignButton.EVENT_CHECK : OpalSignButton.EVENT_UNCHECK);
			this.emit(OpalSignButton.EVENT_CHANGE);
		}

		return this;
	}

	get selected() {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check() {
		if (!this.checked) {
			this.checked = true;
			return true;
		}

		return false;
	}

	uncheck() {
		if (this.checked) {
			this.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean) {
		return (this.checked = value === undefined ? !this.checked : value);
	}

	focus() {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur() {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable() {
		this.disabled = false;
		return this;
	}

	disable() {
		this.disabled = true;
		return this;
	}
}
