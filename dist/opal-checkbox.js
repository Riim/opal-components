(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-checkbox"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-checkbox"] = factory(root["rionite"], root["cellx"]);
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
	__webpack_require__(47);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(24);
	var nextTick = cellx_1.Utils.nextTick;
	var OpalCheckbox = (function (_super) {
	    __extends(OpalCheckbox, _super);
	    function OpalCheckbox() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalCheckbox.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _tabIndex: function () {
	                return this.props.disabled ? -1 : this.props.tabIndex;
	            }
	        });
	    };
	    OpalCheckbox.prototype.ready = function () {
	        var props = this.props;
	        if (props.checked) {
	            props.indeterminate = false;
	            this.$('input').checked = true;
	        }
	        if (props.focused) {
	            this.focus();
	        }
	    };
	    OpalCheckbox.prototype.propertyChanged = function (name, value) {
	        if (name == 'checked') {
	            if (value) {
	                this.props.indeterminate = false;
	            }
	            this.$('input').checked = value;
	        }
	        else if (name == 'indeterminate') {
	            if (value) {
	                this.props.checked = false;
	            }
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
	    OpalCheckbox.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
	            evt.preventDefault();
	            var props = this.props;
	            if (!props.disabled) {
	                this.emit((props.checked = !props.checked) ? 'check' : 'uncheck');
	                this.emit('change');
	            }
	        }
	    };
	    Object.defineProperty(OpalCheckbox.prototype, "checked", {
	        get: function () {
	            return this.props.checked;
	        },
	        set: function (checked) {
	            this.props.checked = checked;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalCheckbox.prototype.check = function () {
	        if (!this.props.checked) {
	            this.props.checked = true;
	            return true;
	        }
	        return false;
	    };
	    OpalCheckbox.prototype.uncheck = function () {
	        if (this.props.checked) {
	            this.props.checked = false;
	            return true;
	        }
	        return false;
	    };
	    OpalCheckbox.prototype.toggle = function (value) {
	        return (this.props.checked = value === undefined ? !this.props.checked : value);
	    };
	    OpalCheckbox.prototype.focus = function () {
	        this.$('control').focus();
	        return this;
	    };
	    OpalCheckbox.prototype.blur = function () {
	        this.$('control').blur();
	        return this;
	    };
	    OpalCheckbox.prototype.enable = function () {
	        this.props.disabled = false;
	        return this;
	    };
	    OpalCheckbox.prototype.disable = function () {
	        this.props.disabled = true;
	        return this;
	    };
	    return OpalCheckbox;
	}(rionite_1.Component));
	OpalCheckbox = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-checkbox',
	        props: {
	            checked: false,
	            indeterminate: false,
	            tabIndex: 0,
	            focused: false,
	            disabled: false
	        },
	        bemlTemplate: template,
	        events: {
	            input: {
	                change: function (evt) {
	                    this.emit((this.props.checked = evt.target.checked) ? 'check' : 'uncheck');
	                    this.emit('change');
	                }
	            },
	            control: {
	                focus: function (evt) {
	                    var _this = this;
	                    nextTick(function () {
	                        if (document.activeElement == evt.target) {
	                            _this.props.focused = true;
	                            _this.emit('focus');
	                        }
	                    });
	                },
	                blur: function () {
	                    this.props.focused = false;
	                    this.emit('blur');
	                }
	            }
	        }
	    })
	], OpalCheckbox);
	exports.default = OpalCheckbox;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nrt-content/content (cloning=no)\n}\n}"

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-checkbox{position:relative;display:inline-block}.opal-checkbox .opal-checkbox__input{display:none}.opal-checkbox .opal-checkbox__control{position:relative;top:-1px;display:inline-block;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-checkbox .opal-checkbox__label:hover .opal-checkbox__control{border-color:#8a8a8a}.opal-checkbox .opal-checkbox__control:focus,.opal-checkbox .opal-checkbox__label:hover .opal-checkbox__control:focus{outline:none;border-color:#33a0ff}.opal-checkbox[checked] .opal-checkbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-checkbox[indeterminate] .opal-checkbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.opal-checkbox[disabled]{opacity:.5;pointer-events:none}.opal-checkbox[disabled] .opal-checkbox__control{background:#e6e6e6}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;