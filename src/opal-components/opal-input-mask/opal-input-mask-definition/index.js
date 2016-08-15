require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-input-mask-definition', {
	Static: {
		props: {
			maskChar: String,
			regex: Object
		}
	}
});
