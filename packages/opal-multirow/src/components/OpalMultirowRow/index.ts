import { BaseComponent, Component } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalMultirowRow',
	template,

	events: {
		btnRemoveRow: {
			click() {
				this.emit('remove-row-click');
			}
		},

		btnAddRow: {
			click() {
				this.emit('add-row-click');
			}
		}
	}
})
export class OpalMultirowRow extends BaseComponent {}
