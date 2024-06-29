---
title: Windows Server 上配置 SSH 服务
---

## 前言

说起来我也想不到有天我需要在 windows 上配置 ssh 服务。
有此需求一是我从学校信息办老师那里拿了台服务器来玩，但是服务器系统是 Windows Server 2022；
二则是某个课程用到了 Win10 虚拟机，因为懒得一个个装软件了，所以使用 VS Code 的远程开发。

## 配置 SSH

前面按照搜索引擎结果即可配置完成，但我遇到了一个坑：Windows 的权限问题。

在配置完成后，我依然无法使用秘钥对认证，查看调试信息提示没有进入 `authorized_keys` 的权限，但不管我如何按照教程修改 `.ssh/authorized_keys` 文件夹的权限，依然无法使用。

在我千方百计的查找后，我找到了这篇文章：[Windows支持 OpenSSH 了！](https://blog.51cto.com/u_12302929/3394257)

把 `authorized_keys` 文件夹删了，使用如下命令在 `.ssh` 目录下创建 `authorized_keys.txt` 文件，把公钥粘贴过去。

```shell
notepad authorized_keys
```

然后重命名为 `authorized_keys`

```shell
mv .\authorized_keys.txt .\authorized_keys
```

再次尝试可以连接了。