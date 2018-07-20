'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toptips = require('./../components/toptips.js');

var _toptips2 = _interopRequireDefault(_toptips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopTips = function (_wepy$page) {
  _inherits(TopTips, _wepy$page);

  function TopTips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopTips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopTips.__proto__ || Object.getPrototypeOf(TopTips)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提示'
    }, _this.components = {
      toptips: _toptips2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      tips: function tips() {
        console.log(6666);
        this.$invoke('toptips', 'show', {
          content: '发生错误信息'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopTips, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TopTips;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TopTips , 'pages/toptips'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHRpcHMuanMiXSwibmFtZXMiOlsiVG9wVGlwcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9wdGlwcyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0aXBzIiwiY29uc29sZSIsImxvZyIsIiRpbnZva2UiLCJjb250ZW50IiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXNCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTyxFLFFBRVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNGO0FBQ0pDLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLGFBQUtDLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCLEVBQWdDO0FBQzlCQyxtQkFBUztBQURxQixTQUFoQztBQUdEO0FBTk8sSyxRQVNWQyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FBRTs7OztFQXZCeUIsZUFBS0MsSTs7a0JBQXJCZCxPIiwiZmlsZSI6InRvcHRpcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdG9wdGlwcyBmcm9tICcuLi9jb21wb25lbnRzL3RvcHRpcHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgVG9wVGlwcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q56S6J1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdG9wdGlwczogdG9wdGlwc1xuICB9XG5cbiAgZGF0YSA9IHt9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGlwcygpe1xuICAgICAgY29uc29sZS5sb2coNjY2Nik7XG4gICAgICB0aGlzLiRpbnZva2UoJ3RvcHRpcHMnLCAnc2hvdycsIHtcbiAgICAgICAgY29udGVudDogJ+WPkeeUn+mUmeivr+S/oeaBrydcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7fVxufVxuIl19