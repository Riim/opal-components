import { OpalInputValidator } from '../OpalInputValidator';
import { OpalSelect } from '../OpalSelect';
import './index.css';
import { OpalSelectValidatorRule } from './OpalSelectValidatorRule';
export { OpalSelectValidatorRule };
export declare class OpalSelectValidator extends OpalInputValidator {
    select: OpalSelect;
    ready(): void;
    _checkValue(rule: OpalSelectValidatorRule): boolean;
}
