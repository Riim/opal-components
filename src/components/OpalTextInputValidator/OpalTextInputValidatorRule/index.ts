import { Component, Param } from 'rionite';
import { OpalInputValidatorRule } from '../../OpalInputValidator';

@Component()
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {
	@Param({ readonly: true })
	paramMinLength: number;
	@Param({ type: eval, readonly: true })
	paramRegex: RegExp;
}
