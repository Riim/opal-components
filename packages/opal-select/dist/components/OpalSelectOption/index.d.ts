import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalSelectOption extends BaseComponent {
    paramValue: string;
    paramText: string;
    paramSubtext: string;
    paramSelected: boolean;
    paramIndeterminate: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    readonly _tabIndex: number;
    _wasMouseDown: boolean;
    elementAttached(): void;
    ready(): void;
    _onParamSelectedChange(evt: IEvent): void;
    _onParamIndeterminateChange(evt: IEvent): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
    _onControlMouseDown(): void;
    _onControlMouseUp(): void;
    _onControlClick(evt: Event): void;
    click(): this;
    value: string;
    text: string;
    subtext: string | null;
    selected: boolean;
    disabled: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
