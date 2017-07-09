import { IEvent } from 'cellx';
import { Component, d, getText } from 'rionite';
import { OpalLoadedList } from '../opal-loaded-list';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template = require('./index.nelm');

@d.Component({
	elementIs: 'opal-filtered-list',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск')
	},

	template,

	oevents: {
		'query-input': {
			input(evt: IEvent) {
				(this.$('loaded-list') as OpalLoadedList).input.query = (evt.target as OpalTextInput).value;
			}
		}
	}
})
export class OpalFilteredList extends Component {
	focus() {
		let queryInput = this.$('query-input') as OpalTextInput | null;

		if (queryInput) {
			queryInput.focus();
		}
	}
}
