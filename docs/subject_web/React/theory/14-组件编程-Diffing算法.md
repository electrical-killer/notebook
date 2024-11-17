---
id: 1731505485
slug: /subject_web/React/theory/1731505485
title: 组件编程-Diffing算法
date: 2024-11-2
authors: Electrical Killer
tags: [js, react, diffing]
keywords: [js, react, diffing]
---

## 案例:验证虚拟DOM Diffing算法的存在

<img src="https://img.eksnotebook.com/images/202411021133238.gif" />

```jsx
class Time extends React.Component{
    state = {
        date:new Date(),
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({date:new Date()})
        }, 1000);
    }

    render(){
        const {date} = this.state;

        return(
            <div>
                <h1>hello,</h1>  
                <input type="text"/>
                <span>!, it is {date.toTimeString()}</span>
            </div>
        )
    }
}

ReactDOM.render(<Time/>, document.getElementById("test"))
```

## 逻辑原理图

<img src="https://img.eksnotebook.com/images/202411021717605.png"/>

- 注意虚拟DOM对比的最小粒度为一个==标签==

