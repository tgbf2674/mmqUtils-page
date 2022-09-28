import{_ as s,c as a,o as n,a as l}from"./app.a4e9123f.js";const D=JSON.parse('{"title":"\u6570\u7EC4\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"arrayEach()","slug":"arrayeach"},{"level":2,"title":"lastArrayEach()","slug":"lastarrayeach"},{"level":2,"title":"arrayIndexOf()","slug":"arrayindexof"},{"level":2,"title":"lastIndexOf()","slug":"lastindexof"},{"level":2,"title":"includeArrays()","slug":"includearrays"},{"level":2,"title":"remove()","slug":"remove"},{"level":2,"title":"shuffle()","slug":"shuffle"},{"level":2,"title":"sample()","slug":"sample"},{"level":2,"title":"iterate()","slug":"iterate"},{"level":2,"title":"toArray()","slug":"toarray"},{"level":2,"title":"uniq()","slug":"uniq"},{"level":2,"title":"flat()","slug":"flat"},{"level":2,"title":"toArrayTree()","slug":"toarraytree"},{"level":2,"title":"toTreeArray()","slug":"totreearray"},{"level":2,"title":"eachTree()","slug":"eachtree"},{"level":2,"title":"filterTree()","slug":"filtertree"},{"level":2,"title":"searchTree()","slug":"searchtree"},{"level":2,"title":"mapTree()","slug":"maptree"}],"relativePath":"guide/array.md","lastUpdated":1664385326000}'),p={name:"guide/array.md"},e=l(`<h1 id="\u6570\u7EC4\u65B9\u6CD5" tabindex="-1">\u6570\u7EC4\u65B9\u6CD5 <a class="header-anchor" href="#\u6570\u7EC4\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="arrayeach" tabindex="-1">arrayEach() <a class="header-anchor" href="#arrayeach" aria-hidden="true">#</a></h2><p>arrayEach (obj, iterate [, context]) \u6570\u7EC4\u8FED\u4EE3\u5668</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.arrayEach([11, 22, 33], (item, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  // \u6570\u7EC4\u8FED\u4EE3\u5668\uFF0C\u53EA\u80FD\u7528\u4E8E\u904D\u5386(\u6570\u7EC4\u6216\u4F2A\u6570\u7EC4)\uFF0C\u6027\u80FD\u9AD8\u4E8E each</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="lastarrayeach" tabindex="-1">lastArrayEach() <a class="header-anchor" href="#lastarrayeach" aria-hidden="true">#</a></h2><p>lastArrayEach (obj, iterate [, context]) \u6570\u7EC4\u8FED\u4EE3\u5668\uFF0C\u4ECE\u6700\u540E\u5F00\u59CB\u8FED\u4EE3</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.lastArrayEach([11, 22, 33], (item, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  // \u6570\u7EC4\u8FED\u4EE3\u5668\uFF0C\u53EA\u80FD\u7528\u4E8E\u904D\u5386(\u6570\u7EC4\u6216\u4F2A\u6570\u7EC4)\uFF0C\u6027\u80FD\u9AD8\u4E8E lastEach</span></span>
<span class="line"><span style="color:#A6ACCD;">                })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="arrayindexof" tabindex="-1">arrayIndexOf() <a class="header-anchor" href="#arrayindexof" aria-hidden="true">#</a></h2><p>arrayIndexOf (obj, val) \u8FD4\u56DE\u6570\u7EC4\u7B2C\u4E00\u4E2A\u7D22\u5F15\u503C\uFF0C\u6BD4 indexOf \u5FEB</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.arrayIndexOf([11, 22, 33, 22], 55) // -1</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.arrayIndexOf([11, 22, 33, 22], 22) // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="lastindexof" tabindex="-1">lastIndexOf() <a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a></h2><p>lastIndexOf (obj, val) \u4ECE\u6700\u540E\u5F00\u59CB\u7684\u7D22\u5F15\u503C,\u8FD4\u56DE\u5BF9\u8C61\u7B2C\u4E00\u4E2A\u7D22\u5F15\u503C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.lastIndexOf([11, 22, 33, 22], 55) // -1</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.lastIndexOf([11, 22, 33, 22], 22) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="includearrays" tabindex="-1">includeArrays() <a class="header-anchor" href="#includearrays" aria-hidden="true">#</a></h2><p>includeArrays (array1, array2) \u5224\u65AD\u6570\u7EC4\u662F\u5426\u5305\u542B\u53E6\u4E00\u6570\u7EC4</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.includeArrays([11, 22, 33], []) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.includeArrays([11, 22, 33], [11]) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.includeArrays([11, 22, 33], [22, 33]) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.includeArrays([11, 22, 33], [22, 44]) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="remove" tabindex="-1">remove() <a class="header-anchor" href="#remove" aria-hidden="true">#</a></h2><p>remove (obj, iterate) \u79FB\u9664\u5BF9\u8C61\u5C5E\u6027</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                let list1 = [11, 22, 33, 44]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.remove(list1, 2) // list1 = [11, 22, 44]</span></span>
<span class="line"><span style="color:#A6ACCD;">                let list2 = [11, 22, 33, 44]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.remove(list2, item =&gt; item === 22) // list2 = [11, 33, 44]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="shuffle" tabindex="-1">shuffle() <a class="header-anchor" href="#shuffle" aria-hidden="true">#</a></h2><p>shuffle (array) \u5C06\u4E00\u4E2A\u6570\u7EC4\u968F\u673A\u6253\u4E71\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.shuffle([11, 22, 33, 44, 55]) // [22, 33, 55, 11, 44]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="sample" tabindex="-1">sample() <a class="header-anchor" href="#sample" aria-hidden="true">#</a></h2><p>sample (array, number) \u4ECE\u4E00\u4E2A\u6570\u7EC4\u4E2D\u968F\u673A\u8FD4\u56DE\u51E0\u4E2A\u5143\u7D20</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.sample([11, 22, 33, 44, 55], 3) // [22, 33, 55]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="iterate" tabindex="-1">iterate() <a class="header-anchor" href="#iterate" aria-hidden="true">#</a></h2><p>sum (obj, iterate) \u6C42\u548C\u51FD\u6570\uFF0C\u5C06\u6570\u503C\u76F8\u52A0</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.sum([22, 66, 88]) // 176</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.sum([{value: 11}, {value: 22}, {value: 66}], &#39;value&#39;) // 99</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.sum({val1: 21, val2: 34, val3: 47}) // 102</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="toarray" tabindex="-1">toArray() <a class="header-anchor" href="#toarray" aria-hidden="true">#</a></h2><p>toArray (array) \u5C06\u5BF9\u8C61\u6216\u8005\u4F2A\u6570\u7EC4\u8F6C\u4E3A\u65B0\u6570\u7EC4</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.toArray({name: &#39;test1&#39;, age: 25}) // [&#39;test1&#39;, 25]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toArray(arguments) // [...]</span></span>
<span class="line"><span style="color:#A6ACCD;">                mmqUtils.toArray(document.querySelectorAll(&#39;div&#39;)) // [...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="uniq" tabindex="-1">uniq() <a class="header-anchor" href="#uniq" aria-hidden="true">#</a></h2><p>uniq (array) \u6570\u7EC4\u53BB\u91CD</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.uniq([11, 22, 33, 33, 22, 55]) // [11, 22, 33, 55]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="flat" tabindex="-1">flat() <a class="header-anchor" href="#flat" aria-hidden="true">#</a></h2><p>flat (array) \u6570\u7EC4\u53BB\u91CD</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">                mmqUtils.flat([[1, 2, 3], [4, 5, 6], [7, 8]])  // [1, 2, 3, 4, 5, 6, 7, 8]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="toarraytree" tabindex="-1">toArrayTree() <a class="header-anchor" href="#toarraytree" aria-hidden="true">#</a></h2><p>toArrayTree (array, options) \u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\u6811\u7ED3\u6784\u8F6C\u6362\u51FD\u6570\uFF0C\u5C06\u4E00\u4E2A\u5E26\u5C42\u7EA7\u7684\u6570\u636E\u5217\u8868\u8F6C\u6210\u6811\u7ED3\u6784</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>strict</td><td>\u662F\u5426\u4E25\u683C\u6A21\u5F0F\uFF0C\u4F1A\u53BB\u6389\u7236\u5B50\u5173\u8054\u4E0D\u5B58\u5728\u6570\u636E\uFF0C\u5F53\u5B50\u8282\u70B9\u4E3A\u7A7A\u65F6\u5C06\u6CA1\u6709 children \u5C5E\u6027</td><td>false</td></tr><tr><td>key</td><td>\u8282\u70B9\u952E\u503C</td><td>id</td></tr><tr><td>parentKey</td><td>\u7236\u8282\u70B9\u952E\u503C</td><td>parentId</td></tr><tr><td>children</td><td>\u8282\u70B9\u5C5E\u6027</td><td>children</td></tr><tr><td>mapChildren</td><td>\u5B50\u8282\u70B9\u6620\u5C04\u5C5E\u6027</td><td></td></tr><tr><td>data</td><td>\u6570\u636E\u5B58\u653E\u5C5E\u6027</td><td>null</td></tr></tbody></table><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    const list1 = [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 1, name: &#39;111&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 2, parentId: 1, name: &#39;222&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 3, name: &#39;333&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 4, parentId: 2, name: &#39;444&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.toArrayTree(list1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;111&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            parentId: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;222&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">              {</span></span>
<span class="line"><span style="color:#A6ACCD;">                id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">                parentId: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;444&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;333&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list4 = [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 1, name: &#39;111&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 2, parentId: 1, name: &#39;222&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 3, name: &#39;333&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 4, parentId: 2, name: &#39;444&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 5, parentId: 22, name: &#39;555&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.toArrayTree(list4, { strict: true, parentKey: &#39;parentId&#39;, key: &#39;id&#39;, children: &#39;children&#39;, data: &#39;data&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: { id: 1, name: &#39;111&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            data: { id: 2, parentId: 1, name: &#39;222&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            parentId: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">              {</span></span>
<span class="line"><span style="color:#A6ACCD;">                data: { id: 4, parentId: 2, name: &#39;444&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">                parentId: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: { id: 3, name: &#39;333&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="totreearray" tabindex="-1">toTreeArray() <a class="header-anchor" href="#totreearray" aria-hidden="true">#</a></h2><p>toTreeArray (array, options) \u5C06\u4E00\u4E2A\u6811\u7ED3\u6784\u8F6C\u6210\u6570\u7EC4\u5217\u8868</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>children</td><td>\u8282\u70B9\u5C5E\u6027</td><td>children</td></tr><tr><td>data</td><td>\u6570\u636E\u5B58\u653E\u5C5E\u6027</td><td>null</td></tr><tr><td>clear</td><td>\u540C\u65F6\u79FB\u9664\u5B50\u8282\u70B9\u5C5E\u6027</td><td>false</td></tr></tbody></table><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">      const list1 = [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;111&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            parentId: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;222&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">              {</span></span>
<span class="line"><span style="color:#A6ACCD;">                id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">                parentId: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;444&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;333&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.toTreeArray(list1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([</span></span>
<span class="line"><span style="color:#A6ACCD;">      list1[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      list1[0].children[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      list1[0].children[0].children[0],</span></span>
<span class="line"><span style="color:#A6ACCD;">      list1[1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list2 = [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: { id: 1, name: &#39;111&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            data: { id: 2, parentId: 1, name: &#39;222&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            parentId: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">              {</span></span>
<span class="line"><span style="color:#A6ACCD;">                data: { id: 4, parentId: 2, name: &#39;444&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">                id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">                parentId: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: { id: 3, name: &#39;333&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        data: { id: 5, parentId: 22, name: &#39;555&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 5,</span></span>
<span class="line"><span style="color:#A6ACCD;">        parentId: 22,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.toTreeArray(list2, { data: &#39;data&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 1, name: &#39;111&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 2, parentId: 1, name: &#39;222&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 4, parentId: 2, name: &#39;444&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 3, name: &#39;333&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { id: 5, parentId: 22, name: &#39;555&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">    const list3 = [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;111&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            id: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">            parentId: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">            name: &#39;222&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">              {</span></span>
<span class="line"><span style="color:#A6ACCD;">                id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">                parentId: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;444&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;333&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        children: []</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.toTreeArray(list3, { clear: true })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;111&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">        parentId: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;222&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 4,</span></span>
<span class="line"><span style="color:#A6ACCD;">        parentId: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;444&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;333&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="eachtree" tabindex="-1">eachTree() <a class="header-anchor" href="#eachtree" aria-hidden="true">#</a></h2><p>eachTree (obj, iterate, [options]) \u4ECE\u6811\u7ED3\u6784\u4E2D\u904D\u5386\u6570\u636E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>children</td><td>\u8282\u70B9\u5C5E\u6027</td><td>children</td></tr></tbody></table><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    let rest: any[] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    mmqUtils.eachTree(null, (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      rest.push(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(rest).toEqual([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    rest = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    mmqUtils.eachTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      rest.push(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(rest).toEqual([{ a: 11 }, { a: 22 }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    rest = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    mmqUtils.eachTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      rest.push(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(rest).toEqual([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    rest = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    mmqUtils.eachTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      rest.push(item)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, { children: &#39;childs&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(rest).toEqual([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="filtertree" tabindex="-1">filterTree() <a class="header-anchor" href="#filtertree" aria-hidden="true">#</a></h2><p>filterTree (obj, iterate, [options]) \u4ECE\u6811\u7ED3\u6784\u4E2D\u6839\u636E\u56DE\u8C03\u8FC7\u6EE4\u6570\u636E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>children</td><td>\u8282\u70B9\u5C5E\u6027</td><td>children</td></tr></tbody></table><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.filterTree(null, (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a === 33</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.filterTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a === 33</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.filterTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a === 11</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 11 }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.filterTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a &gt;= 22</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.filterTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a &gt;= 22</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, { children: &#39;childs&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="searchtree" tabindex="-1">searchTree() <a class="header-anchor" href="#searchtree" aria-hidden="true">#</a></h2><p>searchTree (obj, iterate, [options]) \u4ECE\u6811\u7ED3\u6784\u4E2D\u6839\u636E\u56DE\u8C03\u67E5\u627E\u6570\u636E</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>children</td><td>\u8282\u70B9\u5C5E\u6027</td><td>children</td></tr><tr><td>mapChildren</td><td>\u5C06\u5B50\u8282\u70B9\u6620\u5C04\u5230\u6307\u5B9A\u7684\u5C5E\u6027</td><td></td></tr></tbody></table><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.searchTree(null, (item: any) =&gt; item.a === 33)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.searchTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; item.a === 33)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.searchTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; item.a === 11)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 11, children: [] }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], (item: any) =&gt; item.id &gt; 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], (item: any) =&gt; item.id &gt;= 2, { children: &#39;childs&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="maptree" tabindex="-1">mapTree() <a class="header-anchor" href="#maptree" aria-hidden="true">#</a></h2><p>mapTree (obj, iterate[, options]) \u4ECE\u6811\u7ED3\u6784\u4E2D\u6307\u5B9A\u65B9\u6CD5\u540E\u7684\u8FD4\u56DE\u503C\u7EC4\u6210\u7684\u65B0\u6570\u7EC4</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>children</td><td>\u8282\u70B9\u5C5E\u6027</td><td>children</td></tr><tr><td>mapChildren</td><td>\u5C06\u5B50\u8282\u70B9\u6620\u5C04\u5230\u6307\u5B9A\u7684\u5C5E\u6027</td><td></td></tr></tbody></table><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.mapTree(null, (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.mapTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return item.a * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([22, 44])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.mapTree([{ a: 11 }, { a: 22 }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { a: item.a * 2 }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 22 }, { a: 44 }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.mapTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { a: item.a * 2 }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 22 }, { a: 44, children: [{ a: 444 }, { a: 446 }] }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { a: item.a * 2 }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, { children: &#39;childs&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 22 }, { a: 44, childs: [{ a: 444 }, { a: 446 }] }])</span></span>
<span class="line"><span style="color:#A6ACCD;">    expect(</span></span>
<span class="line"><span style="color:#A6ACCD;">      mmqUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], (item: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return { a: item.a * 2 }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, { children: &#39;childs&#39;, mapChildren: &#39;childs2&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    ).toEqual([{ a: 22 }, { a: 44, childs2: [{ a: 444 }, { a: 446 }] }])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,61),t=[e];function c(r,o,i,A,C,d){return n(),a("div",null,t)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
