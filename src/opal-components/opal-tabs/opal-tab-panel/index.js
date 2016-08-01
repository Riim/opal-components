require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-tab-panel', {
	Static: {
		props: {
			shown: false
		},

		template: '<rt-content class="opal-tab-panel__content"></rt-content>'
	}
});
