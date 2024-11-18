---
id: 1731938920
slug: /subject_linux/Ubuntu/1731938920
title: ubuntu启用root用户登录
date: 2024-11-18
authors: Electrical Killer
tags: [ubuntu, root]
keywords: [ubuntu, root]
---

默认安装的ubuntu是不允许root用户登录
想要以root登录, 需要进行一些配置

## 登录配置root密码

`sudo passwd root`

## 50-unity-greeter.conf

```shell
# 修改文件/usr/share/lightdm/lightdm.conf.d/50-unity-greeter.conf文件，增加两行： 
greeter-show-manual-login=true 
all-guest=false
```

## gdm-autologin文件

```shell
# 进入/etc/pam.d目录，修改gdm-autologin文件 
sduo nano /etc/pam.d/gdm-autologin 

# 注释如下内容
# auth required pam_succeed_if.so user != root quiet_success
```

## gdm-password文件

```shell
# 进入/etc/pam.d目录，修改gdm-password文件
sduo nano /etc/pam.d/gdm-password 

# 注释如下内容
# auth required pam_succeed_if.so user != root quiet_success
```

## /root/.profile

```shell
# 修改/root/.profile文件 
sduo nano /root/.profile 

# 将文件末尾的 `mesg n || true` 修改
tty -s&&mesg n || true
```

## 重启测试

输入`root` & `password` 登录

## 配置root自动登录

```shell
# /etc/gdm3/custom.conf
[daemon]
AutomaticLoginEnable=True
AutomaticLogin=root
```

