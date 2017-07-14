# Mall

基于`vue2 + vue-router + vuex`而组成的多页配置实例

包含 纯单页, 基于 vue-router 的单页, 基于 vue-router + vuex 的单页, 多种模式

在 module 文件夹中只留一个模块, 就变成 纯`SPA`

所有模块均带修改head里的title

```

// 安装依赖
npm i

// 生产模式
npm run build

// 开发模式
npm run dev
```

# 目录结构
- /build/          = webpack配置文件目录
- /dist/           = webpack编译后生成文件目录
- /src/libs/        = VUE项目主要库和类
- /src/utils/        = 功能辅助函数
- /src/config.js     = 主要配置文件 包含接口等
- /src/assets/     = 静态文件目录
- /src/components/ = 公共组件目录
- /src/modules/    = 页面模块
- /src/modules/*/index.html    = 页面模板
- /src/modules/*/index.js    = 初始化入口
- /src/modules/*/index.vue    = 入口VUE
- /src/modules/*/router.js    = 路由
- /src/modules/*/store.js    = Vuex 数据存取和控制
- /src/modules/*/page    = 多页面模块之页面
- /src/modules/*/components    = 多页面模块之组件
- /static/         = 静态文件目录
- /static/api         = mock数据
- /node_modules/         = nodejs依赖
