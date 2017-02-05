import './index.css';
import { IDisposableListening, Component } from 'rionite';
import dateExists from 'date-exists';
export default class OpalDateInput extends Component {
    dateExists: typeof dateExists;
    dateInRange(date: string): boolean;
    _documentMouseUpListening: IDisposableListening | null;
    _onDocumentMouseUp(): void;
}
