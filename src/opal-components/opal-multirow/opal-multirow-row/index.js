require('./index.css');

let { Component, template } = require('rionite');

module.exports = Component.extend('opal-multirow-row', {
	Static: {
		props: {
			preset: false
		},

		template: template(require('./index.html')),

		assets: {
			btnRemoveRow: {
				'on-click'() {
					this.emit('remove-row-click');
				}
			},

			btnAddRow: {
				'on-click'() {
					this.emit('add-row-click');
				}
			}
		}
	},

	elementAttributeChanged(name) {
		if (name == 'preset') {
			throw new TypeError('Property "preset" cannot be changed');
		}
	}
});
