import { IEvent } from 'cellx';
import { Component, d, IDisposableListening } from 'rionite';
import { isFocusable } from '../../Utils/isFocusable';
import './index.css';
import template = require('./index.nelm');

let openedModals: Array<OpalModal> = [];

let documentFocusListening: IDisposableListening;
let documentKeyUpListening: IDisposableListening;

function onDocumentFocus(evt: Event) {
	if (!isFocusable(evt.target as HTMLElement)) {
		return;
	}

	if (!openedModals[0].element.contains((evt.target as Node).parentNode!)) {
		openedModals[0].$<HTMLElement>('btn-close').focus();
	}
}

function onDocumentKeyUp(evt: KeyboardEvent) {
	if (evt.keyCode == 27 /* Esc */) {
		evt.preventDefault();
		openedModals[0].close();
	}
}

@d.Component<OpalModal>({
	elementIs: 'opal-modal',

	input: {
		opened: false
	},

	template,

	domEvents: {
		'btn-close': {
			click() {
				this.input.opened = false;
				this.emit('close');
			}
		}
	}
})
export class OpalModal extends Component {
	ready() {
		if (this.input.opened) {
			this._open();
		}
	}

	elementAttached() {
		this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
		this.listenTo(this.element, 'click', this._onElementClick);
	}

	elementDetached() {
		this.close();
	}

	_onInputOpenedChange(evt: IEvent) {
		this[evt.value ? '_open' : '_close']();
	}

	_onElementClick(evt: Event) {
		let componentEl = this.element;
		let windowEl = this.$('window');

		for (let el: HTMLElement | null = evt.target as HTMLElement; el != windowEl; ) {
			if (el == componentEl) {
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

		this.input.opened = true;
		openedModals.unshift(this);

		this.focus();
	}

	_close() {
		let index = openedModals.indexOf(this);

		if (index) {
			openedModals[index - 1].close();
		}

		this.input.opened = false;
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
			(this.$<HTMLElement | null>('focus') || this.$<HTMLElement>('btn-close')).focus();
		}

		return this;
	}
}
