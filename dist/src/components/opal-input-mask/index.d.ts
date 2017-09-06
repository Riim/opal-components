import { Component } from 'rionite';
import { OpalInputMaskDefinition } from './opal-input-mask-definition';
export declare class OpalInputMask extends Component {
    static OpalInputMaskDefinition: typeof OpalInputMaskDefinition;
    static defaultDefinitions: {
        [chr: string]: RegExp;
    };
    _definitions: {
        [chr: string]: RegExp;
    };
    readonly _mask: Array<string>;
    readonly _partialIndex: number;
    readonly _tests: Array<RegExp | null>;
    readonly _firstTestIndex: number;
    _buffer: Array<string | null>;
    _textField: HTMLInputElement;
    _textOnFocus: string;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onMaskChange(): void;
    _onTextFieldFocus(): void;
    _onTextFieldBlur(): void;
    _onTextFieldKeyDown(evt: KeyboardEvent): void;
    _onTextFieldKeyPress(evt: KeyboardEvent): void;
    _onTextFieldInput(): void;
    _initBuffer(): void;
    _checkValue(allowNotCompleted: boolean): number;
    _shiftLeft(start: number, end: number): void;
    _shiftRight(index: number): void;
    _nextTestIndex(index: number): number;
    _prevTestIndex(index: number): number;
    _writeBuffer(): void;
    _clearBuffer(start: number, end: number): void;
    _setTextFieldSelection(start: number, end?: number): void;
}
export { OpalInputMaskDefinition };