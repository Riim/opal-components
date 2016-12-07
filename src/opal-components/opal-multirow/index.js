require('./index.css');

let { Utils: { nextUID }, cellx } = require('cellx');
let { IndexedList } = require('cellx-indexed-collections');
let { Component, ComponentTemplate } = require('rionite');
let OpalMultirowRow = require('./opal-multirow-row');

let filter = Array.prototype.filter;

module.exports = Component.extend('opal-multirow', {
	Static: {
		OpalMultirowRow,

		template: new ComponentTemplate(require('./index.html')),

		events: {
			':component': {
				'remove-row-click'({ target: row }) {
					if (row.props.preset) {
						this.$('preset-rows-container').element.removeChild(row.element);
						this._presetRowCount--;
					} else {
						this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
					}

					setTimeout(() => {
						this.emit('remove-row');
						this.emit('change');
					}, 1);
				},

				'add-row-click'() {
					this._newRows.add({ key: nextUID() });

					setTimeout(() => {
						this.emit('add-row');
						this.emit('change');
					}, 1);
				}
			}
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
		let presetRowCount = this._presetRowCount = filter.call(
			this.element.getElementsByClassName('opal-multirow-row'),
			rowEl => rowEl.$c.props.preset
		).length;

		if (!presetRowCount) {
			this._newRows.add({ key: nextUID() });
		}
	}
});
