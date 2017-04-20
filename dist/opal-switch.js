(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-switch"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-switch"] = factory(root["rionite"], root["cellx"]);
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
	__webpack_require__(70);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(39);
	var nextTick = cellx_1.Utils.nextTick;
	var OpalSwitch = (function (_super) {
	    __extends(OpalSwitch, _super);
	    function OpalSwitch() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalSwitch.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _tabIndex: function () {
	                return this.props['disabled'] ? -1 : this.props['tabIndex'];
	            }
	        });
	    };
	    OpalSwitch.prototype.ready = function () {
	        if (this.props['checked']) {
	            this.$('input').checked = true;
	        }
	        if (this.props['focused']) {
	            this.focus();
	        }
	    };
	    OpalSwitch.prototype.propertyChanged = function (name, value) {
	        if (name == 'checked') {
	            this.$('input').checked = value;
	        }
	        else if (name == 'focused') {
	            if (value) {
	                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                this.focus();
	            }
	            else {
	                this._documentKeyDownListening.stop();
	                this.blur();
	            }
	        }
	    };
	    OpalSwitch.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
	            evt.preventDefault();
	            var props = this.props;
	            if (!props['disabled']) {
	                this.emit((props['checked'] = !props['checked']) ? 'check' : 'uncheck');
	                this.emit('change');
	            }
	        }
	    };
	    Object.defineProperty(OpalSwitch.prototype, "checked", {
	        get: function () {
	            return this.props['checked'];
	        },
	        set: function (checked) {
	            this.props['checked'] = checked;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalSwitch.prototype.check = function () {
	        if (!this.props['checked']) {
	            this.props['checked'] = true;
	            return true;
	        }
	        return false;
	    };
	    OpalSwitch.prototype.uncheck = function () {
	        if (this.props['checked']) {
	            this.props['checked'] = false;
	            return true;
	        }
	        return false;
	    };
	    OpalSwitch.prototype.toggle = function (value) {
	        return (this.props['checked'] = value === undefined ? !this.props['checked'] : value);
	    };
	    OpalSwitch.prototype.focus = function () {
	        this.$('control').focus();
	        return this;
	    };
	    OpalSwitch.prototype.blur = function () {
	        this.$('control').blur();
	        return this;
	    };
	    OpalSwitch.prototype.enable = function () {
	        this.props['disabled'] = false;
	        return this;
	    };
	    OpalSwitch.prototype.disable = function () {
	        this.props['disabled'] = true;
	        return this;
	    };
	    return OpalSwitch;
	}(rionite_1.Component));
	OpalSwitch = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-switch',
	        props: {
	            checked: false,
	            tabIndex: 0,
	            focused: false,
	            disabled: false
	        },
	        bemlTemplate: template,
	        events: {
	            input: {
	                change: function (evt) {
	                    this.emit((this.props['checked'] = evt.target.checked) ? 'check' : 'uncheck');
	                    this.emit('change');
	                }
	            },
	            control: {
	                focus: function (evt) {
	                    var _this = this;
	                    nextTick(function () {
	                        if (document.activeElement == evt.target) {
	                            _this.props['focused'] = true;
	                            _this.emit('focus');
	                        }
	                    });
	                },
	                blur: function () {
	                    this.props['focused'] = false;
	                    this.emit('blur');
	                }
	            }
	        }
	    })
	], OpalSwitch);
	exports.default = OpalSwitch;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex}) { span/thumb }\n' '\nrt-content/content (cloning=no)\n}\n}"

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-switch{position:relative;display:inline-block}.opal-switch .opal-switch__input{display:none}.opal-switch .opal-switch__control{position:relative;top:-1px;display:inline-block;margin:3px;width:30px;height:14px;border-radius:7px;background:#d6d6d6;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-switch .opal-switch__thumb{position:absolute;top:-3px;left:-3px;width:20px;height:20px;border-radius:50%;background:#546778;transition:background .1s linear,transform .1s linear}.opal-switch .opal-switch__label:hover .opal-switch__thumb{background:#597791}.opal-switch .opal-switch__control:focus{outline:none}body:not(._no-focus-highlight) .opal-switch .opal-switch__control:focus .opal-switch__thumb::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:50%;content:''}.opal-switch[checked] .opal-switch__thumb{background:#1b91f8;-ms-transform:translateX(16px);transform:translateX(16px)}.opal-switch[checked] .opal-switch__label:hover .opal-switch__thumb{background:#33a0ff}.opal-switch[disabled]{opacity:.5;pointer-events:none}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;