import './index.css';

import { define } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { getText, Component, d } from 'rionite';
import { TDataList, TViewModel, default as OpalSelect } from '../opal-select';
import { IDataProvider } from '../opal-loaded-list';
import template = require('./index.beml');

let defaultDataListItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };
let defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };

@d.Component({
	elementIs: 'opal-tag-select',

	props: {
		viewType: String,
		datalist: { type: Object, readonly: true },
		datalistKeypath: { type: String, readonly: true },
		datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		// необязательный, так как может указываться на передаваемом opal-loaded-list
		dataprovider: { type: Object, readonly: true },
		value: eval,
		viewModel: { type: Object, readonly: true },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		placeholder: getText.t('Не выбрано'),
		popoverTo: 'bottom',
		disabled: false
	},

	bemlTemplate: template,

	events: {
		control: {
			click(evt: Event) {
				let select = this.$('select') as OpalSelect;
				let selectEl = select.element;
				let node = evt.target as Node;

				if (node != selectEl) {
					let control = this.$('control') as HTMLElement;

					do {
						if (node == control) {
							select.toggle();
							break;
						}

						node = node.parentNode as Node;
					} while (node != selectEl);
				}
			}
		},

		select: {
			input() {
				(this.$('select') as OpalSelect).close();
			},

			// не соединять on-select и on-deselect в on-change,
			// тк on-change на opal-select[multiple] генерируется только при закрытии
			'<opal-select-option>select'() {
				(this.$('select') as OpalSelect).close();
			},

			'<opal-select-option>deselect'() {
				(this.$('select') as OpalSelect).close();
			}
		}
	}
})
export default class OpalTagSelect extends Component {
	_isDataListPropertyDefined: boolean;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	dataProvider: IDataProvider | null;

	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	placeholderShown: boolean;

	_dataListKeypathParam: string | null;
	_dataProviderKeypathParam: string | null;

	initialize() {
		let props = this.props;
		let dataList = props.datalist;

		if ((this._isDataListPropertyDefined = dataList || props.datalistKeypath)) {
			if (dataList) {
				define(this, 'dataList', dataList);
			} else {
				let context = this.ownerComponent || window;
				let getDataList = Function(`return this.${ props.datalistKeypath };`);

				define(this, 'dataList', function() {
					return getDataList.call(context);
				});
			}

			let dataListItemSchema = props.datalistItemSchema;

			this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
			this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
			this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

			this.dataProvider = null;

			this._dataListKeypathParam = 'dataList';
		} else {
			this.dataList = null;
			this.dataProvider = props.dataprovider;

			this._dataListKeypathParam = null;
		}

		let vmItemSchema = props.viewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;

		define(this, {
			viewModel: props.viewModel || new IndexedList(undefined, { indexes: [this._viewModelItemValueFieldName] }),

			placeholderShown(this: OpalTagSelect): boolean {
				return !!this.props.placeholder && !this.viewModel.length;
			}
		});
	}

	_onBtnRemoveTagClick(evt: Event, btn: HTMLElement) {
		this.viewModel.remove(this.viewModel.get(btn.dataset.tagValue, this._viewModelItemValueFieldName));
		this.emit('change');
	}
}
