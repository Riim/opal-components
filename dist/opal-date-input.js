(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-date-input"] = factory(require("rionite"));
	else
		root["opal-date-input"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	__webpack_require__(46);

	var _require = __webpack_require__(1);

	var Component = _require.Component;
	var template = _require.template;


	module.exports = Component.extend('opal-date-input', {
		Static: {
			props: {
				popoverTo: 'right'
			},

			template: template(__webpack_require__(24)),

			assets: {
				input: {
					'on-focusin': function onFocusin() {
						if (!this._documentMouseUpListening) {
							this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
						}
					}
				},

				calendarMenu: {},
				calendar: {}
			}
		},

		_onDocumentMouseUp: function _onDocumentMouseUp() {
			this._documentMouseUpListening.stop();
			this._documentMouseUpListening = null;

			if (this.assets.input.assets.input == document.activeElement) {
				this.assets.calendarMenu.open();
			}
		},
		_isExistDate: function _isExistDate(date) {
			date = date.split('/');

			var day = parseInt(date[0], 10);
			var month = parseInt(date[1], 10) - 1;
			var year = parseInt(date[2], 10);

			date = new Date(year, month, day);

			return day == date.getDate() && month == date.getMonth() && year == date.getFullYear();
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 24:
/***/ function(module, exports) {

	module.exports = "{{block validation }} <opal-validator> <opal-validator-rule test=\"_isExistDate\" popover-to=\"{props.popoverTo}\">Несуществующая дата</opal-validator-rule> <opal-input-mask mask=\"99/99/9999\"> {{block input }} <opal-text-input class=\"opal-date-input__input opal-validator__input opal-input-mask__input\" placeholder=\"dd/mm/yyyy\"></opal-text-input> {{/block}} </opal-input-mask> </opal-validator> {{/block}} {{block calendar_menu }} <opal-dropdown class=\"opal-date-input__calendar-menu\" auto-closing=\"\"> {{block calendar }} <opal-calendar class=\"opal-date-input__calendar\"></opal-calendar> {{/block}} </opal-dropdown> {{/block}}"

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-date-input{position:relative;display:inline-block}.opal-date-input .opal-date-input__calendar-menu{overflow:visible;padding:0;min-width:auto}.opal-date-input .opal-date-input__calendar{border:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;