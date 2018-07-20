'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPage = function (_wepy$page) {
  _inherits(TabPage, _wepy$page);

  function TabPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabPage.__proto__ || Object.getPrototypeOf(TabPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '标签'
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tabData.sync": "tab1" }, "tab1": { "v-bind:tabData.sync": "tab2" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default,
      tab1: _tab2.default
    }, _this.data = {
      tab1: {
        list: [{ id: 1, title: '标签1' }, { id: 2, title: '标签2' }, { id: 3, title: '标签3' }, { id: 4, title: '标签4' }, { id: 5, title: '标签5' }],
        scroll: false,
        selectedId: 2,
        class: 'tab-danger'
      },
      tab2: {
        list: [{ id: 1, title: '标签1' }, { id: 2, title: '标签2' }, { id: 3, title: '标签3' }, { id: 4, title: '标签4' }, { id: 5, title: '标签5' }, { id: 6, title: '标签6' }, { id: 7, title: '标签7' }, { id: 8, title: '标签8' }],
        scroll: true,
        selectedId: 3,
        class: 'tab-success'
      }
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      'select-tab': function selectTab(data) {
        _this.tab1.selectedId = data;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabPage, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return TabPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TabPage , 'pages/tab'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWJQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsInRhYjEiLCJkYXRhIiwibGlzdCIsImlkIiwidGl0bGUiLCJzY3JvbGwiLCJzZWxlY3RlZElkIiwiY2xhc3MiLCJ0YWIyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLE1BQXpDLEVBQVAsRUFBd0QsUUFBTyxFQUFDLHVCQUFzQixNQUF2QixFQUEvRCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQyx3QkFEVTtBQUVWQztBQUZVLEssUUFLWkMsSSxHQUFPO0FBQ0xELFlBQU07QUFDSkUsY0FBTSxDQUFDLEVBQUNDLElBQUksQ0FBTCxFQUFRQyxPQUFPLEtBQWYsRUFBRCxFQUF1QixFQUFDRCxJQUFJLENBQUwsRUFBUUMsT0FBTyxLQUFmLEVBQXZCLEVBQTZDLEVBQUNELElBQUksQ0FBTCxFQUFRQyxPQUFPLEtBQWYsRUFBN0MsRUFBbUUsRUFBQ0QsSUFBSSxDQUFMLEVBQVFDLE9BQU8sS0FBZixFQUFuRSxFQUF5RixFQUFDRCxJQUFJLENBQUwsRUFBUUMsT0FBTyxLQUFmLEVBQXpGLENBREY7QUFFSkMsZ0JBQVEsS0FGSjtBQUdKQyxvQkFBWSxDQUhSO0FBSUpDLGVBQU07QUFKRixPQUREO0FBT0xDLFlBQU07QUFDSk4sY0FBTSxDQUFDLEVBQUNDLElBQUksQ0FBTCxFQUFRQyxPQUFPLEtBQWYsRUFBRCxFQUF1QixFQUFDRCxJQUFJLENBQUwsRUFBUUMsT0FBTyxLQUFmLEVBQXZCLEVBQTZDLEVBQUNELElBQUksQ0FBTCxFQUFRQyxPQUFPLEtBQWYsRUFBN0MsRUFBbUUsRUFBQ0QsSUFBSSxDQUFMLEVBQVFDLE9BQU8sS0FBZixFQUFuRSxFQUF5RixFQUFDRCxJQUFJLENBQUwsRUFBUUMsT0FBTyxLQUFmLEVBQXpGLEVBQStHLEVBQUNELElBQUksQ0FBTCxFQUFRQyxPQUFPLEtBQWYsRUFBL0csRUFBcUksRUFBQ0QsSUFBSSxDQUFMLEVBQVFDLE9BQU8sS0FBZixFQUFySSxFQUEySixFQUFDRCxJQUFJLENBQUwsRUFBUUMsT0FBTyxLQUFmLEVBQTNKLENBREY7QUFFSkMsZ0JBQVEsSUFGSjtBQUdKQyxvQkFBWSxDQUhSO0FBSUpDLGVBQU07QUFKRjtBQVBELEssUUFlUEUsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTO0FBQ1Asb0JBQWMsbUJBQUNWLElBQUQsRUFBVTtBQUN0QixjQUFLRCxJQUFMLENBQVVNLFVBQVYsR0FBdUJMLElBQXZCO0FBQ0Q7QUFITSxLOzs7Ozs2QkFNQSxDQUFFOzs7O0VBdEN3QixlQUFLVyxJOztrQkFBckJwQixPIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYlBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+agh+etvidcbiAgfVxuICBcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFiRGF0YS5zeW5jXCI6XCJ0YWIxXCJ9LFwidGFiMVwiOntcInYtYmluZDp0YWJEYXRhLnN5bmNcIjpcInRhYjJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHRhYiA6IFRhYixcbiAgICB0YWIxOiBUYWJcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGFiMToge1xuICAgICAgbGlzdDogW3tpZDogMSwgdGl0bGU6ICfmoIfnrb4xJ30se2lkOiAyLCB0aXRsZTogJ+agh+etvjInfSx7aWQ6IDMsIHRpdGxlOiAn5qCH562+Myd9LHtpZDogNCwgdGl0bGU6ICfmoIfnrb40J30se2lkOiA1LCB0aXRsZTogJ+agh+etvjUnfV0sXG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRJZDogMixcbiAgICAgIGNsYXNzOid0YWItZGFuZ2VyJ1xuICAgIH0sXG4gICAgdGFiMjoge1xuICAgICAgbGlzdDogW3tpZDogMSwgdGl0bGU6ICfmoIfnrb4xJ30se2lkOiAyLCB0aXRsZTogJ+agh+etvjInfSx7aWQ6IDMsIHRpdGxlOiAn5qCH562+Myd9LHtpZDogNCwgdGl0bGU6ICfmoIfnrb40J30se2lkOiA1LCB0aXRsZTogJ+agh+etvjUnfSx7aWQ6IDYsIHRpdGxlOiAn5qCH562+Nid9LHtpZDogNywgdGl0bGU6ICfmoIfnrb43J30se2lkOiA4LCB0aXRsZTogJ+agh+etvjgnfV0sXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzZWxlY3RlZElkOiAzLFxuICAgICAgY2xhc3M6J3RhYi1zdWNjZXNzJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7XG4gICAgJ3NlbGVjdC10YWInOiAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy50YWIxLnNlbGVjdGVkSWQgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=