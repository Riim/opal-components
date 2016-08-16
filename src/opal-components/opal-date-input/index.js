require('./index.css');

let { Component, template } = require('rionite');

module.exports = Component.extend('opal-date-input', {
	Static: {
		props: {
			popoverTo: 'right'
		},

		template: template(require('./index.html')),

		assets: {
			input: {
				'on-focusin'() {
					if (!this._documentMouseUpListening) {
						this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
					}
				}
			},

			calendarMenu: {},
			calendar: {}
		}
	},

	_onDocumentMouseUp() {
		this._documentMouseUpListening.stop();
		this._documentMouseUpListening = null;

		if (this.assets.input.assets.input == document.activeElement) {
			this.assets.calendarMenu.open();
		}
	},

	_isExistDate(date) {
		date = date.split('/');

		let day = parseInt(date[0], 10);
		let month = parseInt(date[1], 10) - 1;
		let year = parseInt(date[2], 10);

		date = new Date(year, month, day);

		return day == date.getDate() && month == date.getMonth() && year == date.getFullYear();
	}
});
