'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.watch = {
    num: function num(curVal, oldVal) {
      console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + ' plus tap');

      this.$emit('index-emit', 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + ' minus tap');
    }
  };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIndlcHkiLCJjb21wb25lbnQiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwid2F0Y2giLCJjdXJWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBZ0JDLGVBQUtDLFM7Ozs7O09BQ3hDQyxLLEdBQVE7QUFDTkMsU0FBSztBQUNIQyxZQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGNBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNuQixlQUFPLENBQUNBLENBQVI7QUFDRCxPQUpFO0FBS0hDLGVBQVM7QUFMTjtBQURDLEc7T0FVUkMsSSxHQUFPLEU7T0FFUEMsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSixPQUFPSyxJQUE1QyxjQUF5REwsT0FBT00sTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRztPQU9URyxLLEdBQVE7QUFDTmhCLE9BRE0sZUFDRGlCLE1BREMsRUFDT0MsTUFEUCxFQUNlO0FBQ25CUCxjQUFRQyxHQUFSLHdCQUFrQk0sTUFBbEIsZ0NBQStCRCxNQUEvQjtBQUNEO0FBSEssRztPQU1SRSxPLEdBQVU7QUFDUkMsUUFEUSxrQkFDQTtBQUNOLFdBQUtwQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsV0FBekI7O0FBRUEsV0FBS1EsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDRCxLQU5PO0FBT1JDLFNBUFEsbUJBT0M7QUFDUCxXQUFLdEIsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNBVyxjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBTCxHQUFhLFlBQXpCO0FBQ0Q7QUFWTyxHOzs7a0JBMUJTakIsTyIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAvLyBpbXBvcnQgYWJjIGZyb20gJ2FiYydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBudW06IHtcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgIHJldHVybiArdlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdDogNTBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICB9XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAgbnVtIChjdXJWYWwsIG9sZFZhbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDml6flgLzvvJoke29sZFZhbH3vvIzmlrDlgLzvvJoke2N1clZhbH1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgcGx1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBwbHVzIHRhcCcpXHJcblxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCAxLCAyLCAzKVxyXG4gICAgICB9LFxyXG4gICAgICBtaW51cyAoKSB7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSAtIDFcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBtaW51cyB0YXAnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=