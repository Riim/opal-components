import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalTab, OpalTabList } from './opal-tab-list';
import { OpalTabPanel } from './opal-tab-panel';
export { OpalTab, OpalTabList, OpalTabPanel };
export declare class OpalTabs extends Component {
    tabs: NodeListOf<IComponentElement>;
    tabPanels: NodeListOf<IComponentElement>;
    _selectedTab: OpalTab | null;
    ready(): void;
    elementAttached(): void;
    _onTabListSelect(evt: IEvent<OpalTab>): void;
    _onTabListDeselect(evt: IEvent<OpalTab>): void;
}
