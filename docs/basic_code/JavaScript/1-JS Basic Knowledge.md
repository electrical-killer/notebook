---
id: 1731504538
slug: /basic_code/JavaScript/1731504538
title: JS Basic Knowledge
date: 2024-10-04
authors: Electrical Killer
tags: [js, es5]
keywords: [js, es5]
---

## JavaScript简介

> 部分基础语法和C语言相似, 甚至一摸一样
>
> 例如`条件语句`, `三元运算符`, `循环`, `返回关键字`......

一种可嵌入, 轻量级的脚本语言, 用来编写控制其他大型应用程序的"脚本"

学习JavaScript我们可以干些什么

- 开发各种小程序
- 前端与网页交互, 控制浏览器的能力
- 嵌入式开发中的内置网页开发

### JavaScript与ECMAScript的关系

ECMAScript和JavaScript的关系，`前者是后者的规范`，`后者是前者的实现`。在日常场合，这两个词是可以互换的

### JavaScript版本

- 09年12月, 发布了`ECMAScript5.0`, 也就是如今的主流版本
- 15年6月, 发布了 `ECMAScript6.0` , 更新版本, 俗称 `ES6` 

<!-- truncate -->

## 部分基本信息前置

- 程序执行单位为行, 语句结尾用 `;` 结束
    - 丢了也没关系, 因为是解释型脚本语言, 解释器( 浏览器 )会一行行的执行, 并且也会帮助补齐结束符

- `JavaScript有一些保留字，不能用作标识符`

    - arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield

- 调试的输出方式

    - 浏览器控制台的log输出为: `console.log("要输出的内容");`
    - `document.write("要输出的内容"); `
    - `alert("要输出的内容");`
        - 在浏览器中弹出一个对话框,然后把要输出的内容展示出, 
            alert都是把要输出的内容首先转换为字符串然后在输出的

- ==代码注释==方式

    - 如果代码在JS文件中, 与 `C语言` 完全一致, `//` `/* */`
    - 如果嵌入到 HTML 文件中, `<!-- 注释 -->`

- **嵌入HTML文本**

    - ```html
        <body>
        	<script>
        		var age = 20;
        	</script>
        </body>
        ```

- **引入独立JS文件**

    - ```html
        <body>
        	<script type="text/javascript" src="./itbaizhan.js"> </script>
        </body>
        ```

    - ```html
        <body>
        	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js">	</script>
        </body>
        ```

## 变量

### 敲黑板

JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行

造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做==变量提升==（**hoisting**）

### 声明方式

```js
var num = 10;
```

### ES5数据类型

> ES6 又新增了第七种 `Symbol` 类型的值和第八种 `BigInt` 类型, 待遇到后再谈

数据类型包括六种, 其中三种为基础数据类型

-  基础数据类型

    - 数值 - **`number`**
    - 字符串 - **`string`**
    - 布尔值 - **`boolean`**

- 对象 - **`object`**

    - 对象就是多个原始数据类型合成

    - ```js
        var user = {
            name:"尚学堂",
            age:20,
            learn:true
        }
        ```

- `NULL` & `undefined`

    - 都表示没有, 空
    - 语法使用基本一致

### 获取变量类型的方法之一:typeof

```js
typeof 123 		// "number"
typeof '123' 	// "string"
typeof false 	// "boolean"
typeof {} 		// "object"
```

## 运算符

### 比较运算符

> ==算数运算符== & ==赋值运算符== & ==逻辑运算符==
>
> 与C语言功能, 作用上完全一致
>
> 未研究其优先级, 但为保险, 所有运算嵌套, 增加 `()`

这里强调一下与C语言有差距的几个比较运算符

- `==` - 相等 `!=` - 不相等
    - 仅仅**值**不相等
- `===` - 严格相等 `!==` - 严格不相等
    - **值**与**类型**均作比较

### 取反运算符

```js
!undefined 	// true
!null 		// true
!0 			// true
!NaN 		// true
!"" 		// true
!false 		// true
```

## 字符串

- 在单引号和双引号内的**多个零**或**多个排在一起的字符**组成

- 单引号和双引号可以交替嵌套包含, 注意, 交替嵌套

    - 如果不交替使用, 需要在内部符号前增加转义符号 `\`

    - ```js
        "Did she say \"Hello\"?"
        'Did she say \'Hello\'?'
        ```

- 注意字符串默认只能写在一行内，分成多行, 需要在最后增加 `\`

### 字串属性

#### `.length`返回字串实际长度

### 字串方法

#### `.charAt(n)`返回指定位置的字符内容

- n == 字串数组地址角标, 默认从0开始
- n 为负数或大于等于字符长度, 返回`""`

```js
var s = new String('helloworld');

s.charAt(1) // "e"
s.charAt(s.length - 1) // "d"
s.charAt(-1) // ""
s.charAt(10) // ""
```

#### `.concat(...)`连接为 字符串

- 将参数内容补充到字串后方
- **如果参数不是字符串**, 先转换, 后拼接
- 字符串也可以用 `+` 号拼接

```js
'sxt'.concat('helloword', 'bjsxt') // "sxthellowordbjsxt"

var one = 1;
var two = 2;
var three = '3';

''.concat(one, two, three) // "123"
```

#### `.substring(x,y)`"数组角标-1"截取的字串

- 如果 `y>x`, 会自动互换
    - 之后如果参数是负数, 会自动变`0`
- `x` 表示开始位置
- **`y-1`** 表示结束位置
    - 如果为0, 返回`' '`

```js
var s = "helloworld";
s.substring(4,6); 	// "ow"
s.substring(6,4); 	// "ow"
s.substring(-1,6);	// (0,6)  "hellow"
s.substring(4);		// oworld
s.substring(2, -3);	// 先互换(-3, 2)-->(0, 2)--> // "he"
s.substring(0, 0);	// ''
```

#### `.substr(x, y)`字符长度截取字符串

> 对比`.substring(x, y)`

- `x`表示返回的开始地址, **负数时倒着数**
- `y` 表示返回的字符长度
    - 负数时变0, 返回`""`
    - 当`y > s.length` 返回到当前字串的结尾

```js
var s = "helloworld";
s.substr(4,2); 	// "ow"
s.substr(-1,6);	// "d"
s.substr(4);	// oworld
s.substr(2, -3);// (2, 0)--> // ""
s.substr(0, 0);	// ''
```

#### `.indexOf(x[,y])`匹配字串在目标字串位置

> 匹配返回位置
>
> 不匹配返回`-1`

- `x`参数为待操作字串

- `y`参数可选, **开始的位置**, default=0

```js
var s = 'hello world;
s.indexOf('o'); 		// 4
s.indexOf('o', 5); 		// 7
s.indexOf("abc");		// -1
```

#### `.trim()`去除字符串两端的符号

> 包括`空格` 
>
> 制表符 `\t \v` 
>
> 换行回车 `\n \r`

- ES6扩展语法
    - `.trimEnd()` - 尾部删除符号
    - `.trimStart()` - 头部删除符号

```js
'  hello world  '.trim(); // "hello world"
"   hello world   ".trimEnd(); // "   hello world"
"   hello world   ".trimStart(); // "hello world   "  
```

#### `.split(x[,y])`根据给定规则分割字符串后返回数组

- `x` 表示分割为数组的规则
- `y` 可选, 表示返回的最大成员数
    - 大于所有成员数后, 返回仅有的成员

```js
var s = "hello;world;every";
s.split(";"); 	// ['hello', 'world', 'every']
s.split("");	// ['h', 'e', 'l', 'l', 'o', ';', 'w', 'o', 'r', 'l', 'd', ';', 'e', 'v', 'e', 'r', 'y']
s.split();		// ['hello;world;every']

s.split(";", 0);	// []
s.split(";", 1);	// ['hello']
s.split(";", 2);	// ['hello', 'world']
s.split(";", 6);	// ['hello', 'world', 'every']
```

## 数组

- 是按照次序排列的一组数值

- 每个值的位置都有编号

- 数组是使用方括号开头

- 任何类型均可加入数组

    - `var arr = [ 100, [1, 2, 3],false ];`

- **数组的遍历方式**

    - `for`循环

    - `while`循环

    - `for...in`遍历

        - ```js
            // 遍历数组a, i自＋
            for (var i in a) {
              console.log(a[i]);
            }
            ```

### 数组属性

#### `.length`返回数组的长度

### 数组方法

> 注意:`typeof()`只能返回 `object` 类型

#### `Array.isArray(s)`判断数组s是否为数组

- 是, 返回true
- 否, 返回flase

```js
var arr = ['1', '2', '3'];
Array.isArray(arr); // true;
```

#### `.push()` `.pop()` 末端添加删除元素, 并返回新数组的长度

> ==注意: 无法保留原数组内容==
>
> ==注意: 无法保留原数组内容==
>
> ==注意: 无法保留原数组内容==

#### .`shift()` `.unshift()`首段添加删除元素, 并返回该数组

> ==注意: 无法保留原数组内容==
> 
> ==注意: 无法保留原数组内容==
>
> ==注意: 无法保留原数组内容==

- `.shift()` 如何遍历并清空数组

    - ```js
        var list = [1, 2, 3, 4, 5, 6];
        var item;
        
        while (item = list.shift()) {
          console.log(item);
        }
        
        // 利用数组list, 先将首元素弹出到item中
        // 直到没有元素后, 返回空, 跳出while循环
        ```

#### `.join(x)`按照规则将数组组成字符串

- `x` 为合并数组时的规则, 可以留空

- 数组成员为 `undefined` 或 `null` 或 `空格` , 会被转换为 `空字符`

    - ```js
        [undefined, null].join('#');	// '#'
        
        ['a',, 'b'].join('-'); 			// 'a--b'
        ```

- 搭配`.split()`, 可以实现数组与字符串间的转换

    - ```js
        var arr = ["a","b","c"];
        var myArr = arr.join("");
        console.log(myArr);
        console.log(myArr.split(""));
        ```

#### `.concat(...)`合并多个数组

> 常用场景: 朋友圈上拉加载效果, 合并数据

- 合并数组

    - ```js
        ['hello'].concat(['world'], ['!']);
        // ["hello", "world", "!"]
        ```

- 同时可以接受其他类型的参数

    - 直接补充到内部

    - ```js
        [1, 2, 3].concat(4, 5, 6,[7,8,9]);
        // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        ```

#### `.reverse()`颠倒数组

> ==注意: 无法保留原数组内容==
>
> ==注意: 无法保留原数组内容==
>
> ==注意: 无法保留原数组内容==

```js
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

- 一个字符串翻转的例子

    - ```js
        var str = "hello";
        str.split("").reverse().join("")
        
        // 字符串转数组, 数组翻转, 数组转字符串
        ```

#### `indexOf(x[,y])`匹配固定元素位置

- `x` 要匹配的数组元素
- `y` 可选, 开始检索的位置

```js
var arr = ['a', 'b', 'c'];

arr.indexOf('b');		// 1
arr.indexOf('a');		// 0
arr.indexOf('y');		// -1
arr.indexOf("it",2);	// -1
```

## 函数

- 定义: 一块可以反复调用的代码块

- 声明方式: **比较C语言, 缺少了函数类型区分**

    - ```js
        function print(s) {
        	console.log(s);
            return s;
        }
        ```

- 函数提升: 函数会和变量声明一样, 在源码解释后, 会提升到代码头部

    - ```js
        add();
        function add() {}
        ```

## 对象

- 对象就是一组 `键值对` ( key-value ) 的集合, 是一种无序的复合数据集合
- 其中键值可以是任意类型
    - 为数据类型时, 该键为 **属性**
    - 为函数类型时, 该键为 **方法**
    - 为另一个对象时, 可以形成链式引用

```js
var user = {
    name: 'itbaizhan',
    age: '13',
    getName: function (name) {
    	return name;
    },
    container:{
        frontEnd:["Web前端","Android","iOS"],
        backEnd:["Java","Python"]
    }
};

user.getName("helloworld"); // helloworld
user.container.frontEnd[1];	// "Android"
```

### 原生库Math

#### `Math.abs()` 绝对值

```js
Math.abs(1) // 1
Math.abs(-1) // 1
```

#### `Math.max()` `Math.min()` 最大小值

```js
Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity
```

#### `Math.ceil()` `Math.floor()` 上下取整

```js
Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3
Math.floor(3.2) // 3
Math.floor(-3.2) // -4
```

#### `Math.random()` 0~1的随机数

> 返回值的区间为 `[0,1)`, **大于等于0, 小于1**

```js
Math.random()

// 生成6~10之间的随机数
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomArbitrary(6, 10);
```

### 原生库Date

> 以格林威治时间 `1970年1月1日00:00:00作为时间的零点`
>
> `北京时间1970年01月01日08时00分00秒`
>
> 范围是前后1亿天, 单位ms

#### `Date.now()`获取当前时间距离零点的时间戳

#### Date对象的方法

|           解释           |    Date对象的方法    |
| :----------------------: | :------------------: |
|    返回距零点的毫秒数    |     `.getTime()`     |
|     返回这个月的几号     |     `.getDate()`     |
|   返回星期几, 0==周末    |     `.getDay()`      |
|      距离零点的年数      |     `.getYear()`     |
|    返回阳历, 4位年份     |   `.getFullYear()`   |
| 返回月份, 0~11, 表示1~12 |    `.getMonth()`     |
|         返回小时         |    `.getHours()`     |
|          返回ms          | `.getMilliseconds()` |
|         返回分钟         |   `.getMinutes()`    |
|          返回秒          |   `.getSeconds()`    |

```js
var d = new Date('January 6, 2022');
d.getDate() // 6
d.getMonth() // 0
d.getYear() // 122
d.getFullYear() // 2022
```

- 获取本年度剩余天数

    - ```js
        function leftDays(){
            var today = new Date();
            var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
            var msPerDay = 24 * 60 * 60 * 1000;
            var result = (endYear.getTime() - today.getTime()) / msPerDay;
            console.log(Math.floor(result));
        }
        ```
