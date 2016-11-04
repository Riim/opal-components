(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-loaded-list"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-loaded-list"] = factory(root["rionite"], root["cellx"]);
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

	__webpack_require__(58);

	var _require = __webpack_require__(2);

	var mixin = _require.Utils.mixin;
	var cellx = _require.cellx;

	var _require2 = __webpack_require__(1);

	var getText = _require2.getText;
	var ComponentTemplate = _require2.ComponentTemplate;
	var Component = _require2.Component;


	module.exports = Component.extend('opal-loaded-list', {
		Static: {
			props: {
				dataprovider: { type: String, required: true, readonly: true },
				count: 100,
				query: String,
				itemAs: { default: '$item', readonly: true },
				preloading: { default: false, readonly: true }
			},

			i18n: {
				notFoundMessage: getText.t('Ничего не найдено')
			},

			template: new ComponentTemplate(__webpack_require__(31))
		},

		_scrolling: false,

		_loadingCheckTimeout: null,
		_requestCallback: null,

		_lastRequestedQuery: void 0,
		_lastAppliedQuery: void 0,

		initialize: function initialize() {
			var dataProvider = Function('return this.' + this.props.dataprovider + ';').call(this.ownerComponent || window);

			if (!dataProvider) {
				throw new TypeError('dataProvider is not defined');
			}

			this.dataProvider = dataProvider;

			cellx.define(this, {
				list: cellx.list(),
				total: void 0,

				_loadingCheckPlanned: false,
				loading: false,

				empty: function empty() {
					return !this.list.length;
				},
				notFoundShown: function notFoundShown() {
					return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
				},
				loaderShown: function loaderShown() {
					return this.total === void 0 || this.list.length < this.total || this.loading;
				}
			});
		},
		elementAttached: function elementAttached() {
			this.listenTo(this.element, 'scroll', this._onScroll);
			this.listenTo(this.props, 'change:query', this._onQueryChange);

			if (this.props.preloading) {
				this._load();
			} else {
				this.checkLoading();
			}
		},
		_onScroll: function _onScroll() {
			var _this = this;

			if (!this._scrolling) {
				this._scrolling = true;

				if (this._loadingCheckPlanned) {
					this._loadingCheckTimeout.clear();
				} else {
					this._loadingCheckPlanned = true;
				}

				this._loadingCheckTimeout = this.setTimeout(function () {
					_this._loadingCheckPlanned = false;
					_this.checkLoading();

					_this._scrolling = false;
				}, 150);
			}
		},
		_onQueryChange: function _onQueryChange() {
			var _this2 = this;

			if (this._loadingCheckPlanned) {
				this._loadingCheckTimeout.clear();
			} else {
				if (this.loading) {
					this._requestCallback.cancel();
					this.loading = false;
				}

				this.list.clear();
				this.total = void 0;

				this._loadingCheckPlanned = true;
			}

			this._loadingCheckTimeout = this.setTimeout(function () {
				_this2._loadingCheckPlanned = false;
				_this2.checkLoading();
			}, 300);
		},
		checkLoading: function checkLoading() {
			if (this.props.query === this._lastRequestedQuery && (this.loading || this.total !== void 0 && this.list.length == this.total)) {
				return;
			}

			var elRect = this.element.getBoundingClientRect();

			if (!elRect.height || elRect.bottom < this.$('loader').element.getBoundingClientRect().top) {
				return;
			}

			this._load();
		},
		_load: function _load() {
			var _this3 = this;

			if (this.loading) {
				this._requestCallback.cancel();
			}

			var query = this._lastRequestedQuery = this.props.query;
			var dataProvider = this.dataProvider;
			var infinite = dataProvider.getItems.length >= 2;
			var args = [query];

			if (infinite) {
				args.unshift(this.props.count, this.list.length ? this.list.get(-1).value : null);
			}

			this.loading = true;

			dataProvider.getItems.apply(dataProvider, args).then(this._requestCallback = this.registerCallback(function (data) {
				_this3.loading = false;

				var items = data.items;

				_this3.total = infinite && data.total !== void 0 ? data.total : items.length;

				if (query === _this3._lastAppliedQuery) {
					_this3.list.addRange(items);
				} else {
					_this3.list.clear().addRange(items);
					_this3._lastAppliedQuery = query;
				}

				setTimeout(function () {
					_this3.checkLoading();
				}, 1);

				_this3.emit('loaded');
			}));
		},
		_getContentContext: function _getContentContext(content) {
			return mixin(Object.create(this.props.context), content.props.context);
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

/***/ 31:
/***/ function(module, exports) {

	module.exports = "{{block list }} <div class=\"opal-loaded-list__list\"> {{block list_inner }} <template is=\"rt-repeat\" for=\"{props.itemAs} of list\" strip=\"\"> <rt-content class=\"opal-loaded-list__list-item\" get-context=\"_getContentContext\"></rt-content> </template> {{/block}} </div> {{/block}} {{block loader }} <opal-loader class=\"opal-loaded-list__loader\" shown=\"{loaderShown}\" align-center=\"{empty}\"></opal-loader> {{/block}} {{block not_found }} <div class=\"opal-loaded-list__not-found\" shown=\"{notFoundShown}\"><span class=\"opal-loaded-list__not-found-message\">{{i18n.notFoundMessage}}</span></div> {{/block}}"

/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-loaded-list{position:relative;display:block;overflow-x:hidden;overflow-y:auto;height:500px}.opal-loaded-list .opal-loaded-list__list-item{display:block}.opal-loaded-list .opal-loaded-list__loader[align-center]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.opal-loaded-list .opal-loaded-list__not-found{display:none;box-sizing:border-box;padding:10px;width:100%;height:100%;text-align:center;white-space:nowrap}.opal-loaded-list .opal-loaded-list__not-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-loaded-list .opal-loaded-list__not-found-message{display:inline-block;color:gray;vertical-align:middle}.opal-loaded-list .opal-loaded-list__not-found[shown]{display:inline-block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;