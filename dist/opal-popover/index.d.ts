import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalPopover extends Component {
    _documentClickListening: IDisposableListening;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    _onDocumentClick(evt: Event): void;
}