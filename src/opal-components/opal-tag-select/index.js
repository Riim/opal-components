require('./index.css');

let cellx = require('cellx');
let { getText, ComponentTemplate, Component } = require('rionite');

module.exports = Component.extend('opal-tag-select', {
	Static: {
		props: {
			type: String,
			// необязательный, так как может указываться на передаваемом opal-loaded-list
			dataprovider: { type: String, readonly: true },
			value: Object,
			viewModel: { type: String, readonly: true },
			placeholder: getText.t('Не выбрано'),
			producing: false,
			popoverTo: 'bottom',
			disabled: false
		},

		template: new ComponentTemplate(require('./index.html')),

		assets: {
			':element': {
				'on-click'(evt) {
					let node = evt.target;

					if (
						node != this.element && node.nodeType == 1 &&
							node.classList.contains(this._prepareSelector('&__btn-remove-tag').slice(1))
					) {
						this.viewModel.remove(this.viewModel.get(node.dataset.tagValue, 'value'));
					}
				}
			},

			control: {
				'on-click'(evt, control) {
					let select = this.assets.select;
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
				'on-confirminput'() {
					if (this.assets.select.props.producing) {
						this.assets.select.close();
					}
				},

				// не соединять on-select и on-deselect в on-change,
				// тк on-change на opal-select[multiple] генерируется только при закрытии,
				// а здесь как раз закрыть и нужно
				'on-select'() {
					this.assets.select.close();
				},

				'on-deselect'() {
					this.assets.select.close();
				}
			}
		}
	},

	initialize() {
		let dataProvider = this.props.dataprovider;
		if (dataProvider) {
			this[dataProvider] = (this.ownerComponent || window)[dataProvider];
		}

		let vm = this.props.viewModel;
		if (vm) {
			this[vm] = (this.ownerComponent || window)[vm];
		}

		cellx.define(this, {
			viewModel: null,

			placeholderShown() {
				return !!this.props.placeholder && (!this.viewModel || !this.viewModel.length);
			}
		});
	},

	ready() {
		this.viewModel = this.assets.select.viewModel;
	}
});
