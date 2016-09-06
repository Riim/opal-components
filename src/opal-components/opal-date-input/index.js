require('./index.css');

let { Component, template } = require('rionite');
let isExistDate = require('./isExistDate');

module.exports = Component.extend('opal-date-input', {
	Static: {
		props: {
			mask: '99/99/9999',
			placeholder: 'dd/mm/yyyy',
			popoverTo: 'right'
		},

		template: template(require('./index.html')),

		assets: {
			input: {}
		}
	},

	isExistDate
});
