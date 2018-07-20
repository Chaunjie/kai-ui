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

var Toptips = function (_wepy$component) {
  _inherits(Toptips, _wepy$component);

  function Toptips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toptips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toptips.__proto__ || Object.getPrototypeOf(Toptips)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      topTips: {
        show: false,
        content: '错误信息'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toptips, [{
    key: 'show',
    value: function show(data) {
      this.topTips = {
        show: true,
        content: data.content
      };

      this.$apply();

      setTimeout(function () {
        this.topTips = {
          show: false,
          content: ''
        };

        this.$apply();
      }.bind(this), 4000);
    }
  }]);

  return Toptips;
}(_wepy2.default.component);

exports.default = Toptips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHRpcHMuanMiXSwibmFtZXMiOlsiVG9wdGlwcyIsImRhdGEiLCJ0b3BUaXBzIiwic2hvdyIsImNvbnRlbnQiLCIkYXBwbHkiLCJzZXRUaW1lb3V0IiwiYmluZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxJLEdBQU87QUFDTEMsZUFBUztBQUNQQyxjQUFLLEtBREU7QUFFUEMsaUJBQVE7QUFGRDtBQURKLEs7Ozs7O3lCQU9ESCxJLEVBQUs7QUFDVCxXQUFLQyxPQUFMLEdBQWU7QUFDYkMsY0FBTSxJQURPO0FBRWJDLGlCQUFTSCxLQUFLRztBQUZELE9BQWY7O0FBS0EsV0FBS0MsTUFBTDs7QUFFQUMsaUJBQVcsWUFBVTtBQUNuQixhQUFLSixPQUFMLEdBQWU7QUFDYkMsZ0JBQU0sS0FETztBQUViQyxtQkFBUztBQUZJLFNBQWY7O0FBS0EsYUFBS0MsTUFBTDtBQUNELE9BUFUsQ0FPVEUsSUFQUyxDQU9KLElBUEksQ0FBWCxFQU9jLElBUGQ7QUFRRDs7OztFQXhCa0MsZUFBS0MsUzs7a0JBQXJCUixPIiwiZmlsZSI6InRvcHRpcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcHRpcHMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgdG9wVGlwczoge1xuICAgICAgc2hvdzpmYWxzZSxcbiAgICAgIGNvbnRlbnQ6J+mUmeivr+S/oeaBrydcbiAgICB9XG4gIH1cblxuICBzaG93IChkYXRhKXtcbiAgICB0aGlzLnRvcFRpcHMgPSB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgY29udGVudDogZGF0YS5jb250ZW50XG4gICAgfVxuICAgIFxuICAgIHRoaXMuJGFwcGx5KCk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnRvcFRpcHMgPSB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0uYmluZCh0aGlzKSwgNDAwMClcbiAgfVxufVxuIl19