(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-input-validator"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-input-validator"] = factory(root["rionite"], root["cellx"]);
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

	__webpack_require__(56);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var Component = _require.Component;

	var OpalInputValidatorRule = __webpack_require__(10);

	module.exports = Component.extend('opal-input-validator', {
		Static: {
			OpalInputValidatorRule: OpalInputValidatorRule,

			template: '<rt-content class="opal-input-validator__content"></rt-content>',

			assets: {
				input: {
					'on-input': function onInput() {
						if (this.failedRule) {
							this._validate([this.failedRule]);
						}
					},
					'on-change': function onChange() {
						this.validate();
					}
				}
			}
		},

		initialize: function initialize() {
			cellx.define(this, {
				failedRule: null,

				valid: function valid() {
					return !this.failedRule;
				}
			});
		},
		ready: function ready() {
			this.assets.rules = this.$$('.opal-input-validator-rule');
		},


		/**
	  * @typesign () -> boolean;
	  */
		validate: function validate() {
			return this._validate(this.assets.rules);
		},


		/**
	  * @typesign (rules: Array<OpalComponents.OpalInputValidatorRule>) -> boolean;
	  */
		_validate: function _validate(rules) {
			var _this = this;

			var value = this.assets.input.value;
			var trimmedValue = value.trim();
			var failedRule = null;

			rules.forEach(function (rule) {
				var ruleProps = rule.props;

				if (!failedRule && (trimmedValue ? ruleProps.minLength && trimmedValue.length < ruleProps.minLength || ruleProps.regex && !ruleProps.regex.test(value) || ruleProps.test && !_this.ownerComponent[ruleProps.test](value) : ruleProps.required)) {
					failedRule = rule;
					rule.showMessage();
				} else {
					rule.hideMessage();
				}
			});

			var oldFailedRule = this.failedRule;

			this.failedRule = failedRule;

			if (!!failedRule ^ !!oldFailedRule) {
				if (failedRule) {
					this.element.setAttribute('valid', 'no');
					this.emit('input-validation-error');
				} else {
					this.element.removeAttribute('valid');
					this.emit('input-validation-valid');
				}
			}

			return !failedRule;
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

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(57);

	var _require = __webpack_require__(1);

	var Component = _require.Component;


	module.exports = Component.extend('opal-input-validator-rule', {
		Static: {
			props: {
				required: { default: false, readonly: true },
				minLength: { type: Number, readonly: true },
				regex: { type: Object, readonly: true },
				test: { type: String, readonly: true },
				popoverTo: 'right'
			},

			template: __webpack_require__(30),

			assets: {
				popover: {}
			}
		},

		showMessage: function showMessage() {
			this.assets.popover.open();
		},
		hideMessage: function hideMessage() {
			this.assets.popover.close();
		}
	});

/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "<opal-popover class=\"opal-input-validator-rule__popover\" to=\"{props.popoverTo}\"> <rt-content class=\"opal-input-validator-rule__content\"></rt-content> </opal-popover>"

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-input-validator{position:relative;display:inline-block;vertical-align:middle;line-height:0}.opal-input-validator .opal-input-validator__input{display:block}.opal-input-validator[valid=no] .opal-input-validator__input .opal-text-input__input{border-color:red}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-input-validator-rule{display:block}.opal-input-validator-rule .opal-input-validator-rule__content{display:block;width:240px;text-align:center}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;