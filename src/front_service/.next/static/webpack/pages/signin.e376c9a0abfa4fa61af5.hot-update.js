webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default, SignInForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInForm", function() { return SignInForm; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup */ "./pages/signup.js");
/* harmony import */ var _pw_forget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pw-forget */ "./pages/pw-forget.js");
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");








var _this = undefined,
    _jsxFileName = "D:\\DEV\\git_microservices\\microservices\\src\\front_service\\pages\\signin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var SignInPage = function SignInPage() {
  return __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_12__["AppWithAuthentication"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "SignIn"), __jsx(SignInForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx(_pw_forget__WEBPACK_IMPORTED_MODULE_11__["PasswordForgetLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx(_signup__WEBPACK_IMPORTED_MODULE_10__["SignUpLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }));
};

_c = SignInPage;

var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

var SignInForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SignInForm, _Component);

  var _super = _createSuper(SignInForm);

  function SignInForm(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignInForm);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "onSubmit", function (event) {
      var _this2$state = _this2.state,
          email = _this2$state.email,
          password = _this2$state.password;
      _src_firebase__WEBPACK_IMPORTED_MODULE_13__["auth"].doSignInWithEmailAndPassword(email, password).then(function () {
        _this2.setState(function () {
          return _objectSpread({}, INITIAL_STATE);
        });

        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(_src_constants_routes__WEBPACK_IMPORTED_MODULE_14__["HOME"]);
      })["catch"](function (error) {
        _this2.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    _this2.state = _objectSpread({}, INITIAL_STATE);
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignInForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          error = _this$state.error;
      var isInvalid = password === "" || email === "";
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
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
          lineNumber: 61,
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
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 19
        }
      }, "Login"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        id: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 23
        }
      }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        value: email,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("email", event.target.value));
        },
        type: "text",
        placeholder: "Email Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
        id: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 23
        }
      }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
        value: password,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("password", event.target.value));
        },
        type: "password",
        placeholder: "Password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        disabled: isInvalid,
        type: "submit",
        className: "w-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, "LOGIN"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 31
        }
      }, error.message)))))));
    }
  }]);

  return SignInForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignInPage);


var _c;

$RefreshReg$(_c, "SignInPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIlNpZ25JblBhZ2UiLCJ1cGRhdGVCeVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInZhbHVlIiwiSU5JVElBTF9TVEFURSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsIlNpZ25JbkZvcm0iLCJwcm9wcyIsImV2ZW50Iiwic3RhdGUiLCJhdXRoIiwiZG9TaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJzZXRTdGF0ZSIsIlJvdXRlciIsInB1c2giLCJyb3V0ZXMiLCJwcmV2ZW50RGVmYXVsdCIsImlzSW52YWxpZCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJtZXNzYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUNqQixNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURpQjtBQUFBLENBQW5COztLQUFNQSxVOztBQVNOLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsWUFBRCxFQUFlQyxLQUFmO0FBQUEsU0FBeUI7QUFBQSx5R0FDbkRELFlB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LEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsYUFBSyxFQUFFRyxRQUFyQjtBQUNFLGdCQUFRLEVBQUUsa0JBQUFJLEtBQUs7QUFBQSxpQkFDYixNQUFJLENBQUNLLFFBQUwsQ0FBY2Qsb0JBQW9CLENBQUMsVUFBRCxFQUFhUyxLQUFLLENBQUNjLE1BQU4sQ0FBYXJCLEtBQTFCLENBQWxDLENBRGE7QUFBQSxTQURqQjtBQUlFLFlBQUksRUFBQyxVQUpQO0FBS0UsbUJBQVcsRUFBQyxVQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQVpGLEVBc0JFLE1BQUMsc0RBQUQ7QUFBUSxnQkFBUSxFQUFFaUIsU0FBbEI7QUFBNkIsWUFBSSxFQUFDLFFBQWxDO0FBQTJDLGlCQUFTLEVBQUMsT0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkYsRUF5QkdiLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlBLEtBQUssQ0FBQ2tCLE9BQVYsQ0F6QlosQ0FIRixDQURKLENBRkEsQ0FKSixDQUZGLENBREY7QUFpREQ7Ozs7RUE3RXNCQywrQzs7QUFnRlYxQix5RUFBZjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5lMzc2YzlhMGFiZmE0ZmE2MWFmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQsIEFsZXJ0LENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25VcExpbmsgfSBmcm9tIFwiLi9zaWdudXBcIjtcclxuaW1wb3J0IHsgUGFzc3dvcmRGb3JnZXRMaW5rIH0gZnJvbSBcIi4vcHctZm9yZ2V0XCI7XHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL3JvdXRlc1wiO1xyXG5cclxuY29uc3QgU2lnbkluUGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPGgxPlNpZ25JbjwvaDE+XHJcbiAgICA8U2lnbkluRm9ybSAvPlxyXG4gICAgPFBhc3N3b3JkRm9yZ2V0TGluayAvPlxyXG4gICAgPFNpZ25VcExpbmsgLz5cclxuICA8L0FwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5UHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+ICgpID0+ICh7XHJcbiAgW3Byb3BlcnR5TmFtZV06IHZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZDogXCJcIixcclxuICBlcnJvcjogbnVsbFxyXG59O1xyXG5cclxuY2xhc3MgU2lnbkluRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGF1dGhcclxuICAgICAgLmRvU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChyb3V0ZXMuSE9NRSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlzSW52YWxpZCA9IHBhc3N3b3JkID09PSBcIlwiIHx8IGVtYWlsID09PSBcIlwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjUwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBpZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZW1haWxcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBpZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwicGFzc3dvcmRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctMTAwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTE9HSU5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluUGFnZTtcclxuXHJcbmV4cG9ydCB7IFNpZ25JbkZvcm0gfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==