import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import { OpalTextInput } from '../OpalTextInput';
import './index.css';
export declare class OpalFilteredList extends BaseComponent {
    elementAttached(): void;
    _onQueryInputInput(evt: IEvent<OpalTextInput>): void;
    _onQueryInputChange(evt: IEvent<OpalTextInput>): void;
    _setListQuery(query: string | null): void;
    focus(): void;
}
