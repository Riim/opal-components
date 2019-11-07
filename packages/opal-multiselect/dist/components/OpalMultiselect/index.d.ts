import { IDataProvider } from '@riim/opal-loaded-list';
import { OpalSelect } from '@riim/opal-select';
import './index.css';
export declare class OpalMultiselect extends OpalSelect {
    multiple: boolean;
    dataProvider: IDataProvider;
    get nothingSelectedShown(): boolean;
    _queryInputClass: string | undefined;
    initialize(): void;
}
