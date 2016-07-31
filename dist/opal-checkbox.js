(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-checkbox"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-checkbox"] = factory(root["cellx"], root["rionite"]);
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

	__webpack_require__(5);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-checkbox', {
		Static: {
			props: {
				checked: false,
				indeterminate: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(6),

			assets: {
				input: {
					'on-change': function onChange() {
						this.emit((this.props.checked = this.input.checked) ? 'check' : 'uncheck');
						this.emit('change');
					}
				},

				control: {
					'on-focusin': function onFocusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					'on-focusout': function onFocusout() {
						this.props.focused = false;
						this.emit('focusout');
					}
				}
			}
		},

		_focused: false,

		initialize: function initialize() {
			cellx.define(this, {
				_tabIndex: function _tabIndex() {
					return this.props.disabled ? -1 : this.props.tabIndex;
				}
			});
		},
		ready: function ready() {
			if (this.props.checked) {
				this.props.indeterminate = false;
				this.input.checked = true;
			}

			if (this.props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'checked') {
				if (value) {
					this.props.indeterminate = false;
				}

				this.input.checked = value;
			} else if (name == 'indeterminate') {
				if (value) {
					this.props.checked = false;
				}
			} else if (name == 'focused') {
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
			if (value !== void 0) {
				return this.props.checked = !!value;
			}
			return this.props.checked = !this.props.checked;
		},


		/**
	  * @typesign () -> OpalComponents.OpalCheckbox;
	  */
		focus: function focus() {
			if (!this._focused) {
				this._focused = true;

				this.control.focus();
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}

			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalCheckbox;
	  */
		blur: function blur() {
			if (this._focused) {
				this._focused = false;

				this.control.blur();
				this._documentKeyDownListening.stop();
			}

			return this;
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
					evt.preventDefault();

					if (!this.props.disabled) {
						this.emit((this.props.checked = !this.props.checked) ? 'check' : 'uncheck');
						this.emit('change');
					}
				}
		},


		/**
	  * @typesign () -> OpalComponents.OpalCheckbox;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalCheckbox;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-checkbox{position:relative;display:inline-block}.opal-checkbox__input{display:none}.opal-checkbox__control{position:relative;display:inline-block;box-sizing:border-box;margin-top:-2px;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-checkbox__label:hover .opal-checkbox__control{border-color:#8a8a8a}.opal-checkbox__control:focus,.opal-checkbox__label:hover .opal-checkbox__control:focus{outline:none;border-color:#33a0ff}.opal-checkbox[checked] .opal-checkbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-checkbox[indeterminate] .opal-checkbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.opal-checkbox[disabled]{opacity:.5;pointer-events:none}.opal-checkbox[disabled] .opal-checkbox__control{background:#e6e6e6}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<label class=\"opal-checkbox__label\"> <input class=\"opal-checkbox__input\" type=\"checkbox\"> <span class=\"opal-checkbox__control\" tabindex=\"{_tabIndex}\"></span> <rt-content class=\"opal-checkbox__content\"> </rt-content></label>"

/***/ }
/******/ ])
});
;