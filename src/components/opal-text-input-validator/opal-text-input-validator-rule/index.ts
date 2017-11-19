import { OpalInputValidatorRule } from '../../opal-input-validator';

@OpalInputValidatorRule.Config({
	elementIs: 'OpalTextInputValidatorRule',

	params: {
		minLength: { type: Number, readonly: true },
		regex: { type: eval, readonly: true }
	}
})
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {}
