webpackHotUpdate_N_E("pages/pw-forget",{

/***/ "./pages/pw-forget.js":
/*!****************************!*\
  !*** ./pages/pw-forget.js ***!
  \****************************/
/*! exports provided: default, PasswordForgetForm, PasswordForgetLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetForm", function() { return PasswordForgetForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetLink", function() { return PasswordForgetLink; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");








var _this = undefined,
    _jsxFileName = "D:\\DEV\\git_microservices\\microservices\\src\\front_service\\pages\\pw-forget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var PasswordForgetPage = function PasswordForgetPage() {
  return __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_10__["AppWithAuthentication"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(PasswordForgetForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }));
};

_c = PasswordForgetPage;

var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  email: "",
  error: null
};

var PasswordForgetForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PasswordForgetForm, _Component);

  var _super = _createSuper(PasswordForgetForm);

  function PasswordForgetForm(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PasswordForgetForm);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "onSubmit", function (event) {
      var email = _this2.state.email;
      _src_firebase__WEBPACK_IMPORTED_MODULE_12__["auth"].doPasswordReset(email).then(function () {
        _this2.setState(function () {
          return _objectSpread({}, INITIAL_STATE);
        });
      })["catch"](function (error) {
        _this2.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    _this2.state = _objectSpread({}, INITIAL_STATE);
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PasswordForgetForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          email = _this$state.email,
          error = _this$state.error;
      var isInvalid = email === "";
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        className: "d-flex align-items-center justify-content-center",
        style: {
          minHeight: "100vh"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "w-100",
        style: {
          maxWidth: "500px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 19
        }
      }, "Reset Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        id: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        value: this.state.email,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("email", event.target.value));
        },
        type: "text",
        placeholder: "Email Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: isInvalid,
        className: "w-100",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, "RESET PASSWORD"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 31
        }
      }, error.message)))))));
    }
  }]);

  return PasswordForgetForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var PasswordForgetLink = function PasswordForgetLink() {
  return __jsx("p", {
    className: "w-100 text-center mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_11__["PASSWORD_FORGET"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "Forgot Password?")));
};

_c2 = PasswordForgetLink;
/* harmony default export */ __webpack_exports__["default"] = (PasswordForgetPage);


var _c, _c2;

$RefreshReg$(_c, "PasswordForgetPage");
$RefreshReg$(_c2, "PasswordForgetLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHctZm9yZ2V0LmpzIl0sIm5hbWVzIjpbIlBhc3N3b3JkRm9yZ2V0UGFnZSIsInVwZGF0ZUJ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJJTklUSUFMX1NUQVRFIiwiZW1haWwiLCJlcnJvciIsIlBhc3N3b3JkRm9yZ2V0Rm9ybSIsInByb3BzIiwiZXZlbnQiLCJzdGF0ZSIsImF1dGgiLCJkb1Bhc3N3b3JkUmVzZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlzSW52YWxpZCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJtZXNzYWdlIiwiQ29tcG9uZW50IiwiUGFzc3dvcmRGb3JnZXRMaW5rIiwicm91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUN6QixNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUR5QjtBQUFBLENBQTNCOztLQUFNQSxrQjs7QUFNTixJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFlBQUQsRUFBZUMsS0FBZjtBQUFBLFNBQXlCO0FBQUEseUdBQ25ERCxZQURtRCxFQUNwQ0MsS0FEb0M7QUFBQSxHQUF6QjtBQUFBLENBQTdCOztBQUlBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsT0FBSyxFQUFFLEVBRGE7QUFFcEJDLE9BQUssRUFBRTtBQUZhLENBQXRCOztJQUtNQyxrQjs7Ozs7QUFDSiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztB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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUMsc0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERixDQUR5QjtBQUFBLENBQTNCOztNQUFNRCxrQjtBQVFTdkIsaUZBQWY7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wdy1mb3JnZXQuNmQwZTQwYzdkODNjNjkwYjI4YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQsIEFsZXJ0LENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL3JvdXRlc1wiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5cclxuY29uc3QgUGFzc3dvcmRGb3JnZXRQYWdlID0gKCkgPT4gKFxyXG4gIDxBcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbiAgICA8UGFzc3dvcmRGb3JnZXRGb3JtIC8+XHJcbiAgPC9BcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbik7XHJcblxyXG5jb25zdCB1cGRhdGVCeVByb3BlcnR5TmFtZSA9IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiAoKSA9PiAoe1xyXG4gIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgZXJyb3I6IG51bGxcclxufTtcclxuXHJcbmNsYXNzIFBhc3N3b3JkRm9yZ2V0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9QYXNzd29yZFJlc2V0KGVtYWlsKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpc0ludmFsaWQgPSBlbWFpbCA9PT0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNTAwcHhcIiB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5SZXNldCBQYXNzd29yZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSBjbGFzc05hbWU9XCJ3LTEwMFwiICB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VUIFBBU1NXT1JEXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFBhc3N3b3JkRm9yZ2V0TGluayA9ICgpID0+IChcclxuICA8cCAgY2xhc3NOYW1lPVwidy0xMDAgdGV4dC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgPExpbmsgaHJlZj17cm91dGVzLlBBU1NXT1JEX0ZPUkdFVH0+XHJcbiAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRGb3JnZXRQYWdlO1xyXG5cclxuZXhwb3J0IHsgUGFzc3dvcmRGb3JnZXRGb3JtLCBQYXNzd29yZEZvcmdldExpbmsgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==