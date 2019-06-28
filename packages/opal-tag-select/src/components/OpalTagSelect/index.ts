import { pt } from '@riim/gettext';
import { IDataProvider } from '@riim/opal-loaded-list';
import {
	IDataListItem,
	OpalSelect,
	TDataList,
	TViewModel
	} from '@riim/opal-select';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
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

				this.emit('tag-click', {
					value: context.tag[this._viewModelItemValueFieldName]
				});
			}
		},

		btnRemoveTag: {
			click(_evt, context) {
				this.viewModel.remove(context.tag);
				this.emit('change');
			}
		}
	}
})
export class OpalTagSelect extends BaseComponent {
	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param
	viewType: string;
	@Param('dataList')
	paramDataList: TDataList;
	@Param({ readonly: true })
	dataListKeypath: string;
	@Param({
		type: eval,
		default: defaultDataListItemSchema,
		readonly: true
	})
	dataListItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
		disabled?: string;
	};
	// необязательный, так как может указываться на передаваемом OpalLoadedList
	@Param({ readonly: true })
	dataProvider: IDataProvider;
	@Param('value', { type: eval })
	paramValue: Array<string>;
	@Param({ readonly: true })
	viewModel: TViewModel = new ObservableList();
	@Param({
		type: eval,
		default: defaultVMItemSchema,
		readonly: true
	})
	viewModelItemSchema: {
		value?: string;
		text?: string;
		disabled?: string;
	};
	@Param({ readonly: true })
	addNewItem: (text: string) => Promise<Record<string, string>>;
	@Param
	// ;;; Плейсхолдер тегселекта.
	// ;;; Можно перевести как призыв к выбору -- Select (англ.).
	placeholder = pt('OpalTagSelect#placeholder', 'Не выбрано');
	@Param
	popoverPosition = 'bottom';
	@Param
	tabIndex = 0;
	@Param
	focused = false;
	@Param
	disabled = false;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemSubtextFieldName: string;
	_dataListItemDisabledFieldName: string;

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@Computed
	get value(): Array<string> {
		return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
	}

	@Computed
	get placeholderShown(): boolean {
		return !!this.placeholder && !this.viewModel.length;
	}

	_selectDataListKeypath: string | null;

	select: OpalSelect;

	_isItemDisabled(item: IDataListItem) {
		return this.disabled || item[this._viewModelItemDisabledFieldName];
	}

	initialize() {
		let dataListKeypath = this.dataListKeypath;

		if (dataListKeypath || (this.$specifiedParams && this.$specifiedParams.has('dataList'))) {
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

	elementAttached() {
		this.listenTo(this, 'change:disabled', this._onDisabledChange);
		this.listenTo('control', 'click', this._onControlClick);
		this.listenTo(this.select, {
			input: this._onSelectInput,
			change: this._onSelectChange,
			select: this._onSelectSelect,
			deselect: this._onSelectDeselect
		});
	}

	_onDisabledChange(evt: IEvent) {
		if (evt.data.value) {
			this.close();
		}
	}

	_onControlClick(evt: Event) {
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

	_onSelectInput(): false {
		this.select.close();
		this.emit('input');
		return false;
	}

	_onSelectChange(): false {
		this.emit('change');
		return false;
	}

	_onSelectSelect(): false {
		this.select.close();
		return false;
	}

	_onSelectDeselect(): false {
		this.select.close();
		return false;
	}

	open(): boolean {
		return this.select.open();
	}

	close(): boolean {
		return this.select.close();
	}

	toggle(): boolean {
		return this.select.toggle();
	}

	focus(): this {
		this.select.focus();
		return this;
	}

	blur(): this {
		this.select.blur();
		return this;
	}
}
