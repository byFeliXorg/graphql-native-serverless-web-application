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
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "PasswordForget"), __jsx(PasswordForgetForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
          lineNumber: 53,
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
          lineNumber: 55,
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
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 19
        }
      }, "Login"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        id: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
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
          lineNumber: 69,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: isInvalid,
        className: "w-100",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, "Reset Password"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
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
      lineNumber: 95,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_11__["PASSWORD_FORGET"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHctZm9yZ2V0LmpzIl0sIm5hbWVzIjpbIlBhc3N3b3JkRm9yZ2V0UGFnZSIsInVwZGF0ZUJ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJJTklUSUFMX1NUQVRFIiwiZW1haWwiLCJlcnJvciIsIlBhc3N3b3JkRm9yZ2V0Rm9ybSIsInByb3BzIiwiZXZlbnQiLCJzdGF0ZSIsImF1dGgiLCJkb1Bhc3N3b3JkUmVzZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlzSW52YWxpZCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJtZXNzYWdlIiwiQ29tcG9uZW50IiwiUGFzc3dvcmRGb3JnZXRMaW5rIiwicm91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUN6QixNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUUsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FEeUI7QUFBQSxDQUEzQjs7S0FBTUEsa0I7O0FBT04sSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxZQUFELEVBQWVDLEtBQWY7QUFBQSxTQUF5QjtBQUFBLHlHQUNuREQsWUFEbUQsRUFDcENDLEtBRG9DO0FBQUEsR0FBekI7QUFBQSxDQUE3Qjs7QUFJQSxJQUFNQyxhQUFhLEdBQUc7QUFDcEJDLE9BQUssRUFBRSxFQURhO0FBRXBCQyxPQUFLLEVBQUU7QUFGYSxDQUF0Qjs7SUFL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QUEsU0FDekI7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVDLHNFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsQ0FEeUI7QUFBQSxDQUEzQjs7TUFBTUQsa0I7QUFRU3ZCLGlGQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHctZm9yZ2V0LjhkYjY4Nzg0MWVmY2E2NmY1NjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBDYXJkLCBBbGVydCxDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcclxuXHJcbmNvbnN0IFBhc3N3b3JkRm9yZ2V0UGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPGgxPlBhc3N3b3JkRm9yZ2V0PC9oMT5cclxuICAgIDxQYXNzd29yZEZvcmdldEZvcm0gLz5cclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5UHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+ICgpID0+ICh7XHJcbiAgW3Byb3BlcnR5TmFtZV06IHZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBlbWFpbDogXCJcIixcclxuICBlcnJvcjogbnVsbFxyXG59O1xyXG5cclxuY2xhc3MgUGFzc3dvcmRGb3JnZXRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IC4uLklOSVRJQUxfU1RBVEUgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBhdXRoXHJcbiAgICAgIC5kb1Bhc3N3b3JkUmVzZXQoZW1haWwpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IC4uLklOSVRJQUxfU1RBVEUgfSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlcnJvclwiLCBlcnJvcikpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZW1haWwsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlzSW52YWxpZCA9IGVtYWlsID09PSBcIlwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI1MDBweFwiIH19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZW1haWxcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0ludmFsaWR9IGNsYXNzTmFtZT1cInctMTAwXCIgIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUGFzc3dvcmRGb3JnZXRMaW5rID0gKCkgPT4gKFxyXG4gIDxwICBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBtdC0zXCI+XHJcbiAgICA8TGluayBocmVmPXtyb3V0ZXMuUEFTU1dPUkRfRk9SR0VUfT5cclxuICAgICAgPGE+Rm9yZ290IFBhc3N3b3JkPzwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L3A+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEZvcmdldFBhZ2U7XHJcblxyXG5leHBvcnQgeyBQYXNzd29yZEZvcmdldEZvcm0sIFBhc3N3b3JkRm9yZ2V0TGluayB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9