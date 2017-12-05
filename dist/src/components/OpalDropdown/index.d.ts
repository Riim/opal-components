import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalDropdown extends BaseComponent {
    paramAutoHeight: boolean;
    paramAutoClosing: boolean;
    paramOpened: boolean;
    isContentRendered: boolean;
    _documentClickListening: IDisposableListening | undefined;
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
