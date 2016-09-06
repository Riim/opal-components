require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-validator-rule', {
	Static: {
		props: {
			required: { default: false, readonly: true },
			minLength: { type: Number, readonly: true },
			regex: { type: Object, readonly: true },
			test: { type: String, readonly: true },
			popoverTo: 'right'
		},

		template: require('./index.html'),

		assets: {
			popover: {}
		}
	},

	showMessage() {
		this.assets.popover.open();
	},

	hideMessage() {
		this.assets.popover.close();
	}
});
