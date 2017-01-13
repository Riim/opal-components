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
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(50);
	var rionite_1 = __webpack_require__(1);
	var date_exists_1 = __webpack_require__(20);
	var template = __webpack_require__(28);
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
	    OpalDateInput.prototype._onDocumentMouseUp = function () {
	        this._documentMouseUpListening.stop();
	        this._documentMouseUpListening = null;
	        if (this.$('input').$('input') == document.activeElement) {
	            this.$('calendar-menu').open();
	        }
	    };
	    return OpalDateInput;
	}(rionite_1.Component));
	OpalDateInput = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-date-input',
	        props: {
	            mask: '99.99.9999',
	            value: String,
	            placeholder: 'dd.mm.yyyy',
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
	            input: {
	                focusin: function () {
	                    if (!this._documentMouseUpListening) {
	                        this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
	                    }
	                },
	                change: function (evt) {
	                    if (this.$('input-validator').valid) {
	                        this.$('calendar').props['value'] = evt.target.value;
	                    }
	                }
	            },
	            'calendar': {
	                change: function (evt) {
	                    if (!evt.target.element.classList.contains('opal-date-input__calendar')) {
	                        return;
	                    }
	                    this.$('input').value = evt.target.props['value'];
	                    this.$('calendar-menu').close();
	                }
	            }
	        }
	    })
	], OpalDateInput);
	Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ 28:
/***/ function(module, exports) {

	module.exports = "opal-input-validator/input-validator {\ntemplate (is=rt-if-then, if=props.required, rt-silent) {\nopal-input-validator-rule/input-validator-rule-required (required, popover-to={props.popoverTo}) {\n'{constructor.i18n.isRequiredField}'\n}\n}\nopal-input-validator-rule/input-validator-rule-date-exists (test=dateExists, popover-to={props.popoverTo}) {\n'{constructor.i18n.nonExistentDate}'\n}\nopal-input-validator-rule/input-validator-rule-date-in-range (test=dateInRange, popover-to={props.popoverTo}) {\n'{constructor.i18n.invalidDateRange}'\n}\nopal-input-mask/input-mask (mask={props.mask}) {\nopal-text-input/input (\nclass=opal-input-validator__input opal-input-mask__input,\nvalue={props.value},\nplaceholder={props.placeholder}\n)\n}\n}\nopal-dropdown/calendar-menu (auto-closing) {\nopal-calendar/calendar (date-delimiter=.)\n}"

/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-date-input{position:relative;display:inline-block;vertical-align:middle;line-height:0}.opal-date-input .opal-date-input__input{display:block}.opal-date-input .opal-date-input__calendar-menu{overflow:visible;padding:0;min-width:auto}.opal-date-input .opal-date-input__calendar{border:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;