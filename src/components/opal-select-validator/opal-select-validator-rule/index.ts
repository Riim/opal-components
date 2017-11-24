import { Param } from 'rionite';
import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'OpalSelectValidatorRule'
})
export class OpalSelectValidatorRule extends OpalInputValidatorRule {
	@Param({ readonly: true })
	paramMinCount: number;
}
