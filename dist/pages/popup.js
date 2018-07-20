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

var Popup = function (_wepy$page) {
  _inherits(Popup, _wepy$page);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '列表'
    }, _this.components = {}, _this.data = {
      showPopup: false,
      showLeftPopup: false,
      showRightPopup: false,
      showTopPopup: false,
      showBottomPopup: false
    }, _this.computed = {}, _this.methods = {
      togglePopup: function togglePopup() {
        this.showPopup = !this.data.showPopup;
      },
      toggleLeftPopup: function toggleLeftPopup() {
        this.showLeftPopup = !this.data.showLeftPopup;
      },
      toggleRightPopup: function toggleRightPopup() {
        this.showRightPopup = !this.data.showRightPopup;
      },
      toggleBottomPopup: function toggleBottomPopup() {
        this.showBottomPopup = !this.data.showBottomPopup;
      },
      toggleTopPopup: function toggleTopPopup() {
        this.showTopPopup = !this.data.showTopPopup;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Popup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Popup , 'pages/popup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2hvd1BvcHVwIiwic2hvd0xlZnRQb3B1cCIsInNob3dSaWdodFBvcHVwIiwic2hvd1RvcFBvcHVwIiwic2hvd0JvdHRvbVBvcHVwIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9nZ2xlUG9wdXAiLCJ0b2dnbGVMZWZ0UG9wdXAiLCJ0b2dnbGVSaWdodFBvcHVwIiwidG9nZ2xlQm90dG9tUG9wdXAiLCJ0b2dnbGVUb3BQb3B1cCIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFc0JBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxpQkFBVyxLQUROO0FBRUxDLHFCQUFlLEtBRlY7QUFHTEMsc0JBQWdCLEtBSFg7QUFJTEMsb0JBQWMsS0FKVDtBQUtMQyx1QkFBaUI7QUFMWixLLFFBUVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLGFBQUtQLFNBQUwsR0FBaUIsQ0FBQyxLQUFLRCxJQUFMLENBQVVDLFNBQTVCO0FBQ0QsT0FITztBQUtSUSxxQkFMUSw2QkFLVTtBQUNoQixhQUFLUCxhQUFMLEdBQXFCLENBQUMsS0FBS0YsSUFBTCxDQUFVRSxhQUFoQztBQUNELE9BUE87QUFTUlEsc0JBVFEsOEJBU1c7QUFDakIsYUFBS1AsY0FBTCxHQUFzQixDQUFDLEtBQUtILElBQUwsQ0FBVUcsY0FBakM7QUFDRCxPQVhPO0FBYVJRLHVCQWJRLCtCQWFZO0FBQ2xCLGFBQUtOLGVBQUwsR0FBdUIsQ0FBQyxLQUFLTCxJQUFMLENBQVVLLGVBQWxDO0FBQ0QsT0FmTztBQWlCUk8sb0JBakJRLDRCQWlCUztBQUNmLGFBQUtSLFlBQUwsR0FBb0IsQ0FBQyxLQUFLSixJQUFMLENBQVVJLFlBQS9CO0FBQ0Q7QUFuQk8sSyxRQXNCVlMsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7Ozs7RUF4Q3VCLGVBQUtDLEk7O2tCQUFuQmxCLEsiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBQb3B1cCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiX6KGoJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fVxuXG4gIGRhdGEgPSB7XG4gICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICBzaG93TGVmdFBvcHVwOiBmYWxzZSxcbiAgICBzaG93UmlnaHRQb3B1cDogZmFsc2UsXG4gICAgc2hvd1RvcFBvcHVwOiBmYWxzZSxcbiAgICBzaG93Qm90dG9tUG9wdXA6IGZhbHNlXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0b2dnbGVQb3B1cCgpIHtcbiAgICAgIHRoaXMuc2hvd1BvcHVwID0gIXRoaXMuZGF0YS5zaG93UG9wdXBcbiAgICB9LFxuXG4gICAgdG9nZ2xlTGVmdFBvcHVwKCkge1xuICAgICAgdGhpcy5zaG93TGVmdFBvcHVwID0gIXRoaXMuZGF0YS5zaG93TGVmdFBvcHVwXG4gICAgfSxcblxuICAgIHRvZ2dsZVJpZ2h0UG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dSaWdodFBvcHVwID0gIXRoaXMuZGF0YS5zaG93UmlnaHRQb3B1cFxuICAgIH0sXG5cbiAgICB0b2dnbGVCb3R0b21Qb3B1cCgpIHtcbiAgICAgIHRoaXMuc2hvd0JvdHRvbVBvcHVwID0gIXRoaXMuZGF0YS5zaG93Qm90dG9tUG9wdXBcbiAgICB9LFxuXG4gICAgdG9nZ2xlVG9wUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dUb3BQb3B1cCA9ICF0aGlzLmRhdGEuc2hvd1RvcFBvcHVwXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7fVxufVxuIl19