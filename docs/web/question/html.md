# HTML面试题

1. 面试题：行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？

```
行内元素：span、img、input...
块级元素：div、footer、header、section、p、h1...h6...
空元素：br、hr...
​
​
元素之间的转换问题：
display: inline;        把某元素转换成了行内元素      ===>不独占一行的，并且不能设置宽高
display: inline-block;  把某元素转换成了行内块元素    ===>不独占一行的，可以设置宽高
display: block;         把某元素转换成了块元素        ===>独占一行，并且可以设置宽高
区别一：link先有，后有@import（兼容性link比@import兼容）；
区别二：加载顺序差别，浏览器先加载的标签link，后加载@import
title与h1的区别：
​
定义：
  title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么
  h1：文章主题内容，告诉蜘蛛我们的网站内容最主要是什么
区别：
  title他是显示在网页标题上、h1是显示在网页内容上
  title比h1添加的重要 (title > h1 ) ==》对于seo的了解
场景：
  网站的logo都是用h1标签包裹的 
b与strong的区别：
​
定义：
  b：实体标签，用来给文字加粗的。
  strong：逻辑标签，用来加强字符语气的。
区别：
  b标签只有加粗的样式，没有实际含义。
  strong表示标签内字符比较重要，用以强调的。
题外话：为了符合css3的规范，b尽量少用该用strong就行了。
i与em的区别：
​
定义：
  i:实体标签，用来做文字倾斜的。
  em：是逻辑标签，用来强调文字内容的
区别：
  i只是一个倾斜标签，没有实际含义。
  em表示标签内字符重要，用以强调的。
场景：
  i更多的用在字体图标，em术语上（医药，生物）。
区别一：
  title ： 鼠标移入到图片显示的值
  alt   ： 图片无法加载时显示的值
区别二：
  在seo的层面上，蜘蛛抓取不到图片的内容，所以前端在写img标签的时候为了增加seo效果要加入alt属性来描述这张图是什么内容或者关键词。
png:无损压缩，尺寸体积要比jpg/jpeg的大，适合做小图标。
jpg:采用压缩算法，有一点失真，比png体积要小，适合做中大图片。
gif:一般是做动图的。
webp：同时支持有损或者无损压缩，相同质量的图片，webp具有更小的体积。兼容性不是特别好。
CSS的盒子模型有哪些：标准盒子模型、IE盒子模型
CSS的盒子模型区别：
  标准盒子模型：margin、border、padding、content
  IE盒子模型 ：margin、content（ border +  padding  + content ）
通过CSS如何转换盒子模型：
  box-sizing: content-box;  /*标准盒子模型*/
  box-sizing: border-box;   /*IE盒子模型*/
line-height是每一行文字的高，如果文字换行则整个盒子高度会增大（行数*行高）。
height是一个死值，就是这个盒子的高度。
CSS选择符：
    通配（*）
    id选择器（#）
    类选择器（.）
    标签选择器（div、p、h1...）
    相邻选择器(+)
    后代选择器(ul li)
    子元素选择器（ > ）
    属性选择器(a[href])
    
CSS属性哪些可以继承：
    文字系列：font-size、color、line-height、text-align...
***不可继承属性：border、padding、margin...
优先级比较：!important > 内联样式 > id > class > 标签 > 通配
CSS权重计算：
第一：内联样式（style）  权重值:1000
第二：id选择器           权重值:100
第三：类选择器           权重值:10
第四：标签&伪元素选择器   权重值:1
第五：通配、>、+         权重值:0
用边框画（border）,例如：
{
    width: 0;
    height: 0;
​
    border-left:100px solid transparent;
    border-right:100px solid transparent;
    border-top:100px solid transparent;
    border-bottom:100px solid #ccc;
}
<div class='container'>
  <div class='main'>main</div>
</div>
​
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border:5px solid #ccc;
}
.main{
    background: red;
}
<div class='container'>
  <div class='main'>main</div>
</div>
​
.container{
    position: relative;
    width: 300px;
    height: 300px;
    border:5px solid #ccc;
}
.main{
    position: absolute;
    left:50%;
    top:50%;
    background: red;
    transform: translate(-50%,-50%);
}
none          隐藏元素
block         把某某元素转换成块元素
inline        把某某元素转换成内联元素
inline-block  把某某元素转换成行内块元素
BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
​
1. 了解BFC ： 块级格式化上下文。
2. BFC的原则：如果一个元素具有BFC，那么内部元素再怎么弄，都不会影响到外面的元素。
3. 如何触发BFC：
    float的值非none
    overflow的值非visible
    display的值为：inline-block、table-cell...
    position的值为:absoute、fixed
1. 触发BFC
2. 多创建一个盒子，添加样式：clear: both;
3. after方式
  ul:after{
      content: '';
      display: block;
      clear: both;
  }
偶数 : 让文字在浏览器上表现更好看。
​
另外说明：ui给前端一般设计图都是偶数的，这样不管是布局也好，转换px也好，方便一点。
static [默认]  没有定位
fixed  固定定位，相对于浏览器窗口进行定位。
relative  相对于自身定位，不脱离文档流。
absolute  相对于第一个有relative的父元素，脱离文档流。
​
​
relative和absolute区别
1. relative不脱离文档流 、absolute脱离文档流
2. relative相对于自身 、 absolute相对于第一个有relative的父元素
3. relative如果有left、right、top、bottom ==》left、top
   absolute如果有left、right、top、bottom ==》left、right、top、bottom
双飞翼
reset.css       是一个css文件，用来重置css样式的。
normalize.css   为了增强跨浏览器渲染的一致性，一个CSS 重置样式库。
1. 是什么
  把多个小图标合并成一张大图片。
2. 优缺点
  优点：减少了http请求的次数，提升了性能。
  缺点：维护比较差（例如图片位置进行修改或者内容宽高修改）
1. 占用位置的区别
display: none;        是不占用位置的
visibility: hidden;   虽然隐藏了，但是占用位置
​
2. 重绘和回流的问题
​
visibility: hidden; 、 display: none;  产生重绘
display: none;     还会产生一次回流
​
产生回流一定会造成重绘，但是重绘不一定会造成回流。
​
产生回流的情况：改变元素的位置(left、top...)、显示隐藏元素....
产生重绘的情况：样式改变、换皮肤
共同性：实现透明效果
​
1. opacity 取值范围0到1之间，0表示完全透明，1表示不透明
2. rgba   R表示红色，G表示绿色，B表示蓝色，取值可以在正整数或者百分数。A表示透明度取值0到1之间
​
区别：继承的区别
opacity会继承父元素的opacity属性，而RGBA设置的元素的后代元素不会继承不透明属性。
延迟加载：async、defer
    例如：<script defer type="text/javascript" src='script.js'></script>
    
defer : 等html全部解析完成，才会执行js代码，顺次执行js脚本。
async : async是和html解析同步的（一起的），不是顺次执行js脚本（谁先加载完谁先执行）。
基本类型：string、number、boolean、undefined、null、symbol、bigint
引用类型：object
​
NaN是一个数值类型，但是不是一个具体的数字。
console.log( true + 1 );          //2
console.log( 'name'+true );       //nametrue
console.log( undefined + 1 );     //NaN
console.log( typeof undefined ); //undefined
console.log( typeof(NaN) );       //number
console.log( typeof(null) );      //object
1. 作者在设计js的都是先设计的null（为什么设计了null：最初设计js的时候借鉴了java的语言）
2. null会被隐式转换成0，很不容易发现错误。
3. 先有null后有undefined，出来undefined是为了填补之前的坑。
​
具体区别：JavaScript的最初版本是这样区分的：null是一个表示"无"的对象（空对象指针），转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。
==  :  比较的是值
    
    string == number || boolean || number ....都会隐式转换
    通过valueOf转换（valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。）
​
=== ： 除了比较值，还比较类型
1. js是单线程的语言。
2. js代码执行流程：同步执行完==》事件循环
  同步的任务都执行完了，才会执行事件循环的内容
  进入事件循环：请求、定时器、事件....
3. 事件循环中包含：【微任务、宏任务】
微任务：promise.then
宏任务：setTimeout..
​
要执行宏任务的前提是清空了所有的微任务
​
流程：同步==》事件循环【微任务和宏任务】==》微任务==》宏任务=》微任务...
​
1. 除了函数外，js是没有块级作用域。
2. 作用域链：内部可以访问外部的变量，但是外部不能访问内部的变量。
   注意：如果内部有，优先查找到内部，如果内部没有就查找外部的。
3. 注意声明变量是用var还是没有写（window.）
4. 注意：js有变量提升的机制【变量悬挂声明】
5. 优先级：声明变量 > 声明普通函数 > 参数 > 变量提升
1. 本层作用域有没有此变量【注意变量提升】
2. 注意：js除了函数外没有块级作用域
3. 普通声明函数是不看写函数的时候顺序
function c(){
  var b = 1;
  function a(){
    console.log( b );
    var b = 2;
    console.log( b );
  }
  a();
  console.log( b );
}
c();
var name = 'a';
(function(){
  if( typeof name == 'undefined' ){
    var name = 'b';
    console.log('111'+name);
  }else{
    console.log('222'+name);
  }
})()
function fun( a ){
  var a = 10;
  function a(){}
  console.log( a );
}
fun( 100 );
1. 对象是通过new操作符构建出来的，所以对象之间不想等(除了引用外)；
2. 对象注意：引用类型(共同一个地址)；
3. 对象的key都是字符串类型；
4. 对象如何找属性|方法；
  查找规则：先在对象本身找 ===> 构造函数中找 ===> 对象原型中找 ===> 构造函数原型中找 ===> 对象上一层原型查找
 [1,2,3] === [1,2,3]   //false
var obj1 = {
  a:'hellow'
}
var obj2 = obj1;
obj2.a = 'world';
console.log(obj1);  //{a:world}
(function(){
  console.log(a);   //undefined
  var a = 1;
})();
var a = {}
var b = {
  key:'a'
}
var c = {
  key:'c'
}
​
a[b] = '123';
a[c] = '456';
​
console.log( a[b] ); // 456
function Foo(){
  getName = function(){console.log(1)} //注意是全局的window.
  return this;
}
​
Foo.getName = function(){console.log(2)}
Foo.prototype.getName = function(){console.log(3)}
var getName = function(){console.log(4)}
function getName(){
  console.log(5)
}
​
Foo.getName();    //2
getName();      //4
Foo().getName();  //1
getName();      //1
new Foo().getName();//3
var o = {
  a:10,
  b:{
    a:2,
    fn:function(){
      console.log( this.a ); // 2
      console.log( this );   //代表b对象
    }
  }
}
o.b.fn();
window.name = 'ByteDance';
function A(){
  this.name = 123;
}
A.prototype.getA = function(){
  console.log( this );
  return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();  //this代表window
var length = 10;
function fn(){
  return this.length + 1;
}
var obj = {
  length:5,
  test1:function(){
    return fn();
  }
}
obj.test2 = fn;
console.log( obj.test1() );               //1
console.log( fn()===obj.test2() );        //false
console.log( obj.test1() == obj.test2() ); //false
var arr = [1,2,3];
console.log( Array.isArray( arr ) );
var arr = [1,2,3];
console.log( arr instanceof Array );
var arr = [1,2,3];
console.log( Object.prototype.toString.call(arr).indexOf('Array') > -1 );
var arr = [1,2,3];
console.log(  Array.prototype.isPrototypeOf(arr) )
var arr = [1,2,3];
console.log(  arr.constructor.toString().indexOf('Array') > -1 )
1. slice是来截取的
  参数可以写slice(3)、slice(1,3)、slice(-3)
  返回的是一个新的数组
2. splice 功能有：插入、删除、替换
  返回：删除的元素
  该方法会改变原数组
var arr1 = [1,2,3,2,4,1];
function unique(arr){
  return [...new Set(arr)]
}
console.log(  unique(arr1) );
var arr2 = [1,2,3,2,4,1];
function unique( arr ){
  var brr = [];
  for( var i=0;i<arr.length;i++){
    if(  brr.indexOf(arr[i]) == -1 ){
      brr.push( arr[i] );
    }
  }
  return brr;
}
console.log( unique(arr2) );
var arr3 = [1,2,3,2,4,1];
function unique( arr ){
  arr = arr.sort();
  var brr = [];
  for(var i=0;i<arr.length;i++){
    if( arr[i] !== arr[i-1]){
      brr.push( arr[i] );
    }
  }
  return brr;
}
console.log( unique(arr3) );
function fnArr(arr){
  var newArr = [];
  arr.forEach((item,index)=>{
    newArr.push( Math.max(...item)  )
  })
  return newArr;
}
console.log(fnArr([
  [4,5,1,3],
  [13,27,18,26],
  [32,35,37,39],
  [1000,1001,857,1]
]));
解答：
String.prototype.addPrefix = function(str){
  return str  + this;
}
console.log( 'world'.addPrefix('hello') )
var str = 'aaabbbbbccddddddddddx';
var obj = {};
for(var i=0;i<str.length;i++){
  var char = str.charAt(i);
  if( obj[char] ){
    obj[char]++;
  }else{
    obj[char] = 1;
  }
}
console.log( obj );
//统计出来最大值
var max = 0;
for( var key in obj ){
  if( max < obj[key] ){
    max = obj[key];
  }
}
//拿最大值去对比
for( var key in obj ){
  if( obj[key] == max ){
    console.log('最多的字符是'+key);
    console.log('出现的次数是'+max);
  }
}
1. 创建了一个空的对象
2. 将空对象的原型，指向于构造函数的原型
3. 将空对象作为构造函数的上下文（改变this指向）
4. 对构造函数有返回值的处理判断
function Fun( age,name ){
  this.age = age;
  this.name = name;
}
function create( fn , ...args ){
  //1. 创建了一个空的对象
  var obj = {}; //var obj = Object.create({})
  //2. 将空对象的原型，指向于构造函数的原型
  Object.setPrototypeOf(obj,fn.prototype);
  //3. 将空对象作为构造函数的上下文（改变this指向）
  var result = fn.apply(obj,args);
  //4. 对构造函数有返回值的处理判断
  return result instanceof Object ? result : obj;
}
console.log( create(Fun,18,'张三')   )
1. 闭包是什么
  闭包是一个函数加上到创建函数的作用域的连接，闭包“关闭”了函数的自由变量。
2. 闭包可以解决什么问题【闭包的优点】
  2.1 内部函数可以访问到外部函数的局部变量
  2.2 闭包可以解决的问题
      var lis = document.getElementsByTagName('li');
      for(var i=0;i<lis.length;i++){
        (function(i){
          lis[i].onclick = function(){
            alert(i);
          }
        })(i)
      }
3. 闭包的缺点
  3.1 变量会驻留在内存中，造成内存损耗问题。
        解决：把闭包的函数设置为null
  3.2 内存泄漏【ie】 ==> 可说可不说，如果说一定要提到ie
1. 原型可以解决什么问题
  对象共享属性和共享方法
2. 谁有原型
函数拥有：prototype
对象拥有：__proto__
3. 对象查找属性或者方法的顺序
  先在对象本身查找 --> 构造函数中查找 --> 对象的原型 --> 构造函数的原型中 --> 当前原型的原型中查找
4. 原型链
  4.1 是什么？：就是把原型串联起来
  4.2 原型链的最顶端是null
class Parent{
  constructor(){
    this.age = 18;
  }
}
​
class Child extends Parent{
  constructor(){
    super();
    this.name = '张三';
  }
}
let o1 = new Child();
console.log( o1,o1.name,o1.age );
function Parent(){
  this.age = 20;
}
function Child(){
  this.name = '张三'
}
Child.prototype = new Parent();
let o2 = new Child();
console.log( o2,o2.name,o2.age );
function Parent(){
  this.age = 22;
}
function Child(){
  this.name = '张三'
  Parent.call(this);
}
let o3 = new Child();
console.log( o3,o3.name,o3.age );
function Parent(){
  this.age = 100;
}
function Child(){
  Parent.call(this);
  this.name = '张三'
}
Child.prototype = new Parent();
let o4 = new Child();
console.log( o4,o4.name,o4.age );
可以改变this指向
​
语法： 函数.call()、函数.apply()、函数.bind()
1. call、apply可以立即执行。bind不会立即执行，因为bind返回的是一个函数需要加入()执行。
2. 参数不同：apply第二个参数是数组。call和bind有多个参数需要挨个写。
1. 用apply的情况
var arr1 = [1,2,4,5,7,3,321];
console.log( Math.max.apply(null,arr1) )
​
2. 用bind的情况
var btn = document.getElementById('btn');
var h1s = document.getElementById('h1s');
btn.onclick = function(){
  console.log( this.id );
}.bind(h1s)
V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。
​
之前的版本是：插入排序和快排，现在是冒泡
​
原理实现链接：https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js
​
***710行代码开始***
共同点：复制
​
1. 浅拷贝：只复制引用，而未复制真正的值。
var arr1 = ['a','b','c','d'];
var arr2 = arr1;
​
var obj1 = {a:1,b:2}
var obj2 = Object.assign(obj1);
​
2. 深拷贝：是复制真正的值 （不同引用）
var obj3 = {
  a:1,
  b:2
}
var obj4 = JSON.parse(JSON.stringify( obj3 ));
​
//递归的形式
function copyObj( obj ){
  if(  Array.isArray(obj)  ){
    var newObj = [];
  }else{
    var newObj = {};
  }
  for( var key in obj ){
    if( typeof obj[key] == 'object' ){
      newObj[key] = copyObj(obj[key]);
    }else{
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(  copyObj(obj5)  );
公共点：在客户端存放数据
区别：
1. 数据存放有效期
    sessionStorage : 仅在当前浏览器窗口关闭之前有效。【关闭浏览器就没了】
    localStorage   : 始终有效，窗口或者浏览器关闭也一直保存，所以叫持久化存储。
    cookie         : 只在设置的cookie过期时间之前有效，即使窗口或者浏览器关闭也有效。
2. localStorage、sessionStorage不可以设置过期时间
   cookie 有过期时间，可以设置过期（把时间调整到之前的时间，就过期了）
3. 存储大小的限制
  cookie存储量不能超过4k
  localStorage、sessionStorage不能超过5M
  
  ****根据不同的浏览器存储的大小是不同的。
1. 易读性和维护性更好。
2. seo成分会更好，蜘蛛抓取更好。
3. IE8不兼容HTML5标签的。解决：可以通过html5shiv.js去处理。
1. 区别
  :是伪类、::伪元素  ===》是为了做区分
​
2.是什么？作用
  元素before之前 、 元素after之后
  作用：清除浮动、样式布局上也有作用
<input type="text" autocapitalize='off'>
Chrome默认字体大小是：16px
**每个浏览器默认字体大小可能都不一样
​
<style type="text/css">
div{
  font-size:10px;
}
div span{
  display: inline-block;
  -webkit-transform:scale(1.6);
}
</style>
相对于font-size
​
em针对于父元素的font-size
rem针对于根(html)元素的font-size
<style>
  a,button,input,textarea{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
</style>
<style type="text/css">
  input::-webkit-input-placeholder{
    color:red;
  }
</style>
禁止ios 长按时触发系统的菜单，禁止ios&android长按时下载图片
html,body{
  touch-callout: none;
  -webkit-touch-callout: none;
  
  user-select:none;
  -webkit-user-select:none;
}
html,body{
  user-select:none;
  -webkit-user-select:none;
}
淘宝无限适配【移动端】：淘宝无限适配 + 布局单位使用rem
1. 是什么？
  一个URL可以响应多端
2. 语法结构
  @media only screen and (max-width: 1000px){
    ul li:last-child{
      display: none;
    }
  }
​
  only : 可以排除不支持媒体查询的浏览器
  screen ： 设备类型
  max-width | max-height
  min-width | min-height 
3. 响应式图片【性能优化】
  <picture>
    <source srcset="1.jpg" media='(min-width:1000px)'>
    <source srcset="2.jpg" media='(min-width:700px)'>
    <img srcset="3.jpg">
  </picture>
一、什么情况下采用响应式布局
  
  数据不是特别多，用户量不是特别大，纯展示类的项目适合响应式布局
  
  例如：公司的官网、专题页面
  
  特别追求性能的项目，不太适合响应式，因为如果添加了很多的响应式就会造成加载速度变慢。
​
二、pc + 移动端应该做什么样的布局方案
  注意：访问量还可以或者比较大，类似于淘宝网。
  
  pc是一套，会加入一点点响应式。
  移动端是一套，会使用自适应的布局方式。
​
三、pc的设计图
​
  ui：1980
  笔记本电脑：1280
  ui图的宽度和电脑的宽度不对应该怎么办？
    1. 把ui图进行等比缩放，缩放成和电脑一样的尺寸
    2. 换1980的电脑
    
四、移动端的设计图
​
  宽度：750
  因为750设计图/2就是375，正好是iphone6的尺寸，我们要把iphone6的尺寸做为基准点。
var、let、const 共同点都是可以声明变量的
​
区别一：
  var 具有变量提升的机制
  let和const没有变量提升的机制
区别二：
  var 可以多次声明同一个变量
  let和const不可以多次声明同一个变量
区别三：
  var、let声明变量的
  const声明常量
  
  var和let声明的变量可以再次赋值，但是const不可以再次赋值了。
区别四：
  var声明的变量没有自身作用域
  let和const声明的变量有自身的作用域
console.log( str );//undefined
var str = '你好';
​
console.log( num );//报错
let num = 10;
function demo(){
  var n = 2;
  if( true ){
    var n = 1;
  }
  console.log( n );//1
}
demo();
​
​
function demo(){
  let n = 2;
  if( true ){
    let n = 1;
  }
  console.log( n );//2
}
demo();
const obj = {
  a:1
}
obj.a = 11111;
console.log( obj )
​
const arr = ['a','b','c'];
arr[0]= 'aaaaa';
console.log( arr );
const a = {a:1,b:4};
const b = {b:2,c:3};
​
let obj1 = Object.assign(a,b);
console.log( obj1 );
let obj2 = {...a,...b};
console.log( obj2 );
function extend( target,  source ){
  for(var key in source){
    target[key] = source[key];
  }
  return target;
}
console.log( extend(a,b) );
1. this指向的问题
  箭头函数中的this只在箭头函数定义时就决定的，而且不可修改的（call、apply、bind）
  ****箭头函数的this指向定义时候、外层第一个普通函数的this
2. 箭头函数不能new（不能当作构造函数）
3. 箭头函数prototype
4. 箭头函数arguments
有三种状态：
pending（进行中）
fulfilled（已成功）
rejected（已失败）
区别一：返回的内容不同
  filter 返回是新数组
  find   返回具体的内容
区别二：
  find ：匹配到第一个即返回
  filter ： 返回整体（没一个匹配到的都返回）
some  ==》 如果有一项匹配则返回true
every ==》 全部匹配才会返回true
1. 有哪些生命周期
系统自带：
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  beforeDestroy
  destroyed
2. 一旦进入到页面或者组件，会执行哪些生命周期，顺序。
 beforeCreate
 created
 beforeMount
 mounted
3. 在哪个阶段有$el，在哪个阶段有$data
  beforeCreate 啥也没有
  created  有data没有el
  beforeMount 有data没有el
  mounted 都有
4. 如果加入了keep-alive会多俩个生命周期
  activated、deactivated
5. 如果加入了keep-alive，第一次进入组件会执行哪些生命？
 beforeCreate
 created
 beforeMount
 mounted
 activated
6. 如果加入了keep-alive，第二次或者第N次进入组件会执行哪些生命周期？
只执行一个生命周期：activated
1. 是什么
vue系统自带的一个组件，功能：是来缓存组件的。===》提升性能
2. 使用场景
就是来缓存组件，提升项目的性能。具体实现比如：首页进入到详情页，如果用户在首页每次点击都是相同的，那么详情页就没必要请求N次了，直接缓存起来就可以了，当然如果点击的不是同一个，那么就直接请求。
1. 网站一定要多页面
2. title、描述、关键字
3. 图片、音频、视频、的标签属性特别关键
4. 网站不能出现死链接

```
