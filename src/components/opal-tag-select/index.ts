import { getText } from '@riim/gettext';
import { Cell, define, ObservableList } from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component, Param } from 'rionite';
import { IDataProvider } from '../opal-loaded-list';
import {
	IDataListItem,
	OpalSelect,
	TDataList,
	TViewModel
	} from '../opal-select';
import './index.css';
import template from './template.nelm';

let defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });
let defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });

@Component.Config<OpalTagSelect>({
	elementIs: 'OpalTagSelect',
	template,

	domEvents: {
		'btn-remove-tag': {
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
export class OpalTagSelect extends Component {
	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param() paramViewType: string;

	@Param() paramDataList: TDataList;

	@Param({ readonly: true })
	paramDataListKeypath: string;

	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	paramDataListItemSchema: { value?: string; text?: string; disabled?: string };

	// необязательный, так как может указываться на передаваемом opal-loaded-list
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

	@Param({ default: getText.t('Не выбрано') })
	paramPlaceholder: string;

	@Param({ default: 'bottom' })
	paramPopoverPosition: string;

	@Param({ default: 0 })
	paramTabIndex: number;

	@Param({ default: false })
	paramFocused: boolean;

	@Param({ default: false })
	paramDisabled: boolean;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	dataProvider: IDataProvider | null;

	@observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@computed
	get value(): Array<string> {
		return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
	}

	@computed
	get isPlaceholderShown(): boolean {
		return !!this.paramPlaceholder && !this.viewModel.length;
	}

	_dataListKeypathParam: string | null;

	initialize() {
		let dataListKeypath = this.paramDataListKeypath;

		if (dataListKeypath || this.$specifiedParams.has('dataList')) {
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

	elementAttached() {
		this.listenTo('control', 'click', this._onControlClick);
		this.listenTo('select', {
			input: this._onSelectInput,
			change: this._onSelectChange,
			select: this._onSelectSelect,
			deselect: this._onSelectDeselect
		});
	}

	_onControlClick(evt: Event) {
		let select = this.$<OpalSelect>('select')!;
		let selectEl = select.element;
		let node = evt.target as Node;

		if (node != selectEl) {
			let control = this.$<HTMLElement>('control');

			do {
				if (node == control) {
					select.toggle();
					break;
				}

				node = node.parentNode!;
			} while (node != selectEl);
		}
	}

	_onSelectInput(): false {
		this.$<OpalSelect>('select')!.close();
		this.emit('input');
		return false;
	}

	_onSelectChange(): false {
		this.emit('change');
		return false;
	}

	_onSelectSelect(): false {
		this.$<OpalSelect>('select')!.close();
		return false;
	}

	_onSelectDeselect(): false {
		this.$<OpalSelect>('select')!.close();
		return false;
	}

	// helpers

	_isItemDisabled(item: IDataListItem) {
		return this.paramDisabled || item[this._viewModelItemDisabledFieldName];
	}
}
