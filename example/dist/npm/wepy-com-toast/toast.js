'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_wepy$component) {
    _inherits(Panel, _wepy$component);

    function Panel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Panel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            reveal: false,
            img: '',
            animationData: '',
            imgClassName: '',
            imgMode: 'scaleToFill',
            title: '载入中...',
            titleClassName: ''
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Panel, [{
        key: 'onLoad',
        value: function onLoad() {
            this.hasPromise = (typeof Promise === 'undefined' ? 'undefined' : _typeof(Promise)) !== undefined;
        }
    }, {
        key: 'show',
        value: function show() {
            var _this2 = this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.reveal = true;
            for (var k in data) {
                this[k] = data[k];
            }
            this.$apply();

            clearTimeout(this.__timeout);

            setTimeout(function () {
                var animation = wx.createAnimation();
                animation.opacity(1).step();
                _this2.animationData = animation.export();
                _this2.reveal = true;
                _this2.$apply();
            }, 30);

            if (data.duration === 0) {
                // success callback after toast showed
                if (this.hasPromise) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(data);
                        }, 430);
                    });
                } else {
                    setTimeout(function () {
                        return typeof data.success === 'function' ? data.success(data) : data;
                    }, 430);
                }
            } else {
                if (this.hasPromise) {
                    return new Promise(function (resolve, reject) {
                        _this2.__timeout = setTimeout(function () {
                            _this2.toast();
                            resolve(data);
                        }, (data.duration || 1500) + 400);
                    });
                } else {
                    this.__timeout = setTimeout(function () {
                        _this2.toast();

                        // success callback
                        typeof data.success === 'function' && data.success(data);
                    }, (data.duration || 1500) + 400);
                }
            }
        }
    }, {
        key: 'toast',
        value: function toast(data) {
            var err = false;
            try {
                if (!data) {
                    this.hide();
                } else {
                    this.show(data);
                }
            } catch (e) {
                err = e;
            }

            if (this.hasPromise) {
                return new Promise(function (resolve, reject) {
                    if (!err) {
                        resolve(data);
                    } else reject(data);
                });
            } else {
                if (err) {
                    typeof data.fail === 'function' && data.fail(data);
                } else {
                    typeof data.success === 'function' && data.success(data);
                }
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            clearTimeout(this.__timeout);
            this.reveal = false;

            var animation = wx.createAnimation();
            animation.opacity(0).step();
            this.animationData = animation.export();

            this.$apply();

            if (this.hasPromise) {
                return new Promise(function (resolve, reject) {
                    resolve();
                });
            } else {
                if (typeof data.success === 'function') {
                    return data.success(data);
                }
            }
        }
    }]);

    return Panel;
}(_wepy2.default.component);

exports.default = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlBhbmVsIiwiZGF0YSIsInJldmVhbCIsImltZyIsImFuaW1hdGlvbkRhdGEiLCJpbWdDbGFzc05hbWUiLCJpbWdNb2RlIiwidGl0bGUiLCJ0aXRsZUNsYXNzTmFtZSIsIm1ldGhvZHMiLCJoYXNQcm9taXNlIiwiUHJvbWlzZSIsInVuZGVmaW5lZCIsImsiLCIkYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJfX3RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwid3giLCJjcmVhdGVBbmltYXRpb24iLCJvcGFjaXR5Iiwic3RlcCIsImV4cG9ydCIsImR1cmF0aW9uIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJ0b2FzdCIsImVyciIsImhpZGUiLCJzaG93IiwiZSIsImZhaWwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsSSxHQUFPO0FBQ0hDLG9CQUFRLEtBREw7QUFFSEMsaUJBQUssRUFGRjtBQUdIQywyQkFBZSxFQUhaO0FBSUhDLDBCQUFjLEVBSlg7QUFLSEMscUJBQVMsYUFMTjtBQU1IQyxtQkFBTyxRQU5KO0FBT0hDLDRCQUFnQjtBQVBiLFMsUUFVZEMsTyxHQUFVLEU7Ozs7O2lDQUVPO0FBQ04saUJBQUtDLFVBQUwsR0FBbUIsUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQkMsU0FBdEM7QUFDSDs7OytCQUVnQjtBQUFBOztBQUFBLGdCQUFYWCxJQUFXLHVFQUFKLEVBQUk7O0FBQ2IsaUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUssSUFBSVcsQ0FBVCxJQUFjWixJQUFkLEVBQW9CO0FBQ2hCLHFCQUFLWSxDQUFMLElBQVVaLEtBQUtZLENBQUwsQ0FBVjtBQUNIO0FBQ0QsaUJBQUtDLE1BQUw7O0FBRUFDLHlCQUFhLEtBQUtDLFNBQWxCOztBQUVBQyx1QkFBVyxZQUFJ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QUFyQjs7QUFFQSxpQkFBS1QsTUFBTDs7QUFFQSxnQkFBSSxLQUFLSixVQUFULEVBQXFCO0FBQ2pCLHVCQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDYyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENEO0FBQ0gsaUJBRk0sQ0FBUDtBQUdILGFBSkQsTUFJTztBQUNILG9CQUFJLE9BQU94QixLQUFLMEIsT0FBWixLQUF3QixVQUE1QixFQUF3QztBQUNwQywyQkFBTzFCLEtBQUswQixPQUFMLENBQWExQixJQUFiLENBQVA7QUFDSDtBQUNKO0FBQ0o7Ozs7RUFuSDhCaUMsZUFBS0MsUzs7a0JBQW5CbkMsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHJldmVhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGltZzogJycsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6ICcnLFxyXG4gICAgICAgICAgICBpbWdDbGFzc05hbWU6ICcnLFxyXG4gICAgICAgICAgICBpbWdNb2RlOiAnc2NhbGVUb0ZpbGwnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+i9veWFpeS4rS4uLicsXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3NOYW1lOiAnJ1xyXG4gICAgICAgIH07XHJcblxyXG5cdG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNQcm9taXNlID0gKHR5cGVvZiBQcm9taXNlICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hvdyAoZGF0YSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tdID0gZGF0YVtrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX190aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vcGFjaXR5KDEpLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV2ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sMzApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmR1cmF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdWNjZXNzIGNhbGxiYWNrIGFmdGVyIHRvYXN0IHNob3dlZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQgKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykgPyBkYXRhLnN1Y2Nlc3MoZGF0YSkgOiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQzMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RpbWVvdXQgPSBzZXRUaW1lb3V0ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoZGF0YS5kdXJhdGlvbiB8fCAxNTAwKSArIDQwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhLnN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGRhdGEuZHVyYXRpb24gfHwgMTUwMCkgKyA0MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdG9hc3QgKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGVyciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXJyID0gZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZGF0YS5mYWlsID09PSAnZnVuY3Rpb24nICYmIGRhdGEuZmFpbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhLnN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBoaWRlICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX190aW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5yZXZlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLm9wYWNpdHkoMCkuc3RlcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5zdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19