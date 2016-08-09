(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-tabs"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-tabs"] = factory(root["cellx"], root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	__webpack_require__(40);

	var _require = __webpack_require__(3);

	var Component = _require.Component;

	var OpalTabList = __webpack_require__(41);
	var OpalTabPanel = __webpack_require__(46);

	var indexOf = Array.prototype.indexOf;
	var forEach = Array.prototype.forEach;

	module.exports = Component.extend('opal-tabs', {
		Static: {
			OpalTabList: OpalTabList,
			OpalTabPanel: OpalTabPanel,

			template: __webpack_require__(48),

			assets: {
				tabList: {
					selector: '.opal-tab-list',

					'on-select': function onSelect(_ref) {
						var tab = _ref.target;

						var selectedTab = this._selectedTab;

						if (selectedTab) {
							this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$c.props.shown = false;
							selectedTab.deselect();
						}

						this.tabPanels[indexOf.call(this.tabs, tab.element)].$c.props.shown = true;
						this._selectedTab = tab;
					},
					'on-deselect': function onDeselect(_ref2) {
						var tab = _ref2.target;

						tab.select();
					}
				}
			}
		},

		_selectedTab: null,

		ready: function ready() {
			var _this = this;

			var tabs = this.tabs = this.element.getElementsByClassName('opal-tab');
			var tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel');

			var selectedTab = void 0;
			var selectedTabIndex = void 0;

			forEach.call(tabs, function (_ref3, index) {
				var tab = _ref3.$c;

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
		}
	});

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 40:
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

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(42);

	var _require = __webpack_require__(3);

	var Component = _require.Component;

	var OpalTab = __webpack_require__(43);

	module.exports = Component.extend('opal-tab-list', {
		Static: {
			OpalTab: OpalTab,
			template: '<rt-content class="opal-tab-list__content"></rt-content>'
		}
	});

/***/ },

/***/ 42:
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

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(44);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-tab', {
		Static: {
			props: {
				selected: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(45),

			assets: {
				control: {
					'on-focusin': function onFocusin() {
						this.props.focused = true;
					},
					'on-focusout': function onFocusout() {
						this.props.focused = false;
					},
					'on-click': function onClick() {
						this._click();
					}
				}
			}
		},

		_focused: false,

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
				this[value ? 'focus' : 'blur']();
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
			if (!this._focused) {
				this._focused = true;

				this.assets.control.focus();
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}

			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTab;
	  */
		blur: function blur() {
			if (this._focused) {
				this._focused = false;

				this.assets.control.blur();
				this._documentKeyDownListening.stop();
			}

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

/***/ 44:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tab{display:inline-block}.opal-tab__control{position:relative;display:block;padding:5px 22px;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:#000;text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-tab__content{position:relative;display:block}.opal-tab__control:hover{background:#e6e6e6}.opal-tab__control:focus{outline:none}body:not(._no-focus-highlight) .opal-tab__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-tab__control:active{background:#ccc}.opal-tab[selected] .opal-tab__control{box-shadow:0 3px #1b91f8}.opal-tab[disabled]{opacity:.5;pointer-events:none}.opal-tab[disabled] .opal-tab__control{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-tab__control\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-tab__content\"></rt-content> </span>"

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(47);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-tab-panel', {
		Static: {
			props: {
				shown: false
			},

			template: '<rt-content class="opal-tab-panel__content"></rt-content>'
		}
	});

/***/ },

/***/ 47:
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


/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = "<rt-content select=\"opal-tab-list\"> <opal-tab-list> <rt-content class=\"opal-tabs__tabs\" select=\"opal-tab\"></rt-content> </opal-tab-list> </rt-content> <rt-content class=\"opal-tabs__panels\" select=\"opal-tab-panel\"></rt-content>"

/***/ }

/******/ })
});
;