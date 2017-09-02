import { IEvent } from 'cellx';
import { Component } from 'rionite';
import '../../assets/icons/opal-components__icon-search.svg';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
export declare class OpalFilteredList extends Component {
    elementAttached(): void;
    _onQueryInputInput(evt: IEvent<OpalTextInput>): void;
    _onQueryInputChange(evt: IEvent<OpalTextInput>): void;
    _setListQuery(query: string | null): void;
    focus(): void;
}
