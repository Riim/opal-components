import { debounce } from '@riim/debounce-throttle';
import { getText } from '@riim/gettext';
import { IEvent } from 'cellx';
import { Component } from 'rionite';
import { OpalLoadedList } from '../opal-loaded-list';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalFilteredList',

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
		this.$<OpalLoadedList>('list')!.params.query = query;
	}

	focus() {
		let queryInput = this.$<OpalTextInput>('query-input');

		if (queryInput) {
			queryInput.focus();
		}
	}
}
