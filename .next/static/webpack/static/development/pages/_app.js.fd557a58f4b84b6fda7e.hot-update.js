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
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/config */ "./utils/config.js");
/* harmony import */ var _styles_base_styl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/base.styl */ "./src/styles/base.styl");
/* harmony import */ var _styles_base_styl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_base_styl__WEBPACK_IMPORTED_MODULE_14__);








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
  lineHeight: '32px',
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
      if (index) this.routerChange(index);
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
    key: "loginFunc",
    value: function loginFunc() {
      window.open(_utils_config__WEBPACK_IMPORTED_MODULE_13__["default"].loginAddress);
    }
  }, {
    key: "signUpFunc",
    value: function signUpFunc() {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/signUp');
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
          lineNumber: 82,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, "ICode\u56FD\u9645\u9752\u5C11\u5E74\u7F16\u7A0B\u7ADE\u8D5B")), __jsx("div", {
        style: s_header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "wd-per-100 hgh-per-100 flex items-center flex-between pl-30 pr-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "flex items-center",
        style: s_menus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/static/images/icode.png",
        className: "mr-20",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
            lineNumber: 90,
            columnNumber: 53
          }
        }, v.name);
      })), __jsx("div", {
        className: "jsx-2637918860" + " " + 'entrys',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }
      }, __jsx("button", {
        style: s_button,
        onClick: this.loginFunc.bind(this),
        className: "jsx-2637918860" + " " + 'pointer mr-20',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 29
        }
      }, "\u767B\u5F55"), __jsx("button", {
        style: s_button,
        onClick: this.signUpFunc.bind(this),
        className: "jsx-2637918860" + " " + 'pointer',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 29
        }
      }, "\u5B66\u6821/\u673A\u6784\u62A5\u540D"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2637918860",
        __self: this
      }, "button.jsx-2637918860:hover{background:#148bff!important;color:white!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxsZWFwbGVhcm5lclxcaWNvZGUtd2ViLW5leHRqc1xcc3JjXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR2lDLEFBR3NFLDZCQUNQLHNCQUMxQiIsImZpbGUiOiJDOlxcbGVhcGxlYXJuZXJcXGljb2RlLXdlYi1uZXh0anNcXHNyY1xccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi91dGlscy9jb25maWcnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Jhc2Uuc3R5bCdcclxuXHJcbmNvbnN0IHNfaGVhZGVyID0ge1xyXG4gICAgYm94U2hhZG93OiAnMCAycHggMnB4ICNjY2MnLFxyXG4gICAgaGVpZ2h0OiAnODVweCdcclxufVxyXG5jb25zdCBzX21lbnVzID0ge1xyXG4gICAgaGVpZ2h0OiAnMTAwJSdcclxufVxyXG5jb25zdCBzX2J1dHRvbiA9IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzE0OGJmZicsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxyXG4gICAgY29sb3I6ICcjMTQ4YmZmJyxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDApJyxcclxuICAgIHBhZGRpbmc6ICcwIDIwcHgnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9XHJcblxyXG4gICAgICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfpppbpobUnLCBwYXRoOiAnLycsIHNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfotZvkuosnLCBwYXRoOiAnL3JhY2UnLCBzZWxlY3RlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+ivgeS5picsIHBhdGg6ICcvY2VydGlmaWNhdGUnLCBzZWxlY3RlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+WFs+S6juaIkeS7rCcsIHBhdGg6ICcvYWJvdXR1cycsIHNlbGVjdGVkOiBmYWxzZSB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYXRoID0gUm91dGVyLnJvdXRlci5yb3V0ZSB8fCAnLydcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLm1lbnVzLmZpbmRJbmRleCh2ID0+IHYucGF0aCA9PT0gY3VycmVudFBhdGgpXHJcbiAgICAgICAgaWYgKGluZGV4KSB0aGlzLnJvdXRlckNoYW5nZShpbmRleClcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbWVudXMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3RhdGUubWVudXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdi5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1lbnVzLnB1c2godilcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1lbnVzW2luZGV4XS5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVudXM6IG1lbnVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBSb3V0ZXIucHVzaChtZW51c1tpbmRleF0ucGF0aClcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkZ1bmMoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oQ29uZmlnLmxvZ2luQWRkcmVzcylcclxuICAgIH1cclxuXHJcbiAgICBzaWduVXBGdW5jKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvc2lnblVwJylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPklDb2Rl5Zu96ZmF6Z2S5bCR5bm057yW56iL56ue6LWbPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2QtcGVyLTEwMCBoZ2gtcGVyLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWJldHdlZW4gcGwtMzAgcHItMzAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInIHN0eWxlPXtzX21lbnVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvZGUucG5nXCIgY2xhc3NOYW1lPSdtci0yMCcgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51cy5tYXAoKHYsIGspID0+IDxkaXYgY2xhc3NOYW1lPXt2LnNlbGVjdGVkID8gYG1sLTUwIHBvaW50ZXIgc2VsZWN0ZWRgIDogJ21sLTUwIHBvaW50ZXInfSBrZXk9e2t9IG9uQ2xpY2s9e3RoaXMucm91dGVyQ2hhbmdlLmJpbmQodGhpcywgayl9Pnt2Lm5hbWV9PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudHJ5cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncG9pbnRlciBtci0yMCcgc3R5bGU9e3NfYnV0dG9ufSBvbkNsaWNrPXt0aGlzLmxvZ2luRnVuYy5iaW5kKHRoaXMpfT7nmbvlvZU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwb2ludGVyJyBzdHlsZT17c19idXR0b259IG9uQ2xpY2s9e3RoaXMuc2lnblVwRnVuYy5iaW5kKHRoaXMpfT7lrabmoKEv5py65p6E5oql5ZCNPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ4YmZmIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\\\leaplearner\\\\icode-web-nextjs\\\\src\\\\pages\\\\_app.js */")))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzX2hlYWRlciIsImJveFNoYWRvdyIsImhlaWdodCIsInNfbWVudXMiLCJzX2J1dHRvbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwic3RhdGUiLCJtZW51cyIsIm5hbWUiLCJwYXRoIiwic2VsZWN0ZWQiLCJjdXJyZW50UGF0aCIsIlJvdXRlciIsInJvdXRlciIsInJvdXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ2Iiwicm91dGVyQ2hhbmdlIiwiZm9yRWFjaCIsInB1c2giLCJzZXRTdGF0ZSIsIndpbmRvdyIsIm9wZW4iLCJDb25maWciLCJsb2dpbkFkZHJlc3MiLCJtYXAiLCJrIiwiYmluZCIsImxvZ2luRnVuYyIsInNpZ25VcEZ1bmMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2JDLFdBQVMsRUFBRSxnQkFERTtBQUViQyxRQUFNLEVBQUU7QUFGSyxDQUFqQjtBQUlBLElBQU1DLE9BQU8sR0FBRztBQUNaRCxRQUFNLEVBQUU7QUFESSxDQUFoQjtBQUdBLElBQU1FLFFBQVEsR0FBRztBQUNiQyxPQUFLLEVBQUUsTUFETTtBQUViSCxRQUFNLEVBQUUsTUFGSztBQUdiSSxjQUFZLEVBQUUsS0FIRDtBQUliQyxRQUFNLEVBQUUsbUJBSks7QUFLYkMsV0FBUyxFQUFFLFFBTEU7QUFNYkMsWUFBVSxFQUFFLE1BTkM7QUFPYkMsT0FBSyxFQUFFLFNBUE07QUFRYkMsWUFBVSxF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OiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5mZDU1N2E1OGY0Yjg0YjZmZGE3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vdXRpbHMvY29uZmlnJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9iYXNlLnN0eWwnXHJcblxyXG5jb25zdCBzX2hlYWRlciA9IHtcclxuICAgIGJveFNoYWRvdzogJzAgMnB4IDJweCAjY2NjJyxcclxuICAgIGhlaWdodDogJzg1cHgnXHJcbn1cclxuY29uc3Qgc19tZW51cyA9IHtcclxuICAgIGhlaWdodDogJzEwMCUnXHJcbn1cclxuY29uc3Qgc19idXR0b24gPSB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMxNDhiZmYnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcclxuICAgIGNvbG9yOiAnIzE0OGJmZicsXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICBwYWRkaW5nOiAnMCAyMHB4J1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fVxyXG5cclxuICAgICAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZW51czogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn6aaW6aG1JywgcGF0aDogJy8nLCBzZWxlY3RlZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn6LWb5LqLJywgcGF0aDogJy9yYWNlJywgc2VsZWN0ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfor4HkuaYnLCBwYXRoOiAnL2NlcnRpZmljYXRlJywgc2VsZWN0ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICflhbPkuo7miJHku6wnLCBwYXRoOiAnL2Fib3V0dXMnLCBzZWxlY3RlZDogZmFsc2UgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50UGF0aCA9IFJvdXRlci5yb3V0ZXIucm91dGUgfHwgJy8nXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5tZW51cy5maW5kSW5kZXgodiA9PiB2LnBhdGggPT09IGN1cnJlbnRQYXRoKVxyXG4gICAgICAgIGlmIChpbmRleCkgdGhpcy5yb3V0ZXJDaGFuZ2UoaW5kZXgpXHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyQ2hhbmdlKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG1lbnVzID0gW11cclxuICAgICAgICB0aGlzLnN0YXRlLm1lbnVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIHYuc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBtZW51cy5wdXNoKHYpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBtZW51c1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lbnVzOiBtZW51c1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgUm91dGVyLnB1c2gobWVudXNbaW5kZXhdLnBhdGgpXHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5GdW5jKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKENvbmZpZy5sb2dpbkFkZHJlc3MpXHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwRnVuYygpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25VcCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1lbnVzIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5JQ29kZeWbvemZhemdkuWwkeW5tOe8lueoi+ernui1mzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzX2hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dkLXBlci0xMDAgaGdoLXBlci0xMDAgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1iZXR3ZWVuIHBsLTMwIHByLTMwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJyBzdHlsZT17c19tZW51c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb2RlLnBuZ1wiIGNsYXNzTmFtZT0nbXItMjAnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudXMubWFwKCh2LCBrKSA9PiA8ZGl2IGNsYXNzTmFtZT17di5zZWxlY3RlZCA/IGBtbC01MCBwb2ludGVyIHNlbGVjdGVkYCA6ICdtbC01MCBwb2ludGVyJ30ga2V5PXtrfSBvbkNsaWNrPXt0aGlzLnJvdXRlckNoYW5nZS5iaW5kKHRoaXMsIGspfT57di5uYW1lfTwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbnRyeXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BvaW50ZXIgbXItMjAnIHN0eWxlPXtzX2J1dHRvbn0gb25DbGljaz17dGhpcy5sb2dpbkZ1bmMuYmluZCh0aGlzKX0+55m75b2VPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncG9pbnRlcicgc3R5bGU9e3NfYnV0dG9ufSBvbkNsaWNrPXt0aGlzLnNpZ25VcEZ1bmMuYmluZCh0aGlzKX0+5a2m5qChL+acuuaehOaKpeWQjTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE0OGJmZiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=