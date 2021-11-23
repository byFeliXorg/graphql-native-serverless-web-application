webpackHotUpdate_N_E("pages/account",{

/***/ "./src/components/PasswordChange/index.js":
/*!************************************************!*\
  !*** ./src/components/PasswordChange/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ "./src/firebase/index.js");







var _jsxFileName = "D:\\DEV\\git_microservices\\microservices\\src\\front_service\\src\\components\\PasswordChange\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

var PasswordChangeForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PasswordChangeForm, _Component);

  var _super = _createSuper(PasswordChangeForm);

  function PasswordChangeForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PasswordChangeForm);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSubmit", function (event) {
      var passwordOne = _this.state.passwordOne;
      _firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].doPasswordUpdate(passwordOne).then(function () {
        _this.setState(function () {
          return _objectSpread({}, INITIAL_STATE);
        });
      })["catch"](function (error) {
        _this.setState(updateByPropertyName('error', error));
      });
      event.preventDefault();
    });

    _this.state = _objectSpread({}, INITIAL_STATE);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PasswordChangeForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          passwordOne = _this$state.passwordOne,
          passwordTwo = _this$state.passwordTwo,
          error = _this$state.error;
      var isInvalid = passwordOne !== passwordTwo || passwordOne === '';
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        className: "d-flex align-items-center justify-content-center",
        style: {
          minHeight: "80vh"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx("h2", {
        className: "text-center mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }
      }, "Reset Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        id: "newpassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 23
        }
      }, "New Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        value: passwordOne,
        onChange: function onChange(event) {
          return _this2.setState(updateByPropertyName('passwordOne', event.target.value));
        },
        type: "password",
        placeholder: "New Password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        id: "confpassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 23
        }
      }, "New Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
        value: passwordTwo,
        onChange: function onChange(event) {
          return _this2.setState(updateByPropertyName('passwordTwo', event.target.value));
        },
        type: "password",
        placeholder: "Confirm New Password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        disabled: isInvalid,
        className: "w-100",
        type: "submit",
        style: {
          background: "#343a40",
          color: "#ffc107",
          border: "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }
      }, "RESET PASSWORD"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 32
        }
      }, error.message))))));
    }
  }]);

  return PasswordChangeForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PasswordChangeForm);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFzc3dvcmRDaGFuZ2UvaW5kZXguanMiXSwibmFtZXMiOlsidXBkYXRlQnlQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJ2YWx1ZSIsIklOSVRJQUxfU1RBVEUiLCJwYXNzd29yZE9uZSIsInBhc3N3b3JkVHdvIiwiZXJyb3IiLCJQYXNzd29yZENoYW5nZUZvcm0iLCJwcm9wcyIsImV2ZW50Iiwic3RhdGUiLCJhdXRoIiwiZG9QYXNzd29yZFVwZGF0ZSIsInRoZW4iLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiaXNJbnZhbGlkIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJvblN1Ym1pdCIsInRhcmdldCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsIm1lc3NhZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxZQUFELEVBQWVDLEtBQWY7QUFBQSxTQUF5QjtBQUFBLHlHQUNuREQsWUFEbUQsRUFDcENDLEtBRG9DO0FBQUEsR0FBekI7QUFBQSxDQUE3Qjs7QUFJQSxJQUFNQyxhQUFhLEdBQUc7QUFDcEJDLGFBQVcsRUFBRSxFQURPO0FBRXBCQyxhQUFXLEVBQUUsRUFGTztBQUdwQkMsT0FBSyxFQUFFO0FBSGEsQ0FBdEI7O0lBTU1DLGtCOzs7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixtTkFNUixVQUFDQyxLQUFELEVBQVc7QUFBQSxVQUNaTCxXQURZLEdBQ0ksTUFBS00sS0FEVCxDQUNaTixXQURZO0FBR3BCTyxvREFBSSxDQUFDQyxnQkFBTCxDQUFzQlIsV0FBdEIsRUFDR1MsSUFESCxDQUNRLFlBQU07QUFDVixjQUFLQyxR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LGFBQUssRUFBRTtBQUFDSyxvQkFBVSxFQUFDLFNBQVo7QUFBc0JDLGVBQUssRUFBQyxTQUE1QjtBQUFzQ0MsZ0JBQU0sRUFBRTtBQUE5QyxTQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXBCRixFQXVCSWpCLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlBLEtBQUssQ0FBQ2tCLE9BQVYsQ0F2QmIsQ0FIRixDQURKLENBRkEsQ0FKSixDQURKO0FBeUNEOzs7O0VBekU4QkMsK0M7O0FBNEVsQmxCLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjY291bnQuOGZlMGEwOGU1ZDc5OTUwMGVhM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgQ2FyZCwgQWxlcnQsQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5UHJvcGVydHlOYW1lID0gKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+ICgpID0+ICh7XHJcbiAgW3Byb3BlcnR5TmFtZV06IHZhbHVlLFxyXG59KTtcclxuXHJcbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XHJcbiAgcGFzc3dvcmRPbmU6ICcnLFxyXG4gIHBhc3N3b3JkVHdvOiAnJyxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNsYXNzIFBhc3N3b3JkQ2hhbmdlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi5JTklUSUFMX1NUQVRFIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXNzd29yZE9uZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBhdXRoLmRvUGFzc3dvcmRVcGRhdGUocGFzc3dvcmRPbmUpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IC4uLklOSVRJQUxfU1RBVEUgfSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoJ2Vycm9yJywgZXJyb3IpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcGFzc3dvcmRPbmUsXHJcbiAgICAgIHBhc3N3b3JkVHdvLFxyXG4gICAgICBlcnJvcixcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGlzSW52YWxpZCA9XHJcbiAgICAgIHBhc3N3b3JkT25lICE9PSBwYXNzd29yZFR3byB8fFxyXG4gICAgICBwYXNzd29yZE9uZSA9PT0gJyc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCI4MHZoXCIgfX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNTAwcHhcIiB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5SZXNldCBQYXNzd29yZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwibmV3cGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5ldyBQYXNzd29yZDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZE9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUodXBkYXRlQnlQcm9wZXJ0eU5hbWUoJ3Bhc3N3b3JkT25lJywgZXZlbnQudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IFBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwiY29uZnBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OZXcgUGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRUd299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHVwZGF0ZUJ5UHJvcGVydHlOYW1lKCdwYXNzd29yZFR3bycsIGV2ZW50LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gTmV3IFBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzSW52YWxpZH0gY2xhc3NOYW1lPVwidy0xMDBcIiAgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMzNDNhNDBcIixjb2xvcjpcIiNmZmMxMDdcIixib3JkZXI6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFU0VUIFBBU1NXT1JEXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBlcnJvciAmJiA8cD57ZXJyb3IubWVzc2FnZX08L3A+IH1cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZENoYW5nZUZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==