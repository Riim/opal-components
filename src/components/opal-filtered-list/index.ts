import './index.css';

import { IEvent } from 'cellx';
import { Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalLoadedList from '../opal-loaded-list';
import template = require('./index.beml');

@d.Component({
	elementIs: 'opal-filtered-list',

	bemlTemplate: template,

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
