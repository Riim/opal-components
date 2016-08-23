(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx", "cellx-indexed-collections"], factory);
	else if(typeof exports === 'object')
		exports["opal-select"] = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"));
	else
		root["opal-select"] = factory(root["rionite"], root["cellx"], root["cellx-indexed-collections"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(59);
	__webpack_require__(73);

	var _require = __webpack_require__(2);

	var nextTick = _require.utils.nextTick;
	var cellx = _require.cellx;

	var _require2 = __webpack_require__(3);

	var IndexedList = _require2.IndexedList;

	var _require3 = __webpack_require__(1);

	var Component = _require3.Component;
	var template = _require3.template;
	var RtRepeat = _require3.components.RtRepeat;

	var OpalSelectOption = __webpack_require__(14);

	var map = Array.prototype.map;

	module.exports = Component.extend('opal-select', {
		Static: {
			OpalSelectOption: OpalSelectOption,

			props: {
				type: String,
				size: 'm',
				value: Object,
				viewModel: String,
				text: String,
				placeholder: 'Не выбрано',
				multiple: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: template(__webpack_require__(32)),

			assets: {
				button: {
					'on-focusin': function onFocusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					'on-focusout': function onFocusout() {
						this.props.focused = false;
						this.emit('focusout');
					},
					'on-click': function onClick(evt) {
						this[evt.target.checked ? 'open' : 'close']();
					}
				},

				menu: {
					'on-close': function onClose() {
						this.close();
					},
					'on-change': function onChange(evt) {
						if (!(evt.target instanceof RtRepeat)) {
							return;
						}

						this._options.pull();
						this._updateOptions();

						return false;
					},
					'on-select': function onSelect(_ref) {
						var selectedOption = _ref.target;

						if (!(selectedOption instanceof OpalSelectOption)) {
							return;
						}

						var vm = this.viewModel;
						var item = {
							value: selectedOption.value,
							text: selectedOption.text
						};

						if (this.props.multiple) {
							vm.add(item);
						} else {
							if (vm.length) {
								vm.set(0, item);
							} else {
								vm.add(item);
							}

							this.close();
							this.focus();
						}
					},
					'on-deselect': function onDeselect(_ref2) {
						var deselectedOption = _ref2.target;

						if (!(deselectedOption instanceof OpalSelectOption)) {
							return;
						}

						if (this.props.multiple) {
							this.viewModel.remove(this.viewModel.get(deselectedOption.value, 'value'));
						} else {
							deselectedOption.select();

							this.close();
							this.focus();
						}
					}
				},

				filteredList: {},
				loadedList: {}
			}
		},

		_opened: false,
		_focused: false,

		initialize: function initialize() {
			var vm = this.props.viewModel;

			if (vm) {
				vm = (this.ownerComponent || window)[vm];

				if (!vm) {
					throw new TypeError('viewModel is required');
				}
			} else {
				vm = new IndexedList(null, { indexes: ['value'] });
			}

			cellx.define(this, {
				viewModel: vm,

				options: function options() {
					return this.optionElements ? map.call(this.optionElements, function (option) {
						return option.$c;
					}) : [];
				},
				text: function text() {
					return this.viewModel.map(function (item) {
						return item.text;
					}).join(', ') || this.props.placeholder;
				}
			});
		},
		ready: function ready() {
			var _this = this;

			this.optionElements = this.element.getElementsByClassName('opal-select-option');

			var props = this.props;

			if (props.viewModel) {
				this._updateOptions();
			} else {
				(function () {
					var value = props.value;
					var selectedOptions = void 0;

					if (value) {
						if (!Array.isArray(value)) {
							throw new TypeError('value must be an array');
						}

						if (value.length) {
							if (props.multiple) {
								selectedOptions = _this.options.filter(function (option) {
									return value.indexOf(option.value) != -1;
								});
							} else {
								value = value[0];
								var selectedOption = _this.options.find(function (option) {
									return option.value == value;
								});
								selectedOptions = selectedOption ? [selectedOption] : [];
							}
						} else {
							selectedOptions = [];
						}
					} else {
						if (props.multiple) {
							selectedOptions = _this.options.filter(function (option) {
								return option.selected;
							});
						} else {
							var _selectedOption = _this.options.find(function (option) {
								return option.selected;
							});
							selectedOptions = _selectedOption ? [_selectedOption] : [];
						}
					}

					if (selectedOptions.length) {
						_this.viewModel.addRange(selectedOptions.map(function (option) {
							return {
								value: option.value,
								text: option.text
							};
						}));
					}

					if (value) {
						_this._updateOptions();
					}
				})();
			}
		},
		elementAttached: function elementAttached() {
			this.listenTo(this.props, 'change:value', this._onPropsValueChange);
			this.listenTo(this.viewModel, 'change', this._onViewModelChange);
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'focused') {
				this[value ? 'focus' : 'blur']();
			}
		},
		_onPropsValueChange: function _onPropsValueChange(_ref3) {
			var _this2 = this;

			var value = _ref3.value[1];

			var vm = this.viewModel;

			if (value) {
				if (!Array.isArray(value)) {
					throw new TypeError('value must be an array');
				}

				if (value.length) {
					if (this.props.multiple) {
						this.options.forEach(function (option) {
							var optionValue = option.value;

							if (value.indexOf(optionValue) != -1) {
								if (!vm.contains(optionValue, 'value')) {
									vm.add({
										value: optionValue,
										text: option.text
									});
								}
							} else {
								var item = vm.get(optionValue, 'value');

								if (item) {
									vm.remove(item);
								}
							}
						});
					} else {
						(function () {
							var vmLength = vm.length;

							value = value[0];

							if (!vmLength || value != vm.get(0).value) {
								if (!_this2.options.some(function (option) {
									var optionValue = option.value;

									if (optionValue == value) {
										var item = {
											value: optionValue,
											text: option.text
										};

										if (vmLength) {
											vm.set(0, item);
										} else {
											vm.add(item);
										}

										return true;
									}
								}) && vmLength) {
									vm.clear();
								}
							}
						})();
					}
				} else {
					vm.clear();
				}
			} else {
				vm.clear();
			}
		},
		_onViewModelChange: function _onViewModelChange(evt) {
			this._updateOptions();

			this.emit({
				type: 'change',
				value: evt.value
			});
		},
		_updateOptions: function _updateOptions() {
			var vm = this.viewModel;

			this.options.forEach(function (option) {
				option.selected = vm.contains(option.value, 'value');
			});
		},


		/**
	  * @typesign () -> boolean;
	  */
		open: function open() {
			var _this3 = this;

			if (!this._opened) {
				var _ret3 = function () {
					_this3._opened = true;

					var assets = _this3.assets;

					assets.button.check();
					assets.menu.open();

					if (assets.loadedList) {
						nextTick(function () {
							assets.loadedList.checkLoading();
						});
					}

					if (assets.filteredList) {
						assets.filteredList.focus();
					} else {
						_this3._focusOptions();
					}

					_this3._documentFocusInListening = _this3.listenTo(document, 'focusin', _this3._onDocumentFocusIn);

					if (!_this3._focused) {
						_this3._documentKeyDownListening = _this3.listenTo(document, 'keydown', _this3._onDocumentKeyDown);
					}

					return {
						v: true
					};
				}();

				if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		close: function close() {
			if (this._opened) {
				this._opened = false;

				this.assets.button.uncheck();
				this.assets.menu.close();

				this._documentFocusInListening.stop();

				if (!this._focused) {
					this._documentKeyDownListening.stop();
				}

				return true;
			}

			return false;
		},


		/**
	  * @typesign (value?: boolean) -> boolean;
	  */
		toggle: function toggle(value) {
			if (value !== void 0) {
				return value ? this.open() : !this.close();
			}
			return this.open() || !this.close();
		},
		_onDocumentFocusIn: function _onDocumentFocusIn(evt) {
			var body = document.body;
			var el = this.element;

			for (var node = evt.target;;) {
				if (node == body) {
					this.close();
					break;
				}

				node = node.parentNode;

				if (!node || node == el) {
					break;
				}
			}
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelect;
	  */
		focus: function focus() {
			if (!this._focused) {
				this._focused = true;

				this.assets.button.focus();

				if (!this._opened) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				}
			}

			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelect;
	  */
		blur: function blur() {
			if (this._focused) {
				this._focused = false;

				this.assets.button.blur();

				if (!this._opened) {
					this._documentKeyDownListening.stop();
				}
			}

			return this;
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			switch (evt.which) {
				case 32 /* Space */:
					{
						evt.preventDefault();

						if (this._opened) {
							if (this._focused) {
								this.close();
							}
						} else {
							this.open();
						}

						break;
					}
				case 38 /* Up */:
					{
						evt.preventDefault();

						if (this._opened) {
							if (document.activeElement == document.body) {
								if (this._focusOptions()) {
									document.body.classList.remove('_no-focus-highlight');
								}
							} else {
								var options = this.options;

								for (var i = 1, l = options.length; i < l; i++) {
									if (options[i].props.focused) {
										do {
											var option = options[--i];

											if (!option.props.disabled) {
												document.body.classList.remove('_no-focus-highlight');
												option.focus();
												break;
											}
										} while (i);

										break;
									}
								}
							}
						} else {
							this.open();
						}

						break;
					}
				case 40 /* Down */:
					{
						evt.preventDefault();

						if (this._opened) {
							if (document.activeElement == document.body) {
								if (this._focusOptions()) {
									document.body.classList.remove('_no-focus-highlight');
								}
							} else {
								var _options = this.options;

								for (var _i = 0, _l = _options.length - 1; _i < _l; _i++) {
									if (_options[_i].props.focused) {
										do {
											var _option = _options[++_i];

											if (!_option.props.disabled) {
												document.body.classList.remove('_no-focus-highlight');
												_option.focus();
												break;
											}
										} while (_i < _l);

										break;
									}
								}
							}
						} else {
							this.open();
						}

						break;
					}
				case 27 /* Esc */:
					{
						evt.preventDefault();
						this.close();
						this.focus();
						break;
					}
			}
		},
		_focusOptions: function _focusOptions() {
			var options = this.options;
			var optionForFocus = void 0;

			for (var i = 0, l = options.length; i < l; i++) {
				var option = options[i];

				if (!option.props.disabled) {
					if (option.selected) {
						optionForFocus = option;
						break;
					}

					if (!optionForFocus) {
						optionForFocus = option;
					}
				}
			}

			if (optionForFocus) {
				optionForFocus.focus();
				return true;
			}

			return false;
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

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(60);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var Component = _require.Component;


	module.exports = Component.extend('opal-select-option', {
		Static: {
			props: {
				value: String,
				text: String,
				selected: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(33),

			assets: {
				control: {
					'on-focusin': function onFocusin() {
						this.props.focused = true;
					},
					'on-focusout': function onFocusout() {
						this.props.focused = false;
					},
					'on-click': function onClick() {
						this._click();
					}
				}
			}
		},

		_focused: false,

		initialize: function initialize() {
			var text = this.props.text;

			if (text === void 0) {
				throw new TypeError('Property "text" is required');
			}

			cellx.define(this, {
				_tabIndex: function _tabIndex() {
					return this.props.disabled ? -1 : this.props.tabIndex;
				}
			});
		},
		ready: function ready() {
			var props = this.props;

			if (props.value === void 0) {
				props.value = props.text;
			}
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'focused') {
				this[value ? 'focus' : 'blur']();
			}
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
					evt.preventDefault();

					if (!this.props.disabled) {
						this._click();
					}
				}
		},
		_click: function _click() {
			this.emit(this.toggle() ? 'select' : 'deselect');
		},


		/**
	  * @type {string}
	  */
		get value() {
			var props = this.props;
			return props.value === void 0 ? props.text : props.value;
		},
		set value(value) {
			this.props.value = value;
		},

		/**
	  * @type {string}
	  */
		get text() {
			return this.props.text.trim() || ' ';
		},
		set text(text) {
			this.props.text = text;
		},

		/**
	  * @type {boolean}
	  */
		get selected() {
			return this.props.selected;
		},
		set selected(selected) {
			this.props.selected = selected;
		},

		/**
	  * @typesign () -> boolean;
	  */
		select: function select() {
			if (!this.props.selected) {
				this.props.selected = true;
				return true;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		deselect: function deselect() {
			if (this.props.selected) {
				this.props.selected = false;
				return true;
			}

			return false;
		},


		/**
	  * @typesign (value?: boolean) -> boolean;
	  */
		toggle: function toggle(value) {
			return this.props.selected = value === void 0 ? !this.props.selected : value;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelectOption;
	  */
		focus: function focus() {
			if (!this._focused) {
				this._focused = true;

				this.assets.control.focus();
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}

			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelectOption;
	  */
		blur: function blur() {
			if (this._focused) {
				this._focused = false;

				this.assets.control.blur();
				this._documentKeyDownListening.stop();
			}

			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelectOption;
	  */
		enable: function enable() {
			this.props.disabled = false;
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelectOption;
	  */
		disable: function disable() {
			this.props.disabled = true;
			return this;
		}
	});

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = "<rt-content select=\".opal-select__button\"> {{block button }} <opal-button class=\"opal-select__button\" type=\"{props.type}\" size=\"{props.size}\" checkable=\"\" tab-index=\"{props.tabIndex}\" disabled=\"{props.disabled}\"> <template is=\"rt-if-then\" if=\"props.text\">{props.text}</template> <template is=\"rt-if-else\" if=\"props.text\">{text}</template> {{block icon_chevron_down }} <svg viewBox=\"0 0 32 18\" class=\"opal-select__icon-chevron-down\"><use xlink:href=\"#opal-select__icon-chevron-down\"></use></svg> {{/block}} </opal-button> {{/block}} </rt-content> <rt-content select=\".opal-select__menu\"> <opal-dropdown class=\"opal-select__menu\" auto-closing=\"\"> <rt-content select=\".opal-select__menu-inner\"> <span class=\"opal-select__menu-inner\"> {{block options }} <rt-content select=\"opal-select-option\"></rt-content> {{/block}} </span> </rt-content> </opal-dropdown> </rt-content>"

/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-select-option__control\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-select-option__content\">{props.text}</rt-content> </span>"

/***/ },

/***/ 59:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select{position:relative;display:inline-block}.opal-select .opal-select__button{min-width:100%}.opal-select .opal-select__icon-chevron-down{display:inline-block;margin-left:.25em;width:14px;height:14px;vertical-align:middle;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;fill:currentColor}.opal-select .opal-select__button[size=s] .opal-select__icon-chevron-down{width:12px;height:12px}.opal-select .opal-select__button[checked] .opal-select__icon-chevron-down{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.opal-select .opal-popover{padding:6px 0;min-width:100px}.opal-select .opal-filtered-list .opal-filtered-list__query-input-wrapper{margin:10px}.opal-select .opal-loaded-list{height:300px}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select-option{display:block}.opal-select-option .opal-select-option__control{position:relative;display:block;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-select-option .opal-select-option__content{position:relative;display:block}.opal-select-option .opal-select-option__control:hover{background:#e6e6e6}.opal-select-option .opal-select-option__control:focus{outline:none}.opal-select-option .opal-select-option__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-select-option .opal-select-option__control:active{background:#ccc}.opal-select-option[selected] .opal-select-option__control{color:#0d87f2}.opal-select-option[disabled]{opacity:.5;pointer-events:none}.opal-select-option[disabled] .opal-select-option__control{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 73:
/***/ function(module, exports) {

	(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 18\" id=\"opal-select__icon-chevron-down\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M2 2l14 14L30 2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }

/******/ })
});
;