import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalSelectOption extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _click(): void;
    value: string;
    text: string;
    selected: boolean;
    disabled: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSelectOption;
    blur(): OpalSelectOption;
    enable(): OpalSelectOption;
    disable(): OpalSelectOption;
}
