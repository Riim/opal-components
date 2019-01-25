(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("reflect-metadata"), require("@riim/opal-utils"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-loader"), require("@riim/opal-button"), require("@riim/opal-checkbox"), require("@riim/object-assign-polyfill"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "reflect-metadata", "@riim/opal-utils", "cellx", "cellx-decorators", "rionite", "@riim/opal-loader", "@riim/opal-button", "@riim/opal-checkbox", "@riim/object-assign-polyfill"], factory);
	else if(typeof exports === 'object')
		exports["@riim/packages/opal-tree-list/src/index.ts"] = factory(require("@riim/opal-icon"), require("reflect-metadata"), require("@riim/opal-utils"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-loader"), require("@riim/opal-button"), require("@riim/opal-checkbox"), require("@riim/object-assign-polyfill"));
	else
		root["@riim/packages/opal-tree-list/src/index.ts"] = factory(root["@riim/opal-icon"], root["reflect-metadata"], root["@riim/opal-utils"], root["cellx"], root["cellx-decorators"], root["rionite"], root["@riim/opal-loader"], root["@riim/opal-button"], root["@riim/opal-checkbox"], root["@riim/object-assign-polyfill"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__138__, __WEBPACK_EXTERNAL_MODULE__159__, __WEBPACK_EXTERNAL_MODULE__246__, __WEBPACK_EXTERNAL_MODULE__248__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 245);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__138__;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__159__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(159);
__webpack_require__(246);
__webpack_require__(2);
__webpack_require__(138);
__webpack_require__(4);
__export(__webpack_require__(247));
__export(__webpack_require__(249));


/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__246__;

/***/ }),

/***/ 247:
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
Object.defineProperty(exports, "__esModule", { value: true });
var object_assign_polyfill_1 = __webpack_require__(248);
var cellx_1 = __webpack_require__(8);
var ERROR_INDEXPATH_EMPTY = 'Indexpath cannot be empty';
function setParent(items, parent) {
    if (parent === void 0) { parent = null; }
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        item.parent = parent;
        setParent(item.children, item);
    }
    return items;
}
exports.setParent = setParent;
var ObservableTreeList = /** @class */ (function (_super) {
    __extends(ObservableTreeList, _super);
    function ObservableTreeList(items) {
        var _this = _super.call(this) || this;
        _this._items = items
            ? setParent(items.map(function _(item) {
                return object_assign_polyfill_1.assign(object_assign_polyfill_1.assign({}, item), {
                    children: item.children ? item.children.map(_) : []
                });
            }))
            : [];
        return _this;
    }
    Object.defineProperty(ObservableTreeList.prototype, "length", {
        get: function () {
            return this._items.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableTreeList.prototype.get = function (indexpath) {
        if (typeof indexpath == 'number') {
            return this._items[indexpath];
        }
        if (!indexpath.length) {
            throw new TypeError(ERROR_INDEXPATH_EMPTY);
        }
        var item = this._items[indexpath[0]];
        for (var i = 1, l = indexpath.length; item && i < l; i++) {
            item = item.children && item.children[indexpath[i]];
        }
        return item;
    };
    ObservableTreeList.prototype.set = function (indexpath, item) {
        var items;
        var parent;
        var index;
        if (typeof indexpath == 'number') {
            items = this._items;
            index = indexpath;
        }
        else {
            var indexpathLength = indexpath.length;
            if (!indexpathLength) {
                throw new TypeError(ERROR_INDEXPATH_EMPTY);
            }
            if (indexpathLength == 1) {
                items = this._items;
            }
            else {
                var node = this._items[indexpath[0]];
                for (var i = 1, l = indexpathLength - 1; node && i < l; i++) {
                    node = node.children && node.children[indexpath[i]];
                }
                if (!node) {
                    throw new TypeError("Item by indexpath \"[" + indexpath.slice(0, -1).join(',') + "]\" is not exist");
                }
                items = node.children || (node.children = []);
                parent = node;
            }
            index = indexpath[indexpathLength - 1];
        }
        if (index > items.length) {
            throw new RangeError('Index out of valid range');
        }
        if (item !== items[index]) {
            if (parent) {
                item.parent = parent;
            }
            items[index] = item;
            this.emit('change');
        }
        return this;
    };
    ObservableTreeList.prototype.forEach = function (callback, context) { };
    ObservableTreeList.prototype.map = function (callback, context) {
        return 0;
    };
    ObservableTreeList.prototype.filter = function (callback, context) {
        return 0;
    };
    ObservableTreeList.prototype.every = function (callback, context) {
        return 0;
    };
    ObservableTreeList.prototype.some = function (callback, context) {
        return 0;
    };
    ObservableTreeList.prototype.reduce = function (callback, initialValue) {
        return 0;
    };
    ObservableTreeList.prototype.reduceRight = function (callback, initialValue) {
        return 0;
    };
    ObservableTreeList.prototype.toArray = function () {
        return this._items.slice();
    };
    return ObservableTreeList;
}(cellx_1.EventEmitter));
exports.ObservableTreeList = ObservableTreeList;
['forEach', 'map', 'filter', 'every', 'some'].forEach(function (name) {
    ObservableTreeList.prototype[name] = function (callback, context) {
        return this._items[name](function (item, index) {
            return callback.call(context, item, index, this);
        }, this);
    };
});
['reduce', 'reduceRight'].forEach(function (name) {
    ObservableTreeList.prototype[name] = function (callback, initialValue) {
        var items = this._items;
        var list = this;
        function wrapper(accumulator, item, index) {
            return callback(accumulator, item, index, list);
        }
        return arguments.length >= 2 ? items[name](wrapper, initialValue) : items[name](wrapper);
    };
});


/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

/***/ }),

/***/ 249:
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
var opal_utils_1 = __webpack_require__(7);
var cellx_1 = __webpack_require__(8);
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
var ObservableTreeList_1 = __webpack_require__(247);
__webpack_require__(250);
var OpalTreeListItem_1 = __webpack_require__(250);
exports.OpalTreeListItem = OpalTreeListItem_1.OpalTreeListItem;
var _getListItemContext_1 = __webpack_require__(251);
__webpack_require__(254);
var template = __webpack_require__(255);
var defaultDataTreeListItemSchema = Object.freeze({
    value: 'id',
    text: 'name'
});
var defaultVMItemSchema = Object.freeze({
    value: 'id',
    text: 'name'
});
function toComparable(str) {
    return (str &&
        str
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase());
}
var OpalTreeList = /** @class */ (function (_super) {
    __extends(OpalTreeList, _super);
    function OpalTreeList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._queryTimeout = null;
        return _this;
    }
    OpalTreeList_1 = OpalTreeList;
    Object.defineProperty(OpalTreeList.prototype, "filteredDataTreeList", {
        get: function () {
            var dataTreeList = this.dataTreeList;
            if (!dataTreeList) {
                return null;
            }
            var query = this.query;
            if (!query) {
                return dataTreeList;
            }
            var dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
            var dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
            return new ObservableTreeList_1.ObservableTreeList(ObservableTreeList_1.setParent(dataTreeList.reduce(function _(filteredDataTreeList, item) {
                var _a, _b;
                if (item.children.length) {
                    var filteredChildren = item.children.reduce(_, []);
                    if (filteredChildren.length ||
                        toComparable(item[dataTreeListItemTextFieldName]).indexOf(query) != -1) {
                        filteredDataTreeList.push((_a = {
                                $original: item
                            },
                            _a[dataTreeListItemValueFieldName] = item[dataTreeListItemValueFieldName],
                            _a[dataTreeListItemTextFieldName] = item[dataTreeListItemTextFieldName],
                            _a.children = filteredChildren,
                            _a));
                    }
                }
                else if (toComparable(item[dataTreeListItemTextFieldName]).indexOf(query) != -1) {
                    filteredDataTreeList.push((_b = {
                            $original: item
                        },
                        _b[dataTreeListItemValueFieldName] = item[dataTreeListItemValueFieldName],
                        _b[dataTreeListItemTextFieldName] = item[dataTreeListItemTextFieldName],
                        _b.children = [],
                        _b));
                }
                return filteredDataTreeList;
            }, [])));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTreeList.prototype, "listShown", {
        get: function () {
            return !!this.dataTreeList && !this._queryTimeout;
        },
        enumerable: true,
        configurable: true
    });
    OpalTreeList.prototype.initialize = function () {
        var _this = this;
        if (this.paramDataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function("return this." + this.paramDataTreeListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!this.$specifiedParams || !this.$specifiedParams.has('dataTreeList')) {
                throw new TypeError('Parameter "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', function () { return _this.paramDataTreeList; });
        }
        var dataTreeListItemSchema = this.paramDataTreeListItemSchema;
        var defaultDataTreeListItemSchema = this.constructor
            .defaultDataTreeListItemSchema;
        this._dataTreeListItemValueFieldName =
            dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
        this._dataTreeListItemTextFieldName =
            dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;
        this.viewModel = this.paramViewModel || new cellx_1.ObservableList();
        var vmItemSchema = this.paramViewModelItemSchema;
        var defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
    };
    OpalTreeList.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramQuery', this._onParamQueryChange);
        this.listenTo(this, '<*>change', this._onChange);
    };
    OpalTreeList.prototype._onParamQueryChange = function () {
        if (this._queryTimeout) {
            this._queryTimeout.clear();
        }
        this._queryTimeout = this.setTimeout(this._onQueryTimeout, 300);
    };
    OpalTreeList.prototype._onQueryTimeout = function () {
        this._queryTimeout = null;
        this.query = toComparable(this.paramQuery);
    };
    OpalTreeList.prototype._onChange = function (evt) {
        var _a;
        var component = evt.target;
        if (component.element.classList.contains('OpalTreeList__selectionControl')) {
            var dataTreeListItemValueFieldName_1 = this._dataTreeListItemValueFieldName;
            var dataTreeListItemTextFieldName_1 = this._dataTreeListItemTextFieldName;
            var vm_1 = this.viewModel;
            var viewModelItemValueFieldName_1 = this._viewModelItemValueFieldName;
            var viewModelItemTextFieldName_1 = this._viewModelItemTextFieldName;
            var item_1 = opal_utils_1.closestComponent(component.parentComponent, OpalTreeListItem_1.OpalTreeListItem).$context.$item;
            if (item_1.$original) {
                item_1 = item_1.$original;
            }
            if (component.selected) {
                for (var parent_1; (parent_1 = item_1.parent) &&
                    parent_1.children.every(function (child) {
                        return child == item_1 ||
                            !!vm_1.find(function (vmItem) {
                                return vmItem[viewModelItemValueFieldName_1] ==
                                    child[dataTreeListItemValueFieldName_1];
                            });
                    });) {
                    item_1 = parent_1;
                }
                item_1.children.forEach(function _(child) {
                    var childIndex = vm_1.findIndex(function (vmItem) {
                        return vmItem[viewModelItemValueFieldName_1] ==
                            child[dataTreeListItemValueFieldName_1];
                    });
                    if (childIndex != -1) {
                        vm_1.removeAt(childIndex);
                    }
                    child.children.forEach(_);
                });
                vm_1.add((_a = {},
                    _a[viewModelItemValueFieldName_1] = item_1[dataTreeListItemValueFieldName_1],
                    _a[viewModelItemTextFieldName_1] = item_1[dataTreeListItemTextFieldName_1],
                    _a));
            }
            else {
                var itemIndex = vm_1.findIndex(function (vmItem) {
                    return vmItem[viewModelItemValueFieldName_1] == item_1[dataTreeListItemValueFieldName_1];
                });
                if (itemIndex != -1) {
                    vm_1.removeAt(itemIndex);
                }
                else {
                    var parent_2 = item_1.parent;
                    for (;;) {
                        var parentIndex = vm_1.findIndex(function (vmItem) {
                            return vmItem[viewModelItemValueFieldName_1] ==
                                parent_2[dataTreeListItemValueFieldName_1];
                        });
                        vm_1.addRange((parent_2.$original || parent_2).children
                            .filter(function (child) { return child != item_1; })
                            .map(function (child) {
                            var _a;
                            return (_a = {},
                                _a[viewModelItemValueFieldName_1] = child[dataTreeListItemValueFieldName_1],
                                _a[viewModelItemTextFieldName_1] = child[dataTreeListItemTextFieldName_1],
                                _a);
                        }));
                        if (parentIndex != -1) {
                            vm_1.removeAt(parentIndex);
                            break;
                        }
                        item_1 = parent_2;
                        parent_2 = item_1.parent;
                    }
                }
            }
        }
    };
    var OpalTreeList_1;
    OpalTreeList.defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
    OpalTreeList.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramDataTreeList", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeList.prototype, "paramDataTreeListKeypath", void 0);
    __decorate([
        rionite_1.Param({
            type: eval,
            default: defaultDataTreeListItemSchema,
            readonly: true
        }),
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramDataTreeListItemSchema", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({
            type: eval,
            default: defaultVMItemSchema,
            readonly: true
        }),
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramViewModelItemSchema", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTreeList.prototype, "paramQuery", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "query", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalTreeList.prototype, "filteredDataTreeList", null);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "viewModel", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "_queryTimeout", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalTreeList.prototype, "listShown", null);
    OpalTreeList = OpalTreeList_1 = __decorate([
        rionite_1.Component({
            elementIs: 'OpalTreeList',
            template: template
        })
    ], OpalTreeList);
    return OpalTreeList;
}(rionite_1.BaseComponent));
exports.OpalTreeList = OpalTreeList;
OpalTreeList.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),

/***/ 250:
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
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
var _getListItemContext_1 = __webpack_require__(251);
__webpack_require__(252);
var template = __webpack_require__(253);
var OpalTreeListItem = /** @class */ (function (_super) {
    __extends(OpalTreeListItem, _super);
    function OpalTreeListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramOpened = false;
        return _this;
    }
    Object.defineProperty(OpalTreeListItem.prototype, "dataTreeList", {
        get: function () {
            return this.paramDataTreeList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTreeListItem.prototype, "viewModel", {
        get: function () {
            return this.paramViewModel;
        },
        enumerable: true,
        configurable: true
    });
    OpalTreeListItem.prototype.initialize = function () {
        this.dataTreeListItem = this.paramFilteredDataTreeList.get(this.paramIndexpath);
        this._dataTreeListItemValueFieldName = this.paramDataTreeListItemValueFieldName;
        this._dataTreeListItemTextFieldName = this.paramDataTreeListItemTextFieldName;
        this._viewModelItemValueFieldName = this.paramViewModelItemValueFieldName;
        this._viewModelItemTextFieldName = this.paramViewModelItemTextFieldName;
    };
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramDataTreeList", void 0);
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramFilteredDataTreeList", void 0);
    __decorate([
        rionite_1.Param({
            required: true,
            readonly: true
        }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramDataTreeListItemValueFieldName", void 0);
    __decorate([
        rionite_1.Param({
            required: true,
            readonly: true
        }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramDataTreeListItemTextFieldName", void 0);
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({
            required: true,
            readonly: true
        }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramViewModelItemValueFieldName", void 0);
    __decorate([
        rionite_1.Param({
            required: true,
            readonly: true
        }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramViewModelItemTextFieldName", void 0);
    __decorate([
        rionite_1.Param({
            type: eval,
            required: true,
            readonly: true
        }),
        __metadata("design:type", Array)
    ], OpalTreeListItem.prototype, "paramIndexpath", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramQuery", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramOpened", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalTreeListItem.prototype, "dataTreeList", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalTreeListItem.prototype, "viewModel", null);
    OpalTreeListItem = __decorate([
        rionite_1.Component({
            elementIs: 'OpalTreeListItem',
            template: template,
            events: {
                btnToggleChildren: {
                    change: function (evt) {
                        this.paramOpened = evt.target.checked;
                    }
                }
            }
        })
    ], OpalTreeListItem);
    return OpalTreeListItem;
}(rionite_1.BaseComponent));
exports.OpalTreeListItem = OpalTreeListItem;
OpalTreeListItem.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(8);
function isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    do {
        if (vm.find(function (vmItem) {
            return vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName];
        })) {
            return true;
        }
    } while ((item = item.parent));
    return false;
}
function isIndeterminateItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    return (!!item.children.length &&
        !isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
        item.children.some(function (child) {
            return !!vm.find(function (vmItem) {
                return vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName];
            }) ||
                isIndeterminateItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName);
        }));
}
function _getListItemContext(context, slot) {
    var $item = slot.$context.$item;
    return cellx_1.define({
        __proto__: context,
        $item: $item
    }, {
        $selected: new cellx_1.Cell(function () {
            this.dataTreeList;
            return isSelectedItem($item.$original || $item, this.viewModel, this._dataTreeListItemValueFieldName, this._viewModelItemValueFieldName);
        }, { context: this }),
        $indeterminate: new cellx_1.Cell(function () {
            this.dataTreeList;
            return isIndeterminateItem($item.$original || $item, this.viewModel, this._dataTreeListItemValueFieldName, this._viewModelItemValueFieldName);
        }, { context: this })
    });
}
exports.default = _getListItemContext;


/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeListItem{display:block}.OpalTreeListItem .OpalTreeListItem__head{display:table}.OpalTreeListItem .OpalTreeListItem__btnToggleChildren{position:relative;display:table-cell;visibility:hidden;padding-right:6px;padding-left:2px;vertical-align:middle;text-align:center}.OpalTreeListItem .OpalTreeListItem__btnToggleChildren:focus{outline:0}body:not(._noFocusHighlight) .OpalTreeListItem .OpalTreeListItem__btnToggleChildren:focus::after{position:absolute;top:1px;right:4px;bottom:1px;left:0;border-radius:2px;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.OpalTreeListItem .OpalTreeListItem__btnToggleChildren[checked] .OpalTreeListItem__btnToggleChildrenIcon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.OpalTreeListItem .OpalTreeListItem__btnToggleChildrenIcon{display:block;width:14px;height:14px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}.OpalTreeListItem .OpalTreeListItem__contentSlotWrapper{display:table-cell;width:100%}.OpalTreeListItem .OpalTreeListItem__children{display:none;padding-left:24px}.OpalTreeListItem[opened]>.OpalTreeListItem__children{display:block}.OpalTreeListItem[nesting_level='0']{font-weight:700}.OpalTreeListItem[nesting_level='1']{font-weight:400}.OpalTreeListItem[has_children]>.OpalTreeListItem__head .OpalTreeListItem__btnToggleChildren{visibility:visible}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "div/head {\nOpalButton/btnToggleChildren (viewType=clean, checkable, checked={paramOpened}) {\nOpalIcon/btnToggleChildrenIcon (name=chevronRight)\n}\nspan/contentSlotWrapper {\n@Slot/contentSlot (cloneContent)\n}\n}\n@IfThen (dataTreeListItem.children.length) {\ndiv/children {\n@Repeat (for=$item in dataTreeListItem.children) {\nOpalTreeListItem/item (\ndataTreeList={paramDataTreeList},\nfilteredDataTreeList={paramFilteredDataTreeList},\ndataTreeListItemValueFieldName={_dataTreeListItemValueFieldName},\ndataTreeListItemTextFieldName={_dataTreeListItemTextFieldName},\nviewModel={viewModel},\nviewModelItemValueFieldName={_viewModelItemValueFieldName},\nviewModelItemTextFieldName={_viewModelItemTextFieldName},\nindexpath='[{paramIndexpath},{$index}]',\nquery={paramQuery},\nopened={paramQuery |notnot },\nnestingLevel={paramIndexpath.length},\nhasChildren='{$item.children.length |gt(0) }'\n) {\n@Slot (cloneContent, getContext={_getListItemContext})\n}\n}\n}\n}"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeList{position:relative;display:block}.OpalTreeList .OpalTreeList__nothingFoundSlot{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.OpalTreeList .OpalTreeList__nothingFoundSlot::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalTreeList .OpalTreeList__nothingFound{display:inline-block;vertical-align:middle;white-space:normal}.OpalTreeList .OpalTreeList__nothingFoundMessage{white-space:nowrap;opacity:.6}.OpalTreeList .OpalTreeList__loader{position:absolute;top:0;right:0;bottom:0;left:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "@IfThen (listShown) {\n@IfThen (filteredDataTreeList.length) {\n@Repeat (for=$item in filteredDataTreeList) {\nOpalTreeListItem/item (\ndataTreeList={dataTreeList},\nfilteredDataTreeList={filteredDataTreeList},\ndataTreeListItemValueFieldName={_dataTreeListItemValueFieldName},\ndataTreeListItemTextFieldName={_dataTreeListItemTextFieldName},\nviewModel={viewModel},\nviewModelItemValueFieldName={_viewModelItemValueFieldName},\nviewModelItemTextFieldName={_viewModelItemTextFieldName},\nindexpath=[{$index}],\nquery={paramQuery},\nopened={paramQuery |notnot },\nnestingLevel=0,\nhasChildren='{$item.children.length |gt(0) }'\n) {\n@Slot (cloneContent, getContext={_getListItemContext}) {\nOpalCheckbox/selectionControl (\nchecked={$selected},\nindeterminate={$indeterminate}\n) {\n'{$item |key(_dataTreeListItemTextFieldName) }'\n}\n}\n}\n}\n}\n@IfElse (filteredDataTreeList.length) {\n@Slot/nothingFoundSlot (for=nothingFound) {\nspan/nothingFound {\nspan/nothingFoundMessage {\n'{\"Ничего не найдено\" |t }'\n}\n}\n}\n}\n}\n@IfElse (listShown) {\nOpalLoader/loader (shown)\n}"

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});