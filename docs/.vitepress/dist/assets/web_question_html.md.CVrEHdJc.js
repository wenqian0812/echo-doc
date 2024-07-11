import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.mlmjWbz3.js";const f=JSON.parse('{"title":"HTML面试题","description":"","frontmatter":{},"headers":[],"relativePath":"web/question/html.md","filePath":"web/question/html.md"}'),l={name:"web/question/html.md"},e=p(`<h1 id="html面试题" tabindex="-1">HTML面试题 <a class="header-anchor" href="#html面试题" aria-label="Permalink to &quot;HTML面试题&quot;">​</a></h1><ol><li>面试题：行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>行内元素：span、img、input...</span></span>
<span class="line"><span>块级元素：div、footer、header、section、p、h1...h6...</span></span>
<span class="line"><span>空元素：br、hr...</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>元素之间的转换问题：</span></span>
<span class="line"><span>display: inline;        把某元素转换成了行内元素      ===&gt;不独占一行的，并且不能设置宽高</span></span>
<span class="line"><span>display: inline-block;  把某元素转换成了行内块元素    ===&gt;不独占一行的，可以设置宽高</span></span>
<span class="line"><span>display: block;         把某元素转换成了块元素        ===&gt;独占一行，并且可以设置宽高</span></span>
<span class="line"><span>区别一：link先有，后有@import（兼容性link比@import兼容）；</span></span>
<span class="line"><span>区别二：加载顺序差别，浏览器先加载的标签link，后加载@import</span></span>
<span class="line"><span>title与h1的区别：</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span>  title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么</span></span>
<span class="line"><span>  h1：文章主题内容，告诉蜘蛛我们的网站内容最主要是什么</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>  title他是显示在网页标题上、h1是显示在网页内容上</span></span>
<span class="line"><span>  title比h1添加的重要 (title &gt; h1 ) ==》对于seo的了解</span></span>
<span class="line"><span>场景：</span></span>
<span class="line"><span>  网站的logo都是用h1标签包裹的 </span></span>
<span class="line"><span>b与strong的区别：</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span>  b：实体标签，用来给文字加粗的。</span></span>
<span class="line"><span>  strong：逻辑标签，用来加强字符语气的。</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>  b标签只有加粗的样式，没有实际含义。</span></span>
<span class="line"><span>  strong表示标签内字符比较重要，用以强调的。</span></span>
<span class="line"><span>题外话：为了符合css3的规范，b尽量少用该用strong就行了。</span></span>
<span class="line"><span>i与em的区别：</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span>  i:实体标签，用来做文字倾斜的。</span></span>
<span class="line"><span>  em：是逻辑标签，用来强调文字内容的</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>  i只是一个倾斜标签，没有实际含义。</span></span>
<span class="line"><span>  em表示标签内字符重要，用以强调的。</span></span>
<span class="line"><span>场景：</span></span>
<span class="line"><span>  i更多的用在字体图标，em术语上（医药，生物）。</span></span>
<span class="line"><span>区别一：</span></span>
<span class="line"><span>  title ： 鼠标移入到图片显示的值</span></span>
<span class="line"><span>  alt   ： 图片无法加载时显示的值</span></span>
<span class="line"><span>区别二：</span></span>
<span class="line"><span>  在seo的层面上，蜘蛛抓取不到图片的内容，所以前端在写img标签的时候为了增加seo效果要加入alt属性来描述这张图是什么内容或者关键词。</span></span>
<span class="line"><span>png:无损压缩，尺寸体积要比jpg/jpeg的大，适合做小图标。</span></span>
<span class="line"><span>jpg:采用压缩算法，有一点失真，比png体积要小，适合做中大图片。</span></span>
<span class="line"><span>gif:一般是做动图的。</span></span>
<span class="line"><span>webp：同时支持有损或者无损压缩，相同质量的图片，webp具有更小的体积。兼容性不是特别好。</span></span>
<span class="line"><span>CSS的盒子模型有哪些：标准盒子模型、IE盒子模型</span></span>
<span class="line"><span>CSS的盒子模型区别：</span></span>
<span class="line"><span>  标准盒子模型：margin、border、padding、content</span></span>
<span class="line"><span>  IE盒子模型 ：margin、content（ border +  padding  + content ）</span></span>
<span class="line"><span>通过CSS如何转换盒子模型：</span></span>
<span class="line"><span>  box-sizing: content-box;  /*标准盒子模型*/</span></span>
<span class="line"><span>  box-sizing: border-box;   /*IE盒子模型*/</span></span>
<span class="line"><span>line-height是每一行文字的高，如果文字换行则整个盒子高度会增大（行数*行高）。</span></span>
<span class="line"><span>height是一个死值，就是这个盒子的高度。</span></span>
<span class="line"><span>CSS选择符：</span></span>
<span class="line"><span>    通配（*）</span></span>
<span class="line"><span>    id选择器（#）</span></span>
<span class="line"><span>    类选择器（.）</span></span>
<span class="line"><span>    标签选择器（div、p、h1...）</span></span>
<span class="line"><span>    相邻选择器(+)</span></span>
<span class="line"><span>    后代选择器(ul li)</span></span>
<span class="line"><span>    子元素选择器（ &gt; ）</span></span>
<span class="line"><span>    属性选择器(a[href])</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>CSS属性哪些可以继承：</span></span>
<span class="line"><span>    文字系列：font-size、color、line-height、text-align...</span></span>
<span class="line"><span>***不可继承属性：border、padding、margin...</span></span>
<span class="line"><span>优先级比较：!important &gt; 内联样式 &gt; id &gt; class &gt; 标签 &gt; 通配</span></span>
<span class="line"><span>CSS权重计算：</span></span>
<span class="line"><span>第一：内联样式（style）  权重值:1000</span></span>
<span class="line"><span>第二：id选择器           权重值:100</span></span>
<span class="line"><span>第三：类选择器           权重值:10</span></span>
<span class="line"><span>第四：标签&amp;伪元素选择器   权重值:1</span></span>
<span class="line"><span>第五：通配、&gt;、+         权重值:0</span></span>
<span class="line"><span>用边框画（border）,例如：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    width: 0;</span></span>
<span class="line"><span>    height: 0;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>    border-left:100px solid transparent;</span></span>
<span class="line"><span>    border-right:100px solid transparent;</span></span>
<span class="line"><span>    border-top:100px solid transparent;</span></span>
<span class="line"><span>    border-bottom:100px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;div class=&#39;container&#39;&gt;</span></span>
<span class="line"><span>  &lt;div class=&#39;main&#39;&gt;main&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.container{</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    width: 300px;</span></span>
<span class="line"><span>    height: 300px;</span></span>
<span class="line"><span>    border:5px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.main{</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;div class=&#39;container&#39;&gt;</span></span>
<span class="line"><span>  &lt;div class=&#39;main&#39;&gt;main&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>.container{</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 300px;</span></span>
<span class="line"><span>    height: 300px;</span></span>
<span class="line"><span>    border:5px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.main{</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left:50%;</span></span>
<span class="line"><span>    top:50%;</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>    transform: translate(-50%,-50%);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>none          隐藏元素</span></span>
<span class="line"><span>block         把某某元素转换成块元素</span></span>
<span class="line"><span>inline        把某某元素转换成内联元素</span></span>
<span class="line"><span>inline-block  把某某元素转换成行内块元素</span></span>
<span class="line"><span>BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>1. 了解BFC ： 块级格式化上下文。</span></span>
<span class="line"><span>2. BFC的原则：如果一个元素具有BFC，那么内部元素再怎么弄，都不会影响到外面的元素。</span></span>
<span class="line"><span>3. 如何触发BFC：</span></span>
<span class="line"><span>    float的值非none</span></span>
<span class="line"><span>    overflow的值非visible</span></span>
<span class="line"><span>    display的值为：inline-block、table-cell...</span></span>
<span class="line"><span>    position的值为:absoute、fixed</span></span>
<span class="line"><span>1. 触发BFC</span></span>
<span class="line"><span>2. 多创建一个盒子，添加样式：clear: both;</span></span>
<span class="line"><span>3. after方式</span></span>
<span class="line"><span>  ul:after{</span></span>
<span class="line"><span>      content: &#39;&#39;;</span></span>
<span class="line"><span>      display: block;</span></span>
<span class="line"><span>      clear: both;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>偶数 : 让文字在浏览器上表现更好看。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>另外说明：ui给前端一般设计图都是偶数的，这样不管是布局也好，转换px也好，方便一点。</span></span>
<span class="line"><span>static [默认]  没有定位</span></span>
<span class="line"><span>fixed  固定定位，相对于浏览器窗口进行定位。</span></span>
<span class="line"><span>relative  相对于自身定位，不脱离文档流。</span></span>
<span class="line"><span>absolute  相对于第一个有relative的父元素，脱离文档流。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>relative和absolute区别</span></span>
<span class="line"><span>1. relative不脱离文档流 、absolute脱离文档流</span></span>
<span class="line"><span>2. relative相对于自身 、 absolute相对于第一个有relative的父元素</span></span>
<span class="line"><span>3. relative如果有left、right、top、bottom ==》left、top</span></span>
<span class="line"><span>   absolute如果有left、right、top、bottom ==》left、right、top、bottom</span></span>
<span class="line"><span>双飞翼</span></span>
<span class="line"><span>reset.css       是一个css文件，用来重置css样式的。</span></span>
<span class="line"><span>normalize.css   为了增强跨浏览器渲染的一致性，一个CSS 重置样式库。</span></span>
<span class="line"><span>1. 是什么</span></span>
<span class="line"><span>  把多个小图标合并成一张大图片。</span></span>
<span class="line"><span>2. 优缺点</span></span>
<span class="line"><span>  优点：减少了http请求的次数，提升了性能。</span></span>
<span class="line"><span>  缺点：维护比较差（例如图片位置进行修改或者内容宽高修改）</span></span>
<span class="line"><span>1. 占用位置的区别</span></span>
<span class="line"><span>display: none;        是不占用位置的</span></span>
<span class="line"><span>visibility: hidden;   虽然隐藏了，但是占用位置</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>2. 重绘和回流的问题</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>visibility: hidden; 、 display: none;  产生重绘</span></span>
<span class="line"><span>display: none;     还会产生一次回流</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>产生回流一定会造成重绘，但是重绘不一定会造成回流。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>产生回流的情况：改变元素的位置(left、top...)、显示隐藏元素....</span></span>
<span class="line"><span>产生重绘的情况：样式改变、换皮肤</span></span>
<span class="line"><span>共同性：实现透明效果</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>1. opacity 取值范围0到1之间，0表示完全透明，1表示不透明</span></span>
<span class="line"><span>2. rgba   R表示红色，G表示绿色，B表示蓝色，取值可以在正整数或者百分数。A表示透明度取值0到1之间</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>区别：继承的区别</span></span>
<span class="line"><span>opacity会继承父元素的opacity属性，而RGBA设置的元素的后代元素不会继承不透明属性。</span></span>
<span class="line"><span>延迟加载：async、defer</span></span>
<span class="line"><span>    例如：&lt;script defer type=&quot;text/javascript&quot; src=&#39;script.js&#39;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>defer : 等html全部解析完成，才会执行js代码，顺次执行js脚本。</span></span>
<span class="line"><span>async : async是和html解析同步的（一起的），不是顺次执行js脚本（谁先加载完谁先执行）。</span></span>
<span class="line"><span>基本类型：string、number、boolean、undefined、null、symbol、bigint</span></span>
<span class="line"><span>引用类型：object</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>NaN是一个数值类型，但是不是一个具体的数字。</span></span>
<span class="line"><span>console.log( true + 1 );          //2</span></span>
<span class="line"><span>console.log( &#39;name&#39;+true );       //nametrue</span></span>
<span class="line"><span>console.log( undefined + 1 );     //NaN</span></span>
<span class="line"><span>console.log( typeof undefined ); //undefined</span></span>
<span class="line"><span>console.log( typeof(NaN) );       //number</span></span>
<span class="line"><span>console.log( typeof(null) );      //object</span></span>
<span class="line"><span>1. 作者在设计js的都是先设计的null（为什么设计了null：最初设计js的时候借鉴了java的语言）</span></span>
<span class="line"><span>2. null会被隐式转换成0，很不容易发现错误。</span></span>
<span class="line"><span>3. 先有null后有undefined，出来undefined是为了填补之前的坑。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>具体区别：JavaScript的最初版本是这样区分的：null是一个表示&quot;无&quot;的对象（空对象指针），转为数值时为0；undefined是一个表示&quot;无&quot;的原始值，转为数值时为NaN。</span></span>
<span class="line"><span>==  :  比较的是值</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    string == number || boolean || number ....都会隐式转换</span></span>
<span class="line"><span>    通过valueOf转换（valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。）</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>=== ： 除了比较值，还比较类型</span></span>
<span class="line"><span>1. js是单线程的语言。</span></span>
<span class="line"><span>2. js代码执行流程：同步执行完==》事件循环</span></span>
<span class="line"><span>  同步的任务都执行完了，才会执行事件循环的内容</span></span>
<span class="line"><span>  进入事件循环：请求、定时器、事件....</span></span>
<span class="line"><span>3. 事件循环中包含：【微任务、宏任务】</span></span>
<span class="line"><span>微任务：promise.then</span></span>
<span class="line"><span>宏任务：setTimeout..</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>要执行宏任务的前提是清空了所有的微任务</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>流程：同步==》事件循环【微任务和宏任务】==》微任务==》宏任务=》微任务...</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>1. 除了函数外，js是没有块级作用域。</span></span>
<span class="line"><span>2. 作用域链：内部可以访问外部的变量，但是外部不能访问内部的变量。</span></span>
<span class="line"><span>   注意：如果内部有，优先查找到内部，如果内部没有就查找外部的。</span></span>
<span class="line"><span>3. 注意声明变量是用var还是没有写（window.）</span></span>
<span class="line"><span>4. 注意：js有变量提升的机制【变量悬挂声明】</span></span>
<span class="line"><span>5. 优先级：声明变量 &gt; 声明普通函数 &gt; 参数 &gt; 变量提升</span></span>
<span class="line"><span>1. 本层作用域有没有此变量【注意变量提升】</span></span>
<span class="line"><span>2. 注意：js除了函数外没有块级作用域</span></span>
<span class="line"><span>3. 普通声明函数是不看写函数的时候顺序</span></span>
<span class="line"><span>function c(){</span></span>
<span class="line"><span>  var b = 1;</span></span>
<span class="line"><span>  function a(){</span></span>
<span class="line"><span>    console.log( b );</span></span>
<span class="line"><span>    var b = 2;</span></span>
<span class="line"><span>    console.log( b );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  a();</span></span>
<span class="line"><span>  console.log( b );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>c();</span></span>
<span class="line"><span>var name = &#39;a&#39;;</span></span>
<span class="line"><span>(function(){</span></span>
<span class="line"><span>  if( typeof name == &#39;undefined&#39; ){</span></span>
<span class="line"><span>    var name = &#39;b&#39;;</span></span>
<span class="line"><span>    console.log(&#39;111&#39;+name);</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>    console.log(&#39;222&#39;+name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})()</span></span>
<span class="line"><span>function fun( a ){</span></span>
<span class="line"><span>  var a = 10;</span></span>
<span class="line"><span>  function a(){}</span></span>
<span class="line"><span>  console.log( a );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fun( 100 );</span></span>
<span class="line"><span>1. 对象是通过new操作符构建出来的，所以对象之间不想等(除了引用外)；</span></span>
<span class="line"><span>2. 对象注意：引用类型(共同一个地址)；</span></span>
<span class="line"><span>3. 对象的key都是字符串类型；</span></span>
<span class="line"><span>4. 对象如何找属性|方法；</span></span>
<span class="line"><span>  查找规则：先在对象本身找 ===&gt; 构造函数中找 ===&gt; 对象原型中找 ===&gt; 构造函数原型中找 ===&gt; 对象上一层原型查找</span></span>
<span class="line"><span> [1,2,3] === [1,2,3]   //false</span></span>
<span class="line"><span>var obj1 = {</span></span>
<span class="line"><span>  a:&#39;hellow&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var obj2 = obj1;</span></span>
<span class="line"><span>obj2.a = &#39;world&#39;;</span></span>
<span class="line"><span>console.log(obj1);  //{a:world}</span></span>
<span class="line"><span>(function(){</span></span>
<span class="line"><span>  console.log(a);   //undefined</span></span>
<span class="line"><span>  var a = 1;</span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span>var a = {}</span></span>
<span class="line"><span>var b = {</span></span>
<span class="line"><span>  key:&#39;a&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var c = {</span></span>
<span class="line"><span>  key:&#39;c&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>a[b] = &#39;123&#39;;</span></span>
<span class="line"><span>a[c] = &#39;456&#39;;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>console.log( a[b] ); // 456</span></span>
<span class="line"><span>function Foo(){</span></span>
<span class="line"><span>  getName = function(){console.log(1)} //注意是全局的window.</span></span>
<span class="line"><span>  return this;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>Foo.getName = function(){console.log(2)}</span></span>
<span class="line"><span>Foo.prototype.getName = function(){console.log(3)}</span></span>
<span class="line"><span>var getName = function(){console.log(4)}</span></span>
<span class="line"><span>function getName(){</span></span>
<span class="line"><span>  console.log(5)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>Foo.getName();    //2</span></span>
<span class="line"><span>getName();      //4</span></span>
<span class="line"><span>Foo().getName();  //1</span></span>
<span class="line"><span>getName();      //1</span></span>
<span class="line"><span>new Foo().getName();//3</span></span>
<span class="line"><span>var o = {</span></span>
<span class="line"><span>  a:10,</span></span>
<span class="line"><span>  b:{</span></span>
<span class="line"><span>    a:2,</span></span>
<span class="line"><span>    fn:function(){</span></span>
<span class="line"><span>      console.log( this.a ); // 2</span></span>
<span class="line"><span>      console.log( this );   //代表b对象</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>o.b.fn();</span></span>
<span class="line"><span>window.name = &#39;ByteDance&#39;;</span></span>
<span class="line"><span>function A(){</span></span>
<span class="line"><span>  this.name = 123;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>A.prototype.getA = function(){</span></span>
<span class="line"><span>  console.log( this );</span></span>
<span class="line"><span>  return this.name + 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let a = new A();</span></span>
<span class="line"><span>let funcA = a.getA;</span></span>
<span class="line"><span>funcA();  //this代表window</span></span>
<span class="line"><span>var length = 10;</span></span>
<span class="line"><span>function fn(){</span></span>
<span class="line"><span>  return this.length + 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var obj = {</span></span>
<span class="line"><span>  length:5,</span></span>
<span class="line"><span>  test1:function(){</span></span>
<span class="line"><span>    return fn();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.test2 = fn;</span></span>
<span class="line"><span>console.log( obj.test1() );               //1</span></span>
<span class="line"><span>console.log( fn()===obj.test2() );        //false</span></span>
<span class="line"><span>console.log( obj.test1() == obj.test2() ); //false</span></span>
<span class="line"><span>var arr = [1,2,3];</span></span>
<span class="line"><span>console.log( Array.isArray( arr ) );</span></span>
<span class="line"><span>var arr = [1,2,3];</span></span>
<span class="line"><span>console.log( arr instanceof Array );</span></span>
<span class="line"><span>var arr = [1,2,3];</span></span>
<span class="line"><span>console.log( Object.prototype.toString.call(arr).indexOf(&#39;Array&#39;) &gt; -1 );</span></span>
<span class="line"><span>var arr = [1,2,3];</span></span>
<span class="line"><span>console.log(  Array.prototype.isPrototypeOf(arr) )</span></span>
<span class="line"><span>var arr = [1,2,3];</span></span>
<span class="line"><span>console.log(  arr.constructor.toString().indexOf(&#39;Array&#39;) &gt; -1 )</span></span>
<span class="line"><span>1. slice是来截取的</span></span>
<span class="line"><span>  参数可以写slice(3)、slice(1,3)、slice(-3)</span></span>
<span class="line"><span>  返回的是一个新的数组</span></span>
<span class="line"><span>2. splice 功能有：插入、删除、替换</span></span>
<span class="line"><span>  返回：删除的元素</span></span>
<span class="line"><span>  该方法会改变原数组</span></span>
<span class="line"><span>var arr1 = [1,2,3,2,4,1];</span></span>
<span class="line"><span>function unique(arr){</span></span>
<span class="line"><span>  return [...new Set(arr)]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(  unique(arr1) );</span></span>
<span class="line"><span>var arr2 = [1,2,3,2,4,1];</span></span>
<span class="line"><span>function unique( arr ){</span></span>
<span class="line"><span>  var brr = [];</span></span>
<span class="line"><span>  for( var i=0;i&lt;arr.length;i++){</span></span>
<span class="line"><span>    if(  brr.indexOf(arr[i]) == -1 ){</span></span>
<span class="line"><span>      brr.push( arr[i] );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return brr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log( unique(arr2) );</span></span>
<span class="line"><span>var arr3 = [1,2,3,2,4,1];</span></span>
<span class="line"><span>function unique( arr ){</span></span>
<span class="line"><span>  arr = arr.sort();</span></span>
<span class="line"><span>  var brr = [];</span></span>
<span class="line"><span>  for(var i=0;i&lt;arr.length;i++){</span></span>
<span class="line"><span>    if( arr[i] !== arr[i-1]){</span></span>
<span class="line"><span>      brr.push( arr[i] );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return brr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log( unique(arr3) );</span></span>
<span class="line"><span>function fnArr(arr){</span></span>
<span class="line"><span>  var newArr = [];</span></span>
<span class="line"><span>  arr.forEach((item,index)=&gt;{</span></span>
<span class="line"><span>    newArr.push( Math.max(...item)  )</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return newArr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(fnArr([</span></span>
<span class="line"><span>  [4,5,1,3],</span></span>
<span class="line"><span>  [13,27,18,26],</span></span>
<span class="line"><span>  [32,35,37,39],</span></span>
<span class="line"><span>  [1000,1001,857,1]</span></span>
<span class="line"><span>]));</span></span>
<span class="line"><span>解答：</span></span>
<span class="line"><span>String.prototype.addPrefix = function(str){</span></span>
<span class="line"><span>  return str  + this;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log( &#39;world&#39;.addPrefix(&#39;hello&#39;) )</span></span>
<span class="line"><span>var str = &#39;aaabbbbbccddddddddddx&#39;;</span></span>
<span class="line"><span>var obj = {};</span></span>
<span class="line"><span>for(var i=0;i&lt;str.length;i++){</span></span>
<span class="line"><span>  var char = str.charAt(i);</span></span>
<span class="line"><span>  if( obj[char] ){</span></span>
<span class="line"><span>    obj[char]++;</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>    obj[char] = 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log( obj );</span></span>
<span class="line"><span>//统计出来最大值</span></span>
<span class="line"><span>var max = 0;</span></span>
<span class="line"><span>for( var key in obj ){</span></span>
<span class="line"><span>  if( max &lt; obj[key] ){</span></span>
<span class="line"><span>    max = obj[key];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//拿最大值去对比</span></span>
<span class="line"><span>for( var key in obj ){</span></span>
<span class="line"><span>  if( obj[key] == max ){</span></span>
<span class="line"><span>    console.log(&#39;最多的字符是&#39;+key);</span></span>
<span class="line"><span>    console.log(&#39;出现的次数是&#39;+max);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>1. 创建了一个空的对象</span></span>
<span class="line"><span>2. 将空对象的原型，指向于构造函数的原型</span></span>
<span class="line"><span>3. 将空对象作为构造函数的上下文（改变this指向）</span></span>
<span class="line"><span>4. 对构造函数有返回值的处理判断</span></span>
<span class="line"><span>function Fun( age,name ){</span></span>
<span class="line"><span>  this.age = age;</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function create( fn , ...args ){</span></span>
<span class="line"><span>  //1. 创建了一个空的对象</span></span>
<span class="line"><span>  var obj = {}; //var obj = Object.create({})</span></span>
<span class="line"><span>  //2. 将空对象的原型，指向于构造函数的原型</span></span>
<span class="line"><span>  Object.setPrototypeOf(obj,fn.prototype);</span></span>
<span class="line"><span>  //3. 将空对象作为构造函数的上下文（改变this指向）</span></span>
<span class="line"><span>  var result = fn.apply(obj,args);</span></span>
<span class="line"><span>  //4. 对构造函数有返回值的处理判断</span></span>
<span class="line"><span>  return result instanceof Object ? result : obj;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log( create(Fun,18,&#39;张三&#39;)   )</span></span>
<span class="line"><span>1. 闭包是什么</span></span>
<span class="line"><span>  闭包是一个函数加上到创建函数的作用域的连接，闭包“关闭”了函数的自由变量。</span></span>
<span class="line"><span>2. 闭包可以解决什么问题【闭包的优点】</span></span>
<span class="line"><span>  2.1 内部函数可以访问到外部函数的局部变量</span></span>
<span class="line"><span>  2.2 闭包可以解决的问题</span></span>
<span class="line"><span>      var lis = document.getElementsByTagName(&#39;li&#39;);</span></span>
<span class="line"><span>      for(var i=0;i&lt;lis.length;i++){</span></span>
<span class="line"><span>        (function(i){</span></span>
<span class="line"><span>          lis[i].onclick = function(){</span></span>
<span class="line"><span>            alert(i);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        })(i)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>3. 闭包的缺点</span></span>
<span class="line"><span>  3.1 变量会驻留在内存中，造成内存损耗问题。</span></span>
<span class="line"><span>        解决：把闭包的函数设置为null</span></span>
<span class="line"><span>  3.2 内存泄漏【ie】 ==&gt; 可说可不说，如果说一定要提到ie</span></span>
<span class="line"><span>1. 原型可以解决什么问题</span></span>
<span class="line"><span>  对象共享属性和共享方法</span></span>
<span class="line"><span>2. 谁有原型</span></span>
<span class="line"><span>函数拥有：prototype</span></span>
<span class="line"><span>对象拥有：__proto__</span></span>
<span class="line"><span>3. 对象查找属性或者方法的顺序</span></span>
<span class="line"><span>  先在对象本身查找 --&gt; 构造函数中查找 --&gt; 对象的原型 --&gt; 构造函数的原型中 --&gt; 当前原型的原型中查找</span></span>
<span class="line"><span>4. 原型链</span></span>
<span class="line"><span>  4.1 是什么？：就是把原型串联起来</span></span>
<span class="line"><span>  4.2 原型链的最顶端是null</span></span>
<span class="line"><span>class Parent{</span></span>
<span class="line"><span>  constructor(){</span></span>
<span class="line"><span>    this.age = 18;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>class Child extends Parent{</span></span>
<span class="line"><span>  constructor(){</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    this.name = &#39;张三&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let o1 = new Child();</span></span>
<span class="line"><span>console.log( o1,o1.name,o1.age );</span></span>
<span class="line"><span>function Parent(){</span></span>
<span class="line"><span>  this.age = 20;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function Child(){</span></span>
<span class="line"><span>  this.name = &#39;张三&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Child.prototype = new Parent();</span></span>
<span class="line"><span>let o2 = new Child();</span></span>
<span class="line"><span>console.log( o2,o2.name,o2.age );</span></span>
<span class="line"><span>function Parent(){</span></span>
<span class="line"><span>  this.age = 22;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function Child(){</span></span>
<span class="line"><span>  this.name = &#39;张三&#39;</span></span>
<span class="line"><span>  Parent.call(this);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let o3 = new Child();</span></span>
<span class="line"><span>console.log( o3,o3.name,o3.age );</span></span>
<span class="line"><span>function Parent(){</span></span>
<span class="line"><span>  this.age = 100;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function Child(){</span></span>
<span class="line"><span>  Parent.call(this);</span></span>
<span class="line"><span>  this.name = &#39;张三&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Child.prototype = new Parent();</span></span>
<span class="line"><span>let o4 = new Child();</span></span>
<span class="line"><span>console.log( o4,o4.name,o4.age );</span></span>
<span class="line"><span>可以改变this指向</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>语法： 函数.call()、函数.apply()、函数.bind()</span></span>
<span class="line"><span>1. call、apply可以立即执行。bind不会立即执行，因为bind返回的是一个函数需要加入()执行。</span></span>
<span class="line"><span>2. 参数不同：apply第二个参数是数组。call和bind有多个参数需要挨个写。</span></span>
<span class="line"><span>1. 用apply的情况</span></span>
<span class="line"><span>var arr1 = [1,2,4,5,7,3,321];</span></span>
<span class="line"><span>console.log( Math.max.apply(null,arr1) )</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>2. 用bind的情况</span></span>
<span class="line"><span>var btn = document.getElementById(&#39;btn&#39;);</span></span>
<span class="line"><span>var h1s = document.getElementById(&#39;h1s&#39;);</span></span>
<span class="line"><span>btn.onclick = function(){</span></span>
<span class="line"><span>  console.log( this.id );</span></span>
<span class="line"><span>}.bind(h1s)</span></span>
<span class="line"><span>V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>之前的版本是：插入排序和快排，现在是冒泡</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>原理实现链接：https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>***710行代码开始***</span></span>
<span class="line"><span>共同点：复制</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>1. 浅拷贝：只复制引用，而未复制真正的值。</span></span>
<span class="line"><span>var arr1 = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;];</span></span>
<span class="line"><span>var arr2 = arr1;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>var obj1 = {a:1,b:2}</span></span>
<span class="line"><span>var obj2 = Object.assign(obj1);</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>2. 深拷贝：是复制真正的值 （不同引用）</span></span>
<span class="line"><span>var obj3 = {</span></span>
<span class="line"><span>  a:1,</span></span>
<span class="line"><span>  b:2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var obj4 = JSON.parse(JSON.stringify( obj3 ));</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>//递归的形式</span></span>
<span class="line"><span>function copyObj( obj ){</span></span>
<span class="line"><span>  if(  Array.isArray(obj)  ){</span></span>
<span class="line"><span>    var newObj = [];</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>    var newObj = {};</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  for( var key in obj ){</span></span>
<span class="line"><span>    if( typeof obj[key] == &#39;object&#39; ){</span></span>
<span class="line"><span>      newObj[key] = copyObj(obj[key]);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>      newObj[key] = obj[key];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newObj;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(  copyObj(obj5)  );</span></span>
<span class="line"><span>公共点：在客户端存放数据</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>1. 数据存放有效期</span></span>
<span class="line"><span>    sessionStorage : 仅在当前浏览器窗口关闭之前有效。【关闭浏览器就没了】</span></span>
<span class="line"><span>    localStorage   : 始终有效，窗口或者浏览器关闭也一直保存，所以叫持久化存储。</span></span>
<span class="line"><span>    cookie         : 只在设置的cookie过期时间之前有效，即使窗口或者浏览器关闭也有效。</span></span>
<span class="line"><span>2. localStorage、sessionStorage不可以设置过期时间</span></span>
<span class="line"><span>   cookie 有过期时间，可以设置过期（把时间调整到之前的时间，就过期了）</span></span>
<span class="line"><span>3. 存储大小的限制</span></span>
<span class="line"><span>  cookie存储量不能超过4k</span></span>
<span class="line"><span>  localStorage、sessionStorage不能超过5M</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ****根据不同的浏览器存储的大小是不同的。</span></span>
<span class="line"><span>1. 易读性和维护性更好。</span></span>
<span class="line"><span>2. seo成分会更好，蜘蛛抓取更好。</span></span>
<span class="line"><span>3. IE8不兼容HTML5标签的。解决：可以通过html5shiv.js去处理。</span></span>
<span class="line"><span>1. 区别</span></span>
<span class="line"><span>  :是伪类、::伪元素  ===》是为了做区分</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>2.是什么？作用</span></span>
<span class="line"><span>  元素before之前 、 元素after之后</span></span>
<span class="line"><span>  作用：清除浮动、样式布局上也有作用</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; autocapitalize=&#39;off&#39;&gt;</span></span>
<span class="line"><span>Chrome默认字体大小是：16px</span></span>
<span class="line"><span>**每个浏览器默认字体大小可能都不一样</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>div{</span></span>
<span class="line"><span>  font-size:10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>div span{</span></span>
<span class="line"><span>  display: inline-block;</span></span>
<span class="line"><span>  -webkit-transform:scale(1.6);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>相对于font-size</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>em针对于父元素的font-size</span></span>
<span class="line"><span>rem针对于根(html)元素的font-size</span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  a,button,input,textarea{</span></span>
<span class="line"><span>    -webkit-tap-highlight-color: rgba(0,0,0,0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;style type=&quot;text/css&quot;&gt;</span></span>
<span class="line"><span>  input::-webkit-input-placeholder{</span></span>
<span class="line"><span>    color:red;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>禁止ios 长按时触发系统的菜单，禁止ios&amp;android长按时下载图片</span></span>
<span class="line"><span>html,body{</span></span>
<span class="line"><span>  touch-callout: none;</span></span>
<span class="line"><span>  -webkit-touch-callout: none;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  user-select:none;</span></span>
<span class="line"><span>  -webkit-user-select:none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>html,body{</span></span>
<span class="line"><span>  user-select:none;</span></span>
<span class="line"><span>  -webkit-user-select:none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>淘宝无限适配【移动端】：淘宝无限适配 + 布局单位使用rem</span></span>
<span class="line"><span>1. 是什么？</span></span>
<span class="line"><span>  一个URL可以响应多端</span></span>
<span class="line"><span>2. 语法结构</span></span>
<span class="line"><span>  @media only screen and (max-width: 1000px){</span></span>
<span class="line"><span>    ul li:last-child{</span></span>
<span class="line"><span>      display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>  only : 可以排除不支持媒体查询的浏览器</span></span>
<span class="line"><span>  screen ： 设备类型</span></span>
<span class="line"><span>  max-width | max-height</span></span>
<span class="line"><span>  min-width | min-height </span></span>
<span class="line"><span>3. 响应式图片【性能优化】</span></span>
<span class="line"><span>  &lt;picture&gt;</span></span>
<span class="line"><span>    &lt;source srcset=&quot;1.jpg&quot; media=&#39;(min-width:1000px)&#39;&gt;</span></span>
<span class="line"><span>    &lt;source srcset=&quot;2.jpg&quot; media=&#39;(min-width:700px)&#39;&gt;</span></span>
<span class="line"><span>    &lt;img srcset=&quot;3.jpg&quot;&gt;</span></span>
<span class="line"><span>  &lt;/picture&gt;</span></span>
<span class="line"><span>一、什么情况下采用响应式布局</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  数据不是特别多，用户量不是特别大，纯展示类的项目适合响应式布局</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  例如：公司的官网、专题页面</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  特别追求性能的项目，不太适合响应式，因为如果添加了很多的响应式就会造成加载速度变慢。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>二、pc + 移动端应该做什么样的布局方案</span></span>
<span class="line"><span>  注意：访问量还可以或者比较大，类似于淘宝网。</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  pc是一套，会加入一点点响应式。</span></span>
<span class="line"><span>  移动端是一套，会使用自适应的布局方式。</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>三、pc的设计图</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>  ui：1980</span></span>
<span class="line"><span>  笔记本电脑：1280</span></span>
<span class="line"><span>  ui图的宽度和电脑的宽度不对应该怎么办？</span></span>
<span class="line"><span>    1. 把ui图进行等比缩放，缩放成和电脑一样的尺寸</span></span>
<span class="line"><span>    2. 换1980的电脑</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>四、移动端的设计图</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>  宽度：750</span></span>
<span class="line"><span>  因为750设计图/2就是375，正好是iphone6的尺寸，我们要把iphone6的尺寸做为基准点。</span></span>
<span class="line"><span>var、let、const 共同点都是可以声明变量的</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>区别一：</span></span>
<span class="line"><span>  var 具有变量提升的机制</span></span>
<span class="line"><span>  let和const没有变量提升的机制</span></span>
<span class="line"><span>区别二：</span></span>
<span class="line"><span>  var 可以多次声明同一个变量</span></span>
<span class="line"><span>  let和const不可以多次声明同一个变量</span></span>
<span class="line"><span>区别三：</span></span>
<span class="line"><span>  var、let声明变量的</span></span>
<span class="line"><span>  const声明常量</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  var和let声明的变量可以再次赋值，但是const不可以再次赋值了。</span></span>
<span class="line"><span>区别四：</span></span>
<span class="line"><span>  var声明的变量没有自身作用域</span></span>
<span class="line"><span>  let和const声明的变量有自身的作用域</span></span>
<span class="line"><span>console.log( str );//undefined</span></span>
<span class="line"><span>var str = &#39;你好&#39;;</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>console.log( num );//报错</span></span>
<span class="line"><span>let num = 10;</span></span>
<span class="line"><span>function demo(){</span></span>
<span class="line"><span>  var n = 2;</span></span>
<span class="line"><span>  if( true ){</span></span>
<span class="line"><span>    var n = 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log( n );//1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>demo();</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>function demo(){</span></span>
<span class="line"><span>  let n = 2;</span></span>
<span class="line"><span>  if( true ){</span></span>
<span class="line"><span>    let n = 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log( n );//2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>demo();</span></span>
<span class="line"><span>const obj = {</span></span>
<span class="line"><span>  a:1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.a = 11111;</span></span>
<span class="line"><span>console.log( obj )</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>const arr = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;];</span></span>
<span class="line"><span>arr[0]= &#39;aaaaa&#39;;</span></span>
<span class="line"><span>console.log( arr );</span></span>
<span class="line"><span>const a = {a:1,b:4};</span></span>
<span class="line"><span>const b = {b:2,c:3};</span></span>
<span class="line"><span>​</span></span>
<span class="line"><span>let obj1 = Object.assign(a,b);</span></span>
<span class="line"><span>console.log( obj1 );</span></span>
<span class="line"><span>let obj2 = {...a,...b};</span></span>
<span class="line"><span>console.log( obj2 );</span></span>
<span class="line"><span>function extend( target,  source ){</span></span>
<span class="line"><span>  for(var key in source){</span></span>
<span class="line"><span>    target[key] = source[key];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return target;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log( extend(a,b) );</span></span>
<span class="line"><span>1. this指向的问题</span></span>
<span class="line"><span>  箭头函数中的this只在箭头函数定义时就决定的，而且不可修改的（call、apply、bind）</span></span>
<span class="line"><span>  ****箭头函数的this指向定义时候、外层第一个普通函数的this</span></span>
<span class="line"><span>2. 箭头函数不能new（不能当作构造函数）</span></span>
<span class="line"><span>3. 箭头函数prototype</span></span>
<span class="line"><span>4. 箭头函数arguments</span></span>
<span class="line"><span>有三种状态：</span></span>
<span class="line"><span>pending（进行中）</span></span>
<span class="line"><span>fulfilled（已成功）</span></span>
<span class="line"><span>rejected（已失败）</span></span>
<span class="line"><span>区别一：返回的内容不同</span></span>
<span class="line"><span>  filter 返回是新数组</span></span>
<span class="line"><span>  find   返回具体的内容</span></span>
<span class="line"><span>区别二：</span></span>
<span class="line"><span>  find ：匹配到第一个即返回</span></span>
<span class="line"><span>  filter ： 返回整体（没一个匹配到的都返回）</span></span>
<span class="line"><span>some  ==》 如果有一项匹配则返回true</span></span>
<span class="line"><span>every ==》 全部匹配才会返回true</span></span>
<span class="line"><span>1. 有哪些生命周期</span></span>
<span class="line"><span>系统自带：</span></span>
<span class="line"><span>  beforeCreate</span></span>
<span class="line"><span>  created</span></span>
<span class="line"><span>  beforeMount</span></span>
<span class="line"><span>  mounted</span></span>
<span class="line"><span>  beforeUpdate</span></span>
<span class="line"><span>  updated</span></span>
<span class="line"><span>  beforeDestroy</span></span>
<span class="line"><span>  destroyed</span></span>
<span class="line"><span>2. 一旦进入到页面或者组件，会执行哪些生命周期，顺序。</span></span>
<span class="line"><span> beforeCreate</span></span>
<span class="line"><span> created</span></span>
<span class="line"><span> beforeMount</span></span>
<span class="line"><span> mounted</span></span>
<span class="line"><span>3. 在哪个阶段有$el，在哪个阶段有$data</span></span>
<span class="line"><span>  beforeCreate 啥也没有</span></span>
<span class="line"><span>  created  有data没有el</span></span>
<span class="line"><span>  beforeMount 有data没有el</span></span>
<span class="line"><span>  mounted 都有</span></span>
<span class="line"><span>4. 如果加入了keep-alive会多俩个生命周期</span></span>
<span class="line"><span>  activated、deactivated</span></span>
<span class="line"><span>5. 如果加入了keep-alive，第一次进入组件会执行哪些生命？</span></span>
<span class="line"><span> beforeCreate</span></span>
<span class="line"><span> created</span></span>
<span class="line"><span> beforeMount</span></span>
<span class="line"><span> mounted</span></span>
<span class="line"><span> activated</span></span>
<span class="line"><span>6. 如果加入了keep-alive，第二次或者第N次进入组件会执行哪些生命周期？</span></span>
<span class="line"><span>只执行一个生命周期：activated</span></span>
<span class="line"><span>1. 是什么</span></span>
<span class="line"><span>vue系统自带的一个组件，功能：是来缓存组件的。===》提升性能</span></span>
<span class="line"><span>2. 使用场景</span></span>
<span class="line"><span>就是来缓存组件，提升项目的性能。具体实现比如：首页进入到详情页，如果用户在首页每次点击都是相同的，那么详情页就没必要请求N次了，直接缓存起来就可以了，当然如果点击的不是同一个，那么就直接请求。</span></span>
<span class="line"><span>1. 网站一定要多页面</span></span>
<span class="line"><span>2. title、描述、关键字</span></span>
<span class="line"><span>3. 图片、音频、视频、的标签属性特别关键</span></span>
<span class="line"><span>4. 网站不能出现死链接</span></span></code></pre></div>`,3),i=[e];function c(t,o,r,d,g,u){return a(),s("div",null,i)}const h=n(l,[["render",c]]);export{f as __pageData,h as default};
