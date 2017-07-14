/*
 * @CreateTime: May 8, 2017 10:37 AM
 * @Author: Mink
 * @Contact: mink@feiruo.moe
 * @Last Modified By: Mink
 * @Last Modified Time: Jun 6, 2017 6:42 PM
 * @Description: 功能函数
 */
export default {
    /**
     * 多页面参数传递
     * @param {string} url
     * @return {bool||string} string
     */
    tranUrl(url) {
        url = url || window.location.href;
        var param = /.*#!?\/(.*)/.test(url);
        if (param) return url.replace(/.*#!?\/(.*)/, '$1');
        return false;
    },
    // 设置网页title公共方法
    title(title) {
        try {
            let $body = $('body');
            document.title = title;
            let $iframe = $('<iframe style="display:none"></iframe>');
            $iframe
                .on('load', function() {
                    setTimeout(function() {
                        $iframe.off('load').remove();
                    }, 0);
                })
                .appendTo($body);
        } catch (ex) {
            window.alert(ex);
        }
    },
    /**
     * 获取url传过来的参数
     * @param name 获取的参数
     * @param Url 自定义获取参数的链接
     * @param return
     * */
    getUrlQuery(name, Url) {
        var reg = new RegExp('(^|\\?|&)' + name + '=([^&#\!\/]*)(\s|&|\!|\/|#|$)', 'i'),
            url = Url || location.href;
        if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '));
        return '';
    },
    getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&#\!\/]*)(\s|&|\!|\/|#|$)'); // 构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); // 匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; // 返回参数值
    },
    // 分类
    toCategory(list, group = ['category', 'subCategory']) {
        var self = this;
        var category = {};

        function add(cate, item, cat) {
            item[cat].forEach(function(cats) {
                cate[cats.id] = cate[cats.id] || { id: cats.id, name: cats.name, tag: cats.tag };
                if (cats.subCategory) {
                    cate[cats.id].subCate = cate[cats.id].subCate || {};
                    addSub(cats, cate[cats.id].subCate, item, group[1]);
                }
                cate[cats.id].list = cate[cats.id].list || [];
                cate[cats.id].list.push(item);
            }, this);
        }

        function addSub(cate, subCate, item, cat) {
            if (!cate[cat]) return;
            cate[cat].forEach(function(cats) {
                subCate[cats.id] = subCate[cats.id] || { id: cats.id, name: cats.name, tag: cats.tag };
                if (cats.subCategory) {
                    subCate[cats.id].subCate = subCate[cats.id].subCate || {};
                    addSub(cats, subCate[cats.id].subCate, item, cat);
                }
                subCate[cats.id].list = subCate[cats.id].list || [];
                subCate[cats.id].list.push(item);
            }, this);
        }

        for (var i = 0; i < list.length; i++) {
            add(category, list[i], group[0]);
        }
        return category;
    },
    // 购物车列表 商户分组@_@
    cart2List(list) {
        var obj = {};
        list.forEach(function(item) {
            var sid = item.shopInfo.id;
            obj[sid] = obj[sid] || this.clone(item.shopInfo);
            obj[sid].list = obj[sid].list || [];
            obj[sid].list.push(item);
        }, this);
        return obj;
    },
    // 深度拷贝 数组和对象
    clone(obj, nObj) {
        var str, newObj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object') {
            return;
        } else if (window.JSON) {
            str = JSON.stringify(obj); // 系列化对象
            newObj = JSON.parse(str); // 还原
        } else {
            for (var i in obj) {
                newObj[i] = typeof obj[i] === 'object' ? this.clone(obj[i]) : obj[i];
            }
        }
        if (nObj && typeof nObj == 'object') {
            for (var i in nObj) {
                newObj[i] = nObj[i];
            }
        }
        return newObj;
    },
    // 购物车 商户商品列表反向查找 -_-
    findInList(list, item) {
        function isOne(a, b) {
            return a.id == b.id &&
                a.name == b.name &&
                a.stock == b.stock &&
                a.title == b.title &&
                a.price == b.price;
        }
        if (Object.prototype.toString.call(list) === '[object Array]') {
            for (var i = 0; i < list.length; i++) {
                if (isOne(list[i], item)) return i;
            }
        } else {
            for (var i in list) {
                if (list.hasOwnProperty(i)) {
                    if (isOne(list[i], item)) return i;
                }
            }
        }
        return false;
    },
    /* 判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象 */
    isArrayLike: function(obj) {
        if (!obj)
            return false;
        var n = obj.length;
        var oproto = Object.prototype;
        var serialize = oproto.toString;
        if (n === n >>> 0) { // 检测length属性是否为非负整数
            var type = serialize.call(obj).slice(8, -1);
            if (/(?:regexp|string|function|window|global)$/i.test(type)) { return false; }
            if (type === "Array") { return true; }
            try {
                if ({}.propertyIsEnumerable.call(obj, "length") === false) { // 如果是原生对象
                    return /^\s?function/.test(obj.item || obj.callee);
                }
                return true;
            } catch (e) { // IE的NodeList直接抛错
                return !obj.window; // IE6-8 window
            }
        }
        return false;
    },
    // 对象筛选
    drip(obj, fn) {
        var That = this,
            newObj;
        if (obj) {
            // 排除null, undefined
            var i = 0;
            if (That.isArrayLike(obj)) {
                newObj = [];
                for (var n = obj.length; i < n; i++) {
                    if (fn(i, obj[i]) === true) {
                        newObj.push(obj[i]);
                    }
                }
            } else {
                newObj = {};
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === true) {
                        newObj[i] = obj[i];
                    }
                }
            }
        }
        return newObj;
    },
    // 遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值
    each(obj, fn) {
        var That = this;
        if (obj) {
            // 排除null, undefined
            var i = 0;
            if (That.isArrayLike(obj)) {
                for (var n = obj.length; i < n; i++) {
                    if (fn(i, obj[i]) === false) break;
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
                        break;
                    }
                }
            }
        }
    },
    _groupBy(list, fn) {
        var _k, _r = {};
        for (var i = 0, len = list.length; i < len; i++) {
            _k = fn(list[i]);
            _r[_k] = !_r[_k] ? [] : _r[_k];
            _r[_k].push(list[i]);
        }
        _k = null;
        return _r;
    },
    // 对象内查找
    _find(list, keyName, val) {
        var _r = null;
        for (var i = 0, len = list.length; i < len; i++) {
            if (list[i][keyName] === val) {
                _r = list[i];
                break;
            }
        }
        return _r;
    },
    // 排序
    _sortBy(list, keyName) {
        var _cV, i = list.length,
            j;
        while (i > 0) {
            for (j = 0; j < i - 1; j++) {
                if (list[j][keyName] > list[j + 1][keyName]) {
                    _cV = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = _cV;
                }
            }
            i--;
        }
        j = _cV = null;
        return list;
    },
    // 对象过滤器
    _filter(list, fn) {
        var _cV, _r = [];
        for (var i = 0, len = list.length; i < len; i++) {
            _cV = list[i];
            fn(_cV) && _r.push(_cV);
        }
        _cV = null;
        return _r;
    },
    // 对象扩展器
    _extend() {
        var _arg = arguments;
        if (!_arg.length) return '';
        var _base = _arg[0];
        if (_arg.length > 1) {
            for (var i = 1, len = _arg.length; i < len; i++) {
                for (var j in _arg[i]) {
                    _base[j] = _arg[i][j];
                }
            }
        }
        return _base;
    },
    // 获取对象数据组成列表
    getListValuesByKey(list, key) {
        var _list = [];
        for (var i = 0, len = list.length; i < len; i++) {
            _list.push(list[i][key]);
        }
        return _list;
    }
};