import { IEvent } from 'cellx';
import '../../assets/icons/opal-components__icon-cross.svg';
import { IDataProvider } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
export declare class OpalMultiselect extends OpalSelect {
    dataProvider: IDataProvider | null;
    isNothingSelectedShown: boolean;
    initialize(): void;
    elementAttached(): void;
    _onQueryInputInput(evt: IEvent<OpalTextInput>): void;
    _onQueryInputClear(): void;
}
