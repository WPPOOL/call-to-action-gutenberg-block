/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/Edit.js":
/*!****************************!*\
  !*** ./blocks/src/Edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleicon */ "./blocks/src/styleicon.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    ColorPalette = _wp$editor.ColorPalette;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$ctaComponents = wp.ctaComponents,
    CtaMedia = _wp$ctaComponents.CtaMedia,
    CtaLayoutSelector = _wp$ctaComponents.CtaLayoutSelector;


var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, props));
    _this.toggleTarget = _this.toggleTarget.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          clientId = _this$props.clientId,
          uniqueId = _this$props.attributes.uniqueId;

      var _client = clientId.substr(0, 6);

      if (!uniqueId) {
        setAttributes({
          uniqueId: _client
        });
      } else if (uniqueId && uniqueId != _client) {
        setAttributes({
          uniqueId: _client
        });
      }
    }
  }, {
    key: "toggleTarget",
    value: function toggleTarget() {
      var _this$props2 = this.props,
          setAttributes = _this$props2.setAttributes,
          btn_target = _this$props2.attributes.btn_target;
      setAttributes({
        btn_target: !btn_target
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          _this$props3$attribut = _this$props3.attributes,
          uniqueId = _this$props3$attribut.uniqueId,
          layout = _this$props3$attribut.layout,
          bgColor = _this$props3$attribut.bgColor,
          bgImage = _this$props3$attribut.bgImage,
          title = _this$props3$attribut.title,
          description = _this$props3$attribut.description,
          btn_label = _this$props3$attribut.btn_label,
          btn_url = _this$props3$attribut.btn_url,
          btn_target = _this$props3$attribut.btn_target,
          setAttributes = _this$props3.setAttributes;
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, {
        key: "inspector"
      }, wp.element.createElement(PanelBody, {
        title: __('Layout'),
        initialOpen: true
      }, wp.element.createElement(CtaLayoutSelector, {
        value: layout,
        onChange: function onChange(val) {
          return setAttributes({
            layout: val
          });
        },
        options: [{
          value: 1,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_1
        }, {
          value: 2,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_2
        }, {
          value: 3,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_3
        }, {
          value: 4,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_4
        }]
      })), wp.element.createElement(PanelBody, {
        title: __("Button"),
        initialOpen: false
      }, wp.element.createElement(TextControl, {
        label: __("Link"),
        value: btn_url,
        onChange: function onChange(value) {
          return setAttributes({
            btn_url: value
          });
        }
      }), wp.element.createElement(ToggleControl, {
        label: __("Open in new Window"),
        checked: btn_target,
        onChange: this.toggleTarget
      })), wp.element.createElement(PanelBody, {
        title: __("Wrapper"),
        initialOpen: false
      }, wp.element.createElement(ColorPalette, {
        label: __('Background Color'),
        className: "cta-field",
        value: bgColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            bgColor: colorValue
          });
        },
        allowReset: true
      }), wp.element.createElement(CtaMedia, {
        label: __('Image'),
        value: bgImage,
        onChange: function onChange(val) {
          return setAttributes({
            bgImage: val
          });
        }
      }))), wp.element.createElement("div", {
        className: "call_to_action_".concat(layout, " call_to_action_").concat(uniqueId),
        style: {
          backgroundImage: "url(".concat(bgImage.url != undefined ? bgImage.url : cta_gutenberg_locate.plugin + 'assets/images/cta_1.png', ")")
        }
      }, wp.element.createElement("div", {
        className: "cta_content"
      }, wp.element.createElement(RichText, {
        tagName: "h2",
        value: title,
        placeholder: "Call to action title",
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        }
      }), wp.element.createElement(RichText, {
        tagName: "p",
        value: description,
        placeholder: "Call to action description",
        onChange: function onChange(value) {
          return setAttributes({
            description: value
          });
        }
      }), wp.element.createElement(RichText, {
        tagName: "a",
        className: "ctagb-btn",
        value: btn_label,
        placeholder: "Button Label",
        onChange: function onChange(value) {
          return setAttributes({
            btn_label: value
          });
        }
      }))), layout == 1 && wp.element.createElement("style", null, "\n\t\t\t\t\t.call_to_action_".concat(uniqueId, ":after{\n\t\t\t\t\t\tbackground-color: ").concat(bgColor, "\n\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./blocks/src/attributes.js":
/*!**********************************!*\
  !*** ./blocks/src/attributes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  //basic
  uniqueId: {
    type: 'string',
    "default": ''
  },
  layout: {
    type: 'number',
    "default": 1
  },
  bgColor: {
    type: 'string',
    "default": '#7840FF'
  },
  bgImage: {
    type: 'object',
    "default": {
      url: cta_gutenberg_locate.plugin + 'assets/images/cta_1.png',
      alt: 'Call to action Image'
    }
  },
  //Content
  title: {
    type: 'string',
    "default": 'Flexi Addons For Elementor'
  },
  description: {
    type: 'string',
    "default": 'Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis vel mi facilisis posuere Nulla ultrices.'
  },
  btn_label: {
    type: 'string',
    "default": 'Free trial'
  },
  btn_url: {
    type: 'string',
    "default": '#'
  },
  btn_target: {
    type: 'boolean',
    "default": 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./blocks/src/blockicon.js":
/*!*********************************!*\
  !*** ./blocks/src/blockicon.js ***!
  \*********************************/
/*! exports provided: ClickIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickIcon", function() { return ClickIcon; });
var ClickIcon = function ClickIcon() {
  return wp.element.createElement("svg", {
    className: "dashicon",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "24",
    height: "24",
    viewBox: "0 0 512 512"
  }, wp.element.createElement("path", {
    d: "M512,183.778V50.213c0-27.618-22.469-50.087-50.087-50.087H50.087C22.469,0.126,0,22.595,0,50.213v133.565 c0,27.618,22.469,50.087,50.087,50.087h134.9l80.628,241.883c5.054,15.161,26.613,15.195,31.678,0l26.874-80.622L431.15,502.11 c13.019,13.018,34.203,13.018,47.223,0l23.612-23.611c13.017-13.019,13.017-34.203-0.001-47.222L395.001,324.293l80.622-26.874 c15.169-5.058,15.186-26.615,0-31.678L380,233.867h81.913C489.531,233.865,512,211.396,512,183.778z M417.546,281.579 l-58.733,19.577c-11.77,3.923-15.284,18.886-6.526,27.645l126.084,126.086l-23.612,23.611L328.675,352.412 c-8.777-8.779-23.724-5.23-27.645,6.526l-19.577,58.733l-68.047-204.139C217.508,214.9,402.306,276.499,417.546,281.579z M279.825,200.475v-0.001l-87.536-29.178c-13.016-4.343-25.465,8.081-21.119,21.119l2.687,8.061H50.087 c-9.206,0-16.696-7.49-16.696-16.696V50.214c0-9.206,7.49-16.696,16.696-16.696h411.826c9.206,0,16.696,7.49,16.696,16.696V183.78 c0,9.206-7.49,16.696-16.696,16.696H279.825z"
  }));
};

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockicon */ "./blocks/src/blockicon.js");
/* harmony import */ var _cta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cta-component */ "./blocks/src/cta-component.js");
/* harmony import */ var _cta_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cta_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./blocks/src/attributes.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./blocks/src/Edit.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText;
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var Button = wp.components.Button;






registerBlockType('cta-gutenberg/cta', {
  title: __('Call to action', 'cta-gutenberg'),
  icon: _blockicon__WEBPACK_IMPORTED_MODULE_0__["ClickIcon"],
  category: 'common',
  keywords: [__('call to action', 'cta-gutenberg'), __('wppool', 'cta-gutenberg')],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  supports: {
    align: true
  },
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        uniqueId = _props$attributes.uniqueId,
        layout = _props$attributes.layout,
        bgColor = _props$attributes.bgColor,
        bgImage = _props$attributes.bgImage,
        title = _props$attributes.title,
        description = _props$attributes.description,
        btn_label = _props$attributes.btn_label,
        btn_url = _props$attributes.btn_url,
        btn_target = _props$attributes.btn_target;
    return wp.element.createElement("div", {
      className: "call_to_action_".concat(layout, " call_to_action_").concat(uniqueId),
      style: {
        backgroundImage: "url(".concat(bgImage.url != undefined ? bgImage.url : cta_gutenberg_locate.plugin + 'assets/images/cta_1.png', ")")
      }
    }, wp.element.createElement("div", {
      className: "cta_content"
    }, wp.element.createElement("h2", null, title), wp.element.createElement("p", null, description), wp.element.createElement("a", {
      className: "ctagb-btn",
      target: btn_target ? '_blank' : '',
      rel: "noopener noreferrer",
      href: btn_url
    }, btn_label)), layout == 1 && wp.element.createElement("style", null, "\n\t\t\t\t\t\t.call_to_action_".concat(uniqueId, ":after{\n\t\t\t\t\t\t\tbackground-color: ").concat(bgColor, "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t")));
  }
});

/***/ }),

/***/ "./blocks/src/cta-component.js":
/*!*************************************!*\
  !*** ./blocks/src/cta-component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;
var MediaUpload = wp.blockEditor.MediaUpload;
var Dashicon = wp.components.Dashicon;

var CtaMedia = /*#__PURE__*/function (_Component) {
  _inherits(CtaMedia, _Component);

  function CtaMedia() {
    _classCallCheck(this, CtaMedia);

    return _possibleConstructorReturn(this, _getPrototypeOf(CtaMedia).apply(this, arguments));
  }

  _createClass(CtaMedia, [{
    key: "setSettings",
    value: function setSettings(media) {
      var onChange = this.props.onChange;

      if (media && media.url) {
        onChange({
          url: media.url,
          id: media.id,
          alt: media.alt
        });
      }
    }
  }, {
    key: "validateUrl",
    value: function validateUrl(url) {
      if (['wbm', 'jpg', 'jpeg', 'gif', 'png', 'svg'].indexOf(url.split('.').pop().toLowerCase()) != -1) {
        return url;
      } else {
        return cta_gutenberg_locate.plugin + 'assets/images/cta_1.png';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          className = _this$props.className;
      return wp.element.createElement("div", {
        className: "cta-field cta-field-media-selector ".concat(className ? className : '')
      }, label && wp.element.createElement("span", {
        className: "cta-field-label"
      }, label), wp.element.createElement("div", {
        className: "cta-field-content cta-field-media"
      }, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(val) {
          return _this.setSettings(val);
        },
        allowedTypes: ['image'],
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement("div", {
            className: "cta-single-img"
          }, value && value.url ? wp.element.createElement("span", {
            className: "cta-media-image-parent",
            onClick: open
          }, wp.element.createElement("img", {
            src: _this.validateUrl(value.url),
            alt: value.alt
          })) : wp.element.createElement("div", {
            onClick: open,
            className: "cta-placeholder-image"
          }, wp.element.createElement(Dashicon, {
            icon: "format-image"
          })));
        }
      })));
    }
  }]);

  return CtaMedia;
}(Component);

var CtaLayoutSelector = /*#__PURE__*/function (_Component2) {
  _inherits(CtaLayoutSelector, _Component2);

  function CtaLayoutSelector() {
    _classCallCheck(this, CtaLayoutSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(CtaLayoutSelector).apply(this, arguments));
  }

  _createClass(CtaLayoutSelector, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          label = _this$props2.label,
          options = _this$props2.options,
          _this$props2$columns = _this$props2.columns,
          columns = _this$props2$columns === void 0 ? 2 : _this$props2$columns,
          className = _this$props2.className,
          onChange = _this$props2.onChange;
      return wp.element.createElement("div", {
        className: "cta-field cta-field-layout ".concat(className ? className : '')
      }, label && wp.element.createElement("span", {
        className: "cta-field-label"
      }, label), wp.element.createElement("div", {
        className: "cta-field-content cta-field-layout-list"
      }, options.map(function (data, index) {
        return wp.element.createElement("div", {
          key: index,
          onClick: function onClick() {
            return onChange(data.value);
          },
          className: "".concat(value == data.value ? 'active' : '')
        }, data.styleIcon && wp.element.createElement("span", {
          className: "cta-layout-style cta-layout-style-".concat(data.value)
        }, data.styleIcon));
      })));
    }
  }]);

  return CtaLayoutSelector;
}(Component);

wp.ctaComponents = {
  CtaMedia: CtaMedia,
  CtaLayoutSelector: CtaLayoutSelector
};

/***/ }),

/***/ "./blocks/src/editor.scss":
/*!********************************!*\
  !*** ./blocks/src/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/style.scss":
/*!*******************************!*\
  !*** ./blocks/src/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/styleicon.js":
/*!*********************************!*\
  !*** ./blocks/src/styleicon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var styleicons = {};
styleicons.cta_layout_1 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_1"
}, wp.element.createElement("span", {
  className: "dashicons dashicons-format-image"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_2 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_2"
}, wp.element.createElement("span", {
  className: "dashicons dashicons-format-image"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_3 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_3"
}, wp.element.createElement("span", {
  className: "dashicons dashicons-format-image"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_4 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_4"
}, wp.element.createElement("span", {
  className: "dashicons dashicons-format-image"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
/* harmony default export */ __webpack_exports__["default"] = (styleicons);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9FZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NraWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2N0YS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZWljb24uanMiXSwibmFtZXMiOlsid3AiLCJlZGl0b3IiLCJJbnNwZWN0b3JDb250cm9scyIsIlJpY2hUZXh0IiwiQ29sb3JQYWxldHRlIiwiX18iLCJpMThuIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlRleHRDb250cm9sIiwiVG9nZ2xlQ29udHJvbCIsImN0YUNvbXBvbmVudHMiLCJDdGFNZWRpYSIsIkN0YUxheW91dFNlbGVjdG9yIiwiRWRpdCIsInByb3BzIiwidG9nZ2xlVGFyZ2V0IiwiYmluZCIsInNldEF0dHJpYnV0ZXMiLCJjbGllbnRJZCIsInVuaXF1ZUlkIiwiYXR0cmlidXRlcyIsIl9jbGllbnQiLCJzdWJzdHIiLCJidG5fdGFyZ2V0IiwibGF5b3V0IiwiYmdDb2xvciIsImJnSW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuX2xhYmVsIiwiYnRuX3VybCIsInZhbCIsInZhbHVlIiwic3R5bGVJY29uIiwic3R5bGVpY29ucyIsImN0YV9sYXlvdXRfMSIsImN0YV9sYXlvdXRfMiIsImN0YV9sYXlvdXRfMyIsImN0YV9sYXlvdXRfNCIsImNvbG9yVmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmwiLCJ1bmRlZmluZWQiLCJjdGFfZ3V0ZW5iZXJnX2xvY2F0ZSIsInBsdWdpbiIsInR5cGUiLCJhbHQiLCJDbGlja0ljb24iLCJNZWRpYVVwbG9hZCIsIlBsYWluVGV4dCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiQnV0dG9uIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJzdXBwb3J0cyIsImFsaWduIiwiZWRpdCIsInNhdmUiLCJibG9ja0VkaXRvciIsIkRhc2hpY29uIiwibWVkaWEiLCJvbkNoYW5nZSIsImlkIiwiaW5kZXhPZiIsInNwbGl0IiwicG9wIiwidG9Mb3dlckNhc2UiLCJsYWJlbCIsImNsYXNzTmFtZSIsInNldFNldHRpbmdzIiwib3BlbiIsInZhbGlkYXRlVXJsIiwib3B0aW9ucyIsImNvbHVtbnMiLCJtYXAiLCJkYXRhIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkNsRnNEQSxFQUFFLENBQUNDLE07SUFBakRDLGlCLGNBQUFBLGlCO0lBQW1CQyxRLGNBQUFBLFE7SUFBVUMsWSxjQUFBQSxZO0lBQzdCQyxFLEdBQU9MLEVBQUUsQ0FBQ00sSSxDQUFWRCxFO2tCQUN3QkwsRUFBRSxDQUFDTyxPO0lBQTNCQyxTLGVBQUFBLFM7SUFBV0MsUSxlQUFBQSxRO3FCQUMrQlQsRUFBRSxDQUFDVSxVO0lBQTdDQyxTLGtCQUFBQSxTO0lBQVdDLFcsa0JBQUFBLFc7SUFBYUMsYSxrQkFBQUEsYTt3QkFDUWIsRUFBRSxDQUFDYyxhO0lBQW5DQyxRLHFCQUFBQSxRO0lBQVVDLGlCLHFCQUFBQSxpQjtBQUNsQjs7SUFFTUMsSTs7O0FBQ0wsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEVBQU9BLEtBQVA7QUFDQSxVQUFLQyxZQUFMLEdBQXdCLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUF4QjtBQUZrQjtBQUdsQjs7Ozt3Q0FFbUI7QUFBQSx3QkFDaUQsS0FBS0YsS0FEdEQ7QUFBQSxVQUNMRyxhQURLLGVBQ0xBLGFBREs7QUFBQSxVQUNVQyxRQURWLGVBQ1VBLFFBRFY7QUFBQSxVQUNrQ0MsUUFEbEMsZUFDb0JDLFVBRHBCLENBQ2tDRCxRQURsQzs7QUFFYixVQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFoQjs7QUFDQSxVQUFJLENBQUNILFFBQUwsRUFBZTtBQUNYRixxQkFBYSxDQUFDO0FBQUVFLGtCQUFRLEVBQUVFO0FBQVosU0FBRCxDQUFiO0FBQ0gsT0FGRCxNQUVPLElBQUlGLFFBQVEsSUFBSUEsUUFBUSxJQUFJRSxPQUE1QixFQUFxQztBQUN4Q0oscUJBQWEsQ0FBQztBQUFFRSxrQkFBUSxFQUFFRTtBQUFaLFNBQUQsQ0FBYjtBQUNIO0FBQ1A7OzttQ0FFYztBQUFBLHlCQUN1QyxLQUFLUCxLQUQ1QztBQUFBLFVBQ1BHLGFBRE8sZ0JBQ1BBLGFBRE87QUFBQSxVQUNzQk0sVUFEdEIsZ0JBQ1FILFVBRFIsQ0FDc0JHLFVBRHRCO0FBRWROLG1CQUFhLENBQUU7QUFBRU0sa0JBQVUsRUFBRSxDQUFFQTtBQUFoQixPQUFGLENBQWI7QUFDQTs7OzZCQUVPO0FBQUEseUJBY0gsS0FBS1QsS0FkRjtBQUFBLCtDQUVOTSxVQUZNO0FBQUEsVUFHTEQsUUFISyx5QkFHTEEsUUFISztBQUFBLFVBSUxLLE1BSksseUJBSUxBLE1BSks7QUFBQSxVQUtMQyxPQUxLLHlCQUtMQSxPQUxLO0FBQUEsVUFNTEMsT0FOSyx5QkFNTEEsT0FOSztBQUFBLFVBT0xDLEtBUEsseUJBT0xBLEtBUEs7QUFBQSxVQVFMQyxXQVJLLHlCQVFMQSxXQVJLO0FBQUEsVUFTTEMsU0FUSyx5QkFTTEEsU0FUSztBQUFBLFVBVUxDLE9BVksseUJBVUxBLE9BVks7QUFBQSxVQVdMUCxVQVhLLHlCQVdMQSxVQVhLO0FBQUEsVUFhTk4sYUFiTSxnQkFhTkEsYUFiTTtBQWdCUCxhQUNDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxpQkFBRDtBQUFtQixXQUFHLEVBQUM7QUFBdkIsU0FDQyx5QkFBQyxTQUFEO0FBQVcsYUFBSyxFQUFFaEIsRUFBRSxDQUFDLFFBQUQsQ0FBcEI7QUFBZ0MsbUJBQVcsRUFBRTtBQUE3QyxTQUNDLHlCQUFDLGlCQUFEO0FBQW1CLGFBQUssRUFBRXVCLE1BQTFCO0FBQWtDLGdCQUFRLEVBQUUsa0JBQUFPLEdBQUc7QUFBQSxpQkFBSWQsYUFBYSxDQUFDO0FBQUVPLGtCQUFNLEVBQUVPO0FBQVYsV0FBRCxDQUFqQjtBQUFBLFNBQS9DO0FBQ0MsZUFBTyxFQUFFLENBQ1I7QUFBRUMsZUFBSyxFQUFFLENBQVQ7QUFBWUMsbUJBQVMsRUFBRUMsa0RBQVUsQ0FBQ0M7QUFBbEMsU0FEUSxFQUVSO0FBQUVILGVBQUssRUFBRSxDQUFUO0FBQVlDLG1CQUFTLEVBQUVDLGtEQUFVLENBQUNFO0FBQWxDLFNBRlEsRUFHUjtBQUFFSixlQUFLLEVBQUUsQ0FBVDtBQUFZQyxtQkFBUyxFQUFFQyxrREFBVSxDQUFDRztBQUFsQyxTQUhRLEVBSVI7QUFBRUwsZUFBSyxFQUFFLENBQVQ7QUFBWUMsbUJBQVMsRUFBRUMsa0RBQVUsQ0FBQ0k7QUFBbEMsU0FKUTtBQURWLFFBREQsQ0FERCxFQVdDLHlCQUFDLFNBQUQ7QUFBVyxhQUFLLEVBQUdyQyxFQUFFLENBQUUsUUFBRixDQUFyQjtBQUFvQyxtQkFBVyxFQUFHO0FBQWxELFNBQ0MseUJBQUMsV0FBRDtBQUNDLGFBQUssRUFBSUEsRUFBRSxDQUFFLE1BQUYsQ0FEWjtBQUVDLGFBQUssRUFBSTZCLE9BRlY7QUFHQyxnQkFBUSxFQUFHLGtCQUFBRSxLQUFLO0FBQUEsaUJBQUlmLGFBQWEsQ0FBRTtBQUFFYSxtQkFBTyxFQUFFRTtBQUFYLFdBQUYsQ0FBakI7QUFBQTtBQUhqQixRQURELEVBTUMseUJBQUMsYUFBRDtBQUNDLGFBQUssRUFBRy9CLEVBQUUsQ0FBRSxvQkFBRixDQURYO0FBRUMsZUFBTyxFQUFHc0IsVUFGWDtBQUdDLGdCQUFRLEVBQUcsS0FBS1I7QUFIakIsUUFORCxDQVhELEVBdUJDLHlCQUFDLFNBQUQ7QUFBVyxhQUFLLEVBQUdkLEVBQUUsQ0FBRSxTQUFGLENBQXJCO0FBQXFDLG1CQUFXLEVBQUc7QUFBbkQsU0FDQyx5QkFBQyxZQUFEO0FBQ0MsYUFBSyxFQUFHQSxFQUFFLENBQUMsa0JBQUQsQ0FEWDtBQUVDLGlCQUFTLEVBQUMsV0FGWDtBQUdDLGFBQUssRUFBR3dCLE9BSFQ7QUFJQyxnQkFBUSxFQUFHLGtCQUFFYyxVQUFGO0FBQUEsaUJBQWtCdEIsYUFBYSxDQUFFO0FBQUVRLG1CQUFPLEVBQUVjO0FBQVgsV0FBRixDQUEvQjtBQUFBLFNBSlo7QUFLQyxrQkFBVTtBQUxYLFFBREQsRUFRQyx5QkFBQyxRQUFEO0FBQ0MsYUFBSyxFQUFFdEMsRUFBRSxDQUFDLE9BQUQsQ0FEVjtBQUVDLGFBQUssRUFBRXlCLE9BRlI7QUFHQyxnQkFBUSxFQUFFLGtCQUFBSyxHQUFHO0FBQUEsaUJBQUlkLGFBQWEsQ0FBQztBQUFFUyxtQkFBTyxFQUFFSztBQUFYLFdBQUQsQ0FBakI7QUFBQTtBQUhkLFFBUkQsQ0F2QkQsQ0FERCxFQXVDQztBQUNDLGlCQUFTLDJCQUFvQlAsTUFBcEIsNkJBQTZDTCxRQUE3QyxDQURWO0FBRUMsYUFBSyxFQUFFO0FBQ05xQix5QkFBZSxnQkFBU2QsT0FBTyxDQUFDZSxHQUFSLElBQWVDLFNBQWhCLEdBQTZCaEIsT0FBTyxDQUFDZSxHQUFyQyxHQUEyQ0Usb0JBQW9CLENBQUNDLE1BQXJCLEdBQThCLHlCQUFqRjtBQURUO0FBRlIsU0FNQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDLHlCQUFDLFFBQUQ7QUFDQyxlQUFPLEVBQUMsSUFEVDtBQUVDLGFBQUssRUFBRWpCLEtBRlI7QUFHQyxtQkFBVyxFQUFDLHNCQUhiO0FBSUMsZ0JBQVEsRUFBRSxrQkFBQ0ssS0FBRDtBQUFBLGlCQUFXZixhQUFhLENBQUM7QUFBQ1UsaUJBQUssRUFBRUs7QUFBUixXQUFELENBQXhCO0FBQUE7QUFKWCxRQURELEVBT0MseUJBQUMsUUFBRDtBQUNDLGVBQU8sRUFBQyxHQURUO0FBRUMsYUFBSyxFQUFFSixXQUZSO0FBR0MsbUJBQVcsRUFBQyw0QkFIYjtBQUlDLGdCQUFRLEVBQUUsa0JBQUNJLEtBQUQ7QUFBQSxpQkFBV2YsYUFBYSxDQUFDO0FBQUNXLHVCQUFXLEVBQUVJO0FBQWQsV0FBRCxDQUF4QjtBQUFBO0FBSlgsUUFQRCxFQWFDLHlCQUFDLFFBQUQ7QUFDQyxlQUFPLEVBQUMsR0FEVDtBQUVDLGlCQUFTLEVBQUMsV0FGWDtBQUdDLGFBQUssRUFBRUgsU0FIUjtBQUlDLG1CQUFXLEVBQUMsY0FKYjtBQUtDLGdCQUFRLEVBQUUsa0JBQUNHLEtBQUQ7QUFBQSxpQkFBV2YsYUFBYSxDQUFDO0FBQUNZLHFCQUFTLEVBQUVHO0FBQVosV0FBRCxDQUF4QjtBQUFBO0FBTFgsUUFiRCxDQU5ELENBdkNELEVBbUVFUixNQUFNLElBQUksQ0FBVixJQUNBLDhFQUVrQkwsUUFGbEIsb0RBR3FCTSxPQUhyQiwrQkFwRUYsQ0FERDtBQStFQTs7OztFQXBIaUJyQixTOztBQXVISlMsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUEsSUFBTU8sVUFBVSxHQUFHO0FBQ2xCO0FBQ0FELFVBQVEsRUFBRTtBQUFFMEIsUUFBSSxFQUFFLFFBQVI7QUFBa0IsZUFBUztBQUEzQixHQUZRO0FBR2xCckIsUUFBTSxFQUFFO0FBQUVxQixRQUFJLEVBQUUsUUFBUjtBQUFrQixlQUFTO0FBQTNCLEdBSFU7QUFJbEJwQixTQUFPLEVBQUU7QUFBRW9CLFFBQUksRUFBRSxRQUFSO0FBQWtCLGVBQVM7QUFBM0IsR0FKUztBQUtsQm5CLFNBQU8sRUFBRTtBQUFFbUIsUUFBSSxFQUFFLFFBQVI7QUFBa0IsZUFBUztBQUFDSixTQUFHLEVBQUVFLG9CQUFvQixDQUFDQyxNQUFyQixHQUE4Qix5QkFBcEM7QUFBK0RFLFNBQUcsRUFBRTtBQUFwRTtBQUEzQixHQUxTO0FBT2xCO0FBQ0FuQixPQUFLLEVBQUU7QUFBRWtCLFFBQUksRUFBRSxRQUFSO0FBQWtCLGVBQVM7QUFBM0IsR0FSVztBQVNsQmpCLGFBQVcsRUFBRTtBQUFFaUIsUUFBSSxFQUFFLFFBQVI7QUFBa0IsZUFBUztBQUEzQixHQVRLO0FBVWxCaEIsV0FBUyxFQUFFO0FBQUVnQixRQUFJLEVBQUUsUUFBUjtBQUFrQixlQUFTO0FBQTNCLEdBVk87QUFXbEJmLFNBQU8sRUFBRTtBQUFFZSxRQUFJLEVBQUUsUUFBUjtBQUFrQixlQUFTO0FBQTNCLEdBWFM7QUFZbEJ0QixZQUFVLEVBQUU7QUFBRXNCLFFBQUksRUFBRSxTQUFSO0FBQW1CLGVBQVM7QUFBNUI7QUFaTSxDQUFuQjtBQWNlekIseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFPLElBQU0yQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzlCLFNBQ087QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUMsNEJBQWhDO0FBQTZELGNBQVUsRUFBQyw4QkFBeEU7QUFBdUcsV0FBTyxFQUFDLEtBQS9HO0FBQXFILFNBQUssRUFBQyxJQUEzSDtBQUFnSSxVQUFNLEVBQUMsSUFBdkk7QUFBNEksV0FBTyxFQUFDO0FBQXBKLEtBQ0E7QUFBTSxLQUFDLEVBQUM7QUFBUixJQURBLENBRFA7QUFLQSxDQU5NLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJDQXNDbkQsRUFBRSxDQUFDQyxNO0lBQXhDRSxRLGNBQUFBLFE7SUFBVWlELFcsY0FBQUEsVztJQUFhQyxTLGNBQUFBLFM7SUFDdkJDLGlCLEdBQXNCdEQsRUFBRSxDQUFDdUQsTSxDQUF6QkQsaUI7SUFDQWpELEUsR0FBT0wsRUFBRSxDQUFDTSxJLENBQVZELEU7a0JBQ3dCTCxFQUFFLENBQUNPLE87SUFBM0JDLFMsZUFBQUEsUztJQUFXQyxRLGVBQUFBLFE7SUFDWCtDLE0sR0FBV3hELEVBQUUsQ0FBQ1UsVSxDQUFkOEMsTTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBRixpQkFBaUIsQ0FBQyxtQkFBRCxFQUFzQjtBQUNyQ3ZCLE9BQUssRUFBRTFCLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixlQUFuQixDQUQ0QjtBQUVyQ29ELE1BQUksRUFBRU4sb0RBRitCO0FBR3JDTyxVQUFRLEVBQUUsUUFIMkI7QUFJckNDLFVBQVEsRUFBRSxDQUNWdEQsRUFBRSxDQUFFLGdCQUFGLEVBQW9CLGVBQXBCLENBRFEsRUFFVkEsRUFBRSxDQUFFLFFBQUYsRUFBWSxlQUFaLENBRlEsQ0FKMkI7QUFRckNtQixZQUFVLEVBQVZBLG1EQVJxQztBQVNyQ29DLFVBQVEsRUFBRTtBQUNSQyxTQUFLLEVBQUU7QUFEQyxHQVQyQjtBQVlyQ0MsTUFBSSxFQUFFN0MsNkNBWitCO0FBYXJDOEMsTUFBSSxFQUFFLGNBQVU3QyxLQUFWLEVBQWtCO0FBQUEsNEJBWXBCQSxLQUFLLENBQUNNLFVBWmM7QUFBQSxRQUd2QkQsUUFIdUIscUJBR3ZCQSxRQUh1QjtBQUFBLFFBSXZCSyxNQUp1QixxQkFJdkJBLE1BSnVCO0FBQUEsUUFLdkJDLE9BTHVCLHFCQUt2QkEsT0FMdUI7QUFBQSxRQU12QkMsT0FOdUIscUJBTXZCQSxPQU51QjtBQUFBLFFBT3ZCQyxLQVB1QixxQkFPdkJBLEtBUHVCO0FBQUEsUUFRdkJDLFdBUnVCLHFCQVF2QkEsV0FSdUI7QUFBQSxRQVN2QkMsU0FUdUIscUJBU3ZCQSxTQVR1QjtBQUFBLFFBVXZCQyxPQVZ1QixxQkFVdkJBLE9BVnVCO0FBQUEsUUFXdkJQLFVBWHVCLHFCQVd2QkEsVUFYdUI7QUFjeEIsV0FDRTtBQUNDLGVBQVMsMkJBQW9CQyxNQUFwQiw2QkFBNkNMLFFBQTdDLENBRFY7QUFFQyxXQUFLLEVBQUU7QUFDTnFCLHVCQUFlLGdCQUFTZCxPQUFPLENBQUNlLEdBQVIsSUFBZUMsU0FBaEIsR0FBNkJoQixPQUFPLENBQUNlLEdBQXJDLEdBQTJDRSxvQkFBb0IsQ0FBQ0MsTUFBckIsR0FBOEIseUJBQWpGO0FBRFQ7QUFGUixPQU1DO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQyxxQ0FBS2pCLEtBQUwsQ0FERCxFQUVDLG9DQUFJQyxXQUFKLENBRkQsRUFHQztBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQXlCLFlBQU0sRUFBRUwsVUFBVSxHQUFHLFFBQUgsR0FBYSxFQUF4RDtBQUE0RCxTQUFHLEVBQUMscUJBQWhFO0FBQXNGLFVBQUksRUFBRU87QUFBNUYsT0FBc0dELFNBQXRHLENBSEQsQ0FORCxFQVdFTCxNQUFNLElBQUksQ0FBVixJQUNBLGdGQUVrQkwsUUFGbEIsc0RBR3FCTSxPQUhyQixtQ0FaRixDQURGO0FBdUJBO0FBbERxQyxDQUF0QixDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2RRckIsUyxHQUFjUixFQUFFLENBQUNPLE8sQ0FBakJDLFM7SUFDQTRDLFcsR0FBZ0JwRCxFQUFFLENBQUNnRSxXLENBQW5CWixXO0lBQ0FhLFEsR0FBYWpFLEVBQUUsQ0FBQ1UsVSxDQUFoQnVELFE7O0lBRUZsRCxROzs7Ozs7Ozs7OztnQ0FFVW1ELEssRUFBTztBQUFBLFVBQ2JDLFFBRGEsR0FDQSxLQUFLakQsS0FETCxDQUNiaUQsUUFEYTs7QUFFckIsVUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNyQixHQUFuQixFQUF3QjtBQUNkc0IsZ0JBQVEsQ0FBQztBQUFFdEIsYUFBRyxFQUFFcUIsS0FBSyxDQUFDckIsR0FBYjtBQUFrQnVCLFlBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQUE1QjtBQUFnQ2xCLGFBQUcsRUFBRWdCLEtBQUssQ0FBQ2hCO0FBQTNDLFNBQUQsQ0FBUjtBQUNIO0FBQ0o7OztnQ0FFV0wsRyxFQUFLO0FBQ25CLFVBQUksQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUMsS0FBckMsRUFBNEN3QixPQUE1QyxDQUFvRHhCLEdBQUcsQ0FBQ3lCLEtBQUosQ0FBVSxHQUFWLEVBQWVDLEdBQWYsR0FBcUJDLFdBQXJCLEVBQXBELEtBQTJGLENBQUMsQ0FBaEcsRUFBbUc7QUFDbEcsZUFBTzNCLEdBQVA7QUFDQSxPQUZELE1BRU87QUFDTixlQUFPRSxvQkFBb0IsQ0FBQ0MsTUFBckIsR0FBOEIseUJBQXJDO0FBQ0E7QUFDRDs7OzZCQUVXO0FBQUE7O0FBQUEsd0JBQytCLEtBQUs5QixLQURwQztBQUFBLFVBQ0drQixLQURILGVBQ0dBLEtBREg7QUFBQSxVQUNVcUMsS0FEVixlQUNVQSxLQURWO0FBQUEsVUFDaUJDLFNBRGpCLGVBQ2lCQSxTQURqQjtBQUVMLGFBQ0k7QUFBSyxpQkFBUywrQ0FBd0NBLFNBQVMsR0FBQ0EsU0FBRCxHQUFXLEVBQTVEO0FBQWQsU0FDTUQsS0FBSyxJQUNIO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFtQ0EsS0FBbkMsQ0FGUixFQUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0kseUJBQUMsV0FBRDtBQUNJLGdCQUFRLEVBQUUsa0JBQUF0QyxHQUFHO0FBQUEsaUJBQUksS0FBSSxDQUFDd0MsV0FBTCxDQUFpQnhDLEdBQWpCLENBQUo7QUFBQSxTQURqQjtBQUVJLG9CQUFZLEVBQUUsQ0FBQyxPQUFELENBRmxCO0FBR0ksYUFBSyxFQUFFQyxLQUhYO0FBSUksY0FBTSxFQUFFO0FBQUEsY0FBR3dDLElBQUgsUUFBR0EsSUFBSDtBQUFBLGlCQUNKO0FBQUsscUJBQVMsRUFBQztBQUFmLGFBQ014QyxLQUFLLElBQUlBLEtBQUssQ0FBQ1MsR0FBaEIsR0FDRztBQUFNLHFCQUFTLEVBQUMsd0JBQWhCO0FBQXlDLG1CQUFPLEVBQUUrQjtBQUFsRCxhQUNJO0FBQUssZUFBRyxFQUFFLEtBQUksQ0FBQ0MsV0FBTCxDQUFpQnpDLEtBQUssQ0FBQ1MsR0FBdkIsQ0FBVjtBQUF1QyxlQUFHLEVBQUVULEtBQUssQ0FBQ2M7QUFBbEQsWUFESixDQURILEdBS0c7QUFBSyxtQkFBTyxFQUFFMEIsSUFBZDtBQUFvQixxQkFBUyxFQUFFO0FBQS9CLGFBQXdELHlCQUFDLFFBQUQ7QUFBVSxnQkFBSSxFQUFDO0FBQWYsWUFBeEQsQ0FOUixDQURJO0FBQUE7QUFKWixRQURKLENBSkosQ0FESjtBQXlCSDs7OztFQTVDa0JwRSxTOztJQStDakJRLGlCOzs7Ozs7Ozs7Ozs2QkFFTztBQUFBLHlCQUMrRCxLQUFLRSxLQURwRTtBQUFBLFVBQ0drQixLQURILGdCQUNHQSxLQURIO0FBQUEsVUFDVXFDLEtBRFYsZ0JBQ1VBLEtBRFY7QUFBQSxVQUNpQkssT0FEakIsZ0JBQ2lCQSxPQURqQjtBQUFBLDhDQUMwQkMsT0FEMUI7QUFBQSxVQUMwQkEsT0FEMUIscUNBQ29DLENBRHBDO0FBQUEsVUFDdUNMLFNBRHZDLGdCQUN1Q0EsU0FEdkM7QUFBQSxVQUNrRFAsUUFEbEQsZ0JBQ2tEQSxRQURsRDtBQUVMLGFBQ0k7QUFBSyxpQkFBUyx1Q0FBZ0NPLFNBQVMsR0FBQ0EsU0FBRCxHQUFXLEVBQXBEO0FBQWQsU0FDTUQsS0FBSyxJQUNIO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFtQ0EsS0FBbkMsQ0FGUixFQUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRVFLLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6QixlQUNJO0FBQ0ksYUFBRyxFQUFFQSxLQURUO0FBRUksaUJBQU8sRUFBRTtBQUFBLG1CQUFNZixRQUFRLENBQUNjLElBQUksQ0FBQzdDLEtBQU4sQ0FBZDtBQUFBLFdBRmI7QUFHSSxtQkFBUyxZQUFLQSxLQUFLLElBQUk2QyxJQUFJLENBQUM3QyxLQUFkLEdBQXNCLFFBQXRCLEdBQWlDLEVBQXRDO0FBSGIsV0FLSzZDLElBQUksQ0FBQzVDLFNBQUwsSUFBa0I7QUFBTSxtQkFBUyw4Q0FBdUM0QyxJQUFJLENBQUM3QyxLQUE1QztBQUFmLFdBQXFFNkMsSUFBSSxDQUFDNUMsU0FBMUUsQ0FMdkIsQ0FESjtBQVNILE9BVkQsQ0FGUixDQUpKLENBREo7QUFzQkg7Ozs7RUExQjJCN0IsUzs7QUE2QmhDUixFQUFFLENBQUNjLGFBQUgsR0FBbUI7QUFDZkMsVUFBUSxFQUFSQSxRQURlO0FBRWZDLG1CQUFpQixFQUFqQkE7QUFGZSxDQUFuQixDOzs7Ozs7Ozs7OztBQ2hGQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNc0IsVUFBVSxHQUFHLEVBQW5CO0FBRUFBLFVBQVUsQ0FBQ0MsWUFBWCxHQUEwQjtBQUFNLFdBQVMsRUFBQztBQUFoQixHQUEwQztBQUFNLFdBQVMsRUFBQztBQUFoQixFQUExQyxFQUFvRztBQUFNLFdBQVMsRUFBQztBQUFoQixFQUFwRyxDQUExQjtBQUNBRCxVQUFVLENBQUNFLFlBQVgsR0FBMEI7QUFBTSxXQUFTLEVBQUM7QUFBaEIsR0FBMEM7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFBMUMsRUFBb0c7QUFBTSxXQUFTLEVBQUM7QUFBaEIsRUFBcEcsQ0FBMUI7QUFDQUYsVUFBVSxDQUFDRyxZQUFYLEdBQTBCO0FBQU0sV0FBUyxFQUFDO0FBQWhCLEdBQTBDO0FBQU0sV0FBUyxFQUFDO0FBQWhCLEVBQTFDLEVBQW9HO0FBQU0sV0FBUyxFQUFDO0FBQWhCLEVBQXBHLENBQTFCO0FBQ0FILFVBQVUsQ0FBQ0ksWUFBWCxHQUEwQjtBQUFNLFdBQVMsRUFBQztBQUFoQixHQUEwQztBQUFNLFdBQVMsRUFBQztBQUFoQixFQUExQyxFQUFvRztBQUFNLFdBQVMsRUFBQztBQUFoQixFQUFwRyxDQUExQjtBQUVlSix5RUFBZixFIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJjb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBSaWNoVGV4dCwgQ29sb3JQYWxldHRlIH0gPSB3cC5lZGl0b3I7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBUb2dnbGVDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7IEN0YU1lZGlhLCBDdGFMYXlvdXRTZWxlY3RvciB9ID0gd3AuY3RhQ29tcG9uZW50cztcclxuaW1wb3J0IHN0eWxlaWNvbnMgZnJvbSAnLi9zdHlsZWljb24nO1xyXG5cclxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblx0XHR0aGlzLnRvZ2dsZVRhcmdldCAgICAgPSB0aGlzLnRvZ2dsZVRhcmdldC5iaW5kKCB0aGlzIClcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0QXR0cmlidXRlcywgY2xpZW50SWQsIGF0dHJpYnV0ZXM6IHsgdW5pcXVlSWQgfSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBfY2xpZW50ID0gY2xpZW50SWQuc3Vic3RyKDAsIDYpO1xyXG4gICAgICAgIGlmICghdW5pcXVlSWQpIHtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHVuaXF1ZUlkOiBfY2xpZW50IH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pcXVlSWQgJiYgdW5pcXVlSWQgIT0gX2NsaWVudCkge1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdW5pcXVlSWQ6IF9jbGllbnQgfSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHR0b2dnbGVUYXJnZXQoKSB7XHJcblx0XHRjb25zdCB7c2V0QXR0cmlidXRlcywgYXR0cmlidXRlczogeyBidG5fdGFyZ2V0IH0gfSA9IHRoaXMucHJvcHM7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGJ0bl90YXJnZXQ6ICEgYnRuX3RhcmdldCB9ICk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRcdHVuaXF1ZUlkLFxyXG5cdFx0XHRcdGxheW91dCxcclxuXHRcdFx0XHRiZ0NvbG9yLFxyXG5cdFx0XHRcdGJnSW1hZ2UsXHJcblx0XHRcdFx0dGl0bGUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0YnRuX2xhYmVsLFxyXG5cdFx0XHRcdGJ0bl91cmwsXHJcblx0XHRcdFx0YnRuX3RhcmdldFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxGcmFnbWVudD5cclxuXHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaW5zcGVjdG9yXCI+XHJcblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnTGF5b3V0Jyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cclxuXHRcdFx0XHRcdFx0PEN0YUxheW91dFNlbGVjdG9yIHZhbHVlPXtsYXlvdXR9IG9uQ2hhbmdlPXt2YWwgPT4gc2V0QXR0cmlidXRlcyh7IGxheW91dDogdmFsIH0pfVxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1tcclxuXHRcdFx0XHRcdFx0XHRcdHsgdmFsdWU6IDEsIHN0eWxlSWNvbjogc3R5bGVpY29ucy5jdGFfbGF5b3V0XzEgfSxcclxuXHRcdFx0XHRcdFx0XHRcdHsgdmFsdWU6IDIsIHN0eWxlSWNvbjogc3R5bGVpY29ucy5jdGFfbGF5b3V0XzIgfSxcclxuXHRcdFx0XHRcdFx0XHRcdHsgdmFsdWU6IDMsIHN0eWxlSWNvbjogc3R5bGVpY29ucy5jdGFfbGF5b3V0XzMgfSxcclxuXHRcdFx0XHRcdFx0XHRcdHsgdmFsdWU6IDQsIHN0eWxlSWNvbjogc3R5bGVpY29ucy5jdGFfbGF5b3V0XzQgfVxyXG5cdFx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggXCJCdXR0b25cIiApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0geyBfXyggXCJMaW5rXCIgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9IHsgYnRuX3VybCB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ0bl91cmw6IHZhbHVlIH0gKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJPcGVuIGluIG5ldyBXaW5kb3dcIiApIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYnRuX3RhcmdldCB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVRhcmdldCB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggXCJXcmFwcGVyXCIgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cclxuXHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oJ0JhY2tncm91bmQgQ29sb3InKSB9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3RhLWZpZWxkXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGJnQ29sb3IgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBjb2xvclZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBiZ0NvbG9yOiBjb2xvclZhbHVlIH0gKSB9XHJcblx0XHRcdFx0XHRcdFx0YWxsb3dSZXNldFxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8Q3RhTWVkaWEgXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZScpfSBcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YmdJbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbCA9PiBzZXRBdHRyaWJ1dGVzKHsgYmdJbWFnZTogdmFsIH0pfSBcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHRcdFx0PGRpdiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGNhbGxfdG9fYWN0aW9uXyR7bGF5b3V0fSBjYWxsX3RvX2FjdGlvbl8ke3VuaXF1ZUlkfWB9XHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeyhiZ0ltYWdlLnVybCAhPSB1bmRlZmluZWQpID8gYmdJbWFnZS51cmwgOiBjdGFfZ3V0ZW5iZXJnX2xvY2F0ZS5wbHVnaW4gKyAnYXNzZXRzL2ltYWdlcy9jdGFfMS5wbmcnfSlgXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3RhX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PFJpY2hUZXh0XHJcblx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cImgyXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDYWxsIHRvIGFjdGlvbiB0aXRsZVwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7dGl0bGU6IHZhbHVlfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJwXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDYWxsIHRvIGFjdGlvbiBkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7ZGVzY3JpcHRpb246IHZhbHVlfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJhXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdGFnYi1idG5cIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtidG5fbGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJCdXR0b24gTGFiZWxcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoe2J0bl9sYWJlbDogdmFsdWV9KX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtsYXlvdXQgPT0gMSAmJlxyXG5cdFx0XHRcdFx0PHN0eWxlPlxyXG5cdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5jYWxsX3RvX2FjdGlvbl8ke3VuaXF1ZUlkfTphZnRlcntcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtiZ0NvbG9yfVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L0ZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7IiwiY29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHQvL2Jhc2ljXHJcblx0dW5pcXVlSWQ6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcnIH0sXHJcblx0bGF5b3V0OiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxIH0sXHJcblx0YmdDb2xvcjogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJyM3ODQwRkYnIH0sXHJcblx0YmdJbWFnZTogeyB0eXBlOiAnb2JqZWN0JywgZGVmYXVsdDoge3VybDogY3RhX2d1dGVuYmVyZ19sb2NhdGUucGx1Z2luICsgJ2Fzc2V0cy9pbWFnZXMvY3RhXzEucG5nJywgYWx0OiAnQ2FsbCB0byBhY3Rpb24gSW1hZ2UnfSB9LFxyXG5cclxuXHQvL0NvbnRlbnRcclxuXHR0aXRsZTogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ0ZsZXhpIEFkZG9ucyBGb3IgRWxlbWVudG9yJyB9LFxyXG5cdGRlc2NyaXB0aW9uOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnRXRpYW0gY29udmFsbGlzIGVsZW1lbnR1bSBzYXBpZW4sIGEgYWxpcXVhbSB0dXJwaXMgYWxpcXVhbSB2aXRhZS4gUHJhZXNlbnQgc29sbGljaXR1ZGluIGZlbGlzIHZlbCBtaSBmYWNpbGlzaXMgcG9zdWVyZSBOdWxsYSB1bHRyaWNlcy4nIH0sXHJcblx0YnRuX2xhYmVsOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnRnJlZSB0cmlhbCcgfSxcclxuXHRidG5fdXJsOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnIycgfSxcclxuXHRidG5fdGFyZ2V0OiB7IHR5cGU6ICdib29sZWFuJywgZGVmYXVsdDogMSB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXR0cmlidXRlczsiLCJleHBvcnQgY29uc3QgQ2xpY2tJY29uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJkYXNoaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTUxMiwxODMuNzc4VjUwLjIxM2MwLTI3LjYxOC0yMi40NjktNTAuMDg3LTUwLjA4Ny01MC4wODdINTAuMDg3QzIyLjQ2OSwwLjEyNiwwLDIyLjU5NSwwLDUwLjIxM3YxMzMuNTY1IGMwLDI3LjYxOCwyMi40NjksNTAuMDg3LDUwLjA4Nyw1MC4wODdoMTM0LjlsODAuNjI4LDI0MS44ODNjNS4wNTQsMTUuMTYxLDI2LjYxMywxNS4xOTUsMzEuNjc4LDBsMjYuODc0LTgwLjYyMkw0MzEuMTUsNTAyLjExIGMxMy4wMTksMTMuMDE4LDM0LjIwMywxMy4wMTgsNDcuMjIzLDBsMjMuNjEyLTIzLjYxMWMxMy4wMTctMTMuMDE5LDEzLjAxNy0zNC4yMDMtMC4wMDEtNDcuMjIyTDM5NS4wMDEsMzI0LjI5M2w4MC42MjItMjYuODc0IGMxNS4xNjktNS4wNTgsMTUuMTg2LTI2LjYxNSwwLTMxLjY3OEwzODAsMjMzLjg2N2g4MS45MTNDNDg5LjUzMSwyMzMuODY1LDUxMiwyMTEuMzk2LDUxMiwxODMuNzc4eiBNNDE3LjU0NiwyODEuNTc5IGwtNTguNzMzLDE5LjU3N2MtMTEuNzcsMy45MjMtMTUuMjg0LDE4Ljg4Ni02LjUyNiwyNy42NDVsMTI2LjA4NCwxMjYuMDg2bC0yMy42MTIsMjMuNjExTDMyOC42NzUsMzUyLjQxMiBjLTguNzc3LTguNzc5LTIzLjcyNC01LjIzLTI3LjY0NSw2LjUyNmwtMTkuNTc3LDU4LjczM2wtNjguMDQ3LTIwNC4xMzlDMjE3LjUwOCwyMTQuOSw0MDIuMzA2LDI3Ni40OTksNDE3LjU0NiwyODEuNTc5eiBNMjc5LjgyNSwyMDAuNDc1di0wLjAwMWwtODcuNTM2LTI5LjE3OGMtMTMuMDE2LTQuMzQzLTI1LjQ2NSw4LjA4MS0yMS4xMTksMjEuMTE5bDIuNjg3LDguMDYxSDUwLjA4NyBjLTkuMjA2LDAtMTYuNjk2LTcuNDktMTYuNjk2LTE2LjY5NlY1MC4yMTRjMC05LjIwNiw3LjQ5LTE2LjY5NiwxNi42OTYtMTYuNjk2aDQxMS44MjZjOS4yMDYsMCwxNi42OTYsNy40OSwxNi42OTYsMTYuNjk2VjE4My43OCBjMCw5LjIwNi03LjQ5LDE2LjY5Ni0xNi42OTYsMTYuNjk2SDI3OS44MjV6XCI+PC9wYXRoPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdClcclxufSIsImNvbnN0IHsgUmljaFRleHQsIE1lZGlhVXBsb2FkLCBQbGFpblRleHQgfSA9IHdwLmVkaXRvcjtcclxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xyXG5pbXBvcnQgeyBDbGlja0ljb24gfSBmcm9tICcuL2Jsb2NraWNvbic7XHJcbmltcG9ydCAnLi9jdGEtY29tcG9uZW50JztcclxuXHJcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4vYXR0cmlidXRlcyc7XHJcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSgnY3RhLWd1dGVuYmVyZy9jdGEnLCB7XHJcbiAgdGl0bGU6IF9fKCdDYWxsIHRvIGFjdGlvbicsICdjdGEtZ3V0ZW5iZXJnJyksXHJcbiAgaWNvbjogQ2xpY2tJY29uLFxyXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcclxuICBrZXl3b3JkczogW1xyXG5cdFx0X18oICdjYWxsIHRvIGFjdGlvbicsICdjdGEtZ3V0ZW5iZXJnJyApLFxyXG5cdFx0X18oICd3cHBvb2wnLCAnY3RhLWd1dGVuYmVyZycgKVxyXG5cdF0sXHJcbiAgYXR0cmlidXRlcyxcclxuICBzdXBwb3J0czoge1xyXG4gICAgYWxpZ246IHRydWVcclxuICB9LFxyXG4gIGVkaXQ6IEVkaXQsXHJcbiAgc2F2ZTogZnVuY3Rpb24oIHByb3BzICkge1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0dW5pcXVlSWQsXHJcblx0XHRcdGxheW91dCxcclxuXHRcdFx0YmdDb2xvcixcclxuXHRcdFx0YmdJbWFnZSxcclxuXHRcdFx0dGl0bGUsXHJcblx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRidG5fbGFiZWwsXHJcblx0XHRcdGJ0bl91cmwsXHJcblx0XHRcdGJ0bl90YXJnZXRcclxuXHRcdH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGNhbGxfdG9fYWN0aW9uXyR7bGF5b3V0fSBjYWxsX3RvX2FjdGlvbl8ke3VuaXF1ZUlkfWB9XHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6YHVybCgkeyhiZ0ltYWdlLnVybCAhPSB1bmRlZmluZWQpID8gYmdJbWFnZS51cmwgOiBjdGFfZ3V0ZW5iZXJnX2xvY2F0ZS5wbHVnaW4gKyAnYXNzZXRzL2ltYWdlcy9jdGFfMS5wbmcnfSlgXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3RhX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGgyPnt0aXRsZX08L2gyPlxyXG5cdFx0XHRcdFx0XHQ8cD57ZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjdGFnYi1idG5cIiB0YXJnZXQ9e2J0bl90YXJnZXQgPyAnX2JsYW5rJzogJyd9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtidG5fdXJsfT57YnRuX2xhYmVsfTwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0e2xheW91dCA9PSAxICYmXHJcblx0XHRcdFx0XHRcdDxzdHlsZT5cclxuXHRcdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdFx0LmNhbGxfdG9fYWN0aW9uXyR7dW5pcXVlSWR9OmFmdGVye1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7YmdDb2xvcn1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRgfVxyXG5cdFx0XHRcdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBNZWRpYVVwbG9hZCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jbGFzcyBDdGFNZWRpYSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc2V0U2V0dGluZ3MobWVkaWEpIHtcclxuXHRcdGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmIChtZWRpYSAmJiBtZWRpYS51cmwpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2UoeyB1cmw6IG1lZGlhLnVybCwgaWQ6IG1lZGlhLmlkLCBhbHQ6IG1lZGlhLmFsdCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhbGlkYXRlVXJsKHVybCkge1xyXG5cdFx0aWYgKFsnd2JtJywgJ2pwZycsICdqcGVnJywgJ2dpZicsICdwbmcnLCAnc3ZnJ10uaW5kZXhPZih1cmwuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpKSAhPSAtMSkge1xyXG5cdFx0XHRyZXR1cm4gdXJsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGN0YV9ndXRlbmJlcmdfbG9jYXRlLnBsdWdpbiArICdhc3NldHMvaW1hZ2VzL2N0YV8xLnBuZyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBsYWJlbCwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3RhLWZpZWxkIGN0YS1maWVsZC1tZWRpYS1zZWxlY3RvciAke2NsYXNzTmFtZT9jbGFzc05hbWU6Jyd9YH0+XHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN0YS1maWVsZC1sYWJlbFwiPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1maWVsZC1jb250ZW50IGN0YS1maWVsZC1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsID0+IHRoaXMuc2V0U2V0dGluZ3ModmFsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLXNpbmdsZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHZhbHVlICYmIHZhbHVlLnVybCkgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3RhLW1lZGlhLWltYWdlLXBhcmVudFwiIG9uQ2xpY2s9e29wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMudmFsaWRhdGVVcmwodmFsdWUudXJsKX0gYWx0PXt2YWx1ZS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29wZW59IGNsYXNzTmFtZT17XCJjdGEtcGxhY2Vob2xkZXItaW1hZ2VcIn0+PERhc2hpY29uIGljb249XCJmb3JtYXQtaW1hZ2VcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ3RhTGF5b3V0U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBsYWJlbCwgb3B0aW9ucywgY29sdW1ucyA9IDIsIGNsYXNzTmFtZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdGEtZmllbGQgY3RhLWZpZWxkLWxheW91dCAke2NsYXNzTmFtZT9jbGFzc05hbWU6Jyd9YH0+XHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN0YS1maWVsZC1sYWJlbFwiPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1maWVsZC1jb250ZW50IGN0YS1maWVsZC1sYXlvdXQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoZGF0YS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dmFsdWUgPT0gZGF0YS52YWx1ZSA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnN0eWxlSWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9e2BjdGEtbGF5b3V0LXN0eWxlIGN0YS1sYXlvdXQtc3R5bGUtJHtkYXRhLnZhbHVlfWB9PntkYXRhLnN0eWxlSWNvbn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG53cC5jdGFDb21wb25lbnRzID0ge1xyXG4gICAgQ3RhTWVkaWEsXHJcbiAgICBDdGFMYXlvdXRTZWxlY3RvclxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNvbnN0IHN0eWxlaWNvbnMgPSB7fTtcclxuXHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF8xID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzFcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF8yID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzJcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF8zID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzNcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF80ID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzRcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZWljb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9