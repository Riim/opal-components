(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-focus-highlight-controller"), require("@riim/opal-utils"), require("@riim/opal-icon"), require("@riim/opal-button"), require("@riim/opal-sign-button"), require("@riim/opal-text-input"), require("@riim/opal-editable-text"), require("@riim/opal-input-mask"), require("@riim/opal-group"), require("@riim/opal-checkbox"), require("@riim/opal-radio-group"), require("@riim/opal-switch"), require("@riim/opal-slider"), require("@riim/opal-switch-menu"), require("@riim/opal-tabs"), require("@riim/opal-dropdown"), require("@riim/opal-popover"), require("@riim/opal-modal"), require("@riim/opal-notification"), require("@riim/opal-input-validator"), require("@riim/opal-text-input-validator"), require("@riim/opal-calendar"), require("@riim/opal-date-input"), require("@riim/opal-loader"), require("@riim/opal-loaded-list"), require("@riim/opal-filtered-list"), require("@riim/opal-tree-list"), require("@riim/opal-select"), require("@riim/opal-multiselect"), require("@riim/opal-tag-select"), require("@riim/opal-tree-select"), require("@riim/opal-tree-tag-select"), require("@riim/opal-select-validator"), require("@riim/opal-autosuggest"), require("@riim/opal-multirow"), require("@riim/opal-router"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-focus-highlight-controller", "@riim/opal-utils", "@riim/opal-icon", "@riim/opal-button", "@riim/opal-sign-button", "@riim/opal-text-input", "@riim/opal-editable-text", "@riim/opal-input-mask", "@riim/opal-group", "@riim/opal-checkbox", "@riim/opal-radio-group", "@riim/opal-switch", "@riim/opal-slider", "@riim/opal-switch-menu", "@riim/opal-tabs", "@riim/opal-dropdown", "@riim/opal-popover", "@riim/opal-modal", "@riim/opal-notification", "@riim/opal-input-validator", "@riim/opal-text-input-validator", "@riim/opal-calendar", "@riim/opal-date-input", "@riim/opal-loader", "@riim/opal-loaded-list", "@riim/opal-filtered-list", "@riim/opal-tree-list", "@riim/opal-select", "@riim/opal-multiselect", "@riim/opal-tag-select", "@riim/opal-tree-select", "@riim/opal-tree-tag-select", "@riim/opal-select-validator", "@riim/opal-autosuggest", "@riim/opal-multirow", "@riim/opal-router"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-components"] = factory(require("@riim/opal-focus-highlight-controller"), require("@riim/opal-utils"), require("@riim/opal-icon"), require("@riim/opal-button"), require("@riim/opal-sign-button"), require("@riim/opal-text-input"), require("@riim/opal-editable-text"), require("@riim/opal-input-mask"), require("@riim/opal-group"), require("@riim/opal-checkbox"), require("@riim/opal-radio-group"), require("@riim/opal-switch"), require("@riim/opal-slider"), require("@riim/opal-switch-menu"), require("@riim/opal-tabs"), require("@riim/opal-dropdown"), require("@riim/opal-popover"), require("@riim/opal-modal"), require("@riim/opal-notification"), require("@riim/opal-input-validator"), require("@riim/opal-text-input-validator"), require("@riim/opal-calendar"), require("@riim/opal-date-input"), require("@riim/opal-loader"), require("@riim/opal-loaded-list"), require("@riim/opal-filtered-list"), require("@riim/opal-tree-list"), require("@riim/opal-select"), require("@riim/opal-multiselect"), require("@riim/opal-tag-select"), require("@riim/opal-tree-select"), require("@riim/opal-tree-tag-select"), require("@riim/opal-select-validator"), require("@riim/opal-autosuggest"), require("@riim/opal-multirow"), require("@riim/opal-router"));
	else
		root["@riim/opal-components"] = factory(root["@riim/opal-focus-highlight-controller"], root["@riim/opal-utils"], root["@riim/opal-icon"], root["@riim/opal-button"], root["@riim/opal-sign-button"], root["@riim/opal-text-input"], root["@riim/opal-editable-text"], root["@riim/opal-input-mask"], root["@riim/opal-group"], root["@riim/opal-checkbox"], root["@riim/opal-radio-group"], root["@riim/opal-switch"], root["@riim/opal-slider"], root["@riim/opal-switch-menu"], root["@riim/opal-tabs"], root["@riim/opal-dropdown"], root["@riim/opal-popover"], root["@riim/opal-modal"], root["@riim/opal-notification"], root["@riim/opal-input-validator"], root["@riim/opal-text-input-validator"], root["@riim/opal-calendar"], root["@riim/opal-date-input"], root["@riim/opal-loader"], root["@riim/opal-loaded-list"], root["@riim/opal-filtered-list"], root["@riim/opal-tree-list"], root["@riim/opal-select"], root["@riim/opal-multiselect"], root["@riim/opal-tag-select"], root["@riim/opal-tree-select"], root["@riim/opal-tree-tag-select"], root["@riim/opal-select-validator"], root["@riim/opal-autosuggest"], root["@riim/opal-multirow"], root["@riim/opal-router"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__25__, __WEBPACK_EXTERNAL_MODULE__26__, __WEBPACK_EXTERNAL_MODULE__27__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__33__, __WEBPACK_EXTERNAL_MODULE__34__, __WEBPACK_EXTERNAL_MODULE__35__, __WEBPACK_EXTERNAL_MODULE__36__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var Utils = __webpack_require__(2);
exports.Utils = Utils;
var opal_icon_1 = __webpack_require__(3);
exports.OpalIcon = opal_icon_1.OpalIcon;
var opal_button_1 = __webpack_require__(4);
exports.OpalButton = opal_button_1.OpalButton;
var opal_sign_button_1 = __webpack_require__(5);
exports.OpalSignButton = opal_sign_button_1.OpalSignButton;
var opal_text_input_1 = __webpack_require__(6);
exports.OpalTextInput = opal_text_input_1.OpalTextInput;
var opal_editable_text_1 = __webpack_require__(7);
exports.OpalEditableText = opal_editable_text_1.OpalEditableText;
var opal_input_mask_1 = __webpack_require__(8);
exports.OpalInputMaskDefinition = opal_input_mask_1.OpalInputMaskDefinition;
exports.OpalInputMask = opal_input_mask_1.OpalInputMask;
var opal_group_1 = __webpack_require__(9);
exports.OpalGroup = opal_group_1.OpalGroup;
var opal_checkbox_1 = __webpack_require__(10);
exports.OpalCheckbox = opal_checkbox_1.OpalCheckbox;
var opal_radio_group_1 = __webpack_require__(11);
exports.OpalRadioButton = opal_radio_group_1.OpalRadioButton;
exports.OpalRadioGroup = opal_radio_group_1.OpalRadioGroup;
var opal_switch_1 = __webpack_require__(12);
exports.OpalSwitch = opal_switch_1.OpalSwitch;
var opal_slider_1 = __webpack_require__(13);
exports.OpalSlider = opal_slider_1.OpalSlider;
var opal_switch_menu_1 = __webpack_require__(14);
exports.OpalSwitchMenu = opal_switch_menu_1.OpalSwitchMenu;
var opal_tabs_1 = __webpack_require__(15);
exports.OpalTab = opal_tabs_1.OpalTab;
exports.OpalTabList = opal_tabs_1.OpalTabList;
exports.OpalTabPanel = opal_tabs_1.OpalTabPanel;
exports.OpalTabs = opal_tabs_1.OpalTabs;
var opal_dropdown_1 = __webpack_require__(16);
exports.OpalDropdown = opal_dropdown_1.OpalDropdown;
var opal_popover_1 = __webpack_require__(17);
exports.OpalPopover = opal_popover_1.OpalPopover;
var opal_modal_1 = __webpack_require__(18);
exports.OpalModal = opal_modal_1.OpalModal;
var opal_notification_1 = __webpack_require__(19);
exports.OpalNotification = opal_notification_1.OpalNotification;
var opal_input_validator_1 = __webpack_require__(20);
exports.OpalInputValidatorRule = opal_input_validator_1.OpalInputValidatorRule;
exports.OpalInputValidator = opal_input_validator_1.OpalInputValidator;
var opal_text_input_validator_1 = __webpack_require__(21);
exports.OpalTextInputValidatorRule = opal_text_input_validator_1.OpalTextInputValidatorRule;
exports.OpalTextInputValidator = opal_text_input_validator_1.OpalTextInputValidator;
var opal_calendar_1 = __webpack_require__(22);
exports.OpalCalendar = opal_calendar_1.OpalCalendar;
var opal_date_input_1 = __webpack_require__(23);
exports.OpalDateInput = opal_date_input_1.OpalDateInput;
var opal_loader_1 = __webpack_require__(24);
exports.OpalLoader = opal_loader_1.OpalLoader;
var opal_loaded_list_1 = __webpack_require__(25);
exports.OpalLoadedList = opal_loaded_list_1.OpalLoadedList;
var opal_filtered_list_1 = __webpack_require__(26);
exports.OpalFilteredList = opal_filtered_list_1.OpalFilteredList;
var opal_tree_list_1 = __webpack_require__(27);
exports.ObservableTreeList = opal_tree_list_1.ObservableTreeList;
exports.OpalTreeListItem = opal_tree_list_1.OpalTreeListItem;
exports.OpalTreeList = opal_tree_list_1.OpalTreeList;
var opal_select_1 = __webpack_require__(28);
exports.OpalSelectOption = opal_select_1.OpalSelectOption;
exports.OpalSelect = opal_select_1.OpalSelect;
var opal_multiselect_1 = __webpack_require__(29);
exports.OpalMultiselect = opal_multiselect_1.OpalMultiselect;
var opal_tag_select_1 = __webpack_require__(30);
exports.OpalTagSelect = opal_tag_select_1.OpalTagSelect;
var opal_tree_select_1 = __webpack_require__(31);
exports.OpalTreeSelect = opal_tree_select_1.OpalTreeSelect;
var opal_tree_tag_select_1 = __webpack_require__(32);
exports.OpalTreeTagSelect = opal_tree_tag_select_1.OpalTreeTagSelect;
var opal_select_validator_1 = __webpack_require__(33);
exports.OpalSelectValidatorRule = opal_select_validator_1.OpalSelectValidatorRule;
exports.OpalSelectValidator = opal_select_validator_1.OpalSelectValidator;
var opal_autosuggest_1 = __webpack_require__(34);
exports.OpalAutosuggest = opal_autosuggest_1.OpalAutosuggest;
var opal_multirow_1 = __webpack_require__(35);
exports.OpalMultirowRow = opal_multirow_1.OpalMultirowRow;
exports.OpalMultirow = opal_multirow_1.OpalMultirow;
var opal_router_1 = __webpack_require__(36);
exports.OpalRoute = opal_router_1.OpalRoute;
exports.OpalRouter = opal_router_1.OpalRouter;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ })
/******/ ]);
});