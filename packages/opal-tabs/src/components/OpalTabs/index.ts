import { nextUID } from '@riim/next-uid';
import { OpalRouter, Update } from '@riim/opal-router';
import { Cell, IEvent } from 'cellx';
import {
	BaseComponent,
	Component,
	IComponentElement,
	Listen,
	Param
	} from 'rionite';
import { OpalTab } from '../OpalTabList';
import { OpalTabPanel } from '../OpalTabPanel';
import './index.css';
import template from './template.rnt';

export { OpalTab };
export { OpalTabList } from '../OpalTabList';
export { OpalTabPanel };

const indexOf = Array.prototype.indexOf;
const forEach = Array.prototype.forEach;
const find = Array.prototype.find;

@Component({
	elementIs: 'OpalTabs',
	template
})
export class OpalTabs extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');

	@Param(String)
	name: string | null;

	tabElements: HTMLCollectionOf<IComponentElement>;
	tabPanelElements: HTMLCollectionOf<IComponentElement<OpalTabPanel>>;

	_startSelectedTab: OpalTab | null = null;
	_selectedTab: OpalTab;

	ready() {
		let tabElements = (this.tabElements = this.element.getElementsByClassName(
			'OpalTab'
		) as any);
		let tabPanelElements = (this.tabPanelElements = this.element.getElementsByClassName(
			'OpalTabPanel'
		) as any);

		let selectedTab: OpalTab | undefined;
		let selectedTabIndex: number | undefined;

		forEach.call(tabElements, (tabEl: IComponentElement, index: number) => {
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
			selectedTab = this._startSelectedTab = this._selectedTab = tabElements[0]
				.$component as OpalTab;
			selectedTabIndex = 0;

			selectedTab.select();
		}

		tabPanelElements[selectedTabIndex!].$component!.shown = true;
	}

	connected() {
		if (this.name) {
			new RegExp(`[#&]tabs_${this.name}=([^&]+)`).test(OpalRouter.history.location.hash);

			if (RegExp.$1) {
				this.goToTab(RegExp.$1);
			}

			this._disposables[nextUID()] = {
				dispose: OpalRouter.history.listen((update) => {
					this._onHistoryChange(update);
				})
			};
		}
	}

	@Listen(
		OpalTab.EVENT_SELECT,
		(self) =>
			(self.element.getElementsByClassName('OpalTabList')[0] as IComponentElement).$component!
	)
	_onTabListSelect(evt: IEvent<OpalTab>) {
		this._selectTab(evt.target, true);
	}

	@Listen(
		OpalTab.EVENT_DESELECT,
		(self) =>
			(self.element.getElementsByClassName('OpalTabList')[0] as IComponentElement).$component!
	)
	_onTabListDeselect(evt: IEvent<OpalTab>) {
		evt.target.select();
	}

	_onHistoryChange(update: Update) {
		new RegExp(`[#&]tabs_${this.name}=([^&]+)`).test(update.location.hash);

		if (RegExp.$1) {
			if (RegExp.$1 !== this._selectedTab.label) {
				this.goToTab(RegExp.$1);
			}
		} else if (this._startSelectedTab) {
			this._selectTab(this._startSelectedTab, false, true);
		}
	}

	goToTab(label: string) {
		if (this._selectedTab.label === label) {
			return true;
		}

		let tab: IComponentElement<OpalTab> = find.call(
			this.tabElements,
			(tab: IComponentElement<OpalTab>) => tab.$component!.label == label
		);

		if (tab && !tab.$component!.hidden) {
			this._selectTab(tab.$component!, false);
			return true;
		}

		return false;
	}

	_selectTab(tab: OpalTab, changeEvent: boolean, notUseLocationHash = false) {
		let selectedTab = this._selectedTab;

		if (tab == selectedTab) {
			return;
		}

		this.tabPanelElements[
			indexOf.call(this.tabElements, selectedTab.element)
		].$component!.shown = false;
		selectedTab.deselect();

		this.tabPanelElements[indexOf.call(this.tabElements, tab.element)].$component!.shown = true;
		tab.select();

		this._selectedTab = tab;

		if (!notUseLocationHash && this.name) {
			let label = tab.label;
			let locationHash = OpalRouter.history.location.hash;
			let tabInLocationHashFound = false;
			let newLocationHash = locationHash.replace(
				new RegExp(`(#|&)tabs_${this.name}=[^&]+`),
				(_match, sep) => {
					tabInLocationHashFound = true;
					return sep + (label ? `tabs_${this.name}=${label}` : '');
				}
			);

			if (!tabInLocationHashFound || newLocationHash != locationHash) {
				location.hash = tabInLocationHashFound
					? newLocationHash
					: `${locationHash && locationHash != '#' ? locationHash + '&' : '#'}tabs_${
							this.name
					  }=${label}`;
			}
		}

		Cell.release();

		if (changeEvent) {
			this.emit(OpalTabs.EVENT_CHANGE);
		}
	}
}
