(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-tag-select"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-tag-select"] = factory(root["rionite"], root["cellx"]);
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

	'use strict';

	__webpack_require__(68);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var getText = _require.getText;
	var Template = _require.Template;
	var Component = _require.Component;


	module.exports = Component.extend('opal-tag-select', {
		Static: {
			props: {
				type: String,
				dataprovider: { type: String, required: true, readonly: true },
				viewModel: { type: String, readonly: true },
				placeholder: getText.t('Не выбрано'),
				popoverTo: 'bottom',
				disabled: false
			},

			template: new Template(__webpack_require__(38)),

			assets: {
				':element': {
					'on-click': function onClick(evt) {
						var node = evt.target;

						if (node != this.element && node.nodeType == 1 && node.classList.contains(this._prepareSelector('&__btn-remove-tag').slice(1))) {
							this.viewModel.remove(this.viewModel.get(node.dataset.tagValue, 'value'));
						}
					}
				},

				select: {}
			}
		},

		initialize: function initialize() {
			var dataprovider = this.props.dataprovider;
			this[dataprovider] = (this.ownerComponent || window)[dataprovider];

			cellx.define(this, {
				viewModel: null,

				placeholderShown: function placeholderShown() {
					return !!this.props.placeholder && (!this.viewModel || !this.viewModel.length);
				}
			});
		},
		ready: function ready() {
			this.viewModel = this.assets.select.viewModel;
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-tag-select__font\"> <template is=\"rt-if-then\" if=\"viewModel?.length\"> <template is=\"rt-repeat\" for=\"tag of viewModel\"> <span class=\"opal-tag-select__tag\" data-value=\"{tag.value}\">{tag.text}<button class=\"opal-tag-select__btn-remove-tag\" data-tag-value=\"{tag.value}\"></button></span> </template> </template> </span> <template is=\"rt-if-then\" if=\"placeholderShown\"> <span class=\"opal-tag-select__placeholder\">{props.placeholder}</span> </template> {{block select }} <opal-select class=\"opal-tag-select__select\" view-model=\"{props.viewModel}\" multiple=\"\"> {{block select_button }} <opal-sign-button class=\"opal-tag-select__select-button opal-select__button\" sign=\"plus\" checkable=\"\"></opal-sign-button> {{/block}} {{block menu }} <opal-popover class=\"opal-select__menu\" to=\"{props.popoverTo}\" auto-closing=\"\"> <opal-filtered-list class=\"opal-select__filtered-list\"> <opal-loaded-list class=\"opal-select__loaded-list opal-filtered-list__loaded-list\" dataprovider=\"{props.dataprovider}\"> <opal-select-option text=\"{$item.text}\"></opal-select-option> </opal-loaded-list> </opal-filtered-list> </opal-popover> {{/block}} </opal-select> {{/block}}"

/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tag-select{display:inline-block}.opal-tag-select::after{display:table;clear:both;content:''}.opal-tag-select .opal-tag-select__font{font:16px/32px Verdana,Geneva,sans-serif;font-weight:400}.opal-tag-select .opal-tag-select__tag{position:relative;top:-1px;display:inline-block;margin:3px 32px 3px 0;padding:0 10px 0 16px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;transition:background .1s}.opal-tag-select .opal-tag-select__tag+.opal-tag-select__tag{margin-left:3px}.opal-tag-select .opal-tag-select__btn-remove-tag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer}.opal-tag-select .opal-tag-select__btn-remove-tag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.opal-tag-select .opal-tag-select__btn-remove-tag:hover{background:#5b7d9a}.opal-tag-select .opal-tag-select__btn-remove-tag:focus{outline:none}body:not(._no-focus-highlight) .opal-tag-select .opal-tag-select__btn-remove-tag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-tag-select .opal-tag-select__btn-remove-tag:active{background:#43484c}.opal-tag-select .opal-tag-select__placeholder{display:inline-block;line-height:36px}.opal-tag-select[type=action] .opal-tag-select__tag{background:#0083f5}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag{background:#0a67b8}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag:hover{background:#0083f5}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag:active{background:#0e4b81}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;