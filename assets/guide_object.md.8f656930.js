import{_ as s,c as n,o as a,a as l}from"./app.a4e9123f.js";const y=JSON.parse('{"title":"\u5BF9\u8C61\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"clear()","slug":"clear"},{"level":2,"title":"clone()","slug":"clone"},{"level":2,"title":"clone()","slug":"clone-1"}],"relativePath":"guide/object.md","lastUpdated":1664480634000}'),e={name:"guide/object.md"},p=l(`<h1 id="\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1">\u5BF9\u8C61\u65B9\u6CD5 <a class="header-anchor" href="#\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="clear" tabindex="-1">clear() <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h2><p>clear (obj[, defs, assigns]) \u6E05\u7A7A\u5BF9\u8C61; defs\u5982\u679C\u4E0D\u4F20\uFF08\u6E05\u7A7A\u6240\u6709\u5C5E\u6027\uFF09\u3001\u5982\u679C\u4F20\u5BF9\u8C61\uFF08\u6E05\u7A7A\u5E76\u7EE7\u627F)\u3001\u5982\u679C\u4F20\u503C(\u7ED9\u6240\u6709\u8D4B\u503C)</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                let a = [11, 22, 33, 33]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(a) // []</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(a, undefined) // [undefined, undefined, undefined, undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(a, null) // [null, null, null, null]</span></span>
<span class="line"><span style="color:#A6ACCD;">                let b = {b1: 11, b2: 22}</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(b) // {}</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(b, undefined) // {b1: undefined, b2: undefined}</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.clear(b, null) // {b1: null, b2: null}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="clone" tabindex="-1">clone() <a class="header-anchor" href="#clone" aria-hidden="true">#</a></h2><p>clone (obj, deep) \u6D45\u62F7\u8D1D/\u6DF1\u62F7\u8D1D\uFF0C\u548C assign \u7684\u533A\u522B\u662F\u652F\u6301\u5BF9\u8C61\u7684\u9012\u5F52\u514B\u9686</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                 const v1 = {a: 11, b: {b1: 22}}</span></span>
<span class="line"><span style="color:#A6ACCD;">                 const v2 = mmqUtils.clone(v1, false)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 const v3 = mmqUtils.clone(v1, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 expect(v2).toEqual({a: 11, b: {b1: 22}})</span></span>
<span class="line"><span style="color:#A6ACCD;">                 expect(v1.a === v2.a).toEqual(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 expect(v1 === v3).toEqual(false)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 const a = {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 name: &#39;ddds&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 age: 23,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 hobbies: { sports: &#39;\u7BEE\u7403&#39;, tv: &#39;\u96CD\u6B63\u738B\u671D&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                 works: [&#39;2020&#39;, &#39;2021&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                 map: new Map([[&#39;haha&#39;, 111], [&#39;xixi&#39;, 222]]),</span></span>
<span class="line"><span style="color:#A6ACCD;">                 set: new Set([1, 2, 3]),</span></span>
<span class="line"><span style="color:#A6ACCD;">                 func: (name: any, age: any) =&gt; \`\${name}\u4ECA\u5E74\${age}\u5C81\u5566\uFF01\uFF01\uFF01\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 sym: Symbol(123),</span></span>
<span class="line"><span style="color:#A6ACCD;">                 reg: new RegExp(/haha/g),</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">                 const b = mmqUtils.clone(a, true)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 expect(a.func === b.func).toEqual(false)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="clone-1" tabindex="-1">clone() <a class="header-anchor" href="#clone-1" aria-hidden="true">#</a></h2><p>objectEach (obj, iterate [, context]) \u5BF9\u8C61\u8FED\u4EE3\u5668</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                 const rest: any[] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">                 mmqUtils.objectEach({ a: 11, b: 22, c: 33, d: 44 }, (item: any, key: number, obj: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 rest.push([item, key])</span></span>
<span class="line"><span style="color:#A6ACCD;">                 })</span></span>
<span class="line"><span style="color:#A6ACCD;">                 expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">                 rest</span></span>
<span class="line"><span style="color:#A6ACCD;">                 ).toEqual([[11, &#39;a&#39;], [22, &#39;b&#39;], [33, &#39;c&#39;], [44, &#39;d&#39;]])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),c=[p];function o(t,r,i,A,C,d){return a(),n("div",null,c)}const b=s(e,[["render",o]]);export{y as __pageData,b as default};
