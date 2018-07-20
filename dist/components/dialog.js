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

var Dialog = function (_wepy$component) {
  _inherits(Dialog, _wepy$component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      dialog: {
        show: false,
        title: '',
        content: '',
        showVertical: false,
        type: '',
        buttons: []
      },
      resolve: '',
      reject: ''
    }, _this.methods = {
      btnTap: function btnTap(index) {
        this.resolve(index);
        this.dialog = {
          title: '标题',
          content: '内容',
          showVertical: false,
          type: 'base',
          buttons: [{ text: '取消' }, { text: '确定', color: '#3CC51F' }],
          show: false
        };
        this.$apply();
      },
      _handleDialogButtonClick: function _handleDialogButtonClick(index) {
        console.log(index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'show',
    value: function show(options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.dialog = {
          title: options.title ? options.title : '提示',
          content: options.content ? options.content : '内容',
          showVertical: options.showVertical ? options.showVertical : false,
          type: options.type ? options.type : 'base',
          buttons: options.type === 'alert' ? [{ text: '确定', color: '#3CC51F' }] : options.type === 'muti' ? options.buttons : [{ text: '取消' }, { text: '确定', color: '#3CC51F' }],
          show: true
        };
        _this2.resolve = resolve;
        _this2.reject = reject;
        _this2.$apply();
      });
    }
  }]);

  return Dialog;
}(_wepy2.default.component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJkYXRhIiwiZGlhbG9nIiwic2hvdyIsInRpdGxlIiwiY29udGVudCIsInNob3dWZXJ0aWNhbCIsInR5cGUiLCJidXR0b25zIiwicmVzb2x2ZSIsInJlamVjdCIsIm1ldGhvZHMiLCJidG5UYXAiLCJpbmRleCIsInRleHQiLCJjb2xvciIsIiRhcHBseSIsIl9oYW5kbGVEaWFsb2dCdXR0b25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwiUHJvbWlzZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUTtBQUNOQyxjQUFNLEtBREE7QUFFTkMsZUFBTyxFQUZEO0FBR05DLGlCQUFTLEVBSEg7QUFJTkMsc0JBQWMsS0FKUjtBQUtOQyxjQUFLLEVBTEM7QUFNTkMsaUJBQVM7QUFOSCxPQURIO0FBU0xDLGVBQVEsRUFUSDtBQVVMQyxjQUFPO0FBVkYsSyxRQWFQQyxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsS0FEQyxFQUNLO0FBQ1gsYUFBS0osT0FBTCxDQUFhSSxLQUFiO0FBQ0EsYUFBS1gsTUFBTCxHQUFjO0FBQ1pFLGlCQUFPLElBREs7QUFFWkMsbUJBQVMsSUFGRztBQUdaQyx3QkFBZSxLQUhIO0FBSVpDLGdCQUFNLE1BSk07QUFLWkMsbUJBQVMsQ0FBQyxFQUFDTSxNQUFLLElBQU4sRUFBRCxFQUFjLEVBQUNBLE1BQUssSUFBTixFQUFZQyxPQUFPLFNBQW5CLEVBQWQsQ0FMRztBQU1aWixnQkFBTTtBQU5NLFNBQWQ7QUFRQSxhQUFLYSxNQUFMO0FBQ0QsT0FaTztBQWFSQyw4QkFiUSxvQ0FhaUJKLEtBYmpCLEVBYXVCO0FBQzdCSyxnQkFBUUMsR0FBUixDQUFZTixLQUFaO0FBQ0Q7QUFmTyxLOzs7Ozt5QkFrQkxPLE8sRUFBUTtBQUFBOztBQUNYLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNaLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxlQUFLUixNQUFMLEdBQWM7QUFDWkUsaUJBQU9nQixRQUFRaEIsS0FBUixHQUFnQmdCLFFBQVFoQixLQUF4QixHQUFnQyxJQUQzQjtBQUVaQyxtQkFBU2UsUUFBUWYsT0FBUixHQUFrQmUsUUFBUWYsT0FBMUIsR0FBb0MsSUFGakM7QUFHWkMsd0JBQWNjLFFBQVFkLFlBQVIsR0FBdUJjLFFBQVFkLFlBQS9CLEdBQThDLEtBSGhEO0FBSVpDLGdCQUFNYSxRQUFRYixJQUFSLEdBQWVhLFFBQVFiLElBQXZCLEdBQThCLE1BSnhCO0FBS1pDLG1CQUFTWSxRQUFRYixJQUFSLEtBQWlCLE9BQWpCLEdBQTJCLENBQUMsRUFBQ08sTUFBSyxJQUFOLEVBQVlDLE9BQU8sU0FBbkIsRUFBRCxDQUEzQixHQUE4REssUUFBUWIsSUFBUixLQUFpQixNQUFqQixHQUEwQmEsUUFBUVosT0FBbEMsR0FBNEMsQ0FBQyxFQUFDTSxNQUFLLElBQU4sRUFBRCxFQUFjLEVBQUNBLE1BQUssSUFBTixFQUFZQyxPQUFPLFNBQW5CLEVBQWQsQ0FMdkc7QUFNWlosZ0JBQU07QUFOTSxTQUFkO0FBUUEsZUFBS00sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsZUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsZUFBS00sTUFBTDtBQUNELE9BWk0sQ0FBUDtBQWFEOzs7O0VBOUNpQyxlQUFLTSxTOztrQkFBcEJ0QixNIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgIGRpYWxvZzoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250ZW50OiAnJyxcbiAgICAgIHNob3dWZXJ0aWNhbDogZmFsc2UsXG4gICAgICB0eXBlOicnLFxuICAgICAgYnV0dG9uczogW11cbiAgICB9LFxuICAgIHJlc29sdmU6JycsXG4gICAgcmVqZWN0OicnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGJ0blRhcChpbmRleCl7XG4gICAgICB0aGlzLnJlc29sdmUoaW5kZXgpO1xuICAgICAgdGhpcy5kaWFsb2cgPSB7XG4gICAgICAgIHRpdGxlOiAn5qCH6aKYJyxcbiAgICAgICAgY29udGVudDogJ+WGheWuuScsXG4gICAgICAgIHNob3dWZXJ0aWNhbDogIGZhbHNlLFxuICAgICAgICB0eXBlOiAnYmFzZScsXG4gICAgICAgIGJ1dHRvbnM6IFt7dGV4dDon5Y+W5raIJ30sIHt0ZXh0Oifnoa7lrponLCBjb2xvcjogJyMzQ0M1MUYnfV0sXG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgX2hhbmRsZURpYWxvZ0J1dHRvbkNsaWNrKGluZGV4KXtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBzaG93KG9wdGlvbnMpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmRpYWxvZyA9IHtcbiAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUgPyBvcHRpb25zLnRpdGxlIDogJ+aPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuY29udGVudCA/IG9wdGlvbnMuY29udGVudCA6ICflhoXlrrknLFxuICAgICAgICBzaG93VmVydGljYWw6IG9wdGlvbnMuc2hvd1ZlcnRpY2FsID8gb3B0aW9ucy5zaG93VmVydGljYWwgOiBmYWxzZSxcbiAgICAgICAgdHlwZTogb3B0aW9ucy50eXBlID8gb3B0aW9ucy50eXBlIDogJ2Jhc2UnLFxuICAgICAgICBidXR0b25zOiBvcHRpb25zLnR5cGUgPT09ICdhbGVydCcgPyBbe3RleHQ6J+ehruWumicsIGNvbG9yOiAnIzNDQzUxRid9XSA6IChvcHRpb25zLnR5cGUgPT09ICdtdXRpJyA/IG9wdGlvbnMuYnV0dG9ucyA6IFt7dGV4dDon5Y+W5raIJ30sIHt0ZXh0Oifnoa7lrponLCBjb2xvcjogJyMzQ0M1MUYnfV0pLFxuICAgICAgICBzaG93OiB0cnVlXG4gICAgICB9XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pIFxuICB9XG59XG4iXX0=