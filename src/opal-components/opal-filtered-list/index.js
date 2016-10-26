require('./index.css');

let { ComponentTemplate, Component } = require('rionite');

module.exports = Component.extend('opal-filtered-list', {
	Static: {
		template: new ComponentTemplate(require('./index.html')),

		events: {
			'query-input': {
				input(evt) {
					this.$('loaded-list').props.query = evt.target.value;
				}
			}
		}
	},

	focus() {
		this.$('query-input').focus();
	}
});
