import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import { OpalRadioButton } from './opal-radio-button';

export { OpalRadioButton };

let forEach = Array.prototype.forEach;

@Component.Config<OpalRadioGroup>({
	elementIs: 'OpalRadioGroup'
})
export class OpalRadioGroup extends Component {
	buttonElements: NodeListOf<IComponentElement>;

	ready() {
		this.buttonElements = this.element.getElementsByClassName(
			'opal-radio-button'
		) as NodeListOf<IComponentElement>;
	}

	elementAttached() {
		this.listenTo(this, {
			'<opal-radio-button>check': this._onCheck,
			'<opal-radio-button>uncheck': this._onUncheck
		});
	}

	_onCheck(evt: IEvent) {
		let checkedButton = evt.target;

		forEach.call(this.buttonElements, (btnEl: IComponentElement<OpalRadioButton>) => {
			if (btnEl.$component != checkedButton) {
				btnEl.$component.uncheck();
			}
		});
	}

	_onUncheck(evt: IEvent<OpalRadioButton>) {
		evt.target.check();
	}
}
