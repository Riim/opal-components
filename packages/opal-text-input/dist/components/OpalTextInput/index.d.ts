import { Cell, IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTextInput extends BaseComponent {
    paramInputType: string;
    paramSize: string;
    paramMultiline: boolean;
    paramRows: number;
    paramAutoHeight: boolean;
    paramInputName: string;
    paramValue: string;
    paramStoreKey: string;
    paramPlaceholder: string;
    paramClearable: boolean;
    paramLoading: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    textField: HTMLInputElement;
    _textFieldValueCell: Cell<string>;
    _textFieldValue: string;
    value: string | null;
    _prevValue: string | null;
    readonly isFinalIconShown: boolean;
    readonly isBtnClearShown: boolean;
    _initialHeight: number;
    ready(): void;
    elementAttached(): void;
    _onParamValueChange(evt: IEvent): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onTextFieldFocus(evt: Event): void;
    _onTextFieldBlur(): void;
    _onTextFieldInput(evt: Event): void;
    _onTextFieldChange(evt: Event): void;
    _onTextFieldKeyDown(evt: Event): void;
    _onTextFieldKeyPress(evt: KeyboardEvent): void;
    _onTextFieldKeyUp(evt: Event): void;
    _fixHeight(): void;
    clear(): this;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
