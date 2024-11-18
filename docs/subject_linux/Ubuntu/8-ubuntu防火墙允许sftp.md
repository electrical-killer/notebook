---
id: 1731936106
slug: /subject_linux/Ubuntu/1731936106
title: ubuntu防火墙允许sftp
date: 2024-11-18
authors: Electrical Killer
tags: [ubuntu, ufw, sftp]
keywords: [ubuntu, ufw, sftp]
---

书接上篇, 自从服务器启用了FTP服务器, 开启了ufw防火墙后, 基于SFTP服务的图床, 就只能上传, 不能访问了, 而图床服务器使用的nginx

1. 查询nginx反代理使用的端口号

    ```shell
    sudo netstat -tnlp
    ```

2. 然后防火墙配置通过规则

    ```shell
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    ```

3. 重启测试OK

