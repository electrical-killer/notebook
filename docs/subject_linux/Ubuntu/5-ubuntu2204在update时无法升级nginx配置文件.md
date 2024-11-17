---
id: 1731505017
slug: /subject_linux/Ubuntu/1731505017
title: ubuntu2204在update时无法升级nginx配置文件
date: 2024-10-20
authors: Electrical Killer
tags: [nginx, ubuntu]
keywords: [nginx, ubuntu]
---


## 问题

<img src="https://img.eksnotebook.com/images/202410202010619.png"/>

当初直接按照官网的安装方式安装的, 看来不是很兼容

现在尝试完全卸载软件后, 重装, 问题解决

## 完全卸载步骤

1. 删除nginx，–purge包括配置文件

    ```shell
    sudo apt-get --purge remove nginx
    ```

2. 自动移除全部不使用的软件包

    ```shell
    sudo apt-get autoremove
    ```

3. 罗列出与nginx相关的软件, 并尝试步骤1完全删除

    ```shell
    dpkg --get-selections|grep nginx
    ```

4. 查看nginx正在运行的进程，如果有就kill掉

    ```shell
    ps -ef |grep nginx
    # root      7875  2317  0 15:02 ?        00:00:00 nginx: master process /usr/sbin/nginx
    sudo kill  -9  7875
    ```

5. 全局查找与nginx相关的文件, 并依次删除

    ```shell
    sudo  find  /  -name  nginx*
    sudo rm -rf file
    ```

6. 再次重装

    ```shell
    sudo apt-get update
    sudo apt-get install nginx
    ```
