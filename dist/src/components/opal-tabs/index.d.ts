import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab-list';
import { OpalTabPanel } from './opal-tab-panel';
export { OpalTab };
export { OpalTabList } from './opal-tab-list';
export { OpalTabPanel };
export declare class OpalTabs extends Component {
    tabs: NodeListOf<IComponentElement<OpalTab>>;
    tabPanels: NodeListOf<IComponentElement<OpalTabPanel>>;
    _selectedTab: OpalTab | null;
    ready(): void;
    elementAttached(): void;
    _onTabListSelect(evt: IEvent<OpalTab>): void;
    _onTabListDeselect(evt: IEvent<OpalTab>): void;
    goToTab(label: string): boolean;
    _selectTab(tab: OpalTab): void;
}
