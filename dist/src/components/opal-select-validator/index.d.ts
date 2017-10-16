import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalSelect } from '../opal-select';
export { OpalSelectValidatorRule } from './opal-select-validator-rule';
export declare class OpalSelectValidator extends OpalInputValidator {
    target: OpalSelect;
    _checkValue(rule: OpalInputValidatorRule): boolean;
}
