import { ComponentConfig } from 'rionite';
import { OpalInputValidatorRule } from '../../opal-input-validator';

@ComponentConfig({
	elementIs: 'opal-select-validator-rule',

	input: {
		minCount: { type: Number, readonly: true }
	}
})
export class OpalSelectValidatorRule extends OpalInputValidatorRule {}
