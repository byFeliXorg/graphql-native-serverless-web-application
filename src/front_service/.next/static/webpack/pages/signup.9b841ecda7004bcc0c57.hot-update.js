webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default, SignUpForm, SignUpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return SignUpForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpLink", function() { return SignUpLink; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");








var _this = undefined,
    _jsxFileName = "D:\\DEV\\git_microservices\\microservices\\src\\front_service\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var SignUpPage = function SignUpPage() {
  return __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_11__["AppWithAuthentication"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, "SignUp"), __jsx(SignUpForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};

_c = SignUpPage;

var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

var SignUpForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUpForm, _Component);

  var _super = _createSuper(SignUpForm);

  function SignUpForm(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUpForm);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "onSubmit", function (event) {
      var _this2$state = _this2.state,
          username = _this2$state.username,
          email = _this2$state.email,
          passwordOne = _this2$state.passwordOne;
      _src_firebase__WEBPACK_IMPORTED_MODULE_12__["auth"].doCreateUserWithEmailAndPassword(email, passwordOne).then(function (authUser) {
        // Create a user in your own accessible Firebase Database too
        _src_firebase__WEBPACK_IMPORTED_MODULE_12__["db"].doCreateUser(authUser.user.uid, username, email).then(function () {
          _this2.setState(function () {
            return _objectSpread({}, INITIAL_STATE);
          });

          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(_src_constants_routes__WEBPACK_IMPORTED_MODULE_13__["HOME"]);
        })["catch"](function (error) {
          _this2.setState(updateByPropertyName("error", error));
        });
      })["catch"](function (error) {
        _this2.setState(updateByPropertyName("error", error));
      });
      event.preventDefault();
    });

    _this2.state = _objectSpread({}, INITIAL_STATE);
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUpForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          username = _this$state.username,
          email = _this$state.email,
          passwordOne = _this$state.passwordOne,
          passwordTwo = _this$state.passwordTwo,
          error = _this$state.error;
      var isInvalid = passwordOne !== passwordTwo || passwordOne === "" || username === "";
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, "Sign Up"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, "User Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        value: username,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("username", event.target.value));
        },
        type: "text",
        placeholder: "User Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        value: email,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("email", event.target.value));
        },
        type: "text",
        placeholder: "Email Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        value: passwordOne,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("passwordOne", event.target.value));
        },
        type: "password",
        placeholder: "Password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "password-confirm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, "Password Confirmation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
        value: passwordTwo,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("passwordTwo", event.target.value));
        },
        type: "password",
        placeholder: "Confirm Password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        disabled: isInvalid,
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, "Sign Up"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }
      }, error.message)))));
    }
  }]);

  return SignUpForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var SignUpLink = function SignUpLink() {
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 3
    }
  }, "Don't have an account?", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_13__["SIGN_UP"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "Sign Up")));
};

_c2 = SignUpLink;
/* harmony default export */ __webpack_exports__["default"] = (SignUpPage);


var _c, _c2;

$RefreshReg$(_c, "SignUpPage");
$RefreshReg$(_c2, "SignUpLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ25VcFBhZ2UiLCJ1cGRhdGVCeVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInZhbHVlIiwiSU5JVElBTF9TVEFURSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZE9uZSIsInBhc3N3b3JkVHdvIiwiZXJyb3IiLCJTaWduVXBGb3JtIiwicHJvcHMiLCJldmVudCIsInN0YXRlIiwiYXV0aCIsImRvQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImF1dGhVc2VyIiwiZGIiLCJkb0NyZWF0ZVVzZXIiLCJ1c2VyIiwidWlkIiwic2V0U3RhdGUiLCJSb3V0ZXIiLCJwdXNoIiwicm91dGVzIiwicHJldmVudERlZmF1bHQiLCJpc0ludmFsaWQiLCJvblN1Ym1pdCIsInRhcmdldCIsIm1lc3NhZ2UiLCJDb21wb25lbnQiLCJTaWduVXBMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FEaUI7QUFBQSxDQUFuQjs7S0FBTUEsVTs7QUFPTixJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFlBQUQsRUFBZUMsS0FBZjtBQUFBLFNBQXlCO0FBQUEseUdBQ25ERCxZQURtRCxFQUNwQ0MsS0FEb0M7QUFBQSxHQUF6QjtBQUFBLENBQTdCOztBQUlBLElBQU1D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aUI7QUFBQSxDQUFuQjs7TUFBTU8sVTtBQVFTaEMseUVBQWY7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuOWI4NDFlY2RhNzAwNGJjYzBjNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQsIEFsZXJ0IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwV2l0aEF1dGhlbnRpY2F0aW9uIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuLi9zcmMvZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL3JvdXRlc1wiO1xyXG5cclxuY29uc3QgU2lnblVwUGFnZSA9ICgpID0+IChcclxuICA8QXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4gICAgPGgxPlNpZ25VcDwvaDE+XHJcbiAgICA8U2lnblVwRm9ybSAvPlxyXG4gIDwvQXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnlQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4gKCkgPT4gKHtcclxuICBbcHJvcGVydHlOYW1lXTogdmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIHVzZXJuYW1lOiBcIlwiLFxyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkT25lOiBcIlwiLFxyXG4gIHBhc3N3b3JkVHdvOiBcIlwiLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBTaWduVXBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IC4uLklOSVRJQUxfU1RBVEUgfTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkT25lIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGF1dGhcclxuICAgICAgLmRvQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZE9uZSlcclxuICAgICAgLnRoZW4oYXV0aFVzZXIgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBhIHVzZXIgaW4geW91ciBvd24gYWNjZXNzaWJsZSBGaXJlYmFzZSBEYXRhYmFzZSB0b29cclxuICAgICAgICBkYi5kb0NyZWF0ZVVzZXIoYXV0aFVzZXIudXNlci51aWQsIHVzZXJuYW1lLCBlbWFpbClcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyAuLi5JTklUSUFMX1NUQVRFIH0pKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2gocm91dGVzLkhPTUUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlcnJvclwiLCBlcnJvcikpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkT25lLCBwYXNzd29yZFR3bywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaXNJbnZhbGlkID1cclxuICAgICAgcGFzc3dvcmRPbmUgIT09IHBhc3N3b3JkVHdvIHx8IHBhc3N3b3JkT25lID09PSBcIlwiIHx8IHVzZXJuYW1lID09PSBcIlwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5TaWduIFVwPC9oMj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlciBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJ1c2VybmFtZVwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHZhbHVlPXtwYXNzd29yZE9uZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwicGFzc3dvcmRPbmVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwicGFzc3dvcmQtY29uZmlybVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQgQ29uZmlybWF0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17cGFzc3dvcmRUd299XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkVHdvXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFNpZ25VcExpbmsgPSAoKSA9PiAoXHJcbiAgPHA+XHJcbiAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgPExpbmsgaHJlZj17cm91dGVzLlNJR05fVVB9PlxyXG4gICAgICA8YT5TaWduIFVwPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvcD5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwUGFnZTtcclxuZXhwb3J0IHsgU2lnblVwRm9ybSwgU2lnblVwTGluayB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9