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
	__webpack_require__(57);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(29);
	var mixin = cellx_1.Utils.mixin;
	var OpalLoadedList = (function (_super) {
	    __extends(OpalLoadedList, _super);
	    function OpalLoadedList() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._scrolling = false;
	        return _this;
	    }
	    OpalLoadedList.prototype.initialize = function () {
	        var props = this.props;
	        var dataProvider = props.dataprovider;
	        if (dataProvider || props.dataproviderKeypath) {
	            if (!dataProvider) {
	                dataProvider = Function("return this." + props.dataproviderKeypath + ";")
	                    .call(this.ownerComponent || window);
	                if (!dataProvider) {
	                    throw new TypeError('dataProvider is not defined');
	                }
	            }
	            this.dataProvider = dataProvider;
	        }
	        else {
	            throw new TypeError('Property "dataprovider" is required');
	        }
	        cellx_1.define(this, {
	            list: new cellx_1.ObservableList(),
	            total: undefined,
	            _loadingCheckPlanned: false,
	            loading: false,
	            empty: function () {
	                return !this.list.length;
	            },
	            notFoundShown: function () {
	                return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
	            },
	            loaderShown: function () {
	                return this.total === undefined || this.list.length < this.total || this.loading;
	            }
	        });
	    };
	    OpalLoadedList.prototype.elementAttached = function () {
	        if (this.props.preloading) {
	            this._load();
	        }
	        else {
	            this.checkLoading();
	        }
	    };
	    OpalLoadedList.prototype.checkLoading = function () {
	        if (this.props.query === this._lastRequestedQuery &&
	            (this.loading || this.total !== undefined && this.list.length == this.total)) {
	            return;
	        }
	        var elRect = this.element.getBoundingClientRect();
	        if (!elRect.height || elRect.bottom < this.$('loader').element.getBoundingClientRect().top) {
	            return;
	        }
	        this._load();
	    };
	    OpalLoadedList.prototype._load = function () {
	        if (this.loading) {
	            this._requestCallback.cancel();
	        }
	        var query = this._lastRequestedQuery = this.props.query;
	        var dataProvider = this.dataProvider;
	        var infinite = dataProvider.getItems.length >= 2;
	        var args = [query];
	        if (infinite) {
	            args.unshift(this.props.count, this.list.length ? this.list.get(-1).value : undefined);
	        }
	        this.loading = true;
	        dataProvider.getItems.apply(dataProvider, args).then(this._requestCallback = this.registerCallback(function (data) {
	            var _this = this;
	            this.loading = false;
	            var items = data.items;
	            this.total = infinite && data.total !== undefined ? data.total : items.length;
	            if (query === this._lastLoadedQuery) {
	                this.list.addRange(items);
	            }
	            else {
	                this.list.clear().addRange(items);
	                this._lastLoadedQuery = query;
	            }
	            cellx_1.Cell.forceRelease();
	            this.emit('loaded');
	            setTimeout(function () {
	                _this.checkLoading();
	            }, 1);
	        }));
	    };
	    OpalLoadedList.prototype._getContentContext = function (content) {
	        return mixin(Object.create(this.props.context), content.props.context);
	    };
	    return OpalLoadedList;
	}(rionite_1.Component));
	OpalLoadedList = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-loaded-list',
	        props: {
	            dataprovider: { type: Object, readonly: true },
	            dataproviderKeypath: { type: String, readonly: true },
	            count: 100,
	            query: String,
	            itemAs: { default: '$item', readonly: true },
	            preloading: { default: false, readonly: true }
	        },
	        i18n: {
	            notFound: rionite_1.getText.t('Ничего не найдено')
	        },
	        template: template,
	        events: {
	            ':component': {
	                'property-query-change': function () {
	                    var _this = this;
	                    if (this._loadingCheckPlanned) {
	                        this._loadingCheckTimeout.clear();
	                    }
	                    else {
	                        if (this.loading) {
	                            this._requestCallback.cancel();
	                            this.loading = false;
	                        }
	                        this.list.clear();
	                        this.total = undefined;
	                        this._loadingCheckPlanned = true;
	                    }
	                    this._loadingCheckTimeout = this.setTimeout(function () {
	                        _this._scrolling = false;
	                        _this._loadingCheckPlanned = false;
	                        _this.checkLoading();
	                    }, 300);
	                }
	            },
	            ':element': {
	                scroll: function () {
	                    var _this = this;
	                    if (this._scrolling) {
	                        return;
	                    }
	                    this._scrolling = true;
	                    if (this._loadingCheckPlanned) {
	                        this._loadingCheckTimeout.clear();
	                    }
	                    else {
	                        this._loadingCheckPlanned = true;
	                    }
	                    this._loadingCheckTimeout = this.setTimeout(function () {
	                        _this._scrolling = false;
	                        _this._loadingCheckPlanned = false;
	                        _this.checkLoading();
	                    }, 150);
	                }
	            }
	        }
	    })
	], OpalLoadedList);
	exports.default = OpalLoadedList;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\ndiv/list {\n@repeat (for={props.itemAs} of list) {\nrt-content/list-item (get-context=_getContentContext)\n}\n}\nopal-loader/loader (shown={loaderShown}, align-center={empty})\ndiv/not-found (shown={notFoundShown}) {\nspan/not-found-message { '{constructor.i18n.notFound}' }\n}\n}"

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-loaded-list{position:relative;display:block;overflow-x:hidden;overflow-y:auto;height:500px}.opal-loaded-list .opal-loaded-list__list-item{display:block}.opal-loaded-list .opal-loaded-list__loader[align-center]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.opal-loaded-list .opal-loaded-list__not-found{display:none;box-sizing:border-box;padding:10px;width:100%;height:100%;text-align:center;white-space:nowrap}.opal-loaded-list .opal-loaded-list__not-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-loaded-list .opal-loaded-list__not-found-message{display:inline-block;vertical-align:middle;opacity:.6}.opal-loaded-list .opal-loaded-list__not-found[shown]{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;