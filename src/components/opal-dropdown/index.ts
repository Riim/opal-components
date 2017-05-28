import './index.css';

import { IEvent, Cell } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';

let openedDropdowns: Array<OpalDropdown> = [];

@d.Component({
	elementIs: 'opal-dropdown',

	input: {
		autoHeight: true,
		autoClosing: false,
		opened: false
	},

	template: '@section/inner { rt-content/content }',

	events: {
		':component': {
			'input-opened-change'(evt: IEvent) {
				this[evt.value ? '_open' : '_close']();
			}
		}
	}
})
export default class OpalDropdown extends Component {
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
		let opened = this.input.opened = value === undefined ? !this.input.opened : value
		Cell.forceRelease();
		return opened;
	}

	_open() {
		openedDropdowns.push(this);

		let el = this.element;
		let elStyle = el.style;

		elStyle.top = '100%';
		elStyle.right = 'auto';
		elStyle.bottom = 'auto';
		elStyle.left = '0';

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
				elStyle.maxHeight = 'none';

				if (diff > 0) {
					elStyle.top = 'auto';
					elStyle.bottom = '100%';

					excess -= diff;

					if (excess > 0) {
						elStyle.maxHeight = containerClientRect.bottom - containerClientRect.top - excess + 'px';
					}
				} else {
					elStyle.maxHeight = containerClientRect.bottom - containerClientRect.top - excess + 'px';
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
