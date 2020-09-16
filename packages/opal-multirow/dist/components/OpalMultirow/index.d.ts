import { IEvent } from 'cellx';
import { ObservableList } from 'cellx-collections';
import { BaseComponent } from 'rionite';
import { OpalMultirowRow } from '../OpalMultirowRow';
import './index.css';
export { OpalMultirowRow };
export declare class OpalMultirow extends BaseComponent {
    static EVENT_ADD_ROW: symbol;
    static EVENT_CHANGE: symbol;
    static EVENT_REMOVE_ROW: symbol;
    _presetRowClassName: string;
    _presetRowCount: number;
    _newRows: ObservableList<{
        key: string;
    }>;
    get _notHaveNewRows(): boolean;
    get _notSingleRow(): boolean;
    initialize(): void;
    ready(): void;
    _onRowRemoveRowClick(evt: IEvent<OpalMultirowRow>): void;
    _onRowAddRowClick(): void;
}
