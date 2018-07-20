'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_wepy$component) {
  _inherits(Toast, _wepy$component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      toast: {
        show: false,
        content: '提示信息'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'show',
    value: function show(data) {
      this.toast = {
        show: true,
        content: data.content
      };

      this.$apply();

      setTimeout(function () {
        this.toast = {
          show: false,
          content: ''
        };

        this.$apply();
      }.bind(this), 4000);
    }
  }]);

  return Toast;
}(_wepy2.default.component);

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiZGF0YSIsInRvYXN0Iiwic2hvdyIsImNvbnRlbnQiLCIkYXBwbHkiLCJzZXRUaW1lb3V0IiwiYmluZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsYUFBTztBQUNMQyxjQUFLLEtBREE7QUFFTEMsaUJBQVE7QUFGSDtBQURGLEs7Ozs7O3lCQU9ESCxJLEVBQUs7QUFDVCxXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTSxJQURLO0FBRVhDLGlCQUFTSCxLQUFLRztBQUZILE9BQWI7O0FBS0EsV0FBS0MsTUFBTDs7QUFFQUMsaUJBQVcsWUFBVTtBQUNuQixhQUFLSixLQUFMLEdBQWE7QUFDWEMsZ0JBQU0sS0FESztBQUVYQyxtQkFBUztBQUZFLFNBQWI7O0FBS0EsYUFBS0MsTUFBTDtBQUNELE9BUFUsQ0FPVEUsSUFQUyxDQU9KLElBUEksQ0FBWCxFQU9jLElBUGQ7QUFRRDs7OztFQXhCZ0MsZUFBS0MsUzs7a0JBQW5CUixLIiwiZmlsZSI6InRvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICB0b2FzdDoge1xuICAgICAgc2hvdzpmYWxzZSxcbiAgICAgIGNvbnRlbnQ6J+aPkOekuuS/oeaBrydcbiAgICB9XG4gIH1cblxuICBzaG93IChkYXRhKXtcbiAgICB0aGlzLnRvYXN0ID0ge1xuICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudFxuICAgIH1cbiAgICBcbiAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgdGhpcy50b2FzdCA9IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfS5iaW5kKHRoaXMpLCA0MDAwKVxuICB9XG59XG4iXX0=