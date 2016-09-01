require('./index.css');

let { Component, template } = require('rionite');

module.exports = Component.extend('opal-filtered-list', {
	Static: {
		template: template(require('./index.html')),

		assets: {
			queryInput: {
				'on-input'(evt) {
					this.assets.loadedList.props.query = evt.target.value;
				}
			},

			loadedList: {}
		}
	},

	focus() {
		this.assets.queryInput.focus();
	}
});
