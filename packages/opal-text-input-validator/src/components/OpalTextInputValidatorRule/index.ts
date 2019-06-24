import { OpalInputValidatorRule } from '@riim/opal-input-validator';
import { Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalTextInputValidatorRule'
})
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {
	@Param
	minLength: number;
	@Param({ type: eval })
	regex: RegExp;
}
