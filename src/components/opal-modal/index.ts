import { Cell, IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component, d, IDisposableListening } from 'rionite';
import { isFocusable } from '../../utils/isFocusable';
import './index.css';
import template = require('./template.nelm');

let openedModals: Array<OpalModal> = [];

let documentFocusListening: IDisposableListening;
let documentKeyUpListening: IDisposableListening;

function onDocumentFocus(evt: Event) {
	if (!isFocusable(evt.target as HTMLElement)) {
		return;
	}

	if (!openedModals[0].element.contains((evt.target as Node).parentNode!)) {
		openedModals[0].$<HTMLElement>('btn-close')!.focus();
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
				this.close();
				this.emit('close');
			}
		}
	}
})
export class OpalModal extends Component {
	@observable isContentRendered = false;

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
		if (evt.data.value) {
			this._open();
		} else {
			this._close();
		}
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

		this.isContentRendered = true;

		openedModals.unshift(this);

		this.focus();
	}

	_close() {
		let index = openedModals.indexOf(this);

		if (index) {
			openedModals[index - 1].close();
		}

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

	focus(): this {
		if (this == openedModals[0]) {
			document.body.classList.remove('_no-focus-highlight');
			(this.$<HTMLElement>('focus') || this.$<HTMLElement>('btn-close')!).focus();
		}

		return this;
	}
}
