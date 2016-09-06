require('./index.css');

let { Component, template } = require('rionite');

module.exports = Component.extend('opal-multirow-row', {
	Static: {
		props: {
			preset: { default: false, readonly: true }
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
	}
});
