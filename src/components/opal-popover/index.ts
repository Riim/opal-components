import './index.css';

import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component({
	elementIs: 'opal-popover',

	props: {
		to: 'right',
		autoDirection: true,
		autoClosing: false,
		opened: false
	},

	bemlTemplate: template
})
export default class OpalPopover extends Component {
	_toValueAtOpen: string;

	_documentClickListening: IDisposableListening | undefined;

	ready() {
		if (this.props['opened']) {
			this._open();
		}
	}

	propertyChanged(name: string, value: any) {
		if (name == 'opened') {
			this[value ? '_open' : '_close']();
		}
	}

	open(): boolean {
		if (this.props['opened']) {
			return false;
		}

		this.props['opened'] = true;
		return true;
	}

	close(): boolean {
		if (!this.props['opened']) {
			return false;
		}

		this.props['opened'] = false;
		return true;
	}

	toggle(value?: boolean): boolean {
		return (this.props['opened'] = value === undefined ? !this.props['opened'] : value);
	}

	_open() {
		if (this.props['autoDirection']) {
			let to = this.props['to'];

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
						this.props['to'] = 'right';
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
						this.props['to'] = 'bottom';
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
						this.props['to'] = 'left';
					}

					break;
				}
				case 'bottom': {
					if (
						elClientRect.bottom > docEl.clientHeight &&
							containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
							containerClientRect.top + window.pageYOffset >= elClientRect.bottom - containerClientRect.bottom
					) {
						this.props['to'] = 'top';
					}

					break;
				}
			}
		}

		if (this.props['autoClosing']) {
			setTimeout(() => {
				if (this.props['opened']) {
					this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
				}
			}, 1);
		}
	}

	_close() {
		if (this.props['autoDirection']) {
			this.props['to'] = this._toValueAtOpen;
		}

		if (this._documentClickListening) {
			this._documentClickListening.stop();
		}
	}

	_onDocumentClick(evt: Event) {
		let docEl = document.documentElement;
		let el = this.element;

		for (let node = evt.target as HTMLElement; node != el;) {
			if (node == docEl || node.tagName == 'A') {
				this.close();
				this.emit('close');
				break;
			}

			node = node.parentNode as HTMLElement;

			if (!node) {
				break;
			}
		}
	}
}
