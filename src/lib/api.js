/*
 * @Author: KunnyChen
 * @description: api组件化
 * @Date: 2017-04-27 11:10:41
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-21 14:49:31
 */
import axios from 'axios';
var isLoading = false;
axios.interceptors.request.use(
    config => {
        if (!isLoading) {
            isLoading = loading('加载中，请稍后', { TPL_MASK: '' });
        }
        return config;
    },
    error => Promise.reject(error)
);
axios.interceptors.response.use(response => response, error => Promise.resolve(error.response));

function checkStatus(response) {
    isLoading.destroy && isLoading.destroy();
    isLoading = false;
    if (response.status === 200 || response.status === 304) {
        return response;
    }
    return {
        data: {
            code: false,
            msg: response.statusText,
            extrDatas: response.statusText
        }
    };
}

function checkCode(res) {
    if (typeof res.data == 'string') {
        res.data = JSON.parse(res.data);
    }
    if (res.data.code != 200) {
        tip(res.data.msg);
    } else {
        return res.data;
    }
}
export default {
    post: function(url, params) { return this.ajax(url, params); },
    get: function(url, params) { return this.ajax(url, params, 'GET'); },
    put: function(url, params) { return this.ajax(url, params, 'PUT'); },
    ajax: function(url, params, method) {
        var opt, defMethod = "POST";
        if (typeof url == 'string') {
            method = method || defMethod;
            url = /^(ht|f)tps?\:/i.test(url) ? url : this.api + url;
            opt = {
                method,
                url,
                params,
                timeout: this.timeout,
            };
        } else if (typeof url == "object") {
            opt = opt || {
                method: opt.type || defMethod,
                url: opt.url,
                params: opt.data || {},
                headers: opt.headers || {},
                // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
                // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
                baseURL: '//',
                time: opt.time || 10 * 1000,
                responseType: opt.dataType || 'json'
            };
        }
        return axios(opt).then(checkStatus).then(checkCode);
    }
};

