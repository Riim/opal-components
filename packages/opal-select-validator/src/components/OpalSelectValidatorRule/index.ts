import { OpalInputValidatorRule } from '@riim/opal-input-validator';
import { Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalSelectValidatorRule'
})
export class OpalSelectValidatorRule extends OpalInputValidatorRule {
	@Param
	paramMinCount: number;
}
