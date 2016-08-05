require('./index.css');

let { Component, Rionite } = require('rionite');

module.exports = Component.extend('opal-filtered-list', {
	Static: {
		template: Rionite.template(require('./index.html')),

		assets: {
			tfQuery: {
				'on-input'(evt) {
					this.assets.loadedList.props.query = evt.target.value;
				}
			},

			loadedList: {}
		}
	},

	focus() {
		this.assets.tfQuery.focus();
	}
});
