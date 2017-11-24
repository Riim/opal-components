import { OpalInputValidator } from '../opal-input-validator';
import { OpalSelect } from '../opal-select';
import './index.css';
import { OpalSelectValidatorRule } from './opal-select-validator-rule';
export { OpalSelectValidatorRule };
export declare class OpalSelectValidator extends OpalInputValidator {
    select: OpalSelect;
    ready(): void;
    _checkValue(rule: OpalSelectValidatorRule): boolean;
}
