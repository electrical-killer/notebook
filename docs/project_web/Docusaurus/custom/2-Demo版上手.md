---
id: 1731504816
slug: /project_web/Docusaurus/custom/1731504816
title: Demo版上手
date: 2024-09-09
authors: Electrical Killer
tags: [project, Docusaurus, custom]
keywords: [project, Docusaurus, custom]
---



当我们准备好开发环境后, 就要着手修改网站了, 还是已刚搭建好的`Demo`为例做一下个性化配置, [主要参考教程](https://docusaurus.io/zh-CN/docs)

<!-- truncate -->

## demo的工程结构

项目关键的结构如下

```markdown
demo-blog
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `/blog/` - 里面就是写博客文章的，都是 markdown 文件。
- `/docs/` - 里面就是写文档的，也都是 markdown 文件。
- `/src/` - 源代码文件夹
    -  `/css/custom.css`里面是写自定义的 `css` 代码的。
    - `/src/pages/` - 里边放一些自定义的页面，使用 `react` 语法来写。
- `/static/` - 放静态资源文件，这些文件会出现在最后打包出来的静态网站里面，在它的根目录下边，它下边的 `img` 文件夹是放静态图片的。
- `/docusaurus.config.js` - 这个是配置这个站点的。
- `/package.json` - node.js 的工程配置文件。
- `/sidebar.js` - 配置文档页面侧边栏，只有文档页面才有，用它来定义文档的目录结构。

## 站点配置: docusaurus.config.js

### 切换为博客风格, 删除docs板块

```react
presets: [
  [
    "@docusaurus/preset-classic",
    {
      // docs: {
      //   sidebarPath: require.resolve('./sidebars.js'),
      //   editUrl:
      //     'https://github.com/facebook/docusaurus/edit/master/website/',
      // },
      blog: {
        path: "./blog",
        routeBasePath: "/"
      }
      // 省略其它代码
    }
  ]
];
```

- 默认是文档风格的主页, 这里按照上方代码修改 `docusaurus.config.js` 文件的 `presets` 
    - `path` 属性，它的值为”./blog”，指向 blog 的文件夹
    - `routeBasePath` 属性，这个是访问这个博客的路径，设置成`/`斜杠就是默认网站的首页
-  `/src/pages` 下边 `index.js` 的改成别的名字或者是给删除
    - 删除顶部导航`docs`, 找到 `footer:links` `navbar:items` 配置项
        - ![footer:links](https://img.eksnotebook.com/images/Snipaste_2024-09-08_22-13-47.png)
    
- 效果如下图

    ![](https://img.eksnotebook.com/images/Snipaste_2024-09-08_22-21-23.png)

## 博客发表

- 文件名格式 `2019-05-30-welcome.md`

- 内容基础信息
    ```markdown
    ---
    id: welcome
    title: Welcome
    author: Yangshun Tay
    author_title: Front End Engineer @ Facebook
    author_url: https://github.com/yangshun
    author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
    tags: [facebook, hello, docusaurus]
    ---
    ```

    - `id` - 访问这个博客的 URL。
    - `title` - 标题。
    - `author` - 作者。
    - `author_title` - 就是作者简短的自我介绍，职位之类的。
    - `author_image_url` - 头像。
    - `tags` - 博客标签, 是个数组形式。

- 只展示部分内容, 其余部分折叠起来

    - ```markdown
        <!--truncate-->
        ```
