import { debounce } from '@riim/debounce-throttle';
import { IEvent } from 'cellx';
import { Component, d, getText } from 'rionite';
import '../../assets/icons/opal-components__icon-search.svg';
import { OpalLoadedList } from '../opal-loaded-list';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template = require('./template.nelm');

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
			this.listenTo(queryInput, 'input', debounce(150, this._onQueryInputInput));
			this.listenTo(queryInput, 'change', this._onQueryInputChange);
		}
	}

	_onQueryInputInput(evt: IEvent<OpalTextInput>) {
		this._setListQuery(evt.target.value);
	}

	_onQueryInputChange(evt: IEvent<OpalTextInput>) {
		this._setListQuery(evt.target.value);
	}

	_setListQuery(query: string | null) {
		this.$<OpalLoadedList>('list')!.input.query = query;
	}

	focus() {
		let queryInput = this.$<OpalTextInput>('query-input');

		if (queryInput) {
			queryInput.focus();
		}
	}
}
