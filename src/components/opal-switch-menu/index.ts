import './index.css';

import { IEvent } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalButton from '../opal-button';

let forEach = Array.prototype.forEach;
let find = (Array.prototype as any).find;

@d.Component<OpalSwitchMenu>({
	elementIs: 'opal-switch-menu',
	template: '<rt-content class="opal-switch-menu__content"></rt-content>',

	events: {
		':component': {
			check(evt: IEvent) {
				let checkedButton = evt.target as OpalButton;

				forEach.call(this.buttons, (btn: IComponentElement) => {
					if (btn.$c != checkedButton) {
						(btn.$c as OpalButton).uncheck();
					}
				});

				this._checkedButton = checkedButton;

				this.emit('change');
			},

			uncheck(evt: IEvent) {
				(evt.target as OpalButton).check();
			}
		}
	}
})
export default class OpalSwitchMenu extends Component {
	buttons: NodeListOf<HTMLElement>;
	_checkedButton: OpalButton | null;

	get checkedButton(): OpalButton | null {
		if (this._checkedButton !== undefined) {
			return this._checkedButton;
		}

		return (this._checkedButton = find.call(
			this.buttons,
			(button: IComponentElement) => (button.$c as OpalButton).checked) || null
		);
	}

	ready() {
		this.buttons = this.element.getElementsByClassName('opal-button') as NodeListOf<HTMLElement>;
	}

	clear() {
		let checkedButton = this._checkedButton;

		if (checkedButton) {
			checkedButton.uncheck();
			this._checkedButton = null;
		}
	}
}
