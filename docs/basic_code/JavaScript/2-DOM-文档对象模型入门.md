---
id: 1731504549
slug: /basic_code/JavaScript/1731504549
title: DOM-文档对象模型入门
date: 2024-10-13
authors: Electrical Killer
tags: [js, dom]
keywords: [js, dom]
---

## DOM概述

> DOM是一个结构规范, 可以使用各种语言实现
> 离开DOM, JS就无法操控网页
> 并且, JS也是DOM最常用的操作语言

`DOM` 是 `JavaScript` 操作网页的接口, 全称为"文档对象模型" - `Document Object Model`

作用是将网页转化为 `JS` 对象, 从而进行脚本对网页的各种操作

浏览器会根据 `DOM` 模型, 将结构化文档解析为一系列节点, 再由这些节点组成一个树状结构 `DOM Tree` , 所有的节点和最终的树状结构, 都有规范的对外接口

### 节点

`DOM` 最小的组成单位叫做 `节点` , 文档的树形结构, 就是由各种不同类型的节点组成, 每个节点可以看作文档树的一部分

<img src="https://img.eksnotebook.com/images/image-20211027131821279.png" alt="image-20211027131821279"/>



节点的类型有7种

- `Document`: 文档树的顶层节点
- `DocumentType`: doctype标签
- `Element`: 各种HTML标签
- `Attribute`: 网页元素属性( class="right" )
- `Text`: 标签内或之间包含的问本
- `Comment`: 注释
- `DocumentFragment`: 文档的片段

### 节点树

将所有节点, 抽象成的一种树状结构, 该结构就是节点树

包含一个顶层节点, 下层的子节点, 下下层的子节点

> 浏览器提供的原生document节点, 代表整个文档
>
> `document`
>
> <img src="https://img.eksnotebook.com/images/Snipaste_2024-10-06_16-25-17.png" />

除了根节点, 其他节点还包含其他三种层次关系

> `parentNodes` - 父节点
>
> `childNodes` - 子节点
>
> `sibling` - 拥有一个父节点的节点

## `Node.nodeType` 节点属性

| 类型                          | 常量 | 值                            |
| ----------------------------- | ---- | ----------------------------- |
| `Node.DOCUMENT_NODE`          | 9    | 文档节点<br/>document          |
| `Node.ELEMENT_NODE`           | 1    | 元素节点<br/>element           |
| `NODE.ATTRIBUTE_NODE`         | 2    | 节点属性<br/>attribute         |
| `NODE.TEXT_NODE`              | 3    | 文本节点<br/>text              |
| `NODE.DOCUMENT_FRAGMENT_NODE` | 11   | 文档片段<br/>document fragment |

- 例如

    - ```js
        document.nodeType // 9
        document.nodeType === Node.DOCUMENT_NODE // true
        ```

## document获取元素

### `document.getElementsByTagName()`搜索html标签

搜索 HTML 标签, 返回符合条件的元素
返回值是一个类似数组的对象（`HTMLCollection`实例）
可以实施反映 HTML 文档的变化, 若没有匹配内容, 返回一个空集

```js
// 匹配p标签
var paras = document.getElementsByTagName('p');
```

如果传入 `*`, 就可以返回文档中所有 HTML 元素

```js
var allElements = document.getElementsByTagName('*');
```

### `document.getElementsByClassName()` 搜索class元素

根据 `class` 元素名称, 返回符合条件的对象
返回值是一个类似数组的对象（`HTMLCollection`实例）
参数可以是多个`class`，它们之间使用空格分隔

```js
var elements = document.getElementsByClassName('foo bar');
```

### `document.getElementsByName()`搜索name属性

搜索拥有name属性的元素, 比如`<form>` `<radio>` `<img>`
返回类似数组的对象（`NodeList`实例）

```js
var forms = document.getElementsByName('itbaizhan');
```

### `document.getElementById()`搜索ID属性

匹配`id` 属性的元素节点
没有匹配到, 返回NULL

注意: 

- 大小写敏感
- 大小写敏感

```js
var elem = document.getElementById('para1');
```

### `document.querySelector()`搜索css选择器

匹配 `.class` 选择器, 返回匹配的**第一个节点**
没有匹配, 返回NULL

```js
var el1 = document.querySelector('.myclass');
```

### `document.querySelectorAll()`搜索css选择器, 返回所有

匹配 `.class` 选择器, 返回匹配的`NodeList`对象

```js
var elementList = document.querySelectorAll('.myclass');
```

## document创建元素

### `document.createElement()`生成元素节点

```js
var newDiv = document.createElement('p'); // <p></p>
console.log(newDiv);
```

### `document.createTextNode()`生成文本信息

```js
var newDiv = document.createElement('p');
var newContent = document.createTextNode('Hello');

// 扩充方法
console.log(newDiv.appendChild(newContent)); // 将文本补充于上述 `newDiv` 容器中
```

### `document.creatAttribute()`增加新属性

基于现有标签, 新增属性

> 只有属性添加使用额外的方法 `setAttributeNode()`
> 将内容或元素放到容器中 使用 `.appendChild()`

```js
// 创建拥有id的属性
var it = document.createAttribute('id'); // id=""
// id属性赋值
it.value = 'root'; // id="root"
// 将新属性补充到目标元素中
newDiv.setAttributeNode(it);
```

## document(Element)属性

<img src="https://img.eksnotebook.com/images/202410130819771.png"/>

每一个HTML元素, 都会转化为一个Element, 且在ODM树上转化为一个Elment节点对象

- `id` - 该属性可读可写
- `classList` - 拥有方法, 操作class对象, 比如添加, 移除, 检查, ...
- `className` - 用于读写元素节点的class属性, 每个class用空格分隔
- `innerHTML` - 改写 `HTML` `body` 元素内容
- `innerText` - 区别 `innerHTML` , 该属性会直接==渲染为字符串==

### `id` 

```js
// HTML 代码为 <p id="foo">
var p = document.querySelector('p');
p.id // "foo"
```

### `className`

```js
// HTML 代码 <div class="one two three" id="myDiv"></div>
var div = document.getElementById('myDiv');
div.className
```

### `classList`

- 对象有如下方法

    - `add()`：增加一个 class
    - `remove()`：移除一个 class
    - `contains()`：检查当前元素是否包含某个 class
    - `toggle()`：将某个 class 移入或移出当前元素

- ```js
    var div = document.getElementById('myDiv');
    
    div.classList.add('myCssClass');
    div.classList.add('foo', 'bar');
    div.classList.remove('myCssClass');
    div.classList.toggle('myCssClass'); // 如果 myCssClass 不存在就加入，否则移除
    div.classList.contains('myCssClass'); // 返回 true 或者 false
    ```

### `innerHTML`

`.innerHTML`属性返回一个字符串，等同于该元素包含的所有 HTML 代码。该属性可读写，常用来设置某个节点的内容。它能改写所有元素节点的内容，包括`<HTML>`和`<body>`元素

### `innerText`

`innerText`和`innerHTML`类似，不同的是`innerText`无法识别元素，会直接渲染成字符串

## document(Element)获取位置

| 属性         |                             描述                             |
| :----------- | :----------------------------------------------------------: |
| clientHeight | 获取元素高度包括`padding`部分，但是不包括`border`、`margin`  |
| clientWidth  | 获取元素宽度包括`padding`部分，但是不包括`border`、`margin`  |
| scrollHeight | 元素总高度，它包括`padding`，但是不包括`border`、`margin`包括溢出的不可见内容 |
| scrollWidth  | 元素总宽度，它包括`padding`，但是不包括`border`、`margin`包括溢出的不可见内容 |
| scrollLeft   |              元素的水平滚动条向右滚动的像素数量              |
| scrollTop    |              元素的垂直滚动条向下滚动的像素数量              |
| offsetHeight | 元素的 CSS 垂直高度（单位像素），包括元素本身的高度、padding 和 border |
| offsetWidth  | 元素的 CSS 水平宽度（单位像素），包括元素本身的高度、padding 和 border |
| offsetLeft   |                    到定位父级左边界的间距                    |
| offsetTop    |                    到定位父级上边界的间距                    |

### `.clientHeight/Width` 包括padding的长宽

返回整数值, 表示CSS元素的高度, ==仅作用一个块元素, 行内元素返回0==

若块元素未设置高度, 则返回实际高度

数值包含padding, 若有滚动条, 要删除对应占用的大小, ==小数会被四舍五入==

常用的两个属性如下

- `document.documentElement.clientHeight` - 视口高度( 当下网页的实际大小 )
- `document.body.clientHeight` - 对应网页内容的实际高度

### `.scrollHeight/Width` 包括padding/隐藏的长宽

返回整数值, 表示元素CSS的像素, 包括自身像素, padding

==小数会被四舍五入==

常用的两个属性

- `document.documentElement.scrollHeight` - 视口高度( 当下网页的实际大小 )
- `document.body.scrollHeight` - 对应网页内容的实际高度

### `scrollTop/Left`上下/左右已滚动的像素

返回当前滚动条滚动的像素数量

没有滚动条的返回0

常用的两个属性

- `document.documentElement.scrollLeft` - 
- `document.documentElement.scrollTop` - 

### `offsetHeight/Width` 只读可见的元素高度+padding+border

返回整数值, 表示元素CSS的像素, 包括自身像素, padding, border

当css属性未不可见`display: none;`, 数值返回0

### `offsetLeft/Top` 相对父级元素的左上间距

> 若父级没有定位, 找上层父级, 直到顶层文档

```html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    
    .parent{
        width: 200px;
        height: 200px;
        background: red;
        position: relative; <!-- 定位 -->
        left: 50px;
        top: 50px;
    }

    .box{
        width: 100px;
        height: 100px;
        background: yellow;
        position: relative; <!-- 定位 -->
        left: 50px;
        top: 50px;
    }
</style>

<HTML>
    <div class="parent">
        <div class="box" id="box"></div>
    </div>
</HTML>

<script>
    var box = document.getElementById("box");
    console.log(box.offsetLeft);
    console.log(box.offsetTop);
</script>
```

## CSS操作

### 简单的setAttribute属性

直接使用元素的 `.setAttribute` 属性

```js
div.setAttribute(
  'style',
  'background-color:red;' + 'border:1px solid black;'
);
```

### `cssText`属性

```js
// 获取css元素
var divStyle = document.querySelector('div').style;

divStyle.cssText = 'background-color: red;'
  + 'border: 1px solid black;'
  + 'height: 100px;'
  + 'width: 100px;';
```

### 元素节点的操作

```js
// 获取CSS元素
var divStyle = document.querySelector('div').style;

divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';
divStyle.fontSize = '10em';
```
