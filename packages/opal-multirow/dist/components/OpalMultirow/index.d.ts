import { IEvent, ObservableList } from 'cellx';
import { BaseComponent } from 'rionite';
import { OpalMultirowRow } from '../OpalMultirowRow';
import './index.css';
export { OpalMultirowRow };
export declare class OpalMultirow extends BaseComponent {
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
    _onRemoveRowClick(evt: IEvent<OpalMultirowRow>): void;
    _onAddRowClick(): void;
}
