import dateExists from 'date-exists';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalDateInput extends Component {
    dateExists: typeof dateExists;
    dateInRange(date: string): boolean;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _documentClickListening: IDisposableListening;
    elementAttached(): void;
    _onTextInputClick(): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    readonly value: Date | null;
    getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null;
    validate(): boolean;
}
