import './index.css';

import { IDisposableListening, Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-popover',

	props: {
		to: 'right',
		opened: false,
		autoClosing: false
	},

	bemlTemplate: 'span/arrow rt-content/content (cloning=no)'
})
export default class OpalPopover extends Component {
	_documentClickListening: IDisposableListening;

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
		if (this.props['autoClosing']) {
			setTimeout(() => {
				if (this.props['opened']) {
					this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
				}
			}, 1);
		}
	}

	_close() {
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
