require('./index.css');

let { getText, Template, Component } = require('rionite');
let isExistDate = require('./isExistDate');

module.exports = Component.extend('opal-date-input', {
	Static: {
		props: {
			mask: '99/99/9999',
			placeholder: 'dd/mm/yyyy',
			required: false,
			popoverTo: 'right'
		},

		i18n: {
			nonExistentDate: getText.t('Несуществующая дата'),
			isRequiredField: getText.t('Поле обязательно для заполнения')
		},

		template: new Template(require('./index.html')),

		assets: {
			input: {}
		}
	},

	isExistDate
});
