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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(61);

	var _require = __webpack_require__(2),
	    nextUID = _require.Utils.nextUID,
	    cellx = _require.cellx;

	var _require2 = __webpack_require__(3),
	    IndexedList = _require2.IndexedList;

	var _require3 = __webpack_require__(1),
	    Component = _require3.Component,
	    ComponentTemplate = _require3.ComponentTemplate;

	var OpalMultirowRow = __webpack_require__(15);

	var filter = Array.prototype.filter;

	module.exports = Component.extend('opal-multirow', {
		Static: {
			OpalMultirowRow: OpalMultirowRow,

			template: new ComponentTemplate(__webpack_require__(33)),

			events: {
				':component': {
					'remove-row-click': function removeRowClick(_ref) {
						var _this = this;

						var row = _ref.target;

						if (row.props.preset) {
							this.$('preset-rows-container').element.removeChild(row.element);
							this._presetRowCount--;
						} else {
							this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
						}

						setTimeout(function () {
							_this.emit('remove-row');
							_this.emit('change');
						}, 1);
					},
					'add-row-click': function addRowClick() {
						var _this2 = this;

						this._newRows.add({ key: nextUID() });

						setTimeout(function () {
							_this2.emit('add-row');
							_this2.emit('change');
						}, 1);
					}
				}
			}
		},

		initialize: function initialize() {
			cellx.define(this, {
				_presetRowCount: 0,
				_newRows: new IndexedList(null, { indexes: ['key'] }),

				_notHavePresetRows: function _notHavePresetRows() {
					return !this._presetRowCount;
				},
				_notHaveNewRows: function _notHaveNewRows() {
					return !this._newRows.length;
				},
				_notSingleRow: function _notSingleRow() {
					return this._presetRowCount + this._newRows.length != 1;
				}
			});
		},
		ready: function ready() {
			var presetRowCount = this._presetRowCount = filter.call(this.element.getElementsByClassName('opal-multirow-row'), function (rowEl) {
				return rowEl.$c.props.preset;
			}).length;

			if (!presetRowCount) {
				this._newRows.add({ key: nextUID() });
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

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(62);

	var _require = __webpack_require__(1),
	    Component = _require.Component,
	    ComponentTemplate = _require.ComponentTemplate;

	module.exports = Component.extend('opal-multirow-row', {
		Static: {
			props: {
				preset: { default: false, readonly: true }
			},

			template: new ComponentTemplate(__webpack_require__(34)),

			events: {
				'btn-remove-row': {
					click: function click() {
						this.emit('remove-row-click');
					}
				},

				'btn-add-row': {
					click: function click() {
						this.emit('add-row-click');
					}
				}
			}
		}
	});

/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = "{{block preset_rows }} <rt-content class=\"opal-multirow__preset-rows-container\" select=\"opal-multirow-row[preset], .opal-multirow__preset-rows\" not-have-new-rows=\"{_notHaveNewRows}\" not-single-row=\"{_notSingleRow}\"></rt-content> {{/block}} <div class=\"opal-multirow__new-rows-container\" not-have-preset-rows=\"{_notHavePresetRows}\" not-single-row=\"{_notSingleRow}\"> <template is=\"rt-repeat\" for=\"row of _newRows\" track-by=\"key\" rt-silent=\"\"> {{block row }} <rt-content select=\"opal-multirow-row:not([preset])\" data-key=\"{row.key}\"></rt-content> {{/block}} </template> </div>"

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = "<rt-content class=\"opal-multirow-row__content\"></rt-content> {{block buttons }} <opal-sign-button class=\"opal-multirow-row__btn-remove-row\" sign=\"minus\"></opal-sign-button> <opal-sign-button class=\"opal-multirow-row__btn-add-row\" sign=\"plus\"></opal-sign-button> {{/block}}"

/***/ },

/***/ 61:
/***/ function(module, exports) {

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


/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-multirow-row{display:block;white-space:nowrap}.opal-multirow-row::after{display:table;clear:both;content:''}.opal-multirow-row .opal-multirow-row__content{display:inline-block;margin-bottom:20px;padding-right:6px}.opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow-row .opal-multirow-row__btn-add-row{position:relative;top:1px;display:none}.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__content,.opal-multirow__new-rows-container rt-content:last-child .opal-multirow-row .opal-multirow-row__content{margin-bottom:0}.opal-multirow__preset-rows-container[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__new-rows-container[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__btn-add-row,.opal-multirow__new-rows-container rt-content:last-child .opal-multirow-row .opal-multirow-row__btn-add-row{display:inline-block}.opal-multirow-row .opal-popover{white-space:normal}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;