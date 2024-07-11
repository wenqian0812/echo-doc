import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.mlmjWbz3.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/logstash.md","filePath":"other/logstash.md"}'),t={name:"other/logstash.md"},e=p(`<h2 id="logstash-安装-oss-腾讯云-阿里云" tabindex="-1">logstash 安装 oss(腾讯云 阿里云) <a class="header-anchor" href="#logstash-安装-oss-腾讯云-阿里云" aria-label="Permalink to &quot;logstash 安装 oss(腾讯云 阿里云)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/usr/share/logstash/bin/logstash-plugin install logstash-output-oss</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  s3{</span></span>
<span class="line"><span>     access_key_id =&gt; &quot;crazy_key&quot;             (optional)</span></span>
<span class="line"><span>     secret_access_key =&gt; &quot;monkey_access_key&quot; (optional)</span></span>
<span class="line"><span>     region =&gt; &quot;eu-west-1&quot;                    (optional, default = &quot;us-east-1&quot;)</span></span>
<span class="line"><span>     bucket =&gt; &quot;your_bucket&quot;                  (required)</span></span>
<span class="line"><span>     size_file =&gt; 2048                        (optional) - Bytes</span></span>
<span class="line"><span>     time_file =&gt; 5                           (optional) - Minutes</span></span>
<span class="line"><span>     codec =&gt; &quot;plain&quot;                         (optional)</span></span>
<span class="line"><span>     canned_acl =&gt; &quot;private&quot;                  (optional. Options are &quot;private&quot;, &quot;public-read&quot;, &quot;public-read-write&quot;, &quot;authenticated-read&quot;, &quot;aws-exec-read&quot;, &quot;bucket-owner-read&quot;, &quot;bucket-owner-full-control&quot;, &quot;log-delivery-write&quot;. Defaults to &quot;private&quot; )</span></span>
<span class="line"><span>   }</span></span></code></pre></div><h2 id="s3" tabindex="-1">s3 <a class="header-anchor" href="#s3" aria-label="Permalink to &quot;s3&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  s3 {</span></span>
<span class="line"><span>        endpoint =&gt; &quot;https://xx-1251612638.cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>        access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>        secret_access_key =&gt; &quot;access_key_secret&quot; </span></span>
<span class="line"><span>        region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>        bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>        time_file =&gt; 1</span></span>
<span class="line"><span>        codec =&gt; &quot;json&quot;</span></span>
<span class="line"><span>        canned_acl =&gt; &quot;public-read&quot;</span></span>
<span class="line"><span>   }</span></span></code></pre></div><h2 id="oss" tabindex="-1">oss <a class="header-anchor" href="#oss" aria-label="Permalink to &quot;oss&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  oss {</span></span>
<span class="line"><span>        endpoint =&gt; &quot;https://xx-1251612638.cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>        bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>        access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>        access_key_secret =&gt; &quot;access_key_secret&quot;</span></span>
<span class="line"><span>        region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>        prefix =&gt; &quot;oss/database&quot;                         </span></span>
<span class="line"><span>        recover =&gt; true                                      </span></span>
<span class="line"><span>        rotation_strategy =&gt; &quot;size_and_time&quot;                  </span></span>
<span class="line"><span>        time_rotate =&gt; 1                                     </span></span>
<span class="line"><span>        size_rotate =&gt; 1000</span></span>
<span class="line"><span>        temporary_directory =&gt; &quot;/home/ubuntu&quot;                            </span></span>
<span class="line"><span>        encoding =&gt; &quot;gzip&quot;                                 </span></span>
<span class="line"><span>        additional_oss_settings =&gt; {</span></span>
<span class="line"><span>            max_connections_to_oss =&gt; 1024                      </span></span>
<span class="line"><span>            secure_connection_enabled =&gt; true                  </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        codec =&gt; json {</span></span>
<span class="line"><span>            charset =&gt; &quot;UTF-8&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>   }</span></span></code></pre></div><h2 id="kafka" tabindex="-1">kafka <a class="header-anchor" href="#kafka" aria-label="Permalink to &quot;kafka&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    kafka {</span></span>
<span class="line"><span>         bootstrap_servers =&gt; &quot;localhost:9092&quot; #kafka服务器地址</span></span>
<span class="line"><span>         topic_id =&gt; &quot;log_topic&quot;</span></span>
<span class="line"><span>         batch_size =&gt; 5</span></span>
<span class="line"><span>         codec =&gt; &quot;json&quot; #写入的时候使用json编码，因为logstash收集后会转换成json格式</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="完整配置" tabindex="-1">完整配置 <a class="header-anchor" href="#完整配置" aria-label="Permalink to &quot;完整配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    syslog {</span></span>
<span class="line"><span>        port =&gt; 514</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    prune {</span></span>
<span class="line"><span>        whitelist_names =&gt; [ &quot;message&quot; ]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>   stdout { }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   s3 {</span></span>
<span class="line"><span>        endpoint =&gt; &quot;https://cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>        access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>        secret_access_key =&gt; &quot;access_key_secret&quot;</span></span>
<span class="line"><span>        region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>        bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>        time_file =&gt; 1</span></span>
<span class="line"><span>        codec =&gt; &quot;json&quot;</span></span>
<span class="line"><span>        canned_acl =&gt; &quot;public-read&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="kafka-and-s3-tencent-oss" tabindex="-1">kafka and s3(tencent oss) <a class="header-anchor" href="#kafka-and-s3-tencent-oss" aria-label="Permalink to &quot;kafka and s3(tencent oss)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    syslog {</span></span>
<span class="line"><span>        port =&gt; 5514</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    prune {</span></span>
<span class="line"><span>        whitelist_names =&gt; [ &quot;message&quot;, &quot;logsource&quot;, &quot;program&quot;, &quot;@timestamp&quot; ]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>      if ([program] != &quot;log&quot; and [program] != &quot;user-manager&quot;) {</span></span>
<span class="line"><span>       drop {}</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    if [message] =~ /^log_on_line.*/ {</span></span>
<span class="line"><span>        kafka {</span></span>
<span class="line"><span>            bootstrap_servers =&gt; &quot;localhost:9092&quot; #kafka服务器地址</span></span>
<span class="line"><span>            topic_id =&gt; &quot;log_topic&quot;</span></span>
<span class="line"><span>            batch_size =&gt; 5</span></span>
<span class="line"><span>            codec =&gt; &quot;json&quot; # 写入的时候使用json编码，因为logstash收集后会转换成json格式</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if [message] =~ /^log_off_line.*/ {</span></span>
<span class="line"><span>        s3 {</span></span>
<span class="line"><span>            endpoint =&gt; &quot;https://cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>            access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>            secret_access_key =&gt; &quot;access_key_secret&quot;</span></span>
<span class="line"><span>            region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>            bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>            time_file =&gt; 1</span></span>
<span class="line"><span>            codec =&gt; &quot;json&quot;</span></span>
<span class="line"><span>            canned_acl =&gt; &quot;public-read&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="rabbmitmq-and-s3-tencent-oss" tabindex="-1">rabbmitmq and s3(tencent oss) <a class="header-anchor" href="#rabbmitmq-and-s3-tencent-oss" aria-label="Permalink to &quot;rabbmitmq and s3(tencent oss)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    syslog {</span></span>
<span class="line"><span>        port =&gt; 5514</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    prune {</span></span>
<span class="line"><span>        whitelist_names =&gt; [ &quot;message&quot;, &quot;logsource&quot;, &quot;program&quot;, &quot;@timestamp&quot; ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if []</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    if [message] =~ /^log_on_line.*/ {</span></span>
<span class="line"><span>        rabbitmq {</span></span>
<span class="line"><span>            exchange =&gt; &quot;xx-exchange&quot;</span></span>
<span class="line"><span>            host =&gt; &quot;localhost&quot;</span></span>
<span class="line"><span>            exchange_type =&gt; &quot;direct&quot;</span></span>
<span class="line"><span>            key =&gt; &quot;logstash&quot;</span></span>
<span class="line"><span>            user =&gt; &quot;admin&quot;</span></span>
<span class="line"><span>            password =&gt; &quot;admin&quot;</span></span>
<span class="line"><span>            heartbeat =&gt; 0</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if [message] =~ /^log_off_line.*/ {</span></span>
<span class="line"><span>        s3 {</span></span>
<span class="line"><span>            endpoint =&gt; &quot;https://cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>            access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>            secret_access_key =&gt; &quot;access_key_secret&quot;</span></span>
<span class="line"><span>            region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>            bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>            time_file =&gt; 1</span></span>
<span class="line"><span>            codec =&gt; &quot;json_lines&quot;</span></span>
<span class="line"><span>            canned_acl =&gt; &quot;public-read&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    syslog {</span></span>
<span class="line"><span>        port =&gt; 5514</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    prune {</span></span>
<span class="line"><span>        whitelist_names =&gt; [ &quot;message&quot;, &quot;logsource&quot;, &quot;program&quot;, &quot;@timestamp&quot; ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mutate {  </span></span>
<span class="line"><span>        gsub =&gt; [ &quot;message&quot;, &quot;\\n&quot;, &quot;&quot; ]  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    stdout {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        rabbitmq {</span></span>
<span class="line"><span>            exchange =&gt; &quot;&quot;</span></span>
<span class="line"><span>            host =&gt; &quot;localhost&quot;</span></span>
<span class="line"><span>            exchange_type =&gt; &quot;direct&quot;</span></span>
<span class="line"><span>            key =&gt; &quot;python-test&quot;</span></span>
<span class="line"><span>            user =&gt; &quot;admin&quot;</span></span>
<span class="line"><span>            password =&gt; &quot;admin&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="rsyslog" tabindex="-1">rsyslog <a class="header-anchor" href="#rsyslog" aria-label="Permalink to &quot;rsyslog&quot;">​</a></h2><blockquote><p>ubuntu下面记得再50-default.conf的字符集前面 如 20-docker.conf</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>template(name=&quot;DynaFile&quot; type=&quot;string&quot; string=&quot;/var/log/syslogs/%programname%.log&quot;)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>if $programname contains &quot;user&quot; then {</span></span>
<span class="line"><span>    action(type=&quot;omfile&quot; dynaFile=&quot;DynaFile&quot;)</span></span>
<span class="line"><span>    stop</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>filter {</span></span>
<span class="line"><span>    prune {</span></span>
<span class="line"><span>        whitelist_names =&gt; [ &quot;message&quot;, &quot;logsource&quot;, &quot;program&quot;, &quot;@timestamp&quot; ]</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run --name mongo-test --privileged=true -v /home/CveManager/docker-cve/mongo.bk/mongo-entrypoint/:/docker-entrypoint-initdb.d/ -p 8080:27017 --restart=always -d mongo  --auth</span></span></code></pre></div><h2 id="config-syslog" tabindex="-1">Config Syslog <a class="header-anchor" href="#config-syslog" aria-label="Permalink to &quot;Config Syslog&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    tcp {</span></span>
<span class="line"><span>        port =&gt; 5514</span></span>
<span class="line"><span>        type =&gt; syslog</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    if [type] == &quot;syslog&quot; {</span></span>
<span class="line"><span>        grok {</span></span>
<span class="line"><span>            match =&gt; { &quot;message&quot; =&gt; &quot;%{SYSLOGTIMESTAMP:syslog_timestamp} %{SYSLOGHOST:syslog_hostname} %{DATA:syslog_program}(?:[%{POSINT:syslog_pid}])?: %{GREEDYDATA:syslog_message}&quot; }</span></span>
<span class="line"><span>            add_field =&gt; [ &quot;received_at&quot;, &quot;%{@timestamp}&quot; ]</span></span>
<span class="line"><span>            add_field =&gt; [ &quot;received_from&quot;, &quot;%{host}&quot; ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        date {</span></span>
<span class="line"><span>            match =&gt; [ &quot;syslog_timestamp&quot;, &quot;MMM d HH:mm:ss.SSS&quot;, &quot;MMM dd HH:mm:ss.SSS&quot; ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    stdout {}</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Jun 21 10:38:30 log log {&quot;a1&quot;: 9992}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%{MONTH:month} %{MONTHDAY:day} %{TIME:time} %{HOSTNAME:hostname} %{HOSTNAME:program} %{DATA:data}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    syslog {</span></span>
<span class="line"><span>        port =&gt; 5514</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter {</span></span>
<span class="line"><span>    json {</span></span>
<span class="line"><span>        source =&gt; &quot;message&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    prune {</span></span>
<span class="line"><span>        whitelist_names =&gt; [ &quot;msg&quot;, &quot;logsource&quot;, &quot;program&quot;, &quot;time&quot;, &quot;level&quot;, &quot;type&quot; ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mutate {</span></span>
<span class="line"><span>        remove_field =&gt; [&quot;@timestamp&quot;, &quot;timestamp&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    if [type] == &quot;real-time&quot; {</span></span>
<span class="line"><span>        rabbitmq {</span></span>
<span class="line"><span>            exchange =&gt; &quot;xx-exchange&quot;</span></span>
<span class="line"><span>            host =&gt; &quot;localhost&quot;</span></span>
<span class="line"><span>            exchange_type =&gt; &quot;direct&quot;</span></span>
<span class="line"><span>            key =&gt; &quot;logstash&quot;</span></span>
<span class="line"><span>            user =&gt; &quot;admin&quot;</span></span>
<span class="line"><span>            password =&gt; &quot;admin&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if [type] == &quot;off-line&quot; {</span></span>
<span class="line"><span>        elasticsearch {</span></span>
<span class="line"><span>            hosts =&gt; [&quot;172.16.102.26&quot;]</span></span>
<span class="line"><span>            index =&gt; &quot;xx-log&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    stdout {}</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>input {</span></span>
<span class="line"><span>    kafka {</span></span>
<span class="line"><span>        bootstrap_servers =&gt; [&quot;localhost:9200&quot;]</span></span>
<span class="line"><span>        client_id =&gt; &quot;test&quot;</span></span>
<span class="line"><span>        group_id =&gt; &quot;test&quot;</span></span>
<span class="line"><span>        auto_offset_reset =&gt; &quot;earliest&quot; //从最新的偏移量开始消费</span></span>
<span class="line"><span>        consumer_threads =&gt; 5</span></span>
<span class="line"><span>        topics =&gt; [&quot;echo-test&quot;] //数组类型，可配置多个topic</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    s3 {</span></span>
<span class="line"><span>        endpoint =&gt; &quot;https://cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>        access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>        secret_access_key =&gt; &quot;access_key_secret&quot;</span></span>
<span class="line"><span>        region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>        bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>        time_file =&gt; 1</span></span>
<span class="line"><span>        codec =&gt; &quot;json_lines&quot;</span></span>
<span class="line"><span>        canned_acl =&gt; &quot;public-read&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>    kafka {</span></span>
<span class="line"><span>        bootstrap_servers =&gt; [&quot;localhost:9092&quot;]</span></span>
<span class="line"><span>        client_id =&gt; &quot;hk&quot;</span></span>
<span class="line"><span>        group_id =&gt; &quot;hk&quot;</span></span>
<span class="line"><span>        auto_offset_reset =&gt; &quot;earliest&quot;</span></span>
<span class="line"><span>        consumer_threads =&gt; 20</span></span>
<span class="line"><span>        topics =&gt; [&quot;echo&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>output {</span></span>
<span class="line"><span>    stdout {}</span></span>
<span class="line"><span>    s3 {</span></span>
<span class="line"><span>        endpoint =&gt; &quot;https://cos.ap-nanjing.mxxcloud.com&quot;</span></span>
<span class="line"><span>        access_key_id =&gt; &quot;access_key_id&quot;</span></span>
<span class="line"><span>        secret_access_key =&gt; &quot;access_key_secret&quot;</span></span>
<span class="line"><span>        region =&gt; &quot;ap-nanjing&quot;</span></span>
<span class="line"><span>        bucket =&gt; &quot;xx-1251612638&quot;</span></span>
<span class="line"><span>        time_file =&gt; 1</span></span>
<span class="line"><span>        rotation_strategy =&gt; &quot;time&quot;</span></span>
<span class="line"><span>        codec =&gt; &quot;json_lines&quot;</span></span>
<span class="line"><span>        encoding =&gt; &quot;gzip&quot;</span></span>
<span class="line"><span>        canned_acl =&gt; &quot;public-read&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,26),l=[e];function o(i,c,u,g,q,d){return a(),n("div",null,l)}const m=s(t,[["render",o]]);export{h as __pageData,m as default};
