(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("@riim/opal-icon"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "@riim/opal-icon"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-editable-text"] = factory(require("rionite"), require("reflect-metadata"), require("@riim/opal-icon"));
	else
		root["@riim/opal-editable-text"] = factory(root["rionite"], root["reflect-metadata"], root["@riim/opal-icon"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(5);
__webpack_require__(1);
__export(__webpack_require__(56));


/***/ }),

/***/ 56:
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(57);
var template_nelm_1 = __webpack_require__(58);
var OpalEditableText = /** @class */ (function (_super) {
    __extends(OpalEditableText, _super);
    function OpalEditableText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalEditableText.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = this._fixedValue = (value && value.trim()) || null;
            this._textNode.nodeValue = value || '';
        },
        enumerable: true,
        configurable: true
    });
    OpalEditableText.prototype.ready = function () {
        var contentSlotEl = this.$('content-slot').element;
        var firstChild = contentSlotEl.firstChild;
        if (!firstChild || firstChild.nodeType != Node.TEXT_NODE) {
            throw new TypeError('Content must be text node');
        }
        this._textNode = firstChild;
        this._value = this._fixedValue = contentSlotEl.textContent.trim() || null;
    };
    OpalEditableText.prototype.elementAttached = function () {
        this.listenTo(this.element, 'click', this._onElementClick);
        this.listenTo(this.$('content-slot').element, {
            focus: this._onContentSlotElementFocus,
            blur: this._onContentSlotElementBlur,
            input: this._onContentSlotElementInput
        });
    };
    OpalEditableText.prototype._onElementClick = function (evt) {
        if (evt.target == this.element) {
            this.focus();
        }
    };
    OpalEditableText.prototype._onContentSlotElementFocus = function () {
        this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
    };
    OpalEditableText.prototype._onContentSlotElementBlur = function () {
        this._documentKeyDownListening.stop();
        if (this._fixedValue != this._value) {
            this._fixedValue = this._value;
            this.emit('change');
        }
    };
    OpalEditableText.prototype._onContentSlotElementInput = function () {
        var contentSlotEl = this.$('content-slot').element;
        var text = contentSlotEl.textContent;
        if (contentSlotEl.innerHTML != text) {
            while (contentSlotEl.lastChild) {
                contentSlotEl.removeChild(contentSlotEl.lastChild);
            }
            var textNode = this._textNode;
            textNode.nodeValue = text;
            contentSlotEl.appendChild(textNode);
            var sel = window.getSelection();
            var rng = document.createRange();
            rng.setStart(textNode, text.length);
            sel.removeAllRanges();
            sel.addRange(rng);
        }
        else if (!contentSlotEl.firstChild) {
            this._textNode.nodeValue = '';
            contentSlotEl.appendChild(this._textNode);
        }
        this._value = text.trim() || null;
        this.emit('input');
    };
    OpalEditableText.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13) {
            evt.preventDefault();
        }
    };
    OpalEditableText.prototype.focus = function (selectAll) {
        var textNode = this._textNode;
        var sel = window.getSelection();
        var rng = document.createRange();
        if (selectAll) {
            rng.selectNode(textNode);
        }
        else {
            rng.setStart(textNode, textNode.nodeValue.length);
        }
        sel.removeAllRanges();
        sel.addRange(rng);
    };
    OpalEditableText = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            domEvents: {
                'icon-edit': {
                    click: function () {
                        this.focus(true);
                    }
                }
            }
        })
    ], OpalEditableText);
    return OpalEditableText;
}(rionite_1.BaseComponent));
exports.OpalEditableText = OpalEditableText;


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalEditableText{display:block;cursor:text}.OpalEditableText .OpalEditableText__content-wrapper{position:relative;display:inline-block;padding-right:24px}.OpalEditableText .OpalEditableText__content-slot{display:inline-block;padding-right:2px}.OpalEditableText .OpalEditableText__content-slot:focus{outline:solid 1px #000}.OpalEditableText .OpalEditableText__icon-edit{position:absolute;top:0;right:0;display:block;width:16px;height:16px;border:solid 2px transparent;border-left-width:6px;color:#107cda;cursor:pointer}.OpalEditableText .OpalEditableText__icon-edit:hover,.OpalEditableText .OpalEditableText__icon-edit:active{stroke:#33a0ff}.OpalEditableText .OpalEditableText__icon-edit:active{top:1px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/content-wrapper {\nRtSlot/content-slot (contenteditable, spellcheck=false)\nOpalIcon/icon-edit (name=compose, stroke-width=3)\n}\n}");

/***/ })

/******/ });
});