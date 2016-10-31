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

	__webpack_require__(76);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var getText = _require.getText;
	var ComponentTemplate = _require.ComponentTemplate;
	var Component = _require.Component;


	module.exports = Component.extend('opal-tag-select', {
		Static: {
			props: {
				type: String,
				// необязательный, так как может указываться на передаваемом opal-loaded-list
				dataprovider: { type: String, readonly: true },
				value: Object,
				viewModel: { type: String, readonly: true },
				placeholder: getText.t('Не выбрано'),
				allowInput: false,
				popoverTo: 'bottom',
				disabled: false
			},

			template: new ComponentTemplate(__webpack_require__(43)),

			events: {
				control: {
					click: function click(evt, control) {
						var select = this.$('select');
						var selectEl = select.element;

						for (var node = evt.target; node != selectEl; node = node.parentNode) {
							if (node == control) {
								select.toggle();
								break;
							}
						}
					}
				},

				select: {
					confirminput: function confirminput() {
						var select = this.$('select');

						if (select.props.allowInput) {
							select.close();
						}
					},


					// не соединять on-select и on-deselect в on-change,
					// тк on-change на opal-select[multiple] генерируется только при закрытии,
					// а здесь как раз закрыть и нужно
					select: function select() {
						this.$('select').close();
					},
					deselect: function deselect() {
						this.$('select').close();
					}
				}
			}
		},

		initialize: function initialize() {
			var dataProvider = this.props.dataprovider;
			var vm = this.props.viewModel;

			this._dataProviderParam = dataProvider && 'dataProvider';
			this._viewModelParam = vm && 'viewModel';

			var context = this.ownerComponent || window;

			cellx.define(this, {
				dataProvider: dataProvider && Function('return this.' + dataProvider + ';').call(context),
				viewModel: vm && Function('return this.' + vm + ';').call(context),

				placeholderShown: function placeholderShown() {
					return !!this.props.placeholder && (!this.viewModel || !this.viewModel.length);
				}
			});
		},
		ready: function ready() {
			this.viewModel = this.$('select').viewModel;
		},
		_onBtnRemoveTagClick: function _onBtnRemoveTagClick(evt, btn) {
			this.viewModel.remove(this.viewModel.get(btn.dataset.tagValue, 'value'));
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

/***/ 43:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-tag-select__tags\"> <template is=\"rt-if-then\" if=\"viewModel?.length\"> <template is=\"rt-repeat\" for=\"tag of viewModel\"> <span class=\"opal-tag-select__tag\" data-value=\"{tag.value}\" disabled=\"{tag.disabled}\">{tag.text}<button class=\"opal-tag-select__btn-remove-tag\" data-tag-value=\"{tag.value}\" rt-click=\"_onBtnRemoveTagClick\"></button></span> </template> </template> </span> <span class=\"opal-tag-select__control\"> <template is=\"rt-if-then\" if=\"placeholderShown\" rt-silent=\"\"> <span class=\"opal-tag-select__placeholder\">{props.placeholder}</span> </template> {{block select }} <opal-select class=\"opal-tag-select__select\" value=\"{props.value}\" view-model=\"{_viewModelParam}\" multiple=\"\" allow-input=\"{props.allowInput}\"> {{block select_button }} <opal-sign-button class=\"opal-tag-select__select-button opal-select__button\" sign=\"plus\" checkable=\"\"></opal-sign-button> {{/block}} {{block menu }} <opal-popover class=\"opal-select__menu\" to=\"{props.popoverTo}\" auto-closing=\"\"> <rt-content select=\".opal-tag-select__menu-content\"> <opal-filtered-list class=\"opal-tag-select__menu-content opal-select__filtered-list\"> <opal-loaded-list class=\"opal-select__loaded-list opal-filtered-list__loaded-list\" dataprovider=\"{_dataProviderParam}\"> <opal-select-option value=\"{$item.value}\" text=\"{$item.text}\"></opal-select-option> </opal-loaded-list> </opal-filtered-list> </rt-content> </opal-popover> {{/block}} </opal-select> {{/block}} </span>"

/***/ },

/***/ 76:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tag-select{display:inline-block;line-height:0}.opal-tag-select .opal-tag-select__tag{position:relative;top:-1px;display:inline-block;margin:2px 35px 2px 0;padding:0 10px 0 16px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400}.opal-tag-select .opal-tag-select__btn-remove-tag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;transition:background .1s}.opal-tag-select .opal-tag-select__btn-remove-tag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.opal-tag-select .opal-tag-select__btn-remove-tag:hover{background:#5b7d9a}.opal-tag-select .opal-tag-select__btn-remove-tag:focus{outline:none}body:not(._no-focus-highlight) .opal-tag-select .opal-tag-select__btn-remove-tag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-tag-select .opal-tag-select__btn-remove-tag:active{background:#43484c}.opal-tag-select .opal-tag-select__tag[disabled]{margin-right:3px;padding-right:16px;border-top-right-radius:16px;border-bottom-right-radius:16px}.opal-tag-select .opal-tag-select__tag[disabled] .opal-tag-select__btn-remove-tag{display:none}.opal-tag-select .opal-tag-select__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-tag-select[type=action] .opal-tag-select__tag{background:#0083f5}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag{background:#0a67b8}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag:hover{background:#0083f5}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag:active{background:#0e4b81}.opal-tag-select[type=danger] .opal-tag-select__tag{background:#fa0f3e}.opal-tag-select[type=danger] .opal-tag-select__btn-remove-tag{background:#c70f34}.opal-tag-select[type=danger] .opal-tag-select__btn-remove-tag:hover{background:#fa0f3e}.opal-tag-select[type=danger] .opal-tag-select__btn-remove-tag:active{background:#90142c}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;