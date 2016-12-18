import './index.css';

import { Component, d, ComponentTemplate } from 'rionite';
import template = require('./index.html');

@d.Component({
	elementIs: 'opal-multirow-row',

	props: {
		preset: { default: false, readonly: true }
	},

	template: new ComponentTemplate(template),

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
