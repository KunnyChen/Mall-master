/*
 * @CreateTime: May 11, 2017 12:18 PM
 * @Author: Mink
 * @Contact: mink@feiruo.moe
 * @Last Modified By: Mink
 * @Last Modified Time: May 11, 2017 12:21 PM
 * @Description: 自定义全局函数
 */
(function(win, doc) {
    "use strict";
    win.Scroll = (function() {
        var keys = [37, 38, 39, 40];
        const fn = function(e) {
            e = e || window.event;
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
            e.returnValue = false;
        };

        function keydown(e) {
            for (var i = keys.length; i--;) {
                if (e.keyCode === keys[i] || 37 <= e.keyCode && e.keyCode <= 40) {
                    fn(e);
                    return;
                }
            }
        }

        let isLock = false;
        return {
            lock: function() {
                if (isLock) return;
                isLock = true;
                document.addEventListener('touchmove', fn);
                if (window.addEventListener) {
                    window.addEventListener('DOMMouseScroll', fn, false);
                }
                window.onmousewheel = document.onmousewheel = fn;
                document.onkeydown = keydown;
            },
            unlock: function() {
                isLock = false;
                document.removeEventListener('touchmove', fn);
                if (window.removeEventListener) {
                    window.removeEventListener('DOMMouseScroll', fn, false);
                }
                window.onmousewheel = document.onmousewheel = document.onkeydown = null;
            }
        };
    })();

    if (!Array.contains) {
        Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
                if (this[i] === obj) {
                    return true;
                }
            }
            return false;
        };
    }

    win.isColor = function(value) {
        const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
        const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
        const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;
        return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
    };

    win.getScrollview = function(el) {
        let currentNode = el;
        while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
            let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
            if (overflowY === 'scroll' || overflowY === 'auto') {
                return currentNode;
            }
            currentNode = currentNode.parentNode;
        }
        return window;
    };

    win.checkInview = function(scrollView, el) {
        const contentHeight = scrollView == window ? document.body.offsetHeight : scrollView.offsetHeight;
        const contentTop = scrollView === window ? 0 : scrollView.getBoundingClientRect().top;

        const post = el.getBoundingClientRect().top - contentTop;
        const posb = post + el.offsetHeight;

        return post >= 0 && post < contentHeight || posb > 0 && posb <= contentHeight;
    };

    win.hasClass = function(elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false;
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    };

    win.addClass = function(ele, cls) {
        if (!hasClass(ele, cls)) {
            ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
        }
    };

    win.removeClass = function(ele, cls) {
        if (hasClass(ele, cls)) {
            let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
            while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                newClass = newClass.replace(' ' + cls + ' ', ' ');
            }
            ele.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    };
})(window, document);