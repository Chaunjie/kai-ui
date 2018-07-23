'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PAGE_EVENT = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap'];
var APP_EVENT = ['onLaunch', 'onShow', 'onHide', 'onError', 'onPageNotFound'];

var $bindEvt = function $bindEvt(config, com, prefix) {
    com.$prefix = _util2.default.camelize(prefix || '');
    Object.getOwnPropertyNames(com.components || {}).forEach(function (name) {
        var cClass = com.components[name];
        var child = new cClass();
        child.$initMixins();
        child.$name = name;
        var comPrefix = prefix ? prefix + child.$name + '$' : '$' + child.$name + '$';

        com.$com[name] = child;

        $bindEvt(config, child, comPrefix);
    });
    Object.getOwnPropertyNames(com.constructor.prototype || []).forEach(function (prop) {
        if (prop !== 'constructor' && PAGE_EVENT.indexOf(prop) === -1) {
            config[prop] = function () {
                com.constructor.prototype[prop].apply(com, arguments);
                com.$apply();
            };
        }
    });

    var allMethods = Object.getOwnPropertyNames(com.methods || []);

    com.$mixins.forEach(function (mix) {
        allMethods = allMethods.concat(Object.getOwnPropertyNames(mix.methods || []));
    });

    allMethods.forEach(function (method, i) {
        config[com.$prefix + method] = function (e) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var evt = new _event2.default('system', this, e.type);
            evt.$transfor(e);
            var wepyParams = [],
                paramsLength = 0,
                tmp = void 0,
                p = void 0,
                comIndex = void 0;
            if (e.currentTarget && e.currentTarget.dataset) {
                tmp = e.currentTarget.dataset;
                while (tmp['wpy' + method.toLowerCase() + (p = String.fromCharCode(65 + paramsLength++))] !== undefined) {
                    wepyParams.push(tmp['wpy' + method.toLowerCase() + p]);
                }
                if (tmp.comIndex !== undefined) {
                    comIndex = tmp.comIndex;
                }
            }

            if (comIndex !== undefined) {
                comIndex = ('' + comIndex).split('-');
                var level = comIndex.length,
                    _tmp = level;
                while (level-- > 0) {
                    _tmp = level;
                    var tmpcom = com;
                    while (_tmp-- > 0) {
                        tmpcom = tmpcom.$parent;
                    }
                    tmpcom.$setIndex(comIndex.shift());
                }
            }

            args = args.concat(wepyParams);
            var rst = void 0,
                mixRst = void 0;
            var comfn = com.methods[method];
            if (comfn) {
                rst = comfn.apply(com, args.concat(evt));
            }
            com.$mixins.forEach(function (mix) {
                mix.methods[method] && (mixRst = mix.methods[method].apply(com, args.concat(evt)));
            });
            com.$apply();
            return comfn ? rst : mixRst;
        };
    });
    return config;
};

exports.default = {
    $createApp: function $createApp(appClass, appConfig) {
        var config = {};
        var app = new appClass();

        if (!this.$instance) {
            app.$init(this, appConfig);
            this.$instance = app;
            this.$appConfig = appConfig;
        }

        if (arguments.length === 2 && arguments[1] === true) {
            config.$app = app;
        }

        app.$wxapp = getApp();

        APP_EVENT = APP_EVENT.concat(appConfig.appEvents || []);
        PAGE_EVENT = PAGE_EVENT.concat(appConfig.pageEvents || []);

        APP_EVENT.forEach(function (v) {
            config[v] = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                var rst = void 0;
                !app.$wxapp && (app.$wxapp = getApp());
                app[v] && (rst = app[v].apply(app, args));
                return rst;
            };
        });
        return config;
    },
    $createPage: function $createPage(pageClass, pagePath) {
        var self = this;
        var config = {},
            k = void 0;
        var page = new pageClass();
        if (typeof pagePath === 'string') {
            this.$instance.$pages['/' + pagePath] = page;
        }
        page.$initMixins();

        if (typeof pagePath === 'boolean' && pagePath || arguments.length === 3 && arguments[2] === true) config.$page = page;

        config.onLoad = function () {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            !('options' in this) && (this.options = args.length ? args[0] : {});

            page.$name = pageClass.name || 'unnamed';
            page.$init(this, self.$instance, self.$instance);

            var prevPage = self.$instance.__prevPage__;
            var secParams = {};
            secParams.from = prevPage ? prevPage : undefined;

            if (prevPage && prevPage.$preloadData) {
                secParams.preload = prevPage.$preloadData;
                prevPage.$preloadData = undefined;
            }
            if (page.$prefetchData) {
                secParams.prefetch = page.$prefetchData;
                page.$prefetchData = undefined;
            }
            args.push(secParams);

            page.$onLoad.apply(page, args);

            page.$apply();
        };

        config.onUnload = function () {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            page.$onUnload.apply(page, args);
        };

        config.onShow = function () {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

            self.$instance.__prevPage__ = page;

            [].concat(page.$mixins, page).forEach(function (mix) {
                mix['onShow'] && mix['onShow'].apply(page, args);
            });

            var pages = getCurrentPages();
            var pageId = pages[pages.length - 1].__route__;
            var webViewId = pages[pages.length - 1].__wxWebviewId__;

            if (self.$instance.__wxWebviewId__ !== webViewId) {

                page.$wxpage = this;

                self.$instance.__route__ = pageId;
                self.$instance.__wxWebviewId__ = webViewId;

                [].concat(page.$mixins, page).forEach(function (mix) {
                    mix['onRoute'] && mix['onRoute'].apply(page, args);
                });
            }

            page.$apply();
        };

        PAGE_EVENT.forEach(function (v) {
            if (v !== 'onLoad' && v !== 'onUnload' && v !== 'onShow') {
                config[v] = function () {
                    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                        args[_key6] = arguments[_key6];
                    }

                    var rst = void 0;

                    if (v === 'onShareAppMessage') {
                        page[v] && (rst = page[v].apply(page, args));
                        return rst;
                    }

                    [].concat(page.$mixins, page).forEach(function (mix) {
                        mix[v] && mix[v].apply(page, args);
                    });

                    if (v !== 'onPageScroll') {
                        page.$apply();
                    }

                    return rst;
                };
            }
        });

        if (!page.onShareAppMessage) {
            delete config.onShareAppMessage;
        }

        if ([].concat(page.$mixins, page).findIndex(function (mix) {
            return mix['onPageScroll'];
        }) === -1) {
            delete config.onPageScroll;
        }

        return $bindEvt(config, page, '');
    }
};
//# sourceMappingURL=base.js.map