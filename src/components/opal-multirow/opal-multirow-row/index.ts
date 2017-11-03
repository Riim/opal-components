import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'opal-multirow-row',

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
