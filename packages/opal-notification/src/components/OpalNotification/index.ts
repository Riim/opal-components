import { Set } from '@riim/map-set-polyfill';
import { Cell, IEvent } from 'cellx';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

let container: HTMLElement | undefined;

const shownNotifications = new Set<OpalNotification>();

function initContainer(notification: OpalNotification): HTMLElement {
	if (!container) {
		container = document.createElement('div');
		container.className =
			(notification.constructor as typeof BaseComponent)._elementBlockNames.join(
				'__container '
			) + '__container';

		document.body.appendChild(container);
	}

	return container;
}

@Component({
	elementIs: 'OpalNotification',
	template
})
export class OpalNotification extends BaseComponent {
	@Param
	paramViewType = 'default';
	@Param
	paramIcon: string;
	@Param
	paramIconSize = 'xs';
	@Param
	paramButtonHide = true;
	@Param
	paramTimeout = 0;
	@Param
	paramShown = false;

	bar: HTMLElement;

	_closingTimeoutId?: number | null;

	$<R>(name: string, container: BaseComponent | Element = this.bar): R | null {
		return super.$(name, container);
	}

	ready() {
		initContainer(this);

		let bar = (this.bar = this.$<HTMLElement>('bar', this)!);
		this.element.removeChild(bar);

		if (this.paramShown) {
			this._show();
		}
	}

	elementAttached() {
		this.listenTo(this, 'change:paramShown', this._onParamShownChange);
		this.listenTo('btnHide', 'click', this._onBtnHideClick);
	}

	elementDetached() {
		this.hide();
	}

	_onParamShownChange(evt: IEvent) {
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
		if (this.paramShown) {
			return false;
		}

		this.paramShown = true;
		Cell.release();

		return true;
	}

	hide(): boolean {
		if (!this.paramShown) {
			return false;
		}

		this.paramShown = false;
		Cell.release();

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
			// для анимации
			this.bar.setAttribute('shown', '');

			if (this.paramTimeout) {
				this._closingTimeoutId = setTimeout(() => {
					this.hide();
					this.emit('hide');
					this.emit('close');
				}, this.paramTimeout);
			}
		}, 100);
	}

	_hide() {
		if (this._closingTimeoutId) {
			clearTimeout(this._closingTimeoutId);
			this._closingTimeoutId = null;
		}

		shownNotifications.delete(this);
		container!.removeChild(this.bar);
		this.bar.removeAttribute('shown');
	}

	focus(): this {
		let focusEl = this.$<HTMLElement>('focus');

		if (focusEl) {
			document.body.classList.remove('_noFocusHighlight');
			focusEl.focus();
		}

		return this;
	}
}
