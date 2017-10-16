import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
export { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';
export declare class OpalTextInputValidator extends OpalInputValidator {
    target: OpalTextInput;
    elementAttached(): void;
    _onTextInputInput(): void;
    _checkValue(rule: OpalInputValidatorRule): boolean;
}
