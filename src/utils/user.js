/*
 * @Author: Mink
 * @description: 用户管理模块
 * @Date: 2017-05-06 12:06:52
 * @Last Modified by: Mink
 * @Last Modified time: 2017-05-06 12:07:30
 */
import api from './api'
import ut from './'

export default {
    sendVerifyCode(phone) { // send verify code by phone
        var param = {
            phone: phone
        }
        return api.getVerifyCode(param)
    },
    getExchangeCodeStatus(code) { // verify exchange code is valid or not
        var param = {
            channelcode: code
        }
        return api.checkExchangeCode(param)
    },
    login(phone, code, unionid) { // sign in or sign on
        var that = this
        var isSignon = false
        // try get unionid form cookie
        //  if(!unionid)
        //      unionid = util.getCookie("m29")||'';
        // validate code
        return that.verifyCode(phone, code)
            .then(function() {
                return that.checkUser(phone)
            }, function(res) {
                console.log(res)
            })
            .then(function(data) {
                if (data.check == 'T') {
                    isSignon = true
                    data.token && util.setCookie("m28", data.token || '')
                    data.unionid && util.setCookie("m29", data.unionid || '')
                    return data
                } else if (data.check == 'F' && data.token) {
                    isSignon = true
                    return that.bindUserPhone(phone, unionid)
                } else if (data.check == 'F' && !data.token) {
                    // no token
                    return that.bindUserPhone(phone, unionid)
                }
            }, function(res) {
                console.log(res)
            })
            .then(function(data) {
                data.token && util.setCookie("m28", data.token || '')
                data.isSignon = isSignon
                return data // return a Promise
            })
    },
    verifyCode(phone, code) { // validate the code
        var param = {
            phone: phone,
            code: code
        }
        return new Promise(function(resolve, reject) {
            api.verifyCode(param)
                .then(function(res) {
                    if (res && res.data.success) {
                        resolve('验证码验证成功')
                    } else {
                        alert('验证码验证失败!')
                        reject('验证码验证失败')
                    }
                })
        })
    },
    checkUser(phone) { // check if user bind
        var param = {
            phone: phone,
            ostype: 3
        }
        return new Promise(function(resolve, reject) {
            api.checkBind(param)
                .then(function(res) {
                    var data = res.data
                    if (data.success) {
                        resolve(data)
                    } else {
                        reject("接口调用失败！")
                    }
                }, function(res) {
                    reject("接口调用失败！")
                })
        })
    },
    bindUserPhone(phone, unionid) {
        var param = {
            phone: phone,
            ostype: 3
        }
        if (unionid) {
            param.unionid = unionid
        }
        return new Promise(function(resolve, reject) {
            api.bindPhone(param).then(function(res) {
                var data = res.data
                if (data.token) {
                    resolve(data)
                } else {
                    alert("没有token!")
                    reject("没有token!")
                }
            }, function(data) {
                reject(data.errmsg)
            })
        })
    },
    //  登陆
    userLogin(phone, code, unionid, channelid, fn, errFn) { //  sign in or sign on
        var that = this
        var result = {
            token: '',
            unionid: '',
            phone: phone,
            isSignon: false
        }
        var isBind = false
        var isReg = false
        // check T F  | success true false
        // try get unionid form cookie
        //  if(!unionid)
        //      unionid = util.getCookie("m29")||'';
        that.getVerifyCodeStatus({
            phone: phone,
            code: code
        }, function(res) {
            that.getCheckUserStatus({
                phone: phone
            }, function(res) {
                util.setCookie("phone", phone || '')
                if (res.check == 'T') {
                    res.token && util.setCookie("m28", res.token || '')
                    res.unionid && util.setCookie("m29", res.unionid || '')
                    result.isSignon = true
                    result.token = res.token
                    result.unionid = res.unionid
                    if (fn) { fn(result) }
                    if (errFn) { errFn() }
                    return
                } else if (res.check == 'F' && res.token) {
                    result.isSignon = true
                    isBind = true
                    isReg = true
                    if (!unionid) {
                        unionid = util.getCookie("m29") || ""
                    }
                    res.token && util.setCookie("m28", res.token || '')
                    result.token = res.token || util.getCookie("m28")
                    if (fn) {
                        fn(result)
                    }
                } else if (res.check == 'F' && !res.token) {
                    isReg = false
                    isBind = true
                }
                if (!isReg) {
                    var param = {
                        phone: phone,
                        unionid: unionid,
                        channelid: channelid
                    }
                    that.setUserPhoneBind(param, function(res) {
                        res.token && util.setCookie("m28", res.token || '')
                        result.token = res.token || util.getCookie("m28")
                        result.unionid = unionid || ''
                        if (fn) { fn(result) }
                    }, errFn)
                }
            }, errFn)
        }, errFn)
    },
    //  获取验证码验证状态
    getVerifyCodeStatus(param, fn, errFn) {
        var args = {
            phone: param.phone,
            code: param.code
        }
        api.verifyCode(args)
            .then(function(res) {
                res = res.data || {}
                if (!res.success) {
                    if (errFn) { errFn('验证码验证失败!') }
                    return alert('验证码验证失败!')
                }
                if (fn) { fn(res) }
            }, function(res) {
                if (errFn) { errFn('调用验证码验证接口失败！') }
                return alert('调用验证码验证接口失败！')
            })
    },
    //  获取绑定用户状态
    getCheckUserStatus(param, fn, errFn) {
        var args = {
            phone: param.phone,
            ostype: 3
        }
        api.checkBind(args)
            .then(function(res) {
                res = res.data || {}
                if (!res.success) {
                    if (errFn) { errFn('获取绑定用户信息失败!') }
                    return alert('获取绑定用户信息失败!')
                }
                if (fn) { fn(res) }
            }, function(res) {
                if (errFn) { errFn('调用获取绑定用户信息接口失败！') }
                return alert('调用获取绑定用户信息接口失败！')
            })
    },
    //  绑定用户
    setUserPhoneBind(param, fn, errFn) {
        var args = {
            phone: param.phone,
            ostype: 3,
            comefrom: param.channelid
        }
        if (param.unionid) { args.unionid = param.unionid }
        api.bindPhone(args)
            .then(function(res) {
                res = res.data || {}
                if (!res.token && !util.getCookie("m28")) {
                    if (errFn) { errFn('未获取到用户Token信息!') }
                    return alert('未获取到用户Token信息!')
                }
                if (fn) { fn(res) }
            }, function(data) {
                if (errFn) { errFn('调用绑定用户信息接口失败！') }
                return alert('调用绑定用户信息接口失败！')
            })
    },
    //  验证用户绑定状态
    checkUserBindStatus(param, fn, errFn) {
        var args = {
            phone: param.phone,
            ostype: 3
        }
        var that = this
        api.checkBind(args)
            .then(function(res) {
                res = res.data || {}
                if (res.check == 'T' && res.token) {
                    res.token && util.setCookie("m28", res.token || '')
                    res.unionid && util.setCookie("m29", res.unionid || '')
                    if (fn) { fn(res) }
                } else if (res.check == 'F' && res.token) {
                    that.setUserPhoneBind({
                        phone: param.phone,
                        unionid: ''
                    }, function(data) {
                        data.token && util.setCookie("m28", data.token || '')
                        if (fn) { fn(res) }
                    }, errFn)
                } else {
                    if (fn) { fn(res) }
                }
            }, function(res) {
                if (errFn) { errFn('调用获取绑定用户信息接口失败！') }
                return alert('调用获取绑定用户信息接口失败！')
            })
    }
}