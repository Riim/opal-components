import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template = require('./template.nelm');

@Component({
	elementIs: 'OpalTabPanel',
	template
})
export class OpalTabPanel extends BaseComponent {
	@Param
	paramShown = false;

	@Observable
	contentRendered = false;

	initialize() {
		this.listenTo(this, 'change:paramShown', this._onParamShownChange);
	}

	_onParamShownChange(evt: IEvent) {
		if (evt.data.value) {
			this.contentRendered = true;
		}
	}

	renderContent() {
		this.contentRendered = true;
		Cell.forceRelease();
	}
}
