import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component({
	template
})
export class OpalTabPanel extends BaseComponent {
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