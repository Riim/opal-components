import './index.css';

import { IEvent } from 'cellx';
import { getText, Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalLoadedList from '../opal-loaded-list';
import template = require('./index.beml');

@d.Component({
	elementIs: 'opal-filtered-list',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск')
	},

	template,

	events: {
		'query-input': {
			input(evt: IEvent) {
				(this.$('loaded-list') as OpalLoadedList).props.query = (evt.target as OpalTextInput).value;
			}
		}
	}
})
export default class OpalFilteredList extends Component {
	focus() {
		let queryInput = this.$('query-input') as OpalTextInput;

		if (queryInput) {
			queryInput.focus();
		}
	}
}
