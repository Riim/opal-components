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

			placeholder: {
				'on-click'() {
					this.assets.select.toggle();
				}
			},

			select: {
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
