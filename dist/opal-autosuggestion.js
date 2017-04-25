(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-autosuggestion"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-autosuggestion"] = factory(root["rionite"], root["cellx"]);
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
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(44);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(22);
	function toComparable(str) {
	    return str.trim().replace(/\s+/g, ' ').toLowerCase();
	}
	var OpalAutosuggestion = (function (_super) {
	    __extends(OpalAutosuggestion, _super);
	    function OpalAutosuggestion() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._isInputLast = false;
	        return _this;
	    }
	    OpalAutosuggestion.prototype.initialize = function () {
	        this.dataProvider = Function("return this." + this.props.dataprovider + ";").call(this.ownerComponent || window);
	        cellx_1.define(this, {
	            list: new cellx_1.ObservableList(),
	            _loadingPlanned: false,
	            loading: false,
	            loaderShown: function () {
	                return this._loadingPlanned || this.loading;
	            },
	            selectedItem: this.props.selectedItem
	        });
	    };
	    OpalAutosuggestion.prototype.elementAttached = function () {
	        this.listenTo(this.$('text-input').$('text-field'), 'click', this._onTextFieldClick);
	        this.listenTo(this.$('menu').element, 'mouseover', this._onMenuMouseOver);
	        this.listenTo(this.list, 'change', this._onListChange);
	        this.listenTo(this, 'change:loaderShown', this._onLoaderShownChange);
	    };
	    OpalAutosuggestion.prototype.propertyChanged = function (name, value) {
	        if (name == 'selectedItem') {
	            this._clearList();
	            this.selectedItem = value;
	            this.$('text-input').value = value ? value.text : '';
	        }
	    };
	    OpalAutosuggestion.prototype._onTextFieldClick = function () {
	        this.openMenu();
	    };
	    OpalAutosuggestion.prototype._onMenuMouseOver = function (evt) {
	        var menu = this.$('menu').element;
	        var el = evt.target;
	        for (; !el.classList.contains('opal-autosuggestion__list-item'); el = el.parentNode) {
	            if (el == menu) {
	                return;
	            }
	        }
	        var focusedListItem = this._focusedListItem;
	        if (el != focusedListItem) {
	            this._focusedListItem = el;
	            focusedListItem.removeAttribute('focused');
	            el.setAttribute('focused', '');
	        }
	    };
	    OpalAutosuggestion.prototype._onListChange = function () {
	        this.openMenu();
	    };
	    OpalAutosuggestion.prototype._onLoaderShownChange = function (evt) {
	        this.$('text-input').props.loading = evt.value;
	    };
	    OpalAutosuggestion.prototype._onDocumentFocus = function (evt) {
	        if (!this.element.contains(evt.target.parentNode)) {
	            this.closeMenu();
	            this._setSelectedItemOfList();
	        }
	    };
	    OpalAutosuggestion.prototype._onDocumentKeyDown = function (evt) {
	        switch (evt.which) {
	            case 38 /* Up */:
	            case 40 /* Bottom */: {
	                evt.preventDefault();
	                var focusedListItem = this._focusedListItem;
	                if (focusedListItem) {
	                    var listItems = this.$$('list-item');
	                    var index = listItems.indexOf(focusedListItem);
	                    if (evt.which == 38 ? index > 0 : index < listItems.length - 1) {
	                        var newFocusedListItem = listItems[index + (evt.which == 38 ? -1 : 1)];
	                        this._focusedListItem = newFocusedListItem;
	                        focusedListItem.removeAttribute('focused');
	                        newFocusedListItem.setAttribute('focused', '');
	                    }
	                }
	                break;
	            }
	            case 13 /* Enter */:
	            case 39 /* Right */: {
	                evt.preventDefault();
	                var focusedListItem = this._focusedListItem;
	                if (focusedListItem) {
	                    var focusedListItemDataSet = focusedListItem.dataset;
	                    this.$('text-input').value = focusedListItemDataSet.text;
	                    this.closeMenu();
	                    this._setSelectedItem({
	                        value: focusedListItemDataSet.value,
	                        text: focusedListItemDataSet.text
	                    });
	                }
	                break;
	            }
	            case 27 /* Esc */: {
	                evt.preventDefault();
	                this.closeMenu();
	                this._setSelectedItemOfList();
	                break;
	            }
	        }
	    };
	    OpalAutosuggestion.prototype._onDocumentClick = function (evt) {
	        if (!this.element.contains(evt.target)) {
	            this.closeMenu();
	            this._setSelectedItemOfList();
	        }
	    };
	    OpalAutosuggestion.prototype._onListItemClick = function (evt, listItem) {
	        var textInput = this.$('text-input');
	        var listItemDataSet = listItem.dataset;
	        textInput.value = listItemDataSet.text;
	        textInput.focus();
	        this.closeMenu();
	        this._setSelectedItem({
	            value: listItemDataSet.value,
	            text: listItemDataSet.text
	        });
	    };
	    OpalAutosuggestion.prototype._load = function () {
	        this.loading = true;
	        var dataProvider = this.dataProvider;
	        var args = [this.$('text-input').value];
	        if (dataProvider.getItems.length >= 2) {
	            args.unshift(this.props.count);
	        }
	        dataProvider.getItems.apply(dataProvider, args)
	            .then(this._requestCallback = this.registerCallback(this._itemsRequestCallback));
	    };
	    OpalAutosuggestion.prototype._itemsRequestCallback = function (data) {
	        var _this = this;
	        this.loading = false;
	        var items = data.items;
	        if (items.length) {
	            this.list.addRange(items);
	            cellx_1.Cell.afterRelease(function () {
	                var focusedListItem = _this.$('list-item');
	                _this._focusedListItem = focusedListItem;
	                focusedListItem.setAttribute('focused', '');
	            });
	        }
	        else if (this.props.showNotFound) {
	            this.openMenu(true);
	        }
	    };
	    OpalAutosuggestion.prototype._cancelLoading = function () {
	        if (this._loadingPlanned) {
	            this._loadingPlanned = false;
	            this._loadingTimeout.clear();
	        }
	        else if (this.loading) {
	            this._requestCallback.cancel();
	            this.loading = false;
	        }
	    };
	    OpalAutosuggestion.prototype.openMenu = function (force) {
	        if (force || this.list.length) {
	            this.$('menu').open();
	        }
	        return this;
	    };
	    OpalAutosuggestion.prototype.closeMenu = function () {
	        this.$('menu').close();
	        return this;
	    };
	    OpalAutosuggestion.prototype._setSelectedItemOfList = function () {
	        if (this._isInputLast) {
	            var comparableQuery_1 = toComparable(this.$('text-input').value);
	            this._setSelectedItem(this.list.find(function (item) { return toComparable(item.text) == comparableQuery_1; }) || null);
	        }
	    };
	    OpalAutosuggestion.prototype._setSelectedItem = function (selectedItem) {
	        if (selectedItem) {
	            this._isInputLast = false;
	            this._clearList();
	            if (this.selectedItem && this.selectedItem.value == selectedItem.value) {
	                return;
	            }
	        }
	        else if (!this.selectedItem) {
	            return;
	        }
	        this.selectedItem = selectedItem;
	        this.emit('change');
	    };
	    OpalAutosuggestion.prototype.clear = function () {
	        this._clearList();
	        if (this.selectedItem) {
	            this.selectedItem = null;
	        }
	        this.$('text-input').clear();
	    };
	    OpalAutosuggestion.prototype._clearList = function () {
	        this.closeMenu();
	        this._cancelLoading();
	        this.list.clear();
	        this._focusedListItem = null;
	    };
	    return OpalAutosuggestion;
	}(rionite_1.Component));
	OpalAutosuggestion = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-autosuggestion',
	        props: {
	            dataprovider: { type: String, required: true, readonly: true },
	            selectedItem: eval,
	            minQueryLength: 3,
	            count: 5,
	            showNotFound: false
	        },
	        i18n: {
	            inputPlaceholder: rionite_1.getText.t('начните вводить для поиска'),
	            notFound: rionite_1.getText.t('Ничего не найдено')
	        },
	        bemlTemplate: template,
	        events: {
	            'text-input': {
	                focus: function () {
	                    this.openMenu();
	                },
	                blur: function () {
	                    this._cancelLoading();
	                    // Нужно для следующего случая:
	                    // 1. выбираем что-то;
	                    // 2. изменяем запрос так чтобы ничего не нашлось;
	                    // 3. убираем фокус.
	                    if (!this.$('menu').props.opened) {
	                        this._setSelectedItemOfList();
	                    }
	                },
	                input: function (evt) {
	                    var _this = this;
	                    this._isInputLast = true;
	                    this._clearList();
	                    if (evt.target.value.length >= this.props.minQueryLength) {
	                        this._loadingPlanned = true;
	                        this._loadingTimeout = this.setTimeout(function () {
	                            _this._loadingPlanned = false;
	                            _this._load();
	                        }, 300);
	                    }
	                },
	                change: function (evt) {
	                    if (!evt.target.value.length) {
	                        this._clearList();
	                        if (this.selectedItem) {
	                            this.selectedItem = null;
	                            this.emit('change');
	                        }
	                    }
	                }
	            },
	            menu: {
	                'property-opened-change': function (evt) {
	                    if (evt.value) {
	                        this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
	                        this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                        this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
	                    }
	                    else {
	                        this._documentFocusListening.stop();
	                        this._documentKeyDownListening.stop();
	                        this._documentClickListening.stop();
	                    }
	                }
	            }
	        }
	    })
	], OpalAutosuggestion);
	exports.default = OpalAutosuggestion;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	module.exports = "@section/inner {\nrt-content (select=.opal-autosuggestion__text-input, cloning=no) {\nopal-text-input/text-input (\nvalue={props.selectedItem.text},\nplaceholder={constructor.i18n.inputPlaceholder},\nloading={loaderShown}\n)\n}\nopal-dropdown/menu {\ndiv/list {\n@repeat (for=item of list, rt-silent) {\ndiv/list-item (data-value={item.value}, data-text={item.text}, rt-click=_onListItemClick) {\n'{item.text}'\n}\n}\n}\nspan/not-found-message (shown={list.length |not }) { '{constructor.i18n.notFound}' }\n}\n}"

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-autosuggestion{position:relative;display:inline-block;vertical-align:middle}.opal-autosuggestion .opal-autosuggestion__text-input{display:block}.opal-autosuggestion .opal-autosuggestion__list-item{position:relative;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-autosuggestion .opal-autosuggestion__list-item:hover,.opal-autosuggestion .opal-autosuggestion__list-item[focused]{background:#e6e6e6}.opal-autosuggestion .opal-autosuggestion__list-item:active{background:#ccc}.opal-autosuggestion .opal-autosuggestion__not-found-message{display:none;padding:10px;text-align:center;white-space:nowrap;opacity:.6}.opal-autosuggestion .opal-autosuggestion__not-found-message[shown]{display:block}.opal-input-validator .opal-autosuggestion{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ })

/******/ })
});
;