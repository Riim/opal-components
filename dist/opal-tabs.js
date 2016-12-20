(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-tabs"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-tabs"] = factory(root["rionite"], root["cellx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(72);
	var rionite_1 = __webpack_require__(1);
	var opal_tab_list_1 = __webpack_require__(9);
	var opal_tab_panel_1 = __webpack_require__(11);
	var template = __webpack_require__(41);
	var opal_tab_list_2 = __webpack_require__(9);
	exports.OpalTab = opal_tab_list_2.OpalTab;
	exports.OpalTabList = opal_tab_list_2.default;
	var opal_tab_panel_2 = __webpack_require__(11);
	exports.OpalTabPanel = opal_tab_panel_2.default;
	var indexOf = Array.prototype.indexOf;
	var forEach = Array.prototype.forEach;
	var OpalTabs = (function (_super) {
	    __extends(OpalTabs, _super);
	    function OpalTabs() {
	        var _this = _super.apply(this, arguments) || this;
	        _this._selectedTab = null;
	        return _this;
	    }
	    OpalTabs.prototype.ready = function () {
	        var _this = this;
	        var tabs = this.tabs = this.element.getElementsByClassName('opal-tab');
	        var tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel');
	        var selectedTab;
	        var selectedTabIndex;
	        forEach.call(tabs, function (tabEl, index) {
	            var tab = tabEl.$c;
	            if (tab.selected) {
	                if (selectedTab) {
	                    tab.deselect();
	                }
	                else {
	                    selectedTab = _this._selectedTab = tab;
	                    selectedTabIndex = index;
	                }
	            }
	        });
	        if (!selectedTab) {
	            selectedTab = this._selectedTab = tabs[0].$c;
	            selectedTabIndex = 0;
	            selectedTab.select();
	        }
	        tabPanels[selectedTabIndex].$c.props['shown'] = true;
	    };
	    OpalTabs.prototype.elementAttached = function () {
	        this.listenTo(this.element.getElementsByClassName('opal-tab-list')[0].$c, {
	            select: this._onTabListSelect,
	            deselect: this._onTabListDeselect
	        });
	    };
	    OpalTabs.prototype._onTabListSelect = function (evt) {
	        var tab = evt.target;
	        var selectedTab = this._selectedTab;
	        if (selectedTab) {
	            this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$c.props['shown'] = false;
	            selectedTab.deselect();
	        }
	        this.tabPanels[indexOf.call(this.tabs, tab.element)].$c.props['shown'] = true;
	        this._selectedTab = tab;
	    };
	    OpalTabs.prototype._onTabListDeselect = function (evt) {
	        evt.target.select();
	    };
	    return OpalTabs;
	}(rionite_1.Component));
	OpalTabs.OpalTabList = opal_tab_list_1.default;
	OpalTabs.OpalTabPanel = opal_tab_panel_1.default;
	OpalTabs = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-tabs',
	        template: template
	    })
	], OpalTabs);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalTabs;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(73);
	var rionite_1 = __webpack_require__(1);
	var opal_tab_1 = __webpack_require__(10);
	var opal_tab_2 = __webpack_require__(10);
	exports.OpalTab = opal_tab_2.default;
	var OpalTabList = (function (_super) {
	    __extends(OpalTabList, _super);
	    function OpalTabList() {
	        return _super.apply(this, arguments) || this;
	    }
	    return OpalTabList;
	}(rionite_1.Component));
	OpalTabList.OpalTab = opal_tab_1.default;
	OpalTabList = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-tab-list',
	        template: '<rt-content class="opal-tab-list__content"></rt-content>'
	    })
	], OpalTabList);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalTabList;


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(74);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(42);
	var OpalTab = (function (_super) {
	    __extends(OpalTab, _super);
	    function OpalTab() {
	        return _super.apply(this, arguments) || this;
	    }
	    OpalTab.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _tabIndex: function () {
	                return this.props['disabled'] ? -1 : this.props['tab-index'];
	            }
	        });
	    };
	    OpalTab.prototype.ready = function () {
	        if (this.props['focused']) {
	            this.focus();
	        }
	    };
	    OpalTab.prototype.elementAttributeChanged = function (name, oldValue, value) {
	        if (name == 'focused') {
	            if (value) {
	                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                this.focus();
	            }
	            else {
	                this._documentKeyDownListening.stop();
	                this.blur();
	            }
	        }
	    };
	    OpalTab.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
	            evt.preventDefault();
	            if (!this.props['disabled']) {
	                this._click();
	            }
	        }
	    };
	    OpalTab.prototype._click = function () {
	        this.emit(this.toggle() ? 'select' : 'deselect');
	    };
	    Object.defineProperty(OpalTab.prototype, "selected", {
	        get: function () {
	            return this.props['selected'];
	        },
	        set: function (selected) {
	            this.props['selected'] = selected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalTab.prototype.select = function () {
	        if (!this.props['selected']) {
	            this.props['selected'] = true;
	            return true;
	        }
	        return false;
	    };
	    OpalTab.prototype.deselect = function () {
	        if (this.props['selected']) {
	            this.props['selected'] = false;
	            return true;
	        }
	        return false;
	    };
	    OpalTab.prototype.toggle = function (value) {
	        return (this.props['selected'] = value === undefined ? !this.props['selected'] : value);
	    };
	    OpalTab.prototype.focus = function () {
	        this.$('button').focus();
	        return this;
	    };
	    OpalTab.prototype.blur = function () {
	        this.$('button').blur();
	        return this;
	    };
	    OpalTab.prototype.enable = function () {
	        this.props['disabled'] = false;
	        return this;
	    };
	    OpalTab.prototype.disable = function () {
	        this.props['disabled'] = true;
	        return this;
	    };
	    return OpalTab;
	}(rionite_1.Component));
	OpalTab = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-tab',
	        props: {
	            selected: false,
	            focused: false,
	            tabIndex: 0,
	            disabled: false
	        },
	        template: template,
	        events: {
	            button: {
	                focusin: function () {
	                    this.props['focused'] = true;
	                },
	                focusout: function () {
	                    this.props['focused'] = false;
	                },
	                click: function () {
	                    this._click();
	                }
	            }
	        }
	    })
	], OpalTab);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalTab;


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(75);
	var rionite_1 = __webpack_require__(1);
	var OpalTabPanel = (function (_super) {
	    __extends(OpalTabPanel, _super);
	    function OpalTabPanel() {
	        return _super.apply(this, arguments) || this;
	    }
	    return OpalTabPanel;
	}(rionite_1.Component));
	OpalTabPanel = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-tab-panel',
	        props: {
	            shown: false
	        },
	        template: '<rt-content class="opal-tab-panel__content"></rt-content>'
	    })
	], OpalTabPanel);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalTabPanel;


/***/ },

/***/ 41:
/***/ function(module, exports) {

	module.exports = "<rt-content select=\"opal-tab-list\"> <opal-tab-list> <rt-content class=\"opal-tabs__tabs\" select=\"opal-tab\"></rt-content> </opal-tab-list> </rt-content> <rt-content class=\"opal-tabs__panels\" select=\"opal-tab-panel\"></rt-content>"

/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-tab__button\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-tab__content\"></rt-content> </span>"

/***/ },

/***/ 72:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tabs{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 73:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tab-list{display:block;padding:0 30px;border-bottom:1px solid #dbdbdb;white-space:nowrap;font-size:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 74:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tab{display:inline-block;line-height:0}.opal-tab .opal-tab__button{position:relative;display:block;padding:5px 22px;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:#000;text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-tab .opal-tab__content{position:relative;display:block}.opal-tab .opal-tab__button:hover{background:#e6e6e6}.opal-tab .opal-tab__button:focus{outline:none}body:not(._no-focus-highlight) .opal-tab .opal-tab__button:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-tab .opal-tab__button:active{background:#ccc}.opal-tab[selected] .opal-tab__button{box-shadow:0 3px #1b91f8}.opal-tab[disabled]{opacity:.5;pointer-events:none}.opal-tab[disabled] .opal-tab__button{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 75:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tab-panel{position:relative;display:none;padding:30px}.opal-tab-panel[shown]{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;