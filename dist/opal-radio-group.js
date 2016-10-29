(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-radio-group"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-radio-group"] = factory(root["rionite"], root["cellx"]);
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

	var _require = __webpack_require__(1);

	var Component = _require.Component;

	var OpalRadioButton = __webpack_require__(12);

	var forEach = Array.prototype.forEach;

	module.exports = Component.extend('opal-radio-group', {
		Static: {
			OpalRadioButton: OpalRadioButton,

			events: {
				':component': {
					check: function check(_ref) {
						var checkedButton = _ref.target;

						forEach.call(this.buttons, function (btn) {
							if (btn.$c != checkedButton) {
								btn.$c.uncheck();
							}
						});
					},
					uncheck: function uncheck(evt) {
						evt.target.check();
					}
				}
			}
		},

		ready: function ready() {
			this.buttons = this.element.getElementsByClassName('opal-radio-button');
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

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(64);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var Component = _require.Component;


	module.exports = Component.extend('opal-radio-button', {
		Static: {
			props: {
				checked: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(35),

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

		_focused: false,

		initialize: function initialize() {
			cellx.define(this, {
				_tabIndex: function _tabIndex() {
					return this.props.disabled ? -1 : this.props.tabIndex;
				}
			});
		},
		ready: function ready() {
			var props = this.props;

			if (props.checked) {
				this.$('input').checked = true;
			}

			if (props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'checked') {
				this.$('input').checked = value;
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
			return this.props.checked = value === void 0 ? !this.props.checked : value;
		},


		/**
	  * @typesign () -> OpalComponents.OpalRadioButton;
	  */
		focus: function focus() {
			if (!this._focused) {
				this._focused = true;

				this.$('control').focus();
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}

			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalRadioButton;
	  */
		blur: function blur() {
			if (this._focused) {
				this._focused = false;

				this.$('control').blur();
				this._documentKeyDownListening.stop();
			}

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
	  * @typesign () -> OpalComponents.OpalRadioButton;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalRadioButton;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },

/***/ 35:
/***/ function(module, exports) {

	module.exports = "<label class=\"opal-radio-button__label\"> <input class=\"opal-radio-button__input\" type=\"checkbox\"> <span class=\"opal-radio-button__control\" tabindex=\"{_tabIndex}\"></span> <rt-content class=\"opal-radio-button__content\"></rt-content> </label>"

/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-radio-button{position:relative;display:inline-block}.opal-radio-button .opal-radio-button__input{display:none}.opal-radio-button .opal-radio-button__control{position:relative;top:-1px;display:inline-block;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control{border-color:#8a8a8a}.opal-radio-button .opal-radio-button__control:focus,.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control:focus{outline:none;border-color:#33a0ff}.opal-radio-button[checked] .opal-radio-button__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.opal-radio-button[disabled]{opacity:.5;pointer-events:none}.opal-radio-button[disabled] .opal-radio-button__control{background:#e6e6e6}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;