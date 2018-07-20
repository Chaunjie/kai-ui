'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toast = require('./../components/toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_wepy$page) {
  _inherits(Toast, _wepy$page);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提示框'
    }, _this.components = {
      toast: _toast2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      openToast: function openToast() {
        var options = {
          content: '内容'
        };
        this.$invoke('toast', 'show', options);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/toast'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvcGVuVG9hc3QiLCJvcHRpb25zIiwiY29udGVudCIsIiRpbnZva2UiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFc0JBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0c7QUFDVCxZQUFNQyxVQUFVO0FBQ2RDLG1CQUFTO0FBREssU0FBaEI7QUFHQSxhQUFLQyxPQUFMLENBQWEsT0FBYixFQUFzQixNQUF0QixFQUE4QkYsT0FBOUI7QUFDRDtBQU5PLEssUUFTVkcsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7Ozs7RUF2QnVCLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB0b2FzdCBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgVG9hc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aPkOekuuahhidcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIHRvYXN0OiB0b2FzdFxuICB9XG5cbiAgZGF0YSA9IHt9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgb3BlblRvYXN0KCl7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjb250ZW50OiAn5YaF5a65J1xuICAgICAgfTtcbiAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7fVxufVxuIl19