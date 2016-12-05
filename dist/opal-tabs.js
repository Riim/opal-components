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

	'use strict';

	__webpack_require__(72);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	var OpalTabList = __webpack_require__(18);
	var OpalTabPanel = __webpack_require__(20);

	var indexOf = Array.prototype.indexOf;
	var forEach = Array.prototype.forEach;

	module.exports = Component.extend('opal-tabs', {
		Static: {
			OpalTabList: OpalTabList,
			OpalTabPanel: OpalTabPanel,

			template: __webpack_require__(41)
		},

		_selectedTab: null,

		ready: function ready() {
			var _this = this;

			var tabs = this.tabs = this.element.getElementsByClassName('opal-tab');
			var tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel');

			var selectedTab = void 0;
			var selectedTabIndex = void 0;

			forEach.call(tabs, function (_ref, index) {
				var tab = _ref.$c;

				if (tab.selected) {
					if (selectedTab) {
						tab.deselect();
					} else {
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

			tabPanels[selectedTabIndex].$c.props.shown = true;
		},
		elementAttached: function elementAttached() {
			this.listenTo(this.element.getElementsByClassName('opal-tab-list')[0].$c, {
				select: this._onTabListSelect,
				deselect: this._onTabListDeselect
			});
		},
		_onTabListSelect: function _onTabListSelect(_ref2) {
			var tab = _ref2.target;

			var selectedTab = this._selectedTab;

			if (selectedTab) {
				this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$c.props.shown = false;
				selectedTab.deselect();
			}

			this.tabPanels[indexOf.call(this.tabs, tab.element)].$c.props.shown = true;
			this._selectedTab = tab;
		},
		_onTabListDeselect: function _onTabListDeselect(_ref3) {
			var tab = _ref3.target;

			tab.select();
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(73);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	var OpalTab = __webpack_require__(19);

	module.exports = Component.extend('opal-tab-list', {
		Static: {
			OpalTab: OpalTab,
			template: '<rt-content class="opal-tab-list__content"></rt-content>'
		}
	});

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(74);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	module.exports = Component.extend('opal-tab', {
		Static: {
			props: {
				selected: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(42),

			events: {
				button: {
					focusin: function focusin() {
						this.props.focused = true;
					},
					focusout: function focusout() {
						this.props.focused = false;
					},
					click: function click() {
						this._click();
					}
				}
			}
		},

		initialize: function initialize() {
			cellx.define(this, {
				_tabIndex: function _tabIndex() {
					return this.props.disabled ? -1 : this.props.tabIndex;
				}
			});
		},
		ready: function ready() {
			if (this.props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'focused') {
				if (value) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					this.focus();
				} else {
					this._documentKeyDownListening.stop();
					this.blur();
				}
			}
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
					evt.preventDefault();

					if (!this.props.disabled) {
						this._click();
					}
				}
		},
		_click: function _click() {
			this.emit(this.toggle() ? 'select' : 'deselect');
		},


		/**
	  * @type {boolean}
	  */
		get selected() {
			return this.props.selected;
		},
		set selected(selected) {
			this.props.selected = selected;
		},

		/**
	  * @typesign () -> boolean;
	  */
		select: function select() {
			if (!this.props.selected) {
				this.props.selected = true;
				return true;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		deselect: function deselect() {
			if (this.props.selected) {
				this.props.selected = false;
				return true;
			}

			return false;
		},


		/**
	  * @typesign (value?: boolean) -> boolean;
	  */
		toggle: function toggle(value) {
			return this.props.selected = value === void 0 ? !this.props.selected : value;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTab;
	  */
		focus: function focus() {
			this.$('button').focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTab;
	  */
		blur: function blur() {
			this.$('button').blur();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTab;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTab;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(75);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	module.exports = Component.extend('opal-tab-panel', {
		Static: {
			props: {
				shown: false
			},

			template: '<rt-content class="opal-tab-panel__content"></rt-content>'
		}
	});

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