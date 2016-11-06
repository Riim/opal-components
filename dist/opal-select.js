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

	__webpack_require__(66);
	__webpack_require__(79);

	var _require = __webpack_require__(2);

	var _require$Utils = _require.Utils;
	var nextUID = _require$Utils.nextUID;
	var nextTick = _require$Utils.nextTick;
	var cellx = _require.cellx;

	var _require2 = __webpack_require__(3);

	var IndexedList = _require2.IndexedList;

	var _require3 = __webpack_require__(1);

	var getText = _require3.getText;
	var ComponentTemplate = _require3.ComponentTemplate;
	var Component = _require3.Component;
	var RtRepeat = _require3.Components.RtRepeat;

	var OpalSelectOption = __webpack_require__(17);
	var isEqualArray = __webpack_require__(16);

	var map = Array.prototype.map;

	module.exports = Component.extend('opal-select', {
		Static: {
			OpalSelectOption: OpalSelectOption,

			props: {
				type: String,
				size: 'm',
				datalist: { type: String, readonly: true },
				value: Object,
				viewModel: { type: String, readonly: true },
				text: String,
				placeholder: getText.t('Не выбрано'),
				multiple: { default: false, readonly: true },
				allowInput: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: new ComponentTemplate(__webpack_require__(36)),

			events: {
				button: {
					focusin: function focusin() {
						this.props.focused = true;
						this.emit('focusin');
					},
					focusout: function focusout() {
						this.props.focused = false;
						this.emit('focusout');
					},
					click: function click(evt) {
						this[evt.target.checked ? 'open' : 'close']();
					}
				},

				menu: {
					close: function close() {
						this.close();
					},
					confirminput: function confirminput(_ref) {
						var textInput = _ref.target;

						if (!this.props.allowInput) {
							return;
						}

						var item = {
							value: '_' + Math.floor(Math.random() * 1e9) + '_' + nextUID(),
							text: textInput.value
						};

						var dataList = this.dataList;

						if (dataList) {
							dataList.add(item);
						}

						textInput.clear();

						var loadedList = this.loadedList;

						if (loadedList === void 0) {
							loadedList = this.loadedList = this.$('loaded-list');
						}

						if (loadedList) {
							loadedList.props.query = '';
						}

						this.emit('input');

						var vm = this.viewModel;

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

							this.emit('change');
						}
					},
					change: function change(evt) {
						if (!(evt.target instanceof RtRepeat)) {
							return;
						}

						this._options.pull();
						this._updateOptions();

						return false;
					},
					select: function select(_ref2) {
						var selectedOption = _ref2.target;

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

							this.emit('change');
						}
					},
					deselect: function deselect(_ref3) {
						var deselectedOption = _ref3.target;

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

				'loaded-list': {
					loaded: function loaded() {
						var _this = this;

						setTimeout(function () {
							var filteredList = _this.$('filtered-list');

							if (filteredList) {
								if (document.activeElement == filteredList.$('query-input').$('input')) {
									_this._focusOptions();
									filteredList.focus();
								} else {
									_this._focusOptions();
								}
							} else {
								_this._focusOptions();
							}
						}, 1);
					}
				}
			}
		},

		newInput: void 0,
		filteredList: void 0,
		loadedList: void 0,

		_opened: false,

		_valueWhenOpened: null,

		initialize: function initialize() {
			var _this2 = this;

			var dataList = this.props.datalist;

			if (dataList) {
				(function () {
					var context = _this2.ownerComponent || window;
					var getDataList = Function('return this.' + dataList + ';');

					cellx.define(_this2, 'dataList', function () {
						return getDataList.call(context);
					});
				})();
			}

			var vm = this.props.viewModel;

			if (vm) {
				vm = Function('return this.' + vm + ';').call(this.ownerComponent || window);

				if (!vm) {
					throw new TypeError('viewModel is not defined');
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
			var _this3 = this;

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
								selectedOptions = _this3.options.filter(function (option) {
									return value.indexOf(option.value) != -1;
								});
							} else {
								value = value[0];
								var selectedOption = _this3.options.find(function (option) {
									return option.value == value;
								});
								selectedOptions = selectedOption ? [selectedOption] : [];
							}
						} else {
							selectedOptions = [];
						}
					} else {
						if (props.multiple) {
							selectedOptions = _this3.options.filter(function (option) {
								return option.selected;
							});
						} else {
							var _selectedOption = _this3.options.find(function (option) {
								return option.selected;
							});
							selectedOptions = _selectedOption ? [_selectedOption] : [];
						}
					}

					if (selectedOptions.length) {
						_this3.viewModel.addRange(selectedOptions.map(function (option) {
							return {
								value: option.value,
								text: option.text
							};
						}));
					}

					if (value) {
						_this3._updateOptions();
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
				if (value) {
					if (!this._opened) {
						this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					}

					this.focus();
				} else {
					if (!this._opened) {
						this._documentKeyDownListening.stop();
					}

					this.blur();
				}
			}
		},
		_onPropsValueChange: function _onPropsValueChange(_ref4) {
			var _this4 = this;

			var value = _ref4.value[1];

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
							var vmLen = vm.length;

							value = value[0];

							if (!vmLen || value != vm.get(0).value) {
								if (!_this4.options.some(function (option) {
									var optionValue = option.value;

									if (optionValue == value) {
										var item = {
											value: optionValue,
											text: option.text
										};

										if (vmLen) {
											vm.set(0, item);
										} else {
											vm.add(item);
										}

										return true;
									}
								}) && vmLen) {
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
		_onViewModelChange: function _onViewModelChange() {
			this._updateOptions();
		},
		_updateOptions: function _updateOptions() {
			var vm = this.viewModel;

			this.options.forEach(function (option) {
				var item = vm.get(option.value, 'value');

				if (item) {
					option.selected = true;
					option.disabled = item.disabled;
				} else {
					option.selected = false;
				}
			});
		},


		/**
	  * @typesign () -> boolean;
	  */
		open: function open() {
			var _this5 = this;

			if (!this._opened) {
				var _ret4 = function () {
					_this5._opened = true;
					_this5._valueWhenOpened = _this5.viewModel.map(function (item) {
						return item.value;
					});

					_this5.$('button').check();
					_this5.$('menu').open();

					var loadedList = _this5.$('loaded-list');

					if (loadedList) {
						nextTick(function () {
							loadedList.checkLoading();
						});
					}

					var newInput = _this5.newInput;
					var filteredList = _this5.filteredList;

					if (filteredList === void 0) {
						filteredList = _this5.filteredList = _this5.$('filtered-list');
					}

					var focusable = newInput || filteredList;

					if (!focusable && _this5.dataList) {
						newInput = _this5.newInput = _this5.$('new-input');

						if (newInput) {
							focusable = newInput;
						}
					}

					if (focusable) {
						setTimeout(function () {
							focusable.focus();
						}, 1);
					} else {
						_this5._focusOptions();
					}

					_this5._documentFocusInListening = _this5.listenTo(document, 'focusin', _this5._onDocumentFocusIn);

					if (!_this5.props.focused) {
						_this5._documentKeyDownListening = _this5.listenTo(document, 'keydown', _this5._onDocumentKeyDown);
					}

					return {
						v: true
					};
				}();

				if (typeof _ret4 === "object") return _ret4.v;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		close: function close() {
			if (this._opened) {
				this._opened = false;

				this.$('button').uncheck();
				this.$('menu').close();

				this._documentFocusInListening.stop();

				if (!this.props.focused) {
					this._documentKeyDownListening.stop();
				}

				if (this.props.multiple && !isEqualArray(this.viewModel.map(function (item) {
					return item.value;
				}), this._valueWhenOpened)) {
					this.emit('change');
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
			if (!this.element.contains(evt.target.parentNode)) {
				this.close();
			}
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelect;
	  */
		focus: function focus() {
			this.$('button').focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelect;
	  */
		blur: function blur() {
			this.$('button').blur();
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

/***/ 16:
/***/ function(module, exports) {

	"use strict";

	function isEqualArray(arr1, arr2) {
		var len = arr1.length;

		if (len != arr2.length) {
			return false;
		}

		for (var i = 0; i < len; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			}
		}

		return true;
	}

	module.exports = isEqualArray;

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(67);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var Component = _require.Component;


	module.exports = Component.extend('opal-select-option', {
		Static: {
			props: {
				value: String,
				text: { type: String, required: true },
				selected: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(37),

			events: {
				control: {
					focusin: function focusin() {
						this.props.focused = true;
					},
					focusout: function focusout() {
						this.props.focused = false;
					},
					click: function click() {
						this._click();
					}
				}
			}
		},

		initialize: function initialize() {
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
				if (value) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					this.focus();
				} else {
					this._documentKeyDownListening.stop();
					this.blur();
				}
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
	  * @type {boolean}
	  */
		get disabled() {
			return this.props.disabled;
		},
		set disabled(disabled) {
			this.props.disabled = disabled;
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
			this.$('control').focus();
			return this;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelectOption;
	  */
		blur: function blur() {
			this.$('control').blur();
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

/***/ 36:
/***/ function(module, exports) {

	module.exports = "<rt-content select=\".opal-select__button\"> {{block button }} <opal-button class=\"opal-select__button\" type=\"{props.type}\" size=\"{props.size}\" checkable=\"\" tab-index=\"{props.tabIndex}\" disabled=\"{props.disabled}\"> <template is=\"rt-if-then\" if=\"props.text\" rt-silent=\"\">{props.text}</template> <template is=\"rt-if-else\" if=\"props.text\" rt-silent=\"\">{text}</template> {{block icon_chevron_down }} <svg viewBox=\"0 0 32 18\" class=\"opal-select__icon-chevron-down\"><use xlink:href=\"#opal-select__icon-chevron-down\"></use></svg> {{/block}} </opal-button> {{/block}} </rt-content> <rt-content select=\".opal-select__menu\"> <opal-dropdown class=\"opal-select__menu\" auto-closing=\"\"> <rt-content select=\".opal-select__menu-content\"> <template is=\"rt-if-then\" if=\"props.datalist\"> <div class=\"opal-select__menu-content\"> <template is=\"rt-if-then\" if=\"dataList?.length\"> <template is=\"rt-repeat\" for=\"item of dataList\"> {{block option }} <opal-select-option value=\"{item.value}\" text=\"{item.text}\"></opal-select-option> {{/block}} </template> {{block new }} <rt-content class=\"opal-select__new-input-container\" select=\".opal-select__new-input\">{{block new_input }}{{/block}}</rt-content> {{/block}} </template> <template is=\"rt-if-else\" if=\"dataList?.length\" rt-silent=\"\"> {{block loader }} <opal-loader shown=\"\"></opal-loader> {{/block}} </template> </div> </template> <template is=\"rt-if-else\" if=\"props.datalist\"> <div class=\"opal-select__menu-content\"> {{block options }} <rt-content select=\"opal-select-option\"></rt-content> {{/block}} </div> </template> </rt-content> </opal-dropdown> </rt-content>"

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-select-option__control\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-select-option__content\">{props.text}</rt-content> </span>"

/***/ },

/***/ 66:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select{position:relative;display:inline-block;vertical-align:middle;line-height:0}.opal-select .opal-select__button{display:block;min-width:100%}.opal-select .opal-select__icon-chevron-down{display:inline-block;margin-left:.25em;width:14px;height:14px;vertical-align:middle;transition:transform .1s linear;fill:currentColor}.opal-select .opal-select__button[size=s] .opal-select__icon-chevron-down{width:12px;height:12px}.opal-select .opal-select__button[checked] .opal-select__icon-chevron-down{-ms-transform:scaleY(-1);transform:scaleY(-1)}.opal-select .opal-select__new-input{margin:10px;width:auto}.opal-select .opal-popover{padding:6px 0;min-width:100px}.opal-select .opal-filtered-list .opal-filtered-list__query-input{margin:10px}.opal-select .opal-loaded-list{height:300px}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 67:
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

/***/ 79:
/***/ function(module, exports) {

	(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 18\" id=\"opal-select__icon-chevron-down\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M2 2l14 14L30 2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }

/******/ })
});
;