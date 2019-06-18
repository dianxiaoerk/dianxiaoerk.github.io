---
title: Canvas
copyright: true
tags:
  - html
  - html5
  - 功能元素
  - 动画
categories:
  - - html
    - html5
date: 2019-06-18 10:54:39
---

# 前言

{% blockquote %}
之前做的动画都是多个 dom 元素进行拼接,而 canvas 只需要一个画布就可以了;复杂的动画适合 canvas 来制作;如果用 dom 元素来做会使浏览器不停的重绘、渲染,多个元素和一个元素重复渲染,显然重绘,渲染一个元素的性能效果更好
{% endblockquote %}

{% blockquote %}
应用场景:<br> 1.游戏场景。<br> 2.大量数据图表。<br> 3.动画。
{% endblockquote %}

{% blockquote canvas https://codepen.io/ Demo网站 %}
{% endblockquote %}

## 简介

{% blockquote %}
Canvas 标记由 Apple 在 Safari 1.3 Web 浏览器中引入。
目前主流浏览器都支持,ie9 之前的不支持。
html5。
{% endblockquote %}

## 一、使用

<center><font color='#3333' size='3'>样式</font></center>
{% codeblock  %}
    <style>
        canvas {//这个样式只是canvas在页面上显示的大小  不代表画布本身的大小
            width: 400px;
            height: 400px;
            border: 1px solid gray;  
        }
    </style>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>获取及创建使用</font></left>
{% codeblock  %}
<body>
      <!-- 画布的宽高没有单位 -->
    <canvas width="1000" height="1000"></canvas>  
<!-- 表示canvas在页面的大小为400x400 但是他的画布大小为1000x1000  把400x400看成一个屏幕  画布大小就是它的分辨率  1000x1000 -->
</body>
<script>
    <!-- 这里获取的只是dom元素  只能操作dom属性不能操作canva的api -->
    var canvas = document.getElementsByTagName('canvas')[0]; 
    <!-- 这里获取的是当前的canvas的api对象  能使用当前的canvas的api    如果有多个  需要进行多个获取  才能操作相应canvas的api -->
    var ctx = canvas.getContext('2d');     
    <!-- 注意 Canvas获取绘画上下文的api是getContext('2d') -->
</script>
{% endcodeblock %}

## 二、绘制图形

<center><font color='#00BFFF' size='3'>公用样式api</font></center>
{% codeblock  %}
stroke()描边画
lineWidth = 20,设置线宽
strokeStyle = 'red'线的颜色
closePath()闭合路径
fill()填充画
fillStyle = 'red'; 填充颜色
{% endcodeblock %}

#### 1、直线

<left><font color='#00BFFF' size='3'>api</font></left>
{% codeblock  %}
moveTo(x,y):画笔挪到(x,y)点上
lineTo(x,y):画笔划线划到(x,y)点上
{% endcodeblock %}
<left><font color='#00BFFF' size='3'>demo</font></left>
{% codeblock  %}

<style>
canvas {
width: 400px;
height: 400px;
border: 1px solid gray;
}
</style>

<body>
    <canvas width="600" height="600"></canvas>
</body>
<script>
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    <!-- 注意 Canvas获取绘画上下文的api是getContext('2d') -->
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'gray'
    ctx.moveTo(200, 200); /* 把画笔挪动到200,200的坐标点上开始画 */
    ctx.lineTo(200, 400); /* 垂直向下画200的线也就是 x不变y向下移动200 */
    ctx.lineTo(400, 400);
    ctx.closePath(); /* 自动闭合 */
    ctx.stroke(); /* 描边画 */
    ctx.fill() /* 填充颜色 */
<!-- 注意  如果一个画布画多个图形   描边的颜色和填充的颜色会覆盖   所以在绘制一个新的图形的时候要用beginPath（）开辟一个新的路径 -->
</script>
{% endcodeblock %}

#### 2、矩形

<left><font color='#00BFFF' size='3'>api</font></left>
{% codeblock  %}
rect(x,y,w,h);x,y 坐标 w,h 宽高
strokeRect(x,y,w,h);
fillRect(x,y,w,h);
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>demo</font></left>
{% codeblock  %}

 <style>
        canvas {
            width: 400px;
            height: 400px;
            border: 1px solid gray;
        }
    </style>

<body>
    <canvas width="600" height="600"></canvas>
</body>
<script>
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    <!-- 注意 Canvas获取绘画上下文的api是getContext('2d') -->
    ctx.rect(200, 200, 100, 100); /* 在左边200,200的点上画一个宽高100的正方形 */
    ctx.stroke()
    /* 可简写 */
    ctx.strokeRect(200, 200, 100, 100);/* 相当于自动开辟了有一个新路径  颜色样式不会覆盖 */
</script>
{% endcodeblock %}

#### 3、圆形

<left><font color='#00BFFF' size='3'>api</font></left>
{% codeblock  %}
Arc(x,y,r,sAngle,eAngle,c)
{% endcodeblock %}

<left><font color='#00BFFF' size='3'>demo</font></left>
{% codeblock  %}

 <style>
        canvas {
            width: 400px;
            height: 400px;
            border: 1px solid gray;
        }
    </style>

<body>
    <canvas width="600" height="600"></canvas>
</body>
<script>
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    <!-- 注意 Canvas获取绘画上下文的api是getContext('2d') -->
     ctx.arc(200, 200, 100, 0, Math.PI,false); /* 在200，200的坐标点上画一个半径为100的半圆  0为起始弧度 Math.PI*2 为中止弧度 代表画一个整圆 默认false代表顺时针 true为逆时针 */
    ctx.stroke()
</script>
{% endcodeblock %}

#### 4、曲线

<left><font color='#00BFFF' size='3'>api</font></left>
{% codeblock  %}
arcTo(x1,y1,x2,y2,r);
{% endcodeblock %}

未完待续...
