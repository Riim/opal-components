import './index.css';
import { IDisposableListening, Component } from 'rionite';
import dateExists from 'date-exists';
export default class OpalDateInput extends Component {
    dateExists: typeof dateExists;
    dateInRange(date: string): boolean;
    _documentFocusInListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _documentClickListening: IDisposableListening;
    elementAttached(): void;
    _onTextInputClick(): void;
    _onDocumentFocusIn(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    readonly value: Date | null;
    getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null;
}
