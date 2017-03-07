import './index.css';
import { IEvent } from 'cellx';
import { IComponentElement, Component } from 'rionite';
import OpalTab from './opal-tab-list/opal-tab';
import OpalTabList from './opal-tab-list';
import OpalTabPanel from './opal-tab-panel';
export { OpalTab, default as OpalTabList } from './opal-tab-list';
export { default as OpalTabPanel } from './opal-tab-panel';
export default class OpalTabs extends Component {
    static OpalTabList: typeof OpalTabList;
    static OpalTabPanel: typeof OpalTabPanel;
    tabs: NodeListOf<IComponentElement>;
    tabPanels: NodeListOf<IComponentElement>;
    _selectedTab: OpalTab | null;
    ready(): void;
    elementAttached(): void;
    _onTabListSelect(evt: IEvent): void;
    _onTabListDeselect(evt: IEvent): void;
}
