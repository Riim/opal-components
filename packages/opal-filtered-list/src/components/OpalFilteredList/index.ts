import { OpalLoadedList } from '@riim/opal-loaded-list';
import { OpalTextInput } from '@riim/opal-text-input';
import { IEvent } from 'cellx';
import { BaseComponent, Component } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalFilteredList',
	template
})
export class OpalFilteredList extends BaseComponent {
	elementAttached() {
		let queryInput = this.$('queryInput');

		if (queryInput) {
			this.listenTo(queryInput, {
				[OpalTextInput.EVENT_INPUT]: this._onQueryInputInput,
				[OpalTextInput.EVENT_CHANGE]: this._onQueryInputChange
			});
		}
	}

	_onQueryInputInput(evt: IEvent<OpalTextInput>) {
		this._setListQuery(evt.target.value);
	}

	_onQueryInputChange(evt: IEvent<OpalTextInput>) {
		this._setListQuery(evt.target.value);
	}

	_setListQuery(query: string | null) {
		this.$<OpalLoadedList>('list')!.query = query!;
	}

	focus(): boolean {
		let queryInput = this.$<OpalTextInput>('queryInput');

		if (queryInput) {
			queryInput.focus();
			return true;
		}

		return false;
	}
}
