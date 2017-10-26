import { Component, ComponentConfig } from 'rionite';
import './index.css';
import template from './template.nelm';

@ComponentConfig({
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
export class OpalMultirowRow extends Component {}
