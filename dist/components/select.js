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

var Select = function (_wepy$component) {
  _inherits(Select, _wepy$component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      selectData: {}
    }, _this.data = {
      selectIndex: ''
    }, _this.events = {}, _this.methods = {
      tapItem: function tapItem(index) {
        this.selectIndex = index;
        var evt = this.selectData.event ? this.selectData.event : 'select-item';
        this.$emit(evt, index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'onLoad',
    value: function onLoad() {
      var selectData = this.selectData;
      this.selectIndex = selectData.selectIndex ? selectData.selectIndex : 0;
      this.$apply();
    }
  }]);

  return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJwcm9wcyIsInNlbGVjdERhdGEiLCJkYXRhIiwic2VsZWN0SW5kZXgiLCJldmVudHMiLCJtZXRob2RzIiwidGFwSXRlbSIsImluZGV4IiwiZXZ0IiwiZXZlbnQiLCIkZW1pdCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFETixLLFFBSVJDLEksR0FBTztBQUNMQyxtQkFBWTtBQURQLEssUUFJUEMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0NDLEtBREQsRUFDUTtBQUNkLGFBQUtKLFdBQUwsR0FBbUJJLEtBQW5CO0FBQ0EsWUFBTUMsTUFBTSxLQUFLUCxVQUFMLENBQWdCUSxLQUFoQixHQUF3QixLQUFLUixVQUFMLENBQWdCUSxLQUF4QyxHQUFnRCxhQUE1RDtBQUNBLGFBQUtDLEtBQUwsQ0FBV0YsR0FBWCxFQUFnQkQsS0FBaEI7QUFDRDtBQUxPLEs7Ozs7OzZCQVFBO0FBQ1IsVUFBTU4sYUFBYSxLQUFLQSxVQUF4QjtBQUNBLFdBQUtFLFdBQUwsR0FBbUJGLFdBQVdFLFdBQVgsR0FBeUJGLFdBQVdFLFdBQXBDLEdBQWtELENBQXJFO0FBQ0EsV0FBS1EsTUFBTDtBQUNEOzs7O0VBdkJpQyxlQUFLQyxTOztrQkFBcEJiLE0iLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHNlbGVjdERhdGE6IHt9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHNlbGVjdEluZGV4OicnXG4gIH1cblxuICBldmVudHMgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwSXRlbSAoaW5kZXgpIHtcbiAgICAgIHRoaXMuc2VsZWN0SW5kZXggPSBpbmRleDtcbiAgICAgIGNvbnN0IGV2dCA9IHRoaXMuc2VsZWN0RGF0YS5ldmVudCA/IHRoaXMuc2VsZWN0RGF0YS5ldmVudCA6ICdzZWxlY3QtaXRlbSc7XG4gICAgICB0aGlzLiRlbWl0KGV2dCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCAoKSB7XG4gICAgY29uc3Qgc2VsZWN0RGF0YSA9IHRoaXMuc2VsZWN0RGF0YTtcbiAgICB0aGlzLnNlbGVjdEluZGV4ID0gc2VsZWN0RGF0YS5zZWxlY3RJbmRleCA/IHNlbGVjdERhdGEuc2VsZWN0SW5kZXggOiAwO1xuICAgIHRoaXMuJGFwcGx5KCk7XG4gIH1cbn1cbiJdfQ==