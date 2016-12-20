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
	__webpack_require__(51);
	var rionite_1 = __webpack_require__(1);
	var date_exists_1 = __webpack_require__(20);
	var template = __webpack_require__(27);
	var OpalDateInput = (function (_super) {
	    __extends(OpalDateInput, _super);
	    function OpalDateInput() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.dateExists = date_exists_1.default;
	        return _this;
	    }
	    return OpalDateInput;
	}(rionite_1.Component));
	OpalDateInput = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-date-input',
	        props: {
	            mask: '99/99/9999',
	            value: String,
	            placeholder: 'dd/mm/yyyy',
	            required: { default: false, readonly: true },
	            popoverTo: 'right'
	        },
	        i18n: {
	            nonExistentDate: rionite_1.getText.t('Несуществующая дата'),
	            isRequiredField: rionite_1.getText.t('Поле обязательно для заполнения')
	        },
	        template: new rionite_1.ComponentTemplate(template)
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

/***/ 27:
/***/ function(module, exports) {

	module.exports = "{{block validation }} <opal-input-validator> {{block validation_rules }} <template is=\"rt-if-then\" if=\"props.required\" rt-silent=\"\"> <opal-input-validator-rule required=\"\" popover-to=\"{props.popoverTo}\">{{i18n.isRequiredField}}</opal-input-validator-rule> </template> <opal-input-validator-rule test=\"dateExists\" popover-to=\"{props.popoverTo}\">{{i18n.nonExistentDate}}</opal-input-validator-rule> {{/block}} {{block input_mask }} <opal-input-mask mask=\"{props.mask}\"> {{block input }} <opal-text-input class=\"opal-date-input__input opal-input-validator__input opal-input-mask__input\" value=\"{props.value}\" placeholder=\"{props.placeholder}\"></opal-text-input> {{/block}} </opal-input-mask> {{/block}} </opal-input-validator> {{/block}}"

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-date-input{position:relative;display:inline-block;vertical-align:middle;line-height:0}.opal-date-input .opal-date-input__input{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;