(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-date-input"] = factory(require("rionite"));
	else
		root["opal-date-input"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
	__webpack_require__(49);
	var rionite_1 = __webpack_require__(1);
	var date_exists_1 = __webpack_require__(20);
	var template = __webpack_require__(26);
	var OpalDateInput = (function (_super) {
	    __extends(OpalDateInput, _super);
	    function OpalDateInput() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.dateExists = date_exists_1.default;
	        return _this;
	    }
	    OpalDateInput.prototype.dateInRange = function (date) {
	        var calendar = this.$('calendar');
	        var match = date.match(/\d+/g);
	        var day = +match[0];
	        var month = +match[1] - 1;
	        var year = +match[2];
	        if (year < 100) {
	            year += year < 50 ? 2000 : 1900;
	        }
	        var d = new Date(year, month, day);
	        return d >= calendar.fromDate && d <= calendar.toDate;
	    };
	    OpalDateInput.prototype.elementAttached = function () {
	        this.listenTo(this.$('text-input').element, 'click', this._onTextInputClick);
	    };
	    OpalDateInput.prototype._onTextInputClick = function () {
	        this.$('calendar-menu').open();
	    };
	    OpalDateInput.prototype._onDocumentFocusIn = function () {
	        if (document.activeElement != document.body &&
	            !this.element.contains(document.activeElement.parentNode)) {
	            this.$('calendar-menu').close();
	        }
	    };
	    OpalDateInput.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 27 /* Esc */) {
	            evt.preventDefault();
	            this.$('calendar-menu').close();
	        }
	    };
	    OpalDateInput.prototype._onDocumentClick = function (evt) {
	        if (!this.element.contains(evt.target)) {
	            this.$('calendar-menu').close();
	        }
	    };
	    Object.defineProperty(OpalDateInput.prototype, "value", {
	        get: function () {
	            return this.$('calendar').value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalDateInput.prototype.getISOValue = function (h, m, s, ms) {
	        var date = this.value;
	        if (!date) {
	            return null;
	        }
	        return ('000' + date.getUTCFullYear()).slice(-4) + '-' +
	            ('0' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
	            ('0' + date.getUTCDate()).slice(-2) + 'T' +
	            ('0' + (h || 0)).slice(-2) + ':' +
	            ('0' + (m || 0)).slice(-2) + ':' +
	            ('0' + (s || 0)).slice(-2) + '.' +
	            ('00' + (ms || 0)).slice(-3) + 'Z';
	    };
	    return OpalDateInput;
	}(rionite_1.Component));
	OpalDateInput = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-date-input',
	        props: {
	            fromDate: String,
	            toDate: String,
	            value: String,
	            placeholder: 'dd.mm.yyyy',
	            mask: '99.99.9999',
	            required: { default: false, readonly: true },
	            popoverTo: 'right'
	        },
	        i18n: {
	            isRequiredField: rionite_1.getText.t('Поле обязательно для заполнения'),
	            nonExistentDate: rionite_1.getText.t('Несуществующая дата'),
	            invalidDateRange: rionite_1.getText.t('Дата вне допустимого диапазона')
	        },
	        bemlTemplate: template,
	        events: {
	            'text-input': {
	                change: function (evt) {
	                    if (this.$('input-validator').valid) {
	                        this.$('calendar').props['value'] = evt.target.value;
	                    }
	                }
	            },
	            'calendar-menu': {
	                open: function () {
	                    this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
	                    this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                    this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
	                },
	                close: function () {
	                    this._documentFocusInListening.stop();
	                    this._documentKeyDownListening.stop();
	                    this._documentClickListening.stop();
	                }
	            },
	            calendar: {
	                change: function (evt) {
	                    this.$('calendar-menu').close();
	                    var textInput = this.$('text-input');
	                    textInput.value = evt.target.props['value'];
	                    textInput.focus();
	                }
	            }
	        }
	    })
	], OpalDateInput);
	exports.default = OpalDateInput;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 20:
/***/ function(module, exports) {

	"use strict";
	function dateExists(date) {
	    var match = date.match(/\d+/g);
	    if (!match) {
	        return false;
	    }
	    var day = +match[0];
	    var month = +match[1] - 1;
	    var year = +match[2];
	    if (year < 100) {
	        year += year < 50 ? 2000 : 1900;
	    }
	    var d = new Date(year, month, day);
	    return day == d.getDate() && month == d.getMonth() && year == d.getFullYear();
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = dateExists;


/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = "opal-input-validator/input-validator {\ntemplate (is=rt-if-then, if=props.required, rt-silent) {\nopal-input-validator-rule/input-validator-rule-required (required, popover-to={props.popoverTo}) {\n'{constructor.i18n.isRequiredField}'\n}\n}\nopal-input-validator-rule/input-validator-rule-date-exists (test=dateExists, popover-to={props.popoverTo}) {\n'{constructor.i18n.nonExistentDate}'\n}\nopal-input-validator-rule/input-validator-rule-date-in-range (test=dateInRange, popover-to={props.popoverTo}) {\n'{constructor.i18n.invalidDateRange}'\n}\nopal-input-mask/input-mask (mask={props.mask}) {\nopal-text-input/text-input (\nclass=opal-input-validator__text-input opal-input-mask__text-input,\nvalue={props.value},\nplaceholder={props.placeholder},\nclearable\n)\n}\n}\nopal-dropdown/calendar-menu {\nopal-calendar/calendar (from-date={props.fromDate}, to-date={props.toDate}, value={props.value}, date-delimiter=.)\n}"

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-date-input{position:relative;display:inline-block;vertical-align:middle}.opal-date-input .opal-date-input__text-input{display:block}.opal-date-input .opal-date-input__calendar-menu{overflow:visible;padding:0;min-width:auto}.opal-date-input .opal-date-input__calendar{border:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;