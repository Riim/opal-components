import { getText } from '@riim/gettext';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component } from 'rionite';
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
	elementIs: 'opal-tag-select',

	inputs: {
		viewType: String,
		dataList: { type: Object },
		dataListKeypath: { type: String, readonly: true },
		dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		// необязательный, так как может указываться на передаваемом opal-loaded-list
		dataProvider: { type: Object, readonly: true },
		value: eval,
		viewModel: { type: Object },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		addNewItem: { type: Object, readonly: true },
		placeholder: getText.t('Не выбрано'),
		popoverPosition: 'bottom',
		tabIndex: 0,
		focused: false,
		disabled: false
	},

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
		return !!this.inputs.placeholder && !this.viewModel.length;
	}

	_dataListKeypathParam: string | null;

	initialize() {
		let inputs = this.inputs;

		if (inputs.dataListKeypath || inputs.$specified.has('dataList')) {
			define(
				this,
				'dataList',
				inputs.dataListKeypath
					? new Cell(Function(`return this.${inputs.dataListKeypath};`), {
							context: this.ownerComponent || window
						})
					: () => inputs.dataList
			);

			this.dataProvider = null;

			this._dataListKeypathParam = 'dataList';
		} else {
			this.dataList = null;
			this.dataProvider = inputs.dataProvider;
			this._dataListKeypathParam = null;
		}

		let dataListItemSchema = inputs.dataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemDisabledFieldName =
			dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		this.viewModel = inputs.viewModel || new ObservableList();

		let vmItemSchema = inputs.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName =
			vmItemSchema.disabled || defaultVMItemSchema.disabled;
	}

	elementAttached() {
		this.listenTo(this, 'input-view-model-change', this._onInputViewModelChange);

		this.listenTo('control', 'click', this._onControlClick);

		this.listenTo('select', {
			input: this._onSelectInput,
			change: this._onSelectChange,
			select: this._onSelectSelect,
			deselect: this._onSelectDeselect
		});
	}

	_onInputViewModelChange(evt: IEvent) {
		if (evt.data.value != this.viewModel) {
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
		return this.inputs.disabled || item[this._viewModelItemDisabledFieldName];
	}
}
