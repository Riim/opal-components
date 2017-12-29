(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("@riim/opal-icon"), require("@riim/gettext"), require("@riim/opal-text-input"), require("@riim/opal-select"), require("@riim/opal-button"), require("@riim/opal-loaded-list"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators", "@riim/opal-icon", "@riim/gettext", "@riim/opal-text-input", "@riim/opal-select", "@riim/opal-button", "@riim/opal-loaded-list"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-multiselect"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("@riim/opal-icon"), require("@riim/gettext"), require("@riim/opal-text-input"), require("@riim/opal-select"), require("@riim/opal-button"), require("@riim/opal-loaded-list"));
	else
		root["@riim/opal-multiselect"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"], root["@riim/opal-icon"], root["@riim/gettext"], root["@riim/opal-text-input"], root["@riim/opal-select"], root["@riim/opal-button"], root["@riim/opal-loaded-list"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 170);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(11);
__webpack_require__(5);
__webpack_require__(12);
__webpack_require__(8);
__webpack_require__(7);
__webpack_require__(1);
__export(__webpack_require__(171));


/***/ }),

/***/ 171:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = __webpack_require__(6);
var opal_select_1 = __webpack_require__(8);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(172);
var template_nelm_1 = __webpack_require__(173);
var OpalMultiselect = /** @class */ (function (_super) {
    __extends(OpalMultiselect, _super);
    function OpalMultiselect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMultiple = true;
        return _this;
    }
    Object.defineProperty(OpalMultiselect.prototype, "isNothingSelectedShown", {
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
    ], OpalMultiselect.prototype, "isNothingSelectedShown", null);
    OpalMultiselect = __decorate([
        rionite_1.Component({
            i18n: {
                queryInputPlaceholder: gettext_1.getText.t('Поиск'),
                nothingSelected: gettext_1.getText.t('Ничего не выбрано')
            },
            template: opal_select_1.OpalSelect.template.extend(template_nelm_1.default),
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
                    click: function (evt, btn) {
                        var vmItemValueFieldName = this._viewModelItemValueFieldName;
                        var itemValue = btn.dataset.itemValue;
                        this.viewModel.removeAt(this.viewModel.findIndex(function (item) { return item[vmItemValueFieldName] == itemValue; }));
                    }
                }
            }
        })
    ], OpalMultiselect);
    return OpalMultiselect;
}(opal_select_1.OpalSelect));
exports.OpalMultiselect = OpalMultiselect;


/***/ }),

/***/ 172:
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("/menu (auto-height=no, auto-closing) {\ndiv/menuHeader {\ndiv/menuHeaderLeftPart {\nOpalTextInput/queryInput (\nclass=OpalSelect__focus,\nclearable,\nplaceholder={constructor.i18n.queryInputPlaceholder}\n) {\nOpalIcon/queryInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\ndiv/menuHeaderRightPart {\n@IfThen (if=viewModel.length) {\nspan/selectedCount {\n'выбрано {viewModel.length}'\n}\n}\n}\n}\ndiv/menuList {\nOpalLoadedList/loadedList (\ndata-provider={dataProvider},\ndata-list-item-value-name={_dataListItemValueFieldName}\n) {\nOpalSelectOption/option (\nclass=OpalLoadedList__listItem,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\ndiv/menuSelected {\n@Repeat (for=item of viewModel) {\ndiv/selectedItem {\n'{item |key(_viewModelItemTextFieldName) }'\nbutton/btnDeselectItem (\ntabindex=-1,\ndata-item-value='{item |key(_viewModelItemValueFieldName) }'\n) {\nOpalIcon/btnDeselectItemIcon (name=cross)\n}\n}\n}\n@IfThen (if=isNothingSelectedShown) {\nRtSlot/nothingSelectedSlot (for=nothingSelected) {\nspan/nothingSelected {\nspan/nothingSelectedMessage {\n'{constructor.i18n.nothingSelected}'\n}\n}\n}\n}\n}\ndiv/menuFooter {\ndiv/menuFooterLeftPart {\nRtSlot/menuFooterContentSlot (for=menuFooterContent)\n}\ndiv/menuFooterRightPart {\nOpalButton/btnClose {\n'Закрыть'\n}\n}\n}\n}");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })

/******/ });
});