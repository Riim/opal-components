import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
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
				this.emit('close');
			}
		}
	}
})
export class OpalModal extends BaseComponent {
	@Param
	paramOpened = false;

	@Observable
	contentRendered = false;

	ready() {
		if (this.paramOpened) {
			this._open();
		}
	}

	elementAttached() {
		this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
		this.listenTo(this.element, 'click', this._onElementClick);
	}

	elementDetached() {
		this.close();
	}

	_onParamOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._open();
		} else {
			this._close();
		}
	}

	_onElementClick(evt: Event) {
		let componentEl = this.element;
		let windowEl = this.$('window');

		for (let el: Element | null = evt.target as Element; el != windowEl; ) {
			if (el == componentEl) {
				this.close();
				this.emit('close');
				break;
			}

			el = el.parentElement;

			if (!el) {
				break;
			}
		}
	}

	renderContent() {
		this.contentRendered = true;
		Cell.forceRelease();
	}

	open(): boolean {
		if (this.paramOpened) {
			return false;
		}

		this.paramOpened = true;
		Cell.forceRelease();

		return true;
	}

	close(): boolean {
		if (!this.paramOpened) {
			return false;
		}

		this.paramOpened = false;
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
			documentFocusListening = this.listenTo(
				document,
				'focus',
				onDocumentFocus,
				document,
				true
			);
			documentKeyUpListening = this.listenTo(document, 'keyup', onDocumentKeyUp, document);

			let body = document.body;
			let initialBodyWidth = body.offsetWidth;

			body.style.overflow = 'hidden';

			if (initialBodyWidth < body.offsetWidth) {
				body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
			}
		}

		openedModals.unshift(this);

		this.contentRendered = true;
		Cell.forceRelease();

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

			let body = document.body;

			body.style.overflow = '';
			body.style.marginRight = '';

			body.classList.add('_noFocusHighlight');
		}
	}

	focus(): this {
		if (this == openedModals[0]) {
			let target = this.$<HTMLElement>('focus');

			(target || this.$<HTMLElement>('btnClose')!).focus();

			if (target) {
				document.body.classList.remove('_noFocusHighlight');
			}
		}

		return this;
	}
}
