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
var s_button = {
  width: 'auto',
  height: '30px',
  borderRadius: '4px',
  border: '1px solid #148bff',
  textAlign: 'center',
  lineHeight: '30px',
  color: '#148bff',
  background: 'rgba(0,0,0,0)'
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
      var currentPath = next_router__WEBPACK_IMPORTED_MODULE_10___default.a.router.route || '/';
      var index = this.state.menus.findIndex(function (v) {
        return v.path === currentPath;
      });
      this.routerChange(index);
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
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push(menus[index].path);
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
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      }, "ICode\u56FD\u9645\u9752\u5C11\u5E74\u7F16\u7A0B\u7ADE\u8D5B")), __jsx("div", {
        style: s_header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "wd-per-100 hgh-per-100 flex items-center flex-between pl-30 pr-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "flex items-center",
        style: s_menus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/static/images/icode.png",
        className: "mr-20",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
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
            lineNumber: 80,
            columnNumber: 53
          }
        }, v.name);
      })), __jsx("div", {
        className: "entrys",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: "pointer",
        style: s_button,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 29
        }
      }, "\u767B\u5F55"), __jsx("button", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      }, "\u5B66\u6821/\u673A\u6784\u62A5\u540D")))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzX2hlYWRlciIsImJveFNoYWRvdyIsImhlaWdodCIsInNfbWVudXMiLCJzX2J1dHRvbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJzdGF0ZSIsIm1lbnVzIiwibmFtZSIsInBhdGgiLCJzZWxlY3RlZCIsImN1cnJlbnRQYXRoIiwiUm91dGVyIiwicm91dGVyIiwicm91dGUiLCJpbmRleCIsImZpbmRJbmRleCIsInYiLCJyb3V0ZXJDaGFuZ2UiLCJmb3JFYWNoIiwicHVzaCIsInNldFN0YXRlIiwibWFwIiwiayIsImJpbmQiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLFdBQVMsRUFBRSxnQkFERTtBQUViQyxRQUFNLEVBQUU7QUFGSyxDQUFqQjtBQUlBLElBQU1DLE9BQU8sR0FBRztBQUNaRCxRQUFNLEVBQUU7QUFESSxDQUFoQjtBQUdBLElBQU1FLFFBQVEsR0FBRztBQUNiQyxPQUFLLEVBQUUsTUFETTtBQUViSCxRQUFNLEVBQUUsTUFGSztBQUdiSSxjQUFZLEVBQUUsS0FIRDtBQUliQyxRQUFNLEVBQUUsbUJBSks7QUFLYkMsV0FBUyxFQUFFLFFBTEU7QUFNYkMsWUFBVSxFQUFFLE1BTkM7QUFPYkMsT0FBSyxFQUFFLFNBUE07QUFRYkMsWUFBVSxFQUFFO0FBUkMsQ0FBakI7O0lBV3FCQyxLOzs7Ozs7Ozs7Ozs7OztBQUNjQyx5QixRQUFBQSxTLEVBQVdDLEcsUUFBQUEsRztBQUNsQ0MseUIsR0FB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QUF4RDtBQUF5RSxhQUFHLEVBQUVhLENBQTlFO0FBQWlGLGlCQUFPLEVBQUUsTUFBSSxDQUFDTCxZQUFMLENBQWtCTSxJQUFsQixDQUF1QixNQUF2QixFQUE2QkQsQ0FBN0IsQ0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE0SE4sQ0FBQyxDQUFDVCxJQUE5SCxDQUFWO0FBQUEsT0FBVixDQUhSLENBREosRUFPSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLFNBQWxCO0FBQTRCLGFBQUssRUFBRWhCLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUZKLENBUEosQ0FESixDQUpKLEVBa0JJLE1BQUMsU0FBRCx5RkFBZVcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbEJKLENBREo7QUFzQkg7Ozs7RUFuRThCc0IsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuOTk4OTEzNjFhZTgxODI5OTYwMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9iYXNlLnN0eWwnXHJcblxyXG5jb25zdCBzX2hlYWRlciA9IHtcclxuICAgIGJveFNoYWRvdzogJzAgMnB4IDJweCAjY2NjJyxcclxuICAgIGhlaWdodDogJzg1cHgnXHJcbn1cclxuY29uc3Qgc19tZW51cyA9IHtcclxuICAgIGhlaWdodDogJzEwMCUnXHJcbn1cclxuY29uc3Qgc19idXR0b24gPSB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMxNDhiZmYnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcclxuICAgIGNvbG9yOiAnIzE0OGJmZicsXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwKSdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgICAgICBsZXQgcGFnZVByb3BzID0ge31cclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVudXM6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+mmlumhtScsIHBhdGg6ICcvJywgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+i1m+S6iycsIHBhdGg6ICcvcmFjZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn6K+B5LmmJywgcGF0aDogJy9jZXJ0aWZpY2F0ZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn5YWz5LqO5oiR5LusJywgcGF0aDogJy9hYm91dHVzJywgc2VsZWN0ZWQ6IGZhbHNlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBhdGggPSBSb3V0ZXIucm91dGVyLnJvdXRlIHx8ICcvJ1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubWVudXMuZmluZEluZGV4KHYgPT4gdi5wYXRoID09PSBjdXJyZW50UGF0aClcclxuICAgICAgICB0aGlzLnJvdXRlckNoYW5nZShpbmRleClcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbWVudXMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3RhdGUubWVudXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdi5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1lbnVzLnB1c2godilcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1lbnVzW2luZGV4XS5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVudXM6IG1lbnVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBSb3V0ZXIucHVzaChtZW51c1tpbmRleF0ucGF0aClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPklDb2Rl5Zu96ZmF6Z2S5bCR5bm057yW56iL56ue6LWbPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2QtcGVyLTEwMCBoZ2gtcGVyLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWJldHdlZW4gcGwtMzAgcHItMzAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInIHN0eWxlPXtzX21lbnVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvZGUucG5nXCIgY2xhc3NOYW1lPSdtci0yMCcgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51cy5tYXAoKHYsIGspID0+IDxkaXYgY2xhc3NOYW1lPXt2LnNlbGVjdGVkID8gYG1sLTUwIHBvaW50ZXIgc2VsZWN0ZWRgIDogJ21sLTUwIHBvaW50ZXInfSBrZXk9e2t9IG9uQ2xpY2s9e3RoaXMucm91dGVyQ2hhbmdlLmJpbmQodGhpcywgayl9Pnt2Lm5hbWV9PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudHJ5cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncG9pbnRlcicgc3R5bGU9e3NfYnV0dG9ufT7nmbvlvZU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+5a2m5qChL+acuuaehOaKpeWQjTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9