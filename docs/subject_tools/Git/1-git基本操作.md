---
id: 1731505188
slug: /subject_tools/Git/1731505188
title: git基本操作
date: 2024-9-29
authors: Electrical Killer
tags: [git, ssh]
keywords: [git, ssh]
---



## 写在前面

- 当你使用`ssh链接`时, 注意要生成自己的`ssh公钥`, 否则无法推送, 报错权限不够
    可参考文章[github+ssh访问远程](./1-github+ssh访问远程.md)
- 本地分支最好和远程分支名一样, 便于管理
- 不想用 `CLI` , [几款优质 `GUI` 推荐](https://luhuadong.blog.csdn.net/article/details/125637680?)
- 了解关于 `git签名` 的 `GPG`, [了解一下](https://zhuanlan.zhihu.com/p/445036058)
- 代码要经行小块提交, 不提交没有编译过或构建失败的源码

## 普通分支拉取到本地

```shell
# 查看仓库所有分支
git branch -a

# 新拉取特定远程分支
git clone -b 分支名 url

# 一步拉取全部分支
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done

# 补充拉取远程远程分支内容(建立新分支)
git checkout -b 分支名 origin/分支名
```

## 关联远程分支与本地分支

`git branch --set-upstream-to=origin/远程分支 本地分支`

## submodule子模块

### 拉取

```shell
# 克隆项目时递归克隆所有模块
git clone 地址 文件夹名 --recursive(--recurse-submodules)

# 后补充子模块部分
git submodule update --init --recursive
```

### 创建&更新

```shell
# 创建子库
git submodule add -b master [URL]

# 更新子库
git submodule update --init
```

### 移除子模块管理

```shell
git rm --cached 子模块名称

rm .gitmodules # 删除项目目录下.gitmodules文件
```

## (强制)推送分支到远程

```shell
# 新推送到远程一个新分支
git push origin 本地分支名:远程分支名

# 如果远程仓库是新建的, 可以使用-u
git push origin -u test

# 强制推送分支: 强制推送且检查该分支是否单人开发
git push origin --force-with-lease master

# 当如上强制推送不成功, 依旧有内容冲突的时候, 可以使用-f
git push origin -f test
```

## 删除分支(远程+本地)

```shell
git push -d origin 远程分支名

git branch -d 本地分支名
```

## 查看内容提交记录

- `git status`查看当前暂存区状态
- `git reflog` 查看所有的提交
- `git log --all --decorate --oneline --graph`可视化观察分支记录
    ![](https://img.eksnotebook.com/images/202409292134316.png)

## add添加

```shell
git add . # 所有变化提交暂存, 包括内容修改(modified)以及新文件(new)
git add -u # 仅监控已被 add的文件, 不包括新文件, --update
git add -A # 以上功能合集
```

## stash内存暂存

> 当你出现需要临时切换分支工作时, 若当前分支已近有部分修改, **不要直接切换, 未经过版本管理的内容, 不会跟随转变**, 若你还不想提交`commit`, 可以使用`git stash`

```shell
# 保存快照
# 此时工作空间内容会复位
git stash save "" 

# 显示快照差异
git stash show stash@{1}

# 恢复快照1
git stash list
git stash apply stash@{0} # 不会删除堆栈内容, 可重复恢复
# 恢复快照2
git stash pop # 只能恢复一次

# 删除快照
git stash drop 名称 # 堆栈中移除某个指定的stash
git stash clear # 清除堆栈中的所有内容
```

## 内容撤销

> -  [git HEAD / HEAD^ / HEAD~ 的含义](https://segmentfault.com/a/1190000022506884) 
> -  **撤销中间的某次提交**, `git revert 6545689`, 其他内容不变, 且**生成**一次**新提交** 

-  `commit`到了版本库 

    ```shell
    # 舍弃之前commit的修改, 恢复到当前commit最新状态
    git reset --hard HEAD^ 
    
    # 暂存区保留之前的commit修改
    git reset --soft HEAD^ 
    ```

- `add`或其他修改, 已提交到暂存区 

    ```shell
    # 撤销暂存区
    git reset HEAD <file>
    ```

- 工作区修改的内容撤销 

    ```shell
    # 撤销工作区
    git checkout -- <file> 
    ```

## 一次提到两个地址

> 当你想每次将一个工作空间, 上传到两个仓库中时, 又不想每次`push` 两次

```shell
git remote add origin-all 仓库1链接
git remote set-url origin-all --push --add 仓库1链接
git remote set-url origin-all --push --add 仓库2链接
git push origin-all master # 一次推送到两个仓库
```

## 标签Tag

> Tag推荐两条链接
> [搞懂git标签的使用](https://blog.csdn.net/qq_39505245/article/details/124705850)
> [更细的参数节内容可跳转 - 实践](https://zhuanlan.zhihu.com/p/88810155)

```shell
# 创建标签
git tag -a 标签名称 -m 附注信息 # 当前commit
git tag -a 标签名称 提交版本号 -m 附注信息

# 查看标签注释
git tag -n # 看到对应tag的信息, 没有注释则显示为commit信息
git tag --list
git tag -l
git tag

# 推送标签
git push origin 标签名称 # 将指定的标签上传到远程仓库
git push origin --tags # 将所有不在远程仓库中的标签上传到远程仓库

# 删除本地标签
git tag -d 标签名称
# 删除远程标签
git push origin  :regs/tags/标签名称
git push origin --delete 标签名称

# 检出标签做事
git checkout -b 分支名称 标签名称 # 创建新分支对应标签开发
```

## Commit信息修改

> 推荐链接: https://blog.csdn.net/K3169/article/details/128241565

## 合并merge

> 推荐文章: [权衡好merge的**可追溯性**及rebase的**简洁**](https://zhuanlan.zhihu.com/p/57872388)

### 推荐工具P4Merge

> 一款可视化的解决冲突工具

1. 软件界面布局

    ![](https://img.eksnotebook.com/images/202409292147258.png)

2. 合并冲突后产生的遗留文件
    ![](https://img.eksnotebook.com/images/202409292147143.png)

3. 如何删除如上遗留文件
    `find . -name '*.orig' -type f -print -exec rm -rf {} \;`

    - `.`: 表示从当前目录开**始递归查找**
    - `-name`: 根据名称来查找，要查找所有以.*结尾的文件夹或者文件
    - `-type f`: 查找的**类型为文件**
    - `-print`: **输出**查找的文件目录名
    - `-exec`: 选项后边**跟着一个所要执行的命令**，表示将find出来的文件或目录执行该命令
        - 面跟随着所要执行的命令或脚本`rm -rf`
        - 补充内容`{} \;`

4. 下载软件&git配置

    ```shell
    # 工具下载链接 https://www.perforce.com/downloads/visual-merge-tool
    # 下载安装好P4Merge之后, 将软件绝对路径添加到环境变量中
    # 打开git bash运行如下6条指令
    git config --global diff.tool p4merge
    git config --global difftool.p4merge.path "软件绝对路径"
    git config --global difftool.prompt false
    git config --global merge.tool p4merge
    git config --global mergetool.p4merge.path "软件绝对路径"
    git config --global mergetool.prompt false
    ```

5. 更新目标分支

    ```shell
    # 开始合并目标分支到当前分支时
    # 做好目标分支更新
    git checkout -b 目标分支 origin/目标分支
    git pull origin 目标分支
    git checkout 操作分支
    ```

6. 不同的合并方式

    > `--no-ff` 保留历史提交: https://blog.csdn.net/zombres/article/details/82179122

    ```shell
    # 保留历史提交
    git merge --no-ff 目标分支
    # 当不保留历史提交, 保证主分支代码整洁
    git merge --squash 目标分支
    ```

7. 取消合并

    `git merge --abort`

