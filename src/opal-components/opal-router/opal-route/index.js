let { Component } = require('rionite');

module.exports = Component.extend('opal-route', {
	Static: {
		props: {
			path: { type: String, required: true, readonly: true },
			component: { type: String, required: true, readonly: true }
		}
	}
});
