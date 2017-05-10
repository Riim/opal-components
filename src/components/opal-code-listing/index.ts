import './index.css';
import './light.css';

import { Component, d } from 'rionite';
import Prism = require('prismjs');
import template = require('./index.beml');

function prepareCode(code: string, isHtml?: boolean) {
	code = code.replace(/^\t+$/gm, '').replace(/^[\r\n]+|[\r\n]+$/g, '');

	let tabs = code.match(/^\t*[^\t\r\n]/gm) as RegExpMatchArray;
	let stripTabCount = tabs.slice(1).reduce(
		(stripTabCount, tabs) => Math.min(stripTabCount, tabs.length),
		tabs[0].length
	) - 1;

	if (stripTabCount) {
		code = code.replace(RegExp(`^\\t{${ stripTabCount }}(.)`, 'gm'), '$1');
	}

	if (isHtml) {
		code = code.replace(/(\s[\-\w]+)=""(?=[^<]*>)/g, '$1');
	}

	return code;
}

@d.Component({
	elementIs: 'opal-code-listing',
	template
})
export default class OpalCodeListing extends Component {
	highlightedHTMLCode: string;
	highlightedJSCode: string | undefined;

	initialize() {
		this.highlightedHTMLCode = Prism.highlight(
			prepareCode((this.$('example-html') as HTMLElement).innerHTML, true),
			Prism.languages['html']
		);

		let exampleJS = this.$('example-js') as HTMLElement | null;

		if (exampleJS) {
			this.highlightedJSCode = Prism.highlight(
				prepareCode(exampleJS.textContent || ''),
				Prism.languages['javascript']
			);
		}
	}

	ready() {
		(this.$('html-code') as HTMLElement).innerHTML = this.highlightedHTMLCode;
		(this.$('js-code') as HTMLElement).innerHTML = this.highlightedJSCode || '';
	}
}
