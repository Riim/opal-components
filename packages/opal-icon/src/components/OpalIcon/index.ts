import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component()
export class OpalIcon extends BaseComponent {
	@Param({ required: true, readonly: true })
	paramName: string;
	@Param paramSize = 'm';
	@Param({ readonly: true })
	paramStrokeWidth = 3;
	@Param paramFilled = false;

	ready() {
		let name = this.paramName;

		this.element.innerHTML = `<svg class="OpalIcon__svg" stroke-width="${
			this.paramStrokeWidth
		}px"><use xlink:href="#OpalIcon__icon${name.charAt(0).toUpperCase() +
			name.slice(1)}"/></svg>`;
	}
}
