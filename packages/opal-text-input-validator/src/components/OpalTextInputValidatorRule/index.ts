import { OpalInputValidatorRule } from '@riim/opal-input-validator';
import { Component, Param } from 'rionite';

@Component()
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {
	@Param({ readonly: true })
	paramMinLength: number;
	@Param({ type: eval, readonly: true })
	paramRegex: RegExp;
}
