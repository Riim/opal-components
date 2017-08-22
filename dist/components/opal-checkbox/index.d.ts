import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalCheckbox extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    elementAttached(): void;
    ready(): void;
    _onInputCheckedChange(evt: IEvent): void;
    _onInputIndeterminateChange(evt: IEvent): void;
    _onInputFocusedChange(evt: IEvent): void;
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
