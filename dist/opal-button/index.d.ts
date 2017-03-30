import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalButton extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening | undefined;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    propertyChanged(name: string, value: any): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    click(): OpalButton;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalButton;
    blur(): OpalButton;
    enable(): OpalButton;
    disable(): OpalButton;
}
