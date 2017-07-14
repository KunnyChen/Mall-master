/**
 * @Author: Mink
 * @Contact: mink@feiruo.moe
 * @Description: 数据存取和操作
 * @Date: 2017-05-08 10:28:16
 * @Last Modified by:   lenovo
 * @Last Modified time: 2017-07-13 16:17:12
 */
import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';
import utils from '~/utils';
Vue.use(Vuex);

function SendConf(config) {
    var obj = utils.clone(DefConf, config || {});
    return obj;
}

export default new Vuex.Store({
    // plugins: [logger],
    state: {
        ThisPage: "index",
        showHead: true,
        showClose: true,
        navEdit: '',
        title: ProjectConfig.app,
        canSearch: false,
        showFoot: true,
        urlItems: [{ linkTo: '/index', name: '首页', iconClass: 'icon-index' }]
    },
    modules: {
        Index: {
            namespaced: true,
            state: {
                Index: {}
            },
            actions: {
                async Index({ commit, state, rootState: { route: { fullPath } } }, config) {
                    const path = fullPath;
                    var obj = SendConf(config);
                    const { extrDatas, code } = await api.index(obj);
                    if (extrDatas && code) { commit('Index', { ...obj, extrDatas, code, path }); }
                }
            },
            mutations: {
                Index(state, { extrDatas, pageNo, code, path }) { state.Index = extrDatas; }
            },
            getters: {
                Index(state) { return state.Index; }
            }
        },

    }
});