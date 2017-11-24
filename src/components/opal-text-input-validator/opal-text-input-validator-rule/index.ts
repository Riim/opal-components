import { Param } from 'rionite';
import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'OpalTextInputValidatorRule'
})
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {
	@Param({ readonly: true })
	paramMinLength: number;

	@Param({ type: eval, readonly: true })
	paramRegex: RegExp;
}
