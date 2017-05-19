import './index.css';
import { IEvent } from 'cellx';
import { IComponentElement, Component } from 'rionite';
import OpalTabList from './opal-tab-list';
import OpalTab from './opal-tab-list/opal-tab';
import OpalTabPanel from './opal-tab-panel';
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
export { OpalTabList, OpalTab, OpalTabPanel };
