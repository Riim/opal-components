(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-router"), require("cellx"), require("@riim/uid"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-router", "cellx", "@riim/uid", "rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tabs"] = factory(require("@riim/opal-router"), require("cellx"), require("@riim/uid"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-tabs"] = factory(root["@riim/opal-router"], root["cellx"], root["@riim/uid"], root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_Oufu__, __WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_mtvJ__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "vyT0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/G9H":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTab{display:inline-block}.OpalTab .OpalTab__control{position:relative;display:block;padding:5px 22px;border:0;border-radius:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:var(--textColor50, hsl(208,10%,5%));text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTab .OpalTab__control:hover{background:var(--grayColor900, hsl(0,0%,90%))}.OpalTab .OpalTab__control:focus{outline:0}body:not(._noFocusHighlight) .OpalTab .OpalTab__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px var(--primaryColor500, hsl(208,93%,50%));box-shadow:inset 0 0 0 1px var(--primaryColor500, hsl(208,93%,50%));content:'';pointer-events:none}.OpalTab .OpalTab__control:active{background:var(--grayColor800, hsl(0,0%,80%))}.OpalTab .OpalTab__contentSlot{position:relative;display:block}.OpalTab[selected] .OpalTab__control{-webkit-box-shadow:0 3px var(--primaryColor500, hsl(208,93%,50%));box-shadow:0 3px var(--primaryColor500, hsl(208,93%,50%))}.OpalTab[hidden]{display:none}.OpalTab[disabled]{opacity:.5;pointer-events:none}.OpalTab[disabled] .OpalTab__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "3mf0":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabs{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "6KzM":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = "opal-tab-panel{display:none}.OpalTabPanel{position:relative;display:none;padding:30px}.OpalTabPanel[shown]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "DBEQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot:contentSlot (@if=contentRendered)");

/***/ }),

/***/ "E+E0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_1 = __webpack_require__("P7z7");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("6KzM");
const template_rnt_1 = __webpack_require__("DBEQ");
let OpalTabPanel = class OpalTabPanel extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.shown = false;
        this.contentRendered = false;
    }
    initialize() {
        this.listenTo(this, 'change:shown', this._onShownChange);
    }
    _onShownChange(evt) {
        if (evt.data.value) {
            this.renderContent();
        }
    }
    renderContent() {
        if (!this.contentRendered) {
            this.contentRendered = true;
            cellx_1.Cell.release();
        }
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTabPanel.prototype, "shown", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalTabPanel.prototype, "contentRendered", void 0);
OpalTabPanel = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTabPanel',
        template: template_rnt_1.default
    })
], OpalTabPanel);
exports.OpalTabPanel = OpalTabPanel;


/***/ }),

/***/ "Oufu":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Oufu__;

/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "QGS3":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabList{display:block;padding:0 30px;border-bottom:1px solid var(--grayColor850, hsl(0,0%,85%));white-space:nowrap;font-size:0;line-height:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "Rwo/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OpalTabs_1;
Object.defineProperty(exports, "__esModule", { value: true });
const opal_router_1 = __webpack_require__("Oufu");
const uid_1 = __webpack_require__("mtvJ");
const cellx_1 = __webpack_require__("P7z7");
const rionite_1 = __webpack_require__("u4yd");
const OpalTabList_1 = __webpack_require__("tlR1");
exports.OpalTab = OpalTabList_1.OpalTab;
const OpalTabPanel_1 = __webpack_require__("E+E0");
exports.OpalTabPanel = OpalTabPanel_1.OpalTabPanel;
__webpack_require__("3mf0");
const template_rnt_1 = __webpack_require__("nJc3");
var OpalTabList_2 = __webpack_require__("tlR1");
exports.OpalTabList = OpalTabList_2.OpalTabList;
const indexOf = Array.prototype.indexOf;
const forEach = Array.prototype.forEach;
const find = Array.prototype.find;
const reTabLabel = /(?:#|&)tab=([^&]+)/;
let OpalTabs = OpalTabs_1 = class OpalTabs extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.useLocationHash = false;
        this._startSelectedTab = null;
        this._selectedTab = null;
    }
    ready() {
        let tabElements = (this.tabElements = this.element.getElementsByClassName('OpalTab'));
        let tabPanelElements = (this.tabPanelElements = this.element.getElementsByClassName('OpalTabPanel'));
        let selectedTab;
        let selectedTabIndex;
        forEach.call(tabElements, (tabEl, index) => {
            let tab = tabEl.$component;
            if (tab.selected) {
                if (selectedTab) {
                    tab.deselect();
                }
                else {
                    selectedTab = this._selectedTab = tab;
                    selectedTabIndex = index;
                }
            }
        });
        if (!selectedTab) {
            selectedTab = this._startSelectedTab = this._selectedTab = tabElements[0]
                .$component;
            selectedTabIndex = 0;
            selectedTab.select();
        }
        tabPanelElements[selectedTabIndex].$component.shown = true;
    }
    elementAttached() {
        if (this.useLocationHash) {
            reTabLabel.test(opal_router_1.OpalRouter.history.location.hash);
            if (RegExp.$1) {
                this.goToTab(RegExp.$1);
            }
            this._disposables[uid_1.nextUID()] = {
                dispose: opal_router_1.OpalRouter.history.listen(location => {
                    this._onHistoryChange(location);
                })
            };
        }
    }
    _onTabListSelect(evt) {
        this._selectTab(evt.target, true);
    }
    _onTabListDeselect(evt) {
        evt.target.select();
    }
    _onHistoryChange(location) {
        reTabLabel.test(location.hash);
        if (RegExp.$1) {
            if (this._selectedTab && RegExp.$1 !== this._selectedTab.label) {
                this.goToTab(RegExp.$1);
            }
        }
        else if (this._startSelectedTab) {
            this._selectTab(this._startSelectedTab, false, true);
        }
    }
    goToTab(label) {
        if (this._selectedTab && this._selectedTab.label === label) {
            return true;
        }
        let tab = find.call(this.tabElements, (tab) => tab.$component.label == label);
        if (tab && !tab.$component.hidden) {
            this._selectTab(tab.$component, false);
            return true;
        }
        return false;
    }
    _selectTab(tab, changeEvent, notUseLocationHash) {
        if (tab === this._selectedTab) {
            return;
        }
        let selectedTab = this._selectedTab;
        if (selectedTab) {
            this.tabPanelElements[indexOf.call(this.tabElements, selectedTab.element)].$component.shown = false;
            selectedTab.deselect();
        }
        this.tabPanelElements[indexOf.call(this.tabElements, tab.element)].$component.shown = true;
        tab.select();
        this._selectedTab = tab;
        if (!notUseLocationHash && this.useLocationHash) {
            let label = tab.label;
            let locationHash = opal_router_1.OpalRouter.history.location.hash;
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
        cellx_1.Cell.release();
        if (changeEvent) {
            this.emit(OpalTabs_1.EVENT_CHANGE);
        }
    }
};
OpalTabs.EVENT_CHANGE = Symbol('change');
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTabs.prototype, "useLocationHash", void 0);
__decorate([
    rionite_1.Listen(OpalTabList_1.OpalTab.EVENT_SELECT, self => self.element.getElementsByClassName('OpalTabList')[0].$component),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalTabs.prototype, "_onTabListSelect", null);
__decorate([
    rionite_1.Listen(OpalTabList_1.OpalTab.EVENT_DESELECT, self => self.element.getElementsByClassName('OpalTabList')[0].$component),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalTabs.prototype, "_onTabListDeselect", null);
OpalTabs = OpalTabs_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTabs',
        template: template_rnt_1.default
    })
], OpalTabs);
exports.OpalTabs = OpalTabs;


/***/ }),

/***/ "T5PU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button:control (type=button, tabindex={_tabIndex}) {\nRnSlot:contentSlot\n}");

/***/ }),

/***/ "WQPC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot:contentSlot");

/***/ }),

/***/ "mtvJ":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_mtvJ__;

/***/ }),

/***/ "nJc3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot:tabListSlot (forTag=opal-tab-list) {\nOpalTabList:tabList {\nRnSlot:tabs (forTag=opal-tab)\n}\n}\nRnSlot:tabPanels (forTag=opal-tab-panel)");

/***/ }),

/***/ "tlR1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rionite_1 = __webpack_require__("u4yd");
const OpalTab_1 = __webpack_require__("tpnT");
exports.OpalTab = OpalTab_1.OpalTab;
__webpack_require__("QGS3");
const template_rnt_1 = __webpack_require__("WQPC");
let OpalTabList = class OpalTabList extends rionite_1.BaseComponent {
};
OpalTabList = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTabList',
        template: template_rnt_1.default
    })
], OpalTabList);
exports.OpalTabList = OpalTabList;


/***/ }),

/***/ "tpnT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OpalTab_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("/G9H");
const template_rnt_1 = __webpack_require__("T5PU");
let OpalTab = OpalTab_1 = class OpalTab extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.selected = false;
        this.tabIndex = 0;
        this.focused = false;
        this.hidden = false;
        this.disabled = false;
    }
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    ready() {
        if (this.focused) {
            this.focus();
        }
    }
    _onControlFocus() {
        this.focused = true;
    }
    _onControlBlur() {
        this.focused = false;
    }
    _onControlClick(evt) {
        evt.preventDefault();
        if (!this.disabled) {
            this.click();
        }
    }
    click() {
        this.emit(this.toggle() ? OpalTab_1.EVENT_SELECT : OpalTab_1.EVENT_DESELECT);
        return this;
    }
    select() {
        if (!this.selected) {
            this.selected = true;
            return true;
        }
        return false;
    }
    deselect() {
        if (this.selected) {
            this.selected = false;
            return true;
        }
        return false;
    }
    toggle(value) {
        return (this.selected = value === undefined ? !this.selected : value);
    }
    focus() {
        this.$('control').focus();
        return this;
    }
    blur() {
        this.$('control').blur();
        return this;
    }
    enable() {
        this.disabled = false;
        return this;
    }
    disable() {
        this.disabled = true;
        return this;
    }
};
OpalTab.EVENT_SELECT = Symbol('select');
OpalTab.EVENT_DESELECT = Symbol('deselect');
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTab.prototype, "label", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "selected", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "hidden", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalTab.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('focus', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalTab.prototype, "_onControlFocus", null);
__decorate([
    rionite_1.Listen('blur', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalTab.prototype, "_onControlBlur", null);
__decorate([
    rionite_1.Listen('click', 'control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalTab.prototype, "_onControlClick", null);
OpalTab = OpalTab_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTab',
        template: template_rnt_1.default
    })
], OpalTab);
exports.OpalTab = OpalTab;


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "vyT0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("vA/G");
__export(__webpack_require__("Rwo/"));


/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});