import { IEvent } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalRadioButton from './opal-radio-button';

let forEach = Array.prototype.forEach;

@d.Component<OpalRadioGroup>({
	elementIs: 'opal-radio-group'
})
export default class OpalRadioGroup extends Component {
	static OpalRadioButton = OpalRadioButton;

	buttonElements: NodeListOf<IComponentElement>;

	ready() {
		this.buttonElements = this.element.getElementsByClassName('opal-radio-button') as NodeListOf<IComponentElement>;
	}

	elementAttached() {
		this.listenTo(this, {
			'<opal-radio-button>check': this._onCheck,
			'<opal-radio-button>uncheck': this._onUncheck
		});
	}

	_onCheck(evt: IEvent) {
		let checkedButton = evt.target;

		forEach.call(this.buttonElements, (btnEl: IComponentElement) => {
			if (btnEl.$component != checkedButton) {
				(btnEl.$component as OpalRadioButton).uncheck();
			}
		});
	}

	_onUncheck(evt: IEvent) {
		(evt.target as OpalRadioButton).check();
	}
}

export { OpalRadioButton };
