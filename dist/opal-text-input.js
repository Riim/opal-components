(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-text-input"] = factory(require("rionite"));
	else
		root["opal-text-input"] = factory(root["rionite"]);
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

	__webpack_require__(45);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-text-input', {
		Static: {
			props: {
				controlType: 'text',
				size: 'm',
				value: '',
				placeholder: '',
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(46),

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
					'on-input': function onInput(evt) {
						this.props.value = this.control.value;
						this.emit({ type: 'input', originalEvent: evt });
					},
					'on-change': function onChange(evt) {
						this.emit({ type: 'change', originalEvent: evt });
					},
					'on-keydown': function onKeydown(evt) {
						this.emit({ type: 'keydown', originalEvent: evt });
					},
					'on-keypress': function onKeypress(evt) {
						this.emit({ type: 'keypress', originalEvent: evt });
					},
					'on-keyup': function onKeyup(evt) {
						this.emit({ type: 'keyup', originalEvent: evt });
					}
				}
			}
		},

		ready: function ready() {
			this.control.value = this.props.value;

			if (this.props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'value') {
				if (this.control.value != value) {
					this.control.value = value;
				}
			} else if (name == 'focused') {
				this[value ? 'focus' : 'blur']();
			}
		},


		/**
	  * @type {string}
	  */
		get value() {
			return this.control.value;
		},
		set value(value) {
			this.control.value = value;
		},

		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		focus: function focus() {
			this.control.focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		blur: function blur() {
			this.control.blur();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-text-input{position:relative;display:inline-block;width:400px;vertical-align:middle}.opal-text-input__control{box-sizing:border-box;padding:6px 11px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;background:#fff;box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-text-input__control:hover{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.opal-text-input__control:focus{outline:none;border-color:#33a0ff}.opal-text-input[disabled]{opacity:.5;pointer-events:none}.opal-text-input[disabled] .opal-text-input__control{background:#e6e6e6}.opal-group__content>.opal-text-input:not(:first-child),.opal-group__content>:not(:first-child) .opal-text-input{margin-right:-1px}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = "<input class=\"opal-text-input__control\" type=\"{props.controlType}\" placeholder=\"{props.placeholder}\" tabindex=\"{props.tabIndex}\" disabled=\"{props.disabled}\">"

/***/ }

/******/ })
});
;