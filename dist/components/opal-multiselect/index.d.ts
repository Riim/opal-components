import './index.css';
import '../../assets/icons/opal-components__icon-cross.svg';
import OpalSelect from '../opal-select';
import { IDataProvider } from '../opal-loaded-list';
export default class OpalMultiselect extends OpalSelect {
    dataProvider: IDataProvider | null;
    nothingSelectedShown: boolean;
    initialize(): void;
    _onBtnDeselectItemClick(evt: Event, btn: HTMLElement): void;
}
