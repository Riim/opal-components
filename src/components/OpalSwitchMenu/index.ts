import { IEvent } from 'cellx';
import { BaseComponent, Component, IComponentElement } from 'rionite';
import { OpalButton } from '../OpalButton';
import './index.css';
import template from './template.nelm';

let forEach = Array.prototype.forEach;
let find = Array.prototype.find;

@Component({
	template
})
export class OpalSwitchMenu extends BaseComponent {
	buttonElements: NodeListOf<IComponentElement<OpalButton>>;

	_checkedButton: OpalButton | null;

	get checkedButton(): OpalButton | null {
		if (this._checkedButton !== undefined) {
			return this._checkedButton;
		}

		return (this._checkedButton =
			find.call(
				this.buttonElements,
				(btnEl: IComponentElement<OpalButton>) => btnEl.$component.checked
			) || null);
	}
	set checkedButton(checkedButton: OpalButton | null) {
		if (checkedButton === this._checkedButton) {
			return;
		}

		forEach.call(this.buttonElements, (btnEl: IComponentElement<OpalButton>) => {
			let btn = btnEl.$component;

			if (btn === checkedButton) {
				btn.check();
			} else {
				btn.uncheck();
			}
		});

		this._checkedButton = checkedButton;

		this.emit('change');
	}

	ready() {
		this.buttonElements = this.element.getElementsByClassName('OpalButton') as NodeListOf<
			IComponentElement<OpalButton>
		>;
	}

	elementAttached() {
		this.listenTo(this, {
			'<OpalButton>check': this._onButtonCheck,
			'<OpalButton>uncheck': this._onButtonUncheck
		});
	}

	_onButtonCheck(evt: IEvent<OpalButton>) {
		let checkedButton = evt.target;

		forEach.call(this.buttonElements, (btnEl: IComponentElement<OpalButton>) => {
			if (btnEl.$component != checkedButton) {
				btnEl.$component.uncheck();
			}
		});

		this._checkedButton = checkedButton;

		this.emit('change');
	}

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
