import './index.css';
import { Component } from 'rionite';
export default class OpalSelectOption extends Component {
    _tabIndex: number;
    initialize(): void;
    click(): OpalSelectOption;
    value: string;
    text: string;
    selected: boolean;
    disabled: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSelectOption;
    blur(): OpalSelectOption;
    enable(): OpalSelectOption;
    disable(): OpalSelectOption;
}
