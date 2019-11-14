import { OpalTextInput } from '@riim/opal-text-input';
import { BaseComponent, Component } from 'rionite';
import template from './template.rnt';

@Component<OpalForm>({
	template,

	domEvents: {
		form: {
			submit(evt) {
				evt.preventDefault();

				if (this.validate()) {
					this.emit(OpalForm.EVENT_SUBMIT);
				}
			}
		}
	}
})
export class OpalForm extends BaseComponent {
	static EVENT_SUBMIT = Symbol('submit');

	elementAttached() {
		let focusTarget = this.$<HTMLElement>('focus') || this.$<HTMLElement>('input');

		if (focusTarget) {
			focusTarget.focus();
			document.body.classList.remove('_noFocusHighlight');
		}
	}

	validate(): boolean {
		let valid = true;

		for (let input of this.$$<OpalTextInput | HTMLElement>('input')) {
			if (
				input instanceof HTMLElement
					? this.ownerComponent[input.dataset.validate!]()
					: input.element.dataset.validate
					? this.ownerComponent[input.element.dataset.validate]()
					: input.validate()
			) {
				continue;
			}

			if (valid) {
				input.focus();
			}

			valid = false;
		}

		return valid;
	}
}
