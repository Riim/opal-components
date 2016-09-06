require('./index.css');

let { Template, Component } = require('rionite');

module.exports = Component.extend('opal-filtered-list', {
	Static: {
		template: new Template(require('./index.html')),

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
