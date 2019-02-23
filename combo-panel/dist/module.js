define(["@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BigGaugeLayout.tsx":
/*!***************************************!*\
  !*** ./components/BigGaugeLayout.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigGaugeLayout = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var BigGaugeLayout =
/** @class */
function (_super) {
  __extends(BigGaugeLayout, _super);

  function BigGaugeLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BigGaugeLayout.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        timeSeries = _a.timeSeries,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    var prefix = onInterpolate(options.valueOptions.prefix);
    var suffix = onInterpolate(options.valueOptions.suffix);
    return _react2.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    }, _react2.default.createElement("div", {
      style: {
        width: '50%'
      }
    }, _react2.default.createElement("div", {
      style: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "Server ok"), _react2.default.createElement("div", {
      style: {
        height: '70%'
      }
    }, _react2.default.createElement(_ui.Graph, {
      timeSeries: timeSeries,
      timeRange: timeRange,
      width: width,
      height: height,
      showBars: false,
      showLines: true,
      showPoints: false
    }))), _react2.default.createElement("div", {
      style: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, _react2.default.createElement(_ui.ThemeContext.Consumer, null, function (theme) {
      return _react2.default.createElement(_ui.Gauge, {
        value: gaugeValue,
        width: width / 2,
        height: height,
        prefix: prefix,
        suffix: suffix,
        unit: options.valueOptions.unit,
        decimals: options.valueOptions.decimals,
        thresholds: options.thresholds,
        valueMappings: options.valueMappings,
        showThresholdLabels: options.showThresholdLabels,
        showThresholdMarkers: options.showThresholdMarkers,
        minValue: options.minValue,
        maxValue: options.maxValue,
        theme: theme
      });
    })));
  };

  return BigGaugeLayout;
}(_react.PureComponent);

exports.BigGaugeLayout = BigGaugeLayout;

/***/ }),

/***/ "./components/BigGraphLayout.tsx":
/*!***************************************!*\
  !*** ./components/BigGraphLayout.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigGraphLayout = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var BigGraphLayout =
/** @class */
function (_super) {
  __extends(BigGraphLayout, _super);

  function BigGraphLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BigGraphLayout.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        timeSeries = _a.timeSeries,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    var prefix = onInterpolate(options.valueOptions.prefix);
    var suffix = onInterpolate(options.valueOptions.suffix);
    return _react2.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    }, _react2.default.createElement("div", {
      style: {
        width: '70%'
      }
    }, _react2.default.createElement(_ui.Graph, {
      timeSeries: timeSeries,
      timeRange: timeRange,
      width: width,
      height: height,
      showBars: false,
      showLines: true,
      showPoints: false
    })), _react2.default.createElement("div", {
      style: {
        width: '30%'
      }
    }, _react2.default.createElement("div", {
      style: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "Server ok"), _react2.default.createElement("div", {
      style: {
        height: '50%'
      }
    }, _react2.default.createElement(_ui.ThemeContext.Consumer, null, function (theme) {
      return _react2.default.createElement(_ui.Gauge, {
        value: gaugeValue,
        width: width,
        height: height / 2,
        prefix: prefix,
        suffix: suffix,
        unit: options.valueOptions.unit,
        decimals: options.valueOptions.decimals,
        thresholds: options.thresholds,
        valueMappings: options.valueMappings,
        showThresholdLabels: options.showThresholdLabels,
        showThresholdMarkers: options.showThresholdMarkers,
        minValue: options.minValue,
        maxValue: options.maxValue,
        theme: theme
      });
    }))));
  };

  return BigGraphLayout;
}(_react.PureComponent);

exports.BigGraphLayout = BigGraphLayout;

/***/ }),

/***/ "./components/BigTextLayout.tsx":
/*!**************************************!*\
  !*** ./components/BigTextLayout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigTextLayout = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var BigTextLayout =
/** @class */
function (_super) {
  __extends(BigTextLayout, _super);

  function BigTextLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BigTextLayout.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        timeSeries = _a.timeSeries,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var gaugeValue = timeSeries[0].stats[options.valueOptions.stat];
    var prefix = onInterpolate(options.valueOptions.prefix);
    var suffix = onInterpolate(options.valueOptions.suffix);
    return _react2.default.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
      }
    }, _react2.default.createElement("div", {
      style: {
        height: '40%',
        width: '100%'
      }
    }, _react2.default.createElement("div", {
      style: {
        fontSize: '60px',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "Server ok")), _react2.default.createElement("div", {
      style: {
        height: '60%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, _react2.default.createElement("div", {
      style: {
        width: '60%',
        height: '100%'
      }
    }, _react2.default.createElement(_ui.Graph, {
      timeSeries: timeSeries,
      timeRange: timeRange,
      width: width,
      height: height,
      showBars: false,
      showLines: true,
      showPoints: false
    })), _react2.default.createElement("div", {
      style: {
        width: '40%',
        height: '100%'
      }
    }, _react2.default.createElement(_ui.ThemeContext.Consumer, null, function (theme) {
      return _react2.default.createElement(_ui.Gauge, {
        value: gaugeValue,
        width: width / 3,
        height: height * 0.6,
        prefix: prefix,
        suffix: suffix,
        unit: options.valueOptions.unit,
        decimals: options.valueOptions.decimals,
        thresholds: options.thresholds,
        valueMappings: options.valueMappings,
        showThresholdLabels: options.showThresholdLabels,
        showThresholdMarkers: options.showThresholdMarkers,
        minValue: options.minValue,
        maxValue: options.maxValue,
        theme: theme
      });
    }))));
  };

  return BigTextLayout;
}(_react.PureComponent);

exports.BigTextLayout = BigTextLayout;

/***/ }),

/***/ "./components/ComboPanel.tsx":
/*!***********************************!*\
  !*** ./components/ComboPanel.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboPanel = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _BigTextLayout = __webpack_require__(/*! ./BigTextLayout */ "./components/BigTextLayout.tsx");

var _BigGaugeLayout = __webpack_require__(/*! ./BigGaugeLayout */ "./components/BigGaugeLayout.tsx");

var _BigGraphLayout = __webpack_require__(/*! ./BigGraphLayout */ "./components/BigGraphLayout.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ComboPanel =
/** @class */
function (_super) {
  __extends(ComboPanel, _super);

  function ComboPanel() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // Gauge does not get proper width


  ComboPanel.prototype.render = function () {
    var _a = this.props,
        onInterpolate = _a.onInterpolate,
        options = _a.options,
        panelData = _a.panelData,
        timeRange = _a.timeRange,
        width = _a.width,
        height = _a.height;
    var layout = options.layout;

    if (panelData.timeSeries) {
      var timeSeries = (0, _ui.processTimeSeries)({
        timeSeries: panelData.timeSeries,
        nullValueMode: _ui.NullValueMode.Null
      });

      switch (layout) {
        case 'bigtext':
          return _react2.default.createElement(_BigTextLayout.BigTextLayout, {
            timeSeries: timeSeries,
            timeRange: timeRange,
            width: width,
            height: height,
            options: options,
            onInterpolate: onInterpolate
          });

        case 'biggraph':
          return _react2.default.createElement(_BigGraphLayout.BigGraphLayout, {
            timeSeries: timeSeries,
            timeRange: timeRange,
            width: width,
            height: height,
            options: options,
            onInterpolate: onInterpolate
          });

        default:
        case 'biggauge':
          return _react2.default.createElement(_BigGaugeLayout.BigGaugeLayout, {
            timeSeries: timeSeries,
            timeRange: timeRange,
            width: width,
            height: height,
            options: options,
            onInterpolate: onInterpolate
          });
      }
    } else {
      return _react2.default.createElement("div", null, "Panel needs time series data");
    }
  };

  return ComboPanel;
}(_react.PureComponent);

exports.ComboPanel = ComboPanel;

/***/ }),

/***/ "./components/ComboPanelEditor.tsx":
/*!*****************************************!*\
  !*** ./components/ComboPanelEditor.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboPanelEditor = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _LayoutOptions = __webpack_require__(/*! ./LayoutOptions */ "./components/LayoutOptions.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var ComboPanelEditor =
/** @class */
function (_super) {
  __extends(ComboPanelEditor, _super);

  function ComboPanelEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onLayoutChange = function (layout) {
      return _this.props.onChange(__assign({}, _this.props.options, {
        layout: layout
      }));
    };

    return _this;
  }

  ComboPanelEditor.prototype.render = function () {
    var _this = this; // Options for Gauge (thresholds etc), Graph (lines, bars, points)
    // and Text (size color etc)
    // Options for resizing the sections, choose layout?
    // Combine Thresholds and text (+ color)


    return _react2.default.createElement("div", null, _react2.default.createElement(_ui.PanelOptionsGrid, null, _react2.default.createElement(_LayoutOptions.LayoutOptions, {
      onChange: function onChange(layout) {
        return _this.onLayoutChange(layout);
      },
      selectedLayout: this.props.options.layout
    })));
  };

  return ComboPanelEditor;
}(_react.PureComponent);

exports.ComboPanelEditor = ComboPanelEditor;

/***/ }),

/***/ "./components/LayoutOptions.tsx":
/*!**************************************!*\
  !*** ./components/LayoutOptions.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutOptions = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var layoutOptions = [{
  value: 'bigtext',
  label: 'Big Text'
}, {
  value: 'biggraph',
  label: 'Big Graph'
}, {
  value: 'biggauge',
  label: 'Big Gauge'
}];

var LayoutOptions =
/** @class */
function (_super) {
  __extends(LayoutOptions, _super);

  function LayoutOptions() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LayoutOptions.prototype.render = function () {
    var _a = this.props,
        onChange = _a.onChange,
        selectedLayout = _a.selectedLayout;
    return _react2.default.createElement(_ui.PanelOptionsGroup, {
      title: "Layout"
    }, _react2.default.createElement("div", {
      style: {
        width: '50%',
        display: 'flex'
      }
    }, layoutOptions.map(function (layout, index) {
      var isActive = selectedLayout === layout.value;
      return _react2.default.createElement("div", {
        key: layout.value + "-" + index,
        onClick: function onClick() {
          return onChange(layout.value);
        },
        style: {
          margin: '0 8px',
          padding: '10px',
          border: '1px solid white',
          borderRadius: '3px',
          backgroundColor: isActive && '#393737',
          cursor: isActive ? 'auto' : 'pointer',
          pointerEvents: isActive ? 'none' : 'auto'
        }
      }, layout.label);
    })));
  };

  return LayoutOptions;
}(_react.PureComponent);

exports.LayoutOptions = LayoutOptions;

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactPanel = undefined;

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _ComboPanel = __webpack_require__(/*! ./components/ComboPanel */ "./components/ComboPanel.tsx");

var _ComboPanelEditor = __webpack_require__(/*! ./components/ComboPanelEditor */ "./components/ComboPanelEditor.tsx");

var _types = __webpack_require__(/*! ./types */ "./types.ts");

var reactPanel = exports.reactPanel = new _ui.ReactPanelPlugin(_ComboPanel.ComboPanel);
reactPanel.setEditor(_ComboPanelEditor.ComboPanelEditor);
reactPanel.setDefaults(_types.defaults);

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = exports.defaults = {
  minValue: 0,
  maxValue: 100,
  layout: 'biggauge',
  showThresholdMarkers: true,
  showThresholdLabels: false,
  showLines: true,
  showBars: false,
  showPoints: false,
  valueOptions: {
    prefix: '',
    suffix: '',
    decimals: null,
    stat: 'avg',
    unit: 'none'
  },
  valueMappings: [],
  thresholds: [{
    index: 0,
    value: -Infinity,
    color: 'green'
  }]
};

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map