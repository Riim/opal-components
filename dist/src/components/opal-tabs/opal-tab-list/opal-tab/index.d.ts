import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalTab extends Component {
    paramLabel: string;
    paramSelected: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    readonly _tabIndex: number;
    elementAttached(): void;
    ready(): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
    _onControlClick(evt: Event): void;
    click(): this;
    selected: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
