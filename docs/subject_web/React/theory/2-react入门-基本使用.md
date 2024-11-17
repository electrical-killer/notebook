---
id: 1731505427
slug: /subject_web/React/theory/1731505427
title: react入门-基本使用
date: 2024-10-19
authors: Electrical Killer
tags: [js, react, 基本使用]
keywords: [js, react, 基本使用]
---

## 需要的JS库

- `react.js` React核心库( `react.development.js` )
- `react-dom.js` React对DOM的操作库( `react-dom.development.js` )
- `babel.min.js` JSX转换JS库 ( ES6转ES5 )

## 创建虚拟DOM的两种方式

- 直接使用JS创建虚拟DOM( **==知道即可, 不使用==** ) 

    - 相当于JSX被解释后, 浏览器用到的方式

    - 因为没有用到JSX语法, 无需使用`babel.min.js`库

    - 当虚拟DOM为多层标签嵌套, 会导致如下方式写起来头疼

        ```jsx
        const VDOM = React.createElement('xx',{id:'xx'},'xx')
        ```

- 直接使用JSX方式创建, 见实例, ==第一个React页面==

    - ```JSX
        <body>
            <div id="test"></div>
        
            <script type="text/javascript" src="./react.development.js" ></script>
            <script type="text/javascript" src="./react-dom.development.js" ></script>
            <script type="text/javascript" src="./babel.min.js" ></script>
        
            <script type="text/babel">
        
                /* 1. 创建虚拟DOM */
                // 注意不要写引号, 不是字符串, 需要被渲染为标签
                const VDOM = (
                	<h1>Hello, world!</h1>
                );
        
                /* 2. 渲染虚拟dom封面 ( 替换 ) */
                ReactDOM.render(VDOM, document.getElementById('test'));
                // 浏览器渲染后的结果, 便是上述JS语法创建的虚拟DOM
        
            </script>
        </body>
        ```

### 如上实例注意的点

- 三个JS库顺序不可颠倒, 必须是`核心库->DOM库->badel库`
- JSX语法标识, 一定是`text/babel`, 因为需要转换为Js格式
- 注意创建的虚拟DOM内容, `不要写引号, 不是字符串`, 需要被渲染为标签
- 替换方式的渲染虚拟DOM是唯一使用`document.getElementById()`方法的地方

### JSX的第一个页面问题

1. <img src="https://img.eksnotebook.com/images/202410191905143.png"/>
    - 浏览器自动发起的查询网站标签图标, 找不到
    - 浏览器只报一次
    - 后续添加

1. <img src="https://img.eksnotebook.com/images/202410212355637.png"/>
    - 因为JSX在使用`浏览器内的 babel`
    - 若代码量增加, 实时翻译不及时, 会导致页面白屏
    - 后续使用其他平台
2. <img src="https://img.eksnotebook.com/images/202410191906157.png"/>
    - 没有浏览器专用的`React`开发者工具

## 虚拟DOM与真实DOM关系

- 虚拟DOM最终会被React翻译为真实DOM, 呈现在界面上
- 变量类型
    - 虚拟DOM本质就是一般的Object对象
    - 真实DOM本质是标签
- 属性
    - 虚拟DOM比较“轻”, 仅用在React内部, 无需太多属性
    - 真实DOM一堆属性
    - 通过`debugger;`查看类型属性

