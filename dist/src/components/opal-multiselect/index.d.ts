import { IDataProvider } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import './index.css';
export declare class OpalMultiselect extends OpalSelect {
    paramMultiple: boolean;
    paramDataProvider: IDataProvider;
    dataProvider: IDataProvider | null;
    readonly isNothingSelectedShown: boolean;
    initialize(): void;
}
