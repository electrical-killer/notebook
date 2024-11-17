---
id: 1731504599
slug: /basic_code/JavaScript/1731504599
title: ES6-异步变同步async
date: 2024-10-19
authors: Electrical Killer
tags: [js, ES6, promise, async]
keywords: [js, ES6, promise, async]
---

ES2017 标准引入了 async 函数，使得异步操作变得更加方便
async函数可以==将异步操作变为同步操作==

## 问题代码

```js
function printf(){
    setTimeout(() => {
        console.log("定时器");
    }, 1000);
    console.log("hello");
}

printf();

// 打印结果是:
// hello
// 定时器
```

- `setTimeout()` 是异步函数
    - 无论当时有没有执行结果, 均会跳过, 执行下一条

## 异步优化`async await`

```js
var timeout = ms => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

var asyncprintf = async (value, ms) => {
    await timeout(ms);
    console.log(value);
} 

asyncprintf("hello world", 1000);
```

- `async` 修饰后的函数, 可利用关键字 `await` 等待, 知道完成并返回后, 执行下方操作
- `async` 会直接读取 `promise` 对象的异步返回内容

## 应用实例

```js
function ajax(){
    return new Promise((resolve, reject) => {
        /* $. 使用的 `jquery`网络请求方案, 需要Js库引入 */
        /* 这里默认已引入, 之后再学习补充 */
        $.getJSON(url, result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    });
}

var getinfo = async () => {
    let ids = await ajax("http://iwenwiki.com/api/generator/list.php")
    let names = await ajax("http://iwenwiki.com/api/generator/id.php?id="+ids[0])
    let infos = await ajax("http://iwenwiki.com/api/generator/name.php?name=" + names.name)

    console.log(infos);
} 
```

