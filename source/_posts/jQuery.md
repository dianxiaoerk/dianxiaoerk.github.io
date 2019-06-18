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
console.log(\$('.box').attr('class')); <!-- box -->

<!-- 相当于 -->

console.log(a.getAttribute('class'));

<!-- 设置属性 -->

\$('.box').attr('id', 'zz') <!-- 相当于 a.setAttribute('id', 'zz') -->

<!-- 删除属性 -->

\$('.box').removeAttr('id')<!-- 相当于 a.removeAttribute('id'); -->

<!-- 传入的参数可以是一个对象 -->

\$('.box').attr({
id: 'he',
df: 'dd'
})
{% endcodeblock %}

<center><font color='#3333' size='3'>prop()</font></center>
{% blockquote %}
获取dom标签的属性   只能获取固有属性（特性）：id class
{% endblockquote %}

{% codeblock %}
console.log(\$('.box').prop('class')); <!-- box -->

<!-- 相当于 -->

console.log(a.className);

<!-- 设置属性 -->

\$('.box').prop('id', 'kk') <!-- 相当于 a.id = 'kk' -->

<!-- 删除属性  prop只能删除自己添加的非固有属性   删除固有属性删除不掉 -->

$('.box').prop('df', 'dd')
$('.box').removeProp('df');
console.log(\$('.box').prop('df'));
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

console.log(\$('.box').css(['width', 'height']));<!-- {width: "500px", height: "500px"} -->
{% endcodeblock %}

<center><font color='#3333' size='3'>css属性设置  css(string,value) | css({})</font></center>
{% codeblock  %}
$('.box').css('border', '1px solid red');<!-- 前面属性名  后面属性值 -->
<!-- 当你添加的属性有数值的时候  有三种写法 -->
$('.box').css('width', '200px')
$('.box').css('width', '300')
$('.box').css('width', 100)

<!-- 设置多个属性 -->

\$('.box').css({
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
console.log(\$('.one').position()); <!-- {top: 79, left: 71}  100-body默认margin-left 8像素-最近父级的border-最近父级的margin -->
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
console.log(\$('li:odd').text()); <!-- 2468 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>even 索引值为偶数的筛选出来</font></left>
{% codeblock  %}
console.log(\$('li:even').text()); <!-- 1357 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>eq()具体选择的索引值</font></left>
{% codeblock  %}
console.log(\$('li:eq(3)').text()); <!-- 4 -->

<!-- 可以写在外面 -->

\$('li').eq('1') <!-- 可传字符串    整数  负数 -->
{% endcodeblock %}

<center><font color='#3333' size='3'>prev / prev /All / next / nextAll / sibllings</font></center>
<left><font color='#007ACC' size='3'>prev找寻选中元素的上面的一个兄弟元素   next相反  同时可进行筛选</font></left>
{% codeblock  %}
console.log($('li:eq(4)').prev().text()); <!-- 4 -->
<!-- prev里面传入的值代表筛选条件 -->
console.log($('li:eq(4)').prev('p').text()); <!--  ' '   找寻索引为4的上面一个p标签（紧挨着）  不存在  返回空 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>prevAll 找寻选中元素的上面的所有兄弟元素 nextAll 相反</font></left>
{% codeblock  %}
console.log(\$('li:eq(4)').prevAll('p').text()); <!-- 4321  找寻索引为4的上面所有兄弟元素是否包含p标签 -->

<!-- 如果不设置基准条件   会默认把最后一个做基准条件    next相反  他会把第一个做基准条件 -->

console.log(\$('li').prevAll().text()); <!-- 7654321 -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>sibllings 元素的所有兄弟元素</font></left>
{% codeblock  %}
console.log(\$('li:eq(4)').siblings().text()); <!-- 1234678 -->
{% endcodeblock %}

<center><font color='#3333' size='3'>filter / not / is / slice / map / hs / each</font></center>
<left><font color='#007ACC' size='3'>filter() 筛选  可以传入一个函数</font></left>
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
console.log(\$('li').is(':eq(10)'));<!-- false -->
{% endcodeblock %}

<left><font color='#007ACC' size='3'>slice()截取筛选</font></left>
{% codeblock  %}
console.log(\$('li').slice(0, 4).text()); <!-- 1234   取头不取尾 -->
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
<left><font color='#007ACC' size='3'>map()不仅遍历 而且把  里面传入的是函数  返回的是一个新数组（满足条件的）</font></left>
{% codeblock  %}
console.log($('li').map(function (index, ele) { <!-- index 索引值   ele标签元素 -->
        if ($(this).find('.age').text() > 20) {
            return this
        }
    }));
{% endcodeblock %}

{% asset_img 5.png %}

<left><font color='#007ACC' size='3'>has() 找寻符合指定条件的元素</font></left>
{% codeblock  %}
console.log(\$('li').has('p').text()); <!-- 222     1111 -->
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

<left><font color='#007ACC' size='3'>find(child)查找当前元素包含的子元素</font></left>
{% codeblock  %}
console.log(\$('div').find('.age'));

<!-- 注意  链式操作  查询完以后jq会把查询元素的元素给储存下来  可以通过prevObject返回开始查询元素的元素 -->

console.log(\$('div').find('.age').prevObject.find('.name'));
{% endcodeblock %}
{% asset_img 6.png %}
<left><font color='#007ACC' size='3'>children(selector) 找寻当前元素下的后代元素</font></left>
{% codeblock  %}
console.log(\$('li').children());
{% endcodeblock %}

{% asset_img 7.png %}

<left><font color='#007ACC' size='3'>end() 返回查询元素的元素 回退</font></left>
{% codeblock  %}
console.log(\$('div').find('.age').prevObject.find('.name'));

<!-- 其中prevObject可以用end()替换 -->

console.log(\$('div').find('.age').end().find('.name'));
{% endcodeblock %}

<left><font color='#007ACC' size='3'>add(selector | element | jquery object | html) 添加</font></left>
{% codeblock  %}
$('span:first').css('color', 'red')
$('span:last').css('color', 'red')

<!-- 可以写成 -->

\$('span:first').add('span:last').css('color', 'red')
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
console.log(\$('span').parent('div'));
{% endcodeblock %}

{% asset_img 9.png %}

<left><font color='#007ACC' size='3'>parents(selector)寻找当前元素的所有祖先元素</font></left>
{% codeblock  %}
console.log(\$('span').parents());
{% endcodeblock %}

{% asset_img 10.png %}

{% codeblock  %}
console.log(\$('span').parents('p'));<!-- 传入条件代表找寻指定的父级元素 -->
{% endcodeblock %}

{% asset_img 11.png %}
<left><font color='#007ACC' size='3'>closest(selector | jQuery Object | element) 寻找离当前元素最近的 selector 元素 向外找 包括自身</font></left>
{% codeblock  %}
console.log(\$('p').closest('li'));
{% endcodeblock %}

{% asset_img 12.png %}
<left><font color='#007ACC' size='3'>offsetParent() 找寻离当前元素最近的有定位的父级</font></left>
{% codeblock  %}
console.log(\$('p').offsetParent());<!-- 父级都没有定位找到了html -->
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

<left><font color='#007ACC' size='3'>before() 在一个元素前面插入一个元素 after()相反 谁在前面结果执行完返回谁 兄弟元素</font></left>
{% codeblock  %}
$('li').before($('h2'));

<!-- 还可以传入原生 dom -->

$('li').before($(document.getElementsByTagName('h2')));

<!-- 还可以传入函数 -->

\$('p').before(function (index, value) { <!-- index代表索引  value代表标签内容 -->
console.log(index); <!-- 0 1 -->
console.log(value); <!-- 1 o2 -->
});

<!-- 还可以添加新的dom元素 -->

\$('p').before('<span>3333</span>');
{% endcodeblock %}

<left><font color='#007ACC' size='3'>insertBefore() 把一个元素插入一个元素前面 insertAfter()相反 谁在前面结果执行完返回谁 兄弟元素</font></left>
{% codeblock  %}
$('p').insertBefore($('li'));
{% endcodeblock %}

<left><font color='#007ACC' size='3'>append()在一个元素中最后一位插入一个元素 prepend()相反 插入到第一位 谁在前面结果执行完返回谁 父子元素</font></left>
{% codeblock  %}
$('ul').append($('<p>111</p>'));
{% endcodeblock %}

<left><font color='#007ACC' size='3'>appendto() 把一个元素插入到一个元素的最后一位 prependTo()相反 插入到第一位 谁在前面结果执行完返回谁 父子元素</font></left>
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
<left><font color='#007ACC' size='3'>remove()  删除当前元素 只返回删除的对象</font></left>
{% codeblock  %}
xxx
{% endcodeblock %}

## 六、xx

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 七、xx

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 八、xx

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 九、xx

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}

## 十、xx

<center><font color='#3333' size='3'>xxx</font></center>
<left><font color='#007ACC' size='3'>xx</font></left>
{% blockquote %}
普通话语
{% endblockquote %}

{% codeblock  %}
xxx
{% endcodeblock %}

{% asset_img %}
