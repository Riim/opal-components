import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab-list';
import template from './template.nelm';

export { OpalTab };
export { OpalTabList } from './opal-tab-list';
export { OpalTabPanel } from './opal-tab-panel';

let indexOf = Array.prototype.indexOf;
let forEach = Array.prototype.forEach;

@Component.Config({
	elementIs: 'opal-tabs',
	template
})
export class OpalTabs extends Component {
	tabs: NodeListOf<IComponentElement>;
	tabPanels: NodeListOf<IComponentElement>;

	_selectedTab: OpalTab | null = null;

	ready() {
		let tabs = (this.tabs = this.element.getElementsByClassName('opal-tab') as NodeListOf<
			IComponentElement
		>);
		let tabPanels = (this.tabPanels = this.element.getElementsByClassName(
			'opal-tab-panel'
		) as NodeListOf<IComponentElement>);

		let selectedTab: OpalTab | undefined;
		let selectedTabIndex: number | undefined;

		forEach.call(tabs, (tabEl: IComponentElement, index: number) => {
			let tab = tabEl.$component as OpalTab;

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
			selectedTab = this._selectedTab = tabs[0].$component as OpalTab;
			selectedTabIndex = 0;

			selectedTab.select();
		}

		tabPanels[selectedTabIndex!].$component.inputs.shown = true;
	}

	elementAttached() {
		this.listenTo(
			(this.element.getElementsByClassName('opal-tab-list')[0] as IComponentElement)
				.$component,
			{
				'<opal-tab>select': this._onTabListSelect,
				'<opal-tab>deselect': this._onTabListDeselect
			}
		);
	}

	_onTabListSelect(evt: IEvent<OpalTab>) {
		let tab = evt.target;
		let selectedTab = this._selectedTab;

		if (selectedTab) {
			this.tabPanels[
				indexOf.call(this.tabs, selectedTab.element)
			].$component.inputs.shown = false;
			selectedTab.deselect();
		}

		this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.inputs.shown = true;
		this._selectedTab = tab;
	}

	_onTabListDeselect(evt: IEvent<OpalTab>) {
		evt.target.select();
	}
}
