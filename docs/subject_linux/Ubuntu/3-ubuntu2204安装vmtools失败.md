---
id: 1731505014
slug: /subject_linux/Ubuntu/1731505014
title: ubuntu2204安装vmtools失败
date: 2024-09-28
authors: Electrical Killer
tags: [vmware, ubuntu]
keywords: [vmware, ubuntu]
---



## 问题

我使用的是ubuntu22.04, 在安装vmware-tools时遇到了如下图问题

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_19-58-43.png" />

- 安装, 重启电脑后不生效
- 使用`systemctl status vmware-tools.service` 查询服务状态, 发现启动失败
- 之后使用停止命令, 再手动开启一次, 报了如下错误
    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_20-02-37.png"/>

## 解决方案

```shell
sudo apt-get update # 更新软件源

sudo apt-get autoremove open-vm-tools # 先删除原来的vmware tools如果有的话

sudo apt-get install open-vm-tools # 安装

sudo reboot
```

