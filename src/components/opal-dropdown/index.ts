import { nextTick } from '@riim/next-tick';
import { Cell, IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component, d, IDisposableListening } from 'rionite';
import './index.css';
import template = require('./template.nelm');

let openedDropdowns: Array<OpalDropdown> = [];

@d.Component({
	elementIs: 'opal-dropdown',

	input: {
		autoHeight: true,
		autoClosing: false,
		opened: false
	},

	template
})
export class OpalDropdown extends Component {
	@observable isContentRendered = false;

	_documentClickListening: IDisposableListening | undefined;

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
		openedDropdowns.push(this);

		if (this.isContentRendered) {
			this._open$();
		} else {
			this.isContentRendered = true;
			nextTick(() => {
				this._open$();
			});
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

		let docElClientWidth = document.documentElement.clientWidth;
		let containerClientRect = el.offsetParent.getBoundingClientRect();
		let elClientRect = el.getBoundingClientRect();

		if (elClientRect.right > docElClientWidth) {
			if (containerClientRect.right - el.offsetWidth >= 0) {
				elStyle.right = '0';
				elStyle.left = 'auto';
			} else {
				elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
			}
		}

		let margin = elClientRect.top - containerClientRect.bottom;
		let excess = elClientRect.bottom + margin - document.documentElement.clientHeight;

		if (excess > 0) {
			let diff = containerClientRect.top - (document.documentElement.clientHeight - containerClientRect.bottom);

			if (this.input.autoHeight) {
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
			} else if (diff > 0 && excess - diff <= document.body.scrollTop) {
				elStyle.top = 'auto';
				elStyle.bottom = '100%';
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
		openedDropdowns.splice(openedDropdowns.indexOf(this), 1);

		if (this._documentClickListening) {
			this._documentClickListening.stop();
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
