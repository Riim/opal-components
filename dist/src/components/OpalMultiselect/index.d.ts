import { IDataProvider } from '../OpalLoadedList';
import { OpalSelect } from '../OpalSelect';
import './index.css';
export declare class OpalMultiselect extends OpalSelect {
    paramMultiple: boolean;
    paramDataProvider: IDataProvider;
    dataProvider: IDataProvider | null;
    readonly isNothingSelectedShown: boolean;
    initialize(): void;
}
