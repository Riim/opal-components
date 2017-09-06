import { IEvent } from 'cellx';
import { IDataProvider } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import '../../../node_modules/bytesize-icons/dist/icons/close.svg?id=opal-components__icon-close';
export declare class OpalMultiselect extends OpalSelect {
    dataProvider: IDataProvider | null;
    readonly isNothingSelectedShown: boolean;
    initialize(): void;
    elementAttached(): void;
    _onQueryInputInput(evt: IEvent<OpalTextInput>): void;
    _onQueryInputClear(): void;
}
