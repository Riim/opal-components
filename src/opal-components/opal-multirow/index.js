require('./index.css');

let { Utils: { nextUID }, cellx } = require('cellx');
let { IndexedList } = require('cellx-indexed-collections');
let { ComponentTemplate, Component } = require('rionite');
let OpalMultirowRow = require('./opal-multirow-row');

module.exports = Component.extend('opal-multirow', {
	Static: {
		OpalMultirowRow,

		template: new ComponentTemplate(require('./index.html')),

		assets: {
			':component': {
				'on-remove-row-click'({ target: row }) {
					if (row.props.preset) {
						this.assets.presetRowsContainer.element.removeChild(row.element);
						this._presetRowCount--;
					} else {
						this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
					}

					setTimeout(() => {
						this.emit('remove-row');
						this.emit('change');
					}, 1);
				},

				'on-add-row-click'() {
					this._newRows.add({ key: nextUID() });

					setTimeout(() => {
						this.emit('add-row');
						this.emit('change');
					}, 1);
				}
			},

			presetRowsContainer: {}
		}
	},

	initialize() {
		cellx.define(this, {
			_presetRowCount: 0,
			_newRows: new IndexedList(null, { indexes: ['key'] }),

			_notHavePresetRows() {
				return !this._presetRowCount;
			},

			_notHaveNewRows() {
				return !this._newRows.length;
			},

			_notSingleRow() {
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
