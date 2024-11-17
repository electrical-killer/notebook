---
id: 1731505433
slug: /subject_web/React/theory/1731505433
title: react入门-JSX
date: 2024-10-19
authors: Electrical Killer
tags: [js, react, JSX]
keywords: [js, react, JSX]
---

## JSX介绍

- JSX全称`JavaScript XML`

- React定义的一种类似XML的JS扩展语法( JS + XML)
    `React.createElement(component, props, ...children)`方法的语法糖
    
    - 	> 关于`XML`, ==早期用于存储和传输数据==, 目前大部分已被JSON代替
        > - `parse` JSON转JS对应的数组和对象
        > - `stringfy` JS中的数组和字符串快速转换JSON
        >
        > 目前类似还在使用的场景: 微信公众号, 微信开发者工具...
        >
        > ```XML
        > <student>
        > 	<name>Tom</name>
        >     <age>19</age>
        > </student>
        > ```
        >
        > ```json
        > "{"name":"Tom","age":19}"
        > ```

## JSX基础语法注意内容

```jsx
<style>
    .title{
        background-color: orange;
        width: 200px;
    }
</style>

<script type="text/babel">
    const myid = "aTgUigu";
    const mydata = "hello, atguigu";

    const VDOM = (
    <div>
        <h2 className="title">
            <span className={{ color: "white", fontSize: "29px" }}>
                {mydata.toLowerCase()}
            </span>
        </h2>
        <h2 className="title">
            <span className={{ color: "white", fontSize: "29px" }}>
                {myid.toUpperCase()}
            </span>
        </h2>
    </div>
    );

    /* 渲染虚拟DOM */
    ReactDOM.render(VDOM, document.getElementById("test"));
</script>
```

- 定义虚拟DOM时, 右值为标签, 不是字符串, 不用加引号
    - 当标签==插入JS表达式时, **使用{}**==
        - 不能插入
    - 当标签==插入多行HTML代码时, **使用()**==
- 样式类名指定不用class, 要用`className`, 区分ES6的类
    - 当类名为内联样式式, 要使用=={{key:value}}==形式表示( CSS的样式 )
        - 第一个{}, 表示插入JS表达式
        - 第二个{}, 对象的{}, 也是CSS样式的双引号
- 只有一个根标签
- 标签必须闭合, 若单标签, 需要在尾部添加结束符`/`
- 标签首字母
    - 小写字母开头, 对比html同名元素, 无同名, 报错
    - 大写字母开头, React当作组件去渲染, 若没定义组件, 则报错

### JS中代码块与表达式的区别

- 表达式: 一个表达式只会产生一个值, 可以放到任意需要值的地方
    - `a`
    - `a+b`
    - `demo()`
    - `arr.map()` 遍历数组
    - `function test(){}`
- 代码: 没有返回值
    - `if(){}`
    - `for(){}`
    - `switch(){case:xxxx}`

## 小练习:模拟数据动态插入无序列表

```jsx
<script type="text/babel">
    const arry = [1, 2, 3, 4, 5];

    const VDOM = (
    <div>
        <h1>前端React框架</h1>    
        <ul>
            {
                arry.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
    )

    ReactDOM.render(VDOM, document.getElementById('test'))
</script>
```
