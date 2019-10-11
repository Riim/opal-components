import { Location } from '@riim/opal-router';
import { IEvent } from 'cellx';
import { BaseComponent, IComponentElement } from 'rionite';
import { OpalTab } from '../OpalTabList';
import { OpalTabPanel } from '../OpalTabPanel';
import './index.css';
export { OpalTab };
export { OpalTabList } from '../OpalTabList';
export { OpalTabPanel };
export declare class OpalTabs extends BaseComponent {
    static EVENT_CHANGE: symbol;
    useLocationHash: boolean;
    tabElements: HTMLCollectionOf<IComponentElement>;
    tabPanelElements: HTMLCollectionOf<IComponentElement<OpalTabPanel>>;
    _startSelectedTab: OpalTab | null;
    _selectedTab: OpalTab | null;
    ready(): void;
    elementAttached(): void;
    _onTabListSelect(evt: IEvent<OpalTab>): void;
    _onTabListDeselect(evt: IEvent<OpalTab>): void;
    _onHistoryChange(location: Location): void;
    goToTab(label: string): boolean;
    _selectTab(tab: OpalTab, changeEvent: boolean, notUseLocationHash?: boolean): void;
}
