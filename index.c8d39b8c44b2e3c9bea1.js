(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "0RIy":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/reset.css */ "Po7t");
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_reset_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/index.css */ "spug");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.js */ "S1uw");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.js */ "8Nux");







var eventDateArea;
var remainDateArea;
var calendarInstance;

var getDateTimeFromQuery = function getDateTimeFromQuery() {
  var timeFromQuery = Object(_util_js__WEBPACK_IMPORTED_MODULE_5__["filterDuplicatedQuery"])("datetime");
  var dateTime = new Date(parseInt(timeFromQuery, 10));

  if (isNaN(dateTime.getTime())) {
    return null;
  }

  return dateTime;
}; // http://localhost:3000/?datetime=1601859600000


var displayEventDate = function displayEventDate(eventDate) {
  var textArea = eventDateArea.querySelector('span');
  textArea.innerHTML = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(eventDate, 'yyyy MM dd');
  eventDateArea.style.display = "";
};

var displayRemainTime = function displayRemainTime(eventDate) {
  var direction = remainDateArea.querySelector('.direction');
  var dd = remainDateArea.querySelector('.dd');
  var hh = remainDateArea.querySelector('.hh');
  var mm = remainDateArea.querySelector('.mm');
  var ss = remainDateArea.querySelector('.ss');

  var callFrame = function callFrame() {
    var remainTime = Date.now() - eventDate.getTime();

    var _parseTimeStamp = Object(_util_js__WEBPACK_IMPORTED_MODULE_5__["parseTimeStamp"])(Math.abs(remainTime)),
        day = _parseTimeStamp.day,
        hour = _parseTimeStamp.hour,
        minute = _parseTimeStamp.minute,
        second = _parseTimeStamp.second;

    direction.innerHTML = remainTime > 0 ? "PLUS" : "MINUS";
    dd.innerHTML = day;
    hh.innerHTML = hour;
    mm.innerHTML = minute;
    ss.innerHTML = second;
    requestAnimationFrame(callFrame);
  };

  requestAnimationFrame(callFrame);
};

var onClickCalendarConfirm = function onClickCalendarConfirm() {
  var selectedTime = calendarInstance.getDateTime();

  if (isNaN(selectedTime)) {
    alert('날짜를 제대로 선택하셈');
    return;
  }

  window.location.replace("?datetime=".concat(selectedTime));
};

var displayCalendar = function displayCalendar() {
  var calendarRoot = document.querySelector("#date_area");
  var confirmButton = calendarRoot.querySelector("button");

  if (!calendarInstance) {
    calendarInstance = new _calendar_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    calendarInstance.on('init', function () {
      console.log('calendar initialize');
    });
    calendarInstance.initialize(calendarRoot.querySelector(".calendar"));
  }

  confirmButton.addEventListener('click', onClickCalendarConfirm);
  calendarRoot.style.display = '';
};

var init = function init() {
  // 1. 쿼리 확인
  // ex) datetime=1601859600000 
  var eventDate = getDateTimeFromQuery();

  if (!eventDate) {
    // 1.5. 캘린더 보여주기 => 날짜 선택하기 => 쿼리 바꾸기
    displayCalendar();
    return;
  }

  var calendarRoot = document.querySelector("#date_area");
  calendarRoot.style.display = 'none'; // 2. 화면에 현재 시간 및 남은 시간 표시하기

  displayEventDate(eventDate);
  displayRemainTime(eventDate);
};

var getInitializeLog = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$import, _;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() | lodash */ "vendors").then(__webpack_require__.t.bind(null, /*! lodash */ "LvDl", 7));

          case 2:
            _yield$import = _context.sent;
            _ = _yield$import["default"];
            return _context.abrupt("return", function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return _.join(args, ' ');
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInitializeLog() {
    return _ref.apply(this, arguments);
  };
}();

window.addEventListener("DOMContentLoaded", function () {
  eventDateArea = document.querySelector("#event_area");
  remainDateArea = document.querySelector("#remain_area");
  getInitializeLog().then(function (logger) {
    console.log(logger('welcome', 'D-Day', 'counter'));
  });
  init();
});

/***/ }),

/***/ "8Nux":
/*!********************************!*\
  !*** ./src/script/calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emittery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emittery */ "e91L");
/* harmony import */ var emittery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emittery__WEBPACK_IMPORTED_MODULE_2__);




var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Calendar);

    this.observer = new emittery__WEBPACK_IMPORTED_MODULE_2___default.a();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Calendar, [{
    key: "initialize",
    value: function initialize(root) {
      if (!root) {
        return;
      }

      this.root = root;
      this.renderSelectArea();
      this.bindSelect();
      this.trigger('init');
    } // private

  }, {
    key: "trigger",
    value: function trigger(eventName) {
      this.observer.emit(eventName);
    }
  }, {
    key: "on",
    value: function on(eventName, callback) {
      this.observer.on(eventName, callback);
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      this.observer.off(eventName, callback);
    }
  }, {
    key: "renderSelectArea",
    value: function renderSelectArea() {
      var template = "\n            <input name=\"datetime\" type=\"datetime-local\"></input>\n        ";
      this.root.innerHTML = template;
    }
  }, {
    key: "bindSelect",
    value: function bindSelect() {
      this.datetimeInput = this.root.querySelector('[name="datetime"]');
    }
  }, {
    key: "getDateTime",
    value: function getDateTime() {
      var value = this.datetimeInput.value;
      return new Date(value).getTime();
    }
  }]);

  return Calendar;
}();

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "Po7t":
/*!*****************************!*\
  !*** ./src/style/reset.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "zB6A");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "S1uw":
/*!****************************!*\
  !*** ./src/script/util.js ***!
  \****************************/
/*! exports provided: MIL_SECOND_UNIT, SECOND_UNIT, MINUTE_UNIT, HOUR_UNIT, filterDuplicatedQuery, parseTimeStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIL_SECOND_UNIT", function() { return MIL_SECOND_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND_UNIT", function() { return SECOND_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE_UNIT", function() { return MINUTE_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR_UNIT", function() { return HOUR_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDuplicatedQuery", function() { return filterDuplicatedQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTimeStamp", function() { return parseTimeStamp; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "cr+I");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);

var MIL_SECOND_UNIT = 1000;
var SECOND_UNIT = 60;
var MINUTE_UNIT = 60;
var HOUR_UNIT = 24;
var DAY_TO_SEC = HOUR_UNIT * MINUTE_UNIT * SECOND_UNIT;
var HOUR_TO_SEC = MINUTE_UNIT * SECOND_UNIT;
var MINUTE_TO_SEC = MINUTE_UNIT;
var filterDuplicatedQuery = function filterDuplicatedQuery(queryName) {
  var query = (query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(window.location.search) || {})[queryName];

  if (Array.isArray(query)) {
    return query[0];
  }

  return query;
};
var parseTimeStamp = function parseTimeStamp(milsec) {
  var remainSecond = parseInt(Math.abs(milsec) / MIL_SECOND_UNIT, 10);
  var day = parseInt(remainSecond / DAY_TO_SEC, 10);
  var hour = parseInt((remainSecond - day * DAY_TO_SEC) / HOUR_TO_SEC, 10);
  var min = parseInt((remainSecond - day * DAY_TO_SEC - hour * HOUR_TO_SEC) / MINUTE_TO_SEC, 10);
  var sec = remainSecond - day * DAY_TO_SEC - hour * HOUR_TO_SEC - min * MINUTE_TO_SEC;
  return {
    day: day < 10 ? "0".concat(day) : day,
    hour: hour < 10 ? "0".concat(hour) : hour,
    minute: min < 10 ? "0".concat(min) : min,
    second: sec < 10 ? "0".concat(sec) : sec
  };
};

/***/ }),

/***/ "spug":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!./index.css */ "vtD/");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "vtD/":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/style/index.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "zB6A":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/style/reset.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["0RIy","runtime","vendors"]],["vendors"]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcz81MWYwIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvaW5kZXguY3NzP2IyOWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvcmVzZXQuY3NzIl0sIm5hbWVzIjpbImV2ZW50RGF0ZUFyZWEiLCJyZW1haW5EYXRlQXJlYSIsImNhbGVuZGFySW5zdGFuY2UiLCJnZXREYXRlVGltZUZyb21RdWVyeSIsInRpbWVGcm9tUXVlcnkiLCJmaWx0ZXJEdXBsaWNhdGVkUXVlcnkiLCJkYXRlVGltZSIsIkRhdGUiLCJwYXJzZUludCIsImlzTmFOIiwiZ2V0VGltZSIsImRpc3BsYXlFdmVudERhdGUiLCJldmVudERhdGUiLCJ0ZXh0QXJlYSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJmb3JtYXQiLCJzdHlsZSIsImRpc3BsYXkiLCJkaXNwbGF5UmVtYWluVGltZSIsImRpcmVjdGlvbiIsImRkIiwiaGgiLCJtbSIsInNzIiwiY2FsbEZyYW1lIiwicmVtYWluVGltZSIsIm5vdyIsInBhcnNlVGltZVN0YW1wIiwiTWF0aCIsImFicyIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbkNsaWNrQ2FsZW5kYXJDb25maXJtIiwic2VsZWN0ZWRUaW1lIiwiZ2V0RGF0ZVRpbWUiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImRpc3BsYXlDYWxlbmRhciIsImNhbGVuZGFyUm9vdCIsImRvY3VtZW50IiwiY29uZmlybUJ1dHRvbiIsIkNhbGVuZGFyIiwib24iLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbGl6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiZ2V0SW5pdGlhbGl6ZUxvZyIsIl8iLCJhcmdzIiwiam9pbiIsInRoZW4iLCJsb2dnZXIiLCJvYnNlcnZlciIsIkVtaXR0ZXJ5Iiwicm9vdCIsInJlbmRlclNlbGVjdEFyZWEiLCJiaW5kU2VsZWN0IiwidHJpZ2dlciIsImV2ZW50TmFtZSIsImVtaXQiLCJjYWxsYmFjayIsIm9mZiIsInRlbXBsYXRlIiwiZGF0ZXRpbWVJbnB1dCIsInZhbHVlIiwiTUlMX1NFQ09ORF9VTklUIiwiU0VDT05EX1VOSVQiLCJNSU5VVEVfVU5JVCIsIkhPVVJfVU5JVCIsIkRBWV9UT19TRUMiLCJIT1VSX1RPX1NFQyIsIk1JTlVURV9UT19TRUMiLCJxdWVyeU5hbWUiLCJxdWVyeSIsInFzIiwicGFyc2UiLCJzZWFyY2giLCJBcnJheSIsImlzQXJyYXkiLCJtaWxzZWMiLCJyZW1haW5TZWNvbmQiLCJtaW4iLCJzZWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxhQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUNBLElBQUlDLGdCQUFKOztBQUVBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNsQyxNQUFNQyxhQUFhLEdBQUdDLHNFQUFxQixDQUFDLFVBQUQsQ0FBM0M7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTQyxRQUFRLENBQUNKLGFBQUQsRUFBZ0IsRUFBaEIsQ0FBakIsQ0FBakI7O0FBRUEsTUFBR0ssS0FBSyxDQUFDSCxRQUFRLENBQUNJLE9BQVQsRUFBRCxDQUFSLEVBQThCO0FBQzdCLFdBQU8sSUFBUDtBQUNBOztBQUVELFNBQU9KLFFBQVA7QUFDQSxDQVRELEMsQ0FVQTs7O0FBQ0EsSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxTQUFELEVBQWU7QUFDdkMsTUFBTUMsUUFBUSxHQUFHYixh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LFVBQWxCLElBQThCQyxXQUEvQixFQUE0QyxFQUE1QyxDQUFyQjtBQUNBLE1BQU1XLEdBQUcsR0FBR2pGLFFBQVEsQ0FBQyxDQUFDZ0YsWUFBWSxHQUFDekQsR0FBRyxHQUFDOEMsVUFBakIsR0FBNEI3QyxJQUFJLEdBQUM4QyxXQUFsQyxJQUErQ0MsYUFBaEQsRUFBK0QsRUFBL0QsQ0FBcEI7QUFDQSxNQUFNVyxHQUFHLEdBQUdGLFlBQVksR0FBQ3pELEdBQUcsR0FBQzhDLFVBQWpCLEdBQTRCN0MsSUFBSSxHQUFDOEMsV0FBakMsR0FBNkNXLEdBQUcsR0FBQ1YsYUFBN0Q7QUFFQSxTQUFPO0FBQ05oRCxPQUFHLEVBQUVBLEdBQUcsR0FBRyxFQUFOLGNBQWVBLEdBQWYsSUFBdUJBLEdBRHRCO0FBRU5DLFFBQUksRUFBRUEsSUFBSSxHQUFHLEVBQVAsY0FBZ0JBLElBQWhCLElBQXlCQSxJQUZ6QjtBQUdOQyxVQUFNLEVBQUV3RCxHQUFHLEdBQUcsRUFBTixjQUFlQSxHQUFmLElBQXVCQSxHQUh6QjtBQUlOdkQsVUFBTSxFQUFFd0QsR0FBRyxHQUFHLEVBQU4sY0FBZUEsR0FBZixJQUF1QkE7QUFKekIsR0FBUDtBQU1BLENBZE0sQzs7Ozs7Ozs7Ozs7QUN0QlAsVUFBVSxtQkFBTyxDQUFDLHNGQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4SEFBbUg7O0FBRXJKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJpbmRleC5jOGQzOWI4YzQ0YjJlM2M5YmVhMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGUvcmVzZXQuY3NzJztcbmltcG9ydCAnLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHtmaWx0ZXJEdXBsaWNhdGVkUXVlcnksIHBhcnNlVGltZVN0YW1wfSBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIuanMnO1xuXG5sZXQgZXZlbnREYXRlQXJlYTtcbmxldCByZW1haW5EYXRlQXJlYTtcbmxldCBjYWxlbmRhckluc3RhbmNlO1xuXG5jb25zdCBnZXREYXRlVGltZUZyb21RdWVyeSA9ICgpID0+IHtcblx0Y29uc3QgdGltZUZyb21RdWVyeSA9IGZpbHRlckR1cGxpY2F0ZWRRdWVyeShcImRhdGV0aW1lXCIpO1xuXHRjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHBhcnNlSW50KHRpbWVGcm9tUXVlcnksIDEwKSk7XG5cblx0aWYoaXNOYU4oZGF0ZVRpbWUuZ2V0VGltZSgpKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGRhdGVUaW1lO1xufVxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwLz9kYXRldGltZT0xNjAxODU5NjAwMDAwXG5jb25zdCBkaXNwbGF5RXZlbnREYXRlID0gKGV2ZW50RGF0ZSkgPT4ge1xuXHRjb25zdCB0ZXh0QXJlYSA9IGV2ZW50RGF0ZUFyZWEucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG5cdHRleHRBcmVhLmlubmVySFRNTCA9IGZvcm1hdChldmVudERhdGUsICd5eXl5IE1NIGRkJyk7XG5cdFxuXHRldmVudERhdGVBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xufVxuXG5jb25zdCBkaXNwbGF5UmVtYWluVGltZSA9IChldmVudERhdGUpID0+IHtcblx0Y29uc3QgZGlyZWN0aW9uID0gcmVtYWluRGF0ZUFyZWEucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbicpO1xuXHRjb25zdCBkZCA9IHJlbWFpbkRhdGVBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5kZCcpO1xuXHRjb25zdCBoaCA9IHJlbWFpbkRhdGVBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5oaCcpO1xuXHRjb25zdCBtbSA9IHJlbWFpbkRhdGVBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5tbScpO1xuXHRjb25zdCBzcyA9IHJlbWFpbkRhdGVBcmVhLnF1ZXJ5U2VsZWN0b3IoJy5zcycpO1xuXG5cdGNvbnN0IGNhbGxGcmFtZSA9ICgpID0+IHtcblx0XHRjb25zdCByZW1haW5UaW1lID0gRGF0ZS5ub3coKSAtIGV2ZW50RGF0ZS5nZXRUaW1lKCk7XG5cdFx0Y29uc3Qge2RheSwgaG91ciwgbWludXRlLCBzZWNvbmR9ID0gcGFyc2VUaW1lU3RhbXAoTWF0aC5hYnMocmVtYWluVGltZSkpO1xuXG5cdFx0ZGlyZWN0aW9uLmlubmVySFRNTCA9IHJlbWFpblRpbWUgPiAwID8gXCJQTFVTXCIgOiBcIk1JTlVTXCI7XG5cdFx0ZGQuaW5uZXJIVE1MID0gZGF5O1xuXHRcdGhoLmlubmVySFRNTCA9IGhvdXI7XG5cdFx0bW0uaW5uZXJIVE1MID0gbWludXRlO1xuXHRcdHNzLmlubmVySFRNTCA9IHNlY29uZDtcblxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsRnJhbWUpO1xuXHR9XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxGcmFtZSk7XG59XG5cbmNvbnN0IG9uQ2xpY2tDYWxlbmRhckNvbmZpcm0gPSAoKSA9PiB7XG5cdGNvbnN0IHNlbGVjdGVkVGltZSA9IGNhbGVuZGFySW5zdGFuY2UuZ2V0RGF0ZVRpbWUoKTtcblxuXHRpZihpc05hTihzZWxlY3RlZFRpbWUpKSB7XG5cdFx0YWxlcnQoJ+uCoOynnOulvCDsoJzrjIDroZwg7ISg7YOd7ZWY7IWIJyk7XG5cdFx0cmV0dXJuIDtcblx0fVxuXG5cdFxuXHR3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgP2RhdGV0aW1lPSR7c2VsZWN0ZWRUaW1lfWApO1xufVxuXG5jb25zdCBkaXNwbGF5Q2FsZW5kYXIgPSAoKSA9PiB7XG5cdGNvbnN0IGNhbGVuZGFyUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZV9hcmVhXCIpO1xuXHRjb25zdCBjb25maXJtQnV0dG9uID0gY2FsZW5kYXJSb290LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5cblx0aWYoIWNhbGVuZGFySW5zdGFuY2UpIHtcblx0XHRjYWxlbmRhckluc3RhbmNlID0gbmV3IENhbGVuZGFyKCk7XG5cdFx0Y2FsZW5kYXJJbnN0YW5jZS5vbignaW5pdCcsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdjYWxlbmRhciBpbml0aWFsaXplJyk7XG5cdFx0fSlcblx0XHRjYWxlbmRhckluc3RhbmNlLmluaXRpYWxpemUoY2FsZW5kYXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FsZW5kYXJcIikpO1xuXHR9XG5cblx0Y29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tDYWxlbmRhckNvbmZpcm0pXG5cdGNhbGVuZGFyUm9vdC5zdHlsZS5kaXNwbGF5ID0gJyc7XG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdC8vIDEuIOy/vOumrCDtmZXsnbhcblx0Ly8gZXgpIGRhdGV0aW1lPTE2MDE4NTk2MDAwMDAgXG5cdGxldCBldmVudERhdGUgPSBnZXREYXRlVGltZUZyb21RdWVyeSgpO1xuXG5cdGlmKCFldmVudERhdGUpIHtcblx0XHQvLyAxLjUuIOy6mOumsOuNlCDrs7Tsl6zso7zquLAgPT4g64Kg7KecIOyEoO2Dne2VmOq4sCA9PiDsv7zrpqwg67CU6r646riwXG5cdFx0ZGlzcGxheUNhbGVuZGFyKCk7XG5cblx0XHRyZXR1cm4gO1xuXHR9XG5cdGNvbnN0IGNhbGVuZGFyUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZV9hcmVhXCIpO1xuXHRjYWxlbmRhclJvb3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHQvLyAyLiDtmZTrqbTsl5Ag7ZiE7J6sIOyLnOqwhCDrsI8g64Ko7J2AIOyLnOqwhCDtkZzsi5ztlZjquLBcblx0ZGlzcGxheUV2ZW50RGF0ZShldmVudERhdGUpO1xuXHRkaXNwbGF5UmVtYWluVGltZShldmVudERhdGUpO1xufVxuXG5jb25zdCBnZXRJbml0aWFsaXplTG9nID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCB7ZGVmYXVsdDogX30gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiwgd2VicGFja1ByZWZldGNoOiB0cnVlICovICdsb2Rhc2gnKTtcblx0XG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xuXHRcdFx0cmV0dXJuIF8uam9pbihhcmdzLCAnICcpO1xuXHRcdH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRldmVudERhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNldmVudF9hcmVhXCIpO1xuXHRyZW1haW5EYXRlQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVtYWluX2FyZWFcIik7XG5cblx0Z2V0SW5pdGlhbGl6ZUxvZygpLnRoZW4obG9nZ2VyID0+IHtcblx0XHRjb25zb2xlLmxvZyhsb2dnZXIoJ3dlbGNvbWUnLCAnRC1EYXknLCAnY291bnRlcicpKTtcblx0fSk7XG5cdGluaXQoKTtcbn0pOyIsImltcG9ydCBFbWl0dGVyeSBmcm9tICdlbWl0dGVyeSc7XG5cbmNsYXNzIENhbGVuZGFyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBFbWl0dGVyeSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUocm9vdCkge1xuICAgICAgICBpZighcm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMucmVuZGVyU2VsZWN0QXJlYSgpO1xuICAgICAgICB0aGlzLmJpbmRTZWxlY3QoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdpbml0Jyk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRyaWdnZXIoZXZlbnROYW1lKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZW1pdChldmVudE5hbWUpO1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9mZihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZW5kZXJTZWxlY3RBcmVhKCkgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkYXRldGltZVwiIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiPjwvaW5wdXQ+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgIH1cblxuICAgIGJpbmRTZWxlY3QoKSB7XG4gICAgICAgIHRoaXMuZGF0ZXRpbWVJbnB1dCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGV0aW1lXCJdJyk7XG4gICAgfVxuXG5cbiAgICBnZXREYXRlVGltZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGV0aW1lSW5wdXQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS5nZXRUaW1lKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJztcblxuXG5leHBvcnQgY29uc3QgTUlMX1NFQ09ORF9VTklUID0gMTAwMDtcbmV4cG9ydCBjb25zdCBTRUNPTkRfVU5JVCA9IDYwO1xuZXhwb3J0IGNvbnN0IE1JTlVURV9VTklUID0gNjA7XG5leHBvcnQgY29uc3QgSE9VUl9VTklUID0gMjQ7XG5cbmNvbnN0IERBWV9UT19TRUMgPSBIT1VSX1VOSVQgKiBNSU5VVEVfVU5JVCAqIFNFQ09ORF9VTklUO1xuY29uc3QgSE9VUl9UT19TRUMgPSBNSU5VVEVfVU5JVCAqIFNFQ09ORF9VTklUO1xuY29uc3QgTUlOVVRFX1RPX1NFQyA9IE1JTlVURV9VTklUO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyRHVwbGljYXRlZFF1ZXJ5ID0gKHF1ZXJ5TmFtZSkgPT4ge1xuXHRjb25zdCBxdWVyeSA9IChxcy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB8fCB7fSlbcXVlcnlOYW1lXTtcblxuXHRpZihBcnJheS5pc0FycmF5KHF1ZXJ5KSl7XG5cblx0XHRyZXR1cm4gcXVlcnlbMF07XG5cdH1cblx0cmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgY29uc3QgcGFyc2VUaW1lU3RhbXAgPSAobWlsc2VjKSA9PiB7XG5cdGNvbnN0IHJlbWFpblNlY29uZCA9IHBhcnNlSW50KE1hdGguYWJzKG1pbHNlYykvTUlMX1NFQ09ORF9VTklULCAxMCk7XG5cdFxuXHRjb25zdCBkYXkgPSBwYXJzZUludChyZW1haW5TZWNvbmQvREFZX1RPX1NFQywgMTApO1xuXHRjb25zdCBob3VyID0gcGFyc2VJbnQoKHJlbWFpblNlY29uZC1kYXkqREFZX1RPX1NFQykvSE9VUl9UT19TRUMsIDEwKTtcblx0Y29uc3QgbWluID0gcGFyc2VJbnQoKHJlbWFpblNlY29uZC1kYXkqREFZX1RPX1NFQy1ob3VyKkhPVVJfVE9fU0VDKS9NSU5VVEVfVE9fU0VDLCAxMCk7XG5cdGNvbnN0IHNlYyA9IHJlbWFpblNlY29uZC1kYXkqREFZX1RPX1NFQy1ob3VyKkhPVVJfVE9fU0VDLW1pbipNSU5VVEVfVE9fU0VDO1xuXG5cdHJldHVybiB7XG5cdFx0ZGF5OiBkYXkgPCAxMCA/IGAwJHtkYXl9YCA6IGRheSxcblx0XHRob3VyOiBob3VyIDwgMTAgPyBgMCR7aG91cn1gIDogaG91cixcblx0XHRtaW51dGU6IG1pbiA8IDEwID8gYDAke21pbn1gIDogbWluLFxuXHRcdHNlY29uZDogc2VjIDwgMTAgPyBgMCR7c2VjfWAgOiBzZWNcblx0fVxufVxuXG5cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9