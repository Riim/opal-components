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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(55);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var opal_input_validator_rule_1 = __webpack_require__(6);
	var opal_input_validator_rule_2 = __webpack_require__(6);
	exports.OpalInputValidatorRule = opal_input_validator_rule_2.default;
	var map = Array.prototype.map;
	var OpalInputValidator = (function (_super) {
	    __extends(OpalInputValidator, _super);
	    function OpalInputValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalInputValidator.prototype.initialize = function () {
	        cellx_1.define(this, {
	            failedRule: null,
	            valid: function () {
	                return !this.failedRule;
	            }
	        });
	    };
	    OpalInputValidator.prototype.ready = function () {
	        this._rules = map.call(this.element.getElementsByClassName('opal-input-validator-rule'), function (ruleEl) { return ruleEl.$component; });
	    };
	    OpalInputValidator.prototype.validate = function () {
	        return this._validate(this._rules);
	    };
	    OpalInputValidator.prototype._validate = function (rules) {
	        var _this = this;
	        var value = this.$('text-input').value;
	        var trimmedValue = value.trim();
	        var failedRule;
	        rules.forEach(function (rule) {
	            var ruleProps = rule.props;
	            if (!failedRule && (trimmedValue ?
	                ruleProps.minLength && trimmedValue.length < ruleProps.minLength ||
	                    ruleProps.regex && !ruleProps.regex.test(value) ||
	                    ruleProps.test && !_this.ownerComponent[ruleProps.test](value) :
	                ruleProps.required)) {
	                failedRule = rule;
	                rule.showMessage();
	            }
	            else {
	                rule.hideMessage();
	            }
	        });
	        var oldFailedRule = this.failedRule;
	        this.failedRule = failedRule || null;
	        if (+!!failedRule ^ +!!oldFailedRule) {
	            if (failedRule) {
	                this.element.setAttribute('valid', 'no');
	                this.emit('input-validation-error');
	            }
	            else {
	                this.element.removeAttribute('valid');
	                this.emit('input-validation-valid');
	            }
	        }
	        return !failedRule;
	    };
	    return OpalInputValidator;
	}(rionite_1.Component));
	OpalInputValidator.OpalInputValidatorRule = opal_input_validator_rule_1.default;
	OpalInputValidator = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-input-validator',
	        bemlTemplate: '@section/inner { rt-content/content (cloning=no) }',
	        events: {
	            'text-input': {
	                input: function () {
	                    if (this.failedRule) {
	                        this._validate([this.failedRule]);
	                    }
	                },
	                change: function () {
	                    this.validate();
	                }
	            }
	        }
	    })
	], OpalInputValidator);
	exports.default = OpalInputValidator;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(56);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(28);
	var OpalInputValidatorRule = (function (_super) {
	    __extends(OpalInputValidatorRule, _super);
	    function OpalInputValidatorRule() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalInputValidatorRule.prototype.showMessage = function () {
	        this.$('popover').open();
	    };
	    OpalInputValidatorRule.prototype.hideMessage = function () {
	        this.$('popover').close();
	    };
	    return OpalInputValidatorRule;
	}(rionite_1.Component));
	OpalInputValidatorRule = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-input-validator-rule',
	        props: {
	            required: { default: false, readonly: true },
	            minLength: { type: Number, readonly: true },
	            regex: { type: eval, readonly: true },
	            test: { type: String, readonly: true },
	            popoverTo: 'right'
	        },
	        bemlTemplate: template
	    })
	], OpalInputValidatorRule);
	exports.default = OpalInputValidatorRule;


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nopal-popover/popover (to={props.popoverTo}) {\nrt-content/content (cloning=no)\n}\n}"

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-input-validator{position:relative;display:inline-block;vertical-align:middle}.opal-input-validator .opal-input-validator__text-input{display:block}.opal-input-validator[valid=no] .opal-input-validator__text-input .opal-text-input__text-field{border-color:#f50000}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

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


/***/ })

/******/ })
});
;