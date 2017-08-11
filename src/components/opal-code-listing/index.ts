import { Component, d } from 'rionite';
import './index.css';
import './light.css';
import Prism = require('prismjs');
import template = require('./template.nelm');

function prepareCode(code: string, isHtml?: boolean) {
	code = code.replace(/^\t+$/gm, '').replace(/^[\r\n]+|[\r\n]+$/g, '');

	let tabs = code.match(/^\t*[^\t\r\n]/gm)!;
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
export class OpalCodeListing extends Component {
	highlightedHTMLCode: string;
	highlightedJSCode: string | undefined;

	initialize() {
		this.highlightedHTMLCode = Prism.highlight(
			prepareCode(this.$<HTMLElement>('example-html')!.innerHTML, true),
			Prism.languages['html']
		);

		let exampleJS = this.$<HTMLElement>('example-js');

		if (exampleJS) {
			this.highlightedJSCode = Prism.highlight(
				prepareCode(exampleJS.textContent || ''),
				Prism.languages['javascript']
			);
		}
	}

	ready() {
		this.$<HTMLElement>('html-code')!.innerHTML = this.highlightedHTMLCode;
		this.$<HTMLElement>('js-code')!.innerHTML = this.highlightedJSCode || '';
	}
}
