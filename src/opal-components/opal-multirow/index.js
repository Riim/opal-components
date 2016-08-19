require('./index.css');

let { utils: { nextUID }, cellx } = require('cellx');
let { IndexedList } = require('cellx-indexed-collections');
let { Component } = require('rionite');
let OpalMultirowRow = require('./opal-multirow-row');

module.exports = Component.extend('opal-multirow', {
	Static: {
		OpalMultirowRow,

		template: require('./index.html'),

		assets: {
			':component': {
				'on-remove-row-click'({ target: row }) {
					if (row.props.preset) {
						this.assets.presetRows.element.removeChild(row.element);
						this._presetRowCount--;
					} else {
						this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
					}
				},

				'on-add-row-click'() {
					this._newRows.add({ key: nextUID() });
				}
			},

			presetRows: {}
		}
	},

	initialize() {
		cellx.define(this, {
			_presetRowCount: 0,
			_newRows: new IndexedList(null, { indexes: ['key'] }),

			_noPresetRows() {
				return !this._presetRowCount;
			},

			_noNewRows() {
				return !this._newRows.length;
			},

			_notLastRow() {
				return this._presetRowCount + this._newRows.length != 1;
			}
		});
	},

	ready() {
		let presetRowCount = this._presetRowCount = this.$$('.opal-multirow-row')
			.filter(row => row.props.preset)
			.length;

		if (!presetRowCount) {
			this._newRows.add({ key: nextUID() });
		}
	}
});
