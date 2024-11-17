---
id: 1731504883
slug: /project_web/Docusaurus/deploy/1731504883
title: 异地访问虚拟机内部的nginx
date: 
authors: Electrical Killer
tags: [project, Docusaurus, deploy]
keywords: [project, Docusaurus, deploy]
---

国庆节， 去外地了， 远程`todesk`打开虚拟机， 运行`nginx`
意外发现无法访问的我域名， 转头尝试了同网络下`windows`访问， 一切正常



<!-- truncate -->

## 网络拓扑图



## 关于内网穿透

在此期间， 在博主https://wiki.onedayxyy.cn/ 的博客中， 了解到外网访问内网的其他方法， 俗称`内网穿透` , 其中基于端口映射的方法`frp`, `ngrok`，但是有个弊端， 就是无法访问任意的网络端口, 所以博主还提到了另外`组网的思路`

> 利用组网， 将内网设备与云服务器处在通一个网段内， 这样就可以设备间互相访问了
>
> 提到的方式有
>
> - **`Wireguard`** 组网
> - **`Tailscale`** 组网
> - **`ZeroTier`** 组网

而我们这里有公网IP的路由器， 仅需要配置好端口映射， 防火墙规则， 便可以通过外网访问内网服务器了

## 尝试路由器配置端口映射

> windows + demo的blog

1. 运行demo的blog, 端口号为3000

2. 配置

    

