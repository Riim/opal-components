import { IEvent } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { Component } from 'rionite';
import './index.css';
import { OpalMultirowRow } from './opal-multirow-row';
export declare class OpalMultirow extends Component {
    static OpalMultirowRow: typeof OpalMultirowRow;
    _presetRowCount: number;
    _newRows: IndexedList<{
        key: string;
    }>;
    _notHavePresetRows: boolean;
    _notHaveNewRows: boolean;
    _notSingleRow: boolean;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onRemoveRowClick(evt: IEvent): void;
    _onAddRowClick(): void;
}
export { OpalMultirowRow };
