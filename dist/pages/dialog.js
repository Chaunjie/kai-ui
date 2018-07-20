'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dialog = require('./../components/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_wepy$page) {
  _inherits(Dialog, _wepy$page);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '弹出窗'
    }, _this.components = {
      dialog: _dialog2.default
    }, _this.data = {}, _this.computed = {}, _this.methods = {
      openDialog: function openDialog() {
        var options = {
          title: '提示',
          content: '内容'
        };

        this.$invoke('dialog', 'show', options).then(function (data) {
          console.log(data);
        });
      },
      openAlert: function openAlert() {
        var options = {
          title: '提示',
          content: '内容',
          type: 'alert'
        };

        this.$invoke('dialog', 'show', options).then(function (data) {
          console.log(data);
        });
      },
      openVertical: function openVertical() {
        var options = {
          title: '提示',
          content: '内容',
          type: 'muti',
          buttons: [{
            text: '现金支付',
            color: 'red'
          }, {
            text: '微信支付',
            color: '#3CC51F'
          }, {
            text: '取消'
          }]
        };

        this.$invoke('dialog', 'show', options).then(function (data) {
          console.log(data);
        });
      },
      openNoVertical: function openNoVertical() {
        var options = {
          title: '提示',
          content: '内容',
          type: 'muti',
          showVertical: true,
          buttons: [{
            text: '现金支付',
            color: 'red'
          }, {
            text: '微信支付',
            color: '#3CC51F'
          }, {
            text: '取消'
          }]
        };

        this.$invoke('dialog', 'show', options).then(function (data) {
          console.log(data);
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Dialog;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Dialog , 'pages/dialog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRpYWxvZyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvcGVuRGlhbG9nIiwib3B0aW9ucyIsInRpdGxlIiwiY29udGVudCIsIiRpbnZva2UiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIm9wZW5BbGVydCIsInR5cGUiLCJvcGVuVmVydGljYWwiLCJidXR0b25zIiwidGV4dCIsImNvbG9yIiwib3Blbk5vVmVydGljYWwiLCJzaG93VmVydGljYWwiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFc0JBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNwQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNJO0FBQ1YsWUFBTUMsVUFBVTtBQUNkQyxpQkFBTyxJQURPO0FBRWRDLG1CQUFTO0FBRkssU0FBaEI7O0FBS0EsYUFBS0MsT0FBTCxDQUFhLFFBQWIsRUFBdUIsTUFBdkIsRUFBK0JILE9BQS9CLEVBQXdDSSxJQUF4QyxDQUE2QyxVQUFDUixJQUFELEVBQVU7QUFDckRTLGtCQUFRQyxHQUFSLENBQVlWLElBQVo7QUFDRCxTQUZEO0FBR0QsT0FWTztBQVdSVyxlQVhRLHVCQVdHO0FBQ1QsWUFBTVAsVUFBVTtBQUNkQyxpQkFBTyxJQURPO0FBRWRDLG1CQUFTLElBRks7QUFHZE0sZ0JBQUs7QUFIUyxTQUFoQjs7QUFNQSxhQUFLTCxPQUFMLENBQWEsUUFBYixFQUF1QixNQUF2QixFQUErQkgsT0FBL0IsRUFBd0NJLElBQXhDLENBQTZDLFVBQUNSLElBQUQsRUFBVTtBQUNyRFMsa0JBQVFDLEdBQVIsQ0FBWVYsSUFBWjtBQUNELFNBRkQ7QUFHRCxPQXJCTztBQXNCUmEsa0JBdEJRLDBCQXNCTTtBQUNaLFlBQU1ULFVBQVU7QUFDZEMsaUJBQU8sSUFETztBQUVkQyxtQkFBUyxJQUZLO0FBR2RNLGdCQUFLLE1BSFM7QUFJZEUsbUJBQVMsQ0FBQztBQUNSQyxrQkFBTSxNQURFO0FBRVJDLG1CQUFPO0FBRkMsV0FBRCxFQUdOO0FBQ0RELGtCQUFNLE1BREw7QUFFREMsbUJBQU87QUFGTixXQUhNLEVBTU47QUFDREQsa0JBQU07QUFETCxXQU5NO0FBSkssU0FBaEI7O0FBZUEsYUFBS1IsT0FBTCxDQUFhLFFBQWIsRUFBdUIsTUFBdkIsRUFBK0JILE9BQS9CLEVBQXdDSSxJQUF4QyxDQUE2QyxVQUFDUixJQUFELEVBQVU7QUFDckRTLGtCQUFRQyxHQUFSLENBQVlWLElBQVo7QUFDRCxTQUZEO0FBR0QsT0F6Q087QUEwQ1JpQixvQkExQ1EsNEJBMENRO0FBQ2QsWUFBTWIsVUFBVTtBQUNkQyxpQkFBTyxJQURPO0FBRWRDLG1CQUFTLElBRks7QUFHZE0sZ0JBQUssTUFIUztBQUlkTSx3QkFBYyxJQUpBO0FBS2RKLG1CQUFTLENBQUM7QUFDUkMsa0JBQU0sTUFERTtBQUVSQyxtQkFBTztBQUZDLFdBQUQsRUFHTjtBQUNERCxrQkFBTSxNQURMO0FBRURDLG1CQUFPO0FBRk4sV0FITSxFQU1OO0FBQ0RELGtCQUFNO0FBREwsV0FOTTtBQUxLLFNBQWhCOztBQWdCQSxhQUFLUixPQUFMLENBQWEsUUFBYixFQUF1QixNQUF2QixFQUErQkgsT0FBL0IsRUFBd0NJLElBQXhDLENBQTZDLFVBQUNSLElBQUQsRUFBVTtBQUNyRFMsa0JBQVFDLEdBQVIsQ0FBWVYsSUFBWjtBQUNELFNBRkQ7QUFHRDtBQTlETyxLLFFBaUVWbUIsTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7Ozs7RUEvRXdCLGVBQUtDLEk7O2tCQUFwQnpCLE0iLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGRpYWxvZyBmcm9tICcuLi9jb21wb25lbnRzL2RpYWxvZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIERpYWxvZyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5by55Ye656qXJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZGlhbG9nOiBkaWFsb2dcbiAgfVxuXG4gIGRhdGEgPSB7fVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIG9wZW5EaWFsb2coKXtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+WGheWuuSdcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGludm9rZSgnZGlhbG9nJywgJ3Nob3cnLCBvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIG9wZW5BbGVydCgpe1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5YaF5a65JyxcbiAgICAgICAgdHlwZTonYWxlcnQnXG4gICAgICB9O1xuXG4gICAgICB0aGlzLiRpbnZva2UoJ2RpYWxvZycsICdzaG93Jywgb3B0aW9ucykudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvcGVuVmVydGljYWwoKXtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+WGheWuuScsXG4gICAgICAgIHR5cGU6J211dGknLFxuICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgIHRleHQ6ICfnjrDph5HmlK/ku5gnLFxuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ+W+ruS/oeaUr+S7mCcsXG4gICAgICAgICAgY29sb3I6ICcjM0NDNTFGJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ+WPlua2iCdcbiAgICAgICAgfV1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGludm9rZSgnZGlhbG9nJywgJ3Nob3cnLCBvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIG9wZW5Ob1ZlcnRpY2FsKCl7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6ICflhoXlrrknLFxuICAgICAgICB0eXBlOidtdXRpJyxcbiAgICAgICAgc2hvd1ZlcnRpY2FsOiB0cnVlLFxuICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgIHRleHQ6ICfnjrDph5HmlK/ku5gnLFxuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ+W+ruS/oeaUr+S7mCcsXG4gICAgICAgICAgY29sb3I6ICcjM0NDNTFGJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ+WPlua2iCdcbiAgICAgICAgfV1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGludm9rZSgnZGlhbG9nJywgJ3Nob3cnLCBvcHRpb25zKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=