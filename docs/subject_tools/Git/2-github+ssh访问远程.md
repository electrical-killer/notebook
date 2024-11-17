---
id: 1731505174
slug: /subject_tools/Git/1731505174
title: github+ssh访问远程
authors: Electrical Killer
tags: [git, ssh]
keywords: [git, ssh]
---



## 环境准备

- 安装git

## SSH密钥有什么用

在设置`SSH服务`时，生成SSH密钥（公钥和私钥）是一个常见的任务

这些密钥用于安全地进行身份验证，无需输入密码

## 生成本地ssh密钥对

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

- -t: 指定密钥类型为RSA
- -b 4096: 密钥长度为4096
- -C "your_email@example.com": 添加注释, 通常是电子邮件, 有助于识别密钥



过程中会有输入密钥环节

- 可以增加密码, 增加安全性
- 也可以留空, 便于访问连接



结果

- id_rsa：私钥文件
- id_rsa.pub：公钥文件



## 查看公钥key

生成密钥过程中, 如果没有修改生成路径, 则默认为用户目录下`C:\Users\ework\.ssh\`

使用命令行访问`cat ~/.ssh/id_rsa.pub`

## github添加公钥

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_11-02-04.png" />

## 测试连接正常

执行 `ssh -T git@github.com` 后返回如下表示正常

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_11-04-29.png"/>
