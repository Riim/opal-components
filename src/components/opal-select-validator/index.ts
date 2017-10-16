import { computed, observable } from 'cellx-decorators';
import { Component, ComponentConfig, IComponentElement } from 'rionite';
import { OpalSelect } from '../opal-select';
import './index.css';
import { OpalSelectValidatorRule } from './opal-select-validator-rule';

export { OpalSelectValidatorRule };

let map = Array.prototype.map;

@ComponentConfig<OpalSelectValidator>({
	elementIs: 'opal-select-validator',
	template: '@section/inner { rt-content/content }'
})
export class OpalSelectValidator extends Component {
	static OpalSelectValidatorRule = OpalSelectValidatorRule;

	@observable failedRule: OpalSelectValidatorRule | null = null;

	@computed get valid(): boolean {
		return !this.failedRule;
	}

	_rules: Array<OpalSelectValidatorRule>;

	ready() {
		this._rules = map.call(
			this.element.getElementsByClassName('opal-select-validator-rule'),
			(ruleEl: IComponentElement) => ruleEl.$component
		);
	}

	elementAttached() {
		this.listenTo('select', 'change', this._onSelectChange);
	}

	_onSelectChange() {
		this.validate();
	}

	validate(): boolean {
		return this._validate(this._rules);
	}

	_validate(rules: Array<OpalSelectValidatorRule>): boolean {
		let vm = this.$<OpalSelect>('select')!.viewModel;
		let failedRule: OpalSelectValidatorRule | undefined;

		rules.forEach((rule) => {
			let ruleInput = rule.input;

			if (!failedRule && (
				vm.length ?
					ruleInput.minCount && vm.length < ruleInput.minCount ||
						ruleInput.test && !ruleInput.test.call(this.ownerComponent, vm) :
					ruleInput.required
			)) {
				failedRule = rule;
				rule.showMessage();
			} else {
				rule.hideMessage();
			}
		});

		let prevFailedRule = this.failedRule;

		this.failedRule = failedRule || null;

		if (+!!failedRule ^ +!!prevFailedRule) {
			if (failedRule) {
				this.element.setAttribute('valid', 'no');
				this.emit('select-validation-error');
			} else {
				this.element.removeAttribute('valid');
				this.emit('select-validation-valid');
			}
		}

		return !failedRule;
	}
}
