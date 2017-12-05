import { OpalInputValidator } from '../OpalInputValidator';
import { OpalTextInput } from '../OpalTextInput';
import './index.css';
import { OpalTextInputValidatorRule } from './OpalTextInputValidatorRule';
export { OpalTextInputValidatorRule };
export declare class OpalTextInputValidator extends OpalInputValidator {
    textInput: OpalTextInput;
    ready(): void;
    elementAttached(): void;
    _onTextInputInput(): void;
    _checkValue(rule: OpalTextInputValidatorRule): boolean;
}
