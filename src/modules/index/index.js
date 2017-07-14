/**
 * @Author: Mink
 * @Contact: mink@feiruo.moe
 * @Description: 模块入口
 * @Date: 2017-05-08 10:26:43
 * @Last Modified by:   lenovo
 * @Last Modified time: 2017-07-13 16:07:06
 */

import Vue from 'vue';
import Meta from 'vue-meta';
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync';
import App from './index.vue';
import '~/utils/parabola';
// import '~/lib';
import './js/layer.js';
import './css/main.css';
Vue.debug = ProjectConfig.debug;
Vue.config.productionTip = false; //将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
Vue.use(Meta);
sync(store, router);
router.beforeEach((route, redirect, next) => {
    window.scrollTo(0, 0);
    next();
});
const app = new Vue({
    router,
    store,
    render: page => page(App),
    http: {
        header: {
            'Content-Type': 'application/json'
        }
    },
    ...App
});
app.$mount('#app');