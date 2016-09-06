require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-input-mask-definition', {
	Static: {
		props: {
			maskChar: { type: String, required: true, readonly: true },
			regex: { type: Object, required: true, readonly: true }
		}
	}
});
