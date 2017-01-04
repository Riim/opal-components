(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-autosuggestion"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-autosuggestion"] = factory(root["rionite"], root["cellx"]);
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

	__webpack_require__(45);

	var _require = __webpack_require__(2),
	    Cell = _require.Cell,
	    cellx = _require.cellx;

	var _require2 = __webpack_require__(1),
	    getText = _require2.getText,
	    Component = _require2.Component;

	function toComparable(str) {
		return str.trim().replace(/\s+/g, ' ').toLowerCase();
	}

	module.exports = Component.extend('opal-autosuggestion', {
		Static: {
			props: {
				dataprovider: { type: String, required: true, readonly: true },
				selectedItem: Object,
				minQueryLength: 3,
				count: 5
			},

			i18n: {
				inputPlaceholder: getText.t('начните вводить для поиска')
			},

			bemlTemplate: __webpack_require__(42),

			events: {
				input: {
					focusin: function focusin() {
						this.openMenu();
					},
					focusout: function focusout() {
						this._cancelLoading();

						if (!this.$('menu').props.opened) {
							this._setSelectedItemOfList();
						}
					},
					input: function input(evt) {
						var _this = this;

						this._wasInputAfterSelecting = true;

						this.closeMenu();

						this._cancelLoading();
						this.list.clear();

						if (evt.target.value.length >= this.props.minQueryLength) {
							this._loadingPlanned = true;

							this._loadingTimeout = this.setTimeout(function () {
								_this._loadingPlanned = false;
								_this._load();
							}, 300);
						}
					}
				}
			}
		},

		_wasInputAfterSelecting: false,

		_loadingTimeout: null,
		_requestCallback: null,

		_listItems: null,
		_focusedListItem: null,

		initialize: function initialize() {
			this.dataProvider = Function('return this.' + this.props.dataprovider + ';').call(this.ownerComponent || window);

			cellx.define(this, {
				list: cellx.list(),

				_loadingPlanned: false,
				loading: false,

				loaderShown: function loaderShown() {
					return this._loadingPlanned || this.loading;
				},


				selectedItem: this.props.selectedItem
			});
		},
		ready: function ready() {
			this._listItems = this.$('list').getElementsByClassName('opal-autosuggestion__list-item');
		},
		elementAttached: function elementAttached() {
			this.listenTo(this.$('input').$('input'), 'click', this._onInputClick);
			this.listenTo(this.$('menu').props, 'change:opened', this._onMenuOpenedChange);
			this.listenTo(this.list, 'change', this._onListChange);
			this.listenTo(this, 'change:loaderShown', this._onLoaderShownChange);
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'selected-item') {
				this.selectedItem = value;
				this.$('input').value = value ? value.text : '';
			}
		},
		_load: function _load() {
			var _this2 = this;

			this.loading = true;

			var dataProvider = this.dataProvider;
			var args = [this.$('input').value];

			if (dataProvider.getItems.length >= 2) {
				args.unshift(this.props.count);
			}

			dataProvider.getItems.apply(dataProvider, args).then(this._requestCallback = this.registerCallback(function (data) {
				_this2.loading = false;

				var items = data.items;

				if (items.length) {
					_this2.list.addRange(items);

					Cell.afterRelease(function () {
						var focusedListItem = _this2._focusedListItem = _this2._listItems[0];
						focusedListItem.setAttribute('focused', '');
					});
				}
			}));
		},
		_onInputClick: function _onInputClick() {
			this.openMenu();
		},
		_onMenuOpenedChange: function _onMenuOpenedChange(evt) {
			if (evt.value) {
				this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
			} else {
				this._documentFocusInListening.stop();
				this._documentKeyDownListening.stop();
				this._documentMouseUpListening.stop();
			}
		},
		_onListChange: function _onListChange() {
			this.openMenu();
		},
		_onLoaderShownChange: function _onLoaderShownChange(evt) {
			this.$('input').props.loading = evt.value;
		},
		_onDocumentFocusIn: function _onDocumentFocusIn() {
			if (document.activeElement != document.body && !this.element.contains(document.activeElement.parentNode)) {
				this.closeMenu();
				this._setSelectedItemOfList();
			}
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			switch (evt.which) {
				case 38 /* Up */:
				case 40 /* Bottom */:
					{
						var focusedListItem = this._focusedListItem;

						if (focusedListItem) {
							evt.preventDefault();

							var newFocusedListItem = this._focusedListItem[evt.which == 38 ? 'previousElementSibling' : 'nextElementSibling'];

							if (newFocusedListItem && newFocusedListItem.tagName != 'TEMPLATE') {
								this._focusedListItem.removeAttribute('focused');
								this._focusedListItem = newFocusedListItem;

								newFocusedListItem.setAttribute('focused', '');
							}
						}

						break;
					}
				case 13 /* Enter */:
				case 39 /* Right */:
					{
						var _focusedListItem = this._focusedListItem;

						if (_focusedListItem) {
							evt.preventDefault();

							var focusedListItemDataSet = _focusedListItem.dataset;

							this.$('input').value = focusedListItemDataSet.text;

							this.closeMenu();

							this._setSelectedItem({
								value: focusedListItemDataSet.value,
								text: focusedListItemDataSet.text
							});
						}

						break;
					}
				case 27 /* Esc */:
					{
						evt.preventDefault();
						this.closeMenu();
						this._setSelectedItemOfList();
						break;
					}
			}
		},
		_onDocumentMouseUp: function _onDocumentMouseUp() {
			var _this3 = this;

			setTimeout(function () {
				if (document.activeElement != _this3.$('input').$('input')) {
					_this3.closeMenu();
					_this3._setSelectedItemOfList();
				}
			}, 1);
		},
		_onListItemClick: function _onListItemClick(evt, listItem) {
			var input = this.$('input');
			var listItemDataSet = listItem.dataset;

			input.value = listItemDataSet.text;
			input.focus();

			this.closeMenu();

			this._setSelectedItem({
				value: listItemDataSet.value,
				text: listItemDataSet.text
			});
		},
		openMenu: function openMenu() {
			if (this.list.length) {
				this.$('menu').open();
			}
		},
		closeMenu: function closeMenu() {
			this.$('menu').close();
		},
		_cancelLoading: function _cancelLoading() {
			if (this._loadingPlanned) {
				this._loadingPlanned = false;
				this._loadingTimeout.clear();
			} else if (this.loading) {
				this._requestCallback.cancel();
				this.loading = false;
			}
		},
		_setSelectedItemOfList: function _setSelectedItemOfList() {
			var _this4 = this;

			if (this._wasInputAfterSelecting) {
				(function () {
					var comparableQuery = toComparable(_this4.$('input').value);
					_this4._setSelectedItem(_this4.list.find(function (item) {
						return toComparable(item.text) == comparableQuery;
					}) || null);
				})();
			}
		},
		_setSelectedItem: function _setSelectedItem(selectedItem) {
			if (selectedItem ? !this.selectedItem || this.selectedItem.value != selectedItem.value : this.selectedItem) {
				this._wasInputAfterSelecting = false;
				this.selectedItem = selectedItem;
				this.emit('change');
			}
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

/***/ 42:
/***/ function(module, exports) {

	module.exports = "rt-content (select=.opal-autosuggestion__input) {\nopal-text-input /input (\nvalue={props.selectedItem.text},\nplaceholder={constructor.i18n.inputPlaceholder},\nloading={loaderShown}\n)\n}\nopal-dropdown /menu {\ndiv /list {\ntemplate (is=rt-repeat, for=item of list, strip, rt-silent) {\ndiv /list-item (data-value={item.value}, data-text={item.text}, rt-click=_onListItemClick) {\n'{item.text}'\n}\n}\n}\n}"

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-autosuggestion{position:relative;display:inline-block;vertical-align:middle;line-height:0}.opal-autosuggestion .opal-autosuggestion__input{display:block}.opal-autosuggestion .opal-autosuggestion__list-item{position:relative;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-autosuggestion .opal-autosuggestion__list-item:hover,.opal-autosuggestion .opal-autosuggestion__list-item[focused]{background:#e6e6e6}.opal-autosuggestion .opal-autosuggestion__list-item:active{background:#ccc}.opal-input-validator .opal-autosuggestion{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;