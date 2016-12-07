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

	__webpack_require__(51);

	var _require = __webpack_require__(1),
	    getText = _require.getText,
	    Component = _require.Component,
	    ComponentTemplate = _require.ComponentTemplate;

	var isExistDate = __webpack_require__(8);

	module.exports = Component.extend('opal-date-input', {
		Static: {
			props: {
				mask: '99/99/9999',
				value: String,
				placeholder: 'dd/mm/yyyy',
				required: { default: false, readonly: true },
				popoverTo: 'right'
			},

			i18n: {
				nonExistentDate: getText.t('Несуществующая дата'),
				isRequiredField: getText.t('Поле обязательно для заполнения')
			},

			template: new ComponentTemplate(__webpack_require__(27))
		},

		isExistDate: isExistDate
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";

	function isExistDate(date) {
		date = date.match(/\d+/g);

		var day = parseInt(date[0], 10);
		var month = parseInt(date[1], 10) - 1;
		var year = parseInt(date[2], 10);

		if (year < 100) {
			year += 1900;
		}

		date = new Date(year, month, day);

		return day == date.getDate() && month == date.getMonth() && year == date.getFullYear();
	}

	module.exports = isExistDate;

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = "{{block validation }} <opal-input-validator> {{block validation_rules }} <template is=\"rt-if-then\" if=\"props.required\" rt-silent=\"\"> <opal-input-validator-rule required=\"\" popover-to=\"{props.popoverTo}\">{{i18n.isRequiredField}}</opal-input-validator-rule> </template> <opal-input-validator-rule test=\"isExistDate\" popover-to=\"{props.popoverTo}\">{{i18n.nonExistentDate}}</opal-input-validator-rule> {{/block}} {{block input_mask }} <opal-input-mask mask=\"{props.mask}\"> {{block input }} <opal-text-input class=\"opal-date-input__input opal-input-validator__input opal-input-mask__input\" value=\"{props.value}\" placeholder=\"{props.placeholder}\"></opal-text-input> {{/block}} </opal-input-mask> {{/block}} </opal-input-validator> {{/block}}"

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-date-input{position:relative;display:inline-block;vertical-align:middle;line-height:0}.opal-date-input .opal-date-input__input{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;