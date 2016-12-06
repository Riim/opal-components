(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-switch"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-switch"] = factory(root["rionite"], root["cellx"]);
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

	__webpack_require__(71);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	module.exports = Component.extend('opal-switch', {
		Static: {
			props: {
				checked: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(40),

			events: {
				input: {
					change: function change(evt) {
						this.emit((this.props.checked = evt.target.checked) ? 'check' : 'uncheck');
						this.emit('change');
					}
				},

				control: {
					focusin: function focusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					focusout: function focusout() {
						this.props.focused = false;
						this.emit('focusout');
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
			if (this.props.checked) {
				this.$('input').checked = true;
			}

			if (this.props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'checked') {
				this.$('input').checked = value;
			} else if (name == 'focused') {
				if (value) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					this.focus();
				} else {
					this._documentKeyDownListening.stop();
					this.blur();
				}
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
			return this.props.checked = value === undefined ? !this.props.checked : value;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSwitch;
	  */
		focus: function focus() {
			this.$('control').focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSwitch;
	  */
		blur: function blur() {
			this.$('control').blur();
			return this;
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
					evt.preventDefault();

					var props = this.props;

					if (!props.disabled) {
						this.emit((props.checked = !props.checked) ? 'check' : 'uncheck');
						this.emit('change');
					}
				}
		},


		/**
	  * @typesign () -> OpalComponents.OpalSwitch;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSwitch;
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

/***/ 40:
/***/ function(module, exports) {

	module.exports = "<label class=\"opal-switch__label\"> <input class=\"opal-switch__input\" type=\"checkbox\"> <span class=\"opal-switch__control\" tabindex=\"{_tabIndex}\"><span class=\"opal-switch__thumb\"></span></span> <rt-content class=\"opal-switch__content\"></rt-content> </label>"

/***/ },

/***/ 71:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-switch{position:relative;display:inline-block}.opal-switch .opal-switch__input{display:none}.opal-switch .opal-switch__control{position:relative;top:-1px;display:inline-block;margin:3px;width:30px;height:14px;border-radius:7px;background:#d6d6d6;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-switch .opal-switch__thumb{position:absolute;top:-3px;left:-3px;width:20px;height:20px;border-radius:50%;background:#546778;transition:background .1s,transform .1s}.opal-switch .opal-switch__label:hover .opal-switch__thumb{background:#597791}.opal-switch .opal-switch__control:focus{outline:none}body:not(._no-focus-highlight) .opal-switch .opal-switch__control:focus .opal-switch__thumb::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:50%;content:''}.opal-switch[checked] .opal-switch__thumb{background:#1b91f8;-ms-transform:translateX(16px);transform:translateX(16px)}.opal-switch[checked] .opal-switch__label:hover .opal-switch__thumb{background:#33a0ff}.opal-switch[disabled]{opacity:.5;pointer-events:none}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;