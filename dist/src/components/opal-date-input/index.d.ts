import './index.css';
import { IDisposableListening, Component } from 'rionite';
import dateExists from 'date-exists';
export default class OpalDateInput extends Component {
    dateExists: typeof dateExists;
    dateInRange(date: string): boolean;
    _documentFocusInListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _elementMouseUpListening: IDisposableListening | null;
    _onDocumentFocusIn(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onElementMouseUp(): void;
}
