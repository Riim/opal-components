(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-editable-text"] = factory(require("@riim/opal-icon"), require("rionite"));
	else
		root["@riim/opal-editable-text"] = factory(root["@riim/opal-icon"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_u4yd__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "/dqT");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/dqT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("Y0hN");
__exportStar(__webpack_require__("3Opk"), exports);


/***/ }),

/***/ "2Dpl":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalEditableText{display:block;cursor:text}.OpalEditableText .OpalEditableText__contentWrapper{position:relative;display:inline-block;padding-right:24px}.OpalEditableText .OpalEditableText__contentSlot{display:inline-block;padding-right:2px}.OpalEditableText .OpalEditableText__contentSlot:focus{outline:solid 1px #000}.OpalEditableText .OpalEditableText__iconEdit{position:absolute;top:0;right:0;display:block;width:16px;height:16px;border:solid 2px transparent;border-left-width:6px;color:var(--primaryColor450, hsl(208,93%,45%));cursor:pointer}.OpalEditableText .OpalEditableText__iconEdit:hover,.OpalEditableText .OpalEditableText__iconEdit:active{stroke:var(--primaryColor650, hsl(208,93%,65%))}.OpalEditableText .OpalEditableText__iconEdit:active{top:1px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "3Opk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalEditableText_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalEditableText = void 0;
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("2Dpl");
const template_rnt_1 = __webpack_require__("vtB9");
let OpalEditableText = OpalEditableText_1 = class OpalEditableText extends rionite_1.BaseComponent {
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = this._fixedValue = (value && value.trim()) || null;
        this._textNode.nodeValue = value || '';
    }
    ready() {
        let contentSlotEl = this.$('contentSlot').element;
        let firstChild = contentSlotEl.firstChild;
        if (!firstChild || firstChild.nodeType != Node.TEXT_NODE) {
            throw new TypeError('Content must be text node');
        }
        this._textNode = firstChild;
        this._value = this._fixedValue = contentSlotEl.textContent.trim() || null;
    }
    _onElementClick(evt) {
        if (evt.target == this.element) {
            this.focus();
        }
    }
    _onContentSlotElementFocus() {
        this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
    }
    _onContentSlotElementBlur() {
        this._documentKeyDownListening.stop();
        if (this._fixedValue != this._value) {
            this._fixedValue = this._value;
            this.emit(OpalEditableText_1.EVENT_CHANGE);
        }
    }
    _onContentSlotElementInput() {
        let contentSlotEl = this.$('contentSlot').element;
        let text = contentSlotEl.textContent;
        if (contentSlotEl.innerHTML != text) {
            while (contentSlotEl.lastChild) {
                contentSlotEl.removeChild(contentSlotEl.lastChild);
            }
            let textNode = this._textNode;
            textNode.nodeValue = text;
            contentSlotEl.appendChild(textNode);
            let sel = window.getSelection();
            let rng = document.createRange();
            rng.setStart(textNode, text.length);
            sel.removeAllRanges();
            sel.addRange(rng);
        }
        else if (!contentSlotEl.firstChild) {
            this._textNode.nodeValue = '';
            contentSlotEl.appendChild(this._textNode);
        }
        this._value = text.trim() || null;
        this.emit(OpalEditableText_1.EVENT_INPUT);
    }
    _onDocumentKeyDown(evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
        }
    }
    focus(selectAll) {
        let textNode = this._textNode;
        let sel = window.getSelection();
        let rng = document.createRange();
        if (selectAll) {
            rng.selectNode(textNode);
        }
        else {
            rng.setStart(textNode, textNode.nodeValue.length);
        }
        sel.removeAllRanges();
        sel.addRange(rng);
    }
};
OpalEditableText.EVENT_CHANGE = Symbol('change');
OpalEditableText.EVENT_INPUT = Symbol('input');
__decorate([
    rionite_1.Listen('click', '@element')
], OpalEditableText.prototype, "_onElementClick", null);
__decorate([
    rionite_1.Listen('focus', (self) => self.$('contentSlot').element)
], OpalEditableText.prototype, "_onContentSlotElementFocus", null);
__decorate([
    rionite_1.Listen('blur', (self) => self.$('contentSlot').element)
], OpalEditableText.prototype, "_onContentSlotElementBlur", null);
__decorate([
    rionite_1.Listen('input', (self) => self.$('contentSlot').element)
], OpalEditableText.prototype, "_onContentSlotElementInput", null);
OpalEditableText = OpalEditableText_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalEditableText',
        template: template_rnt_1.default,
        domEvents: {
            iconEdit: {
                click() {
                    this.focus(true);
                }
            }
        }
    })
], OpalEditableText);
exports.OpalEditableText = OpalEditableText;


/***/ }),

/***/ "Y0hN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y0hN__;

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vtB9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"span",["contentWrapper"],,[[1,,"RnSlot",["contentSlot"],[,[[,"contenteditable",""],[,"spellcheck","false"]]],],[1,,"OpalIcon",["iconEdit"],[,[[,"name","compose"],[,"strokeWidth","3"]]],]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ })

/******/ });
});