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
	paramViewType = 'default';
	@Param
	paramSize = 'm';
	@Param
	paramCheckable = false;
	@Param
	paramChecked = false;
	@Param
	paramLoading = false;
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

	_documentKeyDownListening: IDisposableListening | null | undefined;

	ready() {
		if (this.paramFocused) {
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

		this.paramFocused = true;
		this.emit('focus');
	}

	_onElementBlur() {
		if (this._documentKeyDownListening) {
			this._documentKeyDownListening.stop();
			this._documentKeyDownListening = null;
		}

		this.paramFocused = false;
		this.emit('blur');
	}

	_onElementClick() {
		if (!this.paramDisabled) {
			this.click();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */) {
			evt.preventDefault();

			if (!this.paramDisabled) {
				this.click();
			}
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
		this.element.focus();
		return this;
	}

	blur(): this {
		this.element.blur();
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
