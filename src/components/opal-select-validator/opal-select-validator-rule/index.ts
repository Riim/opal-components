import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'opal-select-validator-rule',

	params: {
		minCount: { type: Number, readonly: true }
	}
})
export class OpalSelectValidatorRule extends OpalInputValidatorRule {}
