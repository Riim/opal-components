import { nextUID } from '@riim/next-uid';
import { Cell, IEvent, ObservableList } from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalMultirowRow } from './opal-multirow-row';
import template from './template.nelm';

export { OpalMultirowRow };

let filter = Array.prototype.filter;

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
		this._presetRowClassName =
			(this.constructor as typeof Component).elementIs + '__preset-row';
	}

	ready() {
		let presetRowClassName = this._presetRowClassName;
		let presetRowCount = (this._presetRowCount = filter.call(
			this.element.getElementsByClassName('opal-multirow-row'),
			(rowEl: IComponentElement): boolean => rowEl.classList.contains(presetRowClassName)
		).length);

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

		if (row.element.classList.contains(this._presetRowClassName)) {
			row.element.parentNode!.removeChild(row.element);
			this._presetRowCount--;
		} else {
			let key = row.parentComponent!.element.dataset.key;
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
