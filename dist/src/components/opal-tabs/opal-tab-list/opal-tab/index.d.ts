import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalTab extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _click(): void;
    selected: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalTab;
    blur(): OpalTab;
    enable(): OpalTab;
    disable(): OpalTab;
}
