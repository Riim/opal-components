require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-tag-select', {
	Static: {
		props: {
			type: String,
			dataprovider: String,
			viewModel: String,
			placeholder: 'Не выбрано',
			popoverTo: 'bottom',
			disabled: false
		},

		template: require('./index.html'),

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

			select: {}
		}
	},

	initialize() {
		let dataprovider = this.props.dataprovider;

		if (!dataprovider) {
			throw new TypeError('Property "dataprovider" is required');
		}

		this[dataprovider] = (this.ownerComponent || window)[dataprovider];

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
