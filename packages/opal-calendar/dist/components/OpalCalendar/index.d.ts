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
export declare function getTodayDate(): Date;
export declare function fromDate(this: {
    paramFromDate: string | null;
    paramToDate: string | null;
}): Date;
export declare function toDate(this: {
    paramFromDate: string | null;
    paramToDate: string | null;
}): Date;
export declare class OpalCalendar extends BaseComponent {
    static EVENT_CHANGE: symbol;
    paramFromDate: string | null;
    paramToDate: string | null;
    paramValue: string | null;
    dateDelimiter: string;
    weekDays: Array<string>;
    weekDaysShort: Array<string>;
    fromDate: Date;
    toDate: Date;
    get fromYear(): number;
    get toYear(): number;
    get years(): number[];
    stringValueCell: Cell<string | null> | null;
    get stringValue(): string | null;
    set stringValue(value: string | null);
    get value(): Date | null;
    shownYear: number;
    shownMonth: number;
    get btnPrevMonthDisabled(): boolean;
    get btnNextMonthDisabled(): boolean;
    days: TDays;
    _currentlyDateSelection: boolean;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    _onDaysFocus(evt: Event): void;
    _onDaysBlur(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _click(dayEl: HTMLElement): void;
}
