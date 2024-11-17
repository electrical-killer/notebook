---
id: 1731504322
slug: /basic_code/Bat/1731504322
title: arm-none-eabi+elf文件生成bin文件
date: 2022-12-28
authors: Electrical Killer
tags: [bat, keil, hex]
keywords: [bat, keil, hex]
---


> 痛点
> 当工程编译链为外接的 arm-none-eabi- 时, keil 无法生成带偏移地址的 hex 文件
> 而你恰好需要她, 并且你不希望每次都手动进行转换



## bat脚本

>- [成品请下载](https://download.csdn.net/download/weixin_44113601/83749278)
>- [srec_cat.exe工具超连接](https://sourceforge.net/projects/srecord/files/latest/download)
>- [官方解决方案](https://developer.arm.com/documentation/ka004226/latest)

```bat
@REM keil工程生成hex文件
@REM 当工程编译链为外接的arm-none-eabi-时, keil无法生成带偏移地址的hex文件
@REM arm-none-eabi-objcopy.exe 注意工程对应版本

@echo off
set NAME=xxxxxxx

@REM 使用elf文件转bin文件
@REM 工程中没有.elf文件用.axf代替
cd /d %~dp0
..\..\tools\toolchain\bin\arm-none-eabi-objcopy.exe  -O binary ..\Objects\project.elf  ..\Objects\project.bin 

@REM 创建目标所在文件夹 Firmware
@REM cd /d %~dp0
if exist ..\..\Firmware (
    @REM 文件夹已存在
	echo Folder already exists
) else (
	md ..\..\Firmware
)

@REM cd /d %~dp0
copy ..\Objects\project.bin ..\..\Firmware\%NAME%.bin >nul

@REM cd /d %~dp0
.\srecord-1.63-win32\srec_cat.exe ..\Objects\project.bin -Binary -offset 0x08000000 -o ..\..\Firmware\%NAME%.hex -Intel
```

## 补充内容

- 工程中没有 `.elf` 文件用 `.axf` 代替

- `cd /d %~dp0` 表示跳转到该文件所在目录

- `>nul` 省略成功信息

- `.\xxx.bat $K !L @L $L` 

    - `$K` KEIL安装目录

    - `!L` .axf文件的位置

    - `@L` .axf文件的文件名

    - `$L`.axf文件的目录

- `ARMCC的elf->hex`

    - ```bat
        set exe_location=%1ARM\ARMCC\bin\fromelf.exe
        %exe_location% --i32combined --output="..\..\Firmware\project.hex" "..\Objects\project.elf"
        ```

- **arm-none-eabi-objcopy.exe** 注意工程使用的 arm-gcc 版本
