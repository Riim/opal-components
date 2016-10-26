(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-sign-button"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-sign-button"] = factory(root["rionite"], root["cellx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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

	__webpack_require__(68);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var Component = _require.Component;


	module.exports = Component.extend('opal-sign-button', {
		Static: {
			props: {
				sign: { type: String, required: true },
				checkable: false,
				checked: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(38),

			events: {
				control: {
					focusin: function focusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					focusout: function focusout() {
						this.props.focused = false;
						this.emit('focusout');
					},
					click: function click() {
						if (!this.props.disabled) {
							if (this.props.checkable) {
								this.emit(this.toggle() ? 'check' : 'uncheck');
							}

							this.emit('click');
						}
					}
				}
			}
		},

		initialize: function initialize() {
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
	  * @type {boolean}
	  */
		get checked() {
			return this.props.checked;
		},
		set checked(checked) {
			this.props.checked = checked;
		},

		/**
	  * @typesign () -> boolean;
	  */
		check: function check() {
			if (!this.props.checked) {
				this.props.checked = true;
				return true;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		uncheck: function uncheck() {
			if (this.props.checked) {
				this.props.checked = false;
				return true;
			}

			return false;
		},


		/**
	  * @typesign (value?: boolean) -> boolean;
	  */
		toggle: function toggle(value) {
			return this.props.checked = value === void 0 ? !this.props.checked : value;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSignButton;
	  */
		focus: function focus() {
			this.$('control').focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSignButton;
	  */
		blur: function blur() {
			this.$('control').blur();
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

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-sign-button__control\" tabindex=\"{_tabIndex}\"> <span class=\"opal-sign-button__sign\"></span> <rt-content class=\"opal-sign-button__content\"></rt-content> </span>"

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-sign-button{position:relative;display:inline-block;line-height:0}.opal-sign-button .opal-sign-button__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-sign-button .opal-sign-button__sign{position:relative;top:-1px;display:inline-block;box-sizing:border-box;margin:3px;width:28px;height:28px;border:2px solid;border-radius:50%;vertical-align:middle;transition:background .1s}.opal-sign-button .opal-sign-button__sign::before,.opal-sign-button .opal-sign-button__sign::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;transition:background .1s}.opal-sign-button .opal-sign-button__sign::after{-ms-transform:rotate(90deg);transform:rotate(90deg)}.opal-sign-button[sign=plus] .opal-sign-button__sign{border-color:#107cda}.opal-sign-button[sign=plus] .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__sign::after{background:#107cda;content:''}.opal-sign-button[sign=minus] .opal-sign-button__sign{border-color:#eb143f}.opal-sign-button[sign=minus] .opal-sign-button__sign::before{background:#eb143f;content:''}.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign{border-color:#33a0ff}.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign::after{background:#33a0ff}.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign{border-color:#fd496d}.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign::before,.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign::after{background:#fd496d}.opal-sign-button .opal-sign-button__control:focus{outline:none}body:not(._no-focus-highlight) .opal-sign-button .opal-sign-button__control:focus::after{position:absolute;top:-1px;right:0;bottom:1px;left:0;border:1px solid #33a0ff;border-radius:3px;content:'';pointer-events:none}.opal-sign-button .opal-sign-button__control:active .opal-sign-button__sign,.opal-sign-button[checked] .opal-sign-button__control .opal-sign-button__sign{top:0}.opal-sign-button[disabled]{opacity:.5;pointer-events:none}.opal-sign-button[disabled] .opal-sign-button__control{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;