import { nextUID } from '@riim/next-uid';
import { Location, OpalRouter } from '@riim/opal-router';
import { Cell, IEvent } from 'cellx';
import {
	BaseComponent,
	Component,
	IComponentElement,
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

const reTabLabel = /(?:#|&)tab=([^&]+)/;

@Component({
	elementIs: 'OpalTabs',
	template
})
export class OpalTabs extends BaseComponent {
	@Param
	paramUseLocationHash = false;

	tabs: HTMLCollectionOf<IComponentElement>;
	tabPanels: HTMLCollectionOf<IComponentElement<OpalTabPanel>>;

	_startSelectedTab: OpalTab | null = null;
	_selectedTab: OpalTab | null = null;

	ready() {
		let tabs = (this.tabs = this.element.getElementsByClassName('OpalTab') as any);
		let tabPanels = (this.tabPanels = this.element.getElementsByClassName(
			'OpalTabPanel'
		) as any);

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
			selectedTab = this._startSelectedTab = this._selectedTab = tabs[0]
				.$component as OpalTab;
			selectedTabIndex = 0;

			selectedTab.select();
		}

		tabPanels[selectedTabIndex!].$component!.paramShown = true;
	}

	elementAttached() {
		this.listenTo(
			(this.element.getElementsByClassName('OpalTabList')[0] as IComponentElement)
				.$component!,
			{
				'<OpalTab>select': this._onTabListSelect,
				'<OpalTab>deselect': this._onTabListDeselect
			}
		);

		if (this.paramUseLocationHash) {
			reTabLabel.test(OpalRouter.history.location.hash);

			if (RegExp.$1) {
				this.goToTab(RegExp.$1);
			}

			this._disposables[nextUID()] = {
				dispose: OpalRouter.history.listen(location => {
					this._onHistoryChange(location);
				})
			};
		}
	}

	_onTabListSelect(evt: IEvent<OpalTab>) {
		this._selectTab(evt.target);
	}

	_onTabListDeselect(evt: IEvent<OpalTab>) {
		evt.target.select();
	}

	_onHistoryChange(location: Location) {
		reTabLabel.test(location.hash);

		if (RegExp.$1) {
			if (this._selectedTab && RegExp.$1 !== this._selectedTab.paramLabel) {
				this.goToTab(RegExp.$1);
			}
		} else if (this._startSelectedTab) {
			this._selectTab(this._startSelectedTab, true);
		}
	}

	goToTab(label: string): boolean {
		if (this._selectedTab && this._selectedTab!.paramLabel === label) {
			return true;
		}

		let tab: IComponentElement<OpalTab> = find.call(
			this.tabs,
			(tab: IComponentElement<OpalTab>) => tab.$component!.paramLabel == label
		);

		if (tab && !tab.$component!.paramHidden) {
			this._selectTab(tab.$component!);
			return true;
		}

		return false;
	}

	_selectTab(tab: OpalTab, notUseLocationHash?: boolean) {
		if (tab === this._selectedTab) {
			return;
		}

		let selectedTab = this._selectedTab;

		if (selectedTab) {
			this.tabPanels[
				indexOf.call(this.tabs, selectedTab.element)
			].$component!.paramShown = false;
			selectedTab.deselect();
		}

		this.tabPanels[indexOf.call(this.tabs, tab.element)].$component!.paramShown = true;
		tab.select();

		this._selectedTab = tab;

		if (!notUseLocationHash && this.paramUseLocationHash) {
			let label = tab.paramLabel;
			let locationHash = OpalRouter.history.location.hash;
			let tabInLocationHashFound = false;
			let newLocationHash = locationHash.replace(/(#|&)tab=[^&]+/, (_match, sep) => {
				tabInLocationHashFound = true;
				return (sep == '#' ? '#' : '') + (label ? 'tab=' + label : '');
			});

			if (!tabInLocationHashFound || newLocationHash != locationHash) {
				location.hash = tabInLocationHashFound
					? newLocationHash
					: (locationHash ? locationHash + '&tab=' : '#tab=') + label;
			}
		}

		Cell.release();
		this.emit('change');
	}
}
