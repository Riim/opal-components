import './index.css';

import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

let openedModals: Array<OpalModal> = [];
let documentListening: IDisposableListening;

function onDocumentFocusIn() {
	if (!openedModals[0].element.contains(document.activeElement.parentNode as HTMLElement)) {
		(openedModals[0].$('btn-close') as HTMLElement).focus();
	}
}

function onDocumentKeyUp(evt: KeyboardEvent) {
	if (evt.keyCode == 27/* Esc */) {
		evt.preventDefault();
		openedModals[0].close();
	}
}

@d.Component<OpalModal>({
	elementIs: 'opal-modal',

	props: {
		opened: false
	},

	bemlTemplate: template,

	events: {
		':element': {
			click(evt: Event) {
				let el = this.element;
				let windowEl = this.$('window');

				for (let node = evt.target as HTMLElement; node != windowEl;) {
					if (node == el) {
						this.close();
						break;
					}

					node = node.parentNode as HTMLElement;

					if (!node) {
						break;
					}
				}
			}
		},

		'btn-close': {
			click() {
				this.props['opened'] = false;
			}
		}
	}
})
export default class OpalModal extends Component {
	ready() {
		if (this.props['opened']) {
			this._open();
		}
	}

	elementDetached() {
		this.close();
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
		if (openedModals.length) {
			openedModals[0].element.classList.add('_overlapped');
		} else {
			documentListening = this.listenTo(document, {
				focusin: onDocumentFocusIn,
				keyup: onDocumentKeyUp
			});

			let body = document.body;
			let initialBodyWidth = body.offsetWidth;

			body.style.overflow = 'hidden';

			if (initialBodyWidth < body.offsetWidth) {
				body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
			}
		}

		this.props['opened'] = true;
		openedModals.unshift(this);

		this.focus();

		this.emit('open');
	}

	_close() {
		let index = openedModals.indexOf(this);

		if (index) {
			openedModals[index - 1].close();
		}

		this.props['opened'] = false;
		openedModals.shift();

		if (openedModals.length) {
			openedModals[0].element.classList.remove('_overlapped');
			openedModals[0].focus();
		} else {
			documentListening.stop();

			let bodyStyle = document.body.style;

			bodyStyle.overflow = '';
			bodyStyle.marginRight = '';
		}

		this.emit('close');
	}

	focus(): OpalModal {
		if (this == openedModals[0]) {
			document.body.classList.remove('_no-focus-highlight');
			((this.$('focus') || this.$('btn-close')) as HTMLElement).focus();
		}

		return this;
	}
}
