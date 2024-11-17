---
id: 1731504508
slug: /basic_code/Html/1731504508
title: HTML Basic Knowledge
authors: Electrical Killer
tags: [html]
keywords: [html]
---

<!-- truncate -->


## HTML5介绍

一种描述网页的 **超文本标记语言**, 文件后缀为`.html` 

该语言有一套标记标签, 标签是由尖括号包围的关键字, 例如`<HTML>`
标签有两种表现形式

- 双标签, `<html></html>`
- 单标签, `<img>`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>itbaizhan</title>
    </head>
    <body>
    </body>
</html>
```

### DOCTYPE声明

> `document type-文档类型缩写`
`<!DOCTYPE html>` 位于H5文档最前方, 是必须组成部分, 避免浏览器不兼容, 产生异常现象

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-14_21-34-28.png"/>

### 基本框架

#### html

定义 HTML 文档 ( 双标签 )
所有元素包含在内, 限定了文档的开始点和结束点

#### head

定义文档头部 ( 双标签 )
描述文档各种属性和信息, 包括标题, 位置或与其他文档的关系等
该部分内容不会直接显示给读者

##### ** title

**位于 `<head> </head>` 之间, 必须包含,** 定义文档的标题 ( 双标签 )
显示在浏览器窗口的**标题栏**或**状态栏**上

有利于 `SEO` 优化

> SEO是搜索引擎优化的英文缩写
>
> 通过对网站内容调整，满足搜索引擎的排名需求

#### body

定义文档主题 ( 双标签 )
包含文档的所有内容, 包括文本, 超链, 图像...
会直接显示在页面上

#### meta

描述HTML文档的属性, 关键词等
例如: 描述使用 `UTF-8` 编码:`charset="utf-8"`

## HTML基础标签"语法"

### !-- 注释

`<!--  -->`

### hx 标题

Heading 通过`<h1> - <h6>` 由大到小定义
正确使用标题, 有益于SEO检索

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

标题的属性`align="left | center | right"`, 默认为`left`

### 段落编辑:段落, 换行, 水平线

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-16_17-53-03.png" alt="" title="" width="" height=""/>

```html
<hr color="" width="" size="" align=""/>
<p>水平分解线下方, 展示段落的<br/>换行效果</p>
```

`<hr/>` 属性

- color: 水平线的颜色
- width: 水平线的宽度
- size: 水平线的高度
- align: 水平线的对齐方式(默认居中), 可选参数 `left | right`

### img 图片

`<img src="" alt="" title="" width="" height=""/>`

**注意**: <img/> 是单标签, 不需要闭合
<img/> 属性

- src：路径（图片地址与名字）
- alt：规定图像的替代文本
- width：规定图像的宽度
- height：规定图像的高度
- title：鼠标悬停在图片上给予提示

### a 超链接

`<a> </a>` 设置超文本链接: `<a href="url">链接文本</a>`

浏览器的**默认样式**展示说明

- 未访问的: 蓝色字体&下划线
- 访问过的: 紫色字体&下划线
- 访问点击时: 红色字体&下划线
- 鼠标落于链接上方时, 样式会变更

### 文本

|    标签    |        描述        |
| :--------: | :----------------: |
|   `<em>`   |    定义着重文字    |
|   `<b>`    |    定义粗体文本    |
|   `<i>`    |     定义斜体字     |
| `<strong>` |    定义加重语气    |
|  `<del>`   |     定义删除字     |
|  `<span>`  | 元素没有特定的含义 |

> 注意: 着重文字和斜体默认样式区别不大
>
> <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-16_18-09-29.png"/>

### ol 有序列表

`<ol> </ol>` 列表项目使用数字进行标记
每个列表项开始于`<li> </li>`
之间可以嵌套

属性`type` 拥有选项 `"1"` `"a"` `"A"` `"i"` `"I"`

### ul 无序列表

`<ul> </ul>` 列表项目使用符号进行标记
每个列表项开始于`<li> </li>`
之间可以嵌套

属性`type` 拥有选项 `"disc"-实心圆` `"circle"-空心圆` `"square"-小方块` `"none"-不显示`

常见应用场景

- 无序列表效果
- **导航效果**

### table 表格

`<table border="" width="" height=""> </table>`为表格起始
`<tr> </tr>`为表格行
`<td> </td>`为表格列

表格结构的属性

- `border`: 表格边框
- `width`: 表格宽度
- `height`: 表格高度

#### 合并单元格

- 水平合并：`colspan`
- 垂直合并：`rowspan`

修改过程如下图所示

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-16_19-08-43.png"/>

```html
<table border="1" width="500px" height="200px">
    <tr>
        <td>单元格1</td>
        <td>单元格2</td>
        <td>单元格3</td>
        <td>单元格4</td>
    </tr>
    <tr>
        <td>单元格5</td>
        <td>单元格6</td>
        <td>单元格7</td>
        <td>单元格8</td>
    </tr>
    <tr>
        <td>单元格9</td>
        <td>单元格10</td>
        <td>单元格11</td>
        <td>单元格12</td>
    </tr>
    <tr>
        <td>单元格13</td>
        <td>单元格14</td>
        <td>单元格15</td>
        <td>单元格16</td>
    </tr>
</table>
```

```html
<table border="1" width="500px" height="200px">
    <tr>
        <td colspan="2">单元格1单元格2</td>
        <td>单元格3</td>
        <td>单元格4</td>
    </tr>
    <tr>
        <td rowspan="2">单元格5单元格9</td>
        <td>单元格6</td>
        <td colspan="2" rowspan="2">单元格7单元格8<br/>单元格11单元格12</td>
    </tr>
    <tr>
        <td>单元格10</td>
    </tr>
    <tr>
        <td>单元格13</td>
        <td>单元格14</td>
        <td>单元格15</td>
        <td>单元格16</td>
    </tr>
</table>

```

### form 表单

用来给用户填写, 从而采集信息, 具有网页交互功能
使用场景: 登录注册, 搜索框
**表单由容器** ( 表单 ) **和控件** ( 输入框, 按钮...) **组成**

```html
<form action="url" method="get|post" name="myform"></form>
```

属性说明

- action: 服务器地址
- name: 表单名称
- method: 数据提交的方式
    - get: 一版提交少量数据, **url可以看到**内容
    - post: 一版提交大量数据, **url看不到**内容

> 拥有三个基本组成部分
> - 表单标签`<form> </form>`
> - 表单域`<input type="text">`
> - 表单按钮`<input tupe="submit">`

#### 表单元素-文本框

`<input type="text" name="ID">`, 用户输入文本内容, 且可以显示写入的内容

#### 表单元素-密码框

`<input type="password" name="Password">`, 用户输入密码, 且用符号替换内容

#### 表单元素-提交按钮

`<input type="submit" value="Submit">`

```html
<form name="input" action="url" method="get">
    ID:<input type="text" name="ID">
    <br/>
    Password:<input type="password" name="Password">
    <br/>
    <input type="submit" value="Submit">
</form>
```

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-16_19-37-17.png"/>

### 内联元素( &块元素 )

HTML5出现之前，经常把元素按照**块级元素和内联元素**来区分, HTML5中，元素不再按照这种⽅式来区分, 按照[内容模型区分](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories): `元数据型(metadata content)` `区块型(sectioning content)` `标题型(heading content)` `文档流型(flow content)` `语句型(phrasing content)` `内嵌型(embedded content)` `交互型 (interactive content)`

<img src="https://img.eksnotebook.com/images/Content_categories_venn.png" />

但如上的分类方式对初学者不友好, 这里仍按照老版HTML学习分类

|                      块级元素                       |                    内联元素                    |
| :-------------------------------------------------: | :--------------------------------------------: |
|  块元素会在页面中独占一行 <br/>（自上向下垂直排列）  |             行内元素只占自身的大小             |
|         **可以设置**`width` ，`height`属性          |   行内元素设置`width`，`height`**属性无效**    |
| ⼀般块级元素<br/>可以包含行内元素和**其他块级元素** | ⼀般内联元素<br/>包含内联元素**不包含块级元素** |

- 常见的块元素
    - div
    - form
    - h1~h6
    - hr( 水平线 )
    - p
    - table
    - ul
    - ol...
- 常见内联元素
    - a
    - b
    - em
    - i
    - span
    - strong...
- 行内块级元素 ( 不换行, 可以识别宽, 高 )
    - button
    - img
    - input...

## HTML5新增标签

`HTML5` 出现以前, 一般采用 `DIV+CSS` 布局页面, 缺点是**文档结构不清晰**, 也**不利于对网页的爬取**
为解决上述问题, `HTML5` 增加很多新语义化标签

### DIV实现

<img src="https://img.eksnotebook.com/images/image-20211126150749756.png" />

### HTML5新标签实现

<img src="https://img.eksnotebook.com/images/image-20211126150757403.png" />

- `<header></header>`  头部
- `<nav></nav>`  导航
- `<section></section>`定义文档中的节,比如章节、页眉、页脚
- `<aside></aside>`  侧边栏
- `<footer></footer>` 脚部
- `<article></article>`  代表一个独立的、完整的相关内容块,例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等

## 附录: HTML快捷标签语法(进阶)

- `vscode` 生成html框架, `! 后回车`
- 生成h1~h6顺序标题: `h$*6` 
- 生成无序列表框架: `ul>li*3`
- 生成**2行1列的表格**：`table>tr*2>td*1{内容}`
- 

