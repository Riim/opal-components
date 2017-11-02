import { Set } from '@riim/map-set-polyfill';
import { Cell, IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

let container: HTMLElement | undefined;

let shownNotifications = new Set<OpalNotification>();

function initContainer(notification: OpalNotification): HTMLElement {
	if (!container) {
		container = document.createElement('div');
		container.className =
			(notification.constructor as typeof Component)._contentBlockNames.join('__container ') +
			'__container';

		document.body.appendChild(container);
	}

	return container;
}

@Component.Config({
	elementIs: 'opal-notification',

	input: {
		viewType: 'default',
		iconSize: 'm',
		buttonHide: true,
		timeout: 0,
		shown: false
	},

	template
})
export class OpalNotification extends Component {
	bar: HTMLElement;

	$<R>(name: string, container: Component | Element = this.bar): R | null {
		return super.$(name, container);
	}

	ready() {
		initContainer(this);

		let bar = (this.bar = this.$<HTMLElement>('bar', this)!);
		this.element.removeChild(bar);
		bar.setAttribute('view-type', this.input.viewType);
		bar.setAttribute('icon-size', this.input.iconSize);
		bar.setAttribute('button-hide', this.input.buttonHide);
		if (this.$('icon')) {
			bar.setAttribute('has-icon', '');
		}

		if (this.input.shown) {
			this._show();
		}
	}

	elementAttached() {
		this.listenTo(this, 'input-shown-change', this._onInputShownChange);
		this.listenTo('btn-hide', 'click', this._onBtnHideClick);
	}

	elementDetached() {
		this.hide();
	}

	_onInputShownChange(evt: IEvent) {
		if (evt.data.value) {
			this._show();
		} else {
			this._hide();
		}
	}

	_onBtnHideClick() {
		this.hide();
		this.emit('hide');
		this.emit('close');
	}

	show(): boolean {
		if (this.input.shown) {
			return false;
		}

		this.input.shown = true;
		Cell.forceRelease();

		return true;
	}

	hide(): boolean {
		if (!this.input.shown) {
			return false;
		}

		this.input.shown = false;
		Cell.forceRelease();

		return true;
	}

	open(): boolean {
		return this.show();
	}

	close(): boolean {
		return this.hide();
	}

	toggle(value?: boolean): boolean {
		if (value !== undefined) {
			return value ? this.show() : !this.hide();
		}
		return this.show() || !this.hide();
	}

	_show() {
		shownNotifications.add(this);
		container!.appendChild(this.bar);

		setTimeout(() => {
			this.bar.setAttribute('shown', '');

			if (this.input.timeout) {
				setTimeout(() => {
					this.hide();
				}, this.input.timeout);
			}
		}, 100);
	}

	_hide() {
		shownNotifications.delete(this);
		container!.removeChild(this.bar);
		this.bar.removeAttribute('shown');
	}

	focus(): this {
		let focusEl = this.$<HTMLElement>('focus');

		if (focusEl) {
			document.body.classList.remove('_no-focus-highlight');
			focusEl.focus();
		}

		return this;
	}
}
