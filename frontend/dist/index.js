/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/index.jsx */ \"./src/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.get('/', function (req, res) {\n  res.send(react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n});\napp.listen(8080);\n\n//# sourceURL=webpack://app/./server.js?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _list_list_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.jsx */ \"./src/list/list.jsx\");\n/* harmony import */ var _popup_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.jsx */ \"./src/popup.jsx\");\n/* harmony import */ var _titlebar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./titlebar.jsx */ \"./src/titlebar.jsx\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n//import 'bootstrap/dist/css/bootstrap.css';\n//import './style/index.less';\n\n\n\n\nvar App = function App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    alerts = _useState2[0],\n    setAlerts = _useState2[1];\n  var addAlert = function addAlert(type, msg) {\n    setAlerts([].concat(_toConsumableArray(alerts), [{\n      \"type\": type,\n      \"msg\": msg\n    }]));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_titlebar_jsx__WEBPACK_IMPORTED_MODULE_3__.TitleBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_list_jsx__WEBPACK_IMPORTED_MODULE_1__.List, {\n    addAlert: addAlert\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_jsx__WEBPACK_IMPORTED_MODULE_2__.AlertsDisplay, {\n    alerts: alerts\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n/*\nconst container = document.getElementById(\"root\");\nconst root = ReactDOM.createRoot(container);\nroot.render(<React.StrictMode><App /></React.StrictMode>);*/\n\n//# sourceURL=webpack://app/./src/index.jsx?");

/***/ }),

/***/ "./src/list/item.jsx":
/*!***************************!*\
  !*** ./src/list/item.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ItemContainer\": () => (/* binding */ ItemContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/fetcher */ \"./src/util/fetcher.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar Item = function Item(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.checked),\n    _useState2 = _slicedToArray(_useState, 2),\n    checked = _useState2[0],\n    setCheckState = _useState2[1];\n  var onCheck = function onCheck() {\n    (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetchMan)({\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        id: props.id,\n        checked: !checked\n      })\n    }).then(function (data) {\n      setCheckState(!checked);\n    }, function (err) {\n      props.addAlert(\"danger\", \"Error sending PATCH request (\".concat(err, \")\"));\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"list-group-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: \"listItem\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    onChange: onCheck,\n    defaultChecked: checked\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"check-border\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"check-back\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    viewBox: \"0 0 24 24\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M4.1 12.7L9 17.6 20.3 6.3\",\n    fill: \"none\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, props.children)));\n};\nvar ItemContainer = function ItemContainer(props) {\n  // Item container for holding item components\n  return props.items.map(function (m) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {\n      key: m.id,\n      id: m.id,\n      checked: m.checked,\n      addAlert: props.addAlert\n    }, m.value);\n  });\n};\n\n//# sourceURL=webpack://app/./src/list/item.jsx?");

/***/ }),

/***/ "./src/list/list.jsx":
/*!***************************!*\
  !*** ./src/list/list.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_fetcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/fetcher.js */ \"./src/util/fetcher.js\");\n/* harmony import */ var _item_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.jsx */ \"./src/list/item.jsx\");\n/* harmony import */ var _title_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title.jsx */ \"./src/list/title.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar List = function List(props) {\n  // Get items\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    items = _useState2[0],\n    setItems = _useState2[1];\n  var update = function update() {\n    (0,_util_fetcher_js__WEBPACK_IMPORTED_MODULE_1__.fetchMan)({\n      method: 'GET'\n    }).then(function (data) {\n      setItems(data);\n    }, function (err) {\n      props.addAlert(\"danger\", \"Error getting list items (\".concat(err, \")\"));\n    });\n  };\n\n  // Fire once\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    update();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-md-8 offset-md-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"list-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_jsx__WEBPACK_IMPORTED_MODULE_3__.Title, {\n    name: \"My List\",\n    update: update,\n    addAlert: props.addAlert\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_item_jsx__WEBPACK_IMPORTED_MODULE_2__.ItemContainer, {\n    items: items,\n    addAlert: props.addAlert\n  })));\n};\n\n//# sourceURL=webpack://app/./src/list/list.jsx?");

/***/ }),

/***/ "./src/list/title.jsx":
/*!****************************!*\
  !*** ./src/list/title.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Title\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/fetcher */ \"./src/util/fetcher.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar Title = function Title(props) {\n  // The title of the page, also holds the input form.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n    _useState2 = _slicedToArray(_useState, 2),\n    value = _useState2[0],\n    setValue = _useState2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"list-group-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: function onSubmit(event) {\n      event.preventDefault();\n\n      // Add todo\n      (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetchMan)({\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          title: value\n        })\n      }).then(function (data) {\n        props.update();\n      }, function (err) {\n        props.addAlert(\"danger\", \"Error when POSTing list item (\".concat(err, \")\"));\n      });\n      setValue(\"\");\n    },\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: value,\n    onChange: function onChange(event) {\n      setValue(event.target.value);\n    },\n    className: \"form-control me-2\",\n    placeholder: \"Add new todo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Add\")));\n};\n\n//# sourceURL=webpack://app/./src/list/title.jsx?");

/***/ }),

/***/ "./src/popup.jsx":
/*!***********************!*\
  !*** ./src/popup.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertsDisplay\": () => (/* binding */ AlertsDisplay)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar key = -1;\nvar AlertsDisplay = function AlertsDisplay(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"alertsbox\"\n  }, props.alerts.map(function (m) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Alert, {\n      key: key += 1,\n      type: m.type,\n      message: m.msg\n    });\n  }));\n};\nvar Alert = function Alert(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"alert alert-\".concat(props.type),\n    role: \"alert\"\n  }, props.message);\n};\n\n//# sourceURL=webpack://app/./src/popup.jsx?");

/***/ }),

/***/ "./src/titlebar.jsx":
/*!**************************!*\
  !*** ./src/titlebar.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TitleBar\": () => (/* binding */ TitleBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar TitleBar = function TitleBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"navbar navbar-expand-lg bg-light\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"navbar-brand\",\n    href: \"#\"\n  }, \"Checklio\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"navbar-toggler\",\n    type: \"button\",\n    \"data-bs-toggle\": \"collapse\",\n    \"data-bs-target\": \"#titlebarNav\",\n    \"aria-controls\": \"titlebarNav\",\n    \"aria-expanded\": \"false\",\n    \"aria-label\": \"Toggle navigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"navbar-toggler-icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"titlebarNav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"navbar-nav me-auto mb-2 mb-lg-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"nav-link\"\n  }, \"My Boards\"))))));\n};\n\n//# sourceURL=webpack://app/./src/titlebar.jsx?");

/***/ }),

/***/ "./src/util/fetcher.js":
/*!*****************************!*\
  !*** ./src/util/fetcher.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMan\": () => (/* binding */ fetchMan)\n/* harmony export */ });\nvar fetchMan = function fetchMan(input) {\n  // Fetch API wrapper\n  return new Promise(function (success, failure) {\n    fetch(\"http://\".concat(window.location.host, \"/api/\"), input).then(function (response) {\n      if (response.status >= 200 && response.status <= 299) {\n        // If status code is a success status code\n        success(response.json(), response.status);\n      } else {\n        // If status code is anything else\n        failure(response.status);\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://app/./src/util/fetcher.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	module.exports.app = __webpack_exports__;
/******/ 	
/******/ })()
;