require('./index.css');

let cellx = require('cellx');
let { getText, Component, ComponentTemplate } = require('rionite');

module.exports = Component.extend('opal-tag-select', {
	Static: {
		props: {
			type: String,
			datalist: { type: String, readonly: true },
			// необязательный, так как может указываться на передаваемом opal-loaded-list
			dataprovider: { type: String, readonly: true },
			value: Object,
			viewModel: { type: String, readonly: true },
			viewModelItemSchema: { default: { value: 'value', text: 'text', disabled: 'disabled' }, readonly: true },
			placeholder: getText.t('Не выбрано'),
			allowInput: false,
			popoverTo: 'bottom',
			disabled: false
		},

		template: new ComponentTemplate(require('./index.html')),

		events: {
			control: {
				click(evt, control) {
					let select = this.$('select');
					let selectEl = select.element;

					for (let node = evt.target; node != selectEl; node = node.parentNode) {
						if (node == control) {
							select.toggle();
							break;
						}
					}
				}
			},

			select: {
				confirminput() {
					let select = this.$('select');

					if (select.props.allowInput) {
						select.close();
					}
				},

				// не соединять on-select и on-deselect в on-change,
				// тк on-change на opal-select[multiple] генерируется только при закрытии
				select() {
					this.$('select').close();
				},

				deselect() {
					this.$('select').close();
				}
			}
		}
	},

	initialize() {
		let props = this.props;
		let dataList = props.datalist;
		let dataProvider = props.dataprovider;
		let vm = props.viewModel;

		this._dataListParam = dataList && 'dataList';
		this._dataProviderParam = dataProvider && 'dataProvider';
		this._viewModelParam = vm && 'viewModel';

		let getDataList;

		if (dataList) {
			getDataList = Function(`return this.${ dataList };`);
		}

		let context = this.ownerComponent || window;

		cellx.define(this, {
			dataList: dataList && function() { return getDataList.call(context); },
			dataProvider: dataProvider && Function(`return this.${ dataProvider };`).call(context),
			viewModel: vm && Function(`return this.${ vm };`).call(context),

			placeholderShown() {
				return !!this.props.placeholder && (!this.viewModel || !this.viewModel.length);
			}
		});

		let vmItemSchema = props.viewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled;
	},

	ready() {
		this.dataList = this.$('select').dataList;
		this.viewModel = this.$('select').viewModel;
	},

	_onBtnRemoveTagClick(evt, btn) {
		this.viewModel.remove(this.viewModel.get(btn.dataset.tagValue, this._viewModelItemValueFieldName));
		this.emit('change');
	}
});
