import { OpalInputValidatorRule } from '@riim/opal-input-validator';
import { Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalFileInputValidatorRule'
})
export class OpalFileInputValidatorRule extends OpalInputValidatorRule {
	@Param(Number)
	minCount: number | null;
}
