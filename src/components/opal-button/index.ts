import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';

@Component.Config<OpalButton>({
	elementIs: 'OpalButton',

	params: {
		viewType: 'default',
		size: 'm',
		checkable: false,
		checked: false,
		loading: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	}
})
export class OpalButton extends Component {
	@computed
	get _tabIndex(): number {
		return this.params.disabled ? -1 : this.params.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening | undefined;

	ready() {
		if (this.params.focused) {
			this.element.tabIndex = this._tabIndex;
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'param-focused-change': this._onParamFocusedChange,
			'change:_tabIndex': this._onTabIndexChange
		});

		this.listenTo(this.element, {
			focus: this._onElementFocus,
			blur: this._onElementBlur,
			click: this._onElementClick
		});

		this.element.tabIndex = this._tabIndex;
	}

	_onParamFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this.focus();
		} else {
			this.blur();
		}
	}

	_onTabIndexChange() {
		this.element.tabIndex = this._tabIndex;
	}

	_onElementFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement != this.element) {
				return;
			}

			if (this.element.tagName.indexOf('-', 1) != -1) {
				this._documentKeyDownListening = this.listenTo(
					document,
					'keydown',
					this._onDocumentKeyDown
				);
			}

			this.params.focused = true;
			this.emit('focus');
		});
	}

	_onElementBlur() {
		if (this._documentKeyDownListening) {
			this._documentKeyDownListening.stop();
		}

		this.params.focused = false;
		this.emit('blur');
	}

	_onElementClick() {
		if (!this.params.disabled) {
			this.click();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */) {
			evt.preventDefault();

			if (!this.params.disabled) {
				this.click();
			}
		}
	}

	click(): OpalButton {
		if (this.params.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
			this.emit('change');
		}

		this.emit('click');

		return this;
	}

	get checked(): boolean {
		return this.params.checked;
	}
	set checked(checked: boolean) {
		this.params.checked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.params.checked) {
			this.params.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.params.checked) {
			this.params.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.params.checked = value === undefined ? !this.params.checked : value);
	}

	focus(): OpalButton {
		this.element.focus();
		return this;
	}

	blur(): OpalButton {
		this.element.blur();
		return this;
	}

	enable(): OpalButton {
		this.params.disabled = false;
		return this;
	}

	disable(): OpalButton {
		this.params.disabled = true;
		return this;
	}
}
