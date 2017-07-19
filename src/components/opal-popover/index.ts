import { Cell, IEvent } from 'cellx';
import { Component, d, IDisposableListening } from 'rionite';
import './index.css';
import template = require('./index.nelm');

@d.Component({
	elementIs: 'opal-popover',

	input: {
		from: 'middle',
		to: 'right',
		autoDirection: true,
		autoClosing: false,
		opened: false
	},

	template
})
export class OpalPopover extends Component {
	_toOnOpen: string;

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
		this[evt.value ? '_open' : '_close']();
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
		let opened = this.input.opened = value === undefined ? !this.input.opened : value;
		Cell.forceRelease();
		return opened;
	}

	_open() {
		let el = this.element;

		if (this.input.autoDirection) {
			let to = this.input.to;

			this._toOnOpen = to;

			let docEl = document.documentElement;

			let containerClientRect = el.offsetParent.getBoundingClientRect();
			let elClientRect = el.getBoundingClientRect();

			switch (to) {
				case 'left': {
					if (
						elClientRect.left + document.body.scrollLeft < 0 || (
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
						elClientRect.top + document.body.scrollTop < 0 || (
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
							containerClientRect.left + document.body.scrollLeft >=
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
							containerClientRect.top + document.body.scrollTop >=
								elClientRect.bottom - containerClientRect.bottom
					) {
						this.input.to = 'top';
					}

					break;
				}
			}
		}

		let from = this.input.from;
		let arrowStyle = this.$<HTMLElement>('arrow').style;

		arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';

		if (from != 'middle') {
			arrowStyle[from] = el.offsetParent[from == 'left' || from == 'right' ? 'clientWidth' : 'clientHeight'] / 2 +
				'px';
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
			this.input.to = this._toOnOpen;
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

			el = el.parentNode as HTMLElement;

			if (!el) {
				break;
			}
		}
	}
}
