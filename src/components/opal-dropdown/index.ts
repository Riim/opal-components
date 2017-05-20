import './index.css';

import { IEvent } from 'cellx';
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
		openedDropdowns.push(this);

		let el = this.element;
		let elStyle = el.style;

		elStyle.top = '100%';
		elStyle.right = '';
		elStyle.bottom = '';
		elStyle.left = '0';
		elStyle.display = 'block';
		elStyle.maxHeight = '';

		let docEl = document.documentElement;
		let container = el.offsetParent;

		let docElClientWidth = docEl.clientWidth;
		let containerClientRect = container.getBoundingClientRect();
		let elClientRect = el.getBoundingClientRect();

		if (elClientRect.right > docElClientWidth) {
			if (containerClientRect.right - el.offsetWidth >= 0) {
				elStyle.right = '0';
				elStyle.left = '';
			} else {
				elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
			}
		}

		if (this.input.autoHeight) {
			let docElClientHeight = docEl.clientHeight;
			let margin = elClientRect.top - containerClientRect.bottom;
			let excess = elClientRect.bottom + margin - docElClientHeight;

			if (excess > 0) {
				let diff = containerClientRect.top - (docElClientHeight - containerClientRect.bottom);

				if (diff > 0) {
					elStyle.top = '';
					elStyle.bottom = '100%';

					excess -= diff;

					if (excess > 0) {
						elStyle.maxHeight = el.offsetHeight - excess + 'px';
					}
				} else {
					elStyle.maxHeight = el.offsetHeight - excess + 'px';
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
		openedDropdowns.splice(openedDropdowns.indexOf(this), 1);

		this.element.style.display = '';

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
