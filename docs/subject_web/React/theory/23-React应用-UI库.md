---
id: 1731847062
slug: /subject_web/React/theory/1731847062
title: React应用-UI库&修改webpack
date: 2024-11-17
authors: Electrical Killer
tags: [js, react, ReactUI, webpack]
keywords: [js, react, ReactUI, webpack]
---

## 流行的开源React UI组件库
### material-ui(国外)

- 官网: http://www.material-ui.com/#/
- github: https://github.com/callemall/material-ui

### ant-design(国内蚂蚁金服)
- 官网: https://ant.design/index-cn
- Github: https://github.com/ant-design/ant-design/


## antd使用经验

- 3.0版本文档, 写的比较详细
- 按需引入样式的库文档, [文档参考](https://3x.ant.design/docs/react/use-with-create-react-app-cn)

### 按需自定义主题方式

1. 安装依赖: `pnpm install react-app-rewired customize-cra babel-plugin-import less less-loader`

2. 修改package.json

    ```json
    ...
    "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    },
    ...
    ```

3. 根目录下创建config-overrides.js

    ```json
    //配置具体的修改规则
    const { override, fixBabelImports, addLessLoader} = require('customize-cra');
    module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            lessOptions:{
                javascriptEnabled: true,
                modifyVars: { '@primary-color': 'green' },
            }
        }),
    );
    ```

4. 不用单独在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉
