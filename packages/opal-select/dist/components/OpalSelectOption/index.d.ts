import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalSelectOption extends BaseComponent {
    static EVENT_CHANGE: symbol;
    static EVENT_DESELECT: symbol;
    static EVENT_SELECT: symbol;
    paramValue: string;
    paramText: string;
    paramSubtext: string;
    selected: boolean;
    indeterminate: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    get _tabIndex(): number;
    _mouseUpEvent: boolean;
    ready(): void;
    _onSelectedChange(evt: IEvent): void;
    _onIndeterminateChange(evt: IEvent): void;
    _onControlFocus(): void;
    _onControlBlur(): void;
    _onControlMouseUp(): void;
    _onControlClick(evt: Event): void;
    click(): this;
    get value(): string;
    set value(value: string);
    get text(): string;
    set text(text: string);
    get subtext(): string | null;
    set subtext(subtext: string | null);
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
