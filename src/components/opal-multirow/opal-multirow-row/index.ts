import { Component, d } from 'rionite';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-multirow-row',

	input: {
		preset: { default: false, readonly: true }
	},

	template,

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
export class OpalMultirowRow extends Component {
}
