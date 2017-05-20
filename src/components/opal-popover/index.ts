import './index.css';

import { IEvent } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component({
	elementIs: 'opal-popover',

	input: {
		to: 'right',
		autoDirection: true,
		autoClosing: false,
		opened: false
	},

	template,

	events: {
		':component': {
			'input-opened-change'(evt: IEvent) {
				this[evt.value ? '_open' : '_close']();
			}
		}
	}
})
export default class OpalPopover extends Component {
	_toValueAtOpen: string;

	_documentClickListening: IDisposableListening | undefined;

	ready() {
		if (this.input.opened) {
			this._open();
		}
	}

	open(): boolean {
		if (this.input.opened) {
			return false;
		}

		this.input.opened = true;
		return true;
	}

	close(): boolean {
		if (!this.input.opened) {
			return false;
		}

		this.input.opened = false;
		return true;
	}

	toggle(value?: boolean): boolean {
		return (this.input.opened = value === undefined ? !this.input.opened : value);
	}

	_open() {
		if (this.input.autoDirection) {
			let to = this.input.to;

			this._toValueAtOpen = to;

			let docEl = document.documentElement;

			let containerClientRect = this.element.offsetParent.getBoundingClientRect();
			let elClientRect = this.element.getBoundingClientRect();

			switch (to) {
				case 'left': {
					if (
						elClientRect.left + window.pageXOffset < 0 || (
							elClientRect.left < 0 &&
								containerClientRect.left < docEl.clientWidth - containerClientRect.right
						)
					) {
						this.input.to = 'right';
					}

					break;
				}
				case 'top': {
					if (
						elClientRect.top + window.pageYOffset < 0 || (
							elClientRect.top < 0 &&
								containerClientRect.top < docEl.clientHeight - containerClientRect.bottom
						)
					) {
						this.input.to = 'bottom';
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
						this.input.to = 'left';
					}

					break;
				}
				case 'bottom': {
					if (
						elClientRect.bottom > docEl.clientHeight &&
							containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
							containerClientRect.top + window.pageYOffset >= elClientRect.bottom - containerClientRect.bottom
					) {
						this.input.to = 'top';
					}

					break;
				}
			}
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
			this.input.to = this._toValueAtOpen;
		}

		if (this._documentClickListening) {
			this._documentClickListening.stop();
		}
	}

	_onDocumentClick(evt: Event) {
		let docEl = document.documentElement;
		let componentEl = this.element;

		for (let el: HTMLElement | null = evt.target as HTMLElement; el != componentEl;) {
			if (el == docEl || el.tagName == 'A') {
				this.close();
				this.emit('close');
				break;
			}

			el = el.parentNode as HTMLElement;

			if (!el) {
				break;
			}
		}
	}
}
