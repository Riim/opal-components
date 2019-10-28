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
		let focused = false;

		return this.$$<OpalTextInput>('input').reduce((valid, input) => {
			let inputValid = input.validate();

			if (!inputValid && !focused) {
				input.focus();
				focused = true;
			}

			return valid && inputValid;
		}, true);
	}
}
