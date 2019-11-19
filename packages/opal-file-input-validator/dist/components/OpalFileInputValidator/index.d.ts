import { OpalFileInput } from '@riim/opal-file-input';
import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalFileInputValidatorRule } from '../OpalFileInputValidatorRule';
import './index.css';
export { OpalFileInputValidatorRule };
export declare class OpalFileInputValidator extends OpalInputValidator {
    static targetChangeEvents: symbol[];
    fileInput: OpalFileInput;
    ready(): void;
    _checkValue(rule: OpalFileInputValidatorRule): boolean;
}
