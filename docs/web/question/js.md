# JavaScript面试题

## let const var作用域及区别

> 块级作用域，暂时性死区。
> var 定义的变量，可以跨块作用域访问，不能跨函数作用域访问。
> let 定义的变量，只能在块作用域里访问，不能跨块作用域访问也不能跨函数作用域访问。
> const 定义常量，创建时必须赋值，只能在块作用域里访问并且不能修改。

## a.b.c.d和a['b']['c']['d']，哪个性能更高

> 这个题从AST角度看就很简单了，a['b']['c']和a.b.c，转换成AST前者的的树是含计算的，后者只是string
> literal，天然前者会消耗更多的计算成本，时间也更长

## localStorage 与 sessionStorage 与cookie的区别总结

> 共同点： 都保存在浏览器端且同源。
> localStorage，sessionStorage统称为webStorage，保存在浏览器，不参与服务器通信。大小为5M。
> 生命周期不同：localStorage永久保存，sessionStorage当前会话。都可以手动删除。
> 作用域不同： 不同浏览器不共享local和session，不同会话不共享session。
> Cookie：设置的过期时间前一直有效，大小4K。有个数限制，各浏览器不同，一般为20个。携带在http头中，过多会有性能问题。可自己封装，也可用原生。

## for in, forEach和for of的区别

> for
> in遍历数组会遍历到数组原型上的属性和方法，更适合遍历对象。遍历到myObject的原型方法method，如果不想遍历原型方法和属性的话，可以在循环内部判断一下hasOwnProperty方法可以判断某属性是否是该对象的实例属性。
> forEach不支持break，continue，return等
> for of可以成功遍历数组的值，而不是索引，不会遍历原型。

## 数组的对象方法有那些

> map foreach filter some includes find findIndex reduce flat pop shift unshift concat entries every copyWithin fill
> indexOf remove slice join keys reverse values 等

## 在ios键盘中首字母大写的问题

```
>1. 在ios键盘中首字母大写的问题?
    <input type="text" autocapitalize='off'>
2. ios日期转换NAN问题
   具体就是，new Date('2020-11-12 00:00:00')在ios中会为NAN
   解决方案：用new Date('2020/11/12 00:00:00')的日期格式，或者写个正则转换
3. 在移动端使用click事件有300ms延迟的问题
   禁止双击缩放===》meta:user-scalabel=no
4. 	移动端touch事件有穿透（点透）的问题，怎么解决？
      4.1 阻止默认行为 : e.preventDefault();
      4.2 fastclick.js
5. 安卓部分版本input的placeholder偏上
   input{
   line-height:normal;
   }
```

## this 的指向有哪些？

> 1、普通函数中的 this 指向 window
> 2、定时器中的 this 指向 window
> 3、箭头函数没有 this,它的 this 指向取决于外部环境、
> 4、事件中的 this 指向事件的调用者 黑马程序员
> 5、 构造函数中 this 和原型对象中的 this,都是指向构造函数 new 出来实例对象
> 6、类 class 中的 this 指向由 constructor 构造器 new 出来的实例对象
> 7、自调用函数中的 this 指向 window

## 什么是递归，递归有哪些优点或缺点？

> 递归： 如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。简单理解:函 数内部自己调用自己, 这个函数就是递归函数
> 优点： 结构清晰、可读性强
> 缺点： 效率低、调用栈可能会溢出，其实每一次函数调用会在内存栈中分配空间，而每个进程的栈的容
> 量是有限的，当调用的层次太多时，就会超出栈的容量，从而导致栈溢出。->性能

## 什么是深拷贝、什么是浅拷贝？

```
浅拷贝： 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝 的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个 地址，就会影响到另一个对象。
深拷贝： 会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即 发生深拷贝。 深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。
```

## js 的执行机制是怎么样的？

```
js 是一个单线程、异步、非阻塞 I/O 模型、 event loop 事件循环的执行机制
所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。
同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。异步 任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程， 某个异步任务可以执行了，该任务才会进入主线程执行。
```

## 事件冒泡

## 事件循环

## promise 是什么？它有哪些作用？

```
/*
1. Promise基本使用
我们使用new来构建一个Promise Promise的构造函数接收一个参数，是函数，并
且传入两个参数： resolve，reject， 分别表示异步操作执行成功后的回调函数
和异步操作执行失败后的回调函数
*/
var p = new Promise(function (resolve, reject) {
  //2. 这里用于实现异步任务 setTimeout
  setTimeout(function () {
    var flag = false
    if (flag) {
      //3. 正常情况
      resolve('hello')
    } else {
      //4. 异常情况
      reject('出错了')
    }
  }, 100)
})
// 5 Promise实例生成以后，可以用then方法指定resolved状态和reject状态的回调函
数
// 在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以
接收到数据了
p.then(
  function (data) {
    console.log(data)
  },
  function (info) {
    console.log(info)
  }
)

```

## 数据类型以及他们的使用场景

## call、apply、bind 三者的异同

```
共同点 : 都可以改变 this 指向;
不同点: call 和 apply 会调用函数, 并且改变函数内部 this 指向. call 和 apply传递的参数不一样,call 传递参数使用逗号隔开,apply 使用数组传递 bind 不会调用函数, 可以改变函 数内部 this 指向. 应用场景

call 经常做继承.
apply 经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值
bind 不调用函数,但是还想改变 this 指向. 比如改变定时器内部的 this 指向

```
