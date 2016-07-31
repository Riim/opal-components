let { Component } = require('rionite');

module.exports = Component.extend('opal-route', {
	Static: {
		props: {
			path: String,
			component: String
		}
	}
});
