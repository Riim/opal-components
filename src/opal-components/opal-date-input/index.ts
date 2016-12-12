import './index.css';

import { getText, Component, d, ComponentTemplate } from 'rionite';
import isExistDate from './isExistDate';
import template = require('./index.html');

@d.Component({
	elementIs: 'opal-date-input',

	props: {
		mask: '99/99/9999',
		value: String,
		placeholder: 'dd/mm/yyyy',
		required: { default: false, readonly: true },
		popoverTo: 'right'
	},

	i18n: {
		nonExistentDate: getText.t('Несуществующая дата'),
		isRequiredField: getText.t('Поле обязательно для заполнения')
	},

	template: new ComponentTemplate(template)
})
export default class OpalDateInput extends Component {
	isExistDate = isExistDate;
}
