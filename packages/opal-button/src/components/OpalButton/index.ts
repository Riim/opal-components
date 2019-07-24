import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalButton'
})
export class OpalButton extends BaseComponent {
	@Param
	viewType: 'default' | 'primary' | 'danger' = 'default';
	@Param
	size: 's' | 'm' = 'm';
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
		this.listenTo(this, 'change:_tabIndex', this._onTabIndexChange);
		this.listenTo(this.element, {
			focus: this._onElementFocus,
			blur: this._onElementBlur,
			click: this._onElementClick
		});

		this.element.tabIndex = this._tabIndex;
	}

	_onTabIndexChange() {
		this.element.tabIndex = this._tabIndex;
	}

	_onElementFocus() {
		if (!this._documentKeyDownListening && this.element.tagName.indexOf('-') != -1) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
		}

		this.focused = true;
		this.emit('focus');
	}

	_onElementBlur() {
		if (this._documentKeyDownListening) {
			this._documentKeyDownListening.stop();
			this._documentKeyDownListening = null;
		}

		this.focused = false;
		this.emit('blur');
	}

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
