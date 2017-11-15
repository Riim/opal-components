import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab-list';
import { OpalTabPanel } from './opal-tab-panel';
import template from './template.nelm';

export { OpalTab };
export { OpalTabList } from './opal-tab-list';
export { OpalTabPanel };

let indexOf = Array.prototype.indexOf;
let forEach = Array.prototype.forEach;
let find = Array.prototype.find;

@Component.Config({
	elementIs: 'opal-tabs',
	template
})
export class OpalTabs extends Component {
	tabs: NodeListOf<IComponentElement<OpalTab>>;
	tabPanels: NodeListOf<IComponentElement<OpalTabPanel>>;

	_selectedTab: OpalTab | null = null;

	ready() {
		let tabs = (this.tabs = this.element.getElementsByClassName('opal-tab') as NodeListOf<
			IComponentElement<OpalTab>
		>);
		let tabPanels = (this.tabPanels = this.element.getElementsByClassName(
			'opal-tab-panel'
		) as NodeListOf<IComponentElement<OpalTabPanel>>);

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

		tabPanels[selectedTabIndex!].$component.params.shown = true;
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
		this._selectTab(evt.target);
	}

	_onTabListDeselect(evt: IEvent<OpalTab>) {
		evt.target.select();
	}

	goToTab(label: string): boolean {
		if (this._selectedTab && this._selectedTab!.params.label === label) {
			return true;
		}

		let tab: IComponentElement<OpalTab> = find.call(
			this.tabs,
			(tab: IComponentElement) => tab.$component.params.label == label
		);

		if (tab) {
			this._selectTab(tab.$component);
			return true;
		}

		return false;
	}

	_selectTab(tab: OpalTab) {
		let selectedTab = this._selectedTab;

		if (selectedTab) {
			this.tabPanels[
				indexOf.call(this.tabs, selectedTab.element)
			].$component.params.shown = false;
			selectedTab.deselect();
		}

		this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.params.shown = true;
		tab.select();

		this._selectedTab = tab;
	}
}
