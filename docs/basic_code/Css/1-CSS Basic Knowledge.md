---
id: 1731504467
slug: /basic_code/Css/1731504467
title: CSS Basic Knowledge
date: 2024-09-14
authors: Electrical Killer
tags: [css]
keywords: [css]
---

<!-- truncate -->

## CSS介绍

`Cascading Style Sheets` - 层叠样式表, 又叫级联样式表, 简称样式表
文件后缀为`.css`
用于HTML文档中元素样式的定义

CSS存在的**唯一目的便是让网页具有美观一致的页面**

`CSS`语法规则有两个主要的部分构成: `选择器+声明( 样式 )`

<img src="https://img.eksnotebook.com/images/image-20211129154503132.png"/>

- 选择器通常是需要改变样式的HTML元素
- 每条声明由一个属性和一个值构成

## CSS引入方式

### 内联样式style

在相关的标签内使用`style属性`
`style属性`可以包含任何`CSS属性`

缺点: 维护成本高

```css
<p style="background: orange; font-size: 24px;">CSS<p>
```

### 内部样式< style >

使用标签`<style> </style>`在头部`<head> </head>`内
虽然具备了统一性和规划性, 但是维护多个页面间容易混乱

```css
<head>
    <style> 
       h1 { 
           background: red; 
       } 
    </style>
</head>
```

### 推荐的外部样式< link > 

可以通过`.css`外部文档改变整个站点的外观
使用`<link>`标签链接到样式表
需要在文件头部声明

```css
<link rel="stylesheet" type="text/css" href="xxx.css">
```

## 选择器

选择器包含如下5个类型, 其优先级降序如下所示
`内联样式(1000)` > `ID选择器(100)` > `类选择器(10)` > `元素选择器(1)` > `全局选择器`

### 全局选择器*

与任何元素匹配, 优先级最低, 一般做样式初始化

```css
*{
     margin: 0;
     padding: 0;
 }
```

### 元素选择器-本身

HTML文档中的元素，`p、b、div、a、img、body`...
相同标签具有的`共性`

```css
p{
    font-size:14px;
}
```

这里注意, 文本属性标签中`<span> </span>`没有特殊含义, 可以结合标签选择器

```css
<p>练习<span>前端</span>, 为了搭建react做的博客</p>

span{
	color: red;
}
```

### 类选择器class .

结合标签的`class 属性名称`,配合`.`定义
并且, 同一个标签可以使用多个类选择器

```css
/*定义类选择器*/
.test1_oneclass{
	width:800px;
}

.test2_oneclass{
	color:red;
}

<h2 class="test1_oneclass">你好,一个类选择</h2>
<h2 class="test1_oneclass test2_oneclass">你好, 两个类选择</h2>
```

### ID选择器id #

结合标签的 `id` 属性名称, 配置`#`实现
注意, `id`属性只能被使用一次, 否则在`Js`中调用会出问题, 就像C语言的变量一样

```css
#mytitle{
    border:3px dashed green;
}

<h2 id="mytitle">你好</h2>
```

### 合并选择器class .,. 

为了代码结构更美观, 更具有逻辑, 使用语法: `选择器1,选择器2,...{ }` 

```css
.header, .footer{
    height:300px;
}
```

## 字体属性

### 颜色color

四种表现格式, 其中`rgba`的第四个元素表示透明度

```css
div{ color:red;}
div{ color:#ff0000;}
div{ color:rgb(255,0,0);}
div{ color:rgba(255,0,0,.5);}
```

### 大小font-size

> chrome最小字体为12px

`p {font-size:14px;}`

### 粗细font-weight

| 值      | 描述                                       |
| ------- | ------------------------------------------ |
| bold    | 定义粗体字符                               |
| bolder  | 定义更粗的字符                             |
| lighter | 定义更细的字符                             |
| 100~900 | 定义由细到粗  400等同默认，而700等同于bold |

```css
h1 {font-weight:normal;}
div{font-weight:bold;}
p{font-weight:900;}
```

### 样式font-style

| 值     | 描述       |
| ------ | ---------- |
| normal | 默认值     |
| italic | 定义斜体字 |

### 字体font-family

`font-family:"Microsoft YaHei";`

## 背景属性

| 属性                | 描述                 |
| ------------------- | -------------------- |
| background-color    | 设置背景颜色         |
| background-image    | 设置背景图片         |
| background-position | 设置背景图片显示位置 |
| background-repeat   | 设置背景图片如何填充 |
| background-size     | 设置背景图片大小属性 |

### 颜色background-color

```css
<div class="box"></div>
.box{
    width: 600px;
    height: 600px;
    background-color: #fcc;
}
```

### 图像background-img

默认情况, 放置在元素的左上角

```css
<div class="box"></div>
.box{
    width: 600px;
    height: 600px;
    background-image: url("images/img1.jpg");
}
```

### 重复background-repeat

设置如何平铺背景图像

| 值        | 说明             |
| --------- | ---------------- |
| repeat    | 默认值           |
| repeat-x  | 只向水平方向平铺 |
| repeat-y  | 只向垂直方向平铺 |
| no-repeat | 不平铺           |

```css
.box{
    width: 600px;
    height: 600px;
    background-color: #fcc;
    background-image: url("images/img1.jpg");
    background-repeat: no-repeat;
}
```

### 大小background-size



| 值         | 说明                                                         |
| ---------- | :----------------------------------------------------------- |
| length     | 设置背景图片的宽度和高度<br/>第一个值宽度，第二个值高度<br/>如果只是设置一个，第二个值auto |
| percentage | 计算相对位置区域的百分比<br/>第一个值宽度，第二个值高度<br/>如果只是设置一个，第二个值auto |
| cover      | 保持图片纵横比<br/>将图片缩放成完全覆盖背景区域的最小大小<br/>剩余内容会裁掉 |
| contain    | 保持图片纵横比<br/>将图像缩放成适合背景定位区域的最大大小    |

```css
.box{
    width: 600px;
    height: 600px;
    background-image: url("images/img1.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-size: cover; */
    /* background-size: contain; */
}
```

### 方位background-position

设置背景图像的起始位置，其默认值是：`0% 0%`

|      值		| 说明                                                         |
| :-----------:	| ------------------------------------------------------------ |
|   left  top	| 左上角                                                       |
|  left center	| 左 中                                                        |
|  left bottom	| 左 下                                                        |
|   right top 	| 右上角                                                       |
| right center  | 右 中                                                        |
| right bottom  | 右 下                                                        |
|  center top   | 中 上                                                        |
| center center | 中 中                                                        |
| center bottom | 中 下                                                        |
|    x%  y%     | 第一个值是水平位置, 第二个值是垂直位置<br/>左上角是0%  0%，右下角是100%  100%<br/>如果只指定了一个值，其他值默认是50%<br/>默认是0%  0% |
|   xpos ypos   | 单位是像素                                                   |

```css
.box{
    width: 600px;
    height: 600px;
    background-color: #fcc;
    background-image: url("images/img1.jpg");
    background-repeat: no-repeat;
    background-position: center;
}
```

## 文本属性

### 对齐text-align

| 值     | 描述                 |
| ------ | -------------------- |
| left   | 文本居左排列，默认值 |
| right  | 把文本排列到右边     |
| center | 把文本排列到中间     |

```css
h1 {text-align:center}
h2 {text-align:left}
h3 {text-align:right}
```

### 修饰text-decoration

| 值           | 描述       |
| ------------ | ---------- |
| underline    | 定义下划线 |
| overline     | 定义上划线 |
| line-through | 定义删除线 |

```css
h1 {text-decoration:overline} 
h2 {text-decoration:line-through} 
h3 {text-decoration:underline}
```

### 大小写text-transform

| 值         | 描述                 |
| ---------- | -------------------- |
| captialize | 定义每个单词开头大写 |
| uppercase  | 定义全部大写字母     |
| lowercase  | 定义全部小写字母     |

```css
h1 {text-transform:uppercase;}
h2 {text-transform:capitalize;}
p {text-transform:lowercase;}
```

### 首行缩进text-indent

> 负值是允许的。如果值是负数，将第一行左缩进
>
> 汉字两个字缩进像素为30px

```css
p{
	text-indent:30px;
}
```

## 表格属性

生成**2行1列的表格**：`table>tr*2>td*1{内容}`

### 基础边框border

```css
/* 1px的黑色实线 */
table, td { border: 1px solid black; }
```

### 折叠边框border-collapse

```css
table,td { border: 1px solid black; }
table { border-collapse: collapse; }
```

### 宽高width height

```css
table { width:100%; } 
td { height:50px; }
```

### 列·垂直对齐vertical-align

```css
td { height:50px; vertical-align:bottom; }
```

### 列·表内填充padding

表的内容中控制空格之间的边框

```css
td { padding:15px; }
```

## 关系选择器

### 后代选择器 

语法: `E F{}`
解读: E标签内的F类型, 全部生效

```css
ul li{
    color:green;
}
```

```HTML
<ul>
     <li>宝马</li>
     <li>奔驰</li>
</ul>
<ol>
     <li>奥迪</li>
</ol>
```

### 子代选择器>

语法: `E>F()`
解读: 所有作为E元素的直接子元素F

```css
div>a{
    color:red
}
```

```HTML
<div> 
    <a href="#">子元素1</a>
    <p> <a href="#">孙元素</a> </p>
    <a href="#">子元素2</a>
</div>
```

### 相邻兄弟选择器+

语法: `E+F()`
解读: 向下选择相邻的第一个兄弟元素，只能向下, 且为第一个

```css
h1+p{
    color:red;
}
```

```HTML
<h1>h1元素</h1> 
<p>第一个元素</p> 
<p>第二个元素</p>
```

### 通用兄弟选择器~

语法: `E~F()`
解读: 向下选择相邻的所有兄弟元素，只能向下

```css
h1~p{
    color:red;
}
```

```html
<h1>h1元素</h1>
<p>第一个元素</p>
<p>第二个元素</p>
```

