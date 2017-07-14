/**
 * @Author: Mink
 * @Contact: mink@feiruo.moe
 * @Description: 页面路由
 * @Date: 2017-07-13 10:27:22
 * @Last Modified by:   lenovo
 * @Last Modified time: 2017-07-13 16:22:51
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 懒加载引入的多个模块
// 页面路由
const index = r => require.ensure([], () => r(require('./pages/index.vue')), 'index');

// 多页面路径配置
export default new VueRouter({
    // https://router.vuejs.org/zh-cn/api/options.html
    // use history=false when testing
    base: __dirname,
    history: true,
    mode: 'hash',
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'v-link-active',
    hashbang: true, // 将路径格式化为#!开头
    routes: [
        // root
        // { name: 'root', path:   '/', redirect:  '/index' },
        // UP
        {
            name: 'index',
            path: '/',
            component: index
            // component: resolve => require(['./pages/index.vue'], resolve)
        },
    ]
});