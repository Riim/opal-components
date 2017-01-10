(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-dropdown"] = factory(require("rionite"));
	else
		root["opal-dropdown"] = factory(root["rionite"]);
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
	var openedDropdowns = [];
	var OpalDropdown = (function (_super) {
	    __extends(OpalDropdown, _super);
	    function OpalDropdown() {
	        return _super.apply(this, arguments) || this;
	    }
	    OpalDropdown.prototype.ready = function () {
	        if (this.props['opened']) {
	            this._open();
	        }
	    };
	    OpalDropdown.prototype.elementAttributeChanged = function (name, oldValue, value) {
	        if (name == 'opened') {
	            this[value ? '_open' : '_close']();
	        }
	    };
	    OpalDropdown.prototype.open = function () {
	        if (this.props['opened']) {
	            return false;
	        }
	        this.props['opened'] = true;
	        return true;
	    };
	    OpalDropdown.prototype.close = function () {
	        if (!this.props['opened']) {
	            return false;
	        }
	        this.props['opened'] = false;
	        return true;
	    };
	    OpalDropdown.prototype.toggle = function (value) {
	        return (this.props['opened'] = value === undefined ? !this.props['opened'] : value);
	    };
	    OpalDropdown.prototype._open = function () {
	        var _this = this;
	        openedDropdowns.push(this);
	        var el = this.element;
	        var elStyle = el.style;
	        elStyle.top = '100%';
	        elStyle.right = '';
	        elStyle.bottom = '';
	        elStyle.left = '0';
	        elStyle.display = 'block';
	        elStyle.maxHeight = '';
	        var docEl = document.documentElement;
	        var container = el.offsetParent;
	        var docElClientWidth = docEl.clientWidth;
	        var containerClientRect = container.getBoundingClientRect();
	        var elClientRect = el.getBoundingClientRect();
	        if (elClientRect.right > docElClientWidth) {
	            if (containerClientRect.right - el.offsetWidth >= 0) {
	                elStyle.right = '0';
	                elStyle.left = '';
	            }
	            else {
	                elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
	            }
	        }
	        if (this.props['autoHeight']) {
	            var docElClientHeight = docEl.clientHeight;
	            var margin = elClientRect.top - containerClientRect.bottom;
	            var excess = elClientRect.bottom + margin - docElClientHeight;
	            if (excess > 0) {
	                var diff = containerClientRect.top - (docElClientHeight - containerClientRect.bottom);
	                if (diff > 0) {
	                    elStyle.top = '';
	                    elStyle.bottom = '100%';
	                    excess -= diff;
	                    if (excess > 0) {
	                        elStyle.maxHeight = el.offsetHeight - excess + 'px';
	                    }
	                }
	                else {
	                    elStyle.maxHeight = el.offsetHeight - excess + 'px';
	                }
	            }
	        }
	        if (this.props['autoClosing']) {
	            setTimeout(function () {
	                if (_this.props['opened']) {
	                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
	                }
	            }, 1);
	        }
	        this.emit('open');
	    };
	    OpalDropdown.prototype._close = function () {
	        openedDropdowns.splice(openedDropdowns.indexOf(this), 1);
	        this.element.style.display = '';
	        if (this._documentClickListening) {
	            this._documentClickListening.stop();
	        }
	        this.emit('close');
	    };
	    OpalDropdown.prototype._onDocumentClick = function (evt) {
	        var docEl = document.documentElement;
	        var el = this.element;
	        for (var node = evt.target; node != el;) {
	            if (node == docEl || node.tagName == 'A') {
	                this.close();
	                break;
	            }
	            node = node.parentNode;
	            if (!node) {
	                break;
	            }
	        }
	    };
	    return OpalDropdown;
	}(rionite_1.Component));
	OpalDropdown = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-dropdown',
	        props: {
	            opened: false,
	            autoHeight: true,
	            autoClosing: false
	        },
	        bemlTemplate: 'rt-content/content (no-clone)'
	    })
	], OpalDropdown);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalDropdown;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-dropdown{position:absolute;z-index:100;display:none;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;margin:2px 0;padding:6px 0;min-width:100%;border:1px solid #ccc;border-radius:3px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.opal-dropdown .opal-dropdown__content{position:relative;display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;