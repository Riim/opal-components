require('./index.css');

let { Component } = require('rionite');
let OpalTab = require('./opal-tab');

module.exports = Component.extend('opal-tab-list', {
	Static: {
		OpalTab,
		template: '<rt-content class="opal-tab-list__content"></rt-content>'
	}
});
