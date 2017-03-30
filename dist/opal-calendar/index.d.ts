import './index.css';
import '../../assets/icons/opal-components__icon-arrow-left.svg';
import { IDisposableListening, Component } from 'rionite';
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
export default class OpalCalendar extends Component {
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
    btnPrevMonthDisabled: boolean;
    btnNextMonthDisabled: boolean;
    days: TDays;
    _currentlyDateSelect: boolean;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    elementAttached(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDayClick(evt: MouseEvent): void;
    _click(dayEl: HTMLElement): void;
}
