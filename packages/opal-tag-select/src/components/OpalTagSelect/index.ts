import { getText } from '@riim/gettext';
import { IDataProvider } from '@riim/opal-loaded-list';
import {
	IDataListItem,
	OpalSelect,
	TDataList,
	TViewModel
	} from '@riim/opal-select';
import { Cell, define, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

const defaultDataListItemSchema = Object.freeze({
	value: 'id',
	text: 'name',
	subtext: 'parent',
	disabled: 'disabled'
});
const defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });

@Component<OpalTagSelect>({
	template,

	domEvents: {
		tag: {
			click(evt, tag: HTMLElement) {
				if (tag != evt.target) {
					return;
				}

				this.emit('tag-click', {
					value: tag.dataset.value
				});
			}
		},

		btnRemoveTag: {
			click(evt, btn: HTMLElement) {
				let vmItemValueFieldName = this._viewModelItemValueFieldName;
				let tagValue = btn.dataset.tagValue;

				this.viewModel.removeAt(
					this.viewModel.findIndex(tag => tag[vmItemValueFieldName] == tagValue)
				);
				this.emit('change');
			}
		}
	}
})
export class OpalTagSelect extends BaseComponent {
	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param paramViewType: string;
	@Param paramDataList: TDataList;
	@Param({ readonly: true })
	paramDataListKeypath: string;
	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	paramDataListItemSchema: { value?: string; text?: string; subtext?: string; disabled?: string };
	// необязательный, так как может указываться на передаваемом OpalLoadedList
	@Param({ readonly: true })
	paramDataProvider: IDataProvider;
	@Param({ type: eval })
	paramValue: Array<string>;
	@Param({ readonly: true })
	paramViewModel: TViewModel;
	@Param({ type: eval, default: defaultVMItemSchema, readonly: true })
	paramViewModelItemSchema: { value?: string; text?: string; disabled?: string };
	@Param({ readonly: true })
	paramAddNewItem: (text: string) => Promise<{ [name: string]: string }>;
	@Param paramPlaceholder = getText.t('Не выбрано');
	@Param paramPopoverPosition = 'bottom';
	@Param paramTabIndex_ = 0;
	@Param paramFocused = false;
	@Param paramDisabled = false;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemSubtextFieldName: string;
	_dataListItemDisabledFieldName: string;

	dataProvider: IDataProvider | null;

	@Observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@Computed
	get value(): Array<string> {
		return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
	}

	@Computed
	get isPlaceholderShown(): boolean {
		return !!this.paramPlaceholder && !this.viewModel.length;
	}

	_dataListKeypathParam: string | null;

	select: OpalSelect;

	_isItemDisabled(item: IDataListItem) {
		return this.paramDisabled || item[this._viewModelItemDisabledFieldName];
	}

	initialize() {
		let dataListKeypath = this.paramDataListKeypath;

		if (dataListKeypath || (this.$specifiedParams && this.$specifiedParams.has('dataList'))) {
			define(
				this,
				'dataList',
				dataListKeypath
					? new Cell(Function(`return this.${dataListKeypath};`), {
							context: this.ownerComponent || window
						})
					: () => this.paramDataList
			);

			this.dataProvider = null;

			this._dataListKeypathParam = 'dataList';
		} else {
			this.dataList = null;
			this.dataProvider = this.paramDataProvider;
			this._dataListKeypathParam = null;
		}

		let dataListItemSchema = this.paramDataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemSubtextFieldName =
			dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
		this._dataListItemDisabledFieldName =
			dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		this.viewModel = this.paramViewModel || new ObservableList();

		let vmItemSchema = this.paramViewModelItemSchema;
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
		this.listenTo('control', 'click', this._onControlClick);
		this.listenTo(this.select, {
			input: this._onSelectInput,
			change: this._onSelectChange,
			select: this._onSelectSelect,
			deselect: this._onSelectDeselect
		});
	}

	_onControlClick(evt: Event) {
		let selectEl = this.select.element;
		let node = evt.target as Node;

		if (node != selectEl) {
			let control = this.$<HTMLElement>('control');

			do {
				if (node == control) {
					this.select.toggle();
					break;
				}

				node = node.parentNode!;
			} while (node != selectEl);
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
