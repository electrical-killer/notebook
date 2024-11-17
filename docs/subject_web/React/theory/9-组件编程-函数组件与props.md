---
id: 1731505459
slug: /subject_web/React/theory/1731505459
title: 组件编程-函数组件与props
date: 2024-10-24
authors: Electrical Killer
tags: [js, react, props]
keywords: [js, react, props]
---

因为函数可以传参, 因此, 函数组件也可以拥有 `props` 属性

废话不多说, 直接上实例

```react
<script type="text/babel">

    function Person (props){
        const {name, age, sex} = props;
        return (
            <ul>
                <li>姓名: {name}</li>
                <li>性别: {sex}</li>
                <li>年龄: {age+1}</li>
            </ul>
        )
    }

    Person.propTypes = {
        name:PropTypes.string.isRequired,
            age:PropTypes.number,
                sex:PropTypes.string,
    }

    Person.defaultProps = {
        sex: '男',
            age: 18
    }

    ReactDOM.render(<Person name="jack"/>, document.getElementById("test"));

</script>
```

- 函数组件之间传递 `props` 属性, 作为参数
- 没有关键字 `static`
    - `Person.propTypes`
    - `Person.defaultProps`