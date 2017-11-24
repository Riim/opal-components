import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalRadioButton extends Component {
    paramChecked: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    ready(): void;
    elementAttached(): void;
    _onParamCheckedChange(evt: IEvent): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onInputChange(evt: Event): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
    checked: boolean;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalRadioButton;
    blur(): OpalRadioButton;
    enable(): OpalRadioButton;
    disable(): OpalRadioButton;
}
