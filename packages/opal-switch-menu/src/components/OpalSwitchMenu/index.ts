import { OpalButton } from '@riim/opal-button';
import { IEvent } from 'cellx';
import {
	BaseComponent,
	Component,
	IComponentElement,
	Listen
	} from 'rionite';
import './index.css';
import template from './template.rnt';

const forEach = Array.prototype.forEach;
const find = Array.prototype.find;

@Component({
	elementIs: 'OpalSwitchMenu',
	template
})
export class OpalSwitchMenu extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');

	buttonElements: HTMLCollectionOf<IComponentElement>;

	_checkedButton: OpalButton | null;

	get checkedButton() {
		if (this._checkedButton !== undefined) {
			return this._checkedButton;
		}

		return (this._checkedButton =
			find.call(
				this.buttonElements,
				(btnEl: IComponentElement<OpalButton>) => btnEl.rioniteComponent.checked
			) || null);
	}
	set checkedButton(checkedButton: OpalButton | null) {
		if (checkedButton === this._checkedButton) {
			return;
		}

		forEach.call(this.buttonElements, (btnEl: IComponentElement<OpalButton>) => {
			let btn = btnEl.rioniteComponent;

			if (btn === checkedButton) {
				btn.check();
			} else {
				btn.uncheck();
			}
		});

		this._checkedButton = checkedButton;

		this.emit(OpalSwitchMenu.EVENT_CHANGE);
	}

	ready() {
		this.buttonElements = this.element.getElementsByClassName('OpalButton') as any;
	}

	@Listen(OpalButton.EVENT_CHECK)
	_onButtonCheck(evt: IEvent<OpalButton>) {
		let checkedButton = evt.target;

		forEach.call(this.buttonElements, (btnEl: IComponentElement<OpalButton>) => {
			if (btnEl.$component != checkedButton) {
				btnEl.$component!.uncheck();
			}
		});

		this._checkedButton = checkedButton;

		this.emit(OpalSwitchMenu.EVENT_CHANGE);
	}

	@Listen(OpalButton.EVENT_UNCHECK)
	_onButtonUncheck(evt: IEvent<OpalButton>) {
		evt.target.check();
	}

	clear() {
		let checkedButton = this._checkedButton;

		if (checkedButton) {
			checkedButton.uncheck();
			this._checkedButton = null;
		}
	}
}
