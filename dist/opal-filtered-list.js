(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-filtered-list"] = factory(require("rionite"));
	else
		root["opal-filtered-list"] = factory(root["rionite"]);
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
	__webpack_require__(52);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(29);
	var OpalFilteredList = (function (_super) {
	    __extends(OpalFilteredList, _super);
	    function OpalFilteredList() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalFilteredList.prototype.focus = function () {
	        this.$('query-input').focus();
	    };
	    return OpalFilteredList;
	}(rionite_1.Component));
	OpalFilteredList = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-filtered-list',
	        bemlTemplate: template,
	        events: {
	            'query-input': {
	                input: function (evt) {
	                    this.$('loaded-list').props['query'] = evt.target.value;
	                }
	            }
	        }
	    })
	], OpalFilteredList);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalFilteredList;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = "rt-content/query-input-container (select=.opal-filtered-list__query-input, no-clone) {\nopal-text-input/query-input\n}\nrt-content/loaded-list-container (select=.opal-filtered-list__loaded-list, no-clone)"

/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-filtered-list .opal-filtered-list__query-input-container{display:block;margin-bottom:15px}.opal-filtered-list .opal-filtered-list__query-input{display:block;width:auto}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;