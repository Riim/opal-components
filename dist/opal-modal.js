(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-modal"] = factory(require("rionite"));
	else
		root["opal-modal"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
	__webpack_require__(58);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(30);
	var openedModals = [];
	var documentListening;
	function onDocumentFocusIn(evt) {
	    if (!openedModals[0].element.contains(evt.target.parentNode)) {
	        openedModals[0].$('btn-close').focus();
	    }
	}
	function onDocumentKeyUp(evt) {
	    if (evt.keyCode == 27 /* Esc */) {
	        evt.preventDefault();
	        openedModals[0].close();
	    }
	}
	var OpalModal = (function (_super) {
	    __extends(OpalModal, _super);
	    function OpalModal() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalModal.prototype.ready = function () {
	        if (this.props['opened']) {
	            this._open();
	        }
	    };
	    OpalModal.prototype.elementDetached = function () {
	        this.close();
	    };
	    OpalModal.prototype.propertyChanged = function (name, value) {
	        if (name == 'opened') {
	            this[value ? '_open' : '_close']();
	        }
	    };
	    OpalModal.prototype.open = function () {
	        if (this.props['opened']) {
	            return false;
	        }
	        this.props['opened'] = true;
	        return true;
	    };
	    OpalModal.prototype.close = function () {
	        if (!this.props['opened']) {
	            return false;
	        }
	        this.props['opened'] = false;
	        return true;
	    };
	    OpalModal.prototype.toggle = function (value) {
	        return (this.props['opened'] = value === undefined ? !this.props['opened'] : value);
	    };
	    OpalModal.prototype._open = function () {
	        if (openedModals.length) {
	            openedModals[0].element.classList.add('_overlapped');
	        }
	        else {
	            documentListening = this.listenTo(document, {
	                focusin: onDocumentFocusIn,
	                keyup: onDocumentKeyUp
	            });
	            var body = document.body;
	            var initialBodyWidth = body.offsetWidth;
	            body.style.overflow = 'hidden';
	            if (initialBodyWidth < body.offsetWidth) {
	                body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
	            }
	        }
	        this.props['opened'] = true;
	        openedModals.unshift(this);
	        this.focus();
	    };
	    OpalModal.prototype._close = function () {
	        var index = openedModals.indexOf(this);
	        if (index) {
	            openedModals[index - 1].close();
	        }
	        this.props['opened'] = false;
	        openedModals.shift();
	        if (openedModals.length) {
	            openedModals[0].element.classList.remove('_overlapped');
	            openedModals[0].focus();
	        }
	        else {
	            documentListening.stop();
	            var bodyStyle = document.body.style;
	            bodyStyle.overflow = '';
	            bodyStyle.marginRight = '';
	        }
	    };
	    OpalModal.prototype.focus = function () {
	        if (this == openedModals[0]) {
	            document.body.classList.remove('_no-focus-highlight');
	            (this.$('focus') || this.$('btn-close')).focus();
	        }
	        return this;
	    };
	    return OpalModal;
	}(rionite_1.Component));
	OpalModal = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-modal',
	        props: {
	            opened: false
	        },
	        bemlTemplate: template,
	        events: {
	            ':element': {
	                click: function (evt) {
	                    var el = this.element;
	                    var windowEl = this.$('window');
	                    for (var node = evt.target; node != windowEl;) {
	                        if (node == el) {
	                            this.close();
	                            break;
	                        }
	                        node = node.parentNode;
	                        if (!node) {
	                            break;
	                        }
	                    }
	                }
	            },
	            'btn-close': {
	                click: function () {
	                    this.props['opened'] = false;
	                    this.emit('close');
	                }
	            }
	        }
	    })
	], OpalModal);
	exports.default = OpalModal;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "div/window {\nspan/btn-close-wrapper {\nbutton/btn-close\n}\nrt-content/content (cloning=no)\n}"

/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-modal{position:fixed;top:0;left:0;z-index:1000;display:none;overflow:auto;box-sizing:border-box;padding:20px 65px;width:100%;height:100%;background:rgba(0,0,0,.6);text-align:center;white-space:nowrap;cursor:default}.opal-modal::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-modal .opal-modal__window{display:inline-block;padding:30px;border-radius:3px;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.3);vertical-align:middle;text-align:left;white-space:normal}.opal-modal .opal-modal__btn-close-wrapper{position:absolute;top:10px;right:10px;width:45px}.opal-modal .opal-modal__btn-close{position:fixed;top:10px;box-sizing:content-box;padding:10px;width:25px;height:25px;border:0;background:0 0;cursor:pointer}.opal-modal .opal-modal__btn-close::before,.opal-modal .opal-modal__btn-close::after{position:absolute;top:21px;left:10px;width:25px;height:3px;border-radius:2px;background:#e6e6e6;content:'';transition:background .1s linear;-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-modal .opal-modal__btn-close::after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.opal-modal .opal-modal__window:hover .opal-modal__btn-close::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close::after{background:#ccc}.opal-modal .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__btn-close:hover::after,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::after{background:#fff}.opal-modal .opal-modal__btn-close:active::before,.opal-modal .opal-modal__btn-close:active::after,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::after{background:#b3b3b3}.opal-modal .opal-modal__content{position:relative;display:block}.opal-modal[opened]{display:block}.opal-modal._overlapped{left:100%;overflow:visible}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;