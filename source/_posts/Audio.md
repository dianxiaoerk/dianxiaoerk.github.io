---
title: Audio
copyright: true
tags:
  - html
  - html5
  - 功能元素
categories:
  - - html
    - html5
date: 2019-06-18 09:35:36
---

# 前言

##### &emsp;主要总结一下 audio 标签的 api 方便以后查看。

## 一、创建方式

<center><font color='#3333' size='3'>标签</font></center>
{% codeblock  %}
 <audio src=""></audio>
{% endcodeblock %}
<left><font color='#007ACC' size='3'>js动态创建</font></left>
{% codeblock  %}
var body = document.getElementsByTagName('body')[0];
    var audio = new Audio('资源路径');
    audio.controls = true;
    body.appendChild(audio)
{% endcodeblock %}
<left><font color='red' size='3'>或者</font></left>
{% codeblock  %}
 var body = document.getElementsByTagName('body')[0];
    var audio = document.createElement('audio');
    audio.controls = true;
    body.appendChild(audio)
{% endcodeblock %}
<center><font color='#3333' size='3'>获取body的两种方式</font></center>
{% codeblock 一 %}
 var body = document.getElementsByTagName('body')[0];
{% endcodeblock %}
{% codeblock 二 %}
 var body = document.getElementsByTagName('body')[0];
{% endcodeblock %}

## 二、获取浏览器支持资源的情况

{% codeblock  %}
var music = document.getElementById('music');
if (music.canPlayType) {
if (music.canPlayType('audio/mpeg') != '') {
document.write('您的浏览器支持 mp3 编码;')
}
if (music.canPlayType('audio/mpeg;codecs="vorbis"') != '') {
document.write('您的浏览器支持 ogg 编码;')
}
if (music.canPlayType('audio/mp4;codecs="mp4a.40.5"') != '') {
document.write('您的浏览器支持 aac 编码;')
}
} else {
document.write('您的浏览器不支持要检测的音频文件')
}
{% endcodeblock %}

## 三、属性

<left><font color='#007ACC' size='3'>标签属性</font></left>
{% codeblock  %}
autoplay 是否自动播放 true false
controls 是否使用控制台 true false
loop 是否循环播放 true false
默认 true
{% endcodeblock %}
<left><font color='#007ACC' size='3'>预加载</font></left>
{% codeblock  %}
pleload(none/metadata/auto)
none 不进行预加载
metadata 部分预加载
auto 全部预加载
{% endcodeblock %}
<left><font color='#007ACC' size='3'>返回资源链接</font></left>
{% codeblock  %}
currentSrc 注意要资源加载完成才能获取到
{% endcodeblock %}
<left><font color='#007ACC' size='3'>媒体持续时间</font></left>
{% codeblock  %}
duration 总时长 资源加载完成才能获取到
currentTime 获取或设置资源当前时间
在下列事件中获取
audio.oncanPlay = function(){

}
{% endcodeblock %}
<left><font color='#007ACC' size='3'>音量</font></left>
{% codeblock  %}
volume 获取或设置当前音量
muted 静音
{% endcodeblock %}
<left><font color='#007ACC' size='3'>速率</font></left>
{% codeblock  %}
playbackRate 读取或设置媒体资源播放的当前速率(大于 1 快放，大于 0 小于 1 慢放，无倒放)
{% endcodeblock %}
<left><font color='#007ACC' size='3'>查询媒体播放状态</font></left>
{% codeblock  %}
paused 是否暂停
ended 是否结束
seeking 正在请求某一播放位置的媒体数据
{% endcodeblock %}
<left><font color='#007ACC' size='3'>TimeRanges 对象</font></left>
{% codeblock  %}
timeRanges 对象的 length 属性为部分时间段，end(i)返回已播放时间段的结束时间，start(i)返回已播放时间段的开始时间
played 标明媒体资源在浏览器中已播放的时间范围
buffered 确定浏览器已经缓存媒体文件
seekable 标明可以对当前媒体资源进行请求
{% endcodeblock %}

## 四、方法

<left><font color='#007ACC' size='3'>播放</font></left>
{% codeblock  %}
play()
{% endcodeblock %}
<left><font color='#007ACC' size='3'>暂停</font></left>
{% codeblock  %}
pause()
{% endcodeblock %}
<left><font color='#007ACC' size='3'>重置媒体元素并重新载入媒体，可中止正在进行的任务或事件</font></left>
{% codeblock  %}
load()
{% endcodeblock %}

## 五、事件

<left><font color='#007ACC' size='3'>媒体播放开始时触发</font></left>
{% codeblock  %}
play
{% endcodeblock %}
<left><font color='#007ACC' size='3'>媒体播放暂停时触发</font></left>
{% codeblock  %}
pause
{% endcodeblock %}
<left><font color='#007ACC' size='3'>资源播放结束时触发</font></left>
{% codeblock  %}
ended
{% endcodeblock %}
<left><font color='#007ACC' size='3'>浏览器能够开始播放媒体数据，但是不确定已当前的速率能否顺利的播放完媒体</font></left>
{% codeblock  %}
canplay
{% endcodeblock %}
