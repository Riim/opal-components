(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-switch-menu"] = factory(require("rionite"));
	else
		root["opal-switch-menu"] = factory(root["rionite"]);
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
	__webpack_require__(69);
	var rionite_1 = __webpack_require__(1);
	var forEach = Array.prototype.forEach;
	var find = Array.prototype.find;
	var OpalSwitchMenu = (function (_super) {
	    __extends(OpalSwitchMenu, _super);
	    function OpalSwitchMenu() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(OpalSwitchMenu.prototype, "checkedButton", {
	        get: function () {
	            if (this._checkedButton !== undefined) {
	                return this._checkedButton;
	            }
	            return (this._checkedButton = find.call(this.buttons, function (button) { return button.$c.checked; }) || null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalSwitchMenu.prototype.ready = function () {
	        this.buttons = this.element.getElementsByClassName('opal-button');
	    };
	    OpalSwitchMenu.prototype.clear = function () {
	        var checkedButton = this._checkedButton;
	        if (checkedButton) {
	            checkedButton.uncheck();
	            this._checkedButton = null;
	        }
	    };
	    return OpalSwitchMenu;
	}(rionite_1.Component));
	OpalSwitchMenu = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-switch-menu',
	        bemlTemplate: 'rt-content/content (no-clone)',
	        events: {
	            ':component': {
	                '<opal-button>check': function (evt) {
	                    var checkedButton = evt.target;
	                    forEach.call(this.buttons, function (btn) {
	                        if (btn.$c != checkedButton) {
	                            btn.$c.uncheck();
	                        }
	                    });
	                    this._checkedButton = checkedButton;
	                    this.emit('change');
	                },
	                '<opal-button>uncheck': function (evt) {
	                    evt.target.check();
	                }
	            }
	        }
	    })
	], OpalSwitchMenu);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalSwitchMenu;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-switch-menu{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;