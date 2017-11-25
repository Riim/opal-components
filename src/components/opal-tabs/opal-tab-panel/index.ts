import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import { Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalTabPanel',
	template
})
export class OpalTabPanel extends Component {
	@Param paramShown = false;

	@Observable isContentRendered = false;

	initialize() {
		this.listenTo(this, 'change:paramShown', this._onParamShownChange);
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
