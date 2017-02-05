import './index.css';
import { Component } from 'rionite';
export default class OpalModal extends Component {
    ready(): void;
    elementDetached(): void;
    propertyChanged(name: string, value: any): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
}
