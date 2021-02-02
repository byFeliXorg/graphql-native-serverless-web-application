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
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        className: "d-flex align-items-center justify-content-center",
        style: {
          minHeight: "100vh"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "w-100",
        style: {
          maxWidth: "400px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }
      }, "Sign Up"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 23
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
          lineNumber: 80,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 23
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
          lineNumber: 90,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 23
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
          lineNumber: 100,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "password-confirm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 23
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
          lineNumber: 112,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        disabled: isInvalid,
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }
      }, "Sign Up"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 31
        }
      }, error.message)))))));
    }
  }]);

  return SignUpForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var SignUpLink = function SignUpLink() {
  return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 3
    }
  }, "Don't have an account?", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_13__["SIGN_UP"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ25VcFBhZ2UiLCJ1cGRhdGVCeVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInZhbHVlIiwiSU5JVElBTF9TVEFURSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZE9uZSIsInBhc3N3b3JkVHdvIiwiZXJyb3IiLCJTaWduVXBGb3JtIiwicHJvcHMiLCJldmVudCIsInN0YXRlIiwiYXV0aCIsImRvQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImF1dGhVc2VyIiwiZGIiLCJkb0NyZWF0ZVVzZXIiLCJ1c2VyIiwidWlkIiwic2V0U3RhdGUiLCJSb3V0ZXIiLCJwdXNoIiwicm91dGVzIiwicHJldmVudERlZmF1bHQiLCJpc0ludmFsaWQiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm9uU3VibWl0IiwidGFyZ2V0IiwibWVzc2FnZSIsIkNvbXBvbmVudCIsIlNpZ25VcExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FDakIsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURpQjtBQUFBLENBQW5COztLQUFNQSxVOztBQU9OLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsWUFBRCxFQUFlQyxLQUFmO0FBQUEsU0FBeUI7QUFBQSx5R0FDbkRELFlBRG1ELEVBQ3BDQyxLQURvQztBQUFBLEdBQXpC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SkosQ0FERixDQURGO0FBc0VEOzs7O0VBMUdzQkMsK0M7O0FBNkd6QixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ3lCLEdBRHpCLEVBRUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVQsOERBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUZGLENBRGlCO0FBQUEsQ0FBbkI7O01BQU1TLFU7QUFRU2xDLHlFQUFmO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmMyNjFjOTkzOTRiODRlMGM4ZGM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBDYXJkLCBBbGVydCxDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBXaXRoQXV0aGVudGljYXRpb24gfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgKiBhcyByb3V0ZXMgZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvcm91dGVzXCI7XHJcblxyXG5jb25zdCBTaWduVXBQYWdlID0gKCkgPT4gKFxyXG4gIDxBcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbiAgICA8aDE+U2lnblVwPC9oMT5cclxuICAgIDxTaWduVXBGb3JtIC8+XHJcbiAgPC9BcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbik7XHJcblxyXG5jb25zdCB1cGRhdGVCeVByb3BlcnR5TmFtZSA9IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiAoKSA9PiAoe1xyXG4gIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgcGFzc3dvcmRPbmU6IFwiXCIsXHJcbiAgcGFzc3dvcmRUd286IFwiXCIsXHJcbiAgZXJyb3I6IG51bGxcclxufTtcclxuXHJcbmNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4uSU5JVElBTF9TVEFURSB9O1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmRPbmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9DcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkT25lKVxyXG4gICAgICAudGhlbihhdXRoVXNlciA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgdXNlciBpbiB5b3VyIG93biBhY2Nlc3NpYmxlIEZpcmViYXNlIERhdGFiYXNlIHRvb1xyXG4gICAgICAgIGRiLmRvQ3JlYXRlVXNlcihhdXRoVXNlci51c2VyLnVpZCwgdXNlcm5hbWUsIGVtYWlsKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IC4uLklOSVRJQUxfU1RBVEUgfSkpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChyb3V0ZXMuSE9NRSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmRPbmUsIHBhc3N3b3JkVHdvLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpc0ludmFsaWQgPVxyXG4gICAgICBwYXNzd29yZE9uZSAhPT0gcGFzc3dvcmRUd28gfHwgcGFzc3dvcmRPbmUgPT09IFwiXCIgfHwgdXNlcm5hbWUgPT09IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNDAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+U2lnbiBVcDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwidXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlVzZXIgTmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwidXNlcm5hbWVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJlbWFpbFwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17cGFzc3dvcmRPbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkT25lXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBpZD1cInBhc3N3b3JkLWNvbmZpcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkIENvbmZpcm1hdGlvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdmFsdWU9e3Bhc3N3b3JkVHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJwYXNzd29yZFR3b1wiLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgU2lnblVwTGluayA9ICgpID0+IChcclxuICA8cD5cclxuICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XHJcbiAgICA8TGluayBocmVmPXtyb3V0ZXMuU0lHTl9VUH0+XHJcbiAgICAgIDxhPlNpZ24gVXA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBTaWduVXBQYWdlO1xyXG5leHBvcnQgeyBTaWduVXBGb3JtLCBTaWduVXBMaW5rIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=