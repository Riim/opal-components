import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTab extends BaseComponent {
    label: string;
    selected: boolean;
    tabIndex: number;
    focused: boolean;
    hidden: boolean;
    disabled: boolean;
    readonly _tabIndex: number;
    elementAttached(): void;
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
