---
id: 1731504624
slug: /basic_code/JavaScript/1731504624
title: ES6-模块module
date: 2024-10-19
authors: Electrical Killer
tags: [js, ES6, module]
keywords:  [js, ES6, module]
---

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的`require`、Python 的`import`，甚至就连 CSS 都有`@import`，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍

---

ES6 模块是通过`export`命令显式指定输出的代码，再通过`import`命令输入。
```js
export var Hello = "hello" // hello.js文件
import { Hello } from "./hello.js" // index.js文件
```

## Node.js环境测试

> Node.js 环境本身文件见会隔离
>
> 采用Nodejs方式进行测试Module语法
> 但是nodejs采用的是CommonJS的模块化规范，使用require引入模块
> 而import是ES6的模块化规范关键字
>
> 想要使用import，必须引入babel转义支持
> 通过babel进行编译，使其变成node的模块化代码

> 这里注意 `npm` 前面增加 `cnpm` 会使下载的速度更快

- 全局安装 babel-cli `cnpm install  -g babel-cli`
- 项目工程安装 babel-preset-env `cnpm install -D babel-preset-env`

- 运行代码 `babel-node --presets env index.js`

## export导出变量

```js
// 导出变量
export var firstName = 'sxt';
export var lastName = 'ekwork';
export var year = 2000;
```

```js
// 导出函数
export function add(x, y) {
      return x + y;
};
```

## import导入变量

> 使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块

```js
// profile.js
export var firstName = 'sxt';
export var lastName = 'ekwork';
export var year = 2000;

// main.js
import { firstName, lastName, year } from './profile.js';
```

### 重命名`as`

- 如果想为输入的变量重新取一个名字，`import`命令要使用`as`关键字，将输入的变量重命名
- 或者与本文件内容重名, 需要重命名

```js
// value.js
export var value = 1;

// main.js
import { value as val } from './value.js';
```

### 全部导入`*`

除了指定加载某个输出值，还可以使用整体加载，即用星号（`*`）指定一个对象，所有输出值都加载在这个对象上面

```js
// circle.js
export function area(radius) {
  return Math.PI * radius * radius;
}
export function circumference(radius) {
  return 2 * Math.PI * radius;
}


// main.js
import { area, circumference } from './circle';
// 可以修改如下
import * as circle from './circle';
```

## export default 命令

> 一个文件中, 只能存在一个该命令
>
> 一个文件中, 只能存在一个该命令
>
> 一个文件中, 只能存在一个该命令

从前面的例子可以看出，使用`import`命令的时候，==用户需要知道所要加载的变量名或函数名==，否则无法加载

但是用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法

为了给用户提供方便, 不用阅读文档就能加载模块，就要用到`export default`命令，为模块指定默认输出

```js
// export-default.js
export default function () {
  console.log('foo');
}
```

其他模块加载该模块时，`import`命令可以为该匿名函数指定任意名字

```js
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

