import { getText } from '@riim/gettext';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component, d } from 'rionite';
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
		dataList: { type: Object },
		dataListKeypath: { type: String, readonly: true },
		dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		// необязательный, так как может указываться на передаваемом opal-loaded-list
		dataProvider: { type: Object, readonly: true },
		addNewItem: { type: Object, readonly: true },
		value: eval,
		viewModel: { type: Object },
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
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	dataProvider: IDataProvider | null;

	@observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@computed get value(): Array<IDataListItem> {
		return this.viewModel.toArray();
	}

	@computed get isPlaceholderShown(): boolean {
		return !!this.input.placeholder && !this.viewModel.length;
	}

	_dataListKeypathParam: string | null;

	initialize() {
		let input = this.input;

		if (input.dataListKeypath || input.$specified.has('dataList')) {
			define(
				this,
				'dataList',
				input.dataListKeypath ?
					new Cell(Function(`return this.${ input.dataListKeypath };`), {
						context: this.ownerComponent || window
					}) :
					() => input.dataList
			);

			this.dataProvider = null;

			this._dataListKeypathParam = 'dataList';
		} else {
			this.dataList = null;
			this.dataProvider = input.dataProvider;
			this._dataListKeypathParam = null;
		}

		let dataListItemSchema = input.dataListItemSchema;

		this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		this.viewModel = input.viewModel || new ObservableList();

		let vmItemSchema = input.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect).defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
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
