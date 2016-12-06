(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-switch-menu"] = factory(require("rionite"));
	else
		root["opal-switch-menu"] = factory(root["rionite"]);
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

	__webpack_require__(70);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	var forEach = Array.prototype.forEach;
	var find = Array.prototype.find;

	module.exports = Component.extend('opal-switch-menu', {
		Static: {
			template: '<rt-content class="opal-switch-menu__content"></rt-content>',

			events: {
				':component': {
					check: function check(_ref) {
						var checkedButton = _ref.target;

						forEach.call(this.buttons, function (btn) {
							if (btn.$c != checkedButton) {
								btn.$c.uncheck();
							}
						});

						this._checkedButton = checkedButton;

						this.emit('change');
					},
					uncheck: function uncheck(evt) {
						evt.target.check();
					}
				}
			}
		},

		_checkedButton: undefined,

		get checkedButton() {
			if (this._checkedButton !== undefined) {
				return this._checkedButton;
			}

			return this._checkedButton = find.call(this.buttons, function (button) {
				return button.$c.checked;
			}) || null;
		},

		ready: function ready() {
			this.buttons = this.element.getElementsByClassName('opal-button');
		},
		clear: function clear() {
			var checkedButton = this._checkedButton;

			if (checkedButton) {
				checkedButton.uncheck();
				this._checkedButton = null;
			}
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 70:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-switch-menu{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;