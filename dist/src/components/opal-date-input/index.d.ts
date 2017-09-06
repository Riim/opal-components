import { IEvent } from 'cellx';
import { dateExists } from 'date-exists';
import { Component, IDisposableListening } from 'rionite';
import { OpalCalendar } from '../opal-calendar';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import '../../../node_modules/bytesize-icons/dist/icons/calendar.svg?id=opal-components__icon-calendar';
export declare class OpalDateInput extends Component {
    dateExists: typeof dateExists;
    isDateInRange(date: string): boolean;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _documentClickListening: IDisposableListening;
    elementAttached(): void;
    _onTextInputChange(evt: IEvent<OpalTextInput>): void;
    _onTextInputElementClick(): void;
    _onCalendarMenuInputOpenedChange(evt: IEvent): void;
    _onCalendarChange(evt: IEvent<OpalCalendar>): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    readonly value: Date | null;
    getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null;
    validate(): boolean;
}
