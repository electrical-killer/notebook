---
id: 1731504474
slug: /basic_code/Css/1731504474
title: CSS基础设计&布局技巧
date: 2024-09-20
authors: Electrical Killer
tags: [css]
keywords: [css]
---

<!-- truncate -->

## CSS盒子模型-Box Model

所有HTML元素可以看作盒子
`box model` 这一术语是用来设计和布局时使用

<img src="https://img.eksnotebook.com/images/image-20211202151036771.png"/>

`CSS`本质也是一个盒子,封装周围的是`HTML`, 她包括

- 外边框-margin
    - 清除框外区域, 是透明的( 第一个值上下, 第二个值左右 )
- 边框-border
    - 围绕在外边框和内容的边框
-   内边框-padding
    - 清除内容周围区域, ( 第一个值上下, 第二个值左右 )
- 实际内容-content
    - 内容, 显示文本和图像

```css
div{
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 2px solid red;
    margin: 10px;
    background: green;
}

<div></div>
```

## 弹性盒模型-flex box

> CSS3 中的一种新的布局模式

弹性盒是一种当前页面需要适应不同的屏幕大小, 以及设备类型时, 确保元素拥有恰当的行为的布局方式

> 这里强调:  
>
> 对该容器的渲染逻辑依旧正常, 弹性盒子只是定义了元素在其内部的布局

该类布局模型目的是提供一种更加有效的方式, 对一个容器中的子元素进行排列, 对齐和分配空白空间

### 弹性盒的内容

 由 `弹性容器-Flex container` 和 `弹性子元素-Flex item` 组成

弹性容器: 通过属性 `display` 的值将其值为 `flex` 

其内部包含了一个或多个弹性子元素

> 这里强调:
>
> 弹性盒默认, 内部元素均横向摆放

```html
<style>
    .flex-container {
        display: flex;
        width: 400px;
        height: 250px;
        background-color: lightgrey;
    }
    .flex-item {
        background-color: cornflowerblue;
        width: 100px;
        height: 100px;
        margin: 10px;
    }
</style>

<div class="flex-container">
    <div class="flex-item">flex item 1</div>
    <div class="flex-item">flex item 2</div>
    <div class="flex-item">flex item 3</div> 
</div>
```

### 弹性容器flex container

#### 弹性容器开关display

`display:flex;` 开启弹性盒, 且子元素默认水平排列

#### 子元素的位置flex-direction

`flex-direction: row | row-reverse | column | column-reverse`

- row: ( **default** ) 横向从左往右
- row-reverse: 横向从右往左, 翻转row
- column: 纵向排列
- column-reverse: 纵向从下向上, 翻转column

#### 元素纵轴对齐justify-content

`justify-content: flex-start | flex-end | center`

- flex-start: ( **default** ) 紧挨行头左纵轴
    - <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_11-47-06.png"/>
- flex-end: 紧挨行尾右纵轴
    - <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_11-50-16.png"/>
- center: 居中紧挨纵中心纵轴
    - <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_11-51-48.png"/>

#### 元素横轴对齐align-items

`align-items: flex-start | flex-end | center`

- flex-srart: 盒子上轴对齐
    - <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_11-59-27.png"/>
- flex-end:盒子下轴对齐
    - <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_11-58-35.png"/>
- center: 居中盒子中轴对齐
    - <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_11-55-43.png"/>

### 弹性子元素flex item

####  比例大小flex

根据盒子元素设置的扩展因子, 作为比例来分配剩余空间

- default:0 原本大小
- 按照设置的扩展因子转化为百分比, 从而分配空间
    - 总有1个元素, `flex:1;`:表示大小为100%
    - 总有3个元素, `flex:1 | 2 | 2;`, 表示大小分别占`20%, 40%, 40%`

```html
<style>
	.flex-container {
        display: flex;
        width: 400px;
        height: 250px;
        background-color: gold;
    }
    .flex-item1 {
        height: 150px;
        background-color: red;
        flex: 1;
    }
    .flex-item2 {
        height: 150px;
        background-color: green;
        flex: 2;
    }
    .flex-item3 {
        height: 150px;
        background-color: blue;
        flex: 1;
    }
</style>

<div class="flex-container">
    <div class="flex-item1">flex item 1</div>
    <div class="flex-item2">flex item 2</div>
    <div class="flex-item3">flex item 3</div> 
</div>
```

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-21_12-28-43.png"/>

## 脱离文档流

### 文档流介绍

文档流是文档中可显示对象在排列时, 所占用的位置/空间

- 块元素: 自上而下
- 内联元素: 自左而右

造成的问题现象:

- 各元素底边对齐, 效果会变得高矮不齐, 例如文字和图片
- 空白折叠现象: 无论中间有多少个空格, 换行, tab, 都会折叠为一个空格
- 元素无空隙: 如果想让img之间没有空隙, 必须紧密连接

### 脱离方式-浮动float

> 增加一个浮层来放置内容

`float` 定义元素往那个方向浮动, 任何元素都可以浮动

- left: 元素向左浮动
- right: 元素向右浮动

#### 浮动原理&问题

- 浮动原理

    - 使元素脱离了文档流

    - 浮动只有左右浮动, 没有上下浮动

    - 当所有元素同时浮动时, 会变成水平排列摆放

    - 当, 当前行摆放不下时, 换行摆放


- 浮动问题

    - 当元素浮动后, 该元素会脱离文档流向左或向右浮动, 这会造成如下问题

        - 浮动会造成父元素的高度塌陷, 不利于布局
        - 后续元素会收到影响


#### 清除浮动

- 父元素设置高度
    - 当仅出现父元素高度塌陷, 直接可以设置父元素的高度

- 元素增加clear
    - 当父元素撑开高度后, 其他子元素还收影响, 添加clear属性
        - `clear: both`

- overflow清除
    - 实际开发中, 动态问题, 不好使用上述解决方案
    - 父级标签中配置`display: block`
    - 标签中配置( 已收到影响 ): `clear: both`

- 伪对象方式
    - 如果遇到上述问题, 我们可以为`父级代码增加::after类型`
    
        - ```htm
            .container {
                width: 350px;
                border: 1px solid red;
            }
            
            .container::after {
                content: "";
                display: block;
                clear: both;
            }
            ```

### 脱离方式-定位position

|    值    |   描述   | 文档流关系 |
| :------: | :------: | :--------: |
| relative | 相对定位 |   未脱离   |
| absolute | 绝对定位 |    脱离    |
|  fixed   | 固定定位 |    脱离    |

均有四个方向调整属性: `left, top, right, bottom`

==注意:==

- 元素设置定位后, 相对定位和绝对定位, 相对于具有固定定位的父级元素进行调整
- 如果父级元素没有定位, 则继续上级寻找, 直到顶层文档

> 固定定位应用场景: 不跟随滚动条一起移动
>
> 绝对定位应用注意: 层层叠加

#### 相对定位:relative

```html
.box{
    width: 200px;
    height: 200px;
    background-color: red;
    position: relative;
    left: 100px;
}

<div class="box"></div>
```

#### 绝对定位:absolute

> `z-index` 属性, 决定元素的堆叠顺序
>
> 值越大, 越靠上

```html
.box1{
    width: 200px;
    height: 200px;
    background-color: red;
    position:absolute;
    left: 50px;
}
.box2{
    width: 300px;
    height: 300px;
    background-color: green;
	left: 30px;
	top: 30px;

	z-index: 49;
}
.box3{
    width: 300px;
    height: 300px;
    background-color: green;
	left: 40px;
	top: 40px;
}

<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
```

#### 固定定位:fixed

```html
.box1{
    width: 200px;
    height: 200px;
    background-color: red;
    position:fixed;
    left: 50px;
}
.box2{
    width: 300px;
    height: 300px;
    background-color: green;
}

<div class="box1"></div>
<div class="box2"></div>
```

## 圆角与阴影

### 圆角border-radius

`border-radius` 属性, 可以使用如下规则

> 数量足够算顺序, 数量不足算对角

1. 四个值: 第一个值为左上角, 第二个值为右上角, 第三个值为右下角, 第四个值为左下角
2. 三个值: 第一个值为左上角, 第二个值为右上角&左下角, 第三个值为右下角
3. 两个值, 第一个值为左上角&右下角, 第二个值为右上角&左下角
4. 一个值: 四个角一起

```html
.box1 {
    border-radius: 15px 50px 30px 5px;
    background: #8AC007;
    padding: 20px;
    width: 200px;
    height: 150px;
}

<div class="box1"></div>
```

### 阴影box-shadow

|    值    |         描述         |
| :------: | :------------------: |
| h-shadow | 必选，水平阴影的位置 |
| v-shadow | 必选，垂直阴影的位置 |
|   blur   |    可选，模糊距离    |
|  color   |   可选，阴影的颜色   |

## 动画@keyframes name

动画是使一个元素从一种样式主见变化为另一种样式的效果

可以改变任意多的样式, 任意多的次数

使用百分比来规定变化发生的时间, 也可以使用`from` `to` 代替`0%` `100%`

### 创建动画

```css
@keyframes name{
    0%{
        // CSS样式
    }
    50%{
        // css样式
    }
    100%{
        // css样式
    }
}
```

- `name` 可以自定义

### 执行动画animation

`animation: name duration timing-function delay iteration-count direction;`

| 值                   | 描述                | 描述&取值                                                    |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| name                 | 自定义名称          |                                                              |
| duration             | 持续时间-记得带单位 |                                                              |
| timing-function      | 效果                | default逐渐减慢: ease<br/>匀速: linear<br/>加速: ease-in<br/>减速: ease-out<br/>先加速后减速: ease-in-out |
| delay                | 延时后开始          |                                                              |
| iteration-count      | 循环次数            | 无限次: infinite                                             |
| direction            | 播放方向            | default向前: normal<br/>偶次向前, 奇次反向: alternate         |
| animation-play-state | 播放状态            | 播放: running<br/>停止: paused                                |

### 例子: 呼吸

```HTML
<style>
    .box{
        width: 300px;
        height: 300px;
        background-color: greenyellow;
        margin: 50px auto;
        box-shadow: 0px 1px 3px rgba(0, 128, 0, 0.3);

        animation: anima 2700ms ease-in infinite normal running;
    }

    @keyframes anima {
        0%{
            background-color: blue;
            box-shadow: 0px 1px 30px rgba(0, 128, 0, 0.3);
        }
        50%{
            background-color: rgb(118, 45, 186);
            box-shadow: 0px 1px 30px rgba(0, 128, 0, 0.3);
        }
        100%{
            background-color: rgb(176, 176, 252);
            box-shadow: 0px 1px 30px rgba(0, 128, 0, 0.3);
        }
    }
</style>
```

## 媒体查询@media screen and

媒体查询可以使页面在不同终端下达到不同的效果

根据设备大小自动识别加载不同的样式

### 基本标签属性meta

- 使用设备的宽度, 并禁止初始的释放
- <bead/> 标签中加入
- `<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">`
    - `width=device-width` - 宽度等于设备的宽度
    - `initial-scale` - 初始的缩放比例-default-1.0
    - `maximum-scale` - 允许用户缩放的最大比例
    - `user-scalable` - 用户是否可以手动缩放

### 基础语法

> 需求: 
>
> - 设备小于768px加载红色
> - 设备大于768px但是小于998加载绿色
> - 设备大于998px加载粉色

```html
@media screen and (max-width: 768px) {
    body{
        background-color: red;
    }
}
@media screen and (max-width: 998px) and (min-width: 768px) {
     body{
     	background-color: green;
     }
}
@media screen and (min-width: 998px) {
    body{
    	background-color: pink;
   	}
}
```

## 雪碧图

`CSS sprite` - 精灵图, 雪碧图

是网页的一种处理方式, 允许将一个页面中**所有的零星图片上传到一张图中**, 之后再**分开显示**

### 优势

- 减少图片的字节
- 减少http请求, 增加性能

### 原理: 引用background-image

### 原理: 移动background-position

|                 |   方向    |
| :-------------: | :-------: |
| 第一个参数-上下 | 负数-向上 |
| 第二个参数-左右 | 负数-向左 |

### 实例

> 需求: 显示中间的两个图片
> <img src="https://img.eksnotebook.com/images/Snipaste_2024-09-26_07-19-38.png"/><img src="https://img.eksnotebook.com/images/Snipaste_2024-09-26_07-20-38.png"/>

```html
.icon1 {
    display: block;
    background-image: url(https://img.eksnotebook.com/images/1.png);
    background-position: -20px 0;
    width: 45px;
    height: 70px;
}
.icon2 {
    display: block;
    background-image: url(https://img.eksnotebook.com/images/1.png);
    background-position: -93px -84px;
    width: 45px;
    height: 70px;
}

<i class="icon1"></i>
<i class="icon2"></i>
```

## 字体图标link引入

> 常用: [阿里字体图标库](https://iconfont.cn/)

<img src="https://img.eksnotebook.com/images/Snipaste_2024-09-26_07-23-12.png"/>

### 痛点

- 我们常用一些图标, 但是使用时会出现失真的形式

- 图片越多, 页面速度越慢

### 方案&优点

采用使用字体图标的方式显示图标

- 轻量级: 加载快, 减少http请求
- 灵活性: 利用css修改风格
- 兼容性: 支持所有现代浏览器, 包括IE低版本

### 使用字体图标

1. 注册账号并登录
2. 选取图标或搜索图标
3. 添加购物车
4. 下载代码
5. 选择`font-class`引用

```HTML
<link rel="stylesheet" href="./css/iconfont.css">
.iconfont{
    font-size: 35px;
    color: red;
}

<span class="iconfont icon-add-circle"></span>
```

