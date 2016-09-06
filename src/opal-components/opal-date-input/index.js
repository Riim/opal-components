require('./index.css');

let { Template, Component } = require('rionite');
let isExistDate = require('./isExistDate');

module.exports = Component.extend('opal-date-input', {
	Static: {
		props: {
			mask: '99/99/9999',
			placeholder: 'dd/mm/yyyy',
			popoverTo: 'right'
		},

		template: new Template(require('./index.html')),

		assets: {
			input: {}
		}
	},

	isExistDate
});
