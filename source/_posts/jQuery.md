---
title: jQuery
copyright: true
tags:
  - - jQuery
categories:
  - - jQuery
date: 2019-06-18 16:02:17
---

# 前言

{% blockquote %}
DOM 操作复杂
1、DOM 元素获取
2、给 DOM 元素添加属性
3、DOM 元素的运动效果

兼容性问题
1、浏览器狂傲
2、事件 event 获取源
3、设置监听事件
{% endblockquote %}

# 简介

{% blockquote %}
基于 JS 存在的问题，诞生了 jQuery。
1、解决兼容
2、操作简单
3、功能丰富

特色：
1、语法简单、开发高效
2、文件够轻、短小精悍
3、插件丰富、拓展性强
4、浏览器支持性高
{% endblockquote %}

## 一、引入 DOM

{% blockquote %}
当你需要获取多个 dom 的时候 可以用，隔开
{% endblockquote %}

{% codeblock  %}

 <div id="container">111</div>
    <span>22222</span>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('#container,span').text());/* 11122222 */
</script>
{% endcodeblock %}

{% blockquote %}
jQuery 里面可以放 css 选择器，原生的 dom 对象，有索引值的数组或类数组，还可以放函数
{% endblockquote %}
<left><font color='#007ACC' size='3'>css 选择器</font></left>
{% codeblock  %}

<body>
    <div id="container">111</div>

</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('#container').text());/* 111 */
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>原生 DOM 对象</font></left>
{% codeblock  %}

<body>
    <span>2222</span>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    var a = document.getElementsByTagName('span');
    console.log($(a).text());/* 2222 */
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>数组或类数组</font></left>
{% codeblock  %}

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    var a = document.getElementsByTagName('li');
    console.log($(a)) /* jQuery.fn.init(4) [li, li, li, li]0: li1: li2: li3: lilength:4__proto__: Object(0) */
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>函数</font></left>
{% blockquote %}
注意放入函数的时候 dom 结构加载完成会自动执行
{% endblockquote %}
{% codeblock  %}

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    $(document).ready(function () {
        console.log($('li').text());/* 1234 */
    })
    
<!-- 也可以 -->

    $(function () {
          console.log($('li').text());<!-- 1234 -->
    })

</script>
{% endcodeblock %}

## 二、文本属性

<center><font color='#3333' size='3'>text()</font></center>

{% blockquote %}
获取和改变文本内容 里面还可以传入一个函数 取值赋值均一组 同 innerText
{% endblockquote %}

{% codeblock  %}

<!-- 获取 -->
<body>
    <div class="box">11111</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('.box').text()); /* 11111 */
<!-- 改变 -->
 $('.box').text('你好')
    console.log($('.box').text()); <!-- 你好 -->
</script>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>传入函数</font></left>
{% codeblock  %}
  $('.box').text(function (index, ele) {
        console.log(index); <!-- 代表索引    0 -->
        console.log(ele); <!-- 代表当前遍历的文本值    11111 -->
    })
<!-- 可以做判断 -->

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    $('li').text(function (index, ele) {
        if (index % 2 == 0) {
            $(this).css('color', 'red')
        }
    })
</script>
{% endcodeblock %}
{% asset_img 1.png %}

<center><font color='#3333' size='3'>html()</font></center>
{% blockquote %}
可以添加标签  也可以传入函数   取值取一个  赋值赋一组  innerHTML
{% endblockquote %}

{% codeblock  %}

<body>
    <div class="box">11111</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    $('.box').html('<h1>888888</h1>')
</script>
{% endcodeblock %}

{% asset_img 2.png %}

{% blockquote %}
text()和 html()区别
{% endblockquote %}
<left><font color='#007ACC' size='3'>如果含有字标签 text()只获取文本内容 html()会把字标签也获取出来</font></left>
{% codeblock  %}

<body>
    <div class="box">11111
        <div>2222</div>
    </div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log('text获取' + $('.box').text());
    console.log('html获取' + $('.box').html());
</script>
{% endcodeblock %}
{% asset_img 3.png %}

<left><font color='#007ACC' size='3'>如果获取一组标签的文本内容 text()会全部获取 html()只会获取第一个</font></left>
{% codeblock  %}

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log('text获取' + $('li').text());//text获取12345
    console.log('html获取' + $('li').html());//html获取1
</script>
{% endcodeblock %}
<center><font color='#3333' size='3'>val()</font></center>
{% blockquote %}
获取和设置input标签的value值  取值取一个  赋值赋一组   同value
{% endblockquote %}

<center><font color='#3333' size='3'>attr()</font></center>
{% blockquote %}
获取dom的属性   getAttribute  能够获取dom标签的所有属性   包括自定义属性   固有属性+新增属性
{% endblockquote %}

{% codeblock  %}
console.log($('.box').attr('class')); <!-- box -->

<!-- 相当于 -->

console.log(a.getAttribute('class'));

<!-- 设置属性 -->

$('.box').attr('id', 'zz') <!-- 相当于 a.setAttribute('id', 'zz') -->

<!-- 删除属性 -->

$('.box').removeAttr('id')<!-- 相当于 a.removeAttribute('id'); -->

<!-- 传入的参数可以是一个对象 -->

$('.box').attr({
id: 'he',
df: 'dd'
})
{% endcodeblock %}

<center><font color='#3333' size='3'>prop()</font></center>
{% blockquote %}
获取dom标签的属性   只能获取固有属性（特性）：id class
{% endblockquote %}

{% codeblock %}
console.log($('.box').prop('class')); <!-- box -->

<!-- 相当于 -->

console.log(a.className);

<!-- 设置属性 -->

$('.box').prop('id', 'kk') <!-- 相当于 a.id = 'kk' -->

<!-- 删除属性  prop只能删除自己添加的非固有属性   删除固有属性删除不掉 -->

$('.box').prop('df', 'dd')
$('.box').removeProp('df');
console.log($('.box').prop('df'));
{% endcodeblock %}

<left><font color='#007ACC' size='3'>全选 demo</font></left>
{% codeblock  %}

<!-- 首先  我们先来看一下attr和prop获取属性的区别   但获取一个dom本身不存在的属性时 -->
<body>
    <div class="box"></div>
    <ul>
        <li>
            <input type="checkbox">全选
        </li>
        <li>
            <input type="checkbox">1
        </li>
        <li>
            <input type="checkbox">2
        </li>
        <li>
            <input type="checkbox">3
        </li>
        <li>
            <input type="checkbox">4
        </li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('.bo').prop('checked')); /* false */
    console.log($('.bo').attr('checked')); /* undefined */
/* 可以发现  prop返回自身一个不存在的属性返回的是boolean值  这时候我们就可以进行判断 */
    $('.bo').change(function () {
        if (this.checked) { /* 相当于$('.bo').prop('checked') */
            $('ul input').prop('checked', true)
        } else {
            $('ul input').prop('checked', false)
        }
    })
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>区别</font></left>
{% blockquote %}
attr 获取未设置的属性，均返回 undefined 而 prop 获取未设置的特性，返回空
{% endblockquote %}
、

<center><font color='#3333' size='3'>addClass()</font></center>
{% blockquote %}
添加class名称  也可传入函数
{% endblockquote %}

{% codeblock  %}

<body>
    <div class="box">ddd</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    $('.box').addClass('cc');
    console.log($('.box').attr('class'));/* box cc */
     <!-- 传入函数 -->
 $('.box').addClass(function (index, className) {
        console.log(index);//0
        console.log(className);//box
    });
</script>
{% endcodeblock %}
{% blockquote %}
注意
当我们在事件中给一个dom元素使用this添加class名称的时候
{% endblockquote %}

{% codeblock  %}

<body>
    <div class="row">
        55555
    </div>
</body>
<script src="./js/jquery.js"></script>
<script>
    $('.row').click(function () {
        this.addClass('ad')
    })
</script>
{% endcodeblock %}
{% asset_img 3.png %}
{% blockquote %}
 报错的原因是因为 this 指向的是原生dom对象  身上没有addClass这个方法 我们要用$包裹一下 把他变成jQuery 对象
{% endblockquote %}

{% codeblock  %}
$('.row').click(function () {
        $(this).addClass('ad')
})
{% endcodeblock %}

<center><font color='#3333' size='3'>removeClass()</font></center>
{% codeblock  %}
  $('.box').addClass('cc');
    console.log($('.box').attr('class')); <!-- box cc -->
    $('.box').removeClass('cc');
    console.log($('.box').attr('class'));<!-- box -->
{% endcodeblock %}

<center><font color='#3333' size='3'>hasClass()</font></center>
{% blockquote %}
判断当前dom元素是否包含设定的class类名  结果返回boolean
{% endblockquote %}

{% codeblock  %}

<body>
    <div class="box"></div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('.box').hasClass('cc'));/* false */
</script>
{% endcodeblock %}

<center><font color='#3333' size='3'>toggleClass()</font></center>
{% blockquote %}
循环切换指定class名称  有就删除  没有就添加
{% endblockquote %}

{% codeblock  %}
$('.box').click(function () {
        $(this).toggleClass('cc')
})
{% endcodeblock %}

## 三、css 属性

<center><font color='#3333' size='3'>css属性获取 css(string) | css([ ])</font></center>

{% codeblock  %}

<body>
    <div class="box">111</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('.box').css('width'));//500px
</script>

<!-- 获取多个 -->

console.log($('.box').css(['width', 'height']));<!-- {width: "500px", height: "500px"} -->
{% endcodeblock %}

<center><font color='#3333' size='3'>css属性设置  css(string,value) | css({})</font></center>
{% codeblock  %}
$('.box').css('border', '1px solid red');<!-- 前面属性名  后面属性值 -->
<!-- 当你添加的属性有数值的时候  有三种写法 -->
$('.box').css('width', '200px')
$('.box').css('width', '300')
$('.box').css('width', 100)

<!-- 设置多个属性 -->

$('.box').css({
width: 100,
height: 100,
border: '1px solid blue'
})

<!-- 也可配合事件传入计算表达式 -->

$('.box').click(function () {
        $(this).css({
width: '-=100',
height: '-=100'
})
})

<!-- 单个属性也可以 -->

$('.box').click(function () {
        $(this).css('width', '+=100')
})
{% endcodeblock %}

<center><font color='#3333' size='3'>width()/height()</font></center>
<left><font color='#007ACC' size='3'>可获取  可设置</font></left>
{% codeblock  %}
console.log($('.box').css('width')); <!-- 500px  string -->
console.log($('.box').width()); <!-- 500   number -->
{% endcodeblock %}

<center><font color='#3333' size='3'>innerWidth()/innerHeight()</font></center>
<left><font color='#007ACC' size='3'>获取内部宽高  设置内部宽高(只会改变content区域的内容)</font></left>

{% codeblock  %}
.box {
width: 100px;
height: 100px;
padding: 10px;
margin: 20px;
border: 1px solid red;
}
</style>

</head>

<body>
    <div class="box">111</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('.box').innerWidth());/* 120   content+padding */
</script>
{% endcodeblock %}

<center><font color='#3333' size='3'>outWidth()/outHeight()</font></center>
<left><font color='#007ACC' size='3'>获取容器整体的宽高  设置容器整体的宽高(只会改变content区域的内容)</font></left>
{% codeblock  %}
console.log($('.box').outerWidth());//122   content+padding+border
<!-- 可传入boolean值  默认false -->
console.log($('.box').outerWidth(true));//162   content + padding + border + margin
{% endcodeblock %}

<center><font color='#3333' size='3'>offset()/position()</font></center>
{% blockquote %}
offset()相对于文档而言
position() 相对于最近的有定位的父级  如果都没有  就根据body计算
{% endblockquote %}
<left><font color='#007ACC' size='3'>获取</font></left>

{% codeblock  %}

<style>
      body {
            border: 1px solid gray;
        }
        .box {
            position: relative;
            width: 500px;
            height: 500px;
            padding: 10px;
            margin: 20px;
            border: 1px solid red;
        }

        .one {
            position: absolute;
            width: 100px;
            height: 100px;
            left: 50px;
            top: 50px;
            background: gray;
        }
    </style>

</head>

<body>
    <div class="box">
        <div class="one"></div>
    </div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('.one').offset()); /* {top: 71, left: 79} body默认的margin 8像素 + 最近父级的border + 最近父级的margin + 本身的定位  */
    console.log($('.one').position()); /* {top: 50, left: 50}  本身的定位 */
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>设置</font></left>
{% codeblock  %}
$('.one').offset({<!-- 设置是相对于文档而言 -->
        left: 100,
        top: 100
    })
    console.log($('.one').offset()); <!-- {top: 100, left: 100}  -->
console.log($('.one').position()); <!-- {top: 79, left: 71}  100-body默认margin-left 8像素-最近父级的border-最近父级的margin -->
{% endcodeblock %}

<center><font color='#3333' size='3'>scrollLeft()/scrollTop()</font></center>
{% blockquote %}
获取滚动条距离左侧 | 距离顶部的距离
{% endblockquote %}

## 四、DOM 的筛选遍历

{% blockquote %}
筛选
odd/even/ <font color='red'>first</font>/<font color='red'>last</font>/<font color='red'>eq</font>
<font color='red'>prev</font>/<font color='orange'>prevAll</font>/<font color='red'>next</font>/<font color='orange'>nextAll</font>/<font color='orange'>siblings</font>
<font color='red'>filter</font>/not/is/<font color='red'>slice</font>/<font color='red'>map</font>/<font color='red'>has</font>

查找
<font color='red'>children</font>/<font color='red'>find</font>/<font color='red'>end</font>/<font color='red'>add</font>/andBack
offsetParent/parent/parents/closest
{% endblockquote %}

##### 筛选

<left><font color='#007ACC' size='3'>Demo</font></left>
{% codeblock  %}

<style>
body,
ul,
li {
margin: 0;
padding: 0;
list-style-type: none;
}

        li {
            width: 300px;
            height: 100px;
            margin: 10px;
            border-radius: 10px;
            background: gray;
            font-size: 30px;
            text-align: center;
            line-height: 100px;
            color: #fff;

        }
    </style>

</head>

<body>
    <div></div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
{% endcodeblock %}

<center><font color='#3333' size='3'>odd / even / first / last / eq</font></center>
{% blockquote %}
first第一个  last最后一个
{% endblockquote %}
{% codeblock  %}
<script>
    console.log($('li:first').text()); /* 1 */
    console.log($('li:last').text()); /* 8 */
/* 可以写在外面 */
$('li').first()
$('li').last()
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>odd 索引值为基数的筛选</font></left>
{% codeblock  %}
console.log($('li:odd').text()); <!-- 2468 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>even 索引值为偶数的筛选出来</font></left>
{% codeblock  %}
console.log($('li:even').text()); <!-- 1357 -->
{% endcodeblock %}

<left><font color='red' size='3'>eq()具体选择的索引值</font></left>
{% codeblock  %}
console.log($('li:eq(3)').text()); <!-- 4 -->

<!-- 可以写在外面 -->

$('li').eq('1') <!-- 可传字符串    整数  负数 -->
{% endcodeblock %}

<center><font color='#3333' size='3'>prev / prev /All / next / nextAll / sibllings</font></center>
<left><font color='red' size='3'>prev找寻选中元素的上面的一个兄弟元素   next相反  同时可进行筛选</font></left>
{% codeblock  %}
console.log($('li:eq(4)').prev().text()); <!-- 4 -->
<!-- prev里面传入的值代表筛选条件 -->
console.log($('li:eq(4)').prev('p').text()); <!--  ' '   找寻索引为4的上面一个p标签（紧挨着）  不存在  返回空 -->
{% endcodeblock %}

<left><font color='orange' size='3'>prevAll 找寻选中元素的上面的所有兄弟元素 nextAll 相反</font></left>
{% codeblock  %}
console.log($('li:eq(4)').prevAll('p').text()); <!-- 4321  找寻索引为4的上面所有兄弟元素是否包含p标签 -->

<!-- 如果不设置基准条件   会默认把最后一个做基准条件    next相反  他会把第一个做基准条件 -->

console.log($('li').prevAll().text()); <!-- 7654321 -->
{% endcodeblock %}

<left><font color='orange' size='3'>sibllings 元素的所有兄弟元素</font></left>
{% codeblock  %}
console.log($('li:eq(4)').siblings().text()); <!-- 1234678 -->
{% endcodeblock %}

<center><font color='#3333' size='3'>filter / not / is / slice / map / hs / each</font></center>
<left><font color='red' size='3'>filter() 筛选  可以传入一个函数</font></left>
{% codeblock  %}
console.log($('li').filter(':even').text()); <!-- 1357     将索引值为偶数的筛选出来 -->
<!-- 传入函数 -->
 $('li').filter(function (index, ele) { <!-- index代表索引值 ，ele代表对应的标签 -->
        if (index % 2) {
            console.log($(this).text());<!-- 2468
        } -->
    })
{% endcodeblock %}
<left><font color='#007ACC' size='3'>not() 筛选  不包含传入的元素  标签的class类名  id 等都可以 只要能确定具体标签  可传入函数</font></left>
{% codeblock  %}
console.log($('li').not(':eq(3)').text());
{% endcodeblock %}

<left><font color='#007ACC' size='3'>is() 判断是否包含指定的值 结果返回 boolean</font></left>
{% codeblock  %}
console.log($('li').is(':eq(10)'));<!-- false -->
{% endcodeblock %}

<left><font color='red' size='3'>slice()截取筛选</font></left>
{% codeblock  %}
console.log($('li').slice(0, 4).text()); <!-- 1234   取头不取尾 -->
{% endcodeblock %}

##### 遍历

<left><font color='#007ACC' size='3'>Demo</font></left>
{% codeblock  %}

<body>
    <li>
        <span class="name">aaa</span>
        <span class="age">15</span>
    </li>
    <li>
        <span class="name">bbb</span>
        <span class="age">20</span>
    </li>
    <li>
        <span class="name">ccc</span>
        <span class="age">25</span>
    </li>
    <li>222
        <p>1111</p>
    </li>
</body>
<script src="./js/jquery-3.3.1.js"></script>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>each()只是用来遍历 不做任何处理  里面传入的是函数  返回的是原来的数组  </font></left>
{% codeblock  %}
 console.log($('li').each(function (index, ele) { <!-- index 索引值   ele标签元素 -->
        if ($(this).find('.age').text() > 20) {
            return this
        }
    }));
{% endcodeblock %}
{% asset_img 4.png %}
<left><font color='red' size='3'>map()不仅遍历 而且把  里面传入的是函数  返回的是一个新数组（满足条件的）</font></left>
{% codeblock  %}
console.log($('li').map(function (index, ele) { <!-- index 索引值   ele标签元素 -->
        if ($(this).find('.age').text() > 20) {
            return this
        }
    }));
{% endcodeblock %}

{% asset_img 5.png %}

<left><font color='red' size='3'>has() 找寻符合指定条件的元素</font></left>
{% codeblock  %}
console.log($('li').has('p').text()); <!-- 222     1111 -->
{% endcodeblock %}

<center><font color='#3333' size='3'>children / find / end / add / andBack</font></center>
<left><font color='#007ACC' size='3'>Demo</font></left>
{% codeblock  %}
<body>
    <div>
        <span class="name">zzzzz</span>
        <span class="age">11111</span>
    </div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
{% endcodeblock %}

<left><font color='red' size='3'>find(child)查找当前元素包含的子元素</font></left>
{% codeblock  %}
console.log($('div').find('.age'));

<!-- 注意  链式操作  查询完以后jq会把查询元素的元素给储存下来  可以通过prevObject返回开始查询元素的元素 -->

console.log($('div').find('.age').prevObject.find('.name'));
{% endcodeblock %}
{% asset_img 6.png %}
<left><font color='red' size='3'>children(selector) 找寻当前元素下的后代元素</font></left>
{% codeblock  %}
console.log($('li').children());
{% endcodeblock %}

{% asset_img 7.png %}

<left><font color='red' size='3'>end() 返回查询元素的元素 回退</font></left>
{% codeblock  %}
console.log($('div').find('.age').prevObject.find('.name'));

<!-- 其中prevObject可以用end()替换 -->

console.log($('div').find('.age').end().find('.name'));
{% endcodeblock %}

<left><font color='red' size='3'>add(selector | element | jquery object | html) 添加</font></left>
{% codeblock  %}
$('span:first').css('color', 'red')
$('span:last').css('color', 'red')

<!-- 可以写成 -->

$('span:first').add('span:last').css('color', 'red')
{% endcodeblock %}

<center><font color='#3333' size='3'>offsetParent / parent / parents / closest</font></center>
<left><font color='#007ACC' size='3'>Demo</font></left>
{% codeblock  %}
<body>
    <li>
        <div>
            <span></span>
        </div>
    </li>
    <li>
        <span></span>
    </li>
    <li>
        <p>
            <span></span>
        </p>
    </li>
</body>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>parent(selector)找寻当前元素的父级  里面可传入筛选条件</font></left>
{% codeblock  %}
console.log($('span').parent());
{% endcodeblock %}

{% asset_img 8.png %}

{% codeblock  %}
console.log($('span').parent('div'));
{% endcodeblock %}

{% asset_img 9.png %}

<left><font color='#007ACC' size='3'>parents(selector)寻找当前元素的所有祖先元素</font></left>
{% codeblock  %}
console.log($('span').parents());
{% endcodeblock %}

{% asset_img 10.png %}

{% codeblock  %}
console.log($('span').parents('p'));<!-- 传入条件代表找寻指定的父级元素 -->
{% endcodeblock %}

{% asset_img 11.png %}
<left><font color='#007ACC' size='3'>closest(selector | jQuery Object | element) 寻找离当前元素最近的 selector 元素 向外找 包括自身</font></left>
{% codeblock  %}
console.log($('p').closest('li'));
{% endcodeblock %}

{% asset_img 12.png %}
<left><font color='#007ACC' size='3'>offsetParent() 找寻离当前元素最近的有定位的父级</font></left>
{% codeblock  %}
console.log($('p').offsetParent());<!-- 父级都没有定位找到了html -->
{% endcodeblock %}

{% asset_img 13.png %}

## 五、DOM 操作：插入、替换、包裹和删除操作

{% blockquote %}
before()、insertBefore()、after()、insertAfter()
append()、appendTo()、prepend()、prependTo()
replaceAll()、replaceWith()
empoty()、remove()、detach()、clone()
wrap()、wrapAll()、wraplnner()、unwrap()
{% endblockquote %}

<center><font color='#3333' size='3'>插入</font></center>
<left><font color='#007ACC' size='3'>Demo</font></left>

{% codeblock  %}

<body>
    <h2>11</h2>
    <ul>
        <li></li>
    </ul>
    <div></div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
{% endcodeblock %}

<left><font color='red' size='3'>before() 在一个元素前面插入一个元素 after()相反 谁在前面结果执行完返回谁 兄弟元素</font></left>
{% codeblock  %}
$('li').before($('h2'));

<!-- 还可以传入原生 dom -->

$('li').before($(document.getElementsByTagName('h2')));

<!-- 还可以传入函数 -->

$('p').before(function (index, value) { <!-- index代表索引  value代表标签内容 -->
console.log(index); <!-- 0 1 -->
console.log(value); <!-- 1 o2 -->
});

<!-- 还可以添加新的dom元素 -->

$('p').before('<span>3333</span>');
{% endcodeblock %}

<left><font color='red' size='3'>insertBefore() 把一个元素插入一个元素前面 insertAfter()相反 谁在前面结果执行完返回谁 兄弟元素</font></left>
{% codeblock  %}
$('p').insertBefore($('li'));
{% endcodeblock %}

<left><font color='red' size='3'>append()在一个元素中最后一位插入一个元素 prepend()相反 插入到第一位 谁在前面结果执行完返回谁 父子元素</font></left>
{% codeblock  %}
$('ul').append($('<p>111</p>'));
{% endcodeblock %}

<left><font color='red' size='3'>appendto() 把一个元素插入到一个元素的最后一位 prependTo()相反 插入到第一位 谁在前面结果执行完返回谁 父子元素</font></left>
{% codeblock  %}
$('<p>111</p>').appendTo($('ul'));
{% endcodeblock %}

<center><font color='#3333' size='3'>替换</font></center>
<left><font color='#007ACC' size='3'>Demo</font></left>
{% codeblock  %}
<body>
    <ul>
        <li class="a">a</li>
        <li class="b">b</li>
        <li class="c">c</li>
    </ul>
    <div class="d">d</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>replaceAll() 当前元素挪动到另一个元素的位置上 并替换</font></left>
{% codeblock  %}
$('.d').replaceAll($('.c'))
{% endcodeblock %}

<left><font color='#007ACC' size='3'>replaceWith() 当前元素被另一个元素替换</font></left>
{% codeblock  %}
$('.c').replaceWith($('.d'))
{% endcodeblock %}

<center><font color='#3333' size='3'>删除</font></center>
<left><font color='red' size='3'>remove()  删除当前元素 只返回删除的对象</font></left>
{% codeblock  %}
$('.c').replaceWith($('.d'))
{% endcodeblock %}

<left><font color='red' size='3'>detach() 删除当前元素 返回删除的对象及事件</font></left>
{% codeblock  %}
$('.a').detach()
{% endcodeblock %}

<center><font color='#3333' size='3'>克隆操作</font></center>
<left><font color='red' size='3'>clone() 克隆一个元素  里面传入boolean值</font></left>
{% codeblock  %}
<!-- 里面不传入值得话  单纯的只克隆一个对象 -->
$('.a').clone()
<!-- 里面传入true  代表克隆当前对象及它的事件 -->
$('.a').clone(true)
{% endcodeblock %}

<center><font color='#3333' size='3'>包裹操作</font></center>
<left><font color='#007ACC' size='3'>wrap() 在当前元素外面包裹一层元素</font></left>    
{% codeblock  %}
 <!-- 元素在外面包裹一层 -->
$('.a').wrap('<div>')
<!-- 或者 -->
$('.a').wrap('<div></div>')
{% endcodeblock %}

<left><font color='#007ACC' size='3'>wrapAll()把当前元素类型整合在一起在外面集体包裹一层元素 会破坏原本的 dom 结构</font></left>

{% codeblock  %}
$('li').wrapAll('<div>')
{% endcodeblock %}

<left><font color='#007ACC' size='3'>wrapInner()在当前元素里面包裹一层元素</font></left>
{% codeblock  %}
$('.a').wrapInner('<div>')
{% endcodeblock %}

<left><font color='#007ACC' size='3'>unwrap()解除包裹 不能传入参数</font></left>
{% codeblock  %}
$('li').unwrap()
{% endcodeblock %}

## 六、api 动画

{% blockquote %}
hide()/show() 无动画效果 相当于 display:none /display:block
slideDown()/slideUp()/slideToggle() 有动画效果
fadeIn()/fadeOut()/fadeToggle()/fadeTo()
animate()/stop()
{% endblockquote %}

<center><font color='#3333' size='3'>show()/hide()   无动画效果</font></center>
{% codeblock  %}
<!-- 显示 -->
 $('.btn').click(function () {
        $('ul').show();
    })
<!-- 隐藏 -->
    $('.login').click(function () {
        $('ul').hide()
 })

{% endcodeblock %}

<center><font color='#3333' size='3'>slideDown()/slideUp()    上隐下现</font></center>
<left><font color='#007ACC' size='3'>slideDown()    当元素display：none的时候  向下显示出来  有过度的动画</font></left>
{% codeblock  %}
 $('.btn').click(function () {
        $('ul').slideDown();
    })
{% endcodeblock %}

<left><font color='#007ACC' size='3'>slideUp() 当元素 display:block 的时候 向上隐藏 有过度动画</font></left>
{% codeblock  %}
$('.login').click(function () {
        $('ul').slideUp()
})
{% endcodeblock %}
{% blockquote %}
综合
{% endblockquote %}

<left><font color='#007ACC' size='3'>slideToggle() 切换显示和隐藏 动画效果和 slideDown slideUp 一样 里面接收时间参数 毫秒数</font></left>
{% codeblock  %}
$('.dd').click(function () {
        $('ul').slideToggle(1000)<!-- 相当于动画切换时间为 1 秒 -->
})

<!-- 还可以传入一个函数 -->

$('.dd').click(function () {
        $('ul').slideToggle(1000,function(){ <!-- 动画结束的时候执行 -->
console.log('结束')
})
})
{% endcodeblock %}

<center><font color='#3333' size='3'>fadeIn()/fadeOut()  淡入淡出</font></center>
<left><font color='#007ACC' size='3'>fadeIn() 显示   当前元素先display:block  然后内容的透明度从0-1显示出来</font></left>
{% codeblock  %}
$('div').on('click', '.btn', function () {
        $('ul').fadeIn(5000)
    })
{% endcodeblock %}
<left><font color='#007ACC' size='3'>fadeOut() 隐藏      内容的透明度从1-0  然后当前元素display:none</font></left>
{% codeblock  %}
$('div').on('click', '.login', function () {
        $('ul').fadeOut(5000)
    })
{% endcodeblock %}

{% blockquote %}
综合
{% endblockquote %}

<left><font color='#007ACC' size='3'>fadeToggle() 上述结果的切换效果</font></left>

{% codeblock  %}
$('.dd').click(function () {
        $('ul').fadeToggle()
})
{% endcodeblock %}

<left><font color='#007ACC' size='3'>fadeTo() 使用淡出效果来隐藏一个 DOM 元素：</font></left>
{% codeblock  %}
$(".btn1").click(function(){
  $("p").fadeTo(1000,0.4);
});
{% endcodeblock %}

## 七、自定义动画

<center><font color='#3333' size='3'>animate</font></center>
<left><font color='#007ACC' size='3'>animate({元素属性}，动画时间，动画曲线（字符串包裹），回调函数（动画完成之后执行的方法）)  执行完以后停留在最后一帧</font></left>

{% codeblock  %}
$('div').click(function () {
        $(this).animate({
width: 200,
height: 200,
opacity: 1,
left: 500,
top: 500
}, 3000, 'linear', function () {
console.log('执行结束');
})
})
{% endcodeblock %}

{% blockquote %}
由于 jQuery 的 animate 支持的动画曲线很少 我们可以引用 jQuery 的插件库 easing.js 来进行设置动画曲线 用法
{% endblockquote %}

{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script src="https://cdn.bootcss.com/jquery-easing/1.4.1/jquery.easing.min.js"></script><!-- 引入插件库 -->
<script>
    $('div').click(function () {
        $(this).animate({
            width: 200,
            height: 200,
            opacity: 1,
            left: 500,
            top: 500
        }, 3000, 'linear', function () {
            console.log('执行结束');
        })
    })
</script>

{% endcodeblock %}
{% asset_img 14.png %}
{% blockquote %}
只需要把对应的名字输入到动画曲线的位置即可 记得用字符串包裹
{% endblockquote %}
{% blockquote 教程 https://www.runoob.com/jqueryui/api-easings.html 动画曲线 %}
{% endblockquote %}
{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script src="https://cdn.bootcss.com/jquery-easing/1.4.1/jquery.easing.min.js"></script>
<script>
    $('div').click(function () {
        $(this).animate({
            width: 200,
            height: 200,
            opacity: 1,
            left: 500,
            top: 500
        }, 3000, 'easeInOutBounce', function () {
            console.log('执行结束');
        })
    })
</script>

{% endcodeblock %}
{% blockquote %}
一个元素可以添加多个动画 执行顺序按照队列执行
{% endblockquote %}

{% codeblock  %}

<!-- 第一种链式添加  (推荐) -->

$('div').click(function () {
        $(this)
.animate({
left: 500,
top: 500
}, 3000, 'easeInOutBounce', function () {
console.log('执行结束 1');
})
.animate({
left: 200,
top: 300
}, 3000, 'easeOutBounce', function () {
console.log('执行结束 2');
})
})

<!-- 第二种分开添加 -->

$('div').click(function () {
        $(this).animate({
left: 500,
top: 500
}, 3000, 'easeInOutBounce', function () {
console.log('执行结束 1');
})
$(this).animate({
left: 200,
top: 300
}, 3000, 'easeOutBounce', function () {
console.log('执行结束 2');
})
})

<!-- 第三种  回调函数中添加  不推荐 -->

$('div').click(function () {
        $(this).animate({
left: 500,
top: 500
}, 3000, 'easeInOutBounce', function () {
console.log('执行结束 1');
$(this).animate({
left: 200,
top: 300
}, 3000, 'easeOutBounce', function () {
console.log('执行结束 2');
})
})

    })

{% endcodeblock %}

<center><font color='#3333' size='3'>stop</font></center>
{% blockquote %}
stop(boolean,boolean)   
第一个布尔值  是否取消动画队列  true代表停止后续的所有动画  false代表停止当前动画执行下一个动画
第二个布尔值     当前动画是否立即完成  true代表立即完成当前动画  false代表不完成当前动画(完成到哪里停止在哪里)
{% endblockquote %}

## 八、事件高级使用及事件委托

{% blockquote %}
on()/off()/trigger()/one()
{% endblockquote %}

<center><font color='#3333' size='3'>on()</font></center>
<left><font color='#007ACC' size='3'>用来绑定事件  一般用于事件委托</font></left>
{% codeblock  %}
<!-- 比如说我们绑定一个点击事件  可以直接绑定 -->
 $('.item').click(function () {
        console.log(1);
    })
<!-- 还可以用on绑定 -->
$('.item').on('click', function () {
        console.log(1);
    })
{% endcodeblock %}

{% blockquote %}
好处
{% endblockquote %}
{% codeblock  %}

<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <button class="btn">add</button>
{% endcodeblock %}
{% blockquote %}
我们给li添加一个点击事件
{% endblockquote %}

{% codeblock  %}
$('li').on('click', function () {
        console.log($(this).text());
})

<!-- 点击 btn 按钮新增 li 元素 -->

$('.btn').click(function () {
        $('ul').append('<li>' + parseInt($('li').length + 1) + '</li>')
})

<!-- 添加多个事件中间用空格隔开 -->

$('li').on('click mousemove', function () {
console.log($(this).text());
})
{% endcodeblock %}

{% blockquote %}
我们会发现后面新增的 li 没有触发点击事件
因为文档的加载顺序 新增之前 给原来的 li 已经绑定好了点击事件 后面新增的 li 是点击事件结束以后才添加的 所以没有触发
解决方法 事件委托（利用事件冒泡的方法） 给 ul 添加点击事件
{% endblockquote %}

{% codeblock  %}
$('ul').on('click', 'li', function () { <!-- 第一个参数是事件类型，第二个参数是发起委托的元素，第三个是具体方法 -->
        console.log($(this).text());
})
$('.btn').click(function () {
        $('ul').append('<li>' + parseInt($('li').length + 1) + '</li>')
})

<!-- on里面还可以添加参数 -->

$('ul').on('click', 'li', {name: 'kk'}, function (e) { <!-- 里面传入的对象是存在event对象中的data下面 -->
console.log($(this).text());
console.log(e.data); <!-- {name: "kk"} -->
})
{% endcodeblock %}
{% asset_img 15.png %}

<center><font color='#3333' size='3'>off()</font></center>
<left><font color='#007ACC' size='3'>解除绑定的事件</font></left>
{% codeblock  %}
$('.btn').off('click')
<!-- 多个事件中间用空格隔开 -->
 $('li').off('click mousemove')
{% endcodeblock %}

<left><font color='#007ACC' size='3'>当你一个事件绑定多个函数的时候</font></left>
{% codeblock  %}
$('.btn').click(function () {
        console.log(1);
    })
$('.btn').click(function () {
console.log(2);
})

<!-- 如果你只想取消其中一个 下面写法是错误的 里面传入的是一个新的函数 你必须要传入一个索引才能找到对应的 -->

$('.btn').off('click', function () {
console.log(1);
})

<!-- 改写绑定方法的方式 -->

$('.btn').on('click', add);
$('.btn').click(text);

    function add() {
        console.log(1);
    }

    function text() {
        console.log(2);
    }
    $('.btn').off('click', text)

{% endcodeblock %}

<left><font color='#007ACC' size='3'>如果只想让方法执行一次 可以用 one 来绑定事件</font></left>
{% codeblock  %}
$('.btn').one('click', add);
    $('.btn').click(text);

    function add() {
        console.log(1);
    }

    function text() {
        console.log(2);
    }

{% endcodeblock %}

<center><font color='#3333' size='3'>trigger()</font></center>
<left><font color='#007ACC' size='3'>自动触发事件</font></left>
{% codeblock  %}
<!-- 自动执行一次 -->
   $('p').click(function () {
        $(this).text('22222')
    })
    $('button').click(function () {
        $('p').trigger('click') <!-- 里面传入需要触发的事件类型 -->
    })
<!-- 点击的时候传入参数 -->
$('p').click(function (e, a, b) {
        var a = a == undefined ? 1 : a;
        var b = b == undefined ? 2 : b
        $(this).text('22222');
        console.log(a);
        console.log(b);
    })
    $('button').click(function () {
        <!-- 可以向需要触发的方法传入参数 -->
        $('p').trigger('click', [10, 20])
    })
{% endcodeblock %}

<left><font color='#007ACC' size='3'>结合 on 使用 on 可以添加自定义事件</font></left>
{% codeblock  %}
$('p').on('color', function (e, a) { <!-- 第一个参数是event  如果只传入一个参数  默认是event  所以我们要先把event传进去 -->
        var a = a == undefined ? 'gray' : a;
        $(this).css('color', a)
})
$('p').on('fontSize', function (e, a) {
        var a = a == undefined ? 30 : a
        $(this).css('font-size', a)
})
$('.btn').click(function () {
        $('p').trigger('color', 'red');
})
$('.login').click(function () {
        $('p').trigger('fontSize', 50)
})

<!-- 原生自定义事件触发 -->

Event() 构造函数, 创建一个新的事件对象 Event。
dispatchEvent 是分发事件
p.addEventListener('color', function () {
p.style.color = 'red'
})
p.addEventListener('fontSize', function () {
p.style.fontSize = 30 + 'px'
})
btn.onclick = function () {
var eve = new Event('color');
p.dispatchEvent(eve)
}
login.onclick = function () {
var eve = new Event('fontSize');
p.dispatchEvent(eve)
}
{% endcodeblock %}

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 九、常用工具方法

{% blockquote %}
$.type()
$.trim()
$.makeArray()/$.inArray()/$.each()
$.noConflict()
$.data()
{% endblockquote %}
{% blockquote %}
之前我们所用的方法称之为实例方法也就是对象原型上的方法 意思是只有选择完 dom 元素之后才能使用 ；
工具方法在 jquery 当中属于底层的方法 工具方法为实例方法提供了底层的搭建 先有工具方法 工具方法为实例方法实现的时候提供了一些功能
{% endblockquote %}

{% codeblock  %}
$('div').each是基于$.each() 来写的
{% endcodeblock %}

{% blockquote %}
比如
{% endblockquote %}

#### 实例方法

{% codeblock  %}
$('div').text();
    $('div').animate();
$('div').click();
    $('div').css();
$('div')转化为 jquery 对象 是实例  
后面的方法都是操作实例的
{% endcodeblock %}

#### 工具方法

{% blockquote %}
称之为函数方法
比如
{% endblockquote %}
{% codeblock  %}
function dd() {

    }
    dd.a = function () {
        console.log('a');
    }
    dd.a();<!-- a -->

{% endcodeblock %}

<left><font color='#007ACC' size='3'>$.type()是定义在 jQuery 函数上的方法</font></left>
{% codeblock  %}
function jQuery(){

}
window.jQuery = window.$ = jQuery
jQuery.type=function(){
        
    }
$.type()
{% endcodeblock %}

<center><font color='#3333' size='3'>$.type()</font></center>
<left><font color='#007ACC' size='3'>$.type() 用于判断数据的类型</font></left>
{% codeblock  %}
<!-- 和Object.prototype.toString.call()方法一样  能准确的判断数据类型 只不过返回的结果不一样 -->
 var arr = ['1', '2', '3'];
    var obj = {
        a: 'zz'
    };
    var str = 'dfdff';
    var a = null;
    var b = undefined;
    var c = true;

    console.log(Object.prototype.toString.call(arr)); <!-- [object Array] -->
    console.log($.type(arr)); <!-- array -->

    console.log(Object.prototype.toString.call(str)); <!-- [object String] -->
    console.log($.type(str)); <!-- string -->

    console.log(Object.prototype.toString.call(obj)); <!-- [object Object] -->
    console.log($.type(obj)); <!-- object -->

    console.log(Object.prototype.toString.call(a)); <!-- [object Null] -->
    console.log($.type(a)); <!-- null -->

    console.log(Object.prototype.toString.call(b)); <!-- [object Undefined] -->
    console.log($.type(b)); <!-- undefined -->

    console.log(Object.prototype.toString.call(c)); <!-- [object Boolean] -->
    console.log($.type(c)); <!-- boolean -->

{% endcodeblock %}

<center><font color='#3333' size='3'>$.trim()</font></center>
<left><font color='#007ACC' size='3'>$.trim()  去除字符串两边的空格  中间的去不掉 </font></left>
{% codeblock  %}
var a = ' sdfsdfsdf sddfsdf ';
    console.log(a.length); <!-- 19 -->
    var b = $.trim(a);
    console.log(b.length); <!-- 17 -->
{% endcodeblock %}

<center><font color='#3333' size='3'>$.makeArray() | $.inArray() | $.each() | $.merge()</font></center>
<left><font color='#007ACC' size='3'>$.makeArray() 把类数组转换成数组</font></left>
{% codeblock  %}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('li')); /* jQuery.fn.init(5) [li, li, li, li, li, prevObject: jQuery.fn.init(1)] */
    console.log($.makeArray($('li'))); /* (5) [li, li, li, li, li] */
</script>
{% endcodeblock %}

<left><font color='#007ACC' size='3'>$.inArray(元素，数组，查找起始位置(不传默认 0)) 检测当前数组是否包含指定元素 存在返回元素的索引 不存在返回-1</font></left>
{% codeblock  %}
var arr = ['1', '2', '3'];
var a = $.inArray('3', arr);
    console.log(a); <!-- 2 -->
    var b = $.inArray('4', arr);
console.log(b); <!-- -1 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>$.each(数据，回调函数)循环遍历 一般用于处理数据</font></left>
{% codeblock  Demo%}

<!-- 比如我想把data的数据插入到box当中 -->
<body>
    <div class="box"></div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    var data = [{
        name: 'a',
        age: 18
    }, {
        name: 'b',
        age: 20
    }, {
        name: 'c',
        age: 22
    }, {
        name: 'd',
        age: 24
    }, {
        name: 'e',
        age: 26
    }]
</script>
{% endcodeblock %}
{% codeblock  %}
 $.each(data, function (index, ele) {<!-- index代表每条数据的索引 ele代表每条数据的值也就是每个对象 -->
        <!-- 这里的this 指向ele -->
        console.log(this); //{name: "a", age: 18}
        str += '<p>' + ele.name + ',' + ele.age + '</p>'
    })
    $('.box').append(str)
{% endcodeblock %}

{% asset_img 16.png%}
{% blockquote %}
还可以遍历对象
{% endblockquote %}

{% codeblock  %}

<!-- 比如我想把data的数据插入到box当中 -->
<body>
    <div class="box"></div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
     var data = {
        a: 18,
        b: 20,
        c: 22,
        d: 24
    }
    var str = '';
    $.each(data, function (key, value) {
        /* 这里的this 指向value */
        console.log(this);
        str += '<p>' + key + ',' + value + '</p>'
    })
    $('.box').append(str)
</script>
{% endcodeblock %}
{% asset_img 17.png%}
{% asset_img 18.png%}

{% blockquote %}
这里再说一下实例方法$(dom).each()
{% endblockquote %}

{% codeblock  %}

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    $('li').each(function () {
        console.log(this);/* 遍历的是每个li */
    })
</script>
{% endcodeblock %}

{% asset_img 19.png%}

<left><font color='#007ACC' size='3'>$.merge(第一个数组，第二个数组) 合并数组或者类数组 默认把第二个数组合并到第一个数组中 会改变第一个数组</font></left>
{% codeblock  %}

   <!-- 合并数组 -->

    var arr1 = ['a', 'b', 'c'];
    var arr2 = ['1', '2', '3'];
    console.log($.merge(arr1, arr2)); //(6) ["a", "b", "c", "1", "2", "3"]
    console.log(arr1); //(6) ["a", "b", "c", "1", "2", "3"]

<!-- 合并类数组 -->

        var obj1 = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    }
    var obj2 = {
        0: 'd',
        1: 'e',
        2: 'f',
        length: 3
    }
    console.log($.merge(obj1, obj2)); <!-- {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", length: 6} -->
    console.log(obj1); <!-- {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", length: 6} -->

<!-- 混合使用   返回的类型看谁在前面 -->

    <!-- 数组在前面 -->
    var arr1 = ['a', 'b', 'c'];
    var obj1 = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    }
    console.log($.merge(arr1, obj1)); <!-- (6) ["a", "b", "c", "a", "b", "c"] -->
    console.log(arr1); <!-- (6) ["a", "b", "c", "a", "b", "c"] -->
    <!-- 类数组在前面 -->
    var arr1 = ['a', 'b', 'c'];
    var obj1 = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    }
    console.log($.merge(obj1, arr1)); <!-- {0: "a", 1: "b", 2: "c", 3: "a", 4: "b", 5: "c", length: 6} -->
    console.log(obj1); <!-- {0: "a", 1: "b", 2: "c", 3: "a", 4: "b", 5: "c", length: 6} -->

{% endcodeblock %}

#### $.noConflict()

<left><font color='#007ACC' size='3'>防止冲突 $符号不止jQuery使用  也有很多类库使用  这样我们在引入过个库的时候如果有$符号冲突了 可以使用这个方法是 jQuery 交出$符号的权限  意味着$不再对 jQuery 起作用</font></left>
{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script>
    /* 注意 */
    var a = $;/* 这样不代表移交权限   只是把使用权限赋值给了a   $照样可以使用 */

    $.noConflict(); /* 这样才是移交权限 */
    console.log($('.box'));

</script>

{% endcodeblock %}
{% asset_img 20.png%}

<left><font color='#007ACC' size='3'>移交出去以后可以使用 jQuery 操作符号来使用 jQuery 类库</font></left>

{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script>
    $.noConflict();
    /* 移交出去以后可以使用jQuery */
    console.log(jQuery('.box'));
</script>

{% endcodeblock %}
{% asset_img 21.png%}

{% blockquote %}
注意 $.noConflict() 接收一个参数 boolean 值 true false 默认 false
true 代表连 jQuery 操作符号的权限也提交出去
{% endblockquote %}

{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script>
    $.noConflict(true);
    console.log(jQuery('.box'));
</script>

{% endcodeblock %}

{% asset_img 22.png%}
{% blockquote %}
这个时候我们可以声明一个变量来接替权限
{% endblockquote %}

{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script>
    var a = $.noConflict(true);
    console.log(a('.box'));
</script>

{% endcodeblock %}

{% asset_img 23.png%}

{% blockquote %}
注意 jQuery 在更新迭代的时候会剔除掉一些老的兼容性方法 比如 最新的 jQuery3.3.1 的就把兼容 IE6 的很多方法给剔除了 如果项目要求必须兼容 IE6 那我们可以使用 jQuery1.2 左右的版本 但是这些版本没有 jQuery 新版本的一些新方法 如果我们想要两者兼顾的话 需要引入两个 jQuery 当我们引入两个 jQuery 就会产生冲突 这时候我们就可以使用$.noConflict() 进行移交
步骤
{% endblockquote %}

{% codeblock  %}

<script src="./js/jquery-3.3.1.js"></script>
<script src='./js/jquery-1.2.3.js'></script>
<script>
      var a = $.noConflict(true);
    console.log(a.prototype.jquery); /* 1.2.3   通过这个方法我们可以知道我们移交的哪个jquery版本的权限 */

    /* 打印一下jquery3.3.1版本获取的dom */
    console.log($('.box')); /* jQuery.fn.init [div.box, prevObject: jQuery.fn.init(1)] */

    /* 打印一下jquery1.2.3版本获取的dom */
    console.log(a('.box')); /* init {0: div.box, length: 1, prevObject: init} */
</script>

{% endcodeblock %}

#### $.data()

<left><font color='#007ACC' size='3'>用来获取 dom 元素存储的数据</font></left>
{% codeblock  %}

<body>
    <div class="box" data-name="zzk" data-age='18'>11</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
  /* 原生获取 */
    var box = document.getElementsByClassName('box')[0];
    var data = box.dataset;
    console.log(data.name); /* zzk */

    <!-- jQuery实例方法 -->
    <!-- 获取 -->
    var a = $('.box').data('age');
    console.log(a); //18
    <!-- 设置 -->
    $('.box').data('sex', '男');
    var b = $('.box').data('sex');
    console.log(b); <!-- 男 -->

    <!-- jQuery工具方法 -->
    <!-- 单个设置 -->
    var box = $('.box');
    $.data(box, 'love', 'song');
    <!-- 单个获取 -->
    var c = $.data(box, 'love');
    console.log(c); //song
    <!-- 多个设置 -->
    $.data(box, {
        aa: 10,
        bb: 'haha'
    })
    <!-- 多个获取 -->
    console.log($.data(box)); <!-- {love: "song", aa: 10, bb: "haha"} -->

</script>
{% endcodeblock %}

## 十、高级方法 extend

{% blockquote %}
$.extend()/$.fn.extend()
jQuery 在实现一些方法的时候都是上面的方法帮助其实现的 如果我们要实现自己的 jQuery 插件就要使用上面的方法
{% endblockquote %}

#### $.extend()

<left><font color='#007ACC' size='3'>作用一 用来合并对象 谁在前面 合并到谁身上 改变原对象 第一个参数是 boolean 值 不传默认是 false 代表浅拷贝 新的对象只是复制了合并对象数据的引用地址 传入 true 代表深拷贝 表示拿到合并对象的真实数据 而不再是地址</font></left>

{% codeblock  %}
var obj1 = {
a: {
name: 'aaaa',
age: 8888
},
b: {
name: 'bbbb',
age: 9999
}
}
var obj2 = {
c: {
name: 'cccc',
age: 7777
},
d: {
name: 'dddd',
age: 6666
}
}
console.log($.extend(obj1, obj2)); //{a: {…}, b: {…}, c: {…}, d: {…}}
console.log(obj1); //{a: {…}, b: {…}, c: {…}, d: {…}}
console.log(obj2); //{c: {…}, d: {…}}

<!-- 如果想合并两个对象的内容   还不想改变原来的对象  我们可以声明一个空的对象来接收 -->

     var obj = {};
    $.extend(obj, obj1, obj2);
    <!-- 新的对象 -->
    console.log(obj); <!-- {a: {…}, b: {…}, c: {…}, d: {…}} -->
    <!-- 原来的obj1 -->
    console.log(obj1); <!-- {a: {…}, b: {…}} -->
    <!-- 原来的obj2 -->
    console.log(obj2); <!-- {c: {…}, d: {…}} -->

<!-- 测试obj是浅拷贝还是深拷贝 -->

    <!-- 先打印一下obj对象中d对象的属性值 -->
    console.log(obj.d.age); <!-- 6666 -->

    <!-- 改变一下obj2对象中的d对象的属性值 -->
    obj2.d.age = 10000;

    <!-- 再打印一下obj对象中d对象的属性值 -->
    console.log(obj.d.age); <!-- 10000   改变了   发现是浅拷贝  新对象复制的只是合并对象的索引 -->

<!-- 深拷贝 传入true试一下 -->

$.extend(true,obj, obj1, obj2);
$.extend(true, obj, obj1, obj2);

<!-- 先打印一下obj对象中d对象的属性值 -->

console.log(obj.d.age); <!-- 6666 -->

    <!-- 改变一下obj2对象中的d对象的属性值 -->
    obj2.d.age = 10000;

    <!-- 再打印一下obj对象中d对象的属性值 -->
    console.log(obj.d.age); <!-- 6666   没有改变  深拷贝   复制的是合并对象的数据  而不再是引用地址 -->

{% endcodeblock %}

<left><font color='#007ACC' size='3'>作用二 拓展方法 拓展的方法定义在 jQuery 函数上 变成了工具方法</font></left>
{% codeblock  %}
/<!-- 上面介绍的是$.extend()里面传入的是多个参数   如果我们只传一个的话   他会把传入的数据合并到$上也就是 jQuery 的方法上 -->

<!-- 比如 -->

var obj1 = {
a: {
name: 'aaaa',
age: 8888
},
b: {
name: 'bbbb',
age: 9999
},
c: function () {
console.log('我是方法');
}
}

    $.extend(obj1);

  <!--   实际上就就是
     $.a = {
         name: 'aaaa',
         age: 8888
     }
     $.b = {
         name: 'bbbb',
         age: 9999
     }
     $.c = function(){
         console.log('我是方法');
     } -->

    console.log($.a); <!-- {name: "aaaa", age: 8888} -->
    console.log($.b); <!-- {name: "bbbb", age: 9999} -->
    $.c(); <!-- 我是方法     发现  $.c() 和$.trim() 一样  都变成的工具方法 -->

<!-- 拓展一个求最大值最小值的方法 -->

$.extend({
        max: function (arr) {
            var max = arr[0];
            for (var i = 1; i < arr.length; i++) {
                max = arr[i] > max ? max = arr[i] : max
            }
            return max
        },
        min: function (arr) {
            var min = arr[0];
            for (var i = 1; i < arr.length; i++) {
                min = arr[i] < min ? min = arr[i] : min
            }
            return min
        },
       sum: function (arr) {
            var b = 0;
            for (var i = 0; i < arr.length; i++) {
                b += arr[i]
            }
            return b
        }
    })
    var arr = [1, 2, 3, 4, 5, 6, 85, 0, 546984, 8489, 65446984, 35146];
    console.log($.max(arr));<!-- 65446984 -->
console.log($.min(arr));<!-- 0 -->
{% endcodeblock %}

#### $.fn.extend()

{% codeblock  %}
$.fn.extend 相当于 $.prototype.extend <!-- prototype原型 -->
console.log($.fn.extend = $.prototype.extend);<!-- true -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>作用一 合并对象</font></left>
{% codeblock  %}

<!-- 和$.extend()一样 -->

{% endcodeblock %}

<left><font color='#007ACC' size='3'>作用二 拓展方法 方法定义在 jQuery 的原型上面 变成了实例方法</font></left>
{% codeblock  %}

<body>
    <div></div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    var obj1 = {
        dd: function () {
            console.log('我是实例方法');
        }
    }
    $.fn.extend(obj1);
    //测试  实例方法使用
    $('div').dd(); //我是实例方法
    //测试   工具方法使用
    $.dd(); // Uncaught TypeError: $.dd is not a function   由此可见方法是定义在$的原型上面  是实例方法

<!-- 定义一个闪烁的方法 -->

var obj1 = {
dd: function () {
this.fadeOut().fadeIn();

<!-- 使用完方法记得返回 dom 对象 方便链式调用 -->

return this
},
du: function () {
this.slideUp(500).slideDown(500);

<!-- 使用完方法记得返回 dom 对象 方便链式调用 -->

return this;
}
}
$.fn.extend(obj1);
    <!-- 测试  实例方法使用 -->
    $('div').mouseenter(function () {
$(this).dd();
})
</script>
{% endcodeblock %}

## 十一、高级方法 Callbacks/deferred/ajax

{% blockquote %}
$.Callbacks()
$.Deferred()
$.ajax()
{% endblockquote %}

#### $.Callbacks()

<left><font color='#007ACC' size='3'>作用一 $.Callbacks()用来处理多个回调 方便管理回调函数用的 </font></left>

{% codeblock  %}

<body>
    <div class="box">王者荣耀</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
<script>
    function login() {
        console.log('正在登陆');
    }

    function turn() {
        console.log('登陆成功，进入游戏');
    }

    function start() {
        console.log('点击开始游戏');
    }

<!-- 创建一个回调队列对象 -->

var game = $.Callbacks();

<!-- 给回调对象添加方法 -->

    game.add(login, turn, start);
    $('.box').click(function () {

<!-- fire() 表示触发 点击 box 触发 game 的所有方法 -->

game.fire()
})
{% endcodeblock %}
{% asset_img 24.png%}
{% blockquote %}
还可以解决作用域的问题
{% endblockquote %}
{% codeblock  %}

<!-- 我们把所有方法定义在一个函数中 -->

function mm() {
function login() {
console.log('正在登陆');
}

        function turn() {
            console.log('登陆成功，进入游戏');
        }

        function start() {
            console.log('点击开始游戏');
        }
    }
    mm();<!-- 执行mm 只是把它的里面的方法激活了   在全局下是访问不了的  只能在mm里面执行 -->
    login();

{% endcodeblock %}
{% asset_img 25.png%}
<left><font color='#007ACC' size='3'> 通过$.Callbacks 我们可以在任何作用域下访问</font></left>
{% codeblock  %}
var game = $.Callbacks();

    function mm() {
        function login() {
            console.log('正在登陆');
        }

        function turn() {
            console.log('登陆成功，进入游戏');
        }

        function start() {
            console.log('点击开始游戏');
        }
        game.add(login, turn, start);
        <!-- 也可以用数组的形式进行添加 -->
         game.add([login, turn, start]);
    }
    mm();<!-- 先把mm中的方法激活 -->
    game.fire();<!-- 然后触发 -->

{% endcodeblock %}

{% asset_img 26.png%}
<left><font color='#007ACC' size='3'>作用二 观察者模式 就是一对多的依赖关系</font></left>
{% codeblock  %}

<!-- 比如上面的例子 -->
<!-- 只要你关注了game     game通过fire()发布  你就能够得到信息 -->

$('.box').click(function () { <!-- box点击的时候  game就会触发  你也可以写多个例子  只要你的方法中包含game.fire()你就能触发它的方法   game只有一个    执行它的人可以有多个 -->
game.fire()
})
{% endcodeblock %}

{% asset_img 27.png%}

<left><font color='#007ACC' size='3'>$.Callbacks 实现观察者模式解析</font></left>
{% codeblock  %}

 <!-- 首先  它得有一个add   用来添加执行回调的方法  它存的方法是一个数组的集合  通过forEach循环进行执行 -->
 <!-- 其次  它得有一个fire   用来触发回调方法 -->

var cb = {
callbacks: [],
add: function (fn) {
this.callbacks.push(fn)
},
fire: function (fn) {
this.callbacks.forEach(function (fn) {
fn()
})
}
}
cb.add(function a() {
console.log('1111');
});
cb.add(function b() {
console.log('2222');
})
cb.fire()
{% endcodeblock %}
{% blockquote %}
$.Callbacks()接收四个固定参数 是字符串形式的
{% endblockquote %}

<left><font color='#007ACC' size='3'>once 代表只能触发一次 也就是 fire 一次</font></left>
{% codeblock  %}
var cb = $.Callbacks()

    function a() {
        console.log('1111');
    };

    function b() {
        console.log('2222');
    }
    cb.add(a);
    cb.fire();<!-- 1111 -->
    cb.fire();<!-- 1111 -->
    cb.fire()<!-- 1111 -->

<!-- 我们填个once   -->

var cb = $.Callbacks('once')
cb.add(a);
cb.fire(); <!-- 1111    发现只有第一个被触发了   后面的都没有被触发 -->
cb.fire();
cb.fire()

<!-- 实现原理   首先先判断有没有传入once  如果  传入了  会在第一次触发后  把数组集合（存放方法的数组）清空   后面再触发就是null因为forEach遍历的集合为空了 -->

{% endcodeblock %}

<left><font color='#007ACC' size='3'>memory 表示只要你前面触发过一次（执行过一次 fire()了） 后面再添加方法会自动触发 </font></left>

{% codeblock  %}
var cb = $.Callbacks('memory')
cb.add(a);
cb.fire(); <!-- 1111 -->
cb.add(b) <!-- 222 -->

<!-- 实现原理   首先判断是否传入memory  其次判断是否触发一次fire()了  如果都满足  下载添加的方法直接执行 -->

{% endcodeblock %}

<left><font color='#007ACC' size='3'>unique 相同的方法只能存在一次</font></left>
{% codeblock  %}
var cb = $.Callbacks()
cb.add(a);
cb.add(a);
cb.add(a);
cb.fire(); <!-- 触发了三次 1111 -->

<!-- 当我们传入unnique -->

var cb = $.Callbacks('unique')
cb.add(a);
cb.add(a);
cb.add(a);
cb.fire(); <!-- 1111   只触发了一次 -->

<!-- 实现原理   先判断是否传入unique  在判断传入的方法在数组中是否存在  如果存在就去除   如果不存在就添加  -->

{% endcodeblock %}

<left><font color='#007ACC' size='3'>stopOnFalse 在 false 的地方停止触发 结合 return false 使用 注意 单独使用没有效果</font></left>

{% codeblock  %}
function a() {
console.log('1111');
return false;
};

    function b() {
        console.log('2222');
    }
    var cb = $.Callbacks('stopOnFalse')
    cb.add(a, b);

    cb.fire(); <!-- 1111   只触发了1111 -->

<!-- 注意 如果没有 return false 或者 没有 stopOnFalse 都会往后触发添加的方法 -->
<!-- 没有 return false 只有 stopOnFalse -->

function a() {
console.log('1111');

 <!-- return false; -->

};

    function b() {
        console.log('2222');
    }
    var cb = $.Callbacks('stopOnFalse')
    cb.add(a, b);

    cb.fire(); <!-- 1111   2222 -->

<!-- 只有 return false 没有 stopOnFalse -->

function a() {
console.log('1111');
return false;
};

    function b() {
        console.log('2222');
    }
    var cb = $.Callbacks()
    cb.add(a, b);

    cb.fire(); <!-- 1111   2222 -->

{% endcodeblock %}

#### $.Deferred()

{% blockquote %}
请求数据的异步操作 发送请求的同时 用户还能执行其他的操作
延迟对象
{% endblockquote %}

{% codeblock  %}

<!-- 创建一个延迟对象 -->

var dt = $.Deferred();

<!-- 创建出来的延迟对象是没有状态的 一般请求数据会有三个状态 请求成功 resolve 请求失败 reject 请求过程 -->中 notify
<!-- 我们要手动改变 同一个请求拿到数据就变成 resolve 没有拿到数据 reject 正在请求数据 notify -->

dt.resolve(); <!-- 请求成功 -->
dt.reject(); <!-- 请求失败 -->
dt.notify(); <!-- 正在请求 -->

    dt.done(su); <!-- 成功以后执行的回调函数 -->
    dt.fail(er); <!-- 失败以后执行的回调函数 -->
    dt.progress(lo) <!-- 正在请求中执行的回调函数 -->

    function su() {
        console.log('成功了');
    }

    function er() {
        console.log('失败了');
    }

    function lo() {
        console.log('正在请求');
    }

<!-- 注意 同一个请求 只能有一个状态 要么成功 要么失败 要么正在请求 -->
<!-- 模拟请求数据 -->
<!-- 创建一个延迟对象 -->

var dt = $.Deferred();
var timer = function () {
setTimeout(function () {
console.log('状态');
var num = parseInt(Math.random() * 3);
switch (num) {
case 0:
dt.resolve();
console.log(0);
break;
case 1:
dt.reject();
console.log(1);
break;
case 2:
dt.notify();
console.log(2);
}
}, 2000)
}

<!-- 每个状态就相当于一个回调函数对象 可以添加多个函数 达到当前状态 按照顺序执行 -->

    dt.done(su); <!-- 成功以后执行的回调函数   可以绑定多个   按照顺序执行 -->

  <!--   dt
        .done(a)
        .done(b) -->

    dt.fail(er); <!-- 失败以后执行的回调函数 -->
    dt.progress(lo) <!-- 正在请求中执行的回调函数 -->

    function su() {
        console.log('成功了');
    }

    function er() {
        console.log('失败了');
    }

    function lo() {
        console.log('正在请求');
    }
    $('.btn').click(function () {
        timer();

    })

{% endcodeblock %}

#### $.ajax()

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 十二、鼠标及键盘事件

{% blockquote %}
click()/dbclick()/contextmenu()/event.which
mouseenter()/mousemove()/mouseleave()/mouseover()/mouseout()/mousedown()/mouseup()
focus()/blur()/change()
keydown()/keyup()/keypress()
scroll()
{% endblockquote %}

#### 鼠标事件

{% codeblock Demo %}

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

</body>
<script src="./js/jquery-3.3.1.js"></script>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>点击事件clik</font></left>
{% codeblock 单击 %}
<script>
    $('li').click(function () {
        console.log($(this).text());
    })
</script>
{% endcodeblock %}

{% codeblock 双击 %}

<script>
    $('li').dblclick(function () {
        console.log($(this).text());
    })
</script>

{% endcodeblock %}

<left><font color='#007ACC' size='3'>监听鼠标左键 1 滚轮 2 右键按下 3</font></left>

{% codeblock  %}
$(document).mousedown(function (e) {
console.log(e.which);<!-- 左键按下返回 1 滚轮按下返回 2 右键按下返回 3 -->
})
{% endcodeblock %}

<left><font color='#007ACC' size='3'>contextmenu() 取消鼠标右键默认点击事件</font></left>
{% blockquote %}
鼠标右键页面效果
{% endblockquote %}
{% asset_img 28.png%}
{% codeblock  %}
$(document).contextmenu(function () {
return false;
})
{% endcodeblock %}

{% blockquote %}
mouseenter 进入
mouseleave 离开
mouseover 进入 冒泡
mouseout 离开 冒泡
mousedown 按下
mousemove 移动
mouseup 抬起
{% endblockquote %}

<center><font color='#3333' size='3'>offset()</font></center>
<left><font color='#007ACC' size='3'>offset()
offset()  获取容器距离body左边和上边的距离</font></left>
{% codeblock  Demo%}
 <style>
        div {
            position: absolute;
            left: 40px;
            top: 40px;
            width: 100px;
            height: 100px;
            background: gray;
        }
    </style>
</head>

<body>
    544567
    135
    <div>

    </div>

</body>
{% endcodeblock %}
{% codeblock  %}
<script src="./js/jquery-3.3.1.js"></script>
<script>
    console.log($('div').offset());/* {top: 40, left: 40} */
</script>
{% endcodeblock %}

<center><font color='#3333' size='3'>off()</font></center>
<left><font color='#007ACC' size='3'>清除绑定的事件</font></left>
{% codeblock  %}
$(document).mousemove(function (e) {
            $(_this).css({
                left: e.pageX - dis.x,
                top: e.pageY - dis.y
            })
        }).mouseup(function (e) {
            <!-- 清除事件用off  事件之前用空格隔开 -->
            $(this).off('mousemove mouseup')
        })
{% endcodeblock %}

#### 焦点事件

<center><font color='#3333' size='3'>focus()聚焦</font></center>
<left><font color='#007ACC' size='3'>点击input框触发的事件</font></left>
{% codeblock  %}
$('input').focus(function () {
        console.log(1);
    })
{% endcodeblock %}

<center><font color='#3333' size='3'>blur()失焦</font></center>
<left><font color='#007ACC' size='3'>离开input框触发的事件</font></left>
{% codeblock  %}
 $('input').blur(function () {
        console.log(2);
    })
{% endcodeblock %}

<center><font color='#3333' size='3'>change()</font></center>
<left><font color='#007ACC' size='3'>change()

失去焦点的时候 input 框里内容发生改变触发的事件</font></left>
{% codeblock  %}
$('input').change(function () {
console.log('改变');
})
{% endcodeblock %}

#### 键盘事件

<center><font color='#3333' size='3'>keydown() </font></center>
<left><font color='#007ACC' size='3'>键盘按下  文字输入之前触发</font></left>
{% codeblock  %}
 $('input').keydown(function () {
        console.log($(this).val()); <!-- '' -->
    })
{% endcodeblock %}

<center><font color='#3333' size='3'>keyup() </font></center>
<left><font color='#007ACC' size='3'>键盘抬起   抬起意味着已经按下过了  文字已经输入进去了</font></left>
{% codeblock  %}
 $('input').keyup(function () {
        console.log($(this).val());<!-- w -->
    })
{% endcodeblock %}

<center><font color='#3333' size='3'>keypress()</font></center>
<left><font color='#007ACC' size='3'>键盘按下  文字输入之前触发</font></left>
{% codeblock  %}
 $('input').keypress(function () {
        console.log($(this).val()); <!-- '' -->
    })
{% endcodeblock %}
{% blockquote %}
触发顺序   keydown keypress keyup
{% endblockquote %}

<center><font color='#3333' size='3'>keydown和keypress的区别  随便按下键盘上的一个字符  监听一下他们的事件</font></center>
{% codeblock  %}
 $('input').keydown(function (e) {
        console.log(e.which); <!-- 87 键盘的值 -->
    }).keypress(function (e) {
        console.log(e.which); <!-- 119   键盘对应的字符的ASCll码值  大小写返回值不一样 -->
    })
{% endcodeblock %}

#### 鼠标滚轮事件 scroll()

<left><font color='#007ACC' size='3'>监听滚动条的高度</font></left>
{% codeblock Demo %}

  <style>
        .item {
            margin: 0 auto;
            width: 350px;
            height: 350px;
            background: gray;
            color: #fff;
            text-align: center;
            font-size: 50px;
            line-height: 350px;
            margin-top: 10px;
        }
    </style>

<body>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</body>
<script src="./js/jquery-3.3.1.js"></script>
{% endcodeblock %}

{% codeblock  %}

<script>
    $(window).scroll(function () {
        if ($(document).scrollTop() + $(window).height() >= $('body').height()) {
            $('body').append("<div class='item'>" + parseInt($('.item').length + 1) + "</div>")
        }
    })
</script>

{% endcodeblock %}

#### 其他

{% blockquote %}
event.pageX/event.pageY
event.preventDefault/event.stopPropagation
{% endblockquote %}
{% codeblock  %}
e.pageX，e.pageY：返回的值是相对于文档的定位，文档的左上角为(0,0)，向右为正，向下为正，IE 不支持；
e.clientX，e.clientY：返回的值是相对于屏幕可见区域的坐标，如果页面有滚动条，呗滚动条隐藏的那部分不进行计算，也可以说是相对于屏幕的坐标，但是不计算上方的工具栏；
e.screenX，e.screenY：返回的是相对于屏幕的坐标，浏览器上面的工具栏；
e.offsetX，e.offsetY：返回的是相对于文档的坐标，和 e.pageX，e.pageY 作用相同，但是只有 IE 支持。
$(window).scrollTop()：返回的是浏览器右边的滚动条滚动的距离
所以：e.pageY=e.pageY||e.clientY+$(window).scrollTop(); //兼容性的写法
{% endcodeblock %}

{% blockquote %}
e.preventDefault 阻止默认事件
e.stopPropagation 阻止事件冒泡
{% endblockquote %}

## 十三、jQuery 使用注意事项

<center><font color='#3333' size='3'>在使用addClass()  removeClass()  hasClass()  里面只需要传入类名  不需要加.</font></center>
{% codeblock  %}
$(this).hasClass('left')
$('.left').addClass('min')
$('.min').removeClass('min')
{% endcodeblock %}
<center><font color='#3333' size='3'>input事件  实时监听文本输入框的变化  从聚焦时开始触发</font></center>
{% codeblock  %}
 $('input').on('input', function () {
        console.log($(this).val());
    })
{% endcodeblock %}

<center><font color='#3333' size='3'>使用on绑定事件委托的时候</font></center>
{% codeblock  %}
  $('.item').on('click', 'span', function () {
      //这里的this指向的是span
        if ($(this).hasClass('up')) {
            $(this).removeClass('up')
        } else {
            $(this).addClass('up')
        }
    })
{% endcodeblock %}

<center><font color='#3333' size='3'>链式调用的推荐写法  在.的时候另起一行   方便阅读</font></center>
{% codeblock  %}
 $('div').click(function () {
        $(this)
            .animate({
                left: 500,
                top: 500
            }, 3000, 'easeInOutBounce', function () {
                console.log('执行结束1');
            })
            .animate({
                left: 200,
                top: 300
            }, 3000, 'easeOutBounce', function () {
                console.log('执行结束2');
            })
    })
{% endcodeblock %}
