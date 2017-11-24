import { OpalInputValidator } from '../opal-input-validator';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';
export { OpalTextInputValidatorRule };
export declare class OpalTextInputValidator extends OpalInputValidator {
    textInput: OpalTextInput;
    ready(): void;
    elementAttached(): void;
    _onTextInputInput(): void;
    _checkValue(rule: OpalTextInputValidatorRule): boolean;
}
