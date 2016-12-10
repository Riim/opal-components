import { IEvent } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalRadioButton from './opal-radio-button';

export { default as OpalRadioButton } from './opal-radio-button';

let forEach = Array.prototype.forEach;

@d.Component({
	elementIs: 'opal-radio-group',

	events: {
		':component': {
			check(this: OpalRadioGroup, evt: IEvent) {
				let checkedButton = evt.target;

				forEach.call(this.buttons, (btn: IComponentElement) => {
					if (btn.$c != checkedButton) {
						(btn.$c as OpalRadioButton).uncheck();
					}
				});
			},

			uncheck(evt: IEvent) {
				(evt.target as OpalRadioButton).check();
			}
		}
	}
})
export default class OpalRadioGroup extends Component {
	static OpalRadioButton = OpalRadioButton;

	buttons: NodeListOf<IComponentElement>;

	ready() {
		this.buttons = this.element.getElementsByClassName('opal-radio-button') as NodeListOf<IComponentElement>;
	}
}
