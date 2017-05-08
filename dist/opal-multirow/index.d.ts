import './index.css';
import { IndexedList } from 'cellx-indexed-collections';
import { Component } from 'rionite';
import OpalMultirowRow from './opal-multirow-row';
export default class OpalMultirow extends Component {
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
}
export { OpalMultirowRow };
