import { IEvent } from 'cellx';
import { dateExists } from 'date-exists';
import { Component, IDisposableListening } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
export declare class OpalDateInput extends Component {
    dateExists: typeof dateExists;
    isDateInRange(date: string): boolean;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _documentClickListening: IDisposableListening;
    elementAttached(): void;
    _onTextInputChange(evt: IEvent<OpalTextInput>): void;
    _onTextInputElementClick(): void;
    _onCalendarMenuParamOpenedChange(evt: IEvent): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    readonly value: Date | null;
    getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null;
    validate(): boolean;
}
