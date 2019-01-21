import { BaseComponent, Component, IDisposableListening } from 'rionite';
import './index.css';
import template = require('./template.nelm');

@Component<OpalEditableText>({
	elementIs: 'OpalEditableText',
	template,

	domEvents: {
		iconEdit: {
			click() {
				this.focus(true);
			}
		}
	}
})
export class OpalEditableText extends BaseComponent {
	_textNode: Text;

	_value: string | null;
	get value(): string | null {
		return this._value;
	}
	set value(value: string | null) {
		this._value = this._fixedValue = (value && value.trim()) || null;
		this._textNode.nodeValue = value || '';
	}

	_fixedValue: string | null;

	_documentKeyDownListening: IDisposableListening;

	ready() {
		let contentSlotEl = this.$<BaseComponent>('contentSlot')!.element;
		let firstChild = contentSlotEl.firstChild;

		if (!firstChild || firstChild.nodeType != Node.TEXT_NODE) {
			throw new TypeError('Content must be text node');
		}

		this._textNode = firstChild as Text;
		this._value = this._fixedValue = contentSlotEl.textContent!.trim() || null;
	}

	elementAttached() {
		this.listenTo(this.element, 'click', this._onElementClick);
		this.listenTo(this.$<BaseComponent>('contentSlot')!.element, {
			focus: this._onContentSlotElementFocus,
			blur: this._onContentSlotElementBlur,
			input: this._onContentSlotElementInput
		});
	}

	_onElementClick(evt: Event) {
		if (evt.target == this.element) {
			this.focus();
		}
	}

	_onContentSlotElementFocus() {
		this._documentKeyDownListening = this.listenTo(
			document,
			'keydown',
			this._onDocumentKeyDown
		);
	}

	_onContentSlotElementBlur() {
		this._documentKeyDownListening.stop();

		if (this._fixedValue != this._value) {
			this._fixedValue = this._value;
			this.emit('change');
		}
	}

	_onContentSlotElementInput() {
		let contentSlotEl = this.$<BaseComponent>('contentSlot')!.element;
		let text = contentSlotEl.textContent!;

		if (contentSlotEl.innerHTML != text) {
			while (contentSlotEl.lastChild) {
				contentSlotEl.removeChild(contentSlotEl.lastChild);
			}

			let textNode = this._textNode;

			textNode.nodeValue = text;
			contentSlotEl.appendChild(textNode);

			let sel = window.getSelection();
			let rng = document.createRange();
			rng.setStart(textNode, text.length);
			sel.removeAllRanges();
			sel.addRange(rng);
		} else if (!contentSlotEl.firstChild) {
			this._textNode.nodeValue = '';
			contentSlotEl.appendChild(this._textNode);
		}

		this._value = text.trim() || null;

		this.emit('input');
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13) {
			evt.preventDefault();
		}
	}

	focus(selectAll?: boolean) {
		let textNode = this._textNode;
		let sel = window.getSelection();
		let rng = document.createRange();

		if (selectAll) {
			rng.selectNode(textNode);
		} else {
			rng.setStart(textNode, textNode.nodeValue!.length);
		}

		sel.removeAllRanges();
		sel.addRange(rng);
	}
}
