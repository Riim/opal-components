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
		template: require('./index.html'),

		assets: {
			htmlCode: {},
			jsCode: {},
			exampleHtml: {},
			exampleJs: {}
		}
	},

	ready() {
		let assets = this.assets;

		assets.htmlCode.innerHTML = Prism.highlight(
			prepareCode(assets.exampleHtml.innerHTML, true),
			Prism.languages.html
		);

		if (assets.exampleJs) {
			assets.jsCode.innerHTML = Prism.highlight(
				prepareCode(assets.exampleJs.textContent),
				Prism.languages.javascript
			) || '';
		}
	}
});
