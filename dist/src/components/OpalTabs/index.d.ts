import { IEvent } from 'cellx';
import { BaseComponent, IComponentElement } from 'rionite';
import './index.css';
import { OpalTab } from './OpalTabList';
import { OpalTabPanel } from './OpalTabPanel';
export { OpalTab };
export { OpalTabList } from './OpalTabList';
export { OpalTabPanel };
export declare class OpalTabs extends BaseComponent {
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
