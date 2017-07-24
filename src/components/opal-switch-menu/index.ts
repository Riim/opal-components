import { IEvent } from 'cellx';
import { Component, d, IComponentElement } from 'rionite';
import { OpalButton } from '../opal-button';
import './index.css';

let forEach = Array.prototype.forEach;
let find = Array.prototype.find;

@d.Component<OpalSwitchMenu>({
	elementIs: 'opal-switch-menu',
	template: '@section/inner { rt-content/content }'
})
export class OpalSwitchMenu extends Component {
	buttonElements: NodeListOf<HTMLElement>;

	_checkedButton: OpalButton | null;

	get checkedButton(): OpalButton | null {
		if (this._checkedButton !== undefined) {
			return this._checkedButton;
		}

		return (this._checkedButton = find.call(
			this.buttonElements,
			(btnEl: IComponentElement) => (btnEl.$component as OpalButton).checked) || null
		);
	}

	set checkedButton(checkedButton: OpalButton | null) {
		if (checkedButton === this._checkedButton) {
			return;
		}

		forEach.call(this.buttonElements, (btnEl: IComponentElement) => {
			let btn = btnEl.$component as OpalButton;

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
		this.buttonElements = this.element.getElementsByClassName('opal-button') as NodeListOf<HTMLElement>;
	}

	elementAttached() {
		this.listenTo(this, {
			'<opal-button>check': this._onButtonCheck,
			'<opal-button>uncheck': this._onButtonUncheck
		});
	}

	_onButtonCheck(evt: IEvent<OpalButton>) {
		let checkedButton = evt.target;

		forEach.call(this.buttonElements, (btnEl: IComponentElement) => {
			if (btnEl.$component != checkedButton) {
				(btnEl.$component as OpalButton).uncheck();
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
