webpackHotUpdate_N_E("pages/signin",{

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
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
/* harmony import */ var _src_constants_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/firebase */ "./src/firebase/index.js");








var _this = undefined,
    _jsxFileName = "D:\\DEV\\git_microservices\\microservices\\src\\front_service\\pages\\pw-forget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var PasswordForgetPage = function PasswordForgetPage() {
  return __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_9__["AppWithAuthentication"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "PasswordForget"), __jsx(PasswordForgetForm, {
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
      _src_firebase__WEBPACK_IMPORTED_MODULE_11__["auth"].doPasswordReset(email).then(function () {
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
      return __jsx("form", {
        onSubmit: this.onSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx("input", {
        value: this.state.email,
        onChange: function onChange(event) {
          return _this3.setState(updateByPropertyName("email", event.target.value));
        },
        type: "text",
        placeholder: "Email Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }), __jsx("button", {
        disabled: isInvalid,
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, "Reset My Password"), error && __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }
      }, error.message));
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
      lineNumber: 72,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: _src_constants_routes__WEBPACK_IMPORTED_MODULE_10__["PASSWORD_FORGET"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHctZm9yZ2V0LmpzIl0sIm5hbWVzIjpbIlBhc3N3b3JkRm9yZ2V0UGFnZSIsInVwZGF0ZUJ5UHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJJTklUSUFMX1NUQVRFIiwiZW1haWwiLCJlcnJvciIsIlBhc3N3b3JkRm9yZ2V0Rm9ybSIsInByb3BzIiwiZXZlbnQiLCJzdGF0ZSIsImF1dGgiLCJkb1Bhc3N3b3JkUmVzZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlzSW52YWxpZCIsIm9uU3VibWl0IiwidGFyZ2V0IiwibWVzc2FnZSIsIkNvbXBvbmVudCIsIlBhc3N3b3JkRm9yZ2V0TGluayIsInJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FDekIsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFLE1BQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRHlCO0FBQUEsQ0FBM0I7O0tBQU1BLGtCOztBQU9OLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsWUFBRCxFQUFlQyxLQUFmO0FBQUEsU0FBeUI7QUFBQSx5R0FDbkRELFlBRG1ELEVBQ3BDQyxLQURvQztBQUFBLEdBQXpCO0FBQUEsQ0FBN0I7O0FBSUEsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxPQUFLLEVBQUUsRUFEYTtBQUVwQkMsT0FBSyxFQUFFO0FBRmEsQ0FBdEI7O0lBS01DLGtCOzs7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLCtCQUFNQSxLQUFOOztBQURpQixvTkFNUixVQUFBQyxLQUFLLEVBQUk7QUFBQSxVQUNWSixLQURVLEdBQ0EsT0FBS0ssS0FETCxDQUNWTCxLQURVO0FBR2xCTSx5REFBSSxDQUNEQyxlQURILENBQ21CUCxLQURuQixFQUVHUSxJQUZILENBRVEsWUFBTTtBQUNWLGVBQUtDLFFBQUwsQ0FBYztBQUFBLG1DQUFZVixhQUFaO0FBQUEsU0FBZDtBQUNELE9BSkgsV0FLUyxVQUFBRSxLQUFLLEVBQUk7QUFDZCxlQUFLUSxRQUFMLENBQWNiLG9CQUFvQixDQUFDLE9BQUQsRUFBVUssS0FBVixDQUFsQztBQUNELE9BUEg7QUFTQUcsV0FBSyxDQUFDTSxjQUFOO0FBQ0QsS0FuQmtCOztBQUdqQixXQUFLTCxLQUFMLHFCQUFrQk4sYUFBbEI7QUFIaUI7QUFJbEI7Ozs7NkJBaUJRO0FBQUE7O0FBQUEsd0JBQ2tCLEtBQUtNLEtBRHZCO0FBQUEsVUFDQ0wsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsS0FEUixlQUNRQSxLQURSO0FBR1AsVUFBTVUsU0FBUyxHQUFHWCxLQUFLLEtBQUssRUFBNUI7QUFFQSxhQUNFO0FBQU0sZ0JBQVEsRUFBRSxLQUFLWSxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxhQUFLLEVBQUUsS0FBS1AsS0FBTCxDQUFXTCxLQURwQjtBQUVFLGdCQUFRLEVBQUUsa0JBQUFJLEtBQUs7QUFBQSxpQkFDYixNQUFJLENBQUNLLFFBQUwsQ0FBY2Isb0JBQW9CLENBQUMsT0FBRCxFQUFVUSxLQUFLLENBQUNTLE1BQU4sQ0FBYWYsS0FBdkIsQ0FBbEMsQ0FEYTtBQUFBLFNBRmpCO0FBS0UsWUFBSSxFQUFDLE1BTFA7QUFNRSxtQkFBVyxFQUFDLGVBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBU0U7QUFBUSxnQkFBUSxFQUFFYSxTQUFsQjtBQUE2QixZQUFJLEVBQUMsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFURixFQWFHVixLQUFLLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJQSxLQUFLLENBQUNhLE9BQVYsQ0FiWixDQURGO0FBaUJEOzs7O0VBNUM4QkMsK0M7O0FBK0NqQyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FDekI7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVDLHNFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsQ0FEeUI7QUFBQSxDQUEzQjs7TUFBTUQsa0I7QUFRU3JCLGlGQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjA0MDE5YmI5MmEyM2JkYTBlODY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IEFwcFdpdGhBdXRoZW50aWNhdGlvbiB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0ICogYXMgcm91dGVzIGZyb20gXCIuLi9zcmMvY29uc3RhbnRzL3JvdXRlc1wiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3NyYy9maXJlYmFzZVwiO1xyXG5cclxuY29uc3QgUGFzc3dvcmRGb3JnZXRQYWdlID0gKCkgPT4gKFxyXG4gIDxBcHBXaXRoQXV0aGVudGljYXRpb24+XHJcbiAgICA8aDE+UGFzc3dvcmRGb3JnZXQ8L2gxPlxyXG4gICAgPFBhc3N3b3JkRm9yZ2V0Rm9ybSAvPlxyXG4gIDwvQXBwV2l0aEF1dGhlbnRpY2F0aW9uPlxyXG4pO1xyXG5cclxuY29uc3QgdXBkYXRlQnlQcm9wZXJ0eU5hbWUgPSAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4gKCkgPT4gKHtcclxuICBbcHJvcGVydHlOYW1lXTogdmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIGVycm9yOiBudWxsXHJcbn07XHJcblxyXG5jbGFzcyBQYXNzd29yZEZvcmdldEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4uSU5JVElBTF9TVEFURSB9O1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBldmVudCA9PiB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGF1dGhcclxuICAgICAgLmRvUGFzc3dvcmRSZXNldChlbWFpbClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgLi4uSU5JVElBTF9TVEFURSB9KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVycm9yXCIsIGVycm9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgaXNJbnZhbGlkID0gZW1haWwgPT09IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVCeVByb3BlcnR5TmFtZShcImVtYWlsXCIsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNJbnZhbGlkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBSZXNldCBNeSBQYXNzd29yZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFBhc3N3b3JkRm9yZ2V0TGluayA9ICgpID0+IChcclxuICA8cCAgY2xhc3NOYW1lPVwidy0xMDAgdGV4dC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgPExpbmsgaHJlZj17cm91dGVzLlBBU1NXT1JEX0ZPUkdFVH0+XHJcbiAgICAgIDxhPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9wPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRGb3JnZXRQYWdlO1xyXG5cclxuZXhwb3J0IHsgUGFzc3dvcmRGb3JnZXRGb3JtLCBQYXNzd29yZEZvcmdldExpbmsgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==