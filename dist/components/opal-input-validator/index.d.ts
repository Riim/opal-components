import './index.css';
import { Component } from 'rionite';
import OpalInputValidatorRule from './opal-input-validator-rule';
export default class OpalInputValidator extends Component {
    static OpalInputValidatorRule: typeof OpalInputValidatorRule;
    failedRule: OpalInputValidatorRule | null;
    valid: boolean;
    _rules: Array<OpalInputValidatorRule>;
    initialize(): void;
    ready(): void;
    validate(): boolean;
    _validate(rules: Array<OpalInputValidatorRule>): boolean;
}
export { OpalInputValidatorRule };
