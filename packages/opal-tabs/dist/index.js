(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators", "cellx", "@riim/next-tick"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tabs"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"));
	else
		root["@riim/opal-tabs"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"], root["cellx"], root["@riim/next-tick"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 225);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
var OpalTab_1 = __webpack_require__(227);
exports.OpalTab = OpalTab_1.OpalTab;
__webpack_require__(230);
var template_nelm_1 = __webpack_require__(231);
var OpalTabList = /** @class */ (function (_super) {
    __extends(OpalTabList, _super);
    function OpalTabList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTabList = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTabList);
    return OpalTabList;
}(rionite_1.BaseComponent));
exports.OpalTabList = OpalTabList;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(226));


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
var OpalTabList_1 = __webpack_require__(21);
exports.OpalTab = OpalTabList_1.OpalTab;
var OpalTabPanel_1 = __webpack_require__(232);
exports.OpalTabPanel = OpalTabPanel_1.OpalTabPanel;
__webpack_require__(235);
var template_nelm_1 = __webpack_require__(236);
var OpalTabList_2 = __webpack_require__(21);
exports.OpalTabList = OpalTabList_2.OpalTabList;
var indexOf = Array.prototype.indexOf;
var forEach = Array.prototype.forEach;
var find = Array.prototype.find;
var OpalTabs = /** @class */ (function (_super) {
    __extends(OpalTabs, _super);
    function OpalTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectedTab = null;
        return _this;
    }
    OpalTabs.prototype.ready = function () {
        var _this = this;
        var tabs = (this.tabs = this.element.getElementsByClassName('OpalTab'));
        var tabPanels = (this.tabPanels = this.element.getElementsByClassName('OpalTabPanel'));
        var selectedTab;
        var selectedTabIndex;
        forEach.call(tabs, function (tabEl, index) {
            var tab = tabEl.$component;
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
            selectedTab = this._selectedTab = tabs[0].$component;
            selectedTabIndex = 0;
            selectedTab.select();
        }
        tabPanels[selectedTabIndex].$component.paramShown = true;
    };
    OpalTabs.prototype.elementAttached = function () {
        this.listenTo(this.element.getElementsByClassName('OpalTabList')[0].$component, {
            '<OpalTab>select': this._onTabListSelect,
            '<OpalTab>deselect': this._onTabListDeselect
        });
    };
    OpalTabs.prototype._onTabListSelect = function (evt) {
        this._selectTab(evt.target);
    };
    OpalTabs.prototype._onTabListDeselect = function (evt) {
        evt.target.select();
    };
    OpalTabs.prototype.goToTab = function (label) {
        if (this._selectedTab && this._selectedTab.paramLabel === label) {
            return true;
        }
        var tab = find.call(this.tabs, function (tab) { return tab.$component.paramLabel == label; });
        if (tab) {
            this._selectTab(tab.$component);
            return true;
        }
        return false;
    };
    OpalTabs.prototype._selectTab = function (tab) {
        var selectedTab = this._selectedTab;
        if (selectedTab) {
            this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$component.paramShown = false;
            selectedTab.deselect();
        }
        this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.paramShown = true;
        tab.select();
        this._selectedTab = tab;
    };
    OpalTabs = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTabs);
    return OpalTabs;
}(rionite_1.BaseComponent));
exports.OpalTabs = OpalTabs;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var next_tick_1 = __webpack_require__(4);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(228);
var template_nelm_1 = __webpack_require__(229);
var OpalTab = /** @class */ (function (_super) {
    __extends(OpalTab, _super);
    function OpalTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSelected = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramHidden = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalTab.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalTab.prototype.ready = function () {
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalTab.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalTab.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
            }
        });
    };
    OpalTab.prototype._onControlBlur = function () {
        this.paramFocused = false;
    };
    OpalTab.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.paramDisabled) {
            this.click();
        }
    };
    OpalTab.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        return this;
    };
    Object.defineProperty(OpalTab.prototype, "selected", {
        get: function () {
            return this.paramSelected;
        },
        set: function (selected) {
            this.paramSelected = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.select = function () {
        if (!this.paramSelected) {
            this.paramSelected = true;
            return true;
        }
        return false;
    };
    OpalTab.prototype.deselect = function () {
        if (this.paramSelected) {
            this.paramSelected = false;
            return true;
        }
        return false;
    };
    OpalTab.prototype.toggle = function (value) {
        return (this.paramSelected = value === undefined ? !this.paramSelected : value);
    };
    OpalTab.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalTab.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalTab.prototype.enable = function () {
        this.paramDisabled = false;
        return this;
    };
    OpalTab.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
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
            template: template_nelm_1.default
        })
    ], OpalTab);
    return OpalTab;
}(rionite_1.BaseComponent));
exports.OpalTab = OpalTab;


/***/ }),

/***/ 228:
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

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabIndex={_tabIndex}) {\nRtSlot/contentSlot\n}\n}");

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabList{display:block;padding:0 30px;border-bottom:1px solid #dbdbdb;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/contentSlot\n}");

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var cellx_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(233);
var template_nelm_1 = __webpack_require__(234);
var OpalTabPanel = /** @class */ (function (_super) {
    __extends(OpalTabPanel, _super);
    function OpalTabPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramShown = false;
        _this.isContentRendered = false;
        return _this;
    }
    OpalTabPanel.prototype.initialize = function () {
        this.listenTo(this, 'change:paramShown', this._onParamShownChange);
    };
    OpalTabPanel.prototype._onParamShownChange = function (evt) {
        if (evt.data.value) {
            this.isContentRendered = true;
        }
    };
    OpalTabPanel.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTabPanel.prototype, "paramShown", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTabPanel.prototype, "isContentRendered", void 0);
    OpalTabPanel = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTabPanel);
    return OpalTabPanel;
}(rionite_1.BaseComponent));
exports.OpalTabPanel = OpalTabPanel;


/***/ }),

/***/ 233:
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

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (if=isContentRendered) {\nRtSlot/contentSlot\n}\n}");

/***/ }),

/***/ 235:
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

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/tabListSlot (forTag=opal-tab-list) {\nOpalTabList/tabList {\nRtSlot/tabs, tabs (forTag=opal-tab)\n}\n}\nRtSlot/tabPanels, tabPanels (forTag=opal-tab-panel)\n}");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })

/******/ });
});