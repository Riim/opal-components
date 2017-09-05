import { nextUID } from '@riim/next-uid';
import { IEvent, ObservableList } from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component, d, IComponentElement } from 'rionite';
import './index.css';
import { OpalMultirowRow } from './opal-multirow-row';
import template = require('./template.nelm');

let filter = Array.prototype.filter;

@d.Component<OpalMultirow>({
	elementIs: 'opal-multirow',
	template
})
export class OpalMultirow extends Component {
	static OpalMultirowRow = OpalMultirowRow;

	@observable _presetRowCount = 0;
	@observable _newRows = new ObservableList<{ key: string }>();

	@computed _notHaveNewRows(): boolean {
		return !this._newRows.length;
	}

	@computed _notSingleRow(): boolean {
		return this._presetRowCount + this._newRows.length != 1;
	}

	ready() {
		let presetRowCount = this._presetRowCount = filter.call(
			this.element.getElementsByClassName('opal-multirow-row'),
			(rowEl: IComponentElement): boolean => rowEl.$component.input.preset
		).length;

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
		let row = evt.target;

		if (row.input.preset) {
			this.$<Component>('preset-rows-container')!.element.removeChild(row.element);
			this._presetRowCount--;
		} else {
			let	key = row.parentComponent!.element.dataset.key;
			this._newRows.removeAt(this._newRows.findIndex((row) => row.key == key));
		}

		setTimeout(() => {
			this.emit('remove-row');
			this.emit('change');
		}, 1);
	}

	_onAddRowClick() {
		this._newRows.add({ key: nextUID() });

		setTimeout(() => {
			this.emit('add-row');
			this.emit('change');
		}, 1);
	}
}

export { OpalMultirowRow };
