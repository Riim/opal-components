require('./index.css');

let { Component, Rionite } = require('rionite');

module.exports = Component.extend('opal-filtered-list', {
	Static: {
		template: Rionite.template(require('./index.html')),

		assets: {
			tfQuery: {
				'on-input'(evt) {
					this.loadedList.props.query = evt.target.value;
				}
			},

			loadedList: {
				selector: '&__list'
			}
		}
	},

	focus() {
		this.tfQuery.focus();
	}
});
