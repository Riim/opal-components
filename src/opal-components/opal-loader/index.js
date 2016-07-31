require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-loader', {
	Static: {
		props: {
			size: 'm',
			shown: false
		}
	}
});
