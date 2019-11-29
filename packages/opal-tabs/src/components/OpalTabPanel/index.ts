import { Cell, IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalTabPanel',
	template
})
export class OpalTabPanel extends BaseComponent {
	@Param({ default: false })
	declare shown: boolean;

	@Observable
	contentRendered = false;

	initialize() {
		this.listenTo(this, 'change:shown', this._onShownChange);
	}

	_onShownChange(evt: IEvent) {
		if (evt.data.value) {
			this.renderContent();
		}
	}

	renderContent() {
		if (!this.contentRendered) {
			this.contentRendered = true;
			Cell.release();
		}
	}
}
