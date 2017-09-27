import { Cell, IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component, d, IDisposableListening } from 'rionite';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-popover',

	input: {
		from: 'right',
		align: 'center',
		autoDirection: true,
		autoClosing: false,
		opened: false
	},

	template
})
export class OpalPopover extends Component {
	@observable isContentRendered = false;

	_fromOnOpen: string;

	_documentClickListening: IDisposableListening | null | undefined;

	ready() {
		if (this.input.opened) {
			this._open();
		}
	}

	elementAttached() {
		this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
	}

	_onInputOpenedChange(evt: IEvent) {
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
		if (this.input.opened) {
			return false;
		}

		this.input.opened = true;
		Cell.forceRelease();

		return true;
	}

	close(): boolean {
		if (!this.input.opened) {
			return false;
		}

		this.input.opened = false;
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

		if (this.input.autoDirection) {
			let docEl = document.documentElement;
			let containerClientRect = el.offsetParent.getBoundingClientRect();
			let elClientRect = el.getBoundingClientRect();
			let from = this._fromOnOpen = this.input.from;

			switch (from) {
				case 'left': {
					if (
						elClientRect.left + document.body.scrollLeft < 0 || (
							elClientRect.left < 0 &&
								containerClientRect.left < docEl.clientWidth - containerClientRect.right
						)
					) {
						this.input.from = 'right';
					}

					break;
				}
				case 'top': {
					if (
						elClientRect.top + document.body.scrollTop < 0 || (
							elClientRect.top < 0 &&
								containerClientRect.top < docEl.clientHeight - containerClientRect.bottom
						)
					) {
						this.input.from = 'bottom';
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
						this.input.from = 'left';
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
						this.input.from = 'top';
					}

					break;
				}
			}
		}

		let align = this.input.align;
		let arrowStyle = this.$<HTMLElement>('arrow')!.style;

		arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';

		if (align != 'center') {
			arrowStyle[align] = el.offsetParent[
				align == 'left' || align == 'right' ? 'clientWidth' : 'clientHeight'
			] / 2 + 'px';
		}

		if (this.input.autoClosing) {
			setTimeout(() => {
				if (this.input.opened) {
					this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
				}
			}, 1);
		}
	}

	_close() {
		if (this.input.autoDirection) {
			this.input.from = this._fromOnOpen;
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
