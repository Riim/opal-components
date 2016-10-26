require('./index.css');

let { getText, ComponentTemplate, Component } = require('rionite');
let isExistDate = require('./isExistDate');

module.exports = Component.extend('opal-date-input', {
	Static: {
		props: {
			mask: '99/99/9999',
			value: String,
			placeholder: 'dd/mm/yyyy',
			required: false,
			popoverTo: 'right'
		},

		i18n: {
			nonExistentDate: getText.t('Несуществующая дата'),
			isRequiredField: getText.t('Поле обязательно для заполнения')
		},

		template: new ComponentTemplate(require('./index.html'))
	},

	isExistDate
});
