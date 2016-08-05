(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-filtered-list"] = factory(require("rionite"));
	else
		root["opal-filtered-list"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	__webpack_require__(12);

	var _require = __webpack_require__(3);

	var Component = _require.Component;
	var Rionite = _require.Rionite;


	module.exports = Component.extend('opal-filtered-list', {
		Static: {
			template: Rionite.template(__webpack_require__(13)),

			assets: {
				tfQuery: {
					'on-input': function onInput(evt) {
						this.assets.loadedList.props.query = evt.target.value;
					}
				},

				loadedList: {}
			}
		},

		focus: function focus() {
			this.assets.tfQuery.focus();
		}
	});

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-filtered-list__tf-query-wrapper{display:block;margin-bottom:15px}.opal-text-input.opal-filtered-list__tf-query{display:block;width:auto}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = "{{block query }} <rt-content class=\"opal-filtered-list__tf-query-wrapper\" select=\".opal-filtered-list__tf-query\"> {{block tf_query }} <opal-text-input class=\"opal-filtered-list__tf-query\"></opal-text-input> {{/block}} </rt-content> {{/block}} {{block list }} <rt-content class=\"opal-filtered-list__loaded-list-wrapper\" select=\".opal-filtered-list__loaded-list\"></rt-content> {{/block}}"

/***/ }

/******/ })
});
;