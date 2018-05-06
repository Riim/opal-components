import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalButton extends BaseComponent {
    paramViewType: string;
    paramSize: string;
    paramCheckable: boolean;
    paramChecked: boolean;
    paramLoading: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening | undefined;
    ready(): void;
    elementAttached(): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onTabIndexChange(): void;
    _onElementFocus(evt: Event): void;
    _onElementBlur(): void;
    _onElementClick(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    click(): this;
    checked: boolean;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
