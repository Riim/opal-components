import { IEvent } from 'cellx';
import { Component } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import '../../../node_modules/bytesize-icons/dist/icons/search.svg?id=opal-components__icon-search';
export declare class OpalFilteredList extends Component {
    elementAttached(): void;
    _onQueryInputInput(evt: IEvent<OpalTextInput>): void;
    _onQueryInputChange(evt: IEvent<OpalTextInput>): void;
    _setListQuery(query: string | null): void;
    focus(): void;
}
