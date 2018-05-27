import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalDropdown extends BaseComponent {
    paramAutoHeight: boolean;
    paramCloseOn: string;
    paramOpened: boolean;
    contentRendered: boolean;
    _closingEventListening: IDisposableListening | null | undefined;
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
    _onClosingEvent(evt: Event): void;
}
