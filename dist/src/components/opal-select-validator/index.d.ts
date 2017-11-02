import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalSelect } from '../opal-select';
import './index.css';
export { OpalSelectValidatorRule } from './opal-select-validator-rule';
export declare class OpalSelectValidator extends OpalInputValidator {
    select: OpalSelect;
    ready(): void;
    _checkValue(rule: OpalInputValidatorRule): boolean;
}
