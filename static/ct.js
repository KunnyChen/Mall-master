/*
 * @CreateTime: Jun 7, 2017 10:02 AM
 * @Author: Kunny
 * @Last Modified By: Kunny
 * @Last Modified Time: Jun 7, 2017 6:26 PM
 * @Description: 外部配置文件
 */
var DefConf = {},
    parabola,
    isLogin = false,
    ProjectConfig = {
        debug: true,
        app: 'sellMall',
        host: window.location.host,
        api: 'http://localhost:8989/static/api/',
        // api: 'http://192.168.11.114:8989/static/api/',
        timeout: 3000,
        apis: {
            'index': 'index.json',
            'shop': 'shop.json',
        }
    };

if (window.chrome) { /**/ }
$(document).ready(function() {

});