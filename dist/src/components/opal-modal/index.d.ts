import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalModal extends Component {
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
