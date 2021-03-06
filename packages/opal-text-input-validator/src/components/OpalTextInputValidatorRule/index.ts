import { OpalInputValidatorRule } from '@riim/opal-input-validator';
import { Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalTextInputValidatorRule'
})
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {
	@Param(Number)
	minLength: number | null;
	@Param(eval)
	regex: RegExp | null;
}
