import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'OpalSelectValidatorRule',

	params: {
		minCount: { type: Number, readonly: true }
	}
})
export class OpalSelectValidatorRule extends OpalInputValidatorRule {}
