require('./index.css');

let { ComponentTemplate, Component } = require('rionite');

module.exports = Component.extend('opal-filtered-list', {
	Static: {
		template: new ComponentTemplate(require('./index.html')),

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
