import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalEditableText extends BaseComponent {
    static EVENT_CHANGE: symbol;
    static EVENT_INPUT: symbol;
    _textNode: Text;
    _value: string | null;
    get value(): string | null;
    set value(value: string | null);
    _fixedValue: string | null;
    _documentKeyDownListening: IDisposableListening;
    ready(): void;
    _onElementClick(evt: Event): void;
    _onContentSlotElementFocus(): void;
    _onContentSlotElementBlur(): void;
    _onContentSlotElementInput(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    focus(selectAll?: boolean): void;
}
