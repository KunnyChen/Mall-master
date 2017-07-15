/*
 * @Author: KunnyChen
 * @description: Vue 主要库
 * @Date: 2017-04-27 11:11:36
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-15 17:07:12
 */
// 引入公共样式
import '~/assets/css/style.css';
import '~/assets/css/dialog.css';
/* Main */
import Vue from 'vue';
/* 子组件库导入 */
import filters from './filter'; // 导入过滤器
filters(Vue);
import './directives'; // 导入附加驱动
import './dialog'; // 弹窗提示组件
import './device'; // 设备判断组件
import './script'; // 自定义全局函数
// 存储类
var State = {
    canGoBack: ls.get("canGoBack") || false
};
window.onhashchange = function() {
    State.canGoBack = true;
    ls.set("canGoBack", true);
};

var obj = {
    'State': State, // 变量存储
    setDefault(vue) {
        vue.$store.state.navEdit = '';
        vue.$store.state.showHead = true;
        vue.$store.state.showClose = true;
        vue.$store.state.showFoot = true;
        vue.$store.state.showCart = true;
        vue.$store.state.canSearch = false;
        vue.$store.state.title = ProjectConfig.app;
        return vue;
    }
};
for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        Vue.prototype['_' + i] = obj[i];
    }
}
export default obj;