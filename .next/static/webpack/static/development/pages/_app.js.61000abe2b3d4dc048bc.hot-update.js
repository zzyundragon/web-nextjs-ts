webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_base_styl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/base.styl */ "./src/styles/base.styl");
/* harmony import */ var _styles_base_styl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_base_styl__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "C:\\leaplearner\\icode-web-nextjs\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var s_header = {
  boxShadow: '0 2px 2px #ccc',
  height: '85px'
};
var s_menus = {
  height: '100%'
};

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    _this = _super.call(this, props);
    _this.state = {
      menus: [{
        name: '首页',
        path: '/',
        selected: true
      }, {
        name: '赛事',
        path: '/race',
        selected: false
      }, {
        name: '证书',
        path: '/certificate',
        selected: false
      }, {
        name: '关于我们',
        path: '/aboutus',
        selected: false
      }]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentPath = next_router__WEBPACK_IMPORTED_MODULE_10___default.a.rou;
    }
  }, {
    key: "routerChange",
    value: function routerChange(index) {
      var menus = [];
      this.state.menus.forEach(function (v) {
        v.selected = false;
        menus.push(v);
      });
      menus[index].selected = true;
      this.setState({
        menus: menus
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var menus = this.state.menus;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, "ICode\u56FD\u9645\u9752\u5C11\u5E74\u7F16\u7A0B\u7ADE\u8D5B")), __jsx("div", {
        style: s_header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "wd-per-100 hgh-per-100 flex items-center flex-between pl-30 pr-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "flex items-center",
        style: s_menus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/static/images/icode.png",
        className: "mr-20",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }
      }), menus.map(function (v, k) {
        return __jsx("div", {
          className: v.selected ? "ml-50 pointer selected" : 'ml-50 pointer',
          key: k,
          onClick: _this2.routerChange.bind(_this2, k),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 53
          }
        }, v.name);
      })), __jsx("div", {
        className: "entrys",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }
      }, "\u767B\u5F55"), __jsx("button", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }
      }, "\u5B66\u6821/\u673A\u6784\u62A5\u540D")))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzX2hlYWRlciIsImJveFNoYWRvdyIsImhlaWdodCIsInNfbWVudXMiLCJNeUFwcCIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwic3RhdGUiLCJtZW51cyIsIm5hbWUiLCJwYXRoIiwic2VsZWN0ZWQiLCJjdXJyZW50UGF0aCIsIlJvdXRlciIsInJvdSIsImluZGV4IiwiZm9yRWFjaCIsInYiLCJwdXNoIiwic2V0U3RhdGUiLCJtYXAiLCJrIiwicm91dGVyQ2hhbmdlIiwiYmluZCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsV0FBUyxFQUFFLGdCQURFO0FBRWJDLFFBQU0sRUFBRTtBQUZLLENBQWpCO0FBSUEsSUFBTUMsT0FBTyxHQUFHO0FBQ1pELFFBQU0sRUFBRTtBQURJLENBQWhCOztJQUlxQkUsSzs7Ozs7Ozs7Ozs7Ozs7QUFDY0MseUIsUUFBQUEsUyxFQUFXQyxHLFFBQUFBLEc7QUFDbENDLHlCLEdBQVksRTs7cUJBRVpGLFNBQVMsQ0FBQ0csZTs7Ozs7O3VCQUNRSCxTQUFTLENBQUNHLGVBQVYsQ0FBMEJGLEdBQTFCLEM7OztBQUFsQkMseUI7OztpREFHRztBQUFFQSwyQkFBUyxFQUFUQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWCxpQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxDQUNIO0FBQUVDLFlBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUksRUFBRSxHQUFwQjtBQUF5QkMsZ0JBQVEsRUFBRTtBQUFuQyxPQURHLEVBRUg7QUFBRUYsWUFBSSxFQUFFLElBQVI7QUFBY0MsWUFBSSxFQUFFLE9BQXBCO0FBQTZCQyxnQkFBUSxFQUFFO0FBQXZDLE9BRkcsRUFHSDtBQUFFRixZQUFJLEVBQUUsSUFBUjtBQUFjQyxZQUFJLEVBQUUsY0FBcEI7QUFBb0NDLGdCQUFRLEVBQUU7QUFBOUMsT0FIRyxFQUlIO0FBQUVGLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFJLEVBQUUsVUFBdEI7QUFBa0NDLGdCQUFRLEVBQUU7QUFBNUMsT0FKRztBQURFLEtBQWI7QUFGZTtBQVVsQjs7Ozt3Q0FFbUI7QUFDaEIsVUFBSUMsV0FBVyxHQUFHQyxtREFBTSxDQUFDQyxHQUF6QjtBQUNIOzs7aUNBRVlDLEssRUFBTztBQUNoQixVQUFJUCxLQUFLLEdBQUcsRUFBWjtBQUNBLFdBQUtELEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlEsT0FBakIsQ0FBeUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCQSxTQUFDLENBQUNOLFFBQUYsR0FBYSxLQUFiO0FBQ0FILGFBQUssQ0FBQ1UsSUFBTixDQUFXRCxDQUFYO0FBQ0gsT0FIRDtBQUlBVCxXQUFLLENBQUNPLEtBQUQsQ0FBTCxDQUFhSixRQUFiLEdBQXdCLElBQXhCO0FBQ0EsV0FBS1EsUUFBTCxDQUFjO0FBQ1ZYLGFBQUssRUFBRUE7QUFERyxPQUFkO0FBR0g7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUM0QixLQUFLRixLQURqQztBQUFBLFVBQ0dKLFNBREgsZUFDR0EsU0FESDtBQUFBLFVBQ2NFLFNBRGQsZUFDY0EsU0FEZDtBQUFBLFVBRUdJLEtBRkgsR0FFYSxLQUFLRCxLQUZsQixDQUVHQyxLQUZIO0FBR0wsYUFDSSxvRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVFQURKLENBREosRUFJSTtBQUFLLGFBQUssRUFBRVgsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBbUMsYUFBSyxFQUFFRyxPQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxXQUFHLEVBQUMsMEJBQVQ7QUFBb0MsaUJBQVMsRUFBQyxPQUE5QztBQUFzRCxXQUFHLEVBQUMsRUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBR1FRLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNILENBQUQsRUFBSUksQ0FBSjtBQUFBLGVBQVU7QUFBSyxtQkFBUyxFQUFFSixDQUFDLENBQUNOLFFBQUYsOEJBQXdDLGVBQXhEO0FBQXlFLGFBQUcsRUFBRVUsQ0FBOUU7QUFBaUYsaUJBQU8sRUFBRSxNQUFJLENBQUNDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLE1BQXZCLEVBQTZCRixDQUE3QixDQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRISixDQUFDLENBQUNSLElBQTlILENBQVY7QUFBQSxPQUFWLENBSFIsQ0FESixFQU9JO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBRkosQ0FQSixDQURKLENBSkosRUFrQkksTUFBQyxTQUFELHlGQUFlTCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FsQkosQ0FESjtBQXNCSDs7OztFQWhFOEJvQiwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42MTAwMGFiZTJiM2Q0ZGMwNDhiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Jhc2Uuc3R5bCdcclxuXHJcbmNvbnN0IHNfaGVhZGVyID0ge1xyXG4gICAgYm94U2hhZG93OiAnMCAycHggMnB4ICNjY2MnLFxyXG4gICAgaGVpZ2h0OiAnODVweCdcclxufVxyXG5jb25zdCBzX21lbnVzID0ge1xyXG4gICAgaGVpZ2h0OiAnMTAwJSdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgICAgICBsZXQgcGFnZVByb3BzID0ge31cclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVudXM6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+mmlumhtScsIHBhdGg6ICcvJywgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+i1m+S6iycsIHBhdGg6ICcvcmFjZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn6K+B5LmmJywgcGF0aDogJy9jZXJ0aWZpY2F0ZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn5YWz5LqO5oiR5LusJywgcGF0aDogJy9hYm91dHVzJywgc2VsZWN0ZWQ6IGZhbHNlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBhdGggPSBSb3V0ZXIucm91XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyQ2hhbmdlKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG1lbnVzID0gW11cclxuICAgICAgICB0aGlzLnN0YXRlLm1lbnVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYuc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBtZW51cy5wdXNoKHYpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtZW51c1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lbnVzOiBtZW51c1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1lbnVzIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5JQ29kZeWbvemZhemdkuWwkeW5tOe8lueoi+ernui1mzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dkLXBlci0xMDAgaGdoLXBlci0xMDAgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1iZXR3ZWVuIHBsLTMwIHByLTMwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJyBzdHlsZT17c19tZW51c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb2RlLnBuZ1wiIGNsYXNzTmFtZT0nbXItMjAnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudXMubWFwKCh2LCBrKSA9PiA8ZGl2IGNsYXNzTmFtZT17di5zZWxlY3RlZCA/IGBtbC01MCBwb2ludGVyIHNlbGVjdGVkYCA6ICdtbC01MCBwb2ludGVyJ30ga2V5PXtrfSBvbkNsaWNrPXt0aGlzLnJvdXRlckNoYW5nZS5iaW5kKHRoaXMsIGspfT57di5uYW1lfTwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbnRyeXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RpdGxlJz7nmbvlvZU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+5a2m5qChL+acuuaehOaKpeWQjTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9