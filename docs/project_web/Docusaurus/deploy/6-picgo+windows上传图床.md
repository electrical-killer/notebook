---
id: 1731504852
slug: /project_web/Docusaurus/deploy/1731504852
title: picgo+windows上传图床
date: 2024-09-22
authors: Electrical Killer
tags: [project, Docusaurus, picgo, deploy]
keywords: [project, Docusaurus, picgo, deploy]
---



书接上篇, `nginx+ubuntu图床搭建`, 现服务器图床已搭建完毕

这篇笔记用来解决图片上传&MD链接生成方式



<!-- truncate -->



## picgo-快速上传图片并获取URL 

官网地址: https://picgo.github.io/PicGo-Doc/

一个用于快速上传图片并获取图片 URL 链接的工具

## picgo上传

> 安装参考官方文档[PicGo is Here | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/#下载安装)

### 安装插件picgo-plugin-sftp-uploader

> [picgo 插件地址](https://github.com/PicGo/Awesome-PicGo?tab=readme-ov-file)

1. 然后在picgo[默认配置文件所在的目录](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#默认配置文件)下，输入

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_16-45-13.png" />~~

    ```powershell
    npm install ./picgo-plugin-<your-plugin-name>
    ```
    
    - `./picgo-plugin-sftp-uploader`

### 软件安装

> 注意因为插件需要`node.js`环境, 需要提前安装好, 就不会遇到下方第二部的报错
>
> 可以参考[windows环境与依赖](./1-windows环境与依赖.md)

1. https://molunerfinn.com/PicGo/ 访问地址, 下载 `picgo` 安装包安装
2. 安装OK后, 按照如下方式搜索, 安装插件, 但是出现无法安装的现象
    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_16-13-28.png" />
    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_16-17-56.png" />
3. 实属无奈, 只好使用安装包重新安装 `Node.js` 环境
4. 之后重试步骤2, 安装成功
    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_18-32-36.png" />

### 配置SFTP

1. 新建 `picgo` 插件 `sftp` 组件配置文件 `config.json`

2. 内容如下, 并且文件, **我放到了C盘下**

    > 这里linux是默认不支持远程访问root, 参考文章[ubuntu不能使用root登录ssh](/docs//subject_linux/Ubuntu/1731505005)
    >
    > ==注意删除注释==
    >
    > ==注意删除注释==
    >
    > ==注意删除注释==

    ```json
    {
        // 网站标识
        "sftpuploader": {
            "url": "", // 域名
            "path": "/images/{fullName}", // 链接路径
            "uploadPath": "/images/{fullName}", // 上传地址
            "host": "", // IP地址
            "port": 22, // ssh端口号
            "username": "root", // 推荐root账户, 普通用户为测试, 可能存在密码问题
            "password": "" // 账户密码
        }
    }
    ```

3. 选择配置插件

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-24_06-56-55.png" />

4. 根据如上信息, 配置插件, 并点击确认

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-24_06-59-05.png" />

5. 上传图片, 并访问确认

    ==上传失败~~==, 查看log, 显示path路径属性未定义

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-24_20-03-46.png" />

6. 重新尝试配置root账户密码, 上传测试成功, 但是粘贴的链接不正确, 
    补充 `config.json` 中的`path`属性OK, 已更新上面

7. 配置了几个软件的参数记录一下

    <img src="https://img.eksnotebook.com/images/202409242309180.png"  />

    <img src="https://img.eksnotebook.com/images/202409242310818.png"  />

8. 测试过程中, 发现经常访问会失败, 如图所示

    > 很可能由于上篇文章的不当配置方式导致, 后期优化为下方配置, 有待观察
    >
    > - 20240928 - 正确访问见问文章, 见: `手动cerbot安全访问nginx+ubuntu` 中的 `Nginx配置SSL`

    <img src="https://img.eksnotebook.com/images/202409242311843.png" />

9. 神奇的网友说使用HTTPS访问可解决, 证书申请+续签见下篇文章

## typora上传

到了这一步, picgo已经搭建完成了, 之后我们可以配置一下typora, 让其自动上传, 转下一篇文章

