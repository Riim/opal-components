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

	@Param
	viewType:
		| 'default'
		| 'primary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'clean'
		| (string & { _?: never }) = 'default';
	@Param
	size: 's' | 'm' | (string & { _?: never }) = 'm';
	@Param
	checkable = false;
	@Param
	checked = false;
	@Param
	loading = false;
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

	_documentKeyDownListening: IDisposableListening | null | undefined;

	ready() {
		if (this.focused) {
			this.element.tabIndex = this._tabIndex;
			this.focus();
		}
	}

	elementAttached() {
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

	click(): this {
		if (!this.emit(OpalButton.EVENT_CLICK).defaultPrevented && this.checkable) {
			this.emit(this.toggle() ? OpalButton.EVENT_CHECK : OpalButton.EVENT_UNCHECK);
			this.emit(OpalButton.EVENT_CHANGE);
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
		this.element.focus();
		return this;
	}

	blur(): this {
		this.element.blur();
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
