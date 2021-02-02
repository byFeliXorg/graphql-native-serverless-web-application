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
  }, __jsx(SignUpForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
          lineNumber: 65,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        className: "d-flex align-items-center justify-content-center",
        style: {
          minHeight: "80vh"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
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
          lineNumber: 70,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 19
        }
      }, "Join FeliX Community !"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
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
          lineNumber: 79,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
          lineNumber: 89,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
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
          lineNumber: 99,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Group, {
        id: "password-confirm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
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
          lineNumber: 111,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        disabled: isInvalid,
        className: "w-100",
        style: {
          color: "#00005c",
          margin: "5%",
          boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"
        },
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }, "JOIN NOW"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 31
        }
      }, error.message)))))));
    }
  }]);

  return SignUpForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var SignUpLink = function SignUpLink() {
  return __jsx("p", {
    className: "w-100 text-center mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 3
    }
  }, "Don't have an account?", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_13__["SIGN_UP"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ25VcFBhZ2UiLCJ1cGRhdGVCeVByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInZhbHVlIiwiSU5JVElBTF9TVEFURSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZE9uZSIsInBhc3N3b3JkVHdvIiwiZXJyb3IiLCJTaWduVXBGb3JtIiwicHJvcHMiLCJldmVudCIsInN0YXRlIiwiYXV0aCIsImRvQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImF1dGhVc2VyIiwiZGIiLCJkb0NyZWF0ZVVzZXIiLCJ1c2VyIiwidWlkIiwic2V0U3RhdGUiLCJSb3V0ZXIiLCJwdXNoIiwicm91dGVzIiwicHJldmVudERlZmF1bHQiLCJpc0ludmFsaWQiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm9uU3VibWl0IiwidGFyZ2V0IiwiY29sb3IiLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJtZXNzYWdlIiwiQ29tcG9uZW50IiwiU2lnblVwTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUNqQixNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRGlCO0FBQUEsQ0FBbkI7O0tBQU1BLFU7O0FBTU4sSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxZQUFELEVBQWVDLEtBQWY7QUFBQSxTQUF5QjtBQUFBLHlHQUNuREQsWUFEbUQsRUFDcENDLEtBRG9DO0FBQUEsR0FBekI7QUFBQSxDQUE3Qjs7QUFJ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QWlER3pCLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlBLEtBQUssQ0FBQzBCLE9BQVYsQ0FqRFosQ0FIRixDQURGLENBREYsQ0FKSixDQURGLENBREY7QUFzRUQ7Ozs7RUExR3NCQywrQzs7QUE2R3pCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FDakI7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDeUIsR0FEekIsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFWiw4REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBRkYsQ0FEaUI7QUFBQSxDQUFuQjs7TUFBTVksVTtBQVFTckMseUVBQWY7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuYTc5OTMyZDQzZDI1NjM0ZTRiYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQsIEFsZXJ0LENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tIFwiLi4vc3JjL2ZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IFNpZ25VcFBhZ2UgPSAoKSA9PiAoXHJcbiAgPEFwcFdpdGhBdXRoZW50aWNhdGlvbj5cclxuICAgIDxTaWduVXBGb3JtIC8+XHJcbiAgPC9BcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbik7XHJcblxyXG5jb25zdCB1cGRhdGVCeVByb3BlcnR5TmFtZSA9IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiAoKSA9PiAoe1xyXG4gIFtwcm9wZXJ0eU5hbWVdOiB2YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgcGFzc3dvcmRPbmU6IFwiXCIsXHJcbiAgcGFzc3dvcmRUd286IFwiXCIsXHJcbiAgZXJyb3I6IG51bGxcclxufTtcclxuXHJcbmNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4uSU5JVElBTF9TVEFURSB9O1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmRPbmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgYXV0aFxyXG4gICAgICAuZG9DcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkT25lKVxyXG4gICAgICAudGhlbihhdXRoVXNlciA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgdXNlciBpbiB5b3VyIG93biBhY2Nlc3NpYmxlIEZpcmViYXNlIERhdGFiYXNlIHRvb1xyXG4gICAgICAgIGRiLmRvQ3JlYXRlVXNlcihhdXRoVXNlci51c2VyLnVpZCwgdXNlcm5hbWUsIGVtYWlsKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IC4uLklOSVRJQUxfU1RBVEUgfSkpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChyb3V0ZXMuSE9NRSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwiZXJyb3JcIiwgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmRPbmUsIHBhc3N3b3JkVHdvLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBpc0ludmFsaWQgPVxyXG4gICAgICBwYXNzd29yZE9uZSAhPT0gcGFzc3dvcmRUd28gfHwgcGFzc3dvcmRPbmUgPT09IFwiXCIgfHwgdXNlcm5hbWUgPT09IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjgwdmhcIiB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI1MDBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5Kb2luIEZlbGlYIENvbW11bml0eSAhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VXNlciBOYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoXCJ1c2VybmFtZVwiLCBldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWw8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHZhbHVlPXtwYXNzd29yZE9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ5UHJvcGVydHlOYW1lKFwicGFzc3dvcmRPbmVcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwicGFzc3dvcmQtY29uZmlybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQgQ29uZmlybWF0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17cGFzc3dvcmRUd299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCeVByb3BlcnR5TmFtZShcInBhc3N3b3JkVHdvXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSBjbGFzc05hbWU9XCJ3LTEwMFwiIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDVjXCIsIG1hcmdpbjogXCI1JVwiLCBib3hTaGFkb3c6IFwiNXB4IDVweCAzcHggcmdiYSg0NiwgNDYsIDQ2LCAwLjYyKVwifX0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSk9JTiBOT1dcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFNpZ25VcExpbmsgPSAoKSA9PiAoXHJcbiAgPHAgIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIG10LTNcIj5cclxuICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XHJcbiAgICA8TGluayBocmVmPXtyb3V0ZXMuU0lHTl9VUH0+XHJcbiAgICAgIDxhPlNpZ24gVXA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBTaWduVXBQYWdlO1xyXG5leHBvcnQgeyBTaWduVXBGb3JtLCBTaWduVXBMaW5rIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=