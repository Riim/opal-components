import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTab extends BaseComponent {
    static EVENT_SELECT: symbol;
    static EVENT_DESELECT: symbol;
    label: string | null;
    selected: boolean;
    tabIndex: number;
    focused: boolean;
    hidden: boolean;
    disabled: boolean;
    get _tabIndex(): number;
    ready(): void;
    _onControlFocus(): void;
    _onControlBlur(): void;
    _onControlClick(evt: Event): void;
    click(): this;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
