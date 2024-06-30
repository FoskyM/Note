import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,e as a}from"./app-CLQogQBr.js";const t={},l=a(`<h2 id="修改默认分支" tabindex="-1"><a class="header-anchor" href="#修改默认分支"><span>修改默认分支</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init.defaultBranch</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="修改提交邮箱" tabindex="-1"><a class="header-anchor" href="#修改提交邮箱"><span>修改提交邮箱</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&lt;EMAIL&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="批量修改历史提交记录中的邮箱" tabindex="-1"><a class="header-anchor" href="#批量修改历史提交记录中的邮箱"><span>批量修改历史提交记录中的邮箱</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> filter-branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --env-filter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  OLD_EMAIL=&quot;旧邮箱&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  CORRECT_NAME=&quot;用户名&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  CORRECT_EMAIL=&quot;新邮箱&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  fi</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  fi</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --tag-name-filter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --branches</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --tags</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后 <code>git push -f</code> 强制推送</p><h2 id="提交加签" tabindex="-1"><a class="header-anchor" href="#提交加签"><span>提交加签</span></a></h2><h3 id="gpg-操作" tabindex="-1"><a class="header-anchor" href="#gpg-操作"><span>GPG 操作</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --gen-key</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 生成秘钥对</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --list-key</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 列出公钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --list-secret-keys</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 列出私钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --export</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 导出公钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --export-secret-keys</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 导出私钥</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置提交公钥" tabindex="-1"><a class="header-anchor" href="#设置提交公钥"><span>设置提交公钥</span></a></h3><p>Github 设置中 <code>SSH and GPG keys</code> 点击 <code>New GPG Key</code>， 把刚刚导出的公钥输入进去即可。 这里可以直接看到 <code>Key ID</code></p><p>而后执行以下命令</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.signingkey</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&lt;Key ID&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> commit.gpgsign</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gpg.program</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;[git 安装目录]</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">usr</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">gpg.exe&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="为历史提交加签" tabindex="-1"><a class="header-anchor" href="#为历史提交加签"><span>为历史提交加签</span></a></h3><p>先拉取项目到本地 然后在项目目录运行 <code>git rebase -i --root</code></p><p>这时会跳出编辑器，把需要修改的 commit 记录前面的 <code>pick</code> 改为 <code>edit</code>，然后关闭文件。</p><p>而后继续在命令行中运行 <code>git commit --amend -S</code> 即可加签， <code>amend</code> 表示修正，<code>S</code> 表示签名。</p><p><code>git commit --amend</code> 还可以用来修改 commit 的提交者信息，例如</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --amend</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --author=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;FoskyM &lt;i@fosky.top&gt;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -S</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行命令后又会跳出编辑器，如果不需要修改 commit message 则直接关闭即可。</p><p>运行 <code>git rebase --continue</code> 继续修改，重复操作直到提示 <code>No rebase in progress</code></p><p>运行 <code>git push -f</code> 强制推送</p>`,25),n=[l];function h(d,k){return e(),s("div",null,n)}const g=i(t,[["render",h],["__file","git.html.vue"]]),o=JSON.parse('{"path":"/tools/develop/git.html","title":"Git 的使用","lang":"zh-CN","frontmatter":{"title":"Git 的使用","description":"修改默认分支 修改提交邮箱 批量修改历史提交记录中的邮箱 然后 git push -f 强制推送 提交加签 GPG 操作 设置提交公钥 Github 设置中 SSH and GPG keys 点击 New GPG Key， 把刚刚导出的公钥输入进去即可。 这里可以直接看到 Key ID 而后执行以下命令 为历史提交加签 先拉取项目到本地 然后在项目目录...","head":[["meta",{"property":"og:url","content":"https://note.fosky.top/tools/develop/git.html"}],["meta",{"property":"og:site_name","content":"傅四霁的笔记"}],["meta",{"property":"og:title","content":"Git 的使用"}],["meta",{"property":"og:description","content":"修改默认分支 修改提交邮箱 批量修改历史提交记录中的邮箱 然后 git push -f 强制推送 提交加签 GPG 操作 设置提交公钥 Github 设置中 SSH and GPG keys 点击 New GPG Key， 把刚刚导出的公钥输入进去即可。 这里可以直接看到 Key ID 而后执行以下命令 为历史提交加签 先拉取项目到本地 然后在项目目录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-29T12:21:51.000Z"}],["meta",{"property":"article:author","content":"FoskyM"}],["meta",{"property":"article:modified_time","content":"2024-06-29T12:21:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-29T12:21:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"FoskyM\\",\\"url\\":\\"https://fosky.top\\"}]}"]]},"headers":[{"level":2,"title":"修改默认分支","slug":"修改默认分支","link":"#修改默认分支","children":[]},{"level":2,"title":"修改提交邮箱","slug":"修改提交邮箱","link":"#修改提交邮箱","children":[]},{"level":2,"title":"批量修改历史提交记录中的邮箱","slug":"批量修改历史提交记录中的邮箱","link":"#批量修改历史提交记录中的邮箱","children":[]},{"level":2,"title":"提交加签","slug":"提交加签","link":"#提交加签","children":[{"level":3,"title":"GPG 操作","slug":"gpg-操作","link":"#gpg-操作","children":[]},{"level":3,"title":"设置提交公钥","slug":"设置提交公钥","link":"#设置提交公钥","children":[]},{"level":3,"title":"为历史提交加签","slug":"为历史提交加签","link":"#为历史提交加签","children":[]}]}],"git":{"createdTime":1719663711000,"updatedTime":1719663711000,"contributors":[{"name":"FoskyM","email":"i@fosky.top","commits":1}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"tools/develop/git.md","localizedDate":"2024年6月29日","autoDesc":true}');export{g as comp,o as data};