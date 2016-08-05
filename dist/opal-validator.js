(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-validator"] = factory(require("rionite"));
	else
		root["opal-validator"] = factory(root["rionite"]);
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

	__webpack_require__(47);

	var _require = __webpack_require__(3);

	var Component = _require.Component;

	var OpalValidatorRule = __webpack_require__(48);

	module.exports = Component.extend('opal-validator', {
		Static: {
			OpalValidatorRule: OpalValidatorRule,

			props: {
				valid: true
			},

			template: '<rt-content class="opal-validator__content"></rt-content>',

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
			this.failedRule = null;
		},
		ready: function ready() {
			this.rules = this.$$('opal-validator-rule');
		},


		/**
	  * @typesign () -> boolean;
	  */
		validate: function validate() {
			return this._validate(this.rules);
		},


		/**
	  * @typesign (rules: Array<OpalComponents.OpalValidatorRule>) -> boolean;
	  */
		_validate: function _validate(rules) {
			var value = this.assets.input.value;
			var failedRule = null;

			rules.forEach(function (rule) {
				var ruleProps = rule.props;

				if (!failedRule && (ruleProps.required && !value || ruleProps.minLength && value.length < ruleProps.minLength || ruleProps.pattern && !ruleProps.pattern.test(value))) {
					failedRule = rule;
					rule.showMessage();
				} else {
					rule.hideMessage();
				}
			});

			this.failedRule = failedRule;
			this.props.valid = !failedRule;

			return !failedRule;
		}
	});

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-validator{position:relative;display:inline-block}.opal-validator[valid=no] .opal-validator__input .opal-text-input__control{border-color:#cf1002}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(49);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-validator-rule', {
		Static: {
			props: {
				required: false,
				minLength: Number,
				pattern: Object,
				popoverFrom: 'right'
			},

			template: __webpack_require__(50),

			assets: {
				messagePopover: {}
			}
		},

		showMessage: function showMessage() {
			this.assets.messagePopover.open();
		},
		hideMessage: function hideMessage() {
			this.assets.messagePopover.close();
		}
	});

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-validator-rule{display:block}.opal-validator-rule__content{display:block;width:240px;text-align:center}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = "<ips-popover class=\"opal-validator-rule__message-popover\" from=\"{props.popoverFrom}\"> <rt-content class=\"opal-validator-rule__content\"></rt-content> </ips-popover>"

/***/ }

/******/ })
});
;