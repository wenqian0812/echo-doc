import{_ as a,c as s,o as e,a2 as o}from"./chunks/framework.mlmjWbz3.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/kafka.md","filePath":"other/kafka.md"}'),n={name:"other/kafka.md"},t=o(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><blockquote><p>在docker下面，进入docker里面 切换到 /opt/kafka/bin 目录</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 生产消息</span></span>
<span class="line"><span>./kafka-console-producer.sh --broker-list localhost:9092 --topic log_topic</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 消费消息</span></span>
<span class="line"><span>./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic log_topic --from-beginning</span></span></code></pre></div>`,3),p=[t];function c(l,i,r,_,d,h){return e(),s("div",null,p)}const u=a(n,[["render",c]]);export{f as __pageData,u as default};
