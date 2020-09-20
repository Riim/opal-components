(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-components-common"), require("cellx"), require("@riim/opal-button"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-components-common", "cellx", "@riim/opal-button", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-share-button"] = factory(require("@riim/opal-components-common"), require("cellx"), require("@riim/opal-button"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-share-button"] = factory(root["@riim/opal-components-common"], root["cellx"], root["@riim/opal-button"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_MYNt__, __WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_X6DG__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "Zm1D");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5LC3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUrl = void 0;
const hasOwn = Object.prototype.hasOwnProperty;
function makeUrl(url, data) {
    let data_ = {};
    for (let key in data) {
        if (hasOwn.call(data, key)) {
            data_[key] = encodeURIComponent(data[key]);
        }
    }
    return url.replace(/\[([^\]]+)\]/g, (match, name) => (name in data_ ? data_[name] : match));
}
exports.makeUrl = makeUrl;


/***/ }),

/***/ "AjU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["content"],,,"RnSlot",[,[[,"getContext","{_getContentContext}"]]],]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "BNuO":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalShareButton.OpalButton[view_type=default][service=facebook]{background:#4172b8}.OpalShareButton.OpalButton[view_type=default][service=facebook]:hover{background-color:#5583c3}.OpalShareButton.OpalButton[view_type=default][service=facebook]:active{background-color:#3965a2}.OpalShareButton.OpalButton[view_type=default][service=linkedin]{background:#0077b5}.OpalShareButton.OpalButton[view_type=default][service=linkedin]:hover{background-color:#0081c7}.OpalShareButton.OpalButton[view_type=default][service=linkedin]:active{background-color:#00679e}.OpalShareButton.OpalButton[view_type=default][service=odnoklassniki]{background:#f4731c}.OpalShareButton.OpalButton[view_type=default][service=odnoklassniki]:hover{background-color:#f68337}.OpalShareButton.OpalButton[view_type=default][service=odnoklassniki]:active{background-color:#e5620b}.OpalShareButton.OpalButton[view_type=default][service=pinterest]{background:#bd081c}.OpalShareButton.OpalButton[view_type=default][service=pinterest]:hover{background-color:#d70921}.OpalShareButton.OpalButton[view_type=default][service=pinterest]:active{background-color:#a6071a}.OpalShareButton.OpalButton[view_type=default][service=telegram]{background:#2ca5e0}.OpalShareButton.OpalButton[view_type=default][service=telegram]:hover{background-color:#49b0e4}.OpalShareButton.OpalButton[view_type=default][service=telegram]:active{background-color:#1f95d1}.OpalShareButton.OpalButton[view_type=default][service=twitter]{background:#1da1f2}.OpalShareButton.OpalButton[view_type=default][service=twitter]:hover{background-color:#39acf3}.OpalShareButton.OpalButton[view_type=default][service=twitter]:active{background-color:#0d91e3}.OpalShareButton.OpalButton[view_type=default][service=viber]{background:#665cac}.OpalShareButton.OpalButton[view_type=default][service=viber]:hover{background-color:#7a71b7}.OpalShareButton.OpalButton[view_type=default][service=viber]:active{background-color:#594f9c}.OpalShareButton.OpalButton[view_type=default][service=vkontakte]{background:#4680c2}.OpalShareButton.OpalButton[view_type=default][service=vkontakte]:hover{background-color:#5e90c9}.OpalShareButton.OpalButton[view_type=default][service=vkontakte]:active{background-color:#3b71b0}.OpalShareButton.OpalButton[view_type=default][service=whatsapp]{background:#25d366}.OpalShareButton.OpalButton[view_type=default][service=whatsapp]:hover{background-color:#3cdd77}.OpalShareButton.OpalButton[view_type=default][service=whatsapp]:active{background-color:#21ba59}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "HI1D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const getScript_1 = __webpack_require__("k1s5");
const makeUrl_1 = __webpack_require__("5LC3");
const vkontakteCallbacks = [];
window.VK = {
    Share: {
        count: (index, counter) => {
            vkontakteCallbacks[index](counter);
        }
    }
};
const odnoklassnikiCallbacks = [];
window.ODKL = {
    updateCount: (index, counter) => {
        odnoklassnikiCallbacks[index](counter);
    }
};
exports.services = {
    facebook: {
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=[url]',
        popupWidth: 600,
        popupHeight: 500,
        counterUrl: 'https://graph.facebook.com/?id=[url]&fields=og_object%7Bengagement%7Bcount%7D%7D&callback=?',
        extractCounter: (data) => (data.og_object && data.og_object.engagement && data.og_object.engagement.count) || 0
    },
    linkedin: {
        shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=[url]&title=[title]',
        popupWidth: 600,
        popupHeight: 500
    },
    odnoklassniki: {
        shareUrl: 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=[url]',
        popupWidth: 588,
        popupHeight: 332,
        counterUrl: 'https://connect.ok.ru/dk?st.cmd=extLike&ref=[url]&uid=[index]',
        getCounter: url => new Promise(resolve => {
            odnoklassnikiCallbacks.push(counter => {
                resolve(isNaN(counter) ? counter : +counter);
            });
            getScript_1.getScript(makeUrl_1.makeUrl(url, { index: odnoklassnikiCallbacks.length - 1 }));
        })
    },
    pinterest: {
        shareUrl: 'https://pinterest.com/pin/create/button/?url=[url]&description=[title]',
        popupWidth: 750,
        popupHeight: 680,
        counterUrl: 'https://api.pinterest.com/v1/urls/count.json?url=[url]&callback=?',
        extractCounter: (counter) => counter.count
    },
    telegram: {
        // shareUrl: "tg://msg?text=[title]%0A[url]",
        // shareUrl: 'https://tglink.me/share/url?url=[url]',
        shareUrl: 'https://telegram.me/share/url?url=[url]',
        popupWidth: 600,
        popupHeight: 500
    },
    twitter: {
        shareUrl: 'https://twitter.com/intent/tweet?url=[url]&text=[title]',
        popupWidth: 600,
        popupHeight: 450,
        fixUrlData: (data) => {
            if (!/[\.\?:\-–—]\s*$/.test(data.title)) {
                data.title += ':';
            }
        }
    },
    viber: {
        shareUrl: 'viber://forward?text=[title]%0D%0A%0D%0A[url]'
    },
    vkontakte: {
        shareUrl: 'https://vk.com/share.php?url=[url]&title=[title]',
        popupWidth: 650,
        popupHeight: 570,
        counterUrl: 'https://vk.com/share.php?act=count&url=[url]&index=[index]',
        getCounter: url => new Promise(resolve => {
            vkontakteCallbacks.push(counter => {
                resolve(counter);
            });
            getScript_1.getScript(makeUrl_1.makeUrl(url, { index: vkontakteCallbacks.length - 1 }));
        })
    },
    whatsapp: {
        shareUrl: 'whatsapp://send?text=[title]%0D%0A%0D%0A[url]'
    }
};


/***/ }),

/***/ "IsyP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalShareButton = void 0;
const opal_button_1 = __webpack_require__("X6DG");
const opal_components_common_1 = __webpack_require__("MYNt");
const cellx_1 = __webpack_require__("P7z7");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("BNuO");
const jsonp_1 = __webpack_require__("eRDw");
const makeUrl_1 = __webpack_require__("5LC3");
const openPopup_1 = __webpack_require__("zSer");
const services_1 = __webpack_require__("HI1D");
const template_rnt_1 = __webpack_require__("AjU9");
let OpalShareButton = class OpalShareButton extends opal_button_1.OpalButton {
    get _url() {
        return (this.url ||
            window.location.href.substr(0, window.location.href.length - window.location.hash.length));
    }
    initialize() {
        this._service = services_1.services[this.service];
    }
    async ready() {
        let service = this._service;
        if (service.getCounter) {
            this.counter = await service.getCounter(makeUrl_1.makeUrl(service.counterUrl, { url: this._url }));
        }
        else if (service.counterUrl) {
            jsonp_1.jsonp(makeUrl_1.makeUrl(service.counterUrl, { url: this._url }), (data) => {
                this.counter = service.extractCounter(data);
            });
        }
    }
    click() {
        let service = this._service;
        let urlData = {
            title: document.title,
            url: this._url
        };
        if (service.fixUrlData) {
            service.fixUrlData(urlData);
        }
        let url = makeUrl_1.makeUrl(service.shareUrl, {
            title: urlData.title,
            url: urlData.url
        });
        if (service.popupWidth) {
            openPopup_1.openPopup(url, this.service, service.popupWidth, service.popupHeight);
        }
        else {
            opal_components_common_1.clickLink(url);
        }
        return this;
    }
    _getContentContext(context) {
        return cellx_1.define({ __proto__: context }, {
            $counter: new cellx_1.Cell(function () {
                return this.counter;
            }, { context: this })
        });
    }
};
__decorate([
    rionite_1.Param({ type: String, required: true, readonly: true })
], OpalShareButton.prototype, "service", void 0);
__decorate([
    rionite_1.Param(String)
], OpalShareButton.prototype, "url", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalShareButton.prototype, "counter", void 0);
OpalShareButton = __decorate([
    rionite_1.Component({
        elementIs: 'OpalShareButton',
        template: template_rnt_1.default
    })
], OpalShareButton);
exports.OpalShareButton = OpalShareButton;


/***/ }),

/***/ "MYNt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_MYNt__;

/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "X6DG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X6DG__;

/***/ }),

/***/ "Zm1D":
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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("IsyP"), exports);


/***/ }),

/***/ "eRDw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonp = void 0;
if (!window.__ShareButtonCallbacks) {
    window.__ShareButtonCallbacks = {};
}
let idCounter = 0;
function jsonp(url, cb) {
    let callbackName = 'callback' + ++idCounter;
    let disposed = false;
    let script = document.createElement('script');
    script.onload = script.onerror = () => {
        setTimeout(dispose, 1);
    };
    script.src = url.replace(/(\?|&)callback=\?/, '$1callback=__ShareButtonCallbacks.' + callbackName);
    window.__ShareButtonCallbacks[callbackName] = (...args) => {
        dispose();
        cb(...args);
    };
    function dispose() {
        if (disposed) {
            return;
        }
        disposed = true;
        window.__ShareButtonCallbacks[callbackName] = undefined;
        script.onload = script.onerror = null;
        document.head.removeChild(script);
    }
    document.head.appendChild(script);
}
exports.jsonp = jsonp;


/***/ }),

/***/ "k1s5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getScript = void 0;
function getScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
    document.head.removeChild(script);
}
exports.getScript = getScript;


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ }),

/***/ "zSer":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openPopup = void 0;
function openPopup(url, winId, width = 600, height = 400) {
    let left = Math.round(screen.width / 2 - width / 2);
    let top = 0;
    if (screen.height > height) {
        top = Math.round(screen.height / 3 - height / 2);
    }
    let win = window.open(url, winId, `left=${left},top=${top},width=${width},height=${height},personalbar=no,toolbar=no,scrollbars=yes,resizable=yes`);
    if (win) {
        win.focus();
    }
    else {
        location.href = url;
    }
    return win;
}
exports.openPopup = openPopup;


/***/ })

/******/ });
});