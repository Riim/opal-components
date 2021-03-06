import { clickLink } from '@riim/opal-components-common';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalButton'
})
export class OpalButton extends BaseComponent {
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CHECK = Symbol('check');
	static EVENT_CLICK = Symbol('click');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_UNCHECK = Symbol('uncheck');

	@Param({ default: 'default' })
	viewType:
		| 'default'
		| 'primary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'clean'
		| (string & { _?: never });
	@Param({ default: 'm' })
	size: 's' | 'm' | (string & { _?: never });
	@Param(String)
	href: string | null;
	@Param(String)
	target: string | null;
	@Param(Boolean)
	checkable: boolean;
	@Param(Boolean)
	checked: boolean;
	@Param(Boolean)
	loading: boolean;
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

	_documentKeyDownListening: IDisposableListening | null | undefined;

	ready() {
		if (this.focused) {
			this.element.tabIndex = this._tabIndex;
			this.focus();
		}
	}

	connected() {
		this.element.tabIndex = this._tabIndex;
	}

	@Listen('change:_tabIndex')
	_onTabIndexChange() {
		this.element.tabIndex = this._tabIndex;
	}

	@Listen('focus', '@element')
	_onElementFocus() {
		if (!this._documentKeyDownListening && this.element.tagName.includes('-')) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
		}

		this.focused = true;
		this.emit(OpalButton.EVENT_FOCUS);
	}

	@Listen('blur', '@element')
	_onElementBlur() {
		if (this._documentKeyDownListening) {
			this._documentKeyDownListening.stop();
			this._documentKeyDownListening = null;
		}

		this.focused = false;
		this.emit(OpalButton.EVENT_BLUR);
	}

	@Listen('click', '@element')
	_onElementClick() {
		if (!this.disabled) {
			this.click();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */) {
			evt.preventDefault();

			if (!this.disabled) {
				this.click();
			}
		}
	}

	click() {
		if (!this.emit(OpalButton.EVENT_CLICK).defaultPrevented && this.checkable) {
			this.emit(this.toggle() ? OpalButton.EVENT_CHECK : OpalButton.EVENT_UNCHECK);
			this.emit(OpalButton.EVENT_CHANGE);
		}

		if (this.href) {
			clickLink(this.href, this.target);
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
		this.element.focus();
		return this;
	}

	blur() {
		this.element.blur();
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
