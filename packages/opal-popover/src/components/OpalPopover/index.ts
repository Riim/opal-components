import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalPopover',
	template
})
export class OpalPopover extends BaseComponent {
	static EVENT_CLOSE = Symbol('close');

	@Param
	position:
		| 'top'
		| 'top-left'
		| 'top-right'
		| 'right'
		| 'right-top'
		| 'right-bottom'
		| 'bottom'
		| 'bottom-left'
		| 'bottom-right'
		| 'left'
		| 'left-top'
		| 'left-bottom'
		| string = 'right';
	@Param
	positionOffset = 0;
	@Param
	autoDirection = true;
	@Param
	closeOn: string; // click | mousedown
	@Param
	opened = false;

	@Observable
	contentRendered = false;

	_positionAtOpening: string;

	_closingEventListening: IDisposableListening | null | undefined;

	ready() {
		if (this.opened) {
			this._open();
		}
	}

	elementAttached() {
		this.listenTo(this, 'change:opened', this._onOpenedChange);
	}

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
		this.renderContent();

		let el = this.element;

		if (this.autoDirection) {
			let docEl = document.documentElement!;
			let containerClientRect = el.offsetParent!.getBoundingClientRect();
			let elClientRect = el.getBoundingClientRect();
			let position = (this._positionAtOpening = this.position).split('-');

			switch (position[0]) {
				case 'left': {
					if (
						elClientRect.left + window.pageXOffset < 0 ||
						(elClientRect.left < 0 &&
							containerClientRect.left <
								docEl.clientWidth - containerClientRect.right)
					) {
						this.position = ('right' +
							(position.length == 2 ? '-' + position[1] : '')) as any;
					}

					break;
				}
				case 'top': {
					if (
						elClientRect.top + window.pageYOffset < 0 ||
						(elClientRect.top < 0 &&
							containerClientRect.top <
								docEl.clientHeight - containerClientRect.bottom)
					) {
						this.position = ('bottom' +
							(position.length == 2 ? '-' + position[1] : '')) as any;
					}

					break;
				}
				case 'right': {
					if (
						elClientRect.right > docEl.clientWidth &&
						containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
						containerClientRect.left + window.pageXOffset >=
							elClientRect.right - containerClientRect.right
					) {
						this.position = ('left' +
							(position.length == 2 ? '-' + position[1] : '')) as any;
					}

					break;
				}
				case 'bottom': {
					if (
						elClientRect.bottom > docEl.clientHeight &&
						containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
						containerClientRect.top + window.pageYOffset >=
							elClientRect.bottom - containerClientRect.bottom
					) {
						this.position = ('top' +
							(position.length == 2 ? '-' + position[1] : '')) as any;
					}

					break;
				}
			}
		}

		let position = this.position.split('-');
		let arrowStyle = this.$<HTMLElement>('arrow')!.style;

		arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';

		if (position.length == 2) {
			el.style[position[1]] = this.positionOffset + 'px';

			arrowStyle[position[1]] =
				el.offsetParent![
					position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'
				] /
					2 -
				this.positionOffset +
				'px';
		}

		if (this.closeOn) {
			setTimeout(() => {
				if (this.opened) {
					this._closingEventListening = this.listenTo(
						document,
						this.closeOn,
						this._onClosingEvent
					);
				}
			}, 1);
		}
	}

	_close() {
		if (this.autoDirection) {
			this.position = this._positionAtOpening as any;
		}

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
				this.emit(OpalPopover.EVENT_CLOSE);
				break;
			}

			el = el.parentElement;

			if (!el) {
				break;
			}
		}
	}
}
