import { IEvent } from 'cellx';
import { BaseComponent, Component, IComponentElement } from 'rionite';
import { OpalRadioButton } from '../OpalRadioButton';

export { OpalRadioButton };

const forEach = Array.prototype.forEach;

@Component({
	elementIs: 'OpalRadioGroup'
})
export class OpalRadioGroup extends BaseComponent {
	buttonElements: HTMLCollectionOf<IComponentElement>;

	ready() {
		this.buttonElements = this.element.getElementsByClassName('OpalRadioButton') as any;
	}

	elementAttached() {
		this.listenTo(this, {
			[OpalRadioButton.EVENT_CHECK]: this._onButtonCheck,
			[OpalRadioButton.EVENT_UNCHECK]: this._onButtonUncheck
		});
	}

	_onButtonCheck(evt: IEvent) {
		let checkedButton = evt.target;

		forEach.call(this.buttonElements, (btnEl: IComponentElement<OpalRadioButton>) => {
			if (btnEl.$component != checkedButton) {
				btnEl.$component!.uncheck();
			}
		});
	}

	_onButtonUncheck(evt: IEvent<OpalRadioButton>) {
		evt.target.check();
	}
}
