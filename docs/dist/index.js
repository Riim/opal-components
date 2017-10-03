(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!

Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
;(function(window, polyfill){'use strict';

  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
  // THIS FILE IS JUST WRAPPED UP RESULTING IN
  // build/document-register-element.js
  // and its .max.js counter part

  var
    document = window.document,
    Object = window.Object
  ;

  var htmlClass = (function (info) {
    // (C) Andrea Giammarchi - @WebReflection - MIT Style
    var
      catchClass = /^[A-Z]+[a-z]/,
      filterBy = function (re) {
        var arr = [], tag;
        for (tag in register) {
          if (re.test(tag)) arr.push(tag);
        }
        return arr;
      },
      add = function (Class, tag) {
        tag = tag.toLowerCase();
        if (!(tag in register)) {
          register[Class] = (register[Class] || []).concat(tag);
          register[tag] = (register[tag.toUpperCase()] = Class);
        }
      },
      register = (Object.create || Object)(null),
      htmlClass = {},
      i, section, tags, Class
    ;
    for (section in info) {
      for (Class in info[section]) {
        tags = info[section][Class];
        register[Class] = tags;
        for (i = 0; i < tags.length; i++) {
          register[tags[i].toLowerCase()] =
          register[tags[i].toUpperCase()] = Class;
        }
      }
    }
    htmlClass.get = function get(tagOrClass) {
      return typeof tagOrClass === 'string' ?
        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
        filterBy(tagOrClass);
    };
    htmlClass.set = function set(tag, Class) {
      return (catchClass.test(tag) ?
        add(tag, Class) :
        add(Class, tag)
      ), htmlClass;
    };
    return htmlClass;
  }({
    "collections": {
      "HTMLAllCollection": [
        "all"
      ],
      "HTMLCollection": [
        "forms"
      ],
      "HTMLFormControlsCollection": [
        "elements"
      ],
      "HTMLOptionsCollection": [
        "options"
      ]
    },
    "elements": {
      "Element": [
        "element"
      ],
      "HTMLAnchorElement": [
        "a"
      ],
      "HTMLAppletElement": [
        "applet"
      ],
      "HTMLAreaElement": [
        "area"
      ],
      "HTMLAttachmentElement": [
        "attachment"
      ],
      "HTMLAudioElement": [
        "audio"
      ],
      "HTMLBRElement": [
        "br"
      ],
      "HTMLBaseElement": [
        "base"
      ],
      "HTMLBodyElement": [
        "body"
      ],
      "HTMLButtonElement": [
        "button"
      ],
      "HTMLCanvasElement": [
        "canvas"
      ],
      "HTMLContentElement": [
        "content"
      ],
      "HTMLDListElement": [
        "dl"
      ],
      "HTMLDataElement": [
        "data"
      ],
      "HTMLDataListElement": [
        "datalist"
      ],
      "HTMLDetailsElement": [
        "details"
      ],
      "HTMLDialogElement": [
        "dialog"
      ],
      "HTMLDirectoryElement": [
        "dir"
      ],
      "HTMLDivElement": [
        "div"
      ],
      "HTMLDocument": [
        "document"
      ],
      "HTMLElement": [
        "element",
        "abbr",
        "address",
        "article",
        "aside",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "command",
        "dd",
        "dfn",
        "dt",
        "em",
        "figcaption",
        "figure",
        "footer",
        "header",
        "i",
        "kbd",
        "mark",
        "nav",
        "noscript",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "small",
        "strong",
        "sub",
        "summary",
        "sup",
        "u",
        "var",
        "wbr"
      ],
      "HTMLEmbedElement": [
        "embed"
      ],
      "HTMLFieldSetElement": [
        "fieldset"
      ],
      "HTMLFontElement": [
        "font"
      ],
      "HTMLFormElement": [
        "form"
      ],
      "HTMLFrameElement": [
        "frame"
      ],
      "HTMLFrameSetElement": [
        "frameset"
      ],
      "HTMLHRElement": [
        "hr"
      ],
      "HTMLHeadElement": [
        "head"
      ],
      "HTMLHeadingElement": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ],
      "HTMLHtmlElement": [
        "html"
      ],
      "HTMLIFrameElement": [
        "iframe"
      ],
      "HTMLImageElement": [
        "img"
      ],
      "HTMLInputElement": [
        "input"
      ],
      "HTMLKeygenElement": [
        "keygen"
      ],
      "HTMLLIElement": [
        "li"
      ],
      "HTMLLabelElement": [
        "label"
      ],
      "HTMLLegendElement": [
        "legend"
      ],
      "HTMLLinkElement": [
        "link"
      ],
      "HTMLMapElement": [
        "map"
      ],
      "HTMLMarqueeElement": [
        "marquee"
      ],
      "HTMLMediaElement": [
        "media"
      ],
      "HTMLMenuElement": [
        "menu"
      ],
      "HTMLMenuItemElement": [
        "menuitem"
      ],
      "HTMLMetaElement": [
        "meta"
      ],
      "HTMLMeterElement": [
        "meter"
      ],
      "HTMLModElement": [
        "del",
        "ins"
      ],
      "HTMLOListElement": [
        "ol"
      ],
      "HTMLObjectElement": [
        "object"
      ],
      "HTMLOptGroupElement": [
        "optgroup"
      ],
      "HTMLOptionElement": [
        "option"
      ],
      "HTMLOutputElement": [
        "output"
      ],
      "HTMLParagraphElement": [
        "p"
      ],
      "HTMLParamElement": [
        "param"
      ],
      "HTMLPictureElement": [
        "picture"
      ],
      "HTMLPreElement": [
        "pre"
      ],
      "HTMLProgressElement": [
        "progress"
      ],
      "HTMLQuoteElement": [
        "blockquote",
        "q",
        "quote"
      ],
      "HTMLScriptElement": [
        "script"
      ],
      "HTMLSelectElement": [
        "select"
      ],
      "HTMLShadowElement": [
        "shadow"
      ],
      "HTMLSlotElement": [
        "slot"
      ],
      "HTMLSourceElement": [
        "source"
      ],
      "HTMLSpanElement": [
        "span"
      ],
      "HTMLStyleElement": [
        "style"
      ],
      "HTMLTableCaptionElement": [
        "caption"
      ],
      "HTMLTableCellElement": [
        "td",
        "th"
      ],
      "HTMLTableColElement": [
        "col",
        "colgroup"
      ],
      "HTMLTableElement": [
        "table"
      ],
      "HTMLTableRowElement": [
        "tr"
      ],
      "HTMLTableSectionElement": [
        "thead",
        "tbody",
        "tfoot"
      ],
      "HTMLTemplateElement": [
        "template"
      ],
      "HTMLTextAreaElement": [
        "textarea"
      ],
      "HTMLTimeElement": [
        "time"
      ],
      "HTMLTitleElement": [
        "title"
      ],
      "HTMLTrackElement": [
        "track"
      ],
      "HTMLUListElement": [
        "ul"
      ],
      "HTMLUnknownElement": [
        "unknown",
        "vhgroupv",
        "vkeygen"
      ],
      "HTMLVideoElement": [
        "video"
      ]
    },
    "nodes": {
      "Attr": [
        "node"
      ],
      "Audio": [
        "audio"
      ],
      "CDATASection": [
        "node"
      ],
      "CharacterData": [
        "node"
      ],
      "Comment": [
        "#comment"
      ],
      "Document": [
        "#document"
      ],
      "DocumentFragment": [
        "#document-fragment"
      ],
      "DocumentType": [
        "node"
      ],
      "HTMLDocument": [
        "#document"
      ],
      "Image": [
        "img"
      ],
      "Option": [
        "option"
      ],
      "ProcessingInstruction": [
        "node"
      ],
      "ShadowRoot": [
        "#shadow-root"
      ],
      "Text": [
        "#text"
      ],
      "XMLDocument": [
        "xml"
      ]
    }
  }));
  
  
    
  // passed at runtime, configurable via nodejs module
  if (typeof polyfill !== 'object') polyfill = {type: polyfill || 'auto'};
  
  var
    // V0 polyfill entry
    REGISTER_ELEMENT = 'registerElement',
  
    // IE < 11 only + old WebKit for attributes + feature detection
    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
  
    // shortcuts and costants
    ADD_EVENT_LISTENER = 'addEventListener',
    ATTACHED = 'attached',
    CALLBACK = 'Callback',
    DETACHED = 'detached',
    EXTENDS = 'extends',
  
    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
    CONNECTED_CALLBACK = 'connected' + CALLBACK,
    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
    CREATED_CALLBACK = 'created' + CALLBACK,
    DETACHED_CALLBACK = DETACHED + CALLBACK,
  
    ADDITION = 'ADDITION',
    MODIFICATION = 'MODIFICATION',
    REMOVAL = 'REMOVAL',
  
    DOM_ATTR_MODIFIED = 'DOMAttrModified',
    DOM_CONTENT_LOADED = 'DOMContentLoaded',
    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  
    PREFIX_TAG = '<',
    PREFIX_IS = '=',
  
    // valid and invalid node names
    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
    invalidNames = [
      'ANNOTATION-XML',
      'COLOR-PROFILE',
      'FONT-FACE',
      'FONT-FACE-SRC',
      'FONT-FACE-URI',
      'FONT-FACE-FORMAT',
      'FONT-FACE-NAME',
      'MISSING-GLYPH'
    ],
  
    // registered types and their prototypes
    types = [],
    protos = [],
  
    // to query subnodes
    query = '',
  
    // html shortcut used to feature detect
    documentElement = document.documentElement,
  
    // ES5 inline helpers || basic patches
    indexOf = types.indexOf || function (v) {
      for(var i = this.length; i-- && this[i] !== v;){}
      return i;
    },
  
    // other helpers / shortcuts
    OP = Object.prototype,
    hOP = OP.hasOwnProperty,
    iPO = OP.isPrototypeOf,
  
    defineProperty = Object.defineProperty,
    empty = [],
    gOPD = Object.getOwnPropertyDescriptor,
    gOPN = Object.getOwnPropertyNames,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
  
    // jshint proto: true
    hasProto = !!Object.__proto__,
  
    // V1 helpers
    fixGetClass = false,
    DRECEV1 = '__dreCEv1',
    customElements = window.customElements,
    usableCustomElements = !/^force/.test(polyfill.type) && !!(
      customElements &&
      customElements.define &&
      customElements.get &&
      customElements.whenDefined
    ),
    Dict = Object.create || Object,
    Map = window.Map || function Map() {
      var K = [], V = [], i;
      return {
        get: function (k) {
          return V[indexOf.call(K, k)];
        },
        set: function (k, v) {
          i = indexOf.call(K, k);
          if (i < 0) V[K.push(k) - 1] = v;
          else V[i] = v;
        }
      };
    },
    Promise = window.Promise || function (fn) {
      var
        notify = [],
        done = false,
        p = {
          'catch': function () {
            return p;
          },
          'then': function (cb) {
            notify.push(cb);
            if (done) setTimeout(resolve, 1);
            return p;
          }
        }
      ;
      function resolve(value) {
        done = true;
        while (notify.length) notify.shift()(value);
      }
      fn(resolve);
      return p;
    },
    justCreated = false,
    constructors = Dict(null),
    waitingList = Dict(null),
    nodeNames = new Map(),
    secondArgument = function (is) {
      return is.toLowerCase();
    },
  
    // used to create unique instances
    create = Object.create || function Bridge(proto) {
      // silly broken polyfill probably ever used but short enough to work
      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
    },
  
    // will set the prototype if possible
    // or copy over all properties
    setPrototype = sPO || (
      hasProto ?
        function (o, p) {
          o.__proto__ = p;
          return o;
        } : (
      (gOPN && gOPD) ?
        (function(){
          function setProperties(o, p) {
            for (var
              key,
              names = gOPN(p),
              i = 0, length = names.length;
              i < length; i++
            ) {
              key = names[i];
              if (!hOP.call(o, key)) {
                defineProperty(o, key, gOPD(p, key));
              }
            }
          }
          return function (o, p) {
            do {
              setProperties(o, p);
            } while ((p = gPO(p)) && !iPO.call(p, o));
            return o;
          };
        }()) :
        function (o, p) {
          for (var key in p) {
            o[key] = p[key];
          }
          return o;
        }
    )),
  
    // DOM shortcuts and helpers, if any
  
    MutationObserver = window.MutationObserver ||
                       window.WebKitMutationObserver,
  
    HTMLElementPrototype = (
      window.HTMLElement ||
      window.Element ||
      window.Node
    ).prototype,
  
    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
  
    safeProperty = IE8 ? function (o, k, d) {
      o[k] = d.value;
      return o;
    } : defineProperty,
  
    isValidNode = IE8 ?
      function (node) {
        return node.nodeType === 1;
      } :
      function (node) {
        return iPO.call(HTMLElementPrototype, node);
      },
  
    targets = IE8 && [],
  
    attachShadow = HTMLElementPrototype.attachShadow,
    dispatchEvent = HTMLElementPrototype.dispatchEvent,
    getAttribute = HTMLElementPrototype.getAttribute,
    hasAttribute = HTMLElementPrototype.hasAttribute,
    removeAttribute = HTMLElementPrototype.removeAttribute,
    setAttribute = HTMLElementPrototype.setAttribute,
  
    // replaced later on
    createElement = document.createElement,
    patchedCreateElement = createElement,
  
    // shared observer for all attributes
    attributesObserver = MutationObserver && {
      attributes: true,
      characterData: true,
      attributeOldValue: true
    },
  
    // useful to detect only if there's no MutationObserver
    DOMAttrModified = MutationObserver || function(e) {
      doesNotSupportDOMAttrModified = false;
      documentElement.removeEventListener(
        DOM_ATTR_MODIFIED,
        DOMAttrModified
      );
    },
  
    // will both be used to make DOMNodeInserted asynchronous
    asapQueue,
    asapTimer = 0,
  
    // internal flags
    V0 = REGISTER_ELEMENT in document &&
         !/^force-all/.test(polyfill.type),
    setListener = true,
    justSetup = false,
    doesNotSupportDOMAttrModified = true,
    dropDomContentLoaded = true,
  
    // needed for the innerHTML helper
    notFromInnerHTMLHelper = true,
  
    // optionally defined later on
    onSubtreeModified,
    callDOMAttrModified,
    getAttributesMirror,
    observer,
    observe,
  
    // based on setting prototype capability
    // will check proto or the expando attribute
    // in order to setup the node once
    patchIfNotAlready,
    patch
  ;
  
  // only if needed
  if (!V0) {
  
    if (sPO || hasProto) {
        patchIfNotAlready = function (node, proto) {
          if (!iPO.call(proto, node)) {
            setupNode(node, proto);
          }
        };
        patch = setupNode;
    } else {
        patchIfNotAlready = function (node, proto) {
          if (!node[EXPANDO_UID]) {
            node[EXPANDO_UID] = Object(true);
            setupNode(node, proto);
          }
        };
        patch = patchIfNotAlready;
    }
  
    if (IE8) {
      doesNotSupportDOMAttrModified = false;
      (function (){
        var
          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
          addEventListener = descriptor.value,
          patchedRemoveAttribute = function (name) {
            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
            e.attrName = name;
            e.prevValue = getAttribute.call(this, name);
            e.newValue = null;
            e[REMOVAL] = e.attrChange = 2;
            removeAttribute.call(this, name);
            dispatchEvent.call(this, e);
          },
          patchedSetAttribute = function (name, value) {
            var
              had = hasAttribute.call(this, name),
              old = had && getAttribute.call(this, name),
              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
            ;
            setAttribute.call(this, name, value);
            e.attrName = name;
            e.prevValue = had ? old : null;
            e.newValue = value;
            if (had) {
              e[MODIFICATION] = e.attrChange = 1;
            } else {
              e[ADDITION] = e.attrChange = 0;
            }
            dispatchEvent.call(this, e);
          },
          onPropertyChange = function (e) {
            // jshint eqnull:true
            var
              node = e.currentTarget,
              superSecret = node[EXPANDO_UID],
              propertyName = e.propertyName,
              event
            ;
            if (superSecret.hasOwnProperty(propertyName)) {
              superSecret = superSecret[propertyName];
              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
              event.attrName = superSecret.name;
              event.prevValue = superSecret.value || null;
              event.newValue = (superSecret.value = node[propertyName] || null);
              if (event.prevValue == null) {
                event[ADDITION] = event.attrChange = 0;
              } else {
                event[MODIFICATION] = event.attrChange = 1;
              }
              dispatchEvent.call(node, event);
            }
          }
        ;
        descriptor.value = function (type, handler, capture) {
          if (
            type === DOM_ATTR_MODIFIED &&
            this[ATTRIBUTE_CHANGED_CALLBACK] &&
            this.setAttribute !== patchedSetAttribute
          ) {
            this[EXPANDO_UID] = {
              className: {
                name: 'class',
                value: this.className
              }
            };
            this.setAttribute = patchedSetAttribute;
            this.removeAttribute = patchedRemoveAttribute;
            addEventListener.call(this, 'propertychange', onPropertyChange);
          }
          addEventListener.call(this, type, handler, capture);
        };
        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
      }());
    } else if (!MutationObserver) {
      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
      documentElement.setAttribute(EXPANDO_UID, 1);
      documentElement.removeAttribute(EXPANDO_UID);
      if (doesNotSupportDOMAttrModified) {
        onSubtreeModified = function (e) {
          var
            node = this,
            oldAttributes,
            newAttributes,
            key
          ;
          if (node === e.target) {
            oldAttributes = node[EXPANDO_UID];
            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
            for (key in newAttributes) {
              if (!(key in oldAttributes)) {
                // attribute was added
                return callDOMAttrModified(
                  0,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  ADDITION
                );
              } else if (newAttributes[key] !== oldAttributes[key]) {
                // attribute was changed
                return callDOMAttrModified(
                  1,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  MODIFICATION
                );
              }
            }
            // checking if it has been removed
            for (key in oldAttributes) {
              if (!(key in newAttributes)) {
                // attribute removed
                return callDOMAttrModified(
                  2,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  REMOVAL
                );
              }
            }
          }
        };
        callDOMAttrModified = function (
          attrChange,
          currentTarget,
          attrName,
          prevValue,
          newValue,
          action
        ) {
          var e = {
            attrChange: attrChange,
            currentTarget: currentTarget,
            attrName: attrName,
            prevValue: prevValue,
            newValue: newValue
          };
          e[action] = attrChange;
          onDOMAttrModified(e);
        };
        getAttributesMirror = function (node) {
          for (var
            attr, name,
            result = {},
            attributes = node.attributes,
            i = 0, length = attributes.length;
            i < length; i++
          ) {
            attr = attributes[i];
            name = attr.name;
            if (name !== 'setAttribute') {
              result[name] = attr.value;
            }
          }
          return result;
        };
      }
    }
  
    // set as enumerable, writable and configurable
    document[REGISTER_ELEMENT] = function registerElement(type, options) {
      upperType = type.toUpperCase();
      if (setListener) {
        // only first time document.registerElement is used
        // we need to set this listener
        // setting it by default might slow down for no reason
        setListener = false;
        if (MutationObserver) {
          observer = (function(attached, detached){
            function checkEmAll(list, callback) {
              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
            }
            return new MutationObserver(function (records) {
              for (var
                current, node, newValue,
                i = 0, length = records.length; i < length; i++
              ) {
                current = records[i];
                if (current.type === 'childList') {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper &&
                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
                      current.attributeName !== 'style') {
                    newValue = getAttribute.call(node, current.attributeName);
                    if (newValue !== current.oldValue) {
                      node[ATTRIBUTE_CHANGED_CALLBACK](
                        current.attributeName,
                        current.oldValue,
                        newValue
                      );
                    }
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)));
          observe = function (node) {
            observer.observe(
              node,
              {
                childList: true,
                subtree: true
              }
            );
            return node;
          };
          observe(document);
          if (attachShadow) {
            HTMLElementPrototype.attachShadow = function () {
              return observe(attachShadow.apply(this, arguments));
            };
          }
        } else {
          asapQueue = [];
          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
        }
  
        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
  
        [HTMLElementPrototype, DocumentFragment.prototype].forEach(function(proto) {
          var origCloneNode = proto.cloneNode;

          proto.cloneNode = function (deep) {
            var
              node = origCloneNode.call(this, !!deep),
              i
            ;
            if (node.nodeType === Node.ELEMENT_NODE) {
              i = getTypeIndex(node);
              if (-1 < i) patch(node, protos[i]);
            }
            if (deep && query.length) loopAndSetup(node.querySelectorAll(query));
            return node;
          };
        });

        var origImportNode = document.importNode;

        document.importNode = function (node, deep) {
          var
            importedNode = origImportNode.call(this, node, !!deep),
            i
          ;
          if (importedNode.nodeType === Node.ELEMENT_NODE) {
            i = getTypeIndex(importedNode);
            if (-1 < i) patch(importedNode, protos[i]);
          }
          if (deep && query.length) loopAndSetup(importedNode.querySelectorAll(query));
          return importedNode;
        };
      }

      if (justSetup) return (justSetup = false);
  
      if (-2 < (
        indexOf.call(types, PREFIX_IS + upperType) +
        indexOf.call(types, PREFIX_TAG + upperType)
      )) {
        throwTypeError(type);
      }
  
      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
        throw new Error('The type ' + type + ' is invalid');
      }
  
      var
        constructor = function () {
          return extending ?
            document.createElement(nodeName, upperType) :
            document.createElement(nodeName);
        },
        opt = options || OP,
        extending = hOP.call(opt, EXTENDS),
        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
        upperType,
        i
      ;
  
      if (extending && -1 < (
        indexOf.call(types, PREFIX_TAG + nodeName)
      )) {
        throwTypeError(nodeName);
      }
  
      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
  
      query = query.concat(
        query.length ? ',' : '',
        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
      );
  
      constructor.prototype = (
        protos[i] = hOP.call(opt, 'prototype') ?
          opt.prototype :
          create(HTMLElementPrototype)
      );
  
      if (query.length) loopAndVerify(
        document.querySelectorAll(query),
        ATTACHED
      );
  
      return constructor;
    };
  
    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
      var
        is = getIs(typeExtension),
        node = is ?
          createElement.call(document, localName, secondArgument(is)) :
          createElement.call(document, localName),
        name = '' + localName,
        i = indexOf.call(
          types,
          (is ? PREFIX_IS : PREFIX_TAG) +
          (is || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (is) {
        node.setAttribute('is', is = is.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), is);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    });
  
  }
  
  function ASAP() {
    var queue = asapQueue.splice(0, asapQueue.length);
    asapTimer = 0;
    while (queue.length) {
      queue.shift().call(
        null, queue.shift()
      );
    }
  }
  
  function loopAndVerify(list, action) {
    for (var i = 0, length = list.length; i < length; i++) {
      verifyAndSetupAndAction(list[i], action);
    }
  }
  
  function loopAndSetup(list) {
    for (var i = 0, length = list.length, node; i < length; i++) {
      node = list[i];
      patch(node, protos[getTypeIndex(node)]);
    }
  }
  
  function executeAction(action) {
    return function (node) {
      if (isValidNode(node)) {
        verifyAndSetupAndAction(node, action);
        if (query.length) loopAndVerify(
          node.querySelectorAll(query),
          action
        );
      }
    };
  }
  
  function getTypeIndex(target) {
    var
      is = getAttribute.call(target, 'is'),
      nodeName = target.nodeName.toUpperCase(),
      i = indexOf.call(
        types,
        is ?
            PREFIX_IS + is.toUpperCase() :
            PREFIX_TAG + nodeName
      )
    ;
    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
  }
  
  function isInQSA(name, type) {
    return -1 < query.indexOf(name + '[is="' + type + '"]');
  }
  
  function onDOMAttrModified(e) {
    var
      node = e.currentTarget,
      attrChange = e.attrChange,
      attrName = e.attrName,
      target = e.target,
      addition = e[ADDITION] || 2,
      removal = e[REMOVAL] || 3
    ;
    if (notFromInnerHTMLHelper &&
        (!target || target === node) &&
        node[ATTRIBUTE_CHANGED_CALLBACK] &&
        attrName !== 'style' && (
          e.prevValue !== e.newValue ||
          // IE9, IE10, and Opera 12 gotcha
          e.newValue === '' && (
            attrChange === addition ||
            attrChange === removal
          )
    )) {
      node[ATTRIBUTE_CHANGED_CALLBACK](
        attrName,
        attrChange === addition ? null : e.prevValue,
        attrChange === removal ? null : e.newValue
      );
    }
  }
  
  function onDOMNode(action) {
    var executor = executeAction(action);
    return function (e) {
      asapQueue.push(executor, e.target);
      if (asapTimer) clearTimeout(asapTimer);
      asapTimer = setTimeout(ASAP, 1);
    };
  }
  
  function onReadyStateChange(e) {
    if (dropDomContentLoaded) {
      dropDomContentLoaded = false;
      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    }
    if (query.length) loopAndVerify(
      (e.target || document).querySelectorAll(query),
      e.detail === DETACHED ? DETACHED : ATTACHED
    );
    if (IE8) purge();
  }
  
  function patchedSetAttribute(name, value) {
    // jshint validthis:true
    var self = this;
    setAttribute.call(self, name, value);
    onSubtreeModified.call(self, {target: self});
  }
  
  function setupNode(node, proto) {
    setPrototype(node, proto);
    if (observer) {
      observer.observe(node, attributesObserver);
    } else {
      if (doesNotSupportDOMAttrModified) {
        node.setAttribute = patchedSetAttribute;
        node[EXPANDO_UID] = getAttributesMirror(node);
        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
      }
      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
    }
    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
      node.created = true;
      node[CREATED_CALLBACK]();
      node.created = false;
    }
  }
  
  function purge() {
    for (var
      node,
      i = 0,
      length = targets.length;
      i < length; i++
    ) {
      node = targets[i];
      if (!documentElement.contains(node)) {
        length--;
        targets.splice(i--, 1);
        verifyAndSetupAndAction(node, DETACHED);
      }
    }
  }
  
  function throwTypeError(type) {
    throw new Error('A ' + type + ' type is already registered');
  }
  
  function verifyAndSetupAndAction(node, action) {
    var
      fn,
      i = getTypeIndex(node),
      counterAction
    ;
    if (-1 < i) {
      patchIfNotAlready(node, protos[i]);
      i = 0;
      if (action === ATTACHED && !node[ATTACHED]) {
        node[DETACHED] = false;
        node[ATTACHED] = true;
        counterAction = 'connected';
        i = 1;
        if (IE8 && indexOf.call(targets, node) < 0) {
          targets.push(node);
        }
      } else if (action === DETACHED && !node[DETACHED]) {
        node[ATTACHED] = false;
        node[DETACHED] = true;
        counterAction = 'disconnected';
        i = 1;
      }
      if (i && (fn = (
        node[action + CALLBACK] ||
        node[counterAction + CALLBACK]
      ))) fn.call(node);
    }
  }
  
  
  
  // V1 in da House!
  function CustomElementRegistry() {}
  
  CustomElementRegistry.prototype = {
    constructor: CustomElementRegistry,
    // a workaround for the stubborn WebKit
    define: usableCustomElements ?
      function (name, Class, options) {
        if (options) {
          CERDefine(name, Class, options);
        } else {
          var NAME = name.toUpperCase();
          constructors[NAME] = {
            constructor: Class,
            create: [NAME]
          };
          nodeNames.set(Class, NAME);
          customElements.define(name, Class);
        }
      } :
      CERDefine,
    get: usableCustomElements ?
      function (name) {
        return customElements.get(name) || get(name);
      } :
      get,
    whenDefined: usableCustomElements ?
      function (name) {
        return Promise.race([
          customElements.whenDefined(name),
          whenDefined(name)
        ]);
      } :
      whenDefined
  };
  
  function CERDefine(name, Class, options) {
    var
      is = options && options[EXTENDS] || '',
      CProto = Class.prototype,
      proto = create(CProto),
      attributes = Class.observedAttributes || empty,
      definition = {prototype: proto}
    ;
    // TODO: is this needed at all since it's inherited?
    // defineProperty(proto, 'constructor', {value: Class});
    safeProperty(proto, CREATED_CALLBACK, {
        value: function () {
          if (justCreated) justCreated = false;
          else if (!this[DRECEV1]) {
            this[DRECEV1] = true;
            new Class(this);
            if (CProto[CREATED_CALLBACK])
              CProto[CREATED_CALLBACK].call(this);
            var info = constructors[nodeNames.get(Class)];
            if (!usableCustomElements || info.create.length > 1) {
              notifyAttributes(this);
            }
          }
      }
    });
    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
      value: function (name) {
        if (-1 < indexOf.call(attributes, name))
          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
      }
    });
    if (CProto[CONNECTED_CALLBACK]) {
      safeProperty(proto, ATTACHED_CALLBACK, {
        value: CProto[CONNECTED_CALLBACK]
      });
    }
    if (CProto[DISCONNECTED_CALLBACK]) {
      safeProperty(proto, DETACHED_CALLBACK, {
        value: CProto[DISCONNECTED_CALLBACK]
      });
    }
    if (is) definition[EXTENDS] = is;
    name = name.toUpperCase();
    constructors[name] = {
      constructor: Class,
      create: is ? [is, secondArgument(name)] : [name]
    };
    nodeNames.set(Class, name);
    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
    whenDefined(name);
    waitingList[name].r();
  }
  
  function get(name) {
    var info = constructors[name.toUpperCase()];
    return info && info.constructor;
  }
  
  function getIs(options) {
    return typeof options === 'string' ?
        options : (options && options.is || '');
  }
  
  function notifyAttributes(self) {
    var
      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
      attributes = callback ? self.attributes : empty,
      i = attributes.length,
      attribute
    ;
    while (i--) {
      attribute =  attributes[i]; // || attributes.item(i);
      callback.call(
        self,
        attribute.name || attribute.nodeName,
        null,
        attribute.value || attribute.nodeValue
      );
    }
  }
  
  function whenDefined(name) {
    name = name.toUpperCase();
    if (!(name in waitingList)) {
      waitingList[name] = {};
      waitingList[name].p = new Promise(function (resolve) {
        waitingList[name].r = resolve;
      });
    }
    return waitingList[name].p;
  }
  
  function polyfillV1() {
    if (customElements) delete window.customElements;
    defineProperty(window, 'customElements', {
      configurable: true,
      value: new CustomElementRegistry()
    });
    defineProperty(window, 'CustomElementRegistry', {
      configurable: true,
      value: CustomElementRegistry
    });
    for (var
      patchClass = function (name) {
        var Class = window[name];
        if (Class) {
          window[name] = function CustomElementsV1(self) {
            var info, isNative;
            if (!self) self = this;
            if (!self[DRECEV1]) {
              justCreated = true;
              info = constructors[nodeNames.get(self.constructor)];
              isNative = usableCustomElements && info.create.length === 1;
              self = isNative ?
                Reflect.construct(Class, empty, info.constructor) :
                document.createElement.apply(document, info.create);
              self[DRECEV1] = true;
              justCreated = false;
              if (!isNative) notifyAttributes(self);
            }
            return self;
          };
          window[name].prototype = Class.prototype;
          try {
            Class.prototype.constructor = window[name];
          } catch(WebKit) {
            fixGetClass = true;
            defineProperty(Class, DRECEV1, {value: window[name]});
          }
        }
      },
      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
      i = Classes.length;
      i--;
      patchClass(Classes[i])
    ) {}
    (document.createElement = function (name, options) {
      var is = getIs(options);
      return is ?
        patchedCreateElement.call(this, name, secondArgument(is)) :
        patchedCreateElement.call(this, name);
    });
    if (!V0) {
      justSetup = true;
      document[REGISTER_ELEMENT]('');
    }
  }
  
  // if customElements is not there at all
  if (!customElements || /^force/.test(polyfill.type)) polyfillV1();
  else if(!polyfill.noBuiltIn) {
    // if available test extends work as expected
    try {
      (function (DRE, options, name) {
        options[EXTENDS] = 'a';
        DRE.prototype = create(HTMLAnchorElement.prototype);
        DRE.prototype.constructor = DRE;
        window.customElements.define(name, DRE, options);
        if (
          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
        ) {
          throw options;
        }
      }(
        function DRE() {
          return Reflect.construct(HTMLAnchorElement, [], DRE);
        },
        {},
        'document-register-element-a'
      ));
    } catch(o_O) {
      // or force the polyfill if not
      // and keep internal original reference
      polyfillV1();
    }
  }
  
  // FireFox only issue
  if(!polyfill.noBuiltIn) {
    try {
      createElement.call(document, 'a', 'a');
    } catch(FireFox) {
      secondArgument = function (is) {
        return {is: is.toLowerCase()};
      };
    }
  }
  
}(window));

;(function(d) {
	if ('content' in d.createElement('template')) {
		return;
	}

	var style = d.createElement('style');
	style.type = 'text/css';
	style.textContent = 'template { display: none !important }';
	d.getElementsByTagName('head')[0].appendChild(style);

	Object.defineProperty(HTMLElement.prototype, 'content', {
		configurable: true,
		enumerable: true,

		get: function() {
			if (this.__$$content__) {
				return this.__$$content__;
			}

			if (this.tagName == 'TEMPLATE') {
				var df = this.__$$content__ = d.createDocumentFragment();

				for (var child; (child = this.firstChild); ) {
					df.appendChild(child);
				}

				return df;
			}
		}
	});
})(document);

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(4), __webpack_require__(2), __webpack_require__(37), __webpack_require__(43), __webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(26), __webpack_require__(47), __webpack_require__(3), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(25), __webpack_require__(5), __webpack_require__(14), __webpack_require__(51), __webpack_require__(15), __webpack_require__(52), __webpack_require__(7));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/map-set-polyfill", "cellx", "nelm", "@riim/get-uid", "@riim/move-content", "@riim/symbol-polyfill", "@riim/camelize", "@riim/hyphenize", "@riim/clear-node", "@riim/next-tick", "@riim/logger", "html-to-fragment", "@riim/set-attribute", "escape-string", "@riim/gettext", "@riim/escape-html", "@riim/is-regexp", "@riim/next-uid", "@riim/defer", "@riim/mixin"], factory);
	else if(typeof exports === 'object')
		exports["rionite"] = factory(require("@riim/map-set-polyfill"), require("cellx"), require("nelm"), require("@riim/get-uid"), require("@riim/move-content"), require("@riim/symbol-polyfill"), require("@riim/camelize"), require("@riim/hyphenize"), require("@riim/clear-node"), require("@riim/next-tick"), require("@riim/logger"), require("html-to-fragment"), require("@riim/set-attribute"), require("escape-string"), require("@riim/gettext"), require("@riim/escape-html"), require("@riim/is-regexp"), require("@riim/next-uid"), require("@riim/defer"), require("@riim/mixin"));
	else
		root["rionite"] = factory(root["@riim/map-set-polyfill"], root["cellx"], root["nelm"], root["@riim/get-uid"], root["@riim/move-content"], root["@riim/symbol-polyfill"], root["@riim/camelize"], root["@riim/hyphenize"], root["@riim/clear-node"], root["@riim/next-tick"], root["@riim/logger"], root["html-to-fragment"], root["@riim/set-attribute"], root["escape-string"], root["@riim/gettext"], root["@riim/escape-html"], root["@riim/is-regexp"], root["@riim/next-uid"], root["@riim/defer"], root["@riim/mixin"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_50__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
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
var camelize_1 = __webpack_require__(17);
var di_1 = __webpack_require__(9);
var get_uid_1 = __webpack_require__(11);
var map_set_polyfill_1 = __webpack_require__(0);
var move_content_1 = __webpack_require__(12);
var cellx_1 = __webpack_require__(1);
var html_to_fragment_1 = __webpack_require__(33);
var attachChildComponentElements_1 = __webpack_require__(5);
var bindContent_1 = __webpack_require__(6);
var bindEvents_1 = __webpack_require__(39);
var componentBinding_1 = __webpack_require__(40);
var componentConstructorMap_1 = __webpack_require__(21);
var ComponentInput_1 = __webpack_require__(22);
var DisposableMixin_1 = __webpack_require__(24);
var ElementProtoMixin_1 = __webpack_require__(3);
var Features_1 = __webpack_require__(7);
var handledEvents_1 = __webpack_require__(47);
var handleEvent_1 = __webpack_require__(48);
var registerComponent_1 = __webpack_require__(49);
var map = Array.prototype.map;
var reClassBlockElement = / class="([a-zA-Z][\-\w]*)__([a-zA-Z][\-\w]*)(?:\s[^"]*)?"/g;
var reInputChangeEventName = /input\-([\-0-9a-z]*)\-change/;
function createClassBlockElementReplacer(contentBlockName, events, evtPrefix) {
    return function (match, blockName, elName) {
        var elEvents;
        if (blockName == contentBlockName && (elEvents = events[elName])) {
            var eventAttrs = [];
            for (var type in elEvents) {
                eventAttrs.push(" " + evtPrefix + type + "=\":" + elName + "\"");
            }
            return match + eventAttrs.join('');
        }
        return match;
    };
}
function findChildComponents(node, ownerComponent, context, childComponents) {
    for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType == Node.ELEMENT_NODE) {
            var childComponent = child.$component;
            if (childComponent) {
                childComponent.ownerComponent = ownerComponent;
                childComponent.input.$context = context;
                (childComponents || (childComponents = [])).push(childComponent);
            }
            if (child.firstChild &&
                (!childComponent || childComponent.constructor.template == null)) {
                childComponents = findChildComponents(child, ownerComponent, context, childComponents);
            }
        }
    }
    return childComponents || null;
}
var created;
var initialize;
var ready;
var elementConnected;
var elementDisconnected;
var elementAttached;
var elementDetached;
var elementMoved;
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(logger, el) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        _this.ownerComponent = null;
        _this._parentComponent = null;
        _this._attached = false;
        _this.initialized = false;
        _this.isReady = false;
        DisposableMixin_1.DisposableMixin.call(_this);
        var constr = _this.constructor;
        if (!componentConstructorMap_1.componentConstructorMap.has(constr.elementIs)) {
            throw new TypeError('Component must be registered');
        }
        if (!el) {
            el = document.createElement(constr.elementIs);
        }
        _this.element = el;
        el.rioniteComponent = _this;
        Object.defineProperty(el, '$component', { value: _this });
        _this.created();
        return _this;
    }
    Component_1 = Component;
    Object.defineProperty(Component.prototype, "parentComponent", {
        get: function () {
            if (this._parentComponent !== undefined) {
                return this._parentComponent;
            }
            for (var node = void 0; (node = (node || this.element).parentNode);) {
                if (node.$component) {
                    return (this._parentComponent = node.$component);
                }
            }
            return (this._parentComponent = null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "input", {
        get: function () {
            var input = ComponentInput_1.ComponentInput.init(this);
            Object.defineProperty(this, 'input', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: input
            });
            return input;
        },
        enumerable: true,
        configurable: true
    });
    Component.prototype._on = function (type, listener, context) {
        if (!type.lastIndexOf('input-', 0) && reInputChangeEventName.test(type)) {
            cellx_1.EventEmitter.currentlySubscribing = true;
            this.input[camelize_1.camelize(RegExp.$1, true)];
            cellx_1.EventEmitter.currentlySubscribing = false;
        }
        _super.prototype._on.call(this, type, listener, context);
    };
    Component.prototype.handleEvent = function (evt) {
        _super.prototype.handleEvent.call(this, evt);
        if (evt.bubbles !== false && !evt.isPropagationStopped) {
            var parentComponent = this.parentComponent;
            if (parentComponent) {
                parentComponent.handleEvent(evt);
            }
            else {
                var targetOwnerComponent = evt.target.ownerComponent;
                if (targetOwnerComponent) {
                    handleEvent_1.handleEvent(evt, targetOwnerComponent.element);
                }
            }
        }
    };
    Component.prototype.listenTo = function (target, type, listener, context, useCapture) {
        return DisposableMixin_1.DisposableMixin.prototype.listenTo.call(this, typeof target == 'string' ? this.$(target) : target, type, listener, context, useCapture);
    };
    Component.prototype._listenTo = function (target, type, listener, context, useCapture) {
        if (target instanceof Component_1) {
            var index = void 0;
            if (type.charAt(0) == '<' && (index = type.indexOf('>', 1)) > 1) {
                var targetName = type.slice(1, index);
                if (targetName != '*') {
                    var targetConstr_1 = componentConstructorMap_1.componentConstructorMap.get(targetName);
                    if (!targetConstr_1) {
                        throw new TypeError("Component \"" + targetName + "\" is not defined");
                    }
                    var inner_1 = listener;
                    listener = function (evt) {
                        if (evt.target instanceof targetConstr_1) {
                            return inner_1.call(this, evt);
                        }
                    };
                }
                type = type.slice(index + 1);
            }
            else if (type.indexOf(':') == -1) {
                var inner_2 = listener;
                listener = function (evt) {
                    if (evt.target == target) {
                        return inner_2.call(this, evt);
                    }
                };
            }
        }
        return DisposableMixin_1.DisposableMixin.prototype._listenTo.call(this, target, type, listener, context, useCapture);
    };
    Component.prototype._attach = function () {
        var _this = this;
        this._attached = true;
        if (!this.initialized) {
            var result = this.initialize();
            if (result) {
                result.then(function () {
                    _this.initialized = true;
                    _this._attach();
                });
                return;
            }
            this.initialized = true;
        }
        var constr = this.constructor;
        if (this.isReady) {
            this._unfreezeBindings();
            if (constr.oevents) {
                bindEvents_1.bindEvents(this, constr.oevents);
            }
        }
        else {
            var el = this.element;
            el.className = constr._blockNamesString + el.className;
            if (constr.template == null) {
                this.input;
                this._bindings = null;
                var childComponents = findChildComponents(el, this.ownerComponent, this.input.$context);
                if (childComponents) {
                    attachChildComponentElements_1.attachChildComponentElements(childComponents);
                }
                if (constr.oevents) {
                    bindEvents_1.bindEvents(this, constr.oevents);
                }
            }
            else {
                if (el.firstChild) {
                    ElementProtoMixin_1.suppressConnectionStatusCallbacks();
                    this.input.$content = move_content_1.moveContent(document.createDocumentFragment(), el);
                    ElementProtoMixin_1.resumeConnectionStatusCallbacks();
                }
                else {
                    this.input.$content = document.createDocumentFragment();
                }
                var rawContent = constr._rawContent;
                if (!rawContent) {
                    var contentHTML = constr.template.render();
                    if (constr.events) {
                        contentHTML = contentHTML.replace(reClassBlockElement, createClassBlockElementReplacer(constr._contentBlockNames[0], constr.events, 'oncomponent-'));
                    }
                    if (constr.domEvents) {
                        contentHTML = contentHTML.replace(reClassBlockElement, createClassBlockElementReplacer(constr._contentBlockNames[0], constr.domEvents, 'on-'));
                    }
                    rawContent = constr._rawContent = html_to_fragment_1.htmlToFragment(contentHTML);
                }
                var content = rawContent.cloneNode(true);
                if (!Features_1.templateTag) {
                    var templates = content.querySelectorAll('template');
                    for (var i = 0, l = templates.length; i < l;) {
                        i += templates[i].content.querySelectorAll('template').length + 1;
                    }
                }
                var _a = bindContent_1.bindContent(content, this, this, { 0: null, 1: null }), bindings = _a[0], childComponents = _a[1];
                this._bindings = bindings;
                ElementProtoMixin_1.suppressConnectionStatusCallbacks();
                this.element.appendChild(content);
                ElementProtoMixin_1.resumeConnectionStatusCallbacks();
                if (childComponents) {
                    attachChildComponentElements_1.attachChildComponentElements(childComponents);
                }
                if (constr.oevents) {
                    bindEvents_1.bindEvents(this, constr.oevents);
                }
            }
            this.ready();
            this.isReady = true;
        }
        this.elementAttached();
    };
    Component.prototype._detach = function () {
        this._attached = false;
        this.elementDetached();
        this.dispose();
    };
    Component.prototype.dispose = function () {
        this._freezeBindings();
        return DisposableMixin_1.DisposableMixin.prototype.dispose.call(this);
    };
    Component.prototype._freezeBindings = function () {
        if (this._bindings) {
            componentBinding_1.freezeBindings(this._bindings);
        }
    };
    Component.prototype._unfreezeBindings = function () {
        if (this._bindings) {
            componentBinding_1.unfreezeBindings(this._bindings);
        }
    };
    Component.prototype._destroyBindings = function () {
        var bindings = this._bindings;
        if (bindings) {
            for (var i = bindings.length; i;) {
                bindings[--i].off();
            }
            this._bindings = null;
        }
    };
    // Callbacks
    Component.prototype.created = function () { };
    Component.prototype.initialize = function () { };
    Component.prototype.ready = function () { };
    Component.prototype.elementConnected = function () { };
    Component.prototype.elementDisconnected = function () { };
    Component.prototype.elementAttached = function () { };
    Component.prototype.elementDetached = function () { };
    Component.prototype.elementMoved = function () { };
    // Utils
    Component.prototype.$ = function (name, container) {
        var elList = this._getElementList(name, container);
        return (elList && elList.length ? elList[0].$component || elList[0] : null);
    };
    Component.prototype.$$ = function (name, container) {
        var elList = this._getElementList(name, container);
        return elList ? map.call(elList, function (el) { return el.$component || el; }) : [];
    };
    Component.prototype._getElementList = function (name, container) {
        var elListMap = this._elementListMap || (this._elementListMap = new map_set_polyfill_1.Map());
        var containerEl = container ?
            (container instanceof Component_1 ? container.element : container) :
            this.element;
        var key = container ? get_uid_1.getUID(containerEl) + '/' + name : name;
        var elList = elListMap.get(key);
        if (!elList) {
            var constr = this.constructor;
            var className = constr._elementClassNameMap[name];
            if (className) {
                elList = containerEl.getElementsByClassName(className);
                elListMap.set(key, elList);
            }
            else {
                var contentBlockNames = constr._contentBlockNames;
                for (var i = contentBlockNames.length - 1;; i--) {
                    className = contentBlockNames[i] + '__' + name;
                    elList = containerEl.getElementsByClassName(className);
                    if (elList.length) {
                        constr._elementClassNameMap[name] = className;
                        elListMap.set(key, elList);
                        break;
                    }
                    if (!i) {
                        break;
                    }
                }
                if (!elList.length) {
                    return;
                }
            }
        }
        return elList;
    };
    Component.register = registerComponent_1.registerComponent;
    Component.elementExtends = null;
    Component.input = null;
    Component.i18n = null;
    Component.template = null;
    Component.oevents = null;
    Component.events = null;
    Component.domEvents = null;
    Component = Component_1 = __decorate([
        di_1.inject('logger')
    ], Component);
    return Component;
    var Component_1;
}(cellx_1.EventEmitter));
exports.Component = Component;
var disposableMixinProto = DisposableMixin_1.DisposableMixin.prototype;
var componentProto = Component.prototype;
Object.getOwnPropertyNames(disposableMixinProto).forEach(function (name) {
    if (!(name in componentProto)) {
        Object.defineProperty(componentProto, name, Object.getOwnPropertyDescriptor(disposableMixinProto, name));
    }
});
created = componentProto.created;
initialize = componentProto.initialize;
ready = componentProto.ready;
elementConnected = componentProto.elementConnected;
elementDisconnected = componentProto.elementDisconnected;
elementAttached = componentProto.elementAttached;
elementDetached = componentProto.elementDetached;
elementMoved = componentProto.elementMoved;
document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
    document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
    handledEvents_1.handledEvents.forEach(function (type) {
        document.documentElement.addEventListener(type, function (evt) {
            if (evt.target != document.documentElement) {
                handleEvent_1.handleEvent(evt, document.documentElement);
            }
        });
    });
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = __webpack_require__(46);
var di_1 = __webpack_require__(9);
var Features_1 = __webpack_require__(7);
var KEY_ELEMENT_CONNECTED_1 = __webpack_require__(8);
var isConnectionStatusCallbacksSuppressed = false;
function suppressConnectionStatusCallbacks() {
    isConnectionStatusCallbacksSuppressed = true;
}
exports.suppressConnectionStatusCallbacks = suppressConnectionStatusCallbacks;
function resumeConnectionStatusCallbacks() {
    isConnectionStatusCallbacksSuppressed = false;
}
exports.resumeConnectionStatusCallbacks = resumeConnectionStatusCallbacks;
exports.ElementProtoMixin = (_a = {
        rioniteComponent: null,
        get $component() {
            return this.rioniteComponent || di_1.container.get(this.constructor._rioniteComponentConstructor, [this]);
        }
    },
    _a[KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED] = false,
    _a.connectedCallback = function () {
        var _this = this;
        this[KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED] = true;
        if (isConnectionStatusCallbacksSuppressed) {
            return;
        }
        var component = this.rioniteComponent;
        if (component) {
            component.elementConnected();
            if (component._attached) {
                if (component._parentComponent === null) {
                    component._parentComponent = undefined;
                    component.elementMoved();
                }
            }
            else {
                component._parentComponent = undefined;
                component._attach();
            }
        }
        else {
            defer_1.defer(function () {
                if (_this[KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED]) {
                    var component_1 = _this.$component;
                    component_1._parentComponent = undefined;
                    if (!component_1.parentComponent && !component_1._attached) {
                        component_1.elementConnected();
                        component_1._attach();
                    }
                }
            });
        }
    },
    _a.disconnectedCallback = function () {
        this[KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED] = false;
        if (isConnectionStatusCallbacksSuppressed) {
            return;
        }
        var component = this.rioniteComponent;
        if (component && component._attached) {
            component._parentComponent = null;
            component.elementDisconnected();
            defer_1.defer(function () {
                if (component._parentComponent === null && component._attached) {
                    component._detach();
                }
            });
        }
    },
    _a.attributeChangedCallback = function (name, oldValue, value) {
        var component = this.rioniteComponent;
        if (component && component.isReady) {
            var input = component.input;
            var privateName = '_' + name;
            if (input[privateName]) {
                input[privateName](value);
            }
            else if (Features_1.nativeCustomElements) {
                throw new TypeError("Cannot write to readonly input property \"" + name + "\"");
            }
        }
    },
    _a);
var _a;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(2);
Component_1.Component.register;
function ComponentDecorator(config) {
    return function (componentConstr) {
        componentConstr.elementIs = config.elementIs;
        if (config.elementExtends !== undefined) {
            componentConstr.elementExtends = config.elementExtends;
        }
        if (config.input !== undefined) {
            componentConstr.input = config.input;
        }
        if (config.i18n !== undefined) {
            componentConstr.i18n = config.i18n;
        }
        if (config.template !== undefined) {
            componentConstr.template = config.template;
        }
        if (config.oevents !== undefined) {
            componentConstr.oevents = config.oevents;
        }
        if (config.events !== undefined) {
            componentConstr.events = config.events;
        }
        if (config.domEvents !== undefined) {
            componentConstr.domEvents = config.domEvents;
        }
        Component_1.Component.register(componentConstr);
    };
}
exports.ComponentDecorator = ComponentDecorator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function attachChildComponentElements(childComponents) {
    for (var _i = 0, childComponents_1 = childComponents; _i < childComponents_1.length; _i++) {
        var childComponent = childComponents_1[_i];
        if (!childComponent._attached) {
            childComponent._parentComponent = undefined;
            childComponent.elementConnected();
            childComponent._attach();
        }
    }
}
exports.attachChildComponentElements = attachChildComponentElements;


/***/ }),
/* 6 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var camelize_1 = __webpack_require__(17);
var map_set_polyfill_1 = __webpack_require__(0);
var set_attribute_1 = __webpack_require__(34);
var cellx_1 = __webpack_require__(1);
var compileContentTextFragment_1 = __webpack_require__(35);
var ContentTextFragmentParser_1 = __webpack_require__(18);
var AttributeBindingCell = /** @class */ (function (_super) {
    __extends(AttributeBindingCell, _super);
    function AttributeBindingCell(pull, el, attrName, opts) {
        var _this = _super.call(this, pull, opts) || this;
        _this.element = el;
        _this.attributeName = attrName;
        return _this;
    }
    return AttributeBindingCell;
}(cellx_1.Cell));
var TextNodeBindingCell = /** @class */ (function (_super) {
    __extends(TextNodeBindingCell, _super);
    function TextNodeBindingCell(pull, textNode, opts) {
        var _this = _super.call(this, pull, opts) || this;
        _this.textNode = textNode;
        return _this;
    }
    return TextNodeBindingCell;
}(cellx_1.Cell));
function onAttributeBindingCellChange(evt) {
    set_attribute_1.setAttribute(evt.target.element, evt.target.attributeName, evt.data.value);
}
function onTextNodeBindingCellChange(evt) {
    evt.target.textNode.nodeValue = evt.data.value;
}
var ContentTextFragmentNodeType = ContentTextFragmentParser_1.ContentTextFragmentParser.ContentTextFragmentNodeType;
function bindContent(node, ownerComponent, context, result) {
    for (var child = node.firstChild; child; child = child.nextSibling) {
        switch (child.nodeType) {
            case Node.ELEMENT_NODE: {
                var childComponent = child.$component;
                var $specified = void 0;
                if (childComponent) {
                    $specified = new map_set_polyfill_1.Set();
                }
                var attrs = child.attributes;
                for (var i = attrs.length; i;) {
                    var attr = attrs.item(--i);
                    if ($specified) {
                        $specified.add(camelize_1.camelize(attr.name, true));
                    }
                    var value = attr.value;
                    if (value.indexOf('{') != -1) {
                        var contentTextFragment = (new ContentTextFragmentParser_1.ContentTextFragmentParser(value)).parse();
                        if (contentTextFragment.length > 1 ||
                            contentTextFragment[0].nodeType == ContentTextFragmentNodeType.BINDING) {
                            var name_1 = attr.name;
                            if (name_1.charAt(0) == '_') {
                                name_1 = name_1.slice(1);
                            }
                            var cell = new AttributeBindingCell(compileContentTextFragment_1.compileContentTextFragment(contentTextFragment, value, contentTextFragment.length == 1), child, name_1, {
                                context: context,
                                onChange: onAttributeBindingCellChange
                            });
                            set_attribute_1.setAttribute(child, name_1, cell.get());
                            (result[0] || (result[0] = [])).push(cell);
                        }
                    }
                }
                if (childComponent) {
                    childComponent.ownerComponent = ownerComponent;
                    childComponent.input.$context = context;
                    childComponent.input.$specified = $specified;
                    (result[1] || (result[1] = [])).push(childComponent);
                }
                if (child.firstChild &&
                    (!childComponent || childComponent.constructor.template == null)) {
                    bindContent(child, ownerComponent, context, result);
                }
                break;
            }
            case Node.TEXT_NODE: {
                for (var nextChild = void 0; (nextChild = child.nextSibling) && nextChild.nodeType == Node.TEXT_NODE;) {
                    child.nodeValue += nextChild.nodeValue;
                    node.removeChild(nextChild);
                }
                var value = child.nodeValue;
                if (value.indexOf('{') != -1) {
                    var contentTextFragment = (new ContentTextFragmentParser_1.ContentTextFragmentParser(value)).parse();
                    if (contentTextFragment.length > 1 ||
                        contentTextFragment[0].nodeType == ContentTextFragmentNodeType.BINDING) {
                        var cell = new TextNodeBindingCell(compileContentTextFragment_1.compileContentTextFragment(contentTextFragment, value, false), child, {
                            context: context,
                            onChange: onTextNodeBindingCellChange
                        });
                        child.nodeValue = cell.get();
                        (result[0] || (result[0] = [])).push(cell);
                    }
                }
                break;
            }
        }
    }
    return result;
}
exports.bindContent = bindContent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dummyEl = document.createElement('div');
dummyEl.innerHTML = '<template>1</template>';
exports.templateTag = !dummyEl.firstChild.firstChild;
var nativeCustomElementsFeature = false;
function TestNativeCustomElementsFeature(self) {
    return HTMLElement.call(this, self);
}
Object.defineProperty(TestNativeCustomElementsFeature, 'observedAttributes', {
    get: function () {
        return ['test'];
    }
});
TestNativeCustomElementsFeature.prototype = Object.create(HTMLElement.prototype, {
    constructor: {
        configurable: true,
        enumerable: false,
        writable: true,
        value: TestNativeCustomElementsFeature
    }
});
TestNativeCustomElementsFeature.prototype.attributeChangedCallback = function () {
    nativeCustomElementsFeature = true;
};
window.customElements.define('test-native-custom-elements-feature', TestNativeCustomElementsFeature);
var testNCEF = document.createElement('test-native-custom-elements-feature');
testNCEF.setAttribute('test', '');
exports.nativeCustomElements = nativeCustomElementsFeature;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var symbol_polyfill_1 = __webpack_require__(16);
exports.KEY_ELEMENT_CONNECTED = symbol_polyfill_1.Symbol('Rionite.KEY_ELEMENT_CONNECTED');


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __webpack_require__(30);
exports.Container = Container_1.Container;
var injectDecorator_1 = __webpack_require__(31);
exports.inject = injectDecorator_1.injectDecorator;
var container = new Container_1.Container();
exports.container = container;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(0);
exports.componentInputValueMap = new map_set_polyfill_1.Map();


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var namePattern_1 = __webpack_require__(15);
exports.keypathPattern = "(?:" + namePattern_1.namePattern + "|\\d+)(?:\\.(?:" + namePattern_1.namePattern + "|\\d+))*";


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.namePattern = '[$_a-zA-Z][$\\w]*';


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keypathPattern_1 = __webpack_require__(14);
var keypathToJSExpression_1 = __webpack_require__(19);
var namePattern_1 = __webpack_require__(15);
var ContentTextFragmentNodeType;
(function (ContentTextFragmentNodeType) {
    ContentTextFragmentNodeType[ContentTextFragmentNodeType["TEXT"] = 1] = "TEXT";
    ContentTextFragmentNodeType[ContentTextFragmentNodeType["BINDING"] = 2] = "BINDING";
    ContentTextFragmentNodeType[ContentTextFragmentNodeType["BINDING_KEYPATH"] = 3] = "BINDING_KEYPATH";
    ContentTextFragmentNodeType[ContentTextFragmentNodeType["BINDING_FORMATTER"] = 4] = "BINDING_FORMATTER";
    ContentTextFragmentNodeType[ContentTextFragmentNodeType["BINDING_FORMATTER_ARGUMENTS"] = 5] = "BINDING_FORMATTER_ARGUMENTS";
})(ContentTextFragmentNodeType = exports.ContentTextFragmentNodeType || (exports.ContentTextFragmentNodeType = {}));
var reNameOrNothing = RegExp(namePattern_1.namePattern + '|', 'g');
var reKeypathOrNothing = RegExp(keypathPattern_1.keypathPattern + '|', 'g');
var reBooleanOrNothing = /false|true|/g;
var reNumberOrNothing = /(?:[+-]\s*)?(?:0b[01]+|0[0-7]+|0x[0-9a-fA-F]+|(?:(?:0|[1-9]\d*)(?:\.\d+)?|\.\d+)(?:[eE][+-]?\d+)?|Infinity|NaN)|/g;
var reVacuumOrNothing = /null|undefined|void 0|/g;
var ContentTextFragmentParser = /** @class */ (function () {
    function ContentTextFragmentParser(contentTextFragment) {
        this.contentTextFragment = contentTextFragment;
    }
    ContentTextFragmentParser.prototype.parse = function () {
        var contentTextFragment = this.contentTextFragment;
        if (!contentTextFragment) {
            return [];
        }
        this.at = 0;
        var result = this.result = [];
        for (var index = void 0; (index = contentTextFragment.indexOf('{', this.at)) != -1;) {
            this._pushText(contentTextFragment.slice(this.at, index));
            this.at = index;
            this.chr = contentTextFragment.charAt(index);
            var binding = this._readBinding();
            if (binding) {
                result.push(binding);
            }
            else {
                this._pushText(this.chr);
                this._next('{');
            }
        }
        this._pushText(contentTextFragment.slice(this.at));
        return result;
    };
    ContentTextFragmentParser.prototype._pushText = function (value) {
        if (value) {
            var result = this.result;
            var resultLen = result.length;
            if (resultLen && result[resultLen - 1].nodeType == ContentTextFragmentNodeType.TEXT) {
                result[resultLen - 1].value = value;
            }
            else {
                result.push({
                    nodeType: ContentTextFragmentNodeType.TEXT,
                    value: value
                });
            }
        }
    };
    ContentTextFragmentParser.prototype._readBinding = function () {
        var at = this.at;
        this._next('{');
        this._skipWhitespaces();
        var argument = this._readValue();
        var isArgumentKeypath;
        if (!argument) {
            argument = this._readKeypath();
            isArgumentKeypath = true;
        }
        if (argument) {
            var formatters = void 0;
            for (var formatter = void 0; this._skipWhitespaces() == '|' && (formatter = this._readFormatter());) {
                (formatters || (formatters = [])).push(formatter);
            }
            if (this.chr == '}') {
                this._next();
                return {
                    nodeType: ContentTextFragmentNodeType.BINDING,
                    argument: argument,
                    isArgumentKeypath: isArgumentKeypath || false,
                    formatters: formatters || null,
                    raw: this.contentTextFragment.slice(at, this.at)
                };
            }
        }
        this.at = at;
        this.chr = this.contentTextFragment.charAt(at);
        return null;
    };
    ContentTextFragmentParser.prototype._readFormatter = function () {
        var at = this.at;
        this._next('|');
        this._skipWhitespaces();
        var name = this._readName();
        if (name) {
            var args = this.chr == '(' ? this._readFormatterArguments() : null;
            return {
                nodeType: ContentTextFragmentNodeType.BINDING_FORMATTER,
                name: name,
                arguments: args
            };
        }
        this.at = at;
        this.chr = this.contentTextFragment.charAt(at);
        return null;
    };
    ContentTextFragmentParser.prototype._readFormatterArguments = function () {
        var at = this.at;
        this._next('(');
        var args = [];
        if (this._skipWhitespaces() != ')') {
            for (;;) {
                var arg = this._readValue() || this._readKeypath(true);
                if (arg) {
                    if (this._skipWhitespaces() == ',' || this.chr == ')') {
                        args.push(arg);
                        if (this.chr == ',') {
                            this._next();
                            this._skipWhitespaces();
                            continue;
                        }
                        break;
                    }
                }
                this.at = at;
                this.chr = this.contentTextFragment.charAt(at);
                return null;
            }
        }
        this._next();
        return {
            nodeType: ContentTextFragmentNodeType.BINDING_FORMATTER_ARGUMENTS,
            value: args
        };
    };
    ContentTextFragmentParser.prototype._readValue = function () {
        switch (this.chr) {
            case '{': {
                return this._readObject();
            }
            case '[': {
                return this._readArray();
            }
            case "'":
            case '"': {
                return this._readString();
            }
        }
        var readers = ['_readBoolean', '_readNumber', '_readVacuum'];
        for (var _i = 0, readers_1 = readers; _i < readers_1.length; _i++) {
            var reader = readers_1[_i];
            var value = this[reader]();
            if (value) {
                return value;
            }
        }
        return null;
    };
    ContentTextFragmentParser.prototype._readObject = function () {
        var at = this.at;
        this._next('{');
        var obj = '{';
        while (this._skipWhitespaces() != '}') {
            var key = this.chr == "'" || this.chr == '"' ? this._readString() : this._readObjectKey();
            if (key && this._skipWhitespaces() == ':') {
                this._next();
                this._skipWhitespaces();
                var valueOrKeypath = this._readValue() || this._readKeypath(true);
                if (valueOrKeypath) {
                    if (this._skipWhitespaces() == ',') {
                        obj += key + ':' + valueOrKeypath + ',';
                        this._next();
                        continue;
                    }
                    else if (this.chr == '}') {
                        obj += key + ':' + valueOrKeypath + '}';
                        break;
                    }
                }
            }
            this.at = at;
            this.chr = this.contentTextFragment.charAt(at);
            return null;
        }
        this._next();
        return obj;
    };
    ContentTextFragmentParser.prototype._readObjectKey = function () {
        return this._readName();
    };
    ContentTextFragmentParser.prototype._readArray = function () {
        var at = this.at;
        this._next('[');
        var arr = '[';
        while (this._skipWhitespaces() != ']') {
            if (this.chr == ',') {
                arr += ',';
                this._next();
            }
            else {
                var valueOrKeypath = this._readValue() || this._readKeypath(true);
                if (valueOrKeypath) {
                    arr += valueOrKeypath;
                }
                else {
                    this.at = at;
                    this.chr = this.contentTextFragment.charAt(at);
                    return null;
                }
            }
        }
        this._next();
        return arr + ']';
    };
    ContentTextFragmentParser.prototype._readBoolean = function () {
        reBooleanOrNothing.lastIndex = this.at;
        var bool = reBooleanOrNothing.exec(this.contentTextFragment)[0];
        if (bool) {
            this.chr = this.contentTextFragment.charAt((this.at += bool.length));
            return bool;
        }
        return null;
    };
    ContentTextFragmentParser.prototype._readNumber = function () {
        reNumberOrNothing.lastIndex = this.at;
        var num = reNumberOrNothing.exec(this.contentTextFragment)[0];
        if (num) {
            this.chr = this.contentTextFragment.charAt((this.at += num.length));
            return num;
        }
        return null;
    };
    ContentTextFragmentParser.prototype._readString = function () {
        var quoteChar = this.chr;
        if (quoteChar != "'" && quoteChar != '"') {
            throw {
                name: 'SyntaxError',
                message: "Expected \"'\" instead of \"" + this.chr + "\"",
                at: this.at,
                contentTextFragment: this.contentTextFragment
            };
        }
        var at = this.at;
        var str = '';
        for (var next = void 0; (next = this._next());) {
            if (next == quoteChar) {
                this._next();
                return quoteChar + str + quoteChar;
            }
            if (next == '\\') {
                str += next + this._next();
            }
            else {
                if (next == '\r' || next == '\n') {
                    break;
                }
                str += next;
            }
        }
        this.at = at;
        this.chr = this.contentTextFragment.charAt(at);
        return null;
    };
    ContentTextFragmentParser.prototype._readVacuum = function () {
        reVacuumOrNothing.lastIndex = this.at;
        var vacuum = reVacuumOrNothing.exec(this.contentTextFragment)[0];
        if (vacuum) {
            this.chr = this.contentTextFragment.charAt((this.at += vacuum.length));
            return vacuum;
        }
        return null;
    };
    ContentTextFragmentParser.prototype._readKeypath = function (toJSExpression) {
        reKeypathOrNothing.lastIndex = this.at;
        var keypath = reKeypathOrNothing.exec(this.contentTextFragment)[0];
        if (keypath) {
            this.chr = this.contentTextFragment.charAt((this.at += keypath.length));
            return toJSExpression ? keypathToJSExpression_1.keypathToJSExpression(keypath) : keypath;
        }
        return null;
    };
    ContentTextFragmentParser.prototype._readName = function () {
        reNameOrNothing.lastIndex = this.at;
        var name = reNameOrNothing.exec(this.contentTextFragment)[0];
        if (name) {
            this.chr = this.contentTextFragment.charAt((this.at += name.length));
            return name;
        }
        return null;
    };
    ContentTextFragmentParser.prototype._skipWhitespaces = function () {
        var chr = this.chr;
        while (chr && chr <= ' ') {
            chr = this._next();
        }
        return chr;
    };
    ContentTextFragmentParser.prototype._next = function (current) {
        if (current && current != this.chr) {
            throw {
                name: 'SyntaxError',
                message: "Expected \"" + current + "\" instead of \"" + this.chr + "\"",
                at: this.at,
                contentTextFragment: this.contentTextFragment
            };
        }
        return (this.chr = this.contentTextFragment.charAt(++this.at));
    };
    ContentTextFragmentParser.ContentTextFragmentNodeType = ContentTextFragmentNodeType;
    return ContentTextFragmentParser;
}());
exports.ContentTextFragmentParser = ContentTextFragmentParser;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cache = Object.create(null);
function keypathToJSExpression(keypath) {
    if (cache[keypath]) {
        return cache[keypath];
    }
    var keys = keypath.split('.');
    var keyCount = keys.length;
    if (keyCount == 1) {
        return (cache[keypath] = "this['" + keypath + "']");
    }
    var index = keyCount - 2;
    var jsExpr = Array(index);
    while (index) {
        jsExpr[--index] = " && (temp = temp['" + keys[index + 1] + "'])";
    }
    return (cache[keypath] = "(temp = this['" + keys[0] + "'])" + jsExpr.join('') + " && temp['" + keys[keyCount - 1] + "']");
}
exports.keypathToJSExpression = keypathToJSExpression;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gettext_1 = __webpack_require__(38);
exports.formatters = {
    or: function or(value, arg) {
        return value || arg;
    },
    default: function default_(value, arg) {
        return value === undefined ? arg : value;
    },
    not: function not(value) {
        return !value;
    },
    eq: function eq(value, arg) {
        return value == arg;
    },
    identical: function identical(value, arg) {
        return value === arg;
    },
    lt: function lt(value, arg) {
        return value < arg;
    },
    lte: function lte(value, arg) {
        return value <= arg;
    },
    gt: function gt(value, arg) {
        return value > arg;
    },
    gte: function gte(value, arg) {
        return value >= arg;
    },
    has: function has(obj, key) {
        return !!obj && (typeof obj.has == 'function' ? obj.has(key) : obj.hasOwnProperty(key));
    },
    get: function get(obj, key) {
        return obj && (typeof obj.get == 'function' ? obj.get(key) : obj[key]);
    },
    // Safary: "Cannot declare a parameter named 'key' as it shadows the name of a strict mode function."
    key: function key_(obj, key) {
        return obj && obj[key];
    },
    join: function join(arr, separator) {
        if (separator === void 0) { separator = ', '; }
        return arr && arr.join(separator);
    },
    t: gettext_1.getText.t,
    pt: gettext_1.getText.pt,
    nt: function nt(count, key) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        args.unshift(count);
        return gettext_1.getText('', key, true, args);
    },
    npt: function npt(count, key, context) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        args.unshift(count);
        return gettext_1.getText(context, key, true, args);
    },
    json: function json(value) {
        return JSON.stringify(value);
    }
};
exports.formatters.seq = exports.formatters.identical;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(0);
exports.componentConstructorMap = new map_set_polyfill_1.Map();


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hyphenize_1 = __webpack_require__(23);
var cellx_1 = __webpack_require__(1);
var componentInputTypeMap_1 = __webpack_require__(41);
var componentInputTypeSerializerMap_1 = __webpack_require__(42);
function initComponentInputProperty(componentInput, name, el) {
    var component = el.$component;
    var cipc = component.constructor.input[name];
    if (cipc == null) {
        return;
    }
    var type = typeof cipc;
    var defaultValue;
    var required;
    var readonly;
    if (type == 'function') {
        type = cipc;
        required = readonly = false;
    }
    else if (type == 'object' && (cipc.type !== undefined || cipc.default !== undefined)) {
        type = cipc.type;
        defaultValue = cipc.default;
        if (type === undefined) {
            type = typeof defaultValue;
        }
        else if (defaultValue !== undefined && componentInputTypeMap_1.componentInputTypeMap.has(type) &&
            componentInputTypeMap_1.componentInputTypeMap.get(type) != typeof defaultValue) {
            throw new TypeError('Specified type does not match defaultValue type');
        }
        required = cipc.required;
        readonly = cipc.readonly;
    }
    else {
        defaultValue = cipc;
        required = readonly = false;
    }
    var typeSerializer = componentInputTypeSerializerMap_1.componentInputTypeSerializerMap.get(type);
    if (!typeSerializer) {
        throw new TypeError('Unsupported component input type');
    }
    var hyphenizedName = hyphenize_1.hyphenize(name, true);
    var rawValue = el.getAttribute(hyphenizedName);
    if (required && rawValue === null) {
        throw new TypeError("Input property \"" + name + "\" is required");
    }
    if (rawValue === null && defaultValue != null && defaultValue !== false) {
        el.setAttribute(hyphenizedName, typeSerializer.write(defaultValue));
    }
    var value = typeSerializer.read(rawValue, defaultValue);
    var descriptor;
    if (readonly) {
        descriptor = {
            configurable: true,
            enumerable: true,
            get: function () {
                return value;
            },
            set: function (val) {
                if (val !== value) {
                    throw new TypeError("Input property \"" + name + "\" is readonly");
                }
            }
        };
    }
    else {
        var valueCell_1;
        var setRawValue = function (rawValue) {
            var val = typeSerializer.read(rawValue, defaultValue);
            if (valueCell_1) {
                valueCell_1.set(val);
            }
            else {
                value = val;
            }
        };
        componentInput['_' + name] = setRawValue;
        if (name != hyphenizedName) {
            componentInput['_' + hyphenizedName] = setRawValue;
        }
        descriptor = {
            configurable: true,
            enumerable: true,
            get: function () {
                if (valueCell_1) {
                    return valueCell_1.get();
                }
                var currentlyPulling = cellx_1.Cell.currentlyPulling;
                if (currentlyPulling || cellx_1.EventEmitter.currentlySubscribing) {
                    valueCell_1 = new cellx_1.Cell(value, {
                        onChange: function (evt) {
                            component.emit(evt.target == valueCell_1 ?
                                {
                                    type: "input-" + hyphenizedName + "-change",
                                    data: evt.data
                                } :
                                {
                                    type: "input-" + hyphenizedName + "-change",
                                    data: {
                                        oldValue: evt.target,
                                        value: evt.target
                                    }
                                });
                        }
                    });
                    if (currentlyPulling) {
                        return valueCell_1.get();
                    }
                }
                return value;
            },
            set: function (val) {
                var rawValue = typeSerializer.write(val, defaultValue);
                if (rawValue === null) {
                    el.removeAttribute(hyphenizedName);
                }
                else {
                    el.setAttribute(hyphenizedName, rawValue);
                }
                if (valueCell_1) {
                    valueCell_1.set(val);
                }
                else {
                    value = val;
                }
            }
        };
    }
    Object.defineProperty(componentInput, name, descriptor);
}
exports.ComponentInput = {
    init: function (component) {
        var componentInputConfig = component.constructor.input;
        var el = component.element;
        var componentInput = { $content: null, $context: null, $specified: null };
        if (componentInputConfig) {
            for (var name_1 in componentInputConfig) {
                initComponentInputProperty(componentInput, name_1, el);
            }
        }
        return componentInput;
    }
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var next_uid_1 = __webpack_require__(45);
var cellx_1 = __webpack_require__(1);
var DisposableMixin = /** @class */ (function () {
    function DisposableMixin() {
        this._disposables = {};
    }
    DisposableMixin.prototype.listenTo = function (target, type, listener, context, useCapture) {
        var _this = this;
        var listenings;
        if (typeof type == 'object') {
            listenings = [];
            if (Array.isArray(type)) {
                for (var i = 0, l = type.length; i < l; i++) {
                    listenings.push(this.listenTo(target, type[i], listener, context, useCapture));
                }
            }
            else {
                for (var name_1 in type) {
                    listenings.push(this.listenTo(target, name_1, type[name_1], listener, context));
                }
            }
        }
        else {
            if (Array.isArray(target) || target instanceof NodeList || target instanceof HTMLCollection) {
                listenings = [];
                for (var i = 0, l = target.length; i < l; i++) {
                    listenings.push(this.listenTo(target[i], type, listener, context, useCapture));
                }
            }
            else if (Array.isArray(listener)) {
                listenings = [];
                for (var i = 0, l = listener.length; i < l; i++) {
                    listenings.push(this.listenTo(target, type, listener[i], context, useCapture));
                }
            }
            else {
                return this._listenTo(target, type, listener, context !== undefined ? context : this, useCapture || false);
            }
        }
        var id = next_uid_1.nextUID();
        var stopListening = function () {
            for (var i = listenings.length; i;) {
                listenings[--i].stop();
            }
            delete _this._disposables[id];
        };
        var listening = this._disposables[id] = {
            stop: stopListening,
            dispose: stopListening
        };
        return listening;
    };
    DisposableMixin.prototype._listenTo = function (target, type, listener, context, useCapture) {
        var _this = this;
        if (target instanceof cellx_1.EventEmitter) {
            target.on(type, listener, context);
        }
        else if (target.addEventListener) {
            if (target !== context) {
                listener = listener.bind(context);
            }
            target.addEventListener(type, listener, useCapture);
        }
        else {
            throw new TypeError('Unable to add a listener');
        }
        var id = next_uid_1.nextUID();
        var stopListening = function () {
            if (_this._disposables[id]) {
                if (target instanceof cellx_1.EventEmitter) {
                    target.off(type, listener, context);
                }
                else {
                    target.removeEventListener(type, listener, useCapture);
                }
                delete _this._disposables[id];
            }
        };
        var listening = this._disposables[id] = {
            stop: stopListening,
            dispose: stopListening
        };
        return listening;
    };
    DisposableMixin.prototype.setTimeout = function (callback, delay) {
        var _this = this;
        var id = next_uid_1.nextUID();
        var timeoutId = setTimeout(function () {
            delete _this._disposables[id];
            callback.call(_this);
        }, delay);
        var clearTimeout_ = function () {
            if (_this._disposables[id]) {
                clearTimeout(timeoutId);
                delete _this._disposables[id];
            }
        };
        var timeout = this._disposables[id] = {
            clear: clearTimeout_,
            dispose: clearTimeout_
        };
        return timeout;
    };
    DisposableMixin.prototype.setInterval = function (callback, delay) {
        var _this = this;
        var id = next_uid_1.nextUID();
        var intervalId = setInterval(function () {
            callback.call(_this);
        }, delay);
        var clearInterval_ = function () {
            if (_this._disposables[id]) {
                clearInterval(intervalId);
                delete _this._disposables[id];
            }
        };
        var interval = this._disposables[id] = {
            clear: clearInterval_,
            dispose: clearInterval_
        };
        return interval;
    };
    DisposableMixin.prototype.registerCallback = function (callback) {
        var _this = this;
        var id = next_uid_1.nextUID();
        var disposable = this;
        var cancelCallback = function () {
            delete _this._disposables[id];
        };
        var registeredCallback = function registeredCallback() {
            if (disposable._disposables[id]) {
                delete disposable._disposables[id];
                return callback.apply(disposable, arguments);
            }
        };
        registeredCallback.cancel = cancelCallback;
        registeredCallback.dispose = cancelCallback;
        this._disposables[id] = registeredCallback;
        return registeredCallback;
    };
    DisposableMixin.prototype.dispose = function () {
        var disposables = this._disposables;
        for (var id in disposables) {
            disposables[id].dispose();
        }
        return this;
    };
    return DisposableMixin;
}());
exports.DisposableMixin = DisposableMixin;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
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
var next_tick_1 = __webpack_require__(27);
var cellx_1 = __webpack_require__(1);
var attachChildComponentElements_1 = __webpack_require__(5);
var bindContent_1 = __webpack_require__(6);
var compileKeypath_1 = __webpack_require__(28);
var Component_1 = __webpack_require__(2);
var ComponentDecorator_1 = __webpack_require__(4);
var ElementProtoMixin_1 = __webpack_require__(3);
var Features_1 = __webpack_require__(7);
var KEY_ELEMENT_CONNECTED_1 = __webpack_require__(8);
var keypathPattern_1 = __webpack_require__(14);
var slice = Array.prototype.slice;
var reKeypath = RegExp("^" + keypathPattern_1.keypathPattern + "$");
var RtIfThen = /** @class */ (function (_super) {
    __extends(RtIfThen, _super);
    function RtIfThen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._elseMode = false;
        _this._active = false;
        return _this;
    }
    RtIfThen.prototype.elementConnected = function () {
        if (this._active) {
            return;
        }
        this._active = true;
        if (!this.initialized) {
            var if_ = (this.input['if'] || '').trim();
            if (!reKeypath.test(if_)) {
                throw new SyntaxError("Invalid value of attribute \"if\" (" + if_ + ")");
            }
            var getIfValue_1 = compileKeypath_1.compileKeypath(if_);
            this._if = new cellx_1.Cell(function () {
                return !!getIfValue_1.call(this);
            }, { context: this.input.$context });
            this.initialized = true;
        }
        this._if.on('change', this._onIfChange, this);
        this._render(false);
    };
    RtIfThen.prototype.elementDisconnected = function () {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (!_this.element[KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED]) {
                _this._deactivate();
            }
        });
    };
    RtIfThen.prototype._onIfChange = function () {
        if (this.element.parentNode) {
            this._render(true);
        }
    };
    RtIfThen.prototype._attach = function () {
        this._attached = true;
    };
    RtIfThen.prototype._detach = function () {
        this._attached = false;
    };
    RtIfThen.prototype._render = function (changed) {
        if (this._elseMode ? !this._if.get() : this._if.get()) {
            var content = document.importNode(this.element.content, true);
            if (!Features_1.templateTag) {
                var templates = content.querySelectorAll('template');
                for (var i = 0, l = templates.length; i < l;) {
                    i += templates[i].content.querySelectorAll('template').length + 1;
                }
            }
            var _a = bindContent_1.bindContent(content, this.ownerComponent, this.input.$context, { 0: null, 1: null }), bindings = _a[0], childComponents = _a[1];
            this._nodes = slice.call(content.childNodes);
            this._bindings = bindings;
            ElementProtoMixin_1.suppressConnectionStatusCallbacks();
            this.element.parentNode.insertBefore(content, this.element.nextSibling);
            ElementProtoMixin_1.resumeConnectionStatusCallbacks();
            if (childComponents) {
                attachChildComponentElements_1.attachChildComponentElements(childComponents);
            }
        }
        else {
            var nodes = this._nodes;
            if (nodes) {
                this._destroyBindings();
                for (var i = nodes.length; i;) {
                    var node = nodes[--i];
                    var parentNode = node.parentNode;
                    if (parentNode) {
                        parentNode.removeChild(node);
                    }
                }
                this._nodes = null;
            }
        }
        if (changed) {
            cellx_1.Cell.forceRelease();
            this.emit('change');
        }
    };
    RtIfThen.prototype._deactivate = function () {
        if (!this._active) {
            return;
        }
        this._active = false;
        this._if.off('change', this._onIfChange, this);
        var nodes = this._nodes;
        if (nodes) {
            this._destroyBindings();
            for (var i = nodes.length; i;) {
                var node = nodes[--i];
                var parentNode = node.parentNode;
                if (parentNode) {
                    parentNode.removeChild(node);
                }
            }
        }
    };
    RtIfThen = __decorate([
        ComponentDecorator_1.ComponentDecorator({
            elementIs: 'rt-if-then',
            elementExtends: 'template',
            input: {
                if: { type: String, required: true, readonly: true }
            }
        })
    ], RtIfThen);
    return RtIfThen;
}(Component_1.Component));
exports.RtIfThen = RtIfThen;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keypathToJSExpression_1 = __webpack_require__(19);
var cache = Object.create(null);
function compileKeypath(keypath) {
    return cache[keypath] || (cache[keypath] = Function("var temp; return " + keypathToJSExpression_1.keypathToJSExpression(keypath) + ";"));
}
exports.compileKeypath = compileKeypath;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var di_1 = __webpack_require__(9);
var logger_1 = __webpack_require__(32);
var nelm_1 = __webpack_require__(10);
exports.NelmNodeType = nelm_1.NodeType;
exports.NelmParser = nelm_1.Parser;
exports.Template = nelm_1.Template;
var Component_1 = __webpack_require__(2);
exports.Component = Component_1.Component;
var ComponentDecorator_1 = __webpack_require__(4);
var ComponentInput_1 = __webpack_require__(22);
exports.ComponentInput = ComponentInput_1.ComponentInput;
var componentInputValueMap_1 = __webpack_require__(13);
exports.componentInputValueMap = componentInputValueMap_1.componentInputValueMap;
var rt_content_1 = __webpack_require__(52);
var rt_if_else_1 = __webpack_require__(53);
var rt_if_then_1 = __webpack_require__(26);
var rt_repeat_1 = __webpack_require__(54);
var rt_slot_1 = __webpack_require__(55);
var DisposableMixin_1 = __webpack_require__(24);
exports.DisposableMixin = DisposableMixin_1.DisposableMixin;
var formatters_1 = __webpack_require__(20);
exports.formatters = formatters_1.formatters;
var KEY_ELEMENT_CONNECTED_1 = __webpack_require__(8);
exports.KEY_ELEMENT_CONNECTED = KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED;
__webpack_require__(56);
var Components = {
    RtContent: rt_content_1.RtContent,
    RtSlot: rt_slot_1.RtSlot,
    RtIfThen: rt_if_then_1.RtIfThen,
    RtIfElse: rt_if_else_1.RtIfElse,
    RtRepeat: rt_repeat_1.RtRepeat
};
exports.Components = Components;
var d = {
    Component: ComponentDecorator_1.ComponentDecorator
};
exports.d = d;
di_1.container.register('logger', logger_1.logger);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container = /** @class */ (function () {
    function Container() {
        this._services = Object.create(null);
    }
    Container.prototype.register = function (key, service) {
        this._services[key] = service;
        return this;
    };
    Container.prototype.get = function (constr, args) {
        var keys = constr.inject;
        var inject;
        if (keys) {
            var services = this._services;
            inject = new Array(keys.length);
            for (var i = 0, l = keys.length; i < l; i++) {
                var service = services[keys[i]];
                if (!service) {
                    throw new TypeError("Service \"" + keys[i] + "\" is not registered");
                }
                inject[i] = (typeof service == 'function' ? this.get(service) : service);
            }
        }
        var instance = Object.create(constr.prototype);
        constr.apply(instance, inject && args ? inject.concat(args) : inject || args || []);
        return instance;
    };
    return Container;
}());
exports.Container = Container;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function injectDecorator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (componentConstr) {
        componentConstr.inject = keys;
    };
}
exports.injectDecorator = injectDecorator;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var escape_string_1 = __webpack_require__(36);
var bindingToJSExpression_1 = __webpack_require__(37);
var componentInputValueMap_1 = __webpack_require__(13);
var ContentTextFragmentParser_1 = __webpack_require__(18);
var formatters_1 = __webpack_require__(20);
var ContentTextFragmentNodeType = ContentTextFragmentParser_1.ContentTextFragmentParser.ContentTextFragmentNodeType;
var keyCounter = 0;
var cache = Object.create(null);
function compileContentTextFragment(contentTextFragment, contentTextFragmentString, c) {
    var key = contentTextFragmentString + (c ? ',' : '.');
    if (cache[key]) {
        return cache[key];
    }
    var inner;
    if (contentTextFragment.length == 1) {
        inner = Function('formatters', "var temp; return " + (contentTextFragment[0].nodeType == ContentTextFragmentNodeType.TEXT ?
            "'" + escape_string_1.escapeString(contentTextFragment[0].value) + "'" :
            bindingToJSExpression_1.bindingToJSExpression(contentTextFragment[0])) + ";");
    }
    else {
        var jsExpr = [];
        for (var _i = 0, contentTextFragment_1 = contentTextFragment; _i < contentTextFragment_1.length; _i++) {
            var node = contentTextFragment_1[_i];
            jsExpr.push(node.nodeType == ContentTextFragmentNodeType.TEXT ?
                "'" + escape_string_1.escapeString(node.value) + "'" :
                bindingToJSExpression_1.bindingToJSExpression(node));
        }
        inner = Function('formatters', "var temp; return [" + jsExpr.join(', ') + "].join('');");
    }
    return (cache[key] = c ? function () {
        var value = inner.call(this, formatters_1.formatters);
        if (value) {
            var valueType = typeof value;
            if (valueType == 'object' || valueType == 'function') {
                var key_1 = String(++keyCounter);
                componentInputValueMap_1.componentInputValueMap.set(key_1, value);
                return key_1;
            }
        }
        return value;
    } : function () {
        return inner.call(this, formatters_1.formatters);
    });
}
exports.compileContentTextFragment = compileContentTextFragment;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cache = Object.create(null);
function formattersReducer(jsExpr, formatter) {
    var args = formatter.arguments;
    return "(this." + formatter.name + " || formatters." + formatter.name + ").call(this.$component, " + jsExpr + (args && args.value.length ? ', ' + args.value.join(', ') : '') + ")";
}
function bindingToJSExpression(binding) {
    var bindingRaw = binding.raw;
    if (cache[bindingRaw]) {
        return cache[bindingRaw];
    }
    var formatters = binding.formatters;
    if (!binding.isArgumentKeypath) {
        return (cache[bindingRaw] = formatters ? formatters.reduce(formattersReducer, binding.argument) : binding.argument);
    }
    var keys = binding.argument.split('.');
    var keyCount = keys.length;
    if (keyCount == 1) {
        return (cache[bindingRaw] = formatters ?
            formatters.reduce(formattersReducer, "this['" + keys[0] + "']") :
            "this['" + keys[0] + "']");
    }
    var index = keyCount - 2;
    var jsExprArr = Array(index);
    while (index) {
        jsExprArr[--index] = " && (temp = temp['" + keys[index + 1] + "'])";
    }
    var jsExpr = "(temp = this['" + keys[0] + "'])" + jsExprArr.join('') + " && temp['" + keys[keyCount - 1] + "']";
    return (cache[bindingRaw] = formatters ? formatters.reduce(formattersReducer, jsExpr) : jsExpr);
}
exports.bindingToJSExpression = bindingToJSExpression;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function bindEvents(component, events) {
    for (var elName in events) {
        var asset = void 0;
        if (elName == ':component') {
            asset = component;
        }
        else if (elName == ':element') {
            asset = component.element;
        }
        else {
            asset = component.$(elName);
            if (!asset) {
                continue;
            }
        }
        var assetEvents = events[elName];
        for (var evtName in assetEvents) {
            component.listenTo(asset, evtName, assetEvents[evtName]);
        }
    }
}
exports.bindEvents = bindEvents;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
function freezeBinding(binding) {
    var changeEvent = binding._events.get('change');
    binding._events.delete('change');
    binding._frozenState = {
        changeEventListener: changeEvent.listener,
        changeEventContext: changeEvent.context,
        value: binding._value
    };
}
function unfreezeBinding(binding) {
    var frozenState = binding._frozenState;
    binding._frozenState = null;
    binding.on('change', frozenState.changeEventListener, frozenState.changeEventContext);
    if (frozenState.value !== binding._value) {
        binding._changeEvent = {
            target: binding,
            type: 'change',
            data: {
                oldValue: frozenState.value,
                value: binding._value,
                prev: null
            }
        };
        binding._canCancelChange = true;
        binding._addToRelease();
    }
}
function freezeBindings(bindings) {
    cellx_1.Cell.forceRelease();
    for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
        var binding = bindings_1[_i];
        freezeBinding(binding);
    }
}
exports.freezeBindings = freezeBindings;
function unfreezeBindings(bindings) {
    for (var _i = 0, bindings_2 = bindings; _i < bindings_2.length; _i++) {
        var binding = bindings_2[_i];
        unfreezeBinding(binding);
    }
    cellx_1.Cell.forceRelease();
}
exports.unfreezeBindings = unfreezeBindings;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(0);
exports.componentInputTypeMap = new map_set_polyfill_1.Map([
    [Boolean, 'boolean'],
    ['boolean', 'boolean'],
    [Number, 'number'],
    ['number', 'number'],
    [String, 'string'],
    ['string', 'string'],
    [Object, 'object'],
    ['object', 'object']
]);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var escape_html_1 = __webpack_require__(43);
var is_regexp_1 = __webpack_require__(44);
var map_set_polyfill_1 = __webpack_require__(0);
var componentInputValueMap_1 = __webpack_require__(13);
exports.componentInputTypeSerializerMap = new map_set_polyfill_1.Map([
    [Boolean, {
            read: function (value, defaultValue) {
                return value !== null ? value != 'no' : !!defaultValue;
            },
            write: function (value, defaultValue) {
                return value ? '' : (defaultValue ? 'no' : null);
            }
        }],
    [Number, {
            read: function (value, defaultValue) {
                return value !== null ? +value : (defaultValue !== undefined ? defaultValue : null);
            },
            write: function (value) {
                return value != null ? String(+value) : null;
            }
        }],
    [String, {
            read: function (value, defaultValue) {
                return value !== null ? value : (defaultValue !== undefined ? defaultValue : null);
            },
            write: function (value) {
                return value != null ? String(value) : null;
            }
        }],
    [Object, {
            read: function (value, defaultValue) {
                if (value === null) {
                    return defaultValue || null;
                }
                if (!componentInputValueMap_1.componentInputValueMap.has(value)) {
                    throw new TypeError('Value is not an object');
                }
                var val = componentInputValueMap_1.componentInputValueMap.get(value);
                componentInputValueMap_1.componentInputValueMap.delete(value);
                return val;
            },
            write: function (value) {
                return value != null ? '' : null;
            }
        }],
    [eval, {
            read: function (value, defaultValue) {
                return value !== null ?
                    Function("return " + escape_html_1.unescapeHTML(value) + ";")() :
                    (defaultValue !== undefined ? defaultValue : null);
            },
            write: function (value) {
                return value != null ? escape_html_1.escapeHTML(is_regexp_1.isRegExp(value) ? value.toString() : JSON.stringify(value)) : null;
            }
        }]
]);
exports.componentInputTypeSerializerMap.set('boolean', exports.componentInputTypeSerializerMap.get(Boolean));
exports.componentInputTypeSerializerMap.set('number', exports.componentInputTypeSerializerMap.get(Number));
exports.componentInputTypeSerializerMap.set('string', exports.componentInputTypeSerializerMap.get(String));
exports.componentInputTypeSerializerMap.set('object', exports.componentInputTypeSerializerMap.get(Object));


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handledEvents = [
    'change',
    'click',
    'dblclick',
    'focusin',
    'focusout',
    'input',
    'mousedown',
    'mouseup',
    'submit'
];


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handleEvent(evt, stopElement) {
    var el;
    var attrName;
    var receivers;
    var eventsName;
    if (evt instanceof Event) {
        el = evt.target;
        attrName = 'on-' + evt.type;
        eventsName = 'domEvents';
    }
    else {
        el = evt.target.element;
        attrName = 'oncomponent-' + evt.type;
        eventsName = 'events';
    }
    for (;;) {
        var parentEl = el.parentNode;
        if (!parentEl) {
            break;
        }
        if (el.hasAttribute(attrName)) {
            (receivers || (receivers = [])).push(el);
        }
        el = parentEl;
        var component = el.$component;
        if (component && receivers && receivers.length) {
            for (var i = 0;;) {
                var attrValue = receivers[i].getAttribute(attrName);
                var handler = void 0;
                if (attrValue.charAt(0) == ':') {
                    var events = component.constructor[eventsName];
                    if (events) {
                        events = events[attrValue.slice(1)];
                        if (events) {
                            handler = events[evt.type];
                        }
                    }
                }
                else {
                    handler = component[attrValue];
                }
                if (handler) {
                    if (handler.call(component, evt, receivers[i]) === false) {
                        return;
                    }
                    receivers.splice(i, 1);
                }
                else {
                    i++;
                }
                if (i == receivers.length) {
                    break;
                }
            }
        }
        if (parentEl == stopElement) {
            break;
        }
    }
}
exports.handleEvent = handleEvent;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hyphenize_1 = __webpack_require__(23);
var mixin_1 = __webpack_require__(50);
var nelm_1 = __webpack_require__(10);
var componentConstructorMap_1 = __webpack_require__(21);
var elementConstructorMap_1 = __webpack_require__(51);
var ElementProtoMixin_1 = __webpack_require__(3);
var push = Array.prototype.push;
function inheritProperty(target, source, name, depth) {
    var obj = target[name];
    var parentObj = source[name];
    if (obj && parentObj && obj != parentObj) {
        var o = target[name] = { __proto__: parentObj };
        for (var key in obj) {
            o[key] = obj[key];
            if (depth) {
                inheritProperty(o, parentObj, key, depth - 1);
            }
        }
    }
}
function registerComponent(componentConstr) {
    var elIs = componentConstr.elementIs;
    if (!elIs) {
        throw new TypeError('Static property "elementIs" is required');
    }
    if (componentConstructorMap_1.componentConstructorMap.has(elIs)) {
        throw new TypeError("Component \"" + elIs + "\" already registered");
    }
    var parentComponentConstr = Object.getPrototypeOf(componentConstr.prototype).constructor;
    inheritProperty(componentConstr, parentComponentConstr, 'input', 0);
    inheritProperty(componentConstr, parentComponentConstr, 'i18n', 0);
    componentConstr._blockNamesString = elIs + ' ' + (parentComponentConstr._blockNamesString || '');
    var template = componentConstr.template;
    if (template !== null) {
        if (template === parentComponentConstr.template) {
            componentConstr.template = template.extend('', { blockName: elIs });
        }
        else {
            if (template instanceof nelm_1.Template) {
                template.setBlockName(elIs);
            }
            else {
                componentConstr.template = parentComponentConstr.template ?
                    parentComponentConstr.template.extend(template, { blockName: elIs }) :
                    new nelm_1.Template(template, { blockName: elIs });
            }
        }
    }
    componentConstr._contentBlockNames = [elIs];
    if (parentComponentConstr._contentBlockNames) {
        push.apply(componentConstr._contentBlockNames, parentComponentConstr._contentBlockNames);
    }
    componentConstr._rawContent = undefined;
    componentConstr._elementClassNameMap = Object.create(parentComponentConstr._elementClassNameMap || null);
    inheritProperty(componentConstr, parentComponentConstr, 'oevents', 1);
    inheritProperty(componentConstr, parentComponentConstr, 'events', 1);
    inheritProperty(componentConstr, parentComponentConstr, 'domEvents', 1);
    var elExtends = componentConstr.elementExtends;
    var parentElConstr = elExtends ?
        elementConstructorMap_1.elementConstructorMap.get(elExtends) ||
            window["HTML" + (elExtends.charAt(0).toUpperCase() + elExtends.slice(1)) + "Element"] :
        HTMLElement;
    var elConstr = function (self) {
        return parentElConstr.call(this, self);
    };
    elConstr._rioniteComponentConstructor = componentConstr;
    Object.defineProperty(elConstr, 'observedAttributes', {
        configurable: true,
        enumerable: true,
        get: function () {
            var inputConfig = componentConstr.input;
            if (!inputConfig) {
                return [];
            }
            var observedAttrs = [];
            for (var name_1 in inputConfig) {
                observedAttrs.push(hyphenize_1.hyphenize(name_1, true));
            }
            return observedAttrs;
        }
    });
    var elProto = elConstr.prototype = Object.create(parentElConstr.prototype);
    elProto.constructor = elConstr;
    mixin_1.mixin(elProto, ElementProtoMixin_1.ElementProtoMixin);
    window.customElements.define(elIs, elConstr, elExtends ? { extends: elExtends } : null);
    componentConstructorMap_1.componentConstructorMap.set(elIs, componentConstr);
    componentConstructorMap_1.componentConstructorMap.set(elIs.toUpperCase(), componentConstr);
    elementConstructorMap_1.elementConstructorMap.set(elIs, elConstr);
    return componentConstr;
}
exports.registerComponent = registerComponent;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(0);
exports.elementConstructorMap = new map_set_polyfill_1.Map([
    ['a', window.HTMLAnchorElement],
    ['blockquote', window.HTMLQuoteElement],
    ['br', window.HTMLBRElement],
    ['caption', window.HTMLTableCaptionElement],
    ['col', window.HTMLTableColElement],
    ['colgroup', window.HTMLTableColElement],
    ['datalist', window.HTMLDataListElement],
    ['del', window.HTMLModElement],
    ['dir', window.HTMLDirectoryElement],
    ['dl', window.HTMLDListElement],
    ['document', window.HTMLDocument],
    ['element', Element],
    ['fieldset', window.HTMLFieldSetElement],
    ['frameset', window.HTMLFrameSetElement],
    ['h1', window.HTMLHeadingElement],
    ['h2', window.HTMLHeadingElement],
    ['h3', window.HTMLHeadingElement],
    ['h4', window.HTMLHeadingElement],
    ['h5', window.HTMLHeadingElement],
    ['h6', window.HTMLHeadingElement],
    ['hr', window.HTMLHRElement],
    ['iframe', window.HTMLIFrameElement],
    ['img', window.HTMLImageElement],
    ['ins', window.HTMLModElement],
    ['li', window.HTMLLIElement],
    ['menuitem', window.HTMLMenuItemElement],
    ['ol', window.HTMLOListElement],
    ['optgroup', window.HTMLOptGroupElement],
    ['p', window.HTMLParagraphElement],
    ['q', window.HTMLQuoteElement],
    ['tbody', window.HTMLTableSectionElement],
    ['td', window.HTMLTableCellElement],
    ['template', window.HTMLTemplateElement || HTMLElement],
    ['textarea', window.HTMLTextAreaElement],
    ['tfoot', window.HTMLTableSectionElement],
    ['th', window.HTMLTableCellElement],
    ['thead', window.HTMLTableSectionElement],
    ['tr', window.HTMLTableRowElement],
    ['ul', window.HTMLUListElement],
    ['vhgroupv', window.HTMLUnknownElement],
    ['vkeygen', window.HTMLUnknownElement]
]);


/***/ }),
/* 52 */
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
var clear_node_1 = __webpack_require__(25);
var get_uid_1 = __webpack_require__(11);
var map_set_polyfill_1 = __webpack_require__(0);
var move_content_1 = __webpack_require__(12);
var symbol_polyfill_1 = __webpack_require__(16);
var attachChildComponentElements_1 = __webpack_require__(5);
var bindContent_1 = __webpack_require__(6);
var Component_1 = __webpack_require__(2);
var ComponentDecorator_1 = __webpack_require__(4);
var ElementProtoMixin_1 = __webpack_require__(3);
var KEY_CONTENT_MAP = symbol_polyfill_1.Symbol('contentMap');
var RtContent = /** @class */ (function (_super) {
    __extends(RtContent, _super);
    function RtContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RtContent.prototype._attach = function () {
        this._attached = true;
        if (this.isReady) {
            this._unfreezeBindings();
        }
        else {
            var ownerComponent = this.ownerComponent;
            var el = this.element;
            var input = this.input;
            var contentOwnerComponent = ownerComponent.ownerComponent;
            var ownerComponentContent = ownerComponent.input.$content;
            var clone = input.clone;
            var content = void 0;
            var bindings = void 0;
            var childComponents = void 0;
            if (!clone || ownerComponentContent.firstChild) {
                var selector = input.select;
                var key = get_uid_1.getUID(ownerComponent) + '/' + (selector || '');
                if (selector) {
                    var contentMap = void 0;
                    if (!clone &&
                        contentOwnerComponent &&
                        (contentMap = contentOwnerComponent[KEY_CONTENT_MAP]) &&
                        contentMap.has(key)) {
                        var container = contentMap.get(key);
                        if (container.firstChild) {
                            content = move_content_1.moveContent(document.createDocumentFragment(), container);
                            contentMap.set(key, el);
                            bindings = container.$component._bindings;
                            childComponents = container.$component._childComponents;
                        }
                    }
                    else if (ownerComponentContent.firstChild) {
                        var selectedElements = ownerComponentContent.querySelectorAll(selector);
                        var selectedElementCount = selectedElements.length;
                        if (selectedElementCount) {
                            content = document.createDocumentFragment();
                            for (var i = 0; i < selectedElementCount; i++) {
                                content.appendChild(clone ? selectedElements[i].cloneNode(true) : selectedElements[i]);
                            }
                        }
                        if (!clone && contentOwnerComponent) {
                            (contentMap ||
                                contentOwnerComponent[KEY_CONTENT_MAP] ||
                                (contentOwnerComponent[KEY_CONTENT_MAP] = new map_set_polyfill_1.Map())).set(key, el);
                        }
                    }
                }
                else if (!clone && contentOwnerComponent) {
                    var contentMap = contentOwnerComponent[KEY_CONTENT_MAP];
                    if (contentMap && contentMap.has(key)) {
                        var container = contentMap.get(key);
                        content = move_content_1.moveContent(document.createDocumentFragment(), container);
                        contentMap.set(key, el);
                        bindings = container.$component._bindings;
                        childComponents = container.$component._childComponents;
                    }
                    else if (ownerComponentContent.firstChild) {
                        content = ownerComponentContent;
                        (contentMap || (contentOwnerComponent[KEY_CONTENT_MAP] = new map_set_polyfill_1.Map())).set(key, el);
                    }
                }
                else if (ownerComponentContent.firstChild) {
                    content = clone ? ownerComponentContent.cloneNode(true) : ownerComponentContent;
                }
            }
            if (bindings === undefined) {
                if (content || el.firstChild) {
                    _a = content ?
                        bindContent_1.bindContent(content, contentOwnerComponent, input.getContext ?
                            input.getContext.call(ownerComponent, ownerComponent.input.$context, this) :
                            ownerComponent.input.$context, { 0: null, 1: null }) :
                        bindContent_1.bindContent(el, ownerComponent, input.getContext ?
                            input.getContext.call(ownerComponent, input.$context, this) :
                            input.$context, { 0: null, 1: null }), this._bindings = _a[0], childComponents = _a[1];
                    this._childComponents = childComponents;
                }
                else {
                    this._bindings = null;
                    childComponents = this._childComponents = null;
                }
            }
            else {
                this._bindings = bindings;
                this._childComponents = childComponents;
                this._unfreezeBindings();
            }
            if (content) {
                ElementProtoMixin_1.suppressConnectionStatusCallbacks();
                if (el.firstChild) {
                    clear_node_1.clearNode(el);
                }
                el.appendChild(content);
                ElementProtoMixin_1.resumeConnectionStatusCallbacks();
            }
            if (childComponents) {
                attachChildComponentElements_1.attachChildComponentElements(childComponents);
            }
            this.isReady = true;
        }
        var _a;
    };
    RtContent.prototype._detach = function () {
        this._attached = false;
        this._freezeBindings();
    };
    RtContent = __decorate([
        ComponentDecorator_1.ComponentDecorator({
            elementIs: 'rt-content',
            input: {
                select: { type: String, readonly: true },
                clone: { default: false, readonly: true },
                getContext: { type: Object, readonly: true }
            },
            template: ''
        })
    ], RtContent);
    return RtContent;
}(Component_1.Component));
exports.RtContent = RtContent;


/***/ }),
/* 53 */
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
var ComponentDecorator_1 = __webpack_require__(4);
var rt_if_then_1 = __webpack_require__(26);
var RtIfElse = /** @class */ (function (_super) {
    __extends(RtIfElse, _super);
    function RtIfElse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._elseMode = true;
        return _this;
    }
    RtIfElse = __decorate([
        ComponentDecorator_1.ComponentDecorator({
            elementIs: 'rt-if-else',
            elementExtends: 'template'
        })
    ], RtIfElse);
    return RtIfElse;
}(rt_if_then_1.RtIfThen));
exports.RtIfElse = RtIfElse;


/***/ }),
/* 54 */
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
var map_set_polyfill_1 = __webpack_require__(0);
var next_tick_1 = __webpack_require__(27);
var cellx_1 = __webpack_require__(1);
var attachChildComponentElements_1 = __webpack_require__(5);
var bindContent_1 = __webpack_require__(6);
var compileKeypath_1 = __webpack_require__(28);
var Component_1 = __webpack_require__(2);
var ComponentDecorator_1 = __webpack_require__(4);
var ElementProtoMixin_1 = __webpack_require__(3);
var Features_1 = __webpack_require__(7);
var KEY_ELEMENT_CONNECTED_1 = __webpack_require__(8);
var keypathPattern_1 = __webpack_require__(14);
var namePattern_1 = __webpack_require__(15);
var slice = Array.prototype.slice;
var reForAttrValue = RegExp("^\\s*(" + namePattern_1.namePattern + ")\\s+of\\s+(" + keypathPattern_1.keypathPattern + ")\\s*$");
var RtRepeat = /** @class */ (function (_super) {
    __extends(RtRepeat, _super);
    function RtRepeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._active = false;
        return _this;
    }
    RtRepeat.prototype.elementConnected = function () {
        if (this._active) {
            return;
        }
        this._active = true;
        if (!this.initialized) {
            var input = this.input;
            var forAttrValue = input['for'].match(reForAttrValue);
            if (!forAttrValue) {
                throw new SyntaxError("Invalid value of attribute \"for\" (" + input['for'] + ")");
            }
            this._itemName = forAttrValue[1];
            this._list = new cellx_1.Cell(compileKeypath_1.compileKeypath(forAttrValue[2]), { context: input.$context });
            this._trackBy = input.trackBy;
            var rawItemContent = this._rawItemContent =
                document.importNode(this.element.content, true);
            if (input.strip) {
                var firstChild = rawItemContent.firstChild;
                var lastChild = rawItemContent.lastChild;
                if (firstChild == lastChild) {
                    if (firstChild.nodeType == Node.TEXT_NODE) {
                        firstChild.nodeValue = firstChild.nodeValue.trim();
                    }
                }
                else {
                    if (firstChild.nodeType == Node.TEXT_NODE) {
                        if (!(firstChild.nodeValue = firstChild.nodeValue.replace(/^\s+/, ''))) {
                            rawItemContent.removeChild(firstChild);
                        }
                    }
                    if (lastChild.nodeType == Node.TEXT_NODE) {
                        if (!(lastChild.nodeValue = lastChild.nodeValue.replace(/\s+$/, ''))) {
                            rawItemContent.removeChild(lastChild);
                        }
                    }
                }
            }
            this._itemMap = new map_set_polyfill_1.Map();
            this.initialized = true;
        }
        this._list.on('change', this._onListChange, this);
        this._render(false);
    };
    RtRepeat.prototype.elementDisconnected = function () {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (!_this.element[KEY_ELEMENT_CONNECTED_1.KEY_ELEMENT_CONNECTED]) {
                _this._deactivate();
            }
        });
    };
    RtRepeat.prototype._onListChange = function () {
        if (this.element.parentNode) {
            this._render(true);
        }
    };
    RtRepeat.prototype._attach = function () {
        this._attached = true;
    };
    RtRepeat.prototype._detach = function () {
        this._attached = false;
    };
    RtRepeat.prototype._render = function (changed) {
        var _this = this;
        var prevItemMap = this._prevItemMap = this._itemMap;
        this._itemMap = new map_set_polyfill_1.Map();
        var list = this._list.get();
        var c = false;
        if (list) {
            this._lastNode = this.element;
            c = list.reduce(function (changed, item, index) { return _this._renderItem(item, index) || changed; }, c);
        }
        if (prevItemMap.size) {
            this._clearByItemMap(prevItemMap);
        }
        else if (!c) {
            return;
        }
        if (changed) {
            cellx_1.Cell.forceRelease();
            this.emit('change');
        }
    };
    RtRepeat.prototype._renderItem = function (item, index) {
        var trackBy = this._trackBy;
        var value = trackBy ? (trackBy == '$index' ? index : item[trackBy]) : item;
        var prevItems = this._prevItemMap.get(value);
        var items = this._itemMap.get(value);
        if (prevItems) {
            var prevItem = void 0;
            if (prevItems.length == 1) {
                prevItem = prevItems[0];
                this._prevItemMap.delete(value);
            }
            else {
                prevItem = prevItems.shift();
            }
            if (items) {
                items.push(prevItem);
            }
            else {
                this._itemMap.set(value, [prevItem]);
            }
            prevItem.item.set(item);
            var nodes = prevItem.nodes;
            if (index == prevItem.index.get()) {
                this._lastNode = nodes[nodes.length - 1];
                return false;
            }
            prevItem.index.set(index);
            var nodeCount = nodes.length;
            if (nodeCount == 1) {
                var node = nodes[0];
                var nextNode = this._lastNode.nextSibling;
                if (node !== nextNode) {
                    this._lastNode.parentNode.insertBefore(node, nextNode);
                }
                this._lastNode = node;
            }
            else {
                if (nodes[0] !== this._lastNode.nextSibling) {
                    var df = document.createDocumentFragment();
                    for (var i = 0; i < nodeCount; i++) {
                        df.appendChild(nodes[i]);
                    }
                    this._lastNode.parentNode.insertBefore(df, this._lastNode.nextSibling);
                }
                this._lastNode = nodes[nodeCount - 1];
            }
            return true;
        }
        var itemCell = new cellx_1.Cell(item);
        var indexCell = new cellx_1.Cell(index);
        var content = this._rawItemContent.cloneNode(true);
        if (!Features_1.templateTag) {
            var templates = content.querySelectorAll('template');
            for (var i = 0, l = templates.length; i < l;) {
                i += templates[i].content.querySelectorAll('template').length + 1;
            }
        }
        var context = this.input.$context;
        var _a = bindContent_1.bindContent(content, this.ownerComponent, Object.create(context, (_b = {
                $component: {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: context.$component || context
                }
            },
            _b[this._itemName + 'Cell'] = {
                configurable: true,
                enumerable: false,
                writable: true,
                value: itemCell
            },
            _b[this._itemName] = {
                configurable: true,
                enumerable: true,
                get: function () {
                    return itemCell.get();
                }
            },
            _b.$indexCell = {
                configurable: true,
                enumerable: false,
                writable: true,
                value: indexCell
            },
            _b.$index = {
                configurable: true,
                enumerable: true,
                get: function () {
                    return indexCell.get();
                }
            },
            _b)), { 0: null, 1: null }), bindings = _a[0], childComponents = _a[1];
        var newItem = {
            item: itemCell,
            index: indexCell,
            nodes: slice.call(content.childNodes),
            bindings: bindings
        };
        if (items) {
            items.push(newItem);
        }
        else {
            this._itemMap.set(value, [newItem]);
        }
        var newLastNode = content.lastChild;
        ElementProtoMixin_1.suppressConnectionStatusCallbacks();
        this._lastNode.parentNode.insertBefore(content, this._lastNode.nextSibling);
        ElementProtoMixin_1.resumeConnectionStatusCallbacks();
        this._lastNode = newLastNode;
        if (childComponents) {
            attachChildComponentElements_1.attachChildComponentElements(childComponents);
        }
        return true;
        var _b;
    };
    RtRepeat.prototype._clearByItemMap = function (itemMap) {
        itemMap.forEach(this._clearByItems, this);
        itemMap.clear();
    };
    RtRepeat.prototype._clearByItems = function (items) {
        for (var i = items.length; i;) {
            var item = items[--i];
            var bindings = item.bindings;
            if (bindings) {
                for (var i_1 = bindings.length; i_1;) {
                    bindings[--i_1].off();
                }
            }
            var nodes = item.nodes;
            for (var i_2 = nodes.length; i_2;) {
                var node = nodes[--i_2];
                var parentNode = node.parentNode;
                if (parentNode) {
                    parentNode.removeChild(node);
                }
            }
        }
    };
    RtRepeat.prototype._deactivate = function () {
        if (!this._active) {
            return;
        }
        this._active = false;
        this._list.off('change', this._onListChange, this);
        this._clearByItemMap(this._itemMap);
    };
    RtRepeat = __decorate([
        ComponentDecorator_1.ComponentDecorator({
            elementIs: 'rt-repeat',
            elementExtends: 'template',
            input: {
                for: { type: String, required: true, readonly: true },
                trackBy: { type: String, readonly: true },
                strip: { default: false, readonly: true }
            }
        })
    ], RtRepeat);
    return RtRepeat;
}(Component_1.Component));
exports.RtRepeat = RtRepeat;


/***/ }),
/* 55 */
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
var clear_node_1 = __webpack_require__(25);
var get_uid_1 = __webpack_require__(11);
var map_set_polyfill_1 = __webpack_require__(0);
var move_content_1 = __webpack_require__(12);
var symbol_polyfill_1 = __webpack_require__(16);
var attachChildComponentElements_1 = __webpack_require__(5);
var bindContent_1 = __webpack_require__(6);
var Component_1 = __webpack_require__(2);
var ComponentDecorator_1 = __webpack_require__(4);
var ElementProtoMixin_1 = __webpack_require__(3);
var KEY_SLOT_CONTENT_MAP = symbol_polyfill_1.Symbol('slotContentMap');
var RtSlot = /** @class */ (function (_super) {
    __extends(RtSlot, _super);
    function RtSlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RtSlot.prototype._attach = function () {
        this._attached = true;
        if (this.isReady) {
            this._unfreezeBindings();
        }
        else {
            var ownerComponent = this.ownerComponent;
            var el = this.element;
            var input = this.input;
            var contentOwnerComponent = ownerComponent.ownerComponent;
            var ownerComponentContent = ownerComponent.input.$content;
            var cloneContent = input.cloneContent;
            var content = void 0;
            var bindings = void 0;
            var childComponents = void 0;
            if (!cloneContent || ownerComponentContent.firstChild) {
                var name_1 = input.name;
                var key = get_uid_1.getUID(ownerComponent) + '/' + (name_1 || '');
                if (name_1) {
                    var contentMap = void 0;
                    if (!cloneContent &&
                        contentOwnerComponent &&
                        (contentMap = contentOwnerComponent[KEY_SLOT_CONTENT_MAP]) &&
                        contentMap.has(key)) {
                        var container = contentMap.get(key);
                        if (container.firstChild) {
                            content = move_content_1.moveContent(document.createDocumentFragment(), container);
                            contentMap.set(key, el);
                            bindings = container.$component._bindings;
                            childComponents = container.$component._childComponents;
                        }
                    }
                    else if (ownerComponentContent.firstChild) {
                        var selectedElements = ownerComponentContent.querySelectorAll("[rt-slot=" + name_1 + "]");
                        var selectedElementCount = selectedElements.length;
                        if (selectedElementCount) {
                            content = document.createDocumentFragment();
                            for (var i = 0; i < selectedElementCount; i++) {
                                var selectedElement = (cloneContent ? selectedElements[i].cloneNode(true) : selectedElements[i]);
                                if (selectedElement instanceof HTMLElement) {
                                    selectedElement.className += ' ' +
                                        ownerComponent.constructor
                                            ._contentBlockNames.join('__' + name_1 + ' ') +
                                        '__' + name_1;
                                }
                                else {
                                    selectedElement.setAttribute('class', (selectedElement.getAttribute('class') || '') + ' ' +
                                        ownerComponent.constructor
                                            ._contentBlockNames.join('__' + name_1 + ' ') +
                                        '__' + name_1);
                                }
                                content.appendChild(selectedElement);
                            }
                        }
                        if (!cloneContent && contentOwnerComponent) {
                            (contentMap ||
                                contentOwnerComponent[KEY_SLOT_CONTENT_MAP] ||
                                (contentOwnerComponent[KEY_SLOT_CONTENT_MAP] = new map_set_polyfill_1.Map())).set(key, el);
                        }
                    }
                }
                else if (!cloneContent && contentOwnerComponent) {
                    var contentMap = contentOwnerComponent[KEY_SLOT_CONTENT_MAP];
                    if (contentMap && contentMap.has(key)) {
                        var container = contentMap.get(key);
                        content = move_content_1.moveContent(document.createDocumentFragment(), container);
                        contentMap.set(key, el);
                        bindings = container.$component._bindings;
                        childComponents = container.$component._childComponents;
                    }
                    else if (ownerComponentContent.firstChild) {
                        content = ownerComponentContent;
                        (contentMap || (contentOwnerComponent[KEY_SLOT_CONTENT_MAP] = new map_set_polyfill_1.Map())).set(key, el);
                    }
                }
                else if (ownerComponentContent.firstChild) {
                    content = cloneContent ?
                        ownerComponentContent.cloneNode(true) :
                        ownerComponentContent;
                }
            }
            if (bindings === undefined) {
                if (content || el.firstChild) {
                    _a = content ?
                        bindContent_1.bindContent(content, contentOwnerComponent, input.getContext ?
                            input.getContext.call(ownerComponent, ownerComponent.input.$context, this) :
                            ownerComponent.input.$context, { 0: null, 1: null }) :
                        bindContent_1.bindContent(el, ownerComponent, input.getContext ?
                            input.getContext.call(ownerComponent, input.$context, this) :
                            input.$context, { 0: null, 1: null }), this._bindings = _a[0], childComponents = _a[1];
                    this._childComponents = childComponents;
                }
                else {
                    this._bindings = null;
                    childComponents = this._childComponents = null;
                }
            }
            else {
                this._bindings = bindings;
                this._childComponents = childComponents;
                this._unfreezeBindings();
            }
            if (content) {
                ElementProtoMixin_1.suppressConnectionStatusCallbacks();
                if (el.firstChild) {
                    clear_node_1.clearNode(el);
                }
                el.appendChild(content);
                ElementProtoMixin_1.resumeConnectionStatusCallbacks();
            }
            if (childComponents) {
                attachChildComponentElements_1.attachChildComponentElements(childComponents);
            }
            this.isReady = true;
        }
        var _a;
    };
    RtSlot.prototype._detach = function () {
        this._attached = false;
        this._freezeBindings();
    };
    RtSlot = __decorate([
        ComponentDecorator_1.ComponentDecorator({
            elementIs: 'rt-slot',
            input: {
                name: { type: String, readonly: true },
                cloneContent: { default: false, readonly: true },
                getContext: { type: Object, readonly: true }
            },
            template: ''
        })
    ], RtSlot);
    return RtSlot;
}(Component_1.Component));
exports.RtSlot = RtSlot;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nelm_1 = __webpack_require__(10);
['if-then', 'if-else', 'repeat'].forEach(function (tagName) {
    nelm_1.Template.helpers[tagName] = function (el) {
        var origAttrs = el.attributes;
        var attrs = {
            superCall: origAttrs && origAttrs.superCall,
            list: origAttrs ? origAttrs.list.slice() : []
        };
        attrs.list.push({
            name: 'is',
            value: 'rt-' + tagName
        });
        return [{
                nodeType: nelm_1.NodeType.ELEMENT,
                isHelper: false,
                tagName: 'template',
                names: el.names && el.names[0] ? ['$' + el.names[0]].concat(el.names) : el.names,
                attributes: attrs,
                content: el.content
            }];
    };
});


/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_assign_polyfill_1 = __webpack_require__(10);
var cellx_1 = __webpack_require__(2);
function enumerableDecorator(target, name, desc) {
    if (desc) {
        desc.enumerable = true;
        return desc;
    }
    return {
        configurable: true,
        enumerable: true,
        writable: true,
        value: undefined
    };
}
exports.enumerable = enumerableDecorator;
function nonEnumerableDecorator(target, name, desc) {
    if (desc) {
        desc.enumerable = false;
        return desc;
    }
    return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: undefined
    };
}
exports.nonEnumerable = nonEnumerableDecorator;
function CellDecorator(targetOrOptions, name, desc, opts) {
    if (arguments.length == 1) {
        return function (target, name, desc) {
            return CellDecorator(target, name, desc, targetOrOptions);
        };
    }
    var cellName = name + 'Cell';
    Object.defineProperty(targetOrOptions, cellName, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: undefined
    });
    return {
        configurable: true,
        enumerable: desc ? desc.enumerable : true,
        get: function () {
            return (this[cellName] || (this[cellName] = new cellx_1.Cell(desc && (desc.get || (desc.initializer ? desc.initializer() : desc.value)), opts ? (opts.context === undefined ? object_assign_polyfill_1.assign({ context: this }, opts) : opts) : { context: this }))).get();
        },
        set: desc && desc.set || function (value) {
            if (this[cellName]) {
                this[cellName].set(value);
            }
            else if (desc) {
                (this[cellName] = new cellx_1.Cell(desc.get || (desc.initializer ? desc.initializer() : desc.value), opts ? (opts.context === undefined ? object_assign_polyfill_1.assign({ context: this }, opts) : opts) : { context: this })).set(value);
            }
            else {
                var isFn = typeof value == 'function';
                this[cellName] = new cellx_1.Cell(isFn ? value : undefined, opts ? (opts.context === undefined ? object_assign_polyfill_1.assign({ context: this }, opts) : opts) : { context: this });
                if (!isFn) {
                    this[cellName].set(value);
                }
            }
        }
    };
}
exports.Cell = CellDecorator;
function observableDecorator(targetOrOptions, name, desc, opts) {
    if (arguments.length == 1) {
        return function (target, name, desc) {
            return observableDecorator(target, name, desc, targetOrOptions);
        };
    }
    if (desc && (desc.get || (desc.value !== undefined && typeof desc.value == 'function'))) {
        throw new TypeError('Invalid descriptor of observable property');
    }
    return CellDecorator(targetOrOptions, name, desc, opts);
}
exports.observable = observableDecorator;
function computedDecorator(targetOrOptions, name, desc, opts) {
    if (arguments.length == 1) {
        return function (target, name, desc) {
            return computedDecorator(target, name, desc, targetOrOptions);
        };
    }
    if (desc && desc.value !== undefined && typeof desc.value != 'function') {
        throw new TypeError('Invalid descriptor of computed property');
    }
    desc = CellDecorator(targetOrOptions, name, desc, opts);
    desc.enumerable = false;
    return desc;
}
exports.computed = computedDecorator;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(4);
var object_assign_polyfill_1 = __webpack_require__(10);
var Cell_1 = __webpack_require__(19);
var ObservableList_1 = __webpack_require__(21);
var ObservableMap_1 = __webpack_require__(22);
var keys_1 = __webpack_require__(23);
var EventEmitter_1 = __webpack_require__(6);
exports.EventEmitter = EventEmitter_1.EventEmitter;
var FreezableCollection_1 = __webpack_require__(12);
exports.FreezableCollection = FreezableCollection_1.FreezableCollection;
var ObservableCollection_1 = __webpack_require__(13);
exports.ObservableCollection = ObservableCollection_1.ObservableCollection;
var ObservableMap_2 = __webpack_require__(22);
exports.ObservableMap = ObservableMap_2.ObservableMap;
var ObservableList_2 = __webpack_require__(21);
exports.ObservableList = ObservableList_2.ObservableList;
var Cell_2 = __webpack_require__(19);
exports.Cell = Cell_2.Cell;
var keys_2 = __webpack_require__(23);
exports.KEY_CELL_MAP = keys_2.KEY_CELL_MAP;
var hasOwn = Object.prototype.hasOwnProperty;
var slice = Array.prototype.slice;
var global = Function('return this;')();
function map(entries, opts) {
    return new ObservableMap_1.ObservableMap(entries, opts);
}
exports.map = map;
function list(items, opts) {
    return new ObservableList_1.ObservableList(items, opts);
}
exports.list = list;
function cellx(value, opts) {
    if (!opts) {
        opts = {};
    }
    var initialValue = value;
    var cx = function (value) {
        var context = this;
        if (!context || context == global) {
            context = cx;
        }
        if (!hasOwn.call(context, keys_1.KEY_CELL_MAP)) {
            Object.defineProperty(context, keys_1.KEY_CELL_MAP, { value: new map_set_polyfill_1.Map() });
        }
        var cell = context[keys_1.KEY_CELL_MAP].get(cx);
        if (!cell) {
            if (value === 'dispose' && arguments.length >= 2) {
                return;
            }
            cell = new Cell_1.Cell(initialValue, object_assign_polyfill_1.assign({ context: context }, opts));
            context[keys_1.KEY_CELL_MAP].set(cx, cell);
        }
        switch (arguments.length) {
            case 0: {
                return cell.get();
            }
            case 1: {
                cell.set(value);
                return value;
            }
            default: {
                var method = value;
                switch (method) {
                    case 'bind': {
                        cx = cx.bind(context);
                        cx.constructor = cellx;
                        return cx;
                    }
                    case 'unwrap': {
                        return cell;
                    }
                    default: {
                        var result = Cell_1.Cell.prototype[method].apply(cell, slice.call(arguments, 1));
                        return result === cell ? cx : result;
                    }
                }
            }
        }
    };
    cx.constructor = cellx;
    if (opts.onChange || opts.onError) {
        cx.call(opts.context || global);
    }
    return cx;
}
exports.cellx = cellx;
function defineObservableProperty(obj, name, value) {
    var cellName = name + 'Cell';
    Object.defineProperty(obj, cellName, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value instanceof Cell_1.Cell ? value : new Cell_1.Cell(value, { context: obj })
    });
    Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return this[cellName].get();
        },
        set: function (value) {
            this[cellName].set(value);
        }
    });
    return obj;
}
exports.defineObservableProperty = defineObservableProperty;
function defineObservableProperties(obj, props) {
    Object.keys(props).forEach(function (name) {
        defineObservableProperty(obj, name, props[name]);
    });
    return obj;
}
exports.defineObservableProperties = defineObservableProperties;
function define(obj, name, value) {
    if (typeof name == 'string') {
        defineObservableProperty(obj, name, value);
    }
    else {
        defineObservableProperties(obj, name);
    }
    return obj;
}
exports.define = define;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(36);
var global = Function('return this;')();
var nextTick;
exports.nextTick = nextTick;
if (global.process && global.process.toString() == '[object process]' && global.process.nextTick) {
    exports.nextTick = nextTick = global.process.nextTick;
}
else if (global.setImmediate) {
    exports.nextTick = nextTick = function nextTick(callback) {
        setImmediate(callback);
    };
}
else if (global.Promise && Promise.toString().indexOf('[native code]') != -1) {
    var prm_1 = Promise.resolve();
    exports.nextTick = nextTick = function nextTick(callback) {
        prm_1.then(function () {
            callback();
        });
    };
}
else {
    var queue_1;
    global.addEventListener('message', function () {
        if (queue_1) {
            var track = queue_1;
            queue_1 = null;
            for (var i = 0, l = track.length; i < l; i++) {
                try {
                    track[i]();
                }
                catch (err) {
                    logger_1.error(err);
                }
            }
        }
    });
    exports.nextTick = nextTick = function nextTick(callback) {
        if (queue_1) {
            queue_1.push(callback);
        }
        else {
            queue_1 = [callback];
            postMessage('__tic__', '*');
        }
    };
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = Function('return this;')();
var Symbol =  true ? __webpack_require__(18).Symbol : global.Symbol;

var hasOwn = Object.prototype.hasOwnProperty;

var KEY_MAP_ID = Symbol('map-id');
var mapIdCounter = 0;

var Map = global.Map;

if (!Map || Map.toString().indexOf('[native code]') == -1 || !new Map([[1, 1]]).size) {
	var entryStub = {
		value: undefined
	};

	Map = function Map(entries) {
		this._entries = Object.create(null);
		this._objectStamps = {};

		this._first = null;
		this._last = null;

		this.size = 0;

		if (entries) {
			for (var i = 0, l = entries.length; i < l; i++) {
				this.set(entries[i][0], entries[i][1]);
			}
		}
	};

	Map.prototype = {
		constructor: Map,

		has: function has(key) {
			return !!this._entries[this._getValueStamp(key)];
		},

		get: function get(key) {
			return (this._entries[this._getValueStamp(key)] || entryStub).value;
		},

		set: function set(key, value) {
			var entries = this._entries;
			var keyStamp = this._getValueStamp(key);

			if (entries[keyStamp]) {
				entries[keyStamp].value = value;
			} else {
				var entry = entries[keyStamp] = {
					key: key,
					keyStamp: keyStamp,
					value: value,
					prev: this._last,
					next: null
				};

				if (this.size++) {
					this._last.next = entry;
				} else {
					this._first = entry;
				}

				this._last = entry;
			}

			return this;
		},

		delete: function delete_(key) {
			var keyStamp = this._getValueStamp(key);
			var entry = this._entries[keyStamp];

			if (!entry) {
				return false;
			}

			if (--this.size) {
				var prev = entry.prev;
				var next = entry.next;

				if (prev) {
					prev.next = next;
				} else {
					this._first = next;
				}

				if (next) {
					next.prev = prev;
				} else {
					this._last = prev;
				}
			} else {
				this._first = null;
				this._last = null;
			}

			delete this._entries[keyStamp];
			delete this._objectStamps[keyStamp];

			return true;
		},

		clear: function clear() {
			var entries = this._entries;

			for (var stamp in entries) {
				delete entries[stamp];
			}

			this._objectStamps = {};

			this._first = null;
			this._last = null;

			this.size = 0;
		},

		forEach: function forEach(callback, context) {
			var entry = this._first;

			while (entry) {
				callback.call(context, entry.value, entry.key, this);

				do {
					entry = entry.next;
				} while (entry && !this._entries[entry.keyStamp]);
			}
		},

		toString: function toString() {
			return '[object Map]';
		},

		_getValueStamp: function _getValueStamp(value) {
			switch (typeof value) {
				case 'undefined': {
					return 'undefined';
				}
				case 'object': {
					if (value === null) {
						return 'null';
					}

					break;
				}
				case 'boolean': {
					return '?' + value;
				}
				case 'number': {
					return '+' + value;
				}
				case 'string': {
					return ',' + value;
				}
			}

			return this._getObjectStamp(value);
		},

		_getObjectStamp: function _getObjectStamp(obj) {
			if (!hasOwn.call(obj, KEY_MAP_ID)) {
				if (!Object.isExtensible(obj)) {
					var stamps = this._objectStamps;
					var stamp;

					for (stamp in stamps) {
						if (hasOwn.call(stamps, stamp) && stamps[stamp] == obj) {
							return stamp;
						}
					}

					stamp = String(++mapIdCounter);
					stamps[stamp] = obj;

					return stamp;
				}

				Object.defineProperty(obj, KEY_MAP_ID, {
					value: String(++mapIdCounter)
				});
			}

			return obj[KEY_MAP_ID];
		}
	};

	[
		['keys', function keys(entry) {
			return entry.key;
		}],
		['values', function values(entry) {
			return entry.value;
		}],
		['entries', function entries(entry) {
			return [entry.key, entry.value];
		}]
	].forEach(function(settings) {
		var getStepValue = settings[1];

		Map.prototype[settings[0]] = function() {
			var entries = this._entries;
			var entry;
			var done = false;
			var map = this;

			return {
				next: function() {
					if (!done) {
						if (entry) {
							do {
								entry = entry.next;
							} while (entry && !entries[entry.keyStamp]);
						} else {
							entry = map._first;
						}

						if (entry) {
							return {
								value: getStepValue(entry),
								done: false
							};
						}

						done = true;
					}

					return {
						value: undefined,
						done: true
					};
				}
			};
		};
	});
}

if (!Map.prototype[Symbol.iterator]) {
	Map.prototype[Symbol.iterator] = Map.prototype.entries;
}

var Set = global.Set;

if (!Set || Set.toString().indexOf('[native code]') == -1 || !new Set([1]).size) {
	Set = function Set(values) {
		this._values = new Map(values ? values.map(function(value) {
			return [value, value];
		}) : []);

		this.size = 0;
	};

	Set.prototype = {
		constructor: Set,

		has: function has(value) {
			return this._values.has(value);
		},

		add: function add(value) {
			this._values.set(value, value);
			this.size = this._values.size;
			return this;
		},

		delete: function _delete(value) {
			if (this._values.delete(value)) {
				this.size--;
				return true;
			}

			return false;
		},

		clear: function clear() {
			this._values.clear();
			this.size = 0;
		},

		forEach: function forEach(callback, context) {
			this._values.forEach(function(value) {
				callback.call(context, value, value, this);
			}, this);
		},

		keys: Map.prototype.keys,
		values: Map.prototype.values,
		entries: Map.prototype.entries
	};
}

if (!Set.prototype[Symbol.iterator]) {
	Set.prototype[Symbol.iterator] = Set.prototype.values;
}

if (true) {
	exports.Map = Map;
	exports.Set = Set;
} else {
	global.Map = Map;
	global.Set = Set;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hasOwn = Object.prototype.hasOwnProperty;
var reInsert = /\{([1-9]\d*|n)(?::((?:[^|]*\|)+?[^}]*))?\}/;
var texts;
var getPluralIndex;
exports.getText = function getText(context, key, plural, args) {
    var rawText;
    if (hasOwn.call(texts, context) && hasOwn.call(texts[context], key)) {
        rawText = plural ?
            texts[context][key][getPluralIndex(+args[0])] :
            texts[context][key];
    }
    else {
        rawText = key;
    }
    var data = Object.create(null);
    for (var i = args.length; i;) {
        data[i] = args[--i];
    }
    if (plural) {
        data.n = args[0];
    }
    var splittedRawText = rawText.split(reInsert);
    var text = [];
    for (var i = 0, l = splittedRawText.length; i < l;) {
        if (i % 3) {
            text.push(splittedRawText[i + 1] ?
                splittedRawText[i + 1].split('|')[getPluralIndex(data[splittedRawText[i]])] :
                data[splittedRawText[i]]);
            i += 2;
        }
        else {
            text.push(splittedRawText[i]);
            i++;
        }
    }
    return text.join('');
};
function configure(config) {
    texts = config.texts;
    getPluralIndex = Function('n', "return " + config.localeSettings.plural + ";");
    exports.getText.localeSettings = config.localeSettings;
}
function t(key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return exports.getText('', key, false, args);
}
function pt(key, context) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return exports.getText(context, key, false, args);
}
function nt(key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return exports.getText('', key, true, args);
}
function npt(key, context) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return exports.getText(context, key, true, args);
}
exports.getText.configure = configure;
exports.getText.t = t;
exports.getText.pt = pt;
exports.getText.nt = nt;
exports.getText.npt = npt;
configure({
    localeSettings: {
        code: 'ru',
        plural: '(n%100) >= 5 && (n%100) <= 20 ? 2 : (n%10) == 1 ? 0 : (n%10) >= 2 && (n%10) <= 4 ? 1 : 2'
    },
    texts: {}
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(20);
var map_set_polyfill_1 = __webpack_require__(4);
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = new map_set_polyfill_1.Map();
    }
    EventEmitter.prototype.getEvents = function (type) {
        var events;
        if (type) {
            events = this._events.get(type);
            if (!events) {
                return [];
            }
            return Array.isArray(events) ? events : [events];
        }
        events = Object.create(null);
        this._events.forEach(function (typeEvents, type) {
            events[type] = Array.isArray(typeEvents) ? typeEvents : [typeEvents];
        });
        return events;
    };
    EventEmitter.prototype.on = function (type, listener, context) {
        if (typeof type == 'object') {
            context = listener !== undefined ? listener : this;
            var listeners = type;
            for (type in listeners) {
                this._on(type, listeners[type], context);
            }
        }
        else {
            this._on(type, listener, context !== undefined ? context : this);
        }
        return this;
    };
    EventEmitter.prototype.off = function (type, listener, context) {
        if (type) {
            if (typeof type == 'object') {
                context = listener !== undefined ? listener : this;
                var listeners = type;
                for (type in listeners) {
                    this._off(type, listeners[type], context);
                }
            }
            else {
                this._off(type, listener, context !== undefined ? context : this);
            }
        }
        else {
            this._events.clear();
        }
        return this;
    };
    EventEmitter.prototype._on = function (type, listener, context) {
        var index = type.indexOf(':');
        if (index != -1) {
            var propName = type.slice(index + 1);
            EventEmitter.currentlySubscribing = true;
            (this[propName + 'Cell'] || (this[propName], this[propName + 'Cell']))
                .on(type.slice(0, index), listener, context);
            EventEmitter.currentlySubscribing = false;
        }
        else {
            var events = this._events.get(type);
            var evt = { listener: listener, context: context };
            if (!events) {
                this._events.set(type, evt);
            }
            else if (Array.isArray(events)) {
                events.push(evt);
            }
            else {
                this._events.set(type, [events, evt]);
            }
        }
    };
    EventEmitter.prototype._off = function (type, listener, context) {
        var index = type.indexOf(':');
        if (index != -1) {
            var propName = type.slice(index + 1);
            (this[propName + 'Cell'] || (this[propName], this[propName + 'Cell']))
                .off(type.slice(0, index), listener, context);
        }
        else {
            var events = this._events.get(type);
            if (!events) {
                return;
            }
            var evt = void 0;
            if (!Array.isArray(events)) {
                evt = events;
            }
            else if (events.length == 1) {
                evt = events[0];
            }
            else {
                for (var i = events.length; i;) {
                    evt = events[--i];
                    if (evt.listener == listener && evt.context === context) {
                        events.splice(i, 1);
                        break;
                    }
                }
                return;
            }
            if (evt.listener == listener && evt.context === context) {
                this._events.delete(type);
            }
        }
    };
    EventEmitter.prototype.once = function (type, listener, context) {
        if (context === undefined) {
            context = this;
        }
        function wrapper(evt) {
            this._off(type, wrapper, context);
            return listener.call(this, evt);
        }
        this._on(type, wrapper, context);
        return wrapper;
    };
    EventEmitter.prototype.emit = function (evt, data) {
        if (typeof evt == 'string') {
            evt = {
                target: this,
                type: evt
            };
        }
        else if (!evt.target) {
            evt.target = this;
        }
        else if (evt.target != this) {
            throw new TypeError('Event cannot be emitted on this object');
        }
        if (data) {
            evt.data = data;
        }
        this.handleEvent(evt);
        return evt;
    };
    EventEmitter.prototype.handleEvent = function (evt) {
        var events = this._events.get(evt.type);
        if (!events) {
            return;
        }
        if (Array.isArray(events)) {
            var eventCount = events.length;
            if (eventCount == 1) {
                if (this._tryEventListener(events[0], evt) === false) {
                    evt.isPropagationStopped = true;
                }
            }
            else {
                events = events.slice();
                for (var i = 0; i < eventCount; i++) {
                    if (this._tryEventListener(events[i], evt) === false) {
                        evt.isPropagationStopped = true;
                    }
                }
            }
        }
        else if (this._tryEventListener(events, evt) === false) {
            evt.isPropagationStopped = true;
        }
    };
    EventEmitter.prototype._tryEventListener = function (emEvt, evt) {
        try {
            return emEvt.listener.call(emEvt.context, evt);
        }
        catch (err) {
            logger_1.error(err);
        }
    };
    EventEmitter.currentlySubscribing = false;
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mixin(target, sources, skipProperties) {
    if (!Array.isArray(sources)) {
        sources = [sources];
    }
    for (var i = 0, l = sources.length; i < l; i++) {
        var source = sources[i];
        var names = Object.getOwnPropertyNames(source);
        for (var j = 0, m = names.length; j < m; j++) {
            var name_1 = names[j];
            if (!skipProperties || skipProperties.indexOf(name_1) == -1) {
                Object.defineProperty(target, name_1, Object.getOwnPropertyDescriptor(source, name_1));
            }
        }
    }
    return target;
}
exports.mixin = mixin;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFocusable(el) {
    if (el.hasAttribute('tabindex')) {
        return el.tabIndex >= 0;
    }
    switch (el.tagName) {
        case 'a':
        case 'area': {
            return el.hasAttribute('href') && el.tabIndex >= 0;
        }
        case 'button':
        case 'input':
        case 'textarea':
        case 'select': {
            return !el.hasAttribute('disabled') && el.tabIndex >= 0;
        }
        case 'iframe':
        case 'object':
        case 'embed': {
            return el.tabIndex >= 0;
        }
    }
    return el.hasAttribute('contenteditable') && el.tabIndex >= 0;
}
exports.isFocusable = isFocusable;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = Function('return this;')();
var Symbol = global.Symbol;

var idCounter = 0;

if (!Symbol) {
	Symbol = function Symbol(key) {
		return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + (++idCounter) + '__';
	};

	Symbol.iterator = Symbol('Symbol.iterator');
}

( true ? exports : global).Symbol = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assign = Object.assign || (function (target, source) {
    for (var name_1 in source) {
        target[name_1] = source[name_1];
    }
    return target;
});
exports.assign = assign;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is = Object.is || (function (a, b) {
    return a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b;
});
exports.is = is;


/***/ }),
/* 12 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter_1 = __webpack_require__(6);
var FreezableCollection = /** @class */ (function (_super) {
    __extends(FreezableCollection, _super);
    function FreezableCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isFrozen = false;
        return _this;
    }
    Object.defineProperty(FreezableCollection.prototype, "isFrozen", {
        get: function () {
            return this._isFrozen;
        },
        enumerable: true,
        configurable: true
    });
    FreezableCollection.prototype.freeze = function () {
        this._isFrozen = true;
        return this;
    };
    FreezableCollection.prototype.unfreeze = function () {
        this._isFrozen = false;
        return this;
    };
    FreezableCollection.prototype._throwIfFrozen = function (msg) {
        if (this._isFrozen) {
            throw new TypeError(msg || 'Frozen collection cannot be mutated');
        }
    };
    return FreezableCollection;
}(EventEmitter_1.EventEmitter));
exports.FreezableCollection = FreezableCollection;


/***/ }),
/* 13 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(4);
var EventEmitter_1 = __webpack_require__(6);
var ObservableCollection = /** @class */ (function (_super) {
    __extends(ObservableCollection, _super);
    function ObservableCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._valueCounts = new map_set_polyfill_1.Map();
        return _this;
    }
    Object.defineProperty(ObservableCollection.prototype, "adoptsValueChanges", {
        get: function () {
            return this._adoptsValueChanges;
        },
        enumerable: true,
        configurable: true
    });
    ObservableCollection.prototype._onItemChange = function (evt) {
        this.handleEvent(evt);
    };
    ObservableCollection.prototype._registerValue = function (value) {
        var valueCounts = this._valueCounts;
        var valueCount = valueCounts.get(value);
        if (valueCount) {
            valueCounts.set(value, valueCount + 1);
        }
        else {
            valueCounts.set(value, 1);
            if (this._adoptsValueChanges && value instanceof EventEmitter_1.EventEmitter) {
                value.on('change', this._onItemChange, this);
            }
        }
        return value;
    };
    ObservableCollection.prototype._unregisterValue = function (value) {
        var valueCounts = this._valueCounts;
        var valueCount = valueCounts.get(value);
        if (valueCount == 1) {
            valueCounts.delete(value);
            if (this._adoptsValueChanges && value instanceof EventEmitter_1.EventEmitter) {
                value.off('change', this._onItemChange, this);
            }
        }
        else {
            valueCounts.set(value, valueCount - 1);
        }
    };
    return ObservableCollection;
}(EventEmitter_1.EventEmitter));
exports.ObservableCollection = ObservableCollection;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var escapeHTML_1 = __webpack_require__(40);
exports.escapeHTML = escapeHTML_1.escapeHTML;
var unescapeHTML_1 = __webpack_require__(41);
exports.unescapeHTML = unescapeHTML_1.unescapeHTML;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uidCounter = 0;
function nextUID() {
    return String(++uidCounter);
}
exports.nextUID = nextUID;


/***/ }),
/* 16 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var object_assign_polyfill_1 = __webpack_require__(10);
var cellx_1 = __webpack_require__(2);
var INDEXPATH_EMPTY_ERROR_MESSAGE = 'Indexpath cannot be empty';
function fixParent(items, parent) {
    if (parent === void 0) { parent = null; }
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        item.parent = parent;
        fixParent(item.children, item);
    }
    return items;
}
exports.fixParent = fixParent;
var ObservableTreeList = /** @class */ (function (_super) {
    __extends(ObservableTreeList, _super);
    function ObservableTreeList(items) {
        var _this = _super.call(this) || this;
        _this._items = items ? fixParent(items.map(function _(item) {
            return object_assign_polyfill_1.assign(object_assign_polyfill_1.assign({}, item), {
                children: item.children ? item.children.map(_) : []
            });
        })) : [];
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
        var indexpathLength = indexpath.length;
        if (!indexpathLength) {
            throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
        }
        var items = this._items;
        var item;
        for (var i = 0, l = indexpathLength - 1; i < l; i++) {
            item = items[indexpath[i]];
            if (!item) {
                return;
            }
            items = item.children;
            if (!items) {
                return;
            }
        }
        return items[indexpath[indexpathLength - 1]];
    };
    ObservableTreeList.prototype.set = function (indexpath, item) {
        var indexpathLength = indexpath.length;
        if (!indexpathLength) {
            throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
        }
        var items;
        if (indexpathLength == 1) {
            items = this._items;
        }
        else {
            var parent_1 = this.get(indexpath.slice(0, -1));
            if (!parent_1) {
                throw new TypeError("Item by indexpath \"[" + indexpath.slice(0, -1).join(',') + "]\" is not exist");
            }
            items = parent_1.children;
            item.parent = parent_1;
        }
        var lastIndexValue = indexpath[indexpathLength - 1];
        if (item !== items[lastIndexValue]) {
            items[lastIndexValue] = item;
            this.emit('change');
        }
        return this;
    };
    ObservableTreeList.prototype.forEach = function (callback, context) { };
    ObservableTreeList.prototype.map = function (callback, context) {
        return [];
    };
    ObservableTreeList.prototype.filter = function (callback, context) {
        return [];
    };
    ObservableTreeList.prototype.every = function (callback, context) {
        return false;
    };
    ObservableTreeList.prototype.some = function (callback, context) {
        return false;
    };
    ObservableTreeList.prototype.reduce = function (callback, initialValue) {
        return undefined;
    };
    ObservableTreeList.prototype.reduceRight = function (callback, initialValue) {
        return undefined;
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
/* 17 */
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
var gettext_1 = __webpack_require__(5);
var next_tick_1 = __webpack_require__(3);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(8);
__webpack_require__(116);
var isEqualArray_1 = __webpack_require__(117);
var opal_select_option_1 = __webpack_require__(118);
exports.OpalSelectOption = opal_select_option_1.OpalSelectOption;
var template_nelm_1 = __webpack_require__(121);
var RtIfThen = rionite_1.Components.RtIfThen, RtRepeat = rionite_1.Components.RtRepeat;
var map = Array.prototype.map;
var defaultDataListItemSchema = Object.freeze({ value: 'value', text: 'text', disabled: 'disabled' });
var defaultVMItemSchema = Object.freeze({ value: 'value', text: 'text', disabled: 'disabled' });
var OpalSelect = /** @class */ (function (_super) {
    __extends(OpalSelect, _super);
    function OpalSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._needOptionsUpdating = false;
        _this._notUpdateOptions = false;
        _this._opened = false;
        _this._onсeFocusedAfterLoading = false;
        return _this;
    }
    OpalSelect_1 = OpalSelect;
    Object.defineProperty(OpalSelect.prototype, "value", {
        get: function () {
            return this.viewModel.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelect.prototype, "_buttonText", {
        get: function () {
            var _this = this;
            var text = this.viewModel.map(function (item) { return item[_this._viewModelItemTextFieldName]; }).join(', ');
            if (!text) {
                return this.input.placeholder;
            }
            if (text.length > this.input.maxTextLength) {
                text = gettext_1.getText.nt('Выбран{n:|о|о} {n}', this.viewModel.length);
            }
            return text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelect.prototype, "options", {
        get: function () {
            return map.call(this.optionElements, function (option) { return option.$component; });
        },
        enumerable: true,
        configurable: true
    });
    OpalSelect.prototype.initialize = function () {
        var input = this.input;
        if (input.dataListKeypath) {
            cellx_1.define(this, 'dataList', new cellx_1.Cell(Function("return this." + input.dataListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
            this._isInputDataListSpecified = true;
        }
        else if (input.$specified.has('dataList')) {
            cellx_1.define(this, 'dataList', function () { return input.dataList; });
            this._isInputDataListSpecified = true;
        }
        else {
            this.dataList = null;
            this._isInputDataListSpecified = false;
        }
        var dataListItemSchema = input.dataListItemSchema;
        var defaultDataListItemSchema = this.constructor.defaultDataListItemSchema;
        this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
        this.viewModel = input.viewModel || new cellx_1.ObservableList();
        var vmItemSchema = input.viewModelItemSchema;
        var defaultVMItemSchema = this.constructor.defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
        this._addNewItem = input.addNewItem;
    };
    OpalSelect.prototype.ready = function () {
        this.optionElements = this.element.getElementsByClassName('opal-select-option');
        if (this.input.viewModel && !this.input.value) {
            this._needOptionsUpdating = true;
        }
        else {
            this._notUpdateOptions = true;
            this.$('menu').renderContent();
            this._notUpdateOptions = false;
            this._initViewModel();
        }
    };
    OpalSelect.prototype._initViewModel = function () {
        var _this = this;
        var value = this.input.value;
        var selectedOptions;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Input "value" must be an array');
            }
            this._notUpdateOptions = true;
            this.viewModel.clear();
            if (value.length) {
                if (this.input.multiple) {
                    selectedOptions = this.options.filter(function (option) { return value.indexOf(option.value) != -1; });
                }
                else {
                    value = value[0];
                    var selectedOption = this.options.find(function (option) { return option.value == value; });
                    if (selectedOption) {
                        selectedOptions = [selectedOption];
                    }
                }
            }
        }
        else if (this.input.multiple) {
            selectedOptions = this.options.filter(function (option) { return option.selected; });
        }
        else {
            var selectedOption = this.options.find(function (option) { return option.selected; });
            if (selectedOption) {
                selectedOptions = [selectedOption];
            }
        }
        if (selectedOptions && selectedOptions.length) {
            this._notUpdateOptions = true;
            this.viewModel.addRange(selectedOptions.map(function (option) {
                return (_a = {},
                    _a[_this._viewModelItemValueFieldName] = option.value,
                    _a[_this._viewModelItemTextFieldName] = option.text,
                    _a);
                var _a;
            }));
        }
        this._notUpdateOptions = false;
        if (value) {
            this._updateOptions();
        }
    };
    OpalSelect.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-value-change': this._onInputValueChange,
            'input-view-model-change': this._onInputViewModelChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo(this.viewModel, 'change', this._onViewModelChange);
        this.listenTo('button', {
            focus: this._onButtonFocus,
            blur: this._onButtonBlur,
            click: this._onButtonClick
        });
        this.listenTo('menu', {
            'input-opened-change': this._onMenuInputOpenedChange,
            '<opal-select-option>select': this._onMenuSelectOptionSelect,
            '<opal-select-option>deselect': this._onMenuSelectOptionDeselect,
            '<opal-text-input>confirm': this._onMenuTextInputConfirm,
            '<*>change': this._onMenuChange
        });
    };
    OpalSelect.prototype._onInputValueChange = function (evt) {
        var vm = this.viewModel;
        var value = evt.data.value;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Input "value" must be an array');
            }
            if (value.length) {
                var multiple = this.input.multiple;
                if (multiple || !vm.length || value[0] != vm.get(0)[this._viewModelItemValueFieldName]) {
                    if (this._needOptionsUpdating) {
                        this._needOptionsUpdating = false;
                        this._notUpdateOptions = true;
                        this.$('menu').renderContent();
                        this._notUpdateOptions = false;
                        this._updateViewModel(value, multiple);
                    }
                    else {
                        this._updateViewModel(value, multiple);
                    }
                }
                return;
            }
        }
        vm.clear();
    };
    OpalSelect.prototype._updateViewModel = function (value, multiple) {
        var vm = this.viewModel;
        var vmItemValueFieldName = this._viewModelItemValueFieldName;
        var vmItemTextFieldName = this._viewModelItemTextFieldName;
        if (multiple) {
            this.options.forEach(function (option) {
                var optionValue = option.value;
                var itemIndex = vm.findIndex(function (item) { return item[vmItemValueFieldName] == optionValue; });
                if (value.indexOf(optionValue) == -1) {
                    if (itemIndex != -1) {
                        vm.removeAt(itemIndex);
                    }
                }
                else if (itemIndex == -1) {
                    vm.add((_a = {},
                        _a[vmItemValueFieldName] = optionValue,
                        _a[vmItemTextFieldName] = option.text,
                        _a));
                }
                var _a;
            });
        }
        else {
            value = value[0];
            if (!this.options.some(function (option) {
                if (option.value != value) {
                    return false;
                }
                vm.set(0, (_a = {},
                    _a[vmItemValueFieldName] = value,
                    _a[vmItemTextFieldName] = option.text,
                    _a));
                return true;
                var _a;
            })) {
                vm.clear();
            }
        }
    };
    OpalSelect.prototype._onInputViewModelChange = function (evt) {
        if (evt.data.value != this.viewModel) {
            throw new TypeError('Input property "viewModel" is readonly');
        }
    };
    OpalSelect.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            if (!this._documentKeyDownListening) {
                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            }
            this.focus();
        }
        else {
            if (!this._opened) {
                this._documentKeyDownListening.stop();
                this._documentKeyDownListening = null;
            }
            this.blur();
        }
    };
    OpalSelect.prototype._onViewModelChange = function () {
        if (!this._needOptionsUpdating && !this._notUpdateOptions) {
            this._updateOptions();
        }
    };
    OpalSelect.prototype._onButtonFocus = function () {
        this.input.focused = true;
        this.emit('focus');
    };
    OpalSelect.prototype._onButtonBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    OpalSelect.prototype._onButtonClick = function (evt) {
        if (evt.target.checked) {
            this.open();
        }
        else {
            this.close();
        }
    };
    OpalSelect.prototype._onMenuInputOpenedChange = function (evt) {
        if (!evt.data.value) {
            this.close();
        }
    };
    OpalSelect.prototype._onMenuSelectOptionSelect = function (evt) {
        var vm = this.viewModel;
        var vmItem = (_a = {},
            _a[this._viewModelItemValueFieldName] = evt.target.value,
            _a[this._viewModelItemTextFieldName] = evt.target.text,
            _a);
        if (this.input.multiple) {
            this._notUpdateOptions = true;
            vm.add(vmItem);
            this._notUpdateOptions = false;
        }
        else {
            if (vm.length) {
                vm.set(0, vmItem);
            }
            else {
                vm.add(vmItem);
            }
            this.close();
            this.focus();
            this.emit('change');
        }
        var _a;
    };
    OpalSelect.prototype._onMenuSelectOptionDeselect = function (evt) {
        if (this.input.multiple) {
            var value_1 = evt.target.value;
            this._notUpdateOptions = true;
            this.viewModel.removeAt(this.viewModel.findIndex(function (item) { return item.value == value_1; }));
            this._notUpdateOptions = false;
        }
        else {
            evt.target.select();
            this.close();
            this.focus();
        }
    };
    OpalSelect.prototype._onMenuTextInputConfirm = function (evt) {
        var _this = this;
        var textInput = evt.target;
        if (textInput !== this.$('new-item-input')) {
            return;
        }
        if (!this._addNewItem) {
            throw new TypeError('Input property "addNewItem" is required');
        }
        var text = textInput.value;
        textInput.clear();
        textInput.input.loading = true;
        textInput.input.disabled = true;
        this._addNewItem(text).then(function (newItem) {
            textInput.input.loading = false;
            textInput.input.disabled = false;
            var value = newItem[_this._viewModelItemValueFieldName];
            var text = newItem[_this._viewModelItemTextFieldName];
            if (_this.dataList) {
                _this.dataList.add((_a = {},
                    _a[_this._dataListItemValueFieldName] = value,
                    _a[_this._dataListItemTextFieldName] = text,
                    _a));
            }
            var loadedList = _this.$('loaded-list');
            if (loadedList) {
                loadedList.input.query = '';
            }
            var vm = _this.viewModel;
            var vmItem = (_b = {},
                _b[_this._viewModelItemValueFieldName] = value,
                _b[_this._viewModelItemTextFieldName] = text,
                _b);
            if (_this.input.multiple) {
                vm.add(vmItem);
                _this.emit('input');
            }
            else {
                if (vm.length) {
                    vm.set(0, vmItem);
                }
                else {
                    vm.add(vmItem);
                }
                _this.close();
                _this.focus();
                _this.emit('input');
                _this.emit('change');
            }
            var _a, _b;
        }, function () {
            textInput.input.loading = false;
            textInput.input.disabled = false;
        });
    };
    OpalSelect.prototype._onMenuChange = function (evt) {
        if (!this._notUpdateOptions && (evt.target instanceof RtIfThen || evt.target instanceof RtRepeat)) {
            this.optionsCell.pull();
            this._updateOptions();
        }
    };
    OpalSelect.prototype._updateOptions = function () {
        var vm = this.viewModel;
        var vmItemValueFieldName = this._viewModelItemValueFieldName;
        var vmItemDisabledFieldName = this._viewModelItemDisabledFieldName;
        this.options.forEach(function (option) {
            var value = option.value;
            var item = vm.find(function (item) { return item[vmItemValueFieldName] == value; });
            if (item) {
                option.selected = true;
                option.disabled = item[vmItemDisabledFieldName];
            }
            else {
                option.selected = false;
            }
        });
    };
    OpalSelect.prototype.open = function () {
        var _this = this;
        if (this._opened) {
            return false;
        }
        this._opened = true;
        this._valueOnOpen = this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; });
        this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
        if (!this._documentKeyDownListening) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
        }
        this.$('button').check();
        this._notUpdateOptions = true;
        this.$('menu').open();
        this._notUpdateOptions = false;
        if (this._needOptionsUpdating) {
            this._needOptionsUpdating = false;
            this._updateOptions();
        }
        var loadedList = this.$('loaded-list');
        if (loadedList) {
            loadedList.checkLoading();
        }
        var focusTarget = this.$('focus');
        if (focusTarget) {
            focusTarget.focus();
        }
        else {
            var filteredList = this.$('filtered-list');
            if (filteredList) {
                focusTarget = filteredList.$('query-input');
            }
            if (focusTarget) {
                focusTarget.focus();
            }
            else {
                this._focusOptions();
            }
        }
        return true;
    };
    OpalSelect.prototype.close = function () {
        var _this = this;
        if (!this._opened) {
            return false;
        }
        this._opened = false;
        this._documentFocusListening.stop();
        if (!this.input.focused) {
            this._documentKeyDownListening.stop();
            this._documentKeyDownListening = null;
        }
        this.$('button').uncheck();
        this.$('menu').close();
        if (this.input.multiple) {
            if (!isEqualArray_1.isEqualArray(this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; }), this._valueOnOpen)) {
                this.emit('change');
            }
        }
        return true;
    };
    OpalSelect.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalSelect.prototype._onDocumentFocus = function (evt) {
        if (!isFocusable_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.close();
        }
    };
    OpalSelect.prototype._onDocumentKeyDown = function (evt) {
        switch (evt.which) {
            case 32 /* Space */: {
                evt.preventDefault();
                if (this._opened) {
                    if (this.input.focused) {
                        this.close();
                    }
                }
                else {
                    this.open();
                }
                break;
            }
            case 38 /* Up */: {
                evt.preventDefault();
                if (this._opened) {
                    if (document.activeElement == document.body) {
                        if (this._focusOptions()) {
                            document.body.classList.remove('_no-focus-highlight');
                        }
                    }
                    else {
                        var options = this.options;
                        for (var i = 1, l = options.length; i < l; i++) {
                            if (options[i].input.focused) {
                                do {
                                    var option = options[--i];
                                    if (!option.input.disabled && option.element.offsetWidth) {
                                        document.body.classList.remove('_no-focus-highlight');
                                        option.focus();
                                        break;
                                    }
                                } while (i);
                                break;
                            }
                        }
                    }
                }
                else {
                    this.open();
                }
                break;
            }
            case 40 /* Down */: {
                evt.preventDefault();
                if (this._opened) {
                    if (document.activeElement == document.body) {
                        if (this._focusOptions()) {
                            document.body.classList.remove('_no-focus-highlight');
                        }
                    }
                    else {
                        var options = this.options;
                        for (var i = 0, l = options.length - 1; i < l; i++) {
                            if (options[i].input.focused) {
                                do {
                                    var option = options[++i];
                                    if (!option.input.disabled && option.element.offsetWidth) {
                                        document.body.classList.remove('_no-focus-highlight');
                                        option.focus();
                                        break;
                                    }
                                } while (i < l);
                                break;
                            }
                        }
                    }
                }
                else {
                    this.open();
                }
                break;
            }
            case 27 /* Esc */: {
                evt.preventDefault();
                this.close();
                this.focus();
                break;
            }
        }
    };
    OpalSelect.prototype._focusOptions = function () {
        var options = this.options;
        var optionForFocus;
        for (var i = 0, l = options.length; i < l; i++) {
            var option = options[i];
            if (!option.input.disabled) {
                if (option.selected) {
                    optionForFocus = option;
                    break;
                }
                if (!optionForFocus) {
                    optionForFocus = option;
                }
            }
        }
        if (optionForFocus) {
            optionForFocus.focus();
            return true;
        }
        return false;
    };
    OpalSelect.prototype.focus = function () {
        this.$('button').focus();
        return this;
    };
    OpalSelect.prototype.blur = function () {
        this.$('button').blur();
        return this;
    };
    OpalSelect.OpalSelectOption = opal_select_option_1.OpalSelectOption;
    OpalSelect.defaultDataListItemSchema = defaultDataListItemSchema;
    OpalSelect.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        cellx_decorators_1.observable
    ], OpalSelect.prototype, "viewModel", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalSelect.prototype, "value", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalSelect.prototype, "_buttonText", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalSelect.prototype, "options", null);
    OpalSelect = OpalSelect_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-select',
            input: {
                viewType: String,
                size: 'm',
                multiple: { default: false, readonly: true },
                dataList: { type: Object },
                dataListKeypath: { type: String, readonly: true },
                dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
                value: eval,
                viewModel: { type: Object },
                viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
                addNewItem: { type: Object, readonly: true },
                text: String,
                maxTextLength: 20,
                placeholder: gettext_1.getText.t('Не выбрано'),
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default,
            events: {
                'menu-container': {
                    loaded: function (evt) {
                        if (this._onсeFocusedAfterLoading || evt.target !== this.$('loaded-list')) {
                            return;
                        }
                        this._onсeFocusedAfterLoading = true;
                        this._focusOptions();
                        var focusTarget = this.$('focus');
                        if (!focusTarget) {
                            var filteredList = this.$('filtered-list');
                            if (filteredList) {
                                focusTarget = filteredList.$('query-input');
                            }
                        }
                        if (focusTarget) {
                            next_tick_1.nextTick(function () {
                                focusTarget.focus();
                            });
                        }
                    }
                }
            }
        })
    ], OpalSelect);
    return OpalSelect;
    var OpalSelect_1;
}(rionite_1.Component));
exports.OpalSelect = OpalSelect;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = Function('return this;')();
var Symbol = global.Symbol;

var idCounter = 0;

if (!Symbol) {
	Symbol = function Symbol(key) {
		return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + (++idCounter) + '__';
	};

	Symbol.iterator = Symbol('Symbol.iterator');
}

( true ? exports : global).Symbol = Symbol;


/***/ }),
/* 19 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(11);
var logger_1 = __webpack_require__(20);
var map_set_polyfill_1 = __webpack_require__(4);
var next_tick_1 = __webpack_require__(3);
var symbol_polyfill_1 = __webpack_require__(9);
var EventEmitter_1 = __webpack_require__(6);
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff;
var KEY_WRAPPERS = symbol_polyfill_1.Symbol('wrappers');
var errorIndexCounter = 0;
var pushingIndexCounter = 0;
var releasePlan = new map_set_polyfill_1.Map();
var releasePlanIndex = MAX_SAFE_INTEGER;
var releasePlanToIndex = -1;
var releasePlanned = false;
var currentlyRelease = 0;
var currentCell = null;
var $error = { error: null };
var releaseVersion = 1;
var afterRelease;
var STATE_INITED = 1;
var STATE_CURRENTLY_PULLING = 1 << 1;
var STATE_ACTIVE = 1 << 2;
var STATE_HAS_FOLLOWERS = 1 << 3;
var STATE_PENDING = 1 << 4;
var STATE_CAN_CANCEL_CHANGE = 1 << 5;
function release(force) {
    if (!releasePlanned && !force) {
        return;
    }
    releasePlanned = false;
    currentlyRelease++;
    var queue = releasePlan.get(releasePlanIndex);
    for (;;) {
        var cell = queue && queue.shift();
        if (!cell) {
            if (releasePlanIndex == releasePlanToIndex) {
                break;
            }
            queue = releasePlan.get(++releasePlanIndex);
            continue;
        }
        var oldReleasePlanIndex = releasePlanIndex;
        var level = cell._level;
        var changeEvent = cell._changeEvent;
        if (!changeEvent) {
            if (level > releasePlanIndex || cell._levelInRelease == -1) {
                if (!queue.length) {
                    if (releasePlanIndex == releasePlanToIndex) {
                        break;
                    }
                    queue = releasePlan.get(++releasePlanIndex);
                }
                continue;
            }
            cell.pull();
            level = cell._level;
            if (level > releasePlanIndex) {
                if (!queue.length) {
                    queue = releasePlan.get(++releasePlanIndex);
                }
                continue;
            }
            changeEvent = cell._changeEvent;
        }
        cell._levelInRelease = -1;
        if (changeEvent) {
            cell._fixedValue = cell._value;
            cell._changeEvent = null;
            var pushingIndex = cell._pushingIndex;
            var slaves = cell._slaves;
            for (var i = 0, l = slaves.length; i < l; i++) {
                var slave = slaves[i];
                if (slave._level <= level) {
                    slave._level = level + 1;
                }
                if (pushingIndex > slave._pushingIndex) {
                    slave._pushingIndex = pushingIndex;
                    slave._changeEvent = null;
                    slave._addToRelease();
                }
            }
            cell.handleEvent(changeEvent);
            if (releasePlanIndex == MAX_SAFE_INTEGER) {
                break;
            }
            if (releasePlanIndex != oldReleasePlanIndex) {
                queue = releasePlan.get(releasePlanIndex);
                continue;
            }
        }
        if (!queue.length) {
            if (releasePlanIndex == releasePlanToIndex) {
                break;
            }
            queue = releasePlan.get(++releasePlanIndex);
        }
    }
    if (!--currentlyRelease) {
        releasePlanIndex = MAX_SAFE_INTEGER;
        releasePlanToIndex = -1;
        releaseVersion++;
        if (afterRelease) {
            var after = afterRelease;
            afterRelease = null;
            for (var i = 0, l = after.length; i < l; i++) {
                var item = after[i];
                if (typeof item == 'function') {
                    item();
                }
                else {
                    item[0]._push(item[1], true, false);
                }
            }
        }
    }
}
function defaultPut(cell, value) {
    cell.push(value);
}
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(value, opts) {
        var _this = _super.call(this) || this;
        _this._error = null;
        _this._selfErrorCell = null;
        _this._errorCell = null;
        _this._pushingIndex = 0;
        _this._errorIndex = 0;
        _this._version = 0;
        _this._masters = undefined;
        _this._slaves = [];
        _this._level = 0;
        _this._levelInRelease = -1;
        _this._selfPendingStatusCell = null;
        _this._pendingStatusCell = null;
        _this._state = STATE_CAN_CANCEL_CHANGE;
        _this._changeEvent = null;
        _this._lastErrorEvent = null;
        _this.debugKey = opts && opts.debugKey;
        _this.context = opts && opts.context || _this;
        _this._pull = typeof value == 'function' ? value : null;
        _this._get = opts && opts.get || null;
        _this._validate = opts && opts.validate || null;
        _this._merge = opts && opts.merge || null;
        _this._put = opts && opts.put || defaultPut;
        _this._reap = opts && opts.reap || null;
        if (_this._pull) {
            _this._fixedValue = _this._value = undefined;
        }
        else {
            if (_this._validate) {
                _this._validate(value, undefined);
            }
            if (_this._merge) {
                value = _this._merge(value, undefined);
            }
            _this._fixedValue = _this._value = value;
            if (value instanceof EventEmitter_1.EventEmitter) {
                value.on('change', _this._onValueChange, _this);
            }
        }
        if (opts) {
            if (opts.onChange) {
                _this.on('change', opts.onChange);
            }
            if (opts.onError) {
                _this.on('error', opts.onError);
            }
        }
        return _this;
    }
    Object.defineProperty(Cell, "currentlyPulling", {
        get: function () {
            return !!currentCell;
        },
        enumerable: true,
        configurable: true
    });
    Cell.autorun = function (callback, context) {
        var disposer;
        new Cell(function () {
            var cell = this;
            if (!disposer) {
                disposer = function () {
                    cell.dispose();
                };
            }
            callback.call(context, disposer);
        }, {
            onChange: function () { }
        });
        return disposer;
    };
    Cell.forceRelease = function () {
        if (releasePlanned || currentlyRelease) {
            release(true);
        }
    };
    Cell.afterRelease = function (callback) {
        (afterRelease || (afterRelease = [])).push(callback);
    };
    Cell.prototype.on = function (type, listener, context) {
        if (releasePlanned || currentlyRelease) {
            release(true);
        }
        this._activate();
        if (typeof type == 'object') {
            _super.prototype.on.call(this, type, listener !== undefined ? listener : this.context);
        }
        else {
            _super.prototype.on.call(this, type, listener, context !== undefined ? context : this.context);
        }
        this._state |= STATE_HAS_FOLLOWERS;
        return this;
    };
    Cell.prototype.off = function (type, listener, context) {
        if (releasePlanned || currentlyRelease) {
            release(true);
        }
        if (type) {
            if (typeof type == 'object') {
                _super.prototype.off.call(this, type, listener !== undefined ? listener : this.context);
            }
            else {
                _super.prototype.off.call(this, type, listener, context !== undefined ? context : this.context);
            }
        }
        else {
            _super.prototype.off.call(this);
        }
        if (!this._slaves.length && !this._events.has('change') && !this._events.has('error') &&
            (this._state & STATE_HAS_FOLLOWERS)) {
            this._state ^= STATE_HAS_FOLLOWERS;
            this._deactivate();
            if (this._reap) {
                this._reap.call(this.context);
            }
        }
        return this;
    };
    Cell.prototype.addChangeListener = function (listener, context) {
        return this.on('change', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.removeChangeListener = function (listener, context) {
        return this.off('change', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.addErrorListener = function (listener, context) {
        return this.on('error', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.removeErrorListener = function (listener, context) {
        return this.off('error', listener, context !== undefined ? context : this.context);
    };
    Cell.prototype.subscribe = function (listener, context) {
        var wrappers = listener[KEY_WRAPPERS] ||
            (listener[KEY_WRAPPERS] = new map_set_polyfill_1.Map());
        if (wrappers.has(this)) {
            return this;
        }
        function wrapper(evt) {
            return listener.call(this, evt.data.error || null, evt);
        }
        wrappers.set(this, wrapper);
        if (context === undefined) {
            context = this.context;
        }
        return this
            .on('change', wrapper, context)
            .on('error', wrapper, context);
    };
    Cell.prototype.unsubscribe = function (listener, context) {
        var wrappers = listener[KEY_WRAPPERS];
        var wrapper = wrappers && wrappers.get(this);
        if (!wrapper) {
            return this;
        }
        wrappers.delete(this);
        if (context === undefined) {
            context = this.context;
        }
        return this
            .off('change', wrapper, context)
            .off('error', wrapper, context);
    };
    Cell.prototype._registerSlave = function (slave) {
        this._activate();
        this._slaves.push(slave);
        this._state |= STATE_HAS_FOLLOWERS;
    };
    Cell.prototype._unregisterSlave = function (slave) {
        this._slaves.splice(this._slaves.indexOf(slave), 1);
        if (!this._slaves.length && !this._events.has('change') && !this._events.has('error')) {
            this._state ^= STATE_HAS_FOLLOWERS;
            this._deactivate();
            if (this._reap) {
                this._reap.call(this.context);
            }
        }
    };
    Cell.prototype._activate = function () {
        if (!this._pull || this._state & STATE_ACTIVE) {
            return;
        }
        var masters = this._masters;
        if (masters === null) {
            return;
        }
        if (this._version < releaseVersion) {
            var value = this._tryPull();
            if (masters || this._masters || !(this._state & STATE_INITED)) {
                if (value === $error) {
                    this._fail($error.error, false);
                }
                else {
                    this._push(value, false, false);
                }
            }
            masters = this._masters;
        }
        if (masters) {
            var i = masters.length;
            do {
                masters[--i]._registerSlave(this);
            } while (i);
            this._state |= STATE_ACTIVE;
        }
    };
    Cell.prototype._deactivate = function () {
        if (!(this._state & STATE_ACTIVE)) {
            return;
        }
        var masters = this._masters;
        var i = masters.length;
        do {
            masters[--i]._unregisterSlave(this);
        } while (i);
        if (this._levelInRelease != -1) {
            this._levelInRelease = -1;
            this._changeEvent = null;
        }
        this._state ^= STATE_ACTIVE;
    };
    Cell.prototype._addToRelease = function () {
        var level = this._level;
        if (level <= this._levelInRelease) {
            return;
        }
        var queue;
        (releasePlan.get(level) || (releasePlan.set(level, (queue = [])), queue)).push(this);
        if (releasePlanIndex > level) {
            releasePlanIndex = level;
        }
        if (releasePlanToIndex < level) {
            releasePlanToIndex = level;
        }
        this._levelInRelease = level;
        if (!releasePlanned && !currentlyRelease) {
            releasePlanned = true;
            next_tick_1.nextTick(release);
        }
    };
    Cell.prototype._onValueChange = function (evt) {
        var _this = this;
        if (this._state & STATE_HAS_FOLLOWERS) {
            if (currentCell) {
                (afterRelease || (afterRelease = [])).push(function () {
                    _this._onValueChange$(evt);
                });
            }
            else {
                this._onValueChange$(evt);
            }
        }
        else {
            this._pushingIndex = ++pushingIndexCounter;
            this._version = ++releaseVersion + +(currentlyRelease > 0);
        }
    };
    Cell.prototype._onValueChange$ = function (evt) {
        this._pushingIndex = ++pushingIndexCounter;
        var changeEvent = (evt.data || (evt.data = {})).prev = this._changeEvent;
        this._changeEvent = evt;
        if (changeEvent) {
            if (this._value === this._fixedValue) {
                this._state &= ~STATE_CAN_CANCEL_CHANGE;
            }
        }
        else {
            this._state &= ~STATE_CAN_CANCEL_CHANGE;
            this._addToRelease();
        }
    };
    Cell.prototype.get = function () {
        if (this._pull) {
            if (this._state & STATE_ACTIVE) {
                if (releasePlanned || currentlyRelease && !currentCell) {
                    release(true);
                }
            }
            else if (this._version < releaseVersion + +(currentlyRelease > 0)) {
                var oldMasters = this._masters;
                if (oldMasters !== null) {
                    var value = this._tryPull();
                    var masters = this._masters;
                    if (oldMasters || masters || !(this._state & STATE_INITED)) {
                        if (masters && (this._state & STATE_HAS_FOLLOWERS)) {
                            var i = masters.length;
                            do {
                                masters[--i]._registerSlave(this);
                            } while (i);
                            this._state |= STATE_ACTIVE;
                        }
                        if (value === $error) {
                            this._fail($error.error, false);
                        }
                        else {
                            this._push(value, false, false);
                        }
                    }
                }
            }
        }
        if (currentCell) {
            var currentCellMasters = currentCell._masters;
            var level = this._level;
            if (currentCellMasters) {
                if (currentCellMasters.indexOf(this) == -1) {
                    currentCellMasters.push(this);
                    if (currentCell._level <= level) {
                        currentCell._level = level + 1;
                    }
                }
            }
            else {
                currentCell._masters = [this];
                currentCell._level = level + 1;
            }
        }
        return this._get ? this._get(this._value) : this._value;
    };
    Cell.prototype.pull = function () {
        if (!this._pull) {
            return false;
        }
        if (releasePlanned) {
            release();
        }
        var oldMasters;
        var oldLevel;
        var value;
        if (this._state & STATE_HAS_FOLLOWERS) {
            oldMasters = this._masters;
            oldLevel = this._level;
            value = this._tryPull();
            var masters = this._masters;
            var newMasterCount = 0;
            if (masters) {
                var i = masters.length;
                do {
                    var master = masters[--i];
                    if (!oldMasters || oldMasters.indexOf(master) == -1) {
                        master._registerSlave(this);
                        newMasterCount++;
                    }
                } while (i);
            }
            if (oldMasters && (masters ? masters.length - newMasterCount : 0) < oldMasters.length) {
                for (var i = oldMasters.length; i;) {
                    var oldMaster = oldMasters[--i];
                    if (!masters || masters.indexOf(oldMaster) == -1) {
                        oldMaster._unregisterSlave(this);
                    }
                }
            }
            if (masters && masters.length) {
                this._state |= STATE_ACTIVE;
            }
            else {
                this._state &= ~STATE_ACTIVE;
            }
            if (currentlyRelease && this._level > oldLevel) {
                this._addToRelease();
                return false;
            }
        }
        else {
            value = this._tryPull();
        }
        if (value === $error) {
            this._fail($error.error, false);
            return true;
        }
        return this._push(value, false, true);
    };
    Cell.prototype._tryPull = function () {
        if (this._state & STATE_CURRENTLY_PULLING) {
            throw new TypeError('Circular pulling detected');
        }
        var pull = this._pull;
        if (pull.length) {
            if (this._selfPendingStatusCell) {
                this._selfPendingStatusCell.set(true);
            }
            this._state |= STATE_PENDING;
        }
        var prevCell = currentCell;
        currentCell = this;
        this._masters = null;
        this._level = 0;
        this._state |= STATE_CURRENTLY_PULLING;
        try {
            return pull.length ? pull.call(this.context, this, this._value) : pull.call(this.context);
        }
        catch (err) {
            $error.error = err;
            return $error;
        }
        finally {
            currentCell = prevCell;
            this._version = releaseVersion + +(currentlyRelease > 0);
            var pendingStatusCell = this._pendingStatusCell;
            if (pendingStatusCell && (pendingStatusCell._state & STATE_ACTIVE)) {
                pendingStatusCell.pull();
            }
            var errorCell = this._errorCell;
            if (errorCell && (errorCell._state & STATE_ACTIVE)) {
                errorCell.pull();
            }
            this._state ^= STATE_CURRENTLY_PULLING;
        }
    };
    Cell.prototype.getError = function () {
        var errorCell = this._errorCell;
        if (!errorCell) {
            var debugKey = this.debugKey;
            this._selfErrorCell = new Cell(this._error, debugKey ? { debugKey: debugKey + '._selfErrorCell' } : undefined);
            errorCell = this._errorCell = new Cell(function () {
                this.get();
                var err = this._selfErrorCell.get();
                var errorIndex;
                if (err) {
                    errorIndex = this._errorIndex;
                    if (errorIndex == errorIndexCounter) {
                        return err;
                    }
                }
                var masters = this._masters;
                if (masters) {
                    var i = masters.length;
                    do {
                        var master = masters[--i];
                        var masterError = master.getError();
                        if (masterError) {
                            var masterErrorIndex = master._errorIndex;
                            if (masterErrorIndex == errorIndexCounter) {
                                return masterError;
                            }
                            if (!err || errorIndex < masterErrorIndex) {
                                err = masterError;
                                errorIndex = masterErrorIndex;
                            }
                        }
                    } while (i);
                }
                return err;
            }, debugKey ? { debugKey: debugKey + '._errorCell', context: this } : { context: this });
        }
        return errorCell.get();
    };
    Cell.prototype.isPending = function () {
        var pendingStatusCell = this._pendingStatusCell;
        if (!pendingStatusCell) {
            var debugKey = this.debugKey;
            this._selfPendingStatusCell = new Cell(!!(this._state & STATE_PENDING), debugKey ? { debugKey: debugKey + '._selfPendingStatusCell' } : undefined);
            pendingStatusCell = this._pendingStatusCell = new Cell(function () {
                if (this._selfPendingStatusCell.get()) {
                    return true;
                }
                this.get();
                var masters = this._masters;
                if (masters) {
                    var i = masters.length;
                    do {
                        if (masters[--i].isPending()) {
                            return true;
                        }
                    } while (i);
                }
                return false;
            }, debugKey ? { debugKey: debugKey + '._pendingStatusCell', context: this } : { context: this });
        }
        return pendingStatusCell.get();
    };
    Cell.prototype.set = function (value) {
        if (this._validate) {
            this._validate(value, this._value);
        }
        if (this._merge) {
            value = this._merge(value, this._value);
        }
        if (this._selfPendingStatusCell) {
            this._selfPendingStatusCell.set(true);
        }
        this._state |= STATE_PENDING;
        if (this._put.length >= 3) {
            this._put.call(this.context, this, value, this._value);
        }
        else {
            this._put.call(this.context, this, value);
        }
        return this;
    };
    Cell.prototype.push = function (value) {
        this._push(value, true, false);
        return this;
    };
    Cell.prototype._push = function (value, external, pulling) {
        this._state |= STATE_INITED;
        var oldValue = this._value;
        if (external && currentCell && (this._state & STATE_HAS_FOLLOWERS)) {
            if (is_1.is(value, oldValue)) {
                this._setError(null);
                this._resolvePending();
                return false;
            }
            (afterRelease || (afterRelease = [])).push([this, value]);
            return true;
        }
        if (external || !currentlyRelease && pulling) {
            this._pushingIndex = ++pushingIndexCounter;
        }
        this._setError(null);
        if (is_1.is(value, oldValue)) {
            if (external || currentlyRelease && pulling) {
                this._resolvePending();
            }
            return false;
        }
        this._value = value;
        if (oldValue instanceof EventEmitter_1.EventEmitter) {
            oldValue.off('change', this._onValueChange, this);
        }
        if (value instanceof EventEmitter_1.EventEmitter) {
            value.on('change', this._onValueChange, this);
        }
        if (this._state & STATE_HAS_FOLLOWERS) {
            if (this._changeEvent) {
                if (is_1.is(value, this._fixedValue) && (this._state & STATE_CAN_CANCEL_CHANGE)) {
                    this._levelInRelease = -1;
                    this._changeEvent = null;
                }
                else {
                    this._changeEvent = {
                        target: this,
                        type: 'change',
                        data: {
                            oldValue: oldValue,
                            value: value,
                            prev: this._changeEvent
                        }
                    };
                }
            }
            else {
                this._state |= STATE_CAN_CANCEL_CHANGE;
                this._changeEvent = {
                    target: this,
                    type: 'change',
                    data: {
                        oldValue: oldValue,
                        value: value,
                        prev: null
                    }
                };
                this._addToRelease();
            }
        }
        else {
            if (external || !currentlyRelease && pulling) {
                releaseVersion++;
            }
            this._fixedValue = value;
            this._version = releaseVersion + +(currentlyRelease > 0);
        }
        if (external || currentlyRelease && pulling) {
            this._resolvePending();
        }
        return true;
    };
    Cell.prototype.fail = function (err) {
        this._fail(err, true);
        return this;
    };
    Cell.prototype._fail = function (err, external) {
        logger_1.error('[' + this.debugKey + ']', err);
        if (!(err instanceof Error)) {
            err = new Error(String(err));
        }
        this._setError(err);
        if (external) {
            this._resolvePending();
        }
    };
    Cell.prototype._setError = function (err) {
        if (!err && !this._error) {
            return;
        }
        this._error = err;
        if (this._selfErrorCell) {
            this._selfErrorCell.set(err);
        }
        if (err) {
            this._errorIndex = ++errorIndexCounter;
            this._handleErrorEvent({
                target: this,
                type: 'error',
                data: {
                    error: err
                }
            });
        }
    };
    Cell.prototype._handleErrorEvent = function (evt) {
        if (this._lastErrorEvent === evt) {
            return;
        }
        this._lastErrorEvent = evt;
        this.handleEvent(evt);
        var slaves = this._slaves;
        for (var i = 0, l = slaves.length; i < l; i++) {
            slaves[i]._handleErrorEvent(evt);
        }
    };
    Cell.prototype._resolvePending = function () {
        if (this._state & STATE_PENDING) {
            if (this._selfPendingStatusCell) {
                this._selfPendingStatusCell.set(false);
            }
            this._state ^= STATE_PENDING;
        }
    };
    Cell.prototype.reap = function () {
        var slaves = this._slaves;
        for (var i = 0, l = slaves.length; i < l; i++) {
            slaves[i].reap();
        }
        return this.off();
    };
    Cell.prototype.dispose = function () {
        return this.reap();
    };
    return Cell;
}(EventEmitter_1.EventEmitter));
exports.Cell = Cell;
Cell.prototype[symbol_polyfill_1.Symbol.iterator] = function () {
    return this._value[symbol_polyfill_1.Symbol.iterator]();
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global = Function('return this;')();
function noop() { }
var defaultHandler = function (type) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    var console = global.console;
    (console && console[type] || noop).call(console || null, (type == 'error' ? msg.map(function (m) { return m === Object(m) && m.stack || m; }) : msg).join(' '));
};
var Logger = /** @class */ (function () {
    function Logger(handler) {
        this.handler = handler || defaultHandler;
    }
    Logger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['log'].concat(msg));
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['warn'].concat(msg));
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['error'].concat(msg));
    };
    return Logger;
}());
exports.Logger = Logger;
exports.logger = new Logger();
exports.log = exports.logger.log.bind(exports.logger);
exports.warn = exports.logger.warn.bind(exports.logger);
exports.error = exports.logger.error.bind(exports.logger);


/***/ }),
/* 21 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(11);
var mixin_1 = __webpack_require__(7);
var symbol_polyfill_1 = __webpack_require__(9);
var EventEmitter_1 = __webpack_require__(6);
var FreezableCollection_1 = __webpack_require__(12);
var ObservableCollection_1 = __webpack_require__(13);
var splice = Array.prototype.splice;
function defaultComparator(a, b) {
    return a < b ? -1 : (a > b ? 1 : 0);
}
var ObservableList = /** @class */ (function (_super) {
    __extends(ObservableList, _super);
    function ObservableList(items, opts) {
        var _this = _super.call(this) || this;
        _this._items = [];
        _this._length = 0;
        FreezableCollection_1.FreezableCollection.call(_this);
        ObservableCollection_1.ObservableCollection.call(_this);
        if (typeof opts == 'boolean') {
            opts = { adoptsValueChanges: opts };
        }
        _this._adoptsValueChanges = !!(opts && opts.adoptsValueChanges);
        if (opts && (opts.sorted || opts.comparator && opts.sorted !== false)) {
            _this._comparator = opts.comparator || defaultComparator;
            _this._sorted = true;
        }
        else {
            _this._comparator = null;
            _this._sorted = false;
        }
        if (items) {
            _this._addRange(items);
        }
        return _this;
    }
    Object.defineProperty(ObservableList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableList.prototype._validateIndex = function (index, allowEndIndex) {
        if (index === undefined) {
            return index;
        }
        if (index < 0) {
            index += this._length;
            if (index < 0) {
                throw new RangeError('Index out of valid range');
            }
        }
        else if (index > this._length - (allowEndIndex ? 0 : 1)) {
            throw new RangeError('Index out of valid range');
        }
        return index;
    };
    ObservableList.prototype.contains = function (value) {
        return this._valueCounts.has(value);
    };
    ObservableList.prototype.indexOf = function (value, fromIndex) {
        return this._items.indexOf(value, this._validateIndex(fromIndex, true));
    };
    ObservableList.prototype.lastIndexOf = function (value, fromIndex) {
        return this._items.lastIndexOf(value, fromIndex === undefined ? -1 : this._validateIndex(fromIndex, true));
    };
    ObservableList.prototype.get = function (index) {
        return this._items[this._validateIndex(index, true)];
    };
    ObservableList.prototype.getRange = function (index, count) {
        index = this._validateIndex(index, true);
        var items = this._items;
        if (count === undefined) {
            return items.slice(index);
        }
        if (index + count > items.length) {
            throw new RangeError('Sum of "index" and "count" out of valid range');
        }
        return items.slice(index, index + count);
    };
    ObservableList.prototype.set = function (index, value) {
        if (this._sorted) {
            throw new TypeError('Cannot set to sorted list');
        }
        index = this._validateIndex(index, true);
        var items = this._items;
        if (is_1.is(value, items[index])) {
            return this;
        }
        this._throwIfFrozen();
        this._unregisterValue(items[index]);
        items[index] = this._registerValue(value);
        this.emit('change');
        return this;
    };
    ObservableList.prototype.setRange = function (index, values) {
        if (this._sorted) {
            throw new TypeError('Cannot set to sorted list');
        }
        index = this._validateIndex(index, true);
        var valueCount = values.length;
        if (!valueCount) {
            return this;
        }
        if (index + valueCount > this._length) {
            throw new RangeError('Sum of "index" and "values.length" out of valid range');
        }
        if (values instanceof ObservableList) {
            values = values._items.slice();
        }
        var items = this._items;
        var changed = false;
        for (var i = index + valueCount; i > index;) {
            var value = values[--i - index];
            if (!is_1.is(value, items[i])) {
                if (!changed) {
                    this._throwIfFrozen();
                }
                this._unregisterValue(items[i]);
                items[i] = this._registerValue(value);
                changed = true;
            }
        }
        if (changed) {
            this.emit('change');
        }
        return this;
    };
    ObservableList.prototype.add = function (value) {
        this._throwIfFrozen();
        if (this._sorted) {
            this._insertSortedValue(value);
        }
        else {
            this._items.push(this._registerValue(value));
        }
        this._length++;
        this.emit('change');
        return this;
    };
    ObservableList.prototype.addRange = function (values) {
        if (values.length) {
            this._throwIfFrozen();
            this._addRange(values);
            this.emit('change');
        }
        return this;
    };
    ObservableList.prototype._addRange = function (values) {
        if (values instanceof ObservableList) {
            values = values._items.slice();
        }
        var valueCount = values.length;
        if (this._sorted) {
            for (var i = 0; i < valueCount; i++) {
                this._insertSortedValue(values[i]);
            }
        }
        else {
            var items = this._items;
            var itemCount = items.length;
            for (var i = itemCount + valueCount; i > itemCount;) {
                items[--i] = this._registerValue(values[i - itemCount]);
            }
        }
        this._length += valueCount;
    };
    ObservableList.prototype.insert = function (index, value) {
        if (this._sorted) {
            throw new TypeError('Cannot insert to sorted list');
        }
        index = this._validateIndex(index, true);
        this._throwIfFrozen();
        this._items.splice(index, 0, this._registerValue(value));
        this._length++;
        this.emit('change');
        return this;
    };
    ObservableList.prototype.insertRange = function (index, values) {
        if (this._sorted) {
            throw new TypeError('Cannot insert to sorted list');
        }
        index = this._validateIndex(index, true);
        var valueCount = values.length;
        if (!valueCount) {
            return this;
        }
        this._throwIfFrozen();
        if (values instanceof ObservableList) {
            values = values._items;
        }
        for (var i = valueCount; i;) {
            this._registerValue(values[--i]);
        }
        splice.apply(this._items, [index, 0].concat(values));
        this._length += valueCount;
        this.emit('change');
        return this;
    };
    ObservableList.prototype.remove = function (value, fromIndex) {
        var index = this._items.indexOf(value, this._validateIndex(fromIndex, true));
        if (index == -1) {
            return false;
        }
        this._throwIfFrozen();
        this._unregisterValue(value);
        this._items.splice(index, 1);
        this._length--;
        this.emit('change');
        return true;
    };
    ObservableList.prototype.removeAll = function (value, fromIndex) {
        var index = this._validateIndex(fromIndex, true);
        var items = this._items;
        var changed = false;
        while ((index = items.indexOf(value, index)) != -1) {
            if (!changed) {
                this._throwIfFrozen();
            }
            this._unregisterValue(value);
            items.splice(index, 1);
            changed = true;
        }
        if (changed) {
            this._length = items.length;
            this.emit('change');
        }
        return changed;
    };
    ObservableList.prototype.removeEach = function (values, fromIndex) {
        fromIndex = this._validateIndex(fromIndex, true);
        if (values instanceof ObservableList) {
            values = values._items.slice();
        }
        var items = this._items;
        var changed = false;
        for (var i = 0, l = values.length; i < l; i++) {
            var value = values[i];
            var index = items.indexOf(value, fromIndex);
            if (index != -1) {
                if (!changed) {
                    this._throwIfFrozen();
                }
                this._unregisterValue(value);
                items.splice(index, 1);
                changed = true;
            }
        }
        if (changed) {
            this._length = items.length;
            this.emit('change');
        }
        return changed;
    };
    ObservableList.prototype.removeAllEach = function (values, fromIndex) {
        fromIndex = this._validateIndex(fromIndex, true);
        if (values instanceof ObservableList) {
            values = values._items.slice();
        }
        var items = this._items;
        var changed = false;
        for (var i = 0, l = values.length; i < l; i++) {
            var value = values[i];
            for (var index = fromIndex; (index = items.indexOf(value, index)) != -1;) {
                if (!changed) {
                    this._throwIfFrozen();
                }
                this._unregisterValue(value);
                items.splice(index, 1);
                changed = true;
            }
        }
        if (changed) {
            this._length = items.length;
            this.emit('change');
        }
        return changed;
    };
    ObservableList.prototype.removeAt = function (index) {
        index = this._validateIndex(index);
        this._throwIfFrozen();
        var value = this._items.splice(index, 1)[0];
        this._unregisterValue(value);
        this._length--;
        this.emit('change');
        return value;
    };
    ObservableList.prototype.removeRange = function (index, count) {
        index = this._validateIndex(index, true);
        var items = this._items;
        if (count === undefined) {
            count = items.length - index;
        }
        else if (index + count > items.length) {
            throw new RangeError('Sum of "index" and "count" out of valid range');
        }
        if (!count) {
            return [];
        }
        this._throwIfFrozen();
        for (var i = index + count; i > index;) {
            this._unregisterValue(items[--i]);
        }
        var values = items.splice(index, count);
        this._length -= count;
        this.emit('change');
        return values;
    };
    ObservableList.prototype.clear = function () {
        if (!this._length) {
            return this;
        }
        this._throwIfFrozen();
        if (this._adoptsValueChanges) {
            this._valueCounts.forEach(function (valueCount, value) {
                if (value instanceof EventEmitter_1.EventEmitter) {
                    value.off('change', this._onItemChange, this);
                }
            }, this);
        }
        this._valueCounts.clear();
        this._items.length = 0;
        this._length = 0;
        this.emit('change', {
            subtype: 'clear'
        });
        return this;
    };
    ObservableList.prototype.join = function (separator) {
        return this._items.join(separator);
    };
    ObservableList.prototype.forEach = function (callback, context) { };
    ObservableList.prototype.map = function (callback, context) {
        return [];
    };
    ObservableList.prototype.filter = function () {
        return [];
    };
    ObservableList.prototype.find = function (callback, context) {
        var items = this._items;
        for (var i = 0, l = items.length; i < l; i++) {
            var item = items[i];
            if (callback.call(context, item, i, this)) {
                return item;
            }
        }
        return;
    };
    ObservableList.prototype.findIndex = function (callback, context) {
        var items = this._items;
        for (var i = 0, l = items.length; i < l; i++) {
            if (callback.call(context, items[i], i, this)) {
                return i;
            }
        }
        return -1;
    };
    ObservableList.prototype.every = function (callback, context) {
        return false;
    };
    ObservableList.prototype.some = function (callback, context) {
        return false;
    };
    ObservableList.prototype.reduce = function (callback, initialValue) {
        return 0;
    };
    ObservableList.prototype.reduceRight = function (callback, initialValue) {
        return 0;
    };
    ObservableList.prototype.keys = function () {
        return 0;
    };
    ObservableList.prototype.values = function () {
        return 0;
    };
    ObservableList.prototype.entries = function () {
        return 0;
    };
    ObservableList.prototype.clone = function () {
        return new this.constructor(this, {
            adoptsValueChanges: this._adoptsValueChanges,
            comparator: this._comparator || undefined,
            sorted: this._sorted
        });
    };
    ObservableList.prototype.toArray = function () {
        return this._items.slice();
    };
    ObservableList.prototype.toString = function () {
        return this._items.join();
    };
    ObservableList.prototype._insertSortedValue = function (value) {
        var items = this._items;
        var comparator = this._comparator;
        var low = 0;
        var high = items.length;
        while (low != high) {
            var mid = (low + high) >> 1;
            if (comparator(value, items[mid]) < 0) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        items.splice(low, 0, this._registerValue(value));
    };
    Object.defineProperty(ObservableList.prototype, "isFrozen", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ObservableList.prototype.freeze = function () {
        return this;
    };
    ObservableList.prototype.unfreeze = function () {
        return this;
    };
    ObservableList.prototype._throwIfFrozen = function (msg) { };
    Object.defineProperty(ObservableList.prototype, "adoptsValueChanges", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ObservableList.prototype._onItemChange = function (evt) { };
    ObservableList.prototype._registerValue = function (value) { };
    ObservableList.prototype._unregisterValue = function (value) { };
    return ObservableList;
}(EventEmitter_1.EventEmitter));
exports.ObservableList = ObservableList;
mixin_1.mixin(ObservableList.prototype, FreezableCollection_1.FreezableCollection.prototype, ['constructor']);
mixin_1.mixin(ObservableList.prototype, ObservableCollection_1.ObservableCollection.prototype, ['constructor']);
['forEach', 'map', 'filter', 'every', 'some'].forEach(function (name) {
    ObservableList.prototype[name] = function (callback, context) {
        return this._items[name](function (item, index) {
            return callback.call(context, item, index, this);
        }, this);
    };
});
['reduce', 'reduceRight'].forEach(function (name) {
    ObservableList.prototype[name] = function (callback, initialValue) {
        var list = this;
        function wrapper(accumulator, item, index) {
            return callback(accumulator, item, index, list);
        }
        return arguments.length >= 2 ? this._items[name](wrapper, initialValue) : this._items[name](wrapper);
    };
});
[
    ['keys', function (index) { return index; }],
    ['values', function (index, item) { return item; }],
    ['entries', function (index, item) { return [index, item]; }]
].forEach(function (settings) {
    var getStepValue = settings[1];
    ObservableList.prototype[settings[0]] = function () {
        var items = this._items;
        var index = 0;
        var done = false;
        return {
            next: function () {
                if (!done) {
                    if (index < items.length) {
                        return {
                            value: getStepValue(index, items[index++]),
                            done: false
                        };
                    }
                    done = true;
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    };
});
ObservableList.prototype[symbol_polyfill_1.Symbol.iterator] = ObservableList.prototype.values;


/***/ }),
/* 22 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(11);
var map_set_polyfill_1 = __webpack_require__(4);
var mixin_1 = __webpack_require__(7);
var symbol_polyfill_1 = __webpack_require__(9);
var EventEmitter_1 = __webpack_require__(6);
var FreezableCollection_1 = __webpack_require__(12);
var ObservableCollection_1 = __webpack_require__(13);
var ObservableMap = /** @class */ (function (_super) {
    __extends(ObservableMap, _super);
    function ObservableMap(entries, opts) {
        var _this = _super.call(this) || this;
        _this._entries = new map_set_polyfill_1.Map();
        FreezableCollection_1.FreezableCollection.call(_this);
        ObservableCollection_1.ObservableCollection.call(_this);
        if (typeof opts == 'boolean') {
            opts = { adoptsValueChanges: opts };
        }
        _this._adoptsValueChanges = !!(opts && opts.adoptsValueChanges);
        if (entries) {
            var mapEntries_1 = _this._entries;
            if (entries instanceof map_set_polyfill_1.Map || entries instanceof ObservableMap) {
                (entries instanceof map_set_polyfill_1.Map ? entries : entries._entries).forEach(function (value, key) {
                    mapEntries_1.set(key, this._registerValue(value));
                }, _this);
            }
            else if (Array.isArray(entries)) {
                for (var i = 0, l = entries.length; i < l; i++) {
                    mapEntries_1.set(entries[i][0], _this._registerValue(entries[i][1]));
                }
            }
            else {
                for (var key in entries) {
                    mapEntries_1.set(key, _this._registerValue(entries[key]));
                }
            }
            _this._size = mapEntries_1.size;
        }
        else {
            _this._size = 0;
        }
        return _this;
    }
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableMap.prototype.has = function (key) {
        return this._entries.has(key);
    };
    ObservableMap.prototype.contains = function (value) {
        return this._valueCounts.has(value);
    };
    ObservableMap.prototype.get = function (key) {
        return this._entries.get(key);
    };
    ObservableMap.prototype.set = function (key, value) {
        var entries = this._entries;
        var hasKey = entries.has(key);
        var oldValue;
        if (hasKey) {
            oldValue = entries.get(key);
            if (is_1.is(value, oldValue)) {
                return this;
            }
            this._throwIfFrozen();
            this._unregisterValue(oldValue);
        }
        else {
            this._throwIfFrozen();
        }
        entries.set(key, this._registerValue(value));
        if (!hasKey) {
            this._size++;
        }
        this.emit('change', {
            subtype: hasKey ? 'update' : 'add',
            key: key,
            oldValue: oldValue,
            value: value
        });
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var entries = this._entries;
        if (!entries.has(key)) {
            return false;
        }
        this._throwIfFrozen();
        var value = entries.get(key);
        this._unregisterValue(value);
        entries.delete(key);
        this._size--;
        this.emit('change', {
            subtype: 'delete',
            key: key,
            value: value
        });
        return true;
    };
    ObservableMap.prototype.clear = function () {
        if (!this._size) {
            return this;
        }
        this._throwIfFrozen();
        if (this._adoptsValueChanges) {
            this._valueCounts.forEach(function (valueCount, value) {
                if (value instanceof EventEmitter_1.EventEmitter) {
                    value.off('change', this._onItemChange, this);
                }
            }, this);
        }
        this._entries.clear();
        this._valueCounts.clear();
        this._size = 0;
        this.emit('change', {
            subtype: 'clear'
        });
        return this;
    };
    ObservableMap.prototype.forEach = function (callback, context) {
        this._entries.forEach(function (value, key) {
            callback.call(context, value, key, this);
        }, this);
    };
    ObservableMap.prototype.keys = function () {
        return this._entries.keys();
    };
    ObservableMap.prototype.values = function () {
        return this._entries.values();
    };
    ObservableMap.prototype.entries = function () {
        return this._entries.entries();
    };
    ObservableMap.prototype.clone = function () {
        return new this.constructor(this, this._adoptsValueChanges);
    };
    Object.defineProperty(ObservableMap.prototype, "isFrozen", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ObservableMap.prototype.freeze = function () {
        return this;
    };
    ObservableMap.prototype.unfreeze = function () {
        return this;
    };
    ObservableMap.prototype._throwIfFrozen = function (msg) { };
    Object.defineProperty(ObservableMap.prototype, "adoptsValueChanges", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ObservableMap.prototype._onItemChange = function (evt) { };
    ObservableMap.prototype._registerValue = function (value) { };
    ObservableMap.prototype._unregisterValue = function (value) { };
    return ObservableMap;
}(EventEmitter_1.EventEmitter));
exports.ObservableMap = ObservableMap;
mixin_1.mixin(ObservableMap.prototype, FreezableCollection_1.FreezableCollection.prototype, ['constructor']);
mixin_1.mixin(ObservableMap.prototype, ObservableCollection_1.ObservableCollection.prototype, ['constructor']);
ObservableMap.prototype[symbol_polyfill_1.Symbol.iterator] = ObservableMap.prototype.entries;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var symbol_polyfill_1 = __webpack_require__(9);
exports.KEY_CELL_MAP = symbol_polyfill_1.Symbol('cellx.cellMap');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Parser_1 = __webpack_require__(38);
exports.NodeType = Parser_1.NodeType;
exports.Parser = Parser_1.Parser;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /[\\'"\r\n]/g;
var charToEscapedMap = Object.create(null);
charToEscapedMap['\\'] = '\\\\';
charToEscapedMap['\''] = '\\\'';
charToEscapedMap['"'] = '\\"';
charToEscapedMap['\r'] = '\\r';
charToEscapedMap['\n'] = '\\n';
function escapeString(str) {
    return reEscapableChars.test(str) ? str.replace(reEscapableChars, function (chr) { return charToEscapedMap[chr]; }) : str;
}
exports.escapeString = escapeString;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reHeadTail = /-?([A-Z])([^A-Z])/g;
var reLongHead = /-?([A-Z]+)/g;
var reMinus = /^-/;
var cache = Object.create(null);
function hyphenize(str, useCache) {
    return useCache && cache[str] || ((useCache ? cache : {})[str] = str
        .replace(reHeadTail, function (match, head, tail) { return '-' + head.toLowerCase() + tail; })
        .replace(reLongHead, function (match, head) { return '-' + head.toLowerCase(); })
        .replace(reMinus, ''));
}
exports.hyphenize = hyphenize;


/***/ }),
/* 27 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(98);
var template_nelm_1 = __webpack_require__(99);
var OpalTab = /** @class */ (function (_super) {
    __extends(OpalTab, _super);
    function OpalTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalTab.prototype, "_tabIndex", {
        get: function () {
            return this.input.disabled ? -1 : this.input.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.elementAttached = function () {
        this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalTab.prototype.ready = function () {
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalTab.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalTab.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
            }
        });
    };
    OpalTab.prototype._onControlBlur = function () {
        this.input.focused = false;
    };
    OpalTab.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalTab.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        return this;
    };
    Object.defineProperty(OpalTab.prototype, "selected", {
        get: function () {
            return this.input.selected;
        },
        set: function (selected) {
            this.input.selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.select = function () {
        if (!this.input.selected) {
            this.input.selected = true;
            return true;
        }
        return false;
    };
    OpalTab.prototype.deselect = function () {
        if (this.input.selected) {
            this.input.selected = false;
            return true;
        }
        return false;
    };
    OpalTab.prototype.toggle = function (value) {
        return (this.input.selected = value === undefined ? !this.input.selected : value);
    };
    OpalTab.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalTab.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalTab.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalTab.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalTab.prototype, "_tabIndex", null);
    OpalTab = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tab',
            input: {
                selected: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default
        })
    ], OpalTab);
    return OpalTab;
}(rionite_1.Component));
exports.OpalTab = OpalTab;


/***/ }),
/* 28 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var ObservableTreeList_1 = __webpack_require__(16);
var utils_1 = __webpack_require__(29);
var _getListItemContext_1 = __webpack_require__(30);
__webpack_require__(151);
var opal_tree_list_item_1 = __webpack_require__(31);
exports.OpalTreeListItem = opal_tree_list_item_1.OpalTreeListItem;
__webpack_require__(31);
var template_nelm_1 = __webpack_require__(154);
var defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
var defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });
function toComparable(str) {
    return str && str.trim().replace(/\s+/g, ' ').toLowerCase();
}
var OpalTreeList = /** @class */ (function (_super) {
    __extends(OpalTreeList, _super);
    function OpalTreeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTreeList_1 = OpalTreeList;
    Object.defineProperty(OpalTreeList.prototype, "filteredDataTreeList", {
        get: function () {
            var query = toComparable(this.input.query);
            if (!query) {
                return this.dataTreeList;
            }
            var dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
            var dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
            return new ObservableTreeList_1.ObservableTreeList(ObservableTreeList_1.fixParent(this.dataTreeList.reduce(function _(filteredDataTreeList, item) {
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
                var _a, _b;
            }, [])));
        },
        enumerable: true,
        configurable: true
    });
    OpalTreeList.prototype.initialize = function () {
        var input = this.input;
        if (input.dataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function("return this." + input.dataTreeListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!input.$specified.has('dataTreeList')) {
                throw new TypeError('Input property "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', function () { return input.dataTreeList; });
        }
        var dataTreeListItemSchema = input.dataTreeListItemSchema;
        var defaultDataTreeListItemSchema = this.constructor.defaultDataTreeListItemSchema;
        this._dataTreeListItemValueFieldName = dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
        this._dataTreeListItemTextFieldName = dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;
        this.viewModel = input.viewModel || new cellx_1.ObservableList();
        var vmItemSchema = input.viewModelItemSchema;
        var defaultVMItemSchema = this.constructor.defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
    };
    OpalTreeList.prototype.elementAttached = function () {
        this.listenTo(this, '<*>change', this._onChange);
    };
    OpalTreeList.prototype._onChange = function (evt) {
        var component = evt.target;
        if (component.element.classList.contains('opal-tree-list__selection-control')) {
            var dataTreeListItemValueFieldName_1 = this._dataTreeListItemValueFieldName;
            var dataTreeListItemTextFieldName_1 = this._dataTreeListItemTextFieldName;
            var vm_1 = this.viewModel;
            var viewModelItemValueFieldName_1 = this._viewModelItemValueFieldName;
            var viewModelItemTextFieldName_1 = this._viewModelItemTextFieldName;
            var item_1 = utils_1.closestComponent(component.parentComponent, opal_tree_list_item_1.OpalTreeListItem)
                .input.$context.$item;
            if (component.selected) {
                for (var parent_1; (parent_1 = item_1.parent) && parent_1.children.every(function (child) {
                    return child == item_1 || !!vm_1.find(function (vmItem) {
                        return vmItem[viewModelItemValueFieldName_1] == child[dataTreeListItemValueFieldName_1];
                    });
                });) {
                    item_1 = parent_1;
                }
                item_1.children.forEach(function _(child) {
                    var childIndex = vm_1.findIndex(function (vmItem) {
                        return vmItem[viewModelItemValueFieldName_1] == child[dataTreeListItemValueFieldName_1];
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
                            return vmItem[viewModelItemValueFieldName_1] == parent_2[dataTreeListItemValueFieldName_1];
                        });
                        vm_1.addRange(parent_2.children
                            .filter(function (child) { return child != item_1; })
                            .map(function (child) {
                            return (_a = {},
                                _a[viewModelItemValueFieldName_1] = child[dataTreeListItemValueFieldName_1],
                                _a[viewModelItemTextFieldName_1] = child[dataTreeListItemTextFieldName_1],
                                _a);
                            var _a;
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
        var _a;
    };
    OpalTreeList.OpalTreeListItem = opal_tree_list_item_1.OpalTreeListItem;
    OpalTreeList.defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
    OpalTreeList.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        cellx_decorators_1.computed
    ], OpalTreeList.prototype, "filteredDataTreeList", null);
    __decorate([
        cellx_decorators_1.observable
    ], OpalTreeList.prototype, "viewModel", void 0);
    OpalTreeList = OpalTreeList_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tree-list',
            input: {
                dataTreeList: { type: Object },
                dataTreeListKeypath: { type: String, readonly: true },
                dataTreeListItemSchema: { type: eval, default: defaultDataTreeListItemSchema, readonly: true },
                viewModel: { type: Object },
                viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
                query: String
            },
            template: template_nelm_1.default
        })
    ], OpalTreeList);
    return OpalTreeList;
    var OpalTreeList_1;
}(rionite_1.Component));
exports.OpalTreeList = OpalTreeList;
OpalTreeList.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var closestComponent_1 = __webpack_require__(150);
exports.closestComponent = closestComponent_1.default;
var isFocusable_1 = __webpack_require__(8);
exports.isFocusable = isFocusable_1.default;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mixin_1 = __webpack_require__(7);
var cellx_1 = __webpack_require__(2);
function isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    do {
        if (vm.find(function (vmItem) { return vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]; })) {
            return true;
        }
    } while ((item = item.parent));
    return false;
}
function isIndeterminateItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    return !!item.children.length &&
        !isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
        item.children.some(function (child) {
            return !!vm.find(function (vmItem) { return vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]; }) ||
                isIndeterminateItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName);
        });
}
function _getListItemContext(context, content) {
    var $item = content.input.$context.$item;
    return cellx_1.define(mixin_1.mixin(Object.create(context), content.input.$context, ['$component']), {
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
/* 31 */
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
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var _getListItemContext_1 = __webpack_require__(30);
__webpack_require__(152);
var template_nelm_1 = __webpack_require__(153);
var OpalTreeListItem = /** @class */ (function (_super) {
    __extends(OpalTreeListItem, _super);
    function OpalTreeListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalTreeListItem.prototype, "dataTreeList", {
        get: function () {
            return this.input.dataTreeList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTreeListItem.prototype, "viewModel", {
        get: function () {
            return this.input.viewModel;
        },
        enumerable: true,
        configurable: true
    });
    OpalTreeListItem.prototype.initialize = function () {
        var input = this.input;
        this.dataTreeListItem = input.filteredDataTreeList.get(input.indexpath);
        this._dataTreeListItemValueFieldName = input.dataTreeListItemValueFieldName;
        this._dataTreeListItemTextFieldName = input.dataTreeListItemTextFieldName;
        this._viewModelItemValueFieldName = input.viewModelItemValueFieldName;
        this._viewModelItemTextFieldName = input.viewModelItemTextFieldName;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalTreeListItem.prototype, "dataTreeList", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalTreeListItem.prototype, "viewModel", null);
    OpalTreeListItem = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tree-list-item',
            input: {
                dataTreeList: { type: Object, required: true },
                filteredDataTreeList: { type: Object, required: true },
                dataTreeListItemValueFieldName: { type: String, required: true, readonly: true },
                dataTreeListItemTextFieldName: { type: String, required: true, readonly: true },
                viewModel: { type: Object, required: true },
                viewModelItemValueFieldName: { type: String, required: true, readonly: true },
                viewModelItemTextFieldName: { type: String, required: true, readonly: true },
                indexpath: { type: eval, required: true, readonly: true },
                query: String,
                opened: false
            },
            template: template_nelm_1.default,
            events: {
                'btn-toggle-children': {
                    change: function (evt) {
                        this.input.opened = evt.target.checked;
                    }
                }
            }
        })
    ], OpalTreeListItem);
    return OpalTreeListItem;
}(rionite_1.Component));
exports.OpalTreeListItem = OpalTreeListItem;
OpalTreeListItem.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (undefined !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType;
(function (PathNodeType) {
    PathNodeType[PathNodeType["SIMPLE"] = 0] = "SIMPLE";
    PathNodeType[PathNodeType["OPTIONAL"] = 1] = "OPTIONAL";
    PathNodeType[PathNodeType["INSERT"] = 2] = "INSERT";
})(PathNodeType = exports.PathNodeType || (exports.PathNodeType = {}));


/***/ }),
/* 35 */
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
var cellx_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(54);
__webpack_require__(55);
var ObservableTreeList_1 = __webpack_require__(16);
var template_nelm_1 = __webpack_require__(183);
rionite_1.formatters.log = function (msg) {
    console.log(msg);
    return msg;
};
var OpalComponentsDocs = /** @class */ (function (_super) {
    __extends(OpalComponentsDocs, _super);
    function OpalComponentsDocs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataList1 = new cellx_1.ObservableList([
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' }
        ]);
        _this.dataTreeList1 = new ObservableTreeList_1.ObservableTreeList([
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3', children: [
                    { id: '3.1', name: '3.1', children: [
                            { id: '3.1.1', name: '3.1.1' },
                            { id: '3.1.2', name: '3.1.2', children: [
                                    { id: '3.1.2.1', name: '3.1.2.1' },
                                    { id: '3.1.2.2', name: '3.1.2.2' }
                                ] }
                        ] },
                    { id: '3.2', name: '3.2' },
                    { id: '3.3', name: '3.3' }
                ] },
            { id: '4', name: '4', children: [
                    { id: '4.1', name: '4.1' },
                    { id: '4.2', name: '4.2' }
                ] },
            { id: '5', name: '5' }
        ]);
        _this.dataProvider1 = (function () {
            var items = [];
            for (var i = 0, l = 1000; i < l; i++) {
                items[i] = { id: i.toString(), name: i.toString() };
            }
            return {
                getItems: function (count, after, query) {
                    if (count === undefined) {
                        count = 50;
                    }
                    var filteredItems = query ? items.filter(function (item) {
                        return item.name.indexOf(query) != -1;
                    }) : items;
                    var from = after ? filteredItems.findIndex(function (item) {
                        return item.id == after;
                    }) + 1 : 0;
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({
                                items: filteredItems.slice(from, from + count),
                                total: filteredItems.length
                            });
                        }, 500);
                    });
                }
            };
        })();
        _this.dataProvider2 = (function () {
            var items = [
                { id: '0', name: 'Shanghai' }, { id: '1', name: 'Karachi' }, { id: '2', name: 'Beijing' },
                { id: '3', name: 'Delhi' }, { id: '4', name: 'Lagos' }, { id: '5', name: 'Tianjin' },
                { id: '6', name: 'Istanbul' }, { id: '7', name: 'Tokyo' }, { id: '8', name: 'Guangzhou' },
                { id: '9', name: 'Mumbai' }, { id: '10', name: 'Moscow' }, { id: '11', name: 'São Paulo' },
                { id: '12', name: 'Shenzhen' }, { id: '13', name: 'Jakarta' }, { id: '14', name: 'Lahore' },
                { id: '15', name: 'Seoul' }, { id: '16', name: 'Kinshasa' }, { id: '17', name: 'Cairo' },
                { id: '18', name: 'Mexico City' }, { id: '19', name: 'Lima' }
            ];
            return {
                getItems: function (query) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve({
                                items: query ? items.filter(function (item) {
                                    return item.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
                                }) : items
                            });
                        }, 500);
                    });
                }
            };
        })();
        _this.viewModel1 = new cellx_1.ObservableList([
            { id: '1', name: '1', disabled: true },
            { id: '2', name: '2', disabled: true }
        ]);
        return _this;
    }
    OpalComponentsDocs.prototype.addNewItem1 = function (name) {
        return Promise.resolve({ id: '__' + Math.random(), name: name });
    };
    OpalComponentsDocs = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-components-docs',
            template: template_nelm_1.default
        })
    ], OpalComponentsDocs);
    return OpalComponentsDocs;
}(rionite_1.Component));
exports.OpalComponentsDocs = OpalComponentsDocs;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global = Function('return this;')();
function noop() { }
exports.logger = {
    _handler: function (type) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        var console = global.console;
        (console && console[type] || noop).call(console || null, (type == 'error' ? msg.map(function (m) { return m === Object(m) && m.stack || m; }) : msg).join(' '));
    },
    setHandler: function (handler) {
        exports.logger._handler = handler;
    },
    log: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        exports.logger._handler.apply(exports.logger, ['log'].concat(msg));
    },
    warn: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        exports.logger._handler.apply(exports.logger, ['warn'].concat(msg));
    },
    error: function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        exports.logger._handler.apply(exports.logger, ['error'].concat(msg));
    }
};
exports.log = exports.logger.log;
exports.warn = exports.logger.warn;
exports.error = exports.logger.error;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nelm_parser_1 = __webpack_require__(24);
exports.NodeType = nelm_parser_1.NodeType;
exports.Parser = nelm_parser_1.default;
var Template_1 = __webpack_require__(39);
exports.Template = Template_1.default;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["BLOCK"] = 1] = "BLOCK";
    NodeType[NodeType["ELEMENT"] = 2] = "ELEMENT";
    NodeType[NodeType["TEXT"] = 3] = "TEXT";
    NodeType[NodeType["COMMENT"] = 4] = "COMMENT";
    NodeType[NodeType["SUPER_CALL"] = 5] = "SUPER_CALL";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var escapee = {
    __proto__: null,
    '/': '/',
    '\\': '\\',
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t'
};
var reBlockNameOrNothing = /[a-zA-Z][\-\w]*|/g;
var reTagNameOrNothing = /[a-zA-Z][\-\w]*(?::[a-zA-Z][\-\w]*)?|/g;
var reElementNameOrNothing = /[a-zA-Z][\-\w]*|/g;
var reAttributeNameOrNothing = /[_a-zA-Z][\-\w]*(?::[_a-zA-Z][\-\w]*)?|/g;
var reSuperCallOrNothing = /super(?:\.([a-zA-Z][\-\w]*))?!|/g;
function normalizeMultilineText(text) {
    return text.trim().replace(/\s*(?:\r\n?|\n)/g, '\n').replace(/\n\s+/g, '\n');
}
var Parser = /** @class */ (function () {
    function Parser(nelm) {
        this.nelm = nelm;
    }
    Parser.prototype.parse = function () {
        this.at = 0;
        this.chr = this.nelm.charAt(0);
        var content;
        var nextChr;
        while (this._skipWhitespaces() == '/' && ((nextChr = this.nelm.charAt(this.at + 1)) == '/' || nextChr == '*')) {
            (content || (content = [])).push(this._readComment());
        }
        var blockName = this.chr == '#' ? this._readBlockName() : null;
        return {
            nodeType: NodeType.BLOCK,
            name: blockName,
            content: content ? content.concat(this._readContent(false)) : this._readContent(false)
        };
    };
    Parser.prototype._readBlockName = function () {
        this._next('#');
        var blockName = this._readName(reBlockNameOrNothing);
        if (!blockName) {
            this._throwError('Invalid block declaration');
            throw 1;
        }
        return blockName;
    };
    Parser.prototype._readContent = function (brackets) {
        if (brackets) {
            this._next('{');
        }
        var content = [];
        for (;;) {
            switch (this._skipWhitespaces()) {
                case "'":
                case '"':
                case '`': {
                    content.push(this._readTextNode());
                    break;
                }
                case '': {
                    if (brackets) {
                        this._throwError('Missing "}" in compound statement');
                    }
                    return content;
                }
                default: {
                    if (this.chr == '/') {
                        var nextChr = this.nelm.charAt(this.at + 1);
                        if (nextChr == '/' || nextChr == '*') {
                            content.push(this._readComment());
                            break;
                        }
                    }
                    if (brackets) {
                        if (this.chr == '}') {
                            this._next();
                            return content;
                        }
                        reSuperCallOrNothing.lastIndex = this.at;
                        var superCallMatch = reSuperCallOrNothing.exec(this.nelm);
                        if (superCallMatch[0]) {
                            this.chr = this.nelm.charAt((this.at = reSuperCallOrNothing.lastIndex));
                            content.push({
                                nodeType: NodeType.SUPER_CALL,
                                elementName: superCallMatch[1] || null
                            });
                            break;
                        }
                    }
                    content.push(this._readElement());
                    break;
                }
            }
        }
    };
    Parser.prototype._readElement = function () {
        var at = this.at;
        var isHelper = this.chr == '@';
        if (isHelper) {
            this._next();
        }
        var tagName = this._readName(reTagNameOrNothing);
        var elNames;
        if ((tagName ? this._skipWhitespaces() : this.chr) == '/') {
            var at_1 = this.at;
            this._next();
            this._skipWhitespaces();
            elNames = this._readElementNames();
            if (!elNames) {
                this.at = at_1;
            }
        }
        else {
            elNames = null;
        }
        if (!tagName && !elNames) {
            this._throwError('Expected element', at);
        }
        var attrs = this.chr == '(' ? this._readAttributes() : null;
        if (attrs) {
            this._skipWhitespaces();
        }
        var content = this.chr == '{' ? this._readContent(true) : null;
        return {
            nodeType: NodeType.ELEMENT,
            tagName: tagName,
            isHelper: isHelper,
            names: elNames,
            attributes: attrs,
            content: content
        };
    };
    Parser.prototype._readAttributes = function () {
        this._next('(');
        if (this._skipWhitespacesAndComments() == ')') {
            this._next();
            return {
                superCall: null,
                list: []
            };
        }
        var superCall;
        var list = [];
        for (;;) {
            if (!superCall && this.chr == 's' && (superCall = this._readSuperCall())) {
                this._skipWhitespacesAndComments();
            }
            else {
                var name_1 = this._readName(reAttributeNameOrNothing);
                if (!name_1) {
                    this._throwError('Invalid attribute name');
                    throw 1;
                }
                if (this._skipWhitespacesAndComments() == '=') {
                    this._next();
                    var chr = this._skipWhitespaces();
                    if (chr == "'" || chr == '"' || chr == '`') {
                        var str = this._readString();
                        list.push({
                            name: name_1,
                            value: str.multiline ? normalizeMultilineText(str.value) : str.value
                        });
                    }
                    else {
                        var value = '';
                        for (;;) {
                            if (!chr) {
                                this._throwError('Invalid attribute');
                            }
                            if (chr == '\r' || chr == '\n' || chr == ',' || chr == ')') {
                                list.push({ name: name_1, value: value.trim() });
                                break;
                            }
                            value += chr;
                            chr = this._next();
                        }
                    }
                    this._skipWhitespacesAndComments();
                }
                else {
                    list.push({ name: name_1, value: '' });
                }
            }
            if (this.chr == ')') {
                this._next();
                break;
            }
            else if (this.chr == ',') {
                this._next();
                this._skipWhitespacesAndComments();
            }
            else {
                this._throwError('Invalid attributes');
            }
        }
        return {
            superCall: superCall || null,
            list: list
        };
    };
    Parser.prototype._skipWhitespacesAndComments = function () {
        var chr = this.chr;
        var nextChr;
        for (;;) {
            if (chr && chr <= ' ') {
                chr = this._next();
            }
            else if (chr == '/' && ((nextChr = this.nelm.charAt(this.at + 1)) == '/' || nextChr == '*')) {
                this._readComment();
                chr = this.chr;
            }
            else {
                break;
            }
        }
        return chr;
    };
    Parser.prototype._readSuperCall = function () {
        reSuperCallOrNothing.lastIndex = this.at;
        var superCallMatch = reSuperCallOrNothing.exec(this.nelm);
        if (superCallMatch[0]) {
            this.chr = this.nelm.charAt((this.at = reSuperCallOrNothing.lastIndex));
            return {
                nodeType: NodeType.SUPER_CALL,
                elementName: superCallMatch[1] || null
            };
        }
        return null;
    };
    Parser.prototype._readTextNode = function () {
        var str = this._readString();
        return {
            nodeType: NodeType.TEXT,
            value: str.multiline ? normalizeMultilineText(str.value) : str.value
        };
    };
    Parser.prototype._readString = function () {
        var quoteChar = this.chr;
        if (quoteChar != "'" && quoteChar != '"' && quoteChar != '`') {
            this._throwError("Expected \"'\" instead of \"" + this.chr + "\"");
        }
        var str = '';
        for (var chr = this._next(); chr;) {
            if (chr == quoteChar) {
                this._next();
                return {
                    value: str,
                    multiline: quoteChar == '`'
                };
            }
            if (chr == '\\') {
                chr = this._next();
                if (chr == 'x' || chr == 'u') {
                    var at = this.at;
                    var hexadecimal = chr == 'x';
                    var code = parseInt(this.nelm.slice(at + 1, at + (hexadecimal ? 3 : 5)), 16);
                    if (!isFinite(code)) {
                        this._throwError("Malformed " + (hexadecimal ? 'hexadecimal' : 'unicode') + " escape sequence", at - 1);
                    }
                    str += String.fromCharCode(code);
                    chr = this.chr = this.nelm.charAt((this.at = at + (hexadecimal ? 3 : 5)));
                }
                else if (chr in escapee) {
                    str += escapee[chr];
                    chr = this._next();
                }
                else {
                    break;
                }
            }
            else {
                if (quoteChar != '`' && (chr == '\r' || chr == '\n')) {
                    break;
                }
                str += chr;
                chr = this._next();
            }
        }
        this._throwError('Invalid string');
        throw 1;
    };
    Parser.prototype._readComment = function () {
        var value = '';
        var multiline;
        switch (this._next('/')) {
            case '/': {
                for (var chr = void 0; (chr = this._next()) && chr != '\r' && chr != '\n';) {
                    value += chr;
                }
                multiline = false;
                break;
            }
            case '*': {
                var stop_1 = false;
                do {
                    switch (this._next()) {
                        case '*': {
                            if (this._next() == '/') {
                                this._next();
                                stop_1 = true;
                            }
                            else {
                                value += '*' + this.chr;
                            }
                            break;
                        }
                        case '': {
                            this._throwError('Missing "*/" in compound statement');
                        }
                        default: {
                            value += this.chr;
                        }
                    }
                } while (!stop_1);
                multiline = true;
                break;
            }
            default: {
                this._throwError("Expected \"/\" instead of \"" + this.chr + "\"");
                throw 1;
            }
        }
        return {
            nodeType: NodeType.COMMENT,
            value: value,
            multiline: multiline
        };
    };
    Parser.prototype._readElementNames = function () {
        var names = this.chr == ',' ? (this._next(), this._skipWhitespaces(), [null]) : null;
        for (var name_2; (name_2 = this._readName(reElementNameOrNothing));) {
            (names || (names = [])).push(name_2);
            if (this._skipWhitespaces() != ',') {
                break;
            }
            this._next();
            this._skipWhitespaces();
        }
        return names;
    };
    Parser.prototype._readName = function (reNameOrNothing) {
        reNameOrNothing.lastIndex = this.at;
        var name = reNameOrNothing.exec(this.nelm)[0];
        if (name) {
            this.chr = this.nelm.charAt((this.at = reNameOrNothing.lastIndex));
            return name;
        }
        return null;
    };
    Parser.prototype._skipWhitespaces = function () {
        var chr = this.chr;
        while (chr && chr <= ' ') {
            chr = this._next();
        }
        return chr;
    };
    Parser.prototype._next = function (current) {
        if (current && current != this.chr) {
            this._throwError("Expected \"" + current + "\" instead of \"" + this.chr + "\"");
        }
        return (this.chr = this.nelm.charAt(++this.at));
    };
    Parser.prototype._throwError = function (msg, at) {
        if (at === void 0) { at = this.at; }
        var n = at < 40 ? 40 - at : 0;
        throw new SyntaxError(msg + '\n' + this.nelm.slice(at < 40 ? 0 : at - 40, at + 20).replace(/\r\n|\r|\n/g, function (match) {
            if (match.length == 2) {
                n++;
            }
            return '↵';
        }) + '\n' + '----------------------------------------'.slice(n) + '↑');
    };
    return Parser;
}());
exports.Parser = Parser;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var escape_html_1 = __webpack_require__(14);
var self_closing_tags_1 = __webpack_require__(42);
var escape_string_1 = __webpack_require__(25);
var nelm_parser_1 = __webpack_require__(24);
var join = Array.prototype.join;
var elNameDelimiter = '__';
var Template = /** @class */ (function () {
    function Template(nelm, opts) {
        this.parent = opts && opts.parent || null;
        this.nelm = typeof nelm == 'string' ? new nelm_parser_1.Parser(nelm).parse() : nelm;
        var blockName = opts && opts.blockName || this.nelm.name;
        this._elementClassesTemplate = this.parent ?
            [blockName ? blockName + elNameDelimiter : ''].concat(this.parent._elementClassesTemplate) :
            [blockName ? blockName + elNameDelimiter : '', ''];
    }
    Template.prototype.extend = function (nelm, opts) {
        return new Template(nelm, { __proto__: opts || null, parent: this });
    };
    Template.prototype.setBlockName = function (blockName) {
        this._elementClassesTemplate[0] = blockName ? blockName + elNameDelimiter : '';
        return this;
    };
    Template.prototype.render = function () {
        var _this = this;
        return (this._renderer || this._compileRenderers()).call(this._elementRendererMap).replace(/<<([^>]+)>>/g, function (match, names) { return _this._renderElementClasses(names.split(',')); });
    };
    Template.prototype._compileRenderers = function () {
        var parent = this.parent;
        this._elements = [(this._currentElement = { name: null, superCall: false, source: null, innerSource: [] })];
        var elMap = this._elementMap = {};
        if (parent) {
            this._renderer = parent._renderer || parent._compileRenderers();
        }
        for (var _i = 0, _a = this.nelm.content; _i < _a.length; _i++) {
            var node = _a[_i];
            this._compileNode(node);
        }
        if (!parent) {
            this._renderer = Function("return " + this._currentElement.innerSource.join(' + ') + ";");
        }
        Object.keys(elMap).forEach(function (name) {
            var el = elMap[name];
            this[name] = Function("return " + el.source.join(' + ') + ";");
            if (el.superCall) {
                var inner_1 = Function('$super', "return " + (el.innerSource.join(' + ') || "''") + ";");
                var parentElementRendererMap_1 = parent && parent._elementRendererMap;
                this[name + '@content'] = function () { return inner_1.call(this, parentElementRendererMap_1); };
            }
            else {
                this[name + '@content'] = Function("return " + (el.innerSource.join(' + ') || "''") + ";");
            }
        }, (this._elementRendererMap = { __proto__: parent && parent._elementRendererMap }));
        return this._renderer;
    };
    Template.prototype._compileNode = function (node, parentElName) {
        switch (node.nodeType) {
            case nelm_parser_1.NodeType.ELEMENT: {
                var parent_1 = this.parent;
                var els = this._elements;
                var el = node;
                var tagName = el.tagName;
                var isHelper = el.isHelper;
                var elNames = el.names;
                var elName = elNames && elNames[0];
                var elAttrs = el.attributes;
                var content = el.content;
                if (elNames) {
                    if (elName) {
                        if (tagName) {
                            (this._tagNameMap || (this._tagNameMap = { __proto__: parent_1 && parent_1._tagNameMap || null }))[elName] = tagName;
                        }
                        else {
                            // Не надо добавлять в конец ` || 'div'`, тк. ниже tagName используется как имя хелпера.
                            tagName = parent_1 && parent_1._tagNameMap && parent_1._tagNameMap[elName];
                        }
                        var renderedAttrs = void 0;
                        if (elAttrs && (elAttrs.list.length || elAttrs.superCall)) {
                            var attrListMap = this._attributeListMap || (this._attributeListMap = { __proto__: parent_1 && parent_1._attributeListMap || null });
                            var attrCountMap = this._attributeCountMap || (this._attributeCountMap = {
                                __proto__: parent_1 && parent_1._attributeCountMap || null
                            });
                            var elAttrsSuperCall = elAttrs.superCall;
                            var attrList = void 0;
                            var attrCount = void 0;
                            if (elAttrsSuperCall) {
                                if (!parent_1) {
                                    throw new TypeError('Parent template is required when using super');
                                }
                                attrList = attrListMap[elName] = {
                                    __proto__: parent_1._attributeListMap[elAttrsSuperCall.elementName || elName] || null
                                };
                                attrCount = attrCountMap[elName] =
                                    parent_1._attributeCountMap[elAttrsSuperCall.elementName || elName] || 0;
                            }
                            else {
                                attrList = attrListMap[elName] = { __proto__: null };
                                attrCount = attrCountMap[elName] = 0;
                            }
                            for (var _i = 0, _a = elAttrs.list; _i < _a.length; _i++) {
                                var attr = _a[_i];
                                var name_1 = attr.name;
                                var value = attr.value;
                                var index = attrList[name_1];
                                if (index === undefined) {
                                    attrList[attrCount] = " " + name_1 + "=\"" + (value && escape_html_1.escapeHTML(escape_string_1.escapeString(value))) + "\"";
                                    attrList[name_1] = attrCount;
                                    attrCountMap[elName] = ++attrCount;
                                }
                                else {
                                    attrList[index] = " " + name_1 + "=\"" + (value && escape_html_1.escapeHTML(escape_string_1.escapeString(value))) + "\"";
                                }
                            }
                            if (!isHelper) {
                                attrList = {
                                    __proto__: attrList,
                                    length: attrCount
                                };
                                if (attrList['class'] !== undefined) {
                                    attrList[attrList['class']] = " class=\"<<" + elNames.join(',') + ">> " +
                                        attrList[attrList['class']].slice(' class="'.length);
                                    renderedAttrs = join.call(attrList, '');
                                }
                                else {
                                    renderedAttrs = " class=\"<<" + elNames.join(',') + ">>\"" +
                                        join.call(attrList, '');
                                }
                            }
                        }
                        else if (!isHelper) {
                            renderedAttrs = " class=\"<<" + elNames.join(',') + ">>\"";
                        }
                        var currentEl = {
                            name: elName,
                            superCall: false,
                            source: isHelper ? ["this['" + elName + "@content']()"] : [
                                "'<" + (tagName || 'div') + renderedAttrs + ">'",
                                content && content.length ?
                                    "this['" + elName + "@content']() + '</" + (tagName || 'div') + ">'" :
                                    (!content && tagName && self_closing_tags_1.map.has(tagName) ?
                                        "''" :
                                        "'</" + (tagName || 'div') + ">'")
                            ],
                            innerSource: []
                        };
                        els.push((this._currentElement = currentEl));
                        this._elementMap[elName] = currentEl;
                    }
                    else if (!isHelper) {
                        if (elAttrs && elAttrs.list.length) {
                            var hasClassAttr = false;
                            var attrs = '';
                            for (var _b = 0, _c = elAttrs.list; _b < _c.length; _b++) {
                                var attr = _c[_b];
                                var value = attr.value;
                                if (attr.name == 'class') {
                                    hasClassAttr = true;
                                    attrs += " class=\"<<" + elNames.join(',').slice(1) + ">>" + (value ? ' ' + value : '') + "\"";
                                }
                                else {
                                    attrs += " " + attr.name + "=\"" + (value && escape_html_1.escapeHTML(escape_string_1.escapeString(value))) + "\"";
                                }
                            }
                            this._currentElement.innerSource.push("'<" + (tagName || 'div') + (hasClassAttr ? attrs : " class=\"<<" + elNames.join(',').slice(1) + ">>\"" + attrs) + ">'");
                        }
                        else {
                            this._currentElement.innerSource.push("'<" + (tagName || 'div') + " class=\"<<" + elNames.join(',').slice(1) + ">>\">'");
                        }
                    }
                }
                else if (!isHelper) {
                    this._currentElement.innerSource.push("'<" + (tagName || 'div') + (elAttrs ?
                        elAttrs.list.map(function (attr) { return " " + attr.name + "=\"" + (attr.value && escape_html_1.escapeHTML(escape_string_1.escapeString(attr.value))) + "\""; }).join('') :
                        '') + ">'");
                }
                if (isHelper) {
                    if (!tagName) {
                        throw new TypeError('"tagName" is required');
                    }
                    var helper = Template.helpers[tagName];
                    if (!helper) {
                        throw new TypeError("Helper \"" + tagName + "\" is not defined");
                    }
                    var content_1 = helper(el);
                    if (content_1) {
                        for (var _d = 0, content_2 = content_1; _d < content_2.length; _d++) {
                            var contentNode = content_2[_d];
                            this._compileNode(contentNode, elName || parentElName);
                        }
                    }
                }
                else if (content) {
                    for (var _e = 0, content_3 = content; _e < content_3.length; _e++) {
                        var contentNode = content_3[_e];
                        this._compileNode(contentNode, elName || parentElName);
                    }
                }
                if (elName) {
                    els.pop();
                    this._currentElement = els[els.length - 1];
                    this._currentElement.innerSource.push("this['" + elName + "']()");
                }
                else if (!isHelper && (content || !tagName || !self_closing_tags_1.map.has(tagName))) {
                    this._currentElement.innerSource.push("'</" + (tagName || 'div') + ">'");
                }
                break;
            }
            case nelm_parser_1.NodeType.TEXT: {
                this._currentElement.innerSource.push("'" + escape_string_1.escapeString(node.value) + "'");
                break;
            }
            case nelm_parser_1.NodeType.SUPER_CALL: {
                this._currentElement.innerSource
                    .push("$super['" + (node.elementName || parentElName) + "@content'].call(this)");
                this._currentElement.superCall = true;
                break;
            }
        }
    };
    Template.prototype._renderElementClasses = function (elNames) {
        var elClasses = '';
        for (var i = 0, l = elNames.length; i < l; i++) {
            elClasses += this._elementClassesTemplate.join(elNames[i] + ' ');
        }
        return elClasses.slice(0, -1);
    };
    Template.helpers = {
        section: function (el) { return el.content; }
    };
    return Template;
}());
exports.default = Template;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /[&<>"]/g;
var charToEscapedMap = Object.create(null);
charToEscapedMap['&'] = '&amp;';
charToEscapedMap['<'] = '&lt;';
charToEscapedMap['>'] = '&gt;';
charToEscapedMap['"'] = '&quot;';
function escapeHTML(str) {
    return reEscapableChars.test(str) ? str.replace(reEscapableChars, function (chr) { return charToEscapedMap[chr]; }) : str;
}
exports.escapeHTML = escapeHTML;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableEntities = /&(?:amp|lt|gt|quot);/g;
var escapedToCharMap = Object.create(null);
escapedToCharMap['&amp;'] = '&';
escapedToCharMap['&lt;'] = '<';
escapedToCharMap['&gt;'] = '>';
escapedToCharMap['&quot;'] = '"';
function unescapeHTML(str) {
    return reEscapableEntities.test(str) ? str.replace(reEscapableEntities, function (entity) { return escapedToCharMap[entity]; }) : str;
}
exports.unescapeHTML = unescapeHTML;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(4);
exports.list = [
    'area',
    'base',
    'basefont',
    'br',
    'col',
    'command',
    'embed',
    'frame',
    'hr',
    'img',
    'input',
    'isindex',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
    // svg tags
    'circle',
    'ellipse',
    'line',
    'path',
    'polygone',
    'polyline',
    'rect',
    'stop',
    'use'
];
exports.map = exports.list.reduce(function (map, name) { return map.set(name, true); }, new map_set_polyfill_1.Map());


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var next_uid_1 = __webpack_require__(15);
var symbol_polyfill_1 = __webpack_require__(18);
var hasOwn = Object.prototype.hasOwnProperty;
var KEY_UID = symbol_polyfill_1.Symbol('uid');
if (typeof KEY_UID == 'symbol') {
    exports.getUID = function (obj) {
        return hasOwn.call(obj, KEY_UID) ? obj[KEY_UID] : (obj[KEY_UID] = next_uid_1.nextUID());
    };
}
else {
    exports.getUID = function (obj) {
        if (!hasOwn.call(obj, KEY_UID)) {
            Object.defineProperty(obj, KEY_UID, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: next_uid_1.nextUID()
            });
        }
        return obj[KEY_UID];
    };
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function moveContent(target, source) {
    for (var child = void 0; (child = source.firstChild);) {
        target.appendChild(child);
    }
    return target;
}
exports.moveContent = moveContent;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = Function('return this;')();
var Symbol = global.Symbol;

var idCounter = 0;

if (!Symbol) {
	Symbol = function Symbol(key) {
		return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + (++idCounter) + '__';
	};

	Symbol.iterator = Symbol('Symbol.iterator');
}

( true ? exports : global).Symbol = Symbol;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reHyphen = /[-_]+([a-z])/g;
var cache = Object.create(null);
function camelize(str, useCache) {
    return useCache && cache[str] ||
        ((useCache ? cache : {})[str] = str.replace(reHyphen, function (match, chr) { return chr.toUpperCase(); }));
}
exports.camelize = camelize;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function clearNode(node) {
    for (var child = void 0; (child = node.firstChild);) {
        node.removeChild(child);
    }
    return node;
}
exports.clearNode = clearNode;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global = Function('return this;')();
function noop() { }
var defaultHandler = function (type) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    var console = global.console;
    (console && console[type] || noop).call(console || null, (type == 'error' ? msg.map(function (m) { return m === Object(m) && m.stack || m; }) : msg).join(' '));
};
var Logger = /** @class */ (function () {
    function Logger(handler) {
        this.handler = handler || defaultHandler;
    }
    Logger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['log'].concat(msg));
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['warn'].concat(msg));
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['error'].concat(msg));
    };
    return Logger;
}());
exports.Logger = Logger;
exports.logger = new Logger();
exports.log = exports.logger.log.bind(exports.logger);
exports.warn = exports.logger.warn.bind(exports.logger);
exports.error = exports.logger.error.bind(exports.logger);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var range = document.createRange();
var htmlToFragment;
exports.htmlToFragment = htmlToFragment;
if (range.createContextualFragment) {
    var selected_1 = false;
    exports.htmlToFragment = htmlToFragment = function (html) {
        if (!selected_1) {
            range.selectNode(document.body);
            selected_1 = true;
        }
        return range.createContextualFragment(html);
    };
}
else {
    exports.htmlToFragment = htmlToFragment = function (html) {
        var el = document.createElement('div');
        var df = document.createDocumentFragment();
        el.innerHTML = html;
        for (var child = void 0; (child = el.firstChild);) {
            df.appendChild(child);
        }
        return df;
    };
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setAttribute(el, name, value) {
    if (value === false || value == null) {
        el.removeAttribute(name);
    }
    else {
        el.setAttribute(name, value === true ? '' : value);
    }
    return el;
}
exports.setAttribute = setAttribute;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toString = Object.prototype.toString;
function isRegExp(value) {
    return toString.call(value) == '[object RegExp]';
}
exports.isRegExp = isRegExp;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(53);
var queue;
function run() {
    var track = queue;
    queue = null;
    for (var _i = 0, track_1 = track; _i < track_1.length; _i++) {
        var callback = track_1[_i];
        try {
            callback();
        }
        catch (err) {
            logger_1.error(err);
        }
    }
}
function defer(callback) {
    if (queue) {
        queue.push(callback);
    }
    else {
        queue = [callback];
        setTimeout(run, 1);
    }
}
exports.defer = defer;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global = Function('return this;')();
function noop() { }
var defaultHandler = function (type) {
    var msg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        msg[_i - 1] = arguments[_i];
    }
    var console = global.console;
    (console && console[type] || noop).call(console || null, (type == 'error' ? msg.map(function (m) { return m === Object(m) && m.stack || m; }) : msg).join(' '));
};
var Logger = /** @class */ (function () {
    function Logger(handler) {
        this.handler = handler || defaultHandler;
    }
    Logger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['log'].concat(msg));
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['warn'].concat(msg));
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this.handler.apply(this, ['error'].concat(msg));
    };
    return Logger;
}());
exports.Logger = Logger;
exports.logger = new Logger();
exports.log = exports.logger.log.bind(exports.logger);
exports.warn = exports.logger.warn.bind(exports.logger);
exports.error = exports.logger.error.bind(exports.logger);


/***/ }),
/* 54 */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
    document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);
    var body = document.body;
    body.classList.add('_no-focus-highlight');
    document.addEventListener('keydown', function (evt) {
        if (evt.which == 9 /* Tab */) {
            body.classList.remove('_no-focus-highlight');
        }
    });
    document.addEventListener('click', function () {
        if (document.activeElement == body) {
            body.classList.add('_no-focus-highlight');
        }
    });
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
var ObservableTreeList_1 = __webpack_require__(16);
exports.ObservableTreeList = ObservableTreeList_1.ObservableTreeList;
var opal_button_1 = __webpack_require__(63);
exports.OpalButton = opal_button_1.OpalButton;
var opal_sign_button_1 = __webpack_require__(65);
exports.OpalSignButton = opal_sign_button_1.OpalSignButton;
var opal_text_input_1 = __webpack_require__(68);
exports.OpalTextInput = opal_text_input_1.OpalTextInput;
var opal_editable_text_1 = __webpack_require__(71);
exports.OpalEditableText = opal_editable_text_1.OpalEditableText;
var opal_input_mask_1 = __webpack_require__(74);
exports.OpalInputMask = opal_input_mask_1.OpalInputMask;
exports.OpalInputMaskDefinition = opal_input_mask_1.OpalInputMaskDefinition;
var opal_group_1 = __webpack_require__(77);
exports.OpalGroup = opal_group_1.OpalGroup;
var opal_checkbox_1 = __webpack_require__(79);
exports.OpalCheckbox = opal_checkbox_1.OpalCheckbox;
var opal_radio_group_1 = __webpack_require__(82);
exports.OpalRadioGroup = opal_radio_group_1.OpalRadioGroup;
exports.OpalRadioButton = opal_radio_group_1.OpalRadioButton;
var opal_switch_1 = __webpack_require__(86);
exports.OpalSwitch = opal_switch_1.OpalSwitch;
var opal_slider_1 = __webpack_require__(89);
exports.OpalSlider = opal_slider_1.OpalSlider;
var opal_switch_menu_1 = __webpack_require__(92);
exports.OpalSwitchMenu = opal_switch_menu_1.OpalSwitchMenu;
var opal_tabs_1 = __webpack_require__(94);
exports.OpalTabs = opal_tabs_1.OpalTabs;
exports.OpalTabList = opal_tabs_1.OpalTabList;
exports.OpalTab = opal_tabs_1.OpalTab;
var opal_dropdown_1 = __webpack_require__(104);
exports.OpalDropdown = opal_dropdown_1.OpalDropdown;
var opal_popover_1 = __webpack_require__(107);
exports.OpalPopover = opal_popover_1.OpalPopover;
var opal_modal_1 = __webpack_require__(110);
exports.OpalModal = opal_modal_1.OpalModal;
var opal_notification_1 = __webpack_require__(113);
exports.OpalNotification = opal_notification_1.OpalNotification;
var opal_select_1 = __webpack_require__(17);
exports.OpalSelect = opal_select_1.OpalSelect;
exports.OpalSelectOption = opal_select_1.OpalSelectOption;
var opal_multiselect_1 = __webpack_require__(122);
exports.OpalMultiselect = opal_multiselect_1.OpalMultiselect;
var opal_input_validator_1 = __webpack_require__(125);
exports.OpalInputValidator = opal_input_validator_1.OpalInputValidator;
exports.OpalInputValidatorRule = opal_input_validator_1.OpalInputValidatorRule;
var opal_calendar_1 = __webpack_require__(130);
exports.OpalCalendar = opal_calendar_1.OpalCalendar;
var opal_date_input_1 = __webpack_require__(135);
exports.OpalDateInput = opal_date_input_1.OpalDateInput;
var opal_loader_1 = __webpack_require__(139);
exports.OpalLoader = opal_loader_1.OpalLoader;
var opal_loaded_list_1 = __webpack_require__(141);
exports.OpalLoadedList = opal_loaded_list_1.OpalLoadedList;
var opal_filtered_list_1 = __webpack_require__(144);
exports.OpalFilteredList = opal_filtered_list_1.OpalFilteredList;
var opal_tree_list_1 = __webpack_require__(28);
exports.OpalTreeList = opal_tree_list_1.OpalTreeList;
var opal_tag_select_1 = __webpack_require__(155);
exports.OpalTagSelect = opal_tag_select_1.OpalTagSelect;
var opal_tree_select_1 = __webpack_require__(158);
exports.OpalTreeSelect = opal_tree_select_1.OpalTreeSelect;
var opal_autosuggest_1 = __webpack_require__(161);
exports.OpalAutosuggest = opal_autosuggest_1.OpalAutosuggest;
var opal_multirow_1 = __webpack_require__(164);
exports.OpalMultirow = opal_multirow_1.OpalMultirow;
exports.OpalMultirowRow = opal_multirow_1.OpalMultirowRow;
var opal_router_1 = __webpack_require__(170);
exports.OpalRouter = opal_router_1.OpalRouter;
exports.OpalRoute = opal_router_1.OpalRoute;
var utils_1 = __webpack_require__(29);
exports.Utils = utils_1.default;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-calendar\"><path d=\"M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 57 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-checkmark\"><path d=\"M2 20l10 8L30 4\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 58 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-chevron-bottom\"><path d=\"M30 12L16 24 2 12\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 59 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-chevron-left\"><path d=\"M20 30L8 16 20 2\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 60 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-close\"><path d=\"M2 30L30 2m0 28L2 2\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 61 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-compose\"><path d=\"M27 15v15H2V5h15m13 1l-4-4L9 19l-2 6 6-2zm-8 0l4 4zM9 19l4 4z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 62 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"opal-components__icon-search\"><circle cx=\"14\" cy=\"14\" r=\"12\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M23 23l7 7\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 63 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(64);
var OpalButton = /** @class */ (function (_super) {
    __extends(OpalButton, _super);
    function OpalButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalButton.prototype, "_tabIndex", {
        get: function () {
            return this.input.disabled ? -1 : this.input.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.ready = function () {
        if (this.input.focused) {
            this.element.tabIndex = this._tabIndex;
            this.focus();
        }
    };
    OpalButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-focused-change': this._onInputFocusedChange,
            'change:_tabIndex': this._onTabIndexChange
        });
        this.listenTo(this.element, {
            focus: this._onElementFocus,
            blur: this._onElementBlur,
            click: this._onElementClick
        });
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalButton.prototype._onTabIndexChange = function () {
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onElementFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement != _this.element) {
                return;
            }
            if (_this.element.tagName.indexOf('-', 1) != -1) {
                _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
            }
            _this.input.focused = true;
            _this.emit('focus');
        });
    };
    OpalButton.prototype._onElementBlur = function () {
        if (this._documentKeyDownListening) {
            this._documentKeyDownListening.stop();
        }
        this.input.focused = false;
        this.emit('blur');
    };
    OpalButton.prototype._onElementClick = function () {
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            if (!this.input.disabled) {
                this.click();
            }
        }
    };
    OpalButton.prototype.click = function () {
        if (this.input.checkable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
            this.emit('change');
        }
        this.emit('click');
        return this;
    };
    Object.defineProperty(OpalButton.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalButton.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalButton.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalButton.prototype.focus = function () {
        this.element.focus();
        return this;
    };
    OpalButton.prototype.blur = function () {
        this.element.blur();
        return this;
    };
    OpalButton.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalButton.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalButton.prototype, "_tabIndex", null);
    OpalButton = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-button',
            input: {
                viewType: 'default',
                size: 'm',
                checkable: false,
                checked: false,
                loading: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            }
        })
    ], OpalButton);
    return OpalButton;
}(rionite_1.Component));
exports.OpalButton = OpalButton;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-button{padding:0;border:0;background:0 0;color:inherit;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-button:not([view-type=clean]){position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 23px;border-radius:3px;background:#546778;color:#fff;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-button:not([view-type=clean])::-moz-focus-inner{padding:0;border:0}.opal-button:not([view-type=clean])[size=s]{padding:4px 13px;font-size:14px;line-height:21px}.opal-button:not([view-type=clean]):hover{background:#597791}.opal-button:not([view-type=clean]):focus{outline:none}body:not(._no-focus-highlight) .opal-button:not([view-type=clean]):focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-button:not([view-type=clean]):active,.opal-button:not([view-type=clean])[checked]{background:#43484c}.opal-button:not([view-type=clean])[loading]{background-image:-o-linear-gradient(315deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-image:linear-gradient(135deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-size:30px 30px;-webkit-animation:opal-button-loading-animation 3s linear infinite;animation:opal-button-loading-animation 3s linear infinite}.opal-button:not([view-type=clean])[disabled]{opacity:.5;pointer-events:none}.opal-group .opal-group__content>.opal-button:not([view-type=clean]):not(:first-child),.opal-group .opal-group__content>:not(:first-child) .opal-button:not([view-type=clean]){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-group .opal-group__content>.opal-button:not([view-type=clean]):not(:last-child),.opal-group .opal-group__content>:not(:last-child) .opal-button:not([view-type=clean]){border-top-right-radius:0;border-bottom-right-radius:0}.opal-switch-menu .opal-button:not([view-type=clean]):not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-switch-menu .opal-button:not([view-type=clean]):not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.opal-button[view-type=primary]{background:#1b91f8}.opal-button[view-type=primary]:hover{background-color:#33a0ff}.opal-button[view-type=primary]:active,.opal-button[view-type=primary][checked]{background-color:#1371c3}.opal-button[view-type=danger]{background:#f63159}.opal-button[view-type=danger]:hover{background-color:#fd496d}.opal-button[view-type=danger]:active,.opal-button[view-type=danger][checked]{background-color:#d3173d}@-webkit-keyframes opal-button-loading-animation{0%{background-position:0 0}to{background-position:60px 0}}@keyframes opal-button-loading-animation{0%{background-position:0 0}to{background-position:60px 0}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 65 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(66);
var template_nelm_1 = __webpack_require__(67);
var OpalSignButton = /** @class */ (function (_super) {
    __extends(OpalSignButton, _super);
    function OpalSignButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalSignButton.prototype, "_tabIndex", {
        get: function () {
            return this.input.disabled ? -1 : this.input.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalSignButton.prototype.elementAttached = function () {
        this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalSignButton.prototype.ready = function () {
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalSignButton.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalSignButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalSignButton.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    OpalSignButton.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalSignButton.prototype.click = function () {
        if (this.input.checkable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
        }
        this.emit('click');
        return this;
    };
    Object.defineProperty(OpalSignButton.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSignButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalSignButton.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalSignButton.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalSignButton.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalSignButton.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalSignButton.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalSignButton.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalSignButton.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalSignButton.prototype, "_tabIndex", null);
    OpalSignButton = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-sign-button',
            input: {
                sign: { type: String, required: true },
                checkable: false,
                checked: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default
        })
    ], OpalSignButton);
    return OpalSignButton;
}(rionite_1.Component));
exports.OpalSignButton = OpalSignButton;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-sign-button{position:relative;display:inline-block;line-height:0}.opal-sign-button .opal-sign-button__control{padding:0;border:0;background:0 0;color:inherit;white-space:nowrap;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-sign-button .opal-sign-button__control:focus{outline:none}body:not(._no-focus-highlight) .opal-sign-button .opal-sign-button__control:focus::after{position:absolute;top:-1px;right:0;bottom:1px;left:0;border:1px solid #1b91f8;border-radius:3px;content:'';pointer-events:none}.opal-sign-button .opal-sign-button__control:active .opal-sign-button__sign{top:0}.opal-sign-button .opal-sign-button__sign{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:3px;width:28px;height:28px;border:2px solid;border-radius:50%;vertical-align:middle;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-sign-button .opal-sign-button__sign::before,.opal-sign-button .opal-sign-button__sign::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-sign-button .opal-sign-button__sign::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign,.opal-sign-button[sign=plus] .opal-sign-button__control:active .opal-sign-button__sign{border-color:#33a0ff}.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign::after,.opal-sign-button[sign=plus] .opal-sign-button__control:active .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__control:active .opal-sign-button__sign::after{background:#33a0ff}.opal-sign-button[sign=plus] .opal-sign-button__sign{border-color:#107cda}.opal-sign-button[sign=plus] .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__sign::after{background:#107cda;content:''}.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign,.opal-sign-button[sign=minus] .opal-sign-button__control:active .opal-sign-button__sign{border-color:#fd496d}.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign::before,.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign::after,.opal-sign-button[sign=minus] .opal-sign-button__control:active .opal-sign-button__sign::before,.opal-sign-button[sign=minus] .opal-sign-button__control:active .opal-sign-button__sign::after{background:#fd496d}.opal-sign-button[sign=minus] .opal-sign-button__sign{border-color:#eb143f}.opal-sign-button[sign=minus] .opal-sign-button__sign::before{background:#eb143f;content:''}.opal-sign-button[checked] .opal-sign-button__sign{top:0}.opal-sign-button[disabled]{opacity:.5;pointer-events:none}.opal-sign-button[disabled] .opal-sign-button__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nspan/sign\n' '\nrt-content/content\n}\n}");

/***/ }),
/* 68 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(69);
var template_nelm_1 = __webpack_require__(70);
var OpalTextInput = /** @class */ (function (_super) {
    __extends(OpalTextInput, _super);
    function OpalTextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalTextInput.prototype, "_textFieldValue", {
        get: function () {
            return this.input.value;
        },
        set: function (value) {
            this._textFieldValueCell.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "value", {
        get: function () {
            return this._textFieldValue.trim() || null;
        },
        set: function (value) {
            this._textFieldValue = this.textField.value = value || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "isControlIconShown", {
        get: function () {
            return !this.isBtnClearShown && !this.input.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "isBtnClearShown", {
        get: function () {
            return !!this._textFieldValue && !this.input.loading;
        },
        enumerable: true,
        configurable: true
    });
    OpalTextInput.prototype.ready = function () {
        var input = this.input;
        var textField = this.textField = this.$('text-field');
        if (this._textFieldValue) {
            textField.value = this._textFieldValue;
        }
        else if (input.storeKey) {
            this._textFieldValue = textField.value = localStorage.getItem(input.storeKey) || '';
        }
        this._prevValue = this.value;
        if (input.multiline && input.autoHeight) {
            var offsetHeight = textField.offsetHeight;
            if (offsetHeight) {
                this._initialHeight = offsetHeight + textField.scrollHeight - textField.clientHeight;
                this._fixHeight();
            }
            else {
                this._initialHeight = parseInt(getComputedStyle(textField).lineHeight, 10) * this.input.rows +
                    parseInt(getComputedStyle(textField).borderTop, 10) +
                    parseInt(getComputedStyle(textField).borderBottom, 10) +
                    parseInt(getComputedStyle(textField).paddingTop, 10) +
                    parseInt(getComputedStyle(textField).paddingBottom, 10);
                textField.style.height = this._initialHeight + 'px';
            }
        }
        if (input.focused) {
            this.focus();
        }
    };
    OpalTextInput.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-value-change': this._onInputValueChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo(this.textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            input: this._onTextFieldInput,
            change: this._onTextFieldChange,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            keyup: this._onTextFieldKeyUp
        });
    };
    OpalTextInput.prototype._onInputValueChange = function (evt) {
        if (this.textField.value != evt.data.value) {
            this.textField.value = evt.data.value;
        }
    };
    OpalTextInput.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalTextInput.prototype._onTextFieldFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == _this.textField) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalTextInput.prototype._onTextFieldBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    OpalTextInput.prototype._onTextFieldInput = function (evt) {
        this._textFieldValue = this.textField.value;
        this.emit({
            type: 'input',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldChange = function (evt) {
        if (this.value === this._prevValue) {
            return;
        }
        this._prevValue = this.value;
        var storeKey = this.input.storeKey;
        if (storeKey) {
            localStorage.setItem(storeKey, this.textField.value);
        }
        this.emit({
            type: 'change',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyDown = function (evt) {
        var _this = this;
        if (this.input.multiline && this.input.autoHeight) {
            setTimeout(function () {
                _this._fixHeight();
            }, 1);
        }
        this.emit({
            type: 'keydown',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyPress = function (evt) {
        if (evt.which == 13 /* Enter */ && this.value) {
            this.emit('confirm');
        }
        this.emit({
            type: 'keypress',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyUp = function (evt) {
        if (this.input.multiline && this.input.autoHeight) {
            this._fixHeight();
        }
        this.emit({
            type: 'keyup',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._fixHeight = function () {
        var textField = this.textField;
        var lineHeight = parseInt(getComputedStyle(textField).lineHeight, 10);
        textField.style.height = this._initialHeight - lineHeight + 'px';
        textField.style.height = textField.offsetHeight + textField.scrollHeight - textField.clientHeight +
            lineHeight + 'px';
    };
    OpalTextInput.prototype.clear = function () {
        this.value = null;
        return this;
    };
    OpalTextInput.prototype.focus = function () {
        this.textField.focus();
        return this;
    };
    OpalTextInput.prototype.blur = function () {
        this.textField.blur();
        return this;
    };
    OpalTextInput.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalTextInput.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalTextInput.prototype, "_textFieldValue", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalTextInput.prototype, "isControlIconShown", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalTextInput.prototype, "isBtnClearShown", null);
    OpalTextInput = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-text-input',
            input: {
                inputType: 'text',
                size: 'm',
                multiline: false,
                rows: 5,
                autoHeight: true,
                inputName: String,
                value: '',
                storeKey: String,
                placeholder: String,
                clearable: false,
                loading: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default,
            domEvents: {
                'btn-clear': {
                    click: function (evt) {
                        this.value = null;
                        this.textField.focus();
                        this.emit('clear');
                        this.emit('change');
                    }
                }
            }
        })
    ], OpalTextInput);
    return OpalTextInput;
}(rionite_1.Component));
exports.OpalTextInput = OpalTextInput;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-text-input{position:relative;display:inline-block;width:400px;vertical-align:middle}.opal-text-input .opal-text-input__text-field{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 34px 6px 11px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-text-input .opal-text-input__control-icon-container[shown] .opal-text-input__control-icon{display:block}.opal-text-input .opal-text-input__control-icon{position:absolute;top:0;right:12px;bottom:0;display:none;margin:auto;width:18px;height:18px;stroke-width:3px;stroke:gray;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-text-input .opal-text-input__btn-clear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.opal-text-input .opal-text-input__btn-clear[shown]{display:block}.opal-text-input .opal-text-input__btn-clear:hover{color:#000}.opal-text-input .opal-text-input__btn-clear:focus{outline:none}body:not(._no-focus-highlight) .opal-text-input .opal-text-input__btn-clear:focus{outline:1px solid #1b91f8}.opal-text-input .opal-text-input__btn-clear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-text-input .opal-text-input__btn-clear-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px;stroke-width:3px;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-text-input .opal-text-input__loader{position:absolute;top:0;right:12px;bottom:0;margin:auto;border:0;pointer-events:none}.opal-text-input:hover .opal-text-input__text-field{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.opal-text-input .opal-text-input__text-field:focus{outline:none;border-color:#1b91f8}.opal-text-input[multiline]:not([auto-height=no]) .opal-text-input__text-field{overflow-y:hidden}.opal-text-input[valid] .opal-text-input__text-field,.opal-text-input[valid] .opal-text-input__text-field:focus{border-color:#18b461}.opal-text-input[valid=no] .opal-text-input__text-field,.opal-text-input[valid=no] .opal-text-input__text-field:focus{border-color:#f63159}.opal-text-input[disabled]{opacity:.5;pointer-events:none}.opal-text-input[disabled] .opal-text-input__text-field{background:#e6e6e6}.opal-group .opal-group__content>.opal-text-input:not(:first-child),.opal-group .opal-group__content>:not(:first-child) .opal-text-input{margin-right:-1px}.opal-group__content .opal-text-input:not(:first-child) .opal-text-input__text-field,.opal-group__content :not(:first-child) .opal-text-input .opal-text-input__text-field{border-top-left-radius:0;border-bottom-left-radius:0}.opal-group__content .opal-text-input:not(:last-child) .opal-text-input__text-field,.opal-group__content :not(:last-child) .opal-text-input .opal-text-input__text-field{border-top-right-radius:0;border-bottom-right-radius:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@if-then (if=input.multiline) {\ntextarea/, text-field (\nrows={input.rows},\nname={input.inputName},\nplaceholder={input.placeholder},\ntabindex={input.tabIndex},\ndisabled={input.disabled}\n)\n}\n@if-else (if=input.multiline) {\ninput/, text-field (\ntype={input.inputType},\nname={input.inputName},\nplaceholder={input.placeholder},\ntabindex={input.tabIndex},\ndisabled={input.disabled}\n)\n}\nrt-content/control-icon-container (select=.opal-text-input__control-icon, shown={isControlIconShown})\n@if-then (if=input.clearable) {\nbutton/btn-clear (shown={isBtnClearShown}) {\nsvg/btn-clear-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-close) }\n}\n}\n@if-then (if=input.loading) {\nopal-loader/loader (size=s, shown)\n}\n}");

/***/ }),
/* 71 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(72);
var template_nelm_1 = __webpack_require__(73);
var OpalEditableText = /** @class */ (function (_super) {
    __extends(OpalEditableText, _super);
    function OpalEditableText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalEditableText.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = this._fixedValue = value && value.trim() || null;
            this._textNode.nodeValue = value || '';
        },
        enumerable: true,
        configurable: true
    });
    OpalEditableText.prototype.ready = function () {
        var contentEl = this.$('content').element;
        var firstChild = contentEl.firstChild;
        if (!firstChild || firstChild.nodeType != Node.TEXT_NODE) {
            throw new TypeError('Content must be text node');
        }
        this._textNode = firstChild;
        this._value = this._fixedValue = contentEl.textContent.trim() || null;
    };
    OpalEditableText.prototype.elementAttached = function () {
        this.listenTo(this.element, 'click', this._onElementClick);
        this.listenTo(this.$('content').element, {
            focus: this._onContentElementFocus,
            blur: this._onContentElementBlur,
            input: this._onContentElementInput
        });
    };
    OpalEditableText.prototype._onElementClick = function (evt) {
        if (evt.target == this.element) {
            this.focus();
        }
    };
    OpalEditableText.prototype._onContentElementFocus = function () {
        this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
    };
    OpalEditableText.prototype._onContentElementBlur = function () {
        this._documentKeyDownListening.stop();
        if (this._fixedValue != this._value) {
            this._fixedValue = this._value;
            this.emit('change');
        }
    };
    OpalEditableText.prototype._onContentElementInput = function () {
        var contentEl = this.$('content').element;
        var text = contentEl.textContent;
        if (contentEl.innerHTML != text) {
            while (contentEl.lastChild) {
                contentEl.removeChild(contentEl.lastChild);
            }
            var textNode = this._textNode;
            textNode.nodeValue = text;
            contentEl.appendChild(textNode);
            var sel = window.getSelection();
            var rng = document.createRange();
            rng.setStart(textNode, text.length);
            sel.removeAllRanges();
            sel.addRange(rng);
        }
        else if (!contentEl.firstChild) {
            this._textNode.nodeValue = '';
            contentEl.appendChild(this._textNode);
        }
        this._value = text.trim() || null;
        this.emit('input');
    };
    OpalEditableText.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13) {
            evt.preventDefault();
        }
    };
    OpalEditableText.prototype.focus = function (selectAll) {
        var textNode = this._textNode;
        var sel = window.getSelection();
        var rng = document.createRange();
        if (selectAll) {
            rng.selectNode(textNode);
        }
        else {
            rng.setStart(textNode, textNode.nodeValue.length);
        }
        sel.removeAllRanges();
        sel.addRange(rng);
    };
    OpalEditableText = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-editable-text',
            template: template_nelm_1.default,
            domEvents: {
                'icon-editable': {
                    click: function () {
                        this.focus(true);
                    }
                }
            }
        })
    ], OpalEditableText);
    return OpalEditableText;
}(rionite_1.Component));
exports.OpalEditableText = OpalEditableText;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-editable-text{display:block;cursor:text}.opal-editable-text .opal-editable-text__content-wrapper{position:relative;display:inline-block;padding-right:24px}.opal-editable-text .opal-editable-text__content{display:inline-block;padding-right:2px}.opal-editable-text .opal-editable-text__content:focus{outline:solid 1px #000}.opal-editable-text .opal-editable-text__icon-editable{position:absolute;top:0;right:0;display:block;width:16px;height:16px;border:solid 2px transparent;border-left-width:6px;cursor:pointer;stroke-width:2.5px;stroke:#107cda;stroke-linecap:square;stroke-linejoin:miter;fill:none}.opal-editable-text .opal-editable-text__icon-editable:hover,.opal-editable-text .opal-editable-text__icon-editable:active{stroke:#33a0ff}.opal-editable-text .opal-editable-text__icon-editable:active{top:1px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/content-wrapper {\nrt-content/content (contenteditable, spellcheck=false)\nsvg/icon-editable (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-compose) }\n}\n}");

/***/ }),
/* 74 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var opal_input_mask_definition_1 = __webpack_require__(75);
exports.OpalInputMaskDefinition = opal_input_mask_definition_1.OpalInputMaskDefinition;
// import { Cell } from 'cellx';
var forEach = Array.prototype.forEach;
var iPhone = /iphone/i.test(navigator.userAgent);
var ie11 = !(window.ActiveXObject) && 'ActiveXObject' in window;
var OpalInputMask = /** @class */ (function (_super) {
    __extends(OpalInputMask, _super);
    function OpalInputMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputMask_1 = OpalInputMask;
    Object.defineProperty(OpalInputMask.prototype, "_mask", {
        get: function () {
            return this.input.mask.split('').filter(function (chr) { return chr != '?'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_partialIndex", {
        get: function () {
            var mask = this.input.mask;
            var index = mask.indexOf('?');
            return index == -1 ? mask.length : index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_tests", {
        get: function () {
            var _this = this;
            return this._mask.map(function (chr) { return _this._definitions[chr] || null; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_firstTestIndex", {
        get: function () {
            return this._tests.findIndex(function (test) { return !!test; });
        },
        enumerable: true,
        configurable: true
    });
    OpalInputMask.prototype.initialize = function () {
        this._definitions = Object.create(this.constructor.defaultDefinitions);
    };
    OpalInputMask.prototype.ready = function () {
        this.textField = this.$('text-input').textField;
        var definitions = this._definitions;
        forEach.call(this.element.querySelectorAll('opal-input-mask-definition'), function (inputMaskDefinition) {
            var input = inputMaskDefinition.$component.input;
            definitions[input.maskChar] = input.regex;
        });
        this._initBuffer();
    };
    OpalInputMask.prototype.elementAttached = function () {
        this.listenTo(this, 'change:_mask', this._onMaskChange);
        this.listenTo(this.textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            input: this._onTextFieldInput
        });
        if (!ie11) {
            this._checkValue(false);
        }
    };
    OpalInputMask.prototype._onMaskChange = function () {
        this._initBuffer();
        this._checkValue(false);
    };
    OpalInputMask.prototype._onTextFieldFocus = function () {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == _this.textField) {
                _this._setTextFieldSelection(0, _this._checkValue(false));
                _this._textOnFocus = _this.textField.value;
                _this._writeBuffer();
            }
        });
    };
    OpalInputMask.prototype._onTextFieldBlur = function () {
        this._checkValue(false);
        if (this.textField.value != this._textOnFocus) {
            this.$('text-input').emit('change');
        }
    };
    OpalInputMask.prototype._onTextFieldKeyDown = function (evt) {
        var textField = this.textField;
        var key = evt.which;
        // Backspace, delete, and escape get special treatment
        if (key == 8 || key == 46 || iPhone && key == 127) {
            evt.preventDefault();
            var start = textField.selectionStart;
            var end = textField.selectionEnd;
            if (start == end) {
                if (key == 46) {
                    start = this._nextTestIndex(start - 1);
                    end = this._nextTestIndex(start);
                }
                else {
                    start = this._prevTestIndex(start);
                }
            }
            var value = textField.value;
            this._clearBuffer(start, end);
            this._shiftLeft(start, end - 1);
            if (value != textField.value) {
                this.$('text-input')._onTextFieldInput(evt);
            }
        }
        else if (key == 27) {
            evt.preventDefault();
            if (textField.value != this._textOnFocus) {
                textField.value = this._textOnFocus;
                this._setTextFieldSelection(0, this._checkValue(false));
                this.$('text-input')._onTextFieldInput(evt);
            }
        }
    };
    OpalInputMask.prototype._onTextFieldKeyPress = function (evt) {
        var tests = this._tests;
        var bufferLen = this._buffer.length;
        var textField = this.textField;
        var start = textField.selectionStart;
        var end = textField.selectionEnd;
        var key = evt.which;
        if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32) {
            return;
        }
        if (key) {
            evt.preventDefault();
            if (start != end) {
                this._clearBuffer(start, end);
                this._shiftLeft(start, end - 1);
            }
            var index = this._nextTestIndex(start - 1);
            if (index < bufferLen) {
                var chr = String.fromCharCode(key);
                if (tests[index].test(chr)) {
                    this._shiftRight(index);
                    this._buffer[index] = chr;
                    this._writeBuffer();
                    index = this._nextTestIndex(index);
                    this._setTextFieldSelection(index, index);
                    this.$('text-input')._onTextFieldInput(evt);
                    if (index >= bufferLen) {
                        this.emit('complete');
                    }
                }
                else if (start != end) {
                    this.$('text-input')._onTextFieldInput(evt);
                }
            }
        }
    };
    OpalInputMask.prototype._onTextFieldInput = function () {
        if (ie11) {
            return;
        }
        this._setTextFieldSelection(this._checkValue(true));
    };
    OpalInputMask.prototype._initBuffer = function () {
        var definitions = this._definitions;
        this._buffer = this._mask.map(function (chr) { return definitions[chr] ? null : chr; });
    };
    OpalInputMask.prototype._checkValue = function (allowNotCompleted) {
        var partialIndex = this._partialIndex;
        var tests = this._tests;
        var buffer = this._buffer;
        var bufferLen = buffer.length;
        var value = this.textField.value;
        var valueLen = value.length;
        var index = 0;
        var lastMatchIndex = -1;
        for (var j = 0; index < bufferLen; index++) {
            if (tests[index]) {
                buffer[index] = null;
                while (j++ < valueLen) {
                    var chr = value.charAt(j - 1);
                    if (tests[index].test(chr)) {
                        buffer[index] = chr;
                        lastMatchIndex = index;
                        break;
                    }
                }
                if (j > valueLen) {
                    this._clearBuffer(index + 1, bufferLen);
                    break;
                }
            }
            else {
                if (buffer[index] == value.charAt(j)) {
                    j++;
                }
                if (index < partialIndex) {
                    lastMatchIndex = index;
                }
            }
        }
        if (allowNotCompleted) {
            this._writeBuffer();
        }
        else {
            if (lastMatchIndex + 1 < partialIndex) {
                this._clearBuffer(0, bufferLen);
                this.$('text-input').value = '';
            }
            else {
                this.$('text-input').value = buffer.slice(0, lastMatchIndex + 1).join('');
            }
        }
        return index;
    };
    OpalInputMask.prototype._shiftLeft = function (start, end) {
        if (start < 0) {
            return;
        }
        var tests = this._tests;
        var buffer = this._buffer;
        for (var i = start, j = this._nextTestIndex(end), l = buffer.length; i < l; i++) {
            var test = tests[i];
            if (test) {
                var chr = void 0;
                if (j < l && (chr = buffer[j]) && test.test(chr)) {
                    buffer[i] = chr;
                    buffer[j] = null;
                    j = this._nextTestIndex(j);
                }
                else {
                    break;
                }
            }
        }
        this._writeBuffer();
        this._setTextFieldSelection(Math.max(this._firstTestIndex, start));
    };
    OpalInputMask.prototype._shiftRight = function (index) {
        var tests = this._tests;
        var buffer = this._buffer;
        var chr = null;
        for (var l = buffer.length; index < l; index++) {
            if (tests[index]) {
                var nextChr = buffer[index];
                buffer[index] = chr;
                var j = this._nextTestIndex(index);
                if (j < l && nextChr && tests[j].test(nextChr)) {
                    chr = nextChr;
                }
                else {
                    break;
                }
            }
        }
    };
    OpalInputMask.prototype._nextTestIndex = function (index) {
        var tests = this._tests;
        for (var l = tests.length; ++index < l && !tests[index];) { }
        return index;
    };
    OpalInputMask.prototype._prevTestIndex = function (index) {
        var tests = this._tests;
        while (--index >= 0 && !tests[index]) { }
        return index;
    };
    OpalInputMask.prototype._writeBuffer = function () {
        var buffer = this._buffer;
        var toIndex = buffer.indexOf(null);
        this.$('text-input').value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
    };
    OpalInputMask.prototype._clearBuffer = function (start, end) {
        var tests = this._tests;
        var buffer = this._buffer;
        if (end > buffer.length) {
            end = buffer.length;
        }
        for (var i = start; i < end; i++) {
            if (tests[i]) {
                buffer[i] = null;
            }
        }
    };
    OpalInputMask.prototype._setTextFieldSelection = function (start, end) {
        if (end === void 0) { end = start; }
        this.textField.setSelectionRange(start, end);
    };
    OpalInputMask.OpalInputMaskDefinition = opal_input_mask_definition_1.OpalInputMaskDefinition;
    OpalInputMask.defaultDefinitions = {
        __proto__: null,
        9: /\d/,
        z: /[a-zA-Z]/,
        '*': /[0-9a-zA-Z]/
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalInputMask.prototype, "_mask", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalInputMask.prototype, "_partialIndex", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalInputMask.prototype, "_tests", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalInputMask.prototype, "_firstTestIndex", null);
    OpalInputMask = OpalInputMask_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-mask',
            input: {
                mask: { type: String, required: true }
            },
            template: '@section/inner { rt-content/content }'
        })
    ], OpalInputMask);
    return OpalInputMask;
    var OpalInputMask_1;
}(rionite_1.Component));
exports.OpalInputMask = OpalInputMask;


/***/ }),
/* 75 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(76);
var OpalInputMaskDefinition = /** @class */ (function (_super) {
    __extends(OpalInputMaskDefinition, _super);
    function OpalInputMaskDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputMaskDefinition = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-mask-definition',
            input: {
                maskChar: { type: String, required: true, readonly: true },
                regex: { type: eval, required: true, readonly: true }
            }
        })
    ], OpalInputMaskDefinition);
    return OpalInputMaskDefinition;
}(rionite_1.Component));
exports.OpalInputMaskDefinition = OpalInputMaskDefinition;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-input-mask-definition{display:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 77 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(78);
var OpalGroup = /** @class */ (function (_super) {
    __extends(OpalGroup, _super);
    function OpalGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalGroup = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-group',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalGroup);
    return OpalGroup;
}(rionite_1.Component));
exports.OpalGroup = OpalGroup;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-group{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 79 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(80);
var template_nelm_1 = __webpack_require__(81);
var OpalCheckbox = /** @class */ (function (_super) {
    __extends(OpalCheckbox, _super);
    function OpalCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalCheckbox.prototype, "_tabIndex", {
        get: function () {
            return this.input.disabled ? -1 : this.input.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalCheckbox.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-checked-change': this._onInputCheckedChange,
            'input-indeterminate-change': this._onInputIndeterminateChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalCheckbox.prototype.ready = function () {
        var input = this.input;
        if (input.checked) {
            input.indeterminate = false;
            this.$('input').checked = true;
        }
        if (input.focused) {
            this.focus();
        }
    };
    OpalCheckbox.prototype._onInputCheckedChange = function (evt) {
        if (evt.data.value) {
            this.input.indeterminate = false;
        }
        this.$('input').checked = evt.data.value;
    };
    OpalCheckbox.prototype._onInputIndeterminateChange = function (evt) {
        if (evt.data.value) {
            this.input.checked = false;
        }
    };
    OpalCheckbox.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalCheckbox.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            var input = this.input;
            if (!input.disabled) {
                this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalCheckbox.prototype._onInputChange = function (evt) {
        this.emit((this.input.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalCheckbox.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalCheckbox.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalCheckbox.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCheckbox.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalCheckbox.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalCheckbox.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalCheckbox.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalCheckbox.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalCheckbox.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalCheckbox.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalCheckbox.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalCheckbox.prototype, "_tabIndex", null);
    OpalCheckbox = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-checkbox',
            input: {
                checked: false,
                indeterminate: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default
        })
    ], OpalCheckbox);
    return OpalCheckbox;
}(rionite_1.Component));
exports.OpalCheckbox = OpalCheckbox;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-checkbox{position:relative;display:inline-block}.opal-checkbox .opal-checkbox__label:hover .opal-checkbox__control{border-color:#8a8a8a}.opal-checkbox .opal-checkbox__label:hover .opal-checkbox__control:focus{border-color:#33a0ff}.opal-checkbox .opal-checkbox__input{display:none}.opal-checkbox .opal-checkbox__control{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-checkbox .opal-checkbox__control:focus{outline:none;border-color:#33a0ff}.opal-checkbox[checked] .opal-checkbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-checkbox[indeterminate] .opal-checkbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.opal-checkbox[disabled]{opacity:.5;pointer-events:none}.opal-checkbox[disabled] .opal-checkbox__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nrt-content/content\n}\n}");

/***/ }),
/* 82 */
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
var rionite_1 = __webpack_require__(0);
var opal_radio_button_1 = __webpack_require__(83);
exports.OpalRadioButton = opal_radio_button_1.OpalRadioButton;
var forEach = Array.prototype.forEach;
var OpalRadioGroup = /** @class */ (function (_super) {
    __extends(OpalRadioGroup, _super);
    function OpalRadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRadioGroup.prototype.ready = function () {
        this.buttonElements = this.element.getElementsByClassName('opal-radio-button');
    };
    OpalRadioGroup.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<opal-radio-button>check': this._onCheck,
            '<opal-radio-button>uncheck': this._onUncheck
        });
    };
    OpalRadioGroup.prototype._onCheck = function (evt) {
        var checkedButton = evt.target;
        forEach.call(this.buttonElements, function (btnEl) {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
    };
    OpalRadioGroup.prototype._onUncheck = function (evt) {
        evt.target.check();
    };
    OpalRadioGroup.OpalRadioButton = opal_radio_button_1.OpalRadioButton;
    OpalRadioGroup = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-radio-group'
        })
    ], OpalRadioGroup);
    return OpalRadioGroup;
}(rionite_1.Component));
exports.OpalRadioGroup = OpalRadioGroup;


/***/ }),
/* 83 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(84);
var template_nelm_1 = __webpack_require__(85);
var OpalRadioButton = /** @class */ (function (_super) {
    __extends(OpalRadioButton, _super);
    function OpalRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalRadioButton.prototype, "_tabIndex", {
        get: function () {
            return this.input.disabled ? -1 : this.input.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.ready = function () {
        if (this.input.checked) {
            this.$('input').checked = true;
        }
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalRadioButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-checked-change': this._onInputCheckedChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalRadioButton.prototype._onInputCheckedChange = function (evt) {
        this.$('input').checked = evt.data.value;
    };
    OpalRadioButton.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalRadioButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            var input = this.input;
            if (!input.disabled) {
                this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalRadioButton.prototype._onInputChange = function (evt) {
        this.emit((this.input.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalRadioButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalRadioButton.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalRadioButton.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalRadioButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalRadioButton.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalRadioButton.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalRadioButton.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalRadioButton.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalRadioButton.prototype, "_tabIndex", null);
    OpalRadioButton = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-radio-button',
            input: {
                checked: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default
        })
    ], OpalRadioButton);
    return OpalRadioButton;
}(rionite_1.Component));
exports.OpalRadioButton = OpalRadioButton;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-radio-button{position:relative;display:inline-block}.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control{border-color:#8a8a8a}.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control:focus{border-color:#33a0ff}.opal-radio-button .opal-radio-button__input{display:none}.opal-radio-button .opal-radio-button__control{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-radio-button .opal-radio-button__control:focus{outline:none;border-color:#33a0ff}.opal-radio-button[checked] .opal-radio-button__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.opal-radio-button[disabled]{opacity:.5;pointer-events:none}.opal-radio-button[disabled] .opal-radio-button__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nrt-content/content\n}\n}");

/***/ }),
/* 86 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(87);
var template_nelm_1 = __webpack_require__(88);
var OpalSwitch = /** @class */ (function (_super) {
    __extends(OpalSwitch, _super);
    function OpalSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSwitch.prototype._tabIndex = function () {
        return this.input.disabled ? -1 : this.input.tabIndex;
    };
    OpalSwitch.prototype.ready = function () {
        if (this.input.checked) {
            this.$('input').checked = true;
        }
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalSwitch.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-checked-change': this._onInputCheckedChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalSwitch.prototype._onInputCheckedChange = function (evt) {
        this.$('input').checked = evt.data.value;
    };
    OpalSwitch.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalSwitch.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            var input = this.input;
            if (!input.disabled) {
                this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalSwitch.prototype._onInputChange = function (evt) {
        this.emit((this.input.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalSwitch.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalSwitch.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalSwitch.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSwitch.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalSwitch.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalSwitch.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalSwitch.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalSwitch.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalSwitch.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalSwitch.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalSwitch.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalSwitch.prototype, "_tabIndex", null);
    OpalSwitch = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-switch',
            input: {
                checked: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default
        })
    ], OpalSwitch);
    return OpalSwitch;
}(rionite_1.Component));
exports.OpalSwitch = OpalSwitch;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-switch{position:relative;display:inline-block}.opal-switch .opal-switch__label:hover .opal-switch__thumb{background:#597791}.opal-switch .opal-switch__input{display:none}.opal-switch .opal-switch__control{position:relative;top:-1px;display:inline-block;margin:3px;width:30px;height:14px;border-radius:7px;background:#d6d6d6;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-switch .opal-switch__control:focus{outline:none}body:not(._no-focus-highlight) .opal-switch .opal-switch__control:focus .opal-switch__thumb::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:50%;content:''}.opal-switch .opal-switch__thumb{position:absolute;top:-3px;left:-3px;width:20px;height:20px;border-radius:50%;background:#546778;-webkit-transition:background .1s linear,-webkit-transform .1s linear;transition:background .1s linear,-webkit-transform .1s linear;-o-transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear,-webkit-transform .1s linear}.opal-switch[checked] .opal-switch__label:hover .opal-switch__thumb{background:#33a0ff}.opal-switch[checked] .opal-switch__thumb{background:#1b91f8;-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}.opal-switch[disabled]{opacity:.5;pointer-events:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex}) { span/thumb }\n' '\nrt-content/content\n}\n}");

/***/ }),
/* 89 */
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
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(90);
var template_nelm_1 = __webpack_require__(91);
var OpalSlider = /** @class */ (function (_super) {
    __extends(OpalSlider, _super);
    function OpalSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalSlider.prototype, "_firstInputWidth", {
        get: function () {
            var min = this.input.min;
            var all = this.input.max - min;
            return Math.round((((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5) / 1e3;
        },
        enumerable: true,
        configurable: true
    });
    OpalSlider.prototype.initialize = function () {
        var range = this.input.range;
        if (range) {
            this._firstInputValue = range[0];
            this._secondInputValue = range[1];
        }
    };
    OpalSlider.prototype.elementAttached = function () {
        if (this.input.range) {
            this.listenTo('first-input', 'input', this._onFirstInputInput);
            this.listenTo('second-input', 'input', this._onSecondInputInput);
        }
    };
    OpalSlider.prototype._onFirstInputInput = function (evt) {
        var secondInput = this.$('second-input');
        var value = this._firstInputValue = +evt.target.value;
        if (+secondInput.value < value) {
            secondInput.value = this._secondInputValue = value;
        }
    };
    OpalSlider.prototype._onSecondInputInput = function (evt) {
        var firstInput = this.$('first-input');
        var value = this._secondInputValue = +evt.target.value;
        if (+firstInput.value > value) {
            firstInput.value = this._firstInputValue = value;
        }
    };
    Object.defineProperty(OpalSlider.prototype, "value", {
        get: function () {
            return this.input.range ?
                [this._firstInputValue, this._secondInputValue] :
                +this.$('input').value;
        },
        set: function (value) {
            if (this.input.range) {
                this.$('first-input').value = this._firstInputValue = value[0];
                this.$('second-input').value = this._secondInputValue = value[1];
            }
            else {
                this.$('input').value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        cellx_decorators_1.observable
    ], OpalSlider.prototype, "_firstInputValue", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalSlider.prototype, "_secondInputValue", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalSlider.prototype, "_firstInputWidth", null);
    OpalSlider = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-slider',
            input: {
                min: 0,
                max: 100,
                step: 1,
                value: 0,
                range: eval
            },
            template: template_nelm_1.default
        })
    ], OpalSlider);
    return OpalSlider;
}(rionite_1.Component));
exports.OpalSlider = OpalSlider;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-slider{position:relative;top:-1px;display:inline-block;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-slider::before{position:absolute;top:3px;right:3px;left:3px;z-index:0;height:14px;border-radius:7px;background:#d6d6d6;content:''}.opal-slider .opal-slider__first-input-wrapper3{position:absolute;top:0;right:10px;left:10px;z-index:2}.opal-slider .opal-slider__first-input-wrapper2{position:relative}.opal-slider .opal-slider__first-input-wrapper{position:absolute;top:0;right:0;left:-10px;overflow:hidden}.opal-slider .opal-slider__first-input,.opal-slider .opal-slider__second-input{display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.opal-slider .opal-slider__first-input::-moz-focus-outer{border:none}.opal-slider .opal-slider__first-input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__first-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__first-input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__first-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__first-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__first-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__second-input{position:relative;z-index:1}.opal-slider .opal-slider__second-input::-moz-focus-outer{border:none}.opal-slider .opal-slider__second-input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__second-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__second-input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__second-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__second-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__second-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__input{position:relative;z-index:1;display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.opal-slider .opal-slider__input::-moz-focus-outer{border:none}.opal-slider .opal-slider__input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__first-input:hover::-webkit-slider-thumb{background:#597791}.opal-slider .opal-slider__first-input:hover::-moz-range-thumb{background:#597791}.opal-slider .opal-slider__first-input:hover::-ms-thumb{background:#597791}.opal-slider .opal-slider__second-input:hover::-webkit-slider-thumb{background:#33a0ff}.opal-slider .opal-slider__second-input:hover::-moz-range-thumb{background:#33a0ff}.opal-slider .opal-slider__second-input:hover::-ms-thumb{background:#33a0ff}.opal-slider .opal-slider__input:hover::-webkit-slider-thumb{background:#597791}.opal-slider .opal-slider__input:hover::-moz-range-thumb{background:#597791}.opal-slider .opal-slider__input:hover::-ms-thumb{background:#597791}.opal-slider .opal-slider__first-input:focus,.opal-slider .opal-slider__second-input:focus,.opal-slider .opal-slider__input:focus{outline:none}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@if-then (if=input.range) {\ndiv/first-input-wrapper3 {\ndiv/first-input-wrapper2 (style=width: {_firstInputWidth}%) {\ndiv/first-input-wrapper {\ninput/first-input (\ntype=range,\nmin={input.min},\nmax={input.max},\nstep={input.step},\nvalue={input.range.0}\n)\n}\n}\n}\ndiv/second-input-wrapper {\ninput/second-input (type=range, min={input.min}, max={input.max}, step={input.step}, value={input.range.1})\n}\n}\n@if-else (if=input.range) {\ninput/input (type=range, min={input.min}, max={input.max}, step={input.step}, value={input.value})\n}\n}");

/***/ }),
/* 92 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(93);
var forEach = Array.prototype.forEach;
var find = Array.prototype.find;
var OpalSwitchMenu = /** @class */ (function (_super) {
    __extends(OpalSwitchMenu, _super);
    function OpalSwitchMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalSwitchMenu.prototype, "checkedButton", {
        get: function () {
            if (this._checkedButton !== undefined) {
                return this._checkedButton;
            }
            return (this._checkedButton = find.call(this.buttonElements, function (btnEl) {
                return btnEl.$component.checked;
            }) || null);
        },
        set: function (checkedButton) {
            if (checkedButton === this._checkedButton) {
                return;
            }
            forEach.call(this.buttonElements, function (btnEl) {
                var btn = btnEl.$component;
                if (btn === checkedButton) {
                    btn.check();
                }
                else {
                    btn.uncheck();
                }
            });
            this._checkedButton = checkedButton;
            this.emit('change');
        },
        enumerable: true,
        configurable: true
    });
    OpalSwitchMenu.prototype.ready = function () {
        this.buttonElements = this.element.getElementsByClassName('opal-button');
    };
    OpalSwitchMenu.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<opal-button>check': this._onButtonCheck,
            '<opal-button>uncheck': this._onButtonUncheck
        });
    };
    OpalSwitchMenu.prototype._onButtonCheck = function (evt) {
        var checkedButton = evt.target;
        forEach.call(this.buttonElements, function (btnEl) {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
        this._checkedButton = checkedButton;
        this.emit('change');
    };
    OpalSwitchMenu.prototype._onButtonUncheck = function (evt) {
        evt.target.check();
    };
    OpalSwitchMenu.prototype.clear = function () {
        var checkedButton = this._checkedButton;
        if (checkedButton) {
            checkedButton.uncheck();
            this._checkedButton = null;
        }
    };
    OpalSwitchMenu = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-switch-menu',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalSwitchMenu);
    return OpalSwitchMenu;
}(rionite_1.Component));
exports.OpalSwitchMenu = OpalSwitchMenu;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-switch-menu{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 94 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(95);
var opal_tab_list_1 = __webpack_require__(96);
exports.OpalTabList = opal_tab_list_1.OpalTabList;
var opal_tab_1 = __webpack_require__(27);
exports.OpalTab = opal_tab_1.OpalTab;
var opal_tab_panel_1 = __webpack_require__(100);
exports.OpalTabPanel = opal_tab_panel_1.OpalTabPanel;
var template_nelm_1 = __webpack_require__(103);
var indexOf = Array.prototype.indexOf;
var forEach = Array.prototype.forEach;
var OpalTabs = /** @class */ (function (_super) {
    __extends(OpalTabs, _super);
    function OpalTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectedTab = null;
        return _this;
    }
    OpalTabs.prototype.ready = function () {
        var _this = this;
        var tabs = this.tabs = this.element.getElementsByClassName('opal-tab');
        var tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel');
        var selectedTab;
        var selectedTabIndex;
        forEach.call(tabs, function (tabEl, index) {
            var tab = tabEl.$component;
            if (tab.selected) {
                if (selectedTab) {
                    tab.deselect();
                }
                else {
                    selectedTab = _this._selectedTab = tab;
                    selectedTabIndex = index;
                }
            }
        });
        if (!selectedTab) {
            selectedTab = this._selectedTab = tabs[0].$component;
            selectedTabIndex = 0;
            selectedTab.select();
        }
        tabPanels[selectedTabIndex].$component.input.shown = true;
    };
    OpalTabs.prototype.elementAttached = function () {
        this.listenTo(this.element.getElementsByClassName('opal-tab-list')[0].$component, {
            '<opal-tab>select': this._onTabListSelect,
            '<opal-tab>deselect': this._onTabListDeselect
        });
    };
    OpalTabs.prototype._onTabListSelect = function (evt) {
        var tab = evt.target;
        var selectedTab = this._selectedTab;
        if (selectedTab) {
            this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$component.input.shown = false;
            selectedTab.deselect();
        }
        this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.input.shown = true;
        this._selectedTab = tab;
    };
    OpalTabs.prototype._onTabListDeselect = function (evt) {
        evt.target.select();
    };
    OpalTabs.OpalTabList = opal_tab_list_1.OpalTabList;
    OpalTabs.OpalTabPanel = opal_tab_panel_1.OpalTabPanel;
    OpalTabs = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tabs',
            template: template_nelm_1.default
        })
    ], OpalTabs);
    return OpalTabs;
}(rionite_1.Component));
exports.OpalTabs = OpalTabs;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tabs{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 96 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(97);
var opal_tab_1 = __webpack_require__(27);
exports.OpalTab = opal_tab_1.OpalTab;
var OpalTabList = /** @class */ (function (_super) {
    __extends(OpalTabList, _super);
    function OpalTabList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTabList.OpalTab = opal_tab_1.OpalTab;
    OpalTabList = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tab-list',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalTabList);
    return OpalTabList;
}(rionite_1.Component));
exports.OpalTabList = OpalTabList;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tab-list{display:block;padding:0 30px;border-bottom:1px solid #dbdbdb;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tab{display:inline-block}.opal-tab .opal-tab__control{position:relative;display:block;padding:5px 22px;border:0;border-radius:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:#000;text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-tab .opal-tab__control:hover{background:#e6e6e6}.opal-tab .opal-tab__control:focus{outline:none}body:not(._no-focus-highlight) .opal-tab .opal-tab__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.opal-tab .opal-tab__control:active{background:#ccc}.opal-tab .opal-tab__content{position:relative;display:block}.opal-tab[selected] .opal-tab__control{-webkit-box-shadow:0 3px #1b91f8;box-shadow:0 3px #1b91f8}.opal-tab[disabled]{opacity:.5;pointer-events:none}.opal-tab[disabled] .opal-tab__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nrt-content/content\n}\n}");

/***/ }),
/* 100 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(101);
var template_nelm_1 = __webpack_require__(102);
var OpalTabPanel = /** @class */ (function (_super) {
    __extends(OpalTabPanel, _super);
    function OpalTabPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContentRendered = false;
        return _this;
    }
    OpalTabPanel.prototype.initialize = function () {
        this.listenTo(this, 'input-shown-change', this._onInputShownChange);
    };
    OpalTabPanel.prototype._onInputShownChange = function (evt) {
        if (evt.data.value) {
            this.isContentRendered = true;
        }
    };
    OpalTabPanel.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    __decorate([
        cellx_decorators_1.observable
    ], OpalTabPanel.prototype, "isContentRendered", void 0);
    OpalTabPanel = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tab-panel',
            input: {
                shown: false
            },
            template: template_nelm_1.default
        })
    ], OpalTabPanel);
    return OpalTabPanel;
}(rionite_1.Component));
exports.OpalTabPanel = OpalTabPanel;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tab-panel{position:relative;display:none;padding:30px}.opal-tab-panel[shown]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@if-then (if=isContentRendered) {\nrt-content/content\n}\n}");

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nrt-content/tab-list-container (select=opal-tab-list) {\nopal-tab-list/tab-list {\nrt-content/tabs (select=opal-tab)\n}\n}\nrt-content/panels (select=opal-tab-panel)\n}");

/***/ }),
/* 104 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(105);
var template_nelm_1 = __webpack_require__(106);
var openedDropdowns = [];
var OpalDropdown = /** @class */ (function (_super) {
    __extends(OpalDropdown, _super);
    function OpalDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContentRendered = false;
        return _this;
    }
    OpalDropdown.prototype.ready = function () {
        if (this.input.opened) {
            this._open();
        }
    };
    OpalDropdown.prototype.elementAttached = function () {
        this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
    };
    OpalDropdown.prototype._onInputOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    };
    OpalDropdown.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalDropdown.prototype.open = function () {
        if (this.input.opened) {
            return false;
        }
        this.input.opened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.close = function () {
        if (!this.input.opened) {
            return false;
        }
        this.input.opened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalDropdown.prototype._open = function () {
        openedDropdowns.push(this);
        if (this.isContentRendered) {
            this._open$();
        }
        else {
            this.isContentRendered = true;
            cellx_1.Cell.forceRelease();
            this._open$();
        }
    };
    OpalDropdown.prototype._open$ = function () {
        var _this = this;
        var el = this.element;
        var elStyle = el.style;
        elStyle.top = '100%';
        elStyle.right = 'auto';
        elStyle.bottom = 'auto';
        elStyle.left = '0';
        elStyle.maxHeight = 'none';
        var docElClientWidth = document.documentElement.clientWidth;
        var containerClientRect = el.offsetParent.getBoundingClientRect();
        var elClientRect = el.getBoundingClientRect();
        if (elClientRect.right > docElClientWidth) {
            if (containerClientRect.right - el.offsetWidth >= 0) {
                elStyle.right = '0';
                elStyle.left = 'auto';
            }
            else {
                elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
            }
        }
        var margin = elClientRect.top - containerClientRect.bottom;
        var excess = elClientRect.bottom + margin - document.documentElement.clientHeight;
        if (excess > 0) {
            var diff = containerClientRect.top - (document.documentElement.clientHeight - containerClientRect.bottom);
            if (this.input.autoHeight) {
                if (diff > 0) {
                    elStyle.top = 'auto';
                    elStyle.bottom = '100%';
                    excess -= diff;
                    if (excess > 0) {
                        elStyle.maxHeight = el.offsetHeight - excess + 'px';
                    }
                }
                else {
                    elStyle.maxHeight = el.offsetHeight - excess + 'px';
                }
            }
            else if (diff > 0 && excess - diff <= document.body.scrollTop) {
                elStyle.top = 'auto';
                elStyle.bottom = '100%';
            }
        }
        if (this.input.autoClosing) {
            setTimeout(function () {
                if (_this.input.opened) {
                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
                }
            }, 1);
        }
    };
    OpalDropdown.prototype._close = function () {
        openedDropdowns.splice(openedDropdowns.indexOf(this), 1);
        if (this._documentClickListening) {
            this._documentClickListening.stop();
        }
    };
    OpalDropdown.prototype._onDocumentClick = function (evt) {
        var docEl = document.documentElement;
        var componentEl = this.element;
        for (var el = evt.target; el != componentEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentNode;
            if (!el) {
                break;
            }
        }
    };
    __decorate([
        cellx_decorators_1.observable
    ], OpalDropdown.prototype, "isContentRendered", void 0);
    OpalDropdown = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-dropdown',
            input: {
                autoHeight: true,
                autoClosing: false,
                opened: false
            },
            template: template_nelm_1.default
        })
    ], OpalDropdown);
    return OpalDropdown;
}(rionite_1.Component));
exports.OpalDropdown = OpalDropdown;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-dropdown{position:absolute;top:100%;left:0;z-index:600;display:none;overflow-x:hidden;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:2px 0;padding:6px 0;min-width:100%;border:1px solid #ccc;border-radius:3px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.opal-dropdown .opal-dropdown__content{position:relative;display:block}.opal-dropdown[opened]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@if-then (if=isContentRendered) {\nrt-content/content\n}\n}");

/***/ }),
/* 107 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(108);
var template_nelm_1 = __webpack_require__(109);
var OpalPopover = /** @class */ (function (_super) {
    __extends(OpalPopover, _super);
    function OpalPopover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContentRendered = false;
        return _this;
    }
    OpalPopover.prototype.ready = function () {
        if (this.input.opened) {
            this._open();
        }
    };
    OpalPopover.prototype.elementAttached = function () {
        this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
    };
    OpalPopover.prototype._onInputOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    };
    OpalPopover.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalPopover.prototype.open = function () {
        if (this.input.opened) {
            return false;
        }
        this.input.opened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalPopover.prototype.close = function () {
        if (!this.input.opened) {
            return false;
        }
        this.input.opened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalPopover.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalPopover.prototype._open = function () {
        if (this.isContentRendered) {
            this._open$();
        }
        else {
            this.isContentRendered = true;
            cellx_1.Cell.forceRelease();
            this._open$();
        }
    };
    OpalPopover.prototype._open$ = function () {
        var _this = this;
        var el = this.element;
        if (this.input.autoDirection) {
            var docEl = document.documentElement;
            var containerClientRect = el.offsetParent.getBoundingClientRect();
            var elClientRect = el.getBoundingClientRect();
            var from = this._fromOnOpen = this.input.from;
            switch (from) {
                case 'left': {
                    if (elClientRect.left + document.body.scrollLeft < 0 || (elClientRect.left < 0 &&
                        containerClientRect.left < docEl.clientWidth - containerClientRect.right)) {
                        this.input.from = 'right';
                    }
                    break;
                }
                case 'top': {
                    if (elClientRect.top + document.body.scrollTop < 0 || (elClientRect.top < 0 &&
                        containerClientRect.top < docEl.clientHeight - containerClientRect.bottom)) {
                        this.input.from = 'bottom';
                    }
                    break;
                }
                case 'right': {
                    if (elClientRect.right > docEl.clientWidth &&
                        containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
                        containerClientRect.left + document.body.scrollLeft >=
                            elClientRect.right - containerClientRect.right) {
                        this.input.from = 'left';
                    }
                    break;
                }
                case 'bottom': {
                    if (elClientRect.bottom > docEl.clientHeight &&
                        containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
                        containerClientRect.top + document.body.scrollTop >=
                            elClientRect.bottom - containerClientRect.bottom) {
                        this.input.from = 'top';
                    }
                    break;
                }
            }
        }
        var align = this.input.align;
        var arrowStyle = this.$('arrow').style;
        arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';
        if (align != 'center') {
            arrowStyle[align] = el.offsetParent[align == 'left' || align == 'right' ? 'clientWidth' : 'clientHeight'] / 2 + 'px';
        }
        if (this.input.autoClosing) {
            setTimeout(function () {
                if (_this.input.opened) {
                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
                }
            }, 1);
        }
    };
    OpalPopover.prototype._close = function () {
        if (this.input.autoDirection) {
            this.input.from = this._fromOnOpen;
        }
        if (this._documentClickListening) {
            this._documentClickListening.stop();
            this._documentClickListening = null;
        }
    };
    OpalPopover.prototype._onDocumentClick = function (evt) {
        var docEl = document.documentElement;
        var componentEl = this.element;
        for (var el = evt.target; el != componentEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentNode;
            if (!el) {
                break;
            }
        }
    };
    __decorate([
        cellx_decorators_1.observable
    ], OpalPopover.prototype, "isContentRendered", void 0);
    OpalPopover = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-popover',
            input: {
                from: 'right',
                align: 'center',
                autoDirection: true,
                autoClosing: false,
                opened: false
            },
            template: template_nelm_1.default
        })
    ], OpalPopover);
    return OpalPopover;
}(rionite_1.Component));
exports.OpalPopover = OpalPopover;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-popover{position:absolute;z-index:600;display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px;border:1px solid #ccc;border-radius:6px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.opal-popover .opal-popover__arrow{position:absolute;width:0;height:0}.opal-popover .opal-popover__arrow::before,.opal-popover .opal-popover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.opal-popover .opal-popover__arrow::after{border:8px solid transparent}.opal-popover .opal-popover__content{position:relative;display:block}.opal-popover[from=top]{bottom:100%;margin-bottom:15px}.opal-popover[from=top] .opal-popover__arrow{top:100%}.opal-popover[from=top] .opal-popover__arrow::before,.opal-popover[from=top] .opal-popover__arrow::after{border-top-color:#ccc;border-bottom-width:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[from=top] .opal-popover__arrow::after{border-top-color:#fff}.opal-popover[from=top][align=center]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[from=top][align=center] .opal-popover__arrow{left:50%}.opal-popover[from=top][align=left]{left:0}.opal-popover[from=top][align=left] .opal-popover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.opal-popover[from=top][align=right]{right:0}.opal-popover[from=top][align=right] .opal-popover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.opal-popover[from=right]{left:100%;margin-left:15px}.opal-popover[from=right] .opal-popover__arrow{right:100%}.opal-popover[from=right] .opal-popover__arrow::before,.opal-popover[from=right] .opal-popover__arrow::after{right:0;border-right-color:#ccc;border-left-width:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[from=right] .opal-popover__arrow::after{border-right-color:#fff}.opal-popover[from=right][align=center]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[from=right][align=center] .opal-popover__arrow{top:50%}.opal-popover[from=right][align=top]{top:0}.opal-popover[from=right][align=top] .opal-popover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.opal-popover[from=right][align=bottom]{bottom:0}.opal-popover[from=right][align=bottom] .opal-popover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-popover[from=bottom]{top:100%;margin-top:15px}.opal-popover[from=bottom] .opal-popover__arrow{bottom:100%}.opal-popover[from=bottom] .opal-popover__arrow::before,.opal-popover[from=bottom] .opal-popover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:#ccc;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[from=bottom] .opal-popover__arrow::after{border-bottom-color:#fff}.opal-popover[from=bottom][align=center]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[from=bottom][align=center] .opal-popover__arrow{left:50%}.opal-popover[from=bottom][align=left]{left:0}.opal-popover[from=bottom][align=left] .opal-popover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.opal-popover[from=bottom][align=right]{right:0}.opal-popover[from=bottom][align=right] .opal-popover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.opal-popover[from=left]{right:100%;margin-right:15px}.opal-popover[from=left] .opal-popover__arrow{left:100%}.opal-popover[from=left] .opal-popover__arrow::before,.opal-popover[from=left] .opal-popover__arrow::after{left:0;border-right-width:0;border-left-color:#ccc;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[from=left] .opal-popover__arrow::after{border-left-color:#fff}.opal-popover[from=left][align=center]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[from=left][align=center] .opal-popover__arrow{top:50%}.opal-popover[from=left][align=top]{top:0}.opal-popover[from=left][align=top] .opal-popover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.opal-popover[from=left][align=bottom]{bottom:0}.opal-popover[from=left][align=bottom] .opal-popover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-popover[opened]{display:block;-webkit-animation:opal-popover-fade-in-animation .1s linear;animation:opal-popover-fade-in-animation .1s linear}@-webkit-keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}@keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/arrow\n@if-then (if=isContentRendered) {\nrt-content/content\n}\n}");

/***/ }),
/* 110 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(8);
__webpack_require__(111);
var template_nelm_1 = __webpack_require__(112);
var openedModals = [];
var documentFocusListening;
var documentKeyUpListening;
function onDocumentFocus(evt) {
    if (!isFocusable_1.isFocusable(evt.target)) {
        return;
    }
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
var OpalModal = /** @class */ (function (_super) {
    __extends(OpalModal, _super);
    function OpalModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContentRendered = false;
        return _this;
    }
    OpalModal.prototype.ready = function () {
        if (this.input.opened) {
            this._open();
        }
    };
    OpalModal.prototype.elementAttached = function () {
        this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
        this.listenTo(this.element, 'click', this._onElementClick);
    };
    OpalModal.prototype.elementDetached = function () {
        this.close();
    };
    OpalModal.prototype._onInputOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    };
    OpalModal.prototype._onElementClick = function (evt) {
        var componentEl = this.element;
        var windowEl = this.$('window');
        for (var el = evt.target; el != windowEl;) {
            if (el == componentEl) {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentNode;
            if (!el) {
                break;
            }
        }
    };
    OpalModal.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalModal.prototype.open = function () {
        if (this.input.opened) {
            return false;
        }
        this.input.opened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalModal.prototype.close = function () {
        if (!this.input.opened) {
            return false;
        }
        this.input.opened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalModal.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalModal.prototype._open = function () {
        if (openedModals.length) {
            openedModals[0].element.classList.add('_overlapped');
        }
        else {
            documentFocusListening = this.listenTo(document, 'focus', onDocumentFocus, document, true);
            documentKeyUpListening = this.listenTo(document, 'keyup', onDocumentKeyUp, document);
            var body = document.body;
            var initialBodyWidth = body.offsetWidth;
            body.style.overflow = 'hidden';
            if (initialBodyWidth < body.offsetWidth) {
                body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
            }
        }
        this.isContentRendered = true;
        openedModals.unshift(this);
        this.focus();
    };
    OpalModal.prototype._close = function () {
        var index = openedModals.indexOf(this);
        if (index) {
            openedModals[index - 1].close();
        }
        openedModals.shift();
        if (openedModals.length) {
            openedModals[0].element.classList.remove('_overlapped');
            openedModals[0].focus();
        }
        else {
            documentFocusListening.stop();
            documentKeyUpListening.stop();
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
    __decorate([
        cellx_decorators_1.observable
    ], OpalModal.prototype, "isContentRendered", void 0);
    OpalModal = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-modal',
            input: {
                opened: false
            },
            template: template_nelm_1.default,
            domEvents: {
                'btn-close': {
                    click: function () {
                        this.close();
                        this.emit('close');
                    }
                }
            }
        })
    ], OpalModal);
    return OpalModal;
}(rionite_1.Component));
exports.OpalModal = OpalModal;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-modal{position:fixed;top:0;left:0;z-index:1000;display:none;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;width:100%;height:100%;background:rgba(0,0,0,.6);text-align:center;white-space:nowrap;cursor:pointer}.opal-modal::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-modal .opal-modal__window{position:relative;display:inline-block;padding:30px;border-radius:3px;background:#fff;-webkit-box-shadow:0 0 20px rgba(0,0,0,.3);box-shadow:0 0 20px rgba(0,0,0,.3);vertical-align:middle;text-align:left;white-space:normal;cursor:default}.opal-modal .opal-modal__window:hover .opal-modal__btn-close::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close::after{background:#ccc}.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::after{background:#fff}.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::after{background:#b3b3b3}.opal-modal .opal-modal__btn-close-wrapper{position:absolute;top:-10px;left:100%;padding:0 10px}.opal-modal .opal-modal__btn-close{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;padding:10px;width:25px;height:25px;border:0;background:0 0;cursor:pointer}.opal-modal .opal-modal__btn-close::before,.opal-modal .opal-modal__btn-close::after{position:absolute;top:21px;left:10px;width:25px;height:3px;border-radius:2px;background:#fff;content:'';-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-modal .opal-modal__btn-close::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.opal-modal .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__btn-close:hover::after{background:#fff}.opal-modal .opal-modal__btn-close:active::before,.opal-modal .opal-modal__btn-close:active::after{background:#b3b3b3}.opal-modal .opal-modal__content{position:relative;display:block}.opal-modal[opened]{display:block}.opal-modal._overlapped{left:100%;overflow:visible}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/window {\ndiv/btn-close-wrapper {\nbutton/btn-close\n}\n@if-then (if=isContentRendered) {\nrt-content/content\n}\n}\n}");

/***/ }),
/* 113 */
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
var map_set_polyfill_1 = __webpack_require__(4);
var cellx_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(114);
var template_nelm_1 = __webpack_require__(115);
var container;
var containerOnTop = false;
var shownNotifications = new map_set_polyfill_1.Set();
function initContainer(notification) {
    if (!container) {
        container = document.createElement('div');
        container.className = notification.constructor._contentBlockNames.join('__container ') +
            '__container';
        document.body.appendChild(container);
        containerOnTop = getComputedStyle(container).top != 'auto';
    }
    return container;
}
var OpalNotification = /** @class */ (function (_super) {
    __extends(OpalNotification, _super);
    function OpalNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalNotification.prototype.$ = function (name, container) {
        if (container === void 0) { container = this.bar; }
        return _super.prototype.$.call(this, name, container);
    };
    OpalNotification.prototype.ready = function () {
        initContainer(this);
        var bar = this.bar = this.$('bar', this);
        this.element.removeChild(bar);
        bar.setAttribute('view-type', this.input.viewType);
        bar.setAttribute('icon-size', this.input.iconSize);
        bar.setAttribute('button-hide', this.input.buttonHide);
        if (this.$('icon')) {
            bar.setAttribute('has-icon', '');
        }
        if (this.input.shown) {
            this._show();
        }
    };
    OpalNotification.prototype.elementAttached = function () {
        this.listenTo(this, 'input-shown-change', this._onInputShownChange);
        this.listenTo('btn-hide', 'click', this._onBtnHideClick);
    };
    OpalNotification.prototype.elementDetached = function () {
        this.hide();
    };
    OpalNotification.prototype._onInputShownChange = function (evt) {
        if (evt.data.value) {
            this._show();
        }
        else {
            this._hide();
        }
    };
    OpalNotification.prototype._onBtnHideClick = function () {
        this.hide();
        this.emit('hide');
        this.emit('close');
    };
    OpalNotification.prototype.show = function () {
        if (this.input.shown) {
            return false;
        }
        this.input.shown = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalNotification.prototype.hide = function () {
        if (!this.input.shown) {
            return false;
        }
        this.input.shown = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalNotification.prototype.open = function () {
        return this.show();
    };
    OpalNotification.prototype.close = function () {
        return this.hide();
    };
    OpalNotification.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.show() : !this.hide();
        }
        return this.show() || !this.hide();
    };
    OpalNotification.prototype._show = function () {
        var _this = this;
        shownNotifications.add(this);
        container.appendChild(this.bar);
        setTimeout(function () {
            _this.bar.setAttribute('shown', '');
            if (_this.input.timeout) {
                setTimeout(function () {
                    _this.hide();
                }, _this.input.timeout);
            }
        }, 100);
    };
    OpalNotification.prototype._hide = function () {
        shownNotifications.delete(this);
        container.removeChild(this.bar);
        this.bar.removeAttribute('shown');
    };
    OpalNotification.prototype.focus = function () {
        var focusEl = this.$('focus');
        if (focusEl) {
            document.body.classList.remove('_no-focus-highlight');
            focusEl.focus();
        }
        return this;
    };
    OpalNotification = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-notification',
            input: {
                viewType: 'default',
                iconSize: 'm',
                buttonHide: true,
                timeout: 0,
                shown: false
            },
            template: template_nelm_1.default
        })
    ], OpalNotification);
    return OpalNotification;
}(rionite_1.Component));
exports.OpalNotification = OpalNotification;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-notification__container{position:fixed;top:10px;right:20px;z-index:300;width:400px}.opal-notification__container .opal-notification__bar{position:relative;right:-200px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px 0;padding:10px 40px 10px 20px;width:400px;border-radius:3px;background:#546778;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3);color:#fff;opacity:0;-webkit-transition:right .2s linear,opacity .2s linear;-o-transition:right .2s linear,opacity .2s linear;transition:right .2s linear,opacity .2s linear}.opal-notification__container .opal-notification__bar[view-type=primary]{background:#1b91f8}.opal-notification__container .opal-notification__bar[view-type=success]{background:#18b461}.opal-notification__container .opal-notification__bar[view-type=danger]{background:#f63159}.opal-notification__container .opal-notification__bar[has-icon]{padding-left:48px}.opal-notification__container .opal-notification__bar[shown]{right:0;opacity:1}.opal-notification__container .opal-notification__icon{position:absolute;top:0;bottom:0;left:16px;margin:auto;width:18px;height:18px;stroke-width:3px;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-notification__container .opal-notification__btn-hide{position:absolute;top:0;right:10px;bottom:0;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:#fff;opacity:.7;cursor:pointer;-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;transition:opacity .1s linear}.opal-notification__container .opal-notification__btn-hide:hover{opacity:1}.opal-notification__container .opal-notification__btn-hide:focus{outline:none}body:not(._no-focus-highlight) .opal-notification__container .opal-notification__btn-hide:focus{outline:1px solid #1b91f8}.opal-notification__container .opal-notification__btn-hide:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-notification__container .opal-notification__btn-hide[hide]{display:none}.opal-notification__container .opal-notification__btn-hide-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px;stroke-width:3px;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/bar {\nrt-content/icon-container (select=.opal-notificaion__icon)\nrt-content/content\nbutton/btn-hide (hide={input.buttonHide |not }) {\nsvg/btn-hide-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-close) }\n}\n}\n}");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-select{position:relative;display:inline-block;vertical-align:middle}.opal-select .opal-select__button{display:block;min-width:100%}.opal-select .opal-select__button[size=s] .opal-select__button-icon{width:12px;height:12px}.opal-select .opal-select__button[checked] .opal-select__button-icon{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.opal-select .opal-select__button-icon{position:relative;top:-1px;display:inline-block;margin-left:.6em;width:14px;height:14px;vertical-align:middle;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;stroke-width:3px;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-select .opal-select__new-item-input{display:block;margin:6px 10px 4px;width:auto}.opal-select .opal-popover{padding:6px 0;min-width:140px}.opal-select .opal-popover .opal-popover__content{overflow:auto;max-height:380px}.opal-select .opal-filtered-list .opal-filtered-list__query-input{margin:4px 10px 6px}.opal-select .opal-modal .opal-filtered-list .opal-filtered-list__query-input{margin:0 0 10px}.opal-select .opal-loaded-list{height:304px}.opal-select .opal-loader{border-width:100px 15px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isEqualArray(arr1, arr2) {
    var len = arr1.length;
    if (len != arr2.length) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
exports.isEqualArray = isEqualArray;


/***/ }),
/* 118 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(119);
var template_nelm_1 = __webpack_require__(120);
var OpalSelectOption = /** @class */ (function (_super) {
    __extends(OpalSelectOption, _super);
    function OpalSelectOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalSelectOption.prototype, "_tabIndex", {
        get: function () {
            return this.input.disabled ? -1 : this.input.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalSelectOption.prototype.elementAttached = function () {
        this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalSelectOption.prototype._onInputFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalSelectOption.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
            }
        });
    };
    OpalSelectOption.prototype._onControlBlur = function () {
        this.input.focused = false;
    };
    OpalSelectOption.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalSelectOption.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        this.emit('change');
        return this;
    };
    Object.defineProperty(OpalSelectOption.prototype, "value", {
        get: function () {
            var input = this.input;
            return input.value === null ? input.text : input.value;
        },
        set: function (value) {
            this.input.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "text", {
        get: function () {
            return this.input.text.trim() || ' ';
        },
        set: function (text) {
            this.input.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "selected", {
        get: function () {
            return this.input.selected;
        },
        set: function (selected) {
            this.input.selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "disabled", {
        get: function () {
            return this.input.disabled;
        },
        set: function (disabled) {
            this.input.disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    OpalSelectOption.prototype.select = function () {
        if (!this.input.selected) {
            this.input.selected = true;
            return true;
        }
        return false;
    };
    OpalSelectOption.prototype.deselect = function () {
        if (this.input.selected) {
            this.input.selected = false;
            return true;
        }
        return false;
    };
    OpalSelectOption.prototype.toggle = function (value) {
        return (this.input.selected = value === undefined ? !this.input.selected : value);
    };
    OpalSelectOption.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalSelectOption.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalSelectOption.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalSelectOption.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalSelectOption.prototype, "_tabIndex", null);
    OpalSelectOption = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-select-option',
            input: {
                value: String,
                text: { type: String, required: true },
                selected: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template_nelm_1.default
        })
    ], OpalSelectOption);
    return OpalSelectOption;
}(rionite_1.Component));
exports.OpalSelectOption = OpalSelectOption;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-select-option{display:block}.opal-select-option .opal-select-option__control{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 38px 7px 22px;width:100%;border:0;border-radius:0;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-select-option .opal-select-option__control:hover{background:#e6e6e6}.opal-select-option .opal-select-option__control:focus{outline:none}.opal-select-option .opal-select-option__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-select-option .opal-select-option__control:active{background:#ccc}.opal-select-option .opal-select-option__content{position:relative;display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.opal-select-option .opal-select-option__icon-check{position:absolute;top:0;right:14px;bottom:0;display:none;margin:auto;width:16px;height:16px;stroke-width:3px;stroke:#000;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-select-option[selected] .opal-select-option__control{color:#0d87f2}.opal-select-option[selected] .opal-select-option__icon-check{display:block}.opal-select-option[disabled]{opacity:.5;pointer-events:none}.opal-select-option[disabled] .opal-select-option__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nrt-content/content { '{input.text}' }\nsvg/icon-check (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-checkmark) }\n}\n}");

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nrt-content (select=.opal-select__button) {\nopal-button/button (\nview-type={input.viewType},\nsize={input.size},\ncheckable,\ntab-index={input.tabIndex},\ndisabled={input.disabled}\n) {\n@if-then (if=input.text) { '{input.text}' }\n@if-else (if=input.text) { '{_buttonText}' }\nsvg/button-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-chevron-bottom) }\n}\n}\nrt-content (select=.opal-select__menu-container) {\nrt-content/menu-container (select=.opal-select__menu) {\nopal-dropdown/menu (auto-closing) {\nrt-content (select=.opal-select__menu-content) {\n@if-then (if=_isInputDataListSpecified) {\ndiv/, menu-content {\n@if-then (if=dataList) {\n@repeat (for=item of dataList, track-by={_dataListItemValueFieldName}) {\nopal-select-option/option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nrt-content/new-item-input-container // доопределяется ниже\n}\n@if-else (if=dataList) {\nopal-loader/menu-loader (shown)\n}\n}\n}\n@if-else (if=_isInputDataListSpecified) {\ndiv/, menu-content {\nrt-content/options (select=opal-select-option)\nrt-content/new-item-input-container (select=.opal-select__new-item-input)\n}\n}\n}\n}\n}\n}\n}");

/***/ }),
/* 122 */
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
var gettext_1 = __webpack_require__(5);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var opal_select_1 = __webpack_require__(17);
__webpack_require__(123);
var template_nelm_1 = __webpack_require__(124);
var OpalMultiselect = /** @class */ (function (_super) {
    __extends(OpalMultiselect, _super);
    function OpalMultiselect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalMultiselect.prototype, "isNothingSelectedShown", {
        get: function () {
            return !this.viewModel.length;
        },
        enumerable: true,
        configurable: true
    });
    OpalMultiselect.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var input = this.input;
        if (!input.$specified.has('dataProvider')) {
            throw new TypeError('Input property "dataProvider" is required');
        }
        var dataProvider = input.dataProvider;
        if (!dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
        this.dataProvider = dataProvider;
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalMultiselect.prototype, "isNothingSelectedShown", null);
    OpalMultiselect = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-multiselect',
            i18n: {
                queryInputPlaceholder: gettext_1.getText.t('Поиск'),
                nothingSelected: gettext_1.getText.t('Ничего не выбрано')
            },
            input: {
                multiple: true,
                dataProvider: { type: Object, readonly: true }
            },
            template: opal_select_1.OpalSelect.template.extend(template_nelm_1.default),
            events: {
                'query-input': {
                    input: function (evt) {
                        this.$('loaded-list').input.query = evt.target.value;
                    },
                    clear: function () {
                        this.$('loaded-list').input.query = '';
                    }
                },
                'btn-close': {
                    click: function () {
                        this.close();
                        this.focus();
                    }
                }
            },
            domEvents: {
                'btn-deselect-item': {
                    click: function (_, btn) {
                        var vmItemValueFieldName = this._viewModelItemValueFieldName;
                        var itemValue = btn.dataset.itemValue;
                        this.viewModel.removeAt(this.viewModel.findIndex(function (item) { return item[vmItemValueFieldName] == itemValue; }));
                    }
                }
            }
        })
    ], OpalMultiselect);
    return OpalMultiselect;
}(opal_select_1.OpalSelect));
exports.OpalMultiselect = OpalMultiselect;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-multiselect.opal-select .opal-multiselect__menu{padding:0;width:600px}.opal-multiselect.opal-select .opal-multiselect__menu-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;border-bottom:1px solid #ccc;font-size:0;line-height:60px}.opal-multiselect.opal-select .opal-multiselect__query-input{width:279px}.opal-multiselect.opal-select .opal-multiselect__menu-selected{float:right;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:299px;height:304px;border-left:1px solid #ccc}.opal-multiselect.opal-select .opal-multiselect__selected-item{position:relative;overflow:hidden;padding:7px 38px 7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-multiselect.opal-select .opal-multiselect__selected-item:hover .opal-multiselect__btn-deselect-item{display:block}.opal-multiselect.opal-select .opal-multiselect__btn-deselect-item{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.opal-multiselect.opal-select .opal-multiselect__btn-deselect-item:hover{color:#000}.opal-multiselect.opal-select .opal-multiselect__btn-deselect-item:focus{outline:none}.opal-multiselect.opal-select .opal-multiselect__btn-deselect-item:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-multiselect.opal-select .opal-multiselect__btn-deselect-item-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px;stroke-width:3px;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-multiselect.opal-select .opal-multiselect__nothing-selected{display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;height:100%;text-align:center;white-space:nowrap}.opal-multiselect.opal-select .opal-multiselect__nothing-selected::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-multiselect.opal-select .opal-multiselect__nothing-selected[shown]{display:block}.opal-multiselect.opal-select .opal-multiselect__nothing-selected-message{display:inline-block;vertical-align:middle;opacity:.6}.opal-multiselect.opal-select .opal-multiselect__menu-list{width:299px;height:304px}.opal-multiselect.opal-select .opal-multiselect__menu-footer{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;width:100%;border-top:1px solid #ccc;text-align:right;font-size:0;line-height:60px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("/menu (auto-height=no, auto-closing) {\ndiv/menu-header {\nopal-text-input/query-input (\nclass=opal-select__focus,\nclearable,\nplaceholder={constructor.i18n.queryInputPlaceholder}\n) {\nsvg/query-input-control-icon (class=opal-text-input__control-icon, viewBox=0 0 32 32) {\nuse (xlink:href=#opal-components__icon-search)\n}\n}\n}\ndiv/menu-selected {\n@repeat (for=item of viewModel) {\ndiv/selected-item {\n'{item |key(_viewModelItemTextFieldName) }'\nbutton/btn-deselect-item (tabindex=-1, data-item-value='{item |key(_viewModelItemValueFieldName) }') {\nsvg/btn-deselect-item-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-close) }\n}\n}\n}\ndiv/nothing-selected (shown={isNothingSelectedShown}) {\nspan/nothing-selected-message { '{constructor.i18n.nothingSelected}' }\n}\n}\ndiv/menu-list {\nopal-loaded-list/loaded-list (\ndata-provider={dataProvider},\ndata-list-item-value-name={_dataListItemValueFieldName}\n) {\nopal-select-option/option (\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }'\n)\n}\n}\ndiv/menu-footer {\nopal-button/btn-close { 'Закрыть' }\n}\n}");

/***/ }),
/* 125 */
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
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(126);
var opal_input_validator_rule_1 = __webpack_require__(127);
exports.OpalInputValidatorRule = opal_input_validator_rule_1.OpalInputValidatorRule;
var map = Array.prototype.map;
var OpalInputValidator = /** @class */ (function (_super) {
    __extends(OpalInputValidator, _super);
    function OpalInputValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.failedRule = null;
        return _this;
    }
    Object.defineProperty(OpalInputValidator.prototype, "valid", {
        get: function () {
            return !this.failedRule;
        },
        enumerable: true,
        configurable: true
    });
    OpalInputValidator.prototype.ready = function () {
        this._rules = map.call(this.element.getElementsByClassName('opal-input-validator-rule'), function (ruleEl) { return ruleEl.$component; });
    };
    OpalInputValidator.prototype.elementAttached = function () {
        this.listenTo('text-input', {
            input: this._onTextInputInput,
            change: this._onTextInputChange
        });
    };
    OpalInputValidator.prototype._onTextInputInput = function () {
        if (this.failedRule) {
            this._validate([this.failedRule]);
        }
    };
    OpalInputValidator.prototype._onTextInputChange = function () {
        this.validate();
    };
    OpalInputValidator.prototype.validate = function () {
        return this._validate(this._rules);
    };
    OpalInputValidator.prototype._validate = function (rules) {
        var _this = this;
        var value = this.$('text-input').value;
        var failedRule;
        rules.forEach(function (rule) {
            var ruleInput = rule.input;
            if (!failedRule && (value ?
                ruleInput.minLength && value.length < ruleInput.minLength ||
                    ruleInput.regex && !ruleInput.regex.test(value) ||
                    ruleInput.test && !ruleInput.test.call(_this.ownerComponent, value) :
                ruleInput.required)) {
                failedRule = rule;
                rule.showMessage();
            }
            else {
                rule.hideMessage();
            }
        });
        var oldFailedRule = this.failedRule;
        this.failedRule = failedRule || null;
        if (+!!failedRule ^ +!!oldFailedRule) {
            if (failedRule) {
                this.element.setAttribute('valid', 'no');
                this.emit('input-validation-error');
            }
            else {
                this.element.removeAttribute('valid');
                this.emit('input-validation-valid');
            }
        }
        return !failedRule;
    };
    OpalInputValidator.OpalInputValidatorRule = opal_input_validator_rule_1.OpalInputValidatorRule;
    __decorate([
        cellx_decorators_1.observable
    ], OpalInputValidator.prototype, "failedRule", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalInputValidator.prototype, "valid", null);
    OpalInputValidator = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-validator',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalInputValidator);
    return OpalInputValidator;
}(rionite_1.Component));
exports.OpalInputValidator = OpalInputValidator;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-input-validator{position:relative;display:inline-block;vertical-align:middle}.opal-input-validator .opal-input-validator__text-input{display:block}.opal-input-validator[valid=no] .opal-input-validator__text-input .opal-text-input__text-field{border-color:#f50000}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 127 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(128);
var template_nelm_1 = __webpack_require__(129);
var OpalInputValidatorRule = /** @class */ (function (_super) {
    __extends(OpalInputValidatorRule, _super);
    function OpalInputValidatorRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputValidatorRule.prototype.showMessage = function () {
        this.$('popover').open();
    };
    OpalInputValidatorRule.prototype.hideMessage = function () {
        this.$('popover').close();
    };
    OpalInputValidatorRule = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-validator-rule',
            input: {
                required: { default: false, readonly: true },
                minLength: { type: Number, readonly: true },
                regex: { type: eval, readonly: true },
                test: { type: Object, readonly: true },
                popoverFrom: 'right'
            },
            template: template_nelm_1.default
        })
    ], OpalInputValidatorRule);
    return OpalInputValidatorRule;
}(rionite_1.Component));
exports.OpalInputValidatorRule = OpalInputValidatorRule;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-input-validator-rule{display:block}.opal-input-validator-rule .opal-input-validator-rule__content{display:block;width:240px;text-align:center}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nopal-popover/popover (from={input.popoverFrom}) {\nrt-content/content\n}\n}");

/***/ }),
/* 130 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var formatDate_1 = __webpack_require__(131);
__webpack_require__(132);
var parseDate_1 = __webpack_require__(133);
var template_nelm_1 = __webpack_require__(134);
function getTodayDate() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
var OpalCalendar = /** @class */ (function (_super) {
    __extends(OpalCalendar, _super);
    function OpalCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.days = function (_, oldDays) {
            var dateDelimiter = this.input.dateDelimiter;
            var fromDate = this.fromDate;
            var toDate = this.toDate;
            var value = this.value;
            var shownYear = this.shownYear;
            var shownMonth = this.shownMonth;
            if (this._currentlyDateSelection) {
                this._currentlyDateSelection = false;
                return oldDays;
            }
            var now = new Date();
            var nowYear = now.getFullYear();
            var nowMonth = now.getMonth();
            var nowDay = now.getDate();
            var selectedYear;
            var selectedMonth;
            var selectedDay;
            if (value) {
                selectedYear = value.getFullYear();
                selectedMonth = value.getMonth();
                selectedDay = value.getDate();
            }
            var lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
            var lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
            var firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();
            if (!this.constructor.i18n.sundayFirst) {
                firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
            }
            var weekDays = [];
            var days = [weekDays];
            function pushDay(year, month, day, notInCurrentMonth) {
                var date = new Date(year, month, day);
                var disabled = date < fromDate || date > toDate;
                weekDays.push({
                    date: formatDate_1.formatDate(year, month, day, dateDelimiter),
                    value: day,
                    weekDay: [
                        'sunday',
                        'monday',
                        'tuesday',
                        'wednesday',
                        'thursday',
                        'friday',
                        'saturday'
                    ][date.getDay()],
                    today: year == nowYear && month == nowMonth && day == nowDay,
                    selected: !!value && year == selectedYear && month == selectedMonth &&
                        day == selectedDay,
                    notInCurrentMonth: notInCurrentMonth,
                    disabled: disabled,
                    tabIndex: disabled ? null : 0
                });
            }
            for (var i = firstMonthDayWeekDayIndex; i;) {
                pushDay(shownYear - +!shownMonth, shownMonth ? shownMonth - 1 : 11, lastPrevMonthDay - (--i), true);
            }
            for (var i = 0; i < lastMonthDay;) {
                pushDay(shownYear, shownMonth, ++i, false);
                if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
                    days.push((weekDays = []));
                }
            }
            for (var i = 0, l = 7 - weekDays.length; i < l;) {
                pushDay(shownYear + +(shownMonth == 11), (shownMonth + 1) % 12, ++i, true);
            }
            return days;
        };
        return _this;
    }
    OpalCalendar_1 = OpalCalendar;
    Object.defineProperty(OpalCalendar.prototype, "fromDate", {
        get: function () {
            var fromDate = this.input.fromDate;
            if (fromDate) {
                return fromDate == 'today' ? getTodayDate() : parseDate_1.parseDate(fromDate);
            }
            var toDate = this.input.toDate;
            var date = toDate && toDate != 'today' ? parseDate_1.parseDate(toDate) : new Date();
            return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "toDate", {
        get: function () {
            var toDate = this.input.toDate;
            if (toDate) {
                return toDate == 'today' ? getTodayDate() : parseDate_1.parseDate(toDate);
            }
            var fromDate = this.input.fromDate;
            var date = fromDate && fromDate != 'today' ? parseDate_1.parseDate(fromDate) : new Date();
            return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "fromYear", {
        get: function () {
            return this.fromDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "toYear", {
        get: function () {
            return this.toDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "years", {
        get: function () {
            var years = [];
            for (var year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
                years.push(year);
            }
            return years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "stringValue", {
        get: function () {
            return this.input.value;
        },
        set: function (value) {
            this.stringValueCell.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "value", {
        get: function () {
            var value = this.stringValue;
            return value ? parseDate_1.parseDate(value) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "isBtnPrevMonthDisabled", {
        get: function () {
            return this.shownYear == this.fromYear && !this.shownMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "isBtnNextMonthDisabled", {
        get: function () {
            return this.shownYear == this.toYear && this.shownMonth == 11;
        },
        enumerable: true,
        configurable: true
    });
    OpalCalendar.prototype.initialize = function () {
        var i18n = this.constructor.i18n;
        this.weekDays = i18n.sundayFirst ? i18n.weekDays : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
        this.weekDaysShort = i18n.sundayFirst ?
            i18n.weekDaysShort :
            i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);
        var fromDate = this.fromDate;
        var toDate = this.toDate;
        if (fromDate > toDate) {
            throw new TypeError('"fromDate" must be less than or equal to "toDate"');
        }
        var value = this.value;
        var shownDate;
        if (value) {
            if (isNaN(+value)) {
                throw new TypeError('Invalid "value"');
            }
            shownDate = value;
        }
        else {
            var today = getTodayDate();
            shownDate = today < fromDate ? fromDate : (today > toDate ? toDate : today);
        }
        this.shownYear = shownDate.getFullYear();
        this.shownMonth = shownDate.getMonth();
    };
    OpalCalendar.prototype.elementAttached = function () {
        this.listenTo('month-select', '<opal-select-option>select', this._onMonthSelectSelect);
        this.listenTo('year-select', '<opal-select-option>select', this._onYearSelectSelect);
        this.listenTo('days', {
            focus: this._onDaysFocus,
            blur: this._onDaysBlur
        }, this, true);
    };
    OpalCalendar.prototype._onMonthSelectSelect = function (evt) {
        this.shownMonth = +evt.target.value;
    };
    OpalCalendar.prototype._onYearSelectSelect = function (evt) {
        this.shownYear = +evt.target.value;
    };
    OpalCalendar.prototype._onDaysFocus = function (evt) {
        var _this = this;
        if (evt.target.classList.contains('opal-calendar__day')) {
            next_tick_1.nextTick(function () {
                if (document.activeElement == evt.target && !_this._documentKeyDownListening) {
                    _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
                }
            });
        }
    };
    OpalCalendar.prototype._onDaysBlur = function () {
        var _this = this;
        setTimeout(function () {
            if (!document.activeElement.classList.contains('opal-calendar__day')) {
                _this._documentKeyDownListening.stop();
                _this._documentKeyDownListening = null;
            }
        }, 1);
    };
    OpalCalendar.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            this._click(document.activeElement);
        }
    };
    OpalCalendar.prototype._click = function (dayEl) {
        if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
            return;
        }
        var selectedDayEl = this.$('days').querySelector('[selected]');
        if (selectedDayEl) {
            selectedDayEl.removeAttribute('selected');
        }
        dayEl.setAttribute('selected', '');
        this._currentlyDateSelection = true;
        this.stringValue = dayEl.dataset.date;
        this.emit('change');
    };
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "fromDate", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "toDate", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "fromYear", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "toYear", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "years", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "stringValue", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "value", null);
    __decorate([
        cellx_decorators_1.observable
    ], OpalCalendar.prototype, "shownYear", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalCalendar.prototype, "shownMonth", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "isBtnPrevMonthDisabled", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "isBtnNextMonthDisabled", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalCalendar.prototype, "days", void 0);
    OpalCalendar = OpalCalendar_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-calendar',
            input: {
                fromDate: String,
                toDate: String,
                value: String,
                dateDelimiter: { default: '/', readonly: true }
            },
            i18n: {
                previousMonth: 'Предыдущий месяц',
                nextMonth: 'Следующий месяц',
                months: [
                    'Январь', 'Февраль', 'Март', 'Апрель',
                    'Май', 'Июнь', 'Июль', 'Август',
                    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                weekDays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                sundayFirst: false
            },
            template: template_nelm_1.default,
            domEvents: {
                'btn-prev-month': {
                    click: function () {
                        if (this.shownMonth) {
                            this.shownMonth--;
                        }
                        else {
                            this.shownYear--;
                            this.shownMonth = 11;
                        }
                    }
                },
                'btn-next-month': {
                    click: function () {
                        if (this.shownMonth == 11) {
                            this.shownYear++;
                            this.shownMonth = 0;
                        }
                        else {
                            this.shownMonth++;
                        }
                    }
                },
                day: {
                    click: function (evt) {
                        this._click(evt.target);
                    }
                }
            }
        })
    ], OpalCalendar);
    return OpalCalendar;
    var OpalCalendar_1;
}(rionite_1.Component));
exports.OpalCalendar = OpalCalendar;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(year, month, day, delimiter) {
    if (delimiter === void 0) { delimiter = '/'; }
    return ('0' + day).slice(-2) + delimiter + ('0' + (month + 1)).slice(-2) + delimiter + ('000' + year).slice(-4);
}
exports.formatDate = formatDate;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-calendar{display:block;width:300px;border:1px solid #dbdbdb;border-radius:3px;background:#fff;color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400}.opal-calendar .opal-calendar__header{position:relative;padding:8px 44px;text-align:center}.opal-calendar .opal-calendar__btn-prev-month,.opal-calendar .opal-calendar__btn-next-month{position:absolute;top:0;bottom:0;margin:auto;padding:0;width:30px;height:30px;border:0;border-radius:50%;background:0 0;color:gray;cursor:pointer}.opal-calendar .opal-calendar__btn-prev-month:hover,.opal-calendar .opal-calendar__btn-next-month:hover{background:#e6e6e6;color:#000}.opal-calendar .opal-calendar__btn-prev-month:focus,.opal-calendar .opal-calendar__btn-next-month:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-prev-month:focus::after,body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-next-month:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.opal-calendar .opal-calendar__btn-prev-month:active,.opal-calendar .opal-calendar__btn-next-month:active{background:#ccc}.opal-calendar .opal-calendar__btn-prev-month[disabled],.opal-calendar .opal-calendar__btn-next-month[disabled]{background:0 0;color:#000;opacity:.3;pointer-events:none}.opal-calendar .opal-calendar__btn-prev-month{left:8px}.opal-calendar .opal-calendar__btn-next-month{right:8px}.opal-calendar .opal-calendar__btn-prev-month-icon,.opal-calendar .opal-calendar__btn-next-month-icon{display:block;margin:auto;width:18px;height:18px;stroke-width:3px;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-calendar .opal-calendar__btn-next-month-icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.opal-calendar .opal-calendar__body{padding:0 8px 8px;text-align:center;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-calendar .opal-calendar__week-days,.opal-calendar .opal-calendar__days{width:100%;border-spacing:0;border-collapse:separate}.opal-calendar .opal-calendar__week-day,.opal-calendar .opal-calendar__day{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 7px;width:14.2857%;border:1px solid transparent}.opal-calendar .opal-calendar__day{position:relative;border-radius:3px;cursor:pointer}.opal-calendar .opal-calendar__day:hover{background:#e6e6e6}.opal-calendar .opal-calendar__day:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__day:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.opal-calendar .opal-calendar__day:active{background:#ccc}.opal-calendar .opal-calendar__day[today]{text-decoration:underline}.opal-calendar .opal-calendar__day[not-in-current-month]{opacity:.45}.opal-calendar .opal-calendar__day[disabled]{background:0 0;opacity:.15;cursor:default}.opal-calendar .opal-calendar__day[selected]{color:#0d87f2;opacity:1}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseDate(date) {
    var d = date.match(/\d+/g);
    return new Date(+d[2], +d[1] - 1, +d[0]);
}
exports.parseDate = parseDate;


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nheader/header {\nbutton/btn-prev-month (disabled={isBtnPrevMonthDisabled}) {\nsvg/btn-prev-month-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-chevron-left) }\n}\nopal-select/month-select (size=s, value=['{shownMonth}']) {\n@repeat (class=opal-select__menu-content, for=month of constructor.i18n.months) {\nopal-select-option (value={$index}, text={month})\n}\n}\n' '\nopal-select/year-select (size=s, value=['{shownYear}']) {\n@repeat (class=opal-select__menu-content, for=year of years) {\nopal-select-option (value={year}, text={year})\n}\n}\nbutton/btn-next-month (disabled={isBtnNextMonthDisabled}) {\nsvg/btn-next-month-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-chevron-left) }\n}\n}\ndiv/body {\ndiv/week-days {\ndiv/week-days-row {\n@repeat (for=weekDay of weekDaysShort) {\nspan/week-day { '{weekDay}' }\n}\n}\n}\ndiv/days {\n@repeat (for=weekDays of days) {\ndiv/days-row {\n@repeat (for=day of weekDays) {\nspan/day (\nweek-day={day.weekDay},\ntoday={day.today},\nselected={day.selected},\nnot-in-current-month={day.notInCurrentMonth},\ndisabled={day.disabled},\ntabindex={day.tabIndex},\ndata-date={day.date}\n) { '{day.value}' }\n}\n}\n}\n}\n}\n}");

/***/ }),
/* 135 */
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
var gettext_1 = __webpack_require__(5);
var date_exists_1 = __webpack_require__(136);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(8);
__webpack_require__(137);
var template_nelm_1 = __webpack_require__(138);
function pad(num) {
    return (num < 10 ? '0' : '') + num;
}
var OpalDateInput = /** @class */ (function (_super) {
    __extends(OpalDateInput, _super);
    function OpalDateInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateExists = date_exists_1.dateExists;
        return _this;
    }
    OpalDateInput.prototype.isDateInRange = function (date) {
        var calendar = this.$('calendar');
        var match = date.match(/\d+/g);
        var day = +match[0];
        var month = +match[1] - 1;
        var year = +match[2];
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        var d = new Date(year, month, day);
        return d >= calendar.fromDate && d <= calendar.toDate;
    };
    OpalDateInput.prototype.elementAttached = function () {
        this.listenTo('text-input', 'change', this._onTextInputChange);
        this.listenTo(this.$('text-input').element, 'click', this._onTextInputElementClick);
        this.listenTo('calendar-menu', 'input-opened-change', this._onCalendarMenuInputOpenedChange);
    };
    OpalDateInput.prototype._onTextInputChange = function (evt) {
        if (this.$('input-validator').valid) {
            this.$('calendar').stringValue = evt.target.value;
        }
    };
    OpalDateInput.prototype._onTextInputElementClick = function () {
        this.$('calendar-menu').open();
    };
    OpalDateInput.prototype._onCalendarMenuInputOpenedChange = function (evt) {
        if (evt.data.value) {
            this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
        }
        else {
            this._documentFocusListening.stop();
            this._documentKeyDownListening.stop();
            this._documentClickListening.stop();
        }
    };
    OpalDateInput.prototype._onDocumentFocus = function (evt) {
        if (!isFocusable_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.$('calendar-menu').close();
        }
    };
    OpalDateInput.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 27 /* Esc */) {
            evt.preventDefault();
            this.$('calendar-menu').close();
        }
    };
    OpalDateInput.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.$('calendar-menu').close();
        }
    };
    Object.defineProperty(OpalDateInput.prototype, "value", {
        get: function () {
            return this.$('calendar').value;
        },
        enumerable: true,
        configurable: true
    });
    OpalDateInput.prototype.getISOValue = function (h, m, s, ms) {
        var date = this.value;
        if (!date) {
            return null;
        }
        date = new Date(date);
        if (h) {
            date.setHours(h);
        }
        if (m) {
            date.setMinutes(m);
        }
        if (s) {
            date.setSeconds(s);
        }
        if (ms) {
            date.setMilliseconds(ms);
        }
        return ('000' + date.getUTCFullYear()).slice(-4) + '-' +
            pad(date.getUTCMonth() + 1) + '-' +
            pad(date.getUTCDate()) + 'T' +
            pad(date.getUTCHours()) + ':' +
            pad(date.getUTCMinutes()) + ':' +
            pad(date.getUTCSeconds()) + '.' +
            ('00' + date.getUTCMilliseconds()).slice(-3) + 'Z';
    };
    OpalDateInput.prototype.validate = function () {
        return this.$('input-validator').validate();
    };
    OpalDateInput = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-date-input',
            input: {
                fromDate: String,
                toDate: String,
                value: String,
                placeholder: 'dd.mm.yyyy',
                mask: '99.99.9999',
                required: { default: false, readonly: true },
                popoverFrom: 'right'
            },
            i18n: {
                isRequiredField: gettext_1.getText.t('Поле обязательно для заполнения'),
                nonExistentDate: gettext_1.getText.t('Несуществующая дата'),
                invalidDateRange: gettext_1.getText.t('Дата вне допустимого диапазона')
            },
            template: template_nelm_1.default,
            events: {
                calendar: {
                    change: function (evt) {
                        this.$('calendar-menu').close();
                        var textInput = this.$('text-input');
                        textInput.value = evt.target.stringValue;
                        textInput.focus();
                        this.$('input-validator').validate();
                    }
                }
            }
        })
    ], OpalDateInput);
    return OpalDateInput;
}(rionite_1.Component));
exports.OpalDateInput = OpalDateInput;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function dateExists(date) {
    var match = date.match(/\d+/g);
    if (!match) {
        throw new SyntaxError('Date must be in format "(d)d.(m)m.(yy)yy"');
    }
    var day = +match[0];
    var month = +match[1] - 1;
    var year = +match[2];
    if (year < 100) {
        year += year < 50 ? 2000 : 1900;
    }
    var d = new Date(year, month, day);
    return day == d.getDate() && month == d.getMonth() && year == d.getFullYear();
}
exports.dateExists = dateExists;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-date-input{position:relative;display:inline-block;vertical-align:middle}.opal-date-input .opal-date-input__text-input{display:block}.opal-date-input .opal-date-input__calendar-menu{overflow:visible;padding:0;min-width:auto}.opal-date-input .opal-date-input__calendar{border:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nopal-input-validator/input-validator {\n@if-then (if=input.required) {\nopal-input-validator-rule/input-validator-rule-required (required, popover-from={input.popoverFrom}) {\n'{constructor.i18n.isRequiredField}'\n}\n}\nopal-input-validator-rule/input-validator-rule-date-exists (test={dateExists}, popover-from={input.popoverFrom}) {\n'{constructor.i18n.nonExistentDate}'\n}\nopal-input-validator-rule/input-validator-rule-date-in-range (\ntest={isDateInRange},\npopover-from={input.popoverFrom}\n) {\n'{constructor.i18n.invalidDateRange}'\n}\nopal-input-mask/input-mask (mask={input.mask}) {\nopal-text-input/text-input (\nclass=opal-input-validator__text-input opal-input-mask__text-input,\nvalue={input.value},\nplaceholder={input.placeholder},\nclearable\n) {\nsvg/text-input-control-icon (class=opal-text-input__control-icon, viewBox=0 0 32 32) {\nuse (xlink:href=#opal-components__icon-calendar)\n}\n}\n}\n}\nopal-dropdown/calendar-menu (auto-height=no) {\nopal-calendar/calendar (from-date={input.fromDate}, to-date={input.toDate}, value={input.value}, date-delimiter=.)\n}\n}");

/***/ }),
/* 139 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(140);
var OpalLoader = /** @class */ (function (_super) {
    __extends(OpalLoader, _super);
    function OpalLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalLoader = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-loader',
            input: {
                size: 'm',
                shown: false
            }
        })
    ], OpalLoader);
    return OpalLoader;
}(rionite_1.Component));
exports.OpalLoader = OpalLoader;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-loader{position:relative;display:none;margin:auto;width:38px;height:38px;border:15px solid transparent;background:rgba(255,255,255,.5)}.opal-loader::before,.opal-loader::after{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;width:100%;height:100%;border:3px solid #1b91f8;border-top-color:transparent;border-radius:50%;content:'';-webkit-animation:opal-loader-animation 1.2s infinite linear;animation:opal-loader-animation 1.2s infinite linear}.opal-loader::after{width:26px;height:26px;border-color:#f63159;border-bottom-color:transparent;-webkit-animation-direction:reverse;animation-direction:reverse}.opal-loader[size=s]{width:18px;height:18px;border-width:6px}.opal-loader[size=s]::before{border-width:2px}.opal-loader[size=s]::after{content:none}.opal-loader[shown]{display:block}@-webkit-keyframes opal-loader-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes opal-loader-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 141 */
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
var gettext_1 = __webpack_require__(5);
var mixin_1 = __webpack_require__(7);
var next_tick_1 = __webpack_require__(3);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(142);
var template_nelm_1 = __webpack_require__(143);
var defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name' });
var OpalLoadedList = /** @class */ (function (_super) {
    __extends(OpalLoadedList, _super);
    function OpalLoadedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataList = new cellx_1.ObservableList();
        _this._isScrollingInProcessing = false;
        _this._isLoadingCheckPlanned = false;
        _this.loading = false;
        _this._lastRequestedQuery = null;
        _this._lastLoadedQuery = null;
        return _this;
    }
    OpalLoadedList_1 = OpalLoadedList;
    Object.defineProperty(OpalLoadedList.prototype, "empty", {
        get: function () {
            return !this.dataList.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalLoadedList.prototype, "isLoaderShown", {
        get: function () {
            return this.total === undefined || this.dataList.length < this.total || this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalLoadedList.prototype, "isNothingFoundShown", {
        get: function () {
            return this.total === 0 && !this._isLoadingCheckPlanned && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    OpalLoadedList.prototype.initialize = function () {
        var input = this.input;
        this._dataListItemTextFieldName = input.dataListItemSchema.text ||
            this.constructor.defaultDataListItemSchema.text;
        if (!input.$specified.has('dataProvider')) {
            throw new TypeError('Input property "dataProvider" is required');
        }
        var dataProvider = input.dataProvider;
        if (!dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
        this.dataProvider = dataProvider;
    };
    OpalLoadedList.prototype.elementAttached = function () {
        this.listenTo(this, 'input-query-change', this._onInputQueryChange);
        this.listenTo(this.element, 'scroll', this._onElementScroll);
        if (this.input.preloading) {
            this._load();
        }
        else {
            this.checkLoading();
        }
    };
    OpalLoadedList.prototype._onInputQueryChange = function () {
        var _this = this;
        if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
        this.dataList.clear();
        this.total = undefined;
        if (this._isLoadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._isLoadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(function () {
            _this._isScrollingInProcessing = false;
            _this._isLoadingCheckPlanned = false;
            _this.checkLoading();
        }, 300);
    };
    OpalLoadedList.prototype._onElementScroll = function () {
        var _this = this;
        if (this._isScrollingInProcessing) {
            return;
        }
        this._isScrollingInProcessing = true;
        if (this._isLoadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._isLoadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(function () {
            _this._isScrollingInProcessing = false;
            _this._isLoadingCheckPlanned = false;
            _this.checkLoading();
        }, 150);
    };
    OpalLoadedList.prototype.checkLoading = function () {
        if (this.input.query === this._lastRequestedQuery &&
            (this.loading || this.total !== undefined && this.dataList.length == this.total)) {
            return;
        }
        var elRect = this.element.getBoundingClientRect();
        if (elRect.height && elRect.bottom > this.$('loader').element.getBoundingClientRect().top) {
            this._load();
        }
    };
    OpalLoadedList.prototype._load = function () {
        if (this.loading) {
            this._requestCallback.cancel();
        }
        var input = this.input;
        var infinite = this.dataProvider.getItems.length >= 2;
        var query = this._lastRequestedQuery = input.query;
        var args = [query];
        if (infinite) {
            args.unshift(input.count, this.dataList.length ?
                this.dataList.get(-1)[input.dataListItemSchema.value ||
                    this.constructor.defaultDataListItemSchema.value] :
                null);
        }
        this.loading = true;
        this.dataProvider.getItems.apply(this.dataProvider, args).then(this._requestCallback = this.registerCallback(function (data) {
            var _this = this;
            this.loading = false;
            var items = data.items;
            this.total = infinite && data.total !== undefined ? data.total : items.length;
            if (query === this._lastLoadedQuery) {
                this.dataList.addRange(items);
            }
            else {
                this.dataList.clear().addRange(items);
                this._lastLoadedQuery = query;
            }
            cellx_1.Cell.forceRelease();
            this.emit('loaded');
            next_tick_1.nextTick(function () {
                _this.checkLoading();
            });
        }));
    };
    OpalLoadedList.prototype._getListItemContext = function (context, content) {
        return mixin_1.mixin(Object.create(context), content.input.$context, ['$component']);
    };
    OpalLoadedList.defaultDataListItemSchema = defaultDataListItemSchema;
    __decorate([
        cellx_decorators_1.observable
    ], OpalLoadedList.prototype, "dataList", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalLoadedList.prototype, "total", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalLoadedList.prototype, "_isLoadingCheckPlanned", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalLoadedList.prototype, "loading", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalLoadedList.prototype, "empty", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalLoadedList.prototype, "isLoaderShown", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalLoadedList.prototype, "isNothingFoundShown", null);
    OpalLoadedList = OpalLoadedList_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-loaded-list',
            input: {
                dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
                dataProvider: { type: Object, readonly: true },
                count: 100,
                query: String,
                preloading: { default: false, readonly: true }
            },
            i18n: {
                nothingFound: gettext_1.getText.t('Ничего не найдено')
            },
            template: template_nelm_1.default
        })
    ], OpalLoadedList);
    return OpalLoadedList;
    var OpalLoadedList_1;
}(rionite_1.Component));
exports.OpalLoadedList = OpalLoadedList;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-loaded-list{position:relative;display:block;overflow-x:hidden;overflow-y:auto;height:500px}.opal-loaded-list .opal-loaded-list__list-item{display:block}.opal-loaded-list .opal-loaded-list__loader[align-center]{position:absolute;top:0;right:0;bottom:0;left:0}.opal-loaded-list .opal-loaded-list__nothing-found{-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.opal-loaded-list .opal-loaded-list__nothing-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-loaded-list .opal-loaded-list__nothing-found-message{display:inline-block;vertical-align:middle;opacity:.6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/list {\n@repeat (for=$item of dataList) {\nrt-content/list-item (clone, get-context={_getListItemContext}) {\n'{$item |key(_dataListItemTextFieldName) }'\n}\n}\n}\nopal-loader/loader (shown={isLoaderShown}, align-center={empty})\n@if-then (if=isNothingFoundShown) {\ndiv/nothing-found {\nspan/nothing-found-message {\n'{constructor.i18n.nothingFound}'\n}\n}\n}\n}");

/***/ }),
/* 144 */
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
var debounce_throttle_1 = __webpack_require__(145);
var gettext_1 = __webpack_require__(5);
var rionite_1 = __webpack_require__(0);
__webpack_require__(148);
var template_nelm_1 = __webpack_require__(149);
var OpalFilteredList = /** @class */ (function (_super) {
    __extends(OpalFilteredList, _super);
    function OpalFilteredList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalFilteredList.prototype.elementAttached = function () {
        var queryInput = this.$('query-input');
        if (queryInput) {
            this.listenTo(queryInput, 'input', debounce_throttle_1.debounce(150, this._onQueryInputInput));
            this.listenTo(queryInput, 'change', this._onQueryInputChange);
        }
    };
    OpalFilteredList.prototype._onQueryInputInput = function (evt) {
        this._setListQuery(evt.target.value);
    };
    OpalFilteredList.prototype._onQueryInputChange = function (evt) {
        this._setListQuery(evt.target.value);
    };
    OpalFilteredList.prototype._setListQuery = function (query) {
        this.$('list').input.query = query;
    };
    OpalFilteredList.prototype.focus = function () {
        var queryInput = this.$('query-input');
        if (queryInput) {
            queryInput.focus();
        }
    };
    OpalFilteredList = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-filtered-list',
            i18n: {
                queryInputPlaceholder: gettext_1.getText.t('Поиск')
            },
            template: template_nelm_1.default
        })
    ], OpalFilteredList);
    return OpalFilteredList;
}(rionite_1.Component));
exports.OpalFilteredList = OpalFilteredList;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var debounce_1 = __webpack_require__(146);
exports.debounce = debounce_1.debounce;
var throttle_1 = __webpack_require__(147);
exports.throttle = throttle_1.throttle;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function debounce(delay, immediate, callback) {
    if (typeof immediate == 'function') {
        callback = immediate;
        immediate = false;
    }
    var context;
    var args;
    var timestamp;
    var timeoutID;
    var lastExec = 0;
    var result;
    function later() {
        var now = Date.now();
        if (now - timestamp < delay) {
            timeoutID = setTimeout(later, delay - (now - timestamp));
        }
        else {
            timeoutID = null;
            lastExec = now;
            result = callback.apply(context, args);
            if (!timeoutID) {
                context = args = null;
            }
        }
    }
    var debounced = function debounced() {
        timestamp = Date.now();
        if (immediate && timestamp - lastExec >= delay) {
            lastExec = timestamp;
            if (!timeoutID) {
                result = callback.apply(this, arguments);
                return result;
            }
            result = callback.apply(context, args);
        }
        context = this;
        args = arguments;
        if (!timeoutID) {
            timeoutID = setTimeout(later, delay);
        }
        return result;
    };
    debounced.flush = function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
            timeoutID = null;
            lastExec = Date.now();
            result = callback.apply(context, args);
            if (!timeoutID) {
                context = args = null;
            }
        }
    };
    debounced.clear = function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
            timeoutID = null;
            context = args = null;
        }
    };
    return debounced;
}
exports.debounce = debounce;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function throttle(delay, noTrailing, callback) {
    if (typeof noTrailing == 'function') {
        callback = noTrailing;
        noTrailing = false;
    }
    var context;
    var args;
    var timestamp;
    var timeoutID;
    var lastExec = 0;
    var result;
    function later() {
        timeoutID = null;
        lastExec = Date.now();
        result = callback.apply(context, args);
        if (!timeoutID) {
            context = args = null;
        }
    }
    var throttled = function throttled() {
        timestamp = Date.now();
        if (timestamp - lastExec >= delay) {
            lastExec = timestamp;
            if (!timeoutID) {
                result = callback.apply(this, arguments);
                return result;
            }
            result = callback.apply(context, args);
        }
        if (noTrailing) {
            return result;
        }
        context = this;
        args = arguments;
        if (!timeoutID) {
            timeoutID = setTimeout(later, delay - (timestamp - lastExec));
        }
        return result;
    };
    throttled.flush = function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
            timeoutID = null;
            lastExec = Date.now();
            result = callback.apply(context, args);
            if (!timeoutID) {
                context = args = null;
            }
        }
    };
    throttled.clear = function () {
        if (timeoutID) {
            clearTimeout(timeoutID);
            timeoutID = null;
            context = args = null;
        }
    };
    return throttled;
}
exports.throttle = throttle;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-filtered-list{display:block}.opal-filtered-list .opal-filtered-list__query-input-container{display:block}.opal-filtered-list .opal-filtered-list__query-input{display:block;margin-bottom:15px;width:auto}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nrt-content (select=.opal-filtered-list__query-input-container) {\nrt-content/query-input-container (select=.opal-filtered-list__query-input) {\nopal-text-input/query-input (placeholder={constructor.i18n.queryInputPlaceholder}, clearable) {\nsvg/query-input-control-icon (class=opal-text-input__control-icon, viewBox=0 0 32 32) {\nuse (xlink:href=#opal-components__icon-search)\n}\n}\n}\n}\nrt-content/list-container (select=.opal-filtered-list__list)\n}");

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function closestComponent(component, componentClass) {
    var c = component;
    while (!(c instanceof componentClass) && (c = c.parentComponent)) { }
    return c;
}
exports.default = closestComponent;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tree-list{position:relative;display:block}.opal-tree-list .opal-tree-list__nothing-found{-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.opal-tree-list .opal-tree-list__nothing-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-tree-list .opal-tree-list__nothing-found-message{display:inline-block;vertical-align:middle;opacity:.6}.opal-tree-list .opal-tree-list__loader{position:absolute;top:0;right:0;bottom:0;left:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tree-list-item{display:block}.opal-tree-list-item .opal-tree-list-item__head{display:table}.opal-tree-list-item .opal-tree-list-item__btn-toggle-children{position:relative;display:table-cell;visibility:hidden;padding-right:6px;padding-left:2px;vertical-align:middle;text-align:center}.opal-tree-list-item .opal-tree-list-item__btn-toggle-children:focus{outline:none}body:not(._no-focus-highlight) .opal-tree-list-item .opal-tree-list-item__btn-toggle-children:focus::after{position:absolute;top:1px;right:4px;bottom:1px;left:0;border-radius:2px;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.opal-tree-list-item .opal-tree-list-item__btn-toggle-children[checked] .opal-tree-list-item__btn-toggle-children-icon{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}.opal-tree-list-item .opal-tree-list-item__btn-toggle-children-icon{display:block;width:14px;height:14px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);stroke-width:3px;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}.opal-tree-list-item .opal-tree-list-item__content-wrapper{display:table-cell;width:100%}.opal-tree-list-item .opal-tree-list-item__children{display:none;padding-left:24px}.opal-tree-list-item[opened]>.opal-tree-list-item__children{display:block}.opal-tree-list-item[nesting-level='0']{font-weight:700}.opal-tree-list-item[nesting-level='1']{font-weight:400}.opal-tree-list-item[has-children]>.opal-tree-list-item__head .opal-tree-list-item__btn-toggle-children{visibility:visible}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("div/head {\nopal-button/btn-toggle-children (view-type=clean, checkable, checked={input.opened}) {\nsvg/btn-toggle-children-icon (viewBox=0 0 32 32) { use (xlink:href=#opal-components__icon-chevron-bottom) }\n}\nspan/content-wrapper {\nrt-content/content (clone)\n}\n}\n@if-then (if=dataTreeListItem.children.length) {\ndiv/children {\n@repeat (for=$item of dataTreeListItem.children) {\nopal-tree-list-item/item (\ndata-tree-list={input.dataTreeList},\nfiltered-data-tree-list={input.filteredDataTreeList},\ndata-tree-list-item-value-field-name={_dataTreeListItemValueFieldName},\ndata-tree-list-item-text-field-name={_dataTreeListItemTextFieldName},\nview-model={viewModel},\nview-model-item-value-field-name={_viewModelItemValueFieldName},\nview-model-item-text-field-name={_viewModelItemTextFieldName},\nindexpath='[{input.indexpath},{$index}]',\nquery={input.query},\nopened={input.query},\nnesting-level={input.indexpath.length},\nhas-children='{$item.children.length |gt(0) }'\n) {\nrt-content (clone, get-context={_getListItemContext})\n}\n}\n}\n}");

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@if-then (if=dataTreeList) {\n@if-then (if=filteredDataTreeList.length) {\n@repeat (for=$item of filteredDataTreeList) {\nopal-tree-list-item/item (\ndata-tree-list={dataTreeList},\nfiltered-data-tree-list={filteredDataTreeList},\ndata-tree-list-item-value-field-name={_dataTreeListItemValueFieldName},\ndata-tree-list-item-text-field-name={_dataTreeListItemTextFieldName},\nview-model={viewModel},\nview-model-item-value-field-name={_viewModelItemValueFieldName},\nview-model-item-text-field-name={_viewModelItemTextFieldName},\nindexpath=[{$index}],\nquery={input.query},\nopened={input.query},\nnesting-level=0,\nhas-children='{$item.children.length |gt(0) }'\n) {\nrt-content (clone, get-context={_getListItemContext}) {\nopal-checkbox/selection-control (checked={$selected}, indeterminate={$indeterminate}) {\n'{$item |key(_dataTreeListItemTextFieldName) }'\n}\n}\n}\n}\n}\n@if-else (if=filteredDataTreeList.length) {\ndiv/nothing-found {\nspan/nothing-found-message {\n'Ничего не найдено'\n}\n}\n}\n}\n@if-else (if=dataTreeList) {\nopal-loader/loader (shown)\n}");

/***/ }),
/* 155 */
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
var gettext_1 = __webpack_require__(5);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(156);
var template_nelm_1 = __webpack_require__(157);
var defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });
var defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });
var OpalTagSelect = /** @class */ (function (_super) {
    __extends(OpalTagSelect, _super);
    function OpalTagSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalTagSelect.prototype, "value", {
        get: function () {
            return this.viewModel.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTagSelect.prototype, "isPlaceholderShown", {
        get: function () {
            return !!this.input.placeholder && !this.viewModel.length;
        },
        enumerable: true,
        configurable: true
    });
    OpalTagSelect.prototype.initialize = function () {
        var input = this.input;
        if (input.dataListKeypath || input.$specified.has('dataList')) {
            cellx_1.define(this, 'dataList', input.dataListKeypath ?
                new cellx_1.Cell(Function("return this." + input.dataListKeypath + ";"), {
                    context: this.ownerComponent || window
                }) :
                function () { return input.dataList; });
            this.dataProvider = null;
            this._dataListKeypathParam = 'dataList';
        }
        else {
            this.dataList = null;
            this.dataProvider = input.dataProvider;
            this._dataListKeypathParam = null;
        }
        var dataListItemSchema = input.dataListItemSchema;
        this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
        this.viewModel = input.viewModel || new cellx_1.ObservableList();
        var vmItemSchema = input.viewModelItemSchema;
        var defaultVMItemSchema = this.constructor.defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
    };
    OpalTagSelect.prototype.elementAttached = function () {
        this.listenTo(this, 'input-view-model-change', this._onInputViewModelChange);
        this.listenTo('control', 'click', this._onControlClick);
        this.listenTo('select', {
            input: this._onSelectInput,
            change: this._onSelectChange,
            '<opal-select-option>select': this._onSelectOptionSelect,
            '<opal-select-option>deselect': this._onSelectOptionDeselect
        });
    };
    OpalTagSelect.prototype._onInputViewModelChange = function (evt) {
        if (evt.data.value != this.viewModel) {
            throw new TypeError('Input property "viewModel" is readonly');
        }
    };
    OpalTagSelect.prototype._onControlClick = function (evt) {
        var select = this.$('select');
        var selectEl = select.element;
        var node = evt.target;
        if (node != selectEl) {
            var control = this.$('control');
            do {
                if (node == control) {
                    select.toggle();
                    break;
                }
                node = node.parentNode;
            } while (node != selectEl);
        }
    };
    OpalTagSelect.prototype._onSelectInput = function () {
        this.emit('input');
        this.$('select').close();
    };
    OpalTagSelect.prototype._onSelectChange = function () {
        this.emit('change');
    };
    // Закрываем в select/deselect а не в change,
    // тк. change на opal-select[multiple] генерируется только при закрытии.
    OpalTagSelect.prototype._onSelectOptionSelect = function () {
        this.$('select').close();
    };
    OpalTagSelect.prototype._onSelectOptionDeselect = function () {
        this.$('select').close();
    };
    OpalTagSelect.defaultDataListItemSchema = defaultDataListItemSchema;
    OpalTagSelect.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        cellx_decorators_1.observable
    ], OpalTagSelect.prototype, "viewModel", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalTagSelect.prototype, "value", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalTagSelect.prototype, "isPlaceholderShown", null);
    OpalTagSelect = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tag-select',
            input: {
                viewType: String,
                dataList: { type: Object },
                dataListKeypath: { type: String, readonly: true },
                dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
                // необязательный, так как может указываться на передаваемом opal-loaded-list
                dataProvider: { type: Object, readonly: true },
                addNewItem: { type: Object, readonly: true },
                value: eval,
                viewModel: { type: Object },
                viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
                placeholder: gettext_1.getText.t('Не выбрано'),
                popoverFrom: 'bottom',
                disabled: false
            },
            template: template_nelm_1.default,
            domEvents: {
                'btn-remove-tag': {
                    click: function (evt, btn) {
                        var vmItemValueFieldName = this._viewModelItemValueFieldName;
                        var tagValue = btn.dataset.tagValue;
                        this.viewModel.removeAt(this.viewModel.findIndex(function (tag) { return tag[vmItemValueFieldName] == tagValue; }));
                        this.emit('change');
                    }
                }
            }
        })
    ], OpalTagSelect);
    return OpalTagSelect;
}(rionite_1.Component));
exports.OpalTagSelect = OpalTagSelect;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tag-select{display:inline-block}.opal-tag-select .opal-tag-select__tag{position:relative;top:-1px;display:inline-block;margin:2px 38px 2px 0;padding:0 10px 0 16px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400}.opal-tag-select .opal-tag-select__tag[disabled]{margin-right:6px;padding-right:16px;border-top-right-radius:16px;border-bottom-right-radius:16px}.opal-tag-select .opal-tag-select__tag[disabled] .opal-tag-select__btn-remove-tag{display:none}.opal-tag-select .opal-tag-select__btn-remove-tag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-radius:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-tag-select .opal-tag-select__btn-remove-tag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.opal-tag-select .opal-tag-select__btn-remove-tag:hover{background:#5b7d9a}.opal-tag-select .opal-tag-select__btn-remove-tag:focus{outline:none}body:not(._no-focus-highlight) .opal-tag-select .opal-tag-select__btn-remove-tag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-tag-select .opal-tag-select__btn-remove-tag:active{background:#43484c}.opal-tag-select .opal-tag-select__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-tag-select .opal-tag-select__button{margin:1px 0}.opal-tag-select[view-type=primary] .opal-tag-select__tag{background:#0083f5}.opal-tag-select[view-type=primary] .opal-tag-select__btn-remove-tag{background:#0a67b8}.opal-tag-select[view-type=primary] .opal-tag-select__btn-remove-tag:hover{background:#0083f5}.opal-tag-select[view-type=primary] .opal-tag-select__btn-remove-tag:active{background:#0e4b81}.opal-tag-select[view-type=danger] .opal-tag-select__tag{background:#fa0f3e}.opal-tag-select[view-type=danger] .opal-tag-select__btn-remove-tag{background:#c70f34}.opal-tag-select[view-type=danger] .opal-tag-select__btn-remove-tag:hover{background:#fa0f3e}.opal-tag-select[view-type=danger] .opal-tag-select__btn-remove-tag:active{background:#90142c}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/tags {\n@repeat (for=tag of viewModel, track-by={_viewModelItemValueFieldName}) {\nspan/tag (\ndata-value='{tag |key(_viewModelItemValueFieldName) }',\ndisabled='{tag |key(_viewModelItemDisabledFieldName) }'\n) {\n'{tag |key(_viewModelItemTextFieldName) }'\nbutton/btn-remove-tag (data-tag-value='{tag |key(_viewModelItemValueFieldName) }')\n}\n}\n}\nspan/control {\n@if-then (if=isPlaceholderShown) {\nspan/placeholder { '{input.placeholder} ' }\n}\nopal-select/select (\nmultiple,\ndata-list-keypath={_dataListKeypathParam},\ndata-list-item-schema={input.dataListItemSchema |json },\nadd-new-item={input.addNewItem},\nvalue={input.value},\nview-model={viewModel},\nview-model-item-schema={input.viewModelItemSchema |json }\n) {\nopal-sign-button/button (class=opal-select__button, sign=plus, checkable)\nrt-content (class=opal-select__menu-container, select=.opal-select__menu) {\nopal-popover/menu (class=opal-select__menu, from={input.popoverFrom}, auto-closing) {\nrt-content (select='.opal-select__menu-content') {\n@if-then (if=_dataListKeypathParam) {\ndiv (class=opal-select__menu-content) {\n@if-then (if=dataList) {\n@repeat (for=item of dataList) {\nopal-select-option/data-list-select-option, select-option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nrt-content (\nclass=opal-select__new-item-input-container,\nselect='.opal-select__new-item-input'\n)\n}\n@if-else (if=dataList) {\nopal-loader/menu-loader (shown)\n}\n}\n}\n@if-else (if=_dataListKeypathParam) {\nopal-filtered-list/menu-filtered-list (\nclass=opal-select__menu-content opal-select__filtered-list\n) {\nrt-content (\nclass=opal-filtered-list__query-input-container,\nselect=.opal-filtered-list__query-input\n)\nopal-loaded-list/menu-loaded-list (\nclass=opal-select__loaded-list opal-filtered-list__list,\ndata-provider={dataProvider}\n) {\nopal-select-option/loaded-list-select-option, select-option (\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }'\n)\n}\n}\n}\n}\n}\n}\n}\n}\n}");

/***/ }),
/* 158 */
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
var cellx_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
var opal_select_1 = __webpack_require__(17);
var opal_tree_list_1 = __webpack_require__(28);
__webpack_require__(159);
var template_nelm_1 = __webpack_require__(160);
var OpalTreeSelect = /** @class */ (function (_super) {
    __extends(OpalTreeSelect, _super);
    function OpalTreeSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTreeSelect.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var input = this.input;
        if (input.dataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function("return this." + input.dataTreeListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!input.$specified.has('dataTreeList')) {
                throw new TypeError('Input property "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', function () { return input.dataTreeList; });
        }
    };
    OpalTreeSelect.prototype._onMenuSelectOptionSelect = function () {
    };
    OpalTreeSelect.prototype._onMenuSelectOptionDeselect = function () {
    };
    OpalTreeSelect.prototype._onMenuChange = function () {
    };
    OpalTreeSelect.prototype._updateOptions = function () {
    };
    OpalTreeSelect = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tree-select',
            input: {
                multiple: true,
                dataTreeList: { type: Object },
                dataTreeListKeypath: { type: String, readonly: true },
                dataTreeListItemSchema: { type: eval, default: opal_tree_list_1.OpalTreeList.defaultDataTreeListItemSchema, readonly: true },
                viewModel: { type: Object },
                viewModelItemSchema: { type: eval, default: opal_tree_list_1.OpalTreeList.defaultViewModelItemSchema, readonly: true },
                query: String
            },
            template: template_nelm_1.default,
            events: {
                'btn-close': {
                    click: function () {
                        this.$('menu').close();
                    }
                }
            }
        })
    ], OpalTreeSelect);
    return OpalTreeSelect;
}(opal_select_1.OpalSelect));
exports.OpalTreeSelect = OpalTreeSelect;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tree-select.opal-select .opal-modal__window{-webkit-box-sizing:border-box;box-sizing:border-box;width:80%}.opal-tree-select.opal-select .opal-tree-select__tree-list{overflow:auto;height:410px}.opal-tree-select.opal-select .opal-tree-select__footer{padding-top:10px}.opal-tree-select.opal-select .opal-tree-select__btn-close{float:right}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("opal-modal/menu {\nopal-filtered-list/filtered-list {\nopal-tree-list/tree-list (\nclass=opal-filtered-list__list,\ndata-tree-list={dataTreeList},\ndata-tree-list-item-schema={input.dataTreeListItemSchema},\nview-model={viewModel},\nview-model-item-schema={input.viewModelItemSchema},\nquery={input.query}\n) {\nopal-select-option/option (class=opal-tree-list__selection-control, text={$item.name}, selected={$selected})\n}\n}\ndiv/footer {\nopal-button/btn-close {\n'Готово'\n}\n}\n}");

/***/ }),
/* 161 */
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
var gettext_1 = __webpack_require__(5);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(8);
__webpack_require__(162);
var template_nelm_1 = __webpack_require__(163);
function toComparable(str) {
    return str.replace(/\s+/g, ' ').toLowerCase();
}
var defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });
var OpalAutosuggest = /** @class */ (function (_super) {
    __extends(OpalAutosuggest, _super);
    function OpalAutosuggest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataList = new cellx_1.ObservableList();
        _this._isNotInputConfirmed = false;
        _this._isLoadingPlanned = false;
        _this.loading = false;
        return _this;
    }
    OpalAutosuggest_1 = OpalAutosuggest;
    Object.defineProperty(OpalAutosuggest.prototype, "isLoaderShown", {
        get: function () {
            return this._isLoadingPlanned || this.loading;
        },
        enumerable: true,
        configurable: true
    });
    OpalAutosuggest.prototype.initialize = function () {
        var input = this.input;
        var dataListItemSchema = input.dataListItemSchema;
        var defaultDataListItemSchema = this.constructor.defaultDataListItemSchema;
        this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        if (!input.$specified.has('dataProvider')) {
            throw new TypeError('Input property "dataProvider" is required');
        }
        var dataProvider = input.dataProvider;
        if (!dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
        this.dataProvider = dataProvider;
        this.value = input.value;
    };
    OpalAutosuggest.prototype.elementAttached = function () {
        this.listenTo(this, 'input-value-change', this._onInputValueChange);
        this.listenTo('text-input', {
            focus: this._onTextInputFocus,
            blur: this._onTextInputBlur,
            input: this._onTextInputInput,
            change: this._onTextInputChange
        });
        this.listenTo(this.$('text-input').textField, 'click', this._onTextFieldClick);
        this.listenTo('menu', 'input-opened-change', this._onMenuInputOpenedChange);
        this.listenTo(this.$('menu').element, 'mouseover', this._onMenuElementMouseOver);
        this.listenTo(this.dataList, 'change', this._onDataListChange);
        this.listenTo(this, 'change:isLoaderShown', this._onIsLoaderShownChange);
    };
    OpalAutosuggest.prototype.ready = function () {
        if (this.value) {
            this.$('text-input').value = this.value[this._dataListItemTextFieldName];
        }
    };
    OpalAutosuggest.prototype._onInputValueChange = function (evt) {
        var item = evt.data.value;
        this._clearDataList();
        this.value = item;
        this.$('text-input').value = item ? item[this._dataListItemTextFieldName] : '';
    };
    OpalAutosuggest.prototype._onTextInputFocus = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onTextInputBlur = function () {
        this._cancelLoading();
        // Нужно для следующего случая:
        // 1. выбираем что-то;
        // 2. изменяем запрос так чтобы ничего не нашлось;
        // 3. убираем фокус.
        if (!this.$('menu').input.opened) {
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._onTextInputInput = function (evt) {
        var _this = this;
        this._isNotInputConfirmed = true;
        this._clearDataList();
        if ((evt.target.value || '').length >= this.input.minQueryLength) {
            this._isLoadingPlanned = true;
            this._loadingTimeout = this.setTimeout(function () {
                _this._isLoadingPlanned = false;
                _this._load();
            }, 300);
        }
    };
    OpalAutosuggest.prototype._onTextInputChange = function (evt) {
        if (!evt.target.value) {
            this._clearDataList();
            if (this.value) {
                this.value = null;
                this.emit('change');
            }
        }
    };
    OpalAutosuggest.prototype._onTextFieldClick = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onMenuInputOpenedChange = function (evt) {
        if (evt.data.value) {
            this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
            this._documentListening = this.listenTo(document, {
                keydown: this._onDocumentKeyDown,
                click: this._onDocumentClick
            });
        }
        else {
            this._documentFocusListening.stop();
            this._documentListening.stop();
        }
    };
    OpalAutosuggest.prototype._onMenuElementMouseOver = function (evt) {
        var menu = this.$('menu').element;
        var el = evt.target;
        for (; !el.classList.contains('opal-autosuggest__list-item'); el = el.parentNode) {
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
    OpalAutosuggest.prototype._onDataListChange = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onIsLoaderShownChange = function (evt) {
        this.$('text-input').input.loading = evt.data.value;
    };
    OpalAutosuggest.prototype._onDocumentFocus = function (evt) {
        if (!isFocusable_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.closeMenu();
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._onDocumentKeyDown = function (evt) {
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
                    this._clearDataList();
                    this._selectItem((_a = {},
                        _a[this._dataListItemValueFieldName] = focusedListItemDataSet.value,
                        _a[this._dataListItemTextFieldName] = focusedListItemDataSet.text,
                        _a));
                }
                break;
            }
            case 27 /* Esc */: {
                evt.preventDefault();
                this.closeMenu();
                this._selectItem();
                break;
            }
        }
        var _a;
    };
    OpalAutosuggest.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.closeMenu();
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._load = function () {
        this.loading = true;
        var args = [this.$('text-input').value];
        if (this.dataProvider.getItems.length >= 2) {
            args.unshift(this.input.count);
        }
        this.dataProvider.getItems.apply(this.dataProvider, args).then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
    };
    OpalAutosuggest.prototype._itemsRequestCallback = function (data) {
        this.loading = false;
        var items = data.items;
        if (items.length) {
            this.dataList.addRange(items);
            var focusedListItem = this.$('list-item');
            this._focusedListItem = focusedListItem;
            focusedListItem.setAttribute('focused', '');
        }
        else if (this.input.openMenuOnNothingFound) {
            this.openMenu(true);
        }
    };
    OpalAutosuggest.prototype._cancelLoading = function () {
        if (this._isLoadingPlanned) {
            this._isLoadingPlanned = false;
            this._loadingTimeout.clear();
        }
        else if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
    };
    OpalAutosuggest.prototype.openMenu = function (force) {
        if (force || this.dataList.length) {
            this.$('menu').open();
        }
        return this;
    };
    OpalAutosuggest.prototype.closeMenu = function () {
        this.$('menu').close();
        return this;
    };
    OpalAutosuggest.prototype._selectItem = function (item) {
        var _this = this;
        if (item === undefined) {
            if (this._isNotInputConfirmed) {
                var query_1 = this.$('text-input').value;
                if (query_1) {
                    query_1 = toComparable(query_1);
                    item = this.dataList.find(function (item) { return toComparable(item[_this._dataListItemTextFieldName]) == query_1; });
                    if (item && this.dataList.length > 1) {
                        this._clearDataList();
                    }
                }
                this._selectItem(item || null);
            }
        }
        else {
            if (item) {
                this._isNotInputConfirmed = false;
                if (this.value &&
                    this.value[this._dataListItemValueFieldName] == item[this._dataListItemValueFieldName]) {
                    return;
                }
            }
            else if (!this.value) {
                return;
            }
            this.value = item;
            this.emit('change');
        }
    };
    OpalAutosuggest.prototype.clear = function () {
        this._clearDataList();
        if (this.value) {
            this.value = null;
        }
        this.$('text-input').clear();
    };
    OpalAutosuggest.prototype._clearDataList = function () {
        this._cancelLoading();
        this.closeMenu();
        this.dataList.clear();
        this._focusedListItem = null;
    };
    OpalAutosuggest.defaultDataListItemSchema = defaultDataListItemSchema;
    __decorate([
        cellx_decorators_1.observable
    ], OpalAutosuggest.prototype, "dataList", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalAutosuggest.prototype, "value", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalAutosuggest.prototype, "_isLoadingPlanned", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalAutosuggest.prototype, "loading", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalAutosuggest.prototype, "isLoaderShown", null);
    OpalAutosuggest = OpalAutosuggest_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-autosuggest',
            input: {
                dataProvider: { type: Object, readonly: true },
                dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
                value: eval,
                minQueryLength: 3,
                count: 5,
                openMenuOnNothingFound: false
            },
            i18n: {
                textInputPlaceholder: gettext_1.getText.t('Начните вводить для поиска'),
                nothingFound: gettext_1.getText.t('Ничего не найдено')
            },
            template: template_nelm_1.default,
            domEvents: {
                'list-item': {
                    click: function (_, listItem) {
                        var textInput = this.$('text-input');
                        var listItemDataSet = listItem.dataset;
                        textInput.value = listItemDataSet.text;
                        textInput.focus();
                        this._clearDataList();
                        this._selectItem((_a = {},
                            _a[this._dataListItemValueFieldName] = listItemDataSet.value,
                            _a[this._dataListItemTextFieldName] = listItemDataSet.text,
                            _a));
                        var _a;
                    }
                }
            }
        })
    ], OpalAutosuggest);
    return OpalAutosuggest;
    var OpalAutosuggest_1;
}(rionite_1.Component));
exports.OpalAutosuggest = OpalAutosuggest;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-autosuggest{position:relative;display:inline-block;vertical-align:middle}.opal-autosuggest .opal-autosuggest__text-input{display:block}.opal-autosuggest .opal-autosuggest__list-item{position:relative;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-autosuggest .opal-autosuggest__list-item:hover,.opal-autosuggest .opal-autosuggest__list-item[focused]{background:#e6e6e6}.opal-autosuggest .opal-autosuggest__list-item:active{background:#ccc}.opal-autosuggest .opal-autosuggest__nothing-found-message{display:none;padding:10px;text-align:center;white-space:nowrap;opacity:.6}.opal-autosuggest .opal-autosuggest__nothing-found-message[shown]{display:block}.opal-input-validator .opal-autosuggest{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nrt-content (select=.opal-autosuggest__text-input) {\nopal-text-input/text-input (\nvalue='{input.value |key(_dataListItemTextFieldName) }',\nplaceholder={constructor.i18n.textInputPlaceholder},\nclearable\n) {\nsvg/text-input-control-icon (class=opal-text-input__control-icon, viewBox=0 0 32 32) {\nuse (xlink:href=#opal-components__icon-search)\n}\n}\n}\nopal-dropdown/menu {\ndiv/list {\n@repeat (for=item of dataList) {\ndiv/list-item (\ndata-value='{item |key(_dataListItemValueFieldName) }',\ndata-text='{item |key(_dataListItemTextFieldName) }'\n) {\n'{item |key(_dataListItemTextFieldName) }'\n}\n}\n}\nspan/nothing-found-message (shown={dataList.length |not }) {\n'{constructor.i18n.nothingFound}'\n}\n}\n}");

/***/ }),
/* 164 */
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
var next_uid_1 = __webpack_require__(15);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(165);
var opal_multirow_row_1 = __webpack_require__(166);
exports.OpalMultirowRow = opal_multirow_row_1.OpalMultirowRow;
var template_nelm_1 = __webpack_require__(169);
var filter = Array.prototype.filter;
var OpalMultirow = /** @class */ (function (_super) {
    __extends(OpalMultirow, _super);
    function OpalMultirow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._presetRowCount = 0;
        _this._newRows = new cellx_1.ObservableList();
        return _this;
    }
    OpalMultirow.prototype._notHaveNewRows = function () {
        return !this._newRows.length;
    };
    OpalMultirow.prototype._notSingleRow = function () {
        return this._presetRowCount + this._newRows.length != 1;
    };
    OpalMultirow.prototype.ready = function () {
        var presetRowCount = this._presetRowCount = filter.call(this.element.getElementsByClassName('opal-multirow-row'), function (rowEl) { return rowEl.$component.input.preset; }).length;
        if (!presetRowCount) {
            this._newRows.add({ key: next_uid_1.nextUID() });
        }
    };
    OpalMultirow.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<opal-multirow-row>remove-row-click': this._onRemoveRowClick,
            '<opal-multirow-row>add-row-click': this._onAddRowClick
        });
    };
    OpalMultirow.prototype._onRemoveRowClick = function (evt) {
        var row = evt.target;
        if (row.input.preset) {
            this.$('preset-rows-container').element.removeChild(row.element);
            this._presetRowCount--;
        }
        else {
            var key_1 = row.parentComponent.element.dataset.key;
            this._newRows.removeAt(this._newRows.findIndex(function (row) { return row.key == key_1; }));
        }
        cellx_1.Cell.forceRelease();
        this.emit('remove-row');
        this.emit('change');
    };
    OpalMultirow.prototype._onAddRowClick = function () {
        this._newRows.add({ key: next_uid_1.nextUID() });
        cellx_1.Cell.forceRelease();
        this.emit('add-row');
        this.emit('change');
    };
    OpalMultirow.OpalMultirowRow = opal_multirow_row_1.OpalMultirowRow;
    __decorate([
        cellx_decorators_1.observable
    ], OpalMultirow.prototype, "_presetRowCount", void 0);
    __decorate([
        cellx_decorators_1.observable
    ], OpalMultirow.prototype, "_newRows", void 0);
    __decorate([
        cellx_decorators_1.computed
    ], OpalMultirow.prototype, "_notHaveNewRows", null);
    __decorate([
        cellx_decorators_1.computed
    ], OpalMultirow.prototype, "_notSingleRow", null);
    OpalMultirow = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-multirow',
            template: template_nelm_1.default
        })
    ], OpalMultirow);
    return OpalMultirow;
}(rionite_1.Component));
exports.OpalMultirow = OpalMultirow;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-multirow{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 166 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(167);
var template_nelm_1 = __webpack_require__(168);
var OpalMultirowRow = /** @class */ (function (_super) {
    __extends(OpalMultirowRow, _super);
    function OpalMultirowRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalMultirowRow = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-multirow-row',
            input: {
                preset: { default: false, readonly: true }
            },
            template: template_nelm_1.default,
            events: {
                'btn-remove-row': {
                    click: function () {
                        this.emit('remove-row-click');
                    }
                },
                'btn-add-row': {
                    click: function () {
                        this.emit('add-row-click');
                    }
                }
            }
        })
    ], OpalMultirowRow);
    return OpalMultirowRow;
}(rionite_1.Component));
exports.OpalMultirowRow = OpalMultirowRow;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-multirow-row{display:block;white-space:nowrap}.opal-multirow-row::after{display:table;clear:both;content:''}.opal-multirow-row .opal-multirow-row__content{display:inline-block;margin-bottom:20px;padding-right:6px}.opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow-row .opal-multirow-row__btn-add-row{position:relative;top:1px;display:none}.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__content,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__content{margin-bottom:0}.opal-multirow__preset-rows-container[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__new-rows[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__btn-add-row,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__btn-add-row{display:inline-block}.opal-multirow-row .opal-popover{white-space:normal}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nrt-content/content\n' '\nopal-sign-button/btn-remove-row (sign=minus)\n' '\nopal-sign-button/btn-add-row (sign=plus)\n}");

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nrt-content/preset-rows-container (\nselect='opal-multirow-row[preset], .opal-multirow__preset-rows',\nnot-have-new-rows={_notHaveNewRows},\nnot-single-row={_notSingleRow}\n)\ndiv/new-rows (not-single-row={_notSingleRow}) {\n@repeat (for=row of _newRows, track-by=key) {\nrt-content/new-row-container (select='opal-multirow-row:not([preset])', clone, data-key={row.key})\n}\n}\n}");

/***/ }),
/* 170 */
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
var escape_html_1 = __webpack_require__(14);
var hyphenize_1 = __webpack_require__(26);
var created_browser_history_1 = __webpack_require__(171);
var rionite_1 = __webpack_require__(0);
var escapeRegExp_1 = __webpack_require__(179);
__webpack_require__(180);
var opal_route_1 = __webpack_require__(181);
exports.OpalRoute = opal_route_1.OpalRoute;
var parsePath_1 = __webpack_require__(182);
var PathNodeType_1 = __webpack_require__(34);
var forEach = Array.prototype.forEach;
function isReadonlyProperty(propConfig) {
    return propConfig && typeof propConfig == 'object' &&
        (propConfig.type !== undefined || propConfig.default !== undefined) && propConfig.readonly;
}
function valueToAttributeValue(value) {
    return "" + (value === false ? 'no' : (value === true ? 'yes' : escape_html_1.escapeHTML(value)));
}
var OpalRouter = /** @class */ (function (_super) {
    __extends(OpalRouter, _super);
    function OpalRouter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._route = null;
        _this._state = null;
        _this._componentElement = null;
        return _this;
    }
    OpalRouter.prototype.initialize = function () {
        this._routes = [];
    };
    OpalRouter.prototype.ready = function () {
        var routes = this._routes;
        forEach.call(this.element.querySelectorAll('opal-route'), function (routeEl) {
            var path = routeEl.$component.input.path;
            var rePath = [];
            var props = [];
            (function processPath(path) {
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var node = path_1[_i];
                    switch (node.type) {
                        case PathNodeType_1.PathNodeType.SIMPLE: {
                            rePath.push(escapeRegExp_1.escapeRegExp(node.value).replace('\\*', '.*?'));
                            break;
                        }
                        case PathNodeType_1.PathNodeType.OPTIONAL: {
                            if (node.name) {
                                rePath.push('(');
                                props.push({ name: node.name, optional: true });
                            }
                            else {
                                rePath.push('(?:');
                            }
                            processPath(node.childNodes);
                            rePath.push(')?');
                            break;
                        }
                        case PathNodeType_1.PathNodeType.INSERT: {
                            rePath.push('([^\\/]+)');
                            props.push({ name: node.name, optional: false });
                            break;
                        }
                    }
                }
            })(parsePath_1.parsePath(path));
            rePath = rePath.join('');
            routes.push({
                path: path,
                rePath: RegExp("^" + rePath + (rePath.charAt(rePath.length - 1) == '\/' ? '?' : '\/?') + "$"),
                properties: props,
                componentName: routeEl.$component.input.component
            });
        });
    };
    OpalRouter.prototype.elementAttached = function () {
        var _this = this;
        this.listenTo(this, '<*>refresh-router', this._onRefreshRouter);
        this._update(location.hash);
        this._historyListening = {
            unlisten: created_browser_history_1.history.listen(function (location) {
                _this._onWindowPopState(location);
            })
        };
    };
    OpalRouter.prototype.elementDetached = function () {
        this._historyListening.unlisten();
        this._clear();
    };
    OpalRouter.prototype._onRefreshRouter = function () {
        this.refresh();
        return false;
    };
    OpalRouter.prototype._onWindowPopState = function (location) {
        this._update(location.hash);
    };
    OpalRouter.prototype._update = function (hash) {
        var path = hash.slice(1) || '/';
        var _loop_1 = function (route) {
            var match = path.match(route.rePath);
            if (!match) {
                return "continue";
            }
            var state = route.properties.reduce(function (state, prop, index) {
                if (prop.optional) {
                    state[prop.name] = !!match[index + 1];
                }
                else {
                    var value = match[index + 1];
                    state[prop.name] = value && decodeURIComponent(value);
                }
                return state;
            }, Object.create(null));
            if (route === this_1._route) {
                var prevState_1 = this_1._state;
                var stateKeys = Object.keys(state);
                if (stateKeys.length == Object.keys(prevState_1).length &&
                    stateKeys.every(function (name) { return state[name] === prevState_1[name]; })) {
                    return { value: void 0 };
                }
                var componentEl_1 = this_1._componentElement;
                var inputConfig = componentEl_1.$component.constructor.input;
                var attrs = componentEl_1.attributes;
                var writable = true;
                if (inputConfig) {
                    for (var i = attrs.length; i;) {
                        var name_1 = attrs.item(--i).name;
                        if (name_1 != 'class' && !(name_1 in state) && isReadonlyProperty(inputConfig[name_1])) {
                            writable = false;
                            break;
                        }
                    }
                    if (writable) {
                        for (var name_2 in state) {
                            if (componentEl_1.getAttribute(hyphenize_1.hyphenize(name_2, true)) !==
                                valueToAttributeValue(state[name_2]) && isReadonlyProperty(inputConfig[name_2])) {
                                writable = false;
                                break;
                            }
                        }
                    }
                }
                if (writable) {
                    for (var i = attrs.length; i;) {
                        var name_3 = attrs.item(--i).name;
                        if (name_3 != 'class' && !(name_3 in state)) {
                            componentEl_1.removeAttribute(name_3);
                        }
                    }
                    this_1._state = state;
                    this_1._applyState();
                    if (this_1.input.scrollTopOnChange) {
                        document.body.scrollTop = 0;
                    }
                    this_1.emit('change');
                    return { value: void 0 };
                }
            }
            if (this_1._componentElement) {
                this_1.element.removeChild(this_1._componentElement);
            }
            this_1._route = route;
            this_1._state = state;
            var componentEl = this_1._componentElement = document.createElement(route.componentName);
            this_1._applyState();
            componentEl.$component.ownerComponent = this_1;
            this_1.element.appendChild(componentEl);
            if (this_1.input.scrollTopOnChange || this_1.input.scrollTopOnChangeComponent) {
                document.body.scrollTop = 0;
            }
            this_1.emit('change');
            return { value: void 0 };
        };
        var this_1 = this;
        for (var _i = 0, _a = this._routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var state_1 = _loop_1(route);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (this._route) {
            this.emit('change');
            this._clear();
        }
    };
    OpalRouter.prototype._applyState = function () {
        var state = this._state;
        var componentEl = this._componentElement;
        for (var name_4 in state) {
            componentEl.setAttribute(hyphenize_1.hyphenize(name_4, true), valueToAttributeValue(state[name_4]));
        }
    };
    OpalRouter.prototype._clear = function () {
        if (this._route) {
            this._route = null;
            this._state = null;
            this.element.removeChild(this._componentElement);
            this._componentElement = null;
        }
    };
    OpalRouter.prototype.refresh = function () {
        var route = this._route;
        if (route) {
            this.element.removeChild(this._componentElement);
            var componentEl = this._componentElement = document.createElement(route.componentName);
            this._applyState();
            componentEl.$component.ownerComponent = this;
            this.element.appendChild(componentEl);
            if (this.input.scrollTopOnChange || this.input.scrollTopOnChangeComponent) {
                document.body.scrollTop = 0;
            }
        }
    };
    OpalRouter.OpalRoute = opal_route_1.OpalRoute;
    OpalRouter = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-router',
            input: {
                scrollTopOnChange: true,
                scrollTopOnChangeComponent: true
            }
        })
    ], OpalRouter);
    return OpalRouter;
}(rionite_1.Component));
exports.OpalRouter = OpalRouter;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createBrowserHistory_1 = __webpack_require__(172);
var history = createBrowserHistory_1.default();
exports.history = history;
exports.default = history;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(32);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(173);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(174);

var _PathUtils = __webpack_require__(33);

var _createTransitionManager = __webpack_require__(177);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (undefined !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(175);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(176);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(32);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.escapeRegExp = escapeRegExp;


/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-router{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 181 */
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
var rionite_1 = __webpack_require__(0);
var OpalRoute = /** @class */ (function (_super) {
    __extends(OpalRoute, _super);
    function OpalRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRoute = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-route',
            input: {
                path: { type: String, required: true, readonly: true },
                component: { type: String, required: true, readonly: true }
            }
        })
    ], OpalRoute);
    return OpalRoute;
}(rionite_1.Component));
exports.OpalRoute = OpalRoute;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType_1 = __webpack_require__(34);
var reName = /[a-z][0-9a-z]*/i;
function parsePath(path) {
    var ctx = PathNodeType_1.PathNodeType.SIMPLE;
    var at = 0;
    var chr = path[0];
    return readPath();
    function next(c) {
        if (c && c != chr) {
            throw {
                name: 'SyntaxError',
                message: "Expected \"" + c + "\" instead of \"" + chr + "\"",
                at: at,
                path: path
            };
        }
        chr = path[++at];
        return chr;
    }
    function readPath() {
        var path = [];
        while (chr) {
            if (chr == '(') {
                path.push(readOptionalNode());
            }
            else if (chr == '[') {
                path.push(readInsert());
            }
            else {
                path.push(readSimpleNode());
            }
        }
        return path;
    }
    function readSimpleNode() {
        var value = chr;
        while (next()) {
            if (chr == '(' || chr == '[' || ctx == PathNodeType_1.PathNodeType.OPTIONAL && chr == ')') {
                break;
            }
            value += chr;
        }
        return {
            type: PathNodeType_1.PathNodeType.SIMPLE,
            value: value
        };
    }
    function readOptionalNode() {
        var optionalNodeAt = at;
        next('(');
        var name;
        if (chr == ':') {
            name = readOptionalNodeName();
        }
        var childNodes = [];
        var prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.OPTIONAL;
        while (chr) {
            if (chr == ')') {
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.OPTIONAL,
                    name: name || null,
                    childNodes: childNodes
                };
            }
            else if (chr == '(') {
                childNodes.push(readOptionalNode());
            }
            else if (chr == '[') {
                childNodes.push(readInsert());
            }
            else {
                childNodes.push(readSimpleNode());
            }
        }
        throw {
            name: 'SyntaxError',
            message: 'Missing ")" in compound statement',
            at: optionalNodeAt,
            path: path
        };
    }
    function readOptionalNodeName() {
        next(':');
        var optionalNodeNameAt = at;
        var name = '';
        while (chr) {
            if (chr == ':') {
                if (!reName.test(name) || name == 'class') {
                    throw {
                        name: 'SyntaxError',
                        message: "Invalid name \"" + name + "\"",
                        at: optionalNodeNameAt,
                        path: path
                    };
                }
                next();
                return name;
            }
            else {
                name += chr;
                next();
            }
        }
        throw {
            name: 'SyntaxError',
            message: 'Missing ":" in compound statement',
            at: optionalNodeNameAt,
            path: path
        };
    }
    function readInsert() {
        var insertAt = at;
        next('[');
        var name = '';
        var prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.INSERT;
        while (chr) {
            if (chr == ']') {
                if (!reName.test(name) || name == 'class') {
                    throw {
                        name: 'SyntaxError',
                        message: "Invalid name \"" + name + "\"",
                        at: insertAt + 1,
                        path: path
                    };
                }
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.INSERT,
                    name: name
                };
            }
            else {
                name += chr;
                next();
            }
        }
        throw {
            name: 'SyntaxError',
            message: 'Missing "]" in compound statement',
            at: insertAt,
            path: path
        };
    }
}
exports.parsePath = parsePath;


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("h1 { 'opal-button' }\np {\nopal-button { 'Button' } ' '\nopal-button (view-type=primary) { 'Button' } ' '\nopal-button (view-type=danger) { 'Button' } ' '\n}\np {\nopal-button (disabled) { 'Button' } ' '\nopal-button (view-type=primary, disabled) { 'Button' } ' '\nopal-button (view-type=danger, disabled) { 'Button' } ' '\n}\np {\nopal-button (size=s) { 'Button' } ' '\nopal-button (view-type=primary, size=s) { 'Button' } ' '\nopal-button (view-type=danger, size=s) { 'Button' } ' '\n}\np {\nopal-button (loading) { 'Button' } ' '\nopal-button (view-type=primary, loading) { 'Button' } ' '\nopal-button (view-type=danger, loading) { 'Button' } ' '\n}\np {\nopal-button (loading, disabled) { 'Button' } ' '\nopal-button (view-type=primary, loading, disabled) { 'Button' } ' '\nopal-button (view-type=danger, loading, disabled) { 'Button' } ' '\n}\nh1 { 'opal-sign-button' }\np {\nopal-sign-button (sign=plus) { 'Button' }\n}\np {\nopal-sign-button (sign=minus) { 'Button' }\n}\nh1 { 'opal-text-input' }\np {\nopal-text-input (value=Value, placeholder=Placeholder)\n}\np {\nopal-text-input (value=Value, placeholder=Placeholder, valid)\n}\np {\nopal-text-input (value=Value, placeholder=Placeholder, valid=no)\n}\np {\nopal-text-input (value=Value, disabled)\n}\np {\nopal-text-input (placeholder=Placeholder, disabled)\n}\np {\nopal-text-input (value=Value, placeholder=Placeholder, clearable)\n}\np {\nopal-text-input (value=Value, placeholder=Placeholder, loading)\n}\np {\nopal-text-input (multiline, placeholder=Placeholder)\n}\nh1 { 'opal-editable-text' }\np {\nopal-editable-text {\n'Editable text'\n}\n}\nh1 { 'opal-input-mask' }\np {\nopal-input-mask (mask=99/99/9999) {\nopal-text-input (class=opal-input-mask__text-input, placeholder=dd/mm/yyyy)\n}\n}\np {\nopal-input-mask (mask='+7 (999) 999-9999? доб. 9999') {\nopal-text-input (class=opal-input-mask__text-input, placeholder=Телефон)\n}\n}\np {\nopal-input-mask (mask=#ffffff) {\nopal-input-mask-definition (mask-char=f, regex=/[0-9a-f]/i)\nopal-text-input (class=opal-input-mask__text-input, placeholder=Цвет)\n}\n}\nh1 { 'opal-group' }\np {\nopal-group {\nopal-button { 'Button' }\nopal-button (view-type=primary) { 'Button' }\nopal-button (view-type=danger) { 'Button' }\n}\n}\np {\nopal-group {\nopal-button { 'Button' }\nopal-text-input (value=Value, placeholder=Placeholder)\nopal-button (view-type=primary) { 'Button' }\n}\n}\nh1 { 'opal-checkbox' }\np {\nopal-checkbox { 'Label' } ' '\nopal-checkbox (checked) { 'Label' } ' '\nopal-checkbox (indeterminate) { 'Label' }\nbr br\nopal-checkbox (disabled) { 'Label' } ' '\nopal-checkbox (checked, disabled) { 'Label' } ' '\nopal-checkbox (indeterminate, disabled) { 'Label' }\n}\nh1 { 'opal-radio-group' }\np {\nopal-radio-group {\nopal-radio-button { 'Label' } ' '\nopal-radio-button (checked) { 'Label' }\nbr br\nopal-radio-button (disabled) { 'Label' } ' '\nopal-radio-button (checked, disabled) { 'Label' }\n}\n}\nh1 { 'opal-switch' }\np {\nopal-switch { 'Label' } ' '\nopal-switch (checked) { 'Label' }\nbr br\nopal-switch (disabled) { 'Label' } ' '\nopal-switch (checked, disabled) { 'Label' }\n}\nh1 { 'opal-slider' }\np {\nopal-slider br\nopal-slider (min=-100, max=100, step=20, value=40) br\nopal-slider (range='[20, 80]')\n}\nh1 { 'opal-switch-menu' }\np {\nopal-switch-menu {\nopal-button (checkable, checked) { 'Option 1' }\nopal-button (checkable) { 'Option 2' }\nopal-button (checkable) { 'Option 3' }\n}\n}\nh1 { 'opal-tabs' }\np {\nopal-tabs {\nopal-tab (selected) { 'Foo' }\nopal-tab { 'Bar' }\nopal-tab { 'Baz' }\nopal-tab-panel { 'Hello Foo' }\nopal-tab-panel { 'Hello Bar' }\nopal-tab-panel { 'Hello Baz' }\n}\n}\nh1 { 'opal-popover' }\np {\ndiv (style=position: relative; margin: 80px 120px 160px; width: 40px; height: 40px; background: #000;) {\nopal-popover (auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=bottom, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=left, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=top, auto-direction=no, opened) { 'Popover' br 'Popover' }\n}\ndiv (style=position: relative; margin: 80px 120px 160px; width: 40px; height: 40px; background: #000;) {\nopal-popover (align=top, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=bottom, align=right, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=left, align=bottom, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=top, align=left, auto-direction=no, opened) { 'Popover' br 'Popover' }\n}\ndiv (style=position: relative; margin: 80px 120px; width: 40px; height: 40px; background: #000;) {\nopal-popover (align=bottom, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=bottom, align=left, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=left, align=top, auto-direction=no, opened) { 'Popover' br 'Popover' }\nopal-popover (from=top, align=right, auto-direction=no, opened) { 'Popover' br 'Popover' }\n}\n}\nh1 { 'opal-modal' }\np {\nopal-modal (id=modal1) { 'Modal' }\nopal-button (onclick='document.getElementById(\"modal1\").$component.open();') { 'Open' }\n}\nh1 { 'opal-notification' }\np {\nopal-notification (id=notification1) {\n'default'\n}\nopal-notification (id=notification2, view-type=primary, button-hide=no, timeout=5000) {\n'primary'\n}\nopal-notification (id=notification3, view-type=primary, button-hide=no, timeout=10000) {\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n'primary '\n}\nopal-notification (id=notification4, view-type=success) {\nsvg (class=opal-notification__icon, viewBox=0 0 32 32) {\nuse (xlink:href=#opal-components__icon-calendar)\n}\n'success'\n}\nopal-notification (id=notification5, view-type=success) {\nsvg (class=opal-notification__icon, viewBox=0 0 32 32) {\nuse (xlink:href=#opal-components__icon-calendar)\n}\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n'success '\n}\nopal-notification (id=notification6, view-type=danger) {\n'danger'\n}\nopal-button (onclick='document.getElementById(\"notification1\").$component.show();') { 'Show 1' } ' '\nopal-button (onclick='document.getElementById(\"notification2\").$component.show();') { 'Show 2' } ' '\nopal-button (onclick='document.getElementById(\"notification3\").$component.show();') { 'Show 3' } ' '\nopal-button (onclick='document.getElementById(\"notification4\").$component.show();') { 'Show 4' } ' '\nopal-button (onclick='document.getElementById(\"notification5\").$component.show();') { 'Show 5' } ' '\nopal-button (onclick='document.getElementById(\"notification6\").$component.show();') { 'Show 6' }\n}\nh1 { 'opal-select' }\np {\nopal-select (placeholder=Select) {\nopal-select-option (text=Option 1)\nopal-select-option (text=Option 2)\nopal-select-option (text=Option 3)\nopal-select-option (text='Option 4 (disabled)', disabled)\nopal-select-option (text=Option 5)\nopal-select-option (text='Option 6 (disabled)', disabled)\n}\n}\np {\nopal-select (multiple, placeholder=Select) {\nopal-select-option (text=Option 1, selected)\nopal-select-option (text=Option 2, selected)\nopal-select-option (text=Option 3)\nopal-select-option (text=Option 4)\nopal-select-option (text=Option 5)\n}\n}\np {\nopal-select (\nmultiple,\ndata-list={dataList1},\ndata-list-item-schema='{ value: \"id\", text: \"name\" }',\nview-model-item-schema='{ value: \"id\", text: \"name\" }',\nadd-new-item={addNewItem1},\nplaceholder=Select\n) {\nopal-text-input (class=opal-select__new-item-input)\n}\n}\np {\nopal-group {\nopal-select (placeholder=Select) {\nopal-popover (class=opal-select__menu, from=bottom, auto-closing) {\nopal-select-option (text=Option 1)\nopal-select-option (text=Option 2)\nopal-select-option (text=Option 3)\n}\n}\nopal-select (view-type=primary, placeholder=Select) {\nopal-popover (class=opal-select__menu, auto-closing) {\nopal-select-option (text=Option 1)\nopal-select-option (text=Option 2)\nopal-select-option (text=Option 3)\n}\n}\n}\n}\nh1 { 'opal-calendar' }\np {\nopal-calendar (from-date=today)\n}\nh1 { 'opal-date-input' }\np {\nopal-date-input\n}\np {\nopal-date-input (mask=99.99.9999, placeholder=dd.mm.yyyy, required)\n}\nh1 { 'opal-loader' }\np {\nopal-loader (shown)\nopal-loader (size=s, shown)\n}\nh1 { 'opal-filtered-list' }\np {\nopal-filtered-list {\nopal-loaded-list (class=opal-filtered-list__list, data-provider={dataProvider1}) {\n'{$item.name}'\n}\n}\n}\nh1 { 'opal-tree-list' }\np {\nopal-filtered-list {\nopal-tree-list (class=opal-filtered-list__list, data-tree-list={dataTreeList1}) {\nopal-checkbox (\nclass=opal-tree-list__selection-control,\nchecked={$selected},\nindeterminate={$indeterminate}\n) {\n'{$item.name}'\n}\n}\n}\n}\nh1 { 'opal-select + opal-loaded-list' }\np {\nopal-select {\nopal-dropdown (class=opal-select__menu, auto-height=no, auto-closing) {\nopal-filtered-list (class=opal-select__filtered-list) {\nopal-loaded-list (\nclass=opal-select__loaded-list opal-filtered-list__list,\ndata-provider={dataProvider1}\n) {\nopal-select-option (text={$item.name})\n}\n}\n}\n} ' '\nopal-select {\nopal-popover (class=opal-select__menu, from=bottom, auto-closing) {\nopal-loaded-list (class=opal-select__loaded-list, data-provider={dataProvider1}) {\nopal-select-option (text={$item.name})\n}\n}\n} ' '\nopal-select (multiple, view-model={viewModel1}, view-model-item-schema='{ value: \"id\", text: \"name\" }') {\nopal-popover (class=opal-select__menu, from=bottom, auto-closing) {\nopal-loaded-list (class=opal-select__loaded-list, data-provider={dataProvider1}) {\nopal-select-option (text={$item.name})\n}\n}\n} ' '\nopal-select {\nopal-popover (class=opal-select__menu, from=bottom, auto-closing) {\nopal-filtered-list (class=opal-select__filtered-list) {\nopal-loaded-list (\nclass=opal-select__loaded-list opal-filtered-list__list,\ndata-provider={dataProvider1}\n) {\nopal-select-option (text={$item.name})\n}\n}\n}\n} ' '\nopal-select (multiple) {\nopal-popover (class=opal-select__menu, from=bottom, auto-closing) {\nopal-filtered-list (class=opal-select__filtered-list) {\nopal-loaded-list (\nclass=opal-select__loaded-list opal-filtered-list__list,\ndata-provider={dataProvider1}\n) {\nopal-select-option (text={$item.name})\n}\n}\n}\n}\n}\nh1 { 'opal-multiselect' }\np {\nopal-multiselect (\ndata-provider={dataProvider1},\ndata-list-item-schema='{ value: \"id\", text: \"name\" }'\n)\n}\nh1 { 'opal-tree-select' }\np {\nopal-tree-select (data-tree-list={dataTreeList1})\n}\nh1 { 'opal-autosuggest' }\np {\nopal-autosuggest (data-provider={dataProvider2}, open-menu-on-nothing-found)\n}\nh1 { 'opal-tag-select' }\np {\nopal-tag-select (data-provider={dataProvider1}, placeholder='') br\nopal-tag-select (view-type=primary, data-provider={dataProvider1}) br\nopal-tag-select (\nview-type=danger,\ndata-provider={dataProvider1},\nadd-new-item={addNewItem1},\nview-model={viewModel1}\n) {\nopal-text-input (class=opal-select__new-item-input opal-filtered-list__query-input)\n}\n}\nh1 { 'opal-multirow' }\np {\nopal-multirow {\nopal-multirow-row (preset) {\nopal-text-input (value=Value, placeholder=Placeholder)\n}\nopal-multirow-row (preset) {\nopal-text-input (value=Value, placeholder=Placeholder, valid=no)\n}\nopal-multirow-row {\nopal-text-input (value=Value, placeholder=Placeholder, valid)\n}\n}\n}");

/***/ })
/******/ ]);
});