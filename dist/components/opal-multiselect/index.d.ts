import '../../assets/icons/opal-components__icon-cross.svg';
import { IDataProvider } from '../opal-loaded-list';
import { OpalSelect } from '../opal-select';
import './index.css';
export declare class OpalMultiselect extends OpalSelect {
    dataProvider: IDataProvider | null;
    isNothingSelectedShown: boolean;
    initialize(): void;
    _onBtnDeselectItemClick(evt: Event, btn: HTMLElement): void;
}
