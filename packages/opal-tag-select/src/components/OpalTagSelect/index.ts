import { pt } from '@riim/gettext';
import { IDataProvider } from '@riim/opal-loaded-list';
import { OpalPopover } from '@riim/opal-popover';
import {
	IDataListItem,
	OpalSelect,
	TDataList,
	TViewModel
	} from '@riim/opal-select';
import { Cell, define, IEvent } from 'cellx';
import { ObservableList } from 'cellx-collections';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

const defaultDataListItemSchema = Object.freeze({
	value: 'id',
	text: 'name',
	subtext: 'parent',
	disabled: 'disabled'
});
const defaultVMItemSchema = Object.freeze({
	value: 'id',
	text: 'name',
	disabled: 'disabled'
});

@Component<OpalTagSelect>({
	elementIs: 'OpalTagSelect',
	template,

	domEvents: {
		tag: {
			click(evt, context, tag) {
				if (tag != evt.target) {
					return;
				}

				this.emit(OpalTagSelect.EVENT_TAG_CLICK, {
					value: context.tag[this._viewModelItemValueFieldName]
				});
			}
		},

		btnRemoveTag: {
			click(_evt, context) {
				this.viewModel.remove(context.tag);
				this.emit(OpalTagSelect.EVENT_CHANGE);
			}
		},

		control: {
			click(evt: Event) {
				if (this.disabled) {
					return;
				}

				let selectEl = this.select.element;
				let el: Element | null = evt.target as Element;

				if (el != selectEl) {
					let control = this.$<HTMLElement>('control');

					do {
						if (el == control) {
							this.select.toggle();
							break;
						}

						el = el.parentElement;
					} while (el && el != selectEl);
				}
			}
		}
	}
})
export class OpalTagSelect extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');
	static EVENT_INPUT = Symbol('input');
	static EVENT_TAG_CLICK = Symbol('tag-click');

	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param({ default: 'default' })
	viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & { _?: never });
	@Param({ default: 'primary' })
	buttonViewType:
		| 'default'
		| 'primary'
		| 'success'
		| 'warning'
		| 'danger'
		| (string & { _?: never });
	@Param('dataList')
	paramDataList: TDataList | null;
	@Param({ type: String, readonly: true })
	dataListKeypath: string | null;
	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	dataListItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
		disabled?: string;
	};
	// необязательный, так как может указываться на передаваемом OpalLoadedList
	@Param({ readonly: true })
	dataProvider: IDataProvider | null;
	@Param('value', eval)
	paramValue: Array<string> | null;
	@Param({ default: new ObservableList(), readonly: true })
	viewModel: TViewModel;
	@Param({ type: eval, default: defaultVMItemSchema, readonly: true })
	viewModelItemSchema: {
		value?: string;
		text?: string;
		disabled?: string;
	};
	@Param({ readonly: true })
	addItem: ((text: string) => Promise<Record<string, string>>) | null;
	// ;;; Плейсхолдер тегселекта.
	// ;;; Можно перевести как призыв к выбору -- Select (англ.).
	@Param({ default: pt('OpalTagSelect#placeholder', 'Не выбрано') })
	placeholder: string;
	@Param({ default: 'bottom' })
	popoverPosition: typeof OpalPopover.prototype.position;
	@Param({ default: 0 })
	tabIndex: number;
	@Param(Boolean)
	focused: boolean;
	@Param(Boolean)
	disabled: boolean;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemSubtextFieldName: string;
	_dataListItemDisabledFieldName: string;

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@Computed
	get value() {
		return this.viewModel.map<string>((item) => item[this._viewModelItemValueFieldName]);
	}

	@Computed
	get placeholderShown() {
		return !!this.placeholder && !this.viewModel.length;
	}

	_selectDataListKeypath: string | null;

	select: OpalSelect;

	validator: { validate(): boolean } | null = null;

	_isItemDisabled(item: IDataListItem) {
		return this.disabled || item[this._viewModelItemDisabledFieldName];
	}

	initialize() {
		let dataListKeypath = this.dataListKeypath;

		if (dataListKeypath || this.$specifiedParams.has('dataList')) {
			define(this, 'dataList', dataListKeypath
				? new Cell(Function(`return this.${dataListKeypath};`), {
						context: this.ownerComponent || window
				  })
				: () => this.paramDataList);

			this._selectDataListKeypath = 'dataList';
		} else {
			this.dataList = null;
			this._selectDataListKeypath = null;
		}

		let dataListItemSchema = this.dataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemSubtextFieldName =
			dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
		this._dataListItemDisabledFieldName =
			dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		let vmItemSchema = this.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName =
			vmItemSchema.disabled || defaultVMItemSchema.disabled;
	}

	ready() {
		this.select = this.$<OpalSelect>('select')!;
	}

	@Listen('change:disabled')
	_onDisabledChange(evt: IEvent) {
		if (evt.data.value) {
			this.close();
		}
	}

	@Listen(OpalSelect.EVENT_INPUT, '@select')
	_onSelectInput() {
		this.select.close();
		this.emit(OpalTagSelect.EVENT_INPUT);
		return false;
	}

	@Listen(OpalSelect.EVENT_CHANGE, '@select')
	_onSelectChange() {
		this.emit(OpalTagSelect.EVENT_CHANGE);
		return false;
	}

	@Listen(OpalSelect.EVENT_SELECT, '@select')
	_onSelectSelect() {
		this.select.close();
		return false;
	}

	@Listen(OpalSelect.EVENT_DESELECT, '@select')
	_onSelectDeselect() {
		this.select.close();
		return false;
	}

	open() {
		return this.select.open();
	}

	close() {
		return this.select.close();
	}

	toggle() {
		return this.select.toggle();
	}

	focus() {
		this.select.focus();
		return this;
	}

	blur() {
		this.select.blur();
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
