---
id: 1731505528
slug: /subject_web/React/theory/1731505528
title: React应用-路由引入&案例
date: 2024-11-10
authors: Electrical Killer
tags: [js, react, 路由, 案例]
keywords: [js, react, 路由, 案例]
---

## What is SPA

- 单页 Web 应用( single page web application )
- 整个==应用只有一个完整的页面==, 也就是一个HTML
- 点击页面中的连接, ==不会刷新页面==, 只会做页面得到==局部更新==
- 数据都需要通过`ajax`请求回去, 并在前端==异步展现==

## What is React Route

- 一个路由就是一个映射关系 ( key: value )
    - key: IP或域名后的地址
    - value: 可能是function, 也可能是component

### 前端路由

> - 路由的基本原理基于浏览器的windows的BOM对象的history属性, 但是BOM的原生操作接口不友好, 因此, 借助第三方库`history.js`操作BOM属性, 从而实现前端路由
> - BOM的history是一个==栈结构==

- 如果==**value内容对应的是一个组件Component**==, 那么该路由为前端路由, 也叫浏览器路由, 用于页面展示内容
- 注册方式: `<Route path="/test" component={Test}>`
- 工作原理: 当==**点击路由链接**==后, 浏览器的path变为/test时, 当前路由组件就会变为Test组件

### 后端路由

> 相关案例: 与githubSearch案例相关的代理服务器实现
>
> 相关`.zip压缩包`地址:https://img.eksnotebook.com/images/202411101641169.zip
>
> 当前没有NAS, 所以就用这个凑乎一下

- 如果==**value内容对应的是一个function**==, 那么该路由为后端路由, 用于处理客户端提交的请求
- 注册方式: `router.get(path, function(req, res))`
- 工作原理: 当node收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来请求处理, 返回响应数据

## react-router-dom

> - Router: 路由器
>     - 比如小米路由器
> - Route: 路由
>     - 比如小米路由器后面的插口
>     - 需要使用`Router`管理`Route`
> 
> - react-router, 有三个库, 分别对应不同场景
>
>     - ==**给web专用( 当前的库, 更直接, 简单 )**==
>
>     - 给native专用
>
>     - 给两者通用

1. react的一个插件库
2. 专用来实现一个SPA应用
3. 基于react的项目基本都会用到此库

### 主要API

```jsx
// 内置组件
// 路由器
<BrowserRouter/> // 地址后面有'/'
<HashRouter/> // hash值( 锚点 ), 地址后面有'#' 后面内容不加到请求中, 

<Redirect/>
<Link/> // 编写路由链接
<Route/> // 注册路由

<NavLink/> // Link的升级版, 可以高亮呦~~
<Switch/> // 包裹后, 仅匹配一次, 提高效率

// 其他
// history对象
// match对象
// withRouter函数
```

## 天禹老师课程小插曲

<img src="https://img.eksnotebook.com/images/202411101655622.png" />

## <案例1>路由基本使用

> - 下载`react-router-dom`
> - 使用==本地`bootstrap.css`文件==

<img src="https://img.eksnotebook.com/images/202411102219081.gif" />

### 关键点

1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签
    - `<Link to="/xxxxx">Demo</Link>`
3. 展示区写Route标签进行路径的匹配
    - `<Route path='/xxxx' component={Demo}/>`
4. `<App>`的最外侧包裹了一个`<BrowserRouter>`或`<HashRouter>`
    - 两个路由器无法通信

### 为什么NavLink默认有高亮?

NavLink 作为 Link 的升级版, 可以传入一个class属性:`activeClassName`
而`NavLink`默认属性与`bootscrap.css`的高亮正好一致, 都是`active`
因此使用`NavLink`后, 就产生了高亮效果

那如果传入自定义的`activeClassName`??

- 创建一个最高优先级的样式 **`!important`**

    > ( bootscrap.css比较优先, 会产生被动替换 )

    - ```css
        .demo_css{
            background-color: reg(209, 137, 4) !important;
            color: white !important;
        }
        ```

- 使用`NavLink`

    ```jsx
    <NavLink activeClassName="demo_css" className="list-group-item" to="/home">Home</NavLink>
    ```

### 封装样式NavLink为一般组件

==关于如何接标签体内容??==
其实, 标签体也是一种特殊的标签属性, 如下图内容

<img src="https://img.eksnotebook.com/images/202411102046881.png" />

### 路由组件&一般组件区别

#### 存放位置&调用不同

```jsx
// 一般组件: src/Components
<Demo/>

// 路由组件: src/Pages
<Link to="/demo">Demo</Link>
<Route path="/demo" component={Demo}/>
```

#### 收到的props不同

```jsx
history:
        /*  */ go: ƒ go(n)
        /* 后退 */ goBack: ƒ goBack()
        /* 前进 */ goForward: ƒ goForward()
        /* 添加路径 */ push: ƒ push(path, state)
        /* 替换栈内容 */ replace: ƒ replace(path, state)
location:
        /*  */ pathname: "/about"
        /*  */ search: ""
        /*  */ state: undefined
match:
		/* 模糊&精准匹配 */ isExact: true
        /*  */ params: {}
        /*  */ path: "/about"
        /*  */ url: "/about"
```

### Switch的使用

- 通常情况下，path和component是一一对应的关系

- Switch可以提高路由匹配效率(单一匹配)

    <img src="https://img.eksnotebook.com/images/202411102057073.png"/>

### 解决样式丢失问题

> <img src="https://img.eksnotebook.com/images/202411102134419.png"/>
>
> 当使用二级路径后, 使用组件过后, 刷新界面
> 会导致相对路径下的`bootstrap`样式丢失

当不加`%PUBLIC_URL%`, 更换路由多级路径后, 
再次刷新时, 会导致请求文件的相对路径改变
导致文件丢失, 默认加载`index.html`

解决方案

- 使用路径`/css/bootstrap.css`
- 使用路由器`<HashRouter/>
    - 原因是该路由器`#`号后方内容不带入请求
-  ==仅适用于脚手架==
    <img src="https://img.eksnotebook.com/images/202411102119138.png"/>

### 路由的模糊与严格匹配

- ==默认使用的是模糊匹配==
    - 【输入的路径】必须包含要【匹配的路径】，==且顺序要一致==
- 开启严格匹配：
    - `<Route exact={true} path="/about" component={About}/>`
    - `<Route exact path="/about" component={About}/>`
    - 严格匹配不要随便开启，需要再开，==有些时候开启会导致无法继续匹配二级路由==

### 重定向Redirect

<img src="https://img.eksnotebook.com/images/202411102151823.png"/>

一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

## <案例2>路由嵌套使用

<img src="https://img.eksnotebook.com/images/202411102217905.gif" />

### 嵌套路由使用说明

1. 路由的路径匹配, 都是从注册顺序比较的
2. 注册子路由时要写上父路由的path值

## <案例3>向路由组件传递参数数据

<img src="https://img.eksnotebook.com/images/202411101637597.gif" />



## <案例4>多种路由跳转方式

<img src="https://img.eksnotebook.com/images/202411101637833.gif" />
