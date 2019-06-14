---
title: Git
copyright: true
date: 2019-06-14 11:49:05
tags:
  - 项目管理工具
---

# 前言

##### &emsp;我所熟知的项目管理工具一个是 git 一个是 svn，目前公司用的 svn，但是相对于来说，我更倾向于 git，所以这篇文章主要总结了 git 的一些用法，方便以后自己查询。

# 一、简介

##### &emsp; 进入正题。

# 二、安装

##### &emsp; 下面有官网下载链接地址，进去后选择相应的操作系统下载即可。安装的时候一路选择 next 就行。注意 尽量选择默认文件夹安装，否则的话可能还需要更改环境变量。

{% blockquote Git官网 https://git-scm.com/downloads 下载地址 %}
{% endblockquote %}

# 三、使用

<center><font color='#007ACC' size='5'>常用命令</font></center>

#### 1.创建版本库

<left><font color='#00BFFF' size='3'>克隆远程仓库</font></left>
{% codeblock  %}
git clone 远程地址
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>初始化本地版本库</font></left>
{% codeblock  %}
git init
{% endcodeblock %}

#### 2.修改和提交

<left><font color='#00BFFF' size='3'>查看状态</font></left>
{% codeblock  %}
git status
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>查看变更内容</font></left>
{% codeblock  %}
git diff
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>跟踪所有变更过的文件</font></left>
{% codeblock  %}
git add .
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>跟踪指定的文件</font></left>
{% codeblock  %}
git add file
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>文件改名</font></left>
{% codeblock  %}
git mv <old> <new>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>删除文件</font></left>
{% codeblock  %}
git rm <file>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>停止跟踪文件但不删除</font></left>
{% codeblock  %}
git rm --cached <file>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>提交所有更新过的文件</font></left>
{% codeblock  %}
git commit -m 'message'
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>修改最后一次提交</font></left>
{% codeblock  %}
git commit --amend
{% endcodeblock %}

#### 3.查看提交历史

<left><font color='#00BFFF' size='3'>查看状态</font></left>
{% codeblock  %}
git log
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>查看指定文件的提交历史</font></left>
{% codeblock  %}
git log -p <file>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>以列表方式查看指定文件的提交历史</font></left>
{% codeblock  %}
git blame <file>
{% endcodeblock %}

#### 4.撤销

<left><font color='#00BFFF' size='3'>撤销工作目录中所有未提交文件的修改内容</font></left>
{% codeblock  %}
git reset --hard HEAD
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>撤销指定的未提交文件的修改内容</font></left>
{% codeblock  %}
git checkout HEAD <file>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>撤销指定的提交</font></left>
{% codeblock  %}
git revert <commit>
{% endcodeblock %}

#### 5.分支与标签

<left><font color='#00BFFF' size='3'>显示所有本地分支</font></left>
{% codeblock  %}
git branch
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>切换到指定分支或标签</font></left>
{% codeblock  %}
git checkout <branch/>tag>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>创建新分支</font></left>
{% codeblock  %}
git branch <new-branch>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>删除本地分支</font></left>
{% codeblock  %}
git branch -d <branch>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>列出所有本地标签</font></left>
{% codeblock  %}
git tag
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>基于最新提交创建标签</font></left>
{% codeblock  %}
git tag <tagname>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>删除标签</font></left>
{% codeblock  %}
git tag -d <tagname>
{% endcodeblock %}

#### 6.合并与衍合

<left><font color='#00BFFF' size='3'>合并指定分支到当前分支</font></left>
{% codeblock  %}
git merge <branch>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>衍合指定分支到当前分支</font></left>
{% codeblock  %}
git rebase <branch>
{% endcodeblock %}

#### 7.远程操作

<left><font color='#00BFFF' size='3'>查看远程版本库信息</font></left>
{% codeblock  %}
git remote -v
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>查看指定远程版本库信息</font></left>
{% codeblock  %}
git remote show <remote>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>添加远程版本库</font></left>
{% codeblock  %}
git remote add <remote> <url>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>从远程库获取代码</font></left>
{% codeblock  %}
git fetch <remote>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>下载代码及快速合并</font></left>
{% codeblock  %}
git pull <remote> <branch>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>下载代码及快速合并</font></left>
{% codeblock  %}
git pull <remote> <branch>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>上传代码及快速合并</font></left>
{% codeblock  %}
git push <remote> <branch>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>删除远程分支或标签</font></left>
{% codeblock  %}
git push <remote> :<branch/tag-name>>
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>上传所有标签</font></left>
{% codeblock  %}
git push --tags
{% endcodeblock %}
