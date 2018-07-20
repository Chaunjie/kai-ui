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

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tabData: {}
    }, _this.data = {
      selectedId: ''
    }, _this.events = {}, _this.methods = {
      selectTab: function selectTab(item) {
        this.selectedId = item.id;
        this.$apply();
        this.$emit('select-tab', item.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {
      this.selectedId = this.tabData.selectedId;
      this.$apply();
    }
  }]);

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsInRhYkRhdGEiLCJkYXRhIiwic2VsZWN0ZWRJZCIsImV2ZW50cyIsIm1ldGhvZHMiLCJzZWxlY3RUYWIiLCJpdGVtIiwiaWQiLCIkYXBwbHkiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQURILEssUUFJUkMsSSxHQUFPO0FBQ0xDLGtCQUFZO0FBRFAsSyxRQUlQQyxNLEdBQVMsRSxRQUVUQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsSUFESCxFQUNRO0FBQ2QsYUFBS0osVUFBTCxHQUFrQkksS0FBS0MsRUFBdkI7QUFDQSxhQUFLQyxNQUFMO0FBQ0EsYUFBS0MsS0FBTCxDQUFXLFlBQVgsRUFBeUJILEtBQUtDLEVBQTlCO0FBQ0Q7QUFMTyxLOzs7Ozs2QkFRQTtBQUNSLFdBQUtMLFVBQUwsR0FBa0IsS0FBS0YsT0FBTCxDQUFhRSxVQUEvQjtBQUNBLFdBQUtNLE1BQUw7QUFDRDs7OztFQXRCOEIsZUFBS0UsUzs7a0JBQWpCWixHIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHRhYkRhdGE6IHt9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHNlbGVjdGVkSWQ6ICcnXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzZWxlY3RUYWIgKGl0ZW0pe1xuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBpdGVtLmlkO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QtdGFiJywgaXRlbS5pZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5zZWxlY3RlZElkID0gdGhpcy50YWJEYXRhLnNlbGVjdGVkSWQ7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuIl19