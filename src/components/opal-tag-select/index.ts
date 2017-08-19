import { define, IEvent, ObservableList } from 'cellx';
import { Component, d, getText } from 'rionite';
import { IDataProvider } from '../opal-loaded-list';
import {
	IDataListItem,
	OpalSelect,
	TDataList,
	TViewModel
	} from '../opal-select';
import './index.css';
import template = require('./template.nelm');

let defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });
let defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });

@d.Component<OpalTagSelect>({
	elementIs: 'opal-tag-select',

	input: {
		viewType: String,
		datalist: { type: Object },
		datalistKeypath: { type: String, readonly: true },
		datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		// необязательный, так как может указываться на передаваемом opal-loaded-list
		dataprovider: { type: Object, readonly: true },
		dataproviderKeypath: { type: String, readonly: true },
		addNewItem: { type: Object, readonly: true },
		addNewItemKeypath: { type: String, readonly: true },
		value: eval,
		viewModel: { type: Object },
		viewModelKeypath: { type: String, readonly: true },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		placeholder: getText.t('Не выбрано'),
		popoverTo: 'bottom',
		disabled: false
	},

	template,

	domEvents: {
		'btn-remove-tag': {
			click(evt: Event, btn: HTMLElement) {
				let vmItemValueFieldName = this._viewModelItemValueFieldName;
				let tagValue = btn.dataset.tagValue;
				this.viewModel.removeAt(this.viewModel.findIndex((tag) => tag[vmItemValueFieldName] == tagValue));
				this.emit('change');
			}
		}
	}
})
export class OpalTagSelect extends Component {
	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	dataList: TDataList | null;
	_dataListKeypathParam: string | null;

	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	dataProvider: IDataProvider | null;

	_addNewItem: ((text: string) => Promise<{ [name: string]: string }>) | null;
	_addNewItemKeypathParam: string | null;

	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	get value(): Array<IDataListItem> {
		return this.viewModel.toArray();
	}

	isPlaceholderShown: boolean;

	initialize() {
		let input = this.input;
		let isInputDataListSpecified = input.$specified.has('datalist');

		if (isInputDataListSpecified || input.datalistKeypath) {
			if (isInputDataListSpecified) {
				define(this, 'dataList', () => input.datalist);
			} else {
				let getDataList = Function(`return this.${ input.datalistKeypath };`);
				let context = this.ownerComponent || window;
				define(this, 'dataList', () => getDataList.call(context));
			}

			this._dataListKeypathParam = 'dataList';

			this.dataProvider = null;
		} else {
			this.dataList = null;
			this._dataListKeypathParam = null;

			let isInputDataProviderSpecified = input.$specified.has('dataProvider');

			if (isInputDataProviderSpecified || input.dataproviderKeypath) {
				let dataProvider = isInputDataProviderSpecified ?
					input.dataprovider :
					Function(`return this.${ input.dataproviderKeypath };`).call(this.ownerComponent || window);

				if (!dataProvider) {
					throw new TypeError('"dataProvider" is not defined');
				}

				this.dataProvider = dataProvider;
			} else {
				this.dataProvider = null;
			}
		}

		let inputAddNewItemSpecified = input.$specified.has('addNewItem');

		if (inputAddNewItemSpecified || input.addNewItemKeypath) {
			let addNewItem = inputAddNewItemSpecified ?
				input.addNewItem :
				Function(`return this.${ input.addNewItemKeypath };`).call(this.ownerComponent || window);

			if (!addNewItem) {
				throw new TypeError('"addNewItem" is not defined');
			}

			this._addNewItem = addNewItem;
			this._addNewItemKeypathParam = '_addNewItem';
		} else {
			this._addNewItem = null;
			this._addNewItemKeypathParam = null;
		}

		let dataListItemSchema = input.datalistItemSchema;

		this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		let vmItemSchema = input.viewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;

		let isInputViewModelSpecified = input.$specified.has('viewModel');
		let vm;

		if (isInputViewModelSpecified || input.viewModelKeypath) {
			vm = isInputViewModelSpecified ?
				input.viewModel :
				Function(`return this.${ input.viewModelKeypath };`).call(this.ownerComponent || window);

			if (!vm) {
				throw new TypeError('"viewModel" is not defined');
			}
		} else {
			vm = new ObservableList();
		}

		define(this, {
			viewModel: vm,

			isPlaceholderShown(this: OpalTagSelect): boolean {
				return !!this.input.placeholder && !this.viewModel.length;
			}
		});
	}

	elementAttached() {
		this.listenTo(this, 'input-view-model-change', this._onInputViewModelChange);

		this.listenTo('control', 'click', this._onControlClick);

		this.listenTo('select', {
			input: this._onSelectInput,
			change: this._onSelectChange,
			'<opal-select-option>select': this._onSelectOptionSelect,
			'<opal-select-option>deselect': this._onSelectOptionDeselect
		});
	}

	_onInputViewModelChange(evt: IEvent) {
		if (evt.value != this.viewModel) {
			throw new TypeError('Input property "viewModel" is readonly');
		}
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

	_onSelectInput() {
		this.emit('input');
		this.$<OpalSelect>('select')!.close();
	}

	_onSelectChange() {
		this.emit('change');
	}

	// Закрываем в select/deselect а не в change,
	// тк. change на opal-select[multiple] генерируется только при закрытии.
	_onSelectOptionSelect() {
		this.$<OpalSelect>('select')!.close();
	}

	_onSelectOptionDeselect() {
		this.$<OpalSelect>('select')!.close();
	}
}
