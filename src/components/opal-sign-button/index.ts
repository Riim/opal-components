import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalSignButton',
	template
})
export class OpalSignButton extends Component {
	@Param({ required: true })
	paramSign: string;

	@Param({ default: false })
	paramCheckable: boolean;

	@Param({ default: false })
	paramChecked: boolean;

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

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
		this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
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
				this.emit('focus');
			}
		});
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

	click(): OpalSignButton {
		if (this.paramCheckable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

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

	focus(): OpalSignButton {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalSignButton {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalSignButton {
		this.paramDisabled = false;
		return this;
	}

	disable(): OpalSignButton {
		this.paramDisabled = true;
		return this;
	}
}
