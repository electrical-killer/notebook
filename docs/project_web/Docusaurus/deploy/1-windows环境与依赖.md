---
id: 1731504810
slug: /project_web/Docusaurus/deploy/1731504810
title: windows环境与依赖
date: 2024-09-09
authors: Electrical Killer
tags: [project, Docusaurus, deploy]
keywords: [project, Docusaurus, deploy]
---



无意间看到一个个人博客, https://kuizuo.cn/, 做的是真不错

这次决定再魔改一个, 并以此为点, 开启我的"博客副业"

<img src="https://img.eksnotebook.com/images/image-20240908085411308.png" alt="kuizuo.blog"/>

<!-- truncate -->



## 博客可以带来什么

1. 思路整理 & 复盘总结
2. 检验我们对内容是否真的搞明白了
3. 随时查阅的干货手册
4. 来源于过程的成就感
4. 甚至可以给其他人一定的帮助

## 介绍一下主角 Docusaurus

一个[静态网站生成器](https://docusaurus.io/), 是用`React`写的，编译成是静态的 `HTML` `css`, 最最最吸引我的还是她支持`MarkDown`

- 比较 `wordpress` , 他在配置, 资源上更简单, 更轻量
- 比较 `hexo` , 个性化的主题, 替换起来也方便

## 环境依赖搭一下

因为他是个`node`项目, 需要先安装一下`node js`环境, 之后需要安装包管理, 用于源码编译过程, 常用的工具包括`npm` `yarn`

`Nodejs`的安装, [访问官网的方法](https://nodejs.org/en/download/package-manager)

- ```powershell
    winget install Schniz.fnm  # installs fnm (Fast Node Manager)
    
    fnm env --use-on-cd | Out-String | Invoke-Expression  # configure fnm environment
    
    fnm use --install-if-missing 20  # download and install Node.js
    
    node -v # should print `v20.17.0`  # verifies the right Node.js version is in the environment
    
    npm -v # should print `10.8.2`  # verifies the right npm version is in the environment
    ```

- **这里要注意, 官网命令行安装后, 并没有把`Node Manager-fnm`配置到全局环境变量中**, 更换shell窗口会造成`npx` `npm`等基于`nodejs`的工具使用报错

    - 解决1. 每个新的shell窗口执行`fnm env --use-on-cd | Out-String | Invoke-Expression` 
    - ==解决2. 使用安装包重新安装一次`node.js`==
        - 现在看来, 能省不少时间...........................

`npm`是`Windows`自带的, 不需要安装, 关于`yarn`的安装方法和与`npm`对比优势, [访问文章:yarn的安装与配置](https://blog.csdn.net/m0_61505785/article/details/140599146?)

因为写这篇文章时我已经选好我要魔改的目标, 他是用`pnpm`管理, 所以这里先把`pnpm`安装配置一下, [访问文章:`pnpm`的安装与使用](https://juejin.cn/post/7037480024106074148)

## Demo 跑起来

1. 先安装`Docusarus`，它有一个脚手架，原本是一个`node`的全局库, 现在利用`npx`直接简单安装`Docusarus`并创建咱们的网站
   ```powershell
   npx @docusaurus/init@latest init [name] [template]
   # name: 项目名
   # template: 官方模板
   ```

   ```power
   npx @docusaurus/init@latest init demo-blog classic
   ```

2. `cd demo-blog`

3. 首次生成的工程中没有`yarn.lock`文件, 需要执行`yarn`生成依赖文件

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-08_11-36-32.png" alt="creat yarn.lock"  />

4. 之后执行`yarn start`便可以到浏览器中访问了

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-08_11-40-28.png" alt="yarn start"  />

5. 一版会自动弹出浏览器, 如果没有, 访问本地端口:3000

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-08_11-42-52.png" />

6. 之后便可以运转大脑创作了, 注意这个**网站修改后, 是实时渲染的!!!!**


## chaos-mesh 跑起来

如果你觉的从demo修改起来太慢了, 那你可以从[案例社区](https://docusaurus.io/zh-CN/showcase)中挑选自己喜欢的主题进行魔改

这是我挑选的本次目标:[chaos-mesh](https://chaos-mesh.org/), 准备改成自己的风格, 想想看这是不小的工程啊

先执行个**`pnpm i`**吧, 要注意`pnpm`版本问题, 编译通过后, 执行**`pnpm start`**, 就可以在本地:3000端口访问了

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-08_12-00-23.png" alt="localchao-mesh"/>
