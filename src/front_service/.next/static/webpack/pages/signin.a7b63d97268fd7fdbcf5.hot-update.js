webpackHotUpdate_N_E("pages/signin",{

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignOut */ "./src/components/SignOut/index.js");
var _this = undefined,
    _jsxFileName = "D:\\DEV\\git_microservices\\microservices\\src\\front_service\\src\\components\\Navigation\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Navigation = function Navigation(_ref) {
  var authUser = _ref.authUser;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, authUser ? __jsx(NavigationAuth, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }) : __jsx(NavigationNonAuth, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }));
};

_c = Navigation;

var NavigationAuth = function NavigationAuth() {
  return __jsx("nav", {
    "class": "navbar navbar-expand-lg navbar-dark bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("div", {
    "class": "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://i.ibb.co/s2hjsVp/gold-hammer-removebg-preview.png",
    alt: "",
    width: "30",
    height: "24",
    "class": "d-inline-block align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx("a", {
    "class": "navbar-brand",
    href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["LANDING"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "FeliX"), __jsx("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("span", {
    "class": "navbar-toggler-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx("div", {
    "class": "collapse navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("ul", {
    "class": "navbar-nav me-auto mb-2 mb-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("li", {
    "class": "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 32
    }
  }, __jsx("a", {
    "class": "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 57
    }
  }, "Home"))), __jsx("li", {
    "class": "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["ADDOFFER"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 32
    }
  }, __jsx("a", {
    "class": "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 61
    }
  }, "Add Offer"))), __jsx("li", {
    "class": "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["ACCOUNT"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 32
    }
  }, __jsx("a", {
    "class": "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 60
    }
  }, "Account"))))), __jsx("ul", {
    "class": "nav navbar-nav pull-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_SignOut__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })))));
};

_c2 = NavigationAuth;

var NavigationNonAuth = function NavigationNonAuth() {
  return __jsx("nav", {
    "class": "navbar navbar-expand-lg navbar-dark bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx("div", {
    "class": "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "https://i.ibb.co/s2hjsVp/gold-hammer-removebg-preview.png",
    alt: "",
    width: "30",
    height: "24",
    "class": "d-inline-block align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("a", {
    "class": "navbar-brand",
    href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["LANDING"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "FeliX"), __jsx("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("span", {
    "class": "navbar-toggler-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("ul", {
    "class": "nav navbar-nav pull-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_routes__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 14
    }
  }, __jsx("a", {
    "class": "btn btn-outline-warning navbar-right ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 42
    }
  }, "Sign In"))))));
};

_c3 = NavigationNonAuth;

var mapStateToProps = function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Navigation));

var _c, _c2, _c3;

$RefreshReg$(_c, "Navigation");
$RefreshReg$(_c2, "NavigationAuth");
$RefreshReg$(_c3, "NavigationNonAuth");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiYXV0aFVzZXIiLCJOYXZpZ2F0aW9uQXV0aCIsInJvdXRlcyIsIk5hdmlnYXRpb25Ob25BdXRoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJzZXNzaW9uU3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSUEsUUFBUSxHQUNKLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksR0FFSixNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixDQURpQjtBQUFBLENBQW5COztLQUFNRCxVOztBQVFOLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUNyQjtBQUFLLGFBQU0sNkNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxPQUFHLEVBQUMsMkRBQVQ7QUFBcUUsT0FBRyxFQUFDLEVBQXpFO0FBQTRFLFNBQUssRUFBQyxJQUFsRjtBQUF1RixVQUFNLEVBQUMsSUFBOUY7QUFBbUcsYUFBTSwwQkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUU7QUFBRyxhQUFNLGNBQVQ7QUFBd0IsUUFBSSxFQUFFQyx5REFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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RTtBQUFJLGFBQU0sMkJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQSx5REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCO0FBQUcsYUFBTSx1Q0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTVCLENBQUwsQ0FERixDQVBGLENBREYsQ0FEd0I7QUFBQSxDQUExQjs7TUFBTUMsaUI7O0FBZ0JOLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENMLFlBQVEsRUFBRUssS0FBSyxDQUFDQyxZQUFOLENBQW1CTjtBQURLLEdBQVo7QUFBQSxDQUF4Qjs7QUFJZU8sMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCTCxVQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5hN2I2M2Q5NzI2OGZkN2ZkYmNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCAqIGFzIHJvdXRlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvcm91dGVzJztcclxuaW1wb3J0IFNpZ25PdXRCdXR0b24gZnJvbSAnLi4vU2lnbk91dCc7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgYXV0aFVzZXIgfSkgPT5cclxuICA8ZGl2PlxyXG4gICAgeyBhdXRoVXNlclxyXG4gICAgICAgID8gPE5hdmlnYXRpb25BdXRoIC8+XHJcbiAgICAgICAgOiA8TmF2aWdhdGlvbk5vbkF1dGggLz5cclxuICAgIH1cclxuICA8L2Rpdj5cclxuXHJcbmNvbnN0IE5hdmlnYXRpb25BdXRoID0gKCkgPT5cclxuICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiID5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9zMmhqc1ZwL2dvbGQtaGFtbWVyLXJlbW92ZWJnLXByZXZpZXcucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjI0XCIgY2xhc3M9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIi8+XHJcbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj17cm91dGVzLkxBTkRJTkd9PkZlbGlYPC9hPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtZS1hdXRvIG1iLTIgbWItbGctMFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj48TGluayBocmVmPXtyb3V0ZXMuSE9NRX0+PGEgY2xhc3M9XCJuYXYtbGlua1wiPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPjxMaW5rIGhyZWY9e3JvdXRlcy5BRERPRkZFUn0+PGEgY2xhc3M9XCJuYXYtbGlua1wiPkFkZCBPZmZlcjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+PExpbmsgaHJlZj17cm91dGVzLkFDQ09VTlR9PjxhIGNsYXNzPVwibmF2LWxpbmtcIj5BY2NvdW50PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgPGxpPjxTaWduT3V0QnV0dG9uIC8+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uTm9uQXV0aCA9ICgpID0+XHJcbiAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIiA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9zMmhqc1ZwL2dvbGQtaGFtbWVyLXJlbW92ZWJnLXByZXZpZXcucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjI0XCIgY2xhc3M9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIi8+XHJcbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj17cm91dGVzLkxBTkRJTkd9PkZlbGlYPC9hPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgPGxpID48TGluayBocmVmPXtyb3V0ZXMuU0lHTl9JTn0+PGEgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZyBuYXZiYXItcmlnaHQgXCI+U2lnbiBJbjwvYT48L0xpbms+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG4gIFxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGF1dGhVc2VyOiBzdGF0ZS5zZXNzaW9uU3RhdGUuYXV0aFVzZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5hdmlnYXRpb24pOyJdLCJzb3VyY2VSb290IjoiIn0=