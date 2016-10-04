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

	'use strict';

	__webpack_require__(60);

	var _require = __webpack_require__(1);

	var Component = _require.Component;


	var openedModals = [];
	var documentListening = void 0;

	function onDocumentFocusIn() {
		var body = document.body;

		if (document.activeElement != body) {
			var modalEl = openedModals[0].element;

			for (var node = document.activeElement.parentNode; node != modalEl; node = node.parentNode) {
				if (node == body) {
					openedModals[0].assets.btnClose.focus();
					break;
				}
			}
		}
	}

	function onDocumentKeyUp(evt) {
		if (evt.keyCode == 27 /* Esc */) {
				evt.preventDefault();
				openedModals[0].close();
			}
	}

	module.exports = Component.extend('opal-modal', {
		Static: {
			props: {
				opened: false
			},

			template: __webpack_require__(32),

			assets: {
				':element': {
					'on-click': function onClick(evt) {
						if (evt.target == this.element) {
							this.props.opened = false;
						}
					}
				},

				btnClose: {
					'on-click': function onClick() {
						this.props.opened = false;
					}
				}
			}
		},

		ready: function ready() {
			if (this.props.opened) {
				this._open();
			}
		},
		elementDetached: function elementDetached() {
			this.close();
		},
		elementAttributeChanged: function elementAttributeChanged(name, oldValue, value) {
			if (name == 'opened') {
				this[value ? '_open' : '_close']();
			}
		},


		/**
	  * @typesign () -> boolean;
	  */
		open: function open() {
			if (!this.props.opened) {
				this.props.opened = true;
				return true;
			}

			return false;
		},


		/**
	  * @typesign () -> boolean;
	  */
		close: function close() {
			if (this.props.opened) {
				this.props.opened = false;
				return true;
			}

			return false;
		},


		/**
	  * @typesign (value?: boolean) -> boolean;
	  */
		toggle: function toggle(value) {
			return this.props.opened = value === void 0 ? !this.props.opened : value;
		},
		_open: function _open() {
			if (openedModals.length) {
				openedModals[0].element.classList.add('_overlapped');
			} else {
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

			this.props.opened = true;
			openedModals.unshift(this);

			this.assets.btnClose.focus();

			this.emit('open');
		},
		_close: function _close() {
			var index = openedModals.indexOf(this);

			if (index) {
				openedModals[index - 1].close();
			}

			this.props.opened = false;
			openedModals.shift();

			if (openedModals.length) {
				openedModals[0].element.classList.remove('_overlapped');
				openedModals[0].assets.btnClose.focus();
			} else {
				documentListening.stop();

				var bodyStyle = document.body.style;

				bodyStyle.overflow = '';
				bodyStyle.marginRight = '';
			}

			this.emit('close');
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-modal__window\"> <button class=\"opal-modal__btn-close\"></button> <rt-content class=\"opal-modal__content\"></rt-content> </span>"

/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-modal{position:fixed;top:0;left:0;z-index:1000;display:none;overflow:auto;box-sizing:border-box;padding:20px 60px;width:100%;height:100%;background:rgba(0,0,0,.6);text-align:center;white-space:nowrap;cursor:default}.opal-modal::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-modal .opal-modal__window{display:inline-block;padding:30px;border-radius:3px;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.3);vertical-align:middle;text-align:left;white-space:normal}.opal-modal .opal-modal__btn-close{position:absolute;top:10px;right:10px;box-sizing:content-box;padding:10px;width:25px;height:25px;border:0;background:0 0;cursor:pointer}.opal-modal .opal-modal__btn-close::before,.opal-modal .opal-modal__btn-close::after{position:absolute;top:21px;left:10px;width:25px;height:3px;border-radius:2px;background:#e6e6e6;content:'';transition:background .1s;-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-modal .opal-modal__btn-close::after{-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.opal-modal .opal-modal__window:hover .opal-modal__btn-close::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close::after{background:#ccc}.opal-modal .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__btn-close:hover::after,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::after{background:#fff}.opal-modal .opal-modal__btn-close:active::before,.opal-modal .opal-modal__btn-close:active::after,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::after{background:#b3b3b3}.opal-modal .opal-modal__content{position:relative;display:block}.opal-modal[opened]{display:block}.opal-modal._overlapped{left:100%;overflow:visible}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;