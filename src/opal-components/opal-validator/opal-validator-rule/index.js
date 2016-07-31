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
			messagePopover: {}
		}
	},

	showMessage() {
		this.messagePopover.open();
	},

	hideMessage() {
		this.messagePopover.close();
	}
});
