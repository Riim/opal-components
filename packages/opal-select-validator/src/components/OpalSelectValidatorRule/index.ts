import { OpalInputValidatorRule } from '@riim/opal-input-validator';
import { Component, Param } from 'rionite';

@Component()
export class OpalSelectValidatorRule extends OpalInputValidatorRule {
	@Param({ readonly: true })
	paramMinCount: number;
}