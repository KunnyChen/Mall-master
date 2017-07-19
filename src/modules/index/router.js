/**
 * @Author: KunnyChen
 * @Description: 页面路由
 * @Date: 2017-07-13 10:27:22
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-19 15:37:02
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 懒加载引入的多个模块
// 页面路由
const index = r => require.ensure([], () => r(require('./pages/index.vue')), 'index');
const shop = r => require.ensure([], () => r(require('./pages/shop.vue')), 'shop');
const foodDetail = r => require.ensure([], () => r(require('./pages/foodDetail.vue')), 'foodDetail');

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
        { name: 'index', path: '/', component: index },
        { name: 'shop', path: '/shop', component: shop },
        { name: 'foodDetail', path: '/foodDetail', component: foodDetail }
    ]
});
