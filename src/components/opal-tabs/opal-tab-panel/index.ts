import { IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component, d } from 'rionite';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-tab-panel',

	input: {
		shown: false
	},

	template
})
export class OpalTabPanel extends Component {
	@observable isContentRendered = false;

	initialize() {
		this.listenTo(this, 'input-shown-change', this._onInputShownChange);
	}

	_onInputShownChange(evt: IEvent) {
		if (evt.value) {
			this.isContentRendered = true;
		}
	}

	renderContent() {
		this.isContentRendered = true;
	}
}
