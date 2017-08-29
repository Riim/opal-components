import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalTabList } from './opal-tab-list';
import { OpalTab } from './opal-tab-list/opal-tab';
import { OpalTabPanel } from './opal-tab-panel';
export declare class OpalTabs extends Component {
    static OpalTabList: typeof OpalTabList;
    static OpalTabPanel: typeof OpalTabPanel;
    tabs: NodeListOf<IComponentElement>;
    tabPanels: NodeListOf<IComponentElement>;
    _selectedTab: OpalTab | null;
    ready(): void;
    elementAttached(): void;
    _onTabListSelect(evt: IEvent<OpalTab>): void;
    _onTabListDeselect(evt: IEvent<OpalTab>): void;
}
export { OpalTabList, OpalTab, OpalTabPanel };
