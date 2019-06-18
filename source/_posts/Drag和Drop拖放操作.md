---
title: Drag和Drop拖放操作
copyright: true
tags:
  - - html
  - - html5
  - - 功能元素
categories:
  - - html
    - html5
date: 2019-06-18 13:40:14
---

# 简介

##### &emsp;页面 dom 元素的拖放操作。

## 一、拖放 api 基础

{% codeblock  %}
dragstart 被拖放元素 被拖放元素开始被拖拽时触发
drag 被拖放元素 被拖放元素在拖拽的过程中触发
dragend 被拖放元素 被拖放元素拖拽完成时触发
dragenter 目标元素 拖放元素进入目标元素时触发
dragover 目标元素 拖放元素在目标元素身上时触发
dragleave 目标元素 拖放元素在目标元素身上离开时触发
drop 目标元素 被拖放元素在目标元素上同时鼠标放开时触发

<!-- 注意：需要阻止dragover的默认行为才会触发drop事件 -->

{% endcodeblock %}

## 二、DataTransfer 对象

{% codeblock  %}
1、getData() 向 DataTransfer 对象中存放数据
2、setData() 从 DataTransfer 对象中读取数据
{% endcodeblock %}

## 三、拖拽

{% blockquote %}
首先要给被拖拽元素添加
{% endblockquote %}

{% codeblock  %}

<li draggable="true">1</li>
{% endcodeblock %}

{% blockquote %}
这样被拖拽元素才有拖拽效果，然后才能给被拖拽元素添加拖拽事件。
{% endblockquote %}
