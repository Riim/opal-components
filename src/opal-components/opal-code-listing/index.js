require('./index.css');
require('./duotone-darkpark.dark.css');

let { Component } = require('rionite');
let Prism = require('prismjs');

module.exports = Component.extend('opal-code-listing', {
	Static: {
		template: require('./index.html'),

		assets: {
			elCode: {
				selector: '&__code'
			}
		}
	},

	initialize() {
		let code = this.$('&__markup').innerHTML;
		let tabs = code.match(/^\t*[^\t\r\n]/gm);

		let stripTabCount = tabs.slice(1).reduce(
			(stripTabCount, tabs) => Math.min(stripTabCount, tabs.length),
			tabs[0].length
		) - 1;

		if (stripTabCount) {
			code = code.replace(RegExp(`^\\t{${ stripTabCount }}(.)`, 'gm'), '$1');
		}

		code = code.trim().replace(/(\s[\-\w]+)=""(?=[^<]*>)/g, '$1');

		this.highlightedCode = Prism.highlight(code, Prism.languages.html);
	},

	ready() {
		this.elCode.innerHTML = this.highlightedCode;
	}
});
