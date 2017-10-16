import { ComponentConfig } from 'rionite';
import { OpalInputValidatorRule } from '../../opal-input-validator';

@ComponentConfig({
	elementIs: 'opal-text-input-validator-rule',

	input: {
		minLength: { type: Number, readonly: true }
	}
})
export class OpalTextInputValidatorRule extends OpalInputValidatorRule {
}
