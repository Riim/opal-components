(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-popover"] = factory(require("rionite"));
	else
		root["opal-popover"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	__webpack_require__(32);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-popover', {
		Static: {
			props: {
				to: 'right',
				opened: false,
				autoClosing: false
			},

			template: '<span class="opal-popover__arrow"></span><rt-content class="opal-popover__content"></rt-content>'
		},

		ready: function ready() {
			if (this.props.opened) {
				this._open();
			}
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
			var _this = this;

			if (this.props.autoClosing) {
				setTimeout(function () {
					if (_this.props.opened) {
						_this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
					}
				}, 1);
			}

			this.emit('open');
		},
		_close: function _close() {
			if (this._documentClickListening) {
				this._documentClickListening.stop();
			}

			this.emit('close');
		},
		_onDocumentClick: function _onDocumentClick(evt) {
			var docEl = document.documentElement;
			var el = this.element;

			for (var node = evt.target;;) {
				if (node == docEl || node.tagName == 'A') {
					this.close();
					break;
				}

				node = node.parentNode;

				if (!node || node == el) {
					break;
				}
			}
		}
	});

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = "@-webkit-keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}@keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}.opal-popover{position:absolute;z-index:100;display:none;box-sizing:border-box;padding:15px;border:1px solid #ccc;border-radius:6px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}.opal-popover .opal-popover__arrow{position:absolute;z-index:1;width:0;height:0}.opal-popover .opal-popover__arrow::before,.opal-popover .opal-popover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.opal-popover .opal-popover__arrow::after{border:8px solid transparent}.opal-popover .opal-popover__content{position:relative;display:block}.opal-popover[to=top]{bottom:100%;left:50%;margin-bottom:15px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=top] .opal-popover__arrow{top:100%;left:50%}.opal-popover[to=top] .opal-popover__arrow::before,.opal-popover[to=top] .opal-popover__arrow::after{border-top-color:#ccc;border-bottom-width:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=top] .opal-popover__arrow::after{border-top-color:#fff}.opal-popover[to=right]{top:50%;left:100%;margin-left:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=right] .opal-popover__arrow{top:50%;right:100%}.opal-popover[to=right] .opal-popover__arrow::before,.opal-popover[to=right] .opal-popover__arrow::after{right:0;border-right-color:#ccc;border-left-width:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=right] .opal-popover__arrow::after{border-right-color:#fff}.opal-popover[to=bottom]{top:100%;left:50%;margin-top:15px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=bottom] .opal-popover__arrow{bottom:100%;left:50%}.opal-popover[to=bottom] .opal-popover__arrow::before,.opal-popover[to=bottom] .opal-popover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:#ccc;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=bottom] .opal-popover__arrow::after{border-bottom-color:#fff}.opal-popover[to=left]{top:50%;right:100%;margin-right:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=left] .opal-popover__arrow{top:50%;left:100%}.opal-popover[to=left] .opal-popover__arrow::before,.opal-popover[to=left] .opal-popover__arrow::after{left:0;border-right-width:0;border-left-color:#ccc;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=left] .opal-popover__arrow::after{border-left-color:#fff}.opal-popover[opened]{display:block;-webkit-animation:opal-popover-fade-in-animation .1s linear;animation:opal-popover-fade-in-animation .1s linear}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;