---
id: 1732107167
slug: /subject_tools/Git/1732107167
title: github+https的个人访问令牌
authors: Electrical Killer
tags: [github, https]
keywords: [github, https]
---

现今在使用 **github + HTTPS** 的命令行或API, 进行身份验证时, 需要使用个人访问令牌代替密码, [官方指导文档](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#about-personal-access-tokens)

注意, 是 HTTPS 链接

<!-- truncate -->

## 关于个人令牌

个人访问令牌是使用密码向 GitHub 进行身份验证的替代方法
若要代表组织访问资源或进行长期集成, 建议使用[GitHub App](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps)

## 个人令牌的分类&优势

> 官方推荐使用 Fine-grained personal tokens 

- #### [Fine-grained personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens)

    > 到24.11.23, 细粒度个人访问令牌目前处于公开预览阶段，可能会发生变化。若要留下反馈，请参阅[反馈讨论](https://github.com/community/community/discussions/36441)。

    - 每个令牌只能访问单个用户或组织拥有的资源
    - 每个令牌只能访问特定存储库
    - 每个令牌被赋予特定的权限, 比起经典的令牌, 有更多的权限
    - 组织所有者可以批准或拒绝请求访问其组织的 fine-grained personal access token

- #### [Personal access tokens (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#personal-access-tokens-classic)

    > 相比Fine-grained tokens来说, 安全性较低
    >
    > 但是某些功能仅适用于经典令牌

    - 拥有令牌者无论是否为组织内成员均均有写访问
    - 外部合作者只能通过经典令牌访问仓库
    - 一些 REST API 端点仅适用于经典令牌

## 使用方法

- 创建

    - [创建细粒度的个人访问令牌](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)
    - [创建个人访问令牌（经典）](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)

- 删除 - [删除个人访问令牌](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#deleting-a-personal-access-token)

- 使用 - [在命令行上使用个人访问令牌](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#using-a-personal-access-token-on-the-command-line)
    - token 仅在 HTTPS 的 URL 中使用, SSL 的 URL 参考文章[github+ssh访问远程](https://wiki.eksnotebook.com/docs/subject_tools/Git/1731505174)
    - 若 HTTPS 未使用 token 进行了pull push 等操作, 凭据可能已缓存在您的计算机上, 可以[在 Keychain 中更新凭据，](https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain)以使用令牌替换旧密码
    - 还可以将令牌缓存在 git 中, 每次 git 自动读取操作

### [Git Credential Manager](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git#git-credential-manager)

> 有关使用 GitHub CLI 进行身份验证的更多信息，请参阅[`gh auth login`](https://cli.github.com/manual/gh_auth_login)

1. 在 macOS、Windows 或 Linux 上[安装GitHub CLI](https://github.com/cli/cli#installation)
2. 在命令行中输入`gh auth login`，然后按照提示进行操作。
    - 当系统提示您选择 Git 操作的首选协议时，选择`HTTPS`
    - 被询问时, 输入`Y`

:::warning:
旧版 Git for Windows 附带了适用于 Windows 的 Git Credential Manager。此旧产品不再受支持，无法通过 OAuth 连接到 GitHub。需要更新 Windows 的 Git。
:::

:::warning:
如果在 Windows 的凭据管理器中缓存了不正确或过期的凭据，将无法访问 GitHub。要重置缓存的凭据以便 Git 提示您输入凭据，请在 Windows 控制面板中的用户帐户 > 凭据管理器下访问凭据管理器。查找 GitHub 条目并将其删除
:::

