---
id: 1731505071
slug: /subject_linux/Ubuntu/1731505071
title: VM Tools脚本失败, 导致虚拟机挂起失败
date: 2024-10-20
authors: Electrical Killer
tags: [vmware, ubuntu]
keywords: [vmware, ubuntu]
---


## 问题

<img src="https://img.eksnotebook.com/images/202410201908133.png"/>

## 原因

重复安装VMware Tools，导致脚本路径下的权限乱套了

## 二次解决方案

1. 

## (无效)一次解决方案

1. 查询工具位置

    ```shell
    whereis vmware-tools
    ```

    <img src="https://img.eksnotebook.com/images/202410201918583.png"/>

2. 卸载工具

    ```shell
    sudo vmware-uninstall-tools.pl
    ```

    <img src="https://img.eksnotebook.com/images/202410201918191.png" />

3. 删除`/etc/vmware-tools`目录

    <img src="https://img.eksnotebook.com/images/202410201919567.png" />

4. 执行卸载

    ```shell
    sudo apt-get autoremove open-vm-tools
    ```

5. 重启后, 重新执行vmware-install.pl 安装VMware-Tools

## 插曲

在执行卸载`open-vm-tools`时, 软件包自行升级火狐浏览器, 但是`snap store`链接存在问题, 此处跳过, 后续解决

<img src="https://img.eksnotebook.com/images/202410201933663.png"  />
