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
      }, {
        name: '学校机构报名',
        path: '/signUp'
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
    key: "loginFunc",
    value: function loginFunc() {
      window.open(_utils_config__WEBPACK_IMPORTED_MODULE_13__["default"].loginAddress);
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
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }, "ICode\u56FD\u9645\u9752\u5C11\u5E74\u7F16\u7A0B\u7ADE\u8D5B")), __jsx("div", {
        style: s_header,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "wd-per-100 hgh-per-100 flex items-center flex-between pl-30 pr-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "flex items-center",
        style: s_menus,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/static/images/icode.png",
        className: "mr-20",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
            lineNumber: 87,
            columnNumber: 53
          }
        }, v.name);
      })), __jsx("div", {
        className: "jsx-2637918860" + " " + 'entrys',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, __jsx("button", {
        style: s_button,
        onClick: this.loginFunc.bind(this),
        className: "jsx-2637918860" + " " + 'pointer mr-20',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 29
        }
      }, "\u767B\u5F55"), __jsx("button", {
        style: s_button,
        className: "jsx-2637918860" + " " + 'pointer',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 29
        }
      }, "\u5B66\u6821/\u673A\u6784\u62A5\u540D"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2637918860",
        __self: this
      }, "button.jsx-2637918860:hover{background:#148bff!important;color:white!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxsZWFwbGVhcm5lclxcaWNvZGUtd2ViLW5leHRqc1xcc3JjXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RmlDLEFBR3NFLDZCQUNQLHNCQUMxQiIsImZpbGUiOiJDOlxcbGVhcGxlYXJuZXJcXGljb2RlLXdlYi1uZXh0anNcXHNyY1xccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi91dGlscy9jb25maWcnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Jhc2Uuc3R5bCdcclxuXHJcbmNvbnN0IHNfaGVhZGVyID0ge1xyXG4gICAgYm94U2hhZG93OiAnMCAycHggMnB4ICNjY2MnLFxyXG4gICAgaGVpZ2h0OiAnODVweCdcclxufVxyXG5jb25zdCBzX21lbnVzID0ge1xyXG4gICAgaGVpZ2h0OiAnMTAwJSdcclxufVxyXG5jb25zdCBzX2J1dHRvbiA9IHtcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBoZWlnaHQ6ICczMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzE0OGJmZicsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxyXG4gICAgY29sb3I6ICcjMTQ4YmZmJyxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDApJyxcclxuICAgIHBhZGRpbmc6ICcwIDIwcHgnXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9XHJcblxyXG4gICAgICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfpppbpobUnLCBwYXRoOiAnLycsIHNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICfotZvkuosnLCBwYXRoOiAnL3JhY2UnLCBzZWxlY3RlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+ivgeS5picsIHBhdGg6ICcvY2VydGlmaWNhdGUnLCBzZWxlY3RlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+WFs+S6juaIkeS7rCcsIHBhdGg6ICcvYWJvdXR1cycsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn5a2m5qCh5py65p6E5oql5ZCNJywgcGF0aDogJy9zaWduVXAnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgY3VycmVudFBhdGggPSBSb3V0ZXIucm91dGVyLnJvdXRlIHx8ICcvJ1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubWVudXMuZmluZEluZGV4KHYgPT4gdi5wYXRoID09PSBjdXJyZW50UGF0aClcclxuICAgICAgICB0aGlzLnJvdXRlckNoYW5nZShpbmRleClcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZXJDaGFuZ2UoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbWVudXMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3RhdGUubWVudXMuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgdi5zZWxlY3RlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIG1lbnVzLnB1c2godilcclxuICAgICAgICB9KVxyXG4gICAgICAgIG1lbnVzW2luZGV4XS5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVudXM6IG1lbnVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBSb3V0ZXIucHVzaChtZW51c1tpbmRleF0ucGF0aClcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkZ1bmMoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oQ29uZmlnLmxvZ2luQWRkcmVzcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbWVudXMgfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPklDb2Rl5Zu96ZmF6Z2S5bCR5bm057yW56iL56ue6LWbPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NfaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2QtcGVyLTEwMCBoZ2gtcGVyLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWJldHdlZW4gcGwtMzAgcHItMzAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInIHN0eWxlPXtzX21lbnVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvZGUucG5nXCIgY2xhc3NOYW1lPSdtci0yMCcgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51cy5tYXAoKHYsIGspID0+IDxkaXYgY2xhc3NOYW1lPXt2LnNlbGVjdGVkID8gYG1sLTUwIHBvaW50ZXIgc2VsZWN0ZWRgIDogJ21sLTUwIHBvaW50ZXInfSBrZXk9e2t9IG9uQ2xpY2s9e3RoaXMucm91dGVyQ2hhbmdlLmJpbmQodGhpcywgayl9Pnt2Lm5hbWV9PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudHJ5cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncG9pbnRlciBtci0yMCcgc3R5bGU9e3NfYnV0dG9ufSBvbkNsaWNrPXt0aGlzLmxvZ2luRnVuYy5iaW5kKHRoaXMpfT7nmbvlvZU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwb2ludGVyJyBzdHlsZT17c19idXR0b259PuWtpuagoS/mnLrmnoTmiqXlkI08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDhiZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\leaplearner\\\\icode-web-nextjs\\\\src\\\\pages\\\\_app.js */")))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJzX2hlYWRlciIsImJveFNoYWRvdyIsImhlaWdodCIsInNfbWVudXMiLCJzX2J1dHRvbiIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsInByb3BzIiwic3RhdGUiLCJtZW51cyIsIm5hbWUiLCJwYXRoIiwic2VsZWN0ZWQiLCJjdXJyZW50UGF0aCIsIlJvdXRlciIsInJvdXRlciIsInJvdXRlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ2Iiwicm91dGVyQ2hhbmdlIiwiZm9yRWFjaCIsInB1c2giLCJzZXRTdGF0ZSIsIndpbmRvdyIsIm9wZW4iLCJDb25maWciLCJsb2dpbkFkZHJlc3MiLCJtYXAiLCJrIiwiYmluZCIsImxvZ2luRnVuYyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsV0FBUyxFQUFFLGdCQURFO0FBRWJDLFFBQU0sRUFBRTtBQUZLLENBQWpCO0FBSUEsSUFBTUMsT0FBTyxHQUFHO0FBQ1pELFFBQU0sRUFBRTtBQURJLENBQWhCO0FBR0EsSUFBTUUsUUFBUSxHQUFHO0FBQ2JDLE9BQUssRUFBRSxNQURNO0FBRWJILFFBQU0sRUFBRSxNQUZLO0FBR2JJLGNBQVksRUFBRSxLQUhEO0FBSWJDLFFBQU0sRUFBRSxtQkFKSztBQUtiQyxXQUFTLEVBQUUsUUFMRTtBQU1iQyxZQUFVLEVBQUUsTUFOQztBQU9iQyxPQUFLLEVBQUUsU0FQTTtBQVFiQyxZQUFVLEVBQUUsZUFSQztBQVNiQyxTQUFPLEVBQUU7QUFUSSxDQUFqQjs7SUFZcUJDLEs7Ozs7Ozs7Ozs7Ozs7O0FBQ2NDLHlCLFFBQUFBLFMsRUFBV0MsRyxRQUFBQSxHO0FBQ2xDQyx5QixHQUFZLEU7O3FCQUVaRixTQUFTLENBQUNHLGU7Ozs7Ozt1QkFDUUgsU0FBUyxDQUFDRyxlQUFWLENBQTBCRixHQUExQixDOzs7QUFBbEJDLHlCOzs7aURBR0c7QUFBRUEsMkJBQVMsRUFBVEE7QUFBRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1gsaUJBQVlFLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsQ0FDSDtBQUFFQyxZQUFJLEVBQUUsSUFBUjtBQUFjQyxZQUFJLEVBQUUsR0FBcEI7QUFBeUJDLGdCQUFRLEVBQUU7QUFBbkMsT0FERyxFQUVIO0FBQUVGLFlBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUksRUFBRSxPQUFwQjtBQUE2QkMsZ0JBQVEsRUFBRTtBQUF2QyxPQUZHLEVBR0g7QUFBRUYsWUFBSSxFQUFFLElBQVI7QUFBY0MsWUFBSSxFQUFFLGNBQXBCO0FBQW9DQyxnQkFBUSxFQUFFO0FBQTlDLE9BSEcsRUFJSDtBQUFFRixZQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBSSxFQUFFLFVBQXRCO0FBQWtDQyxnQkFBUSxFQUFFO0FBQTVDLE9BSkcsRUFLSDtBQUFFRixZQUFJLEVBQUUsUUFBUjtBQUFrQkMsWUFBSSxFQUFFO0FBQXhCLE9BTEc7QUFERSxLQUFiO0FBRmU7QUFXbEI7Ozs7d0NBRW1CO0FBQ2hCLFVBQUlFLFdBQVcsR0FBR0MsbURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLElBQXVCLEdBQXpDO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEtBQUtULEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlMsU0FBakIsQ0FBMkIsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ1IsSUFBRixLQUFXRSxXQUFmO0FBQUEsT0FBNUIsQ0FBWjtBQUNBLFdBQUtPLFlBQUwsQ0FBa0JILEtBQWxCO0FBQ0g7OztpQ0FFWUEsSyxFQUFPO0FBQ2hCLFVBQUlSLEtBQUssR0FBRyxFQUFaO0FBQ0EsV0FBS0QsS0FBTCxDQUFXQyxLQUFYLENBQWlCWSxPQUFqQixDQUF5QixVQUFBRixDQUFDLEVBQUk7QUFDMUJBLFNBQUMsQ0FBQ1AsUUFBRixHQUFhLEtBQWI7QUFDQUgsYUFBSyxDQUFDYSxJQUFOLENBQVdILENBQVg7QUFDSCxPQUhEO0FBSUFWLFdBQUssQ0FBQ1EsS0FBRCxDQUFMLENBQWFMLFFBQWIsR0FBd0IsSUFBeEI7QUFDQSxXQUFLVyxRQUFMLENBQWM7QUFDVmQsYUFBSyxFQUFFQTtBQURHLE9BQWQ7QUFHQUsseURBQU0sQ0FBQ1EsSUFBUCxDQUFZYixLQUFLLENBQUNRLEtBQUQsQ0FBTCxDQUFhTixJQUF6QjtBQUNIOzs7Z0NBRVc7QUFDUmEsWUFBTSxDQUFDQyxJQUFQLENBQVlDLHNEQUFNLENBQUNDLFlBQW5CO0FBQ0g7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUM0QixLQUFLcEIsS0FEakM7QUFBQSxVQUNHSixTQURILGVBQ0dBLFNBREg7QUFBQSxVQUNjRSxTQURkLGVBQ2NBLFNBRGQ7QUFBQSxVQUVHSSxLQUZILEdBRWEsS0FBS0QsS0FGbEIsQ0FFR0MsS0FGSDtBQUdMLGFBQ0ksb0VBQ0ksTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFESixDQURKLEVBSUk7QUFBSyxhQUFLLEVBQUVwQixRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFtQyxhQUFLLEVBQUVHLE9BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLFdBQUcsRUFBQywwQkFBVDtBQUFvQyxpQkFBUyxFQUFDLE9BQTlDO0FBQXNELFdBQUcsRUFBQyxFQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFHUWlCLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVSxVQUFDVCxDQUFELEVBQUlVLENBQUo7QUFBQSxlQUFVO0FBQUssbUJBQVMsRUFBRVYsQ0FBQyxDQUFDUCxRQUFGLDhCQUF3QyxlQUF4RDtBQUF5RSxhQUFHLEVBQUVpQixDQUE5RTtBQUFpRixpQkFBTyxFQUFFLE1BQUksQ0FBQ1QsWUFBTCxDQUFrQlUsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBNkJELENBQTdCLENBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNEhWLENBQUMsQ0FBQ1QsSUFBOUgsQ0FBVjtBQUFBLE9BQVYsQ0FIUixDQURKLEVBT0k7QUFBQSw0Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFrQyxhQUFLLEVBQUVqQixRQUF6QztBQUFtRCxlQUFPLEVBQUUsS0FBS3NDLFNBQUwsQ0FBZUQsSUFBZixDQUFvQixJQUFwQixDQUE1RDtBQUFBLDRDQUFrQixlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBNEIsYUFBSyxFQUFFckMsUUFBbkM7QUFBQSw0Q0FBa0IsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFGSjtBQUFBO0FBQUE7QUFBQSxxZ0xBUEosQ0FESixDQUpKLEVBMEJJLE1BQUMsU0FBRCx5RkFBZVksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMUJKLENBREo7QUE4Qkg7Ozs7RUFoRjhCMkIsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYzU3NTMzYTJmMzI0NDgzYTM0MmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL3V0aWxzL2NvbmZpZydcclxuaW1wb3J0ICcuLi9zdHlsZXMvYmFzZS5zdHlsJ1xyXG5cclxuY29uc3Qgc19oZWFkZXIgPSB7XHJcbiAgICBib3hTaGFkb3c6ICcwIDJweCAycHggI2NjYycsXHJcbiAgICBoZWlnaHQ6ICc4NXB4J1xyXG59XHJcbmNvbnN0IHNfbWVudXMgPSB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJ1xyXG59XHJcbmNvbnN0IHNfYnV0dG9uID0ge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMTQ4YmZmJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXHJcbiAgICBjb2xvcjogJyMxNDhiZmYnLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgcGFkZGluZzogJzAgMjBweCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgICAgICBsZXQgcGFnZVByb3BzID0ge31cclxuXHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVudXM6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+mmlumhtScsIHBhdGg6ICcvJywgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ+i1m+S6iycsIHBhdGg6ICcvcmFjZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn6K+B5LmmJywgcGF0aDogJy9jZXJ0aWZpY2F0ZScsIHNlbGVjdGVkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAn5YWz5LqO5oiR5LusJywgcGF0aDogJy9hYm91dHVzJywgc2VsZWN0ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICflrabmoKHmnLrmnoTmiqXlkI0nLCBwYXRoOiAnL3NpZ25VcCcgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50UGF0aCA9IFJvdXRlci5yb3V0ZXIucm91dGUgfHwgJy8nXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5tZW51cy5maW5kSW5kZXgodiA9PiB2LnBhdGggPT09IGN1cnJlbnRQYXRoKVxyXG4gICAgICAgIHRoaXMucm91dGVyQ2hhbmdlKGluZGV4KVxyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlckNoYW5nZShpbmRleCkge1xyXG4gICAgICAgIGxldCBtZW51cyA9IFtdXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tZW51cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICB2LnNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgbWVudXMucHVzaCh2KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbWVudXNbaW5kZXhdLnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZW51czogbWVudXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIFJvdXRlci5wdXNoKG1lbnVzW2luZGV4XS5wYXRoKVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luRnVuYygpIHtcclxuICAgICAgICB3aW5kb3cub3BlbihDb25maWcubG9naW5BZGRyZXNzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBtZW51cyB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+SUNvZGXlm73pmYXpnZLlsJHlubTnvJbnqIvnq57otZs8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c19oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZC1wZXItMTAwIGhnaC1wZXItMTAwIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtYmV0d2VlbiBwbC0zMCBwci0zMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcicgc3R5bGU9e3NfbWVudXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29kZS5wbmdcIiBjbGFzc05hbWU9J21yLTIwJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVzLm1hcCgodiwgaykgPT4gPGRpdiBjbGFzc05hbWU9e3Yuc2VsZWN0ZWQgPyBgbWwtNTAgcG9pbnRlciBzZWxlY3RlZGAgOiAnbWwtNTAgcG9pbnRlcid9IGtleT17a30gb25DbGljaz17dGhpcy5yb3V0ZXJDaGFuZ2UuYmluZCh0aGlzLCBrKX0+e3YubmFtZX08L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50cnlzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwb2ludGVyIG1yLTIwJyBzdHlsZT17c19idXR0b259IG9uQ2xpY2s9e3RoaXMubG9naW5GdW5jLmJpbmQodGhpcyl9PueZu+W9lTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3BvaW50ZXInIHN0eWxlPXtzX2J1dHRvbn0+5a2m5qChL+acuuaehOaKpeWQjTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE0OGJmZiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=