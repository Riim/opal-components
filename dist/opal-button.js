(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-button"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-button"] = factory(root["cellx"], root["rionite"]);
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-button', {
		Static: {
			props: {
				type: String,
				controlType: String,
				size: 'm',
				href: String,
				checkable: false,
				checked: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(4),

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
	  * @typesign () -> OpalComponents.OpalButton;
	  */
		focus: function focus() {
			this.assets.control.focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalButton;
	  */
		blur: function blur() {
			this.assets.control.blur();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalButton;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalButton;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-button:not([type=clean]){display:inline-block;vertical-align:middle}.opal-button:not([type=clean]) .opal-button__control{position:relative;display:block;box-sizing:border-box;padding:7px 23px;width:100%;border:0;border-radius:3px;background:#546778;color:#fff;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;transition:background .1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-button:not([type=clean]) .opal-button__control::-moz-focus-inner{padding:0;border:0}.opal-button:not([type=clean]) .opal-button__content{position:relative;display:block}.opal-button:not([type=clean]) .opal-button__control:hover{background:#597791}.opal-button:not([type=clean]) .opal-button__control:focus{outline:none}body:not(._no-focus-highlight) .opal-button:not([type=clean]) .opal-button__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-button:not([type=clean]) .opal-button__control:active,.opal-button:not([type=clean])[checked] .opal-button__control{background:#43484c}.opal-button:not([type=clean])[size=s] .opal-button__control{padding:4px 13px;font-size:14px;line-height:21px}.opal-button:not([type=clean])[disabled]{opacity:.5;pointer-events:none}.opal-button:not([type=clean])[disabled] .opal-button__control{cursor:default}.opal-group__content>.opal-button:not([type=clean]):not(:first-child) .opal-button__control,.opal-group__content>:not(:first-child) .opal-button:not([type=clean]) .opal-button__control{border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-group__content>.opal-button:not([type=clean]):not(:last-child) .opal-button__control,.opal-group__content>:not(:last-child) .opal-button:not([type=clean]) .opal-button__control{border-top-right-radius:0;border-bottom-right-radius:0}.opal-button[type=action][type=action] .opal-button__control{background:#1b91f8}.opal-button[type=action][type=action] .opal-button__control:hover{background:#33a0ff}.opal-button[type=action][type=action] .opal-button__control:active,.opal-button[type=action][type=action][checked] .opal-button__control{background:#1371c3}.opal-button[type=danger][type=danger] .opal-button__control{background:#f63159}.opal-button[type=danger][type=danger] .opal-button__control:hover{background:#fd496d}.opal-button[type=danger][type=danger] .opal-button__control:active,.opal-button[type=danger][type=danger][checked] .opal-button__control{background:#d3173d}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<template is=\"rt-if-then\" if=\"props.href\"> <a class=\"opal-button__control\" href=\"{props.href}\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-button__content\"></rt-content> </a> </template> <template is=\"rt-if-else\" if=\"props.href\"> <button class=\"opal-button__control\" type=\"{props.controlType}\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-button__content\"></rt-content> </button> </template>"

/***/ }
/******/ ])
});
;