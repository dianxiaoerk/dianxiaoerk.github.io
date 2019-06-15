---
title: Yarn
copyright: true
date: 2019-06-14 09:55:07
tags:
  - 包管理工具
---

# 前言

##### &emsp; 使用过 npm cnpm 之后在公司同事的推荐下接触了 yarn ，之后就一直在使用 yarn。本文主要归纳一下 yarn 的使用方法，方便以后自己忘记了再次查看。

# 一、简介

{% blockquote 更多详情 https://yarn.bootcss.com/ 中文官网 %}
{% endblockquote %}

{% blockquote %}
特点：
1、Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
2、在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
3、使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。
{% endblockquote %}

# 二、安装

##### &emsp; yarn 的安装方法有很多，在这里只说一下通过 npm 安装的方法。(本人是 win10 系统，如果是 mac 系统的请查看官网)

{% blockquote 中文官网 https://yarn.bootcss.com/docs/install/#windows-stable 安装方法 %}
{% endblockquote %}

##### 1. 安装指令

{% codeblock  %}
npm install yarn -g
{% endcodeblock %}

##### 2. 换源

<center><font color='#3333' size='3'>查看当前使用的源</font></center>
{% codeblock  %}
yarn config get registry
{% endcodeblock %}
<center><font color='#3333' size='3'>切换成淘宝源</font></center>
{% codeblock  %}
yarn config set registry https://registry.npm.taobao.org
{% endcodeblock %}
<center><font color='#3333' size='3'>切换为自带的源</font></center>
{% codeblock  %}
yarn config set registry https://registry.yarnpkg.com
{% endcodeblock %}

# 三、使用

<left><font color='#007ACC' size='3'>初始化项目</font></left>
{% codeblock  %}
yarn init
{% endcodeblock %}
<left><font color='#007ACC' size='3'>全局添加依赖</font></left>
{% codeblock  %}
yarn global add 插件名称
{% endcodeblock %}

<left><font color='#007ACC' size='3'>局部添加依赖</font></left>

<center><font color='gray' size='2'>生产环境的依赖（dependencies）</font></center>
{% codeblock  %}
yarn add 插件名称
{% endcodeblock %}
<center><font color='gray' size='2'>开发环境的依赖（devDependencies）</font></center>
{% codeblock  %}
yarn add 插件名称 --dev
{% endcodeblock %}

<left><font color='#007ACC' size='3'>全局移除依赖</font></left>
{% codeblock  %}
yarn global remove 插件名
{% endcodeblock %}

<left><font color='#007ACC' size='3'>局部移除依赖</font></left>
{% codeblock  %}
yarn remove 插件名
{% endcodeblock %}

<left><font color='#007ACC' size='3'>安装项目的全部依赖</font></left>
{% codeblock  %}
yarn
{% endcodeblock %}

<left><font color='red' size='2'>或者</font></left>
{% codeblock  %}
yarn install
{% endcodeblock %}
