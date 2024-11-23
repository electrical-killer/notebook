---
id: 1731505218
slug: /subject_tools/Vscode/1731505218
title: vscode+ssh访问ubuntu
authors: Electrical Killer
tags: [vscode, ssh, ubuntu]
keywords: [vscode, ssh, ubuntu]
---



在搭建website的时候, 新装的ubuntu没有编辑环境, 且没有浏览器等基础软件

虽然装了vmtools, 但是想起日后需要拉取代码, 远程建站等操作

还是现在熟悉一下关于搭建ssh远程访问, 方便日后使用

并且选择了插件强大的vscode



<!-- truncate -->

## ubuntu配置

```shell
# 安装ssh
sudo apt-get install openssh-server

# 启动
sudo systemctl start ssh

# 查询网卡信息
ifconfig
```

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_20-39-16.png"/>

## vscode连接

1. 安装插件

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_20-49-12.png" />

2. 配置插件, 打开软件设置

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_20-54-13.png?" />

3. 此处配置用户目录的`.ssh\config` 配置文件

    - 写绝对路径
    - 没有config不要紧, 之后再添加

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_20-56-05.png" />

4. 重启vscod, 点击侧栏`远程资源管理器`，在`ssh`一栏, 点击+按钮

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-02-04.png"/>

5. 输入`用户名@IP地址` --> `ek@192.168.xx.xxx`

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-04-32.png"/>

6. 回车后选择配置文件, 点击刚才第三步写入的配置文件

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-07-59.png"/>

7. 之后选择在新窗口连接该远端

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-11-00.png"/>

8. 选择对应的服务器类型

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-11-59.png"/>

9. 选择继续, 并且输入密码

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-13-52.png"/>

10. 之后会弹出该窗口, 表示远程连接成功

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-15-29.png" />

11. 之后点击打开文件夹, 选择你的目标文件夹, 推荐之家打开根目录, 根据提示输入密码


## 优化密码输入环节

在使用过程中，需要频繁的输入远程连接密码来进行连接

为解决该问题可以使用SSH公钥来进行设置

1. 生成密钥, 见文章[ssh访问远程](/docs/subject_tools/Git/1731505174)

2. `ssh-copy-id -i ~/.ssh/id_rsa.pub username@ip`给远程发送密钥

    - username: 登录ssh用用户名

    - ip: 登录地址

3. 将发送给远程的密钥文件, 配置到当前连接中

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-25-41.png"/>

4. 输入密钥文件绝对路径`IdentityFile C:\Users\ework\.ssh\id_rsa`

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_21-28-12.png"/>

