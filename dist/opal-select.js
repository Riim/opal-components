(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-select"] = factory(require("cellx"), require("rionite"));
	else
		root["opal-select"] = factory(root["cellx"], root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(23);
	__webpack_require__(26);
	__webpack_require__(27);

	var _require = __webpack_require__(2);

	var nextTick = _require.utils.nextTick;
	var cellx = _require.cellx;

	var _require2 = __webpack_require__(3);

	var Component = _require2.Component;

	var isEqualArray = __webpack_require__(28);

	var map = Array.prototype.map;

	module.exports = Component.extend('opal-select', {
		Static: {
			props: {
				type: String,
				size: 'm',
				text: String,
				placeholder: '—',
				multiple: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(29),

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
					'on-click': function onClick() {
						this[this.button.checked ? 'open' : 'close']();
					}
				},

				menu: {
					'on-close': function onClose() {
						this.close();
					},
					'on-change': function onChange() {
						this._options.pull();
					},
					'on-select': function onSelect(_ref) {
						var selectedOption = _ref.target;

						if (!this.props.multiple) {
							this.selectedOptions.forEach(function (option) {
								if (option != selectedOption) {
									option.deselect();
								}
							});

							this.close();
							this.focus();
						}
					},
					'on-deselect': function onDeselect(evt) {
						if (!this.props.multiple) {
							evt.target.select();

							this.close();
							this.focus();
						}
					}
				}
			}
		},

		_opened: false,
		_focused: false,

		initialize: function initialize() {
			cellx.define(this, {
				options: function options(push, fail, oldOptions) {
					var optionElements = this.optionElements;
					var options = optionElements ? map.call(optionElements, function (option) {
						return option.$c;
					}) : [];
					return oldOptions && isEqualArray(options, oldOptions) ? oldOptions : options;
				},
				selectedOptions: function selectedOptions(push, fail, oldOptions) {
					var options = this.options.filter(function (option) {
						return option.selected;
					});
					return oldOptions && isEqualArray(options, oldOptions) ? oldOptions : options;
				},
				value: function value() {
					var selectedOptions = this.selectedOptions;

					if (this.props.multiple) {
						return selectedOptions.map(function (option) {
							return option.value;
						});
					}
					return selectedOptions.length ? selectedOptions[0].value : void 0;
				},
				selectedOptionsText: function selectedOptionsText() {
					return this.selectedOptions.map(function (option) {
						return option.text.trim();
					}).join(', ') || this.props.placeholder;
				}
			});
		},
		ready: function ready() {
			var _this = this;

			this.optionElements = this.element.getElementsByClassName('opal-select-option');

			nextTick(function () {
				_this._options.pull();
			});
		},
		elementAttached: function elementAttached() {
			this.listenTo(this, 'change:value', this._onValueChange);
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'focused') {
				this[value ? 'focus' : 'blur']();
			}
		},
		_onValueChange: function _onValueChange(evt) {
			this.emit({
				type: 'change',
				value: evt.value
			});
		},


		/**
	  * @typesign () -> boolean;
	  */
		open: function open() {
			if (!this._opened) {
				this._opened = true;

				this.button.check();
				this.menu.open();

				this._focusOptions();

				this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);

				if (!this._focused) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				}

				return true;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		close: function close() {
			if (this._opened) {
				this._opened = false;

				this.button.uncheck();
				this.menu.close();

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

				if (node == el) {
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

				this.button.focus();

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

				this.button.blur();

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
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(24);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-select-option', {
		Static: {
			props: {
				value: String,
				selected: false,
				focused: false,
				tabIndex: 0,
				disabled: false
			},

			template: __webpack_require__(25),

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
				},

				content: {}
			}
		},

		_focused: false,

		initialize: function initialize() {
			cellx.define(this, {
				_tabIndex: function _tabIndex() {
					return this.props.disabled ? -1 : this.props.tabIndex;
				}
			});
		},
		ready: function ready() {
			if (!this.props.value) {
				this.props.value = this.content.element.innerHTML;
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
			return this.props.value;
		},
		set value(value) {
			this.props.value = value;
		},

		/**
	  * @type {string}
	  */
		get text() {
			return this.content ? this.content.element.innerHTML.replace(/<[^>]+>/g, '') : '';
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
			if (value !== void 0) {
				return this.props.selected = !!value;
			}
			return this.props.selected = !this.props.selected;
		},


		/**
	  * @typesign () -> OpalComponents.OpalSelectOption;
	  */
		focus: function focus() {
			if (!this._focused) {
				this._focused = true;

				this.control.focus();
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

				this.control.blur();
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
/* 24 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select-option{display:block}.opal-select-option__control{position:relative;display:block;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-select-option__content{position:relative;display:block}.opal-select-option__control:hover{background:#e6e6e6}.opal-select-option__control:focus{outline:none}body:not(._no-focus-highlight) .opal-select-option__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-select-option__control:active{background:#ccc}.opal-select-option[selected] .opal-select-option__control{color:#0d87f2}.opal-select-option[disabled]{opacity:.5;pointer-events:none}.opal-select-option[disabled] .opal-select-option__control{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-select-option__control\" tabindex=\"{_tabIndex}\"> <rt-content class=\"opal-select-option__content\"> </rt-content></span>"

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select{position:relative;display:inline-block}.opal-select__icon-chevron-down{display:inline-block;margin-left:.25em;width:13px;height:13px;vertical-align:middle;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;fill:currentColor}.opal-select__button[checked] .opal-select__icon-chevron-down{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },
/* 27 */
/***/ function(module, exports) {

	(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 24 13\" id=\"opal-select__icon-chevron-down\"><path d=\"M11.5 12.6c-.3 0-.5-.1-.7-.3L.3 1.9C-.1 1.5-.1.8.3.3c.4-.4 1.1-.4 1.6 0l9.7 9.7L21.3.3c.4-.4 1.1-.4 1.6 0 .4.4.4 1.1 0 1.6L12.3 12.3c-.2.2-.5.3-.8.3z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	function isEqualArray(a, b) {
		var aLen = a.length;
		var bLen = b.length;

		if (aLen != bLen) {
			return false;
		}

		for (var i = 0; i < aLen; i++) {
			if (a[i] !== b[i]) {
				return false;
			}
		}

		return true;
	}

	module.exports = isEqualArray;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<rt-content select=\".opal-select__button\"> <opal-button class=\"opal-select__button\" type=\"{props.type}\" size=\"{props.size}\" checkable=\"\" tab-index=\"{props.tabIndex}\" disabled=\"{props.disabled}\"> <template is=\"rt-if-then\" if=\"props.text\">{props.text}</template> <template is=\"rt-if-else\" if=\"props.text\">{selectedOptionsText}</template> <svg viewBox=\"0 0 24 13\" class=\"opal-select__icon-chevron-down\"><use xlink:href=\"#opal-select__icon-chevron-down\"></use></svg> </opal-button> </rt-content> <rt-content select=\".opal-select__menu\"> <opal-dropdown class=\"opal-select__menu\" auto-closing=\"\"> <rt-content select=\"opal-select-option\"> </rt-content></opal-dropdown> </rt-content>"

/***/ }
/******/ ])
});
;