import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.mlmjWbz3.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ubuntu/clear-history.md","filePath":"ubuntu/clear-history.md"}'),t={name:"ubuntu/clear-history.md"},l=n(`<h2 id="清楚记录" tabindex="-1">清楚记录 <a class="header-anchor" href="#清楚记录" aria-label="Permalink to &quot;清楚记录&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">history</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> su</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/log/wtmp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/btmp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/ubuntu/.bash_history</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/.bash_history</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">history</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span></span></code></pre></div>`,2),e=[l];function h(p,k,r,c,o,d){return i(),a("div",null,e)}const _=s(t,[["render",h]]);export{g as __pageData,_ as default};
