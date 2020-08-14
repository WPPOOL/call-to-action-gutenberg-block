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
          isGradientBg = _this$props3$attribut.isGradientBg,
          bgColor = _this$props3$attribut.bgColor,
          bgColor2 = _this$props3$attribut.bgColor2,
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
        }, {
          value: 5,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_5
        }, {
          value: 6,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_6
        }, {
          value: 7,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_7
        }, {
          value: 8,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_8
        }, {
          value: 9,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_9
        }, {
          value: 10,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_10
        }, {
          value: 11,
          styleIcon: _styleicon__WEBPACK_IMPORTED_MODULE_0__["default"].cta_layout_11
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
      }, (layout == 8 || layout == 9) && wp.element.createElement(ToggleControl, {
        label: __('Enable Gradient'),
        checked: isGradientBg,
        onChange: function onChange(state) {
          return setAttributes({
            isGradientBg: state
          });
        }
      }), wp.element.createElement("span", {
        className: "cta-field-label"
      }, __('Background Color')), wp.element.createElement(ColorPalette, {
        label: __('Background Color'),
        className: "cta-field",
        value: bgColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            bgColor: colorValue
          });
        },
        allowReset: true
      }), isGradientBg == 1 && (layout == 8 || layout == 9) && wp.element.createElement(Fragment, null, wp.element.createElement("span", {
        className: "cta-field-label"
      }, __('Background Color 2')), wp.element.createElement(ColorPalette, {
        label: __('Background Color 2'),
        className: "cta-field",
        value: bgColor2,
        onChange: function onChange(colorValue) {
          return setAttributes({
            bgColor2: colorValue
          });
        },
        allowReset: true
      })), wp.element.createElement(CtaMedia, {
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
          backgroundImage: "".concat(bgImage.url != undefined ? "url(".concat(bgImage.url, ")") : 'none')
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
      }))), wp.element.createElement("style", null, layout == 1 || layout == 8 || layout == 9 ? "\n\t\t\t\t\t\t.call_to_action_".concat(uniqueId, ":after{\n\t\t\t\t\t\t\t").concat(isGradientBg == 1 ? "background-image: linear-gradient(to right, ".concat(bgColor, ", ").concat(bgColor2, ")") : "background-color: ".concat(bgColor), "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.call_to_action_").concat(uniqueId, ">.cta_content>.ctagb-btn:hover{\n\t\t\t\t\t\t\t").concat(isGradientBg == 1 ? "background-image: linear-gradient(to right, ".concat(bgColor2, ", ").concat(bgColor, ")") : "background-color: ".concat(bgColor), "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t") : ".call_to_action_".concat(uniqueId, "{\n\t\t\t\t\t\t\t").concat(isGradientBg == 1 ? "background-image: linear-gradient(to right, ".concat(bgColor, ", ").concat(bgColor2, ")") : "background-color: ".concat(bgColor), "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t")));
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
  isGradientBg: {
    type: 'boolean',
    "default": 0
  },
  bgColor: {
    type: 'string',
    "default": '#7840FF'
  },
  bgColor2: {
    type: 'string',
    "default": '#7840FF'
  },
  bgImage: {
    type: 'object',
    "default": {
      url: cta_gutenberg_locate.plugin + 'assets/images/cta_1.png',
      alt: 'Call to action Image',
      id: 0
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
        isGradientBg = _props$attributes.isGradientBg,
        bgColor = _props$attributes.bgColor,
        bgColor2 = _props$attributes.bgColor2,
        bgImage = _props$attributes.bgImage,
        title = _props$attributes.title,
        description = _props$attributes.description,
        btn_label = _props$attributes.btn_label,
        btn_url = _props$attributes.btn_url,
        btn_target = _props$attributes.btn_target;
    return wp.element.createElement("div", {
      className: "call_to_action_".concat(layout, " call_to_action_").concat(uniqueId),
      style: {
        backgroundImage: "".concat(bgImage.url != undefined ? "url(".concat(bgImage.url, ")") : 'none')
      }
    }, wp.element.createElement("div", {
      className: "cta_content"
    }, wp.element.createElement("h2", null, title), wp.element.createElement("p", null, description), wp.element.createElement("a", {
      className: "ctagb-btn",
      target: btn_target ? '_blank' : '',
      rel: "noopener noreferrer",
      href: btn_url
    }, btn_label)), wp.element.createElement("style", null, layout == 1 || layout == 8 || layout == 9 ? "\n\t\t\t\t\t\t.call_to_action_".concat(uniqueId, ":after{\n\t\t\t\t\t\t\t").concat(isGradientBg == 1 ? "background-image: linear-gradient(to right, ".concat(bgColor, ", ").concat(bgColor2, ")") : "background-color: ".concat(bgColor), "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.call_to_action_").concat(uniqueId, ">.cta_content>.ctagb-btn:hover{\n\t\t\t\t\t\t\t").concat(isGradientBg == 1 ? "background-image: linear-gradient(to right, ".concat(bgColor2, ", ").concat(bgColor, ")") : "background-color: ".concat(bgColor), "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t") : ".call_to_action_".concat(uniqueId, "{\n\t\t\t\t\t\t\t").concat(isGradientBg == 1 ? "background-image: linear-gradient(to right, ".concat(bgColor, ", ").concat(bgColor2, ")") : "background-color: ".concat(bgColor), "\n\t\t\t\t\t\t}\n\t\t\t\t\t\t")));
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
var __ = wp.i18n.__;
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
    key: "removeImage",
    value: function removeImage() {
      var onChange = this.props.onChange;
      onChange({});
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
          return wp.element.createElement("div", null, value && value.url ? wp.element.createElement("div", null, wp.element.createElement("div", {
            className: "cta-single-img"
          }, wp.element.createElement("span", {
            className: "cta-media-image-parent",
            onClick: open
          }, wp.element.createElement("img", {
            src: _this.validateUrl(value.url),
            alt: value.alt
          }))), wp.element.createElement("div", {
            className: "cta-media-actions cta-field-button-list"
          }, wp.element.createElement("button", {
            className: "cta-field-button",
            "aria-label": __('Edit'),
            onClick: open,
            role: "button"
          }, wp.element.createElement("span", {
            "aria-label": __('Edit'),
            className: "dashicons dashicons-edit"
          })), wp.element.createElement("button", {
            className: "cta-field-button",
            "aria-label": __('Remove'),
            onClick: function onClick() {
              return _this.removeImage();
            },
            role: "button"
          }, wp.element.createElement("span", {
            "aria-label": __('Close'),
            className: "dashicons dashicons-no"
          })))) : wp.element.createElement("div", {
            className: "cta-single-img"
          }, wp.element.createElement("div", {
            onClick: open,
            className: "cta-placeholder-image"
          }, wp.element.createElement(Dashicon, {
            icon: "format-image"
          }))));
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
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_5 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_5"
}, wp.element.createElement("span", {
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_6 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_6"
}, wp.element.createElement("span", {
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_7 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_7"
}, wp.element.createElement("span", {
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_8 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_8"
}, wp.element.createElement("span", {
  className: "dashicons dashicons-format-image"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_9 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_9"
}, wp.element.createElement("span", {
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_10 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_10"
}, wp.element.createElement("span", {
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
styleicons.cta_layout_11 = wp.element.createElement("span", {
  className: "cta_layout cta_layout_11"
}, wp.element.createElement("span", {
  className: "dashicons"
}), wp.element.createElement("span", {
  className: "cta-info-icon"
}));
/* harmony default export */ __webpack_exports__["default"] = (styleicons);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9FZGl0LmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NraWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2N0YS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zdHlsZWljb24uanMiXSwibmFtZXMiOlsid3AiLCJlZGl0b3IiLCJJbnNwZWN0b3JDb250cm9scyIsIlJpY2hUZXh0IiwiQ29sb3JQYWxldHRlIiwiX18iLCJpMThuIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlRleHRDb250cm9sIiwiVG9nZ2xlQ29udHJvbCIsImN0YUNvbXBvbmVudHMiLCJDdGFNZWRpYSIsIkN0YUxheW91dFNlbGVjdG9yIiwiRWRpdCIsInByb3BzIiwidG9nZ2xlVGFyZ2V0IiwiYmluZCIsInNldEF0dHJpYnV0ZXMiLCJjbGllbnRJZCIsInVuaXF1ZUlkIiwiYXR0cmlidXRlcyIsIl9jbGllbnQiLCJzdWJzdHIiLCJidG5fdGFyZ2V0IiwibGF5b3V0IiwiaXNHcmFkaWVudEJnIiwiYmdDb2xvciIsImJnQ29sb3IyIiwiYmdJbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidG5fbGFiZWwiLCJidG5fdXJsIiwidmFsIiwidmFsdWUiLCJzdHlsZUljb24iLCJzdHlsZWljb25zIiwiY3RhX2xheW91dF8xIiwiY3RhX2xheW91dF8yIiwiY3RhX2xheW91dF8zIiwiY3RhX2xheW91dF80IiwiY3RhX2xheW91dF81IiwiY3RhX2xheW91dF82IiwiY3RhX2xheW91dF83IiwiY3RhX2xheW91dF84IiwiY3RhX2xheW91dF85IiwiY3RhX2xheW91dF8xMCIsImN0YV9sYXlvdXRfMTEiLCJzdGF0ZSIsImNvbG9yVmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmwiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiY3RhX2d1dGVuYmVyZ19sb2NhdGUiLCJwbHVnaW4iLCJhbHQiLCJpZCIsIkNsaWNrSWNvbiIsIk1lZGlhVXBsb2FkIiwiUGxhaW5UZXh0IiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJCdXR0b24iLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsInN1cHBvcnRzIiwiYWxpZ24iLCJlZGl0Iiwic2F2ZSIsImJsb2NrRWRpdG9yIiwiRGFzaGljb24iLCJtZWRpYSIsIm9uQ2hhbmdlIiwiaW5kZXhPZiIsInNwbGl0IiwicG9wIiwidG9Mb3dlckNhc2UiLCJsYWJlbCIsImNsYXNzTmFtZSIsInNldFNldHRpbmdzIiwib3BlbiIsInZhbGlkYXRlVXJsIiwicmVtb3ZlSW1hZ2UiLCJvcHRpb25zIiwiY29sdW1ucyIsIm1hcCIsImRhdGEiLCJpbmRleCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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bGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgUmljaFRleHQsIENvbG9yUGFsZXR0ZSB9ID0gd3AuZWRpdG9yO1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3QgeyBDdGFNZWRpYSwgQ3RhTGF5b3V0U2VsZWN0b3IgfSA9IHdwLmN0YUNvbXBvbmVudHM7XHJcbmltcG9ydCBzdHlsZWljb25zIGZyb20gJy4vc3R5bGVpY29uJztcclxuXHJcbmNsYXNzIEVkaXQgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cdFx0dGhpcy50b2dnbGVUYXJnZXQgICAgID0gdGhpcy50b2dnbGVUYXJnZXQuYmluZCggdGhpcyApXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7IHNldEF0dHJpYnV0ZXMsIGNsaWVudElkLCBhdHRyaWJ1dGVzOiB7IHVuaXF1ZUlkIH0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgX2NsaWVudCA9IGNsaWVudElkLnN1YnN0cigwLCA2KTtcclxuICAgICAgICBpZiAoIXVuaXF1ZUlkKSB7XHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB1bmlxdWVJZDogX2NsaWVudCB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVuaXF1ZUlkICYmIHVuaXF1ZUlkICE9IF9jbGllbnQpIHtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHVuaXF1ZUlkOiBfY2xpZW50IH0pO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0dG9nZ2xlVGFyZ2V0KCkge1xyXG5cdFx0Y29uc3Qge3NldEF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXM6IHsgYnRuX3RhcmdldCB9IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0c2V0QXR0cmlidXRlcyggeyBidG5fdGFyZ2V0OiAhIGJ0bl90YXJnZXQgfSApO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0XHR1bmlxdWVJZCxcclxuXHRcdFx0XHRsYXlvdXQsXHJcblx0XHRcdFx0aXNHcmFkaWVudEJnLFxyXG5cdFx0XHRcdGJnQ29sb3IsXHJcblx0XHRcdFx0YmdDb2xvcjIsXHJcblx0XHRcdFx0YmdJbWFnZSxcclxuXHRcdFx0XHR0aXRsZSxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0XHRidG5fbGFiZWwsXHJcblx0XHRcdFx0YnRuX3VybCxcclxuXHRcdFx0XHRidG5fdGFyZ2V0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEF0dHJpYnV0ZXNcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PEZyYWdtZW50PlxyXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scyBrZXk9XCJpbnNwZWN0b3JcIj5cclxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxyXG5cdFx0XHRcdFx0XHQ8Q3RhTGF5b3V0U2VsZWN0b3IgdmFsdWU9e2xheW91dH0gb25DaGFuZ2U9e3ZhbCA9PiBzZXRBdHRyaWJ1dGVzKHsgbGF5b3V0OiB2YWwgfSl9XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogMSwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfMSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogMiwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfMiB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogMywgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfMyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogNCwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfNCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogNSwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfNSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogNiwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfNiB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogNywgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfNyB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogOCwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfOCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogOSwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfOSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogMTAsIHN0eWxlSWNvbjogc3R5bGVpY29ucy5jdGFfbGF5b3V0XzEwIH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAxMSwgc3R5bGVJY29uOiBzdHlsZWljb25zLmN0YV9sYXlvdXRfMTEgfVxyXG5cdFx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggXCJCdXR0b25cIiApIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0geyBfXyggXCJMaW5rXCIgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9IHsgYnRuX3VybCB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJ0bl91cmw6IHZhbHVlIH0gKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJPcGVuIGluIG5ldyBXaW5kb3dcIiApIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYnRuX3RhcmdldCB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVRhcmdldCB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggXCJXcmFwcGVyXCIgKSB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cclxuXHRcdFx0XHRcdFx0eyhsYXlvdXQgPT0gOCB8fCBsYXlvdXQgPT0gOSkgJiZcclxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFbmFibGUgR3JhZGllbnQnKX1cclxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBpc0dyYWRpZW50QmcgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoc3RhdGUpID0+IHNldEF0dHJpYnV0ZXMoIHsgaXNHcmFkaWVudEJnOiBzdGF0ZSB9ICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY3RhLWZpZWxkLWxhYmVsXCI+e19fKCdCYWNrZ3JvdW5kIENvbG9yJyl9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8Q29sb3JQYWxldHRlXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXygnQmFja2dyb3VuZCBDb2xvcicpIH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdGEtZmllbGRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYmdDb2xvciB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbG9yVmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnQ29sb3I6IGNvbG9yVmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdFx0XHRhbGxvd1Jlc2V0XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdHsoaXNHcmFkaWVudEJnID09IDEgJiYgKGxheW91dCA9PSA4IHx8IGxheW91dCA9PSA5KSkgJiZcclxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjdGEtZmllbGQtbGFiZWxcIj57X18oJ0JhY2tncm91bmQgQ29sb3IgMicpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXygnQmFja2dyb3VuZCBDb2xvciAyJykgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdGEtZmllbGRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGJnQ29sb3IyIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGNvbG9yVmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJnQ29sb3IyOiBjb2xvclZhbHVlIH0gKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93UmVzZXRcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8Q3RhTWVkaWEgXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZScpfSBcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YmdJbWFnZX0gXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbCA9PiBzZXRBdHRyaWJ1dGVzKHsgYmdJbWFnZTogdmFsIH0pfSBcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHRcdFx0PGRpdiBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGNhbGxfdG9fYWN0aW9uXyR7bGF5b3V0fSBjYWxsX3RvX2FjdGlvbl8ke3VuaXF1ZUlkfWB9XHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6YCR7KGJnSW1hZ2UudXJsICE9IHVuZGVmaW5lZCkgPyBgdXJsKCR7YmdJbWFnZS51cmx9KWAgOiAnbm9uZSd9YFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN0YV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJoMlwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ2FsbCB0byBhY3Rpb24gdGl0bGVcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoe3RpdGxlOiB2YWx1ZX0pfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwicFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ2FsbCB0byBhY3Rpb24gZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoe2Rlc2NyaXB0aW9uOiB2YWx1ZX0pfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwiYVwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3RhZ2ItYnRuXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YnRuX2xhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQnV0dG9uIExhYmVsXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHtidG5fbGFiZWw6IHZhbHVlfSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0XHR7KGxheW91dCA9PSAxIHx8IGxheW91dCA9PSA4IHx8IGxheW91dCA9PSA5KSA/XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRgXHJcblx0XHRcdFx0XHRcdC5jYWxsX3RvX2FjdGlvbl8ke3VuaXF1ZUlkfTphZnRlcntcclxuXHRcdFx0XHRcdFx0XHQke2lzR3JhZGllbnRCZyA9PSAxID8gYGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtiZ0NvbG9yfSwgJHtiZ0NvbG9yMn0pYCA6IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2JnQ29sb3J9YH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuY2FsbF90b19hY3Rpb25fJHt1bmlxdWVJZH0+LmN0YV9jb250ZW50Pi5jdGFnYi1idG46aG92ZXJ7XHJcblx0XHRcdFx0XHRcdFx0JHtpc0dyYWRpZW50QmcgPT0gMSA/IGBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7YmdDb2xvcjJ9LCAke2JnQ29sb3J9KWAgOiBgYmFja2dyb3VuZC1jb2xvcjogJHtiZ0NvbG9yfWB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YFxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRgLmNhbGxfdG9fYWN0aW9uXyR7dW5pcXVlSWR9e1xyXG5cdFx0XHRcdFx0XHRcdCR7aXNHcmFkaWVudEJnID09IDEgPyBgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2JnQ29sb3J9LCAke2JnQ29sb3IyfSlgIDogYGJhY2tncm91bmQtY29sb3I6ICR7YmdDb2xvcn1gfVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0PC9GcmFnbWVudD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0OyIsImNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0Ly9iYXNpY1xyXG5cdHVuaXF1ZUlkOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnJyB9LFxyXG5cdGxheW91dDogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogMSB9LFxyXG5cdGlzR3JhZGllbnRCZzogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IDAgfSxcclxuXHRiZ0NvbG9yOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnIzc4NDBGRicgfSxcclxuXHRiZ0NvbG9yMjogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJyM3ODQwRkYnIH0sXHJcblx0YmdJbWFnZTogeyB0eXBlOiAnb2JqZWN0JywgZGVmYXVsdDoge3VybDogY3RhX2d1dGVuYmVyZ19sb2NhdGUucGx1Z2luICsgJ2Fzc2V0cy9pbWFnZXMvY3RhXzEucG5nJywgYWx0OiAnQ2FsbCB0byBhY3Rpb24gSW1hZ2UnLCBpZDogMH0gfSxcclxuXHJcblx0Ly9Db250ZW50XHJcblx0dGl0bGU6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdGbGV4aSBBZGRvbnMgRm9yIEVsZW1lbnRvcicgfSxcclxuXHRkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ0V0aWFtIGNvbnZhbGxpcyBlbGVtZW50dW0gc2FwaWVuLCBhIGFsaXF1YW0gdHVycGlzIGFsaXF1YW0gdml0YWUuIFByYWVzZW50IHNvbGxpY2l0dWRpbiBmZWxpcyB2ZWwgbWkgZmFjaWxpc2lzIHBvc3VlcmUgTnVsbGEgdWx0cmljZXMuJyB9LFxyXG5cdGJ0bl9sYWJlbDogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ0ZyZWUgdHJpYWwnIH0sXHJcblx0YnRuX3VybDogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJyMnIH0sXHJcblx0YnRuX3RhcmdldDogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IDEgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGF0dHJpYnV0ZXM7IiwiZXhwb3J0IGNvbnN0IENsaWNrSWNvbiA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZGFzaGljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk01MTIsMTgzLjc3OFY1MC4yMTNjMC0yNy42MTgtMjIuNDY5LTUwLjA4Ny01MC4wODctNTAuMDg3SDUwLjA4N0MyMi40NjksMC4xMjYsMCwyMi41OTUsMCw1MC4yMTN2MTMzLjU2NSBjMCwyNy42MTgsMjIuNDY5LDUwLjA4Nyw1MC4wODcsNTAuMDg3aDEzNC45bDgwLjYyOCwyNDEuODgzYzUuMDU0LDE1LjE2MSwyNi42MTMsMTUuMTk1LDMxLjY3OCwwbDI2Ljg3NC04MC42MjJMNDMxLjE1LDUwMi4xMSBjMTMuMDE5LDEzLjAxOCwzNC4yMDMsMTMuMDE4LDQ3LjIyMywwbDIzLjYxMi0yMy42MTFjMTMuMDE3LTEzLjAxOSwxMy4wMTctMzQuMjAzLTAuMDAxLTQ3LjIyMkwzOTUuMDAxLDMyNC4yOTNsODAuNjIyLTI2Ljg3NCBjMTUuMTY5LTUuMDU4LDE1LjE4Ni0yNi42MTUsMC0zMS42NzhMMzgwLDIzMy44NjdoODEuOTEzQzQ4OS41MzEsMjMzLjg2NSw1MTIsMjExLjM5Niw1MTIsMTgzLjc3OHogTTQxNy41NDYsMjgxLjU3OSBsLTU4LjczMywxOS41NzdjLTExLjc3LDMuOTIzLTE1LjI4NCwxOC44ODYtNi41MjYsMjcuNjQ1bDEyNi4wODQsMTI2LjA4NmwtMjMuNjEyLDIzLjYxMUwzMjguNjc1LDM1Mi40MTIgYy04Ljc3Ny04Ljc3OS0yMy43MjQtNS4yMy0yNy42NDUsNi41MjZsLTE5LjU3Nyw1OC43MzNsLTY4LjA0Ny0yMDQuMTM5QzIxNy41MDgsMjE0LjksNDAyLjMwNiwyNzYuNDk5LDQxNy41NDYsMjgxLjU3OXogTTI3OS44MjUsMjAwLjQ3NXYtMC4wMDFsLTg3LjUzNi0yOS4xNzhjLTEzLjAxNi00LjM0My0yNS40NjUsOC4wODEtMjEuMTE5LDIxLjExOWwyLjY4Nyw4LjA2MUg1MC4wODcgYy05LjIwNiwwLTE2LjY5Ni03LjQ5LTE2LjY5Ni0xNi42OTZWNTAuMjE0YzAtOS4yMDYsNy40OS0xNi42OTYsMTYuNjk2LTE2LjY5Nmg0MTEuODI2YzkuMjA2LDAsMTYuNjk2LDcuNDksMTYuNjk2LDE2LjY5NlYxODMuNzggYzAsOS4yMDYtNy40OSwxNi42OTYtMTYuNjk2LDE2LjY5NkgyNzkuODI1elwiPjwvcGF0aD5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHQpXHJcbn0iLCJjb25zdCB7IFJpY2hUZXh0LCBNZWRpYVVwbG9hZCwgUGxhaW5UZXh0IH0gPSB3cC5lZGl0b3I7XHJcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcclxuaW1wb3J0IHsgQ2xpY2tJY29uIH0gZnJvbSAnLi9ibG9ja2ljb24nO1xyXG5pbXBvcnQgJy4vY3RhLWNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgYXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL0VkaXQnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoJ2N0YS1ndXRlbmJlcmcvY3RhJywge1xyXG4gIHRpdGxlOiBfXygnQ2FsbCB0byBhY3Rpb24nLCAnY3RhLWd1dGVuYmVyZycpLFxyXG4gIGljb246IENsaWNrSWNvbixcclxuICBjYXRlZ29yeTogJ2NvbW1vbicsXHJcbiAga2V5d29yZHM6IFtcclxuXHRcdF9fKCAnY2FsbCB0byBhY3Rpb24nLCAnY3RhLWd1dGVuYmVyZycgKSxcclxuXHRcdF9fKCAnd3Bwb29sJywgJ2N0YS1ndXRlbmJlcmcnIClcclxuXHRdLFxyXG4gIGF0dHJpYnV0ZXMsXHJcbiAgc3VwcG9ydHM6IHtcclxuICAgIGFsaWduOiB0cnVlXHJcbiAgfSxcclxuICBlZGl0OiBFZGl0LFxyXG4gIHNhdmU6IGZ1bmN0aW9uKCBwcm9wcyApIHtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHVuaXF1ZUlkLFxyXG5cdFx0XHRsYXlvdXQsXHJcblx0XHRcdGlzR3JhZGllbnRCZyxcclxuXHRcdFx0YmdDb2xvcixcclxuXHRcdFx0YmdDb2xvcjIsXHJcblx0XHRcdGJnSW1hZ2UsXHJcblx0XHRcdHRpdGxlLFxyXG5cdFx0XHRkZXNjcmlwdGlvbixcclxuXHRcdFx0YnRuX2xhYmVsLFxyXG5cdFx0XHRidG5fdXJsLFxyXG5cdFx0XHRidG5fdGFyZ2V0XHJcblx0XHR9ID0gcHJvcHMuYXR0cmlidXRlcztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BjYWxsX3RvX2FjdGlvbl8ke2xheW91dH0gY2FsbF90b19hY3Rpb25fJHt1bmlxdWVJZH1gfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOmAkeyhiZ0ltYWdlLnVybCAhPSB1bmRlZmluZWQpID8gYHVybCgke2JnSW1hZ2UudXJsfSlgIDogJ25vbmUnfWBcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdGFfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+e3RpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImN0YWdiLWJ0blwiIHRhcmdldD17YnRuX3RhcmdldCA/ICdfYmxhbmsnOiAnJ30gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e2J0bl91cmx9PntidG5fbGFiZWx9PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0XHR7KGxheW91dCA9PSAxIHx8IGxheW91dCA9PSA4IHx8IGxheW91dCA9PSA5KSA/XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRgXHJcblx0XHRcdFx0XHRcdC5jYWxsX3RvX2FjdGlvbl8ke3VuaXF1ZUlkfTphZnRlcntcclxuXHRcdFx0XHRcdFx0XHQke2lzR3JhZGllbnRCZyA9PSAxID8gYGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtiZ0NvbG9yfSwgJHtiZ0NvbG9yMn0pYCA6IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2JnQ29sb3J9YH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuY2FsbF90b19hY3Rpb25fJHt1bmlxdWVJZH0+LmN0YV9jb250ZW50Pi5jdGFnYi1idG46aG92ZXJ7XHJcblx0XHRcdFx0XHRcdFx0JHtpc0dyYWRpZW50QmcgPT0gMSA/IGBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7YmdDb2xvcjJ9LCAke2JnQ29sb3J9KWAgOiBgYmFja2dyb3VuZC1jb2xvcjogJHtiZ0NvbG9yfWB9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YFxyXG5cdFx0XHRcdFx0XHQ6XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRgLmNhbGxfdG9fYWN0aW9uXyR7dW5pcXVlSWR9e1xyXG5cdFx0XHRcdFx0XHRcdCR7aXNHcmFkaWVudEJnID09IDEgPyBgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2JnQ29sb3J9LCAke2JnQ29sb3IyfSlgIDogYGJhY2tncm91bmQtY29sb3I6ICR7YmdDb2xvcn1gfVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGBcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iLCJjb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBNZWRpYVVwbG9hZCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcbmNvbnN0IHsgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jbGFzcyBDdGFNZWRpYSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc2V0U2V0dGluZ3MobWVkaWEpIHtcclxuXHRcdGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmIChtZWRpYSAmJiBtZWRpYS51cmwpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2UoeyB1cmw6IG1lZGlhLnVybCwgaWQ6IG1lZGlhLmlkLCBhbHQ6IG1lZGlhLmFsdCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSW1hZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0b25DaGFuZ2Uoe30pXHJcblx0fVxyXG4gICAgXHJcbiAgICB2YWxpZGF0ZVVybCh1cmwpIHtcclxuXHRcdGlmIChbJ3dibScsICdqcGcnLCAnanBlZycsICdnaWYnLCAncG5nJywgJ3N2ZyddLmluZGV4T2YodXJsLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKSkgIT0gLTEpIHtcclxuXHRcdFx0cmV0dXJuIHVybDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBjdGFfZ3V0ZW5iZXJnX2xvY2F0ZS5wbHVnaW4gKyAnYXNzZXRzL2ltYWdlcy9jdGFfMS5wbmcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbGFiZWwsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGN0YS1maWVsZCBjdGEtZmllbGQtbWVkaWEtc2VsZWN0b3IgJHtjbGFzc05hbWU/Y2xhc3NOYW1lOicnfWB9PlxyXG4gICAgICAgICAgICAgICAgeyBsYWJlbCAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdGEtZmllbGQtbGFiZWxcIj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtZmllbGQtY29udGVudCBjdGEtZmllbGQtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbCA9PiB0aGlzLnNldFNldHRpbmdzKHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRUeXBlcz17WydpbWFnZSddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodmFsdWUgJiYgdmFsdWUudXJsKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtc2luZ2xlLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN0YS1tZWRpYS1pbWFnZS1wYXJlbnRcIiBvbkNsaWNrPXtvcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMudmFsaWRhdGVVcmwodmFsdWUudXJsKX0gYWx0PXt2YWx1ZS5hbHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1tZWRpYS1hY3Rpb25zIGN0YS1maWVsZC1idXR0b24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3RhLWZpZWxkLWJ1dHRvblwiIGFyaWEtbGFiZWw9e19fKCdFZGl0Jyl9IG9uQ2xpY2s9e29wZW59IHJvbGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1sYWJlbD17X18oJ0VkaXQnKX0gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1lZGl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImN0YS1maWVsZC1idXR0b25cIiBhcmlhLWxhYmVsPXtfXygnUmVtb3ZlJyl9IG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlSW1hZ2UoKX0gcm9sZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX0gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1ub1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtc2luZ2xlLWltZ1wiPjxkaXYgb25DbGljaz17b3Blbn0gY2xhc3NOYW1lPXtcImN0YS1wbGFjZWhvbGRlci1pbWFnZVwifT48RGFzaGljb24gaWNvbj1cImZvcm1hdC1pbWFnZVwiIC8+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDdGFMYXlvdXRTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGxhYmVsLCBvcHRpb25zLCBjb2x1bW5zID0gMiwgY2xhc3NOYW1lLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGN0YS1maWVsZCBjdGEtZmllbGQtbGF5b3V0ICR7Y2xhc3NOYW1lP2NsYXNzTmFtZTonJ31gfT5cclxuICAgICAgICAgICAgICAgIHsgbGFiZWwgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3RhLWZpZWxkLWxhYmVsXCI+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWZpZWxkLWNvbnRlbnQgY3RhLWZpZWxkLWxheW91dC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShkYXRhLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt2YWx1ZSA9PSBkYXRhLnZhbHVlID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuc3R5bGVJY29uICYmIDxzcGFuIGNsYXNzTmFtZT17YGN0YS1sYXlvdXQtc3R5bGUgY3RhLWxheW91dC1zdHlsZS0ke2RhdGEudmFsdWV9YH0+e2RhdGEuc3R5bGVJY29ufTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndwLmN0YUNvbXBvbmVudHMgPSB7XHJcbiAgICBDdGFNZWRpYSxcclxuICAgIEN0YUxheW91dFNlbGVjdG9yXHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY29uc3Qgc3R5bGVpY29ucyA9IHt9O1xyXG5cclxuc3R5bGVpY29ucy5jdGFfbGF5b3V0XzEgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfMVwiPjxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtZm9ybWF0LWltYWdlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImN0YS1pbmZvLWljb25cIj48L3NwYW4+PC9zcGFuPjtcclxuc3R5bGVpY29ucy5jdGFfbGF5b3V0XzIgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfMlwiPjxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtZm9ybWF0LWltYWdlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImN0YS1pbmZvLWljb25cIj48L3NwYW4+PC9zcGFuPjtcclxuc3R5bGVpY29ucy5jdGFfbGF5b3V0XzMgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfM1wiPjxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtZm9ybWF0LWltYWdlXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImN0YS1pbmZvLWljb25cIj48L3NwYW4+PC9zcGFuPjtcclxuc3R5bGVpY29ucy5jdGFfbGF5b3V0XzQgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfNFwiPjxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF81ID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzVcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiY3RhLWluZm8taWNvblwiPjwvc3Bhbj48L3NwYW4+O1xyXG5zdHlsZWljb25zLmN0YV9sYXlvdXRfNiA9IDxzcGFuIGNsYXNzTmFtZT1cImN0YV9sYXlvdXQgY3RhX2xheW91dF82XCI+PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImN0YS1pbmZvLWljb25cIj48L3NwYW4+PC9zcGFuPjtcclxuc3R5bGVpY29ucy5jdGFfbGF5b3V0XzcgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfN1wiPjxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF84ID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzhcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjdGEtaW5mby1pY29uXCI+PC9zcGFuPjwvc3Bhbj47XHJcbnN0eWxlaWNvbnMuY3RhX2xheW91dF85ID0gPHNwYW4gY2xhc3NOYW1lPVwiY3RhX2xheW91dCBjdGFfbGF5b3V0XzlcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiY3RhLWluZm8taWNvblwiPjwvc3Bhbj48L3NwYW4+O1xyXG5zdHlsZWljb25zLmN0YV9sYXlvdXRfMTAgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfMTBcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiY3RhLWluZm8taWNvblwiPjwvc3Bhbj48L3NwYW4+O1xyXG5zdHlsZWljb25zLmN0YV9sYXlvdXRfMTEgPSA8c3BhbiBjbGFzc05hbWU9XCJjdGFfbGF5b3V0IGN0YV9sYXlvdXRfMTFcIj48c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIj48L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiY3RhLWluZm8taWNvblwiPjwvc3Bhbj48L3NwYW4+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVpY29ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==