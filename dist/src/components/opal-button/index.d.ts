import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalButton extends Component {
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening | undefined;
    ready(): void;
    elementAttached(): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onTabIndexChange(): void;
    _onElementFocus(evt: Event): void;
    _onElementBlur(): void;
    _onElementClick(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    click(): OpalButton;
    checked: boolean;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalButton;
    blur(): OpalButton;
    enable(): OpalButton;
    disable(): OpalButton;
}
