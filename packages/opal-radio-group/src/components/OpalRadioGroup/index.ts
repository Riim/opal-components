import { IEvent } from 'cellx';
import { BaseComponent, Component, IComponentElement } from 'rionite';
import { OpalRadioButton } from '../OpalRadioButton';

export { OpalRadioButton };

let forEach = Array.prototype.forEach;

@Component()
export class OpalRadioGroup extends BaseComponent {
	buttonElements: NodeListOf<IComponentElement>;

	ready() {
		this.buttonElements = this.element.getElementsByClassName('OpalRadioButton') as NodeListOf<
			IComponentElement
		>;
	}

	elementAttached() {
		this.listenTo(this, {
			'<OpalRadioButton>check': this._onCheck,
			'<OpalRadioButton>uncheck': this._onUncheck
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
