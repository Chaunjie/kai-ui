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

var List = function (_wepy$component) {
  _inherits(List, _wepy$component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return List;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {
    list: [{
      id: '0',
      title: 'loading'
    }]
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      // this.num = this.num + 1
      console.log(this.$name + ' tap');
    },
    add: function add() {
      var len = this.list.length;
      this.list.push({ id: len + 1, title: 'title_' + len });
    }
  };
};

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbXBvbmVudCIsImRhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE0QlQsQ0FDVDs7OztFQTdCK0IsZUFBS0MsUzs7Ozs7T0FDckNDLEksR0FBTztBQUNMQyxVQUFNLENBQ0o7QUFDRUMsVUFBSSxHQUROO0FBRUVDLGFBQU87QUFGVCxLQURJO0FBREQsRztPQVNQQyxNLEdBQVM7QUFDUCx1QkFBbUIsMEJBQWE7QUFBQTs7QUFDOUIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNELElBQXZFO0FBQ0Q7QUFKTSxHO09BT1RFLE8sR0FBVTtBQUNSQyxPQURRLGlCQUNEO0FBQ0w7QUFDQU4sY0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxNQUF6QjtBQUNELEtBSk87QUFLUkssT0FMUSxpQkFLRDtBQUNMLFVBQUlDLE1BQU0sS0FBS2QsSUFBTCxDQUFVSyxNQUFwQjtBQUNBLFdBQUtMLElBQUwsQ0FBVWUsSUFBVixDQUFlLEVBQUNkLElBQUlhLE1BQU0sQ0FBWCxFQUFjWixPQUFPLFdBQVdZLEdBQWhDLEVBQWY7QUFDRDtBQVJPLEc7OztrQkFqQlNqQixJIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMCcsXHJcbiAgICAgICAgICB0aXRsZTogJ2xvYWRpbmcnXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS5uYW1lfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0YXAgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubnVtID0gdGhpcy5udW0gKyAxXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcclxuICAgICAgfSxcclxuICAgICAgYWRkICgpIHtcclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5saXN0Lmxlbmd0aFxyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHtpZDogbGVuICsgMSwgdGl0bGU6ICd0aXRsZV8nICsgbGVufSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=