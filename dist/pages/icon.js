'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_wepy$page) {
  _inherits(Icon, _wepy$page);

  function Icon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '字体库'
    }, _this.components = {}, _this.data = {
      list: ['icon-loading', 'icon-wechat-pay', 'icon-right-circle', 'icon-wrong', 'icon-right']
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Icon, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Icon;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Icon , 'pages/icon'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXNCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsWUFBSyxDQUFDLGNBQUQsRUFBaUIsaUJBQWpCLEVBQW9DLG1CQUFwQyxFQUF5RCxZQUF6RCxFQUF1RSxZQUF2RTtBQURBLEssUUFJUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7Ozs7RUFoQnNCLGVBQUtDLEk7O2tCQUFsQlQsSSIsImZpbGUiOiJpY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgSWNvbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5a2X5L2T5bqTJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDpbJ2ljb24tbG9hZGluZycsICdpY29uLXdlY2hhdC1wYXknLCAnaWNvbi1yaWdodC1jaXJjbGUnLCAnaWNvbi13cm9uZycsICdpY29uLXJpZ2h0J11cbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=