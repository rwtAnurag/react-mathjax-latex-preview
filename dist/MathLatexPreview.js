"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _Main = _interopRequireDefault(require("./Main.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MathLatexPreview = function MathLatexPreview(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? "" : _props$className,
    style = props.style,
    _props$math = props.math,
    math = _props$math === void 0 ? "" : _props$math;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Main["default"], {
    className: className,
    style: style,
    math: math
  })));
};
var _default = /*#__PURE__*/(0, _react.memo)(MathLatexPreview);
exports["default"] = _default;