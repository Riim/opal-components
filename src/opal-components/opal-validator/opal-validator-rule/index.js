require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-validator-rule', {
	Static: {
		props: {
			required: false,
			minLength: Number,
			regex: Object,
			test: String,
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
