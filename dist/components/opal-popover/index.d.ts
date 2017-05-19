import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalPopover extends Component {
    _toValueAtOpen: string;
    _documentClickListening: IDisposableListening | undefined;
    ready(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    _onDocumentClick(evt: Event): void;
}
