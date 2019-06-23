---
title: css3
copyright: true
tags:
  - - css
  - - css3
categories:
  - - css
    - css3
date: 2019-06-23 16:08:42
---

# 简介

##### &emsp;总结关于一些 css3 的使用方式。

## 一、样式介绍

<center><font color='#3333' size='3'>样式区别</font></center>
<left><font color='#007ACC' size='3'>内部样式表  写在style当中</font></left>

{% codeblock  %}

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            background: #f2f2f2;
        }
    </style>
</head>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>外部样式表 外部引入 link</font></left>
{% codeblock  %}

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="">
</head>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>行内样式  写在容器上面  权重最高</font></left>
{% codeblock  %}
<body style="background:#f2f2f2">

</body>
{% endcodeblock %}
<center><font color='#3333' size='3'>权重</font></center>
{% blockquote %}
无限大    ！import
1000        行间
100        id
10           class选择器||属性选择器||伪类选择器 .class  :hover
1            标签选择器 <div>
0             通配符选择器 *
{% endblockquote %}
<center><font color='#3333' size='3'>文档流</font></center>
{% blockquote %}
什么是文档流
元素默认排序  从上到下  从左到右
什么是脱离文档流
float position 原有的位置空出  被下一个元素占据
{% endblockquote %}
<center><font color='#3333' size='3'>css属性前缀</font></center>
{% blockquote %}
-moz          火狐等使用Mozilla浏览器引擎的浏览器
-webkit-         Safari,谷歌浏览器等使用Webkit引擎的浏览器
-o                  Opera浏览器（早期)
-ms-              Internet  Explorer
{% endblockquote %}

## 二、盒模型

{% blockquote %}
标准盒模型 content-box
怪异盒模型 border-box
{% endblockquote %}

<center><font color='#3333' size='3'>标准盒模型</font></center>
<left><font color='#007ACC' size='3'>box-size:content-box</font></left>
{% blockquote %}
盒子最后的width = border+padding +content(设置的width)
{% endblockquote %}
{% codeblock  %}
div {
width: 100px;
height: 50px;
margin: 5px;
padding: 5px;
border: 1px solid gray;
 }
{% endcodeblock %}

{% asset_img 1.png%}

<center><font color='#3333' size='3'>怪异盒模型</font></center>
<left><font color='#007ACC' size='3'>box-size:border-box</font></left>
{% blockquote %}
盒子最后的width = 设置的width
{% endblockquote %}

{% codeblock  %}
div {
width: 100px;
height: 50px;
margin: 5px;
padding: 5px;
border: 1px solid gray;
box-sizing: border-box;
}
{% endcodeblock %}

{% asset_img 2.png%}

<center><font color='#3333' size='3'>可控大小</font></center>
<left><font color='#007ACC' size='3'>resize:nont | horizontal | vertical |both;</font></left>
{% blockquote %}
结合属性overflow:auto;
{% endblockquote %}

{% codeblock  %}
.box {
width: 100px;
height: 50px;
background: url(./image/11.jpg);
resize: both;
overflow: auto;
}
{% endcodeblock %}

{% asset_img 3.jpg%}

<center><font color='#3333' size='3'>定义轮廓</font></center>
<left><font color='#007ACC' size='3'>outline:outline-width outline-style outline-color;</font></left>
{% blockquote %}
input框被选中的时候边框会出现蓝色的边线
{% endblockquote %}
{% asset_img 4.png%}
{% blockquote %}
我们可以通过outline进行设置
比如我不想让他出现
{% endblockquote %}
{% codeblock  %}
 input{
            outline: none;
        }
{% endcodeblock %}

{% asset_img 5.png%}
{% blockquote %}
如果想改变选中状态的样式
{% endblockquote %}
{% codeblock  %}
input{
outline: 2px solid #ff6700;
}
{% endcodeblock %}
{% asset_img 6.png%}

{% blockquote %}
结果我们发现无论选中不选中都会生效 我们可以拖过伪类选择器 focus 来设置
{% endblockquote %}
{% codeblock  %}
input:focus{
outline: 2px solid #ff6700;
}
{% endcodeblock %}
{% blockquote %}
未选中的状态
{% endblockquote %}

{% asset_img 7.png%}
{% blockquote %}
选中的状态
{% endblockquote %}

{% asset_img 8.png%}

## 三、常用选择器

<center><font color='#3333' size='3'>属性选择器</font></center>

{% blockquote %}
E[att] 属性 可以只写一个字母
E[att = ‘val’] 属性 att 的值为‘val’的元素
E[att~=‘val’] 属性 att 有多个值，val 为其中一个
E[att^='val'] 属性 att 的值以'val'开头的元素
E[att$='val'] 属性 att 的值以'val'结尾的元素  
{% endblockquote %}
{% codeblock  Demo%}

 <style>
      input[type="text"] {
        border: 1px solid red;
      }
      input[class="index"] {
        border: 1px solid orange;
      }
      input[class~="nn"] {
        border: 1px solid blue;
      }
      input[class^="xx"] {
        border: 1px solid gray;
      }
    </style>
 <body>
    <input type="text" value="0000" />
    <input class="index" type="text" value="1111" />
    <input class="cc nn" type="text" value="2222" />
    <input class="xx nn" type="text" value="3333" />
  </body>
{% endcodeblock %}

{% asset_img 9.png%}

<center><font color='#3333' size='3'>同级选择器</font></center>

<left><font color='#007ACC' size='3'>E+F 毗邻元素选择器，匹配所有紧随 E 元素之后的同级元素 F 紧挨着的第一个</font></left>

{% codeblock Demo %}

 <style>
      div + p {
        width: 200px;
        height: 50px;
        border: 1px solid gray;
      }
    </style>

    <div></div>
    <p>111</p>
    <p>222</p>
    <span></span>

{% endcodeblock %}

{% asset_img 10.png%}
<left><font color='#007ACC' size='3'>E~F 匹配任何在 E 元素之后的同级 F 元素，兄弟选择器 紧挨着后面的所有</font></left>

{% codeblock  Demo%}

 <style>
      div ~ p {
        width: 200px;
        height: 50px;
        border: 1px solid gray;
      }
    </style>
<div></div>
    <p>111</p>
    <p>222</p>
    <span></span>
 
{% endcodeblock %}

{% asset_img 11.png%}

#### 伪类选择器

<center><font color='#3333' size='3'>只能找到标签</font></center>
<left><font color='#007ACC' size='3'></font>:not(s)不含有s选择符的元素E</left>
<left><font color='#007ACC' size='3'></font></left>

{% codeblock  Demo%}

 <style>
      li:not(.t) {
        font-size: 20px;
        color: red;
      }
    </style>

     <ul>
      <li class="t">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

{% endcodeblock %}

{% asset_img 12.png%}

<left><font color='#007ACC' size='3'>:fist-child 匹配父元素的第一个子元素 注意相同的标签在不同的父级下会有同样的效果 所我们在前面要加上限制条件 哪个父级下的</font></left>

{% codeblock  Demo%}

 <style>
      li:first-child {
        color: red;
      }
    </style>
<li>0</li>
    <ul>
      <li class="t">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

{% endcodeblock %}

{% asset_img 13.png %}

<left><font color='#007ACC' size='3'>:last-child 匹配父元素的最后一个子元素</font></left>

<left><font color='#007ACC' size='3'>:nth-child(n)匹配父元素正数第几个子元素 里面也可以写表达式</font></left>

{% codeblock Demo %}

 <style>
      li:nth-child(2n + 1) {
        color: red;
      }
    </style>
  </head>
  <body>
    <li>0</li>
    <ul>
      <li class="t">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
{% endcodeblock %}

{% asset_img 14.png%}

<left><font color='#007ACC' size='3'>:nth-last-child(n)匹配父元素倒数第几个子元素</font></left>

<left><font color='#007ACC' size='3'>:first-of-type 匹配父元素同类型中的第一个</font></left>

{% codeblock  Demo%}

 <style>
       li:first-of-type {
        color: red;
      }
    </style>
  </head>
  <body>
    <li>0</li>
    <ul>
      <li class="t">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
{% endcodeblock %}
{% asset_img 15.png%}

<left><font color='#007ACC' size='3'>:last-of-type 匹配父元素同类型中的最后一个</font></left>

<left><font color='#007ACC' size='3'>:nth-of-type 匹配父元素同类型中的正数第几个</font></left>
<left><font color='#007ACC' size='3'>:nth-last-of-type 匹配父元素同类型中的倒数第几个</font></left>
<left><font color='#007ACC' size='3'>:empty(dom 树无内容) 标签内容为空 只找标签本身 不包含:before 和:after</font></left>

{% codeblock Demo %}

  <style>
      li:empty {
        width: 200px;
        height: 50px;
        background: red;
      }
    </style>

    <li>0</li>
    <ul>
      <li class="t">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li></li>
    </ul>

{% endcodeblock %}
{% asset_img 16.png%}
<left><font color='#007ACC' size='3'>:enabled 匹配表单中激活的元素</font></left>
<left><font color='#007ACC' size='3'>:disabled 匹配表单中禁用的元素</font></left>

{% codeblock Demo %}

  <style>
      input:enabled {
        background: orange;
        color: #f2f2f2;
      }
      input:disabled {
        background: gray;
        color: red;
      }
    </style>

    <form action="">
      <input disabled type="text" value="用户名" />
      <input type="text" value="请输入密码" />
    </form>

{% endcodeblock %}
{% asset_img 17.png%}

<left><font color='#007ACC' size='3'>:checked 匹配表单中被选中的 radio(单选按钮)或 checkbox(复选框)元素</font></left>

{% codeblock Demo %}

   <style>
      input:checked + span {
        border: 1px solid red;
      }
    </style>

    <form action="">
      <input type="radio" name="sex" />男 <input type="radio" name="sex" />女
      <input type="checkbox" name="sex" />
      <span>运动</span>
    </form>

{% endcodeblock %}

{% asset_img 18.png%}

<left><font color='#007ACC' size='3'>:target 切换样式 只有点击的样式生效 兄弟样式取消样式</font></left>
{% codeblock Demo %}

 <style>
      a {
        display: block;
        width: 50px;
        height: 50px;
        background: gray;
        color: black;
        font-size: 20px;
        line-height: 50px;
        text-decoration: none;
        text-align: center;
        border-radius: 10px;
        margin-top: 5px;
      }
      a:target {
        background: #ff6700;
        color: #f2f2f2;
      }
    </style>

    <a href="" id="1"></a>
    <a href="" id="2"></a>
    <a href="" id="3"></a>

{% endcodeblock %}

{% asset_img 19.png%}

<left><font color='#007ACC' size='3'>:selection 匹配用户当前选中的元素 鼠标按住选中的元素</font></left>
{% codeblock Demo %}

  <style>
      ::selection {
        color: #f2f2f2;
        background: #ff6700;
      }
    </style>

    werewwerwerewrwer

{% endcodeblock %}

{% asset_img 20.png%}

#### 伪元素选择器

<center><font color='#3333' size='3'>可以找到标签中的元素 ：before  content:'可以直接给元素添加内容'</font></center>

<left><font color='#007ACC' size='3'>:first-letter 设置对象内的第一个字符的样式</font></left>
{% codeblock Demo %}

   <style>
      p:first-letter {
        font-size: 20px;
        color: red;
      }
    </style>

    <p>123456789</p>

{% endcodeblock %}

{% asset_img 21.png%}

<left><font color='#007ACC' size='3'>:first-line 设置对象内的第一行的样式</font></left>
{% codeblock Demo %}

  <style>
      p:first-line {
        font-size: 20px;
        color: red;
      }
    </style>

    <p>123456789<br />123456789</p>

{% endcodeblock %}
{% asset_img 22.png%}

<left><font color='#007ACC' size='3'>:befor</font></left>
<left><font color='#007ACC' size='3'>:after</font></left>
{% codeblock Demo %}

 <style>
      p::before {
        content: "你好";
        font-size: 20px;
        color: red;
      }
      p::after {
        content: "再见";
        font-size: 20px;
        color: red;
      }
    </style>

    <p>123456789<br />123456789</p>

{% endcodeblock %}

{% asset_img 23.png%}

## 四、常用属性

#### 边框

<center><font color='#3333' size='3'>border-radius圆角</font></center>

{% blockquote %}
一个值/四个值/每个值拆分成两个方向值 可写百分比  
一个值代表复合属性 ： 同时设置四个角的值
{% endblockquote %}
{% codeblock Demo %}
.btn {
width: 50px;
height: 50px;
background: gray;
box-shadow: 5px 2px;
}
{% endcodeblock %}

{% blockquote %}
四个值：
border-radius: 左上角,右上角,右下角,左上角
{% endblockquote %}

{% codeblock Demo %}
//这是复合属性值 因为它包含了四个角 同时设置了四个角的值；

<style>
        .btn {
            width: 100px;
            height: 50px;
            background: gray;
            color: #f2f2f2;
            line-height: 50px;
            text-align: center;
            border-radius: 10px;
        }
     .circle {
            width: 50px;
            height: 50px;
            line-height: 50px;
            background: #ff6700;
            color: #f2f2f2;
            text-align: center;
            border-radius: 50%;
            margin-top: 20px;
        }
    </style>
<body>
    <div class="btn">点击</div>
</body>
{% endcodeblock %}

{% asset_img 24.png%}

{% blockquote %}
每个角是一个值得情况下(x，y 相同) 以它自身为基准 左边是 先画一个宽高为你指定值得矩形 然后从右上角到右下角画一个弧线 右边相反 先画一个宽高为你指定值得矩形 然后从左上角上角到右下角下角画一个弧线 后面同理
{% endblockquote %}
{% asset_img 25.jpg%}

{% blockquote %}
每个角是不同值得情况下(x，y 不同) 这个时候我们就要用到顶点
border-top-left-radius：10px 20px ;可以再拆分成两个值 前面的代表 x 后面代表 y
{% endblockquote %}
{% asset_img 26.png%}

{% codeblock Demo %}
border-top-left-radius: 10px 30px;
border-top-right-radius: 10px 40px;
border-bottom-left-radius: 10px 50px;
border-bottom-right-radius: 10px 60px;
//这样就形成了不规则图形
//还可以写成 不推荐
border-radius: 10px 10px 10px 10px/30px 40px 50px 60px // /前面代表水平方形 /后面代表垂直方向
{% endcodeblock %}

{% asset_img 27.png%}

#### 阴影

<center><font color='#3333' size='3'>阴影(阴影不会撑开容器本身 不占据容器的大小)</font></center>
<left><font color='#007ACC' size='3'>box-shadow盒子阴影</font></left>
{% blockquote %}
box-shadow:  x、y 、 [模糊半径]、[阴影拓展半径]、[阴影颜色]、[投影方式]
x代表自身向右多少(负值相反)）  y代表自身向下多少(负值相反)
{% endblockquote %}

{% codeblock Demo %}
.btn {
width: 50px;
height: 50px;
background: gray;
box-shadow: 5px 2px;
}

  <div class="btn"></div>
{% endcodeblock %}

{% asset_img 28.png%}

{% blockquote %}
加上模糊半径 (负值代表阴影消失)
{% endblockquote %}

{% codeblock Demo %}
.btn {
width: 50px;
height: 50px;
background: gray;
box-shadow: 5px 2px 2px;
}

  <div class="btn"></div>
{% endcodeblock %}

{% asset_img 29.png%}

{% blockquote %}
加上阴影拓展半径(负值代表所以阴影面积)
{% endblockquote %}

{% codeblock Demo %}
.btn {
width: 50px;
height: 50px;
background: gray;
box-shadow: 5px 2px 2px 5px;//投影方式是默认的向外投影 outset 不用写
}

  <div class="btn"></div>
{% endcodeblock %}

{% asset_img 30.png%}

{% blockquote %}
加上投影方式 inset 向内投影
{% endblockquote %}

{% codeblock Demo %}
.btn {
width: 50px;
height: 50px;
background: gray;
box-shadow: 5px 2px 2px 5px inset;
}

  <div class="btn"></div>
{% endcodeblock %}

{% blockquote %}
投影方式可以有多种 既可以向内，也可以向外 也可以向其他方向 中间用,隔开
outset 和 inset 投影的区别
outset 投影
{% endblockquote %}
{% asset_img 31.png%}
{% blockquote %}
inset 投影
{% endblockquote %}
{% asset_img 32.png%}

<left><font color='#007ACC' size='3'>text-shadow 文字阴影</font></left>
{% blockquote %}
text-shadow: x、y 、 [模糊半径]、[阴影颜色] 也可多方向投影 中间用,隔开

rgba(r,g,b,a)

rgba(r 红色，g 绿色，b 蓝色，a 透明度)
注意与 opacity 的区别
opacity 设置透明度会影响里面 子元素会继承父元素的透明度
{% endblockquote %}

{% codeblock Demo %}
.box {
width: 100px;
height: 100px;
background: red;
opacity: .5;
}

        .inner {
            width: 50px;
            height: 50px;
            background: blue;
        }

 <div class="box">
        <div class="inner"></div>
    </div>
{% endcodeblock %}

{% blockquote %}
发现给外部容器加 opacity 设置透明度会影响里面的元素一起透明
{% endblockquote %}

{% asset_img 33.png%}

{% blockquote %}
rgba 就不会影响 子元素不会继承父元素
{% endblockquote %}

{% codeblock Demo %}
.box {
width: 100px;
height: 100px;
background: rgba(255, 0, 0, .5);
}

        .inner {
            width: 50px;
            height: 50px;
            background: blue;
        }

 <div class="box">
        <div class="inner"></div>
    </div>
{% endcodeblock %}

{% asset_img 34.png%}
{% blockquote %}
可以发现只有大的容器透明了
{% endblockquote %}

#### 渐变

<center><font color='#3333' size='3'>线性渐变</font></center>
<left><font color='#007ACC' size='3'>background:linear-gradient(direction,color [percent],colo r[percent]);</font></left>
{% blockquote %}
direction:渐变方向  
    写方向：to bottom/to bottom right....
写角度：0deg/45deg
color:渐变颜色；  可以写多个   用,分割
percent:百分比   可以不写  代表平分
{% endblockquote %}

{% codeblock Demo %}
div {
width: 40px;
height: 40px;
background: linear-gradient(to top right, gray 40%, #ff6700, #ff22);
}

    <div> </div>

{% endcodeblock %}

{% asset_img 35.png%}

{% codeblock Demo %}
div {
width: 40px;
height: 40px;
background: linear-gradient(180deg, gray 40%, #ff6700, #ff22);
}

<div></div>  
{% endcodeblock %}

{% asset_img 36.png%}

<center><font color='#3333' size='3'>径向渐变</font></center>
<left><font color='#007ACC' size='3'>background:radial-gradient(shaper r/(a,b)) at position,color [percent],color [percent]</font></left>
{% blockquote %}
shape:形状 circle/ellipse
r/(a,b):半径/(长短轴)
position:中心点位置
    像素值/百分比/方向（top left）/也可以是一个值，第二个值默认center    
水平点和垂直点都是根据容器来设置的  可写百分比  比如左顶点   0% 0%或者 top left  居中  可以写center center
圆：
background: radial-gradient(circle 半径 at 水平点 垂直点, 颜色, 颜色, 颜色);
{% endblockquote %}

{% codeblock Demo %}
.xx {
width: 100px;
height: 100px;
border: 1px solid gray;
background: radial-gradient(circle 25px at 50px 50px, transparent,#ff6700, transparent);
}

<div class="xx"></div>
{% endcodeblock %}

{% asset_img 37.jpg%}

{% blockquote %}
椭圆
background: radial-gradient(ellipse 水平方向 垂直方向 at 水平点 垂直点, 颜色, 颜色, 颜色);
{% endblockquote %}

{% codeblock Demo %}
.xx {
width: 100px;
height: 100px;
border: 1px solid gray;
background: radial-gradient(ellipse 10px 25px at 50px 50px, transparent, #ff6700, transparent);
}

 <div class="xx"></div>
{% endcodeblock %}

{% asset_img 38.jpg%}

{% blockquote %}
一个容器同时可以写两个渐变
{% endblockquote %}

{% codeblock Demo %}
.xx {
width: 100px;
height: 100px;
border: 1px solid gray;
background:
radial-gradient(circle 10px at 30px, transparent, #ff6700, transparent),
radial-gradient(circle 10px at 70px, transparent, #ff6700, transparent);
}

 <div class="xx"></div>
{% endcodeblock %}

{% asset_img 39.png%}

<center><font color='#3333' size='3'>CSS3新增background值</font></center>
<left><font color='#007ACC' size='3'>指定绘制背景图像时的起点  默认是padding-box 意思就是从padding区域引入背景图片</font></left>
{% blockquote %}
background-origin:border-box|padding-box|content-box
{% endblockquote %}

<left><font color='#007ACC' size='3'>指定背景的显示范围 裁剪 默认是 border-box 意思从边框开始显示</font></left>
{% blockquote %}
background-clip:border-box|padding-box|content-box
{% endblockquote %}

<left><font color='#007ACC' size='3'>指定背景中图像的尺寸</font></left>
{% blockquote %}
background-size:auto|length|percentage|cover|contain
cover:用一张图片铺满盒子 相当把宽或高设成了 100%； 溢出的区域直接隐藏
contain:让盒子保留一张完整背景图片 宽或高顶到边框结束
{% endblockquote %}

<center><font color='#3333' size='3'>CSS3新增border值</font></center>
 <left><font color='#007ACC' size='3'>三角</font></left>
{% blockquote %}
可单独设置每边的border
border:
border-width边框的大小  
border-style边框的样式  
border-color边框的颜色  可单独设置每条边的颜色   上边border-top-color
{% endblockquote %}

{% codeblock  %}
span {
display: block;
width: 0;
height: 0;
}

        .xx {
            border: 5px solid transparent;
            border-top-color: #ff6700;

        }

        .xs {
            border: 5px solid transparent;
            border-bottom-color: #ff6700;

        }

        .xz {
            border: 5px solid transparent;
            border-left-color: #ff6700;
        }

        .xy {
            border: 5px solid transparent;
            border-right-color: #ff6700;
        }

    <span class="xx"></span>
    <span class="xs"></span>
    <span class="xz"></span>
    <span class="xy"></span>

{% endcodeblock %}

{% asset_img 40.png%}

<left><font color='#007ACC' size='3'>border 加背景</font></left>
{% blockquote %}
给 border 添加背景图片
border-img:url number style;
url：图片地址
number:图片裁剪的值
style:图片添加的方式 不写默认 stretch 拉伸 平铺
border 添加背景图的时候 首先他把图片分成了 9 块
{% endblockquote %}

{% asset_img 41.jpg%}

{% blockquote %}
1,3,7,9,分别放到了四个对应的顶点 2 放上面的一条边 8 放下面的一条边 4 放左边的一条边 6 放右边的一条边 5 不要
{% endblockquote %}
{% asset_img 42.jpg%}

{% blockquote %}
27 代表你要裁剪的区域的大小 他会按照图片按照 27x27 的大小先给左上 右上 左下 右下 分成 27x27 的小方块 剩下的就是剩下的 5 个小方块大小
repeat 是平铺满了直接裁剪
{% endblockquote %}
{% asset_img 43.png%}
{% asset_img 44.jpg%}
{% asset_img 45.png%}
{% asset_img 46.jpg%}

{% blockquote %}
round 是平铺满了 减少或缩小
{% endblockquote %}
{% asset_img 47.png%}
{% asset_img 48.jpg%}
{% asset_img 49.png%}
{% asset_img 50.jpg%}
{% asset_img 51.png%}
{% asset_img 52.png%}

##### 文本溢出

{% blockquote %}
text-overflow:clip|ellipsis|ellipsis-word
clip:不显示省略标记(....),而是简单裁切
ellipsis:当对象文本溢出时显示省略标记(...),省略标记插入的位置是最后一个字符后面
white-space:nowrap 文本不会换行,知道遇到<br>标签为止。(css2.1)
单行打点：
text-overflow:ellipsis;
white-space:nowrap:强制文本在一行内显示
overflow:hidden;溢出内容为隐藏
多行打点：
-webkit-line-clamp:2;
text-overflow:ellipsis;
display:-webkit-box;
-webkit-box-orient:vertical;子元素被垂直排列
overflow:hidden;

注意 多行打点兼容性不好，可用 js 操作
{% endblockquote %}

#### 文本换行

{% blockquote %}
word-wrap:normal|break-word;
normal:连续文本换行
break-word：内容将在边界内换行(强制换行)
单行打点：
{% endblockquote %}

{% codeblock Demo %}
div {
width: 100px;
border: 1px solid gray;
margin: 5px;
}

  <!-- 英文是不会自动换行的 -->

    <div>ddfgfdgfdgfdgfdgf</div>
    <!-- 中文会自动换行 -->
    <div>是否水电费水电费水电费第三方士大夫</div>

{% endcodeblock %}
{% asset_img 53.png%}

{% blockquote %}
所以英文和中文写省略号是不一样的
英文
{% endblockquote %}

{% codeblock  Demo%}
div {
width: 100px;
border: 1px solid gray;
margin: 5px;
/_ 只需要两个属性 _/
text-overflow: ellipsis;
overflow: hidden;
}

<!-- 英文是不会自动换行的 -->

    <div>ddfgfdgfdgfdgfdgf</div>

{% endcodeblock %}
{% asset_img 54.jpg%}

{% blockquote %}
中文
{% endblockquote %}

{% codeblock  %}
div {
width: 100px;
border: 1px solid gray;
margin: 5px;
/_ 让他首先不自动换行 _/
white-space: nowrap;
/_ 只需要两个属性 _/
text-overflow: ellipsis;
overflow: hidden;

        }

{% endcodeblock %}
{% asset_img 55.png%}

{% blockquote %}
如果你不写省略号想让英文换行的话
{% endblockquote %}

{% codeblock  %}
div {
width: 100px;
border: 1px solid gray;
margin: 5px;
/_ 让英文强制换行 _/
word-wrap: break-word;

        }

<!-- 英文是不会自动换行的 -->

    <div>ddfgfdgfdgfdgfdgf</div>

{% endcodeblock %}
{% asset_img 56.png%}
{% blockquote %}
多行打点：
{% endblockquote %}
{% codeblock  %}
div {
width: 100px;
border: 1px solid gray;
margin: 5px;
/_ 多行打点 兼容性不是很好 可用 js 进行多行打点_/
/_ 数值 2 代表 2 行打点 _/
-webkit-line-clamp: 2;
text-overflow: ellipsis;
display: -webkit-box;
/_ 子元素被垂直排列 _/
-webkit-box-orient: vertical;
overflow: hidden;
}

 <!-- 中文会自动换行 -->

    <div>是否水电费水电费水电费第三方士大夫</div>

{% endcodeblock %}
{% asset_img 57.png%}

{% blockquote %}
js 进行打点 可以设置超过几个字符打点
{% endblockquote %}

{% codeblock  %}

<body>

    <!-- 中文会自动换行 -->
    <div class="dot">是否水电费水电费水电费第三方士大夫</div>

</body>
<script>
    var dom = document.getElementsByClassName('dot')[0];
    //dom代表你要打点的文字容器  num代表你要在多少个字符后进行打点
    function dot(dom, num) {
        var str = dom.innerHTML;
        var len = str.length;
        if (len > num) {
            //substring(开始下标，结束下标) 进行截取字符串
            dom.innerHTML = str.substring(0, num) + '...'
        }
    }
    dot(dom, 8) //表示8个字符后进行打点
</script>   
{% endcodeblock %}

{% asset_img 59.png%}

#### 文字字体

{% blockquote %}
font-face{
font-family:'ShadowslntoLight';
src:url('./ShadowslntoLight.ttf');/_兼容 IE_/；
src:
url('./ShadowslntoLight.eot?#iefix')format('embedded-opentype'),
url('./ShadowslntoLight.woff')format('woff'),
url('./ShadowslntoLight.ttf')format('truetype'),
url('./ShadowslntoLight.svg')format('svg');
}
地址：https://fonts.google.com/?selection.family=Shadows+Into+Light
{% endblockquote %}

## 五、Columns 多列布局及简单瀑布流布局效果

{% blockquote %}
columns:column-width | column-count;
column-width:每列的宽度
column-count:显示的列数
column-gap:列宽，默认由 font-size 决定布局效果

column-rule:column-rule-width column-rule-style column-style-color 列边框样式
column-span:none | all (横跨所有列)
{% endblockquote %}

<center><font color='#3333' size='3'>瀑布流布局效果</font></center>
{% asset_img 60.jpg%}

{% blockquote %}
图片自动向上填充 并且随着窗口的放大缩小 会一列一列顺序排布
{% endblockquote %}

{% asset_img 61.jpg%}

{% blockquote %}
对比两张图 会发现最右边的挤下去了 但是排版依旧整齐
下面我们就用 columns 简单的实现这个效果
{% endblockquote %}

{% codeblock  %}
body,
ul,
li {
margin: 0;
padding: 0;
list-style-type: none;
}

        ul {
            column-width: 258px;
        }

        li {
            display: inline-block;
            width: 236px;
            border: 1px solid gray;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 5px;
        }

 <ul>
        <li><img src="./columns/1.jpg" alt=""></li>
        <li><img src="./columns/2.jpg" alt=""></li>
        <li><img src="./columns/3.jpg" alt=""></li>
        <li><img src="./columns/4.jpg" alt=""></li>
        <li><img src="./columns/5.jpg" alt=""></li>
        <li><img src="./columns/6.jpg" alt=""></li>
        <li><img src="./columns/7.jpg" alt=""></li>
        <li><img src="./columns/8.jpg" alt=""></li>
        <li><img src="./columns/9.jpg" alt=""></li>
        <li><img src="./columns/10.png" alt=""></li>
        <li><img src="./columns/11.jpg" alt=""></li>
        <li><img src="./columns/12.jpg" alt=""></li>
    </ul>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>效果</font></left>
{% asset_img 62.jpg%}

{% blockquote %}
缩小
{% endblockquote %}
{% asset_img 63.jpg%}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 六、flex 弹性盒

{% blockquote %}
display:none;的情况下 displa：flex；也会显示 相当于 display：block
{% endblockquote %}

<center><font color='#3333' size='3'>定义弹性盒子</font></center>

{% blockquote %}
flexbox,是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。
一维布局模型 只能实现水平方向和垂直方向中的一种 具体方向自己决定
{% endblockquote %}

{% asset_img 64.jpg%}

<left><font color='#007ACC' size='3'>display:flex 把父元素解析成块元素</font></left>

{% codeblock  %}
.box {
width: 600px;
height: 50px;
border: 2px solid gray;
display: flex;
}

        .box>div {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            text-align: center;
            line-height: 30px;
        }

        .first {
            background: rgba(165, 180, 140, 1)
        }

        .two {
            background: rgba(165, 255, 20, 1)
        }

        .three {
            background: rgba(255, 0, 0, 1)
        }

 <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
  <span>111111</span>
{% endcodeblock %}

{% asset_img 65.jpg%}

<left><font color='#007ACC' size='3'>display:inline-flex 把父元素解析成行级块元素</font></left>
{% codeblock  %}
.box {
width: 600px;
height: 50px;
border: 2px solid gray;
display: inline-flex;
}

        .box>div {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            text-align: center;
            line-height: 30px;
        }

        .first {
            background: rgba(165, 180, 140, 1)
        }

        .two {
            background: rgba(165, 255, 20, 1)
        }

        .three {
            background: rgba(255, 0, 0, 1)
        }

  <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
    <span>111111</span>
{% endcodeblock %}
{% asset_img 66.png%}

{% blockquote %}
注意：columns 属性再伸缩容器上没效果，同时 float,clear 和 vertical-aligin 属性再伸缩项目上也没有效果

给父级设置 display:flex 注意事项
1、父级设置以后 父级下面的块级元素会自动变成行级块元素
2、子元素排列的时候会忽略换行符带来的空隙
3、值设置 flex 排列子元素的宽如果超过父元素的宽 弹性盒子会自动把子元素的宽压缩在父元素的设置的宽内（等比例压缩） 默认情况下 如果自己用 flex 属性进行排列设置则不会
{% endblockquote %}

{% asset_img 67.jpg%}

<left><font color='#007ACC' size='3'>初始效果</font></left>

{% blockquote %}
所有 css 属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会初始默认效果
1、主轴水平从左到右。元素排列为一行（flex-direction 属性的初始值是 row）。
2、元素从左边起始线开始(justify-content:flex-start)。元素从主轴的起始线开始。
3、默认不拉伸（flex-grow:0）,但是会压缩（flex-shrink:1）不换行(flex-wrap:nowrap)。
4、不设置高度时 flex 元素充满 flex 容器（align-items:stretch）。元素被拉伸来填充交叉轴大小。

主轴有四个值
从左到右
从右到左
从上到下
从下到上

交叉轴始终与主轴垂直
如果主轴是水平方向 那么交叉轴就是垂直方向  
如果主轴是垂直方向 那么交叉轴就是水平方向
默认主轴水平 所以交叉轴默认垂直
{% endblockquote %}

<left><font color='#007ACC' size='3'>flex 容器属性</font></left>

{% blockquote %}
1、flex-direction 设置 flex 容器主轴的方向  
row:(默认)水平方向 从左到右
row-reverse:默认方向 首尾互换
column:垂直，从上到下
column-reverse：垂直从下到上
2、flex-wrap 控制 flex 容器是单线还是多线，以及新线的堆叠方向
nowrap:单行
wrap:多行
wrap-reverse:新线上前排列
3、flex-flow:flex-direction flex-wrap

给父级只设置 display-flex 会默认水平从左到右排列 默认 flex-direction：row
{% endblockquote %}

{% codeblock  %}
.box {
width: 600px;
height: 50px;
border: 2px solid gray;
display: flex;
/_ 默认设置 可不写
默认水平 从左到右
flex-direction: row;
默认不拉伸
flex-grow:0;
默认压缩 子元素的宽或高超出父级的时候 单行盒子会按照 1:1 的比列给子元素平均分配
flex-shrink:1;
默认不换行
flex-wrap:nowrap;
_/
}

        .box>div {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            text-align: center;
            line-height: 30px;
        }

        .first {
            background: rgba(165, 180, 140, 1)
        }

        .two {
            background: rgba(165, 255, 20, 1)
        }

        .three {
            background: rgba(255, 0, 0, 1)
        }

 <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
{% endcodeblock %}

{% asset_img 68.png%}

{% blockquote %}
如果想反过来排列 需要更改一下 flex-direction 的属性值
{% endblockquote %}

{% codeblock  %}
.box {
width: 600px;
height: 50px;
border: 2px solid gray;
display: flex;
/_ 水平方向倒序 _/
flex-direction: row-reverse;
}

        .box>div {
            width: 30px;
            height: 30px;
            border: 1px solid black;
            text-align: center;
            line-height: 30px;
        }

        .first {
            background: rgba(165, 180, 140, 1)
        }

        .two {
            background: rgba(165, 255, 20, 1)
        }

        .three {
            background: rgba(255, 0, 0, 1)
        }

  <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
{% endcodeblock %}

{% asset_img 69.png%}

{% blockquote %}
column 垂直从上到下 column-reverse 垂直从下到上
{% endblockquote %}

{% codeblock  %}
.box {
width: 200px;
height: 50px;
border: 2px solid gray;
display: flex;
/_ 默认设置 可不写
默认水平 从左到右
flex-direction: row;
默认不拉伸
flex-grow:0;
默认压缩 子元素的宽或高超出父级的时候 单行盒子会按照 1:1 的比列给子元素平均分配
flex-shrink:1;
默认不换行
flex-wrap:nowrap;
_/
}

        .box>div {
            width: 100px;
            height: 30px;
            border: 1px solid black;
            text-align: center;
            line-height: 30px;
        }

        .first {
            background: rgba(165, 180, 140, 1)
        }

        .two {
            background: rgba(165, 255, 20, 1)
        }

        .three {
            background: rgba(255, 0, 0, 1)
        }

 <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
{% endcodeblock %}
{% asset_img 70.png%}

{% blockquote %}
虽然子元素的总宽度超过了父容器的宽度 但是弹性盒子默认给它压缩成 1:1:1 的比例 因为弹性盒子默认不换行 如果我们想要让他换行 可以更改默认设置
{% endblockquote %}

{% codeblock  %}
.box {
width: 200px;
height: 100px;
border: 2px solid gray;
display: flex;
/_ 水平 _/
flex-direction: row;
/_ 换行 _/
flex-wrap: wrap;

        }

        .box>div {
            width: 100px;
            height: 30px;
            border: 1px solid black;
            text-align: center;
            line-height: 30px;
            box-sizing: border-box;
        }

        .first {
            background: rgba(165, 180, 140, 1)
        }

        .two {
            background: rgba(165, 255, 20, 1)
        }

        .three {
            background: rgba(255, 0, 0, 1)
        }

 <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
{% endcodeblock %}
{% asset_img 71.png%}

{% blockquote %}
这时候我们发现 换行的时候会产生空隙 这是由 align-content 决定的

4、justify-content 项目在主轴上的对齐方式
flex-start:(默认) main-start 齐平
flex-end:main-end 齐平
center:居中
space-between:两端对齐，每两个 flex 元素之间的空隙相等
space-around:每个项目两侧的距离相等

5、aligin-items 项目在交叉轴上的对齐方式 单行
flex-start: cross-start 齐平 默认
flex-end: cross-end 齐平
center: 居中对齐
baseline: flex 元素的第一行文字为基准对齐
stretch: flex 元素未设置高度时，高度充满 flex 容器高度

6、align-content 多线的对齐方式，单线不起作用
flex-start:打包 cross-start 齐平
flex-end:打包 cross-end 齐平
center:打包居中
stretch：未设置高度时 占满整个交叉轴
space-between:cross 两端对弈
space-around：每根轴两侧空隙相等
{% endblockquote %}

<left><font color='#007ACC' size='3'>flex 元素属性</font></left>

{% blockquote %}
1、flex-basis:length; 定义该元素的 main-size 如果是水平排列则设置宽 如果垂直方向排列则设置高
2、flex-grow:number; 拉伸比例，默认值为 0； 意思是把剩余的空间进行按比例分配  
3、flex-shrink：number:压缩比例，默认值为 1；
首先（当前元素的 flex-basis/总和）  
然后（当前元素的 flex-basis \* 比例）
最后（当前元素的 flex-basis 减去相乘过后的比例值） 就等于当前元素应该压缩多少
比如：
{% endblockquote %}

{% codeblock  %}
.box {
width: 200px;
height: 200px;
border: 2px solid gray;
display: flex;
/_ 水平 _/
flex-direction: row;

        }

        .box>div {
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 30px;
            box-sizing: border-box;
        }

        .first {
            background: rgba(165, 180, 140, 1);
            flex-basis: 150px;
            /* flex-shrink: 1; */
        }

        .two {
            background: rgba(165, 255, 20, 1);

            /* flex-shrink: 1; */
        }

        .three {
            background: rgba(255, 0, 0, 1);

            /* flex-shrink: 1; */
        }

        /* 计算压缩比例
        先算出总和      如果子元素没有设置flex-basis 则按水平方向的宽度进行计算   总和=每个元素的fiex-basis*flex-shrink相加
        first  150*1  +  two 100*1  +  three  100*1   = 350;  超出的宽度为350-200 = 150；
        计算比例乘以缩减大小   first   150/350*150 = 64.28  two 100/350*150 = 42.85   three 42.85
        缩减过后的大小  first 150-64.28 = 85.72   two 100-42.85 = 57.15  three 100-42.85 = 57.15
         */

  <div class="box">
        <div class="first">1</div>
        <div class="two">2</div>
        <div class="three">3</div>
    </div>
{% endcodeblock %}
{% blockquote %}
4、flex:flex-grow flex-shrink flex-basis, 默认值 0    1    auto
5、align-self单个项目在cross轴上的对齐方式
    flex-start:cross-start齐平
    flex-end:cross-end齐平
    center:居中
       baseline:第一行文字
    stretch:为设置高度时 该元素高度为flex容器高度
6、order:number  该项目排列的位置  按照从小到大排列
{% endblockquote %}

## 七、已知未知宽高的元素水平垂直居中

<center><font color='#3333' size='3'>绝对定位</font></center>

{% blockquote %}
利用绝对定位 （虽然可以让盒子容器水平垂直居中，但是我们可以发现，如果后台传入的文本过多，文本会溢出，并不能自适应垂直居中）
{% endblockquote %}

{% codeblock  %}
//第一种利用 margin:auto
.box {
width: 200px;
height: 200px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background: gray;
}
//利用 margin 减去宽高一半的值
.box {
width: 200px;
height: 200px;
position: absolute;
top: 50%;
left: 50%;
margin-left: -100px;
margin-top: -100px;
background: gray;
}
{% endcodeblock %}

{% asset_img 72.png%}

<center><font color='#3333' size='3'>未知宽高的元素</font></center>
{% blockquote %}
利用绝对定位和transform     transform:translate(x,y)  相对于自身移动
{% endblockquote %}

{% codeblock  %}
.box {
width: 300px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background: gray;
/_ 让字母强制折行 _/
word-wrap: break-word;
}
{% endcodeblock %}
{% asset_img 73.png%}

<center><font color='#3333' size='3'>flex布局</font></center>
{% blockquote %}
首先要初始化父元素的高度，不能让父元素的高度为内容撑开，要不然垂直居中无效
{% endblockquote %}

{% codeblock  %}
//第一种初始化
html,
body {
height: 100%;
}
/_ 第二种初始化
body {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
} _/

        body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box {
            width: 300px;
            background: gray;
            /* 让字母强制折行 */
            word-wrap: break-word;
            /*
                 align-self: center;
                 如果写它的话就可以把父级的
                  align-items: center;删除掉

            */

        }

{% endcodeblock %}

{% asset_img 74.png%}

## 八、媒体查询

<center><font color='#3333' size='3'>静态布局</font></center>
{% blockquote %}
整体和dom元素都设定好了绝对宽度  固定死的  不会随着浏览器的放大缩小而变化        如58同城
{% endblockquote %}
<center><font color='#3333' size='3'>流式布局</font></center>
{% blockquote %}
整体和dom元素利用百分比进行设定宽度   dom元素的宽度会随着浏览器的放大缩小而变化  整体布局不会变化
{% endblockquote %}
<center><font color='#3333' size='3'>自适应布局</font></center>
{% blockquote %}
屏幕大于1000的时候是一个样式  屏幕小于1000的时候是一个样式   利用媒体查询
{% endblockquote %}
<center><font color='#3333' size='3'>响应式布局</font></center>
{% blockquote %}
根据不同的设备  展示不同的布局效果  它是以上的综合体   比如苹果官网
{% endblockquote %}

<center><font color='#3333' size='3'>媒体查询</font></center>

{% asset_img 75.jpg%}
{% blockquote %}
媒体查询的使用
link 使用（不推荐）
{% endblockquote %}
{% codeblock  %}

 <link rel="stylesheet" href="demo.css" media="screen and (max-width:800px)">
{% endcodeblock %}

{% blockquote %}
样式使用 推荐
{% endblockquote %}

{% codeblock  %}
@media screen and (max-width:800px) {
.box {
width: 300px;
height: 300px;
}
}
{% endcodeblock %}

{% blockquote %}
screen 媒体类型 彩色屏幕
(max-width:800px) 媒体特性 max-width: 当前屏幕宽度<=800 min-width: 当前屏幕宽度>=800
{% endblockquote %}

{% asset_img 76.jpg%}

{% blockquote %}
一般会用到 all 和 screen
{% endblockquote %}

{% asset_img 77.jpg%}

<center><font color='#3333' size='3'>媒体查询的逻辑操作符</font></center>
<left><font color='#007ACC' size='3'>and 操作符</font></left>
{% blockquote %}
   关键字用于合并多个媒体属性或合并媒体属性与媒体类型。
{% endblockquote %}

{% codeblock  %}
@media screen and (min-width:800px) and (max-width:1200px)
{% endcodeblock %}

<left><font color='#007ACC' size='3'>逗号分隔列表</font></left>
{% blockquote %}
媒体查询中使用逗号分隔效果等同于 or 逻辑操作符，当使用逗号分隔的媒体查询时，如果任何一个媒体查询返回真，样式就是有效的。
{% endblockquote %}

{% codeblock  %}
@media (max-width:500px) ,screen and (orientation:landscape) <!-- 宽度小于等于 500 或者是竖屏 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>not 操作符</font></left>
{% blockquote %}
not 关键字应用于整个媒体查询，在媒体查询为假时返回真。
{% endblockquote %}

{% codeblock  %}
@media not screen and (min-width:500px) and (max-width:800px)
{% endcodeblock %}

<left><font color='#007ACC' size='3'>only 操作符</font></left>
{% blockquote %}
only 关键字防止老旧的浏览器不支持带媒体属性的查询而应用到给定的样式
{% endblockquote %}

{% codeblock  %}
@media only screen and (min-width:500px) and (max-width:800px)
{% endcodeblock %}

## 九、移动端布局

#### rem 布局

{% blockquote %}
rem 是根据 html 字体的大小来设置大小的 比如 html 默认字体大小是 16px 那么 1rem 就等于 16px，如果你设置 html 字体大小为 30px，那么 1rem 就等于 30px, 如果我们用 rem 进行布局的话 在不同的设备只需要改一下 html 的字体大小就能适配各种屏幕
我们可以通过 js 来做 rem 的适配 每个设备都有宽高  
{% endblockquote %}
{% asset_img 78.png%}
{% asset_img 79.png%}

{% blockquote %}
我们可以通过 js 来动态的获取屏幕的宽度 动态的来对它的 html 字体大小进行设置 比如我们都用它的宽度除以 10
{% endblockquote %}

{% codeblock  %}
window.onload = function () {
var w = document.documentElement.clientWidth;
document.documentElement.style.fontSize = w / 10 + 'px';
}
{% endcodeblock %}

{% blockquote %}
这样我们设置用 rem 进行设置的时候就可以等比缩放
{% endblockquote %}
{% codeblock  %}
.box {
width: 1rem;
height: 1rem;
background: gray;
}
{% endcodeblock %}
{% asset_img 80.png%}
{% asset_img 81.png%}

{% blockquote %}
这样他们就能进行等比缩放
{% endblockquote %}

#### em 布局

{% blockquote %}
em 是根据它当前的父级的字体大小来设置的 比如它当前父级的字体大小为 20px,那么 1em 就等于 20px
{% endblockquote %}

#### vm、vh（推荐）

{% blockquote %}
把屏幕的宽高分成了 100 份
1vm 就代表其中宽的一份
1vh 就代表其中高的一份
{% endblockquote %}

#### viewport

{% blockquote %}
物理像素：物理像素又被称为设备像素，它是显示设备中一个最小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。
逻辑像素：一个可以由程序使用的虚拟像素（比如说 css 像素），然后由相关系统转换为物理像素。
设备像素比（dpr）= 物理像素/逻辑像素
{% endblockquote %}
{% asset_img 82.jpg%}

{% blockquote %}
比如我们的手机的宽是 375 个物理像素，写 1px 的话 对应的是 1 个物理像素， 但是随着手机屏幕的发展 物理像素的密度越来越大 宽是 375 物理像素的变成了 750 物理像素 比如苹果 5/6/7/8，那么此时的 1px 就不再对应一个物理像素 而是两个物理像素 那我们如何去找手机屏幕上的 1 像素呢 ， 可以写成 0.5px，但是 这种写法在有的浏览器支持，有的浏览器不支持。 有的浏览器会把 0.5 解析成 0；这个时候应该怎么解决呢？
{% endblockquote %}
{% asset_img 83.jpg%}

{% blockquote %}
viewport 是严格等于浏览器的窗口。在桌面浏览器中，viewprot 就是浏览器窗口的宽度、高度。但在移动端设备上就有点复杂。
viewport 就是浏览器上，用来显示网页的那一部分的区域。Ios 及新版本浏览器默认 viewport 为 980px。
viewport 默认有 6 个属性：
width:设置 viewport 宽度，可以为一个整数，或字符串“device-width” 代表设备的默认宽度
initial-scale:页面初始的缩放值，为数字，可以是小数
minimum-scale:允许用户的最小缩放值，为数字，可以是小数
maximum-scale:允许用户的最大缩放值，为数字，可以是小数
height: 设置 viewport 的高度（我们一般而言并不能用到）
user-scalable:是否允许用户进行缩放,‘no’为不允许，‘yes’为允许

通过 viewport 的 initial-scale（缩放的属性值）我们就可以解决移动端 1 像素的问题
比如之前说过苹果 6 的屏幕宽度虽然是 375，但他的 drp 是 2，物理像素实际是 750 个  
{% endblockquote %}
{% asset_img 84.png%}

{% blockquote %}
本来 1px 对应到的就是两个物理像素点 那我们想让 1px 对应一个物理像素点就可以设置 initial-scale = 0.5 缩放 0.5 就相当于把物理像素放大两倍
本身的 375 就变成了 750
{% endblockquote %}

{% codeblock  %}

<meta name="viewport" content="width=device-width, initial-scale=0.5">
{% endcodeblock %}

{% asset_img 85.png%}

{% blockquote %}
这样我们就能解决了 1px 的问题 此时它的屏幕显示宽度从 375 变成了 750,和它本身的物理像素点对应了 那么我们写 1px 就相当于 1 物理像素
如果 dpr 是 3 的设备 只需要设置 initial-scale = 0.33 就可以实现 css1px 对应 1 物理像素
全面的写法
{% endblockquote %}

{% codeblock  %}

<meta name="viewport" content="width=device-width, initial-scale=0.5,minimum-scale:0.5,maximum-scale:0.5,user-scalable:no">
     <!-- width=device-width：代表当前宽度为设备的宽度
    initial-scale=0.5：代表缩放0.5
    minimum-scale:0.5：代表最小缩放0.5
    maximum-scale:0.5： 代表最大缩放0.5
    user-scalable:no：  代表不允许用户双指进行放大和缩小 -->
{% endcodeblock %}

{% blockquote %}
但是这种办法只能针对单一的设备 如果用户同时手持不同的设备 他们的 dpr 都不同 可能是 2 可能是 3 可能是 1 那我们该怎么办？
我们可以把 initial-scale 的值进行动态生成 检测当前设备的 dpr 进行相应的缩放 当然 我们动态生成的是整个 meta 标签
{% endblockquote %}

{% codeblock  %}

<meta name="viewport" content="width=device-width, initial-scale=0.5,minimum-scale:0.5,maximum-scale:0.5,user-scalable:no">
{% endcodeblock %}

{% blockquote %}
那怎么对当前设备的 dpr 进行检测呢 可以通过 js 的 window.devicePixelRatio 来检测当前设备屏幕的 dpr
苹果 6/7/8
{% endblockquote %}

{% asset_img 86.png%}

{% blockquote %}
苹果 X
{% endblockquote %}
{% asset_img 87.png%}

{% blockquote %}
我们只需要通过 js 动态获取它的 dpr 就可以动态插入 meta 标签就改变它的缩放比例
{% endblockquote %}

{% codeblock  %}
var oMeta = document.createElement('meta');
oMeta.setAttribute('name', 'viewport');

if (window.devicePixelRatio >= 2) {
oMeta.setAttribute('content', 'width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no')
}
if (window.devicePixelRatio >= 3) {
oMeta.setAttribute('content', 'width=device-width, initial-scale=0.3, minimum-scale=0.3, maximum-scale=0.3, user-scalable=no')
}
console.log(oMeta);
document.getElementsByTagName('head')[0].appendChild(oMeta);
{% endcodeblock %}

{% blockquote %}
公司一般给的设计稿都是 750 的 dpr 为 2 就像苹果 6/7/8 如果我们写一个宽高为 100px 的 div 它在苹果 6/7/8 正常显示
{% endblockquote %}
{% asset_img 88.png%}

{% blockquote %}
但是在苹果 x 上却变小了
{% endblockquote %}

{% asset_img 89.png%}

{% blockquote %}
因为他们的物理像素不同 虽然我们做到了 css1px 对应 1 物理像素 解决了 1 像素的问题 但是没有做到等比缩放
这时候我们就要用到了 rem 通过 html 的 font-size 大小来进行布局 这样就能做到了等比缩放 再结合 meta 标签就可以再解决 1 像素的问题
{% endblockquote %}

#### 移动端一像素问题

{% blockquote %}
总结 rem 布局和移动端一像素的问题
1、先说 1 像素的问题 每种设备的 dpr 是不同的 dpr 也就是设备像素比 就是逻辑像素/物理像素 逻辑像素就是 css 中的 px 物理像素就是屏幕像素点
苹果 6/7/8 虽然的屏幕宽度显示的是 375 但是他的 dpr 是 2 它的屏幕宽度的像素点是 750 所以我们直接写 1px 的话对应的是 2 个物理像素点 通过改变它的屏幕宽度的物理像素点显示 我们就可以让 1px 对应 1 个物理像素点 那怎么改变它的屏幕宽度的物理像素点显示呢 可以通过 meta 标签的  
initial-scale 缩放显示来更改它屏幕显示的宽度 比如他的 dpr 是 2 我们可以让 initial-scale=0.5 这样他就能进行缩放 屏幕宽度就变成了 750 你在写 1px 的话 就能对应 1 物理像素。
当然我们不可能每个网页写多个 meta 标签来进行适应各种屏幕，我们可以通过 js 的 window.devicePixelRatio 获取到当前设备屏幕的 dpr 来通过它来对 head 标签中进行动态的插入 meta 标签 这样在不同的设备上都能显示不同的物理像素点 就能对应到各个设备的 1px=1 物理像素的问题
2、再说 rem 布局 上面我们已经能让每种设备都能显示相应的屏幕像素点 这样我们在进行 rem 布局的时候就可以用到。rem 的大小是通过 html 字体的大小来决定的，比如苹果 6/7/8 通过转换已经可以显示全部的物理像素点 750，我们可以通过把 html 的字体大小设置为 750/10 这样 1rem 就对应了 75px;10rem 就是 750px 相当于 10rem 就是充满他们屏幕的宽度；然后我们进行 rem 布局的话 在下个设备上 我们也可以通过改变它的 html 字体大小来进行适应 比如苹果 x 他的屏幕的物理像素经转换过后 屏幕的宽度显示为 1250 物理像素，我们可以通过设置它的 html 的字体大小 1250/10 = 125px 那么它的 1rem 就等于 125px 然后苹果 6/7/8 上面的 1rem 代表它屏幕的十分之一 苹果 x 的 1rem 代表自己屏幕的十分之一 显示的都是百分比 那么一个网页 在苹果 6/7/8 上用 rem 布局 显示的效果 会和苹果 x 上面的 rem 布局显示的效果一样 因为他们都是用 rem 布局 我们设定的 rem 都是显示的设备的十分之一 所以我们可以利用 js 的 document.documentElement.clientWidth 来获取当前屏幕的宽度 再让他除以 10 给 html 网页设置 font-size 这样就能兼容到页面在各种设备上的显示效果。
{% endblockquote %}

<center><font color='#3333' size='3'>根据dpr的值来修改viewport实现1px的线？</font></center>
{% blockquote %}
解决方案：
1、利用js动态生成meta标签
{% endblockquote %}

{% codeblock  %}

<!-- 方法上面有写 -->

<meta name="viewport" content="width=device-width, initial-scale=0.3, minimum-scale=0.3, maximum-scale=0.3, user-scalable=no">
{% endcodeblock %}

{% blockquote %}
2、css3 transform:scale 缩放 （解决有的浏览器不识别 0.5px 的写法 能够识别 0.5 像素 但是识别不了 0.5px 这种写法）
比如我们在移动端写一个边框为 0.5px 宽高为 100px 的盒子 我们可以先把它放大两倍 再用 transform 缩放
{% endblockquote %}
{% codeblock  %}
body,
div {
margin: 0;
padding: 0;
}

        div {
            height: 200px;
            width: 200px;
            border: 1px solid gray;
            transform: scale(0.5, 0.5);
            transform-origin: 0 0;<!-- 代表缩放的中心点  默认在中间  这是代表把中心点移动到左上角 -->
        }

<!-- 相当于写了一个 (这是针对有的浏览器不识别 0.5 像素的问题) -->

div{
height: 100px;
width: 100px;
border: 0.5px solid gray;
}
{% endcodeblock %}

{% asset_img 90.png%}

<center><font color='#3333' size='3'>综合解决方案</font></center>

<left><font color='#007ACC' size='3'>方案一：手淘解决方案 flexbile</font></left>
{% codeblock  %}
http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js
{% endcodeblock %}
{% blockquote %}
1、根绝屏幕大小动态修改 html 的 fontSize,达到等比缩放问题
2、给 body 设置 fontSize,字体大小可以直接继承 body 的 font-size
3、给 html 标签添加 data-dpr 属性，可以通过查找该属性，给不同 dpr 元素设置个性化属性
[data-dpr='2']div{
font-size:26px;
}
{% endblockquote %}

<left><font color='#007ACC' size='3'>方案二：Vw+postcss（插件）（推荐）</font></left>
{% blockquote %}
根据设计稿(如宽度 750px 的设计稿),以 px 为单位写大小，转换成 vw。解决等比缩放问题。
至于小于等于 1px 的线，以 px 为单位不转成 vw。postcss-write-svg 插件主要用来处理移动端 1px 的解决方案。该插件主要使用的是 border-image 和 background 来做 1px 的相关处理，编译出来是 border-image 或者 background
{% endblockquote %}

<center><font color='#3333' size='3'>dpr不同的设备上图片的适配问题</font></center>
{% asset_img 91.jpg%}

{% blockquote %}
普通屏幕下把高清图转成标清图 图片失真只会没有那么锐利 本来 1x1 对应的是 1x1 个物理像素点 现在你要 2x2 对应 1x1 个物理像素点 把 2x2 变成 1x1 去其中的一个色值去表示，还是高清 只不过没那么鲜艳
retina 屏 标清图转高清图会模糊 因为本来图片上 1x1 对应的是 1x1 一个物理像素点 现在你要图片上 1x1 对应 2x2 个物理像素点 计算机会进行计算一个大概值对 2x2 区域进行分配 所以转换完成后就会模糊

怎么解决图片不模糊？让设计师给你准备两套图 通过 dpr 来解决 当 dpr 为 1 的时候加载标清图 当 dpr 为 2 的时候加载高清图
可通过两种方式来进行加载
1、媒体查询
通过判断它当前的 dpr 来决定引入哪种图片
2、js 动态添加图片
{% endblockquote %}

{% codeblock  %}
window.onload = function () {
if (window.devicePixelRatio > 1) {//判断当前设配的 dpr 是否大于 1
var images = Array.prototype.slice.call(document.getElementsByTagName('img'));//获取所有图片
images.forEach(function (ele, index) {//对图片进行循环
var lowers = images[index].getAttribute('src');//获取图片的 src
var highres = lowers.replace('.', '@2x.');//logon.png logo@2x.png 把标清图片转换成高清图片
images[index].setAttribute('src', highres);//把标签添加回去
})
}
}
}
{% endcodeblock %}

{% blockquote %}
现在一般只用高清图片 这样它在 dpr 为 1 的上面也能显示高清 只不过不是那么锐利 在 dpr 为 2 或 3 以上的高清屏幕上正好还原
{% endblockquote %}

## 十、响应式布局

{% blockquote %}
在不同的设备上显示不同的布局效果 没有具体的方法 只要实现了布局效果 你可以用任何方法
比如 bootstrap 网站的导航栏
全屏
min-width：1201 就是最小宽度大于等于 1201 显示了 8 个
{% endblockquote %}

{% asset_img 92.png%}

{% blockquote %}
max-width :1200 的时候 就是最大宽度大于等于 1200 的时候 显示了 7 个
{% endblockquote %}
{% asset_img 93.jpg%}
{% blockquote %}
max-width :1000 的时候 就是最大宽度大于等于 1000 的时候 显示了 5 个
{% endblockquote %}
{% asset_img 94.png%}
{% blockquote %}
max-width:768 的时候 就是最大宽度大于等于 768 的时候显示了 2 个
{% endblockquote %}
{% asset_img 95.jpg%}
{% blockquote %}
他把导航信息存到了右边的按钮里 是一个下拉菜单 更适合小屏用户的体验
{% endblockquote %}
{% asset_img 97.png%}

## 十一、Bootstrap 快速使用

<center><font color='#3333' size='3'>什么是Bootstrap?</font></center>
{% blockquote %}
 Bootstrap是最受欢迎的HTML、CSS和JS框架，用于开发响应式布局、移动设备优先的WEB项目。
{% endblockquote %}
<left><font color='#007ACC' size='3'>特点</font></left>
{% blockquote %}
虽然可以直接使用Bootstrap提供的css样式表，但Bootstrap的源码是基于最流行的css预处理脚本Less和Sass开发的。你可以采用预编译的css文件快速开发，也可以从源码定制自己需要的样式。
        你的网站和应用能在Bootstrap的帮助下通过同一份代码快速、有效的适配手机、平板、PC设备，这一切都是css媒体查询（Media Query）的功劳。
        Bootstrap提供了全面、美观的文档。你能在这里找到关于HTML元素、HTML和css组件、jQuery插件方面的所有详细文档。
{% endblockquote %}

<left><font color='#007ACC' size='3'>使用</font></left>
{% blockquote %}
需要引入 3 个文件
{% endblockquote %}

{% codeblock  %}

<!-- 1、css 文件 -->
<link rel="stylesheet" href="./bootstrap-3.3.7-dist/css/bootstrap.css">
{% endcodeblock %}

{% codeblock  %}

<!-- 2.jQuery文件 -->
<script src="./js/jquery.js"></script>

{% endcodeblock %}

{% codeblock  %}

<!-- 3、bootstrap.js文件 -->
<script src="./bootstrap-3.3.7-dist/js/bootstrap.js"></script>

{% endcodeblock %}

<left><font color='#007ACC' size='3'>快速使用</font></left>
{% blockquote %}
1、全局样式
表格、按钮、辅助类
2、组件
按钮组、下拉菜单、字体图标、导航条
3、栅格系统
实现响应式布局。
Bootstrap 把整个页面分成了 12 页
4、插件
模态框、轮播图
{% endblockquote %}

## 十二、transform 形状变换

<center><font color='#3333' size='3'>transform</font></center>
{% blockquote %}
transform属性向元素应用2D或3D转换。该属性允许我们对元素进行移动、缩放、旋转或倾斜，一个图形默认的中心点在它的中间，无论是移动还是缩放都是基于它的中心点。
{% endblockquote %}
<left><font color='#007ACC' size='3'>移动：translate</font></left>
{% blockquote %}
px
translateX()
translateY()
translateZ()
translate3d(x,y,z)
简写：translat(x,y) -> translat(x,y,z) 
{% endblockquote %}

<left><font color='#007ACC' size='3'>缩放：scale</font></left>
{% blockquote %}
数字
正值代表正面缩放
负值代表反面缩放
scaleX()
scaleY()
scaleZ()
scale3d(x,y,z)
简写：scale(x,y) | scale(n)->scale(n,n)
{% endblockquote %}

<left><font color='#007ACC' size='3'>旋转：rotate</font></left>
{% blockquote %}
里面传入的是角度值
rotateX(ndeg)
rotateY(ndeg)
rotateZ(ndeg)
rotate3d(x,y,z)
简写：rotate()(默认是 rotateZ) -> rotateZ()
{% endblockquote %}

<left><font color='#007ACC' size='3'>倾斜：skew</font></left>
{% blockquote %}
角度值
skewX(ndeg)
skewY(ndeg)
scale3d(x,y,z)
简写：skew(x,y)
{% endblockquote %}
<left><font color='#007ACC' size='3'>transform-origin</font></left>
{% blockquote %}
transform-origin:设置元素原点(中心点)位置
transform-origin:50% 50% 0;默认值 代表一个图形的默认原点(中心点)就是它的正中间
x 轴方向：left | center | right | length | %
y 轴方向：top | center | bottom | length | %
z 轴方向：length
{% endblockquote %}

## 十三、transition 过度动画

{% blockquote %}
transition:property duration timing-funcion delay;
transition-property 规定设置过度效果的 CSS 属性的名称
transition-duration 规定完成过度效果需要多少秒或毫秒
transition-timing-function 规定速度效果的速度曲线
transition-delay 定义过度效果何时开始。
多个动画中间用，隔开
比如 我们实现一个盒子 100x100 2s 后挪动到 400 的位置 并且高度增加了 100px;
{% endblockquote %}

{% codeblock  %}
.box {
width: 100px;
height: 100px;
background: gray;
transition: transform 4s, height 2s, background 3s;
}

<script>
    var a = document.getElementsByClassName('box')[0];
    a.onclick = function () {
        this.style.transform = 'translate(800px)';
        this.style.height = 200 + 'px';
        this.style.background = 'red';
    }
</script>

<!-- transition: transform 4s ease 3s; -->
<!-- transition:属性名称 动画事件 动画方式 延迟时间（几秒后执行动画）; -->

<!-- (如果你想同时实现多个动画并且动画方式及时间是一样的   你可以写成) -->
<!-- transition:all 4s ease; -->
<!-- 这样的话动画会同时执行并且在4s后结束  缺点  无法对单个属性进行延迟 -->

<!-- 不过一般我们css样式直接写在样式表中  只需要更改class名称就可以了  上面的例子可以改写成 -->

.box {
width: 100px;
height: 100px;
background: gray;
transition: all 4s ease-in;
}

        .move {
            transform: translateX(800px);
            height: 200px;
            background: rgba(255, 255, 255, .3)
        }

var a = document.getElementsByClassName('box')[0];
a.onclick = function () {
this.classList.add('move')
}
{% endcodeblock %}

{% blockquote %}
transiton-timing-function 规定设置过度效果的 CSS 属性的名称
transition-timing-function:linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n);
linear 匀速，cubic-bezier(0 ,0, 1, 1)
ease 慢快慢，cubic-bezier(0.25 ,0.1, 0.25, 1)
ease-in 慢速开始的过渡，cubic-bezier(0.42 ,0, 1, 1)
ease-out 慢速结束的过渡，cubic-bezier(0, 0, 0.58, 1)
ease-in-out 慢速开始和结束的过渡，cubic-bezier(0.42, 0 ,0.58 1)
cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值，可能的值是 0~1 之间的数值。
{% endblockquote %}
{% asset_img 98.jpg%}

## 十四、3D 变换动画

<center><font color='#3333' size='3'>perspective</font></center>
{% blockquote %}
定义3D元素距视图的距离，以像素记。当为元素定义perspective属性时，其子元素会获得透视效果，而不是元素本身。
{% endblockquote %}

{% asset_img 99.jpg%}

{% blockquote %}
perspactive 值越大 看着越小
{% endblockquote %}

<center><font color='#3333' size='3'>transform-style</font></center>
{% blockquote %}
transform-style指定嵌套元素是怎样在三位空间中呈现。
transform-style:flat | preserve-3d; 设置了transform-style:preserve-3d的元素。不能防止子元素溢出，即不能设置overflow：hidden;否则presever-3d失效；
{% endblockquote %}

<center><font color='#3333' size='3'>backface-visibilility</font></center>
{% blockquote %}
backface-visibility属性定义当元素背面是否可见。
backface-visibility:visible | hidden;
{% endblockquote %}

<center><font color='#3333' size='3'>perspective-origin视点的位置</font></center>
{% blockquote %}
perspective-origin:x,y;默认50%，50%;
{% endblockquote %}

{% asset_img 100.jpg%}

## 六、animation 动画关键帧

<center><font color='#3333' size='3'>animation</font></center>

{% blockquote %}
animation 属性是一个简写属性，用于设置动画属性

{% endblockquote %}
{% codeblock  %}
animation: 动画名称， 完成时间， 动画曲线， 延迟时间， 循环次数， 动画方向， 动画完成后停在哪里;
{% endcodeblock %}

{% blockquote %}
animation-name 规定需要绑定到选择器的 keyframe 名称。
animation-duration 规定完成动画所花费的时间，以秒或毫秒计。
animation-timing-function 规定动画的速度曲线。
animation-delay 规定在动画开始之前的延迟。
animation-iteration-count 规定动画应该播放的次数。
n 播放 n 次
infinite 无限次

animation-direction 规定是否应该轮流反向播放动画。
normal 默认值，按照顺序正常播放
reverse 动画反向播放。
alternate 动画在奇数次正向，偶数次方向播放
alternate-reverse 动画在奇数次反向，偶数次正向播放

animation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见。
none 不改变默认行为。
forwards 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
backwards 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
both 向前和向后填充模式都被应用。

animation-play-state 属性规定动画正在运行还是暂停。
paused 规定动画已暂停。
running 规定动画正在播放。

如果你的动画效果只有初始和结束 你可以写成。
{% endblockquote %}

{% codeblock  %}
@keyframes move {
0%{

}
100% {

}
}

<!-- 也可以写成 -->

@keyframes move {
from{

            }
            to {

            }
        }

<!-- 还可以写成 -->

@keyframes move {
/_ 0%默认是你属性的样式值 _/
100% {

}
}
{% endcodeblock %}

{% asset_img 101.jpg%}

<center><font color='#3333' size='3'>js控制动画暂停和开始</font></center>
{% codeblock  %}
<!-- 暂停 -->
document.getElementById("loading").style.animationPlayState = "paused";
     document.getElementById("loading").style.WebkitAnimationPlayState = "paused";  <!-- 针对 Chrome 和 Safari 的代码 -->

<!-- 开始 -->

document.getElementById("loading").style.animationPlayState = "running";
document.getElementById("loading").style.WebkitAnimationPlayState = "running"; <!-- 针对 Chrome 和 Safari 的代码 -->

{% endcodeblock %}
