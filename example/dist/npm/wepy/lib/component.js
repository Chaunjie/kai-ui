'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

var _util = require('./util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = {
    check: function check(t, val) {
        switch (t) {
            case String:
                return typeof val === 'string';
            case Number:
                return typeof val === 'number';
            case Boolean:
                return typeof val === 'boolean';
            case Function:
                return typeof val === 'function';
            case Object:
                return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            case Array:
                return toString.call(val) === '[object Array]';
            default:
                return val instanceof t;
        }
    },
    build: function build(props) {
        var rst = {};
        if (typeof props === 'string') {
            rst[props] = {};
        } else if (toString.call(props) === '[object Array]') {
            props.forEach(function (p) {
                rst[p] = {};
            });
        } else {
            Object.keys(props).forEach(function (p) {
                if (typeof props[p] === 'function') {
                    rst[p] = {
                        type: [props[p]]
                    };
                } else if (toString.call(props[p]) === '[object Array]') {
                    rst[p] = {
                        type: props[p]
                    };
                } else rst[p] = props[p];

                if (rst[p].type && toString.call(rst[p].type) !== '[object Array]') rst[p].type = [rst[p].type];
            });
        }
        return rst;
    },
    valid: function valid(props, key, val) {
        var _this = this;

        var valid = false;
        if (props[key]) {
            if (!props[key].type) {
                valid = true;
            } else {
                return props[key].type.some(function (t) {
                    return _this.check(t, val);
                });
            }
        }
        return valid;
    },
    getValue: function getValue(props, key, value, com) {
        var rst;
        if (value !== undefined && this.valid(props, key, value)) {
            rst = value;
        } else if (typeof props[key].default === 'function') {
            rst = props[key].default();
        } else rst = props[key].default;
        return props[key].coerce ? props[key].coerce.call(com, rst) : rst;
    }
};

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$com = {};
        this.$events = {};
        this.$mixins = [];
        this.$isComponent = true;
        this.$prefix = '';
        this.$mappingProps = {};
        this.data = {};
        this.methods = {};
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init($wxpage, $root, $parent) {
            var _this2 = this;

            var self = this;

            this.$wxpage = $wxpage;
            if (this.$isComponent) {
                this.$root = $root || this.$root;
                this.$parent = $parent || this.$parent;
                this.$wxapp = this.$root.$parent.$wxapp;
            }

            if (this.props) {
                this.props = Props.build(this.props);
            }

            var k = void 0,
                defaultData = {};

            var props = this.props;
            var key = void 0,
                val = void 0,
                binded = void 0;
            var inRepeat = false,
                repeatKey = void 0;

            if (this.$initData === undefined) {
                this.$initData = _util2.default.$copy(this.data, true);
            } else {
                this.data = _util2.default.$copy(this.$initData, true);
            }

            if (this.$props) {
                for (key in this.$props) {
                    for (binded in this.$props[key]) {
                        if (/\.sync$/.test(binded)) {
                            if (!this.$mappingProps[this.$props[key][binded]]) this.$mappingProps[this.$props[key][binded]] = {};
                            this.$mappingProps[this.$props[key][binded]][key] = binded.substring(7, binded.length - 5);
                        }
                    }
                }
            }

            if (props) {
                for (key in props) {
                    if (keyCheck(this, key)) {
                        val = undefined;
                        if ($parent && $parent.$props && $parent.$props[this.$name]) {
                            val = $parent.$props[this.$name][key];
                            binded = $parent.$props[this.$name]['v-bind:' + key + '.once'] || $parent.$props[this.$name]['v-bind:' + key + '.sync'];
                            if (binded) {
                                if ((typeof binded === 'undefined' ? 'undefined' : _typeof(binded)) === 'object') {
                                    (function () {
                                        props[key].repeat = binded.for;
                                        props[key].item = binded.item;
                                        props[key].index = binded.index;
                                        props[key].key = binded.key;
                                        props[key].value = binded.value;

                                        inRepeat = true;

                                        var bindfor = binded.for,
                                            binddata = $parent;
                                        bindfor.split('.').forEach(function (t) {
                                            binddata = binddata ? binddata[t] : {};
                                        });
                                        if (binddata && ((typeof binddata === 'undefined' ? 'undefined' : _typeof(binddata)) === 'object' || typeof binddata === 'string')) {
                                            repeatKey = Object.keys(binddata)[0];
                                        }

                                        if (!_this2.$mappingProps[key]) _this2.$mappingProps[key] = {};
                                        _this2.$mappingProps[key]['parent'] = {
                                            mapping: binded.for,
                                            from: key
                                        };
                                    })();
                                } else {
                                    val = $parent[binded];
                                    if (props[key].twoWay) {
                                        if (!this.$mappingProps[key]) this.$mappingProps[key] = {};
                                        this.$mappingProps[key]['parent'] = binded;
                                    }
                                }
                            } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.value !== undefined) {
                                this.data[key] = val.value;
                            }
                        }
                        if (!this.data[key] && !props[key].repeat) {
                            val = Props.getValue(props, key, val, this);
                            this.data[key] = val;
                        }
                    }
                }
            }

            if (typeof this.data === 'function') {
                this.data = this.data.apply(this.data);
            }

            for (k in this.data) {
                if (keyCheck(this, k)) {
                    defaultData['' + this.$prefix + k] = this.data[k];
                    this[k] = this.data[k];
                }
            }

            this.$data = _util2.default.$copy(this.data, true);
            if (inRepeat && repeatKey !== undefined) this.$setIndex(repeatKey);

            if (this.computed) {
                for (k in this.computed) {
                    if (keyCheck(this, k)) {
                        var fn = this.computed[k];
                        defaultData['' + this.$prefix + k] = fn.call(this);
                        this[k] = _util2.default.$copy(defaultData['' + this.$prefix + k], true);
                    }
                }
            }
            this.setData(defaultData);

            var coms = Object.getOwnPropertyNames(this.$com);
            if (coms.length) {
                coms.forEach(function (name) {
                    var com = _this2.$com[name];
                    com.$init(_this2.getWxPage(), $root, _this2);
                });
            }
        }
    }, {
        key: '$initMixins',
        value: function $initMixins() {
            var _this3 = this;

            if (this.mixins) {
                if (typeof this.mixins === 'function') {
                    this.mixins = [this.mixins];
                }
            } else {
                this.mixins = [];
            }
            this.mixins.forEach(function (mix) {
                var inst = new mix();
                inst.$init(_this3);
                _this3.$mixins.push(inst);
            });
        }
    }, {
        key: '$onLoad',
        value: function $onLoad() {
            var _this4 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            [].concat(this.$mixins, this).forEach(function (mix) {
                mix['onLoad'] && mix['onLoad'].apply(_this4, args);
            });

            var coms = Object.getOwnPropertyNames(this.$com);
            if (coms.length) {
                coms.forEach(function (name) {
                    var com = _this4.$com[name];
                    com.$onLoad.call(com);
                });
            }
        }
    }, {
        key: '$onUnload',
        value: function $onUnload() {
            var _this5 = this;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            var coms = Object.getOwnPropertyNames(this.$com);
            if (coms.length) {
                coms.forEach(function (name) {
                    var com = _this5.$com[name];
                    com.$onUnload.call(com);
                });
            }

            [].concat(this.$mixins, this).forEach(function (mix) {
                mix['onUnload'] && mix['onUnload'].apply(_this5, args);
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onUnload',
        value: function onUnload() {}
    }, {
        key: 'setData',
        value: function setData(k, v) {
            if (typeof k === 'string') {
                if (v) {
                    var tmp = {};
                    tmp[k] = v;
                    k = tmp;
                } else {
                    var _tmp = {};
                    _tmp[k] = this.data['' + k];
                    k = _tmp;
                }
                return this.$wxpage.setData(k);
            }
            var t = null,
                reg = new RegExp('^' + this.$prefix.replace(/\$/g, '\\$'), 'ig');

            for (t in k) {
                var noPrefix = t.replace(reg, '');
                this.$data[noPrefix] = _util2.default.$copy(k[t], true);

                if (_util2.default.isImmutable(k[t])) {
                    k[t] = k[t].toJS();
                }

                if (k[t] === undefined) {
                    delete k[t];
                }
            }

            if (typeof v === 'function') {
                return this.$root.$wxpage.setData(k, v);
            }
            return this.$root.$wxpage.setData(k);
        }
    }, {
        key: 'getWxPage',
        value: function getWxPage() {
            return this.$wxpage;
        }
    }, {
        key: 'getCurrentPages',
        value: function (_getCurrentPages) {
            function getCurrentPages() {
                return _getCurrentPages.apply(this, arguments);
            }

            getCurrentPages.toString = function () {
                return _getCurrentPages.toString();
            };

            return getCurrentPages;
        }(function () {
            return getCurrentPages();
        })
    }, {
        key: '$setIndex',
        value: function $setIndex(index) {
            var _this6 = this;

            this.$index = index;

            var props = this.props,
                $parent = this.$parent;
            var key = void 0,
                val = void 0,
                binded = void 0;
            if (props) {
                for (key in props) {
                    val = undefined;
                    if ($parent && $parent.$props && $parent.$props[this.$name]) {
                        val = $parent.$props[this.$name][key];
                        binded = $parent.$props[this.$name]['v-bind:' + key + '.once'] || $parent.$props[this.$name]['v-bind:' + key + '.sync'];
                        if (binded) {
                            if ((typeof binded === 'undefined' ? 'undefined' : _typeof(binded)) === 'object') {
                                (function () {
                                    var bindfor = binded.for,
                                        binddata = $parent;

                                    if (bindfor.indexOf('[') === 0) {
                                        var bdarr = [];
                                        bindfor = bindfor.substr(1, bindfor.length - 2).trim();

                                        bindfor.split(',').forEach(function (e) {
                                            var bd = $parent;
                                            e.trim().split('.').forEach(function (t) {
                                                bd = bd ? bd[t] : {};
                                            });
                                            bdarr.push(bd);
                                        });

                                        binddata = bdarr;
                                    } else {
                                        bindfor.split('.').forEach(function (t) {
                                            binddata = binddata ? binddata[t] : {};
                                        });
                                    }

                                    index = Array.isArray(binddata) ? +index : index;

                                    if (props[key].value === props[key].item) {
                                        val = binddata[index];
                                    } else if (props[key].value === props[key].index) {
                                        val = index;
                                    } else if (props[key].value === props[key].key) {
                                        val = index;
                                    } else {
                                        val = $parent[props[key].value];
                                    }
                                    _this6.$index = index;
                                    _this6.data[key] = val;
                                    _this6[key] = val;
                                    _this6.$data[key] = _util2.default.$copy(_this6[key], true);
                                })();
                            }
                        }
                    }
                }

                for (key in this.$com) {
                    this.$com[key].$index = undefined;
                }
            }
        }
    }, {
        key: '$getComponent',
        value: function $getComponent(com) {
            var _this7 = this;

            if (typeof com === 'string') {
                if (com.indexOf('/') === -1) {
                    return this.$com[com];
                } else if (com === '/') {
                    return this.$parent;
                } else {
                    var path = com.split('/');
                    path.forEach(function (s, i) {
                        if (i === 0) {
                            if (s === '') {
                                com = _this7.$root;
                            } else if (s === '.') {
                                com = _this7;
                            } else if (s === '..') {
                                com = _this7.$parent;
                            } else {
                                com = _this7.$getComponent(s);
                            }
                        } else if (s) {
                            com = com.$com[s];
                        }
                    });
                }
            }
            return (typeof com === 'undefined' ? 'undefined' : _typeof(com)) !== 'object' ? null : com;
        }
    }, {
        key: '$invoke',
        value: function $invoke(com, method) {
            com = this.$getComponent(com);

            if (!com) {
                throw new Error('Invalid path: ' + com);
            }

            var fn = com.methods ? com.methods[method] : '';

            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            if (typeof fn === 'function') {
                var $evt = new _event2.default('', this, 'invoke');
                var rst = fn.apply(com, args.concat($evt));
                com.$apply();
                return rst;
            } else {
                fn = com[method];
            }

            if (typeof fn === 'function') {
                return fn.apply(com, args);
            } else {
                throw new Error('Invalid method: ' + method);
            }
        }
    }, {
        key: '$broadcast',
        value: function $broadcast(evtName) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }

            var com = this;
            var $evt = typeof evtName === 'string' ? new _event2.default(evtName, this, 'broadcast') : $evt;
            var queue = [com];

            while (queue.length && $evt.active) {
                var current = queue.shift();

                var _loop = function _loop(_c) {
                    _c = current.$com[_c];
                    queue.push(_c);
                    var fn = getEventsFn(_c, evtName);
                    if (fn) {
                        _c.$apply(function () {
                            fn.apply(_c, args.concat($evt));
                        });
                    }
                    if (!$evt.active) return 'break';
                    c = _c;
                };

                for (var c in current.$com) {
                    var _ret3 = _loop(c);

                    if (_ret3 === 'break') break;
                }
            }
        }
    }, {
        key: '$emit',
        value: function $emit(evtName) {
            var _this8 = this;

            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                args[_key5 - 1] = arguments[_key5];
            }

            var com = this;
            var source = this;
            var $evt = new _event2.default(evtName, source, 'emit');

            args = args.concat($evt);

            if (this.$parent && this.$parent.$events && this.$parent.$events[this.$name]) {
                var method = this.$parent.$events[this.$name]['v-on:' + evtName];
                if (method && this.$parent.methods) {
                    var _fn = this.$parent.methods[method];
                    if (typeof _fn === 'function') {
                        this.$parent.$apply(function () {
                            _fn.apply(_this8.$parent, args);
                        });
                        return;
                    } else {
                        throw new Error('Invalid method from emit, component is ' + this.$parent.$name + ', method is ' + method + '. Make sure you defined it already.\n');
                    }
                }
            }

            var _loop2 = function _loop2() {
                var comContext = com;
                var fn = getEventsFn(comContext, evtName);
                if (fn) {
                    if (typeof fn === 'function') {
                        comContext.$apply(function () {
                            fn.apply(comContext, args);
                        });
                    } else if (Array.isArray(fn)) {
                        fn.forEach(function (f) {
                            f.apply(comContext, args);
                        });
                        comContext.$apply();
                    }
                }
                com = comContext.$parent;
            };

            while (com && com.$isComponent !== undefined && $evt.active) {
                _loop2();
            }
        }
    }, {
        key: '$on',
        value: function $on(evtName, fn) {
            var _this9 = this;

            if (typeof evtName === 'string') {
                (this.$events[evtName] || (this.$events[evtName] = [])).push(fn);
            } else if (Array.isArray(evtName)) {
                evtName.forEach(function (k) {
                    _this9.$on(k, fn);
                });
            } else if ((typeof evtName === 'undefined' ? 'undefined' : _typeof(evtName)) === 'object') {
                for (var k in evtName) {
                    this.$on(k, evtName[k]);
                }
            }
            return this;
        }
    }, {
        key: '$once',
        value: function $once(evtName, fn) {
            var self = this;
            var oncefn = function oncefn() {
                self.$off(evtName, oncefn);
                fn.apply(self, arguments);
            };
            oncefn.fn = fn;
            this.$on(evtName, oncefn);
        }
    }, {
        key: '$off',
        value: function $off(evtName, fn) {
            var _this10 = this;

            if (evtName === undefined) {
                this.$events = {};
            } else if (typeof evtName === 'string') {
                if (fn) {
                    var fns = this.$events[evtName];
                    var i = fns.length;
                    while (i--) {
                        if (fn === fns[i] || fn === fns[i].fn) {
                            fns.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    this.$events[evtName] = [];
                }
            } else if (Array.isArray(evtName)) {
                evtName.forEach(function (k) {
                    _this10.$off(k, fn);
                });
            }
            return this;
        }
    }, {
        key: '$apply',
        value: function $apply(fn) {
            if (typeof fn === 'function') {
                fn.call(this);
                this.$apply();
            } else {
                if (this.$$phase) {
                    this.$$phase = '$apply';
                } else {
                    this.$digest();
                }
            }
        }
    }, {
        key: '$digest',
        value: function $digest() {
            var _this11 = this;

            var k = void 0;
            var originData = this.$data;
            this.$$phase = '$digest';
            this.$$dc = 0;
            while (this.$$phase) {
                this.$$dc++;
                if (this.$$dc >= 3) {
                    throw new Error('Can not call $apply in $apply process');
                }
                var readyToSet = {};
                if (this.computed) {
                    for (k in this.computed) {
                        var _fn2 = this.computed[k],
                            val = _fn2.call(this);
                        if (!_util2.default.$isEqual(this[k], val)) {
                            readyToSet[this.$prefix + k] = val;
                            this[k] = _util2.default.$copy(val, true);
                        }
                    }
                }
                for (k in originData) {
                    if (!_util2.default.$isEqual(this[k], originData[k])) {
                        if (this.watch) {
                            if (this.watch[k]) {
                                if (typeof this.watch[k] === 'function') {
                                    this.watch[k].call(this, this[k], originData[k]);
                                } else if (typeof this.watch[k] === 'string' && typeof this.methods[k] === 'function') {
                                    this.methods[k].call(this, this[k], originData[k]);
                                }
                            }
                        }

                        readyToSet[this.$prefix + k] = this[k];
                        this.data[k] = this[k];
                        originData[k] = _util2.default.$copy(this[k], true);
                        if (this.$repeat && this.$repeat[k]) {
                            var $repeat = this.$repeat[k];
                            this.$com[$repeat.com].data[$repeat.props] = this[k];
                            this.$com[$repeat.com].$setIndex(0);
                            this.$com[$repeat.com].$apply();
                        }
                        if (this.$mappingProps[k]) {
                            Object.keys(this.$mappingProps[k]).forEach(function (changed) {
                                var mapping = _this11.$mappingProps[k][changed];
                                if ((typeof mapping === 'undefined' ? 'undefined' : _typeof(mapping)) === 'object') {
                                    _this11.$parent.$apply();
                                } else if (changed === 'parent' && !_util2.default.$isEqual(_this11.$parent.$data[mapping], _this11[k])) {
                                    _this11.$parent[mapping] = _this11[k];
                                    _this11.$parent.data[mapping] = _this11[k];
                                    _this11.$parent.$apply();
                                } else if (changed !== 'parent' && !_util2.default.$isEqual(_this11.$com[changed].$data[mapping], _this11[k])) {
                                    _this11.$com[changed][mapping] = _this11[k];
                                    _this11.$com[changed].data[mapping] = _this11[k];
                                    _this11.$com[changed].$apply();
                                }
                            });
                        }
                    }
                }
                if (Object.keys(readyToSet).length) {
                    this.setData(readyToSet, function () {
                        if (_this11.$$nextTick) {
                            var $$nextTick = _this11.$$nextTick;
                            _this11.$$nextTick = null;
                            if ($$nextTick.promise) {
                                $$nextTick();
                            } else {
                                $$nextTick.call(_this11);
                            }
                        }
                    });
                } else {
                    if (this.$$nextTick) {
                        var $$nextTick = this.$$nextTick;
                        this.$$nextTick = null;
                        if ($$nextTick.promise) {
                            $$nextTick();
                        } else {
                            $$nextTick.call(this);
                        }
                    }
                }
                this.$$phase = this.$$phase === '$apply' ? '$digest' : false;
            }
        }
    }, {
        key: '$nextTick',
        value: function $nextTick(fn) {
            var _this12 = this;

            if (typeof fn === 'undefined') {
                return new Promise(function (resolve, reject) {
                    _this12.$$nextTick = function () {
                        resolve();
                    };
                    _this12.$$nextTick.promise = true;
                });
            }
            this.$$nextTick = fn;
        }
    }]);

    return _class;
}();

exports.default = _class;

function keyCheck(vm, k) {
    if (typeof vm[k] === 'function') {
        console.warn('You are not allowed to define a function "' + k + '" in data.');
        return 0;
    } else if (['data', 'props', 'methods', 'events', 'mixins'].indexOf(k) !== -1) {
        console.warn('"' + k + '" is reserved word, please fix it.');
        return 0;
    } else if (k[0] === '$') {
        console.warn('"' + k + ': You can not define a property started with "$"');
        return 0;
    }
    return 1;
}

function getEventsFn(comContext, evtName) {
    var fn = comContext.events ? comContext.events[evtName] : comContext.$events[evtName] ? comContext.$events[evtName] : undefined;
    var typeFn = typeof fn === 'undefined' ? 'undefined' : _typeof(fn);
    var fnFn = void 0;
    if (typeFn === 'string') {
        var method = comContext.methods && comContext.methods[fn];
        if (typeof method === 'function') {
            fnFn = method;
        }
    } else if (typeFn === 'function' || Array.isArray(fn)) {
        fnFn = fn;
    }
    return fnFn;
}
//# sourceMappingURL=component.js.map