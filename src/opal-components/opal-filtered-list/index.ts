import './index.css';

import { IEvent } from 'cellx';
import { Component, d, ComponentTemplate } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalLoadedList from '../opal-loaded-list';
import template = require('./index.html');

@d.Component({
	elementIs: 'opal-filtered-list',

	template: new ComponentTemplate(template),

	events: {
		'query-input': {
			input(evt: IEvent) {
				(this.$('loaded-list') as OpalLoadedList).props['query'] = (evt.target as OpalTextInput).value;
			}
		}
	}
})
export default class OpalFilteredList extends Component {
	focus() {
		(this.$('query-input') as OpalTextInput).focus();
	}
}
