(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/next-uid"), require("@riim/opal-router"), require("cellx"), require("rionite"), require("@riim/next-tick"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/next-uid", "@riim/opal-router", "cellx", "rionite", "@riim/next-tick", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tabs"] = factory(require("reflect-metadata"), require("@riim/next-uid"), require("@riim/opal-router"), require("cellx"), require("rionite"), require("@riim/next-tick"), require("cellx-decorators"));
	else
		root["@riim/opal-tabs"] = factory(root["reflect-metadata"], root["@riim/next-uid"], root["@riim/opal-router"], root["cellx"], root["rionite"], root["@riim/next-tick"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
const next_uid_1 = __webpack_require__(3);
const opal_router_1 = __webpack_require__(4);
const cellx_1 = __webpack_require__(5);
const rionite_1 = __webpack_require__(6);
const OpalTabList_1 = __webpack_require__(7);
exports.OpalTab = OpalTabList_1.OpalTab;
const OpalTabPanel_1 = __webpack_require__(15);
exports.OpalTabPanel = OpalTabPanel_1.OpalTabPanel;
__webpack_require__(18);
const template = __webpack_require__(19);
var OpalTabList_2 = __webpack_require__(7);
exports.OpalTabList = OpalTabList_2.OpalTabList;
const indexOf = Array.prototype.indexOf;
const forEach = Array.prototype.forEach;
const find = Array.prototype.find;
const reTabLabel = /(?:#|&)tab=([^&]+)/;
let OpalTabs = class OpalTabs extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.paramUseLocationHash = false;
        this._startSelectedTab = null;
        this._selectedTab = null;
    }
    ready() {
        let tabs = (this.tabs = this.element.getElementsByClassName('OpalTab'));
        let tabPanels = (this.tabPanels = this.element.getElementsByClassName('OpalTabPanel'));
        let selectedTab;
        let selectedTabIndex;
        forEach.call(tabs, (tabEl, index) => {
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
            selectedTab = this._startSelectedTab = this._selectedTab = tabs[0]
                .$component;
            selectedTabIndex = 0;
            selectedTab.select();
        }
        tabPanels[selectedTabIndex].$component.paramShown = true;
    }
    elementAttached() {
        this.listenTo(this.element.getElementsByClassName('OpalTabList')[0]
            .$component, {
            '<OpalTab>select': this._onTabListSelect,
            '<OpalTab>deselect': this._onTabListDeselect
        });
        if (this.paramUseLocationHash) {
            reTabLabel.test(opal_router_1.OpalRouter.history.location.hash);
            if (RegExp.$1) {
                this.goToTab(RegExp.$1);
            }
            this._disposables[next_uid_1.nextUID()] = {
                dispose: opal_router_1.OpalRouter.history.listen(location => {
                    this._onHistoryChange(location);
                })
            };
        }
    }
    _onTabListSelect(evt) {
        this._selectTab(evt.target);
    }
    _onTabListDeselect(evt) {
        evt.target.select();
    }
    _onHistoryChange(location) {
        reTabLabel.test(location.hash);
        if (RegExp.$1) {
            if (this._selectedTab && RegExp.$1 !== this._selectedTab.paramLabel) {
                this.goToTab(RegExp.$1);
            }
        }
        else if (this._startSelectedTab) {
            this._selectTab(this._startSelectedTab, true);
        }
    }
    goToTab(label) {
        if (this._selectedTab && this._selectedTab.paramLabel === label) {
            return true;
        }
        let tab = find.call(this.tabs, (tab) => tab.$component.paramLabel == label);
        if (tab && !tab.$component.paramHidden) {
            this._selectTab(tab.$component);
            return true;
        }
        return false;
    }
    _selectTab(tab, notUseLocationHash) {
        if (tab === this._selectedTab) {
            return;
        }
        let selectedTab = this._selectedTab;
        if (selectedTab) {
            this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$component.paramShown = false;
            selectedTab.deselect();
        }
        this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.paramShown = true;
        tab.select();
        this._selectedTab = tab;
        if (!notUseLocationHash && this.paramUseLocationHash) {
            let label = tab.paramLabel;
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
        cellx_1.Cell.forceRelease();
        this.emit('change');
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTabs.prototype, "paramUseLocationHash", void 0);
OpalTabs = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTabs',
        template
    })
], OpalTabs);
exports.OpalTabs = OpalTabs;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rionite_1 = __webpack_require__(6);
const OpalTab_1 = __webpack_require__(8);
exports.OpalTab = OpalTab_1.OpalTab;
__webpack_require__(13);
const template = __webpack_require__(14);
let OpalTabList = class OpalTabList extends rionite_1.BaseComponent {
};
OpalTabList = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTabList',
        template
    })
], OpalTabList);
exports.OpalTabList = OpalTabList;


/***/ }),
/* 8 */
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
const next_tick_1 = __webpack_require__(9);
const cellx_decorators_1 = __webpack_require__(10);
const rionite_1 = __webpack_require__(6);
__webpack_require__(11);
const template = __webpack_require__(12);
let OpalTab = class OpalTab extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.paramSelected = false;
        this.paramTabIndex = 0;
        this.paramFocused = false;
        this.paramHidden = false;
        this.paramDisabled = false;
    }
    get _tabIndex() {
        return this.paramDisabled ? -1 : this.paramTabIndex;
    }
    elementAttached() {
        this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    }
    ready() {
        if (this.paramFocused) {
            this.focus();
        }
    }
    _onParamFocusedChange(evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    }
    _onControlFocus(evt) {
        next_tick_1.nextTick(() => {
            if (document.activeElement == evt.target) {
                this.paramFocused = true;
            }
        });
    }
    _onControlBlur() {
        this.paramFocused = false;
    }
    _onControlClick(evt) {
        evt.preventDefault();
        if (!this.paramDisabled) {
            this.click();
        }
    }
    click() {
        this.emit(this.toggle() ? 'select' : 'deselect');
        return this;
    }
    get selected() {
        return this.paramSelected;
    }
    set selected(selected) {
        this.paramSelected = selected;
    }
    select() {
        if (!this.paramSelected) {
            this.paramSelected = true;
            return true;
        }
        return false;
    }
    deselect() {
        if (this.paramSelected) {
            this.paramSelected = false;
            return true;
        }
        return false;
    }
    toggle(value) {
        return (this.paramSelected = value === undefined ? !this.paramSelected : value);
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
        this.paramDisabled = false;
        return this;
    }
    disable() {
        this.paramDisabled = true;
        return this;
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTab.prototype, "paramLabel", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "paramSelected", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "paramTabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "paramFocused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "paramHidden", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTab.prototype, "paramDisabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalTab.prototype, "_tabIndex", null);
OpalTab = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTab',
        template
    })
], OpalTab);
exports.OpalTab = OpalTab;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTab{display:inline-block}.OpalTab .OpalTab__control{position:relative;display:block;padding:5px 22px;border:0;border-radius:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:#000;text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTab .OpalTab__control:hover{background:#e6e6e6}.OpalTab .OpalTab__control:focus{outline:0}body:not(._noFocusHighlight) .OpalTab .OpalTab__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.OpalTab .OpalTab__control:active{background:#ccc}.OpalTab .OpalTab__contentSlot{position:relative;display:block}.OpalTab[selected] .OpalTab__control{-webkit-box-shadow:0 3px #1b91f8;box-shadow:0 3px #1b91f8}.OpalTab[hidden]{display:none}.OpalTab[disabled]{opacity:.5;pointer-events:none}.OpalTab[disabled] .OpalTab__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "button/control (tabindex={_tabIndex}) {\n@Slot/contentSlot\n}"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabList{display:block;padding:0 30px;border-bottom:1px solid #dbdbdb;white-space:nowrap;font-size:0;line-height:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "@Slot/contentSlot"

/***/ }),
/* 15 */
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
const cellx_1 = __webpack_require__(5);
const cellx_decorators_1 = __webpack_require__(10);
const rionite_1 = __webpack_require__(6);
__webpack_require__(16);
const template = __webpack_require__(17);
let OpalTabPanel = class OpalTabPanel extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.paramShown = false;
        this.contentRendered = false;
    }
    initialize() {
        this.listenTo(this, 'change:paramShown', this._onParamShownChange);
    }
    _onParamShownChange(evt) {
        if (evt.data.value) {
            this.contentRendered = true;
        }
    }
    renderContent() {
        this.contentRendered = true;
        cellx_1.Cell.forceRelease();
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTabPanel.prototype, "paramShown", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalTabPanel.prototype, "contentRendered", void 0);
OpalTabPanel = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTabPanel',
        template
    })
], OpalTabPanel);
exports.OpalTabPanel = OpalTabPanel;


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = "@IfThen (contentRendered) {\n@Slot/contentSlot\n}"

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = "@Slot/tabListSlot (forTag=opal-tab-list) {\nOpalTabList/tabList {\n@Slot/tabs (forTag=opal-tab)\n}\n}\n@Slot/tabPanels (forTag=opal-tab-panel)"

/***/ })
/******/ ]);
});