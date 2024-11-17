---
id: 1731504395
slug: /basic_code/Bat/1731504395
title: bin文件合并&生成hex文件
date: 2024-10-9
authors: Electrical Killer
tags: [bat]
keywords: [bat]
---

## 背景

嵌入式项目中, 一般都有boot,  那就需要将APP固件与boot合并

同时我们需要将APP的bin文件, 转换为hex文件, 供某些串口协议升级使用

## 资源

> `binHEBING` `srecord-1.63-win32`
>
> - [软件集合的下载地址](https://download.csdn.net/download/weixin_44113601/89867614)
>
> 一个固定大小的全FF文件, 用于占位填充, `%base_name%.bin`
>
> - [HxD Hex Editor下载地址]([Downloads | mh-nexus](https://mh-nexus.de/en/downloads.php?product=HxD20))
>
> 一个boot文件, `%boot_name%.bin`

## 脚本demo逻辑

```bat
@REM 注意其中的一些变量这里没有体现
@REM 如下逻辑仅供参考, 代码不能直接复用, 需要理解修改

@REM 配置工具的临时环境变量
set BINHEBING_HOME=%parent_one_path%\fm33\tools\binHEBING
set SRECORD_HOME=%parent_one_path%\fm33\tools\srecord-1.63-win32
set path=%SRECORD_HOME%;%BINHEBING_HOME%;%path%

@REM 拷贝源文本到指定目录firm目录
copy %src_app_name%.bin .\firm\%app_name%_%app_version%.bin
cd .\firm

@REM 删除(如果存在)%firmware_name%.bin文件
del %firmware_name%.bin

@REM 创建一个基础文件(大小固定, 且与固定文件一直), 用于承载固定文件%base_name%.bin, 以填充内容为目的
@REM 同时结尾处为BOOt跳转APP的起始地址
fsutil file createnew %firmware_name%.bin 10240
copy %base_name%.bin %firmware_name%.bin

@REM 将"%app_name%_%app_version%.bin"文件, 追加到%firmware_name%.bin文件尾部
cat %app_name%_%app_version%.bin >>%firmware_name%.bin

@REM 将%boot_name%.bin文件合并到%firmware_name%.bin内, 这里其实做了覆盖操作
hbin %boot_name%.bin %firmware_name%.bin

@REM 将%firmware_name%.bin 文件转换为 Intel HEX格式, 块大小为16字节
srec_cat.exe %firmware_name%.bin -Binary  -Output_Block_Size=16 -o %firmware_name%.hex -Intel

@REM 将%app_name%_%app_version%.bin 文件转换为 Intel HEX格式, 块大小为16字节, 并追加0x08000000的偏移量
srec_cat.exe %app_name%_%app_version%.bin -Binary -offset 0x08000000 -Output_Block_Size=16 -o %app_name%-uart_%app_version%.hex -Intel
```

