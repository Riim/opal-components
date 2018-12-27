import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';
import template = require('./template.nelm');

const openedDropdowns: Array<OpalDropdown> = [];

@Component({
	elementIs: 'OpalDropdown',
	template
})
export class OpalDropdown extends BaseComponent {
	@Param
	paramAutoHeight = true;
	@Param
	paramCloseOn: string; // click | mousedown
	@Param
	paramOpened = false;

	@Observable
	contentRendered = false;

	_closingEventListening: IDisposableListening | null | undefined;

	ready() {
		if (this.paramOpened) {
			this._open();
		}
	}

	elementAttached() {
		this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
	}

	_onParamOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._open();
		} else {
			this._close();
		}
	}

	renderContent() {
		this.contentRendered = true;
		Cell.forceRelease();
	}

	open(): boolean {
		if (this.paramOpened) {
			return false;
		}

		this.paramOpened = true;
		Cell.forceRelease();

		return true;
	}

	close(): boolean {
		if (!this.paramOpened) {
			return false;
		}

		this.paramOpened = false;
		Cell.forceRelease();

		return true;
	}

	toggle(value?: boolean): boolean {
		if (value !== undefined) {
			return value ? this.open() : !this.close();
		}
		return this.open() || !this.close();
	}

	_open() {
		openedDropdowns.push(this);

		if (this.contentRendered) {
			this._open$();
		} else {
			this.contentRendered = true;
			Cell.forceRelease();
			this._open$();
		}
	}

	_open$() {
		let el = this.element;
		let elStyle = el.style;

		elStyle.top = '100%';
		elStyle.right = 'auto';
		elStyle.bottom = 'auto';
		elStyle.left = '0';
		elStyle.maxHeight = 'none';

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

			if (this.paramAutoHeight) {
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

		if (this.paramCloseOn) {
			setTimeout(() => {
				if (this.paramOpened) {
					this._closingEventListening = this.listenTo(
						document,
						this.paramCloseOn,
						this._onClosingEvent
					);
				}
			}, 1);
		}
	}

	_close() {
		openedDropdowns.splice(openedDropdowns.indexOf(this), 1);

		if (this._closingEventListening) {
			this._closingEventListening.stop();
			this._closingEventListening = null;
		}
	}

	_onClosingEvent(evt: Event) {
		let docEl = document.documentElement;
		let componentEl = this.element;

		for (let el: Element | null = evt.target as Element; el != componentEl; ) {
			if (el == docEl || el.tagName == 'A') {
				this.close();
				this.emit('close');
				break;
			}

			el = el.parentElement;

			if (!el) {
				break;
			}
		}
	}
}
