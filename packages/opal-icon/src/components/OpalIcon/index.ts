import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component({
	template
})
export class OpalIcon extends BaseComponent {
	@Param({ required: true, readonly: true })
	paramName: string;
	@Param paramSize = 'm';
	@Param({ readonly: true })
	paramStrokeWidth = 3;
	@Param paramFilled = false;

	@Computed
	get xlinkHref() {
		let name = this.paramName;
		return '#OpalIcon__icon' + name.charAt(0).toUpperCase() + name.slice(1);
	}
}
