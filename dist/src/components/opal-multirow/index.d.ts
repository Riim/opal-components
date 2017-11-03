import { IEvent, ObservableList } from 'cellx';
import { Component } from 'rionite';
import './index.css';
import { OpalMultirowRow } from './opal-multirow-row';
export { OpalMultirowRow };
export declare class OpalMultirow extends Component {
    _presetRowClassName: string;
    _presetRowCount: number;
    _newRows: ObservableList<{
        key: string;
    }>;
    _notHaveNewRows(): boolean;
    _notSingleRow(): boolean;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onRemoveRowClick(evt: IEvent<OpalMultirowRow>): void;
    _onAddRowClick(): void;
}
