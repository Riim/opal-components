import { OpalSignButton } from '@riim/opal-sign-button';
import { BaseComponent, Component } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalMultirowRow',
	template,

	events: {
		btnRemoveRow: {
			[OpalSignButton.EVENT_CLICK]() {
				this.emit(OpalMultirowRow.EVENT_REMOVE_ROW_CLICK);
			}
		},

		btnAddRow: {
			[OpalSignButton.EVENT_CLICK]() {
				this.emit(OpalMultirowRow.EVENT_ADD_ROW_CLICK);
			}
		}
	}
})
export class OpalMultirowRow extends BaseComponent {
	static EVENT_ADD_ROW_CLICK = Symbol('add-row-click');
	static EVENT_REMOVE_ROW_CLICK = Symbol('remove-row-click');
}
