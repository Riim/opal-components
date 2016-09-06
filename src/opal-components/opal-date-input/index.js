require('./index.css');

let { Component, template } = require('rionite');
let isExistDate = require('./isExistDate');

module.exports = Component.extend('opal-date-input', {
	Static: {
		props: {
			popoverTo: 'right'
		},

		template: template(require('./index.html')),

		assets: {
			input: {}
		}
	},

	isExistDate
});
