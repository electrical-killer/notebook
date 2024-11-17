---
id: 1731504611
slug: /basic_code/JavaScript/1731504611
title: ES6-面向对象之Class
date: 2024-10-19
authors: Electrical Killer
tags: [js, ES6, class]
keywords:  [js, ES6, class]
---

## 类的由来

> 传统ES5, 类和函数没有区分
>
> ES6中引入类, 区分函数与类, 并且==更接近==面向对象编程思想
>
> 让对象原型更清晰                                                              

## ES5表现

- ==首字符大写表类==
- ==首字母小写表函数==

```js
<script>

    var Person = function(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.getName = function() {
        console.log(this.name);
    }

    var p = new Person("ework", 25);
    p.getName();

</script>
```

## 优雅的ES6

提供了更接近传统的写法, 引入了Class 类概念
通过 `class` 关键字, 定义类

ES6的 `class` 就是==语法糖==, 他的绝大部分功能, ES5均能实现
仅仅是让对象原型更加清晰, ==更像面向对象==编程而已

```js
class Person{
    constructor(name, age){
        /* 类用来传参的 */
        this.name = name;
        this.age = age;
    }
    
    getName(){
        console.log(this.name);
    }
}

var p = new Person("ework", 25);

p.getName();
```

## constructor方法

该方法类调用的默认方法, 
若你没写, 源码解释过程中, 也会将该方法加上

上述实现作用, 用来传递参数

```js
class Point {
	
}

// 等同于
class Point {
  constructor() {}
}
```

## 注意内容

- 类的实例写法, 需要使用 `new` 关键字
- 类不存在变量提升, 与 `ES5` 完全不同

## 属性&方法

### 实例方法

- 直接在类中创建函数
- 通过 `new` 关键字创建实例后

- 调用

```js
class Person{
    getName(){
        console.log("this.name");
    }
}

var p = new Person();

p.getName();
```

### 实例属性

- 类中创建属性
- 通过 `new` 创建实例后
- 调用

```js
class Person{
    constructor(name, age){
        /* 类用来传参的 */
        this.name = name;
        this.age = age;
    }
}

var p = new Person("ework", 25);

console.log(p.name, p.age);
```

### 静态方法

普通类的 `实例方法` 会被实例继承
但是如果加上关键字 `static` 表示该方法为静态方法
只能由类直接调用, 而不能被实例调用

```js
class Person {
    static classMethod() {
        console.log("Hello");
    }
}

Person.classMethod() // Hello

var p = new Person();
p.classMethod() // p.classMethod is not a function
```

> 注意，如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例

```js
class People {
    static getSay() {
        this.say();
    }
    static say() {
        console.log('hello');
    }
    say() {
        console.log('world');
    }
}
People.getSay() // hello
```

### 静态属性

静态属性指的是 Class 本身的属性，即`Class.propName`

与静态方法一致

## 继承

```js
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }  
}

class Student extends Person{
    // Stutend类继承于Person类
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }    
}
```

- 继承的类, 父类中已经实现过构造器了
    在子继承类中, 的构造器的==最上面使用 `super`== 继承父类构造器
    - 但是子继承中也可以不写构造函数, 默认继承父类构造器
- 若两个类中有相同的`方法`名, 后面会复写之前的方法
    - 继承会重写父类继承过的方法
- 类中所定义的方法, 是放到原型对象中, 供实例去使用
