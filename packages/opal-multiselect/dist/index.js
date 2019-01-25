(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("cellx-decorators"), require("rionite"), require("@riim/opal-select"), require("@riim/opal-loaded-list"), require("@riim/opal-button"), require("@riim/platform"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "@riim/opal-text-input", "reflect-metadata", "cellx-decorators", "rionite", "@riim/opal-select", "@riim/opal-loaded-list", "@riim/opal-button", "@riim/platform"], factory);
	else if(typeof exports === 'object')
		exports["@riim/packages/opal-multiselect/src/index.ts"] = factory(require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("cellx-decorators"), require("rionite"), require("@riim/opal-select"), require("@riim/opal-loaded-list"), require("@riim/opal-button"), require("@riim/platform"));
	else
		root["@riim/packages/opal-multiselect/src/index.ts"] = factory(root["@riim/opal-icon"], root["@riim/opal-text-input"], root["reflect-metadata"], root["cellx-decorators"], root["rionite"], root["@riim/opal-select"], root["@riim/opal-loaded-list"], root["@riim/opal-button"], root["@riim/platform"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__44__, __WEBPACK_EXTERNAL_MODULE__159__, __WEBPACK_EXTERNAL_MODULE__161__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(159);
__webpack_require__(2);
__webpack_require__(44);
__webpack_require__(17);
__webpack_require__(3);
__webpack_require__(4);
__export(__webpack_require__(160));


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__159__;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var opal_select_1 = __webpack_require__(17);
var platform_1 = __webpack_require__(161);
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
__webpack_require__(162);
var template = __webpack_require__(163);
var OpalMultiselect = /** @class */ (function (_super) {
    __extends(OpalMultiselect, _super);
    function OpalMultiselect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMultiple = true;
        return _this;
    }
    Object.defineProperty(OpalMultiselect.prototype, "nothingSelectedShown", {
        get: function () {
            return !this.viewModel.length;
        },
        enumerable: true,
        configurable: true
    });
    OpalMultiselect.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
            throw new TypeError('Parameter "dataProvider" is required');
        }
        this.dataProvider = this.paramDataProvider;
        if (!this.dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
        if (!platform_1.isMobile) {
            this._queryInputClass = 'OpalSelect__focus';
        }
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalMultiselect.prototype, "paramMultiple", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalMultiselect.prototype, "paramDataProvider", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalMultiselect.prototype, "nothingSelectedShown", null);
    OpalMultiselect = __decorate([
        rionite_1.Component({
            elementIs: 'OpalMultiselect',
            template: opal_select_1.OpalSelect.template.extend(template),
            events: {
                queryInput: {
                    input: function (evt) {
                        this.$('loadedList').paramQuery = evt.target.value;
                    },
                    clear: function () {
                        this.$('loadedList').paramQuery = '';
                    }
                },
                btnClose: {
                    click: function () {
                        this.close();
                        this.focus();
                    }
                }
            },
            domEvents: {
                btnDeselectItem: {
                    click: function (evt, context) {
                        this.viewModel.remove(context.item);
                    }
                }
            }
        })
    ], OpalMultiselect);
    return OpalMultiselect;
}(opal_select_1.OpalSelect));
exports.OpalMultiselect = OpalMultiselect;


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__161__;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultiselect.OpalSelect .OpalSelect__menu{padding:0;width:600px}.OpalMultiselect.OpalSelect .OpalSelect__menuHeader{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;line-height:60px}.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderLeftPart,.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderRightPart{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;width:299px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderLeftPart{font-size:0}.OpalMultiselect.OpalSelect .OpalSelect__queryInput{width:100%}.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderRightPart{padding-right:22px;text-align:right}.OpalMultiselect.OpalSelect .OpalSelect__menuList{float:left;width:299px;height:304px}.OpalMultiselect.OpalSelect .OpalSelect__menuSelected{float:right;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:299px;height:304px;border-left:1px solid #ccc}.OpalMultiselect.OpalSelect .OpalSelect__selectedItem{position:relative;overflow:hidden;padding:7px 38px 7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalMultiselect.OpalSelect .OpalSelect__selectedItem:hover .OpalSelect__btnDeselectItem{display:block}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem:hover{color:#000}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem:focus{outline:0}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItemIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelectedSlot{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelectedSlot::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelected{display:inline-block;vertical-align:middle;white-space:normal}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelectedMessage{white-space:nowrap;opacity:.6}.OpalMultiselect.OpalSelect .OpalSelect__menuFooter{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;border-top:1px solid #ccc;line-height:60px}.OpalMultiselect.OpalSelect .OpalSelect__menuFooterLeftPart,.OpalMultiselect.OpalSelect .OpalSelect__menuFooterRightPart{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.OpalMultiselect.OpalSelect .OpalSelect__menuFooterLeftPart{padding-left:22px}.OpalMultiselect.OpalSelect .OpalSelect__menuFooterRightPart{text-align:right;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "/menu (super!, autoHeight=no) {\ndiv/menuHeader {\ndiv/menuHeaderLeftPart {\nOpalTextInput/queryInput (\nclass={_queryInputClass},\nclearable,\nplaceholder={'Поиск' |t }\n) {\nOpalIcon/queryInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\ndiv/menuHeaderRightPart {\n@Slot/menuHeaderContentSlot (for=menuHeaderContent) {\n@IfThen (viewModel.length) {\nspan/selectedCount {\n'{\"выбрано {n}\" |t(viewModel.length) }'\n}\n}\n}\n}\n}\ndiv/menuList {\nOpalLoadedList/loadedList (\ndataProvider={dataProvider},\ndataListItemValueName={_dataListItemValueFieldName}\n) {\nOpalSelectOption/option (\nclass=OpalLoadedList__listItem,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\ndiv/menuSelected {\n@Repeat (for=item in viewModel) {\ndiv/selectedItem {\n'{item |key(_viewModelItemTextFieldName) }'\nbutton/btnDeselectItem (tabindex=-1) {\nOpalIcon/btnDeselectItemIcon (name=cross)\n}\n}\n}\n@IfThen (nothingSelectedShown) {\n@Slot/nothingSelectedSlot (for=nothingSelected) {\nspan/nothingSelected {\nspan/nothingSelectedMessage {\n'{\"Ничего не выбрано\" |t }'\n}\n}\n}\n}\n}\ndiv/menuFooter {\ndiv/menuFooterLeftPart {\n@Slot/menuFooterContentSlot (for=menuFooterContent)\n}\ndiv/menuFooterRightPart {\nOpalButton/btnClose {\n'{\"Закрыть\" |t }'\n}\n}\n}\n}"

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__44__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});