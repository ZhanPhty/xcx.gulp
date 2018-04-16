# 微信小程序前端框UI架

> weui前端框架

## 说明
基于小程序官方设计规范

规范说明：[https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017118][1]

文档github： [https://github.com/Tencent/weui-wxss][2]




## 目录结构
- source/ 
	- 源代码根目录

    - less/
        - 存放 .wxss 源码（使用less语法编译）

    - images/
        - 存放 图片文件

    - doc/
        - 文档说明
    
    - gulp/
        - gulp指令目录，存放gulp配置和代码文件
    
    - gulpfile.js
        - gulp 配置文件


### 更新gulp以及npm包
 1. `cnpm install rimraf -g` 安装rimraf
 2. `rimraf node_modules` 删除旧版本的node_modules包
 4. `cnpm install` 安装新版本的npm



### 版本修改记录

 1. 2017-11-29 1.0.0：首发版本


### 联系
by.zhanpenghui


  [1]: https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017118
  [2]: https://github.com/Tencent/weui-wxss
