import { nextUID } from '@riim/next-uid';
import { Cell, IEvent, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, Listen } from 'rionite';
import { OpalMultirowRow } from '../OpalMultirowRow';
import './index.css';
import template from './template.rnt';

export { OpalMultirowRow };

@Component({
	elementIs: 'OpalMultirow',
	template
})
export class OpalMultirow extends BaseComponent {
	static EVENT_ADD_ROW = Symbol('add-row');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_REMOVE_ROW = Symbol('remove-row');

	_presetRowClassName: string;

	@Observable
	_presetRowCount = 0;
	@Observable
	_newRows = new ObservableList<{ key: string }>();

	@Computed
	get _notHaveNewRows(): boolean {
		return !this._newRows.length;
	}

	@Computed
	get _notSingleRow(): boolean {
		return this._presetRowCount + this._newRows.length != 1;
	}

	initialize() {
		let elementBlockNames = (this.constructor as typeof BaseComponent)._elementBlockNames;
		this._presetRowClassName = elementBlockNames[elementBlockNames.length - 1] + '__presetRow';
	}

	ready() {
		let presetRowCount = (this._presetRowCount = this.$$('presetRow').length);

		if (!presetRowCount) {
			this._newRows.add({ key: nextUID() });
		}
	}

	@Listen(OpalMultirowRow.EVENT_REMOVE_ROW_CLICK)
	_onRowRemoveRowClick(evt: IEvent<OpalMultirowRow>) {
		let rowEl = evt.target.element;

		if (rowEl.classList.contains(this._presetRowClassName)) {
			rowEl.parentElement!.removeChild(rowEl);
			this._presetRowCount--;
		} else {
			let key = evt.target.parentComponent!.element.dataset.key;
			this._newRows.removeAt(this._newRows.findIndex(row => row.key == key));
		}

		Cell.release();

		this.emit(OpalMultirow.EVENT_REMOVE_ROW);
		this.emit(OpalMultirow.EVENT_CHANGE);
	}

	@Listen(OpalMultirowRow.EVENT_ADD_ROW_CLICK)
	_onRowAddRowClick() {
		this._newRows.add({ key: nextUID() });

		Cell.release();

		let focusable = this.$<{ focus: () => {} }>(
			'focus',
			this.$$<BaseComponent>('newRowSlot').slice(-1)[0]
		);

		if (focusable) {
			focusable.focus();
		}

		this.emit(OpalMultirow.EVENT_ADD_ROW);
		this.emit(OpalMultirow.EVENT_CHANGE);
	}
}
