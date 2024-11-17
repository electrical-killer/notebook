---
id: 1731504589
slug: /basic_code/JavaScript/1731504589
title: ES6-异步编程Promise+ajax
date: 2024-10-19
authors: Electrical Killer
tags: [js, ES6, promise, ajax]
keywords: [js, ES6, promise, ajax]
---

## 基本概念

是异步编程的一种解决方案
比起传统的`回调函数和事件`更加合理, 更加强大

他就相当于一个容器, 里面存储者未来才会结束的事件的结果
从语法上说, 他是一个对象, 可以获取异步操作后的消息
并提供同一的API

## 基本用法

- 基本实现

    ```js
    const promise = new Promise(function(resolve, reject){
        // ... 一些异步操作逻辑
        if (/* 异步操作成功了 */){
            resolve(value); // 返回异步成功结果
        }
        else{
            reject(error); // 返回异步失败代码
        }
        
        return 
    });
    ```

    - `Promise`构造函数接受一个函数作为参数, 他的两个参数, 不用自己部署, JS引擎提供
        - `resolve` 返回成功结果用的接口
        - `reject`返回失败代码用接口

- 使用 `then` 方法实现使用结果

    - ```js
        promise.then(function(value){
            // 成功的值
        }, function(error){
            //失败的代码
        });
        ```


## 实例: 加载图片

```js
var loadimge = (url) => {
    var promise = new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            reject(new Error('Could not load image.'));
        }
        img.src = url;
    });
    return promise;
}

var img = loadimge('https://img.eksnotebook.com/images/Snipaste_2024-09-22_16-45-13.png');

img.then(function(img) {
    var mydiv = document.getElementById('mydiv');
    mydiv.appendChild(img);
}, function(error) {
    console.log(error);
});
```

## Ajax+promise网络的异步操作更简单

### Ajax引入

Ajax（Asynchronous JavaScript and XML）是一种用于在不重新加载整个页面的情况下，与服务器进行异步通信的技术

> 它允许网页动态更新部分内容，提高用户体验。在现代Web开发中，Ajax通常与Promise结合使用，以简化异步操作的处理

如下实例中, `getJSON`函数使用了Promise来管理Ajax请求。具体关系体现在以下几个方面：

- **封装Ajax请求**：`getJSON`函数内部使用`XMLHttpRequest`进行Ajax请求, 并将其封装成一个Promise对象
    - 这意味着，当你调用`getJSON`时，返回的是一个Promise，而不需要关心具体的Ajax实现细节
- **异步处理**：通过使用Promise，代码可以轻松地处理成功和失败的回调
    - 在`getJSON`返回的Promise上，可以使用`.then()`方法来处理成功的响应，使用`.catch()`或在第二个参数中处理错误
- **提高可读性**：使用Promise使得代码逻辑更清晰，读起来更容易理解，尤其是在进行多个异步操作时，可以链式调用

### 请求 `json` 的实例

```js
<script>

    const getJSON = function (url) {
        const promise = new Promise((resolve, reject) => {
            const handler = function(){
                if (this.readyState !== 4) {
                    return;
                }
                
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                };
            }

            const client = new XMLHttpRequest(); /* XHR对象 */
            client.open("GET", url);                // 获取地址
            client.onreadystatechange = handler;    // 接收前后端执行的状态
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        })
        return promise;

    };

    getJSON('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then(data => {
        console.log(data);
    }, error => {
        console.error("出错了", error);
    });

</script>
```

