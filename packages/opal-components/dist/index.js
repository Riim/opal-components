(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-focus-highlight-controller"), require("@riim/opal-utils"), require("@riim/opal-icon"), require("@riim/opal-button"), require("@riim/opal-sign-button"), require("@riim/opal-text-input"), require("@riim/opal-editable-text"), require("@riim/opal-input-mask"), require("@riim/opal-group"), require("@riim/opal-checkbox"), require("@riim/opal-radio-group"), require("@riim/opal-switch"), require("@riim/opal-slider"), require("@riim/opal-switch-menu"), require("@riim/opal-tabs"), require("@riim/opal-dropdown"), require("@riim/opal-popover"), require("@riim/opal-modal"), require("@riim/opal-notification"), require("@riim/opal-input-validator"), require("@riim/opal-text-input-validator"), require("@riim/opal-calendar"), require("@riim/opal-date-input"), require("@riim/opal-loader"), require("@riim/opal-loaded-list"), require("@riim/opal-filtered-list"), require("@riim/opal-tree-list"), require("@riim/opal-select"), require("@riim/opal-multiselect"), require("@riim/opal-tag-select"), require("@riim/opal-tree-select"), require("@riim/opal-tree-tag-select"), require("@riim/opal-select-validator"), require("@riim/opal-autosuggest"), require("@riim/opal-multirow"), require("reflect-metadata"), require("@riim/escape-regexp"), require("@riim/gettext"), require("cellx"), require("rionite"), require("@riim/next-uid"), require("@riim/opal-router"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-focus-highlight-controller", "@riim/opal-utils", "@riim/opal-icon", "@riim/opal-button", "@riim/opal-sign-button", "@riim/opal-text-input", "@riim/opal-editable-text", "@riim/opal-input-mask", "@riim/opal-group", "@riim/opal-checkbox", "@riim/opal-radio-group", "@riim/opal-switch", "@riim/opal-slider", "@riim/opal-switch-menu", "@riim/opal-tabs", "@riim/opal-dropdown", "@riim/opal-popover", "@riim/opal-modal", "@riim/opal-notification", "@riim/opal-input-validator", "@riim/opal-text-input-validator", "@riim/opal-calendar", "@riim/opal-date-input", "@riim/opal-loader", "@riim/opal-loaded-list", "@riim/opal-filtered-list", "@riim/opal-tree-list", "@riim/opal-select", "@riim/opal-multiselect", "@riim/opal-tag-select", "@riim/opal-tree-select", "@riim/opal-tree-tag-select", "@riim/opal-select-validator", "@riim/opal-autosuggest", "@riim/opal-multirow", "reflect-metadata", "@riim/escape-regexp", "@riim/gettext", "cellx", "rionite", "@riim/next-uid", "@riim/opal-router"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-components"] = factory(require("@riim/opal-focus-highlight-controller"), require("@riim/opal-utils"), require("@riim/opal-icon"), require("@riim/opal-button"), require("@riim/opal-sign-button"), require("@riim/opal-text-input"), require("@riim/opal-editable-text"), require("@riim/opal-input-mask"), require("@riim/opal-group"), require("@riim/opal-checkbox"), require("@riim/opal-radio-group"), require("@riim/opal-switch"), require("@riim/opal-slider"), require("@riim/opal-switch-menu"), require("@riim/opal-tabs"), require("@riim/opal-dropdown"), require("@riim/opal-popover"), require("@riim/opal-modal"), require("@riim/opal-notification"), require("@riim/opal-input-validator"), require("@riim/opal-text-input-validator"), require("@riim/opal-calendar"), require("@riim/opal-date-input"), require("@riim/opal-loader"), require("@riim/opal-loaded-list"), require("@riim/opal-filtered-list"), require("@riim/opal-tree-list"), require("@riim/opal-select"), require("@riim/opal-multiselect"), require("@riim/opal-tag-select"), require("@riim/opal-tree-select"), require("@riim/opal-tree-tag-select"), require("@riim/opal-select-validator"), require("@riim/opal-autosuggest"), require("@riim/opal-multirow"), require("reflect-metadata"), require("@riim/escape-regexp"), require("@riim/gettext"), require("cellx"), require("rionite"), require("@riim/next-uid"), require("@riim/opal-router"));
	else
		root["@riim/opal-components"] = factory(root["@riim/opal-focus-highlight-controller"], root["@riim/opal-utils"], root["@riim/opal-icon"], root["@riim/opal-button"], root["@riim/opal-sign-button"], root["@riim/opal-text-input"], root["@riim/opal-editable-text"], root["@riim/opal-input-mask"], root["@riim/opal-group"], root["@riim/opal-checkbox"], root["@riim/opal-radio-group"], root["@riim/opal-switch"], root["@riim/opal-slider"], root["@riim/opal-switch-menu"], root["@riim/opal-tabs"], root["@riim/opal-dropdown"], root["@riim/opal-popover"], root["@riim/opal-modal"], root["@riim/opal-notification"], root["@riim/opal-input-validator"], root["@riim/opal-text-input-validator"], root["@riim/opal-calendar"], root["@riim/opal-date-input"], root["@riim/opal-loader"], root["@riim/opal-loaded-list"], root["@riim/opal-filtered-list"], root["@riim/opal-tree-list"], root["@riim/opal-select"], root["@riim/opal-multiselect"], root["@riim/opal-tag-select"], root["@riim/opal-tree-select"], root["@riim/opal-tree-tag-select"], root["@riim/opal-select-validator"], root["@riim/opal-autosuggest"], root["@riim/opal-multirow"], root["reflect-metadata"], root["@riim/escape-regexp"], root["@riim/gettext"], root["cellx"], root["rionite"], root["@riim/next-uid"], root["@riim/opal-router"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__25__, __WEBPACK_EXTERNAL_MODULE__26__, __WEBPACK_EXTERNAL_MODULE__27__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__33__, __WEBPACK_EXTERNAL_MODULE__34__, __WEBPACK_EXTERNAL_MODULE__35__, __WEBPACK_EXTERNAL_MODULE__37__, __WEBPACK_EXTERNAL_MODULE__38__, __WEBPACK_EXTERNAL_MODULE__39__, __WEBPACK_EXTERNAL_MODULE__40__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__43__) {
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
const Utils = __webpack_require__(2);
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
var opal_file_upload_1 = __webpack_require__(36);
exports.OpalFileUpload = opal_file_upload_1.OpalFileUpload;
exports.ReadableFile = opal_file_upload_1.ReadableFile;
var opal_router_1 = __webpack_require__(43);
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
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(37), __webpack_require__(38), __webpack_require__(39), __webpack_require__(40), __webpack_require__(41), __webpack_require__(42));
	else {}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__9__) {
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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
const escape_regexp_1 = __webpack_require__(3);
const gettext_1 = __webpack_require__(4);
const cellx_1 = __webpack_require__(5);
const rionite_1 = __webpack_require__(6);
__webpack_require__(7);
const ReadableFile_1 = __webpack_require__(8);
exports.ReadableFile = ReadableFile_1.ReadableFile;
const template_rnt_1 = __webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
let OpalFileUpload = class OpalFileUpload extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this._size = 0;
    }
    initialize() {
        this.files = new cellx_1.ObservableList();
        if (this.allowType) {
            this._reFileType = RegExp(`^(?:${this.allowType
                .split(',')
                .map(type => escape_regexp_1.escapeRegExp(type.trim()))
                .join('|')
                .split('\\*')
                .join('.*')})$`);
        }
        cellx_1.define(this, {
            errorMessage: null,
            error: false
        });
    }
    elementAttached() {
        this.listenTo(this.$('filesInput'), 'change', this._onFilesInputChange);
        this.listenTo(this.$('dropZone'), {
            dragenter: this._onDropZoneDragEnter,
            dragover: this._onDropZoneDragOver,
            dragleave: this._onDropZoneDragLeave,
            drop: this._onDropZoneDrop,
            click: this._onDropZoneClick
        });
    }
    _onFilesInputChange(evt) {
        this._addFiles(evt.target.files);
        evt.target.value = '';
    }
    _onDropZoneDragEnter(evt) {
        this.error = false;
        evt.target.setAttribute('over', '');
    }
    _onDropZoneDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }
    _onDropZoneDragLeave(evt) {
        evt.target.removeAttribute('over');
    }
    _onDropZoneDrop(evt) {
        evt.preventDefault();
        evt.target.removeAttribute('over');
        this._addFiles(evt.dataTransfer.files);
    }
    _onDropZoneClick() {
        if (this.error) {
            this.error = false;
        }
        else {
            this.$('filesInput').click();
        }
    }
    _addFiles(files) {
        let sizeLimit = this.sizeLimit;
        let totalSizeLimit = this.totalSizeLimit;
        let reFileType = this._reFileType;
        let size = this._size;
        let errorMessage;
        for (let i = 0, l = files.length; i < l; i++) {
            let file = files[i];
            size += file.size;
            if (reFileType && !reFileType.test(file.type)) {
                errorMessage = gettext_1.t('Файл не подходит по типу');
            }
            else if (sizeLimit && file.size > sizeLimit) {
                errorMessage = gettext_1.t('Файл слишком большой');
            }
            else if (totalSizeLimit && size > totalSizeLimit) {
                errorMessage = gettext_1.t('Превышен лимит суммарного размера файлов');
            }
            if (errorMessage) {
                this.errorMessage = errorMessage;
                this.error = true;
                return false;
            }
        }
        this._size = size;
        for (let i = 0, l = files.length; i < l; i++) {
            let readableFile = new ReadableFile_1.ReadableFile(files[i]);
            readableFile.read();
            this.files.add(readableFile);
        }
        return true;
    }
};
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", String)
], OpalFileUpload.prototype, "allowType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Number)
], OpalFileUpload.prototype, "sizeLimit", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Number)
], OpalFileUpload.prototype, "totalSizeLimit", void 0);
OpalFileUpload = __decorate([
    rionite_1.Component({
        elementIs: 'OpalFileUpload',
        template: template_rnt_1.default,
        domEvents: {
            btnRemoveFile: {
                click(_evt, context) {
                    let file = context.file;
                    this._size -= file.size;
                    this.files.remove(file);
                }
            }
        }
    })
], OpalFileUpload);
exports.OpalFileUpload = OpalFileUpload;


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

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalFileUpload{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;min-width:400px;border:1px solid #ccc;color:#4d4d4d;font-size:1rem;line-height:1.5}.OpalFileUpload .OpalFileUpload__fileList{margin:0;padding:0;list-style:none}.OpalFileUpload .OpalFileUpload__file{position:relative;margin-bottom:10px;padding:12px 52px 12px 20px;border-radius:3px;background:#f2f2f2}.OpalFileUpload .OpalFileUpload__filePreviewWrapper{position:relative;display:inline-block;margin-right:10px;width:48px;height:48px;vertical-align:middle}.OpalFileUpload .OpalFileUpload__filePreview,.OpalFileUpload .OpalFileUpload__fileIcon,.OpalFileUpload .OpalFileUpload__fileLoadingIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto}.OpalFileUpload .OpalFileUpload__filePreview{max-width:48px;max-height:48px;border:0;border-radius:3px}.OpalFileUpload .OpalFileUpload__fileIcon{width:48px;height:48px;fill:currentColor}.OpalFileUpload .OpalFileUpload__fileLoadingIcon{width:20px;height:20px;-webkit-animation:OpalFileUpload__fileLoadingIconAnimation 1.2s infinite linear;animation:OpalFileUpload__fileLoadingIconAnimation 1.2s infinite linear;fill:currentColor}.OpalFileUpload .OpalFileUpload__fileText{vertical-align:middle;font-weight:700}.OpalFileUpload .OpalFileUpload__btnRemoveFile{position:absolute;top:0;right:10px;bottom:0;display:block;margin:auto;padding:10px;width:42px;height:42px;border:0;background:0 0;color:#999;cursor:pointer;-webkit-transition:color .1s;-o-transition:color .1s;transition:color .1s;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalFileUpload .OpalFileUpload__btnRemoveFile:hover{color:#4d4d4d}.OpalFileUpload .OpalFileUpload__btnRemoveFile:active{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.OpalFileUpload .OpalFileUpload__btnRemoveFileIcon{display:block;width:22px;height:22px;fill:currentColor}.OpalFileUpload .OpalFileUpload__dropZone{position:relative;padding:25px;border:2px dashed #999;border-radius:5px;background:#f2f2f2;color:gray;text-align:center;cursor:pointer}.OpalFileUpload .OpalFileUpload__dropZone[over]{border-color:#168cf3}.OpalFileUpload .OpalFileUpload__dropZone[over] .OpalFileUpload__drop-zone-text{pointer-events:none}.OpalFileUpload .OpalFileUpload__dropZone[error] .OpalFileUpload__dropZoneErrorMessageWrapper{display:block}.OpalFileUpload .OpalFileUpload__dropZoneErrorMessageWrapper{position:absolute;top:0;right:0;bottom:0;left:0;display:none;border-radius:inherit;background:inherit;white-space:nowrap;font-size:0}.OpalFileUpload .OpalFileUpload__dropZoneErrorMessageWrapper::after{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalFileUpload .OpalFileUpload__dropZoneErrorMessage{color:red;vertical-align:middle;font-size:1rem}.OpalFileUpload .OpalFileUpload__btnSelectFiles{display:inline;padding:0;border:0;background:0 0;color:#168cf3;font:inherit;cursor:inherit}.OpalFileUpload .OpalFileUpload__filesInput{display:none}@-webkit-keyframes OpalFileUpload__fileLoadingIconAnimation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes OpalFileUpload__fileLoadingIconAnimation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const next_uid_1 = __webpack_require__(9);
const cellx_1 = __webpack_require__(5);
const imageTypePrefix = 'image/';
class ReadableFile extends cellx_1.EventEmitter {
    constructor(file) {
        super();
        this.file = file;
        this.id = next_uid_1.nextUID();
        this.type = file.type;
        this.isImage = file.type.slice(0, imageTypePrefix.length) == imageTypePrefix;
        this.name = file.name;
        this.size = file.size;
        cellx_1.define(this, {
            currentlyReading: false,
            readed: false
        });
    }
    read() {
        let reader = (this.reader = new FileReader());
        reader.addEventListener('load', this._onReaderLoad.bind(this));
        this.currentlyReading = true;
        reader.readAsBinaryString(this.file);
    }
    _onReaderLoad(evt) {
        let binaryString = (this.binaryString = evt.target.result);
        this.dataURI = `data:${this.type};base64,${btoa(binaryString)}`;
        this.currentlyReading = false;
        this.readed = true;
    }
}
exports.ReadableFile = ReadableFile;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul:fileList {\n@Repeat (for=file in files, trackBy=id) {\nli:file {\ndiv:filePreviewWrapper {\n@IfThen (if=file.readed) {\nimg:filePreview (@if=file.isImage, src={file.dataURI})\nsvg:fileIcon (@unless=file.isImage, viewBox=0 0 32 32) {\nuse (xlink:href=#OpalFileUpload__iconFile)\n}\n}\nsvg:fileLoadingIcon (@unless=file.readed, viewBox=0 0 32 32) {\nuse (xlink:href=#OpalFileUpload__iconSpinner)\n}\n}\nspan:fileText {\n'{file.name}'\n}\nbutton:btnRemoveFile (type=button) {\nsvg:btnRemoveFileIcon (viewBox=0 0 32 32) {\nuse (xlink:href=#OpalFileUpload__iconTrash)\n}\n}\n}\n}\n}\ndiv:dropZone (error={error}) {\ndiv:dropZoneErrorMessageWrapper {\nspan:dropZoneErrorMessage {\n'{errorMessage}'\n}\n}\nspan:dropZoneText {\n'{\"Перетащите файлы в эту область или\" |t }'\nbr\nbutton:btnSelectFiles (type=button) {\n'{\"нажмите для выбора в проводнике\" |t }'\n}\n}\n}\ninput:filesInput (type=file, multiple)");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" id=\"OpalFileUpload__iconFile\"><path d=\"M28.681 7.159c-.694-.947-1.662-2.053-2.724-3.116s-2.169-2.03-3.116-2.724C21.229.137 20.448 0 20 0H4.5A2.503 2.503 0 002 2.5v27C2 30.878 3.122 32 4.5 32h23c1.378 0 2.5-1.122 2.5-2.5V10c0-.448-.137-1.23-1.319-2.841zm-4.138-1.702A27.334 27.334 0 0126.811 8H22V3.189a27.334 27.334 0 012.543 2.268zM28 29.5c0 .271-.229.5-.5.5h-23a.507.507 0 01-.5-.5v-27c0-.271.229-.5.5-.5H20v7a1 1 0 001 1h7v19.5z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" id=\"OpalFileUpload__iconSpinner\"><path d=\"M16 32c-4.274 0-8.292-1.664-11.314-4.686S0 20.274 0 16c0-3.026.849-5.973 2.456-8.522a16.061 16.061 0 016.386-5.791l1.344 2.682a13.044 13.044 0 00-5.192 4.708A12.953 12.953 0 003 15.999c0 7.168 5.832 13 13 13s13-5.832 13-13c0-2.459-.69-4.853-1.994-6.922a13.051 13.051 0 00-5.192-4.708l1.344-2.682a16.047 16.047 0 016.386 5.791A15.953 15.953 0 0132 16c0 4.274-1.664 8.292-4.686 11.314S20.274 32 16 32z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" id=\"OpalFileUpload__iconTrash\"><path d=\"M4 10v20c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V10H4zm6 18H8V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zm4 0h-2V14h2v14zM26.5 4H20V1.5c0-.825-.675-1.5-1.5-1.5h-7c-.825 0-1.5.675-1.5 1.5V4H3.5C2.675 4 2 4.675 2 5.5V8h26V5.5c0-.825-.675-1.5-1.5-1.5zM18 4h-6V2.025h6V4z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ })
/******/ ]);
});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

/***/ })
/******/ ]);
});