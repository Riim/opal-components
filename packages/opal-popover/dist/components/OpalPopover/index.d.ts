import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalPopover extends BaseComponent {
    position: 'top' | 'top-left' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom';
    positionOffset: number;
    autoDirection: boolean;
    closeOn: string;
    opened: boolean;
    contentRendered: boolean;
    _positionAtOpening: string;
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
