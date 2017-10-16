import { Component } from 'rionite';
import './index.css';
import { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';
export { OpalTextInputValidatorRule };
export declare class OpalTextInputValidator extends Component {
    static OpalTextInputValidatorRule: typeof OpalTextInputValidatorRule;
    failedRule: OpalTextInputValidatorRule | null;
    readonly valid: boolean;
    _rules: Array<OpalTextInputValidatorRule>;
    ready(): void;
    elementAttached(): void;
    _onTextInputInput(): void;
    _onTextInputChange(): void;
    validate(): boolean;
    _validate(rules: Array<OpalTextInputValidatorRule>): boolean;
}
