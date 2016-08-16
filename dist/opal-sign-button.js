(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-sign-button"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-sign-button"] = factory(root["cellx"], root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	__webpack_require__(44);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-sign-button', {
		Static: {
			props: {
				sign: String,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(45),

			assets: {
				control: {
					'on-focusin': function onFocusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					'on-focusout': function onFocusout() {
						this.props.focused = false;
						this.emit('focusout');
					},
					'on-click': function onClick() {
						if (!this.props.disabled) {
							this.emit('click');
						}
					}
				}
			}
		},

		initialize: function initialize() {
			if (!this.props.sign) {
				throw new TypeError('Property "sign" is required');
			}

			cellx.define(this, {
				_tabIndex: function _tabIndex() {
					return this.props.disabled ? -1 : this.props.tabIndex;
				}
			});
		},
		ready: function ready() {
			if (this.props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'focused') {
				this[value ? 'focus' : 'blur']();
			}
		},


		/**
	  * @typesign () -> OpalComponents.OpalSignButton;
	  */
		focus: function focus() {
			this.assets.control.focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSignButton;
	  */
		blur: function blur() {
			this.assets.control.blur();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSignButton;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSignButton;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 44:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-sign-button{display:inline-block;vertical-align:middle}.opal-sign-button .opal-sign-button__control{position:relative;display:block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-sign-button .opal-sign-button__sign{position:relative;display:inline-block;box-sizing:border-box;margin:1px 3px 3px;width:28px;height:28px;border:2px solid;border-radius:50%;vertical-align:middle}.opal-sign-button .opal-sign-button__sign::before,.opal-sign-button .opal-sign-button__sign::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px}.opal-sign-button .opal-sign-button__sign::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.opal-sign-button[sign=plus] .opal-sign-button__sign{border-color:#1b91f8}.opal-sign-button[sign=plus] .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__sign::after{background:#1b91f8;content:''}.opal-sign-button[sign=minus] .opal-sign-button__sign{border-color:#f63159}.opal-sign-button[sign=minus] .opal-sign-button__sign::before{background:#f63159;content:''}.opal-sign-button .opal-sign-button__control:focus{outline:none}body:not(._no-focus-highlight) .opal-sign-button .opal-sign-button__control:focus::after{position:absolute;top:-2px;right:0;bottom:0;left:0;border:1px solid #33a0ff;border-radius:3px;content:'';pointer-events:none}.opal-sign-button .opal-sign-button__control:active{top:1px}.opal-sign-button[disabled]{opacity:.5;pointer-events:none}.opal-sign-button[disabled] .opal-sign-button__control{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-sign-button__control\" tabindex=\"{_tabIndex}\"> <span class=\"opal-sign-button__sign\"></span> <rt-content class=\"opal-sign-button__content\"></rt-content> </span>"

/***/ }

/******/ })
});
;