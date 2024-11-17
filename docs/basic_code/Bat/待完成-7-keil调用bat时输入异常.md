---
id: 1731504430
slug: /basic_code/Bat/1731504430
title: keil调用bat时输入异常
date: 2024-10-14
authors: Electrical Killer
tags: [bat, keil]
keywords: [bat, keil]
---

1. 为动态生成固件合并操作后的固件版本信息
2. `keil` 无法使用内置脚本管理生成的固件的版本号, 之前都是编译好, 手动修改, 固件太多, 太麻烦
3. 目标想在合并固件前, 输入一个版本信息, 用于输出固件的版本
4. 语法非常简单, 如下所示
    ```bat
    set /p input=Please enter a value(Vx.x.x.xxxxxx.xxxx): 
    
    if "%input%" == "" (
        set input=Vx.x.x.000000.0000
    ) 
    ```
5. 但是在keil作为编译后的脚本调用时, 会出现弹窗无内容的问题

<img src="https://img.eksnotebook.com/images/202410142215127.png" />

1. 这个问题在 `win11` `win10` 上均存在, 但是使用 `win11` 直接执行是成功的, `win10` 忘记测了

<img src="https://img.eksnotebook.com/images/202410142217471.png"/>

7. 尝试简化脚本中的其他内容, 仅保留输入提示&逻辑, 依旧老样子
8. 
