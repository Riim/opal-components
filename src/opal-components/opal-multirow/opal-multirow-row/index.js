require('./index.css');

let { Component, ComponentTemplate } = require('rionite');

module.exports = Component.extend('opal-multirow-row', {
	Static: {
		props: {
			preset: { default: false, readonly: true }
		},

		template: new ComponentTemplate(require('./index.html')),

		events: {
			'btn-remove-row': {
				click() {
					this.emit('remove-row-click');
				}
			},

			'btn-add-row': {
				click() {
					this.emit('add-row-click');
				}
			}
		}
	}
});
