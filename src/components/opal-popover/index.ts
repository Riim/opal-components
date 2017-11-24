import { Cell, IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component, IDisposableListening, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalPopover',
	template
})
export class OpalPopover extends Component {
	@Param({ default: 'right' })
	paramPosition: string;

	@Param({ default: true })
	paramAutoDirection: boolean;

	@Param({ default: false })
	paramAutoClosing: boolean;

	@Param({ default: false })
	paramOpened: boolean;

	@observable isContentRendered = false;

	_positionOnOpen: string;

	_documentClickListening: IDisposableListening | null | undefined;

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
		this.isContentRendered = true;
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
		if (this.isContentRendered) {
			this._open$();
		} else {
			this.isContentRendered = true;
			Cell.forceRelease();
			this._open$();
		}
	}

	_open$() {
		let el = this.element;

		if (this.paramAutoDirection) {
			let docEl = document.documentElement;
			let containerClientRect = el.offsetParent.getBoundingClientRect();
			let elClientRect = el.getBoundingClientRect();
			let position = (this._positionOnOpen = this.paramPosition).split('-');

			switch (position[0]) {
				case 'left': {
					if (
						elClientRect.left + document.body.scrollLeft < 0 ||
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
						elClientRect.top + document.body.scrollTop < 0 ||
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
						containerClientRect.left + document.body.scrollLeft >=
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
						containerClientRect.top + document.body.scrollTop >=
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
			(arrowStyle as any)[position[1]] =
				el.offsetParent[
					position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'
				] /
					2 +
				'px';
		}

		if (this.paramAutoClosing) {
			setTimeout(() => {
				if (this.paramOpened) {
					this._documentClickListening = this.listenTo(
						document,
						'click',
						this._onDocumentClick
					);
				}
			}, 1);
		}
	}

	_close() {
		if (this.paramAutoDirection) {
			this.paramPosition = this._positionOnOpen;
		}

		if (this._documentClickListening) {
			this._documentClickListening.stop();
			this._documentClickListening = null;
		}
	}

	_onDocumentClick(evt: Event) {
		let docEl = document.documentElement;
		let componentEl = this.element;

		for (let el: HTMLElement | null = evt.target as HTMLElement; el != componentEl; ) {
			if (el == docEl || el.tagName == 'A') {
				this.close();
				this.emit('close');
				break;
			}

			el = el.parentNode as HTMLElement | null;

			if (!el) {
				break;
			}
		}
	}
}
