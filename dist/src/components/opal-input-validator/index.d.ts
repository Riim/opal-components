import { Component } from 'rionite';
import './index.css';
import { OpalInputValidatorRule } from './opal-input-validator-rule';
export declare class OpalInputValidator extends Component {
    static OpalInputValidatorRule: typeof OpalInputValidatorRule;
    failedRule: OpalInputValidatorRule | null;
    readonly valid: boolean;
    _rules: Array<OpalInputValidatorRule>;
    ready(): void;
    elementAttached(): void;
    _onTextInputInput(): void;
    _onTextInputChange(): void;
    validate(): boolean;
    _validate(rules: Array<OpalInputValidatorRule>): boolean;
}
export { OpalInputValidatorRule };