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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_base_styl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/base.styl */ "./src/styles/base.styl");
/* harmony import */ var _styles_base_styl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_base_styl__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "C:\\leaplearner\\icode-web-nextjs\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

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
  background: 'rgba(0,0,0,0)',
  padding: '0 20px'
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
      var currentPath = next_router__WEBPACK_IMPORTED_MODULE_11___default.a.router.route || '/';
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
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push(menus[index].path);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var menus = this.state.menus;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }
      }, "ICode\u56FD\u9645\u9752\u5C11\u5E74\u7F16\u7A0B\u7ADE\u8D5B")), __jsx("div", {
        style: s_header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "wd-per-100 hgh-per-100 flex items-center flex-between pl-30 pr-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "flex items-center",
        style: s_menus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/static/images/icode.png",
        className: "mr-20",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
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
            lineNumber: 81,
            columnNumber: 53
          }
        }, v.name);
      })), __jsx("div", {
        className: "jsx-2637918860" + " " + 'entrys',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, __jsx("button", {
        style: s_button,
        className: "jsx-2637918860" + " " + 'pointer',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      }, "\u767B\u5F55"), __jsx("button", {
        style: s_button,
        className: "jsx-2637918860" + " " + 'pointer',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 29
        }
      }, "\u5B66\u6821/\u673A\u6784\u62A5\u540D"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2637918860",
        __self: this
      }, "button.jsx-2637918860:hover{background:#148bff!important;color:white!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxsZWFwbGVhcm5lclxcaWNvZGUtd2ViLW5leHRqc1xcc3JjXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmlDLEFBR3NFLDZCQUNQLHNCQUMxQiIsImZpbGUiOiJDOlxcbGVhcGxlYXJuZXJcXGljb2RlLXdlYi1uZXh0anNcXHNyY1xccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvYmFzZS5zdHlsJ1xyXG5cclxuY29uc3Qgc19oZWFkZXIgPSB7XHJcbiAgICBib3hTaGFkb3c6ICcwIDJweCAycHggI2NjYycsXHJcbiAgICBoZWlnaHQ6ICc4NXB4J1xyXG59XHJcbmNvbnN0IHNfbWVudXMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJ1xyXG59XHJcbmNvbnN0IHNfYnV0dG9uID0ge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMTQ4YmZmJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXHJcbiAgICBjb2xvcjogJyMxNDhiZmYnLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgcGFkZGluZzogJzAgMjBweCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgICAgICBsZXQgcGFnZVByb3BzID0ge31cclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVudXM6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+mmlumhtScsIHBhdGg6ICcvJywgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+i1m+S6iycsIHBhdGg6ICcvcmFjZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn6K+B5LmmJywgcGF0aDogJy9jZXJ0aWZpY2F0ZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn5YWz5LqO5oiR5LusJywgcGF0aDogJy9hYm91dHVzJywgc2VsZWN0ZWQ6IGZhbHNlIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBhdGggPSBSb3V0ZXIucm91dGVyLnJvdXRlIHx8ICcvJ1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubWVudXMuZmluZEluZGV4KHYgPT4gdi5wYXRoID09PSBjdXJyZW50UGF0aClcclxuICAgICAgICB0aGlzLnJvdXRlckNoYW5nZShpbmRleClcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbWVudXMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3RhdGUubWVudXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdi5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1lbnVzLnB1c2godilcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1lbnVzW2luZGV4XS5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVudXM6IG1lbnVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBSb3V0ZXIucHVzaChtZW51c1tpbmRleF0ucGF0aClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPklDb2Rl5Zu96ZmF6Z2S5bCR5bm057yW56iL56ue6LWbPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2QtcGVyLTEwMCBoZ2gtcGVyLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWJldHdlZW4gcGwtMzAgcHItMzAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInIHN0eWxlPXtzX21lbnVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvZGUucG5nXCIgY2xhc3NOYW1lPSdtci0yMCcgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51cy5tYXAoKHYsIGspID0+IDxkaXYgY2xhc3NOYW1lPXt2LnNlbGVjdGVkID8gYG1sLTUwIHBvaW50ZXIgc2VsZWN0ZWRgIDogJ21sLTUwIHBvaW50ZXInfSBrZXk9e2t9IG9uQ2xpY2s9e3RoaXMucm91dGVyQ2hhbmdlLmJpbmQodGhpcywgayl9Pnt2Lm5hbWV9PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudHJ5cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncG9pbnRlcicgc3R5bGU9e3NfYnV0dG9ufT7nmbvlvZU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwb2ludGVyJyBzdHlsZT17c19idXR0b259PuWtpuagoS/mnLrmnoTmiqXlkI08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDhiZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\leaplearner\\\\icode-web-nextjs\\\\src\\\\pages\\\\_app.js */")))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzX2hlYWRlciIsImJveFNoYWRvdyIsImhlaWdodCIsInNfbWVudXMiLCJzX2J1dHRvbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwic3RhdGUiLCJtZW51cyIsIm5hbWUiLCJwYXRoIiwic2VsZWN0ZWQiLCJjdXJyZW50UGF0aCIsIlJvdXRlciIsInJvdXRlciIsInJvdXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ2Iiwicm91dGVyQ2hhbmdlIiwiZm9yRWFjaCIsInB1c2giLCJzZXRTdGF0ZSIsIm1hcCIsImsiLCJiaW5kIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNiQyxXQUFTLEVBQUUsZ0JBREU7QUFFYkMsUUFBTSxFQUFFO0FBRkssQ0FBakI7QUFJQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkQsUUFBTSxFQUFFO0FBREksQ0FBaEI7QUFHQSxJQUFNRSxRQUFRLEdBQUc7QUFDYkMsT0FBSyxFQUFFLE1BRE07QUFFYkgsUUFBTSxFQUFFLE1BRks7QUFHYkksY0FBWSxFQUFFLEtBSEQ7QUFJYkMsUUFBTSxFQUFFLG1CQUpLO0FBS2JDLFdBQVMsRUFBRSxRQUxFO0FBTWJDLFlBQVUsRUFBRSxNQU5DO0FBT2JDLE9BQUssRUFBRSxTQVBNO0FBUWJDLFlBQVUsRUFBRSxlQVJDO0FBU2JDLFNBQU8sRUFBRTtBQVRJLENBQWpCOztJQVlxQkMsSzs7Ozs7Ozs7Ozs7Ozs7QUFDY0MseUIsUUFB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QUFTLEVBQUVOLENBQUMsQ0FBQ1AsUUFBRiw4QkFBd0MsZUFBeEQ7QUFBeUUsYUFBRyxFQUFFYSxDQUE5RTtBQUFpRixpQkFBTyxFQUFFLE1BQUksQ0FBQ0wsWUFBTCxDQUFrQk0sSUFBbEIsQ0FBdUIsTUFBdkIsRUFBNkJELENBQTdCLENBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNEhOLENBQUMsQ0FBQ1QsSUFBOUgsQ0FBVjtBQUFBLE9BQVYsQ0FIUixDQURKLEVBT0k7QUFBQSw0Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUE0QixhQUFLLEVBQUVqQixRQUFuQztBQUFBLDRDQUFrQixTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBNEIsYUFBSyxFQUFFQSxRQUFuQztBQUFBLDRDQUFrQixTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUZKO0FBQUE7QUFBQTtBQUFBLGl0S0FQSixDQURKLENBSkosRUEwQkksTUFBQyxTQUFELHlGQUFlWSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0ExQkosQ0FESjtBQThCSDs7OztFQTNFOEJzQiwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4xMmU3NmY2NDdhZmZjZmM2NDUyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Jhc2Uuc3R5bCdcclxuXHJcbmNvbnN0IHNfaGVhZGVyID0ge1xyXG4gICAgYm94U2hhZG93OiAnMCAycHggMnB4ICNjY2MnLFxyXG4gICAgaGVpZ2h0OiAnODVweCdcclxufVxyXG5jb25zdCBzX21lbnVzID0ge1xyXG4gICAgaGVpZ2h0OiAnMTAwJSdcclxufVxyXG5jb25zdCBzX2J1dHRvbiA9IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzE0OGJmZicsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbGluZUhlaWdodDogJzMwcHgnLFxyXG4gICAgY29sb3I6ICcjMTQ4YmZmJyxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDApJyxcclxuICAgIHBhZGRpbmc6ICcwIDIwcHgnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9XHJcblxyXG4gICAgICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfpppbpobUnLCBwYXRoOiAnLycsIHNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfotZvkuosnLCBwYXRoOiAnL3JhY2UnLCBzZWxlY3RlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+ivgeS5picsIHBhdGg6ICcvY2VydGlmaWNhdGUnLCBzZWxlY3RlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+WFs+S6juaIkeS7rCcsIHBhdGg6ICcvYWJvdXR1cycsIHNlbGVjdGVkOiBmYWxzZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYXRoID0gUm91dGVyLnJvdXRlci5yb3V0ZSB8fCAnLydcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLm1lbnVzLmZpbmRJbmRleCh2ID0+IHYucGF0aCA9PT0gY3VycmVudFBhdGgpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJDaGFuZ2UoaW5kZXgpXHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyQ2hhbmdlKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG1lbnVzID0gW11cclxuICAgICAgICB0aGlzLnN0YXRlLm1lbnVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYuc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBtZW51cy5wdXNoKHYpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtZW51c1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lbnVzOiBtZW51c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgUm91dGVyLnB1c2gobWVudXNbaW5kZXhdLnBhdGgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1lbnVzIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5JQ29kZeWbvemZhemdkuWwkeW5tOe8lueoi+ernui1mzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dkLXBlci0xMDAgaGdoLXBlci0xMDAgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1iZXR3ZWVuIHBsLTMwIHByLTMwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJyBzdHlsZT17c19tZW51c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb2RlLnBuZ1wiIGNsYXNzTmFtZT0nbXItMjAnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudXMubWFwKCh2LCBrKSA9PiA8ZGl2IGNsYXNzTmFtZT17di5zZWxlY3RlZCA/IGBtbC01MCBwb2ludGVyIHNlbGVjdGVkYCA6ICdtbC01MCBwb2ludGVyJ30ga2V5PXtrfSBvbkNsaWNrPXt0aGlzLnJvdXRlckNoYW5nZS5iaW5kKHRoaXMsIGspfT57di5uYW1lfTwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbnRyeXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BvaW50ZXInIHN0eWxlPXtzX2J1dHRvbn0+55m75b2VPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncG9pbnRlcicgc3R5bGU9e3NfYnV0dG9ufT7lrabmoKEv5py65p6E5oql5ZCNPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ4YmZmIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==