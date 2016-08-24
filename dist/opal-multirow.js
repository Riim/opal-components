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

	__webpack_require__(54);

	var _require = __webpack_require__(2);

	var nextUID = _require.utils.nextUID;
	var cellx = _require.cellx;

	var _require2 = __webpack_require__(3);

	var IndexedList = _require2.IndexedList;

	var _require3 = __webpack_require__(1);

	var Component = _require3.Component;
	var template = _require3.template;

	var OpalMultirowRow = __webpack_require__(9);

	module.exports = Component.extend('opal-multirow', {
		Static: {
			OpalMultirowRow: OpalMultirowRow,

			template: template(__webpack_require__(29)),

			assets: {
				':component': {
					'on-remove-row-click': function onRemoveRowClick(_ref) {
						var row = _ref.target;

						if (row.props.preset) {
							this.assets.presetRows.element.removeChild(row.element);
							this._presetRowCount--;
						} else {
							this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
						}
					},
					'on-add-row-click': function onAddRowClick() {
						this._newRows.add({ key: nextUID() });
					}
				},

				presetRows: {}
			}
		},

		initialize: function initialize() {
			cellx.define(this, {
				_presetRowCount: 0,
				_newRows: new IndexedList(null, { indexes: ['key'] }),

				_noPresetRows: function _noPresetRows() {
					return !this._presetRowCount;
				},
				_noNewRows: function _noNewRows() {
					return !this._newRows.length;
				},
				_notLastRow: function _notLastRow() {
					return this._presetRowCount + this._newRows.length != 1;
				}
			});
		},
		ready: function ready() {
			var presetRowCount = this._presetRowCount = this.$$('.opal-multirow-row').filter(function (row) {
				return row.props.preset;
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

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(55);

	var _require = __webpack_require__(1);

	var Component = _require.Component;
	var template = _require.template;


	module.exports = Component.extend('opal-multirow-row', {
		Static: {
			props: {
				preset: false
			},

			template: template(__webpack_require__(30)),

			assets: {
				btnRemoveRow: {
					'on-click': function onClick() {
						this.emit('remove-row-click');
					}
				},

				btnAddRow: {
					'on-click': function onClick() {
						this.emit('add-row-click');
					}
				}
			}
		},

		elementAttributeChanged: function elementAttributeChanged(name) {
			if (name == 'preset') {
				throw new TypeError('Property "preset" cannot be changed');
			}
		}
	});

/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = "{{block preset_rows }} <rt-content class=\"opal-multirow__preset-rows\" select=\"opal-multirow-row[preset]\" no-new-rows=\"{_noNewRows}\" not-last-row=\"{_notLastRow}\"></rt-content> {{/block}} <div class=\"opal-multirow__new-rows\" no-preset-rows=\"{_noPresetRows}\" not-last-row=\"{_notLastRow}\"> <template is=\"rt-repeat\" for=\"row of _newRows\" track-by=\"key\"> {{block row }} <rt-content select=\"opal-multirow-row:not([preset])\" data-key=\"{row.key}\"></rt-content> {{/block}} </template> </div>"

/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "<rt-content class=\"opal-multirow-row__content\"></rt-content> {{block buttons }} <opal-sign-button class=\"opal-multirow-row__btn-remove-row\" sign=\"minus\"></opal-sign-button> <opal-sign-button class=\"opal-multirow-row__btn-add-row\" sign=\"plus\"></opal-sign-button> {{/block}}"

/***/ },

/***/ 54:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = "";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-multirow-row{display:block}.opal-multirow-row::after{display:table;clear:both;content:''}.opal-multirow-row .opal-multirow-row__content{float:left;margin-right:3px;margin-bottom:19px}.opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow-row .opal-multirow-row__btn-add-row{display:none;float:left;margin-top:4px;margin-left:6px}.opal-multirow__preset-rows[not-last-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__new-rows[not-last-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__preset-rows[no-new-rows] .opal-multirow-row:last-child .opal-multirow-row__btn-add-row,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__btn-add-row{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;