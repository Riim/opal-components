import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { IComponentElement, Component, d } from 'rionite';
import OpalMultirowRow from './opal-multirow-row';
import template = require('./index.beml');

let nextUID = Utils.nextUID;

let filter = Array.prototype.filter;

@d.Component<OpalMultirow>({
	elementIs: 'opal-multirow',

	template,

	events: {
		':component': {
			'<opal-multirow-row>remove-row-click'(evt: IEvent) {
				let row = evt.target as OpalMultirowRow;

				if (row.props.preset) {
					(this.$('preset-rows-container') as Component).element.removeChild(row.element);
					this._presetRowCount--;
				} else {
					this._newRows.remove(
						this._newRows.get((row.parentComponent as Component).element.dataset.key, 'key')
					);
				}

				setTimeout(() => {
					this.emit('remove-row');
					this.emit('change');
				}, 1);
			},

			'<opal-multirow-row>add-row-click'() {
				this._newRows.add({ key: nextUID() });

				setTimeout(() => {
					this.emit('add-row');
					this.emit('change');
				}, 1);
			}
		}
	}
})
export default class OpalMultirow extends Component {
	static OpalMultirowRow = OpalMultirowRow;

	_presetRowCount: number;
	_newRows: IndexedList<{ key: string }>;

	_notHavePresetRows: boolean;
	_notHaveNewRows: boolean;
	_notSingleRow: boolean;

	initialize() {
		define(this, {
			_presetRowCount: 0,
			_newRows: new IndexedList(undefined, { indexes: ['key'] }),

			_notHaveNewRows(this: OpalMultirow): boolean {
				return !this._newRows.length;
			},

			_notSingleRow(this: OpalMultirow): boolean {
				return this._presetRowCount + this._newRows.length != 1;
			}
		});
	}

	ready() {
		let presetRowCount = this._presetRowCount = filter.call(
			this.element.getElementsByClassName('opal-multirow-row'),
			(rowEl: IComponentElement): boolean => rowEl.$component.props.preset
		).length;

		if (!presetRowCount) {
			this._newRows.add({ key: nextUID() });
		}
	}
}
