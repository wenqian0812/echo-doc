import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.mlmjWbz3.js";const g=JSON.parse('{"title":"CSS命名规范","description":"","frontmatter":{},"headers":[],"relativePath":"web/lint/css.md","filePath":"web/lint/css.md"}'),p={name:"web/lint/css.md"},l=i(`<h1 id="css命名规范" tabindex="-1">CSS命名规范 <a class="header-anchor" href="#css命名规范" aria-label="Permalink to &quot;CSS命名规范&quot;">​</a></h1><p>遵循<code>bem</code>规范, 每个 Vue 组件的最外层容器采用组件名+root的方式命名，如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;paging-table-root&quot;&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p>这样做是为了更快速定位一个组件，而不用先通过 vue-devtool 找到组件名，然后再去项目里找。</p><p>书写规则</p><p>每个组件的<code>&lt;style&gt;</code>标签都需要添加scoped属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>    /*...*/</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>选择器之间禁止嵌套，便于代码阅读和后期维护，以及避免权重所带来的影响：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>    .news-list {}</span></span>
<span class="line"><span>    .news-item {}</span></span>
<span class="line"><span>    .news-txt {}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>&lt;!-- 不建议的写法 --&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>    .news-list {}</span></span>
<span class="line"><span>    .news-list .news-item {}</span></span>
<span class="line"><span>    .news-item .news-txt {}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>\`\`\`vue</span></span>
<span class="line"><span>css样式书写时按照定位、盒模型、样式、功能的顺序，比如：</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.news-list {</span></span>
<span class="line"><span>  /* 定位 */</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  z-index: 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 盒模型 */</span></span>
<span class="line"><span>  float: left;</span></span>
<span class="line"><span>  display: block;</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>  width: 0;</span></span>
<span class="line"><span>  height: 0;</span></span>
<span class="line"><span>  padding: 0;</span></span>
<span class="line"><span>  margin: 0;</span></span>
<span class="line"><span>  border: 0;</span></span>
<span class="line"><span>  outline: 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 样式 */</span></span>
<span class="line"><span>  background: #fff;</span></span>
<span class="line"><span>  color: #fff;</span></span>
<span class="line"><span>  font: italic bold 12px/20px arial, sans-serif;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 功能 */</span></span>
<span class="line"><span>  transition: all 1s;</span></span>
<span class="line"><span>  transform: translate(10px, 10px);</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>命名常用词汇 常用块（Block） 结构类：header, nav, subnav, menu, submenu, main, aside, footer</p><p>内容类：summary, banner, article, login, register, form, news</p><p>对于一个简单的组件，优先使用组件名作为 Block，不用把组件名全写出来，选其中一个典型单词就可以，比如：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;morning-news-root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">news-header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;news-title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;早间新闻&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;news-btn&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;更多&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;news-list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;news-item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;特普朗退出TTP&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>常用元素（Element） 结构类：header, main, content, footer</p><p>文本类：txt, link,</p><p>表单类：form, input, label</p><p>表格类：table, cloumn, row, cell</p><p>列表类：list, item, filed</p><p>按钮：button</p><p>常用修饰符（Modifier） 状态类：primary, success, warning, error, active</p><p>形状类：large, big, small</p><p>样式类：fl, center, middle, fr</p><p>容器类：box, wrap</p>`,24),t=[l];function e(h,k,c,d,r,E){return n(),a("div",null,t)}const y=s(p,[["render",e]]);export{g as __pageData,y as default};
