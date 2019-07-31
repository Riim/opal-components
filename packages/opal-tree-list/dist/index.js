(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-button"), require("@riim/opal-checkbox"), require("@riim/opal-icon"), require("@riim/opal-loader"), require("reflect-metadata"), require("@riim/object-assign-polyfill"), require("cellx"), require("@riim/opal-select"), require("@riim/opal-utils"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-button", "@riim/opal-checkbox", "@riim/opal-icon", "@riim/opal-loader", "reflect-metadata", "@riim/object-assign-polyfill", "cellx", "@riim/opal-select", "@riim/opal-utils", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tree-list"] = factory(require("@riim/opal-button"), require("@riim/opal-checkbox"), require("@riim/opal-icon"), require("@riim/opal-loader"), require("reflect-metadata"), require("@riim/object-assign-polyfill"), require("cellx"), require("@riim/opal-select"), require("@riim/opal-utils"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-tree-list"] = factory(root["@riim/opal-button"], root["@riim/opal-checkbox"], root["@riim/opal-icon"], root["@riim/opal-loader"], root["reflect-metadata"], root["@riim/object-assign-polyfill"], root["cellx"], root["@riim/opal-select"], root["@riim/opal-utils"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__) {
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
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__export(__webpack_require__(6));
__export(__webpack_require__(9));


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const object_assign_polyfill_1 = __webpack_require__(7);
const cellx_1 = __webpack_require__(8);
const ERROR_INDEXPATH_EMPTY = 'Indexpath cannot be empty';
function setParent(items, parent = null) {
    for (let item of items) {
        item.parent = parent;
        setParent(item.children, item);
    }
    return items;
}
exports.setParent = setParent;
class ObservableTreeList extends cellx_1.EventEmitter {
    constructor(items) {
        super();
        this._items = items
            ? setParent(items.map(function _(item) {
                return object_assign_polyfill_1.assign(object_assign_polyfill_1.assign({}, item), {
                    children: item.children ? item.children.map(_) : []
                });
            }))
            : [];
    }
    get length() {
        return this._items.length;
    }
    get(indexpath) {
        if (typeof indexpath == 'number') {
            return this._items[indexpath];
        }
        if (!indexpath.length) {
            throw new TypeError(ERROR_INDEXPATH_EMPTY);
        }
        let item = this._items[indexpath[0]];
        for (let i = 1, l = indexpath.length; item && i < l; i++) {
            item = item.children && item.children[indexpath[i]];
        }
        return item;
    }
    set(indexpath, item) {
        let items;
        let parent;
        let index;
        if (typeof indexpath == 'number') {
            items = this._items;
            index = indexpath;
        }
        else {
            let indexpathLength = indexpath.length;
            if (!indexpathLength) {
                throw new TypeError(ERROR_INDEXPATH_EMPTY);
            }
            if (indexpathLength == 1) {
                items = this._items;
            }
            else {
                let node = this._items[indexpath[0]];
                for (let i = 1, l = indexpathLength - 1; node && i < l; i++) {
                    node = node.children && node.children[indexpath[i]];
                }
                if (!node) {
                    throw new TypeError(`Item by indexpath "[${indexpath.slice(0, -1).join(',')}]" is not exist`);
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
    }
    forEach(callback, context) { }
    map(callback, context) {
        return 0;
    }
    filter(callback, context) {
        return 0;
    }
    every(callback, context) {
        return 0;
    }
    some(callback, context) {
        return 0;
    }
    reduce(callback, initialValue) {
        return 0;
    }
    reduceRight(callback, initialValue) {
        return 0;
    }
    toArray() {
        return this._items.slice();
    }
}
exports.ObservableTreeList = ObservableTreeList;
['forEach', 'map', 'filter', 'every', 'some'].forEach(name => {
    ObservableTreeList.prototype[name] = function (callback, context) {
        return this._items[name](function (item, index) {
            return callback.call(context, item, index, this);
        }, this);
    };
});
['reduce', 'reduceRight'].forEach(name => {
    ObservableTreeList.prototype[name] = function (callback, initialValue) {
        let items = this._items;
        let list = this;
        function wrapper(accumulator, item, index) {
            return callback(accumulator, item, index, list);
        }
        return arguments.length >= 2 ? items[name](wrapper, initialValue) : items[name](wrapper);
    };
});


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
var OpalTreeList_1;
Object.defineProperty(exports, "__esModule", { value: true });
const opal_checkbox_1 = __webpack_require__(2);
const opal_select_1 = __webpack_require__(10);
const opal_utils_1 = __webpack_require__(11);
const cellx_1 = __webpack_require__(8);
const cellx_decorators_1 = __webpack_require__(12);
const rionite_1 = __webpack_require__(13);
const ObservableTreeList_1 = __webpack_require__(6);
const OpalTreeListItem_1 = __webpack_require__(14);
exports.OpalTreeListItem = OpalTreeListItem_1.OpalTreeListItem;
__webpack_require__(14);
const _getListItemContext_1 = __webpack_require__(15);
__webpack_require__(18);
const template_rnt_1 = __webpack_require__(19);
const defaultDataTreeListItemSchema = Object.freeze({
    value: 'id',
    text: 'name'
});
const defaultVMItemSchema = Object.freeze({
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
let OpalTreeList = OpalTreeList_1 = class OpalTreeList extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.viewModel = new cellx_1.ObservableList();
        this._queryTimeout = null;
    }
    get filteredDataTreeList() {
        let dataTreeList = this.dataTreeList;
        if (!dataTreeList) {
            return null;
        }
        let query = this.comparableQuery;
        if (!query) {
            return dataTreeList;
        }
        let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
        let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
        return new ObservableTreeList_1.ObservableTreeList(ObservableTreeList_1.setParent(dataTreeList.reduce(function _(filteredDataTreeList, item) {
            if (item.children.length) {
                let filteredChildren = item.children.reduce(_, []);
                if (filteredChildren.length ||
                    toComparable(item[dataTreeListItemTextFieldName]).indexOf(query) != -1) {
                    filteredDataTreeList.push({
                        $original: item,
                        [dataTreeListItemValueFieldName]: item[dataTreeListItemValueFieldName],
                        [dataTreeListItemTextFieldName]: item[dataTreeListItemTextFieldName],
                        children: filteredChildren
                    });
                }
            }
            else if (toComparable(item[dataTreeListItemTextFieldName]).indexOf(query) != -1) {
                filteredDataTreeList.push({
                    $original: item,
                    [dataTreeListItemValueFieldName]: item[dataTreeListItemValueFieldName],
                    [dataTreeListItemTextFieldName]: item[dataTreeListItemTextFieldName],
                    children: []
                });
            }
            return filteredDataTreeList;
        }, [])));
    }
    get listShown() {
        return !!this.dataTreeList && !this._queryTimeout;
    }
    initialize() {
        if (this.dataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function(`return this.${this.dataTreeListKeypath};`), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!this.$specifiedParams || !this.$specifiedParams.has('dataTreeList')) {
                throw new TypeError('Parameter "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', () => this.paramDataTreeList);
        }
        let dataTreeListItemSchema = this.dataTreeListItemSchema;
        let defaultDataTreeListItemSchema = this.constructor
            .defaultDataTreeListItemSchema;
        this._dataTreeListItemValueFieldName =
            dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
        this._dataTreeListItemTextFieldName =
            dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;
        let vmItemSchema = this.viewModelItemSchema;
        let defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
    }
    elementAttached() {
        this.listenTo(this, 'change:query', this._onQueryChange);
        this.listenTo(this, OpalTreeList_1.selectionControlChangeEvents, this._onSelectionControlChange);
    }
    _onQueryChange() {
        if (this._queryTimeout) {
            this._queryTimeout.clear();
        }
        this._queryTimeout = this.setTimeout(this._onQueryTimeout, 300);
    }
    _onQueryTimeout() {
        this._queryTimeout = null;
        this.comparableQuery = toComparable(this.query);
    }
    _onSelectionControlChange(evt) {
        let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
        let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
        let vm = this.viewModel;
        let viewModelItemValueFieldName = this._viewModelItemValueFieldName;
        let viewModelItemTextFieldName = this._viewModelItemTextFieldName;
        let item = opal_utils_1.closestComponent(evt.target.parentComponent, OpalTreeListItem_1.OpalTreeListItem).$context.$item;
        if (item.$original) {
            item = item.$original;
        }
        if (evt.target.selected) {
            for (let parent; (parent = item.parent) &&
                parent.children.every(child => child == item ||
                    !!vm.find(vmItem => vmItem[viewModelItemValueFieldName] ==
                        child[dataTreeListItemValueFieldName]));) {
                item = parent;
            }
            item.children.forEach(function _(child) {
                let childIndex = vm.findIndex(vmItem => vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]);
                if (childIndex != -1) {
                    vm.removeAt(childIndex);
                }
                child.children.forEach(_);
            });
            vm.add({
                [viewModelItemValueFieldName]: item[dataTreeListItemValueFieldName],
                [viewModelItemTextFieldName]: item[dataTreeListItemTextFieldName]
            });
        }
        else {
            let itemIndex = vm.findIndex(vmItem => vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]);
            if (itemIndex != -1) {
                vm.removeAt(itemIndex);
            }
            else {
                let parent = item.parent;
                for (;;) {
                    let parentIndex = vm.findIndex(vmItem => vmItem[viewModelItemValueFieldName] ==
                        parent[dataTreeListItemValueFieldName]);
                    vm.addRange((parent.$original || parent).children
                        .filter(child => child != item)
                        .map(child => ({
                        [viewModelItemValueFieldName]: child[dataTreeListItemValueFieldName],
                        [viewModelItemTextFieldName]: child[dataTreeListItemTextFieldName]
                    })));
                    if (parentIndex != -1) {
                        vm.removeAt(parentIndex);
                        break;
                    }
                    item = parent;
                    parent = item.parent;
                }
            }
        }
    }
};
OpalTreeList.selectionControlChangeEvents = [
    opal_checkbox_1.OpalCheckbox.EVENT_CHANGE,
    opal_select_1.OpalSelectOption.EVENT_CHANGE
];
OpalTreeList.defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
OpalTreeList.defaultViewModelItemSchema = defaultVMItemSchema;
__decorate([
    rionite_1.Param('dataTreeList'),
    __metadata("design:type", Object)
], OpalTreeList.prototype, "paramDataTreeList", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", String)
], OpalTreeList.prototype, "dataTreeListKeypath", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultDataTreeListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeList.prototype, "dataTreeListItemSchema", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalTreeList.prototype, "viewModel", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultVMItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeList.prototype, "viewModelItemSchema", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTreeList.prototype, "query", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalTreeList.prototype, "comparableQuery", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OpalTreeList.prototype, "filteredDataTreeList", null);
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
        template: template_rnt_1.default
    })
], OpalTreeList);
exports.OpalTreeList = OpalTreeList;
OpalTreeList.prototype._getListItemContext = _getListItemContext_1.default;


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
const opal_button_1 = __webpack_require__(1);
const rionite_1 = __webpack_require__(13);
const _getListItemContext_1 = __webpack_require__(15);
__webpack_require__(16);
const template_rnt_1 = __webpack_require__(17);
let OpalTreeListItem = class OpalTreeListItem extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.opened = false;
    }
    initialize() {
        this.dataTreeListItem = this.filteredDataTreeList.get(this.indexpath);
        this._dataTreeListItemValueFieldName = this.dataTreeListItemValueFieldName;
        this._dataTreeListItemTextFieldName = this.dataTreeListItemTextFieldName;
        this._viewModelItemValueFieldName = this.viewModelItemValueFieldName;
        this._viewModelItemTextFieldName = this.viewModelItemTextFieldName;
    }
};
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeListItem.prototype, "dataTreeList", void 0);
__decorate([
    rionite_1.Param({ required: true }),
    __metadata("design:type", Object)
], OpalTreeListItem.prototype, "filteredDataTreeList", void 0);
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalTreeListItem.prototype, "dataTreeListItemValueFieldName", void 0);
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalTreeListItem.prototype, "dataTreeListItemTextFieldName", void 0);
__decorate([
    rionite_1.Param({ required: true }),
    __metadata("design:type", Object)
], OpalTreeListItem.prototype, "viewModel", void 0);
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalTreeListItem.prototype, "viewModelItemValueFieldName", void 0);
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalTreeListItem.prototype, "viewModelItemTextFieldName", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        required: true,
        readonly: true
    }),
    __metadata("design:type", Array)
], OpalTreeListItem.prototype, "indexpath", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTreeListItem.prototype, "query", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTreeListItem.prototype, "opened", void 0);
OpalTreeListItem = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTreeListItem',
        template: template_rnt_1.default,
        events: {
            btnToggleChildren: {
                [opal_button_1.OpalButton.EVENT_CHANGE](evt) {
                    this.opened = evt.target.checked;
                }
            }
        }
    })
], OpalTreeListItem);
exports.OpalTreeListItem = OpalTreeListItem;
OpalTreeListItem.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cellx_1 = __webpack_require__(8);
function isItemSelected(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    do {
        if (vm.find(vmItem => vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName])) {
            return true;
        }
    } while ((item = item.parent));
    return false;
}
function isItemIndeterminate(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    return (!!item.children.length &&
        !isItemSelected(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
        item.children.some(child => !!vm.find(vmItem => vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]) ||
            isItemIndeterminate(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName)));
}
function _getListItemContext(context, slot) {
    let $item = slot.$context.$item;
    return cellx_1.define({
        __proto__: context,
        $item
    }, {
        $selected: new cellx_1.Cell(function () {
            this.dataTreeList;
            return isItemSelected($item.$original || $item, this.viewModel, this._dataTreeListItemValueFieldName, this._viewModelItemValueFieldName);
        }, { context: this }),
        $indeterminate: new cellx_1.Cell(function () {
            this.dataTreeList;
            return isItemIndeterminate($item.$original || $item, this.viewModel, this._dataTreeListItemValueFieldName, this._viewModelItemValueFieldName);
        }, { context: this })
    });
}
exports.default = _getListItemContext;


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div:head {\nOpalButton:btnToggleChildren (viewType=clean, checkable, checked={opened}) {\nOpalIcon:btnToggleChildrenIcon (name=chevronRight)\n}\nspan:contentSlotWrapper {\nRnSlot:contentSlot (cloneContent)\n}\n}\ndiv:children (@if=dataTreeListItem.children.length) {\nOpalTreeListItem:item (\n@for=$item in dataTreeListItem.children,\ndataTreeList={dataTreeList},\nfilteredDataTreeList={filteredDataTreeList},\ndataTreeListItemValueFieldName={_dataTreeListItemValueFieldName},\ndataTreeListItemTextFieldName={_dataTreeListItemTextFieldName},\nviewModel={viewModel},\nviewModelItemValueFieldName={_viewModelItemValueFieldName},\nviewModelItemTextFieldName={_viewModelItemTextFieldName},\nindexpath='[{indexpath},{$index}]',\nquery={query},\nopened={query |bool },\nnestingLevel={indexpath.length},\nhasChildren='{$item.children.length |gt(0) }'\n) {\nRnSlot (cloneContent, getContext={_getListItemContext})\n}\n}");

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@IfThen (listShown) {\nOpalTreeListItem:item (\n@for=$item in filteredDataTreeList,\ndataTreeList={dataTreeList},\nfilteredDataTreeList={filteredDataTreeList},\ndataTreeListItemValueFieldName={_dataTreeListItemValueFieldName},\ndataTreeListItemTextFieldName={_dataTreeListItemTextFieldName},\nviewModel={viewModel},\nviewModelItemValueFieldName={_viewModelItemValueFieldName},\nviewModelItemTextFieldName={_viewModelItemTextFieldName},\nindexpath=[{$index}],\nquery={query},\nopened={query |bool },\nnestingLevel=0,\nhasChildren='{$item.children.length |gt(0) }'\n) {\nRnSlot (cloneContent, getContext={_getListItemContext}) {\nOpalCheckbox:selectionControl (checked={$selected}, indeterminate={$indeterminate}) {\n'{$item |key(_dataTreeListItemTextFieldName) }'\n}\n}\n}\nRnSlot:nothingFoundSlot (@unless=filteredDataTreeList.length, for=nothingFound) {\nspan:nothingFound {\nspan:nothingFoundMessage {\n'{\"Ничего не найдено\" |t }'\n}\n}\n}\n}\nOpalLoader:loader (@unless=listShown, shown)");

/***/ })
/******/ ]);
});