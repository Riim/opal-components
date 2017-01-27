import './index.css';

import { IEvent } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalTab from './opal-tab-list/opal-tab';
import OpalTabList from './opal-tab-list';
import OpalTabPanel from './opal-tab-panel';
import template = require('./index.beml');

export { OpalTab, default as OpalTabList } from './opal-tab-list';
export { default as OpalTabPanel } from './opal-tab-panel';

let indexOf = Array.prototype.indexOf;
let forEach = Array.prototype.forEach;

@d.Component({
	elementIs: 'opal-tabs',
	bemlTemplate: template
})
export default class OpalTabs extends Component {
	static OpalTabList = OpalTabList;
	static OpalTabPanel = OpalTabPanel;

	tabs: NodeListOf<IComponentElement>;
	tabPanels: NodeListOf<IComponentElement>;

	_selectedTab: OpalTab | null = null;

	ready() {
		let tabs = this.tabs = this.element.getElementsByClassName('opal-tab') as NodeListOf<IComponentElement>;
		let tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel') as
			NodeListOf<IComponentElement>;

		let selectedTab: OpalTab | undefined;
		let selectedTabIndex: number | undefined;

		forEach.call(tabs, (tabEl: IComponentElement, index: number) => {
			let tab = tabEl.$c as OpalTab;

			if (tab.selected) {
				if (selectedTab) {
					tab.deselect();
				} else {
					selectedTab = this._selectedTab = tab;
					selectedTabIndex = index;
				}
			}
		});

		if (!selectedTab) {
			selectedTab = this._selectedTab = tabs[0].$c as OpalTab;
			selectedTabIndex = 0;

			selectedTab.select();
		}

		tabPanels[selectedTabIndex as number].$c.props['shown'] = true;
	}

	elementAttached() {
		this.listenTo((this.element.getElementsByClassName('opal-tab-list')[0] as IComponentElement).$c, {
			'<opal-tab>select': this._onTabListSelect,
			'<opal-tab>deselect': this._onTabListDeselect
		});
	}

	_onTabListSelect(evt: IEvent) {
		let tab = evt.target as OpalTab;
		let selectedTab = this._selectedTab;

		if (selectedTab) {
			this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$c.props['shown'] = false;
			selectedTab.deselect();
		}

		this.tabPanels[indexOf.call(this.tabs, tab.element)].$c.props['shown'] = true;
		this._selectedTab = tab;
	}

	_onTabListDeselect(evt: IEvent) {
		(evt.target as OpalTab).select();
	}
}
