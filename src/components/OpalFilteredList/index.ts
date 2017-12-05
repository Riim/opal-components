import { debounce } from '@riim/debounce-throttle';
import { getText } from '@riim/gettext';
import { IEvent } from 'cellx';
import { BaseComponent, Component } from 'rionite';
import { OpalLoadedList } from '../OpalLoadedList';
import { OpalTextInput } from '../OpalTextInput';
import './index.css';
import template from './template.nelm';

@Component({
	i18n: {
		queryInputPlaceholder: getText.t('Поиск')
	},

	template
})
export class OpalFilteredList extends BaseComponent {
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
		this.$<OpalLoadedList>('list')!.paramQuery = query as any;
	}

	focus() {
		let queryInput = this.$<OpalTextInput>('query-input');

		if (queryInput) {
			queryInput.focus();
		}
	}
}
