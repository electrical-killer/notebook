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

## 6. 本地访问测试

- <img src="https://img.eksnotebook.com/images/202411182137050.png"/>

-  <img src="https://img.eksnotebook.com/images/202411182140260.png"/>

## 7. 高级配置???

> 这里做简单记录, 等日后用到再做研究, 文章地址[腾讯云轻量应用服务器Ubuntu20.04搭建 FTP 服务——解决Failed to establish connection的问题-CSDN博客](https://blog.csdn.net/weixin_42408707/article/details/128515942)

<img src="https://img.eksnotebook.com/images/202411202222933.png"/>

## #. 问题解决

### Q&A: 配置完远程服务器的ftp服务, 结果客户端无法连接

查询了一下状态, 我天呐, 服务失败???

```shell
ubuntu@VM-16-15-ubuntu:/etc/ssl/private$ sudo systemctl status vsftpd.service
× vsftpd.service - vsftpd FTP server
     Loaded: loaded (/lib/systemd/system/vsftpd.service; enabled; vendor preset: enabled)
     Active: failed (Result: exit-code) since Mon 2024-11-18 23:28:11 CST; 3s ago
    Process: 8243 ExecStartPre=/bin/mkdir -p /var/run/vsftpd/empty (code=exited, status=0/SUCCESS)
    Process: 8244 ExecStart=/usr/sbin/vsftpd /etc/vsftpd.conf (code=exited, status=2)
   Main PID: 8244 (code=exited, status=2)
        CPU: 3ms

Nov 18 23:28:11 VM-16-15-ubuntu systemd[1]: Starting vsftpd FTP server...
Nov 18 23:28:11 VM-16-15-ubuntu systemd[1]: Started vsftpd FTP server.
Nov 18 23:28:11 VM-16-15-ubuntu systemd[1]: vsftpd.service: Main process exited, code=exited, status=2/INVALIDARGUMENT
Nov 18 23:28:11 VM-16-15-ubuntu systemd[1]: vsftpd.service: Failed with result 'exit-code'.
ubuntu@VM-16-15-ubuntu:/etc/ssl/private$
```

#### - 求助Fitten

> ## - Question
>
> `ExecStart=/usr/sbin/vsftpd /etc/vsftpd.conf (code=exited, status=2)如何排查`
>
> ## - Answer
>
> 出现 `ExecStart=/usr/sbin/vsftpd /etc/vsftpd.conf (code=exited, status=2)` 的错误通常表示 vsftpd 服务在启动时发生了问题。你可以按照以下步骤进行排查：
>
> 1. **检查配置文件**：
>    验证 `/etc/vsftpd.conf` 文件是否存在语法错误。可以使用命令：
>    ```bash
>    vsftpd /etc/vsftpd.conf
>    ```
>    如果有语法错误，系统会提示具体的错误信息。
>
> 2. **查看日志文件**：
>    检查系统日志和 vsftpd 日志。相关日志文件通常在 `/var/log/` 目录下，例如 `/var/log/vsftpd.log` 或 `/var/log/messages`。使用以下命令查看日志：
>    ```bash
>    tail -f /var/log/vsftpd.log
>    tail -f /var/log/messages
>    ```
>
> 3. **权限问题**：
>    确保 `/etc/vsftpd.conf` 文件和相关目录的权限正确，vsftpd 进程需要有权限读取这些文件。
>
> 4. **必要的依赖程序**：
>    确保系统上已安装 vsftpd 所需的依赖程序。使用以下命令安装或重新安装 vsftpd：
>    ```bash
>    sudo apt-get install vsftpd
>    ```
>
> 5. **执行权限**：
>    确保 `/usr/sbin/vsftpd` 文件具有可执行权限。你可以使用以下命令检查：
>    ```bash
>    ls -l /usr/sbin/vsftpd
>    ```
>    如果没有执行权限，可以使用：
>    ```bash
>    sudo chmod +x /usr/sbin/vsftpd
>    ```
>
> 6. **重新启动服务**：
>    修改配置文件或修复错误后，可以尝试重新启动 vsftpd 服务：
>    ```bash
>    sudo systemctl restart vsftpd
>    ```
>
> 7. **状态检查**：
>    查看服务状态以获取更多信息：
>    ```bash
>    sudo systemctl status vsftpd
>    ```
>
> 以上步骤可以帮助你排查和解决 `vsftpd` 启动失败的问题。如有进一步问题，请分享更多的错误信息或日志内容，以便进行更详细的分析。

#### - 问题解决

<img src="https://img.eksnotebook.com/images/202411202222226.png"/>

### Q&A: 云服务器正常启动, 配置OK, 但是远程端无法连接

检查官网服务器外围的防火墙规则是否添加, 如下图所示添加后, 即可正常访问

<img src="https://img.eksnotebook.com/images/202411202222044.png"/>

### Q: 如上配置好后, windows可以正常传输, 但是警告返回不可路由地址???

<img src="https://img.eksnotebook.com/images/202411202223197.png"/>

