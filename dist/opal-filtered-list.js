(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-filtered-list"] = factory(require("rionite"));
	else
		root["opal-filtered-list"] = factory(root["rionite"]);
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

	__webpack_require__(53);

	var _require = __webpack_require__(1);

	var ComponentTemplate = _require.ComponentTemplate;
	var Component = _require.Component;


	module.exports = Component.extend('opal-filtered-list', {
		Static: {
			template: new ComponentTemplate(__webpack_require__(28)),

			events: {
				'query-input': {
					input: function input(evt) {
						this.$('loaded-list').props.query = evt.target.value;
					}
				}
			}
		},

		focus: function focus() {
			this.$('query-input').focus();
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 28:
/***/ function(module, exports) {

	module.exports = "{{block query }} <rt-content class=\"opal-filtered-list__query-input-container\" select=\".opal-filtered-list__query-input\"> {{block query_input }} <opal-text-input class=\"opal-filtered-list__query-input\"></opal-text-input> {{/block}} </rt-content> {{/block}} {{block list }} <rt-content class=\"opal-filtered-list__loaded-list-container\" select=\".opal-filtered-list__loaded-list\"></rt-content> {{/block}}"

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-filtered-list .opal-filtered-list__query-input-container{display:block;margin-bottom:15px}.opal-filtered-list .opal-filtered-list__query-input{display:block;width:auto}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;