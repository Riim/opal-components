import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalTextInput } from '@riim/opal-text-input';
import { OpalTextInputValidatorRule } from '../OpalTextInputValidatorRule';
import './index.css';
export { OpalTextInputValidatorRule };
export declare class OpalTextInputValidator extends OpalInputValidator {
    static TARGET_CHANGE_EVENTS: symbol[];
    textInput: OpalTextInput;
    ready(): void;
    elementAttached(): void;
    _onTextInputInput(): void;
    _checkValue(rule: OpalTextInputValidatorRule): boolean;
}
