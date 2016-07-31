require('./opal-tab-list');
require('./opal-tab-panel');
require('./index.css');

let { Component } = require('rionite');

let indexOf = Array.prototype.indexOf;
let forEach = Array.prototype.forEach;

module.exports = Component.extend('opal-tabs', {
	Static: {
		template: require('./index.html'),

		assets: {
			tabList: {
				selector: '.opal-tab-list',

				'on-select'({ target: tab }) {
					let selectedTab = this._selectedTab;

					if (selectedTab) {
						this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$c.props.shown = false;
						selectedTab.deselect();
					}

					this.tabPanels[indexOf.call(this.tabs, tab.element)].$c.props.shown = true;
					this._selectedTab = tab;
				},

				'on-deselect'({ target: tab }) {
					tab.select();
				}
			}
		}
	},

	_selectedTab: null,

	ready() {
		let tabs = this.tabs = this.element.getElementsByClassName('opal-tab');
		let tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel');

		let selectedTab;
		let selectedTabIndex;

		forEach.call(tabs, ({ $c: tab }, index) => {
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
			selectedTab = this._selectedTab = tabs[0].$c;
			selectedTabIndex = 0;

			selectedTab.select();
		}

		tabPanels[selectedTabIndex].$c.props.shown = true;
	}
});
