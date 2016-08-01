require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-group', {
	Static: {
		template: '<rt-content class="opal-group__content"></rt-content>'
	}
});
