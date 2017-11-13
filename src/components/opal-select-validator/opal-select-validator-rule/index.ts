import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'opal-select-validator-rule',

	inputs: {
		minCount: { type: Number, readonly: true }
	}
})
export class OpalSelectValidatorRule extends OpalInputValidatorRule {}
