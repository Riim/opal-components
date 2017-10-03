import { Component, d, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@d.Component<OpalEditableText>({
	elementIs: 'opal-editable-text',

	template,

	domEvents: {
		'icon-editable': {
			click() {
				this.focus(true);
			}
		}
	}
})
export class OpalEditableText extends Component {
	_textNode: Text;

	_value: string | null;
	get value(): string | null {
		return this._value;
	}
	set value(value: string | null) {
		this._value = this._fixedValue = value && value.trim() || null;
		this._textNode.nodeValue = value || '';
	}

	_fixedValue: string | null;

	_documentKeyDownListening: IDisposableListening;

	ready() {
		let contentEl = this.$<Component>('content')!.element;
		let firstChild = contentEl.firstChild;

		if (!firstChild || firstChild.nodeType != Node.TEXT_NODE) {
			throw new TypeError('Content must be text node');
		}

		this._textNode = firstChild as Text;
		this._value = this._fixedValue = (contentEl.textContent as string).trim() || null;
	}

	elementAttached() {
		this.listenTo(this.element, 'click', this._onElementClick);

		this.listenTo(this.$<Component>('content')!.element, {
			focus: this._onContentElementFocus,
			blur: this._onContentElementBlur,
			input: this._onContentElementInput
		});
	}

	_onElementClick(evt: Event) {
		if (evt.target == this.element) {
			this.focus();
		}
	}

	_onContentElementFocus() {
		this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	}

	_onContentElementBlur() {
		this._documentKeyDownListening.stop();

		if (this._fixedValue != this._value) {
			this._fixedValue = this._value;
			this.emit('change');
		}
	}

	_onContentElementInput() {
		let contentEl = this.$<Component>('content')!.element;
		let text = contentEl.textContent as string;

		if (contentEl.innerHTML != text) {
			while (contentEl.lastChild) {
				contentEl.removeChild(contentEl.lastChild as Node);
			}

			let textNode = this._textNode;

			textNode.nodeValue = text;
			contentEl.appendChild(textNode);

			let sel = window.getSelection();
			let rng = document.createRange();
			rng.setStart(textNode, text.length);
			sel.removeAllRanges();
			sel.addRange(rng);
		} else if (!contentEl.firstChild) {
			this._textNode.nodeValue = '';
			contentEl.appendChild(this._textNode);
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
			rng.setStart(textNode, (textNode.nodeValue as string).length);
		}

		sel.removeAllRanges();
		sel.addRange(rng);
	}
}
