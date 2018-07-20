'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _native = require('./native.js');

var _native2 = _interopRequireDefault(_native);

var _component2 = require('./component.js');

var _component3 = _interopRequireDefault(_component2);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_component) {
    _inherits(_class, _component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.$isComponent = false, _this.$preloadData = {}, _this.$prefetchData = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init(wxpage, $parent) {

            this.$parent = $parent;
            this.$root = this;
            if (!$parent.$wxapp) {
                $parent.$wxapp = getApp();
            }
            this.$wxapp = $parent.$wxapp;
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), '$init', this).call(this, wxpage, this);
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onLoad', this).call(this);
        }
    }, {
        key: '$preload',
        value: function $preload(key, data) {
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                var k = void 0;
                for (k in key) {
                    this.$preload(k, key[k]);
                }
            } else {
                this.$preloadData[key] = data;
            }
        }
    }, {
        key: '$route',
        value: function $route(type, url) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (typeof url === 'string') {
                var s = url + '?';
                if (params) {
                    var k = void 0;
                    for (k in params) {
                        s += k + '=' + params[k] + '&';
                    }
                }
                s = s.substring(0, s.length - 1);
                url = { url: s };
            } else {
                params = _util2.default.$getParams(url.url);
            }

            if (!this.$parent.__route__) {
                this.$parent.__route__ = getCurrentPages()[0].__route__;
                this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__;
            }
            var absoluteRoute = this.$parent.__route__[0] !== '/' ? '/' + this.$parent.__route__ : this.$parent.__route__;
            var realPath = _util2.default.$resolvePath(absoluteRoute, url.url.split('?')[0]);
            var goTo = this.$parent.$pages[realPath];
            if (goTo && goTo.onPrefetch) {
                var prevPage = this.$parent.__prevPage__;
                var preloadData = {};
                if (prevPage && Object.keys(prevPage.$preloadData).length > 0) {
                    preloadData = prevPage.$preloadData;
                }
                goTo.$prefetchData = goTo.onPrefetch(params, { from: this, preload: preloadData });
            }
            return _native2.default[type](url);
        }
    }, {
        key: '$redirect',
        value: function $redirect(url, params) {
            return this.$route('redirectTo', url, params);
        }
    }, {
        key: '$navigate',
        value: function $navigate(url, params) {
            return this.$route('navigateTo', url, params);
        }
    }, {
        key: '$switch',
        value: function $switch(url) {
            if (typeof url === 'string') url = { url: url };

            return _native2.default.switchTab(url);
        }
    }, {
        key: '$back',
        value: function $back(delta) {
            var p = delta || {};
            if (typeof p === 'number') p = { delta: p };

            if (!p.delta) p.delta = 1;

            return _native2.default.navigateBack(p);
        }
    }]);

    return _class;
}(_component3.default);

exports.default = _class;
//# sourceMappingURL=page.js.map