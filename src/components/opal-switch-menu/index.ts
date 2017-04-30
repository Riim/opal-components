import './index.css';

import { IEvent } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalButton from '../opal-button';

let forEach = Array.prototype.forEach;
let find = (Array.prototype as any).find;

@d.Component<OpalSwitchMenu>({
	elementIs: 'opal-switch-menu',
	bemlTemplate: '@section/inner { rt-content/content (cloning=no) }',

	events: {
		':component': {
			'<opal-button>check'(evt: IEvent) {
				let checkedButton = evt.target as OpalButton;

				forEach.call(this.buttonElements, (btnEl: IComponentElement) => {
					if (btnEl.$component != checkedButton) {
						(btnEl.$component as OpalButton).uncheck();
					}
				});

				this._checkedButton = checkedButton;

				this.emit('change');
			},

			'<opal-button>uncheck'(evt: IEvent) {
				(evt.target as OpalButton).check();
			}
		}
	}
})
export default class OpalSwitchMenu extends Component {
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

	clear() {
		let checkedButton = this._checkedButton;

		if (checkedButton) {
			checkedButton.uncheck();
			this._checkedButton = null;
		}
	}
}
