require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-validator-rule', {
	Static: {
		props: {
			required: false,
			minLength: Number,
			pattern: Object,
			popoverFrom: 'right'
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
