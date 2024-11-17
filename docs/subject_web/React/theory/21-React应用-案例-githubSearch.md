---
id: 1731505524
slug: /subject_web/React/theory/1731505524
title: React应用-案例-githubSearch
date: 2024-11-9
authors: Electrical Killer
tags: [js, react, reach案例]
keywords: [js, react, reach案例]
---

##  githubSearch 案例

- [gitee仓库地址test/githubSearch](https://gitee.com/electrical-killer/test/githubSearch)

## 需求

1. 欢迎界面, 等待界面, 错误界面有相应的提示
    - 展示页面使用`bootstrap`样式
        - `npm install bootstrap`
2. 使用github数据请求接口请求github用户信息, `https://api.github.com/search/users?q=${keyWord}`
    - 该接口内部使用cors解决跨域问题, 但是一般上线的网站不搞这种方法, 不太安全 

## 演示

<img src="https://img.eksnotebook.com/images/202411101259121.gif"/>

## axios 实现

- 注意要引入 `axios` 库
    - `import axios from 'axios'`

<img src="https://img.eksnotebook.com/images/202411101307064.png"/>

## fetch 实现

<img src="https://img.eksnotebook.com/images/202411101305364.png" />

## 关键点总结

### 1. 设计规划

设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办

### 2. 消息订阅与发布

> - 先在`componentDidMount`中订阅, 后在`对应组件`中发布
>
> - 适用与任意组件间通信
>
> - 需要在组件`componentWillUnmount`卸载前取消订阅

- 使用到的库`pubsub-js`

    - `npm install “pubsub-js --save”`

- ```jsx
    // 引入
    import pubSub from 'pubsub-js'
    // 发布
    pubSub.publish('msg_search', {isFirst:false, isLoading:true})
    // 订阅
    this.token = pubSub.subscribe('msg_search', (_,data)=>{
                this.setState(data);
    // 取消订阅
    pubSub.unsubscribe(this.token)
    ```

### 3. fetch发送请求（关注分离的设计思想）

> - 另一种可以请求`XMLHttpRequest`的原生方法
>
> - [官网文档](https://github.github.io/fetch/)
> - [优秀博客](https://segmentfault.com/a/1190000003810652)

#### 特点

- fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
- 老版本浏览器可能不支持

### 4. 解构赋值+重命名

```jsx
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名

// githubSearch中的实例如下图
```

<img src="https://img.eksnotebook.com/images/202411101332319.png" />





