---
id: 1731504365
slug: /basic_code/Bat/1731504365
title: 解决IAR固件非4字节对齐问题
date: 2024-10-8
authors: Electrical Killer
tags: [bat, iar, 4字节对齐]
keywords: [bat, iar, 4字节对齐]
---


## 背景

嵌入式开发中, 使用 `IAR` 编译的固件不像 `keil` 一样, 不会自动补齐 `4字节` 

而有些 `软件` 或者 `固件拼接` 或 `其他特殊的场景下`, 需要我们使用 `4字节对齐的bin文件`

## bin文件4字节对齐

> 如下三个文档因为是demo测试, 因此放到一个根路径下
>
> <img src="https://img.eksnotebook.com/images/202410082307969.png"/>

- `Byte.bin` - 用于补充的单字节文件
  
    - 其中内容建议使用 `非FF`  `非00` 的任意字符, 因为某些场景可能会导致问题
    - 实现方法: 使用软件HxD, 下载链接如下
        - [Downloads | mh-nexus](https://mh-nexus.de/en/downloads.php?product=HxD20)
        - 安装后, 打开, 并新建文件, 输入86, 后保存 **`Byte.bin`**
    
- 准备一个任意2字节的测试文件, 生成方式如上所述, 命名为 **`source.bin`**

- 生成新文件后, 输出的文件为 `test.bin`, 也是最终的目标文件

- 创建 **`four_byte_alignment.bat`** 文件为四字节对齐文档

    - ```bat
        @echo off
        setlocal enabledelayedexpansion
        
        @REM 配置源文件, 测试文件, 填充文件路径
        @REM 注意根据实际工程不同, 存在嵌套时, 使用相对路径修改
        set "bin_file=source.bin"
        set "output_file=test.bin"
        set "byte=Byte.bin"
        
        @REM 获取文件大小
        for %%F in ("%bin_file%") do set "file_size=%%~zF"
        
        @REM 计算余数
        set /a "remainder=file_size %% 4"
        
        @REM 如果已经对齐到4字节边界
        if %remainder% equ 0 (
            echo File is already aligned to 4 bytes.
            goto next
        )
        
        @REM 计算需要填充的字节数
        set /a "padding=4 - remainder"
        
        @REM 根据需要填充的字节数进行填充
        if %padding% equ 1 (
            copy /b "%bin_file%"+"%byte%" "%output_file%"
        ) else if %padding% equ 2 (
            copy /b "%bin_file%"+"%byte%"+"%byte%" "%output_file%"
        ) else if %padding% equ 3 (
            copy /b "%bin_file%"+"%byte%"+"%byte%"+"%byte%" "%output_file%"
        )
        
        :next
        echo Alignment complete. Output file: %output_file%
        
        pause exit
        ```
        
    - `setlocal enabledelayedexpansion`: 启用延迟变量扩展，以便在循环中正确处理变量。
    
    - `for %%F in ("%bin_file%") do set "file_size=%%~zF"`: 获取源二进制文件的大小，并存储在`file_size`变量中。
    
    - `set /a "remainder=file_size %% 4"`: 计算文件大小除以4的余数，并存储在`remainder`变量中。
    
    - `if %remainder% equ 0 (...)`: 如果余数为0，说明文件已经对齐到4字节边界，输出提示信息并跳转到`next`标签。
    
    - `set /a "padding=4 - remainder"`: 计算需要填充的字节数，并存储在`padding`变量中。
    
    - `if %padding% equ 1 (...)`: 如果需要填充1个字节，使用`copy /b`命令将源文件和填充字节文件合并，并生成输出文件。
    
    - `else if %padding% equ 2 (...)`: 如果需要填充2个字节，使用`copy /b`命令将源文件和两个填充字节文件合并，并生成输出文件。
    
    - `else if %padding% equ 3 (...)`: 如果需要填充3个字节，使用`copy /b`命令将源文件和三个填充字节文件合并，并生成输出文件。

## 测试固件

双击运行对齐脚本, 创建新的输出文件 `test.bin` , 源文件保持

<img src="https://img.eksnotebook.com/images/202410082257960.png"/>
