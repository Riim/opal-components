import './index.css';

import { IEvent } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

let openedModals: Array<OpalModal> = [];

let documentFocusListening: IDisposableListening;
let documentKeyUpListening: IDisposableListening;

function onDocumentFocus(evt: Event) {
	if (!openedModals[0].element.contains((evt.target as Node).parentNode as Node)) {
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

	template,

	events: {
		':component': {
			'property-opened-change'(evt: IEvent) {
				this[evt.value ? '_open' : '_close']();
			}
		},

		':element': {
			click(evt: Event) {
				let componentEl = this.element;
				let windowEl = this.$('window');

				for (let el: HTMLElement | null = evt.target as HTMLElement; el != windowEl;) {
					if (el == componentEl) {
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
		},

		'btn-close': {
			click() {
				this.props.opened = false;
				this.emit('close');
			}
		}
	}
})
export default class OpalModal extends Component {
	ready() {
		if (this.props.opened) {
			this._open();
		}
	}

	elementDetached() {
		this.close();
	}

	open(): boolean {
		if (this.props.opened) {
			return false;
		}

		this.props.opened = true;
		return true;
	}

	close(): boolean {
		if (!this.props.opened) {
			return false;
		}

		this.props.opened = false;
		return true;
	}

	toggle(value?: boolean): boolean {
		return (this.props.opened = value === undefined ? !this.props.opened : value);
	}

	_open() {
		if (openedModals.length) {
			openedModals[0].element.classList.add('_overlapped');
		} else {
			documentFocusListening = this.listenTo(document, 'focus', onDocumentFocus, document, true);
			documentKeyUpListening = this.listenTo(document, 'keyup', onDocumentKeyUp, document);

			let body = document.body;
			let initialBodyWidth = body.offsetWidth;

			body.style.overflow = 'hidden';

			if (initialBodyWidth < body.offsetWidth) {
				body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
			}
		}

		this.props.opened = true;
		openedModals.unshift(this);

		this.focus();
	}

	_close() {
		let index = openedModals.indexOf(this);

		if (index) {
			openedModals[index - 1].close();
		}

		this.props.opened = false;
		openedModals.shift();

		if (openedModals.length) {
			openedModals[0].element.classList.remove('_overlapped');
			openedModals[0].focus();
		} else {
			documentFocusListening.stop();
			documentKeyUpListening.stop();

			let bodyStyle = document.body.style;

			bodyStyle.overflow = '';
			bodyStyle.marginRight = '';
		}
	}

	focus(): OpalModal {
		if (this == openedModals[0]) {
			document.body.classList.remove('_no-focus-highlight');
			((this.$('focus') || this.$('btn-close')) as HTMLElement).focus();
		}

		return this;
	}
}
