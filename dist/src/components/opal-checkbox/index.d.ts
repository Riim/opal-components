import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalCheckbox extends Component {
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    elementAttached(): void;
    ready(): void;
    _onParamCheckedChange(evt: IEvent): void;
    _onParamIndeterminateChange(evt: IEvent): void;
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
    focus(): OpalCheckbox;
    blur(): OpalCheckbox;
    enable(): OpalCheckbox;
    disable(): OpalCheckbox;
}
