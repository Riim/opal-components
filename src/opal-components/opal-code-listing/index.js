require('./index.css');
require('./light.css');

let { Component } = require('rionite');
let Prism = require('prismjs');

function prepareCode(code, html) {
	code = code.replace(/^\t+$/gm, '').replace(/^[\r\n]+|[\r\n]+$/g, '');

	let tabs = code.match(/^\t*[^\t\r\n]/gm);
	let stripTabCount = tabs.slice(1).reduce(
		(stripTabCount, tabs) => Math.min(stripTabCount, tabs.length),
		tabs[0].length
	) - 1;

	if (stripTabCount) {
		code = code.replace(RegExp(`^\\t{${ stripTabCount }}(.)`, 'gm'), '$1');
	}

	if (html) {
		code = code.replace(/(\s[\-\w]+)=""(?=[^<]*>)/g, '$1');
	}

	return code;
}

module.exports = Component.extend('opal-code-listing', {
	Static: {
		template: require('./index.html')
	},

	initialize() {
		this.highlightedHTMLCode = Prism.highlight(
			prepareCode(this.$('example-html').innerHTML, true),
			Prism.languages.html
		);

		let exampleJS = this.$('example-js');

		if (exampleJS) {
			this.highlightedJSCode = Prism.highlight(
				prepareCode(exampleJS.textContent),
				Prism.languages.javascript
			);
		}
	},

	ready() {
		this.$('html-code').innerHTML = this.highlightedHTMLCode;
		this.$('js-code').innerHTML = this.highlightedJSCode || '';
	}
});
