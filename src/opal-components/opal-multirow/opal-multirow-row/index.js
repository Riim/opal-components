require('./index.css');

let { Template, Component } = require('rionite');

module.exports = Component.extend('opal-multirow-row', {
	Static: {
		props: {
			preset: { default: false, readonly: true }
		},

		template: new Template(require('./index.html')),

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
