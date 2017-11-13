import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';

@Component.Config<OpalButton>({
	elementIs: 'opal-button',

	inputs: {
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
		return this.inputs.disabled ? -1 : this.inputs.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening | undefined;

	ready() {
		if (this.inputs.focused) {
			this.element.tabIndex = this._tabIndex;
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'input-focused-change': this._onInputFocusedChange,
			'change:_tabIndex': this._onTabIndexChange
		});

		this.listenTo(this.element, {
			focus: this._onElementFocus,
			blur: this._onElementBlur,
			click: this._onElementClick
		});

		this.element.tabIndex = this._tabIndex;
	}

	_onInputFocusedChange(evt: IEvent) {
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

			this.inputs.focused = true;
			this.emit('focus');
		});
	}

	_onElementBlur() {
		if (this._documentKeyDownListening) {
			this._documentKeyDownListening.stop();
		}

		this.inputs.focused = false;
		this.emit('blur');
	}

	_onElementClick() {
		if (!this.inputs.disabled) {
			this.click();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */) {
			evt.preventDefault();

			if (!this.inputs.disabled) {
				this.click();
			}
		}
	}

	click(): OpalButton {
		if (this.inputs.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
			this.emit('change');
		}

		this.emit('click');

		return this;
	}

	get checked(): boolean {
		return this.inputs.checked;
	}
	set checked(checked: boolean) {
		this.inputs.checked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.inputs.checked) {
			this.inputs.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.inputs.checked) {
			this.inputs.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.inputs.checked = value === undefined ? !this.inputs.checked : value);
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
		this.inputs.disabled = false;
		return this;
	}

	disable(): OpalButton {
		this.inputs.disabled = true;
		return this;
	}
}
