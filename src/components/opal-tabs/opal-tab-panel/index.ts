import { Cell, IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalTabPanel',

	params: {
		shown: false
	},

	template
})
export class OpalTabPanel extends Component {
	@observable isContentRendered = false;

	initialize() {
		this.listenTo(this, 'param-shown-change', this._onParamShownChange);
	}

	_onParamShownChange(evt: IEvent) {
		if (evt.data.value) {
			this.isContentRendered = true;
		}
	}

	renderContent() {
		this.isContentRendered = true;
		Cell.forceRelease();
	}
}
