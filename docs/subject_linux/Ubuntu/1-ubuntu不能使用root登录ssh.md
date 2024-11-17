---
id: 1731505005
slug: /subject_linux/Ubuntu/1731505005
title: ubuntu不能使用root登录ssh
authors: Electrical Killer
tags: [ubuntu, root, ssh]
keywords: [ubuntu, root, ssh]
---



出于安全考虑, linux默认参数很严格，禁止root用户直接使用ssh登陆

但是我们可以先登录普通用户, 再切换为`su root`

但是, 这样以ssh为编辑器的用户来说, 还是没有权限



## 解决方案

```shell
sudo vi /etc/ssh/sshd_config

#PermitRootLogin no
PermitRootLogin yes

systemctl stop ssh.service
systemctl start ssh.service
```
