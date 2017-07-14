/*
 * @Author: KunnyChen
 * @description: api组件化
 * @Date: 2017-07-14 11:10:41
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-07-14 15:04:27
 */
import axios from 'axios';
import qs from 'qs';
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
    if (isLoading) {
        isLoading.destroy && isLoading.destroy();
        isLoading = undefined;
    }
    if (response.status === 200 || response.status === 304) {
        return response;
    }
    tip('网络连接失败！(o´・ェ・｀o)', { TPL_MASK: "" });
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
    if (!/200|1061/.test(res.data.code)) {
        return tip(res.data.msg, { TPL_MASK: "" });
    }
    return res.data;
}
var api = {};
api.post = (url, data) => {
    url = /^(ht|f)tps?\:/i.test(url) ? url : this.api + url;
    return axios({
        method: 'POST',
        url,
        data: qs.stringify(data),
        timeout: this.timeout,
    }).then(checkStatus).then(checkCode);
};
api.get = (url, params) => {
    url = /^(ht|f)tps?\:/i.test(url) ? url : this.api + url;
    return axios({
        method: 'GET',
        url,
        params,
        timeout: this.timeout,
    }).then(checkStatus).then(checkCode);
};
api.put = (url, params) => {
    url = /^(ht|f)tps?\:/i.test(url) ? url : this.api + url;
    return axios({
        method: 'PUT',
        url,
        params,
        timeout: this.timeout,
    }).then(checkStatus).then(checkCode);
};
api.ajax = opt => {
    var opts = opt || {};
    if (!opts.url) {
        toast({
            mes: '请填写接口地址',
            timeout: 1500,
            icon: 'error'
        });
        return false;
    }
    axios({
        method: opts.type || 'post',
        url: opts.url,
        params: opts.data || {},
        headers: opts.headers || {},
        // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
        // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
        baseURL: '//',
        time: opts.time || 10 * 1000,
        responseType: opts.dataType || 'json'
    }).then(function(res) {
        if (res.status === 200) {
            if (opts.success) {
                opts.success(res.data, res);
            }
        } else {
            if (res.data.error) {
                opts.error(res.data.error);
            } else {
                toast({
                    mes: '好多人在访问呀，请重新试试',
                    timeout: 1500,
                    icon: 'error'
                });
            }
        }
    }).catch(function(error) {
        console.log(error);
        if (opts.error) {
            opts.error(error);
        } else {
            toast({
                mes: '好多人在访问呀，请重新试试',
                timeout: 1500,
                icon: 'error'
            });
        }
    });
};

export default api;