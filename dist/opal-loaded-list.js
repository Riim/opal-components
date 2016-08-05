(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-loaded-list"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-loaded-list"] = factory(root["cellx"], root["rionite"]);
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

	__webpack_require__(15);

	var _require = __webpack_require__(2);

	var mixin = _require.utils.mixin;
	var cellx = _require.cellx;

	var _require2 = __webpack_require__(3);

	var Component = _require2.Component;
	var getText = _require2.getText;
	var Rionite = _require2.Rionite;


	var createObject = Object.create;

	module.exports = Component.extend('opal-loaded-list', {
		Static: {
			props: {
				provider: String,
				nextCount: 100,
				query: String,
				itemAs: '$item',
				preloading: false
			},

			i18n: {
				notFoundMessage: getText.t('Ничего не найдено')
			},

			template: Rionite.template(__webpack_require__(16)),

			assets: {
				loader: {}
			}
		},

		_scrolling: false,

		_loadingCheckTimeout: null,
		_requestCallback: null,

		_lastRequestedQuery: void 0,
		_lastAppliedQuery: void 0,

		initialize: function initialize() {
			this.dataProvider = (this.ownerComponent || window)[this.props.provider];

			cellx.define(this, {
				list: cellx.list(),
				total: void 0,

				loadingCheckPlanned: false,
				loading: false,

				empty: function empty() {
					return !this.list.length;
				},
				notFoundShown: function notFoundShown() {
					return this.total === 0 && !this.loadingCheckPlanned && !this.loading;
				},
				loaderShown: function loaderShown() {
					return this.total === void 0 || this.list.length < this.total || this.loading;
				}
			});
		},
		elementAttached: function elementAttached() {
			var props = this.props;

			this.listenTo(this.element, 'scroll', this._onScroll);
			this.listenTo(props, 'change:query', this._onQueryChange);

			if (props.preloading) {
				this._load();
			} else {
				this.checkLoading();
			}
		},
		_onScroll: function _onScroll() {
			var _this = this;

			if (!this._scrolling) {
				this._scrolling = true;

				if (this.loadingCheckPlanned) {
					this._loadingCheckTimeout.clear();
				} else {
					this.loadingCheckPlanned = true;
				}

				this._loadingCheckTimeout = this.setTimeout(function () {
					_this.loadingCheckPlanned = false;
					_this.checkLoading();

					_this._scrolling = false;
				}, 150);
			}
		},
		_onQueryChange: function _onQueryChange() {
			var _this2 = this;

			if (this.loadingCheckPlanned) {
				this._loadingCheckTimeout.clear();
			} else {
				if (this._requestCallback) {
					this._requestCallback.cancel();
					this.loading = false;
				}

				this.list.clear();
				this.total = void 0;

				this.loadingCheckPlanned = true;
			}

			this._loadingCheckTimeout = this.setTimeout(function () {
				_this2.loadingCheckPlanned = false;
				_this2.checkLoading();
			}, 300);
		},
		checkLoading: function checkLoading() {
			if (this.props.query === this._lastRequestedQuery && (this.loading || this.total !== void 0 && this.list.length == this.total)) {
				return;
			}

			var elRect = this.element.getBoundingClientRect();

			if (!elRect.height || elRect.bottom < this.assets.loader.element.getBoundingClientRect().top) {
				return;
			}

			this._load();
		},
		_load: function _load() {
			var _this3 = this;

			if (this._requestCallback) {
				this._requestCallback.cancel();
			}

			var props = this.props;
			var list = this.list;
			var query = this._lastRequestedQuery = props.query;

			this.loading = true;

			this.dataProvider.getNext(props.nextCount, list.length ? list.get(-1).id : void 0, query).then(this._requestCallback = this.registerCallback(function (data) {
				_this3.loading = false;

				_this3.total = data.total;

				if (query === _this3._lastAppliedQuery) {
					list.addRange(data.items);
				} else {
					list.clear().addRange(data.items);
					_this3._lastAppliedQuery = query;
				}

				setTimeout(function () {
					_this3.checkLoading();
				}, 1);
			}));
		},
		_getContentContext: function _getContentContext(content) {
			return mixin(createObject(this.props.context), content.props.context);
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

/***/ 15:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-loaded-list{position:relative;display:block;overflow-y:auto;height:500px}.opal-loaded-list__not-found{position:absolute;top:0;right:0;bottom:0;left:0;display:none;text-align:center;white-space:nowrap}.opal-loaded-list__not-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-loaded-list__not-found-message{color:gray;vertical-align:middle;white-space:normal}.opal-loaded-list__not-found[shown]{display:inline-block}.opal-loaded-list__list-item{display:block}.opal-loaded-list__loader[align-center]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = "{{block list }} <div class=\"opal-loaded-list__list\"> {{block list_inner }} <template is=\"rt-repeat\" for=\"{props.itemAs} of list\" strip=\"\"> <rt-content class=\"opal-loaded-list__list-item\" get-context=\"_getContentContext\"></rt-content> </template> {{/block}} </div> {{/block}} {{block loader }} <opal-loader class=\"opal-loaded-list__loader\" shown=\"{loaderShown}\" align-center=\"{empty}\"></opal-loader> {{/block}} {{block not_found }} <div class=\"opal-loaded-list__not-found\" shown=\"{notFoundShown}\"> <span class=\"opal-loaded-list__not-found-message\">{{i18n.notFoundMessage}}</span> </div> {{/block}}"

/***/ }

/******/ })
});
;