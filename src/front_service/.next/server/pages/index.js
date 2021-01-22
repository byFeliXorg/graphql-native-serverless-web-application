module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./pages/number.jsx");
var _jsxFileName = "D:\\DEV\\front\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("button", {
      onClick: this.props.incrementCounter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, "Increment"), __jsx("button", {
      onClick: this.props.decrementCounter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, "Decrement"), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, this.props.counter), __jsx("number", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }));
  }

}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["incrementCounter"],
  decrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["decrementCounter"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/number.jsx":
/*!**************************!*\
  !*** ./pages/number.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\DEV\\front\\pages\\number.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // reactstrap components



class number extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "position-relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("section", {
      className: "section section-hero section-shaped",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "shape shape-style-1 shape-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "span-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-75",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-75",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "span-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      className: "shape-container d-flex align-items-center py-lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col px-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "align-items-center justify-content-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      className: "text-center",
      lg: "6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }
    }, __jsx("img", {
      alt: "...",
      className: "img-fluid",
      style: {
        width: "200px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }), __jsx("p", {
      className: "lead text-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, "A beautiful Design System for Bootstrap 4. It's Free and Open Source."), __jsx("div", {
      className: "btn-wrapper mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-white btn-icon mb-3 mb-sm-0",
      color: "default",
      href: "https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page",
      size: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "btn-inner--icon mr-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "ni ni-cloud-download-95",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 27
      }
    })), __jsx("span", {
      className: "btn-inner--text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, "Download React")), " ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-icon mb-3 mb-sm-0",
      color: "github",
      href: "https://github.com/creativetimofficial/argon-design-system-react",
      size: "lg",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "btn-inner--icon mr-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-github",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 27
      }
    })), __jsx("span", {
      className: "btn-inner--text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "text-warning mr-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }
    }, "Star us"), "on Github"))), __jsx("div", {
      className: "mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx("small", {
      className: "text-white font-weight-bold mb-0 mr-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 23
      }
    }, "*proudly coded by"), __jsx("img", {
      alt: "...",
      className: "ml-1",
      style: {
        height: "28px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 23
      }
    })))))), __jsx("div", {
      className: "separator separator-bottom separator-skew zindex-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none",
      version: "1.1",
      viewBox: "0 0 2560 100",
      x: "0",
      y: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, __jsx("polygon", {
      className: "fill-white",
      points: "2560 0 2560 100 0 100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (number);

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, incrementCounter, decrementCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
//Action Types
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER"; //Action Creator

const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});
const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL251bWJlci5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiaW5jcmVtZW50Q291bnRlciIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ2YWx1ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJudW1iZXIiLCJ3aWR0aCIsImhlaWdodCIsIklOQ1JFTUVOVF9DT1VOVEVSIiwiREVDUkVNRU5UX0NPVU5URVIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFBO0FBQUEsT0FDRTtBQUNFLFdBQUssRUFBQyw0QkFEUjtBQUVFLHlCQUFtQixFQUFDLE1BRnRCO0FBR0UsYUFBTyxFQUFDLEtBSFY7QUFJRSxhQUFPLEVBQUMsY0FKVjtBQUtFLE9BQUMsRUFBQyxHQUxKO0FBTUUsT0FBQyxFQUFDLEdBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFO0FBQ0UsZUFBUyxFQUFDLFlBRFo7QUFFRSxZQUFNLEVBQUMsdUJBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBREYsQ0F4RUYsQ0FGRixDQURGLENBREY7QUErRkQ7O0FBakdrQzs7QUFvR3RCRixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN6R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUcsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEMsQ0FHUDs7QUFDTyxNQUFNWixnQkFBZ0IsR0FBRyxPQUFPO0FBQ3BDYSxNQUFJLEVBQUVGO0FBRDhCLENBQVAsQ0FBekI7QUFJQSxNQUFNVixnQkFBZ0IsR0FBRyxPQUFPO0FBQ25DWSxNQUFJLEVBQUVEO0FBRDZCLENBQVAsQ0FBekIsQzs7Ozs7Ozs7Ozs7QUNWUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7ZGVjcmVtZW50Q291bnRlciwgaW5jcmVtZW50Q291bnRlcn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyQWN0aW9ucyc7XHJcbmltcG9ydCBudW1iZXIgZnJvbSAnLi9udW1iZXInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICAgICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7c3RvcmV9KSB7fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmluY3JlbWVudENvdW50ZXJ9PkluY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlY3JlbWVudENvdW50ZXJ9PkRlY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmNvdW50ZXJ9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxudW1iZXIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY291bnRlcjogc3RhdGUuY291bnRlci52YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIGluY3JlbWVudENvdW50ZXI6IGluY3JlbWVudENvdW50ZXIsXHJcbiAgICBkZWNyZW1lbnRDb3VudGVyOiBkZWNyZW1lbnRDb3VudGVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jbGFzcyBudW1iZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgey8qIEhlcm8gZm9yIEZSRUUgdmVyc2lvbiAqL31cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VjdGlvbi1oZXJvIHNlY3Rpb24tc2hhcGVkXCI+XHJcbiAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIGNpcmNsZXMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUgc2hhcGUtc3R5bGUtMSBzaGFwZS1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbi0xNTBcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW4tNTBcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW4tNTBcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW4tNzVcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW4tMTAwXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLTc1XCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLTUwXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLTEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbi01MFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbi0xMDBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJzaGFwZS1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweS1sZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEEgYmVhdXRpZnVsIERlc2lnbiBTeXN0ZW0gZm9yIEJvb3RzdHJhcCA0LiBJdCdzIEZyZWUgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICBPcGVuIFNvdXJjZS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4td3JhcHBlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi13aGl0ZSBidG4taWNvbiBtYi0zIG1iLXNtLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L2FyZ29uLWRlc2lnbi1zeXN0ZW0tcmVhY3Q/cmVmPWFkc3ItbGFuZGluZy1wYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLWlubmVyLS1pY29uIG1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1jbG91ZC1kb3dubG9hZC05NVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLWlubmVyLS10ZXh0XCI+RG93bmxvYWQgUmVhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1pY29uIG1iLTMgbWItc20tMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZ2l0aHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL2FyZ29uLWRlc2lnbi1zeXN0ZW0tcmVhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4taW5uZXItLWljb24gbXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLWlubmVyLS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nIG1yLTFcIj5TdGFyIHVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWJvbGQgbWItMCBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpwcm91ZGx5IGNvZGVkIGJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB7LyogU1ZHIHNlcGFyYXRvciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3Igc2VwYXJhdG9yLWJvdHRvbSBzZXBhcmF0b3Itc2tldyB6aW5kZXgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxyXG4gICAgICAgICAgICAgICAgeD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgeT1cIjBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG51bWJlcjsiLCIvL0FjdGlvbiBUeXBlc1xyXG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX0NPVU5URVIgPSBcIklOQ1JFTUVOVF9DT1VOVEVSXCI7XHJcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfQ09VTlRFUiA9IFwiREVDUkVNRU5UX0NPVU5URVJcIjtcclxuXHJcblxyXG4vL0FjdGlvbiBDcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRDb3VudGVyID0gKCkgPT4gKHtcclxuICAgdHlwZTogSU5DUkVNRU5UX0NPVU5URVJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50Q291bnRlciA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlRfQ09VTlRFUlxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9