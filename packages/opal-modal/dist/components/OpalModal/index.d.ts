import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalModal extends BaseComponent {
    static EVENT_CLOSE: symbol;
    opened: boolean;
    contentRendered: boolean;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onOpenedChange(evt: IEvent): void;
    _onElementClick(evt: Event): void;
    renderContent(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    focus(): this;
}
