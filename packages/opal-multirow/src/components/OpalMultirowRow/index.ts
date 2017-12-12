import { BaseComponent, Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component({
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
export class OpalMultirowRow extends BaseComponent {}
