---
id: 1731505513
slug: /subject_web/React/theory/1731505513
title: React应用-案例-TodoList
date: 2024-11-2
authors: Electrical Killer
tags: [js, react, react案例]
keywords: [js, react, react案例]
---

##  todoList 案例

- [gitee仓库地址/test/todoList](https://gitee.com/electrical-killer/hello-react)

## 需求&展示

1. 显示所有todo列表
2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本
3. 且可以删除已完成内容

## 演示

<img src="https://img.eksnotebook.com/images/202411021814258.gif"/>

## 关键点

### 1. 编码规范:

- 引入文件顺序, ==`第三方上靠`, `自己下靠`, `CSS最后`==

### 2. CSS的模块化-新

> ==强烈推荐, 否则样式可能存在问题==

在 `案例-HelloWorld` 中, 介绍了组件的模块化编程
引入方式: 

```jsx
import footer from "./Footer.module.css"

<div className={footer.todo-footer}></div>
```

但是自从编译工程解决`error-030810C`问题后, 如上方法便不再好用了
新方式如下:

```jsx
import footer from "./Footer.module.css"

<div className={footer["todo-footer"]}></div>
```

### 3. 动态拆分初始化列表, 如何确定将数据放到那个组件的state中?

- 如果组件自己使用, 放到自己的state中
- 如果某些组件使用, 放到共同的父组件中( ==状态提升== )

### 4. 基于状态提升下的父子间通信

- 父组件给子组件传递数据: 通过props传递, 内容就是数据
- 子组件给父组件传递数据: 通过props传递, 内容是回调函数, 
    - 需要子组件在更新数据是调用父组件

### 5. 注意`defaultChecked`和`checked`区别

- defaultChecked: 该属性值仅在初始化时使用一次
- checked: 该值可以动态修改`checkbox`状态, 但是需要搭配`changed`使用

### 6. 状态在哪里, 操作方法就在哪里
