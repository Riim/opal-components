import { Set } from '@riim/map-set-polyfill';
import { Cell, IEvent } from 'cellx';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

let container: HTMLElement | undefined;

let shownNotifications = new Set<OpalNotification>();

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
	template
})
export class OpalNotification extends BaseComponent {
	@Param paramViewType = 'default';
	@Param paramIconSize = 'm';
	@Param paramButtonHide = true;
	@Param paramTimeout = 0;
	@Param paramShown = false;

	bar: HTMLElement;

	$<R>(name: string, container: BaseComponent | Element = this.bar): R | null {
		return super.$(name, container);
	}

	ready() {
		initContainer(this);

		let bar = (this.bar = this.$<HTMLElement>('bar', this)!);
		this.element.removeChild(bar);
		if (this.$('icon')) {
			bar.setAttribute('has-icon', '');
		}

		if (this.paramShown) {
			this._show();
		}
	}

	elementAttached() {
		this.listenTo(this, 'change:paramShown', this._onParamShownChange);
		this.listenTo('btn-hide', 'click', this._onBtnHideClick);
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
		Cell.forceRelease();

		return true;
	}

	hide(): boolean {
		if (!this.paramShown) {
			return false;
		}

		this.paramShown = false;
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

			if (this.paramTimeout) {
				setTimeout(() => {
					this.hide();
				}, this.paramTimeout);
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
			document.body.classList.remove('_noFocusHighlight');
			focusEl.focus();
		}

		return this;
	}
}