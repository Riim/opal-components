import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

const openedModals: Array<OpalModal> = [];

let documentFocusListening: IDisposableListening;
let documentKeyUpListening: IDisposableListening;

function onDocumentFocus(evt: Event) {
	if (!openedModals[0].element.contains((evt.target as Node).parentElement!)) {
		openedModals[0].$<HTMLElement>('btnClose')!.focus();
	}
}

function onDocumentKeyUp(evt: KeyboardEvent) {
	if (evt.keyCode == 27 /* Esc */) {
		evt.preventDefault();
		openedModals[0].close();
	}
}

@Component<OpalModal>({
	elementIs: 'OpalModal',
	template,

	domEvents: {
		btnClose: {
			click() {
				this.close();
				this.emit(OpalModal.EVENT_CLOSE);
			}
		}
	}
})
export class OpalModal extends BaseComponent {
	static EVENT_CLOSE = Symbol('close');

	@Param(Boolean)
	opened: boolean;

	@Observable
	contentRendered = false;

	ready() {
		if (this.opened) {
			this._open();
		}
	}

	disconnected() {
		this.close();
	}

	@Listen('change:opened')
	_onOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._open();
		} else {
			this._close();
		}
	}

	@Listen('click', '@element')
	_onElementClick(evt: Event) {
		let thisEl = this.element;
		let windowEl = this.$('window');

		for (let el: Element | null = evt.target as Element; el != windowEl; ) {
			if (el == thisEl) {
				this.close();
				this.emit(OpalModal.EVENT_CLOSE);
				break;
			}

			el = el.parentElement;

			if (!el) {
				break;
			}
		}
	}

	renderContent() {
		if (!this.contentRendered) {
			this.contentRendered = true;
			Cell.release();
		}
	}

	open() {
		if (this.opened) {
			return false;
		}

		this.opened = true;
		Cell.release();

		return true;
	}

	close() {
		if (!this.opened) {
			return false;
		}

		this.opened = false;
		Cell.release();

		return true;
	}

	toggle(value?: boolean) {
		if (value !== undefined) {
			return value ? this.open() : !this.close();
		}
		return this.open() || !this.close();
	}

	_open() {
		if (openedModals.length) {
			openedModals[0].element.classList.add('_overlapped');
		} else {
			documentFocusListening = this.listenTo(
				document,
				'focus',
				onDocumentFocus,
				document,
				true
			);
			documentKeyUpListening = this.listenTo(document, 'keyup', onDocumentKeyUp, document);

			let body = document.body;
			let bodyWidth = body.offsetWidth;

			body.style.overflow = 'hidden';
			body.style.marginRight =
				(bodyWidth < body.offsetWidth
					? body.offsetWidth - bodyWidth
					: this.element.offsetWidth - this.element.clientWidth) + 'px';
		}

		openedModals.unshift(this);

		this.renderContent();

		this.focus();
	}

	_close() {
		let index = openedModals.indexOf(this);

		if (index) {
			openedModals[index].element.classList.remove('_overlapped');
			openedModals[index].focus();

			openedModals.splice(index, 1);
		} else {
			openedModals.shift();

			if (openedModals.length) {
				openedModals[0].element.classList.remove('_overlapped');
				openedModals[0].focus();
			} else {
				documentFocusListening.stop();
				documentKeyUpListening.stop();

				let body = document.body;

				body.style.overflow = '';
				body.style.marginRight = '';

				body.classList.add('_noFocusHighlight');
			}
		}
	}

	focus() {
		if (this == openedModals[0]) {
			let focusTarget = this.$<HTMLElement>('focus');

			(focusTarget || this.$<HTMLElement>('btnClose')!).focus();

			if (focusTarget) {
				document.body.classList.remove('_noFocusHighlight');
			}
		}

		return this;
	}
}
