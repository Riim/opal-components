(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-dropdown"] = factory(require("rionite"));
	else
		root["opal-dropdown"] = factory(root["rionite"]);
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(7);

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	var openedDropdowns = [];

	module.exports = Component.extend('opal-dropdown', {
		Static: {
			props: {
				opened: false,
				autoClosing: false
			},

			template: '<rt-content class="opal-dropdown__content"></rt-content>'
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
			if (value !== void 0) {
				return this.props.opened = !!value;
			}
			return this.props.opened = !this.props.opened;
		},
		_open: function _open() {
			var _this = this;

			openedDropdowns.push(this);

			var el = this.element;
			var elStyle = el.style;

			elStyle.top = '100%';
			elStyle.right = '';
			elStyle.bottom = '';
			elStyle.left = '0';
			elStyle.display = 'block';
			elStyle.maxHeight = '';

			var docEl = document.documentElement;
			var container = el.offsetParent;

			var docElClientWidth = docEl.clientWidth;
			var docElClientHeight = docEl.clientHeight;
			var containerClientRect = container.getBoundingClientRect();
			var elClientRect = el.getBoundingClientRect();

			if (elClientRect.right > docElClientWidth) {
				if (containerClientRect.right - el.offsetWidth >= 0) {
					elStyle.right = '0';
					elStyle.left = '';
				} else {
					elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
				}
			}

			var margin = elClientRect.top - containerClientRect.bottom;
			var excess = elClientRect.bottom + margin - docElClientHeight;

			if (excess > 0) {
				var diff = containerClientRect.top - (docElClientHeight - containerClientRect.bottom);

				if (diff > 0) {
					elStyle.top = '';
					elStyle.bottom = '100%';

					excess -= diff;

					if (excess > 0) {
						elStyle.maxHeight = el.offsetHeight - excess + 'px';
					}
				} else {
					elStyle.maxHeight = el.offsetHeight - excess + 'px';
				}
			}

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
			openedDropdowns.splice(openedDropdowns.indexOf(this), 1);

			this.element.style.display = '';

			if (this._documentClickListening) {
				this._documentClickListening.stop();
			}

			this.emit('close');
		},
		_onDocumentClick: function _onDocumentClick(evt) {
			var docEl = document.documentElement;
			var el = this.element;

			for (var node = evt.target;;) {
				if (node == docEl) {
					this.close();
					break;
				}

				if (node.tagName == 'A') {
					this.close();
					break;
				}

				node = node.parentNode;

				if (node == el) {
					break;
				}
			}
		}
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-dropdown{position:absolute;z-index:100;display:none;overflow-y:auto;box-sizing:border-box;margin:2px 0;padding:6px 0;min-width:100%;border:1px solid #ccc;border-radius:3px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}.opal-dropdown__content{position:relative;display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }
/******/ ])
});
;