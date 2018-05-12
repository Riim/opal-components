import { debounce } from '@riim/debounce-throttle';
import { getText } from '@riim/gettext';
import { OpalLoadedList } from '@riim/opal-loaded-list';
import { OpalTextInput } from '@riim/opal-text-input';
import { IEvent } from 'cellx';
import { BaseComponent, Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component({
	elementIs: 'OpalFilteredList',

	i18n: {
		queryInputPlaceholder: getText.t('Поиск')
	},

	template
})
export class OpalFilteredList extends BaseComponent {
	elementAttached() {
		let queryInput = this.$('queryInput');

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
		let queryInput = this.$<OpalTextInput>('queryInput');

		if (queryInput) {
			queryInput.focus();
		}
	}
}
