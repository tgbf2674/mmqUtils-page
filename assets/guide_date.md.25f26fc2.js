import{_ as s,c as a,o as n,a as e}from"./app.a4e9123f.js";const D=JSON.parse('{"title":"\u65E5\u671F\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"now()","slug":"now"},{"level":2,"title":"timestamp()","slug":"timestamp"},{"level":2,"title":"toStringDate()","slug":"tostringdate"}],"relativePath":"guide/date.md","lastUpdated":1664364329000}'),t={name:"guide/date.md"},l=e(`<h1 id="\u65E5\u671F\u65B9\u6CD5" tabindex="-1">\u65E5\u671F\u65B9\u6CD5 <a class="header-anchor" href="#\u65E5\u671F\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="now" tabindex="-1">now() <a class="header-anchor" href="#now" aria-hidden="true">#</a></h2><p>now () \u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u6233</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.now() // Date.now() \u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u6233 1514096716800</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="timestamp" tabindex="-1">timestamp() <a class="header-anchor" href="#timestamp" aria-hidden="true">#</a></h2><p>timestamp (date[, format]) \u5C06\u65E5\u671F\u8F6C\u4E3A\u65F6\u95F4\u6233</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.timestamp() // mmqUtils.now() = Date.now() \u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u6233 1514096716800</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.timestamp(new Date()) // 1514096716800</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.timestamp(&#39;2018-12-01&#39;) // 1543593600000</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.timestamp(&#39;2017/12/20 10:10:30.459&#39;, &#39;yyyy/MM/dd HH:mm:ss.SSS&#39;) // 1513735830459</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="tostringdate" tabindex="-1">toStringDate() <a class="header-anchor" href="#tostringdate" aria-hidden="true">#</a></h2><p>toStringDate (str, format) \u4EFB\u610F\u683C\u5F0F\u5B57\u7B26\u4E32\u8F6C\u4E3A\u65E5\u671F</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;12/20/2017&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u5982\u679C\u89E3\u6790\u9519\u8BEF\u5219\u8FD4\u56DE new Date(&#39;Invalid Date&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // new Date(2017, 11, 20)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20 10:10:30&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // new Date(2017, 11, 20, 10, 10, 30)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20 10:10:30.568&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // new Date(2017, 11, 20, 10, 10, 30, 568)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20 10:10:30.2514766&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // new Date(2017, 11, 20, 10, 10, 30, 251)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20T10:10:30.738+0800&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 10:10:30 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20T10:10:30.738+01:00&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 17:10:30 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017-12-20T10:10:30.738Z&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 18:10:30 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;12/20/2017&#39;, &#39;MM/dd/yyyy&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;20171220101030&#39;, &#39;yyyyMMddHHmmss&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 10:10:30 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;2017/12/20 10:10:30&#39;, &#39;yyyy/MM/dd HH:mm:ss&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 10:10:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toStringDate(&#39;12/20/2017 10:10:30.100&#39;, &#39;MM/dd/yyyy HH:mm:ss.SSS&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                // Wed Dec 20 2017 10:10:30 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),p=[l];function o(i,c,r,m,d,A){return n(),a("div",null,p)}const y=s(t,[["render",o]]);export{D as __pageData,y as default};
