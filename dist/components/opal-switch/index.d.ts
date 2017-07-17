import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSwitch extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onInputCheckedChange(evt: IEvent): void;
    _onInputFocusedChange(evt: IEvent): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onInputChange(evt: Event): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSwitch;
    blur(): OpalSwitch;
    enable(): OpalSwitch;
    disable(): OpalSwitch;
}
