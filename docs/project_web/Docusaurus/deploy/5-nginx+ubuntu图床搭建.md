---
id: 1731504844
slug: /project_web/Docusaurus/deploy/1731504844
title: nginx+ubuntu图床搭建
date: 2024-09-24
authors: Electrical Killer
tags: [project, Docusaurus, nginx, deploy]
keywords: [project, Docusaurus, nginx, deploy]
---



书接上篇, 搭好一台`可以域名访问的本地服务器`后, 现在可以解决MD文件图床问题

- 本地维护图床, 移动或丢失后均需要修改文档, 随着文档越来越多, 这是个头疼的事
- 这样使用域名访问图床, 可以有效避免`url`变更, 更换服务器后, 仅需移动图片即可



<!-- truncate -->

## 环境

- ubuntu22.04虚拟机
- nginx: 开源 Web 服务器和反向代理服务器

## nginx-反向代理服务

一个开源的 Web 服务器和反向代理服务器, 具有高性能, 可扩展性和可靠性, 可以处理大量并发连接, 也可以缓存HTTP请求以提高性能

### 原理

1. 将HTTP请求转发到服务器
2. 将相应返回给客户

### 功能

- 支持缓存: 缓存http请求提高性能, 可以使用`Etag` `if-none-match` 等命令请求缓存 
- SSL终止: 可以终止HTTPS请求转化为HTTP请求, 以便可以将其传递给Web服务器
- 负载均衡: 通过轮询, 加权轮询, 最小连接数等方法对传入的请求进行负载均衡
- 反向代理: 充当服务器和客户端间的代理, 将请求转发到服务器, 并将相应返回客户端
- 路由: 根据URL将请求转发到不同的服务器

### 安装

```shell
# 1、安装
# 安装过程如果缺少依赖, 跳转连接查看详细安装步骤
# https://nginx.org/en/linux_packages.html#Ubuntu
sudo apt update
sudo apt install nginx

# 2、验证nginx是否安装成功
sudo nginx -v
```

### 启动&查看状态

```shell
#切换到nginx的安装目录
cd /usr/local/nginx/sbin
 
#启动nginx
./nginx

# 查看程序状态
systemctl status nginx
```

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-22_22-55-43.png"/>

- 软件的主要路径功能介绍
    - `/usr/sbin/nginx` - 主程序
    - `/etc/nginx` - 存放配置文件
    - `/usr/share/nginx` - 存放静态文件
    - `/var/log/nginx` - 存放日志

### 关闭

`nginx -s stop`

```shell
ps -ef | grep nginx # 查看Nginx的进程
kill xxx # 杀死Nginx相关进程
```

### 访问

>  可以看到下图左上角小锁标志有×
>
> 表示当前没有安全访问的证书
>
> 证书添加方式见我下篇文档

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_07-47-10.png" />

### 配置

1. 打开软件配置文件的路径 `/etc/nginx/nginx.conf` , 找到`server`组, 如果没有, 自己添加
   
    > 此处配置虽可使用, 但略有不当, 可能造成访问偶尔断联
    >
    > 此处配置虽可使用, 但略有不当, 可能造成访问偶尔断联
    >
    > 此处配置虽可使用, 但略有不当, 可能造成访问偶尔断联
    >
    > 正确访问见问文章, 见: `手动cerbot安全访问nginx+ubuntu` 中的 `Nginx配置SSL`
    
    ```shell
    http {
        .....
        
        server {
            listen 80; # 监听端口
            server_name img.eksnotebook.com; # 域名  
            
            # root /path/to/your/website; # 展示静态网页  
    		
    		# 使用别名代替真是路径
            location /images {
                alias /images; # 访问图片的路径  
                autoindex on; # 展示列表  
            }
    
            # # 暂时没搞明白, 后续再说
            # location /static {
            #     alias /static/files; # 静态页面的目录路径
            #     autoindex on; # 展示列表 
            # }
    
            # # 暂时搞明白, 后续再说
            # location / {
            #     # 使用try_files指令来尝试查找匹配的URI
            #     # 找不到返回index.html, 可以是默认, 也可以是自定义
            #     try_files $uri $uri/ /index.html;
            # }
        }
    }
    ```
    
    - `systemctl restart nginx` - 重启服务

### 访问

1. `img.eksnotebook.com/images/`

    <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-23_23-49-09.png" />

    <img src="http://img.eksnotebook.com/images/2024092300917.jpg"/>

2. ~~`img.eksnotebook.com/static/files`~~

3. ~~`img.eksnotebook.com/`~~

### 常用命令

```shell
systemctl restart nginx # 重启服务

nginx -s reload # 
nginx -h # 帮助
nginx -v # 版本号
nginx -t # 会显示任何错误或警告信息
nginx -m # 可以加载缓存, SSL终止, 负载均衡...
```
