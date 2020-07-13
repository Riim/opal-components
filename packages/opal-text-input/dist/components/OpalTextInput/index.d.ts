import { Cell, IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTextInput extends BaseComponent {
    static EVENT_BLUR: symbol;
    static EVENT_CHANGE: symbol;
    static EVENT_CLEAR: symbol;
    static EVENT_CONFIRM: symbol;
    static EVENT_FOCUS: symbol;
    static EVENT_INPUT: symbol;
    static EVENT_KEYDOWN: symbol;
    static EVENT_KEYPRESS: symbol;
    static EVENT_KEYUP: symbol;
    inputType: 'text' | 'password' | (string & {
        _?: never;
    });
    size: 'm' | (string & {
        _?: never;
    });
    multiline: boolean;
    rows: number;
    autoHeight: boolean;
    inputName: string | null;
    paramValue: string | null;
    storeKey: string | null;
    autocomplete: string | null;
    placeholder: string | null;
    startIcon: string | null;
    endIcon: string | null;
    clearable: boolean;
    loading: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    _inputTypeCell: Cell<string> | null;
    get _inputType(): "text" | "password" | (string & {
        _?: undefined;
    });
    textField: HTMLInputElement;
    get value(): string | null;
    set value(value: string | null);
    _prevValue: string | null;
    get btnClearShown(): boolean;
    get endIconShown(): boolean;
    validator: {
        validate(): boolean;
    } | null;
    connected(): void;
    _onRowsChange(): void;
    _onParamValueChange(evt: IEvent): void;
    _onTextFieldFocus(): void;
    _onTextFieldBlur(): void;
    _onTextFieldInput(evt: Event): void;
    _onTextFieldChange(evt: Event): void;
    _onTextFieldKeyDown(evt: Event): void;
    _onTextFieldKeyPress(evt: KeyboardEvent): void;
    _onTextFieldKeyUp(evt: Event): void;
    _fixMinHeight(): void;
    _fixHeight(): void;
    clear(): this;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
    validate(): boolean;
}
