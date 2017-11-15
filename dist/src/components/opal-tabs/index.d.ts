import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab-list';
export { OpalTab };
export { OpalTabList } from './opal-tab-list';
export { OpalTabPanel } from './opal-tab-panel';
export declare class OpalTabs extends Component {
    tabs: NodeListOf<IComponentElement>;
    tabPanels: NodeListOf<IComponentElement>;
    _selectedTab: OpalTab | null;
    ready(): void;
    elementAttached(): void;
    _onTabListSelect(evt: IEvent<OpalTab>): void;
    _onTabListDeselect(evt: IEvent<OpalTab>): void;
    goToTab(label: string): boolean;
    _selectTab(tab: OpalTab): void;
}
