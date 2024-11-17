---
id: 1731505465
slug: /subject_web/React/theory/1731505465
title: 组件编程-类组件实例的refs
date: 2024-10-25
authors: Electrical Killer
tags: [js, react, ref]
keywords: [js, react, ref]
---

## ref概念

组件内的标签可以定义ref属性, 来标识自己

真实DOM中相当于属性 `ID`, 获取到 `ref` 属性, 就相当于 `document.getElementById()`

## (不推荐)字符串形式的ref

> 禹神总结, 效率不高
>
> 并且, 可能在未来版本移除
>
> ==建议使用 回调形式ref 或 `creatRef`==

### 自定义组件案例

> 点击按钮, 提示第一个输入框的值
>
> 第二个输入框失去焦点时, 提示输入框的值

```react
<script type="text/babel">

    class Demo extends React.Component{

        showData1 = ()=>{
            const {input1} = this.refs;
            alert(input1.value)
        }

        showData2 = ()=>{
            const {input2} = this.refs;
            alert(input2.value)
        }

        render(){
            return(
                <div>
                    <input type="text" ref="input1" placeholder="点击按钮提示信息"/>  &nbsp;  
                    <button onClick={this.showData1}>点击按钮提示左侧信息</button> &nbsp;
                    <input type="text" ref="input2" placeholder="失去焦点提示信息" onBlur={this.showData2}/>
                </div>
            )
        }
    }

    ReactDOM.render(<Demo/>, document.getElementById("test"))

</script>
```

- `alert()` - 提示框
- `placeholder` - input属性: 提示信息
- `onBlur` - 失去焦点事件
- &nbsp;`&nbsp;` - 空格

## 回调函数形式ref

### 优化内联回调组件案例

```react
<script type="text/babel">

    class Demo extends React.Component{

        showData1 = ()=>{
            alert(this.input1.value)
        }

        showData2 = ()=>{
            alert(this.input2.value)
        }

        render(){
            return(
                <div>
                    <input type="text" ref={c => this.input1 = c} placeholder="点击按钮提示信息"/>    
                    <button onClick={this.showData1}>点击按钮提示左侧信息</button>
                    <input type="text" ref={c => this.input2 = c} onBlur={this.showData2} placeholder="失去焦点后提示信息"/>    
                </div>
            )
        }
    }

    ReactDOM.render(<Demo/>, document.getElementById("test"))

</script>
```

- `ref={c => this.input2 = c}` 表示回调函数
    - `c => this.input2 = c;` - 完全体如下
        - `(c) => {this.input2 = c;}`
    - 表示将 `ref` 的返回的==标签内容传入当前类的新建的`input2属性`中==

### 关于内联回调ref的调用次数

<img src="https://img.eksnotebook.com/images/202410261904831.png"/>

### 类绑定式回调函数

- 关于定义成 `class` 的绑定函数的方式可以避免问题

    - ```jsx
        saveInput = (c)=>{
            this.input1 = c;
            console.log('@',c);
        }
        
        <input ref={this.saveInput} type="text"/>
        ```

## `createRef()`的使用

> `React.createRef()`调用后可以返回一个容器
>
> 该容器可以存储被ref所标识的节点
>
> 该容器是“专人专用”的, 多次使用会覆盖标签内容

```jsx
class Demo extends React.Component{

    input1 = React.createRef();

    showInfo = ()=>{
        console.log(this.input1.current.value);
    }


    render(){
        return (
            <div>
                <input type="text" placeholder="点击按钮提示数据" ref={this.input1}/>
                <button onClick={this.showInfo}>点击按钮提示数据</button>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElementById("test"))
```

## 强调Ref与事件处理

1. 通过onXxx属性指定事件处理函数(注意大小写)

    - 为了更好的兼容性, 内部事件重新封装

        > React使用的是自定义(合成)事件, 而不是使用的原生DOM事件

    - 为了的高效

        > 事件冒泡: React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) 

2. 不要过度使用ref
    - 当==发生事件的元素==, ==等于要操作的元素==, 可以省略 `ref` 
        - 通过`event.target`得到发生事件的DOM元素对象

## 补充JSX中标签注释方式

```jsx
{/* ... */}
```
