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
				this.$<OpalLoadedList>('loaded-list').input.query = (evt.target as OpalTextInput).value;
			}
		}
	}
})
export class OpalFilteredList extends Component {
	focus() {
		let queryInput = this.$<OpalTextInput | null>('query-input');

		if (queryInput) {
			queryInput.focus();
		}
	}
}
