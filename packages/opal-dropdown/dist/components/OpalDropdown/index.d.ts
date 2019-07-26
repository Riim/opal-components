import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalDropdown extends BaseComponent {
    static EVENT_CLOSE: symbol;
    autoHeight: boolean;
    closeOn: 'click' | 'mousedown' | string;
    opened: boolean;
    contentRendered: boolean;
    _closingEventListening: IDisposableListening | null | undefined;
    ready(): void;
    elementAttached(): void;
    _onOpenedChange(evt: IEvent): void;
    renderContent(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    _onClosingEvent(evt: Event): void;
}
