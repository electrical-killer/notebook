---
id: 1731929343
slug: /subject_linux/Ubuntu/1731929343
title: ubuntu的root访问权限
date: 2024-11-18
authors: Electrical Killer
tags: [ubuntu, root]
keywords: [ubuntu, root]
---

> sudo : super-user-do 让用户暂时已管理员身份root来执行命令
>
> root: 作为根用户, 就是“系统管理员”拥有的全部权限

在每次打开Terminal的时候， 窗口上方都会出现, 表明你的权限不够

<img src="https://img.eksnotebook.com/images/202411182010167.png"/>

- 在命令行上输入`sudo xxx`, 然后提示输入密码, 短时间内可以使用sudo ,且不输密码

- 如果想一直保持在超级用户(Root 权限)状态的话, `sudo -s`, 然后输出密码, 这样, 你就能作为超级用户执行命令, 而不用在每个命令前增加 `sudo`了
