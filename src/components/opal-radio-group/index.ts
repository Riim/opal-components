import { IEvent } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalRadioButton from './opal-radio-button';

export { default as OpalRadioButton } from './opal-radio-button';

let forEach = Array.prototype.forEach;

@d.Component<OpalRadioGroup>({
	elementIs: 'opal-radio-group',

	events: {
		':component': {
			'<opal-radio-button>check'(evt: IEvent) {
				let checkedButton = evt.target;

				forEach.call(this.buttonElements, (btnEl: IComponentElement) => {
					if (btnEl.$component != checkedButton) {
						(btnEl.$component as OpalRadioButton).uncheck();
					}
				});
			},

			'<opal-radio-button>uncheck'(evt: IEvent) {
				(evt.target as OpalRadioButton).check();
			}
		}
	}
})
export default class OpalRadioGroup extends Component {
	static OpalRadioButton = OpalRadioButton;

	buttonElements: NodeListOf<IComponentElement>;

	ready() {
		this.buttonElements = this.element.getElementsByClassName('opal-radio-button') as NodeListOf<IComponentElement>;
	}
}
