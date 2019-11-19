import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IComponentElement,
	Listen
	} from 'rionite';
import { OpalInputValidatorRule } from '../OpalInputValidatorRule';
import './index.css';
import template from './template.rnt';

export { OpalInputValidatorRule };

@Component({
	elementIs: 'OpalInputValidator',
	template
})
export class OpalInputValidator extends BaseComponent {
	static EVENT_INPUT_VALIDATION_ERROR = Symbol('input-validation-error');
	static EVENT_INPUT_VALIDATION_VALID = Symbol('input-validation-valid');

	static targetChangeEvents: Array<symbol>;

	target: BaseComponent;

	rules: Array<OpalInputValidatorRule>;

	@Observable
	failedRule: OpalInputValidatorRule | null = null;

	@Computed
	get valid(): boolean {
		return !this.failedRule;
	}

	ready() {
		this.rules = Array.prototype.map.call(
			this.element.getElementsByClassName('OpalInputValidatorRule'),
			(ruleEl: IComponentElement) => ruleEl.$component
		);
	}

	@Listen((ctor: typeof OpalInputValidator) => ctor.targetChangeEvents, '@target')
	_onTargetChange() {
		this.validate();
	}

	validate(): boolean {
		return this._validate(this.rules);
	}

	_validate(rules: Array<OpalInputValidatorRule>): boolean {
		let failedRule: OpalInputValidatorRule | undefined;

		rules.forEach(rule => {
			if (failedRule || this._checkValue(rule)) {
				rule.hideMessage();
			} else {
				failedRule = rule;
				rule.showMessage();
			}
		});

		let prevFailedRule = this.failedRule;

		this.failedRule = failedRule || null;

		if (+!!failedRule ^ +!!prevFailedRule) {
			if (failedRule) {
				this.target.element.setAttribute('valid', 'no');
				this.emit(OpalInputValidator.EVENT_INPUT_VALIDATION_ERROR);
			} else {
				this.target.element.removeAttribute('valid');
				this.emit(OpalInputValidator.EVENT_INPUT_VALIDATION_VALID);
			}
		}

		return !failedRule;
	}

	_checkValue(_rule: OpalInputValidatorRule): boolean {
		return false;
	}

	focusTarget(): this {
		(this.target as any).focus();
		return this;
	}
}
