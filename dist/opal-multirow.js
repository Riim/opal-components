(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx", "cellx-indexed-collections"], factory);
	else if(typeof exports === 'object')
		exports["opal-multirow"] = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"));
	else
		root["opal-multirow"] = factory(root["rionite"], root["cellx"], root["cellx-indexed-collections"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
	__webpack_require__(60);
	var cellx_1 = __webpack_require__(2);
	var cellx_indexed_collections_1 = __webpack_require__(3);
	var rionite_1 = __webpack_require__(1);
	var opal_multirow_row_1 = __webpack_require__(16);
	var template = __webpack_require__(31);
	var nextUID = cellx_1.Utils.nextUID;
	var filter = Array.prototype.filter;
	var OpalMultirow = (function (_super) {
	    __extends(OpalMultirow, _super);
	    function OpalMultirow() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalMultirow.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _presetRowCount: 0,
	            _newRows: new cellx_indexed_collections_1.IndexedList(undefined, { indexes: ['key'] }),
	            _notHaveNewRows: function () {
	                return !this._newRows.length;
	            },
	            _notSingleRow: function () {
	                return this._presetRowCount + this._newRows.length != 1;
	            }
	        });
	    };
	    OpalMultirow.prototype.ready = function () {
	        var presetRowCount = this._presetRowCount = filter.call(this.element.getElementsByClassName('opal-multirow-row'), function (rowEl) { return rowEl.$c.props.preset; }).length;
	        if (!presetRowCount) {
	            this._newRows.add({ key: nextUID() });
	        }
	    };
	    return OpalMultirow;
	}(rionite_1.Component));
	OpalMultirow.OpalMultirowRow = opal_multirow_row_1.default;
	OpalMultirow = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-multirow',
	        bemlTemplate: template,
	        events: {
	            ':component': {
	                '<opal-multirow-row>remove-row-click': function (evt) {
	                    var _this = this;
	                    var row = evt.target;
	                    if (row.props.preset) {
	                        this.$('preset-rows-container').element.removeChild(row.element);
	                        this._presetRowCount--;
	                    }
	                    else {
	                        this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
	                    }
	                    setTimeout(function () {
	                        _this.emit('remove-row');
	                        _this.emit('change');
	                    }, 1);
	                },
	                '<opal-multirow-row>add-row-click': function () {
	                    var _this = this;
	                    this._newRows.add({ key: nextUID() });
	                    setTimeout(function () {
	                        _this.emit('add-row');
	                        _this.emit('change');
	                    }, 1);
	                }
	            }
	        }
	    })
	], OpalMultirow);
	exports.default = OpalMultirow;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 16:
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
	__webpack_require__(61);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(32);
	var OpalMultirowRow = (function (_super) {
	    __extends(OpalMultirowRow, _super);
	    function OpalMultirowRow() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return OpalMultirowRow;
	}(rionite_1.Component));
	OpalMultirowRow = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-multirow-row',
	        props: {
	            preset: { default: false, readonly: true }
	        },
	        bemlTemplate: template,
	        events: {
	            'btn-remove-row': {
	                click: function () {
	                    this.emit('remove-row-click');
	                }
	            },
	            'btn-add-row': {
	                click: function () {
	                    this.emit('add-row-click');
	                }
	            }
	        }
	    })
	], OpalMultirowRow);
	exports.default = OpalMultirowRow;


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nrt-content/preset-rows-container (\nselect='opal-multirow-row[preset], .opal-multirow__preset-rows',\nnot-have-new-rows={_notHaveNewRows},\nnot-single-row={_notSingleRow},\ncloning=no\n)\ndiv/new-rows (not-single-row={_notSingleRow}) {\n@repeat (for=row of _newRows, track-by=key, rt-silent) {\nrt-content/new-row-container (select='opal-multirow-row:not([preset])', data-key={row.key})\n}\n}\n}"

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nrt-content/content (cloning=no)\n' '\nopal-sign-button/btn-remove-row (sign=minus)\n' '\nopal-sign-button/btn-add-row (sign=plus)\n}"

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-multirow{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-multirow-row{display:block;white-space:nowrap}.opal-multirow-row::after{display:table;clear:both;content:''}.opal-multirow-row .opal-multirow-row__content{display:inline-block;margin-bottom:20px;padding-right:6px}.opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow-row .opal-multirow-row__btn-add-row{position:relative;top:1px;display:none}.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__content,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__content{margin-bottom:0}.opal-multirow__preset-rows-container[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__new-rows[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__btn-add-row,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__btn-add-row{display:inline-block}.opal-multirow-row .opal-popover{white-space:normal}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;