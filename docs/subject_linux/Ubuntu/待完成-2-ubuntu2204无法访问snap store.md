---
id: 1731505026
slug: /subject_linux/Ubuntu/1731505026
title: ubuntu2204无法访问snap store
date: 2024-10-20
authors: Electrical Killer
tags: [ubuntu, snap]
keywords: [ubuntu, snap]
---

## 问题

火狐浏览器无法使用, 更新需要使用到`snap store` , 但是无法连接该商店

<img src="https://img.eksnotebook.com/images/202410201933663.png"  />

## 解决

1. 获取火狐软件相关信息 以失败告终

    ```shell
    # 可以获得有关 Firefox 的安装状态、版本、依赖关系以及其他相关信息
    sudo snap info firefox
    ```

    <img src="https://img.eksnotebook.com/images/202410201949171.png"/>

2. 查询`snapd.service`, 不在运行

    <img src="https://img.eksnotebook.com/images/202410201950452.png"/>

3. 

4. 



## ~20241020-无法解决, 安装chrome代替

  
