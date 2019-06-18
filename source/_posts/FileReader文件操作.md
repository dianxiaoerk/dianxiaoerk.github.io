---
title: FileReader文件操作
copyright: true
tags:
  - - html
  - - html5
  - - 功能元素
categories:
  - - html
    - html5
date: 2019-06-18 13:02:41
---

# 简介

##### &emsp;input 框上传文件的操作。

## 一、文件上传

{% codeblock  %}
<input type="file" multiple> <!-- multiple代表上传多个文件 如果只想上传一个文件请把multiple属性去掉-->
<input type="button" value="上传">

<!-- 注意：
  1、  这里只是把文件放到到浏览器当中了，并没有传到服务器。
  2、要传到服务器的话需要在提交的时候把文件的信息进行读取然后转化为二进制或base64码以后，才能进行网络请求上传到服务器
 -->

{% endcodeblock %}
<left><font color='#007ACC' size='3'>读取文件信息属性</font></left>
{% codeblock  %}
fileList:表示用户选择的文件列表
file:表示 file 控件内的每一个被选择的文件对象。fileList 为这些 file 对象的列表。
{% endcodeblock %}

<center><font color='#3333' size='3'>Demo</font></center>
{% codeblock  %}
<body>
    <input type="file" multiple id="file">
    <input type="button" value="上传" id="btn">
</body>
<script>
    var file = document.getElementById('file');
    var btn = document.getElementById('btn')
    btn.onclick = function () {
        var a = file.files;/* files获取文件信息已数组的形式表现出来 */
        console.log(a);/* 得到了一个文件信息的数组 FileList {0: File(11378851), 1: File(4342), length: 2} */
    }
</script>
{% endcodeblock %}

{% asset_img 1.png %}

<center><font color='#007ACC' size='3'>上传文件类型限制</font></center>
{% codeblock  %}
<body>
    <input type="file" multiple id="file">
    <input type="button" value="上传" id="btn">
</body>
<script>
    var file = document.getElementById('file');
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        var a = file.files;
        /* 也可以只看其中一个 */
        /* console.log(a[0]); */
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].type == 'image/png') { /* 只上传图片文件 */
                /* 执行上传代码 */
                alert(a[i].name + '上传成功')
            }
        }
    }
</script>
{% endcodeblock %}

## 二、fileReader 对象

{% blockquote %}
负责把文件读入内存，并且读取文件中的数据。
{% endblockquote %}

<center><font color='#3333' size='3'>读取并显示文件</font></center>
{% codeblock  %}
readAsText() 将文件中的数据读取为文本数据
readAsBinaryString() 讲文件中的数据读取为二进制字符串
readAsDataURL() 读取为 DataURL 字符串
readAsArrayBuffer() 读取为一个 ArrayBuffer 对象
abort() 中断读取操作
{% endcodeblock %}
<center><font color='#3333' size='3'>检测读取事件</font></center>
{% codeblock  %}
onabort 数据读取中断时触发
onprogress 数据读取中触发
onerror 数据读取出错时触发
onload 数据读取完成时触发
onloadstart 数据开始读取时触发
onloadend 数据读取完成时触发，无论成功还是失败。
{% endcodeblock %}

<center><font color='#3333' size='3'>文本格式读取操作</font></center>
{% codeblock  %}
<body>
    <input type="file" multiple id="file">
    <input type="button" value="上传" id="btn">
</body>
<script>
    var file = document.getElementById('file');
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        var a = file.files;
        console.log(a);
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].type == 'text/plain') { /* 当提交的文件格式是文本的时候 */
                /* 对文件进行读取用到了fileReader对象 所以首先我们要创建对象 */
                var b = new FileReader();
                /* 对当前文件进行文本方式的读取 */
                b.readAsText(a[i]);
                /* 当读取完成时 */
                b.onload = function () {
                    /* 打印出读取结果 */
                    console.log(b.result);
                    /* 上传 */
                }

            }
        }
    }

</script>
{% endcodeblock %}

<center><font color='#3333' size='3'>图片格式读取操作</font></center>
{% codeblock  %}
<body>
    <input type="file" multiple id="file">
    <input type="button" value="上传" id="btn">
</body>
<script>
    var file = document.getElementById('file');
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        var a = file.files;
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].type == 'image/png/jpg' || 'image/jpeg') { /* 当前文件为图片文件的时候 */
                /* 创建一个fileReader对象  用它的方法对文件进行读取 */
                var b = new FileReader();
                /* 将图片读取为Dataurl字符串 */
                b.readAsDataURL(a[i]);
                /* 读取完成时 */
                b.onload = function () {
                    /* 创建一个img对象 */
                    var c = new Image();
                    /* 将它的src赋值为读取的结果 */
                    c.src = b.result;
                    /* 将图片插入到body中 */
                    document.body.appendChild(c)
                }
            }
        }
    }
</script>
{% endcodeblock %}

## 三、Blob 对象

{% blockquote %}
file 继承的是 blob 对象，所以它身上有一些 blob 对象的属性：size、type 及方法 slice 截取。
{% endblockquote %}

<center><font color='#3333' size='3'>使用</font></center>
{% codeblock  %}
 var file = document.getElementById('file');
    var btn = document.getElementById('btn');
    <!-- 创建一个blob对象 -->
    var a = new Blob(['dfdsfsdf']);
    <!-- 创建fileReader对象对blob对象进行读取 -->
    var b = new FileReader();
    <!-- 对blob对象进行文本方式读取 -->
    b.readAsText(a);
    <!-- 读取完成后 -->
    b.onload = function () {
        <!-- 打印对blob对象读取的结果 -->
        console.log(b.result);
    }
{% endcodeblock %}
