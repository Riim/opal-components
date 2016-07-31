require('./opal-tab');
require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-tab-list', {
	Static: {
		template: '<rt-content class="opal-tab-list__content"/>'
	}
});
