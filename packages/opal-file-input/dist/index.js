(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-loader"), require("@riim/opal-components-common"), require("cellx"), require("@riim/next-tick"), require("@riim/opal-button"), require("@riim/opal-icon"), require("@riim/next-uid"), require("@riim/gettext"), require("cellx-collections"), require("rionite"), require("@riim/escape-regexp"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-loader", "@riim/opal-components-common", "cellx", "@riim/next-tick", "@riim/opal-button", "@riim/opal-icon", "@riim/next-uid", "@riim/gettext", "cellx-collections", "rionite", "@riim/escape-regexp", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-file-input"] = factory(require("@riim/opal-loader"), require("@riim/opal-components-common"), require("cellx"), require("@riim/next-tick"), require("@riim/opal-button"), require("@riim/opal-icon"), require("@riim/next-uid"), require("@riim/gettext"), require("cellx-collections"), require("rionite"), require("@riim/escape-regexp"), require("cellx-decorators"));
	else
		root["@riim/opal-file-input"] = factory(root["@riim/opal-loader"], root["@riim/opal-components-common"], root["cellx"], root["@riim/next-tick"], root["@riim/opal-button"], root["@riim/opal-icon"], root["@riim/next-uid"], root["@riim/gettext"], root["cellx-collections"], root["rionite"], root["@riim/escape-regexp"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_BLMt__, __WEBPACK_EXTERNAL_MODULE_MYNt__, __WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_WTz___, __WEBPACK_EXTERNAL_MODULE_X6DG__, __WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_cIp5__, __WEBPACK_EXTERNAL_MODULE_eaeG__, __WEBPACK_EXTERNAL_MODULE_oHAe__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_xFbw__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "z/d0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+AbN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"ul",["fileList"],[,[[1,"if","multiple"]]],[[1,,"li",["file"],[,[[1,"for","fileData in dataList"],[,"draggable","true"],[,"data-file-data-uid","{fileData |uid }"]]],[[1,,"div",["filePreviewWrapper"],,[[1,1,"cond",,[,[[,"if","fileData |_isImage"]]],[[1,,"OpalLoader",["fileLoader"],[,[[1,"unless","fileData.url |or(fileData.dataURI)"],[,"size","s"],[,"shown",""]]],],[1,,"img",["filePreview"],[,[[1,"if","fileData.url |or(fileData.dataURI)"],[,"src","{fileData.url |or(fileData.dataURI)}"],[,"draggable","false"]]],]]],[1,,"svg",["fileIcon"],[,[[1,"unless","fileData |_isImage"],[,"stroke-width","2"]]],[[1,,"use",,[,[[,"xlink:href","#OpalIcon__iconFile"]]],]]]]],[1,,"span",["fileName"],,[[3,"{fileData.name}"]]],[1,,"button",["btnRemoveFile"],[,[[,"type","button"]]],[[1,,"svg",["btnRemoveFileIcon"],[,[[,"stroke-width","2"]]],[[1,,"use",,[,[[,"xlink:href","#OpalIcon__iconCross"]]],]]]]]]]]],[1,,"div",["dropZone"],[,[[,"error","{errorMessage |bool }"]]],[[1,,"div",["dropZoneErrorMessageWrapper"],[,[[1,"if","multiple"]]],[[1,,"span",["dropZoneErrorMessage"],,[[3,"{errorMessage}"]]]]],[1,,"span",["dropZoneContent"],,[[1,1,"cond",,[,[[,"if","multiple"]]],[[3,"{\"Перетащите файлы в эту область или\" |t }"],[1,,"br",,,],[1,,"button",["btnSelectFiles"],[,[[,"type","button"],[,"tabindex","{disabled |cond(-1, 0) }"]]],[[3,"{\"нажмите для выбора в проводнике\" |t }"]]]]],[1,,"OpalButton",["btnSelectFile"],[,[[1,"unless","multiple"],[,"size","s"],[,"tabIndex","{disabled |cond(-1, 0) }"]]],[[3,"{buttonText}"]]]]],[1,1,"cond",,[,[[,"unless","multiple"]]],[[1,,"div",["file2"],[,[[1,"if","dataList.length"]]],[[1,,"a",,[,[[1,"if","dataList |get(0) |key(\"url\")"],[,"href","{dataList |get(0) |key(\"url\") }"],[,"target","_blank"],[,"tabindex","{disabled |cond(-1, 0) }"]]],[[3,"{dataList |get(0) |key(\"name\") }"]]],[1,1,"cond",,[,[[,"unless","dataList |get(0) |key(\"url\")"]]],[[3,"{dataList |get(0) |key(\"name\") }"]]]]],[1,,"div",["placeholder"],[,[[1,"unless","dataList.length"]]],[[3,"{placeholder}"]]]]]]],[1,,"button",["btnClear"],[,[[1,"unless","multiple"],[,"type","button"],[,"shown","{dataList.length |bool }"],[,"tabindex","{disabled |cond(-1, 0) }"]]],[[1,,"OpalIcon",["btnClearIcon"],[,[[,"name","cross"]]],]]],[1,,"input",["filesInput"],[,[[,"type","file"],[,"multiple","{multiple}"]]],]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "BLMt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_BLMt__;

/***/ }),

/***/ "JRKk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalFileInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalFileInput = void 0;
const escape_regexp_1 = __webpack_require__("xFbw");
const gettext_1 = __webpack_require__("eaeG");
const next_tick_1 = __webpack_require__("WTz/");
const next_uid_1 = __webpack_require__("cIp5");
const opal_button_1 = __webpack_require__("X6DG");
const opal_components_common_1 = __webpack_require__("MYNt");
const cellx_1 = __webpack_require__("P7z7");
const cellx_collections_1 = __webpack_require__("oHAe");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("M9cn");
const template_rnt_1 = __webpack_require__("+AbN");
let dragEl = null;
let OpalFileInput = OpalFileInput_1 = class OpalFileInput extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.validator = null;
    }
    get files() {
        return this.dataList.map((fileData) => fileData.file).filter((file) => file);
    }
    initialize() {
        if (this.allowType) {
            this._reFileType = RegExp(`^(?:${this.allowType
                .split(',')
                .map((type) => escape_regexp_1.escapeRegExp(type.trim()))
                .join('|')
                .split('\\*')
                .join('.*')})$`);
        }
    }
    ready() {
        this.fileListEl = this.$('fileList');
        this.dropZoneEl = this.$('dropZone');
        this.btnSelectFile = this.$('btnSelectFile');
    }
    connected() {
        if (this.fileListEl) {
            this.listenTo(this.fileListEl, 'dragstart', this._onFileListDragStart);
        }
    }
    _onFilesInputChange(evt) {
        this._addFiles(evt.target.files);
        evt.target.value = '';
    }
    _onDropZoneDragEnter() {
        this.errorMessage = null;
        if (!dragEl) {
            this.dropZoneEl.setAttribute('hovering', '');
        }
    }
    _onDropZoneDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy';
    }
    _onDropZoneDragLeave() {
        this.dropZoneEl.removeAttribute('hovering');
    }
    _onDropZoneDrop(evt) {
        evt.preventDefault();
        this.dropZoneEl.removeAttribute('hovering');
        this._addFiles(evt.dataTransfer.files);
    }
    _onDropZoneClick(evt) {
        if (this.errorMessage) {
            this.errorMessage = null;
        }
        else if (this.multiple ||
            (evt.target.tagName != 'A' &&
                evt.target != this.btnSelectFile.element &&
                !opal_components_common_1.nodeContains(this.btnSelectFile.element, evt.target, this.element))) {
            this.$('filesInput').click();
        }
    }
    _onFileListDragStart(evt) {
        dragEl = evt.target;
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);
        this._fileListListening = this.listenTo(this.fileListEl, {
            dragenter: this._onFileListDragEnter,
            dragover: this._onFileListDragOver,
            drop: this._onFileListDrop,
            dragend: this._onFileListDragEnd
        });
        next_tick_1.nextTick(() => {
            // Без nextTick перетаскиваемый объект тоже будет иметь этот атрибут.
            dragEl.setAttribute('ghost', '');
        });
    }
    _onFileListDragEnter(evt) {
        let target = this._getFileElement(evt.target);
        if (!target || target === dragEl) {
            return;
        }
        let targetFileDataUID = target.dataset.fileDataUid;
        let dragElFileDataUID = dragEl.dataset.fileDataUid;
        let targetFileDataIndex = this.dataList.findIndex((fileData) => next_uid_1.getUID(fileData) == targetFileDataUID);
        let dragElFileDataIndex = this.dataList.findIndex((fileData) => next_uid_1.getUID(fileData) == dragElFileDataUID);
        let targetFileData = this.dataList.get(targetFileDataIndex);
        cellx_1.EventEmitter.transact(() => {
            this.dataList.set(targetFileDataIndex, this.dataList.get(dragElFileDataIndex));
            this.dataList.set(dragElFileDataIndex, targetFileData);
        });
        this.emit(OpalFileInput_1.EVENT_CHANGE);
    }
    _onFileListDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
    }
    _onFileListDrop(evt) {
        evt.preventDefault();
    }
    _onFileListDragEnd() {
        this._fileListListening.stop();
        dragEl.removeAttribute('ghost');
        dragEl = null;
    }
    _addFiles(files) {
        let sizeLimit = this.sizeLimit;
        let totalSizeLimit = this.totalSizeLimit;
        let reFileType = this._reFileType;
        let size = this.multiple
            ? this.dataList.reduce((size, file) => size + (file.size || 0), 0)
            : 0;
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
                return false;
            }
        }
        for (let i = 0, l = files.length; i < l; i++) {
            let file = files[i];
            let fileData = {
                name: file.name,
                file,
                size: file.size
            };
            if (!this.multiple) {
                this.dataList.clear();
            }
            this.dataList.add(fileData);
            let reader = new FileReader();
            reader.addEventListener('load', (evt) => {
                this.dataList.replace(fileData, Object.assign(Object.assign({}, fileData), { dataURI: `data:${file.type};base64,${btoa(evt.target.result)}` }));
            });
            reader.readAsBinaryString(file);
            this.emit(OpalFileInput_1.EVENT_CHANGE);
        }
        return true;
    }
    _getFileElement(node, stopEl = this.fileListEl) {
        let el = node.nodeType == Node.ELEMENT_NODE ? node : node.parentElement;
        for (; el != stopEl; el = el.parentElement) {
            if (el.dataset.fileDataUid) {
                return el;
            }
        }
        return null;
    }
    _isImage(fileData) {
        if (fileData.file && fileData.file.type.startsWith('image/')) {
            return true;
        }
        if (fileData.url && /\.(gif|jpeg|jpg|png|svg)$/.test(fileData.url)) {
            return true;
        }
        return false;
    }
    clear() {
        this.dataList.clear();
        return this;
    }
    focus() {
        (this.btnSelectFile || this.$('btnSelectFiles')).focus();
        return this;
    }
    blur() {
        (this.btnSelectFile || this.$('btnSelectFiles')).blur();
        return this;
    }
    enable() {
        this.disabled = false;
        return this;
    }
    disable() {
        this.disabled = true;
        return this;
    }
    validate() {
        return !this.validator || this.validator.validate();
    }
};
OpalFileInput.EVENT_CHANGE = Symbol('change');
OpalFileInput.EVENT_CLEAR = Symbol('clear');
__decorate([
    rionite_1.Param({ type: Boolean, readonly: true })
], OpalFileInput.prototype, "multiple", void 0);
__decorate([
    rionite_1.Param({ default: new cellx_collections_1.ObservableList() })
], OpalFileInput.prototype, "dataList", void 0);
__decorate([
    rionite_1.Param({ type: String, readonly: true })
], OpalFileInput.prototype, "allowType", void 0);
__decorate([
    rionite_1.Param(Number)
], OpalFileInput.prototype, "sizeLimit", void 0);
__decorate([
    rionite_1.Param(Number)
], OpalFileInput.prototype, "totalSizeLimit", void 0);
__decorate([
    rionite_1.Param({ default: gettext_1.pt('OpalFileInput#buttonText', 'Выбрать файл') })
], OpalFileInput.prototype, "buttonText", void 0);
__decorate([
    rionite_1.Param({ default: gettext_1.pt('OpalFileInput#placeholder', 'Не выбрано') })
], OpalFileInput.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalFileInput.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalFileInput.prototype, "files", null);
__decorate([
    cellx_decorators_1.Observable
], OpalFileInput.prototype, "errorMessage", void 0);
__decorate([
    rionite_1.Listen('change', 'filesInput')
], OpalFileInput.prototype, "_onFilesInputChange", null);
__decorate([
    rionite_1.Listen('dragenter', 'dropZone')
], OpalFileInput.prototype, "_onDropZoneDragEnter", null);
__decorate([
    rionite_1.Listen('dragover', 'dropZone')
], OpalFileInput.prototype, "_onDropZoneDragOver", null);
__decorate([
    rionite_1.Listen('dragleave', 'dropZone')
], OpalFileInput.prototype, "_onDropZoneDragLeave", null);
__decorate([
    rionite_1.Listen('drop', 'dropZone')
], OpalFileInput.prototype, "_onDropZoneDrop", null);
__decorate([
    rionite_1.Listen('click', 'dropZone')
], OpalFileInput.prototype, "_onDropZoneClick", null);
OpalFileInput = OpalFileInput_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalFileInput',
        template: template_rnt_1.default,
        events: {
            btnSelectFile: {
                [opal_button_1.OpalButton.EVENT_CLICK]() {
                    this.$('filesInput').click();
                }
            }
        },
        domEvents: {
            btnRemoveFile: {
                click(evt, context) {
                    evt.preventDefault();
                    this.dataList.remove(context.fileData);
                    this.emit(OpalFileInput_1.EVENT_CHANGE);
                }
            },
            btnClear: {
                click(evt) {
                    evt.preventDefault();
                    this.dataList.clear();
                    this.btnSelectFile.focus();
                    this.emit(OpalFileInput_1.EVENT_CLEAR);
                    this.emit(OpalFileInput_1.EVENT_CHANGE);
                }
            }
        }
    })
], OpalFileInput);
exports.OpalFileInput = OpalFileInput;


/***/ }),

/***/ "M9cn":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalFileInput{position:relative;width:400px}.OpalFileInput:not([multiple]){display:inline-block}.OpalFileInput[multiple]{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;border:1px solid var(--grayColor800, hsl(0,0%,80%));border-radius:3px;color:var(--grayColor300, hsl(0,0%,30%));font-size:1rem;line-height:1.5}.OpalFileInput .OpalFileInput__fileList{margin:0;padding:0;list-style:none}.OpalFileInput .OpalFileInput__file{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:10px;padding:12px 52px 12px 78px;min-height:72px;border-radius:3px;background:var(--grayColor950, hsl(0,0%,95%));cursor:move;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.OpalFileInput .OpalFileInput__file[ghost]{opacity:.4}.OpalFileInput .OpalFileInput__filePreviewWrapper{position:absolute;top:0;bottom:0;left:20px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:auto;width:48px;height:48px;vertical-align:middle;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.OpalFileInput .OpalFileInput__fileLoader{border:0}.OpalFileInput .OpalFileInput__filePreview{max-width:100%;max-height:100%;border:0;border-radius:3px}.OpalFileInput .OpalFileInput__fileIcon{width:36px;height:36px;stroke:currentColor;stroke-linecap:butt;stroke-linejoin:miter;fill:none}.OpalFileInput .OpalFileInput__fileName{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-weight:700}.OpalFileInput .OpalFileInput__btnRemoveFile{position:absolute;top:0;right:10px;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;margin:auto;width:42px;height:42px;border:0;background:0 0;opacity:.5;cursor:pointer;-webkit-transition:opacity .1s;-o-transition:opacity .1s;transition:opacity .1s;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.OpalFileInput .OpalFileInput__btnRemoveFile:hover{opacity:1}.OpalFileInput .OpalFileInput__btnRemoveFile:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalFileInput .OpalFileInput__btnRemoveFileIcon{display:block;width:24px;height:24px;stroke:currentColor;stroke-linecap:butt;stroke-linejoin:miter;fill:none}.OpalFileInput .OpalFileInput__dropZone{cursor:pointer;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear}.OpalFileInput .OpalFileInput__dropZone:hover .OpalFileInput__placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalFileInput .OpalFileInput__dropZone[hovering]{border-color:var(--primaryColor500, hsl(208,93%,50%))}.OpalFileInput .OpalFileInput__dropZone[hovering] .OpalFileInput__dropZoneContent{pointer-events:none}.OpalFileInput .OpalFileInput__dropZone[hovering] .OpalFileInput__placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalFileInput .OpalFileInput__dropZoneErrorMessageWrapper{position:absolute;top:0;right:0;bottom:0;left:0;display:none;border-radius:inherit;background:inherit;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.OpalFileInput .OpalFileInput__dropZoneErrorMessage{color:var(--dangerColor400, hsl(5,90%,48.4%))}.OpalFileInput .OpalFileInput__btnSelectFiles{display:inline;padding:0;border:0;background:0 0;color:var(--primaryColor500, hsl(208,93%,50%));font:inherit;cursor:inherit}.OpalFileInput .OpalFileInput__btnSelectFile{margin-right:10px}.OpalFileInput .OpalFileInput__file2{display:inline-block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.OpalFileInput .OpalFileInput__file2 a{color:var(--primaryColor500, hsl(208,93%,50%))}.OpalFileInput .OpalFileInput__placeholder{display:inline-block;color:var(--textColor650, hsl(208,10%,65%));-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalFileInput:not([multiple]) .OpalFileInput__dropZone{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 36px 6px 12px;width:100%;border:1px solid var(--grayColor700, hsl(0,0%,70%));border-top-color:var(--grayColor650, hsl(0,0%,65%));border-bottom-color:var(--grayColor800, hsl(0,0%,80%));border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:var(--textColor50, hsl(208,10%,5%));text-decoration:none;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalFileInput[multiple] .OpalFileInput__dropZone{position:relative;padding:25px;border:2px dashed var(--grayColor600, hsl(0,0%,60%));border-radius:5px;background:var(--grayColor950, hsl(0,0%,95%));color:var(--grayColor500, hsl(0,0%,50%));text-align:center}.OpalFileInput[multiple] .OpalFileInput__dropZone[error] .OpalFileInput__dropZoneErrorMessageWrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.OpalFileInput .OpalFileInput__btnClear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:var(--grayColor500, hsl(0,0%,50%));cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalFileInput .OpalFileInput__btnClear[shown]{display:block}.OpalFileInput .OpalFileInput__btnClear:hover{color:var(--textColor50, hsl(208,10%,5%))}.OpalFileInput .OpalFileInput__btnClear:focus{outline:0}body:not(._noFocusHighlight) .OpalFileInput .OpalFileInput__btnClear:focus{outline:1px solid var(--primaryColor500, hsl(208,93%,50%))}.OpalFileInput .OpalFileInput__btnClear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalFileInput .OpalFileInput__btnClearIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalFileInput:hover:not([multiple]) .OpalFileInput__dropZone{border-color:var(--grayColor600, hsl(0,0%,60%));border-top-color:var(--grayColor550, hsl(0,0%,55%));border-bottom-color:var(--grayColor700, hsl(0,0%,70%))}.OpalFileInput:hover[multiple] .OpalFileInput__dropZone{border-color:var(--grayColor400, hsl(0,0%,40%))}.OpalFileInput[valid] .OpalFileInput__dropZone,.OpalFileInput[valid] .OpalFileInput__dropZone:focus{border-color:var(--successColor500, hsl(123,40%,48%))}.OpalFileInput[valid=no] .OpalFileInput__dropZone,.OpalFileInput[valid=no] .OpalFileInput__dropZone:focus{border-color:var(--dangerColor400, hsl(5,90%,48.4%))}.OpalFileInput:not([multiple]) .OpalFileInput__dropZone[error]{border-color:var(--dangerColor400, hsl(5,90%,48.4%))}.OpalFileInput[disabled]{opacity:.5;pointer-events:none}.OpalFileInput[disabled] .OpalFileInput__dropZone{background:var(--grayColor900, hsl(0,0%,90%))}.OpalFileInput .OpalFileInput__filesInput{display:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "MYNt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_MYNt__;

/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "WTz/":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_WTz___;

/***/ }),

/***/ "X6DG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X6DG__;

/***/ }),

/***/ "Y0hN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y0hN__;

/***/ }),

/***/ "cIp5":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cIp5__;

/***/ }),

/***/ "eaeG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_eaeG__;

/***/ }),

/***/ "oHAe":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_oHAe__;

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "xFbw":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_xFbw__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ }),

/***/ "z/d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("Y0hN");
__webpack_require__("BLMt");
__exportStar(__webpack_require__("JRKk"), exports);


/***/ })

/******/ });
});