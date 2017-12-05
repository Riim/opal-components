import { Component, Param } from 'rionite';
import { OpalInputValidatorRule } from '../../OpalInputValidator';

@Component()
export class OpalSelectValidatorRule extends OpalInputValidatorRule {
	@Param({ readonly: true })
	paramMinCount: number;
}
