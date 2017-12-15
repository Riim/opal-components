import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalPopover extends BaseComponent {
    paramPosition: string;
    paramPositionOffset: number;
    paramAutoDirection: boolean;
    paramAutoClosing: boolean;
    paramOpened: boolean;
    isContentRendered: boolean;
    _positionOnOpen: string;
    _documentClickListening: IDisposableListening | null | undefined;
    ready(): void;
    elementAttached(): void;
    _onParamOpenedChange(evt: IEvent): void;
    renderContent(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _open$(): void;
    _close(): void;
    _onDocumentClick(evt: Event): void;
}
