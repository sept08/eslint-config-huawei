# eslint-config-huawei
Huawei eslint rules

# 规则列表
*   基本规则：  "eslint-config-huawei"
*   vue规则：   "eslint-config-huawei/vue"

# 规则约定
1.  每条规则均有注释，注释包括存在意义，配置原因

# 使用说明
## 基本规则
### 安装
``` shell
npm install --save-dev eslint-config-huawei babel-eslint
```
### 配置方法
在项目根目录下创建`.eslintrc.js`，并复制以下内容：
``` javascript
module.exports = {
    extends: [
        'eslint-config-huawei',
    ],
    globals: {
        // 项目需要的全局变量，false指定变量为只读：
        //
        // _: false,
        // $: false
    },
    rules: {
        // 项目自定义规则配置
    }
};
```


## Vue规则
### 安装
