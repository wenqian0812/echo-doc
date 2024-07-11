# CSS面试题

## content-visibility

```
https://juejin.cn/post/7168629736838463525
```

## z-index问题

## 垂直居中, 水平居中
```
flex
position  relative absolute
transform  translate
```


## 实现一个进度条的方式

## 重绘和重排

## 常见的布局方法有哪些？他们的优缺点是什么？
```
页面布局常用的方法有浮动、定位、flex、grid 网格布局、栅格系统布局
浮动：  优点：兼容性好。 缺点：浮动会脱离标准文档流，因此要清除浮动。我们解决好这个问题即可。
绝对定位 优点：快捷。 缺点：导致子元素也脱离了标准文档流，可实用性差。
flex 布局（CSS3 中出现的） 优点：解决上面两个方法的不足，flex 布局比较完美。移动端基本用 flex 布局。
网格布局（grid） CSS3 中引入的布局，很好用。代码量简化了很多。
利用网格布局实现的一个左右 300px 中间自适应的布局
```

## 谈谈盒子模型？

```
在标准盒子模型中，width 和 height 指的是内容区域的宽度和高度。
增加内边距、边框和外边距不会 影响内容区域的尺寸，但是会增加元素框的总尺寸。
IE 盒子模型中，width 和 height 指的是内容区域+border+padding的宽度和高度。
```