import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalModal extends BaseComponent {
    paramOpened: boolean;
    isContentRendered: boolean;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onParamOpenedChange(evt: IEvent): void;
    _onElementClick(evt: Event): void;
    renderContent(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    focus(): this;
}
