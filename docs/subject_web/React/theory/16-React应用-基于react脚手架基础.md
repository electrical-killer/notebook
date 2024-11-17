---
id: 1731505495
slug: /subject_web/React/theory/1731505495
title: React应用-基于react脚手架基础
date: 2024-11-2
authors: Electrical Killer
tags: [js, react, 脚手架]
keywords: [js, react, 脚手架]
---

## create-react-app创建应用

### react脚手架

- xxx脚手架: 用来帮助快速创建一个基于xxx库的模板项目

    - 其中包含了所有需要的配置( `语法检查` `jsx编译` `devServer` … )

    - 安装好所有所需的依赖
    - 可以直接运行一个简单的效果

- react提供了一个创建react项目的脚手架库: `create-react-app`

- 项目的整体技术架构为: ==`react` + `webpack` + `es6` + `eslint`==

- 使用脚手架开发的项目的特点为:
    - 模块化
    - 组件化
    - 工程化

### 创建并启动

1. ```powershell
    # 前提安装好node.js环境
    # 全局安装
    npm i -g create-react-app
    ```

2. ```powershell
    # 创建hello-creat工程模板
    create-react-app hello-react
    # 打开
    cd hello-creat
    ```

3. ```powershell
    # 启动项目
    npm start
    ```

<img src="https://img.eksnotebook.com/images/202411021340029.gif"/>

### 工程目录结构

<img src="https://img.eksnotebook.com/images/202411021353977.png"  />
