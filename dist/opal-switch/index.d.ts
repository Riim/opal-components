import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalSwitch extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSwitch;
    blur(): OpalSwitch;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    enable(): OpalSwitch;
    disable(): OpalSwitch;
}
