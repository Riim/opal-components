import { Component, IDisposableListening } from 'rionite';
import '../../assets/icons/opal-components__icon-arrow-left.svg';
import './index.css';
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
export declare class OpalCalendar extends Component {
    weekDays: Array<string>;
    weekDaysShort: Array<string>;
    fromDate: Date;
    toDate: Date;
    fromYear: number;
    toYear: number;
    years: Array<number>;
    value: Date | null;
    shownYear: number;
    shownMonth: number;
    isBtnPrevMonthDisabled: boolean;
    isBtnNextMonthDisabled: boolean;
    days: TDays;
    _currentlyDateSelection: boolean;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    elementAttached(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _click(dayEl: HTMLElement): void;
}
