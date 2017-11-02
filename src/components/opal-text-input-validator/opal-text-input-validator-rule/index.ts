import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'opal-text-input-validator-rule',

	input: {
		minLength: { type: Number, readonly: true },
		regex: { type: eval, readonly: true }
	}
})
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {}
