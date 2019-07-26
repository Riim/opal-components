import { IEvent, ObservableList } from 'cellx';
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
    readonly _notHaveNewRows: boolean;
    readonly _notSingleRow: boolean;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onRowRemoveRowClick(evt: IEvent<OpalMultirowRow>): void;
    _onRowAddRowClick(): void;
}
