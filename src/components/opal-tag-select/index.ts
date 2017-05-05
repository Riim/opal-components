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
		datalistKeypath: { type: String, readonly: true },
		datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		// необязательный, так как может указываться на передаваемом opal-loaded-list
		dataprovider: { type: Object, readonly: true },
		dataproviderKeypath: { type: String, readonly: true },
		value: eval,
		viewModelKeypath: { type: String, readonly: true },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		placeholder: getText.t('Не выбрано'),
		popoverTo: 'bottom',
		disabled: false
	},

	template,

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

	initialize() {
		let props = this.props;

		if (props.datalistKeypath) {
			let context = this.ownerComponent || window;
			let getDataList = Function(`return this.${ props.datalistKeypath };`);

			define(this, 'dataList', function() {
				return getDataList.call(context);
			});

			let dataListItemSchema = props.datalistItemSchema;

			this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
			this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
			this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

			this.dataProvider = null;

			this._dataListKeypathParam = 'dataList';
		} else {
			this.dataList = null;

			let dataProvider = props.dataprovider;

			if (!dataProvider && props.dataproviderKeypath) {
				dataProvider = Function(`return this.${ props.dataproviderKeypath };`)
					.call(this.ownerComponent || window);

				if (!dataProvider) {
					throw new TypeError('dataProvider is not defined');
				}
			}

			this.dataProvider = dataProvider;

			this._dataListKeypathParam = null;
		}

		let vmItemSchema = props.viewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;

		let vm;

		if (props.viewModelKeypath) {
			vm = Function(`return this.${ props.viewModelKeypath };`).call(this.ownerComponent || window);

			if (!vm) {
				throw new TypeError('viewModel is not defined');
			}
		} else {
			vm = new IndexedList(undefined, { indexes: [this._viewModelItemValueFieldName] });
		}

		define(this, {
			viewModel: vm,

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
