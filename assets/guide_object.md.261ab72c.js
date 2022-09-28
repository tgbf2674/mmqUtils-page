import{_ as a,c as s,o as n,a as e}from"./app.a4e9123f.js";const m=JSON.parse('{"title":"\u5BF9\u8C61\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"clear()","slug":"clear"}],"relativePath":"guide/object.md","lastUpdated":1664364329000}'),l={name:"guide/object.md"},t=e(`<h1 id="\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1">\u5BF9\u8C61\u65B9\u6CD5 <a class="header-anchor" href="#\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="clear" tabindex="-1">clear() <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h2><p>clear (obj[, defs, assigns]) \u6E05\u7A7A\u5BF9\u8C61; defs\u5982\u679C\u4E0D\u4F20\uFF08\u6E05\u7A7A\u6240\u6709\u5C5E\u6027\uFF09\u3001\u5982\u679C\u4F20\u5BF9\u8C61\uFF08\u6E05\u7A7A\u5E76\u7EE7\u627F)\u3001\u5982\u679C\u4F20\u503C(\u7ED9\u6240\u6709\u8D4B\u503C)</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                let a = [11, 22, 33, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(a) // []</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(a, undefined) // [undefined, undefined, undefined, undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(a, null) // [null, null, null, null]</span></span>
<span class="line"><span style="color:#A6ACCD;">                let b = {b1: 11, b2: 22}</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(b) // {}</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(b, undefined) // {b1: undefined, b2: undefined}</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(b, null) // {b1: null, b2: null}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),c=[t];function p(r,o,i,d,u,_){return n(),s("div",null,c)}const C=a(l,[["render",p]]);export{m as __pageData,C as default};