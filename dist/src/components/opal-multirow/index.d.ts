import { IEvent, ObservableList } from 'cellx';
import { Component } from 'rionite';
import './index.css';
import { OpalMultirowRow } from './opal-multirow-row';
export { OpalMultirowRow };
export declare class OpalMultirow extends Component {
    static OpalMultirowRow: typeof OpalMultirowRow;
    _presetRowCount: number;
    _newRows: ObservableList<{
        key: string;
    }>;
    _notHaveNewRows(): boolean;
    _notSingleRow(): boolean;
    ready(): void;
    elementAttached(): void;
    _onRemoveRowClick(evt: IEvent<OpalMultirowRow>): void;
    _onAddRowClick(): void;
}
