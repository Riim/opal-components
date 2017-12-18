import { nextUID } from '@riim/next-uid';
import { Cell, IEvent, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component } from 'rionite';
import { OpalMultirowRow } from '../OpalMultirowRow';
import './index.css';
import template from './template.nelm';

export { OpalMultirowRow };

@Component({
	template
})
export class OpalMultirow extends BaseComponent {
	_presetRowClassName: string;

	@Observable _presetRowCount = 0;
	@Observable _newRows = new ObservableList<{ key: string }>();

	@Computed
	_notHaveNewRows(): boolean {
		return !this._newRows.length;
	}

	@Computed
	_notSingleRow(): boolean {
		return this._presetRowCount + this._newRows.length != 1;
	}

	initialize() {
		let elementBlockNames = (this.constructor as typeof BaseComponent)._elementBlockNames;
		this._presetRowClassName = elementBlockNames[elementBlockNames.length - 1] + '__preset-row';
	}

	ready() {
		let presetRowCount = (this._presetRowCount = this.$$('preset-row').length);

		if (!presetRowCount) {
			this._newRows.add({ key: nextUID() });
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'<OpalMultirowRow>remove-row-click': this._onRemoveRowClick,
			'<OpalMultirowRow>add-row-click': this._onAddRowClick
		});
	}

	_onRemoveRowClick(evt: IEvent<OpalMultirowRow>) {
		let rowEl = evt.target.element;

		if (rowEl.classList.contains(this._presetRowClassName)) {
			rowEl.parentNode!.removeChild(rowEl);
			this._presetRowCount--;
		} else {
			let key = evt.target.parentComponent!.element.dataset.key;
			this._newRows.removeAt(this._newRows.findIndex(row => row.key == key));
		}

		Cell.forceRelease();

		this.emit('remove-row');
		this.emit('change');
	}

	_onAddRowClick() {
		this._newRows.add({ key: nextUID() });

		Cell.forceRelease();

		this.emit('add-row');
		this.emit('change');
	}
}