import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalDropdown',
	template
})
export class OpalDropdown extends BaseComponent {
	static EVENT_CLOSE = Symbol('close');

	@Param({ default: true })
	declare autoHeight: boolean;
	@Param(String)
	declare closeOn: 'click' | 'mousedown' | (string & { _?: never }) | null;
	@Param(Boolean)
	declare opened: boolean;

	@Observable
	contentRendered = false;

	_closingEventListening: IDisposableListening | null | undefined;

	ready() {
		if (this.opened) {
			this._open();
		}
	}

	@Listen('change:opened')
	_onOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._open();
		} else {
			this._close();
		}
	}

	renderContent() {
		if (!this.contentRendered) {
			this.contentRendered = true;
			Cell.release();
		}
	}

	open(): boolean {
		if (this.opened) {
			return false;
		}

		this.opened = true;
		Cell.release();

		return true;
	}

	close(): boolean {
		if (!this.opened) {
			return false;
		}

		this.opened = false;
		Cell.release();

		return true;
	}

	toggle(value?: boolean): boolean {
		if (value !== undefined) {
			return value ? this.open() : !this.close();
		}
		return this.open() || !this.close();
	}

	_open() {
		let el = this.element;
		let elStyle = el.style;

		elStyle.top = '100%';
		elStyle.right = 'auto';
		elStyle.bottom = 'auto';
		elStyle.left = '0';
		elStyle.maxHeight = 'none';

		this.renderContent();

		let containerClientRect = el.offsetParent!.getBoundingClientRect();
		let elClientRect = el.getBoundingClientRect();

		if (
			elClientRect.right > containerClientRect.right &&
			elClientRect.right > document.documentElement!.clientWidth
		) {
			if (containerClientRect.right - el.offsetWidth >= 0) {
				elStyle.right = '0';
				elStyle.left = 'auto';
			} else {
				elStyle.left =
					Math.max(
						-containerClientRect.left,
						document.documentElement!.clientWidth - elClientRect.right
					) + 'px';
			}
		}

		let margin = elClientRect.top - containerClientRect.bottom;
		let excess = elClientRect.bottom + margin - document.documentElement!.clientHeight;

		if (excess > 0) {
			let diff =
				containerClientRect.top -
				(document.documentElement!.clientHeight - containerClientRect.bottom);

			if (this.autoHeight) {
				if (diff > 0) {
					elStyle.top = 'auto';
					elStyle.bottom = '100%';

					excess -= diff;

					if (excess > 0) {
						elStyle.maxHeight = el.offsetHeight - excess + 'px';
					}
				} else {
					elStyle.maxHeight = el.offsetHeight - excess + 'px';
				}
			} else if (diff > 0 && excess - diff <= window.pageYOffset) {
				elStyle.top = 'auto';
				elStyle.bottom = '100%';
			}
		}

		if (this.closeOn) {
			setTimeout(() => {
				if (this.opened) {
					this._closingEventListening = this.listenTo(
						document,
						this.closeOn!,
						this._onClosingEvent
					);
				}
			}, 1);
		}
	}

	_close() {
		if (this._closingEventListening) {
			this._closingEventListening.stop();
			this._closingEventListening = null;
		}
	}

	_onClosingEvent(evt: Event) {
		let docEl = document.documentElement;
		let thisEl = this.element;

		for (let el: Element | null = evt.target as Element; el != thisEl; ) {
			if (el == docEl || el.tagName == 'A') {
				this.close();
				this.emit(OpalDropdown.EVENT_CLOSE);
				break;
			}

			el = el.parentElement;

			if (!el) {
				break;
			}
		}
	}
}
