import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalSelect } from '@riim/opal-select';
import { OpalSelectValidatorRule } from '../OpalSelectValidatorRule';
import './index.css';
export { OpalSelectValidatorRule };
export declare class OpalSelectValidator extends OpalInputValidator {
    select: OpalSelect;
    ready(): void;
    _checkValue(rule: OpalSelectValidatorRule): boolean;
}
