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
	@Param
	paramPosition = 'right';
	@Param
	paramPositionOffset = 0;
	@Param
	paramAutoDirection = true;
	@Param
	paramCloseOn: string; // click | mousedown
	@Param
	paramOpened = false;

	@Observable
	contentRendered = false;

	_positionAtOpening: string;

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
		Cell.release();
	}

	open(): boolean {
		if (this.paramOpened) {
			return false;
		}

		this.paramOpened = true;
		Cell.release();

		return true;
	}

	close(): boolean {
		if (!this.paramOpened) {
			return false;
		}

		this.paramOpened = false;
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
		if (this.contentRendered) {
			this._open$();
		} else {
			this.contentRendered = true;
			Cell.release();
			this._open$();
		}
	}

	_open$() {
		let el = this.element;

		if (this.paramAutoDirection) {
			let docEl = document.documentElement!;
			let containerClientRect = el.offsetParent!.getBoundingClientRect();
			let elClientRect = el.getBoundingClientRect();
			let position = (this._positionAtOpening = this.paramPosition).split('-');

			switch (position[0]) {
				case 'left': {
					if (
						elClientRect.left + window.pageXOffset < 0 ||
						(elClientRect.left < 0 &&
							containerClientRect.left <
								docEl.clientWidth - containerClientRect.right)
					) {
						this.paramPosition =
							'right' + (position.length == 2 ? '-' + position[1] : '');
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
						this.paramPosition =
							'bottom' + (position.length == 2 ? '-' + position[1] : '');
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
						this.paramPosition =
							'left' + (position.length == 2 ? '-' + position[1] : '');
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
						this.paramPosition =
							'top' + (position.length == 2 ? '-' + position[1] : '');
					}

					break;
				}
			}
		}

		let position = this.paramPosition.split('-');
		let arrowStyle = this.$<HTMLElement>('arrow')!.style;

		arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';

		if (position.length == 2) {
			el.style[position[1]] = this.paramPositionOffset + 'px';

			arrowStyle[position[1]] =
				el.offsetParent![
					position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'
				] /
					2 -
				this.paramPositionOffset +
				'px';
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
		if (this.paramAutoDirection) {
			this.paramPosition = this._positionAtOpening;
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
