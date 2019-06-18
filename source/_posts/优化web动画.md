---
title: 优化web动画
copyright: true
tags:
  - - html
  - - html5
  - - 动画
categories:
  - - html
    - html5
date: 2019-06-18 11:41:16
---

# 前言

##### &emsp;一般我们设置动画的方式有两种，一次性计时器或者循环计时器。但是计时器制作动画存在问题：

{% blockquote %}
1、当前窗口不在动画页面时，计时器仍将继续工作。
2、回调函数执行耗时，到时排队。
3、设置动画频率高，到时过度绘制，出现掉帧。
注意:浏览器屏幕刷新频率 1000/60 = 16.7ms
{% endblockquote %}

# 简介

{% blockquote %}
html5 为我们引进了一个新的动画 api requestAnimationFrame,它的优势：
1、当前窗口不在动画页面时，停止工作。
2、浏览器刷新屏幕时自动执行，无需设置时间间隔。
3、浏览器优化。
{% endblockquote %}

## 一、使用

<center><font color='#3333' size='3'>requestAnimationFrame的使用方法</font></center>
{% codeblock  %}
1、re = requestAnimationFrame(cb); <!-- 屏幕每次绘制时执行回调函数cb -->
2、cancelAnimationFrame(re)  <!-- 结束动画 -->
{% endcodeblock %}

## 二、Demo

{% codeblock  %}
var div = document.getElementsByTagName('div')[0];
var btn = document.getElementsByClassName('stop')[0];
var c = 0;
var re;

    function move() {
        c += 10;
        if (c < 1000) {
            div.style.left = c + 'px';
            re = requestAnimationFrame(move)
        } else {
            div.style.left = 1000 + 'px';
        }
    }
    btn.onclick = function () {
        //停止
        cancelAnimationFrame(re)
    }
    move();

{% endcodeblock %}

<center><font color='#3333' size='3'>兼容性问题</font></center>
{% codeblock  %}
<!-- 因为早期的浏览器不支持requestAnimationFrame     所以我们可以用js兼容写法 -->
window.requestAnimationFrame = (function (callback) {
        return window.requestAnimationFrame ||
            window.WebKitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function () {
                window.setTimeout(callback, 1000 / 60)
            }

    })();

<!-- 取消动画 -->

window.cancelAnimationFrame = (function (timer) {
return window.cancelAnimationFrame ||
window.WebKitCancelAnimationFrame ||
window.mozCancelAnimationFrame ||
window.oCancelAnimationFrame ||
window.msCancelAnimationFrame ||
function () {
window.clearTimeout(timer, 1000 / 60)
}

    })();

{% endcodeblock %}
