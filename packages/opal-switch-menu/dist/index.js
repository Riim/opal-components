(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-button"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-button", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-switch-menu"] = factory(require("@riim/opal-button"), require("rionite"));
	else
		root["@riim/opal-switch-menu"] = factory(root["@riim/opal-button"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_X6DG__, __WEBPACK_EXTERNAL_MODULE_u4yd__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "BOmU");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4clU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalSwitchMenu_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalSwitchMenu = void 0;
const opal_button_1 = __webpack_require__("X6DG");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("ssXy");
const template_rnt_1 = __webpack_require__("HNRH");
const forEach = Array.prototype.forEach;
const find = Array.prototype.find;
let OpalSwitchMenu = OpalSwitchMenu_1 = class OpalSwitchMenu extends rionite_1.BaseComponent {
    get checkedButton() {
        if (this._checkedButton !== undefined) {
            return this._checkedButton;
        }
        return (this._checkedButton =
            find.call(this.buttonElements, (btnEl) => btnEl.rioniteComponent.checked) || null);
    }
    set checkedButton(checkedButton) {
        if (checkedButton === this._checkedButton) {
            return;
        }
        forEach.call(this.buttonElements, (btnEl) => {
            let btn = btnEl.rioniteComponent;
            if (btn === checkedButton) {
                btn.check();
            }
            else {
                btn.uncheck();
            }
        });
        this._checkedButton = checkedButton;
        this.emit(OpalSwitchMenu_1.EVENT_CHANGE);
    }
    ready() {
        this.buttonElements = this.element.getElementsByClassName('OpalButton');
    }
    _onButtonCheck(evt) {
        let checkedButton = evt.target;
        forEach.call(this.buttonElements, (btnEl) => {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
        this._checkedButton = checkedButton;
        this.emit(OpalSwitchMenu_1.EVENT_CHANGE);
    }
    _onButtonUncheck(evt) {
        evt.target.check();
    }
    clear() {
        let checkedButton = this._checkedButton;
        if (checkedButton) {
            checkedButton.uncheck();
            this._checkedButton = null;
        }
    }
};
OpalSwitchMenu.EVENT_CHANGE = Symbol('change');
__decorate([
    rionite_1.Listen(opal_button_1.OpalButton.EVENT_CHECK)
], OpalSwitchMenu.prototype, "_onButtonCheck", null);
__decorate([
    rionite_1.Listen(opal_button_1.OpalButton.EVENT_UNCHECK)
], OpalSwitchMenu.prototype, "_onButtonUncheck", null);
OpalSwitchMenu = OpalSwitchMenu_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSwitchMenu',
        template: template_rnt_1.default
    })
], OpalSwitchMenu);
exports.OpalSwitchMenu = OpalSwitchMenu;


/***/ }),

/***/ "BOmU":
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
__webpack_require__("X6DG");
__exportStar(__webpack_require__("4clU"), exports);


/***/ }),

/***/ "HNRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["contentSlot"],,,"RnSlot",,]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "X6DG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X6DG__;

/***/ }),

/***/ "ssXy":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSwitchMenu{position:relative;display:inline-block;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ })

/******/ });
});