---
id: 1731505490
slug: /subject_web/React/theory/1731505490
title: 组件编程-遍历列表的key
date: 2024-11-2
authors: Electrical Killer
tags: [js, react, key]
keywords: [js, react, key]
---

## 经典面试题
1. `react/vue` 中的 `key` 有什么作用?
2. `key` 的内部原理是什么?
3. 为什么遍历列表时, `key` 最好不要用`index`?

### 虚拟DOM中key的作用

key就是虚拟DOM对象标识, 渲染前, 用于虚拟DOM diff 时的对比

### 虚拟DOM中key的原理

当状态中的数据发生变化时, `react` 会根据 ==`新数据` 生成 `新的虚拟DOM`==, 随后 `React` 进行==`新虚拟DOM` 与 `旧虚拟DOM`== diff比较, 规则如下

- 旧虚拟DOM中找到与新虚拟DOM相同的 `key`
    - 若虚拟DOM中的内容==没变==, ==**使用之前**==的真实DOM
    - 若虚拟DOM中的内容==变了==, ==**替换页面**==的真实DOM
- 旧虚拟DOM没有找到与新虚拟DOM相同的 `key`
    - 根据数据创建的新虚拟DOM, 渲染到页面

### 当key使用index会造成的问题

> 分不同场景使用

#### 严重的效率问题

- 若对数据进行: `逆序添加`, `逆序删除`…等破快顺序的操作
    - 会导致旧的真实DOM, 没必要的更新, ==**造成效率低**==
    - 

#### 界面显示问题

- 如果结构中存在输入类DOM
    - 会导致页面数据错误显示

#### 也可以使用index

- 若==没有上述的操作和内容==, 仅作为渲染列表展示, 使用index没有问题
    - 比如顺序添加展示

## 开发中如何选择key

- 最好使用每条数据的唯一标识, 比如
    - 手机号
    - 身份证号
    - 学号
    - …
- 只进行简单的数据展示, 使用index也OK

## 上述问题案例: 人员展示信息

### 需求

1. 默认展示两个人员信息
2. 增加一个按键, 手动添加一个新的人员信息

<img src="https://img.eksnotebook.com/images/202411021255540.gif" />

### 实现

```jsx
<script type="text/babel">

    class Person extends React.Component{

        state = {
            persons:[
                {id:1, name:"Tom", age:36},
                {id:2, name:"Arther", age:40},
            ]
        }

        addJohn = ()=>{
            const per = {id:3, name:"John", age:35};

            this.setState({
                persons:[per, ...this.state.persons]
            })
        }

        render(){
            return (
                <div>
                    <h2>人员展示信息</h2>
                    <button onClick={this.addJohn}>按钮添加John信息</button>
                    <h3>使用index展示信息</h3>
                    <ul>
                        {
                            this.state.persons.map((personObj, index)=>{
                                return(
                                    <li key={index}>{personObj.name}:{personObj.age} <input type="text"/></li>
                                )
                            })
                        }    
                    </ul>
                    <hr/>
                    <hr/>
                    <hr/>
                    <h3>使用id展示信息</h3>
                    <ul>
                        {
                            this.state.persons.map((personObj)=>{
                                return(
                                    <li key={personObj.id}>{personObj.name}:{personObj.age} <input type="text"/></li>
                                )
                            })
                        }    
                    </ul>
                </div>
            )
        }

    }

    ReactDOM.render(<Person/>, document.getElementById("test"))

</script>
```

