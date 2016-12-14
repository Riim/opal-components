import './index.css';

import { define } from 'cellx';
import { getText, Component, d, ComponentTemplate } from 'rionite';
import { TDataList, TViewModel, default as OpalSelect } from '../opal-select';
import { IDataProvider } from '../opal-loaded-list';
import template = require('./index.html');

let defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };

@d.Component({
	elementIs: 'opal-tag-select',

	props: {
		type: String,
		datalist: { type: String, readonly: true },
		// необязательный, так как может указываться на передаваемом opal-loaded-list
		dataprovider: { type: String, readonly: true },
		value: Object,
		viewModel: { type: String, readonly: true },
		viewModelItemSchema: { default: defaultVMItemSchema, readonly: true },
		placeholder: getText.t('Не выбрано'),
		allowInput: false,
		popoverTo: 'bottom',
		disabled: false
	},

	template: new ComponentTemplate(template),

	events: {
		control: {
			click(evt, control) {
				let select = this.$('select') as OpalSelect;
				let selectEl = select.element;

				for (let node = evt.target as Node; node != selectEl; node = node.parentNode as Node) {
					if (node == control) {
						select.toggle();
						break;
					}
				}
			}
		},

		select: {
			confirminput() {
				let select = this.$('select') as OpalSelect;

				if (select.props['allow-input']) {
					select.close();
				}
			},

			// не соединять on-select и on-deselect в on-change,
			// тк on-change на opal-select[multiple] генерируется только при закрытии
			select() {
				(this.$('select') as OpalSelect).close();
			},

			deselect() {
				(this.$('select') as OpalSelect).close();
			}
		}
	}
})
export default class OpalTagSelect extends Component {
	_dataListParam: string;
	_dataProviderParam: string;
	_viewModelParam: string;

	dataList: TDataList;
	dataProvider: IDataProvider;
	viewModel: TViewModel;

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	placeholderShown: boolean;

	initialize() {
		let props = this.props;
		let dataList: string | undefined = props['datalist'];
		let dataProvider: string | undefined = props['dataprovider'];
		let vm: string | undefined = props['view-model'];

		this._dataListParam = (dataList && 'dataList') as string;
		this._dataProviderParam = (dataProvider && 'dataProvider') as string;
		this._viewModelParam = (vm && 'viewModel') as string;

		let getDataList: () => TDataList;

		if (dataList) {
			getDataList = Function(`return this.${ dataList };`) as () => TDataList;
		}

		let context = this.ownerComponent || window;

		define(this, {
			dataList: dataList && function() { return getDataList.call(context); },
			dataProvider: dataProvider && Function(`return this.${ dataProvider };`).call(context),
			viewModel: vm && Function(`return this.${ vm };`).call(context),

			placeholderShown(this: OpalTagSelect): boolean {
				return !!this.props['placeholder'] && (!this.viewModel || !this.viewModel.length);
			}
		});

		let vmItemSchema = props['view-model-item-schema'];

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
	}

	ready() {
		let select = this.$('select') as OpalSelect;

		this.dataList = select.dataList;
		this.viewModel = select.viewModel;
	}

	_onBtnRemoveTagClick(evt: Event, btn: HTMLElement) {
		this.viewModel.remove(this.viewModel.get(btn.dataset['tagValue'], this._viewModelItemValueFieldName));
		this.emit('change');
	}
}
