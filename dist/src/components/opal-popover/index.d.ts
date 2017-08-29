import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalPopover extends Component {
    _toOnOpen: string;
    _documentClickListening: IDisposableListening | null | undefined;
    ready(): void;
    elementAttached(): void;
    _onInputOpenedChange(evt: IEvent): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    _onDocumentClick(evt: Event): void;
}
