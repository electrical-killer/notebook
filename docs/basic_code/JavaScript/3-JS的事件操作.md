---
id: 1731504559
slug: /basic_code/JavaScript/1731504559
title: JS的事件操作
date: 2024-10-13
authors: Electrical Killer
tags: [js, 事件]
keywords: [js, 事件]
---

## 事件处理程序

事件处理程序分为：

- HTML事件处理
    - `HTML`和`Js`代码耦合
- DOM0级事件处理
    - 一个事件只能生效最后一个相应, 先前出现的会被覆盖
- DOM2级事件处理
    - 一个事件可以有多个相应, 不同于DOM0

### HTML事件

```html
<button onClick="clickHandle()" >按钮</button>

<script>
    function clickHandle(){
        console.log("点击按钮");
    }
</script>
```

### DOM0事件

```html
<button id="btn">按钮</button>

<script>
    var btn = document.getElementById("btn");

    btn.onclick = function(){
        console.log("test1");
    }
</script>
```

### DOM2事件

```html
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>

<script>
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    btn1.addEventListener("click", function(){
        btn1_demo();
    });
    btn2.addEventListener("click", function(){
        btn2_demo();
    });

    function btn1_demo(){
        console.log("DOM2 btn1");
    }

    function btn2_demo(){
        console.log("DOM2 btn2");
    }
</script>
```

## 鼠标事件

主要的鼠标事件, 如下所示: 

- `click`：按下鼠标时触发
- `dblclick`：在同一个元素上双击鼠标时触发
- `mousedown`：按下鼠标键时触发
- `mouseup`：释放按下的鼠标键时触发
- `mousemove`：当鼠标在节点内部移动时触发。当鼠标持续移动时，该事件会连触发。
- `mouseenter`：鼠标进入一个节点时触发，进入子节点不会触发这个事件
- `mouseleave`：鼠标离开一个节点时触发，离开父节点不会触发这个事件
- `mouseover`：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件
- `mouseout`：鼠标离开一个节点时触发，离开父节点也会触发这个事件
- `wheel`：滚动鼠标的滚轮时触发

### 示例

> **温馨提示**
>
> 这些方法在使用的时候，除了DOM2级事件，都需要添加前缀`on`

```js
var btn1 = document.getElementById("btn1");
btn1.onclick = function(){
    console.log("click事件");
}
```

## Event事件

事件发生以后，会产生一个事件对象，作为参数传给监听函数

### event属性

常用的对象属性包括

- `event.target` - 当前所在的节点
- `event.type` - 一个字符串

#### `event.target` - 当前所在的节点

```html
<!-- 点击后返回 <p id="para">Hello</p> -->

<p id="para">
    Hello
</p>

<script>
    para.addEventListener('click', setColor);

    function setColor(event) {
      console.log(this === event.target);
      event.target.style.color = 'red'; // 修改字体为红色
    }
</script>
```

#### `event.type` - 一个字符串

```html
<!-- 点击后返回 click -->

<p id="para">
    Hello
</p>

<script>
    para.addEventListener('click', setColor);

    function setColor(event) {
      	console.log(event.type);
    }
</script>
```

### event对象

#### `event.preventDefault()` - 阻止默认行为

取消浏览器对当前事件的默认行为
比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了

```js
btn.onclick = function(e){
    e.preventDefault(); // 阻止默认事件
    console.log("点击A标签");
}
```

#### `event.stopPropagation()` - 阻止事件传播

阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数
但是不包括在当前节点上其他的事件监听函数
==比如点击子元素, 事件会传递到父元素一起==

```js
btn.onclick = function(e){
    e.stopPropagation(); // 阻止事件冒泡
    console.log("btn");
}
```

## 键盘事件

键盘事件由用户击打键盘触发，主要有`keydown`、`keypress`、`keyup`三个事件

- `keydown` - 按下键盘时触发
- `keypress` - 按下有值的键==再触发==
    - 按下 `Ctrl`、`Alt`、`Shift`、`Meta` 这样无值的键, 事件不触发
    - 其他按键, 先触发 `keydown` , 后触发 `keypress`
- `keyup` - 松开按键触发

> 补充按键的事件属性
>
> `event.keyCode` - 按键的唯一标识, 注意大写C

```html
<input type="text" id="username">

<script>
    var username = document.getElementById("username");

    username.onkeydown = function(event){
        console.log("keydown");
    }

    username.onkeyup = function(event){
        console.log(event.target.value);
        console.log(event.keyCode); // 按键的唯一标识
    }

    username.onkeypress = function(event){
        console.log("keypress");
    }
</script>
```

## 表单事件

### 表单成员

表单事件是在使用表单元素及输入框元素可以监听的一系列事件

- `input` 
    - `<input>、<select>、<textarea>`的值发生变化时触发
    - 会连续触发，比如用户每按下一次按键，就会触发一次input事件
- `select`
    - `<input>、<textarea>`里面选中文本时触发
- `change`
    - `<input>、<select>、<textarea>`的值发生变化时触发
    - 点击回车或失去焦点时

```html
<input type="text" id="username">
<input type="text" id="password">

<script>
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    username.oninput = function(){
        console.log(event.target.value);
    }

    username.onselect = function(){
        console.log("onselect");
    }

    password.onchange = function(){
        // 失去焦点
        // 回车触发
        console.log("onchange");
        console.log(event.target.value);
    }
</script>
```

### 表单对象`<form>`

这两个事件发生在表单对象`<form>`上，而不是发生在表单的成员上

- `reset`事件当表单重置（所有表单成员变回默认值）时触发

- `submit`事件当==表单数据向服务器提交==时触发
    - 发生对象是`<form>`元素
    - 不是`<button>`元素

```html
<form action="https" id="myform">
    <input type="text" id="inputname">
    <button type="submit" id="sub">提交表单</button>
    <button type="reset" id="reset">重置数据</button>
</form>

<script>
    var myform = document.getElementById("myform");
    var reset = document.getElementById("reset");
    var sub = document.getElementById("sub");

    sub.onclick = function(){
        event.preventDefault(); // 防止默认刷新页面
        myform.onsubmit();
    }

    reset.onclick = function(){
        myform.reset();
    }
</script>
```

## 事件代理/事件委托

由于事件会在冒泡阶段向上传播到父节点, 因此可以把子节点的监听函数定义到父节点上
由父节点统一处理多个子元素的事件, 这种方法叫做事件的代理( delegation )

这样一来, 如果像之前在子元素事件中增加`event.stopPropagation()` - 阻止事件传播方法
就可能导致节点数量过多问题

因此, 利用父节点统一管理节点的事件

```html
<ul id="myList2" >
    <li id="item2">item2333</li>
    <li id="item3">item</li>
</ul>

<script>
    var myList2 = document.getElementById("myList2");
    var item2 = document.createElement("item2");

    myList2.addEventListener("click", function(event){
        if (event.target.innerHTML === "item2333") {
            console.log("item2 clicked");
        }

    });

    myList2.addEventListener("click", function(event){
        if (event.target.innerHTML === "item") {
            console.log("item3 clicked");
        }
    });
</script>
```

## 定时器

JavaScript 提供定时执行代码的功能
由 `setTimeout()` 和 `setInterval()` 函数方法实现

-  `setTimeout()` - 延迟后执行一次
- `setInterval()` - 延时后执行无限次

### `setTimeout` 延时执行一次

```js
var timerId = setTimeout(func|code, delay);
clearTimeout(timerId); // 关闭定时器
```

- `func|code`是将要推迟执行的函数名或者一段代码
- `delay`是推迟执行的毫秒数

- ```js
    // 1s之后只执行一次的定时器
    setTimeout(function(){
        console.log("定时器")
    },1000)
    ```

### `setInterval`延时执行无限次

```js
var timerId = setInterval(func|code, delay);
clearInterval(timerId); // 关闭定时器
```

#### 实例: 实现动画:方块的逐渐变淡

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        /* # 表示id选择器 */
        #mydiv{
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>

    <div id="mydiv"></div>

    <script>
        var mydiv = document.getElementById("mydiv");
        var opacity = 1; // 初始不透明度

        var fader = setInterval(function(){
            
            if(opacity <= 0){
                clearInterval(fader); // 停止定时器
            }
            else{
                opacity -= 0.1; // 逐渐减少不透明度
                mydiv.style.opacity = opacity; // 设置不透明度
            }
        }, 500); // 定时器
    </script>

</body>
</html>
```

### 性能优化之防抖(debounce)

防抖严格算起来应该属于性能优化, 但平常使用也会很高频的遇到, 
处理不当或放任不管容易导致浏览器卡死

==例如:==页面滚动条, 滚动一次, 打印滚动条的位置, 但是会触发好多次滚动事件

```js
function showTop  () {
    var scrollTop = document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = showTop; // 将函数注册为窗口滚动监听
```

==实际情况==: 不需要如此高频的反馈, 浏览器性能有限

==优化策略==: **短时间内大量触发同一事件, 只会执行一次**

- 如果在200ms内没有再次触发滚动事件，那么就执行函数
- 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

==优化源码==:

```js
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){ // 当频繁触发事件, 清除定时器, 重新计时
            clearTimeout(timer) 
        }
        timer = setTimeout(fn,delay) // 简化写法
    }
}

// 滚动事件
function showTop () {
    var scrollTop = document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = debounce(showTop,200);
```

### 性能二次优化之节流(throttle)

> 防抖可以解决短时间内的高频触发事件
>
> 但会带来, 如果客户一直在拖动滚动条, 那么会导致一直没有滚动事件触发

==优化策略==: 

- 如果短时间内大量触发同一事件, 在函数执行一次之后
- 在指定的时间期限内不再工作，直至过了这段时间才重新生效

==优化源码==:

```js
function throttle(fn,delay){
    let valid = true
    return function() {
       if(!valid){
           //休息时间 暂不接客
           return false 
       }
       // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(function(){
            fn()
            valid = true;
        }, delay)
    }
}

function showTop  () {
    var scrollTop = document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = throttle(showTop,200);
```

## 补充: this:谁调用指向谁

### 实例: 1s后打印`hello world`

> 如果回调函数是对象的方法
>
> 那么`setTimeout`使得方法内部的`this`关键字指向全局环境
>
> 而不是定义时所在的那个对象

```js
var name = "sxt";
var user = {
    name: "hello world",
    getName: function () {
        setTimeout(function(){
            console.log(this.name);
        },1000)
    }
};
user.getName();
```

### 解决

```js
var name = "sxt";
var user = {
    name: "hello world",
    getName: function () {
        var that = this;
        setTimeout(function(){
            console.log(that.name);
        },1000)
    }
};
user.getName();
```

