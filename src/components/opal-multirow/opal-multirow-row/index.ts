import './index.css';

import { Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component({
	elementIs: 'opal-multirow-row',

	props: {
		preset: { default: false, readonly: true }
	},

	bemlTemplate: template,

	events: {
		'btn-remove-row': {
			click() {
				this.emit('remove-row-click');
			}
		},

		'btn-add-row': {
			click() {
				this.emit('add-row-click');
			}
		}
	}
})
export default class OpalMultirowRow extends Component {
}
