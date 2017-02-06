(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-button"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-button"] = factory(root["rionite"], root["cellx"]);
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
	__webpack_require__(44);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var OpalButton = (function (_super) {
	    __extends(OpalButton, _super);
	    function OpalButton() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalButton.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _tabIndex: function () {
	                return this.props['disabled'] ? -1 : this.props['tabIndex'];
	            }
	        });
	    };
	    OpalButton.prototype.ready = function () {
	        if (this.props['focused']) {
	            this.element.tabIndex = this._tabIndex;
	            this.focus();
	        }
	    };
	    OpalButton.prototype.elementAttached = function () {
	        this.element.tabIndex = this._tabIndex;
	    };
	    OpalButton.prototype.propertyChanged = function (name, value) {
	        if (name == 'focused') {
	            this[value ? 'focus' : 'blur']();
	        }
	    };
	    Object.defineProperty(OpalButton.prototype, "checked", {
	        get: function () {
	            return this.props['checked'];
	        },
	        set: function (checked) {
	            this.props['checked'] = checked;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalButton.prototype.check = function () {
	        if (!this.props['checked']) {
	            this.props['checked'] = true;
	            return true;
	        }
	        return false;
	    };
	    OpalButton.prototype.uncheck = function () {
	        if (this.props['checked']) {
	            this.props['checked'] = false;
	            return true;
	        }
	        return false;
	    };
	    OpalButton.prototype.toggle = function (value) {
	        return (this.props['checked'] = value === undefined ? !this.props['checked'] : value);
	    };
	    OpalButton.prototype.focus = function () {
	        this.element.focus();
	        return this;
	    };
	    OpalButton.prototype.blur = function () {
	        this.element.blur();
	        return this;
	    };
	    OpalButton.prototype.enable = function () {
	        this.props['disabled'] = false;
	        return this;
	    };
	    OpalButton.prototype.disable = function () {
	        this.props['disabled'] = true;
	        return this;
	    };
	    return OpalButton;
	}(rionite_1.Component));
	OpalButton = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-button',
	        props: {
	            viewType: 'default',
	            size: 'm',
	            checkable: false,
	            checked: false,
	            loading: false,
	            tabIndex: 0,
	            focused: false,
	            disabled: false
	        },
	        events: {
	            ':component': {
	                'change:_tabIndex': function () {
	                    this.element.tabIndex = this._tabIndex;
	                }
	            },
	            ':element': {
	                focusin: function (evt) {
	                    this.props['focused'] = true;
	                    this.emit({ type: 'focusin', originalEvent: evt });
	                },
	                focusout: function (evt) {
	                    this.props['focused'] = false;
	                    this.emit({ type: 'focusout', originalEvent: evt });
	                },
	                click: function (evt) {
	                    if (this.props['disabled']) {
	                        return;
	                    }
	                    if (this.props['checkable']) {
	                        this.emit(this.toggle() ? 'check' : 'uncheck');
	                    }
	                    this.emit({ type: 'click', originalEvent: evt });
	                }
	            }
	        }
	    })
	], OpalButton);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalButton;


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

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-button{padding:0;border:0;background:0 0;color:inherit;font-size:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-button:not([view-type=clean]){position:relative;display:inline-block;box-sizing:border-box;padding:7px 23px;border-radius:3px;background:#546778;color:#fff;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;transition:background .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-button:not([view-type=clean])::-moz-focus-inner{padding:0;border:0}.opal-button:not([view-type=clean])[size=s]{padding:4px 13px;font-size:14px;line-height:21px}.opal-button:not([view-type=clean]):hover{background:#597791}.opal-button:not([view-type=clean]):focus{outline:none}body:not(._no-focus-highlight) .opal-button:not([view-type=clean]):focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-button:not([view-type=clean]):active,.opal-button:not([view-type=clean])[checked]{background:#43484c}.opal-button:not([view-type=clean])[loading]{background-image:linear-gradient(135deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-size:30px 30px;animation:opal-button-loading-animation 3s linear infinite}.opal-button:not([view-type=clean])[disabled]{opacity:.5;pointer-events:none}.opal-group .opal-group__content>.opal-button:not([view-type=clean]):not(:first-child),.opal-group .opal-group__content>:not(:first-child) .opal-button:not([view-type=clean]){border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-group .opal-group__content>.opal-button:not([view-type=clean]):not(:last-child),.opal-group .opal-group__content>:not(:last-child) .opal-button:not([view-type=clean]){border-top-right-radius:0;border-bottom-right-radius:0}.opal-switch-menu .opal-button:not([view-type=clean]):not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-switch-menu .opal-button:not([view-type=clean]):not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.opal-button[view-type=primary]{background:#1b91f8}.opal-button[view-type=primary]:hover{background-color:#33a0ff}.opal-button[view-type=primary]:active,.opal-button[view-type=primary][checked]{background-color:#1371c3}.opal-button[view-type=danger]{background:#f63159}.opal-button[view-type=danger]:hover{background-color:#fd496d}.opal-button[view-type=danger]:active,.opal-button[view-type=danger][checked]{background-color:#d3173d}@keyframes opal-button-loading-animation{0%{background-position:0 0}to{background-position:60px 0}}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;