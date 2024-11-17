---
id: 1731505449
slug: /subject_web/React/theory/1731505449
title: 组件编程-类组件实例的state
date: 2024-10-21
authors: Electrical Killer
tags: [js, react, state]
keywords: [js, react, state]
---

## state概念

- state是组件对象最重要的属性, 值是对象( 包含多个key-value的组合 )
- 组件被称为 `状态机` , 通过更新组件的state来更新对应的页面显示( 重新渲染 )

## 关键点注意

- 组件中 `render` 方法中的this为组件实例对象
- 组件自定义的方法中, this为undefine, 如何解决
    - 强制绑定this, 通过函数对象的bind()
    - ==通过赋值语句+箭头函数==
- 组件中的state状态, 不能直接更改, 需要通过 `setState` 方法
    - 该方法是合并, 不是替换

## 实例: 展示动态天气信息

> 定义一个展示天气信息的组件
>
> 默认展示天气炎热或凉爽
>
> 点击组件切换天气信息

```jsx
<script type="text/babel">

    class Weather extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                isHot:true,
            }

            this.changeWeather = this.changeWeather.bind(this)
        }

        render(){
            const {isHot} = this.state;
            return <h2 onClick={this.changeWeather}>今天是个{isHot === true?"炎热":"凉爽"}的天气</h2>
        }

        changeWeather(){
            const isHot = this.state.isHot
            this.setState({isHot:!isHot})
        }
    }

    ReactDOM.render(<Weather/>, document.getElementById("test"))

</script>
```

- 构造器 `constructor` 调用几次?
    - 仅在 React new 组件实例对象时, 调用一次
- 构造器内部 `super` 与 `state` 赋值顺序
    - super 必须放到 state 上面
    - 其他代码逻辑无所谓
- 解决 changeWeather 自定义方法中 this 指向问题解决方法
    - `this.changeWeather = this.changeWeather.bind(this)`
    - 该方法先找到类方法 `changeWeather` , 再使用 `bind` 方法 copy 一个新副本, 并将该副本方法的 this 指向 Weather 类的实例
- `render` 调用几次?  ==1+n==
    - 初始化调用一次, 之后每次处理回调后的渲染, 调用一次
- `changeWeather` 自定义方法调用几次？
    - 点击几次事件, 就会调用几次回调
- `changeWeather` 自定义的方法放在哪里?
    - 放在 `Weather` 的原型对象上, 供实例使用
    - 但是由于该方法要作为 `onClick` 点击的回调, 所以==不是通过实例调用, 而是直接调用==
- 关于类中的方法, 均默认开启局部的严格模式`'use strict'`

## 简写state: 优化上述案例

```jsx
<script type="text/babel">

    class Weather extends React.Component{
        state = {
            isHot:true,
        }

        render(){
            const {isHot} = this.state

            return <h2 onClick={this.changeWeather}>今天的天气非常{isHot === true ? "炎热": "凉爽"}</h2>
        }

        changeWeather = ()=>{
            const isHot = this.state.isHot
            this.setState({isHot:!isHot})
        }
    }

    ReactDOM.render(<Weather/>, document.getElementById("test"))

</script>
```

- 创建组件时
    - 初始化状态, 利用赋值
    - 补充 `render()` , 注意必须要有返回值
    - 自定义方法, 解决其中的 `this` 问题, 利用赋值语句+箭头函数

- 最后渲染组件