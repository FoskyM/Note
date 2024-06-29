---
title: Git 的使用
---
## 修改默认分支
```shell
git config --global init.defaultBranch main
```

## 修改提交邮箱
```shell
git config --global user.email "<EMAIL>"
```

## 批量修改历史提交记录中的邮箱
```shell
git filter-branch -f --env-filter '
  OLD_EMAIL="旧邮箱"
  CORRECT_NAME="用户名"
  CORRECT_EMAIL="新邮箱"
  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
' --tag-name-filter cat -- --branches --tags
```
然后 `git push -f` 强制推送

## 提交加签
### GPG 操作
```shell
gpg --gen-key # 生成秘钥对
gpg --list-key # 列出公钥
gpg --list-secret-keys # 列出私钥
gpg -a --export # 导出公钥
gpg -a --export-secret-keys # 导出私钥
```

### 设置提交公钥

Github 设置中 `SSH and GPG keys` 点击 `New GPG Key`，
把刚刚导出的公钥输入进去即可。
这里可以直接看到 `Key ID`

而后执行以下命令

```shell
git config --global user.signingkey "<Key ID>"
```

```shell
git config --global commit.gpgsign true
```

```shell
git config --global gpg.program "[git 安装目录]\\usr\\bin\\gpg.exe"
```

### 为历史提交加签
先拉取项目到本地
然后在项目目录运行 `git rebase -i --root`

这时会跳出编辑器，把需要修改的 commit 记录前面的 `pick` 改为 `edit`，然后关闭文件。

而后继续在命令行中运行 `git commit --amend -S` 即可加签，
`amend` 表示修正，`S` 表示签名。

`git commit --amend` 还可以用来修改 commit 的提交者信息，例如
```shell
git commit --amend --author="FoskyM <i@fosky.top>" -S 
```

执行命令后又会跳出编辑器，如果不需要修改 commit message 则直接关闭即可。

运行 `git rebase --continue` 继续修改，重复操作直到提示 `No rebase in progress`

运行 `git push -f` 强制推送