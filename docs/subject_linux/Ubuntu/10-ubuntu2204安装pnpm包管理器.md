---
id: 1732111123
slug: /subject_linux/Ubuntu/1732111123
title: ubuntu2204安装pnpm包管理器
date: 2024-11-18
authors: Electrical Killer
tags: [ubuntu, npm, pnpm]
keywords: [ubuntu, npm, pnpm]
---

这篇主要记录ubuntu22.04版本, 安装npm包管理器遇到的问题

可参考的[安装 | pnpm中文文档 | pnpm中文网](https://www.pnpm.cn/installation)

<!-- truncate -->

1. 安装nodejs, `sudo apt install nodejs`

    > 先看第五条, 第六条
    >
    > 再返回来继续

2. 安装npm, `sudo apt install npm`

    > 这里可以直接使用`aptitude`包管理器, 安装npm

    - 但是会遇到一个依赖`libssl-dev`的依赖`libssl3`版本不对问题

        <img src="https://img.eksnotebook.com/images/202411202205997.png"/>

    - 那就利用`aptitude`包管理器安装

        ```shell
        sudo apt-get install aptitude
        sudo aptitude install libssl-dev
        # 注意安装的时候会出现询问窗口, 依次按下"N" "Y" "Y"
        dpkg -l *libssl* # 这时就可以验证一下libssl-dev的安装情况
        ```

    - 再安装npm, `sudo apt install npm -y`

3. 之后再安装pnpm就好`npm install -g pnpm`

5. 测试pnpm安装版本, 结果因为nodejs版本过低查询失败

    <img src="https://img.eksnotebook.com/images/202411202237262.png"/>

6. 更新nodejs版本V18

    ```shell
    # 删除之前版本
    sudo apt remove nodejs
    
    # 移除依赖包
    sudo apt autoremove
    
    # 安装V18
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
    sudo apt-get install -y nodejs
    
    # 查询版本号
    nodejs  -v
    ```

7. 测试OK

    <img src="https://img.eksnotebook.com/images/202411202249687.png"/>

