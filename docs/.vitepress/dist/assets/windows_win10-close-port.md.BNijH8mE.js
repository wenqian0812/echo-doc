import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.mlmjWbz3.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"windows/win10-close-port.md","filePath":"windows/win10-close-port.md"}'),e={name:"windows/win10-close-port.md"},l=t('<h2 id="win10-解除端口占用" tabindex="-1"><code>win10</code> 解除端口占用 <a class="header-anchor" href="#win10-解除端口占用" aria-label="Permalink to &quot;`win10` 解除端口占用&quot;">​</a></h2><ul><li>找到端口占用PID</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ano</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findstr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;8080&quot;</span></span></code></pre></div><ul><li>找到对应pid占用程序</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tasklist</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findstr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;pid&quot;</span></span></code></pre></div><ul><li>终结程序</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tskill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10200</span></span></code></pre></div>',7),n=[l];function h(p,o,d,c,r,k){return a(),i("div",null,n)}const _=s(e,[["render",h]]);export{g as __pageData,_ as default};