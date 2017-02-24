(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-radio-group"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-radio-group"] = factory(root["rionite"], root["cellx"]);
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
	Object.defineProperty(exports, "__esModule", { value: true });
	var rionite_1 = __webpack_require__(1);
	var opal_radio_button_1 = __webpack_require__(7);
	var opal_radio_button_2 = __webpack_require__(7);
	exports.OpalRadioButton = opal_radio_button_2.default;
	var forEach = Array.prototype.forEach;
	var OpalRadioGroup = (function (_super) {
	    __extends(OpalRadioGroup, _super);
	    function OpalRadioGroup() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalRadioGroup.prototype.ready = function () {
	        this.buttonElements = this.element.getElementsByClassName('opal-radio-button');
	    };
	    return OpalRadioGroup;
	}(rionite_1.Component));
	OpalRadioGroup.OpalRadioButton = opal_radio_button_1.default;
	OpalRadioGroup = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-radio-group',
	        events: {
	            ':component': {
	                '<opal-radio-button>check': function (evt) {
	                    var checkedButton = evt.target;
	                    forEach.call(this.buttonElements, function (btnEl) {
	                        if (btnEl.$c != checkedButton) {
	                            btnEl.$c.uncheck();
	                        }
	                    });
	                },
	                '<opal-radio-button>uncheck': function (evt) {
	                    evt.target.check();
	                }
	            }
	        }
	    })
	], OpalRadioGroup);
	exports.default = OpalRadioGroup;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 7:
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
	__webpack_require__(62);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(33);
	var OpalRadioButton = (function (_super) {
	    __extends(OpalRadioButton, _super);
	    function OpalRadioButton() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalRadioButton.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _tabIndex: function () {
	                return this.props['disabled'] ? -1 : this.props['tabIndex'];
	            }
	        });
	    };
	    OpalRadioButton.prototype.ready = function () {
	        var props = this.props;
	        if (props['checked']) {
	            this.$('input').checked = true;
	        }
	        if (props['focused']) {
	            this.focus();
	        }
	    };
	    OpalRadioButton.prototype.propertyChanged = function (name, value) {
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
	    Object.defineProperty(OpalRadioButton.prototype, "checked", {
	        get: function () {
	            return this.props['checked'];
	        },
	        set: function (checked) {
	            this.props['checked'] = checked;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalRadioButton.prototype.check = function () {
	        if (!this.props['checked']) {
	            this.props['checked'] = true;
	            return true;
	        }
	        return false;
	    };
	    OpalRadioButton.prototype.uncheck = function () {
	        if (this.props['checked']) {
	            this.props['checked'] = false;
	            return true;
	        }
	        return false;
	    };
	    OpalRadioButton.prototype.toggle = function (value) {
	        return (this.props['checked'] = value === undefined ? !this.props['checked'] : value);
	    };
	    OpalRadioButton.prototype.focus = function () {
	        this.$('control').focus();
	        return this;
	    };
	    OpalRadioButton.prototype.blur = function () {
	        this.$('control').blur();
	        return this;
	    };
	    OpalRadioButton.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
	            evt.preventDefault();
	            var props = this.props;
	            if (!props['disabled']) {
	                this.emit((props['checked'] = !props['checked']) ? 'check' : 'uncheck');
	                this.emit('change');
	            }
	        }
	    };
	    OpalRadioButton.prototype.enable = function () {
	        this.props['disabled'] = false;
	        return this;
	    };
	    OpalRadioButton.prototype.disable = function () {
	        this.props['disabled'] = true;
	        return this;
	    };
	    return OpalRadioButton;
	}(rionite_1.Component));
	OpalRadioButton = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-radio-button',
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
	                focusin: function () {
	                    this.props['focused'] = true;
	                    this.emit('focusin');
	                },
	                focusout: function () {
	                    this.props['focused'] = false;
	                    this.emit('focusout');
	                }
	            }
	        }
	    })
	], OpalRadioButton);
	exports.default = OpalRadioButton;


/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = "label/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nrt-content/content (cloning=no)\n}"

/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-radio-button{position:relative;display:inline-block}.opal-radio-button .opal-radio-button__input{display:none}.opal-radio-button .opal-radio-button__control{position:relative;top:-1px;display:inline-block;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control{border-color:#8a8a8a}.opal-radio-button .opal-radio-button__control:focus,.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control:focus{outline:none;border-color:#33a0ff}.opal-radio-button[checked] .opal-radio-button__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.opal-radio-button[disabled]{opacity:.5;pointer-events:none}.opal-radio-button[disabled] .opal-radio-button__control{background:#e6e6e6}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;