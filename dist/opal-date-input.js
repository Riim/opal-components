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

	var isExistDate = __webpack_require__(78);

	module.exports = Component.extend('opal-date-input', {
		Static: {
			props: {
				mask: '99/99/9999',
				placeholder: 'dd/mm/yyyy',
				popoverTo: 'right'
			},

			template: template(__webpack_require__(24)),

			assets: {
				input: {}
			}
		},

		isExistDate: isExistDate
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 24:
/***/ function(module, exports) {

	module.exports = "{{block validation }} <opal-validator> <opal-validator-rule test=\"isExistDate\" popover-to=\"{props.popoverTo}\">Несуществующая дата</opal-validator-rule> {{block input_mask }} <opal-input-mask mask=\"{props.mask}\"> {{block input }} <opal-text-input class=\"opal-date-input__input opal-validator__input opal-input-mask__input\" placeholder=\"{props.placeholder}\"></opal-text-input> {{/block}} </opal-input-mask> {{/block}} </opal-validator> {{/block}}"

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-date-input{position:relative;display:inline-block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 78:
/***/ function(module, exports) {

	'use strict';

	function isExistDate(date) {
		date = date.split('/');

		var day = parseInt(date[0], 10);
		var month = parseInt(date[1], 10) - 1;
		var year = parseInt(date[2], 10);

		date = new Date(year, month, day);

		return day == date.getDate() && month == date.getMonth() && year == date.getFullYear();
	}

	module.exports = isExistDate;

/***/ }

/******/ })
});
;