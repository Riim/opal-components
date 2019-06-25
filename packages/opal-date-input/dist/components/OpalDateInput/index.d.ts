import { OpalTextInput } from '@riim/opal-text-input';
import { IEvent } from 'cellx';
import { dateExists } from 'date-exists';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalDateInput extends BaseComponent {
    fromDate: string;
    toDate: string;
    paramValue: string;
    placeholder: string;
    mask: string;
    required: boolean;
    popoverPosition: string;
    dateExists: typeof dateExists;
    _isDateInRange(date: string): boolean;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _documentClickListening: IDisposableListening;
    elementAttached(): void;
    _onTextInputChange(evt: IEvent<OpalTextInput>): void;
    _onTextInputElementClick(): void;
    _onCalendarMenuOpenedChange(evt: IEvent): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    readonly value: Date | null;
    getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null;
    validate(): boolean;
}
