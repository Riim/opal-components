import { IEvent } from 'cellx';
import { BaseComponent, Component, IComponentElement } from 'rionite';
import { OpalTab } from '../OpalTabList';
import { OpalTabPanel } from '../OpalTabPanel';
import './index.css';
import template from './template.nelm';

export { OpalTab };
export { OpalTabList } from '../OpalTabList';
export { OpalTabPanel };

let indexOf = Array.prototype.indexOf;
let forEach = Array.prototype.forEach;
let find = Array.prototype.find;

@Component({
	template
})
export class OpalTabs extends BaseComponent {
	tabs: NodeListOf<IComponentElement<OpalTab>>;
	tabPanels: NodeListOf<IComponentElement<OpalTabPanel>>;

	_selectedTab: OpalTab | null = null;

	ready() {
		let tabs = (this.tabs = this.element.getElementsByClassName('OpalTab') as NodeListOf<
			IComponentElement<OpalTab>
		>);
		let tabPanels = (this.tabPanels = this.element.getElementsByClassName(
			'OpalTabPanel'
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

		tabPanels[selectedTabIndex!].$component.paramShown = true;
	}

	elementAttached() {
		this.listenTo(
			(this.element.getElementsByClassName('OpalTabList')[0] as IComponentElement).$component,
			{
				'<OpalTab>select': this._onTabListSelect,
				'<OpalTab>deselect': this._onTabListDeselect
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
		if (this._selectedTab && this._selectedTab!.paramLabel === label) {
			return true;
		}

		let tab: IComponentElement<OpalTab> = find.call(
			this.tabs,
			(tab: IComponentElement<OpalTab>) => tab.$component.paramLabel == label
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
			].$component.paramShown = false;
			selectedTab.deselect();
		}

		this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.paramShown = true;
		tab.select();

		this._selectedTab = tab;
	}
}