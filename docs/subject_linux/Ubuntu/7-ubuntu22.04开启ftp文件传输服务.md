---
id: 1731929367
slug: /subject_linux/Ubuntu/1731929367
title: ubuntu22.04开启ftp文件传输服务
date: 2024-11-18
authors: Electrical Killer
tags: [ubuntu, ftp, ufw]
keywords: [ubuntu, ftp, ufw]
---

## 1. 安装`vsftp`

```shell
sudo apt update
sudo apt install vsftpd
```

## 2. 配置`/etc/vsftp.conf`

> 大多数设置在配置文件中都有详细记录。有关所有可用选项，访问[官方vsftpd ](http://vsftpd.beasts.org/vsftpd_conf.html)页面

### - 访问权限

```shell
# 仅允许本地用户访问服务器
anonymous_enable=NO
local_enable=YES
```

### - 允许上传

```shell
# 允许对文件系统进行更改，例如上载和删除文件
write_enable=YES
```

### - chroot

> 默认情况下，为了防止安全漏洞，启用chroot后，如果用户锁定的目录可写，则vsftpd将拒绝上传文件

```shell
# 防止用户访问其主目录之外的任何文件
chroot_local_user=YES
```

- 如何允许上传

    - 保持chroot状态, 并配置FTP目录

        ```shell
        # 本例子, 在用户主目录内创建一个ftp目录, 用作chroot和一个可写的uploads目录( 用于上传文件 )
        user_sub_token=$USER
        local_root=/home/$USER/ftp
        ```

    - 如果要将用户的可写访问权限授予整个目录, 请使用此选项

        ```shell
        allow_writeable_chroot=YES
        ```

### - 被动FTP连接

> 可以使用任何端口进行被动FTP连接
>
> 将指定端口的最小和最大范围
> 然后在防火墙中打开该范围

```shell
pasv_min_port=30000
pasv_max_port=31000
```

### - 用户登录白名单

启用此选项后, 需要通过将用户名添加到`/etc/vsftpd.user_list`文件（每行一个用户）来明确指定哪些用户可以登录

```shell
userlist_enable=YES
userlist_file=/etc/vsftpd.user_list
userlist_deny=NO
```

### - 使用SSL / TLS保护传输

要使用SSL / TLS加密FTP传输，您需要具有SSL证书并配置FTP服务器以使用它

可以使用由受信任的证书颁发机构签名的现有SSL证书，也可以创建自签名证书

如果您有指向FTP服务器IP地址的域或子域，则可以轻松生成免费的[ Let's Encrypt ](https://www.myfreax.com/secure-nginx-with-let-s-encrypt-on-ubuntu-18-04/)SSL证书

我们将使用`openssl`命令生成[个自签名SSL证书](https://www.myfreax.com/creating-a-self-signed-ssl-certificate/)。

```shell
# 以下命令将创建一个有效期为10年的2048位私钥和自签名证书。私钥和证书都将保存在同一文件中
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/ssl/private/vsftpd.pem -out /etc/ssl/private/vsftpd.pem
```

- `sudo nano /etc/vsftpd.conf`

    ```shell
    rsa_cert_file=/etc/ssl/private/vsftpd.pem
    rsa_private_key_file=/etc/ssl/private/vsftpd.pem
    ssl_enable=YES
    ```

- 如果没有另外指定，则FTP服务器将仅使用TLS建立安全连接

### - 重启vsftp服务器

```shell
# 关键配置一览表
listen=NO
listen_ipv6=YES
anonymous_enable=NO
local_enable=YES
write_enable=YES
dirmessage_enable=YES
use_localtime=YES
xferlog_enable=YES
connect_from_port_20=YES
chroot_local_user=YES
secure_chroot_dir=/var/run/vsftpd/empty
pam_service_name=vsftpd
rsa_cert_file=/etc/ssl/private/vsftpd.pem
rsa_private_key_file=/etc/ssl/private/vsftpd.pem
ssl_enable=YES
user_sub_token=$USER
local_root=/home/$USER/ftp
pasv_min_port=30000
pasv_max_port=31000
userlist_enable=YES
userlist_file=/etc/vsftpd.user_list
userlist_deny=NO
```

- 保存文件，然后重新启动vsftpd服务，以使更改生效

    ```shell
    sudo systemctl restart vsftpd
    ```

## 3. 开启防火墙

如果您正在运行[ UFW防火墙](https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-ubuntu-18-04/)，则需要允许FTP通信

- 要打开端口`21`（FTP命令端口），端口`20`（FTP数据端口）和`30000-31000`（被动端口范围），请运行以下命令

    ```shell
    sudo ufw allow 20:21/tcp
    sudo ufw allow 30000:31000/tcp
    ```

- 避免被锁, 请打开端口`22`

    ```shell
    sudo ufw allow OpenSSH
    ```

- 重载, 重启防火墙

    ```shell
    sudo ufw reload
    sudo ufw enable
    sudo ufw status
    reboot
    ```

- 验证更改

    ```shell
    sudo ufw status
    
    # 如下所示
    Status: active
    
    To                         Action      From
    --                         ------      ----
    20:21/tcp                  ALLOW       Anywhere
    30000:31000/tcp            ALLOW       Anywhere
    OpenSSH                    ALLOW       Anywhere
    20:21/tcp (v6)             ALLOW       Anywhere (v6)
    30000:31000/tcp (v6)       ALLOW       Anywhere (v6)
    OpenSSH (v6)               ALLOW       Anywhere (v6)
    ```

## 4. FTP用户

- 账户: 

    - 可以创建`newftpuser`新用户测试`sudo adduser newftpuser`
    - 可以使用现有账户( 测试建议使用新用户 )

- 将用户添加到访问白名单

    - `echo "newftpuser" | sudo tee -a /etc/vsftpd.user_list`

- 创建FTP目录并设置正确的文件权限

    > 在用户主目录内创建一个ftp目录, 用作chroot
    >
    > 和一个可写的uploads目录( 用于上传文件 )

    - ```shell
        sudo mkdir -p /home/newftpuser/ftp/upload
        sudo chmod 550 /home/newftpuser/ftp
        sudo chmod 750 /home/newftpuser/ftp/upload
        sudo chown -R newftpuser: /home/newftpuser/ftp
        ```

- 到这里, 我们就可以使用TLS加密的任何FTP客户端（例如[ FileZilla ](https://filezilla-project.org/)）连接到服务器

## 5. 禁用shell程序访问权限

默认情况下，在创建用户时，如果未明确指定，则该用户将具有对服务器的SSH访问权限

要禁用外壳程序访问，我们将创建一个新的外壳程序，该外壳程序将仅打印一条消息，告知用户其帐户仅限于FTP访问

- 创建可执行shell `/bin/ftponly`

    ```shell
    echo -e '#!/bin/sh\necho "This account is limited to FTP access only."' | sudo tee -a  /bin/ftponly
    sudo chmod a+x /bin/ftponly
    ```

- 新外壳追加到`/etc/shells`文件中的有效外壳列表中

    - ```shell
        echo "/bin/ftponly" | sudo tee -a /etc/shells
        ```

- 将用户外壳更改为`/bin/ftponly`

    - 注意默认shell为`/bin/bash`

    - ```shell
        sudo usermod newftpuser -s /bin/ftponly
        ```

- **使用相同的命令来更改仅希望授予FTP访问权限的所有用户的外壳**

## 6. 访问测试

- <img src="https://img.eksnotebook.com/images/202411182137050.png"/>

-  <img src="https://img.eksnotebook.com/images/202411182140260.png"/>

