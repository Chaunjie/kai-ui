'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _select = require('./../components/select.js');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPage = function (_wepy$page) {
  _inherits(SelectPage, _wepy$page);

  function SelectPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectPage.__proto__ || Object.getPrototypeOf(SelectPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Select 选择'
    }, _this.$repeat = {}, _this.$props = { "select": { "xmlns:v-bind": "", "v-bind:selectData.once": "selectData" }, "select1": { "v-bind:selectData.once": "selectData1" } }, _this.$events = {}, _this.components = {
      select: _select2.default,
      select1: _select2.default
    }, _this.data = {
      selectData: {
        list: [{ name: '选择1' }, { name: '选择2' }, { name: '选择3' }],
        selectIndex: 0,
        class: 'select-success'
      },
      selectData1: {
        list: [{ name: '选择1' }, { name: '选择2' }],
        selectIndex: 1,
        class: 'select-danger',
        event: 'select-test'
      }
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      'select-item': function selectItem(data) {
        console.log('item' + data);
      },
      'select-test': function selectTest(data) {
        console.log("test" + data);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectPage, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SelectPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SelectPage , 'pages/select'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlbGVjdCIsInNlbGVjdDEiLCJkYXRhIiwic2VsZWN0RGF0YSIsImxpc3QiLCJuYW1lIiwic2VsZWN0SW5kZXgiLCJjbGFzcyIsInNlbGVjdERhdGExIiwiZXZlbnQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQVYsRUFBb0UsV0FBVSxFQUFDLDBCQUF5QixhQUExQixFQUE5RSxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyw4QkFEVTtBQUVWQztBQUZVLEssUUFLWkMsSSxHQUFPO0FBQ0xDLGtCQUFZO0FBQ1ZDLGNBQU0sQ0FBQyxFQUFDQyxNQUFLLEtBQU4sRUFBRCxFQUFjLEVBQUNBLE1BQUssS0FBTixFQUFkLEVBQTJCLEVBQUNBLE1BQUssS0FBTixFQUEzQixDQURJO0FBRVZDLHFCQUFhLENBRkg7QUFHVkMsZUFBTztBQUhHLE9BRFA7QUFNTEMsbUJBQWE7QUFDWEosY0FBTSxDQUFDLEVBQUNDLE1BQUssS0FBTixFQUFELEVBQWMsRUFBQ0EsTUFBSyxLQUFOLEVBQWQsQ0FESztBQUVYQyxxQkFBYSxDQUZGO0FBR1hDLGVBQU8sZUFISTtBQUlYRSxlQUFPO0FBSkk7QUFOUixLLFFBY1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUztBQUNQLHFCQUFlLG9CQUFDVixJQUFELEVBQVU7QUFDdkJXLGdCQUFRQyxHQUFSLENBQVksU0FBT1osSUFBbkI7QUFDRCxPQUhNO0FBSVAscUJBQWUsb0JBQUNBLElBQUQsRUFBVTtBQUN2QlcsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFPWixJQUFuQjtBQUNEO0FBTk0sSzs7Ozs7NkJBU0EsQ0FBRTs7OztFQXhDMkIsZUFBS2EsSTs7a0JBQXhCdEIsVSIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgc2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RQYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdTZWxlY3Qg6YCJ5oupJ1xuICB9XG4gIFxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2VsZWN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzZWxlY3REYXRhLm9uY2VcIjpcInNlbGVjdERhdGFcIn0sXCJzZWxlY3QxXCI6e1widi1iaW5kOnNlbGVjdERhdGEub25jZVwiOlwic2VsZWN0RGF0YTFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHNlbGVjdDogc2VsZWN0LFxuICAgIHNlbGVjdDE6IHNlbGVjdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzZWxlY3REYXRhOiB7XG4gICAgICBsaXN0OiBbe25hbWU6J+mAieaLqTEnfSx7bmFtZTon6YCJ5oupMid9LHtuYW1lOifpgInmi6kzJ31dLFxuICAgICAgc2VsZWN0SW5kZXg6IDAsXG4gICAgICBjbGFzczogJ3NlbGVjdC1zdWNjZXNzJ1xuICAgIH0sXG4gICAgc2VsZWN0RGF0YTE6IHtcbiAgICAgIGxpc3Q6IFt7bmFtZTon6YCJ5oupMSd9LHtuYW1lOifpgInmi6kyJ31dLFxuICAgICAgc2VsZWN0SW5kZXg6IDEsXG4gICAgICBjbGFzczogJ3NlbGVjdC1kYW5nZXInLFxuICAgICAgZXZlbnQ6ICdzZWxlY3QtdGVzdCdcbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge1xuICAgICdzZWxlY3QtaXRlbSc6IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaXRlbScrZGF0YSk7XG4gICAgfSxcbiAgICAnc2VsZWN0LXRlc3QnOiAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIrZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==