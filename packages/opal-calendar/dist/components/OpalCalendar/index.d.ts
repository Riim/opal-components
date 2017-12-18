import { Cell } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import { formatDate } from './formatDate';
import './index.css';
import { parseDate } from './parseDate';
export { formatDate };
export { parseDate };
export interface IDay {
    date: string;
    value: number;
    weekDay: string;
    today: boolean;
    selected: boolean;
    notInCurrentMonth: boolean;
    disabled: boolean;
    tabIndex: number | null;
}
export declare type TWeekDays = Array<IDay>;
export declare type TDays = Array<TWeekDays>;
export declare class OpalCalendar extends BaseComponent {
    paramFromDate: string;
    paramToDate: string;
    paramValue: string;
    paramDateDelimiter: string;
    weekDays: Array<string>;
    weekDaysShort: Array<string>;
    readonly fromDate: Date;
    readonly toDate: Date;
    readonly fromYear: number;
    readonly toYear: number;
    readonly years: Array<number>;
    stringValueCell: Cell<string | null>;
    stringValue: string | null;
    readonly value: Date | null;
    shownYear: number;
    shownMonth: number;
    readonly isBtnPrevMonthDisabled: boolean;
    readonly isBtnNextMonthDisabled: boolean;
    days: TDays;
    _currentlyDateSelection: boolean;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    elementAttached(): void;
    _onDaysFocus(evt: Event): void;
    _onDaysBlur(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _click(dayEl: HTMLElement): void;
}