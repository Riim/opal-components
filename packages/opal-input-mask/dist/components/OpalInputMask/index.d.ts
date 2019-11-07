import { OpalTextInput } from '@riim/opal-text-input';
import { BaseComponent } from 'rionite';
import { OpalInputMaskDefinition } from '../OpalInputMaskDefinition';
export { OpalInputMaskDefinition };
export declare class OpalInputMask extends BaseComponent {
    static EVENT_COMPLETE: symbol;
    static defaultDefinitions: Record<string, RegExp>;
    mask: string;
    _definitions: Record<string, RegExp>;
    get _mask(): Array<string>;
    get _partialIndex(): number;
    get _tests(): Array<RegExp | null>;
    get _firstTestIndex(): number;
    _buffer: Array<string | null>;
    textInput: OpalTextInput;
    textField: HTMLInputElement;
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
    _checkValue(allowNotCompleted: boolean, maskChanged: boolean): number;
    _shiftLeft(start: number, end: number): void;
    _shiftRight(index: number): void;
    _nextTestIndex(index: number): number;
    _prevTestIndex(index: number): number;
    _writeBuffer(): void;
    _clearBuffer(start: number, end: number): void;
    _setTextFieldSelection(start: number, end?: number): void;
}
