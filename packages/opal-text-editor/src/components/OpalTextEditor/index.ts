import { nextTick } from '@riim/next-tick';
import { OpalTextInputValidator } from '@riim/opal-text-input-validator';
import { IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import { Quill, RangeStatic } from 'quill';
import * as Quill_ from 'quill';
import Delta from 'quill-delta';
import Op from 'quill-delta/dist/Op';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import './quill.css';
import template from './template.rnt';

const AlignStyle = ((Quill_ as any) as typeof Quill).import('attributors/style/align');
const Block = ((Quill_ as any) as typeof Quill).import('blots/block');
const ImageBlot = ((Quill_ as any) as typeof Quill).import('formats/image');
const Parchment = ((Quill_ as any) as typeof Quill).import('parchment');

Block.tagName = 'div';
((Quill_ as any) as typeof Quill).register(Block, true);

// вместо классов типа ql-align-right использовать встроенные стили для выравнивания
((Quill_ as any) as typeof Quill).register(AlignStyle, true);

// https://github.com/quilljs/quill/issues/1274#issuecomment-303619625

class IndentAttributor extends Parchment.Attributor.Style {
	add(node: any, value: any) {
		value = parseInt(value, 10);

		if (value === 0) {
			this.remove(node);
			return true;
		}

		return super.add(node, value + 'em');
	}
}

const IndentStyle = new (IndentAttributor as any)('indent', 'text-indent', {
	scope: Parchment.Scope.BLOCK,
	whitelist: ['1em', '2em', '3em', '4em', '5em', '6em', '7em', '8em', '9em']
});

((Quill_ as any) as typeof Quill).register(IndentStyle, true);

const reEmail =
	'[^@\\s]+@(?:[0-9a-zA-Zа-яА-ЯёЁ][\\-0-9a-zA-Zа-яА-ЯёЁ]*[0-9a-zA-Zа-яА-ЯёЁ]\\.)+[a-zA-Zа-яА-ЯёЁ]{2,}';
// prettier-ignore
const reUrl = [
	'(?:\\bhttps?:)?//(?:[0-9a-zA-Zа-яА-ЯёЁ][\\-0-9a-zA-Zа-яА-ЯёЁ]*[0-9a-zA-Zа-яА-ЯёЁ]\\.)+[a-zA-Zа-яА-ЯёЁ]{2,}',
	'(?:',
		'[/?#]',
		'(?:',
			'[^\\s\\)\\.,;!?]*',
			'(?:',
				'[\\.,;!?]+(?!\\s|$)',
				'|',
				'\\)+(?![\\.,;!?]?(?:\\s|$))',
			')*',
		')*',
	')?'
];
const reEmailOrUrl1 = RegExp(
	// prettier-ignore
	[
		'(?:',
			reEmail,
			'|',
			'(?:\\bhttps?:)?//(?:[0-9a-zA-Zа-яА-ЯёЁ][\\-0-9a-zA-Zа-яА-ЯёЁ]*[0-9a-zA-Zа-яА-ЯёЁ]\\.)+[a-zA-Zа-яА-ЯёЁ]{2,}',
		')[^\\s]*'
	].join('')
);
const reEmailOrUrl2 = RegExp(
	// prettier-ignore
	[
		'(?:',
			`(${reEmail})`,
			'|',
			'(',
				...reUrl,
			')',
		')[^\\s]*$'
	].join('')
);
const reEmailOrUrl3 = RegExp(
	// prettier-ignore
	[
		'(?:',
			`(${reEmail})`,
			'|',
			'(',
				...reUrl,
			')',
		')'
	].join(''),
	'g'
);

function handleLink(quill: Quill, range: RangeStatic, context: any) {
	let match = context.prefix.match(reEmailOrUrl2);

	if (match) {
		let email = match[1];
		let url = match[2];
		let retain = range.index - match[0].length;
		let ops: Array<Op> = retain ? [{ retain }] : [];

		ops.push(
			{ delete: (email || url).length },
			{
				insert: email || url,
				attributes: email ? { link: 'mailto:' + email } : { link: url }
			}
		);

		quill.updateContents(ops as any);
	}

	return true;
}

@Component<OpalTextEditor>({
	elementIs: 'OpalTextEditor',
	template,

	domEvents: {
		btnToolbarOnEmptyLine: {
			mousedown() {
				this._btnToolbarOnEmptyLinePressed = true;
			},

			click() {
				this._btnToolbarOnEmptyLinePressed = false;

				// let pageYOffset = window.pageYOffset;

				(this.quill as any).theme.tooltip.edit();
				this.quill.focus();
				(this.quill as any).theme.tooltip.show();

				// window.scrollTo(window.pageXOffset, pageYOffset);

				this.btnToolbarOnEmptyLineShown = false;
			}
		}
	}
})
export class OpalTextEditor extends BaseComponent {
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CONFIRM = Symbol('confirm');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_INPUT = Symbol('input');
	static EVENT_KEYDOWN = Symbol('keydown');
	static EVENT_KEYPRESS = Symbol('keypress');
	static EVENT_KEYUP = Symbol('keyup');

	@Param({ default: 5 })
	rows: number;
	@Param({ type: eval })
	toolbarConfig: Array<any> | null;
	@Param('value', String)
	paramValue: string | null;
	@Param(String)
	storeKey: string | null;
	@Param(String)
	placeholder: string | null;
	@Param(String)
	initialTextAlign: string | null;
	@Param(Boolean)
	loading: boolean;
	@Param({ default: 0 })
	tabIndex: number;
	@Param(Boolean)
	focused: boolean;
	@Param(Boolean)
	disabled: boolean;

	quill: Quill;
	textFieldContainer: HTMLElement;
	textField: HTMLElement;

	@Observable
	_value: string | null = null;

	get value() {
		let value = this.textField?.innerHTML || this._value;

		if (value) {
			value = value
				.replace(/^(?:<(\w+)[^>]*><br><\/\1>)+/, '')
				.replace(/(?:<(\w+)[^>]*><br><\/\1>)+$/, '')
				.replace(/<(\w+)([^>]*)>[\x20\t]+<\/\1>/g, '<$1$2>&nbsp;</$1>')
				.replace(/<(div|span)\b[^>]*><\/\1>/g, '')
				.replace(/<span[^>]*?\sclass="ql-cursor"[^>]*>\s*<\/span>/g, '');
		}

		return value && /^(?:<(\w+)[^>]*><br><\/\1>)+$/.test(value) ? null : value || null;
	}
	set value(value: string | null) {
		if (this.textField) {
			this.textField.innerHTML = value || '';
		}

		this._value = value || null;
	}

	_prevValue: string | null;

	@Observable
	btnToolbarOnEmptyLineShown = false;

	_btnToolbarOnEmptyLinePressed = false;

	validator: { validate(): boolean } | null = null;

	initialize() {
		this._onQuillEditorChange = this._onQuillEditorChange.bind(this);

		if (this.paramValue) {
			this.value = this.paramValue;
		} else {
			this._value = (this.storeKey && localStorage.getItem(this.storeKey)) || null;
		}

		this._prevValue = this.value;
	}

	ready() {
		this.textFieldContainer = this.$<HTMLElement>('textFieldContainer')!;

		let quill: Quill = (this.quill = new (Quill_ as any)(this.textFieldContainer, {
			modules: {
				toolbar: this.toolbarConfig || [
					[{ header: 1 }, { header: 2 }],
					['bold', 'italic', 'underline'],
					['blockquote'],
					[{ list: 'bullet' }, { list: 'ordered' }],
					[{ color: [] }, { background: [] }],
					[{ align: [] }],
					['link', 'image']
				],

				keyboard: {
					bindings: {
						handleSpace: {
							collapsed: true,
							key: ' ',
							prefix: reEmailOrUrl1,
							handler: (range: RangeStatic, context: any) =>
								handleLink(quill, range, context)
						},

						handleEnter: {
							collapsed: true,
							key: 'enter',
							prefix: reEmailOrUrl1,
							handler: (range: RangeStatic, context: any) =>
								handleLink(quill, range, context)
						}
					}
				}
			},

			placeholder: this.placeholder,
			theme: 'bubble'
		}));

		this.textField = quill.root;

		quill.clipboard.addMatcher(Node.TEXT_NODE, (node: any, delta: Delta) => {
			let str: string = node.data;

			if (typeof str != 'string') {
				return delta;
			}

			let matches = str.match(reEmailOrUrl3);

			if (matches) {
				let ops = [];

				for (let match of matches) {
					let s = str.split(match);
					ops.push({ insert: s.shift() }, { insert: match, attributes: { link: match } });
					str = s.join(match);
				}

				if (str) {
					ops.push({ insert: str });
				}

				delta.ops = ops;
			}

			return delta;
		});

		if (this._value) {
			this.textField.innerHTML = this._value;
		}

		if (!this._prevValue && this.initialTextAlign) {
			this.textField.innerHTML = this._value = `<div style="text-align: ${this.initialTextAlign};"></div>`;
		}

		this._fixMinHeight();

		if (this.focused && !this.disabled) {
			this.focus();
		}
	}

	connected() {
		this.quill.on((Quill_ as any).events.EDITOR_CHANGE, this._onQuillEditorChange);
	}

	disconnected() {
		this.quill.off((Quill_ as any).events.EDITOR_CHANGE, this._onQuillEditorChange);
	}

	@Listen('change:rows')
	_onRowsChange() {
		this._fixMinHeight();
	}

	@Listen('change:paramValue')
	_onParamValueChange(evt: IEvent) {
		this.value = evt.data.value;
	}

	@Listen('change:placeholder')
	_onPlaceholderChange() {
		this.textField.dataset.placeholder = this.placeholder || undefined;
	}

	@Listen('focus', '@textField')
	_onTextFieldFocus() {
		this.focused = true;
		this.emit(OpalTextEditor.EVENT_FOCUS);
	}

	@Listen('blur', '@textField')
	_onTextFieldBlur(evt: Event) {
		this.focused = false;
		this.emit(OpalTextEditor.EVENT_BLUR);

		nextTick(() => {
			if (
				document.activeElement === this.textField ||
				document.activeElement === (this.quill.clipboard as any).container
			) {
				return;
			}

			if (this._btnToolbarOnEmptyLinePressed) {
				this._btnToolbarOnEmptyLinePressed = false;
			} else {
				this.btnToolbarOnEmptyLineShown = false;
			}

			let value = this.value;

			if (value === this._prevValue) {
				return;
			}

			this._prevValue = value;

			if (this.storeKey) {
				localStorage.setItem(this.storeKey, this._value || '');
			}

			this.emit(OpalTextEditor.EVENT_CHANGE, { initialEvent: evt });
		});
	}

	@Listen('input', '@textField')
	_onTextFieldInput(evt: Event) {
		this._value = this.textField.innerHTML || null;
		this.emit(OpalTextEditor.EVENT_INPUT, { initialEvent: evt });
	}

	@Listen('keydown', '@textField')
	_onTextFieldKeyDown(evt: Event) {
		this.emit(OpalTextEditor.EVENT_KEYDOWN, { initialEvent: evt });
	}

	@Listen('keypress', '@textField')
	_onTextFieldKeyPress(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */ && this.value) {
			this.emit(OpalTextEditor.EVENT_CONFIRM);
		}

		this.emit(OpalTextEditor.EVENT_KEYPRESS, { initialEvent: evt });
	}

	@Listen('keyup', '@textField')
	_onTextFieldKeyUp(evt: Event) {
		this.emit(OpalTextEditor.EVENT_KEYUP, { initialEvent: evt });
	}

	@Listen('click', '@textField')
	_onTextFieldClick(evt: Event) {
		let image = Parchment.find(evt.target);

		if (image instanceof ImageBlot) {
			this.quill.setSelection(image.offset(this.quill.scroll), 1, 'user');
		}
	}

	_onQuillEditorChange(evtType: string, range: RangeStatic) {
		if (evtType == (Quill_ as any).events.TEXT_CHANGE) {
			this._value = this.textField.innerHTML || null;
			return;
		}

		if (!range) {
			return;
		}

		nextTick(() => {
			// пустое выделение
			if ((range.length as any) == 0) {
				let block = (this.quill.scroll as any).descendant(Block, range.index)[0];

				// пустая линия
				if (block && block.domNode.firstChild instanceof HTMLBRElement) {
					let lineBounds = this.quill.getBounds(range as any);
					let btnToolbarOnEmptyLine = this.$<HTMLElement>('btnToolbarOnEmptyLine')!;

					if (lineBounds.left < this.textField.offsetWidth / 2) {
						btnToolbarOnEmptyLine.style.left = lineBounds.left + 'px';
						btnToolbarOnEmptyLine.style.right = 'auto';
					} else {
						btnToolbarOnEmptyLine.style.left = 'auto';
						btnToolbarOnEmptyLine.style.right =
							this.textField.offsetWidth - lineBounds.right + 'px';
					}
					btnToolbarOnEmptyLine.style.top =
						lineBounds.top +
						(lineBounds.height - btnToolbarOnEmptyLine.offsetHeight) / 2 +
						'px';

					this.btnToolbarOnEmptyLineShown = true;

					// непустая линия
				} else {
					this.btnToolbarOnEmptyLineShown = false;
				}

				// не пустое выделение
			} else {
				this.btnToolbarOnEmptyLineShown = false;
			}
		});
	}

	_fixMinHeight() {
		let style = getComputedStyle(this.textField);

		this.textField.style.minHeight =
			parseFloat(style.paddingTop) +
			parseFloat(style.paddingBottom) +
			parseFloat(style.borderTopWidth) +
			parseFloat(style.borderBottomWidth) +
			parseFloat(style.lineHeight) * this.rows +
			'px';
	}

	clear() {
		this.value = null;
		return this;
	}

	focus() {
		this.textField.focus();
		return this;
	}

	blur() {
		this.textField.blur();
		return this;
	}

	enable() {
		this.disabled = false;
		return this;
	}

	disable() {
		this.disabled = true;
		return this;
	}

	validate() {
		return !this.validator || this.validator.validate();
	}
}

OpalTextInputValidator.targetChangeEvents.push(OpalTextEditor.EVENT_CHANGE);
OpalTextInputValidator.targetInputEvents.push(OpalTextEditor.EVENT_INPUT);
