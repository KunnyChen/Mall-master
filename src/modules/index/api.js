/*
 * @CreateTime: May 16, 2017 5:07 PM
 * @Author: Kunny
 * @Last Modified By: Kunny
 * @Last Modified Time: May 25, 2017 10:11 AM
 * @Description: API等设置
 */
import api from '~/lib/api';
var apis = {
    debug: ProjectConfig.debug,
    app: ProjectConfig.app,
    host: ProjectConfig.host,
    api: ProjectConfig.api,
    timeout: ProjectConfig.timeout
};

function MakeApi(a, p) {
    apis[a] = function(data) {
        return this.get(this.api + p, data);
    };
}
for (var a in ProjectConfig.apis) {
    MakeApi(a, ProjectConfig.apis[a]);
}
for (var a in apis) {
    api[a] = apis[a];
}
export default api;