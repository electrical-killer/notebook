---
id: 1731504577
slug: /basic_code/JavaScript/1731504577
title: ES6 Basic Knowledge
date: 2024-10-17
authors: Electrical Killer
tags: [js, ES6]
keywords: [js, ES6]
---

## 命令行工具

常用命令行工具有两种

1. `CMD` 命令行工具
2. `PowerShell` 命令行工具

### CMD命令行

1. 打开命令行窗口
    1. win：左下角开始，找到运行，点击，输入`cmd`，回车
    2. win：`win+r` 快速打开命令行窗口
    3. mac：command + 空格，输入`terminal`
2. 选择盘符：盘符名加冒号`E:`
3. 查看盘符及目录下文件与文件夹：`win:dir   mac:ls`
4. 清空命令行信息：`win:cls  mac:clear`
5. 进入文件夹或目录：`cd  文件夹名称`
6. 返回到上一级目录：`cd ../`
7. 快速补全目录或文件夹名称：`tab`
8. 创建文件夹：`mkdir 文件夹名称`
9. 查看历史输入过的命令：上下按键

### PowerShell

1. 打开方式
    1. 在开始位置搜索`PowerShell`打开
    2. 在对应目录按住`shift`+右键，打开
2. 其他保持一直

## ECMAScript6

ECMAScript 和 JavaScript 的关系, 前者是后者的规格，后者是前者的一种实现
一般来说, 这两个词是可以互换的

### 名称详解

ECMAScript 6（以下简称 ES6）是 JavaScript 语言的标准，在 2015 年 6 月发布。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

| 版本    | 官方名称                            | **发布日期** |
| ------- | ----------------------------------- | ------------ |
| ES1     | ECMAScript 1                        | 1997         |
| ES2     | ECMAScript 2                        | 1998         |
| ES3     | ECMAScript 3                        | 1999         |
| ES4     | ECMAScript 4                        | 从未发布过   |
| ES5     | ECMAScript 5                        | 2009         |
| ES5.1   | ECMAScript 5.1                      | 2011         |
| **ES6** | **ECMAScript 2015（ECMAScript 6）** | **2015**     |
| ES7     | ECMAScript 2016                     | 2016         |
| ES8     | ECMAScript 2017                     | 2017         |
| ...     | ...                                 | ...          |

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等



### 语法提案的批准流程

任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。

一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站[GitHub.com/tc39/ecma262](https://github.com/tc39/ecma262)查看。

### ES6带来的新特性

1. `let` 和 `const` 命令
2. 变量的解构赋值
3. 字符串扩展
4. 函数扩展
5. 对象扩展
6. 数组扩展
7. 运算符扩展
8. Promise对象
9. Class
10. Class 继承
11. ...

## Nodejs环境安装

### Nodejs简介

Nodejs诞生于2009年，主攻服务器方向，使得利用`JavaScript`也可以完成服务器代码的编写

### Nodejs安装

> **Nodejs官网**
>
> https://nodejs.org/en/

Nodejs的安装与一般软件一样

<img src="https://img.eksnotebook.com/images/202410132130067.png" />

### 大量的库

安装`Nodejs`的同时，会附带一个`npm`命令，`npm` 是Node的包管理工具

`npm` 的简单结构有助于 Node.js 生态系统的激增

现在 `npm` 仓库托管了超过 1,000,000 个可以自由使用的开源库包

### `npm`镜像

由于服务器在国外，所以下载速度比较慢，我们可以用国内的镜像

> **阿里镜像地址** https://npmmirror.com/

在命令行运行如下命令即可

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

看到如下信息，代表安装成功

<img src="https://img.eksnotebook.com/images/202410132132139.png" />

## Babel转码器

Babel 是一个广泛使用的 ES6 转码器, 可以将 ES6 代码转为 ES5 代码, 从而在老版本的浏览器执行

因此, 你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持

>  **浏览器支持性查看**
>
> https://caniuse.com/
>
> **Babel官网**
>
> https://babeljs.io/

### 转码示例

原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了

```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

### Babel安装流程

#### 第一步：安装 Babel

```js
npm install --save-dev @babel/core
```



#### 第二步：配置文件`.babelrc`

Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。

该文件用来设置转码规则和插件，基本格式如下

```js
{
  "presets": [],
  "plugins": []
}
```



#### 第三步：转码规则

presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装

```js
npm install --save-dev @babel/preset-env
```



#### 第四步：将规则加入`.babelrc`

```js
{
    "presets": [
      "@babel/env"
    ],
    "plugins": []
}
```

### Babel命令行转码

Babel 提供命令行工具`@babel/cli`，用于命令行转码

```js
npm install --save-dev @babel/cli
```

基本用法如下

```js
# 转码结果输出到标准输出
$ npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
# 或者
$ npx babel src -d lib
```

## let (var)声明变量

`ES6` 新增了`let`命令，用来声明变量

- 它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效
- 注意 `var` 语法有 `变量提升`（**hoisting**）, 而 `let` 改变了这种特性, 所以, 使用一定==要在声明后使用==
- `let`不允许==在相同作用域内==，重复声明同一个变量

```js
{
  let name = 10;
  var sxt = 1;
}

name // ReferenceError: name is not defined.
sxt // 1
```

`for`循环的计数器，就很合适使用`let`命令

```js
for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined
```

## const声明常量

- `const`声明的常量不得改变值
    - `const`一旦声明变量，就必须立即初始化，不能留到以后赋值
- `const`的作用域与let命令相同：只在声明所在的块级作用域内有效
- `const`命令声明的常量也是不存在提升
- `const`声明的常量，也与`let`一样不可重复声明

## 变量(对象)解构赋值

常用的变量解构赋值为: `对象` 解构
解构赋值后, 可以直接使用元素去操作, 不再需要使用 `对象.元素` 的访问方式

- 注意对象的属性没有次序, 但是==变量必须要与属性同名==, 才能取到正确的值
    ```js
    let peo = {name:"iwen",age:20};
    let {age,name} = peo;
    
    console.log(age); // 20
    console.log(peo.age); // 20
    ```
    
- ==**不推荐使用重名定义**==，将一个已经声明的变量用于解构赋值，必须非常小心
  
    ```js
    let hello = "Hello";
    let { hello } = {hello:"hello"}; // 报错
    
    let hello = "Hello";
    ({ hello } = {hello:"hello"}); // 正确
    
- **常用的属性, 方法等**

    ```js
    let { random,floor } = Math;
    let { log } = console;
    
    log(random());
    ```


## 字符串操作

### 扩展功能: 万国码Unicode

ES6 加强了对 Unicode 的支持
允许采用`\uxxxx`的二进制形式表示一个字符
其中`xxxx`表示字符的 Unicode 码点

> 统一码（Unicode），也叫万国码、单一码，是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求

```js
"\u0061"
// "a"
```

### 扩展功能: 遍历`for(.. of)`

```js
// for (let i; i<str.lenght; i++) {
//    console.log(i);
// }

for (let i of 'itbaizhan') {
   console.log(i);
}
```

### 扩展功能: 模板字符串`` `$(变量)` ``

> ES5输入字符串+变量的形式
> ```js
> // 反引号 + 反引号 + 加 + 空格 + 加 + 变量
> // var value = "测试"
> // var text1 = "____'"+ value +"'____" 
> // 结果: ____测试____
> ```
>

模板字符串（template string）是增强版的字符串
用反引号（`）标识

作用:

- 当作普通字符串使用
- 可以用来定义多行字符串
- ==在字符串中嵌入变量==
  
    ```js
    let url = "www.baidu.com"
    // let h1 = "<a href='"+ url +"'>百度</a>"
    let h2 = `<a href='${url}'>百度</a>`
    ```

### 新增方法

#### 匹配在目标字串位置

传统上，JavaScript 只有`indexOf`方法，可以用来确定一个字符串是否包含在另一个字符串中
ES6 又提供了三种新方法

- `includes()` - 返回布尔值，表示是否找到了参数字符串
- `startsWith()` - 返回布尔值，表示参数字符串是否在原字符串的头部
- `endsWith()` - 返回布尔值，表示参数字符串是否在原字符串的尾部

```js
let s = 'Hello world!';

s.includes('o') // true
s.startsWith('Hello') // true
s.endsWith('!') // true

// 增加开始的位置
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

#### `repeat()`将字串重复并返回

```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

#### 字符串补全长度

如果某个字符串不够指定长度，会在头部或尾部补全

- `padStart()`用于头部补全
- `padEnd()`用于尾部补全

```js
'x'.padStart(6, 'ab') // 'ababax'
'x'.padEnd(6, 'ab') // 'xababa'
```

#### 去除字符串两端的符号

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

#### 返回参数位置的字符, 支持负参

`at()`方法接受一个整数作为参数
返回参数指定位置的字符
支持负索引（即倒数的位置

```js
const str = 'hello';
str.at(1) // "e"
str.at(-1) // "o"
```

> **温馨提示**
>
> 如果参数位置超出了字符串范围，`at()`返回`undefined`

## 数组

### 扩展运算符`…`

将一组数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```

#### 代替apply的拆分方法

```js
// 求数组的最大值
Math.max.apply(NULL, [14, 23, 34]); // ES5

Math.max(...[14, 23, 35]); // ES6

Math.max(14, 23, 35); // 等同
```

#### 代替concat的合并方法

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

### 扩展方法

### `Array.from()`将类(伪)数组转化数组

常见的伪数组包括

- `arguments ` - 函数传参内容, ==只能使用读取方法, 和length属性==

    - ```js
        function add(){
            let collect = Array.from(arguments); // 读到 10 20 30
            collect.push(40); // 真正的数组操作
            console.log(collect);
        }
        add(10,20,30)
        ```

- `元素集合` - `document.querySelectorAll(“CSS”) `- 读回来的HTML集

    - ```js
        let divs = document.querySelectorAll('div');
        console.log(Array.from(divs));
        ```

- 类似数组的对象 - 注意对象键的类型, 要==角标型的字串==

    - ==**注意格式, 一定要是数字索引属性+其他属性**==

    - ````js
        var user = {
            "0":"iwen",
            "1":20,
            "2":"男",
            length:3
        }
        console.log(Array.from(user));
        ````

### `Array.of()`将数值转化数组

```js
Array.of(3, 11, 8) // [3,11,8]
```

## 对象的扩展

- 属性键和值名称一样, 可以省略一个

    - ```js
        let name = "iwen"
        const user = {
            name,
            age:20
        }
        ```

- 方法省略function

    - ```js
        const o = {
          method() {
            return "Hello!";
          }
        };
        
        // 等同于
        
        const o = {
          method: function() {
            return "Hello!";
          }
        };
        ```

- 用于函数返回值

    - ```js
        function getPoint() {
          const x = 1;
          const y = 10;
          return {x, y};
        }
        
        getPoint() // {x:1, y:10}
        
        // 原逻辑
        function getPoint() {
          const x = 1;
          const y = 10;
          return {
              x:x, 
              y:y};
        }
        ```

- 扩展运算符

    - ```js
        let z = { a: 3, b: 4 };
        // let n = { z }; // {z: {...}} 之后...展开式z对象
        let n = {...z }; // {a: 3, b: 4}
        console.log(n);
        ```

    ## 函数扩展-箭头函数

- 可以使用 `=>` 定义函数
    记得参数带括号

    ```js
    var add = (x) => x;
    
    // 等价
    var add = function(x){
    return x;
    }
    ```

- 代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用`return`语句返回

    ```js
    var add = (x,y) => {
        var z = 10;
        return x+y+z;
    }
    
    // 等价于
    var add = function(x,y){
        var z = 10;
        return x+y+z;
    }
    ```

- 如果箭头后代码块返回的是一个对象
    那么因为语法问题, 需要在对象外面增加括号

    ```js
    var add = (x,y) => ({x:20, y:30});
    ```

- ==关键功能: 简化回调函数== (匿名函数)

    ```js
    var arr = [10, 30, 40];
    arr.map(
    	(item) => {
            console.log(item);
        }
    )
    ```

### 注意点-this

对于普通函数, `this` 指向函数运行时所在的对象

对于箭头函数, `this` 指定义==他的对象的上层作用域==

```js
var name = "electrical killer";
var user = {
    name:"iwen",
    getName(){
        setTimeout(() => {
            console.log(this.name); // "iwen"
        })
    }
}
```

## Set数据结构

### 基本用法

==ES6提供的新的数据结构==
类似于数组, 但区别是, ==同类型成员唯一==

定义使用`Set()`

```js
var s = new Set();
var arr = [10, 20, 30, 30, 40, 50];

arr.forEach(x => s.add(x)); // 将数组导出到s变量内

// 循环遍历
for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

### 去除重复数组成员

```js
[...new Set(array)]

// 将array转换为Set类型
// ...将Set类型拆分
// 将拆分内容使用 [] 括住
```

### 去除重复字符串

```js
[...new Set('ababbc')].join('')

// "abc"
// join 将数组转换为字符串
```

### size属性

> 返回 `Set` 变量的成员总数

```js
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5
```

### 方法

- add() - 添加

    - ```js
        var mySet = new Set();
        mySet.add("5", 5);
        console.log(mySet);
        ```

- delete() - 删除成员, 成功删除返回true

    - ```js
        var mySet = new Set();
        mySet.add(5);
        var flag = mySet.delete(5);
        console.log(flag); // true
        ```

- has() - 查询是否为 `set` 成员, 返回布尔

    - ```js
        var mySet = new Set();
        mySet.add("5")
        var flag = mySet.has("5");
        console.log(flag);  // true
        ```

- clear() - 清除

    - ```js
        var mySet = new Set();
        mySet.add("5")
        mySet.clear();
        console.log(mySet);  // Set(0) {size: 0}
        ```
