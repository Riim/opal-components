(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-text-input"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-text-input"] = factory(root["rionite"], root["cellx"]);
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

	__webpack_require__(77);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1),
	    Component = _require.Component;

	module.exports = Component.extend('opal-text-input', {
		Static: {
			props: {
				inputType: 'text',
				multiline: false,
				size: 'm',
				rows: 5,
				autoHeight: true,
				inputName: String,
				value: '',
				storeKey: String,
				placeholder: '',
				clearable: false,
				loading: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(44),

			events: {
				input: {
					focusin: function focusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					focusout: function focusout() {
						this.props.focused = false;
						this.emit('focusout');
					},
					input: function input(evt) {
						this.value = evt.target.value;
						this.emit({ type: 'input', initialEvent: evt });
					},
					change: function change(evt) {
						var storeKey = this.props.storeKey;

						if (storeKey) {
							localStorage.setItem(storeKey, evt.target.value);
						}

						this.emit({ type: 'change', initialEvent: evt });
					},
					keydown: function keydown(evt) {
						var _this = this;

						if (this.props.multiline && this.props.autoHeight) {
							setTimeout(function () {
								_this._fixHeight();
							}, 1);
						}

						this.emit({ type: 'keydown', initialEvent: evt });
					},
					keypress: function keypress(evt) {
						if (evt.which == 13 /* Enter */) {
								this.emit('confirminput');
							}

						this.emit({ type: 'keypress', initialEvent: evt });
					},
					keyup: function keyup(evt) {
						this.emit({ type: 'keyup', initialEvent: evt });
					}
				}
			}
		},

		initialize: function initialize() {
			cellx.define(this, {
				btnClearShown: function btnClearShown() {
					return !!this.props.value && !this.props.loading;
				}
			});
		},
		ready: function ready() {
			var props = this.props;
			var value = props.value;
			var input = this.$('input');

			this._initialHeight = input.offsetHeight + input.scrollHeight - input.clientHeight;

			if (value) {
				input.value = value;
			} else {
				var storeKey = props.storeKey;

				if (storeKey) {
					props.value = localStorage.getItem(storeKey) || '';
				}
			}

			this._fixHeight();

			if (props.focused) {
				this.focus();
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'value') {
				var input = this.$('input');

				if (input.value != value) {
					input.value = value;
				}
			} else if (name == 'focused') {
				this[value ? 'focus' : 'blur']();
			}
		},
		_onBtnClearClick: function _onBtnClearClick(evt) {
			evt.preventDefault();

			this.value = '';
			this.$('input').focus();

			this.emit({ type: 'change', initialEvent: evt });
		},
		_fixHeight: function _fixHeight() {
			var input = this.$('input');
			var lineHeight = parseInt(getComputedStyle(input).lineHeight, 10);

			input.style.height = this._initialHeight - lineHeight + 'px';
			input.style.height = input.offsetHeight + input.scrollHeight - input.clientHeight + lineHeight + 'px';
		},


		/**
	  * @type {string}
	  */
		get value() {
			return this.props.value;
		},
		set value(value) {
			this.props.value = value;
		},

		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		clear: function clear() {
			this.value = '';
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		focus: function focus() {
			this.$('input').focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalTextInput;
	  */
		blur: function blur() {
			this.$('input').blur();
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

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 44:
/***/ function(module, exports) {

	module.exports = "<template is=\"rt-if-then\" if=\"props.multiline\"> <textarea class=\"opal-text-input__input\" rows=\"{props.rows}\" name=\"{props.inputName}\" placeholder=\"{props.placeholder}\" tabindex=\"{props.tabIndex}\" disabled=\"{props.disabled}\"></textarea> </template> <template is=\"rt-if-else\" if=\"props.multiline\"> <input class=\"opal-text-input__input\" type=\"{props.inputType}\" name=\"{props.inputName}\" placeholder=\"{props.placeholder}\" tabindex=\"{props.tabIndex}\" disabled=\"{props.disabled}\"> </template> <template is=\"rt-if-then\" if=\"props.clearable\" rt-silent=\"\"> <button class=\"opal-text-input__btn-clear\" shown=\"{btnClearShown}\" rt-click=\"_onBtnClearClick\"></button> </template> <template is=\"rt-if-then\" if=\"props.loading\" rt-silent=\"\"> <opal-loader class=\"opal-text-input__loader\" size=\"s\" shown=\"\"></opal-loader> </template>"

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-text-input{position:relative;display:inline-block;width:400px;vertical-align:middle;line-height:0}.opal-text-input .opal-text-input__input{display:block;box-sizing:border-box;padding:6px 11px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;border-radius:3px;background:#fff;box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-text-input .opal-text-input__btn-clear{position:absolute;top:0;right:10px;bottom:0;display:none;margin:auto;padding:0;width:23px;height:23px;border:0;border:1px solid transparent;border-radius:3px;background:0 0;opacity:.5;cursor:pointer;transition:opacity .1s}.opal-text-input .opal-text-input__btn-clear::before,.opal-text-input .opal-text-input__btn-clear::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:18px;height:1px;background:#000;content:'';-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-text-input .opal-text-input__btn-clear::after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.opal-text-input .opal-text-input__btn-clear[shown]{display:block}.opal-text-input .opal-text-input__btn-clear:hover{background:#e6e6e6;opacity:1}.opal-text-input .opal-text-input__btn-clear:focus{outline:none}body:not(._no-focus-highlight) .opal-text-input .opal-text-input__btn-clear:focus{border-color:#33a0ff;opacity:1}.opal-text-input .opal-text-input__btn-clear:active{background:#ccc}.opal-text-input .opal-text-input__loader,.opal-text-input .opal-text-input__loader[size=s]{position:absolute;top:0;right:12px;bottom:0;margin:auto;pointer-events:none}.opal-text-input:hover .opal-text-input__input{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.opal-text-input .opal-text-input__input:focus{outline:none;border-color:#33a0ff}.opal-text-input[multiline]:not([auto-height=no]) .opal-text-input__input{overflow-y:hidden}.opal-text-input[valid] .opal-text-input__input{border-color:#09aa09}.opal-text-input[valid=no] .opal-text-input__input{border-color:red}.opal-text-input[disabled]{opacity:.5;pointer-events:none}.opal-text-input[disabled] .opal-text-input__input{background:#e6e6e6}.opal-group .opal-group__content>.opal-text-input:not(:first-child),.opal-group .opal-group__content>:not(:first-child) .opal-text-input{margin-right:-1px}.opal-group__content .opal-text-input:not(:first-child) .opal-text-input__input,.opal-group__content :not(:first-child) .opal-text-input .opal-text-input__input{border-top-left-radius:0;border-bottom-left-radius:0}.opal-group__content .opal-text-input:not(:last-child) .opal-text-input__input,.opal-group__content :not(:last-child) .opal-text-input .opal-text-input__input{border-top-right-radius:0;border-bottom-right-radius:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;