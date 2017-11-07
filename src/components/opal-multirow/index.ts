import { nextUID } from '@riim/next-uid';
import { Cell, IEvent, ObservableList } from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import { OpalMultirowRow } from './opal-multirow-row';
import template from './template.nelm';

export { OpalMultirowRow };

@Component.Config<OpalMultirow>({
	elementIs: 'opal-multirow',
	template
})
export class OpalMultirow extends Component {
	_presetRowClassName: string;

	@observable _presetRowCount = 0;
	@observable _newRows = new ObservableList<{ key: string }>();

	@computed
	_notHaveNewRows(): boolean {
		return !this._newRows.length;
	}

	@computed
	_notSingleRow(): boolean {
		return this._presetRowCount + this._newRows.length != 1;
	}

	initialize() {
		let elementBlockNames = (this.constructor as typeof Component)._elementBlockNames;
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
			'<opal-multirow-row>remove-row-click': this._onRemoveRowClick,
			'<opal-multirow-row>add-row-click': this._onAddRowClick
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
