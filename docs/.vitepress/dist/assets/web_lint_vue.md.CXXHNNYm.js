import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.mlmjWbz3.js";const m=JSON.parse('{"title":"vue 文件常用组件规范","description":"","frontmatter":{},"headers":[],"relativePath":"web/lint/vue.md","filePath":"web/lint/vue.md"}'),p={name:"web/lint/vue.md"},l=e(`<h1 id="vue-文件常用组件规范" tabindex="-1">vue 文件常用组件规范 <a class="header-anchor" href="#vue-文件常用组件规范" aria-label="Permalink to &quot;vue 文件常用组件规范&quot;">​</a></h1><h2 id="推荐文件夹架构" tabindex="-1">推荐文件夹架构 <a class="header-anchor" href="#推荐文件夹架构" aria-label="Permalink to &quot;推荐文件夹架构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>project name</span></span>
<span class="line"><span>---- src 主代码文件</span></span>
<span class="line"><span>-------- api 接口请求</span></span>
<span class="line"><span>-------- assets css fonts img</span></span>
<span class="line"><span>-------- components 公有组件 采用全小写加短横线分割</span></span>
<span class="line"><span>-------- direction vue direction</span></span>
<span class="line"><span>-------- enum 枚举</span></span>
<span class="line"><span>-------- hooks</span></span>
<span class="line"><span>-------- icons</span></span>
<span class="line"><span>-------- layout 布局</span></span>
<span class="line"><span>-------- router 路由</span></span>
<span class="line"><span>-------- store 状态管理器</span></span>
<span class="line"><span>-------- themes 主题</span></span>
<span class="line"><span>-------- types 类型 ts 使用</span></span>
<span class="line"><span>-------- views 页面路由</span></span>
<span class="line"><span>------------ modules</span></span>
<span class="line"><span>---------------- pages</span></span>
<span class="line"><span>---------------- components</span></span>
<span class="line"><span>---- other file or folder</span></span></code></pre></div><h3 id="建议" tabindex="-1">建议 <a class="header-anchor" href="#建议" aria-label="Permalink to &quot;建议&quot;">​</a></h3><ol><li>对全局试用的公有组件采用全小写加短横线分割 todo-list</li><li>对页面内的组件采用大驼峰， 例如 TodoList</li><li>对页面的路由短横线分割 info-entry</li><li>对js css文件采用短横线分割 todo-list</li></ol><h2 id="方法命名" tabindex="-1">方法命名 <a class="header-anchor" href="#方法命名" aria-label="Permalink to &quot;方法命名&quot;">​</a></h2><h3 id="方法命名-1" tabindex="-1">方法命名 <a class="header-anchor" href="#方法命名-1" aria-label="Permalink to &quot;方法命名&quot;">​</a></h3><p><code>handleXXX</code></p><h3 id="事件处理方法" tabindex="-1">事件处理方法 <a class="header-anchor" href="#事件处理方法" aria-label="Permalink to &quot;事件处理方法&quot;">​</a></h3><p>处理各种事件，<code>click mouseover change input</code> 等事件的处理方法，皆使用 handleXXX</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>handleProfileUpdate</span></span>
<span class="line"><span>handleFilterChange</span></span>
<span class="line"><span>handleMouseover</span></span>
<span class="line"><span>handleAvatarMouseover</span></span>
<span class="line"><span>handleNameClick</span></span></code></pre></div><h3 id="处理数据的方法" tabindex="-1">处理数据的方法 <a class="header-anchor" href="#处理数据的方法" aria-label="Permalink to &quot;处理数据的方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>requestXXX 拉取数据的方法</span></span>
<span class="line"><span>api 或 vuex/actions 层使用 fetchXXX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vue 业务代码里面使用 requestXXX or fetchXXX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createXXX 创建数据的方法</span></span>
<span class="line"><span>updateXXX 更新数据的方法</span></span>
<span class="line"><span>removeXXX 删除数据的方法</span></span>
<span class="line"><span>formatXXX 格式化数据的方法</span></span></code></pre></div><h3 id="暴露方法给父组件调用" tabindex="-1">暴露方法给父组件调用 <a class="header-anchor" href="#暴露方法给父组件调用" aria-label="Permalink to &quot;暴露方法给父组件调用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>refXXX</span></span></code></pre></div>`,15),i=[l];function t(o,c,r,d,h,u){return n(),s("div",null,i)}const b=a(p,[["render",t]]);export{m as __pageData,b as default};
