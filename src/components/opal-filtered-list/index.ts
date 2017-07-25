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

	template
})
export class OpalFilteredList extends Component {
	elementAttached() {
		let queryInput = this.$('query-input');

		if (queryInput) {
			this.listenTo(queryInput, 'input', this._onQueryInputInput);
		}
	}

	_onQueryInputInput(evt: IEvent<OpalTextInput>) {
		this.$<OpalLoadedList>('loaded-list')!.input.query = evt.target.value;
	}

	focus() {
		let queryInput = this.$<OpalTextInput>('query-input');

		if (queryInput) {
			queryInput.focus();
		}
	}
}
