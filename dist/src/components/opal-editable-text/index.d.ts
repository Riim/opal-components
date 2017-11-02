import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalEditableText extends Component {
    _textNode: Text;
    _value: string | null;
    value: string | null;
    _fixedValue: string | null;
    _documentKeyDownListening: IDisposableListening;
    ready(): void;
    elementAttached(): void;
    _onElementClick(evt: Event): void;
    _onContentSlotElementFocus(): void;
    _onContentSlotElementBlur(): void;
    _onContentSlotElementInput(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    focus(selectAll?: boolean): void;
}
