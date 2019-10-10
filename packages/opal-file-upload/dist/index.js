(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("@riim/opal-loader"), require("reflect-metadata"), require("@riim/escape-regexp"), require("@riim/get-uid"), require("@riim/gettext"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "@riim/opal-loader", "reflect-metadata", "@riim/escape-regexp", "@riim/get-uid", "@riim/gettext", "@riim/next-tick", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-file-upload"] = factory(require("@riim/opal-icon"), require("@riim/opal-loader"), require("reflect-metadata"), require("@riim/escape-regexp"), require("@riim/get-uid"), require("@riim/gettext"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-file-upload"] = factory(root["@riim/opal-icon"], root["@riim/opal-loader"], root["reflect-metadata"], root["@riim/escape-regexp"], root["@riim/get-uid"], root["@riim/gettext"], root["@riim/next-tick"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__) {
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
__export(__webpack_require__(4));


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
const escape_regexp_1 = __webpack_require__(5);
const get_uid_1 = __webpack_require__(6);
const gettext_1 = __webpack_require__(7);
const next_tick_1 = __webpack_require__(8);
const cellx_1 = __webpack_require__(9);
const cellx_decorators_1 = __webpack_require__(10);
const rionite_1 = __webpack_require__(11);
__webpack_require__(12);
const template_rnt_1 = __webpack_require__(13);
let dragEl = null;
let OpalFileUpload = class OpalFileUpload extends rionite_1.BaseComponent {
    get files() {
        return this.dataList.map(fileData => fileData.file).filter(file => file);
    }
    initialize() {
        if (this.allowType) {
            this._reFileType = RegExp(`^(?:${this.allowType
                .split(',')
                .map(type => escape_regexp_1.escapeRegExp(type.trim()))
                .join('|')
                .split('\\*')
                .join('.*')})$`);
        }
    }
    ready() {
        this.fileListEl = this.$('fileList');
        this.dropZoneEl = this.$('dropZone');
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
    _onDropZoneClick() {
        if (this.errorMessage) {
            this.errorMessage = null;
        }
        else {
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
        let targetFileDataIndex = this.dataList.findIndex(fileData => get_uid_1.getUID(fileData) == targetFileDataUID);
        let dragElFileDataIndex = this.dataList.findIndex(fileData => get_uid_1.getUID(fileData) == dragElFileDataUID);
        let targetFileData = this.dataList.get(targetFileDataIndex);
        cellx_1.EventEmitter.transact(() => {
            this.dataList.set(targetFileDataIndex, this.dataList.get(dragElFileDataIndex));
            this.dataList.set(dragElFileDataIndex, targetFileData);
        });
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
        let size = this.dataList.reduce((size, file) => size + (file.size || 0), 0);
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
            this.dataList.add(fileData);
            let reader = new FileReader();
            reader.addEventListener('load', evt => {
                this.dataList.replace(fileData, Object.assign(Object.assign({}, fileData), { dataURI: `data:${file.type};base64,${btoa(evt.target.result)}` }));
            });
            reader.readAsBinaryString(file);
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
};
__decorate([
    rionite_1.Param('dataList', { default: new cellx_1.ObservableList() }),
    __metadata("design:type", Object)
], OpalFileUpload.prototype, "dataList", void 0);
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
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], OpalFileUpload.prototype, "files", null);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalFileUpload.prototype, "errorMessage", void 0);
__decorate([
    rionite_1.Listen('change', 'filesInput'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onFilesInputChange", null);
__decorate([
    rionite_1.Listen('dragenter', 'dropZone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onDropZoneDragEnter", null);
__decorate([
    rionite_1.Listen('dragover', 'dropZone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onDropZoneDragOver", null);
__decorate([
    rionite_1.Listen('dragleave', 'dropZone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onDropZoneDragLeave", null);
__decorate([
    rionite_1.Listen('drop', 'dropZone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onDropZoneDrop", null);
__decorate([
    rionite_1.Listen('click', 'dropZone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onDropZoneClick", null);
__decorate([
    rionite_1.Listen('dragstart', '@fileListEl'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DragEvent]),
    __metadata("design:returntype", void 0)
], OpalFileUpload.prototype, "_onFileListDragStart", null);
OpalFileUpload = __decorate([
    rionite_1.Component({
        elementIs: 'OpalFileUpload',
        template: template_rnt_1.default,
        domEvents: {
            btnRemoveFile: {
                click(_evt, context) {
                    this.dataList.remove(context.fileData);
                }
            }
        }
    })
], OpalFileUpload);
exports.OpalFileUpload = OpalFileUpload;


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

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalFileUpload{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;min-width:400px;border:1px solid #ccc;color:#4d4d4d;font-size:1rem;line-height:1.5}.OpalFileUpload .OpalFileUpload__fileList{margin:0;padding:0;list-style:none}.OpalFileUpload .OpalFileUpload__file{position:relative;margin-bottom:10px;padding:12px 52px 12px 20px;border-radius:3px;background:#f2f2f2;cursor:move}.OpalFileUpload .OpalFileUpload__file[ghost]{opacity:.4}.OpalFileUpload .OpalFileUpload__filePreviewWrapper{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-right:10px;width:48px;height:48px;vertical-align:middle;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.OpalFileUpload .OpalFileUpload__fileLoader{border:0}.OpalFileUpload .OpalFileUpload__filePreview{max-width:100%;max-height:100%;border:0;border-radius:3px}.OpalFileUpload .OpalFileUpload__fileIcon{width:36px;height:36px;stroke:currentColor;stroke-linecap:butt;stroke-linejoin:miter;fill:none}.OpalFileUpload .OpalFileUpload__fileText{vertical-align:middle;font-weight:700}.OpalFileUpload .OpalFileUpload__btnRemoveFile{position:absolute;top:0;right:10px;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;margin:auto;width:42px;height:42px;border:0;background:0 0;opacity:.5;cursor:pointer;-webkit-transition:opacity .1s;-o-transition:opacity .1s;transition:opacity .1s;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.OpalFileUpload .OpalFileUpload__btnRemoveFile:hover{opacity:1}.OpalFileUpload .OpalFileUpload__btnRemoveFile:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalFileUpload .OpalFileUpload__btnRemoveFileIcon{display:block;width:24px;height:24px;stroke:currentColor;stroke-linecap:butt;stroke-linejoin:miter;fill:none}.OpalFileUpload .OpalFileUpload__dropZone{position:relative;padding:25px;border:2px dashed #999;border-radius:5px;background:#f2f2f2;color:gray;text-align:center;cursor:pointer}.OpalFileUpload .OpalFileUpload__dropZone[hovering]{border-color:#168cf3}.OpalFileUpload .OpalFileUpload__dropZone[hovering] .OpalFileUpload__dropZoneText{pointer-events:none}.OpalFileUpload .OpalFileUpload__dropZone[error] .OpalFileUpload__dropZoneErrorMessageWrapper{display:block}.OpalFileUpload .OpalFileUpload__dropZoneErrorMessageWrapper{position:absolute;top:0;right:0;bottom:0;left:0;display:none;border-radius:inherit;background:inherit;white-space:nowrap;font-size:0}.OpalFileUpload .OpalFileUpload__dropZoneErrorMessageWrapper::after{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalFileUpload .OpalFileUpload__dropZoneErrorMessage{color:red;vertical-align:middle;font-size:1rem}.OpalFileUpload .OpalFileUpload__btnSelectFiles{display:inline;padding:0;border:0;background:0 0;color:#168cf3;font:inherit;cursor:inherit}.OpalFileUpload .OpalFileUpload__filesInput{display:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul:fileList {\nli:file (@for=fileData in dataList, draggable=true, data-file-data-uid={fileData |uid }) {\ndiv:filePreviewWrapper {\n@IfThen (if='fileData |_isImage') {\nOpalLoader:fileLoader (\n@unless='fileData.url |or(fileData.dataURI)',\nsize=s,\nshown\n)\nimg:filePreview (\n@if='fileData.url |or(fileData.dataURI)',\nsrc='{fileData.url |or(fileData.dataURI)}',\ndraggable=false\n)\n}\nsvg:fileIcon (@unless='fileData |_isImage', stroke-width=2) {\nuse (xlink:href=#OpalIcon__iconFile)\n}\n}\nspan:fileText {\n'{fileData.name}'\n}\nbutton:btnRemoveFile (type=button) {\nsvg:btnRemoveFileIcon (stroke-width=2) {\nuse (xlink:href=#OpalIcon__iconCross)\n}\n}\n}\n}\ndiv:dropZone (error={errorMessage |bool }) {\ndiv:dropZoneErrorMessageWrapper {\nspan:dropZoneErrorMessage {\n'{errorMessage}'\n}\n}\nspan:dropZoneText {\n'{\"Перетащите файлы в эту область или\" |t }'\nbr\nbutton:btnSelectFiles (type=button) {\n'{\"нажмите для выбора в проводнике\" |t }'\n}\n}\n}\ninput:filesInput (type=file, multiple)");

/***/ })
/******/ ]);
});