import { Cell, IEvent } from 'cellx';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
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
	static EVENT_CLOSE = Symbol('close');
	static EVENT_HIDE = Symbol('hide');

	@Param({ default: 'default' })
	viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & { _?: never });
	@Param(String)
	icon: string | null;
	@Param({ default: 'xs' })
	iconSize: 'xs' | 's' | 'm' | (string & { _?: never });
	@Param({ default: true })
	buttonHide: boolean;
	@Param({ default: 0 })
	timeout: number;
	@Param(Boolean)
	shown: boolean;

	bar: HTMLElement;

	_closingTimeoutId?: number | null;

	$<R>(name: string, container: BaseComponent | Element = this.bar) {
		return super.$<R>(name, container);
	}

	ready() {
		initContainer(this);

		this.bar = this.$<HTMLElement>('bar', this)!;
		this.element.removeChild(this.bar);

		if (this.shown) {
			this._show();
		}
	}

	disconnected() {
		this.hide();
	}

	@Listen('change:shown')
	_onShownChange(evt: IEvent) {
		if (evt.data.value) {
			this._show();
		} else {
			this._hide();
		}
	}

	@Listen('mouseenter', '@bar')
	_onElementMouseEnter() {
		if (this._closingTimeoutId) {
			clearTimeout(this._closingTimeoutId);
			this._closingTimeoutId = null;
		}
	}

	@Listen('mouseleave', '@bar')
	_onElementMouseLeave() {
		if (this.timeout) {
			this._closingTimeoutId = setTimeout(
				this._onClosingTimeout.bind(this),
				this.timeout
			) as any;
		}
	}

	_onClosingTimeout() {
		this.hide();
		this.emit(OpalNotification.EVENT_HIDE);
		this.emit(OpalNotification.EVENT_CLOSE);
	}

	@Listen('click', 'btnHide')
	_onBtnHideClick() {
		this.hide();
		this.emit(OpalNotification.EVENT_HIDE);
		this.emit(OpalNotification.EVENT_CLOSE);
	}

	show() {
		if (this.shown) {
			return false;
		}

		this.shown = true;
		Cell.release();

		return true;
	}

	hide() {
		if (!this.shown) {
			return false;
		}

		this.shown = false;
		Cell.release();

		return true;
	}

	open() {
		return this.show();
	}

	close() {
		return this.hide();
	}

	toggle(value?: boolean) {
		if (value !== undefined) {
			return value ? this.show() : !this.hide();
		}
		return this.show() || !this.hide();
	}

	_show() {
		shownNotifications.add(this);
		container!.appendChild(this.bar);

		// для анимации
		setTimeout(() => {
			this.bar.setAttribute('shown', '');
		}, 1);

		if (this.timeout) {
			this._closingTimeoutId = setTimeout(
				this._onClosingTimeout.bind(this),
				this.timeout
			) as any;
		}
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

	focus() {
		let focusTarget = this.$<HTMLElement>('focus');

		if (focusTarget) {
			document.body.classList.remove('_noFocusHighlight');
			focusTarget.focus();
		}

		return this;
	}
}
